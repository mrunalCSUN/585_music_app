import { useDispatch, useSelector} from 'react-redux';
{/* Discover.jsx also will handle the global state of the song using hooks like useDispatch and useSelector from redux. Are we showing the player ?
    Are we playing or are we not ?
*/}


import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';

import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {

    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const {data, isFetching, error} = useGetTopChartsQuery();
    const genreTitle = 'Pop';

    {/* console.log(data); */}

    {/* Below we check for the loading state. */}

    if(isFetching) return <Loader title = "Loading songs..." />;

    if (error) return <Error />;

    return(
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                {/* On small devices sm: flex-row (special property min-width: 640px) whereas usually flex-col on desktop/tablet. mt (margin top) and mb (margin bottom)*/}
                <h2 className="font-bold text-2xl text-white text-left">Discover {genreTitle}</h2>

                {/* Creating the drop-down for the genres */}
                <select
                    onChange={() => {}}
                    value=""
                    className="bg-black text-gray-300 p-3 text-sm
                     rounded-lg outline-none sm:mt-0 mt-5"
                >
                    {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
                </select> 


            </div>

            {/*  Wrapper for songs*/}
            <div className="flex flex-wrap sm:justify-start 
            justify-center gap-8">\
            
                {/* Each song will have a key property so we can look into that while we are fetching the data from the api. */}

                {data?.map((song, i) => (
                    <SongCard
                        key={song.key}   
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i = {i}
                    /> 
                ))}
                


            </div>


        </div>
    );


};

export default Discover;
