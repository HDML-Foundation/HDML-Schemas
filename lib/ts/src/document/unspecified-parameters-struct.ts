// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

/**
 * Unspecified data type parameters structure.
 */
export class UnspecifiedParametersStruct {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):UnspecifiedParametersStruct {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsUnspecifiedParametersStruct(bb:flatbuffers.ByteBuffer, obj?:UnspecifiedParametersStruct):UnspecifiedParametersStruct {
  return (obj || new UnspecifiedParametersStruct()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsUnspecifiedParametersStruct(bb:flatbuffers.ByteBuffer, obj?:UnspecifiedParametersStruct):UnspecifiedParametersStruct {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new UnspecifiedParametersStruct()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startUnspecifiedParametersStruct(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endUnspecifiedParametersStruct(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createUnspecifiedParametersStruct(builder:flatbuffers.Builder):flatbuffers.Offset {
  UnspecifiedParametersStruct.startUnspecifiedParametersStruct(builder);
  return UnspecifiedParametersStruct.endUnspecifiedParametersStruct(builder);
}
}