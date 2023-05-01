import styled from '@emotion/styled';
import {BiLoaderCircle} from 'react-icons/bi';

export const Preloader = styled.div`
fill: #3f51b5;
display: flex;
justify-content: center;
`;

export const PreloaderImg = styled(BiLoaderCircle)`
// position: relative;
// top: 20%;
// left: 50%;
width: 70px;
height: 70px;
// margin-top: -35px;
// margin-left: -35px;
margin: 0 auto;
text-align: center;
fill: inherit;
animation: preloader-rotate 2s infinite linear;
@keyframes preloader-rotate {
    100% {
      transform: rotate(360deg);
    }
`;
