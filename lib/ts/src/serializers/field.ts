/**
 * @author Artem Lytvynov
 * @copyright Artem Lytvynov
 * @license Apache-2.0
 */

import { type Builder } from "flatbuffers";
import { Field } from "../document/field";
import { Field as IField } from "../types/Field";

export function bufferizeField(
  builder: Builder,
  field: IField,
): number {
  if (!field.name) {
    throw new Error("A required property is missing: name");
  }
  const name = builder.createString(field.name);
  const description = field.description
    ? builder.createString(field.description)
    : false;
  const origin = field.origin
    ? builder.createString(field.origin)
    : false;
  const clause = field.clause
    ? builder.createString(field.clause)
    : false;

  Field.startField(builder);
  Field.addName(builder, name);
  if (description) {
    Field.addDescription(builder, description);
  }
  if (origin) {
    Field.addOrigin(builder, origin);
  }
  if (clause) {
    Field.addClause(builder, clause);
  }
  return Field.endField(builder);
}

export function htmlizeField(field: Field): string {
  if (!field.name()) {
    throw new Error("A required property is missing: name");
  }
  let result = `<hdml-field name="${field.name()}"`;
  result =
    result + (field.origin() ? ` origin="${field.origin()}"` : "");
  result =
    result +
    (field.description() ? ` meta="${field.description()}"` : "");
  result =
    result +
    (field.clause()
      ? ` clause="${field.clause()?.replaceAll('"', "`")}"`
      : "");
  result = result + "></hdml-field>";
  return result;
}

export function objectizeField(): void {}

export function sqlizeField(): void {}
