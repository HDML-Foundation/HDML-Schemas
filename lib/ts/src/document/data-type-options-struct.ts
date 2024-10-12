// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import { CommonParametersStruct } from '../document/common-parameters-struct.js';
import { DateParametersStruct } from '../document/date-parameters-struct.js';
import { DecimalParametersStruct } from '../document/decimal-parameters-struct.js';
import { TimeParametersStruct } from '../document/time-parameters-struct.js';
import { TimestampParametersStruct } from '../document/timestamp-parameters-struct.js';


/**
 * Data type options.
 */
export enum DataTypeOptionsStruct {
  NONE = 0,
  CommonParametersStruct = 1,
  DecimalParametersStruct = 2,
  DateParametersStruct = 3,
  TimeParametersStruct = 4,
  TimestampParametersStruct = 5
}

export function unionToDataTypeOptionsStruct(
  type: DataTypeOptionsStruct,
  accessor: (obj:CommonParametersStruct|DateParametersStruct|DecimalParametersStruct|TimeParametersStruct|TimestampParametersStruct) => CommonParametersStruct|DateParametersStruct|DecimalParametersStruct|TimeParametersStruct|TimestampParametersStruct|null
): CommonParametersStruct|DateParametersStruct|DecimalParametersStruct|TimeParametersStruct|TimestampParametersStruct|null {
  switch(DataTypeOptionsStruct[type]) {
    case 'NONE': return null; 
    case 'CommonParametersStruct': return accessor(new CommonParametersStruct())! as CommonParametersStruct;
    case 'DecimalParametersStruct': return accessor(new DecimalParametersStruct())! as DecimalParametersStruct;
    case 'DateParametersStruct': return accessor(new DateParametersStruct())! as DateParametersStruct;
    case 'TimeParametersStruct': return accessor(new TimeParametersStruct())! as TimeParametersStruct;
    case 'TimestampParametersStruct': return accessor(new TimestampParametersStruct())! as TimestampParametersStruct;
    default: return null;
  }
}

export function unionListToDataTypeOptionsStruct(
  type: DataTypeOptionsStruct, 
  accessor: (index: number, obj:CommonParametersStruct|DateParametersStruct|DecimalParametersStruct|TimeParametersStruct|TimestampParametersStruct) => CommonParametersStruct|DateParametersStruct|DecimalParametersStruct|TimeParametersStruct|TimestampParametersStruct|null, 
  index: number
): CommonParametersStruct|DateParametersStruct|DecimalParametersStruct|TimeParametersStruct|TimestampParametersStruct|null {
  switch(DataTypeOptionsStruct[type]) {
    case 'NONE': return null; 
    case 'CommonParametersStruct': return accessor(index, new CommonParametersStruct())! as CommonParametersStruct;
    case 'DecimalParametersStruct': return accessor(index, new DecimalParametersStruct())! as DecimalParametersStruct;
    case 'DateParametersStruct': return accessor(index, new DateParametersStruct())! as DateParametersStruct;
    case 'TimeParametersStruct': return accessor(index, new TimeParametersStruct())! as TimeParametersStruct;
    case 'TimestampParametersStruct': return accessor(index, new TimestampParametersStruct())! as TimestampParametersStruct;
    default: return null;
  }
}
