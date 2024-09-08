/**
 * @author Artem Lytvynov
 * @copyright Artem Lytvynov
 * @license Apache-2.0
 */

import { TableType } from "../enum/table-type";
import { Field } from "./Field";

/**
 * The `Table` interface represents a table in a data model. It
 * includes information about the table's name, type, data source,
 * and its associated fields. It provides a way to define and organize
 * data tables, whether they are actual tables, views, or materialized
 * views from a database or the result of a SQL query.
 *
 * ## Properties:
 * 
 * - `name` (string): The name of the table. This is used to identify
 *   the table within the data model.
 * 
 * - `type` (TableType): The type of the table. The type of the table,
 *   either `Table` for an actual database table, view, or
 *   materialized view, or `Query` for a table generated from a SQL
 *   query.
 * 
 * - `identifier` (string): The unique identifier for the table, which
 *   should include either the full three-tier table name for database
 *   tables, views, or materialized views, enclosed in back quotes for
 *   `Table` type, or SQL query for `Query` type.
 * 
 * - `fields` (Field[]): An array of fields that belong to the table.
 *   Each field contains detailed information about a column in the
 *   table, including its name, type, and other attributes.
 *
 * ## Example:
 *
 * ```ts
 * const table: Table = {
 *   name: "sales",
 *   type: TableType.Fact,
 *   source: "sales_data_source",
 *   fields: [
 *     {
 *       name: "total_sales",
 *       description: "Total sales amount for the period",
 *       origin: "sales_data",
 *       type: {
 *         type: DataType.Float64,
 *         options: {
 *           nullable: false
 *         }
 *       },
 *       aggregation: AggregationType.Sum,
 *       order: OrderType.Descending
 *     }
 *   ]
 * };
 * ```
 *
 * In this example, `table` defines a sales table with its name,
 * type, source, and an array of fields containing information about
 * the total sales field.
 */
export interface Table {
  name: string;
  type: TableType;
  source: string;
  fields: Field[];
}
