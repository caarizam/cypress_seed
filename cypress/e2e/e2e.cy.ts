
let username: string = Cypress.env('username');
let password: string = Cypress.env('password');
let environment: string = Cypress.env('password') ?? 'dev';

describe('e2e example', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io')

    })

    it('user login', () => {
        expect(true).to.be.equal(true)
    })
})
