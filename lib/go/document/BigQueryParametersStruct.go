// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package document

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

/// Parameters to connect to the BigQuery.
type BigQueryParametersStruct struct {
	_tab flatbuffers.Table
}

func GetRootAsBigQueryParametersStruct(buf []byte, offset flatbuffers.UOffsetT) *BigQueryParametersStruct {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &BigQueryParametersStruct{}
	x.Init(buf, n+offset)
	return x
}

func FinishBigQueryParametersStructBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsBigQueryParametersStruct(buf []byte, offset flatbuffers.UOffsetT) *BigQueryParametersStruct {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &BigQueryParametersStruct{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedBigQueryParametersStructBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *BigQueryParametersStruct) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *BigQueryParametersStruct) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *BigQueryParametersStruct) ProjectId() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *BigQueryParametersStruct) CredentialsKey() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func BigQueryParametersStructStart(builder *flatbuffers.Builder) {
	builder.StartObject(2)
}
func BigQueryParametersStructAddProjectId(builder *flatbuffers.Builder, projectId flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(0, flatbuffers.UOffsetT(projectId), 0)
}
func BigQueryParametersStructAddCredentialsKey(builder *flatbuffers.Builder, credentialsKey flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(credentialsKey), 0)
}
func BigQueryParametersStructEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
