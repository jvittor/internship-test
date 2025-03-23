/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookie from 'js-cookie';

export const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !('indexedDB' in window)) {
      reject('IndexedDB não está disponível no ambiente server-side.');
      return;
    }

    const request = indexedDB.open('myApp', 3);

    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      console.log('Atualizando o banco de dados para a versão 3');
      if (!db.objectStoreNames.contains('user_data')) {
        db.createObjectStore('user_data', { autoIncrement: true });
        console.log('ObjectStore "user_data" criado');
      }
    };

    request.onsuccess = (event: any) => {
      resolve(event.target.result);
    };

    request.onerror = (event: any) => {
      reject(`Erro ao abrir o banco de dados: ${event.target.error}`);
    };
  });
};

export const saveUserData = async (value: any): Promise<void> => {
  try {
    const db = await openDB();
    const transaction = db.transaction('user_data', 'readwrite');
    const objectStore = transaction.objectStore('user_data');

    const dataToSave = { ...value, loginDate: new Date().toISOString() };
    objectStore.add(dataToSave);

    transaction.oncomplete = () => {
      console.log('Dados do usuário salvos com sucesso!');
    };
    transaction.onerror = () => {
      console.error('Erro ao salvar dados do usuário');
    };
  } catch (error) {
    console.error('Erro ao salvar dados no IndexedDB:', error);
  }
};

export const getUserData = async (): Promise<any> => {
  try {
    const db = await openDB();
    const transaction = db.transaction('user_data', 'readonly');
    const objectStore = transaction.objectStore('user_data');
    const request = objectStore.getAll();

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        const data = request.result ?? [];
        console.log('Todos os dados do usuário recuperados:', data);
        resolve(data.length > 0 ? data[data.length - 1] : null);
      };

      request.onerror = () => {
        console.error('Erro ao recuperar dados do usuário');
        reject('Erro ao recuperar dados');
      };
    });
  } catch (error) {
    console.error('Erro ao acessar o IndexedDB:', error);
    throw error;
  }
};

export const removeUserData = async (key: number): Promise<void> => {
  try {
    const db = await openDB();
    const transaction = db.transaction('user_data', 'readwrite');
    const objectStore = transaction.objectStore('user_data');
    objectStore.delete(key);

    transaction.oncomplete = () => {
      console.log('Dados do usuário removidos com sucesso!');
    };

    transaction.onerror = () => {
      console.error('Erro ao remover dados do usuário');
    };
  } catch (error) {
    console.error('Erro ao acessar o IndexedDB:', error);
  }
};

export const logout = async (): Promise<void> => {
  try {
    const db = await openDB();
    const transaction = db.transaction('user_data', 'readwrite');
    const objectStore = transaction.objectStore('user_data');

    objectStore.clear();
    Cookie.remove('authToken');

    transaction.oncomplete = () => {
      console.log('Todos os dados do usuário foram removidos com sucesso!');
      if (typeof window !== 'undefined') {
        window.location.href = '/';
      }
    };

    transaction.onerror = () => {
      console.error('Erro ao remover todos os dados do usuário');
    };
  } catch (error) {
    console.error('Erro ao realizar logout:', error);
  }
};
