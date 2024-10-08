// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { TimeUnit } from '../enum/time-unit.js';


/**
 * Time data type parameters structure.
 */
export class TimeParameters {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):TimeParameters {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsTimeParameters(bb:flatbuffers.ByteBuffer, obj?:TimeParameters):TimeParameters {
  return (obj || new TimeParameters()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsTimeParameters(bb:flatbuffers.ByteBuffer, obj?:TimeParameters):TimeParameters {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new TimeParameters()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

nullable():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

unit():TimeUnit {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : TimeUnit.Second;
}

static startTimeParameters(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addNullable(builder:flatbuffers.Builder, nullable:boolean) {
  builder.addFieldInt8(0, +nullable, +false);
}

static addUnit(builder:flatbuffers.Builder, unit:TimeUnit) {
  builder.addFieldInt8(1, unit, TimeUnit.Second);
}

static endTimeParameters(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createTimeParameters(builder:flatbuffers.Builder, nullable:boolean, unit:TimeUnit):flatbuffers.Offset {
  TimeParameters.startTimeParameters(builder);
  TimeParameters.addNullable(builder, nullable);
  TimeParameters.addUnit(builder, unit);
  return TimeParameters.endTimeParameters(builder);
}
}
