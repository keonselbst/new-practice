export const grsc = () => {
  const grayscale = document.querySelector('#grayscale')
const img = document.querySelector('#imace') 

grayscale.addEventListener('input', updateFilterValue)

function updateFilterValue() {
  img.style.filter = `
  grayscale(${grayscale.value}%)
  `
}
};



export const handleDrop = (event) => {
  event.preventDefault();
  event.stopPropagation()
  if (event.dataTransfer.files && event.dataTransfer.files.length){
    setImage(event.dataTransfer.files[0]);
      fileReader.readAsDataURL(event.dataTransfer.files[0]);
  }
}

export const handleDragEmpty = (event) => {
  event.preventDefault();
  event.stopPropagation()
}


