// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package enum

import "strconv"

/// Filter types enum.
type FilterType int8

const (
	FilterTypeExpr  FilterType = 0
	FilterTypeKeys  FilterType = 1
	FilterTypeNamed FilterType = 2
)

var EnumNamesFilterType = map[FilterType]string{
	FilterTypeExpr:  "Expr",
	FilterTypeKeys:  "Keys",
	FilterTypeNamed: "Named",
}

var EnumValuesFilterType = map[string]FilterType{
	"Expr":  FilterTypeExpr,
	"Keys":  FilterTypeKeys,
	"Named": FilterTypeNamed,
}

func (v FilterType) String() string {
	if s, ok := EnumNamesFilterType[v]; ok {
		return s
	}
	return "FilterType(" + strconv.FormatInt(int64(v), 10) + ")"
}
