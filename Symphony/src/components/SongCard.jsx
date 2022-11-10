import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from "./PlayPause";

import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({song, isPlaying, activeSong, i, data}) => {
  

  const handlePauseClick = () => {


  }

  const handlePlayClick = () => {

    
  }

  return(
    
  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup
  rounded-lg cursor-pointer">

    {/* the div below makes the song cards become square boxes. */}
    <div className="relative w-full h-56 group">
      <div className={`absolute inset-0 justify-center
      items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}
      `}>

        {/* the className of the above div is dynamic and figures out if the song currently displayed is the song that is currently actively playing. */}
        
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song = {song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}/>

      </div>
      <img alt="song_img" src={song.images?.coverart} />

    </div>




    {/*-------------------------------------------------------------- */}
    <div className="mt-4 flex flex-col">
      {/* This div is to show the song title and subtitle one below another.*/}
      <p className="font-semi-bold text-lg text-white truncate">
        <Link to={`/songs/${song?.key}`}>
          {/* So pressing on this link takes it to the specific song's details page. */}
          {song.title}
        </Link>
      </p>
      <p className="text-sm truncate text-gray-300 mt-1">
        <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
          {song.subtitle}
        </Link>
      </p>
    </div>
  {/*-------------------------------------------------------------- */}


  </div>
)
  }

export default SongCard;
