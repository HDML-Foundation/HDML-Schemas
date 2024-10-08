// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { ConnectionOptions } from '../document/connection-options.js';


/**
 * HDML document connection component data structure.
 */
export class Connection {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Connection {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsConnection(bb:flatbuffers.ByteBuffer, obj?:Connection):Connection {
  return (obj || new Connection()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsConnection(bb:flatbuffers.ByteBuffer, obj?:Connection):Connection {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Connection()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

meta():string|null
meta(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
meta(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

options(obj?:ConnectionOptions):ConnectionOptions|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new ConnectionOptions()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startConnection(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, nameOffset, 0);
}

static addMeta(builder:flatbuffers.Builder, metaOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, metaOffset, 0);
}

static addOptions(builder:flatbuffers.Builder, optionsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, optionsOffset, 0);
}

static endConnection(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

}
