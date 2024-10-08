// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { DateUnit } from '../enum/date-unit.js';


/**
 * Date data type parameters structure.
 */
export class DateParameters {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):DateParameters {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDateParameters(bb:flatbuffers.ByteBuffer, obj?:DateParameters):DateParameters {
  return (obj || new DateParameters()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDateParameters(bb:flatbuffers.ByteBuffer, obj?:DateParameters):DateParameters {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new DateParameters()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

nullable():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

unit():DateUnit {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : DateUnit.Second;
}

static startDateParameters(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addNullable(builder:flatbuffers.Builder, nullable:boolean) {
  builder.addFieldInt8(0, +nullable, +false);
}

static addUnit(builder:flatbuffers.Builder, unit:DateUnit) {
  builder.addFieldInt8(1, unit, DateUnit.Second);
}

static endDateParameters(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createDateParameters(builder:flatbuffers.Builder, nullable:boolean, unit:DateUnit):flatbuffers.Offset {
  DateParameters.startDateParameters(builder);
  DateParameters.addNullable(builder, nullable);
  DateParameters.addUnit(builder, unit);
  return DateParameters.endDateParameters(builder);
}
}
