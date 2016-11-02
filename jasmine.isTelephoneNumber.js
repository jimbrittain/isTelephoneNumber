"use strict";
describe("isTelephoneNumber Test Suite", function(){
    var __imns = function(){ return window; }
    var obj = {}, arr = [];
    it("isTelephoneNumber is a function", function(){ expect(typeof isTelephoneNumber === 'function').toBe(true); });
    it("Test: {String} +44818118181 = true", function(){ expect(isTelephoneNumber('+44818118181')).toBe(true); });
    it("Test: {Number} 0818118181 = true", function(){ expect(isTelephoneNumber(0818118181)).toBe(true); });
    it("Test: {Object} object = false", function(){ expect(isTelephoneNumber(obj)).toBe(false); });
    it("Test: {Array} array = false", function(){ expect(isTelephoneNumber(arr)).toBe(false); });
    it("Test: {String} +44.081.811.81.81 = true", function(){ expect(isTelephoneNumber('+44.081.811.81.81')).toBe(true); });
    it("Test: {String} +44 081 811 81 81 = true", function(){ expect(isTelephoneNumber('+44 081 811 81 81')).toBe(true); });
    it("Test: {String} +44-081-811-81-81 = true", function(){ expect(isTelephoneNumber('+44-081-811-81-81')).toBe(true); });
    it("Test: {String} 0818118181 = true", function(){ expect(isTelephoneNumber('0818118181')).toBe(true); });
    it("Test: {String} 081CLOWNED = false", function(){ expect(isTelephoneNumber('081CLOWNED')).toBe(false); });
});
