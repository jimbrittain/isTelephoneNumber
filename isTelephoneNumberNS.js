"use strict";
/* global __imns */
/*jshint -W044*/
var adr = __imns('util.validation');
// var adr = window; //for stand-alone delete above and uncomment this line
if(!('isTelephoneNumber' in adr)){
    /**
        @method isTelephoneNumber
        @version 0.2
        @param {String} v
        @return {Boolean}
        @description -validates whether supplied is a phone number
     */
    adr.isTelephoneNumber = function(v){
        v = (typeof v !== 'string' && v.toString) ? v.toString() : v;
        if(typeof v !== 'string'){ return false; }
        if(v.length < 8){ return false; }
        var reg = /^(\+[0-9]{1,4}(\.|\-|\ )*)?([0-9]+[\-\.\ ]?){7,14}([0-9]+)$/;
        reg = new RegExp(reg);
        return reg.test(v); };
}
