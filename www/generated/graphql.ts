import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "friend" */
export type Friend = {
  __typename?: 'friend';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  pizza_orders: Array<Pizza_Order>;
  /** An aggregate relationship */
  pizza_orders_aggregate: Pizza_Order_Aggregate;
};


/** columns and relationships of "friend" */
export type FriendPizza_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Order_Order_By>>;
  where?: InputMaybe<Pizza_Order_Bool_Exp>;
};


/** columns and relationships of "friend" */
export type FriendPizza_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Order_Order_By>>;
  where?: InputMaybe<Pizza_Order_Bool_Exp>;
};

/** aggregated selection of "friend" */
export type Friend_Aggregate = {
  __typename?: 'friend_aggregate';
  aggregate?: Maybe<Friend_Aggregate_Fields>;
  nodes: Array<Friend>;
};

/** aggregate fields of "friend" */
export type Friend_Aggregate_Fields = {
  __typename?: 'friend_aggregate_fields';
  avg?: Maybe<Friend_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Friend_Max_Fields>;
  min?: Maybe<Friend_Min_Fields>;
  stddev?: Maybe<Friend_Stddev_Fields>;
  stddev_pop?: Maybe<Friend_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Friend_Stddev_Samp_Fields>;
  sum?: Maybe<Friend_Sum_Fields>;
  var_pop?: Maybe<Friend_Var_Pop_Fields>;
  var_samp?: Maybe<Friend_Var_Samp_Fields>;
  variance?: Maybe<Friend_Variance_Fields>;
};


