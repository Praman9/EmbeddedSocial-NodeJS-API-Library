/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ActivityView class.
 * @constructor
 * Activity view
 * @member {string} activityHandle Gets or sets activity handle
 * 
 * @member {date} createdTime Gets or sets created time
 * 
 * @member {string} activityType Gets or sets activity type. Possible values
 * include: 'Like', 'Comment', 'Reply', 'CommentPeer', 'ReplyPeer',
 * 'Following', 'FollowRequest', 'FollowAccept'
 * 
 * @member {array} actorUsers Gets or sets actor users
 * 
 * @member {object} [actedOnUser] Gets or sets acted on user
 * 
 * @member {string} [actedOnUser.userHandle] Gets or sets user handle
 * 
 * @member {string} [actedOnUser.firstName] Gets or sets first name of the user
 * 
 * @member {string} [actedOnUser.lastName] Gets or sets last name of the user
 * 
 * @member {string} [actedOnUser.photoHandle] Gets or sets photo handle of the
 * user
 * 
 * @member {string} [actedOnUser.photoUrl] Gets or sets photo url of the user
 * 
 * @member {string} [actedOnUser.visibility] Gets or sets visibility of the
 * user. Possible values include: 'Public', 'Private'
 * 
 * @member {string} [actedOnUser.followerStatus] Gets or sets follower
 * relationship status of the querying user. Possible values include: 'None',
 * 'Follow', 'Pending', 'Blocked'
 * 
 * @member {object} [actedOnContent] Gets or sets acted on content
 * 
 * @member {string} [actedOnContent.contentType] Gets or sets content type.
 * Possible values include: 'Unknown', 'Topic', 'Comment', 'Reply'
 * 
 * @member {string} [actedOnContent.contentHandle] Gets or sets content handle
 * 
 * @member {string} [actedOnContent.parentHandle] Gets or sets parent handle
 * 
 * @member {string} [actedOnContent.rootHandle] Gets or sets root handle
 * 
 * @member {string} [actedOnContent.text] Gets or sets content text
 * 
 * @member {string} [actedOnContent.blobType] Gets or sets content blob type.
 * Possible values include: 'Unknown', 'Image', 'Video', 'Custom'
 * 
 * @member {string} [actedOnContent.blobHandle] Gets or sets content blob
 * handle
 * 
 * @member {string} [actedOnContent.blobUrl] Gets or sets content blob url
 * 
 * @member {number} totalActions Gets or sets total actions
 * 
 * @member {boolean} unread Gets or sets a value indicating whether the
 * activity was read
 * 
 * @member {object} [app] Gets or sets the containing app
 * 
 * @member {string} [app.appHandle] Gets or sets app handle
 * 
 * @member {string} [app.name] Gets or sets app name
 * 
 * @member {string} [app.iconHandle] Gets or sets app icon handle
 * 
 * @member {string} [app.iconUrl] Gets or sets app icon url
 * 
 * @member {string} [app.platformType] Gets or sets platform type. Possible
 * values include: 'Windows', 'Android', 'IOS'
 * 
 * @member {string} [app.deepLink] Gets or sets app deep link
 * 
 * @member {string} [app.storeLink] Gets or sets app store link
 * 
 */
function ActivityView() {
}

/**
 * Defines the metadata of ActivityView
 *
 * @returns {object} metadata of ActivityView
 *
 */
ActivityView.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ActivityView',
    type: {
      name: 'Composite',
      className: 'ActivityView',
      modelProperties: {
        activityHandle: {
          required: true,
          serializedName: 'activityHandle',
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
        activityType: {
          required: true,
          serializedName: 'activityType',
          type: {
            name: 'Enum',
            allowedValues: [ 'Like', 'Comment', 'Reply', 'CommentPeer', 'ReplyPeer', 'Following', 'FollowRequest', 'FollowAccept' ]
          }
        },
        actorUsers: {
          required: true,
          serializedName: 'actorUsers',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'UserCompactViewElementType',
                type: {
                  name: 'Composite',
                  className: 'UserCompactView'
                }
            }
          }
        },
        actedOnUser: {
          required: false,
          serializedName: 'actedOnUser',
          type: {
            name: 'Composite',
            className: 'UserCompactView'
          }
        },
        actedOnContent: {
          required: false,
          serializedName: 'actedOnContent',
          type: {
            name: 'Composite',
            className: 'ContentCompactView'
          }
        },
        totalActions: {
          required: true,
          serializedName: 'totalActions',
          type: {
            name: 'Number'
          }
        },
        unread: {
          required: true,
          serializedName: 'unread',
          type: {
            name: 'Boolean'
          }
        },
        app: {
          required: false,
          serializedName: 'app',
          type: {
            name: 'Composite',
            className: 'AppCompactView'
          }
        }
      }
    }
  };
};

module.exports = ActivityView;
