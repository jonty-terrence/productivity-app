import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCr3u4ExzaPeuptrXoXX8nSz3ckr1aXQoE',
  authDomain: 'productivity-app-69.firebaseapp.com',
  databaseURL: 'https://productivity-app-69.firebaseio.com',
  projectId: 'productivity-app-69',
  storageBucket: 'productivity-app-69.appspot.com',
  messagingSenderId: '565104879869',
  appId: '1:565104879869:web:d3a3a248bb9b834c70b694'
}

firebase.initializeApp(firebaseConfig)
const databaseRef = firebase.database().ref()
export const todosRef = databaseRef.child('todos')
