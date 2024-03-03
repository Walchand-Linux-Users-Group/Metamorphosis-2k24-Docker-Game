import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Stage, Stars } from '@react-three/drei'
import Submit from './Submit'
function App() {
  return (
    <>
      <Canvas className='right' style={{position: 'absolute',}}>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Stars count={15000}/>
      </Canvas>
      {/* <Canvas className='r3f' style={{position: 'absolute',}}>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Stars />
      </Canvas> */}


      <Submit />
    </>
  )
}

export default App
