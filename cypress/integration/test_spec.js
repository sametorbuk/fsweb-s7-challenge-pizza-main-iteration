


describe('Sayfa Görünürlük Kontrolü', () => {
    it('ilk sayfayı ziyaret et ve bir elemanın görünür olup olmadığını kontrol et', () => {
        cy.visit('http://localhost:5173/'); 
       
        cy.get('[data-cy="main-page-header"]').should('be.visible'); 
        cy.get('[data-cy="main-page-order-btn"]').should('be.visible'); 
    });
});


describe('Url control', () => {
    it('ilk sayfayı ziyaret et ve sipariş sayfasına yönel', () => {
        cy.visit('http://localhost:5173/'); 
       cy.get('[data-cy="main-page-order-btn"]').should('be.visible'); 
       cy.get('[data-cy="main-page-order-btn"]').should('be.visible').click();
       cy.url().should('include', '/order');
    });
});


describe('Url control', () => {
    it('ilk sayfayı ziyaret et ve sipariş sayfasına yönel', () => {
        cy.visit('http://localhost:5173/order'); 
       cy.get('[data-cy="main-page-order-btn"]').should('be.visible'); 
       cy.get('[data-cy="main-page-order-btn"]').should('be.visible').click();
       cy.url().should('include', '/order');
    });
});
