// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package document

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

/// HDML document include component data structure.
type IncludeStruct struct {
	_tab flatbuffers.Table
}

func GetRootAsIncludeStruct(buf []byte, offset flatbuffers.UOffsetT) *IncludeStruct {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &IncludeStruct{}
	x.Init(buf, n+offset)
	return x
}

func FinishIncludeStructBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsIncludeStruct(buf []byte, offset flatbuffers.UOffsetT) *IncludeStruct {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &IncludeStruct{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedIncludeStructBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *IncludeStruct) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *IncludeStruct) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *IncludeStruct) Path() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func IncludeStructStart(builder *flatbuffers.Builder) {
	builder.StartObject(1)
}
func IncludeStructAddPath(builder *flatbuffers.Builder, path flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(0, flatbuffers.UOffsetT(path), 0)
}
func IncludeStructEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
