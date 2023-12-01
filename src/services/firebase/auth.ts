/**Firebase */
import app from '../../services/firebase/connection';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function sendSignIn(email: string, password: string, confirmPassword: string, setPageName:any) {
    const auth = getAuth(app);
    let flag = false;
    if (password == confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setPageName('log-in');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
}

function sendLogIn(email: string, password: string, logInOk:Function, logInError:Function){
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            logInOk();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            logInError();
        });
}

function sendLogOut(signOutOK: Function, signOutError: Function) {
    const auth = getAuth(app);
    signOut(auth).then(() => {
        signOutOK();
    }).catch((error) => {
        signOutError();
    });
}

export { sendSignIn, sendLogIn, sendLogOut };