describe('Lambda Eats', () => {
  it('open the form and input text for special instructions', () => {
    cy.visit('')
    cy.contains('Order').click()
    cy.get("form textarea[name='specialInstructions']")
      .type('do a headstand as you approach the door')
      .should('contain', 'do a headstand as you approach the door')
  })

  it('add more than one topping', () => {
    cy.visit('')
    cy.contains('Order').click()
    cy.get("input[name='spinach']").click().should('be.checked')
    cy.get("input[name='pineapple']").click().should('be.checked')
    cy.get("input[name='redPeppers']").should('not.be.checked')
  })

  it('email validation', () => {
    cy.visit('')
    cy.contains('Order').click()
    cy.get('input[name=email').type('faultyemail.com')
    cy.contains('must be a valid email address').should('be.visible')
  })

  it('can submit to backend', () => {
    cy.visit('')
    cy.contains('Order').click()
    cy.get("select[name='size']").select(['small'])
    cy.get("select[name='base']").select(['pomodoro'])
    cy.get('input[name=name]').type('my name')
    cy.get('input[name=email]').type('email@email.com')
    cy.get('button[type=submit]').click()
  })
})
