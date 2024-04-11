// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { type ColumnType, type Selectable, type Insertable, type Updateable } from 'kysely';

/** Identifier type for public.FiatExchange */
export type FiatExchangeId = string & { __brand: 'FiatExchangeId' };

/** Represents the table public.FiatExchange */
export default interface FiatExchangeTable {
  id: ColumnType<FiatExchangeId, FiatExchangeId | undefined, FiatExchangeId>;

  code: ColumnType<string, string, string>;

  rate: ColumnType<bigint, bigint, bigint>;
}

export type FiatExchange = Selectable<FiatExchangeTable>;

export type NewFiatExchange = Insertable<FiatExchangeTable>;

export type FiatExchangeUpdate = Updateable<FiatExchangeTable>;
