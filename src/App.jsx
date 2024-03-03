import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Stage, Stars } from '@react-three/drei'
import Submit from './Submit'
import Container from './Container'
function App() {
  return (
    <>
      <Canvas className='right' style={{position: 'absolute',}}>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Stars count={1500}/>
      </Canvas>
      {/* <Canvas className='r3f' style={{position: 'absolute',}}>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Stars />
      </Canvas> */}

<Container  />
      <Submit />
    </>
  )
}

export default App
