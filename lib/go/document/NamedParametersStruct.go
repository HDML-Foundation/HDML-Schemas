// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package document

import (
	flatbuffers "github.com/google/flatbuffers/go"

	enum "github.com/HDML-Foundation/HDML-Schemas/lib/go/enum"
)

/// Named filter parameters.
type NamedParametersStruct struct {
	_tab flatbuffers.Table
}

func GetRootAsNamedParametersStruct(buf []byte, offset flatbuffers.UOffsetT) *NamedParametersStruct {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &NamedParametersStruct{}
	x.Init(buf, n+offset)
	return x
}

func FinishNamedParametersStructBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsNamedParametersStruct(buf []byte, offset flatbuffers.UOffsetT) *NamedParametersStruct {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &NamedParametersStruct{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedNamedParametersStructBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *NamedParametersStruct) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *NamedParametersStruct) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *NamedParametersStruct) Name() enum.FilterNameEnum {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return enum.FilterNameEnum(rcv._tab.GetInt8(o + rcv._tab.Pos))
	}
	return 0
}

func (rcv *NamedParametersStruct) MutateName(n enum.FilterNameEnum) bool {
	return rcv._tab.MutateInt8Slot(4, int8(n))
}

func (rcv *NamedParametersStruct) Field() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *NamedParametersStruct) Values(j int) []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		a := rcv._tab.Vector(o)
		return rcv._tab.ByteVector(a + flatbuffers.UOffsetT(j*4))
	}
	return nil
}

func (rcv *NamedParametersStruct) ValuesLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

func NamedParametersStructStart(builder *flatbuffers.Builder) {
	builder.StartObject(3)
}
func NamedParametersStructAddName(builder *flatbuffers.Builder, name enum.FilterNameEnum) {
	builder.PrependInt8Slot(0, int8(name), 0)
}
func NamedParametersStructAddField(builder *flatbuffers.Builder, field flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(field), 0)
}
func NamedParametersStructAddValues(builder *flatbuffers.Builder, values flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(values), 0)
}
func NamedParametersStructStartValuesVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func NamedParametersStructEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
