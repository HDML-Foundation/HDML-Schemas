// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { Field } from '../document/field.js';
import { TableType } from '../enum/table-type.js';


/**
 * Table structure.
 */
export class Table {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Table {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsTable(bb:flatbuffers.ByteBuffer, obj?:Table):Table {
  return (obj || new Table()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsTable(bb:flatbuffers.ByteBuffer, obj?:Table):Table {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Table()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

type():TableType {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : TableType.Table;
}

identifier():string|null
identifier(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
identifier(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

fields(index: number, obj?:Field):Field|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new Field()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

fieldsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startTable(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, nameOffset, 0);
}

static addType(builder:flatbuffers.Builder, type:TableType) {
  builder.addFieldInt8(1, type, TableType.Table);
}

static addIdentifier(builder:flatbuffers.Builder, identifierOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, identifierOffset, 0);
}

static addFields(builder:flatbuffers.Builder, fieldsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, fieldsOffset, 0);
}

static createFieldsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startFieldsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endTable(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createTable(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset, type:TableType, identifierOffset:flatbuffers.Offset, fieldsOffset:flatbuffers.Offset):flatbuffers.Offset {
  Table.startTable(builder);
  Table.addName(builder, nameOffset);
  Table.addType(builder, type);
  Table.addIdentifier(builder, identifierOffset);
  Table.addFields(builder, fieldsOffset);
  return Table.endTable(builder);
}
}
