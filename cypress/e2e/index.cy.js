it("titles are correct", () => {
  const page = cy.visit("/");

  page.get("title").should("have.text", "Astro");
  page.get("h1").should("have.text", "Astro");
});
