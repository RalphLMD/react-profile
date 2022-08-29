import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

function NameType(){
    return ( 
    <span style={{display:'flex', 
                  fontSize:'24px', 
                  color:'#00FF30', 
                  fontWeight:'bold',
                  marginLeft:'10px'}}> 
        <Typewriter
                options={{
                    strings: ['UI/UX Designer', 'Web Developer', 'Programmer'],
                    autoStart: true,
                    loop: true,
                }}
        />
    </span>
    )
}

export default NameType

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 600px;
    position: relative;
    z-index: 1;
`;

export const HomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HomeH1 = styled.h1`
    color: #FFFFFF;
    font-size: 40px;
    text-align: center;
    
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;

    @media screen and (max-width: 1000px) {
        font-size: 28px;
    }

    @media screen and (max-width: 380px) {
        font-size: 14px;
    }

`;

export const HomeP = styled.p`
    margin-top: 24px;
    color: #FFFFFF;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    display: flex;
    cursor: none;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;

    @media screen and (max-width: 680px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;