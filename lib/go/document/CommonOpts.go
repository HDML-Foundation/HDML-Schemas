// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package document

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

/// Common data type options structure.
type CommonOpts struct {
	_tab flatbuffers.Table
}

func GetRootAsCommonOpts(buf []byte, offset flatbuffers.UOffsetT) *CommonOpts {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &CommonOpts{}
	x.Init(buf, n+offset)
	return x
}

func FinishCommonOptsBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsCommonOpts(buf []byte, offset flatbuffers.UOffsetT) *CommonOpts {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &CommonOpts{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedCommonOptsBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *CommonOpts) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *CommonOpts) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *CommonOpts) Nullable() bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.GetBool(o + rcv._tab.Pos)
	}
	return false
}

func (rcv *CommonOpts) MutateNullable(n bool) bool {
	return rcv._tab.MutateBoolSlot(4, n)
}

func CommonOptsStart(builder *flatbuffers.Builder) {
	builder.StartObject(1)
}
func CommonOptsAddNullable(builder *flatbuffers.Builder, nullable bool) {
	builder.PrependBoolSlot(0, nullable, false)
}
func CommonOptsEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
