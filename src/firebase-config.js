import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDqcd7UQp3YJKtJmQmQo_EJ9B8fw8OKq0Q',
	authDomain: 'major-labl-5f66e.firebaseapp.com',
	projectId: 'major-labl-5f66e',
	storageBucket: 'major-labl-5f66e.appspot.com',
	messagingSenderId: '388315537513',
	appId: '1:388315537513:web:8ea23fd8fd801732d382f8',
};

const firebaseApp = initializeApp(firebaseConfig);

export const authentication = getAuth(firebaseApp);
