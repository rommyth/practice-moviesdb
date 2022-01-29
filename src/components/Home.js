import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import bgHome from '../images/home-background.png'
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import Viewers from './Viewers';
import { API_KEY, base_url, url } from '../TMDBAPI';
import db from '../firebase'
import { collection, getDocs, onSnapshot } from '@firebase/firestore'

function Home() {

    // useEffect(() => {
    //     onSnapshot(collection(db, "movies"), (snapshot) => {
    //         let tempMovies = snapshot.docs.map((doc) => {
    //             return { id: doc.id, ...doc.data() }
    //         })
    //         console.log(tempMovies);
    //     })
    // }, [])

    // useEffect(() => {
    //     // db.collection("movies").onSnapshot((snapshot) => {
    //     //     console.log(snapshot);
    //     // })
    //     const colRef = collection(db, "movies");
    //     getDocs(colRef).then((snapshot) => {
    //         console.log(snapshot.docs);
    //     })
    // }, [])

    const [moviesData, setMoviesData] = useState([]);
    const [url_set, setUrl] = useState(url);


    useEffect(() => {
        fetch(url_set)
            .then(res => res.json())
            .then(data => {
                // console.log(data.results);
                setMoviesData(data.results);
            });

        return () => {
            console.log('pindah halaman');
        }
    }, [url_set])

    return (
        <Container>
            <title>Home | Disney Plus</title>
            <ImgSlider />
            <Viewers />
            <h4>Recommend for you</h4>
            <MoviesList>
                {moviesData.length > 0 && moviesData.map((res) => {
                    return (
                        <Movies info={res} key={res.id} />
                    )
                })}
            </MoviesList>
        </Container>);
}

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative; 
    overflow-x: hidden;
    
    &:before{
        background: url(${bgHome}) center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1; 
    }
`;

const MoviesList = styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(6, minmax(0,1fr));
`;