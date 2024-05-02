import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserData } from 'store/operations';
import { setUser } from 'store/slice';

import UserProfile from '../UserProfileModal';

import { CreateNewBAPModal } from './CreateNewBAPModal';
import { InviteLinkModal } from './InviteLinkModal';
import { JoinToBAPModal } from './JoinToBAPModal';

const FirstVisit = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user.user);
	const [openModals, setOpenModals] = useState([{ name: 'createProfile' }]);

	useEffect(() => {
		if (openModals.length === 0) {
			if (user.lastName) {
				dispatch(saveUserData({ isNew: false }));
			} else {
				dispatch(setUser({ ...user, isNew: false }));
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [openModals, dispatch]);

	const closeModal = modalName => {
		setOpenModals(prevState => prevState.filter(modal => modal.name !== modalName));
	};

	const openModal = modalName => {
		setOpenModals(prevState => [...prevState, { name: modalName }]);
	};

	const goBack = () => {
		setOpenModals(prevState => prevState.slice(0, -1));
	};

	return (
		<>
			{openModals.map(modal => {
				switch (modal.name) {
					case 'createProfile':
						return (
							<UserProfile
								key={modal.name}
								closeModal={() => closeModal('createProfile')}
								goToNextModal={() => openModal('joinToBap')}
								firstVisit={true}
							/>
						);
					case 'joinToBap':
						return (
							<JoinToBAPModal
								key={modal.name}
								closeModal={() => closeModal('joinToBap')}
								goBack={goBack}
								setCurrentModal={openModal}
								firstVisit={true}
							/>
						);
					case 'createBap':
						return (
							<CreateNewBAPModal
								key={modal.name}
								closeModal={() => closeModal('createBap')}
								goBack={goBack}
								setCurrentModal={openModal}
								firstVisit={true}
							/>
						);
					case 'inviteLink':
						return (
							<InviteLinkModal
								key={modal.name}
								closeModal={() => closeModal('inviteLink')}
								goBack={goBack}
								setCurrentModal={openModal}
								firstVisit={true}
							/>
						);
					default:
						return null;
				}
			})}
		</>
	);
};

export default FirstVisit;
