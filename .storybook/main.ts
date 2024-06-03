import { mergeConfig, defineConfig } from "vite";
import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  viteFinal: (config) => {
    return mergeConfig(
      config,
      defineConfig({
        esbuild: {
          // The target option is required to use the es decorator
          target: "es2022",
        },
      })
    );
  },
};
export default config;
