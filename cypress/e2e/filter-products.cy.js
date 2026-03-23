describe('Filtro de productos', () => {
  it('permite filtrar productos por categoría', () => {
    cy.visit('/')

    cy.contains('Filtrar por categoría').should('exist')
  })
})