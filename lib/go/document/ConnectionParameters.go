// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package document

import "strconv"

/// Union type to describe DB connection parameters.
type ConnectionParameters byte

const (
	ConnectionParametersNONE                    ConnectionParameters = 0
	ConnectionParametersJDBCParameters          ConnectionParameters = 1
	ConnectionParametersBigQueryParameters      ConnectionParameters = 2
	ConnectionParametersGoogleSheetsParameters  ConnectionParameters = 3
	ConnectionParametersElasticsearchParameters ConnectionParameters = 4
	ConnectionParametersMongoDBParameters       ConnectionParameters = 5
	ConnectionParametersSnowflakeParameters     ConnectionParameters = 6
)

var EnumNamesConnectionParameters = map[ConnectionParameters]string{
	ConnectionParametersNONE:                    "NONE",
	ConnectionParametersJDBCParameters:          "JDBCParameters",
	ConnectionParametersBigQueryParameters:      "BigQueryParameters",
	ConnectionParametersGoogleSheetsParameters:  "GoogleSheetsParameters",
	ConnectionParametersElasticsearchParameters: "ElasticsearchParameters",
	ConnectionParametersMongoDBParameters:       "MongoDBParameters",
	ConnectionParametersSnowflakeParameters:     "SnowflakeParameters",
}

var EnumValuesConnectionParameters = map[string]ConnectionParameters{
	"NONE":                    ConnectionParametersNONE,
	"JDBCParameters":          ConnectionParametersJDBCParameters,
	"BigQueryParameters":      ConnectionParametersBigQueryParameters,
	"GoogleSheetsParameters":  ConnectionParametersGoogleSheetsParameters,
	"ElasticsearchParameters": ConnectionParametersElasticsearchParameters,
	"MongoDBParameters":       ConnectionParametersMongoDBParameters,
	"SnowflakeParameters":     ConnectionParametersSnowflakeParameters,
}

func (v ConnectionParameters) String() string {
	if s, ok := EnumNamesConnectionParameters[v]; ok {
		return s
	}
	return "ConnectionParameters(" + strconv.FormatInt(int64(v), 10) + ")"
}