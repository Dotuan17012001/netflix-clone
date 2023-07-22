import styled from "styled-components";
import video from "../assets/video.mp4";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();
  return (
    <Container>
        
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div > 
         <div className="back2">
           <video src={video} autoPlay loop controls muted></video>
         </div>
          
      </div>
    </Container>
  );
};

export default Player;

const Container = styled.div`
  .player {

    .back2{
        position: relative;
        width: 100vw;
        height: 100vh;
      video {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
    }
    
    .back {
        position: absolute;
        padding: 2rem;
        z-index: 1;
        svg{
           cursor: pointer;
           font-size: 3rem;
        }

    }
  }
`;
