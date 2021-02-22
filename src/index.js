import React, { Fragment, useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
import imageCompression from 'browser-image-compression'
var Clipper = require('image-clipper')
var Crop = require('tinycrop')

const defaultBase64 =
  'data:image/png;base64,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'

var options = {
  maxSizeMB: 0.1,
  maxWidthOrHeight: 500,
  useWebWorker: true
}

const initiate = (setCropDialog, setCropRegion, setTempImage, file) => {
  setTempImage()
  setCropDialog(true)

  imageCompression(file, options)
    .then(function (compressedFile) {
      var reader = new FileReader()
      reader.readAsDataURL(compressedFile)
      reader.onloadend = function () {
        setTempImage(reader.result)
      }
    })
    .catch(function (error) {
      console.log(error.message)
    })
}

const initCropWindow = (img, setCropRegion) => {
  if (img) {
    document.getElementById('ReactImgInputCropMountLocation').innerHTML = ''
    var crop = Crop.create({
      parent: document.getElementById('ReactImgInputCropMountLocation'),
      image: img,
      bounds: {
        width: '100%',
        height: '100%'
      },
      backgroundColors: ['transparent', 'transparent'],
      selection: {
        activeColor: 'crimson',
        aspectRatio: 1,
        minWidth: 100,
        minHeight: 100
      }
    })
    document.getElementById(
      'ReactImgInputCropMountLocation'
    ).style.backgroundColor = '#ccc'
    crop.on('change', (region) => setCropRegion(region))
  }
}

const cropImage = (image, region, setImage, setCropDialog, setLoading) => {
  setCropDialog(false)
  setLoading(true)
  const { x, y, height, width } = region
  Clipper(image, function () {
    this.crop(x, y, height, width).toDataURL(function (dataUrl) {
      setImage(dataUrl)
      setLoading(false)
    })
  })
}

export const ReactImgInput = ({ config }) => {
  const { size, captureBtnBg, captureBtnIconColor, defaultImg } = config

  const input = useRef()
  const [Image, setImage] = useState()
  const [tempImage, setTempImage] = useState()
  const [cropDialog, setCropDialog] = useState(false)
  const [cropRegion, setCropRegion] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    cropDialog && initCropWindow(tempImage, setCropRegion)
  }, [cropDialog, tempImage])

  return (
    <Fragment>
      <main id={styles.ReactImgInput}>
        <input
          type='file'
          ref={input}
          accept='image/*'
          onInput={(e) =>
            initiate(
              setCropDialog,
              setCropRegion,
              setTempImage,
              e.target.files[0]
            )
          }
        />
        <img
          src={Image || defaultImg || defaultBase64}
          onClick={() => (Image ? setCropDialog(true) : input.current.click())}
        />
        {loading ? (
          <aside />
        ) : !Image ? (
          <button
            onClick={() => input.current.click()}
            style={{ backgroundColor: '#3498db' }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1={12} y1={5} x2={12} y2={19} />
              <line x1={5} y1={12} x2={19} y2={12} />
            </svg>
          </button>
        ) : (
          <button
            onClick={() => {
              setCropDialog(true)
            }}
            style={{ backgroundColor: '#F4B230' }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <circle cx={12} cy={12} r={10} />
              <line x1={22} y1={12} x2={18} y2={12} />
              <line x1={6} y1={12} x2={2} y2={12} />
              <line x1={12} y1={6} x2={12} y2={2} />
              <line x1={12} y1={22} x2={12} y2={18} />
            </svg>
          </button>
        )}
      </main>
      {cropDialog && (
        <Modal
          close={() => {
            input.current.value = null
            setCropDialog(false)
          }}
          recapture={() => {
            input.current.value = null
            input.current.click()
            setCropDialog(false)
          }}
          save={() => {
            input.current.value = null
            cropImage(
              tempImage,
              cropRegion,
              setImage,
              setCropDialog,
              setLoading
            )
          }}
        />
      )}
    </Fragment>
  )
}

const Modal = ({ close, recapture, save }) => {
  return (
    <main id={styles.ReactImgInputCropModal}>
      <section>
        <h1>Crop Image</h1>
        <article id='ReactImgInputCropMountLocation'>
          <aside className='loader' />
          Compressing...
        </article>
        <div>
          <button onClick={close} data-danger>
            Cancel
          </button>
          <button onClick={recapture} data-warning>
            Recapture
          </button>
          <button onClick={save} data-primary>
            Save
          </button>
        </div>
      </section>
    </main>
  )
}
