import Firebase, {db} from '../firebase/Firebase'

// types
export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'

// actions
export const updateEmail = email => {
    return{
        type: UPDATE_EMAIL,
        payload: email
    }
}

export const updatePassword = password => {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export const login = () => {
    return async (dispatch, getState) => {
        try{
            const {email, password} = getState().user
            const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
            //dispatch({type: LOGIN, payload: response.user})   
            dispatch(getUser(response.user.uid))
        }catch(e){
            alert(e)
        }
    }
}

export const register = () => {
    return async (dispatch, getState) => {
        try{
            const {email, password} = getState().user
            const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
            //console.log(response.user.uid)
            if(response.user.uid){
                const user = {
                    uid: response.user.uid,
                    email: response.user.email
                }
                db.collection('users')
                    .doc(user.uid)
                    .set(user)
            }
            dispatch({type: REGISTER, payload: response.user})
        }catch(e){
            alert(e)
        }
    }
}

export const getUser = uid => {
    return async (dispatch, getState) => {
        try{
            const user = await db.collection('users')
                                .doc(uid)
                                .get()
            dispatch({type: LOGIN, payload: user.data()})
        }catch(e){
            alert(e)
        }
    }
}