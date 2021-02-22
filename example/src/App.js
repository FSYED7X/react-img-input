import React, { useEffect, useState } from 'react'
import { ReactImgInput } from 'image_compress_crop_preview'
import 'image_compress_crop_preview/dist/index.css'
import Links from './Links'

const App = () => {
  const [Output, setOutput] = useState()

  // useEffect(() => {
  //   console.log(Output)
  // }, [Output])

  const config = {
    size: 150,
    captureBtnBg: 'crimson',
    captureBtnIconColor: '#fff',
    defaultImg:''
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: '100vh', textAlign: "center" }}>
      
      <ReactImgInput config={config} />

      {/* <Squared setOutput={setOutput} mb={0.05} />
      <br /><br /><br /><br /><br />
      {Output && <p>See Compressed and Cropped Base64 in the console</p>}
      <Links /> */}
    </div>
  )
}
export default App
