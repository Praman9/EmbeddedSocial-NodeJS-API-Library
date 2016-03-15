/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as stream from 'stream';
import * as models from '../models';


/**
 * @class
 * Blobs
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface Blobs {

    /**
     * @summary Upload a blob
     *
     * If your blob is an image, use image APIs. For all other blob types, use
     * this API.
     *
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} blob MIME encoded contents of the blob
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postBlob(authorization: string, blob: stream.Readable, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PostBlobResponse>): void;
    postBlob(authorization: string, blob: stream.Readable, callback: ServiceCallback<models.PostBlobResponse>): void;

    /**
     * @summary Get blob
     *
     * @param {string} blobHandle Blob handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getBlob(blobHandle: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<stream.Readable>): void;
    getBlob(blobHandle: string, authorization: string, callback: ServiceCallback<stream.Readable>): void;
}

/**
 * @class
 * Builds
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface Builds {

    /**
     * @summary The build information for this service
     *
     * This API is meant to be called by humans for debugging
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getBuildsCurrent(options: { appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.BuildsCurrentResponse>): void;
    getBuildsCurrent(callback: ServiceCallback<models.BuildsCurrentResponse>): void;
}

/**
 * @class
 * TopicComments
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface TopicComments {

    /**
     * @summary Get comments for a topic
     *
     * @param {string} topicHandle Topic handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getTopicComments(topicHandle: string, authorization: string, options: { cursor? : string, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseCommentView>): void;
    getTopicComments(topicHandle: string, authorization: string, callback: ServiceCallback<models.FeedResponseCommentView>): void;

    /**
     * @summary Create a new comment
     *
     * @param {string} topicHandle Topic handle
     * 
     * @param {object} request Post comment request
     * 
     * @param {string} [request.text] Gets or sets comment text
     * 
     * @param {string} [request.blobType] Gets or sets comment blob type. Possible
     * values include: 'Unknown', 'Image', 'Video', 'Custom'
     * 
     * @param {string} [request.blobHandle] Gets or sets comment blob handle
     * 
     * @param {string} [request.language] Gets or sets comment language
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postComment(topicHandle: string, request: models.PostCommentRequest, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PostCommentResponse>): void;
    postComment(topicHandle: string, request: models.PostCommentRequest, authorization: string, callback: ServiceCallback<models.PostCommentResponse>): void;
}

/**
 * @class
 * Comments
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface Comments {

    /**
     * @summary Get comment
     *
     * @param {string} commentHandle Comment handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getComment(commentHandle: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.CommentView>): void;
    getComment(commentHandle: string, authorization: string, callback: ServiceCallback<models.CommentView>): void;

    /**
     * @summary Delete comment
     *
     * @param {string} commentHandle Comment handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteComment(commentHandle: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deleteComment(commentHandle: string, authorization: string, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * Hashtags
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface Hashtags {

    /**
     * @summary Get trending hashtags
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getTrendingHashtags(options: { appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<string[]>): void;
    getTrendingHashtags(callback: ServiceCallback<string[]>): void;

    /**
     * @summary Get autocompleted hashtags
     *
     * @param {string} query Search query
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getAutocompletedHashtags(query: string, options: { appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<string[]>): void;
    getAutocompletedHashtags(query: string, callback: ServiceCallback<string[]>): void;
}

/**
 * @class
 * Images
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface Images {

    /**
     * @summary Upload a new image
     *
     * <para>Images will be resized. To access a resized image, append the 1
     * character size identifier to the blobHandle that is returned.</para>
     * <para>d = 25 pixels wide</para>
     * <para>h = 50 pixels wide</para>
     * <para>l = 100 pixels wide</para>
     * <para>p = 250 pixels wide</para>
     * <para>t = 500 pixels wide</para>
     * <para>x = 1000 pixels wide</para>
     * <para>ImageType.UserPhoto supports d,h,l,p,t,x</para>
     * <para>ImageType.ContentBlob supports d,h,l,p,t,x</para>
     * <para>ImageType.AppIcon supports l</para>
     * <para>All resized images will maintain their aspect ratio. Any orientation
     * specified in the EXIF headers will be honored.</para>
     *
     * @param {string} imageType Image type. Possible values include: 'UserPhoto',
     * 'ContentBlob', 'AppIcon'
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} image MIME encoded contents of the image
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postImage(imageType: string, authorization: string, image: stream.Readable, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PostImageResponse>): void;
    postImage(imageType: string, authorization: string, image: stream.Readable, callback: ServiceCallback<models.PostImageResponse>): void;

    /**
     * @summary Get image
     *
     * @param {string} blobHandle Blob handle
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getImage(blobHandle: string, options: { appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<stream.Readable>): void;
    getImage(blobHandle: string, callback: ServiceCallback<stream.Readable>): void;
}

/**
 * @class
 * CommentLikes
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface CommentLikes {

    /**
     * @summary Get likes for comment
     *
     * @param {string} commentHandle Comment handle
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getLikes(commentHandle: string, options: { cursor? : string, limit? : number, appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;
    getLikes(commentHandle: string, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;

    /**
     * @summary Add like to comment
     *
     * @param {string} commentHandle Comment handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postLike(commentHandle: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    postLike(commentHandle: string, authorization: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Remove like from comment
     *
     * @param {string} commentHandle Comment handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteLike(commentHandle: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deleteLike(commentHandle: string, authorization: string, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * ReplyLikes
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface ReplyLikes {

    /**
     * @summary Get likes for reply
     *
     * @param {string} replyHandle Reply handle
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getLikes(replyHandle: string, options: { cursor? : string, limit? : number, appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;
    getLikes(replyHandle: string, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;

    /**
     * @summary Add like to reply
     *
     * @param {string} replyHandle Reply handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postLike(replyHandle: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    postLike(replyHandle: string, authorization: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Remove like from reply
     *
     * @param {string} replyHandle Reply handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteLike(replyHandle: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deleteLike(replyHandle: string, authorization: string, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * TopicLikes
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface TopicLikes {

    /**
     * @summary Get likes for topic
     *
     * @param {string} topicHandle Topic handle
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getLikes(topicHandle: string, options: { cursor? : string, limit? : number, appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;
    getLikes(topicHandle: string, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;

    /**
     * @summary Add like to topic
     *
     * @param {string} topicHandle Topic handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postLike(topicHandle: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    postLike(topicHandle: string, authorization: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Remove like from topic
     *
     * @param {string} topicHandle Topic handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteLike(topicHandle: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deleteLike(topicHandle: string, authorization: string, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * MyNotifications
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface MyNotifications {

    /**
     * @summary Update notifications status
     *
     * @param {object} request Put notifications status request
     * 
     * @param {string} [request.readActivityHandle] Gets or sets last read
     * activity handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putNotificationsStatus(request: models.PutNotificationsStatusRequest, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    putNotificationsStatus(request: models.PutNotificationsStatusRequest, authorization: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Get notifications
     *
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getNotifications(authorization: string, options: { cursor? : string, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseActivityView>): void;
    getNotifications(authorization: string, callback: ServiceCallback<models.FeedResponseActivityView>): void;

    /**
     * @summary Get unread notifications count
     *
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getNotificationsCount(authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.CountResponse>): void;
    getNotificationsCount(authorization: string, callback: ServiceCallback<models.CountResponse>): void;
}

/**
 * @class
 * MyPins
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface MyPins {

    /**
     * @summary Get my pins
     *
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getPins(authorization: string, options: { cursor? : string, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseTopicView>): void;
    getPins(authorization: string, callback: ServiceCallback<models.FeedResponseTopicView>): void;

    /**
     * @summary Pin a topic
     *
     * @param {object} request Post pin request
     * 
     * @param {string} [request.topicHandle] Gets or sets topic handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postPin(request: models.PostPinRequest, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    postPin(request: models.PostPinRequest, authorization: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Unpin a topic
     *
     * @param {string} topicHandle Topic handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deletePin(topicHandle: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deletePin(topicHandle: string, authorization: string, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * MyPushRegistrations
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface MyPushRegistrations {

    /**
     * @summary Register for push notifications or update existing registration
     *
     * @param {string} platform Platform type. Possible values include: 'Windows',
     * 'Android', 'IOS'
     * 
     * @param {string} registrationId Unique registration id provided by the
     * mobile OS.
     * For Android, this is the GCM registration ID.
     * For Windows, this is the PushNotificationChannel URI.
     * For iOS, this is the device token.
     * 
     * @param {object} request Put push registration request
     * 
     * @param {date} [request.lastUpdatedTime] Gets or sets last updated time from
     * the OS
     * This is used to expire out registrations that have not been
     * updated every 30 days.
     * 
     * @param {string} [request.language] Gets or sets language of the user
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putPushRegistration(platform: string, registrationId: string, request: models.PutPushRegistrationRequest, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    putPushRegistration(platform: string, registrationId: string, request: models.PutPushRegistrationRequest, authorization: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Unregister from push notifications
     *
     * @param {string} platform Platform type. Possible values include: 'Windows',
     * 'Android', 'IOS'
     * 
     * @param {string} registrationId Unique registration id provided by the
     * mobile OS.
     * For Android, this is the GCM registration ID.
     * For Windows, this is the PushNotificationChannel URI.
     * For iOS, this is the device token.
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deletePushRegistration(platform: string, registrationId: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deletePushRegistration(platform: string, registrationId: string, authorization: string, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * CommentReplies
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface CommentReplies {

    /**
     * @summary Get replies for a comment
     *
     * @param {string} commentHandle Comment handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getReplies(commentHandle: string, authorization: string, options: { cursor? : string, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseReplyView>): void;
    getReplies(commentHandle: string, authorization: string, callback: ServiceCallback<models.FeedResponseReplyView>): void;

    /**
     * @summary Create a new reply
     *
     * @param {string} commentHandle Comment handle
     * 
     * @param {object} request Post reply request
     * 
     * @param {string} [request.text] Gets or sets reply text
     * 
     * @param {string} [request.language] Gets or sets reply language
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postReply(commentHandle: string, request: models.PostReplyRequest, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PostReplyResponse>): void;
    postReply(commentHandle: string, request: models.PostReplyRequest, authorization: string, callback: ServiceCallback<models.PostReplyResponse>): void;
}

/**
 * @class
 * Replies
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface Replies {

    /**
     * @summary Get reply
     *
     * @param {string} replyHandle Reply handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getReply(replyHandle: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ReplyView>): void;
    getReply(replyHandle: string, authorization: string, callback: ServiceCallback<models.ReplyView>): void;

    /**
     * @summary Delete reply
     *
     * @param {string} replyHandle Reply handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteReply(replyHandle: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deleteReply(replyHandle: string, authorization: string, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * UserReports
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface UserReports {

    /**
     * @summary Report user
     *
     * @param {string} userHandle User handle
     * 
     * @param {object} postReportRequest Post report request
     * 
     * @param {string} [postReportRequest.reason] Gets or sets report reason.
     * Possible values include: 'Spam', 'Cyberbullying', 'ChildEndangerment',
     * 'Offensive', 'ContentInfringement', 'Other'
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postReport(userHandle: string, postReportRequest: models.PostReportRequest, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    postReport(userHandle: string, postReportRequest: models.PostReportRequest, authorization: string, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * ReplyReports
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface ReplyReports {

    /**
     * @summary Report reply
     *
     * @param {string} replyHandle Reply handle
     * 
     * @param {object} postReportRequest Post report request
     * 
     * @param {string} [postReportRequest.reason] Gets or sets report reason.
     * Possible values include: 'Spam', 'Cyberbullying', 'ChildEndangerment',
     * 'Offensive', 'ContentInfringement', 'Other'
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postReport(replyHandle: string, postReportRequest: models.PostReportRequest, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    postReport(replyHandle: string, postReportRequest: models.PostReportRequest, authorization: string, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * CommentReports
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface CommentReports {

    /**
     * @summary Report comment
     *
     * @param {string} commentHandle Comment handle
     * 
     * @param {object} postReportRequest Post report request
     * 
     * @param {string} [postReportRequest.reason] Gets or sets report reason.
     * Possible values include: 'Spam', 'Cyberbullying', 'ChildEndangerment',
     * 'Offensive', 'ContentInfringement', 'Other'
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postReport(commentHandle: string, postReportRequest: models.PostReportRequest, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    postReport(commentHandle: string, postReportRequest: models.PostReportRequest, authorization: string, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * TopicReports
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface TopicReports {

    /**
     * @summary Report topic
     *
     * @param {string} topicHandle Topic handle
     * 
     * @param {object} postReportRequest Post report request
     * 
     * @param {string} [postReportRequest.reason] Gets or sets report reason.
     * Possible values include: 'Spam', 'Cyberbullying', 'ChildEndangerment',
     * 'Offensive', 'ContentInfringement', 'Other'
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postReport(topicHandle: string, postReportRequest: models.PostReportRequest, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    postReport(topicHandle: string, postReportRequest: models.PostReportRequest, authorization: string, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * Search
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface Search {

    /**
     * @summary Search topics with a query
     *
     * @param {string} query Search query
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {number} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getTopics(query: string, options: { cursor? : number, limit? : number, appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseTopicView>): void;
    getTopics(query: string, callback: ServiceCallback<models.FeedResponseTopicView>): void;

    /**
     * @summary Search users with a query
     *
     * @param {string} query Search query
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {number} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getUsers(query: string, options: { cursor? : number, limit? : number, appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;
    getUsers(query: string, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;
}

/**
 * @class
 * Sessions
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface Sessions {

    /**
     * @summary Create a new session (sign in)
     *
     * @param {object} request Post session request
     * 
     * @param {string} [request.identityProvider] Gets or sets identity provider
     * type. Possible values include: 'Facebook', 'Microsoft', 'Google', 'Twitter'
     * 
     * @param {string} [request.accessToken] Gets or sets access or authentication
     * token, user code, or verifier obtained from third-party provider.
     * The server contacts the third-party provider to use the token
     * (or user code, or verifier) for discover the user's identity.
     * 
     * @param {string} [request.requestToken] Gets or sets request token obtained
     * from third-party provider.
     * Some providers do not issue authentication or access tokens,
     * but they issue request tokens
     * and verifiers.
     * 
     * @param {string} [request.instanceId] Gets or sets instance id -- Unique
     * installation id of the app
     * 
     * @param {boolean} [request.createUser] Gets or sets a value indicating
     * whether we should create a new user if the user doesn't exist
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postSession(request: models.PostSessionRequest, options: { appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PostSessionResponse>): void;
    postSession(request: models.PostSessionRequest, callback: ServiceCallback<models.PostSessionResponse>): void;

    /**
     * @summary Delete the current session (sign out)
     *
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteSession(authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deleteSession(authorization: string, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * RequestTokens
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface RequestTokens {

    /**
     * @summary Get request token
     *
     * @param {string} identityProvider Identity provider type. Possible values
     * include: 'Facebook', 'Microsoft', 'Google', 'Twitter'
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getRequestToken(identityProvider: string, options: { appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.GetRequestTokenResponse>): void;
    getRequestToken(identityProvider: string, callback: ServiceCallback<models.GetRequestTokenResponse>): void;
}

/**
 * @class
 * MyFollowing
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface MyFollowing {

    /**
     * @summary Get my following
     *
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getFollowing(authorization: string, options: { cursor? : string, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;
    getFollowing(authorization: string, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;

    /**
     * @summary Follow user
     *
     * @param {object} request Post following request
     * 
     * @param {string} [request.userHandle] Gets or sets user handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postFollowing(request: models.PostFollowingRequest, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    postFollowing(request: models.PostFollowingRequest, authorization: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Unfollow user
     *
     * @param {string} userHandle User handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteFollowing(userHandle: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deleteFollowing(userHandle: string, authorization: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Hide topic from my following topics
     *
     * @param {string} topicHandle Topic handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteTopic(topicHandle: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deleteTopic(topicHandle: string, authorization: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Get my following topic feed
     *
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getTopics(authorization: string, options: { cursor? : string, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseTopicView>): void;
    getTopics(authorization: string, callback: ServiceCallback<models.FeedResponseTopicView>): void;

    /**
     * @summary Get my following activity feed
     *
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getActivities(authorization: string, options: { cursor? : string, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseActivityView>): void;
    getActivities(authorization: string, callback: ServiceCallback<models.FeedResponseActivityView>): void;
}

/**
 * @class
 * UserFollowers
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface UserFollowers {

    /**
     * @summary Get followers of a user
     *
     * @param {string} userHandle User handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getFollowers(userHandle: string, authorization: string, options: { cursor? : string, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;
    getFollowers(userHandle: string, authorization: string, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;
}

/**
 * @class
 * MyFollowers
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface MyFollowers {

    /**
     * @summary Get my followers
     *
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getFollowers(authorization: string, options: { cursor? : string, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;
    getFollowers(authorization: string, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;

    /**
     * @summary Accept follower request
     *
     * @param {object} request Post follower request
     * 
     * @param {string} [request.userHandle] Gets or sets user handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postFollower(request: models.PostFollowerRequest, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    postFollower(request: models.PostFollowerRequest, authorization: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Remove follower
     *
     * @param {string} userHandle User handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteFollower(userHandle: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deleteFollower(userHandle: string, authorization: string, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * UserFollowing
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface UserFollowing {

    /**
     * @summary Get following users of a user
     *
     * @param {string} userHandle User handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getFollowing(userHandle: string, authorization: string, options: { cursor? : string, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;
    getFollowing(userHandle: string, authorization: string, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;
}

/**
 * @class
 * MyPendingUsers
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface MyPendingUsers {

    /**
     * @summary Reject follower request
     *
     * @param {string} userHandle User handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deletePendingUser(userHandle: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deletePendingUser(userHandle: string, authorization: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Get my pending users
     *
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getPendingUsers(authorization: string, options: { cursor? : string, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;
    getPendingUsers(authorization: string, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;

    /**
     * @summary Get my pending users count
     *
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getPendingUsersCount(authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.CountResponse>): void;
    getPendingUsersCount(authorization: string, callback: ServiceCallback<models.CountResponse>): void;
}

/**
 * @class
 * MyBlockedUsers
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface MyBlockedUsers {

    /**
     * @summary Get my blocked users
     *
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getBlockedUsers(authorization: string, options: { cursor? : string, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;
    getBlockedUsers(authorization: string, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;

    /**
     * @summary Block user
     *
     * @param {object} request Post blocked user request
     * 
     * @param {string} [request.userHandle] Gets or sets user handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postBlockedUser(request: models.PostBlockedUserRequest, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    postBlockedUser(request: models.PostBlockedUserRequest, authorization: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Unblock user
     *
     * @param {string} userHandle User handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteBlockedUser(userHandle: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deleteBlockedUser(userHandle: string, authorization: string, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * Topics
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface Topics {

    /**
     * @summary Get recent topics
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getTopics(options: { cursor? : string, limit? : number, appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseTopicView>): void;
    getTopics(callback: ServiceCallback<models.FeedResponseTopicView>): void;

    /**
     * @summary Create a new topic
     *
     * @param {object} request Post topic request
     * 
     * @param {string} [request.publisherType] Gets or sets publisher type.
     * Possible values include: 'User', 'App'
     * 
     * @param {string} [request.title] Gets or sets topic title
     * 
     * @param {string} [request.text] Gets or sets topic text
     * 
     * @param {string} [request.blobType] Gets or sets topic blob type. Possible
     * values include: 'Unknown', 'Image', 'Video', 'Custom'
     * 
     * @param {string} [request.blobHandle] Gets or sets topic blob handle
     * 
     * @param {string} [request.categories] Gets or sets topic categories
     * 
     * @param {string} [request.language] Gets or sets topic language
     * 
     * @param {string} [request.deepLink] Gets or sets topic deep link
     * 
     * @param {string} [request.friendlyName] Gets or sets topic friendly name
     * 
     * @param {string} [request.group] Gets or sets topic group
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postTopic(request: models.PostTopicRequest, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PostTopicResponse>): void;
    postTopic(request: models.PostTopicRequest, authorization: string, callback: ServiceCallback<models.PostTopicResponse>): void;

    /**
     * @summary Get topic
     *
     * @param {string} topicHandle Topic handle
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getTopic(topicHandle: string, options: { appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TopicView>): void;
    getTopic(topicHandle: string, callback: ServiceCallback<models.TopicView>): void;

    /**
     * @summary Update topic
     *
     * @param {string} topicHandle Topic handle
     * 
     * @param {object} request Put topic request
     * 
     * @param {string} [request.title] Gets or sets topic title
     * 
     * @param {string} [request.text] Gets or sets topic text
     * 
     * @param {string} [request.categories] Gets or sets topic categories
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putTopic(topicHandle: string, request: models.PutTopicRequest, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    putTopic(topicHandle: string, request: models.PutTopicRequest, authorization: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Delete topic
     *
     * @param {string} topicHandle Topic handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteTopic(topicHandle: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deleteTopic(topicHandle: string, authorization: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Get popular topics today
     *
     * @param {string} timeRange Time range. Possible values include: 'Today',
     * 'ThisWeek', 'ThisMonth', 'AllTime'
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {number} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getPopularTopics(timeRange: string, options: { cursor? : number, limit? : number, appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseTopicView>): void;
    getPopularTopics(timeRange: string, callback: ServiceCallback<models.FeedResponseTopicView>): void;

    /**
     * @summary Get featured topics
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getFeaturedTopics(options: { cursor? : string, limit? : number, appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseTopicView>): void;
    getFeaturedTopics(callback: ServiceCallback<models.FeedResponseTopicView>): void;
}

/**
 * @class
 * MyAppFollowing
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface MyAppFollowing {

    /**
     * @summary Find users the current user is following in another app but not in
     * the current app
     *
     * @param {string} appHandle App handle
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getUsers(appHandle: string, authorization: string, options: { cursor? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;
    getUsers(appHandle: string, authorization: string, callback: ServiceCallback<models.FeedResponseUserCompactView>): void;
}

/**
 * @class
 * MyTopics
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface MyTopics {

    /**
     * @summary Get my topics sorted by creation time
     *
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getTopics(authorization: string, options: { cursor? : string, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseTopicView>): void;
    getTopics(authorization: string, callback: ServiceCallback<models.FeedResponseTopicView>): void;

    /**
     * @summary Get my topics sorted by popularity
     *
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {number} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getPopularTopics(authorization: string, options: { cursor? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseTopicView>): void;
    getPopularTopics(authorization: string, callback: ServiceCallback<models.FeedResponseTopicView>): void;
}

/**
 * @class
 * MyApps
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface MyApps {

    /**
     * @summary Get my list of Social Plus apps
     *
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getApps(authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AppCompactView[]>): void;
    getApps(authorization: string, callback: ServiceCallback<models.AppCompactView[]>): void;
}

/**
 * @class
 * Users
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface Users {

    /**
     * @summary Create a new user
     *
     * @param {object} request Post user request
     * 
     * @param {string} [request.identityProvider] Gets or sets identity provider
     * type. Possible values include: 'Facebook', 'Microsoft', 'Google', 'Twitter'
     * 
     * @param {string} [request.accessToken] Gets or sets access or authentication
     * token obtained from third-party provider.
     * The server contacts the third-party provider to validate the
     * token
     * 
     * @param {string} [request.requestToken] Gets or sets request token obtained
     * from third-party provider.
     * Some providers do not issue authentication or access tokens,
     * but they issue request tokens
     * and verifiers.
     * 
     * @param {string} [request.instanceId] Gets or sets instance id -- Unique
     * installation id of the app
     * 
     * @param {string} [request.firstName] Gets or sets first name of the user
     * 
     * @param {string} [request.lastName] Gets or sets last name of the user
     * 
     * @param {string} [request.bio] Gets or sets short bio of the user
     * 
     * @param {string} [request.photoHandle] Gets or sets photo handle of the user
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postUser(request: models.PostUserRequest, options: { appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PostUserResponse>): void;
    postUser(request: models.PostUserRequest, callback: ServiceCallback<models.PostUserResponse>): void;

    /**
     * @summary Get my profile
     *
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getMyProfile(authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UserProfileView>): void;
    getMyProfile(authorization: string, callback: ServiceCallback<models.UserProfileView>): void;

    /**
     * @summary Delete user
     *
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteUser(authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deleteUser(authorization: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Update user info
     *
     * @param {object} request Put user info request
     * 
     * @param {string} [request.firstName] Gets or sets first name of the user
     * 
     * @param {string} [request.lastName] Gets or sets last name of the user
     * 
     * @param {string} [request.bio] Gets or sets short bio of the user
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putUserInfo(request: models.PutUserInfoRequest, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    putUserInfo(request: models.PutUserInfoRequest, authorization: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Update user photo
     *
     * @param {object} request Put user photo request
     * 
     * @param {string} [request.photoHandle] Gets or sets photo handle of the user
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putUserPhoto(request: models.PutUserPhotoRequest, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    putUserPhoto(request: models.PutUserPhotoRequest, authorization: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Update user visibility
     *
     * @param {object} request Put user visibility request
     * 
     * @param {string} [request.visibility] Gets or sets visibility of the user.
     * Possible values include: 'Public', 'Private'
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putUserVisibility(request: models.PutUserVisibilityRequest, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    putUserVisibility(request: models.PutUserVisibilityRequest, authorization: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Get user profile
     *
     * @param {string} userHandle User handle
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getUser(userHandle: string, options: { appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UserProfileView>): void;
    getUser(userHandle: string, callback: ServiceCallback<models.UserProfileView>): void;

    /**
     * @summary Get popular users
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {number} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getPopularUsers(options: { cursor? : number, limit? : number, appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseUserProfileView>): void;
    getPopularUsers(callback: ServiceCallback<models.FeedResponseUserProfileView>): void;
}

/**
 * @class
 * MyLikes
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface MyLikes {

    /**
     * @summary Get my liked topics
     *
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getLikedTopics(authorization: string, options: { cursor? : string, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseTopicView>): void;
    getLikedTopics(authorization: string, callback: ServiceCallback<models.FeedResponseTopicView>): void;
}

/**
 * @class
 * MyLinkedAccounts
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface MyLinkedAccounts {

    /**
     * @summary Get linked accounts
     *
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getLinkedAccounts(authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LinkedAccountView[]>): void;
    getLinkedAccounts(authorization: string, callback: ServiceCallback<models.LinkedAccountView[]>): void;

    /**
     * @summary Create a new linked account
     *
     * @param {object} request Post linked account request
     * 
     * @param {string} [request.identityProvider] Gets or sets identity provider
     * type. Possible values include: 'Facebook', 'Microsoft', 'Google', 'Twitter'
     * 
     * @param {string} [request.accessToken] Gets or sets access or authentication
     * token, user code, or verifier obtained from third-party provider.
     * The server contacts the third-party provider to use the token
     * (or user code, or verifier) for discover the user's identity.
     * 
     * @param {string} [request.requestToken] Gets or sets request token obtained
     * from third-party provider.
     * Some providers do not issue authentication or access tokens,
     * but they issue request tokens
     * and verifiers.
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postLinkedAccount(request: models.PostLinkedAccountRequest, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    postLinkedAccount(request: models.PostLinkedAccountRequest, authorization: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Delete linked account
     *
     * @param {string} identityProvider Identity provider type. Possible values
     * include: 'Facebook', 'Microsoft', 'Google', 'Twitter'
     * 
     * @param {string} authorization Authenication (must begin with string "Bearer
     * ")
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteLinkedAccount(identityProvider: string, authorization: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deleteLinkedAccount(identityProvider: string, authorization: string, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * UserTopics
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 */
export interface UserTopics {

    /**
     * @summary Get user topics sorted by creation time
     *
     * @param {string} userHandle User handle
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getTopics(userHandle: string, options: { cursor? : string, limit? : number, appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseTopicView>): void;
    getTopics(userHandle: string, callback: ServiceCallback<models.FeedResponseTopicView>): void;

    /**
     * @summary Get user topics sorted by popularity
     *
     * @param {string} userHandle User handle
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {number} [options.cursor] Current read cursor
     * 
     * @param {number} [options.limit] Number of items to return
     * 
     * @param {string} [options.appkey] App Key Authentication
     * 
     * @param {string} [options.authorization] Authenication (must begin with
     * string "Bearer ")
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getPopularTopics(userHandle: string, options: { cursor? : number, limit? : number, appkey? : string, authorization? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FeedResponseTopicView>): void;
    getPopularTopics(userHandle: string, callback: ServiceCallback<models.FeedResponseTopicView>): void;
}
