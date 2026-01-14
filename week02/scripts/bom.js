const input = document.querySelector('#favchap');
const list = document.querySelector('ul');
const button = document.querySelector('button');

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
