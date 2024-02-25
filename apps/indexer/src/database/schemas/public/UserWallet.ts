// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { type UserId } from './User';
import { type ColumnType, type Selectable, type Insertable, type Updateable } from 'kysely';

/** Identifier type for public.UserWallet */
export type UserWalletId = string & { __brand: 'UserWalletId' };

/** Represents the table public.UserWallet */
export default interface UserWalletTable {
  id: ColumnType<UserWalletId, UserWalletId | undefined, UserWalletId>;

  userId: ColumnType<UserId, UserId, UserId>;

  address: ColumnType<string, string, string>;

  verified: ColumnType<boolean, boolean | undefined, boolean>;
}

export type UserWallet = Selectable<UserWalletTable>;

export type NewUserWallet = Insertable<UserWalletTable>;

export type UserWalletUpdate = Updateable<UserWalletTable>;