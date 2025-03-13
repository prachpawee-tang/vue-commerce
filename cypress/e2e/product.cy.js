describe('Product List', () => {
  it('displays products', () => {
    cy.visit('/products')
    cy.contains('Loading').should('exist')
    cy.get('.product').should('have.length.greaterThan', 0)
  })
})

describe('Cart', () => {
  it('adds a product to the cart and removes one at a time', () => {
    cy.visit('/')
    cy.get('.product button').first().click()
    cy.get('.product button').first().click() // Add same product twice
    cy.visit('/cart')
    cy.get('.cart-item').should('have.length', 1)
    cy.contains('x 2').should('exist') // Check quantity
    cy.get('button').contains('Remove').click()
    cy.contains('x 1').should('exist') // Check quantity after removal
  })
})
