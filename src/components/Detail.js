import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import { base_url, API, url, BG_API } from '../TMDBAPI';

function Detail() {

    const [detailMovie, setDetailMovie] = useState([]);
    const { id } = useParams();
    const api_url = `https://api.themoviedb.org/3/movie/${id}?api_key=594b9f826421c425d8a2f42f965b1f6f&language=en-US`

    useEffect(() => {
        fetch(api_url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDetailMovie(data);
            });
    }, [])
    return (
        <Container>
            <title>Detail | Disney Plus</title>
            {detailMovie &&
                <div>
                    <Background>
                        <img src={BG_API + detailMovie.poster_path} />
                    </Background>
                    <ImageTitle>
                        <h1>{detailMovie.title}</h1>
                    </ImageTitle>
                    <Controls>
                        <PlayButton>
                            <img src={require('../images/play-icon-black.png')} />
                            <span>PLAY</span>
                        </PlayButton>
                        <TrailerButton>
                            <img src={require('../images/play-icon-white.png')} />
                            <span>Trailer</span>
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupWatchButton>
                            <img src={require('../images/group-icon.png')} />
                        </GroupWatchButton>
                    </Controls>
                    <SubTitle>
                        <span>{detailMovie.release_date} - </span>
                        {detailMovie.genres && detailMovie.genres.map(sub => (
                            <span key={sub.id}>{sub.name}, </span>
                        ))}
                    </SubTitle>
                    <Description>
                        {detailMovie.overview}
                    </Description>
                </div>
            }
        </Container >
    );
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh-70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit:cover;
    }
`;

const ImageTitle = styled.div`
height: 35vh;
min-height: 170px;
width: 50vw;
min-width: 200px;
margin-top: 20px;
display: flex;
align-items: center;
h1{
    font-size: 48px;
}
`;

const Controls = styled.div`
    display:flex;
    align-items: center;
    margin-top : 20px;
`;

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    padding: 0px 24px;
    align-items: center;
    margin-right: 22px;
    height: 56px;
    bakckground: rgb(249,249,249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.93);

    &:hover{
        background: rgb(198,198,198);
    }
`;

const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249); 
    text-transform: uppercase;
`;

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    border-radius: 50%;
    margin-right: 16px;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;
    span {
        font-size: 26px;
        color: white;
    }
`;

const GroupWatchButton = styled(AddButton)`
    background: rgb(0,0,0);
`;

const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249);
    max-width: 60%;
`;