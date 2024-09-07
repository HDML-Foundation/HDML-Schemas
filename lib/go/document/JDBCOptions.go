// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package document

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

/// Options to connect to one the of the following DB: Postgres,
/// MySQL, MS SQL, MariaDB, Oracle, ClickHouse, Druid, Ignite,
/// Redshift.
type JDBCOptions struct {
	_tab flatbuffers.Table
}

func GetRootAsJDBCOptions(buf []byte, offset flatbuffers.UOffsetT) *JDBCOptions {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &JDBCOptions{}
	x.Init(buf, n+offset)
	return x
}

func FinishJDBCOptionsBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsJDBCOptions(buf []byte, offset flatbuffers.UOffsetT) *JDBCOptions {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &JDBCOptions{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedJDBCOptionsBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *JDBCOptions) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *JDBCOptions) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *JDBCOptions) Host() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *JDBCOptions) User() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *JDBCOptions) Password() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *JDBCOptions) Ssl() bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.GetBool(o + rcv._tab.Pos)
	}
	return false
}

func (rcv *JDBCOptions) MutateSsl(n bool) bool {
	return rcv._tab.MutateBoolSlot(10, n)
}

func JDBCOptionsStart(builder *flatbuffers.Builder) {
	builder.StartObject(4)
}
func JDBCOptionsAddHost(builder *flatbuffers.Builder, host flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(0, flatbuffers.UOffsetT(host), 0)
}
func JDBCOptionsAddUser(builder *flatbuffers.Builder, user flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(user), 0)
}
func JDBCOptionsAddPassword(builder *flatbuffers.Builder, password flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(password), 0)
}
func JDBCOptionsAddSsl(builder *flatbuffers.Builder, ssl bool) {
	builder.PrependBoolSlot(3, ssl, false)
}
func JDBCOptionsEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
