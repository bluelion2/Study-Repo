describe("App E2E", () => {
  it("기초 테스트!!", () => {
    expect(true).to.equal(true);
  });
  it("헤더가 있어야 한다", () => {
    cy.visit("/");

    cy.get("h1").should("have.text", "Hello Todo");
  });
});
