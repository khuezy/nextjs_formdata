'use client'


import { useState } from 'react'
import { serverActionUpload } from './action'

import { base64, raw } from './data'

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const [img, setImg] = useState('')
  function upload() {
    const file = new File([base64], 'hi.jpg', {
      type: 'image/png',
    })

    const fd = new FormData()
    fd.append('file', file)
    serverActionUpload(fd).then(() => {
      setImg(raw)
    })
  }

  return <div>
    <button onClick={upload}>Click me</button>
    {img && <img src={img} />}
  </div>;
}


