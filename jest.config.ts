import type { Config } from "jest";
import "@testing-library/jest-dom";
import nextJest from "next/jest";

// Create a Jest configuration with Next.js integration
const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  // You can uncomment and configure these options based on your needs
  // collectCoverageFrom: [],
  // coveragePathIgnorePatterns: ["/node_modules/"],
  // coverageReporters: ["json", "text", "lcov", "clover"],
  // coverageThreshold: undefined,
  // forceCoverageMatch: [],
  // globalSetup: undefined,
  // globalTeardown: undefined,
  // globals: {},
  // maxWorkers: "50%",
  // moduleDirectories: ["node_modules"],
  // moduleFileExtensions: ["js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "node"],
  // moduleNameMapper: {},
  // modulePathIgnorePatterns: [],
  // notify: false,
  // notifyMode: "failure-change",
  // preset: undefined,
  // projects: undefined,
  // reporters: undefined,
  // resetMocks: false,
  // resetModules: false,
  // resolver: undefined,
  // restoreMocks: false,
  // rootDir: undefined,
  // roots: ["<rootDir>"],
  // runner: "jest-runner",
  // setupFiles: [],
  // setupFilesAfterEnv: [],
  // slowTestThreshold: 5,
  // snapshotSerializers: [],
  // testEnvironment: "jest-environment-node",
  // testEnvironmentOptions: {},
  // testLocationInResults: false,
  // testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  // testPathIgnorePatterns: ["/node_modules/"],
  // testRegex: [],
  // testResultsProcessor: undefined,
  // testRunner: "jest-circus/runner",
  // transform: undefined,
  // transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],
  // unmockedModulePathPatterns: undefined,
  // verbose: undefined,
  // watchPathIgnorePatterns: [],
  // watchman: true,
};

// Export the Jest configuration
export default createJestConfig(config);
