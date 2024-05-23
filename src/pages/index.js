import { onAuthStateChanged } from 'firebase/auth';
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import AuthSection from '@/components/Auth/AuthSection/AuthSection';
import AuthLayout from '@/components/Layouts/AuthLayout';

import { auth } from '../firebaseClient';

const AuthPage = () => {
	const { inviteToken } = useSelector(state => state.auth);
	const [isSignIn, setIsSignIn] = useState(!inviteToken);

	useEffect(() => {
		console.log('Setting up Firebase auth state listener...');
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				console.log('User is signed in:', user);
			} else {
				console.log('No user is signed in.');
			}
		});

		return () => {
			console.log('Cleaning up Firebase auth state listener...');
			unsubscribe();
		};
	}, []);

	return (
		<AuthLayout
			title={isSignIn ? 'Sign in' : 'Sign up'}
			description='Major Labl Artist Club - a place for creativity and inspiration. Discover the most talented artists and unique artworks. Join us and explore the world of art.'
		>
			<AuthSection isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
		</AuthLayout>
	);
};

export default AuthPage;

export async function getServerSideProps({ req }) {
	const session = await getSession({ req });
	return {
		props: { session },
	};
}
