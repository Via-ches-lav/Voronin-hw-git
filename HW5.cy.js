describe('Positive test suit for Block form', () => {
    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
        cy.get('[alt="Dark Theme"]').click()
        cy.get('[title="Modal & Overlays"]').click()
        cy.get('[title="Toastr"]').click()
    })
    const testToastForm = (toastPlace, toastType, toastTitleExpected, toastContentExpected, toastColorExpected, toastIconExpected, toastPosition, toastPositionPropertyOne, toastPropertyValueOne, toastPositionPropertyTwo, toastPropertyValueTwo) =>
        function () {
            cy.get('.position-select').click()
            cy.get(toastPlace).click()
            cy.get('[name="title"]').clear().type(toastTitleExpected)
            cy.get('[name="content"]').clear().type(toastContentExpected)
            cy.get('[name="timeout"]').clear().type('10000')
            cy.get('.mat-ripple .select-button').eq(2).click()
            cy.get(toastType).click()
            cy.get('nb-card-footer button').eq(0).click()
            cy.get('.destroy-by-click').should('have.css', 'background-color').and('eq', toastColorExpected)
            cy.get(toastIconExpected).should('be.visible')
            cy.get(toastPosition).should('have.css', toastPositionPropertyOne).and('eq', toastPropertyValueOne)
            cy.get(toastPosition).should('have.css', toastPositionPropertyTwo).and('eq', toastPropertyValueTwo)
        }

    it('Test success toast', testToastForm('#nb-option-25', '#nb-option-33', 'Test title', 'Test content', 'rgb(0, 214, 143)', '[data-name="checkmark"]', '.toastr-overlay-container', 'justify-content', 'flex-start', 'align-items', 'flex-start'))

    it('Test primary toast', testToastForm('#nb-option-24', '#nb-option-32', 'Test title', 'Test content', 'rgb(51, 102, 255)', '[data-name="email"]', '.toastr-overlay-container', 'justify-content', 'flex-end', 'align-items', 'flex-start'))

    it('Test info toast', testToastForm('#nb-option-26', '#nb-option-34', 'Test title', 'Test content', 'rgb(0, 149, 255)', '[data-name="question-mark"]', '.toastr-overlay-container', 'justify-content', 'flex-start', 'align-items', 'flex-end'))

    it('Test warning toast', testToastForm('#nb-option-27', '#nb-option-35', 'Test title', 'Test content', 'rgb(255, 170, 0)', '[data-name="alert-triangle"]', '.toastr-overlay-container', 'justify-content', 'flex-end', 'align-items', 'flex-end'))
})
