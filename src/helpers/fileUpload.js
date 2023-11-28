export const fileUpload = async(file)=>{
  if(!file) throw new Error('no existe el archivo')
  const cloudUrl = 'https://api.cloudinary.com/v1_1/doskuoem5/upload';
  const formData = new FormData();
  formData.append('upload_preset', 'react_journal');
  formData.append('file', file);
  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData
    });
    if(!resp.ok) throw new Error('error al subir');
    const cloudResp = await resp.json();
    return cloudResp.secure_url;
  } catch (error) {
    console.error(error);
    throw new Error(error.message)
  }
}