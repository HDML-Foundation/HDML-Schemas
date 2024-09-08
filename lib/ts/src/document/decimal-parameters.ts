// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { DecimalBitWidth } from '../enum/decimal-bit-width.js';


/**
 * Decimal data type parameters structure.
 */
export class DecimalParameters {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):DecimalParameters {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDecimalParameters(bb:flatbuffers.ByteBuffer, obj?:DecimalParameters):DecimalParameters {
  return (obj || new DecimalParameters()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDecimalParameters(bb:flatbuffers.ByteBuffer, obj?:DecimalParameters):DecimalParameters {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new DecimalParameters()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

nullable():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

scale():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
}

precision():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
}

bitWidth():DecimalBitWidth {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : DecimalBitWidth._128;
}

static startDecimalParameters(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addNullable(builder:flatbuffers.Builder, nullable:boolean) {
  builder.addFieldInt8(0, +nullable, +false);
}

static addScale(builder:flatbuffers.Builder, scale:number) {
  builder.addFieldInt16(1, scale, 0);
}

static addPrecision(builder:flatbuffers.Builder, precision:number) {
  builder.addFieldInt16(2, precision, 0);
}

static addBitWidth(builder:flatbuffers.Builder, bitWidth:DecimalBitWidth) {
  builder.addFieldInt8(3, bitWidth, DecimalBitWidth._128);
}

static endDecimalParameters(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createDecimalParameters(builder:flatbuffers.Builder, nullable:boolean, scale:number, precision:number, bitWidth:DecimalBitWidth):flatbuffers.Offset {
  DecimalParameters.startDecimalParameters(builder);
  DecimalParameters.addNullable(builder, nullable);
  DecimalParameters.addScale(builder, scale);
  DecimalParameters.addPrecision(builder, precision);
  DecimalParameters.addBitWidth(builder, bitWidth);
  return DecimalParameters.endDecimalParameters(builder);
}
}