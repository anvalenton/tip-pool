let serverNameInput = document.getElementById('serverName');
let serverForm = document.getElementById('serverForm');

let serverTbody = document.querySelector('#serverTable tbody');

let allServers = {};
let serverId = 0;

//once serverform is submitted  do function submitServerInfo
serverForm.addEventListener('submit', submitServerInfo);

// create server object and add to allServers, update html and reset input
//
function submitServerInfo(evt) {
	//if evt exists prevent default behavior
	if (evt) evt.preventDefault(); // when running tests there is no event
	//servername is whatever the input value is from servernameinput field
	let serverName = serverNameInput.value;

	//if servername is not empty do this
	//add to serverID count

	if (serverName !== '') {
		serverId++;
		//add new server name object to allServers object
		allServers['server' + serverId] = { serverName };

		updateServerTable();
		//empty the serVerNameInput field
		serverNameInput.value = '';
	}
}

// Create table row element and pass to appendTd function with input value
function updateServerTable() {
	//set server table body to empty
	serverTbody.innerHTML = '';
	console.log('im inside updateservertable');
	//for all the elements in allServers object
	for (let key in allServers) {
		//assign the new servername from allServers object to curServer
		let curServer = allServers[key];
		console.log('im inside the loop');
		//create new table row
		let newTr = document.createElement('tr');
		newTr.setAttribute('id', key);

		// total tip divided by number of servers
		let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;

		// add server name and tip average to table body
		appendTd(newTr, curServer.serverName);
		appendTd(newTr, '$' + tipAverage.toFixed(2));

		// add row to server table body
		serverTbody.append(newTr);
	}
}
