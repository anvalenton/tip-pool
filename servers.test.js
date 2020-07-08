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
		serverNameInput.value = '';
	});
});

describe('testing only updateServerTable', function() {
	beforeEach(function() {
		// initialization logic
		allServers['server2'] = 'Becky';
		allServers['server3'] = 'Tricia';
		let serverTbody = document.querySelector('#serverTable tbody');
	});

	it('should test updateServerTable function', function() {
		updateServerTable();
		expect(serverTbody.rows.length).toEqual(2);
	});

	afterAll(function() {
		serverTbody.deleteRow(-1);
		serverTbody.deleteRow(-1);
		delete allServers.server2;
		delete allServers.server3;
	});
});
