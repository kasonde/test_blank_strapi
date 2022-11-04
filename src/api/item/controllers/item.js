"use strict";

/**
 * item controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::item.item", (strapi) => ({
  async doSomething() {
    return process.env;
  },
}));
