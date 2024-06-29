//Enter name and email address
    Cypress.Commands.add('fillForm', (name,email) => {
    cy.get('[placeholder="Name"]').first().type(name)
    .wait(10)
    cy.get('[placeholder="Email Address"]').eq(1).type(email)
})
Cypress.Commands.add('generateRandomName', () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let name = ''
    for (let i = 0; i < 8; i++) {
      name += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return name
  })
  
  // Fungsi untuk menghasilkan email acak
  Cypress.Commands.add('generateRandomEmail', () => {
    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'example.com']
    const randomDomain = domains[Math.floor(Math.random() * domains.length)]
    const username = Cypress._.random(0, 1e6)
    return `${username}@${randomDomain}`
  })
    