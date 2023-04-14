let update = false;


window.addEventListener("load", () => {
	
	if (localStorage.length != 0) {
		for (let keys in localStorage) {
			let container = document.querySelector(".data");
			let a = document.createElement("div");
			a.setAttribute("class", "data-container");
			
			if (localStorage.getItem(keys) != null) {
				let senddata = `
		   
				<div class="dataview">
					<input type="checkbox" class="myCheckbox" onclick="checkbox(this)"/>
					<p class="inputdata">${localStorage.getItem(keys)}</p>
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
			}
		}
	}
});
function add() {
	let data = document.getElementById("getdata");
	if (data.value) {
		if (!update) {
			let container = document.querySelector(".data");
			let a = document.createElement("div");
			a.setAttribute("class", "data-container");
			localStorage.setItem(Math.floor(Math.random() * 90) + 10, data.value);
			
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
			data.value = "";
		} else {
			let getalldata = document.querySelector("#updating");
			let g = document.querySelector("#getdata");
			let getdata = getalldata.parentElement.previousElementSibling.lastElementChild;
			getdata.innerText = g.value;

			getalldata.removeAttribute("id");
			update = false;
			let addButton = document.querySelector(".addbtn");
			addButton.innerText = "Add";
			data.value = "";
		}
	} else alert("Enter value");
}

function edit(data) {
	
	data.setAttribute("id", "updating");
	let getdata = data.parentElement.previousElementSibling.lastElementChild;
	

	let changeData = document.getElementById("getdata");
	changeData.value = getdata.innerText;

	let updateButton = document.querySelector(".addbtn");
	updateButton.innerText = "Update";
	update = true;
}

function remove(data) {
	let verifyLocal = data.parentElement.previousElementSibling.lastElementChild.innerText;
	
	for (let keys in localStorage) {
		
		

		if (localStorage.getItem(keys) === verifyLocal) {
			localStorage.removeItem(keys);
		}
	}
	let element = data.parentElement.parentElement;
	let main = data.parentElement.parentElement;
	main.remove(element);
}

function checkbox(element) {
	let a = element;
	a.parentElement.lastElementChild.classList.toggle("strikethrough");
	
}

function storage() {}
