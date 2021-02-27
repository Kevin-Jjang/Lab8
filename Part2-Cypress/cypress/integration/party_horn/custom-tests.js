describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes.', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(function ($el) {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes.', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(function ($el) {
      expect($el).to.have.value(33);
    });
  });

  it('Audio volume changes when slider changes.', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(function ($el) {
      expect($el).to.have.prop('volume', 0.33);
    });
  });
  
  // Test if image and sound sources change when party horn radio button selected
  it('Image and sound source change on air horn selection.', () => {
    cy.get('#radio-air-horn').check();
    cy.get('#sound-image')
      .should('have.attr', 'src')
      .should('contains', 'air-horn.svg');
    cy.get('#horn-sound')
      .should('have.attr', 'src')
      .should('contains', 'air-horn.mp3');
  });

  it('Image and sound source change on car horn selection.', () => {
    cy.get('#radio-car-horn').check();
    cy.get('#sound-image')
      .should('have.attr', 'src')
      .should('contains', 'car.svg');
    cy.get('#horn-sound')
      .should('have.attr', 'src')
      .should('contains', 'car-horn.mp3');
  });

  it('Image and sound source change on party horn selection.', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image')
      .should('have.attr', 'src')
      .should('contains', 'party-horn.svg');
    cy.get('#horn-sound')
      .should('have.attr', 'src')
      .should('contains', 'party-horn.mp3');
  });

  // Test if volume image changes when increasing volumes
  it('Volume image changes to level 0 when volume number is set to 0.', () => {
    cy.get('#volume-number').clear().type(0);
    cy.get('#volume-image')
      .should('have.attr', 'src')
      .should('contains', 'volume-level-0.svg');
    
  });

  it('Volume image changes to level 0 when volume slider is set to 0.', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image')
      .should('have.attr', 'src')
      .should('contains', 'volume-level-0.svg');
    
  });

  it('Volume image changes to level 1 when volume number is set to 1.', () => {
    cy.get('#volume-number').clear().type(1);
    cy.get('#volume-image')
      .should('have.attr', 'src')
      .should('contains', 'volume-level-1.svg');
    
  });

  it('Volume image changes to level 1 when volume slider is set to 1.', () => {
    cy.get('#volume-slider').invoke('val', 1).trigger('input');
    cy.get('#volume-image')
      .should('have.attr', 'src')
      .should('contains', 'volume-level-1.svg');
    
  });

  it('Volume image changes to level 2 when volume number is set to 34.', () => {
    cy.get('#volume-number').clear().type(34);
    cy.get('#volume-image')
      .should('have.attr', 'src')
      .should('contains', 'volume-level-2.svg');
    
  });

  it('Volume image changes to level 2 when volume slider is set to 66.', () => {
    cy.get('#volume-slider').invoke('val', 66).trigger('input');
    cy.get('#volume-image')
      .should('have.attr', 'src')
      .should('contains', 'volume-level-2.svg');
    
  });

  it('Volume image changes to level 3 when volume number is set to 67.', () => {
    cy.get('#volume-number').clear().type(67);
    cy.get('#volume-image')
      .should('have.attr', 'src')
      .should('contains', 'volume-level-3.svg');
    
  });

  it('Volume image changes to level 3 when volume slider is set to 100.', () => {
    cy.get('#volume-slider').invoke('val', 100).trigger('input');
    cy.get('#volume-image')
      .should('have.attr', 'src')
      .should('contains', 'volume-level-3.svg');
    
  });
  // Test if honk button is disabled when textbox input is empty or not number
  it('Honk button is disabled on empty volume input.', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').should('be.disabled');
  });

  it('Honk button is disabled on non-number volume input.', () => {
    cy.get('#volume-number').clear().type('Last lab let\'s go!!!!');
    cy.get('#honk-btn').should('be.disabled');
  });

  // Test if an error is shown when number typed outside given range for textbox
  it('Error is displayed when volume input is less than 0.', () => {
    cy.get('#volume-number').clear().type(-1);
    cy.get('input:invalid').should('have.length', 1);
  });

  it('Error is displayed when volume input is greater than 100.', () => {
    cy.get('#volume-number').clear().type(101);
    cy.get('input:invalid').should('have.length', 1);
  });
});
