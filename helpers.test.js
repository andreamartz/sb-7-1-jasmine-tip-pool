describe("Helpers tests (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 50;
    tipAmtInput.value = 10;
  });

  it("should return the correct total of payments on sumPaymentTotal() for all payment types", function () {
    submitPaymentInfo();
    expect(sumPaymentTotal("tipAmt")).toEqual(10);
    expect(sumPaymentTotal("billAmt")).toEqual(50);
    expect(sumPaymentTotal("tipPercent")).toEqual(20);

    billAmtInput.value = 100;
    tipAmtInput.value = 15;
    submitPaymentInfo();

    expect(sumPaymentTotal("tipAmt")).toEqual(25);
    expect(sumPaymentTotal("billAmt")).toEqual(150);
    expect(sumPaymentTotal("tipPercent")).toEqual(35);
  });

  it("should calculate the correct tip percentage on calculateTipPercent()", function () {
    expect(calculateTipPercent(60, 15)).toEqual(25);
  });

  it("should append a new data cell (td element) on appendTd(tr, value)", function () {
    let newTr = document.createElement("tr");
    appendTd(newTr, "$75");
    expect(newTr.children[0].innerText).toEqual("$75");
    appendTd(newTr, "$15");
    expect(newTr.children.length).toEqual(2);
    expect(newTr.children[1].innerText).toEqual("$15");
  });

  it("should generate delete td and append to tr on appendDeleteBtn(tr)", function () {
    let newTr = document.createElement("tr");

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("X");
  });

  afterEach(function () {
    // teardown logic
    billAmtInput.value = "";
    tipAmtInput.value = "";
    // undo submitPaymentInfo()
    paymentId = 0;
    allPayments = {};
    // undo appendPaymentTable()
    paymentTbody.innerHTML = "";
    // undo updateServerTable()
    serverTbody.innerHTML = "";
    // undo updateSummary()
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    // undo sumPaymentTotal()
    total = 0;
  });
});
