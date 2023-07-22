// for babel-plugin-tester; see: https://github.com/babel-utils/babel-plugin-tester#vitest
/// <reference types="vitest/globals" />

import { babelTransform, getExpectSnapshot } from "./testUtils";
import { pluginTester } from "babel-plugin-tester";
import { types, template } from "@babel/core";
import plugin from "../";
import path from "path";

describe("css function", () => {
  describe("Snapshot tests", () => {
    test("basic usage should match snapshot", () => {
      // Arrange
      const inputCode = `
        import { css } from '@kuma-ui/core'
        const style = css\`color: red;\`
      `;
      // Act
      const result = babelTransform(inputCode);
      // Assert
      expect(getExpectSnapshot(result)).toMatchSnapshot();
    });

    test("using space props should match snapshot", () => {
      // Arrange
      const inputCode = `
        import { css } from '@kuma-ui/core'
        const style = css\`padding: 2px;\`
      `;
      // Act
      const result = babelTransform(inputCode);
      // Assert
      expect(getExpectSnapshot(result)).toMatchSnapshot();
    });

    test("using pseudo props should match snapshot", () => {
      // Arrange
      const inputCode = `
        import { css } from '@kuma-ui/core'
        const style = css\`
        &:hover {
          color: red;
        }
        \`
      `;
      // Act
      const result = babelTransform(inputCode);
      // Assert
      expect(getExpectSnapshot(result)).toMatchSnapshot();
    });
  });
});
