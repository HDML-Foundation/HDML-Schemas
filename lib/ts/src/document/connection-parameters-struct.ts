// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import { BigQueryParametersStruct } from '../document/big-query-parameters-struct.js';
import { ElasticsearchParametersStruct } from '../document/elasticsearch-parameters-struct.js';
import { GoogleSheetsParametersStruct } from '../document/google-sheets-parameters-struct.js';
import { JDBCParametersStruct } from '../document/jdbcparameters-struct.js';
import { MongoDBParametersStruct } from '../document/mongo-dbparameters-struct.js';
import { SnowflakeParametersStruct } from '../document/snowflake-parameters-struct.js';


/**
 * Union type to describe DB connection parameters.
 */
export enum ConnectionParametersStruct {
  NONE = 0,
  JDBCParametersStruct = 1,
  BigQueryParametersStruct = 2,
  GoogleSheetsParametersStruct = 3,
  ElasticsearchParametersStruct = 4,
  MongoDBParametersStruct = 5,
  SnowflakeParametersStruct = 6
}

export function unionToConnectionParametersStruct(
  type: ConnectionParametersStruct,
  accessor: (obj:BigQueryParametersStruct|ElasticsearchParametersStruct|GoogleSheetsParametersStruct|JDBCParametersStruct|MongoDBParametersStruct|SnowflakeParametersStruct) => BigQueryParametersStruct|ElasticsearchParametersStruct|GoogleSheetsParametersStruct|JDBCParametersStruct|MongoDBParametersStruct|SnowflakeParametersStruct|null
): BigQueryParametersStruct|ElasticsearchParametersStruct|GoogleSheetsParametersStruct|JDBCParametersStruct|MongoDBParametersStruct|SnowflakeParametersStruct|null {
  switch(ConnectionParametersStruct[type]) {
    case 'NONE': return null; 
    case 'JDBCParametersStruct': return accessor(new JDBCParametersStruct())! as JDBCParametersStruct;
    case 'BigQueryParametersStruct': return accessor(new BigQueryParametersStruct())! as BigQueryParametersStruct;
    case 'GoogleSheetsParametersStruct': return accessor(new GoogleSheetsParametersStruct())! as GoogleSheetsParametersStruct;
    case 'ElasticsearchParametersStruct': return accessor(new ElasticsearchParametersStruct())! as ElasticsearchParametersStruct;
    case 'MongoDBParametersStruct': return accessor(new MongoDBParametersStruct())! as MongoDBParametersStruct;
    case 'SnowflakeParametersStruct': return accessor(new SnowflakeParametersStruct())! as SnowflakeParametersStruct;
    default: return null;
  }
}

export function unionListToConnectionParametersStruct(
  type: ConnectionParametersStruct, 
  accessor: (index: number, obj:BigQueryParametersStruct|ElasticsearchParametersStruct|GoogleSheetsParametersStruct|JDBCParametersStruct|MongoDBParametersStruct|SnowflakeParametersStruct) => BigQueryParametersStruct|ElasticsearchParametersStruct|GoogleSheetsParametersStruct|JDBCParametersStruct|MongoDBParametersStruct|SnowflakeParametersStruct|null, 
  index: number
): BigQueryParametersStruct|ElasticsearchParametersStruct|GoogleSheetsParametersStruct|JDBCParametersStruct|MongoDBParametersStruct|SnowflakeParametersStruct|null {
  switch(ConnectionParametersStruct[type]) {
    case 'NONE': return null; 
    case 'JDBCParametersStruct': return accessor(index, new JDBCParametersStruct())! as JDBCParametersStruct;
    case 'BigQueryParametersStruct': return accessor(index, new BigQueryParametersStruct())! as BigQueryParametersStruct;
    case 'GoogleSheetsParametersStruct': return accessor(index, new GoogleSheetsParametersStruct())! as GoogleSheetsParametersStruct;
    case 'ElasticsearchParametersStruct': return accessor(index, new ElasticsearchParametersStruct())! as ElasticsearchParametersStruct;
    case 'MongoDBParametersStruct': return accessor(index, new MongoDBParametersStruct())! as MongoDBParametersStruct;
    case 'SnowflakeParametersStruct': return accessor(index, new SnowflakeParametersStruct())! as SnowflakeParametersStruct;
    default: return null;
  }
}
