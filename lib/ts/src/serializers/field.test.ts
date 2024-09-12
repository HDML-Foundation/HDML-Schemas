/**
 * @author Artem Lytvynov
 * @copyright Artem Lytvynov
 * @license Apache-2.0
 */

import { Builder } from "flatbuffers";
import { Field as IField } from "../types/Field";
import { bufferizeField } from "./field";

describe("The `bufferizeField` function", () => {
  let builder: Builder;

  beforeEach(() => {
    builder = new Builder(1024);
  });

  afterEach(() => {
    // builder.finish(Field.endField(builder));
  });

  it("must be executed if the `name` attribute is specified", () => {
    expect(() => {
      bufferizeField(builder, {
        name: "string",
      } as IField);
    }).not.toThrow();
  });

  it("must be executed if all attributes are specified", () => {
    expect(() => {
      bufferizeField(builder, {
        name: "string",
        description: "string",
        origin: "string",
        clause: "string",
      } as IField);
    }).not.toThrow();
  });

  it("must must throw if `name` is not specified", () => {
    expect(() => {
      bufferizeField(builder, {
        description: "string",
        origin: "string",
        clause: "string",
      } as IField);
    }).toThrow("A required property is missing: name");
  });
});
