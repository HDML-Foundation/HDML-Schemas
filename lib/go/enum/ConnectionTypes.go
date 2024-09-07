// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package enum

import "strconv"

/// Database connection type.
type ConnectionTypes int8

const (
	ConnectionTypesPostgres      ConnectionTypes = 0
	ConnectionTypesMySQL         ConnectionTypes = 1
	ConnectionTypesMsSQL         ConnectionTypes = 2
	ConnectionTypesMariaDB       ConnectionTypes = 3
	ConnectionTypesOracle        ConnectionTypes = 4
	ConnectionTypesClickhouse    ConnectionTypes = 5
	ConnectionTypesDruid         ConnectionTypes = 6
	ConnectionTypesIgnite        ConnectionTypes = 7
	ConnectionTypesRedshift      ConnectionTypes = 8
	ConnectionTypesBigQuery      ConnectionTypes = 9
	ConnectionTypesGoogleSheets  ConnectionTypes = 10
	ConnectionTypesElasticSearch ConnectionTypes = 11
	ConnectionTypesMongoDB       ConnectionTypes = 12
)

var EnumNamesConnectionTypes = map[ConnectionTypes]string{
	ConnectionTypesPostgres:      "Postgres",
	ConnectionTypesMySQL:         "MySQL",
	ConnectionTypesMsSQL:         "MsSQL",
	ConnectionTypesMariaDB:       "MariaDB",
	ConnectionTypesOracle:        "Oracle",
	ConnectionTypesClickhouse:    "Clickhouse",
	ConnectionTypesDruid:         "Druid",
	ConnectionTypesIgnite:        "Ignite",
	ConnectionTypesRedshift:      "Redshift",
	ConnectionTypesBigQuery:      "BigQuery",
	ConnectionTypesGoogleSheets:  "GoogleSheets",
	ConnectionTypesElasticSearch: "ElasticSearch",
	ConnectionTypesMongoDB:       "MongoDB",
}

var EnumValuesConnectionTypes = map[string]ConnectionTypes{
	"Postgres":      ConnectionTypesPostgres,
	"MySQL":         ConnectionTypesMySQL,
	"MsSQL":         ConnectionTypesMsSQL,
	"MariaDB":       ConnectionTypesMariaDB,
	"Oracle":        ConnectionTypesOracle,
	"Clickhouse":    ConnectionTypesClickhouse,
	"Druid":         ConnectionTypesDruid,
	"Ignite":        ConnectionTypesIgnite,
	"Redshift":      ConnectionTypesRedshift,
	"BigQuery":      ConnectionTypesBigQuery,
	"GoogleSheets":  ConnectionTypesGoogleSheets,
	"ElasticSearch": ConnectionTypesElasticSearch,
	"MongoDB":       ConnectionTypesMongoDB,
}

func (v ConnectionTypes) String() string {
	if s, ok := EnumNamesConnectionTypes[v]; ok {
		return s
	}
	return "ConnectionTypes(" + strconv.FormatInt(int64(v), 10) + ")"
}