'use client'


import { useState } from 'react'
import { serverActionUpload } from './action'

import { base64, raw } from './data'

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const [img, setImg] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const input = event.currentTarget.querySelector(
      `input[type=file]`,
    ) as HTMLInputElement
    let file = input?.files?.[0] as unknown as File
    const fd = new FormData()
    fd.append('file', file)
    serverActionUpload(fd).then(() => {
      setImg(raw)
    })
  }

  return <form onSubmit={handleSubmit}>
    <input type="file" />
    <button type='submit'>Click me</button>
    {img && <img src={img} />}
  </form>;
}


