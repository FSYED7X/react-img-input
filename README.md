# react-img-input

[![NPM](https://img.shields.io/npm/v/react-img-input.svg)](https://www.npmjs.com/package/react-img-input) &nbsp; [![License](https://img.shields.io/badge/license-MIT-orange.svg)](https://opensource.org/licenses/MIT) &nbsp; [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)  &nbsp; [![npm downloads](https://img.shields.io/npm/dt/react-img-input.svg?maxAge=2592000)](http://www.npmtrends.com/react-img-input) &nbsp; [![Bundle size](https://img.shields.io/bundlephobia/min/react-img-input.svg)](https://bundlephobia.com/result?p=react-img-input) &nbsp; [![GitHub stars](https://img.shields.io/github/stars/FSYED7X/react-img-input.svg?style=social&label=Star)](https://github.com/FSYED7X/react-img-input)


__Another cool React Component Library__ 

<p style='text-align:justify'>This Library is a simply a <mark>input tag</mark>. It takes the input file compresses it, crop it and returns the Base64 of the input image. Almost all projects need such functionality that allows user to select, compress, crop and preview the images before uploding it. This Library is a timesaver (sometimes lifesaver 😅).</p>

## 🚀 [See it in Action](https://1dthizajchmucopxjhxata-on.drv.tw/build/)

#### Image Compress Crop Preview Input Component for React using, 
[`browser-image-compression`](https://www.npmjs.com/package/browser-image-compression) [`tinycrop`](https://www.npmjs.com/package/tinycrop) [`image-clipper`](https://www.npmjs.com/package/image-clipper)


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

<table border="1">
    <thead>
        <tr>
            <th>Parameter</th>
            <th></th>
            <th>Description</th>
            <th>Default Value</th>
            <th>Valid Values</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=2>captureBtn</td>
            <td>bg</td>
            <td>Background color for the button with + icon</td>
            <td style="color:#3498DB">#3498DB</td>
            <td>Any color</td>
        </tr>
        <tr>
            <td>color</td>
            <td>Text color for the button with + icon</td>
            <td>#FFF</td>
            <td>Any color</td>
        </tr>
        <tr>
            <td rowspan=2>cropBtn</td>
            <td>bg</td>
            <td>Background color for the button with + icon</td>
            <td style="color:#F4B230">#F4B230</td>
            <td>Any color</td>
        </tr>
        <tr>
            <td>color</td>
            <td>Text color for the button with crosschair icon</td>
            <td>#FFF</td>
            <td>Any color</td>
        </tr>
        <tr>
            <td>size</td>
            <td></td>
            <td>Size of the preview image</td>
            <td>150px</td>
            <td>All the units</td>
        </tr>
        <tr>
            <td>defaultImg</td>
            <td></td>
            <td>Placeholder image for preview</td>
            <td><img style="border-radius:100%" src='data:image/png;base64,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'/></td>
            <td>dataURL(base64), foreign link, Anything that goes within &lt;img `src=" "`&gt;</td>
        </tr>
    </tbody>
</table>


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