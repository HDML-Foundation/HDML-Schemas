// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package enum

import "strconv"

/// Aggregation functions enum.
type AggType int8

const (
	AggTypeNone                AggType = 0
	AggTypeCount               AggType = 1
	AggTypeCountDistinct       AggType = 2
	AggTypeCountDistinctApprox AggType = 3
	AggTypeSum                 AggType = 4
	AggTypeAvg                 AggType = 5
	AggTypeMin                 AggType = 6
	AggTypeMax                 AggType = 7
)

var EnumNamesAggType = map[AggType]string{
	AggTypeNone:                "None",
	AggTypeCount:               "Count",
	AggTypeCountDistinct:       "CountDistinct",
	AggTypeCountDistinctApprox: "CountDistinctApprox",
	AggTypeSum:                 "Sum",
	AggTypeAvg:                 "Avg",
	AggTypeMin:                 "Min",
	AggTypeMax:                 "Max",
}

var EnumValuesAggType = map[string]AggType{
	"None":                AggTypeNone,
	"Count":               AggTypeCount,
	"CountDistinct":       AggTypeCountDistinct,
	"CountDistinctApprox": AggTypeCountDistinctApprox,
	"Sum":                 AggTypeSum,
	"Avg":                 AggTypeAvg,
	"Min":                 AggTypeMin,
	"Max":                 AggTypeMax,
}

func (v AggType) String() string {
	if s, ok := EnumNamesAggType[v]; ok {
		return s
	}
	return "AggType(" + strconv.FormatInt(int64(v), 10) + ")"
}
