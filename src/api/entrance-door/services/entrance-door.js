'use strict';

/**
 * entrance-door service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::entrance-door.entrance-door');
