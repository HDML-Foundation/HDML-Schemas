// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package enum

import "strconv"

/// Ordering types enum.
type OrderType int8

const (
	OrderTypeNone OrderType = 0
	OrderTypeAsc  OrderType = 1
	OrderTypeDesc OrderType = 2
)

var EnumNamesOrderType = map[OrderType]string{
	OrderTypeNone: "None",
	OrderTypeAsc:  "Asc",
	OrderTypeDesc: "Desc",
}

var EnumValuesOrderType = map[string]OrderType{
	"None": OrderTypeNone,
	"Asc":  OrderTypeAsc,
	"Desc": OrderTypeDesc,
}

func (v OrderType) String() string {
	if s, ok := EnumNamesOrderType[v]; ok {
		return s
	}
	return "OrderType(" + strconv.FormatInt(int64(v), 10) + ")"
}