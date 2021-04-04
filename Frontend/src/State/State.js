import axios from 'axios';
import React, {
    useEffect,
    createContext,
    useReducer
} from 'react';


//Action Types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const CLEAR_SUCCESS = "CLEAR_SUCCESS";
export const LOADING = "LOADING";
export const LOADED = "LOADED";
export const DELETE_USER = "DELETE_USER";
export const DELETE_MESSAGES = "DELETE_MESSAGES";
export const SEND_MAIL = "SEND_MAIL";
export const SET_SCREEN_SIZE = "SET_SCREEN_SIZE"

//Actions dispatchers

export const deleteUser = () => {
    return {
        type: DELETE_USER
    }
}

export const load = (type) => {
    return {
        type: type
    }
}

export const LoginUser = (data, config) => {
    return axios.post('/api/login', data, config).then(res => {
        return {
            type: LOGIN,
            data: res.data,
            messages: "Logged In Successfully"
        }
    }).catch(err => {
        return {
            type: ADD_ERROR,
            data: err.response.data,
            status: err.response.status,
        }
    })
}

export const LogOut = (data, config) => {
    return axios.post('/api/logout', null, config).then(res => {

        return {
            type: LOGOUT,
            messages: "Logged Out"
        }
    }).catch(err => {
        return {
            type: ADD_ERROR,
            data: err.response.data,
            status: err.response.status
        }

    })
}

export const sendMail = (data, config) => {
    return axios.post('/api/ContactUS', data, config).then(res => {

        return {
            type: SEND_MAIL,
            messages: res.data.message
        }
    }).catch(err => {
        return {
            type: ADD_ERROR,
            data: err.response.data,
            status: err.response.status,
        }
    })
}



//Reducer
const storeReducer = (state, action) => {
    console.log("dispatched", action)
    switch (action.type) {
        case CLEAR_SUCCESS:
            return {
                ...state,
                success: false,
                loading: false,
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case LOADED:
            return {
                ...state,
                loading: false,
            }
        case LOGIN:
            return {
                ...state,
                logged: true,
                User: {
                    user: action.data.user,
                    token: action.data.token,
                },
                messages: action.messages,
                loading: false,

            }
        case LOGOUT:
        case DELETE_USER:
            return {
                ...state,
                User: "",
                messages: "",
                loading: false,
                logged: false,
            }
        case ADD_ERROR:
            return {
                ...state,
                message: action.data,
                status: action.status,
                loading: false,
            }
        case DELETE_MESSAGES:
            return {
                ...state,
                message: "",
                status: "",
                messages: ""
            }
        case SET_SCREEN_SIZE:
            return {
                ...state,
                screenWidth: action.width,
                scrow: action.scrow,
            }

        default:
            return {
                ...state
            }
    }
}


//build stateProvider

export const storeContext = createContext()

const StoreContextProvider = (props) => {
        const localStoreName = "aypm"
        const [storestate, storedispatch] = useReducer(storeReducer, {},
            () => {
                const localdata = localStorage.getItem(localStoreName);
                let finaldata = ""
                if (localdata) {
                    const jsonify = JSON.parse(localdata)
                    finaldata = {
                        User: "",
                        loading: true,
                        logged: false,
                        widthdrawn: false,
                        success: false,
                        scrow: window.pageYOffset,
                        width: window.innerWidth,
                        ...jsonify,
                        message: "",
                        status: "",
                        messages: "",
                    }
                } else {
                    finaldata = {
                        User: "",
                        loading: true,
                        logged: false,
                        widthdrawn: false,
                        success: false,
                        scrow: window.pageYOffset,
                        width: window.innerWidth,
                        message: "",
                        status: "",
                        messages: "",
                    }
                }
                return finaldata
            }
        )
        useEffect(() => {
            localStorage.setItem(localStoreName, JSON.stringify(storestate))
        }, [storestate]);

        useEffect(() => {
            const onresizer = () => {
                    storedispatch({
                        type: SET_SCREEN_SIZE,
                        width: window.innerWidth,
                        scrow: window.pageYOffset
                    })
                }
                // window.addEventListener('resize', onresizer)
                //            window.addEventListener('scroll', onresizer)

            return () => {

            };
        }, [])

        return ( < storeContext.Provider value = {
                { storestate, storedispatch }
            } > { props.children } < /storeContext.Provider>)
        }
        export default StoreContextProvider;