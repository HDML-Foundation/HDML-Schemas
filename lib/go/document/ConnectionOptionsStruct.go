// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package document

import (
	flatbuffers "github.com/google/flatbuffers/go"

	enum "github.com/HDML-Foundation/HDML-Schemas/lib/go/enum"
)

/// Database connection options structure.
type ConnectionOptionsStruct struct {
	_tab flatbuffers.Table
}

func GetRootAsConnectionOptionsStruct(buf []byte, offset flatbuffers.UOffsetT) *ConnectionOptionsStruct {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &ConnectionOptionsStruct{}
	x.Init(buf, n+offset)
	return x
}

func FinishConnectionOptionsStructBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsConnectionOptionsStruct(buf []byte, offset flatbuffers.UOffsetT) *ConnectionOptionsStruct {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &ConnectionOptionsStruct{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedConnectionOptionsStructBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *ConnectionOptionsStruct) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *ConnectionOptionsStruct) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *ConnectionOptionsStruct) Connector() enum.ConnectorTypesEnum {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return enum.ConnectorTypesEnum(rcv._tab.GetInt8(o + rcv._tab.Pos))
	}
	return 0
}

func (rcv *ConnectionOptionsStruct) MutateConnector(n enum.ConnectorTypesEnum) bool {
	return rcv._tab.MutateInt8Slot(4, int8(n))
}

func (rcv *ConnectionOptionsStruct) ParametersType() ConnectionParametersStruct {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return ConnectionParametersStruct(rcv._tab.GetByte(o + rcv._tab.Pos))
	}
	return 0
}

func (rcv *ConnectionOptionsStruct) MutateParametersType(n ConnectionParametersStruct) bool {
	return rcv._tab.MutateByteSlot(6, byte(n))
}

func (rcv *ConnectionOptionsStruct) Parameters(obj *flatbuffers.Table) bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		rcv._tab.Union(obj, o)
		return true
	}
	return false
}

func ConnectionOptionsStructStart(builder *flatbuffers.Builder) {
	builder.StartObject(3)
}
func ConnectionOptionsStructAddConnector(builder *flatbuffers.Builder, connector enum.ConnectorTypesEnum) {
	builder.PrependInt8Slot(0, int8(connector), 0)
}
func ConnectionOptionsStructAddParametersType(builder *flatbuffers.Builder, parametersType ConnectionParametersStruct) {
	builder.PrependByteSlot(1, byte(parametersType), 0)
}
func ConnectionOptionsStructAddParameters(builder *flatbuffers.Builder, parameters flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(parameters), 0)
}
func ConnectionOptionsStructEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
