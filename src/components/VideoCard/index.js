import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../actions';

const VideoCard = props => {
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();

  const upvote = id => {
    if (props.godlikeMode) {
      dispatch(allActions.voteActions.addVote(id));
    } else if (status === 'ADDED') {
      setStatus('');
      dispatch(allActions.voteActions.removeVote(id));
    } else if (status === 'REMOVED') {
      setStatus('ADDED');
      dispatch(allActions.voteActions.addTwo(id));
    } else {
      setStatus('ADDED');
      dispatch(allActions.voteActions.addVote(id));
    }
  };

  const downvote = id => {
    if (props.godlikeMode) {
      dispatch(allActions.voteActions.removeVote(id));
    } else if (status === 'REMOVED') {
      setStatus('');
      dispatch(allActions.voteActions.addVote(id));
    } else if (status === 'ADDED') {
      setStatus('REMOVED');
      dispatch(allActions.voteActions.removeTwo(id));
    } else {
      setStatus('REMOVED');
      dispatch(allActions.voteActions.removeVote(id));
    }
  };

  return (
      <div className="card-container">
        <div className="card">
          <video width="440" height="320" controls>
            <source src={props.url} type="video/mp4" />
          </video>
          <p>{props.description}</p>
          {/* Inline styling čisto da se malo bolje uoči :) */}
          <p>Votes: {props.votes >= 0 ? props.votes : 0}</p> 
          <button
            onClick={() => upvote(props.id)}
            className={!props.godlikeMode && status === 'ADDED' ? 'added' : undefined}
          >
            Upvote
          </button>
          <button
            onClick={() => downvote(props.id)}
            className={!props.godlikeMode && status === 'REMOVED' ? 'removed' : undefined}
          >
            Downvote
          </button>
        </div>
      </div>
  );
};

export default VideoCard;
