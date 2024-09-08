// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { FilterClause } from '../document/filter-clause.js';
import { JoinType } from '../enum/join-type.js';


/**
 * Join structure.
 */
export class Join {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Join {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsJoin(bb:flatbuffers.ByteBuffer, obj?:Join):Join {
  return (obj || new Join()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsJoin(bb:flatbuffers.ByteBuffer, obj?:Join):Join {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Join()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

type():JoinType {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : JoinType.Cross;
}

left():string|null
left(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
left(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

right():string|null
right(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
right(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

clause(obj?:FilterClause):FilterClause|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new FilterClause()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startJoin(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addType(builder:flatbuffers.Builder, type:JoinType) {
  builder.addFieldInt8(0, type, JoinType.Cross);
}

static addLeft(builder:flatbuffers.Builder, leftOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, leftOffset, 0);
}

static addRight(builder:flatbuffers.Builder, rightOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, rightOffset, 0);
}

static addClause(builder:flatbuffers.Builder, clauseOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, clauseOffset, 0);
}

static endJoin(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

}