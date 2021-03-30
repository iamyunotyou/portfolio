import logo from './logo.svg';
import './App.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyCgbbyX2ACd6N9M7B7Tr7mJDyrh2ImY9q0",
    authDomain: "superchat-be064.firebaseapp.com",
    projectId: "superchat-be064",
    storageBucket: "superchat-be064.appspot.com",
    messagingSenderId: "664039377265",
    appId: "1:664039377265:web:d98b7896f69dc170994ed0",
    measurementId: "G-DM0FD2P48E",
});

const auth = firebase.auth();
const firestore = firebse.firestore();


function App() {
  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      <header>

      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {

  const dumy = userRef()
  
  const messageRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messges] = useCollectionData(query, {idField: 'id'});

  const [formValue, setFormValue] = useState('');

  const sendMessage = async(e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth'});
  }
  return (
    <>
    <main>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      <div ref={dummy}> </div>
    </main>
    <form onSubmit={sendMessage}> 
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
      <button type="submit">😀</button>
    </form>
    </>
  )
}


function ChatMessage(props) {
  const { text, uid } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={'message ${messageClass}'}>
      <img src={photoURL} />
      <p>{text}</p>
    </div>
  )
  return <p>{text}</p>
}






export default App;


