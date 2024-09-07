// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { FieldType } from '../document/field-type.js';
import { AggType } from '../enum/agg-type.js';
import { OrderType } from '../enum/order-type.js';


/**
 * Data field structure.
 */
export class Field {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Field {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsField(bb:flatbuffers.ByteBuffer, obj?:Field):Field {
  return (obj || new Field()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsField(bb:flatbuffers.ByteBuffer, obj?:Field):Field {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Field()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
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

origin():string|null
origin(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
origin(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

clause():string|null
clause(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
clause(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

type(obj?:FieldType):FieldType|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new FieldType()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

agg():AggType {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : AggType.None;
}

asc():OrderType {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : OrderType.None;
}

static startField(builder:flatbuffers.Builder) {
  builder.startObject(7);
}

static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, nameOffset, 0);
}

static addDescription(builder:flatbuffers.Builder, descriptionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, descriptionOffset, 0);
}

static addOrigin(builder:flatbuffers.Builder, originOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, originOffset, 0);
}

static addClause(builder:flatbuffers.Builder, clauseOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, clauseOffset, 0);
}

static addType(builder:flatbuffers.Builder, typeOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, typeOffset, 0);
}

static addAgg(builder:flatbuffers.Builder, agg:AggType) {
  builder.addFieldInt8(5, agg, AggType.None);
}

static addAsc(builder:flatbuffers.Builder, asc:OrderType) {
  builder.addFieldInt8(6, asc, OrderType.None);
}

static endField(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

}
