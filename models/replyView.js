/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the ReplyView class.
 * @constructor
 * Reply view
 * @member {string} replyHandle Gets or sets reply handle
 * 
 * @member {string} commentHandle Gets or sets parent comment handle
 * 
 * @member {string} topicHandle Gets or sets root topic handle
 * 
 * @member {date} createdTime Gets or sets created time
 * 
 * @member {object} user Gets or sets owner of the reply
 * 
 * @member {string} [user.userHandle] Gets or sets user handle
 * 
 * @member {string} [user.firstName] Gets or sets first name of the user
 * 
 * @member {string} [user.lastName] Gets or sets last name of the user
 * 
 * @member {string} [user.photoHandle] Gets or sets photo handle of the user
 * 
 * @member {string} [user.photoUrl] Gets or sets photo url of the user
 * 
 * @member {string} [user.visibility] Gets or sets visibility of the user.
 * Possible values include: 'Public', 'Private'
 * 
 * @member {string} [user.followerStatus] Gets or sets follower relationship
 * status of the querying user. Possible values include: 'None', 'Follow',
 * 'Pending', 'Blocked'
 * 
 * @member {string} text Gets or sets reply text
 * 
 * @member {string} [language] Gets or sets reply language
 * 
 * @member {number} totalLikes Gets or sets total likes for the reply
 * 
 * @member {boolean} liked Gets or sets a value indicating whether the
 * querying user has liked the reply
 * 
 * @member {string} [contentStatus] Gets or sets content status. Possible
 * values include: 'Active', 'Banned'
 * 
 */
function ReplyView() {
}

/**
 * Defines the metadata of ReplyView
 *
 * @returns {object} metadata of ReplyView
 *
 */
ReplyView.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ReplyView',
    type: {
      name: 'Composite',
      className: 'ReplyView',
      modelProperties: {
        replyHandle: {
          required: true,
          serializedName: 'replyHandle',
          type: {
            name: 'String'
          }
        },
        commentHandle: {
          required: true,
          serializedName: 'commentHandle',
          type: {
            name: 'String'
          }
        },
        topicHandle: {
          required: true,
          serializedName: 'topicHandle',
          type: {
            name: 'String'
          }
        },
        createdTime: {
          required: true,
          serializedName: 'createdTime',
          type: {
            name: 'DateTime'
          }
        },
        user: {
          required: true,
          serializedName: 'user',
          type: {
            name: 'Composite',
            className: 'UserCompactView'
          }
        },
        text: {
          required: true,
          serializedName: 'text',
          type: {
            name: 'String'
          }
        },
        language: {
          required: false,
          serializedName: 'language',
          type: {
            name: 'String'
          }
        },
        totalLikes: {
          required: true,
          serializedName: 'totalLikes',
          type: {
            name: 'Number'
          }
        },
        liked: {
          required: true,
          serializedName: 'liked',
          type: {
            name: 'Boolean'
          }
        },
        contentStatus: {
          required: false,
          serializedName: 'contentStatus',
          type: {
            name: 'Enum',
            allowedValues: [ 'Active', 'Banned' ]
          }
        }
      }
    }
  };
};

module.exports = ReplyView;
