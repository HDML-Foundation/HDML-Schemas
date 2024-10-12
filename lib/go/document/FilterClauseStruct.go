// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package document

import (
	flatbuffers "github.com/google/flatbuffers/go"

	enum "github.com/HDML-Foundation/HDML-Schemas/lib/go/enum"
)

/// Filter clause structure.
type FilterClauseStruct struct {
	_tab flatbuffers.Table
}

func GetRootAsFilterClauseStruct(buf []byte, offset flatbuffers.UOffsetT) *FilterClauseStruct {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &FilterClauseStruct{}
	x.Init(buf, n+offset)
	return x
}

func FinishFilterClauseStructBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsFilterClauseStruct(buf []byte, offset flatbuffers.UOffsetT) *FilterClauseStruct {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &FilterClauseStruct{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedFilterClauseStructBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *FilterClauseStruct) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *FilterClauseStruct) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *FilterClauseStruct) Type() enum.FilterOperatorEnum {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return enum.FilterOperatorEnum(rcv._tab.GetInt8(o + rcv._tab.Pos))
	}
	return 0
}

func (rcv *FilterClauseStruct) MutateType(n enum.FilterOperatorEnum) bool {
	return rcv._tab.MutateInt8Slot(4, int8(n))
}

func (rcv *FilterClauseStruct) Filters(obj *FilterStruct, j int) bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		x := rcv._tab.Vector(o)
		x += flatbuffers.UOffsetT(j) * 4
		x = rcv._tab.Indirect(x)
		obj.Init(rcv._tab.Bytes, x)
		return true
	}
	return false
}

func (rcv *FilterClauseStruct) FiltersLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

func (rcv *FilterClauseStruct) Children(obj *FilterClauseStruct, j int) bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		x := rcv._tab.Vector(o)
		x += flatbuffers.UOffsetT(j) * 4
		x = rcv._tab.Indirect(x)
		obj.Init(rcv._tab.Bytes, x)
		return true
	}
	return false
}

func (rcv *FilterClauseStruct) ChildrenLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

func FilterClauseStructStart(builder *flatbuffers.Builder) {
	builder.StartObject(3)
}
func FilterClauseStructAddType(builder *flatbuffers.Builder, type_ enum.FilterOperatorEnum) {
	builder.PrependInt8Slot(0, int8(type_), 0)
}
func FilterClauseStructAddFilters(builder *flatbuffers.Builder, filters flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(filters), 0)
}
func FilterClauseStructStartFiltersVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func FilterClauseStructAddChildren(builder *flatbuffers.Builder, children flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(children), 0)
}
func FilterClauseStructStartChildrenVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func FilterClauseStructEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}