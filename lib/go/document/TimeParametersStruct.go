// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package document

import (
	flatbuffers "github.com/google/flatbuffers/go"

	enum "github.com/HDML-Foundation/HDML-Schemas/lib/go/enum"
)

/// Time data type parameters structure.
type TimeParametersStruct struct {
	_tab flatbuffers.Table
}

func GetRootAsTimeParametersStruct(buf []byte, offset flatbuffers.UOffsetT) *TimeParametersStruct {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &TimeParametersStruct{}
	x.Init(buf, n+offset)
	return x
}

func FinishTimeParametersStructBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsTimeParametersStruct(buf []byte, offset flatbuffers.UOffsetT) *TimeParametersStruct {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &TimeParametersStruct{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedTimeParametersStructBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *TimeParametersStruct) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *TimeParametersStruct) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *TimeParametersStruct) Nullable() bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.GetBool(o + rcv._tab.Pos)
	}
	return false
}

func (rcv *TimeParametersStruct) MutateNullable(n bool) bool {
	return rcv._tab.MutateBoolSlot(4, n)
}

func (rcv *TimeParametersStruct) Unit() enum.TimeUnitEnum {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return enum.TimeUnitEnum(rcv._tab.GetInt8(o + rcv._tab.Pos))
	}
	return 0
}

func (rcv *TimeParametersStruct) MutateUnit(n enum.TimeUnitEnum) bool {
	return rcv._tab.MutateInt8Slot(6, int8(n))
}

func TimeParametersStructStart(builder *flatbuffers.Builder) {
	builder.StartObject(2)
}
func TimeParametersStructAddNullable(builder *flatbuffers.Builder, nullable bool) {
	builder.PrependBoolSlot(0, nullable, false)
}
func TimeParametersStructAddUnit(builder *flatbuffers.Builder, unit enum.TimeUnitEnum) {
	builder.PrependInt8Slot(1, int8(unit), 0)
}
func TimeParametersStructEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
