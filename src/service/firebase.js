import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD-s-z8IzwpyIX6zgW9AoJ9SO3t6xVR0MA",
  authDomain: "curso-de-firebase.firebaseapp.com",
  databaseURL: "https://curso-de-firebase.firebaseio.com",
  projectId: "curso-de-firebase",
  storageBucket: "curso-de-firebase.appspot.com",
  messagingSenderId: "260757159877",
  appId: "1:260757159877:web:f26693e3c7109efbe855ac",
  measurementId: "G-FHY1SKHJWM",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const generateId = () => new Date().getTime().toString();

// Es la funcion que se va a encargar de crear un data en la db
export const storeData = (path, data) => {
  set(ref(db, `${path}/${generateId()}`), data);
};

// Es la funcion que se va a encargar de lista la informacion
export const getData = async (path) => {
  const dbRef = ref(db);
  // Esto es una collection de datos
  const snapshot = await get(child(dbRef, path));

  let arrayData = [];

  snapshot.forEach((childSnapshot) => {
    const child = childSnapshot.val();

    arrayData.push(child);
  });

  return arrayData;
};
