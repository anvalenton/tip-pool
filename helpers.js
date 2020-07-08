// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
	let total = 0;

	//loop through all key value pairs in allPayment
	for (let key in allPayments) {
		let payment = allPayments[key];
		//add given type of payment to total
		total += Number(payment[type]);
	}

	return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
	return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
	let newTd = document.createElement('td');
	newTd.innerText = value;

	tr.append(newTd);
}

function appendDeleteBtn(tr) {
	let newDeleteTd = document.createElement('td');
	newDeleteTd.innerText = 'X';
	tr.append(newDeleteTd);
}

function deleteRow(e) {
	if (e.target.innerText === 'X') {
		e.target.parentElement.remove();
		let deleteId = e.target.parentElement.id;
		if (deleteId[0] === 's') {
			delete allServers[deleteId];
		} else {
			delete allPayments[deleteId];
		}
	}
}
