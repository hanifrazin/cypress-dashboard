describe('Upload file', function(){
    it('upload file', function(){
        cy.visit('https://admin.pkh.dojobox.id/');
        cy.get('#input-email').type('e@dojobox.id');
        cy.get('#input-password').type('admin');
        cy.get('#btn-login').click();
        cy.get('.d-flex > .btn').click();
        cy.get('input[type="file"]').attachFile('eevee.jpg');
        // cy.get('');
    })
});