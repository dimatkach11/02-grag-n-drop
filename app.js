const item = document.querySelector('.item')
const placeHolders = document.querySelectorAll('.placeholder')

placeHolders.forEach(placeHolder => {
  placeHolder.addEventListener('dragover', dragover)
  placeHolder.addEventListener('dragenter', dragenter)
  placeHolder.addEventListener('dragleave', dragleave)
  placeHolder.addEventListener('drop', dragdrop)
})

item.addEventListener('dragstart', dragstart )

function dragstart(e) {
  const target = e.target
  // console.log('drag start', target);

  target.classList.add('hold')
  setTimeout(() => {
    target.classList.add('hide')
  },0)
}

item.addEventListener('dragend', dragend )

function dragend(e) {
  const target = e.target
  // console.log('drag end', target);

  target.className = 'item'
}


function dragover(e) {
  e.preventDefault();
}

function dragenter(e) {
  const target = e.target
  target.classList.add('hovered')
}

function dragleave(e) {
  const target = e.target
  target.classList.remove('hovered')
}

function dragdrop(e) {
  const target = e.target
  target.append(item)
  target.classList.remove('hovered')
}
