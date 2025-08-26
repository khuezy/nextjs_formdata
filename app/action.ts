'use server'

export async function serverActionUpload(fd: FormData) {
  const file = fd.get('file') as unknown as File

  if (!file) {
    throw new Error('File is missing!')
  }
}