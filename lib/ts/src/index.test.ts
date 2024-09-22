/**
 * @author Artem Lytvynov
 * @copyright Artem Lytvynov
 * @license Apache-2.0
 */

import * as schema from "./index";

describe("@hdml/schema", () => {
  it("must exports required types", () => {
    expect(Object.keys(schema).length).toBe(42);
    expect(schema.AggregationType).toBeDefined();
    expect(schema.BigQueryParameters).toBeDefined();
    expect(schema.CommonParameters).toBeDefined();
    expect(schema.Connection).toBeDefined();
    expect(schema.ConnectionOptions).toBeDefined();
    expect(schema.ConnectionParameters).toBeDefined();
    expect(schema.ConnectorTypes).toBeDefined();
    expect(schema.DataType).toBeDefined();
    expect(schema.DataTypeOptions).toBeDefined();
    expect(schema.DateParameters).toBeDefined();
    expect(schema.DateUnit).toBeDefined();
    expect(schema.DecimalBitWidth).toBeDefined();
    expect(schema.DecimalParameters).toBeDefined();
    expect(schema.HDDM).toBeDefined();
    expect(schema.ElasticsearchParameters).toBeDefined();
    expect(schema.ExpressionParameters).toBeDefined();
    expect(schema.Field).toBeDefined();
    expect(schema.FieldType).toBeDefined();
    expect(schema.Filter).toBeDefined();
    expect(schema.FilterClause).toBeDefined();
    expect(schema.FilterName).toBeDefined();
    expect(schema.FilterOperator).toBeDefined();
    expect(schema.FilterOptions).toBeDefined();
    expect(schema.FilterType).toBeDefined();
    expect(schema.Frame).toBeDefined();
    expect(schema.GoogleSheetsParameters).toBeDefined();
    expect(schema.Include).toBeDefined();
    expect(schema.JDBCParameters).toBeDefined();
    expect(schema.Join).toBeDefined();
    expect(schema.JoinType).toBeDefined();
    expect(schema.KeysParameters).toBeDefined();
    expect(schema.Model).toBeDefined();
    expect(schema.MongoDBParameters).toBeDefined();
    expect(schema.NamedParameters).toBeDefined();
    expect(schema.OrderType).toBeDefined();
    expect(schema.SnowflakeParameters).toBeDefined();
    expect(schema.Table).toBeDefined();
    expect(schema.TableType).toBeDefined();
    expect(schema.TimeParameters).toBeDefined();
    expect(schema.TimeUnit).toBeDefined();
    expect(schema.TimeZone).toBeDefined();
    expect(schema.TimestampParameters).toBeDefined();
  });
});
