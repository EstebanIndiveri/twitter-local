import React from 'react'
import{Grid} from '@material-ui/core';
import './ListTweets.scss';
import Tweet from '../Tweet';
const ListTweets = ({allTweets,deleteTweet}) => {
    if(!allTweets || allTweets.length===0){
        return <div className="list-tweets-empty"><h2>No hay Tweets, ¡Agrega uno!</h2></div>
    }
    return ( 
        <Grid
        container 
        spacing={3}
        className="list-tweets"
        >
            {allTweets.map((tweets,index)=>(
                <Grid key={index} item xs={4}>
                    <Tweet
                    tweets={tweets}
                    index={index}
                    deleteTweet={deleteTweet}
                    />
                </Grid>
            ))}
        </Grid>
     );
}
 
export default ListTweets;