# image_compress_crop_preview

> Another cool React library - the combination of browser-image-compression, tinycrop, curtail, react-progressbar

[![NPM](https://img.shields.io/npm/v/image_compress_crop_preview.svg)](https://www.npmjs.com/package/image_compress_crop_preview) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save image_compress_crop_preview
```

## Usage

#### Default Usage
```jsx
import React from 'react'

import { Squared } from 'image_compress_crop_preview'
import 'image_compress_crop_preview/dist/index.css'

const App = () => {
  return <Squared />
}
export default App

```

#### Store the Result - Base64 
```jsx
import React, { useEffect, useState } from 'react'

import { Squared } from 'image_compress_crop_preview'
import 'image_compress_crop_preview/dist/index.css'

const App = () => {
  const [Output, setOutput] = useState()
  
  useEffect(() => {
    console.log(Output)
  }, [Output])

  return (
    <div>
      <Squared setOutput={setOutput}/>
    </div>
  )
}
export default App

```

#### Customization
```jsx
import React, { useEffect, useState } from 'react'

import { Squared } from 'image_compress_crop_preview'
import 'image_compress_crop_preview/dist/index.css'

const App = () => {
  const [Output, setOutput] = useState()
  
  useEffect(() => {
    console.log(Output)
  }, [Output])

  return (
    <div>
      <Squared 
        defaultImg="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg" 
        color="red" 
        size="150px" 
        setOutput={setOutput}
      />
    </div>
  )
}
export default App

```

## Parameters 
*All the Parameter are optional :sweat_smile:*

Parameter | Description | Default Value | Valid Values
------------ | ------------- | ------------- | -------------
defaultImg | Default image placeholder | Meme Face | Anything that goes within <img `src=" "` />
color | Color of progress bar (loading) | :yellow_square:`#FFCB2B` | HEX, RGB, Valid Color Names (RED, BLUE, etc...)
size | Defines the size of the component - Height x Width | 200px | px, em, vh, cm, mm, %, etc...
setOutput | Output Base64 will be returned as a parameter to this function. |  | __any function__. It can also be a console.log :sweat_smile:


## License

MIT © [fsyed7x](https://github.com/fsyed7x)
