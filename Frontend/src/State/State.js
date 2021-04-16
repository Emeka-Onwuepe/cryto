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
export const SET_SCREEN_SIZE = "SET_SCREEN_SIZE";
export const GET_BTC_EXCHANGE = "GET_BTC_EXCHANGE";
export const ADD_ERROR = "ADD_ERROR";
export const REGISTER_USER = "RIGISTER_USER";
export const GET_IP = "GET_IP";
export const GET_ACCOUNT = "GET_ACCOUNT";
export const DEPOSIT = "DEPOSIT"
export const GET_TRANSACTIONS = "GET_TRANSACTIONS"

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

export const RegisterUser = (data, config) => {
    return axios.post('/api/register', data, config).then(res => {
        return {
            type: REGISTER_USER,
            data: res.data,
            messages: "Registered Successfully",
            check: true
        }
    }).catch(err => {
        return {
            type: ADD_ERROR,
            data: err.response.data,
            status: err.response.status,
        }

    })
}

export const getExchange = () => {
    console.log("ran from axios")
    return axios.get('https://api.coinbase.com/v2/exchange-rates?currency=BTC').then(res => {
        return {
            type: GET_BTC_EXCHANGE,
            data: res.data
        }
    })
}

export const getIp = (config) => {
    return axios.get('/api/dashboard', config).then(res => {

        return {
            type: GET_IP,
            data: res.data
        }
    }).catch(err => {
        return {
            type: ADD_ERROR,
            data: err.response.data,
            status: err.response.status,
        }

    })
}

export const DashBoard = (data, config, type) => {
    return axios.post('/api/dashboard', data, config).then(res => {
        switch (type) {
            case GET_ACCOUNT:
                return {
                    type,
                    withdraws: res.data.withdraws,
                    deposits: res.data.deposits,
                    account: res.data.account
                }
            case DEPOSIT:
                return {
                    type,
                    url: res.data.url
                }
            case GET_TRANSACTIONS:
                const withdraws = res.data.withdraws
                const deposits = res.data.deposits
                const pendingdeposits = deposits.length > 0 ? deposits.filter(item => item.pending == true) : []
                const transactions = deposits.concat(withdraws)
                return {
                    type,
                    withdraws,
                    deposits,
                    pendingdeposits,
                    transactions
                }
        }
    }).catch(err => {
        return {
            type: ADD_ERROR,
            data: err.response.data,
            status: err.response.status,
        }

    })
}

// Capitalise first word
export const sentenceCase = (data) => {
    let firstWord = data.slice(0, 1).toUpperCase()
    let rest = data.slice(1).toLowerCase()
    return `${firstWord}${rest}`
}

//add Commas

export const addComas = (input) => {

    const mutate = (array, result = []) => {
        if (array.length < 3) {
            if (array != "") {
                result.push(array)
            }

            return
        }

        const LastThree = array.slice(-3, )
        result.push(LastThree)
        const lastIndex = array.length - 3
        const remaining = array.slice(0, lastIndex)
        mutate(remaining, result)
        return result
    }

    let result = ""
    const [first, second] = input.split(".")
    const firstNum = mutate(first)

    if (firstNum != undefined) {

        const firstHalf = firstNum.reverse().join(",")

        if (second == undefined) {
            result = firstHalf
        } else {
            result = `${firstHalf}.${second}`
        }
    }


    return result

}



//Reducer
const storeReducer = (state, action) => {
    console.log("dispatched", action)
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                User: action.data,
                messages: action.messages,
                check: action.check,
                logged: true,
                loading: false,
            }
        case GET_ACCOUNT:
            return {
                ...state,
                withdraws: action.withdraws,
                deposits: action.deposits,
                account: action.account,
                loading: false,
            }
        case DEPOSIT:
            return {
                ...state,
                url: action.url,
                newPayment: true,
                loading: false
            }

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
                check: false,
                account: '',
            }
        case GET_BTC_EXCHANGE:
            return {
                ...state,
                btcexchange: action.data,
                loading: false,
            }
        case GET_IP:
            return {
                ...state,
                ip: action.data.ip,
                loading: false,
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
                        btcexchange: { data: { currency: {}, rates: {} } },
                        ip: "",
                        withdraws: [],
                        deposits: [],
                        account: [],
                        url: "",
                        newPayment: false,
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
                        btcexchange: { data: { currency: {}, rates: {} } },
                        ip: "",
                        message: "",
                        status: "",
                        messages: "",
                        withdraws: [],
                        deposits: [],
                        account: [],
                        url: "",
                        newPayment: false,
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
            window.addEventListener('resize', onresizer)
            window.addEventListener('scroll', onresizer)

            return () => {

            };
        }, [])

        return ( < storeContext.Provider value = {
                { storestate, storedispatch }
            } > { props.children } < /storeContext.Provider>)
        }
        export default StoreContextProvider;