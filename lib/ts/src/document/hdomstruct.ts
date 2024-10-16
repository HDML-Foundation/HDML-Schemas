// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { ConnectionStruct } from '../document/connection-struct.js';
import { FrameStruct } from '../document/frame-struct.js';
import { IncludeStruct } from '../document/include-struct.js';
import { ModelStruct } from '../document/model-struct.js';


/**
 * HyperData Object Model data structure.
 */
export class HDOMStruct {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):HDOMStruct {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsHDOMStruct(bb:flatbuffers.ByteBuffer, obj?:HDOMStruct):HDOMStruct {
  return (obj || new HDOMStruct()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsHDOMStruct(bb:flatbuffers.ByteBuffer, obj?:HDOMStruct):HDOMStruct {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new HDOMStruct()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

includes(index: number, obj?:IncludeStruct):IncludeStruct|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new IncludeStruct()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

includesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

connections(index: number, obj?:ConnectionStruct):ConnectionStruct|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new ConnectionStruct()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

connectionsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

models(index: number, obj?:ModelStruct):ModelStruct|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new ModelStruct()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

modelsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

frames(index: number, obj?:FrameStruct):FrameStruct|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new FrameStruct()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

framesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startHDOMStruct(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addIncludes(builder:flatbuffers.Builder, includesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, includesOffset, 0);
}

static createIncludesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startIncludesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addConnections(builder:flatbuffers.Builder, connectionsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, connectionsOffset, 0);
}

static createConnectionsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startConnectionsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addModels(builder:flatbuffers.Builder, modelsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, modelsOffset, 0);
}

static createModelsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startModelsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addFrames(builder:flatbuffers.Builder, framesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, framesOffset, 0);
}

static createFramesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startFramesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endHDOMStruct(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createHDOMStruct(builder:flatbuffers.Builder, includesOffset:flatbuffers.Offset, connectionsOffset:flatbuffers.Offset, modelsOffset:flatbuffers.Offset, framesOffset:flatbuffers.Offset):flatbuffers.Offset {
  HDOMStruct.startHDOMStruct(builder);
  HDOMStruct.addIncludes(builder, includesOffset);
  HDOMStruct.addConnections(builder, connectionsOffset);
  HDOMStruct.addModels(builder, modelsOffset);
  HDOMStruct.addFrames(builder, framesOffset);
  return HDOMStruct.endHDOMStruct(builder);
}
}
