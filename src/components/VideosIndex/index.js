import React, { useState, useEffect } from 'react';
import VideoCard from '../VideoCard';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions'
//moved style from component scope

const VideosIndex = () => {
  const [godlike, setGodlike] = useState(false);
  const videos = useSelector(state => state.currentState.items.sort((a, b) => b.votes - a.votes));
  const dispatch = useDispatch('');

  const renderedVideos = videos.map((item) => ( 
    <VideoCard
      key={item.id} 
      id={item.id}
      url={item.video.url}
      type={item.video.type}
      description={item.description} 
      votes={item.votes}
      godlikeMode={godlike}
    />));

  useEffect(() => {
    dispatch(allActions.fetchDataActions.fetchData());
    console.log('I\'m mounted!');
    return () => {
    dispatch(allActions.dataActions.clearData());
    }
  }, []);

  return (
    <div>
      {/* Imagine that you want to move your favorite video to the top, okay, you can't share 
      the video on your Facebook and ask your friends to vote, even better, you can enable godlike mode
      and do it yourself */}
      <button 
        className={"fixed " + (godlike ? "added" : "")} 
        onClick={() => setGodlike(!godlike)}>
          GODLIKE
      </button>
      {renderedVideos}
    </div>
  );
};

export default VideosIndex;
