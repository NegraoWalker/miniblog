import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore" //Importando o banco de dados firestore do Firebase

const firebaseConfig = {
    apiKey: "AIzaSyCRtymTRCafK7fEKJV_QRAxoT2Lv4ngBDo",
    authDomain: "miniblog-87722.firebaseapp.com",
    projectId: "miniblog-87722",
    storageBucket: "miniblog-87722.appspot.com",
    messagingSenderId: "486580886129",
    appId: "1:486580886129:web:d79b6ee29f6fcc267ad9d0"
}

const app = initializeApp(firebaseConfig)

//*Inicialização do banco de dados que usaremos do firebase:
const db = getFirestore(app)



export { db }