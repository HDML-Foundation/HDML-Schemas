// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { JoinStruct } from '../document/join-struct.js';
import { TableStruct } from '../document/table-struct.js';


/**
 * Model structure.
 */
export class ModelStruct {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ModelStruct {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsModelStruct(bb:flatbuffers.ByteBuffer, obj?:ModelStruct):ModelStruct {
  return (obj || new ModelStruct()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsModelStruct(bb:flatbuffers.ByteBuffer, obj?:ModelStruct):ModelStruct {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ModelStruct()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

description():string|null
description(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
description(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

tables(index: number, obj?:TableStruct):TableStruct|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new TableStruct()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

tablesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

joins(index: number, obj?:JoinStruct):JoinStruct|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new JoinStruct()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

joinsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startModelStruct(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, nameOffset, 0);
}

static addDescription(builder:flatbuffers.Builder, descriptionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, descriptionOffset, 0);
}

static addTables(builder:flatbuffers.Builder, tablesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, tablesOffset, 0);
}

static createTablesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startTablesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addJoins(builder:flatbuffers.Builder, joinsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, joinsOffset, 0);
}

static createJoinsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startJoinsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endModelStruct(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createModelStruct(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset, descriptionOffset:flatbuffers.Offset, tablesOffset:flatbuffers.Offset, joinsOffset:flatbuffers.Offset):flatbuffers.Offset {
  ModelStruct.startModelStruct(builder);
  ModelStruct.addName(builder, nameOffset);
  ModelStruct.addDescription(builder, descriptionOffset);
  ModelStruct.addTables(builder, tablesOffset);
  ModelStruct.addJoins(builder, joinsOffset);
  return ModelStruct.endModelStruct(builder);
}
}