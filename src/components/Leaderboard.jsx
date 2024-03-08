import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import wlug from "../assets/wlug.png";
import Container from "./Container";

const Leaderboard = () => {
  return (
    <>
      <Canvas className="right" style={{ position: "absolute" }}>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Stars count={1500} />
      </Canvas>
      {/* <Canvas className='r3f' style={{position: 'absolute',}}>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Stars />
      </Canvas> */}

      <div className="wrapper">
        <div className="header-container">
          <img src={wlug} alt="react" />
        </div>
        <div className="main">
          <Container />
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
