it("titles are correct", () => {
  const page = cy.visit("/");

  page.get("title").should("have.text", "Yusuf Fakhri - Software Engineer");
  page.get("h1").should("have.text", "Hi, I'm Yusuf");
});
