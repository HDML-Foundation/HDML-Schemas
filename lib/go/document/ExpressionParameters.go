// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package document

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

/// Expression filter parameters.
type ExpressionParameters struct {
	_tab flatbuffers.Table
}

func GetRootAsExpressionParameters(buf []byte, offset flatbuffers.UOffsetT) *ExpressionParameters {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &ExpressionParameters{}
	x.Init(buf, n+offset)
	return x
}

func FinishExpressionParametersBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsExpressionParameters(buf []byte, offset flatbuffers.UOffsetT) *ExpressionParameters {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &ExpressionParameters{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedExpressionParametersBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *ExpressionParameters) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *ExpressionParameters) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *ExpressionParameters) Clause() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func ExpressionParametersStart(builder *flatbuffers.Builder) {
	builder.StartObject(1)
}
func ExpressionParametersAddClause(builder *flatbuffers.Builder, clause flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(0, flatbuffers.UOffsetT(clause), 0)
}
func ExpressionParametersEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}