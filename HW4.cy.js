describe('Positive test suit for Block form', () => {
    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
        cy.get('[alt="Dark Theme"]').click()
        cy.get('[title="Forms"]').click()
        cy.get('[title="Form Layouts"]').click()
    })
    const TestBlockForm = (
        FirstNameTestData,
        FirstNameExpectedResult,
        LastNameTestData,
        LastNameExpectedResult,
        EmailTestData,
        EmailExpectedResult,
        WebsiteTestData,
        WebsiteExpectedResult
    ) =>
        function () {
            cy.get('#inputFirstName').type(`${FirstNameTestData}`).blur()
            cy.get('#inputFirstName').should('have.value', `${FirstNameExpectedResult}`)
            cy.get('#inputLastName').type(`${LastNameTestData}`)
            cy.get('#inputLastName').should('have.value', `${LastNameExpectedResult}`)
            cy.get('#inputEmail').type(`${EmailTestData}`)
            cy.get('#inputEmail').should('have.value', `${EmailExpectedResult}`)
            cy.get('#inputWebsite').type(`${WebsiteTestData}`)
            cy.get('#inputWebsite').should('have.value', `${WebsiteExpectedResult}`)
        }

    it(
        'Positive test on Block form',
        TestBlockForm('Viacheslav', 'Viacheslav', 'Vor', 'Vor', 'vor@gmail.com', 'vor@gmail.com', 'www.vor.com', 'www.vor.com')
    )
})
