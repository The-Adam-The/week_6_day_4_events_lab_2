document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const handleForm = function(event) {
    event.preventDefault()
    console.log('the form event listener is working');
    // console.log(event.target.title.value);
    // console.log(event.target.author.value);
    // console.log(event.target.category.value);

    const titleListItem = document.createElement('li')
    titleListItem.textContent = `${event.target.title.value}`

    const list = document.querySelector('#reading-list')
    list.appendChild(titleListItem)

  }

  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', handleForm)
})
