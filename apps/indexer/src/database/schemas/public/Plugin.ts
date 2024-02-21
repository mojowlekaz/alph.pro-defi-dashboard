// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { type ColumnType, type Selectable, type Insertable, type Updateable } from 'kysely';

/** Identifier type for public.Plugin */
export type PluginId = string & { __brand: 'PluginId' };

/** Represents the table public.Plugin */
export default interface PluginTable {
  id: ColumnType<PluginId, PluginId | undefined, PluginId>;

  name: ColumnType<string, string, string>;

  timestamp: ColumnType<Date, Date | string, Date | string>;
}

export type Plugin = Selectable<PluginTable>;

export type NewPlugin = Insertable<PluginTable>;

export type PluginUpdate = Updateable<PluginTable>;