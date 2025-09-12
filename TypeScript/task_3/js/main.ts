/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
  firstName: 'Evgen',
  lastName: 'Khalepo',
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  firstName: 'Evgen',
  lastName: 'Khalepo',
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);