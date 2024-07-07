import React, { createContext, useCallback, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { set, update, child, get } from "firebase/database";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, storage, database, reference } from "../firebaseConfig";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const generateTransactionReference = (length) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const userId = generateTransactionReference(10);

  const [userIdentify, setUserIdentify] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [profileImg, setProfileImg] = useState("");
  const [allUsers, setAllUsers] = useState();
  const [loggedInuser, setLoggedInuser] = useState("");
  const [loginError, setLoginError] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [LoginLoading, setLoginLoading] = useState();
  const [SignUpLoading, setSignUpLoading] = useState();
  const [signed, setSigned] = useState(false);
  const [LoadError, setLoadError] = useState();
  const [uploaded, setUploaded] = useState(false);

  const submit = useCallback(() => {
    setUserIdentify(userId);
    setSignUpLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setSignUpLoading(false);
      })
      .catch((error) => {
        setSignUpError(error.code);
        setSignUpLoading(false);
        setTimeout(() => {
          setSignUpError("");
        }, 3000);
      });
  }, [email, password, userId]);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode);
      });
  };

  const uploadFoods = () => {
    set(reference(database, "SweeTymeMenu/" + userId), {
      id: userId,
      name: "OFADA STEW",
      price: 1200,
      image: " ",
    })
      .then(() => {
        console.log("saved");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signIn = useCallback(() => {
    setLoginLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setLoggedInuser(userCredential.user);
        setSigned(true);
        setLoginLoading(false);
      })
      .catch((error) => {
        setLoginError(error.code);
        setLoginLoading(false);
        setTimeout(() => {
          setLoginError("");
        }, 3000);
      });
  }, [email, password]);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setSigned(false);
        setUser("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const upload = () => {
    if (imageUpload === null) return;

    const imgRef = ref(
      storage,
      `images/EleganceMenu/${userIdentify}/${imageUpload.name}`
    );
    uploadBytes(imgRef, imageUpload)
      .then((snapshot) => {
        return getDownloadURL(snapshot.ref);
      })
      .then((url) => {
        setProfileImg(url);
        setUploaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (uploaded) {
    update(reference(database, "EleganceMenu/" + userIdentify), {
      image: profileImg,
    })
      .then(() => {
        console.log("saved");
        setUploaded(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <DataContext.Provider
      value={{
        email,
        password,
        user,
        username,
        phone,
        loginError,
        signUpError,
        signed,
        userIdentify,
        imageUpload,
        profileImg,
        LoginLoading,
        SignUpLoading,
        allUsers,
        LoadError,
        loggedInuser,
        setEmail,
        setPhone,
        setUsername,
        setPassword,
        setImageUpload,
        setProfileImg,
        signOutUser,
        submit,
        signInWithGoogle,
        signIn,
        upload,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
