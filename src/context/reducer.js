const reducer = (state, action) => {
    switch (action.type) {
        case 'OPEN_LOGIN':
            return { ...state, openLogin: true };

        case 'CLOSE_LOGIN':
            return { ...state, openLogin: false };

            case 'STRAT_LOADING':
                return { ...state, loading: true };
    
            case 'END_LOADING':
                return { ...state, loading: false };

        case 'UPDATE_ALERT':
            // Ensure action.payload is defined
            return { ...state, alert: action.payload || '' };

        case 'UPDATE_USER':
            // Ensure action.payload is defined
            return { ...state, currentUser: action.payload || null };

        default:
            // Log the action type for debugging
            console.warn(`No matched action type: ${action.type}`);
            return state; // Return state unchanged instead of throwing an error
    }
};

export default reducer;
