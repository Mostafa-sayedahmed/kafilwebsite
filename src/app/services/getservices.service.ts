import { Injectable } from '@angular/core';
import { Firestore, query, where } from '@angular/fire/firestore';
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  getFirestore,
  doc,
  DocumentData,
} from 'firebase/firestore';
import { Service } from './../models/service';

@Injectable({
  providedIn: 'root',
})
export class GetservicesService {
  db = getFirestore();
  constructor(private firestore: Firestore) {}
  serviceslist: any[] = [];
  addservice(service: Service) {
    let servicesRef = collection(this.firestore, 'services');
    addDoc(servicesRef, service)
      .then((res) => {
        console.log('data added successfully!');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async getservices() {
    this.serviceslist = [];
    const querySnapshot = await getDocs(collection(this.firestore, 'services'));
    querySnapshot.forEach((doc) => {
      this.serviceslist = [
        ...this.serviceslist,
        { uid: doc.id, data: doc.data() },
      ];
      // console.log(doc.id, ' => ', doc.data());
      // // console.log({ uid: doc.id, data: doc.data() });
      // return doc.id, ' => ', doc.data();
    });
    return this.serviceslist;
  }
  async getServicebyID(id: string) {
    const docRef = doc(this.db, 'services', id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }
  // async searchbyname(name: string) {
  //   const Q = query(
  //     collection(this.db, 'services'),
  //     where('title', '==', name)
  //   );
  //   const querySnapshot = await getDocs(Q);
  //   let searchlist: { uid: string; data: DocumentData }[] = [];
  //   querySnapshot.forEach((docSnap) => {
  //     searchlist = [{ uid: docSnap.id, data: docSnap.data() }];
  //   });
  //   return searchlist;
  // }
}

// async searchContestsByName(name: string) {
//   const queryRef = collection(this.firestore, 'contests');
//   const q = query(queryRef, where('title', '>=', name));
//   const querySnapshot = await getDocs(q);
//   var newArr : Array<Icontest> = [];
//   querySnapshot.forEach((doc) => {
//   const id = doc.id;
//   const data = doc.data() as Icontest;
//   const contest: Icontest = {...data, id };
//   newArr.push(contest);
// });
// return newArr;
// }
