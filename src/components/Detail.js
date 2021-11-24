import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src=""/>
            </Background>
            <ImageTitle>
                <img src=""/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png"></img>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-White.png"></img>
                    <span>Trailer</span>

                </TrailerButton>
                <AddButton>

                </AddButton>
                <GroupWatchButton>

                </GroupWatchButton>
            </Controls>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh-70px);
    padding: 0 calc(3.5vh + 5px);
    position:relative;

  
`

const Background = styled.div`
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity:0.8;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;

    img{
        width:100%;
        height: 100%;
        object-fit:contain;
    }
`

const Controls = styled.div`
    display:flex;

`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249,249,249);
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
`

const TrailerButton = styled.button`
    display: flex;
    align-items: center;
`

const AddButton = styled.button`

`

const GroupWatchButton = styled.button`

`
