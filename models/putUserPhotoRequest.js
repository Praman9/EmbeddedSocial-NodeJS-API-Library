/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PutUserPhotoRequest class.
 * @constructor
 * Request to put (update) user photo
 * @member {string} [photoHandle] Gets or sets photo handle of the user
 * 
 */
function PutUserPhotoRequest() {
}

/**
 * Defines the metadata of PutUserPhotoRequest
 *
 * @returns {object} metadata of PutUserPhotoRequest
 *
 */
PutUserPhotoRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PutUserPhotoRequest',
    type: {
      name: 'Composite',
      className: 'PutUserPhotoRequest',
      modelProperties: {
        photoHandle: {
          required: false,
          serializedName: 'photoHandle',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PutUserPhotoRequest;
