// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

/**
 * Common data type parameters structure.
 */
export class CommonParametersStruct {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):CommonParametersStruct {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsCommonParametersStruct(bb:flatbuffers.ByteBuffer, obj?:CommonParametersStruct):CommonParametersStruct {
  return (obj || new CommonParametersStruct()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsCommonParametersStruct(bb:flatbuffers.ByteBuffer, obj?:CommonParametersStruct):CommonParametersStruct {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new CommonParametersStruct()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

nullable():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startCommonParametersStruct(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addNullable(builder:flatbuffers.Builder, nullable:boolean) {
  builder.addFieldInt8(0, +nullable, +false);
}

static endCommonParametersStruct(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createCommonParametersStruct(builder:flatbuffers.Builder, nullable:boolean):flatbuffers.Offset {
  CommonParametersStruct.startCommonParametersStruct(builder);
  CommonParametersStruct.addNullable(builder, nullable);
  return CommonParametersStruct.endCommonParametersStruct(builder);
}
}
