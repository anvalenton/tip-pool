describe('check functions in helpers file', function() {
	beforeEach(function() {
		// initialization logic
	});

	it('check appendTD func', function() {
		let newTrTest = document.createElement('tr');
		valueX = 500;
		tip = 50;
		percent = 10;
		appendTd(newTrTest, '$' + valueX);

		paymentTbody.append(newTrTest);

		expect(paymentTbody.rows.length).toEqual(1);
		expect(paymentTbody.rows[0].cells).toBeInstanceOf(Object);
		expect(paymentTbody.rows[0].cells[0].innerText).toEqual('$500');
	});

	it('check calculateTipPercent func', function() {
		expect(calculateTipPercent(100, 10)).toEqual(10);
		expect(calculateTipPercent(123456789, 12)).toBeCloseTo(0, 0);
	});

	it('check sumPaymentTotal func', function() {
		allPayments.payment1 = { billAmt: 500, tipAmt: 100, tipPercent: 20 };
		allPayments.payment2 = { billAmt: 100, tipAmt: 20, tipPercent: 20 };

		expect(sumPaymentTotal('billAmt')).toEqual(600);
	});

	it('check appendDeleteBtn func', function() {
		let testTR = document.createElement('tr');
		appendDeleteBtn(testTR);
		expect(testTR.cells.length).toEqual(1);
		expect(testTR.cells[0].innerText).toEqual('X');
	});

	it('check appendDeleteBtn func', function() {
		let testTR = document.createElement('tr');
		appendDeleteBtn(testTR);
		expect(testTR.cells.length).toEqual(1);
		expect(testTR.cells[0].innerText).toEqual('X');
	});

	afterAll(function() {
		paymentTbody.deleteRow(0);
		delete allPayments['payment1'];
		delete allPayments['payment2'];
		delete testTR;
	});
});

////below code will not work bec the function contains target. TA advised I could use Enzyme to look into simulating a click on a test
//
//describe('check functions in helpers file', function() {
//	it('check deleteRow func', function() {
//		let deleteThisTR = document.createElement('tr');
//		let deleteThisTD = document.createElement('td');
//		deleteThisTD.innerText = 'X';
//		deleteThisTR.id = 'paymenttestdelete';
//		allPayments['paymenttestdelete'] = { billAmt: 0, tipAmt: 0, tipPercent: 0 };
//
//		let targetCell = deleteThisTR.cells[0];
//
//		targetCell.click();
//
//		deleteRow(targetCell);
//
//		expect(deleteThisTR).toBeUndefined();
//		expect(allPayments['paymenttestdelete']).toBeUndefined();
//
//
//	});
//
//	afterAll(function() {
//
//	});
//});
