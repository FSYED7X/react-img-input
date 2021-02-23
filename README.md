# react-img-input

[![NPM](https://img.shields.io/npm/v/react-img-input.svg)](https://www.npmjs.com/package/react-img-input) &nbsp; [![License](https://img.shields.io/badge/license-MIT-orange.svg)](https://opensource.org/licenses/MIT) &nbsp; [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)  &nbsp; [![npm downloads](https://img.shields.io/npm/dt/react-img-input.svg?maxAge=2592000)](http://www.npmtrends.com/react-img-input) &nbsp; [![Bundle size](https://img.shields.io/bundlephobia/min/react-img-input.svg)](https://bundlephobia.com/result?p=react-img-input) &nbsp; [![GitHub stars](https://img.shields.io/github/stars/FSYED7X/react-img-input.svg?style=social&label=Star)](https://github.com/FSYED7X/react-img-input)


__Another cool React Component Library__ 

<p style='text-align:justify'>This Library is a simply a <mark>input tag</mark>. It takes the input file compresses it, crop it and returns the Base64 of the input image. Almost all projects need such functionality that allows user to select, compress, crop and preview the images before uploding it. This Library is a timesaver (sometimes lifesaver 😅).</p>

## 🚀 [See it in Action](https://react-img-input.netlify.app/)

<!-- #### Image Compress Crop Preview Input Component for React using, 
[`browser-image-compression`](https://www.npmjs.com/package/browser-image-compression) [`tinycrop`](https://www.npmjs.com/package/tinycrop) [`image-clipper`](https://www.npmjs.com/package/image-clipper) -->


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

<table>
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
            <td>#3498DB</td>
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
            <td>#F4B230</td>
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
            <td><img src='./defaultImg.png'/></td>
            <td>dataURL(base64), foreign link, Anything that goes within <br/>&lt;img `src=" "`&gt;</td>
        </tr>
        <tr>
            <td>theme</td>
            <td></td>
            <td>Theme dark/light</td>
            <td>light</td>
            <td>dark / light</td>
        </tr>
        <tr>
          <td colspan="5">Parameters for <b>browser-image-compression</b></td>
        </tr>
        <tr>
            <td rowspan="8">compression</td>
            <td>maxSizeMB</td>
            <td>Maximum size of the image after compression.</td>
            <td>0.1</td>
            <td>Number</td>
        </tr>
        <tr>
            <td>maxWidthOrHeight</td>
            <td>compressedFile will scale down by ratio to a point that width or height is smaller than maxWidthOrHeight.</td>
            <td>1000</td>
            <td>Number</td>
        </tr>
        <tr>
            <td>onProgress</td>
            <td>A function takes one progress argument.</td>
            <td></td>
            <td>percentage from 0 to 100</td>
        </tr>
        <tr>
            <td>useWebWorker</td>
            <td>Use multi-thread web worker, fallback to run in main-thread,</td>
            <td>true</td>
            <td>true / false</td>
        </tr>
        <tr>
            <td>maxIteration</td>
            <td>Max number of iteration to compress the image.</td>
            <td>10</td>
            <td>Number</td>
        </tr>
        <tr>
            <td>exifOrientation</td>
            <td>see https://stackoverflow.com/a/32490603/10395024.</td>
            <td></td>
            <td>Number</td>
        </tr>
        <tr>
            <td>fileType</td>
            <td>FileType override.</td>
            <td></td>
            <td>image/png, image/jpeg, image/jpg</td>
        </tr>
        <tr>
            <td>initialQuality</td>
            <td>Initial quality value.</td>
            <td>1</td>
            <td> between 0 and 1</td>
        </tr>
    </tbody>
</table>

<br/>

## Support

<a href="https://www.buymeacoffee.com/fsyed7x" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" height=60 width=217 ></a>
<br/>
# License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/FSYED7X/react-img-input/blob/master/LICENCE) file for details