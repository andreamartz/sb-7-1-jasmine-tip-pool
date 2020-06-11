describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should add a table row element to the server table", function () {
    submitServerInfo();
    const serverRows = serverTbody.querySelectorAll("#serverTable tbody > tr");
    expect(serverRows.length).toEqual(1);
  });

  afterEach(function () {
    // teardown logic\
    serverTbody.innerHTML = "";
    allServers = {};
    serverId = 0;
  });
});
