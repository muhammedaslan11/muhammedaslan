import PocketBase from 'pocketbase';

export const db = new PocketBase('https://aslan.pockethost.io');

export const baseUrl = `${db.baseURL}/`;