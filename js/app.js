(function(){
    let listContainer = document.querySelector('[data-list]');
    let newListInput = document.querySelector('[data-new-list-input]');
    let newListbtn = document.querySelector('[data-new-list-btn]');
    
    let LOCAL_STORAGE_LIST_KEY = 'task.category';

    let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY))||[];
    


    newListbtn.addEventListener('click',e=>{
        e.preventDefault();
        let listName = newListInput.value;
        if(!listName){return}
        let list = creatList(listName);
        newListInput.value = null;
        lists.push(list);
        saveAndRender()
    })

    function creatList(name){
        return {
            id: Date.now().toString(),
            name: name,
            tasks: []
        }

    }


    // save and rendering function
    function saveAndRender(){
        save();
        render()
    }


    // saving category list on localStorage
    function save(){
        localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
    }



    // renduring the list items
    function render(){
        // <li class="list-name">Market</li>
        clearElement(listContainer);

        lists.forEach(list => {
            let listElements = document.createElement('li');
            listElements.classList.add('list-name');
            listElements.dataset.listId = list.id;
            listElements.innerText = list.name;
            listContainer.appendChild(listElements);
            console.log('listContainer: ', listContainer);
        })

    }



    function clearElement(element){
        while(element.firstChild){
            element.removeChild(element.firstChild);
        }
    }

    render()




})()