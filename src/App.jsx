import { useState } from 'react'
import { grsc,handleDrop,handleDragEmpty } from './App';

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

  return (
    <div>
      <h1>
        Обработка Изображения в ч/б
      </h1>

      <label htmlFor="file" className="customFile">
       Открыть изображение
      </label>
      <input type="file" id="file" className="file"
      onChange={handleOnChange}/>


       <img src={imageURL ? imageURL : "no_image.jpg"} className="card" alt="" id="imace"
        onDrop={handleDrop}
        onDragEnter={handleDragEmpty}
        onDragOver={handleDragEmpty}
        />
        
        <div class="wrapper">
          <label for="grayscale"></label>
          <input onClick={grsc} type="range" min="0" max="100" id="grayscale"/>
        </div>
    </div>
  )
  
};


export default App