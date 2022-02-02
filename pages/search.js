import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
import { API_KEY, CONTEXT_KEY } from '../keys';
import Responce from '../Responce';

function Search( { results } ) {

    // console.log( {API_KEY} );
    
    // console.log( "result", results );
    const router = useRouter();

    return <div>
        <Head>
            <title>{router.query.term} - Google Search</title>
            <link rel='icon' href='/favicon.icon'/>
        </Head>
        {/* Header */}
        <Header  />
       
        {/* Search Result */}
        <SearchResults results = {results} />

    </div>;
    
    
}

export default Search;

export async function getServerSideProps( context ) {
    // const { term } = ;
    // 
    // AIzaSyAHi-PlaQFWh-p4BbqFR1rzrqJkNXsAkXU
    // 
    const useDummyData = false;
    const startIndex = context.query.start || '0';

    const data =useDummyData ? Responce : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyC2D5urjSGRfzaCtuqJEUBJ1HPs6b7GaAU&cx=eda89ce67f959a2cc&q=${context.query.term}&start=${startIndex}`)
        .then( ( response ) => response.json() )

  
    //after server the rendered.... Pass the result back to the client

    return {
        props: {
            results: data
      },
    };
}


// export async function getServerSideProps