/** aggregate fields of "friend" */
export type Friend_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Friend_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Friend_Avg_Fields = {
  __typename?: 'friend_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "friend". All fields are combined with a logical 'AND'. */
export type Friend_Bool_Exp = {
  _and?: InputMaybe<Array<Friend_Bool_Exp>>;
  _not?: InputMaybe<Friend_Bool_Exp>;
  _or?: InputMaybe<Array<Friend_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  pizza_orders?: InputMaybe<Pizza_Order_Bool_Exp>;
};

/** unique or primary key constraints on table "friend" */
export enum Friend_Constraint {
  /** unique or primary key constraint on columns "id" */
  FriendPkey = 'friend_pkey'
}

/** input type for incrementing numeric columns in table "friend" */
export type Friend_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "friend" */
export type Friend_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  pizza_orders?: InputMaybe<Pizza_Order_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Friend_Max_Fields = {
  __typename?: 'friend_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Friend_Min_Fields = {
  __typename?: 'friend_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "friend" */
export type Friend_Mutation_Response = {
  __typename?: 'friend_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Friend>;
};

/** input type for inserting object relation for remote table "friend" */
export type Friend_Obj_Rel_Insert_Input = {
  data: Friend_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Friend_On_Conflict>;
};

/** on_conflict condition type for table "friend" */
export type Friend_On_Conflict = {
  constraint: Friend_Constraint;
  update_columns?: Array<Friend_Update_Column>;
  where?: InputMaybe<Friend_Bool_Exp>;
};

/** Ordering options when selecting data from "friend". */
export type Friend_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pizza_orders_aggregate?: InputMaybe<Pizza_Order_Aggregate_Order_By>;
};

/** primary key columns input for table: friend */
export type Friend_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "friend" */
export enum Friend_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "friend" */
export type Friend_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Friend_Stddev_Fields = {
  __typename?: 'friend_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Friend_Stddev_Pop_Fields = {
  __typename?: 'friend_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Friend_Stddev_Samp_Fields = {
  __typename?: 'friend_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Friend_Sum_Fields = {
  __typename?: 'friend_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "friend" */
export enum Friend_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Friend_Var_Pop_Fields = {
  __typename?: 'friend_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Friend_Var_Samp_Fields = {
  __typename?: 'friend_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Friend_Variance_Fields = {
  __typename?: 'friend_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "friend" */
  delete_friend?: Maybe<Friend_Mutation_Response>;
  /** delete single row from the table: "friend" */
  delete_friend_by_pk?: Maybe<Friend>;
  /** delete data from the table: "pizza" */
  delete_pizza?: Maybe<Pizza_Mutation_Response>;
  /** delete single row from the table: "pizza" */
  delete_pizza_by_pk?: Maybe<Pizza>;
  /** delete data from the table: "pizza_order" */
  delete_pizza_order?: Maybe<Pizza_Order_Mutation_Response>;
  /** delete single row from the table: "pizza_order" */
  delete_pizza_order_by_pk?: Maybe<Pizza_Order>;
  /** delete data from the table: "pizza_topping" */
  delete_pizza_topping?: Maybe<Pizza_Topping_Mutation_Response>;
  /** delete single row from the table: "pizza_topping" */
  delete_pizza_topping_by_pk?: Maybe<Pizza_Topping>;
  /** delete data from the table: "pizza_topping_pizza" */
  delete_pizza_topping_pizza?: Maybe<Pizza_Topping_Pizza_Mutation_Response>;
  /** delete single row from the table: "pizza_topping_pizza" */
  delete_pizza_topping_pizza_by_pk?: Maybe<Pizza_Topping_Pizza>;
  /** insert data into the table: "friend" */
  insert_friend?: Maybe<Friend_Mutation_Response>;
  /** insert a single row into the table: "friend" */
  insert_friend_one?: Maybe<Friend>;
  /** insert data into the table: "pizza" */
  insert_pizza?: Maybe<Pizza_Mutation_Response>;
  /** insert a single row into the table: "pizza" */
  insert_pizza_one?: Maybe<Pizza>;
  /** insert data into the table: "pizza_order" */
  insert_pizza_order?: Maybe<Pizza_Order_Mutation_Response>;
  /** insert a single row into the table: "pizza_order" */
  insert_pizza_order_one?: Maybe<Pizza_Order>;
  /** insert data into the table: "pizza_topping" */
  insert_pizza_topping?: Maybe<Pizza_Topping_Mutation_Response>;
  /** insert a single row into the table: "pizza_topping" */
  insert_pizza_topping_one?: Maybe<Pizza_Topping>;
  /** insert data into the table: "pizza_topping_pizza" */
  insert_pizza_topping_pizza?: Maybe<Pizza_Topping_Pizza_Mutation_Response>;
  /** insert a single row into the table: "pizza_topping_pizza" */
  insert_pizza_topping_pizza_one?: Maybe<Pizza_Topping_Pizza>;
  /** update data of the table: "friend" */
  update_friend?: Maybe<Friend_Mutation_Response>;
  /** update single row of the table: "friend" */
  update_friend_by_pk?: Maybe<Friend>;
  /** update data of the table: "pizza" */
  update_pizza?: Maybe<Pizza_Mutation_Response>;
  /** update single row of the table: "pizza" */
  update_pizza_by_pk?: Maybe<Pizza>;
  /** update data of the table: "pizza_order" */
  update_pizza_order?: Maybe<Pizza_Order_Mutation_Response>;
  /** update single row of the table: "pizza_order" */
  update_pizza_order_by_pk?: Maybe<Pizza_Order>;
  /** update data of the table: "pizza_topping" */
  update_pizza_topping?: Maybe<Pizza_Topping_Mutation_Response>;
  /** update single row of the table: "pizza_topping" */
  update_pizza_topping_by_pk?: Maybe<Pizza_Topping>;
  /** update data of the table: "pizza_topping_pizza" */
  update_pizza_topping_pizza?: Maybe<Pizza_Topping_Pizza_Mutation_Response>;
  /** update single row of the table: "pizza_topping_pizza" */
  update_pizza_topping_pizza_by_pk?: Maybe<Pizza_Topping_Pizza>;
};


/** mutation root */
export type Mutation_RootDelete_FriendArgs = {
  where: Friend_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Friend_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PizzaArgs = {
  where: Pizza_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pizza_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Pizza_OrderArgs = {
  where: Pizza_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pizza_Order_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Pizza_ToppingArgs = {
  where: Pizza_Topping_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pizza_Topping_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Pizza_Topping_PizzaArgs = {
  where: Pizza_Topping_Pizza_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pizza_Topping_Pizza_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_FriendArgs = {
  objects: Array<Friend_Insert_Input>;
  on_conflict?: InputMaybe<Friend_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Friend_OneArgs = {
  object: Friend_Insert_Input;
  on_conflict?: InputMaybe<Friend_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PizzaArgs = {
  objects: Array<Pizza_Insert_Input>;
  on_conflict?: InputMaybe<Pizza_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pizza_OneArgs = {
  object: Pizza_Insert_Input;
  on_conflict?: InputMaybe<Pizza_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pizza_OrderArgs = {
  objects: Array<Pizza_Order_Insert_Input>;
  on_conflict?: InputMaybe<Pizza_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pizza_Order_OneArgs = {
  object: Pizza_Order_Insert_Input;
  on_conflict?: InputMaybe<Pizza_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pizza_ToppingArgs = {
  objects: Array<Pizza_Topping_Insert_Input>;
  on_conflict?: InputMaybe<Pizza_Topping_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pizza_Topping_OneArgs = {
  object: Pizza_Topping_Insert_Input;
  on_conflict?: InputMaybe<Pizza_Topping_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pizza_Topping_PizzaArgs = {
  objects: Array<Pizza_Topping_Pizza_Insert_Input>;
  on_conflict?: InputMaybe<Pizza_Topping_Pizza_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pizza_Topping_Pizza_OneArgs = {
  object: Pizza_Topping_Pizza_Insert_Input;
  on_conflict?: InputMaybe<Pizza_Topping_Pizza_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_FriendArgs = {
  _inc?: InputMaybe<Friend_Inc_Input>;
  _set?: InputMaybe<Friend_Set_Input>;
  where: Friend_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Friend_By_PkArgs = {
  _inc?: InputMaybe<Friend_Inc_Input>;
  _set?: InputMaybe<Friend_Set_Input>;
  pk_columns: Friend_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PizzaArgs = {
  _inc?: InputMaybe<Pizza_Inc_Input>;
  _set?: InputMaybe<Pizza_Set_Input>;
  where: Pizza_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_By_PkArgs = {
  _inc?: InputMaybe<Pizza_Inc_Input>;
  _set?: InputMaybe<Pizza_Set_Input>;
  pk_columns: Pizza_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_OrderArgs = {
  _inc?: InputMaybe<Pizza_Order_Inc_Input>;
  _set?: InputMaybe<Pizza_Order_Set_Input>;
  where: Pizza_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_Order_By_PkArgs = {
  _inc?: InputMaybe<Pizza_Order_Inc_Input>;
  _set?: InputMaybe<Pizza_Order_Set_Input>;
  pk_columns: Pizza_Order_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_ToppingArgs = {
  _inc?: InputMaybe<Pizza_Topping_Inc_Input>;
  _set?: InputMaybe<Pizza_Topping_Set_Input>;
  where: Pizza_Topping_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_Topping_By_PkArgs = {
  _inc?: InputMaybe<Pizza_Topping_Inc_Input>;
  _set?: InputMaybe<Pizza_Topping_Set_Input>;
  pk_columns: Pizza_Topping_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_Topping_PizzaArgs = {
  _inc?: InputMaybe<Pizza_Topping_Pizza_Inc_Input>;
  _set?: InputMaybe<Pizza_Topping_Pizza_Set_Input>;
  where: Pizza_Topping_Pizza_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_Topping_Pizza_By_PkArgs = {
  _inc?: InputMaybe<Pizza_Topping_Pizza_Inc_Input>;
  _set?: InputMaybe<Pizza_Topping_Pizza_Set_Input>;
  pk_columns: Pizza_Topping_Pizza_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "pizza" */
export type Pizza = {
  __typename?: 'pizza';
  id: Scalars['Int'];
  /** An array relationship */
  pizza_orders: Array<Pizza_Order>;
  /** An aggregate relationship */
  pizza_orders_aggregate: Pizza_Order_Aggregate;
  /** An array relationship */
  pizza_topping_pizzas: Array<Pizza_Topping_Pizza>;
  /** An aggregate relationship */
  pizza_topping_pizzas_aggregate: Pizza_Topping_Pizza_Aggregate;
  title: Scalars['Int'];
};


/** columns and relationships of "pizza" */
export type PizzaPizza_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Order_Order_By>>;
  where?: InputMaybe<Pizza_Order_Bool_Exp>;
};


/** columns and relationships of "pizza" */
export type PizzaPizza_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Order_Order_By>>;
  where?: InputMaybe<Pizza_Order_Bool_Exp>;
};


/** columns and relationships of "pizza" */
export type PizzaPizza_Topping_PizzasArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
};


/** columns and relationships of "pizza" */
export type PizzaPizza_Topping_Pizzas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
};

/** aggregated selection of "pizza" */
export type Pizza_Aggregate = {
  __typename?: 'pizza_aggregate';
  aggregate?: Maybe<Pizza_Aggregate_Fields>;
  nodes: Array<Pizza>;
};

/** aggregate fields of "pizza" */
export type Pizza_Aggregate_Fields = {
  __typename?: 'pizza_aggregate_fields';
  avg?: Maybe<Pizza_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pizza_Max_Fields>;
  min?: Maybe<Pizza_Min_Fields>;
  stddev?: Maybe<Pizza_Stddev_Fields>;
  stddev_pop?: Maybe<Pizza_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pizza_Stddev_Samp_Fields>;
  sum?: Maybe<Pizza_Sum_Fields>;
  var_pop?: Maybe<Pizza_Var_Pop_Fields>;
  var_samp?: Maybe<Pizza_Var_Samp_Fields>;
  variance?: Maybe<Pizza_Variance_Fields>;
};


/** aggregate fields of "pizza" */
export type Pizza_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pizza_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Pizza_Avg_Fields = {
  __typename?: 'pizza_avg_fields';
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "pizza". All fields are combined with a logical 'AND'. */
export type Pizza_Bool_Exp = {
  _and?: InputMaybe<Array<Pizza_Bool_Exp>>;
  _not?: InputMaybe<Pizza_Bool_Exp>;
  _or?: InputMaybe<Array<Pizza_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  pizza_orders?: InputMaybe<Pizza_Order_Bool_Exp>;
  pizza_topping_pizzas?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
  title?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "pizza" */
export enum Pizza_Constraint {
  /** unique or primary key constraint on columns "id" */
  PizzaPkey = 'pizza_pkey'
}

/** input type for incrementing numeric columns in table "pizza" */
export type Pizza_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "pizza" */
export type Pizza_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  pizza_orders?: InputMaybe<Pizza_Order_Arr_Rel_Insert_Input>;
  pizza_topping_pizzas?: InputMaybe<Pizza_Topping_Pizza_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Pizza_Max_Fields = {
  __typename?: 'pizza_max_fields';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Pizza_Min_Fields = {
  __typename?: 'pizza_min_fields';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "pizza" */
export type Pizza_Mutation_Response = {
  __typename?: 'pizza_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pizza>;
};

/** input type for inserting object relation for remote table "pizza" */
export type Pizza_Obj_Rel_Insert_Input = {
  data: Pizza_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Pizza_On_Conflict>;
};

/** on_conflict condition type for table "pizza" */
export type Pizza_On_Conflict = {
  constraint: Pizza_Constraint;
  update_columns?: Array<Pizza_Update_Column>;
  where?: InputMaybe<Pizza_Bool_Exp>;
};

/** columns and relationships of "pizza_order" */
export type Pizza_Order = {
  __typename?: 'pizza_order';
  /** An object relationship */
  friend: Friend;
  friend_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  pizza: Pizza;
  pizza_id: Scalars['Int'];
};

/** aggregated selection of "pizza_order" */
export type Pizza_Order_Aggregate = {
  __typename?: 'pizza_order_aggregate';
  aggregate?: Maybe<Pizza_Order_Aggregate_Fields>;
  nodes: Array<Pizza_Order>;
};

/** aggregate fields of "pizza_order" */
export type Pizza_Order_Aggregate_Fields = {
  __typename?: 'pizza_order_aggregate_fields';
  avg?: Maybe<Pizza_Order_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pizza_Order_Max_Fields>;
  min?: Maybe<Pizza_Order_Min_Fields>;
  stddev?: Maybe<Pizza_Order_Stddev_Fields>;
  stddev_pop?: Maybe<Pizza_Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pizza_Order_Stddev_Samp_Fields>;
  sum?: Maybe<Pizza_Order_Sum_Fields>;
  var_pop?: Maybe<Pizza_Order_Var_Pop_Fields>;
  var_samp?: Maybe<Pizza_Order_Var_Samp_Fields>;
  variance?: Maybe<Pizza_Order_Variance_Fields>;
};


/** aggregate fields of "pizza_order" */
export type Pizza_Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pizza_Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pizza_order" */
export type Pizza_Order_Aggregate_Order_By = {
  avg?: InputMaybe<Pizza_Order_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pizza_Order_Max_Order_By>;
  min?: InputMaybe<Pizza_Order_Min_Order_By>;
  stddev?: InputMaybe<Pizza_Order_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pizza_Order_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pizza_Order_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pizza_Order_Sum_Order_By>;
  var_pop?: InputMaybe<Pizza_Order_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pizza_Order_Var_Samp_Order_By>;
  variance?: InputMaybe<Pizza_Order_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "pizza_order" */
export type Pizza_Order_Arr_Rel_Insert_Input = {
  data: Array<Pizza_Order_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Pizza_Order_On_Conflict>;
};

/** aggregate avg on columns */
export type Pizza_Order_Avg_Fields = {
  __typename?: 'pizza_order_avg_fields';
  friend_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pizza_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "pizza_order" */
export type Pizza_Order_Avg_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pizza_order". All fields are combined with a logical 'AND'. */
export type Pizza_Order_Bool_Exp = {
  _and?: InputMaybe<Array<Pizza_Order_Bool_Exp>>;
  _not?: InputMaybe<Pizza_Order_Bool_Exp>;
  _or?: InputMaybe<Array<Pizza_Order_Bool_Exp>>;
  friend?: InputMaybe<Friend_Bool_Exp>;
  friend_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  pizza?: InputMaybe<Pizza_Bool_Exp>;
  pizza_id?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "pizza". */
export type Pizza_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_orders_aggregate?: InputMaybe<Pizza_Order_Aggregate_Order_By>;
  pizza_topping_pizzas_aggregate?: InputMaybe<Pizza_Topping_Pizza_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
};

/** unique or primary key constraints on table "pizza_order" */
export enum Pizza_Order_Constraint {
  /** unique or primary key constraint on columns "id" */
  PizzaOrderPkey = 'pizza_order_pkey'
}

/** input type for incrementing numeric columns in table "pizza_order" */
export type Pizza_Order_Inc_Input = {
  friend_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  pizza_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "pizza_order" */
export type Pizza_Order_Insert_Input = {
  friend?: InputMaybe<Friend_Obj_Rel_Insert_Input>;
  friend_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  pizza?: InputMaybe<Pizza_Obj_Rel_Insert_Input>;
  pizza_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Pizza_Order_Max_Fields = {
  __typename?: 'pizza_order_max_fields';
  friend_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  pizza_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "pizza_order" */
export type Pizza_Order_Max_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Pizza_Order_Min_Fields = {
  __typename?: 'pizza_order_min_fields';
  friend_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  pizza_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "pizza_order" */
export type Pizza_Order_Min_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "pizza_order" */
export type Pizza_Order_Mutation_Response = {
  __typename?: 'pizza_order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pizza_Order>;
};

/** on_conflict condition type for table "pizza_order" */
export type Pizza_Order_On_Conflict = {
  constraint: Pizza_Order_Constraint;
  update_columns?: Array<Pizza_Order_Update_Column>;
  where?: InputMaybe<Pizza_Order_Bool_Exp>;
};

/** Ordering options when selecting data from "pizza_order". */
export type Pizza_Order_Order_By = {
  friend?: InputMaybe<Friend_Order_By>;
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza?: InputMaybe<Pizza_Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pizza_order */
export type Pizza_Order_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "pizza_order" */
export enum Pizza_Order_Select_Column {
  /** column name */
  FriendId = 'friend_id',
  /** column name */
  Id = 'id',
  /** column name */
  PizzaId = 'pizza_id'
}

/** input type for updating data in table "pizza_order" */
export type Pizza_Order_Set_Input = {
  friend_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  pizza_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Pizza_Order_Stddev_Fields = {
  __typename?: 'pizza_order_stddev_fields';
  friend_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pizza_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "pizza_order" */
export type Pizza_Order_Stddev_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pizza_Order_Stddev_Pop_Fields = {
  __typename?: 'pizza_order_stddev_pop_fields';
  friend_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pizza_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "pizza_order" */
export type Pizza_Order_Stddev_Pop_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pizza_Order_Stddev_Samp_Fields = {
  __typename?: 'pizza_order_stddev_samp_fields';
  friend_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pizza_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "pizza_order" */
export type Pizza_Order_Stddev_Samp_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Pizza_Order_Sum_Fields = {
  __typename?: 'pizza_order_sum_fields';
  friend_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  pizza_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "pizza_order" */
export type Pizza_Order_Sum_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** update columns of table "pizza_order" */
export enum Pizza_Order_Update_Column {
  /** column name */
  FriendId = 'friend_id',
  /** column name */
  Id = 'id',
  /** column name */
  PizzaId = 'pizza_id'
}

/** aggregate var_pop on columns */
export type Pizza_Order_Var_Pop_Fields = {
  __typename?: 'pizza_order_var_pop_fields';
  friend_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pizza_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "pizza_order" */
export type Pizza_Order_Var_Pop_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pizza_Order_Var_Samp_Fields = {
  __typename?: 'pizza_order_var_samp_fields';
  friend_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pizza_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "pizza_order" */
export type Pizza_Order_Var_Samp_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Pizza_Order_Variance_Fields = {
  __typename?: 'pizza_order_variance_fields';
  friend_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pizza_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "pizza_order" */
export type Pizza_Order_Variance_Order_By = {
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pizza */
export type Pizza_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "pizza" */
export enum Pizza_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "pizza" */
export type Pizza_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Pizza_Stddev_Fields = {
  __typename?: 'pizza_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Pizza_Stddev_Pop_Fields = {
  __typename?: 'pizza_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Pizza_Stddev_Samp_Fields = {
  __typename?: 'pizza_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Pizza_Sum_Fields = {
  __typename?: 'pizza_sum_fields';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "pizza_topping" */
export type Pizza_Topping = {
  __typename?: 'pizza_topping';
  available: Scalars['Boolean'];
  emoji: Scalars['String'];
  id: Scalars['Int'];
  /** An array relationship */
  pizza_topping_pizzas: Array<Pizza_Topping_Pizza>;
  /** An aggregate relationship */
  pizza_topping_pizzas_aggregate: Pizza_Topping_Pizza_Aggregate;
  title: Scalars['String'];
};


/** columns and relationships of "pizza_topping" */
export type Pizza_ToppingPizza_Topping_PizzasArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
};


/** columns and relationships of "pizza_topping" */
export type Pizza_ToppingPizza_Topping_Pizzas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
};

/** aggregated selection of "pizza_topping" */
export type Pizza_Topping_Aggregate = {
  __typename?: 'pizza_topping_aggregate';
  aggregate?: Maybe<Pizza_Topping_Aggregate_Fields>;
  nodes: Array<Pizza_Topping>;
};

/** aggregate fields of "pizza_topping" */
export type Pizza_Topping_Aggregate_Fields = {
  __typename?: 'pizza_topping_aggregate_fields';
  avg?: Maybe<Pizza_Topping_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pizza_Topping_Max_Fields>;
  min?: Maybe<Pizza_Topping_Min_Fields>;
  stddev?: Maybe<Pizza_Topping_Stddev_Fields>;
  stddev_pop?: Maybe<Pizza_Topping_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pizza_Topping_Stddev_Samp_Fields>;
  sum?: Maybe<Pizza_Topping_Sum_Fields>;
  var_pop?: Maybe<Pizza_Topping_Var_Pop_Fields>;
  var_samp?: Maybe<Pizza_Topping_Var_Samp_Fields>;
  variance?: Maybe<Pizza_Topping_Variance_Fields>;
};


/** aggregate fields of "pizza_topping" */
export type Pizza_Topping_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pizza_Topping_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Pizza_Topping_Avg_Fields = {
  __typename?: 'pizza_topping_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "pizza_topping". All fields are combined with a logical 'AND'. */
export type Pizza_Topping_Bool_Exp = {
  _and?: InputMaybe<Array<Pizza_Topping_Bool_Exp>>;
  _not?: InputMaybe<Pizza_Topping_Bool_Exp>;
  _or?: InputMaybe<Array<Pizza_Topping_Bool_Exp>>;
  available?: InputMaybe<Boolean_Comparison_Exp>;
  emoji?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  pizza_topping_pizzas?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "pizza_topping" */
export enum Pizza_Topping_Constraint {
  /** unique or primary key constraint on columns "id" */
  PizzaToppingPkey = 'pizza_topping_pkey'
}

/** input type for incrementing numeric columns in table "pizza_topping" */
export type Pizza_Topping_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "pizza_topping" */
export type Pizza_Topping_Insert_Input = {
  available?: InputMaybe<Scalars['Boolean']>;
  emoji?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  pizza_topping_pizzas?: InputMaybe<Pizza_Topping_Pizza_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Pizza_Topping_Max_Fields = {
  __typename?: 'pizza_topping_max_fields';
  emoji?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Pizza_Topping_Min_Fields = {
  __typename?: 'pizza_topping_min_fields';
  emoji?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "pizza_topping" */
export type Pizza_Topping_Mutation_Response = {
  __typename?: 'pizza_topping_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pizza_Topping>;
};

/** input type for inserting object relation for remote table "pizza_topping" */
export type Pizza_Topping_Obj_Rel_Insert_Input = {
  data: Pizza_Topping_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Pizza_Topping_On_Conflict>;
};

/** on_conflict condition type for table "pizza_topping" */
export type Pizza_Topping_On_Conflict = {
  constraint: Pizza_Topping_Constraint;
  update_columns?: Array<Pizza_Topping_Update_Column>;
  where?: InputMaybe<Pizza_Topping_Bool_Exp>;
};

/** Ordering options when selecting data from "pizza_topping". */
export type Pizza_Topping_Order_By = {
  available?: InputMaybe<Order_By>;
  emoji?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pizza_topping_pizzas_aggregate?: InputMaybe<Pizza_Topping_Pizza_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
};

/** columns and relationships of "pizza_topping_pizza" */
export type Pizza_Topping_Pizza = {
  __typename?: 'pizza_topping_pizza';
  id: Scalars['Int'];
  /** An object relationship */
  pizza: Pizza;
  pizza_id: Scalars['Int'];
  /** An object relationship */
  pizza_topping: Pizza_Topping;
  pizza_topping_id: Scalars['Int'];
};

/** aggregated selection of "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Aggregate = {
  __typename?: 'pizza_topping_pizza_aggregate';
  aggregate?: Maybe<Pizza_Topping_Pizza_Aggregate_Fields>;
  nodes: Array<Pizza_Topping_Pizza>;
};

/** aggregate fields of "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Aggregate_Fields = {
  __typename?: 'pizza_topping_pizza_aggregate_fields';
  avg?: Maybe<Pizza_Topping_Pizza_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pizza_Topping_Pizza_Max_Fields>;
  min?: Maybe<Pizza_Topping_Pizza_Min_Fields>;
  stddev?: Maybe<Pizza_Topping_Pizza_Stddev_Fields>;
  stddev_pop?: Maybe<Pizza_Topping_Pizza_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pizza_Topping_Pizza_Stddev_Samp_Fields>;
  sum?: Maybe<Pizza_Topping_Pizza_Sum_Fields>;
  var_pop?: Maybe<Pizza_Topping_Pizza_Var_Pop_Fields>;
  var_samp?: Maybe<Pizza_Topping_Pizza_Var_Samp_Fields>;
  variance?: Maybe<Pizza_Topping_Pizza_Variance_Fields>;
};


/** aggregate fields of "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pizza_Topping_Pizza_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Aggregate_Order_By = {
  avg?: InputMaybe<Pizza_Topping_Pizza_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pizza_Topping_Pizza_Max_Order_By>;
  min?: InputMaybe<Pizza_Topping_Pizza_Min_Order_By>;
  stddev?: InputMaybe<Pizza_Topping_Pizza_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pizza_Topping_Pizza_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pizza_Topping_Pizza_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pizza_Topping_Pizza_Sum_Order_By>;
  var_pop?: InputMaybe<Pizza_Topping_Pizza_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pizza_Topping_Pizza_Var_Samp_Order_By>;
  variance?: InputMaybe<Pizza_Topping_Pizza_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Arr_Rel_Insert_Input = {
  data: Array<Pizza_Topping_Pizza_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Pizza_Topping_Pizza_On_Conflict>;
};

/** aggregate avg on columns */
export type Pizza_Topping_Pizza_Avg_Fields = {
  __typename?: 'pizza_topping_pizza_avg_fields';
  id?: Maybe<Scalars['Float']>;
  pizza_id?: Maybe<Scalars['Float']>;
  pizza_topping_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pizza_topping_pizza". All fields are combined with a logical 'AND'. */
export type Pizza_Topping_Pizza_Bool_Exp = {
  _and?: InputMaybe<Array<Pizza_Topping_Pizza_Bool_Exp>>;
  _not?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
  _or?: InputMaybe<Array<Pizza_Topping_Pizza_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  pizza?: InputMaybe<Pizza_Bool_Exp>;
  pizza_id?: InputMaybe<Int_Comparison_Exp>;
  pizza_topping?: InputMaybe<Pizza_Topping_Bool_Exp>;
  pizza_topping_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "pizza_topping_pizza" */
export enum Pizza_Topping_Pizza_Constraint {
  /** unique or primary key constraint on columns "id" */
  PizzaToppingPizzaPkey = 'pizza_topping_pizza_pkey'
}

/** input type for incrementing numeric columns in table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  pizza_id?: InputMaybe<Scalars['Int']>;
  pizza_topping_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  pizza?: InputMaybe<Pizza_Obj_Rel_Insert_Input>;
  pizza_id?: InputMaybe<Scalars['Int']>;
  pizza_topping?: InputMaybe<Pizza_Topping_Obj_Rel_Insert_Input>;
  pizza_topping_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Pizza_Topping_Pizza_Max_Fields = {
  __typename?: 'pizza_topping_pizza_max_fields';
  id?: Maybe<Scalars['Int']>;
  pizza_id?: Maybe<Scalars['Int']>;
  pizza_topping_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Pizza_Topping_Pizza_Min_Fields = {
  __typename?: 'pizza_topping_pizza_min_fields';
  id?: Maybe<Scalars['Int']>;
  pizza_id?: Maybe<Scalars['Int']>;
  pizza_topping_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Mutation_Response = {
  __typename?: 'pizza_topping_pizza_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pizza_Topping_Pizza>;
};

/** on_conflict condition type for table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_On_Conflict = {
  constraint: Pizza_Topping_Pizza_Constraint;
  update_columns?: Array<Pizza_Topping_Pizza_Update_Column>;
  where?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
};

/** Ordering options when selecting data from "pizza_topping_pizza". */
export type Pizza_Topping_Pizza_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza?: InputMaybe<Pizza_Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping?: InputMaybe<Pizza_Topping_Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pizza_topping_pizza */
export type Pizza_Topping_Pizza_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "pizza_topping_pizza" */
export enum Pizza_Topping_Pizza_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PizzaId = 'pizza_id',
  /** column name */
  PizzaToppingId = 'pizza_topping_id'
}

/** input type for updating data in table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  pizza_id?: InputMaybe<Scalars['Int']>;
  pizza_topping_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Pizza_Topping_Pizza_Stddev_Fields = {
  __typename?: 'pizza_topping_pizza_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  pizza_id?: Maybe<Scalars['Float']>;
  pizza_topping_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pizza_Topping_Pizza_Stddev_Pop_Fields = {
  __typename?: 'pizza_topping_pizza_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  pizza_id?: Maybe<Scalars['Float']>;
  pizza_topping_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pizza_Topping_Pizza_Stddev_Samp_Fields = {
  __typename?: 'pizza_topping_pizza_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  pizza_id?: Maybe<Scalars['Float']>;
  pizza_topping_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Pizza_Topping_Pizza_Sum_Fields = {
  __typename?: 'pizza_topping_pizza_sum_fields';
  id?: Maybe<Scalars['Int']>;
  pizza_id?: Maybe<Scalars['Int']>;
  pizza_topping_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** update columns of table "pizza_topping_pizza" */
export enum Pizza_Topping_Pizza_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PizzaId = 'pizza_id',
  /** column name */
  PizzaToppingId = 'pizza_topping_id'
}

/** aggregate var_pop on columns */
export type Pizza_Topping_Pizza_Var_Pop_Fields = {
  __typename?: 'pizza_topping_pizza_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  pizza_id?: Maybe<Scalars['Float']>;
  pizza_topping_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pizza_Topping_Pizza_Var_Samp_Fields = {
  __typename?: 'pizza_topping_pizza_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  pizza_id?: Maybe<Scalars['Float']>;
  pizza_topping_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Pizza_Topping_Pizza_Variance_Fields = {
  __typename?: 'pizza_topping_pizza_variance_fields';
  id?: Maybe<Scalars['Float']>;
  pizza_id?: Maybe<Scalars['Float']>;
  pizza_topping_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "pizza_topping_pizza" */
export type Pizza_Topping_Pizza_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  pizza_id?: InputMaybe<Order_By>;
  pizza_topping_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pizza_topping */
export type Pizza_Topping_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "pizza_topping" */
export enum Pizza_Topping_Select_Column {
  /** column name */
  Available = 'available',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "pizza_topping" */
export type Pizza_Topping_Set_Input = {
  available?: InputMaybe<Scalars['Boolean']>;
  emoji?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Pizza_Topping_Stddev_Fields = {
  __typename?: 'pizza_topping_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Pizza_Topping_Stddev_Pop_Fields = {
  __typename?: 'pizza_topping_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Pizza_Topping_Stddev_Samp_Fields = {
  __typename?: 'pizza_topping_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Pizza_Topping_Sum_Fields = {
  __typename?: 'pizza_topping_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "pizza_topping" */
export enum Pizza_Topping_Update_Column {
  /** column name */
  Available = 'available',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Pizza_Topping_Var_Pop_Fields = {
  __typename?: 'pizza_topping_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Pizza_Topping_Var_Samp_Fields = {
  __typename?: 'pizza_topping_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Pizza_Topping_Variance_Fields = {
  __typename?: 'pizza_topping_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** update columns of table "pizza" */
export enum Pizza_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Pizza_Var_Pop_Fields = {
  __typename?: 'pizza_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Pizza_Var_Samp_Fields = {
  __typename?: 'pizza_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Pizza_Variance_Fields = {
  __typename?: 'pizza_variance_fields';
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "friend" */
  friend: Array<Friend>;
  /** fetch aggregated fields from the table: "friend" */
  friend_aggregate: Friend_Aggregate;
  /** fetch data from the table: "friend" using primary key columns */
  friend_by_pk?: Maybe<Friend>;
  /** fetch data from the table: "pizza" */
  pizza: Array<Pizza>;
  /** fetch aggregated fields from the table: "pizza" */
  pizza_aggregate: Pizza_Aggregate;
  /** fetch data from the table: "pizza" using primary key columns */
  pizza_by_pk?: Maybe<Pizza>;
  /** fetch data from the table: "pizza_order" */
  pizza_order: Array<Pizza_Order>;
  /** fetch aggregated fields from the table: "pizza_order" */
  pizza_order_aggregate: Pizza_Order_Aggregate;
  /** fetch data from the table: "pizza_order" using primary key columns */
  pizza_order_by_pk?: Maybe<Pizza_Order>;
  /** fetch data from the table: "pizza_topping" */
  pizza_topping: Array<Pizza_Topping>;
  /** fetch aggregated fields from the table: "pizza_topping" */
  pizza_topping_aggregate: Pizza_Topping_Aggregate;
  /** fetch data from the table: "pizza_topping" using primary key columns */
  pizza_topping_by_pk?: Maybe<Pizza_Topping>;
  /** fetch data from the table: "pizza_topping_pizza" */
  pizza_topping_pizza: Array<Pizza_Topping_Pizza>;
  /** fetch aggregated fields from the table: "pizza_topping_pizza" */
  pizza_topping_pizza_aggregate: Pizza_Topping_Pizza_Aggregate;
  /** fetch data from the table: "pizza_topping_pizza" using primary key columns */
  pizza_topping_pizza_by_pk?: Maybe<Pizza_Topping_Pizza>;
};


export type Query_RootFriendArgs = {
  distinct_on?: InputMaybe<Array<Friend_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Friend_Order_By>>;
  where?: InputMaybe<Friend_Bool_Exp>;
};


export type Query_RootFriend_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Friend_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Friend_Order_By>>;
  where?: InputMaybe<Friend_Bool_Exp>;
};


export type Query_RootFriend_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPizzaArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Bool_Exp>;
};


export type Query_RootPizza_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Bool_Exp>;
};


export type Query_RootPizza_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPizza_OrderArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Order_Order_By>>;
  where?: InputMaybe<Pizza_Order_Bool_Exp>;
};


export type Query_RootPizza_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Order_Order_By>>;
  where?: InputMaybe<Pizza_Order_Bool_Exp>;
};


export type Query_RootPizza_Order_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPizza_ToppingArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Bool_Exp>;
};


export type Query_RootPizza_Topping_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Bool_Exp>;
};


export type Query_RootPizza_Topping_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPizza_Topping_PizzaArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
};


export type Query_RootPizza_Topping_Pizza_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
};


export type Query_RootPizza_Topping_Pizza_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "friend" */
  friend: Array<Friend>;
  /** fetch aggregated fields from the table: "friend" */
  friend_aggregate: Friend_Aggregate;
  /** fetch data from the table: "friend" using primary key columns */
  friend_by_pk?: Maybe<Friend>;
  /** fetch data from the table: "pizza" */
  pizza: Array<Pizza>;
  /** fetch aggregated fields from the table: "pizza" */
  pizza_aggregate: Pizza_Aggregate;
  /** fetch data from the table: "pizza" using primary key columns */
  pizza_by_pk?: Maybe<Pizza>;
  /** fetch data from the table: "pizza_order" */
  pizza_order: Array<Pizza_Order>;
  /** fetch aggregated fields from the table: "pizza_order" */
  pizza_order_aggregate: Pizza_Order_Aggregate;
  /** fetch data from the table: "pizza_order" using primary key columns */
  pizza_order_by_pk?: Maybe<Pizza_Order>;
  /** fetch data from the table: "pizza_topping" */
  pizza_topping: Array<Pizza_Topping>;
  /** fetch aggregated fields from the table: "pizza_topping" */
  pizza_topping_aggregate: Pizza_Topping_Aggregate;
  /** fetch data from the table: "pizza_topping" using primary key columns */
  pizza_topping_by_pk?: Maybe<Pizza_Topping>;
  /** fetch data from the table: "pizza_topping_pizza" */
  pizza_topping_pizza: Array<Pizza_Topping_Pizza>;
  /** fetch aggregated fields from the table: "pizza_topping_pizza" */
  pizza_topping_pizza_aggregate: Pizza_Topping_Pizza_Aggregate;
  /** fetch data from the table: "pizza_topping_pizza" using primary key columns */
  pizza_topping_pizza_by_pk?: Maybe<Pizza_Topping_Pizza>;
};


export type Subscription_RootFriendArgs = {
  distinct_on?: InputMaybe<Array<Friend_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Friend_Order_By>>;
  where?: InputMaybe<Friend_Bool_Exp>;
};


export type Subscription_RootFriend_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Friend_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Friend_Order_By>>;
  where?: InputMaybe<Friend_Bool_Exp>;
};


export type Subscription_RootFriend_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPizzaArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Bool_Exp>;
};


export type Subscription_RootPizza_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Bool_Exp>;
};


export type Subscription_RootPizza_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPizza_OrderArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Order_Order_By>>;
  where?: InputMaybe<Pizza_Order_Bool_Exp>;
};


export type Subscription_RootPizza_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Order_Order_By>>;
  where?: InputMaybe<Pizza_Order_Bool_Exp>;
};


export type Subscription_RootPizza_Order_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPizza_ToppingArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Bool_Exp>;
};


export type Subscription_RootPizza_Topping_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Bool_Exp>;
};


export type Subscription_RootPizza_Topping_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPizza_Topping_PizzaArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
};


export type Subscription_RootPizza_Topping_Pizza_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Topping_Pizza_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Topping_Pizza_Order_By>>;
  where?: InputMaybe<Pizza_Topping_Pizza_Bool_Exp>;
};


export type Subscription_RootPizza_Topping_Pizza_By_PkArgs = {
  id: Scalars['Int'];
};

export type GetFriendsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFriendsQuery = { __typename?: 'query_root', friend: Array<{ __typename?: 'friend', name: string, id: number }> };


export const GetFriends = gql`
    query GetFriends {
  friend {
    name
    id
  }
}
    `;
import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "query_root"
    },
    "mutationType": {
      "name": "mutation_root"
    },
    "subscriptionType": {
      "name": "subscription_root"
    },
    "types": [
      {
        "kind": "OBJECT",
        "name": "friend",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "pizza_orders",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_order",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_orders_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_order_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "friend_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "friend",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "friend_avg_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "friend_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "friend_min_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "friend_stddev_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "friend_stddev_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "friend_stddev_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "friend_sum_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "friend_var_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "friend_var_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "friend_variance_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_avg_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_max_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_min_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "friend",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_stddev_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_stddev_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_stddev_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_sum_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_var_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_var_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "friend_variance_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "mutation_root",
        "fields": [
          {
            "name": "delete_friend",
            "type": {
              "kind": "OBJECT",
              "name": "friend_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_friend_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "friend",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_pizza",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_pizza_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_pizza_order",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_pizza_order_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_pizza_topping",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_pizza_topping_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_pizza_topping_pizza",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_pizza_topping_pizza_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insert_friend",
            "type": {
              "kind": "OBJECT",
              "name": "friend_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_friend_one",
            "type": {
              "kind": "OBJECT",
              "name": "friend",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_pizza",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_pizza_one",
            "type": {
              "kind": "OBJECT",
              "name": "pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_pizza_order",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_pizza_order_one",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_pizza_topping",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_pizza_topping_one",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_pizza_topping_pizza",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_pizza_topping_pizza_one",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "update_friend",
            "type": {
              "kind": "OBJECT",
              "name": "friend_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_friend_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "friend",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza_order",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza_order_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza_topping",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza_topping_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza_topping_pizza",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_pizza_topping_pizza_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "pizza_orders",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_order",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_orders_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_order_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_pizzas",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping_pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_pizzas_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_topping_pizza_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_avg_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_min_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_stddev_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_stddev_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_stddev_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_sum_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_var_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_var_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_variance_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_avg_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_max_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_min_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order",
        "fields": [
          {
            "name": "friend",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "friend",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "friend_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "pizza",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_order",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_avg_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_min_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_stddev_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_stddev_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_stddev_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_sum_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_var_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_var_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order_variance_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_avg_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_max_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_min_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_order",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_stddev_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_stddev_pop_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_stddev_samp_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_sum_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_var_pop_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_var_samp_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_order_variance_fields",
        "fields": [
          {
            "name": "friend_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_stddev_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_stddev_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_stddev_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_sum_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping",
        "fields": [
          {
            "name": "available",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "emoji",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "pizza_topping_pizzas",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping_pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_pizzas_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_topping_pizza_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_avg_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_min_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_stddev_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_stddev_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_stddev_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_sum_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_var_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_var_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_variance_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_avg_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_max_fields",
        "fields": [
          {
            "name": "emoji",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_min_fields",
        "fields": [
          {
            "name": "emoji",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "pizza",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "pizza_topping",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_topping",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping_pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_avg_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_min_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_stddev_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_stddev_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_stddev_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_sum_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_var_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_var_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza_variance_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_avg_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_max_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_min_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping_pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_stddev_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_stddev_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_stddev_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_sum_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_var_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_var_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_pizza_variance_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "pizza_topping_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_stddev_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_stddev_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_stddev_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_sum_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_var_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_var_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_topping_variance_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_var_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_var_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "pizza_variance_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "query_root",
        "fields": [
          {
            "name": "friend",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "friend",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "friend_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "friend_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "friend_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "friend",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "pizza",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "pizza_order",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_order",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_order_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_order_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_order_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "pizza_topping",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_topping_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "pizza_topping_pizza",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping_pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_pizza_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_topping_pizza_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_pizza_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "subscription_root",
        "fields": [
          {
            "name": "friend",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "friend",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "friend_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "friend_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "friend_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "friend",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "pizza",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "pizza_order",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_order",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_order_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_order_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_order_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_order",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "pizza_topping",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_topping_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "pizza_topping_pizza",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "pizza_topping_pizza",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_pizza_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "pizza_topping_pizza_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pizza_topping_pizza_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "pizza_topping_pizza",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;