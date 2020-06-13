describe("Payments tests (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    allPayments = {};
    paymentId = 0;
  });

  it("should ... on submitPaymentInfo()", function () {});

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

  it("should ... on appendPaymentTable()", function () {});

  it("should ... on updateSummary()", function () {});

  afterEach(function () {
    // teardown logic
    billAmtInput.value = "";
    tipAmtInput.value = "";
  });
});
