const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  const bombay = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
  const balinese = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.";
  
  it('returns breed details for the Bombay breed', () => {
    // We expect it to be a function, but will it be?
    assert.equal(breedDetails('Bombay'), bombay);
  });

  it('returns breed details for the Balinese breed', () => {
    // We expect it to be a function, but will it be?
    assert.equal(breedDetails('Balinese'), balinese);
  });

  it('returns undefined when there is no description for the breed name provided', () => {
    // We expect it to be a function, but will it be?
    assert.equal(breedDetails('Askal'), undefined);
  });
});