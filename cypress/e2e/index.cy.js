it("titles are correct", () => {
  const page = cy.visit("/");

  page.get("title").should("have.text", "Astro is awesome!");
  page.get("h1").should("have.text", "Hello world from Astro");
});
