// cypress/config/cypress.config.ts
import { defineConfig } from "cypress";

interface CypressConfig {
  e2e: {
    baseUrl: string;
    setupNodeEvents(on: any, config: any): void;
  };
}

const config: CypressConfig = {
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};

export default defineConfig(config);
