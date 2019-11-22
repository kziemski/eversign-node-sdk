'use strict';

var Signable = require('./Signable');
var TextFormField = require('./TextFormField');

/**
 *
 *
 * @constructor
 */
function DateSignedField(dateSignedField) {
  Signable.call(this);
  TextFormField.call(this,dateSignedField);

  this.setWidth(60);
  this.setHeight(17);

  var parentObject = this.toObject;
  this.toObject = function(){
    return Object.assign(this, parentObject.call(this));
  };
}


module.exports = DateSignedField;
