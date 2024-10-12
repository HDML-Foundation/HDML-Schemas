// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package enum

import "strconv"

/// Decimal data type bit width enum.
type DecimalBitWidthEnum int8

const (
	DecimalBitWidthEnum_128 DecimalBitWidthEnum = 0
	DecimalBitWidthEnum_256 DecimalBitWidthEnum = 1
)

var EnumNamesDecimalBitWidthEnum = map[DecimalBitWidthEnum]string{
	DecimalBitWidthEnum_128: "_128",
	DecimalBitWidthEnum_256: "_256",
}

var EnumValuesDecimalBitWidthEnum = map[string]DecimalBitWidthEnum{
	"_128": DecimalBitWidthEnum_128,
	"_256": DecimalBitWidthEnum_256,
}

func (v DecimalBitWidthEnum) String() string {
	if s, ok := EnumNamesDecimalBitWidthEnum[v]; ok {
		return s
	}
	return "DecimalBitWidthEnum(" + strconv.FormatInt(int64(v), 10) + ")"
}
