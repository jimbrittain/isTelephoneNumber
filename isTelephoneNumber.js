"use strict";
/*jshint -W044*/
/**
    @method isTelephoneNumber
    @version 0.1
    @param {String} v
    @return {Boolean}
    @description -validates whether supplied is a phone number
 */
var isTelephoneNumber = function(v){
    v = (typeof v !== 'string' && v.toString) ? v.toString() : v;
    if(typeof v !== 'string'){ return false; }
    if(v.length < 8){ return false; }
    var reg = /^(\+[0-9]{1,4}(\.|\-|\ )*)?([0-9]+[\-\.\ ]?){7,14}([0-9]+)$/;
    reg = new RegExp(reg);
    return reg.test(v); };

