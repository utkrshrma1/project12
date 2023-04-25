import axios from "axios";



export const USER_REGISTRATION_REQUEST = 'USER_REGISTRATION_REQUEST'
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS'
export const USER_REGISTRATION_FAILURE = 'USER_REGISTRATION_FAILURE'


export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'

export const LOGOUT_USER = 'LOGOUT_USER'



// registration action


export  const registerUser = (userInfo,navigate) => {
    return async (dispatch) => {
        try {
            dispatch({type : USER_REGISTRATION_REQUEST});
            let dataURL = 'http://127.0.0.1:5000/api/users/register'
            let response = await axios.post(dataURL,userInfo);
            dispatch({type : USER_REGISTRATION_SUCCESS,payload :response.data})
            navigate('/')
        }
        catch (error) {
            dispatch({type : USER_REGISTRATION_FAILURE, payload : error.response.data})
           
        }

    }
};

export  const userLogin = (userInfo) => {
       return async (dispatch) => {
           try{
               dispatch({type:USER_LOGIN_REQUEST});
               let dataURL = 'http://127.0.0.1:5000/api/users/login';
               let response = await axios.post(dataURL,userInfo);
               dispatch({type:USER_LOGIN_SUCCESS, payload : response.data})
           }
           catch (error) {
               dispatch({type : USER_LOGIN_FAILURE, payload : error.response.data})
               
           }
       }
}

export const logoutUser = () => {
    return(dispatch) => {
        dispatch({type : LOGOUT_USER});
       
    }
};



