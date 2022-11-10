import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

{/*
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bacf7df221msha8cd44b5f36a8fep1836a2jsn6b3cacb9d026',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

*/}




    {/* -------------------------------------------------------------------------------------------------------------------------------------------------------
    Code above generated using Rapid API VS Code Client extension. In "Request Snippet" set to "Javascript" -> "fetch" and then click </> button beside it.
Copy the code snippet generated and paste it in the shazamCore.js file inside ./redux/services/shazamCore.js  file.  
Now make some changes to the code here because we are using "redux toolkit". This is where we will be calling our Rapid API. */}


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'bacf7df221msha8cd44b5f36a8fep1836a2jsn6b3cacb9d026')

            return headers;
        },
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world'}),

    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;

{/* “Shazamcore.js” is the main file where we make those Rapid API calls to fetch the data. */}