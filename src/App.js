import React,{useState, useEffect} from 'react';
import {Container, Snackbar} from '@material-ui/core';
import Header from './components/Header';
import SendTweet from './components/SendTweet';
import {TWEETS_STORAGE} from './utils/constants';
import ListTweets from './components/ListTweets';

import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function App() {
  const [toastProps,setToastProps]=useState({
    open:false,
    text:null
  })
  const [allTweets,setAllTweets]=useState([])
  const[reloadTweets,setReloadTweets]=useState(false);
  useEffect(()=>{
    const allTweetsStorage=localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray=JSON.parse(allTweetsStorage);
    setAllTweets(allTweetsArray);
    setReloadTweets(false)
  },[reloadTweets])
  
  const deleteTweet=(index)=>{
    allTweets.splice(index,1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE,JSON.stringify(allTweets));
    setReloadTweets(true);
  }
  const close=()=>{
  setToastProps({
    open:false
  })
  }

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header/>
      <SendTweet
      setToastProps={setToastProps}
      allTweets={allTweets}
      />
      <ListTweets
      allTweets={allTweets}
      deleteTweet={deleteTweet}
      />

      <Snackbar open={toastProps.open} autoHideDuration={6000} onClose={close}>
      <Alert id="alerta" onClose={close} severity={toastProps.text==="Todos los campos son necesarios"?"error":"success"}>
        {toastProps.text}
      </Alert>
      </Snackbar>

    </Container>
  );
}

export default App;
// anchorOrigin={{
//   vertical:"top",
//   horizontal:"right"
// }}
// open={toastProps.open}
// autoHideDuration={6000}
// message={<span id="message-id">{toastProps.text}</span>}
