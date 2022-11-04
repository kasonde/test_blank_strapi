import { config, list } from "@keystone-6/core";
import { text } from "@keystone-6/core/fields";
import { allowAll } from "@keystone-6/core/access";

export default config({
  db: {
    provider: "sqlite",
    url: "file:./keystone.db",
  },
  ui: true,
  lists: {
    Bubble: list({
      access: allowAll,
      fields: {
        name: text({ validation: { isRequired: true } }),
      },
    }),
  },
});
