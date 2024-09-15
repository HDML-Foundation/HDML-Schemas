// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package enum

import "strconv"

/// Aggregation functions enum.
type AggregationType int8

const (
	AggregationTypeNone                AggregationType = 0
	AggregationTypeCount               AggregationType = 1
	AggregationTypeCountDistinct       AggregationType = 2
	AggregationTypeCountDistinctApprox AggregationType = 3
	AggregationTypeSum                 AggregationType = 4
	AggregationTypeAvg                 AggregationType = 5
	AggregationTypeMin                 AggregationType = 6
	AggregationTypeMax                 AggregationType = 7
)

var EnumNamesAggregationType = map[AggregationType]string{
	AggregationTypeNone:                "None",
	AggregationTypeCount:               "Count",
	AggregationTypeCountDistinct:       "CountDistinct",
	AggregationTypeCountDistinctApprox: "CountDistinctApprox",
	AggregationTypeSum:                 "Sum",
	AggregationTypeAvg:                 "Avg",
	AggregationTypeMin:                 "Min",
	AggregationTypeMax:                 "Max",
}

var EnumValuesAggregationType = map[string]AggregationType{
	"None":                AggregationTypeNone,
	"Count":               AggregationTypeCount,
	"CountDistinct":       AggregationTypeCountDistinct,
	"CountDistinctApprox": AggregationTypeCountDistinctApprox,
	"Sum":                 AggregationTypeSum,
	"Avg":                 AggregationTypeAvg,
	"Min":                 AggregationTypeMin,
	"Max":                 AggregationTypeMax,
}

func (v AggregationType) String() string {
	if s, ok := EnumNamesAggregationType[v]; ok {
		return s
	}
	return "AggregationType(" + strconv.FormatInt(int64(v), 10) + ")"
}