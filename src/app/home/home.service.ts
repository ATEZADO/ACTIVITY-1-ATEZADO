import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';

import { addDoc, collection, getFirestore, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { User, iUser } from './home.model'; 

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() {
   }
   async getUsers(): Promise<iUser[]> {
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

      const users: User[] = [];
      //RETRIEVE
      const querySnapchot = await getDocs(collection(firestore, "users-another"));
      querySnapchot.forEach((doc) => {
        const user=doc.data() as User;
        user.id = doc.id;
        users.push(user);
        
      });
      return users;
    }

    async tryAdd(user: User) {
      const app = initializeApp(environment.firebaseConfig);
      const firestore = getFirestore(app);

      try{
        //CREATE METHOD 1
        const docRefM1 =await addDoc(collection(firestore, "users-another"),{
          Title: user.Title,
          Duration: user.Duration,
          MainActors: user.MainActors,
          isPopular: user.isPopular,
          Released: user.Released,
        });

        console.log("Document written with ID: ", docRefM1.id);


      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    async tryUpdate(user: User) {
      const app = initializeApp(environment.firebaseConfig);
      const firestore = getFirestore(app);

      try{
        const docRef = doc(firestore, "users-another", user.id);
        await updateDoc(docRef, { Title: user.Title, Duration: user.Duration, MainActors: user.MainActors,
                         isPopular: user.isPopular, Released: user.Released,});
      }catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    async tryDelete(user: User) {
      const app = initializeApp(environment.firebaseConfig);
      const firestore = getFirestore(app);

      try {
        const docRef = doc(firestore, "users-another", user.id);
        await deleteDoc(docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
}
