import React from 'react'
import { ReactImgInput } from 'react-img-input'
import 'react-img-input/dist/index.css'
import Links from './Links'

const App = () => {
  const config = {
    size: 120,
    captureBtn: {
      bg: 'crimson',
      color: '#fff',
    },
    cropBtn: {
      bg: '#F4B230',
      color: '#fff',
    },
    defaultImg: '',
    theme: 'light',
    compression: {
      maxSizeMB: 0.1,
      maxWidthOrHeight: 500,
      useWebWorker: true,
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: '100vh', textAlign: "center" }}>
      <ReactImgInput config={config} setOutput={console.log} />
      <br /><br /><br />
      <p>See Compressed and Cropped Base64 in the console</p>
      <Links />
    </div>
  )
}
export default App
