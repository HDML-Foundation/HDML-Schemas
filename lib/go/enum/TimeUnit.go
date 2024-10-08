// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package enum

import "strconv"

/// Time units enum.
type TimeUnit int8

const (
	TimeUnitSecond      TimeUnit = 0
	TimeUnitMillisecond TimeUnit = 1
	TimeUnitMicrosecond TimeUnit = 2
	TimeUnitNanosecond  TimeUnit = 3
)

var EnumNamesTimeUnit = map[TimeUnit]string{
	TimeUnitSecond:      "Second",
	TimeUnitMillisecond: "Millisecond",
	TimeUnitMicrosecond: "Microsecond",
	TimeUnitNanosecond:  "Nanosecond",
}

var EnumValuesTimeUnit = map[string]TimeUnit{
	"Second":      TimeUnitSecond,
	"Millisecond": TimeUnitMillisecond,
	"Microsecond": TimeUnitMicrosecond,
	"Nanosecond":  TimeUnitNanosecond,
}

func (v TimeUnit) String() string {
	if s, ok := EnumNamesTimeUnit[v]; ok {
		return s
	}
	return "TimeUnit(" + strconv.FormatInt(int64(v), 10) + ")"
}
