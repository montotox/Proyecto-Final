function onFormSubmit() {
    fetch("http:/localhost:8080/api/save", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
          body: JSON.stringify(readFormData()) // body data type must match "Content-Type" header

    }).then(function (response){
        return response.text();
    }).then(function (data){
        console.log(data);
    })
}

function readFormData() {
    var formData = {};
    formData["title"] = document.getElementById("title").value;
    formData["description"] = document.getElementById("description").value;
    formData["price"] = document.getElementById("price").value;
    formData["stock"] = document.getElementById("stock").value;
    return formData;
}


const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container);
var baseDeDatos = [];
fetch("http:/localhost:8080/api/all")
    .then(function (response){
        return response.json();
    }).then(function (data){
        baseDeDatos = (data);
        console.log(baseDeDatos);
    }).catch(function(error){
        console.log("El error fue: " + error);
    })
