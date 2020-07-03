describe('Servers test (with setup and tear-down)', function() {
	beforeEach(function() {
		// initialization logic
		let serverId = 0;
		serverNameInput.value = 'Alice';
		let serverTbody = document.querySelector('#serverTable tbody');
	});

	it('should add a new server to allServers on submitServerInfo()', function() {
		submitServerInfo();
		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers['server' + serverId].serverName).toEqual('Alice');
		expect(serverId).toEqual(1);
	});

	afterAll(function() {
		serverTbody.deleteRow(0);
		let serverId = 0;
		delete allServers.server1;
	});
});

describe('Servers test for updateServerTable func', function() {
	beforeEach(function() {
		let serverTbody = document.querySelector('#serverTable tbody');
	});

	it('should test updateServerTable function', function() {
		var allServers = { server1: 'Jake', server2: 'Melissa', server3: 'Karen' };
		tipAmt = 100;
		updateServerTable(allServers);
		console.log(allServers);
		console.log(serverTbody.rows.length);
		expect(serverTbody.rows.length).toEqual(3);
	});

	afterAll(function() {
		//serverTbody.deleteRow(0);
		//serverTbody.deleteRow(-1);
		//serverTbody.deleteRow(2);
	});
});
