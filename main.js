const input = document.body.appendChild(document.createElement('input'))
input.type = 'file'
input.setAttribute('multiple', '')
input.style = `
   // width: 300px;
`

const ourGallery = []
input.onchange = (function () {
  const bufferArray = []
  return function (event) {
    bufferArray.push(event.target.files[0])
    const reader = new FileReader()
      reader.readAsDataURL(bufferArray[0])
      reader.onload = function (event) {
        let image = document.body.appendChild(document.createElement('img'))
        image.src = event.target.result
        image.style = `
          width: 150px;
          display: inline-block;
          margin: 0 10px;
        `
        bufferArray.shift()
        ourGallery.push(image)
      }
  }
})()
