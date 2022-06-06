export function reducer(state, action) {
	switch(action.type) {
		case "UPDATE_TECH":
			return {
				...state,
				tech: action.tech
			};
		default:
			return state;
	}
}
