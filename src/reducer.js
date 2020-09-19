export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after finishing developing
    token: "BQASCLvHMjUc5uLKqf32W1bR-Q-p1vxr2NknxN_Gwd2VXfEWxgukO4JjRTShQT_CaLhfL-io_KKcuZ3tOObvy30cU-5FrmnuJ8mZXMgP1tC7S_LAqpQ2ReWJP-ncjfci15BwprPhDA7NRdVUpLjqlG2oQk5RUeP0440ynLZRzhANTFFI"
    ,
}

const reducer = (state, action) => {

    console.log(action)

    switch(action.type){
        case 'SET_USER' :
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
                };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        default: 
            return state;
    }
}

export default reducer;