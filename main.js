storage = JSON.parse(localStorage.getItem("data")) || []

function save(){
    localStorage.setItem("data", JSON.stringify(storage))
}

function render(text) {
    a = document.createElement("li")
    a.innerHTML = text
    a.addEventListener('click', (event) => a.innerHTML = ["ЛОЖЬ", "ИСТИНА"][+event.altKey] );
    textValue.value = ""
    list.append(a)
}

function del(index) {
    
}

function addNewZadacha(text) {
    storage.push(text)
    render(text)
    save()
}

for (let i = 0; i < storage.length; i++) {
    render( storage[i] )
}

textValue.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        addNewZadacha(textValue.value)
    }
})

textValue.addEventListener('click', (event) => alert( ["ЛОЖЬ", "ИСТИНА"][+event.altKey]) );