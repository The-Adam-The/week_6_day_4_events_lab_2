document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const handleForm = function(event) {
    event.preventDefault()
    console.log('the form event listener is working');
    // console.log(event.target.title.value);
    // console.log(event.target.author.value);
    // console.log(event.target.category.value);

    const listItem = document.createElement('li')
    
    const titleListItem = document.createElement('p');
    titleListItem.textContent = `Title: ${event.target.title.value}`;

    const authorListItem = document.createElement('p')
    authorListItem.textContent = `Author: ${event.target.author.value}`;

    const categoryListItem = document.createElement('p');
    categoryListItem.textContent = `Category: ${event.target.category.value}`

    const list = document.querySelector('#reading-list');
    list.appendChild(listItem);
    listItem.appendChild(titleListItem)
    listItem.appendChild(authorListItem)
    listItem.appendChild(categoryListItem)
    
    form.reset()

  }

  const form = document.querySelector('#new-item-form');
  const list = document.querySelector('#reading-list');
  const header = document.querySelector('h1')

  form.addEventListener('submit', handleForm);

  const deleteButton = document.createElement('button')
  deleteButton.innerText = "Delete All"
  header.appendChild(deleteButton)

  const deleteAllItems = function() {

    console.log('button is working')
    for(li of list) {
      li.removeChild()
    }
  } 

  deleteButton.addEventListener('click', deleteAllItems)

})
