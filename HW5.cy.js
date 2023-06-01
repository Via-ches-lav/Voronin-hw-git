describe('Positive test suit for Block form', () => {
    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
        cy.get('[alt="Dark Theme"]').click()
        cy.get('[title="Modal & Overlays"]').click()
        cy.get('[title="Toastr"]').click()
    })
    const TestToastForm = (ToastType, ToastTitleExpected, ToastContentExpected, ToastColorExpected, ToastIconExpected) =>
        function () {
            cy.get('.position-select').click()
            cy.get('#nb-option-25').click()
            cy.get('[name="title"]').clear().type(ToastTitleExpected)
            cy.get('[name="content"]').clear().type(ToastContentExpected)
            cy.get('[name="timeout"]').clear().type('10000')
            cy.get('.mat-ripple .select-button').eq(2).click()
            cy.get(ToastType).click()
            cy.get('nb-card-footer button').eq(0).click()
            cy.get('.destroy-by-click').should('have.css', 'background-color').and('eq', ToastColorExpected)
            cy.get(ToastIconExpected).should('be.visible')
        }

    it('Test success toast', TestToastForm('#nb-option-33', 'Test title', 'Test content', 'rgb(0, 214, 143)', '[data-name="checkmark"]'))

    it('Test primary toast', TestToastForm('#nb-option-32', 'Test title', 'Test content', 'rgb(51, 102, 255)', '[data-name="email"]'))

    it('Test info toast', TestToastForm('#nb-option-34', 'Test title', 'Test content', 'rgb(0, 149, 255)', '[data-name="question-mark"]'))

    it(
        'Test warning toast',
        TestToastForm('#nb-option-35', 'Test title', 'Test content', 'rgb(255, 170, 0)', '[data-name="alert-triangle"]')
    )
})
