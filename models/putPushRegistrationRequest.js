/*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT License. See LICENSE in the project root for license information.
*/

/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PutPushRegistrationRequest class.
 * @constructor
 * Request to put push registration (register or update)
 * @member {date} lastUpdatedTime Gets or sets last updated time from the OS
 * This is used to expire out registrations that have not been
 * updated every 30 days.
 * 
 * @member {string} language Gets or sets language of the user
 * 
 */
function PutPushRegistrationRequest() {
}

/**
 * Defines the metadata of PutPushRegistrationRequest
 *
 * @returns {object} metadata of PutPushRegistrationRequest
 *
 */
PutPushRegistrationRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PutPushRegistrationRequest',
    type: {
      name: 'Composite',
      className: 'PutPushRegistrationRequest',
      modelProperties: {
        lastUpdatedTime: {
          required: true,
          serializedName: 'lastUpdatedTime',
          type: {
            name: 'DateTime'
          }
        },
        language: {
          required: true,
          serializedName: 'language',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PutPushRegistrationRequest;