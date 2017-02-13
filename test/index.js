"use strict";

import attr from '../dist/index';
import {describe} from 'mocha';
import {expect, assert} from 'chai';


describe('attr', () => {
   it('should be a function', () => {
       expect(attr).to.be.a('function');
   })

   it('should return a string', () => {
       expect(attr()).to.be.a('string');
   })

    it('should pass linear test case', () => {
       assert.equal(attr(true, 'one', 'other'), 'one');
       assert.equal(attr(false, 'one', 'other'), 'other');
   })

   it('should pass  if test case', () => {
       assert.equal(attr({if: true, val: 'one'}), 'one');
       assert.equal(attr({if: false, val: 'one'}), '');
    })

   it('should pass  if-else test case', () => {
       assert.equal(attr({if: true, val: 'one', else: 'other'}), 'one');
       assert.equal(attr({if: false, val: 'one', else: 'other'}), 'other');
   })

   it('should pass multi if-else array test case', () => {
       assert.equal(attr({if: true, val: 'one'}, {if: true, val: 'other', else: 'another'}), 'one');
       assert.equal(attr({if: false, val: 'one'}, {if: false, val: 'other', else: 'another'}), 'another');
   })
   
})    