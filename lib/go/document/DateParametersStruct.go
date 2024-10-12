// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package document

import (
	flatbuffers "github.com/google/flatbuffers/go"

	enum "github.com/HDML-Foundation/HDML-Schemas/lib/go/enum"
)

/// Date data type parameters structure.
type DateParametersStruct struct {
	_tab flatbuffers.Table
}

func GetRootAsDateParametersStruct(buf []byte, offset flatbuffers.UOffsetT) *DateParametersStruct {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &DateParametersStruct{}
	x.Init(buf, n+offset)
	return x
}

func FinishDateParametersStructBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsDateParametersStruct(buf []byte, offset flatbuffers.UOffsetT) *DateParametersStruct {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &DateParametersStruct{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedDateParametersStructBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *DateParametersStruct) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *DateParametersStruct) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *DateParametersStruct) Nullable() bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.GetBool(o + rcv._tab.Pos)
	}
	return false
}

func (rcv *DateParametersStruct) MutateNullable(n bool) bool {
	return rcv._tab.MutateBoolSlot(4, n)
}

func (rcv *DateParametersStruct) Unit() enum.DateUnitEnum {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return enum.DateUnitEnum(rcv._tab.GetInt8(o + rcv._tab.Pos))
	}
	return 0
}

func (rcv *DateParametersStruct) MutateUnit(n enum.DateUnitEnum) bool {
	return rcv._tab.MutateInt8Slot(6, int8(n))
}

func DateParametersStructStart(builder *flatbuffers.Builder) {
	builder.StartObject(2)
}
func DateParametersStructAddNullable(builder *flatbuffers.Builder, nullable bool) {
	builder.PrependBoolSlot(0, nullable, false)
}
func DateParametersStructAddUnit(builder *flatbuffers.Builder, unit enum.DateUnitEnum) {
	builder.PrependInt8Slot(1, int8(unit), 0)
}
func DateParametersStructEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}