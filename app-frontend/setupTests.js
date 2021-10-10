// optional: configure or set up a testing framework before each test
// if you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// used for __tests__/Hero.spec.js
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

jest.mock("next/image", () => ({
  __esModule: true,
  default: () => {
    return <>MOCKED IMAGE</>;
  },
}));
