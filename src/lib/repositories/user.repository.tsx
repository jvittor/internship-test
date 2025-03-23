// src/repositories/UserRepository.ts

import Cookie from 'js-cookie';
import { openDB } from '@/lib/services/user-storage';

export class UserRepository {
  static async saveUserData(userData: {
    name: string;
    email: string;
    token: string;
  }) {
    const db = await openDB();
    const transaction = db.transaction('user_data', 'readwrite');
    const objectStore = transaction.objectStore('user_data');
    const addRequest = objectStore.add(userData);

    return new Promise<void>((resolve, reject) => {
      addRequest.onsuccess = () => resolve();
      addRequest.onerror = () =>
        reject(new Error('Erro ao salvar dados no IndexedDB.'));
    });
  }

  static setAuthToken(token: string) {
    Cookie.set('authToken', token, { expires: 7 });
  }

  static getAuthToken() {
    return Cookie.get('authToken');
  }
}
