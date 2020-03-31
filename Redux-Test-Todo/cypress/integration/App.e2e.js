describe("App E2E", () => {
  it("기초 테스트!!", () => {
    expect(true).to.equal(true);
  });
  it("헤더가 있어야 한다", () => {
    cy.visit("/");
    cy.get("h1").should("have.text", "Hello Todo");
  });
});

describe("Todo 테스트", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("생성시 클래스 있는지 확인", () => {
    cy.get(".change").should("be.visible");
    cy.get(".delete").should("be.visible");
    cy.get(".add").should("be.visible");
    cy.get(".input").should("be.visible");
  });

  it("input 테스트", () => {
    // input안에 텍스트는 ""이다.
    cy.get(".input").should("have.text", "");

    // input에 "placeholder:Insert Todo"가 있다.
    cy.get(".input")
      .should("have.class", "input")
      .and("have.attr", "placeholder", "Insert Todo");
  });

  it("list 테스트", () => {
    // list li가 3개 있다.
    cy.get(".todo-list li").should("have.length", 3);

    // list li의 첫번째에 HTML이 있다.
    cy.get(".todo-list li")
      .first()
      .contains("HTML");

    // 첫번쨰 버튼의 텍스트는 "back"
    cy.get(".change")
      .first()
      .should("have.text", "Back");

    cy.get(".delete")
      .first()
      .should("have.text", "Delete");
  });
  // const changeBtn = cy.get(".change");
  // const deleteBtn = cy.get(".delete");
  // const addBtn = cy.get(".add");
});
