import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg'
import homeIcon from '../images/home-icon.svg'
import searchIcon from '../images/search-icon.svg'
import watchlistIcon from '../images/watchlist-icon.svg'
import originalIcon from '../images/original-icon.svg'
import movieIcon from '../images/movie-icon.svg'
import seriesIcon from '../images/series-icon.svg'

function Header() {
    return (
        <Nav>
            <Logo src={logo} />
            <NavMenu>
                <a href="/practice-disney">
                    <img src={homeIcon} />
                    <span>HOME</span>
                </a>
                <a>
                    <img src={searchIcon} />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src={watchlistIcon} />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src={originalIcon} />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src={movieIcon} />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src={seriesIcon} />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <a href="/practice-disney/login"><UserImg src="https://cdn.dribbble.com/users/9315499/avatars/normal/344d6ef2ea496557ea9cced74d5a3703.jpg?1632875872" /></a>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display:flex;
    align-items:center;
    padding: 0 36px;
    overflow-x : hidden;
`;

const Logo = styled.img`
    width: 80px;
`;

const NavMenu = styled.div`
    display:flex;
    flex: 1;
    margin-left:25px;
    align-items:center;
    a{
        display:flex;
        align-items:center;
        padding: 0 12px;
        cursor: pointer;
        text-decoration: none;
        color: white;

        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position:relative;

            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom:-6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(.25,.46,.45,.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`;

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor:pointer;
`;