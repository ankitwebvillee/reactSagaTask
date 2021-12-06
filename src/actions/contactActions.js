import { contactApi } from './actionType';

export const contactAction = (payload) => {
	return {
		type: contactApi.CONTACT_INITIATED,
		payload,
	};
};
