/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * <autogenerated> This file was generated using AutoRest. </autogenerated>
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the FeedResponseActivityView class.
 * @constructor
 * Feed response
 * @member {array} data Gets or sets feed data
 * 
 * @member {string} cursor Gets or sets feed cursor
 * 
 */
function FeedResponseActivityView() {
}

/**
 * Defines the metadata of FeedResponseActivityView
 *
 * @returns {object} metadata of FeedResponseActivityView
 *
 */
FeedResponseActivityView.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'FeedResponse[ActivityView]',
    type: {
      name: 'Composite',
      className: 'FeedResponseActivityView',
      modelProperties: {
        data: {
          required: true,
          serializedName: 'data',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ActivityViewElementType',
                type: {
                  name: 'Composite',
                  className: 'ActivityView'
                }
            }
          }
        },
        cursor: {
          required: true,
          serializedName: 'cursor',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = FeedResponseActivityView;
