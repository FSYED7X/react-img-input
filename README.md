# react-img-input

[![NPM](https://img.shields.io/npm/v/react-img-input.svg)](https://www.npmjs.com/package/react-img-input) &nbsp; [![License](https://img.shields.io/badge/license-MIT-orange.svg)](https://opensource.org/licenses/MIT) &nbsp; [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)  &nbsp; [![npm downloads](https://img.shields.io/npm/dt/react-img-input.svg?maxAge=2592000)](http://www.npmtrends.com/react-img-input) &nbsp; [![Bundle size](https://img.shields.io/bundlephobia/min/react-img-input.svg)](https://bundlephobia.com/result?p=react-img-input) &nbsp; [![GitHub stars](https://img.shields.io/github/stars/FSYED7X/react-img-input.svg?style=social&label=Star)](https://github.com/FSYED7X/react-img-input)


__Another cool React Component Library__ 

<p style='text-align:justify'>This Library is a simply a <mark>input tag</mark>. It takes the input file compresses it, crop it and returns the Base64 of the input image. Almost all projects need such functionality that allows user to select, compress, crop and preview the images before uploding it. This Library is a timesaver (sometimes lifesaver 😅).</p>

## 🚀 [See it in Action](https://1dthizajchmucopxjhxata-on.drv.tw/build/)

![Demo](demo.gif)

#### Image Compress Crop Preview Input Component for React using, 
[`browser-image-compression`](https://www.npmjs.com/package/browser-image-compression) [`tinycrop`](https://www.npmjs.com/package/browser-image-compression) [`curtail`](https://www.npmjs.com/package/browser-image-compression) [`react-progressbar`](https://www.npmjs.com/package/browser-image-compression) [`react-particles-js`](https://www.npmjs.com/package/browser-image-compression)


## Install
[![react-img-input](https://nodei.co/npm/react-img-input.png)](https://npmjs.org/package/react-img-input)

```bash
npm install --save react-img-input
```

## Usage

![Demo]

#### Default Usage
```jsx
import React from 'react'

import { Squared } from 'react-img-input'
import 'react-img-input/dist/index.css'

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

const App = () => {
  return <ReactImgInput config={config} setOutput={console.log} />
}
export default App

```

<br/>
## Parameters 
*All the Parameter are optional  😅*

Parameter | Description | Default Value | Valid Values
------------ | ------------- | ------------- | -------------
defaultImg | Default image placeholder | Meme Face | Anything that goes within <img `src=" "` />
color | Color of progress bar (loading) | ![#FFCB2B](https://via.placeholder.com/15/FFCB2B/000000?text=+) `#FFCB2B` | HEX, RGB, Valid Color Names (RED, BLUE, etc...)
size | Defines the size of the component - Height x Width | 200px | px, em, vh, cm, mm, %, etc...
setOutput | Output Base64 will be returned as a parameter to this function. |  | __any function__. It can also be a console.log  😅
  mb | Maximum Size of image after compression | 1 MB | MB

<br/>

## Support

<a href="https://www.buymeacoffee.com/fsyed7x" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" height=60 width=217 ></a>
<br/>
# License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/FSYED7X/react-img-input/blob/master/LICENCE) file for details
#   r e a c t - i m g - i n p u t 
 
 