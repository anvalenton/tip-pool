describe('check payment functions', function() {
	beforeEach(function() {
		// initialization logic
	});

	it('should check createCurPayment func', function() {
		billAmtInput.value = 500;
		tipAmtInput.value = 20;

		expect(createCurPayment()).toBeInstanceOf(Object);
		expect(Object.keys(createCurPayment()).length).toEqual(3);
	});

	it('should check appendPaymentTable func', function() {
		curPayment = { paymentTest: { billAmt: 500, tipAmt: 100, tipPercent: 20 } };

		appendPaymentTable(curPayment);
		expect(paymentTbody.rows.length).toEqual(1);
	});

	it('should check updateSummary func', function() {
		allPayments.payment1 = { billAmt: 500, tipAmt: 100, tipPercent: 20 };

		updateSummary();
		expect(summaryTds[0].innerHTML).toEqual('$500');
	});

	afterAll(function() {
		billAmtInput.value = '';
		tipAmtInput.value = '';
		paymentTbody.deleteRow(-1);
		let summaryTbody = document.querySelector('#summaryTable tbody');
		summaryTbody.deleteRow(-1);
		allPayments = {};
	});
});

describe('check only submitPaymentInfo func', function() {
	it('should check submitPaymentInfo func', function() {
		//set input values for fields
		billAmtInput.value = 500;
		tipAmtInput.value = 100;

		submitPaymentInfo();

		expect(paymentId).toEqual(1);
		expect(summaryTds[0].innerHTML).toEqual('$500');
	});

	afterAll(function() {
		billAmtInput.value = '';
		tipAmtInput.value = '';
		paymentTbody.deleteRow(-1);
		allPayments = {};
	});
});
