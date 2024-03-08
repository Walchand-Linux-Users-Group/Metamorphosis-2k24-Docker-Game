import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import wlug from "../assets/wlug.png";
import Submit from "./Submit";

const Main = () => {
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
          <img
            src={wlug}
            alt="react"
            // onClick={() => {
            //   window.location.href = "https://www.wcewlug.org/";
            // }}
          />
        </div>
        <div className="main">
          <Submit />
        </div>
      </div>
    </>
  );
};

export default Main;
