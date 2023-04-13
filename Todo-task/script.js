let update = false;
function add() {
	if (!update) {
		let data = document.getElementById("getdata");
		let container = document.querySelector(".data");
		let a = document.createElement("div");
		a.setAttribute("class", "data-container");

		let senddata = `
       
                    <div class="dataview">
                        <input type="checkbox" class="myCheckbox" onclick="checkbox(this)"/>
                        <p class="inputdata">${data.value}</p>
                    </div>
                    <div class="dataoperation">
                        <button class="deletebtn" onclick="remove(this)">
                        delete
                        </button>
                    
                        <button class="editbtn" onclick="edit(this)">
                        Edit
                        </button>
                    </div>
                `;
		a.innerHTML = senddata;
		container.append(a);
		data.value = " ";
	} else {
		let getalldata = document.querySelector("#updating");
		let g = document.querySelector("#getdata");
		let getdata = getalldata.parentElement.previousElementSibling.lastElementChild;
		getdata.innerText = g.value;

		getalldata.removeAttribute("id");
		update = false;
		let addButton = document.querySelector(".addbtn");
		addButton.innerText = "Add";
	}
}

function edit(data) {
	console.log(data);
	data.setAttribute("id", "updating");
	let getdata = data.parentElement.previousElementSibling.lastElementChild;
	console.log(getdata.innerText);

	let changeData = document.getElementById("getdata");
	changeData.value = getdata.innerText;

	let updateButton = document.querySelector(".addbtn");
	updateButton.innerText = "Update";
	update = true;
}

function remove(data) {
	let element = data.parentElement.parentElement;
	let main = data.parentElement.parentElement;
	main.remove(element);
}

function checkbox(element) {
	let a = element;
	a.parentElement.lastElementChild.classList.toggle("strikethrough");
	console.log(element);
}

// var myCheckbox = document.querySelector(".myCheckbox");
// var textToStrike = document.querySelector(".inputdata");

// myCheckbox.addEventListener("click", function () {
// 	if (myCheckbox.checked) {
// 		textToStrike.classList.add("strikethrough");
// 	} else {
// 		textToStrike.classList.remove("strikethrough");
// 	}
// });
