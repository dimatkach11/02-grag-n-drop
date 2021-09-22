const items = document.querySelectorAll('.item')
const placeHolders = document.querySelectorAll('.placeholder')

placeHolders.forEach(placeHolder => {
  placeHolder.addEventListener('dragover', dragover)
  placeHolder.addEventListener('dragenter', dragenter)
  placeHolder.addEventListener('dragleave', dragleave)
  placeHolder.addEventListener('drop', dragdrop)
})

items.forEach(item => {
  item.addEventListener('dragstart', dragstart )
})

function dragstart(e) {
  const target = e.target
  console.log('drag start', target);

  target.classList.add('hold')
  setTimeout(() => {
    target.classList.add('hide')
  },0)
}
items.forEach(item => {
  item.addEventListener('dragend', dragend )
})

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
  items.forEach(item => {
    if (item.classList.contains('hold')) {
      if(target.classList.contains('item')) {
        console.log(target);
        target.parentNode.insertBefore(item, target)
      } else {
        target.append(item)
      }
    }
  })
  target.classList.remove('hovered')
}
