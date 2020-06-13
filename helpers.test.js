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

  it("should append a new data cell (td element) on appendTd()", function () {
    let newTr = document.createElement("tr");
    appendTd(newTr, "$75");
    expect(newTr.children[0].innerText).toEqual("$75");
    appendTd(newTr, "Betty");
    expect(newTr.children.length).toEqual(2);
    expect(newTr.children[1].innerText).toEqual("Betty");
  });

  afterEach(function () {
    // teardown logic\
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

    // Q Q Q Q Q Q Q Q Q Q Q Q Q Q Q Q Q Q Q
    // Why does the following code not work?
    // for (td in summaryTds) {
    //   td.innerHTML = "";
    // }
    ////////////////////////////////////////

    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    // undo sumPaymentTotal()
    total = 0;
  });
});
