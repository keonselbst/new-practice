import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'


function App() {
  const [image, setImage] = useState()
  const [imageURL, setImageURL] = useState()
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  }
  const handleOnChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
  setImage(file); 
  fileReader.readAsDataURL(file);
  }
  
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation()
    if (event.dataTransfer.files && event.dataTransfer.files.length){
      setImage(event.dataTransfer.files[0]);
        fileReader.readAsDataURL(event.dataTransfer.files[0]);
    }
  }

  const handleDragEmpty = (event) => {
    event.preventDefault();
    event.stopPropagation()
  }


  return (
    <div>
      <div>
      <h1>
        Обработка Изображения в ч/б
      </h1>
      <label htmlFor="file" className="customFile">
       Открыть изображение
      </label>
      <input type="file" id="file" className="file"
      onChange={handleOnChange}/>
       </div>
        <img src={imageURL ? imageURL : "no_image.jpg"} className="card" alt="preview"
        onDrop={handleDrop}
        onDragEnter={handleDragEmpty}
        onDragOver={handleDragEmpty}
        />
        <button onClick=""
        class="btnChange">Изменить</button>
     </div>
  )
};

export default App