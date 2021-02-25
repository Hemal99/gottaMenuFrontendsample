import axios from 'axios';
import { AUTH_SIGN_UP,AUTH_ERROR} from './types'



export const  oauthGoogle = data => {
    return async dispatch => {
        console.log("we received", data);
        const res=await axios.post('http://localhost:5000/user/oauth/google', {
            access_token:data
        })
        console.log('res',res)

        dispatch({
            type:AUTH_SIGN_UP,
            payload:res.data.token
        });

        localStorage.setItem('JWT_TOKEN',res.data.token)
    }
}


export const  oauthFacebook = data => {
    return async dispatch => {
        console.log("we received", data);
        const res=await axios.post('http://localhost:5000/user/oauth/facebook', {
            access_token:data
        })
        console.log('res',res)

        dispatch({
            type:AUTH_SIGN_UP,
            payload:res.data.token
        });

        localStorage.setItem('JWT_TOKEN',res.data.token)
    }
}

export const signUp = (data) => {
    return async dispatch => {
        try{
            console.log('Actioncreator signUp called')
           const res = await axios.post('http://localhost:5000/user', data)
           console.log('res',res);

           console.log('Actioncreator signUp ')
           dispatch({
               type:AUTH_SIGN_UP,
               payload:res.data.token
           })

           localStorage.setItem('JWT_TOKEN', res.data.token);

        }catch(err){
            dispatch({
                type:AUTH_ERROR,
                payload:'Email is already in use'
            })
        }
    }
}