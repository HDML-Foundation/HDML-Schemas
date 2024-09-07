// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

/**
 * HDML document include component data structure.
 */
export class Include {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Include {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsInclude(bb:flatbuffers.ByteBuffer, obj?:Include):Include {
  return (obj || new Include()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsInclude(bb:flatbuffers.ByteBuffer, obj?:Include):Include {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Include()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

path():string|null
path(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
path(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startInclude(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addPath(builder:flatbuffers.Builder, pathOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, pathOffset, 0);
}

static endInclude(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // path
  return offset;
}

static createInclude(builder:flatbuffers.Builder, pathOffset:flatbuffers.Offset):flatbuffers.Offset {
  Include.startInclude(builder);
  Include.addPath(builder, pathOffset);
  return Include.endInclude(builder);
}
}