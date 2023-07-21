var bookNameInp = document.getElementById("bookName");
var bookUrlInp = document.getElementById("bookURL");
var tbody = document.getElementById("tbody");
var regexUrl =/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g;

var allbooks;
if(localStorage.getItem("myBooks") != null){
    allbooks = JSON.parse(localStorage.getItem("myBooks"));
    displayBooks();
}else{
    allbooks = [];
}

function addBook() {
    if (regexUrl.test(bookUrlInp.value) == false) {
        alert("Enter valid Url")
    }else{
        var book = {
          name: bookNameInp.value,
          url: bookUrlInp.value,
        };
        allbooks.push(book);
        localStorage.setItem("myBooks", JSON.stringify(allbooks));
        displayBooks();
        clearForm();
    }
}

function displayBooks() {
    var tableList = ``;
    for (var i = 0; i < allbooks.length; i++) {
        tableList += `<tr class="py-3">
        <th>${1 + i}</th>
        <td>${allbooks[i].name}</td>
        <td><a href="${
        allbooks[i].url
        }" class="btn btn-visit text-white"><i class="fa-solid fa-eye pe-1"></i> Visit</a></td>
        <td><button onclick = "deleteBook(${i})" class="btn btn-danger text-white"><i class="fa-solid fa-trash pe-1"></i> Delete</button></td>
        </tr>`;
    }
    tbody.innerHTML = tableList;
}

function deleteBook(index){
    allbooks = JSON.parse(localStorage.getItem("myBooks"));
    allbooks.splice(index,1);
    localStorage.setItem("myBooks" , JSON.stringify(allbooks));
    displayBooks();
}

function clearForm() {
    bookNameInp.value = ``;
    bookUrlInp.value = ``;
}


var nameRegex = /^\w{3,}(\s+\w+)*$/;
var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
