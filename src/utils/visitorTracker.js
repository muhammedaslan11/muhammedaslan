import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

/**
 * IP ve konum bilgilerini çeker (CORS-friendly API'ler)
 */
async function getIpData() {
  try {
    // ip-api.com - CORS destekli, ücretsiz
    const response = await fetch(
      "http://ip-api.com/json/?fields=status,message,query,city,regionName,country,countryCode,lat,lon,isp,timezone,zip",
    );
    if (!response.ok) throw new Error("IP API error");
    const data = await response.json();
    if (data.status === "fail") throw new Error(data.message);
    return {
      ip: data.query || "Bilinmiyor",
      city: data.city || "Bilinmiyor",
      region: data.regionName || "Bilinmiyor",
      country: data.country || "Bilinmiyor",
      countryCode: data.countryCode || "Bilinmiyor",
      latitude: data.lat || null,
      longitude: data.lon || null,
      isp: data.isp || "Bilinmiyor",
      timezone: data.timezone || "Bilinmiyor",
      postalCode: data.zip || "Bilinmiyor",
    };
  } catch (error) {
    console.warn("IP bilgisi alınamadı:", error);
    return {
      ip: "Alınamadı",
      city: "Alınamadı",
      region: "Alınamadı",
      country: "Alınamadı",
      countryCode: "Alınamadı",
      latitude: null,
      longitude: null,
      isp: "Alınamadı",
      timezone: "Alınamadı",
      postalCode: "Alınamadı",
    };
  }
}

/**
 * Batarya bilgisini çeker (destekleyen tarayıcılarda)
 */
async function getBatteryInfo() {
  try {
    if (navigator.getBattery) {
      const battery = await navigator.getBattery();
      return {
        level: Math.round(battery.level * 100) + "%",
        charging: battery.charging,
      };
    }
    return { level: "Desteklenmiyor", charging: null };
  } catch {
    return { level: "Alınamadı", charging: null };
  }
}

/**
 * Bağlantı bilgisini çeker
 */
function getConnectionInfo() {
  const conn =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;
  if (conn) {
    return {
      type: conn.effectiveType || "Bilinmiyor",
      downlink: conn.downlink ? conn.downlink + " Mbps" : "Bilinmiyor",
      rtt: conn.rtt ? conn.rtt + " ms" : "Bilinmiyor",
      saveData: conn.saveData || false,
    };
  }
  return { type: "Desteklenmiyor", downlink: null, rtt: null, saveData: null };
}

/**
 * Tarayıcı adını user agent'tan tespit eder
 */
function detectBrowser(ua) {
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("SamsungBrowser")) return "Samsung Browser";
  if (ua.includes("Opera") || ua.includes("OPR")) return "Opera";
  if (ua.includes("Trident")) return "Internet Explorer";
  if (ua.includes("Edg")) return "Microsoft Edge";
  if (ua.includes("Chrome")) return "Google Chrome";
  if (ua.includes("Safari")) return "Safari";
  return "Bilinmiyor";
}

/**
 * İşletim sistemini tespit eder
 */
function detectOS(ua) {
  if (ua.includes("Windows NT 10.0")) return "Windows 10/11";
  if (ua.includes("Windows")) return "Windows";
  if (ua.includes("Mac OS X")) return "macOS";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("iPhone") || ua.includes("iPad")) return "iOS";
  if (ua.includes("Linux")) return "Linux";
  return "Bilinmiyor";
}

/**
 * Tüm ziyaretçi bilgilerini toplar
 */
async function collectVisitorData() {
  const ua = navigator.userAgent;
  const [ipData, batteryInfo] = await Promise.all([
    getIpData(),
    getBatteryInfo(),
  ]);
  const connectionInfo = getConnectionInfo();

  return {
    // --- IP & Konum ---
    ...ipData,

    // --- Cihaz & Tarayıcı ---
    userAgent: ua,
    browser: detectBrowser(ua),
    os: detectOS(ua),
    platform: navigator.platform || "Bilinmiyor",
    language: navigator.language || "Bilinmiyor",
    languages: navigator.languages ? [...navigator.languages] : [],
    cookiesEnabled: navigator.cookieEnabled,
    doNotTrack: navigator.doNotTrack || "Bilinmiyor",
    touchSupport: navigator.maxTouchPoints > 0,
    maxTouchPoints: navigator.maxTouchPoints || 0,
    hardwareConcurrency: navigator.hardwareConcurrency || "Bilinmiyor",
    deviceMemory: navigator.deviceMemory
      ? navigator.deviceMemory + " GB"
      : "Bilinmiyor",
    vendor: navigator.vendor || "Bilinmiyor",

    // --- Ekran ---
    screenWidth: screen.width,
    screenHeight: screen.height,
    screenColorDepth: screen.colorDepth,
    screenPixelDepth: screen.pixelDepth,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio || 1,

    // --- Bağlantı ---
    connection: connectionInfo,

    // --- Batarya ---
    battery: batteryInfo,

    // --- Sayfa Bilgileri ---
    pageUrl: window.location.href,
    referrer: document.referrer || "Direkt giriş",
    pageTitle: document.title,

    // --- Zaman ---
    localTime: new Date().toLocaleString("tr-TR"),
    timezoneOffset: new Date().getTimezoneOffset(),
    visitedAt: serverTimestamp(),
  };
}

/**
 * Ziyaretçi bilgilerini topluyup Firestore'a kaydeder.
 * Aynı oturumda tekrar kayıt yapılmasını engeller.
 */
export async function trackVisitor() {
  // Aynı oturumda çift kayıt engelle
  if (sessionStorage.getItem("visitor_tracked")) {
    console.log("Ziyaretçi zaten kaydedildi (bu oturum).");
    return;
  }

  try {
    const visitorData = await collectVisitorData();
    const docRef = await addDoc(collection(db, "visitors"), visitorData);
    console.log("Ziyaretçi kaydedildi. ID:", docRef.id);
    sessionStorage.setItem("visitor_tracked", "true");
  } catch (error) {
    console.error("Ziyaretçi kaydedilemedi:", error);
  }
}
