describe("Payments tests (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    allPayments = {};
    paymentId = 0;
  });

  it("should create an object containing correct bill amt, tip amt, and tip percent on createCurPayment()", function () {
    billAmtInput.value = 80;
    tipAmtInput.value = 16;
    expect(createCurPayment().billAmt).toEqual("80");
    expect(createCurPayment().tipAmt).toEqual("16");
    expect(createCurPayment().tipPercent).toEqual(20);
  });

  it("should not create an object on createCurPayment() when no bill amount", function () {
    expect(createCurPayment()).toEqual(undefined);
  });

  it("should append a table row on appendPaymentTable()", function () {
    billAmtInput.value = 80;
    tipAmtInput.value = 16;
    let curPayment = createCurPayment();
    appendPaymentTable(curPayment);
    expect(paymentTbody.children.length).toEqual(1);
  });

  it("should populate the summary table with three values on updateSummary()", function () {
    allPayments = {
      payment1: { billAmt: "100", tipAmt: "15", tipPercent: 15 },
    };
    expect(summaryTds.length).toEqual(3);
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
