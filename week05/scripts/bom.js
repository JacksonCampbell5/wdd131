const input = document.querySelector('#favchap');
const list = document.querySelector('ul');
const button = document.querySelector('button');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener('click', () => {
  if (input.value != '') {  
    displayList(input.value); 
    chaptersArray.push(input.value);  
    setChapterList(); 
    input.value = ''; 
    input.focus(); 
  }
});

function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item;
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete'); 
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus(); 
  });
  console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length – 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}

button.addEventListener('click', function() {
    if (input.value.trim() !=='') {
        const li = document.createElement('li');
        li.textContent = input.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "❌";
        li.append(deleteButton);
        list.append(li);
        input.value = '';
        input.focus();

        deleteButton.addEventListener('click', function(){
            list.removeChild(li);
            input.focus();
        });

    };
});
