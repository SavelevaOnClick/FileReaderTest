const input = document.body.appendChild(document.createElement('input'))
input.type = 'file'
input.setAttribute('multiple', '')
input.style = `
    width: 300px;
`
function parse (array) {
      const reader = new FileReader()
  reader.readAsDataURL(array[0])
 reader.onload = function (event) {
  let image = document.body.appendChild(document.createElement('img'))
  image.src = event.target.result
  image.style = `
   width: 150px;
    display: inline-block;
    margin: 0 10px;
 `
  array.shift()
  ourGallery.push(image)
  reader.readyState === 2 && array.length !==0 && parse(array)
 }
}

const ourGallery = []
input.onchange = function (event) {
      const bufferArray = Array.from(event.target.files)
      parse(bufferArray)
  }
