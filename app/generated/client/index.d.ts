
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Sala
 * 
 */
export type Sala = $Result.DefaultSelection<Prisma.$SalaPayload>
/**
 * Model MembrosSala
 * 
 */
export type MembrosSala = $Result.DefaultSelection<Prisma.$MembrosSalaPayload>
/**
 * Model Mensagem
 * 
 */
export type Mensagem = $Result.DefaultSelection<Prisma.$MensagemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sala`: Exposes CRUD operations for the **Sala** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Salas
    * const salas = await prisma.sala.findMany()
    * ```
    */
  get sala(): Prisma.SalaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membrosSala`: Exposes CRUD operations for the **MembrosSala** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MembrosSalas
    * const membrosSalas = await prisma.membrosSala.findMany()
    * ```
    */
  get membrosSala(): Prisma.MembrosSalaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensagem`: Exposes CRUD operations for the **Mensagem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensagems
    * const mensagems = await prisma.mensagem.findMany()
    * ```
    */
  get mensagem(): Prisma.MensagemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Sala: 'Sala',
    MembrosSala: 'MembrosSala',
    Mensagem: 'Mensagem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "sala" | "membrosSala" | "mensagem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Sala: {
        payload: Prisma.$SalaPayload<ExtArgs>
        fields: Prisma.SalaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          findFirst: {
            args: Prisma.SalaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          findMany: {
            args: Prisma.SalaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          create: {
            args: Prisma.SalaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          createMany: {
            args: Prisma.SalaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          delete: {
            args: Prisma.SalaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          update: {
            args: Prisma.SalaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          deleteMany: {
            args: Prisma.SalaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          upsert: {
            args: Prisma.SalaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          aggregate: {
            args: Prisma.SalaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSala>
          }
          groupBy: {
            args: Prisma.SalaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalaCountArgs<ExtArgs>
            result: $Utils.Optional<SalaCountAggregateOutputType> | number
          }
        }
      }
      MembrosSala: {
        payload: Prisma.$MembrosSalaPayload<ExtArgs>
        fields: Prisma.MembrosSalaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembrosSalaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrosSalaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembrosSalaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrosSalaPayload>
          }
          findFirst: {
            args: Prisma.MembrosSalaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrosSalaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembrosSalaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrosSalaPayload>
          }
          findMany: {
            args: Prisma.MembrosSalaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrosSalaPayload>[]
          }
          create: {
            args: Prisma.MembrosSalaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrosSalaPayload>
          }
          createMany: {
            args: Prisma.MembrosSalaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembrosSalaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrosSalaPayload>[]
          }
          delete: {
            args: Prisma.MembrosSalaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrosSalaPayload>
          }
          update: {
            args: Prisma.MembrosSalaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrosSalaPayload>
          }
          deleteMany: {
            args: Prisma.MembrosSalaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembrosSalaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembrosSalaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrosSalaPayload>[]
          }
          upsert: {
            args: Prisma.MembrosSalaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrosSalaPayload>
          }
          aggregate: {
            args: Prisma.MembrosSalaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembrosSala>
          }
          groupBy: {
            args: Prisma.MembrosSalaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembrosSalaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembrosSalaCountArgs<ExtArgs>
            result: $Utils.Optional<MembrosSalaCountAggregateOutputType> | number
          }
        }
      }
      Mensagem: {
        payload: Prisma.$MensagemPayload<ExtArgs>
        fields: Prisma.MensagemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensagemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensagemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          findFirst: {
            args: Prisma.MensagemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensagemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          findMany: {
            args: Prisma.MensagemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          create: {
            args: Prisma.MensagemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          createMany: {
            args: Prisma.MensagemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MensagemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          delete: {
            args: Prisma.MensagemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          update: {
            args: Prisma.MensagemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          deleteMany: {
            args: Prisma.MensagemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensagemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MensagemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          upsert: {
            args: Prisma.MensagemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          aggregate: {
            args: Prisma.MensagemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensagem>
          }
          groupBy: {
            args: Prisma.MensagemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensagemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensagemCountArgs<ExtArgs>
            result: $Utils.Optional<MensagemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    sala?: SalaOmit
    membrosSala?: MembrosSalaOmit
    mensagem?: MensagemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    membros: number
    mensagens: number
    salasCriadas: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membros?: boolean | UserCountOutputTypeCountMembrosArgs
    mensagens?: boolean | UserCountOutputTypeCountMensagensArgs
    salasCriadas?: boolean | UserCountOutputTypeCountSalasCriadasArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembrosSalaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSalasCriadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaWhereInput
  }


  /**
   * Count Type SalaCountOutputType
   */

  export type SalaCountOutputType = {
    membros: number
    mensagens: number
  }

  export type SalaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membros?: boolean | SalaCountOutputTypeCountMembrosArgs
    mensagens?: boolean | SalaCountOutputTypeCountMensagensArgs
  }

  // Custom InputTypes
  /**
   * SalaCountOutputType without action
   */
  export type SalaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaCountOutputType
     */
    select?: SalaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalaCountOutputType without action
   */
  export type SalaCountOutputTypeCountMembrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembrosSalaWhereInput
  }

  /**
   * SalaCountOutputType without action
   */
  export type SalaCountOutputTypeCountMensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    imagem: string | null
    nome: string | null
    senha: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    imagem: string | null
    nome: string | null
    senha: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    imagem: number
    nome: number
    senha: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    imagem?: true
    nome?: true
    senha?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    imagem?: true
    nome?: true
    senha?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    imagem?: true
    nome?: true
    senha?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    imagem: string | null
    nome: string
    senha: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    imagem?: boolean
    nome?: boolean
    senha?: boolean
    membros?: boolean | User$membrosArgs<ExtArgs>
    mensagens?: boolean | User$mensagensArgs<ExtArgs>
    salasCriadas?: boolean | User$salasCriadasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    imagem?: boolean
    nome?: boolean
    senha?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    imagem?: boolean
    nome?: boolean
    senha?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    imagem?: boolean
    nome?: boolean
    senha?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "imagem" | "nome" | "senha", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membros?: boolean | User$membrosArgs<ExtArgs>
    mensagens?: boolean | User$mensagensArgs<ExtArgs>
    salasCriadas?: boolean | User$salasCriadasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      membros: Prisma.$MembrosSalaPayload<ExtArgs>[]
      mensagens: Prisma.$MensagemPayload<ExtArgs>[]
      salasCriadas: Prisma.$SalaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      imagem: string | null
      nome: string
      senha: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    membros<T extends User$membrosArgs<ExtArgs> = {}>(args?: Subset<T, User$membrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembrosSalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mensagens<T extends User$mensagensArgs<ExtArgs> = {}>(args?: Subset<T, User$mensagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    salasCriadas<T extends User$salasCriadasArgs<ExtArgs> = {}>(args?: Subset<T, User$salasCriadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly imagem: FieldRef<"User", 'String'>
    readonly nome: FieldRef<"User", 'String'>
    readonly senha: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.membros
   */
  export type User$membrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembrosSala
     */
    select?: MembrosSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembrosSala
     */
    omit?: MembrosSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembrosSalaInclude<ExtArgs> | null
    where?: MembrosSalaWhereInput
    orderBy?: MembrosSalaOrderByWithRelationInput | MembrosSalaOrderByWithRelationInput[]
    cursor?: MembrosSalaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembrosSalaScalarFieldEnum | MembrosSalaScalarFieldEnum[]
  }

  /**
   * User.mensagens
   */
  export type User$mensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    where?: MensagemWhereInput
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    cursor?: MensagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * User.salasCriadas
   */
  export type User$salasCriadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    where?: SalaWhereInput
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    cursor?: SalaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Sala
   */

  export type AggregateSala = {
    _count: SalaCountAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  export type SalaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    categoria: string | null
    createdAt: Date | null
    descricao: string | null
    imagem: string | null
    admin: string | null
  }

  export type SalaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    categoria: string | null
    createdAt: Date | null
    descricao: string | null
    imagem: string | null
    admin: string | null
  }

  export type SalaCountAggregateOutputType = {
    id: number
    nome: number
    categoria: number
    createdAt: number
    descricao: number
    imagem: number
    admin: number
    _all: number
  }


  export type SalaMinAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    createdAt?: true
    descricao?: true
    imagem?: true
    admin?: true
  }

  export type SalaMaxAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    createdAt?: true
    descricao?: true
    imagem?: true
    admin?: true
  }

  export type SalaCountAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    createdAt?: true
    descricao?: true
    imagem?: true
    admin?: true
    _all?: true
  }

  export type SalaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sala to aggregate.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Salas
    **/
    _count?: true | SalaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalaMaxAggregateInputType
  }

  export type GetSalaAggregateType<T extends SalaAggregateArgs> = {
        [P in keyof T & keyof AggregateSala]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSala[P]>
      : GetScalarType<T[P], AggregateSala[P]>
  }




  export type SalaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaWhereInput
    orderBy?: SalaOrderByWithAggregationInput | SalaOrderByWithAggregationInput[]
    by: SalaScalarFieldEnum[] | SalaScalarFieldEnum
    having?: SalaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaCountAggregateInputType | true
    _min?: SalaMinAggregateInputType
    _max?: SalaMaxAggregateInputType
  }

  export type SalaGroupByOutputType = {
    id: string
    nome: string
    categoria: string
    createdAt: Date
    descricao: string
    imagem: string
    admin: string
    _count: SalaCountAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  type GetSalaGroupByPayload<T extends SalaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalaGroupByOutputType[P]>
            : GetScalarType<T[P], SalaGroupByOutputType[P]>
        }
      >
    >


  export type SalaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
    createdAt?: boolean
    descricao?: boolean
    imagem?: boolean
    admin?: boolean
    membros?: boolean | Sala$membrosArgs<ExtArgs>
    mensagens?: boolean | Sala$mensagensArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
    createdAt?: boolean
    descricao?: boolean
    imagem?: boolean
    admin?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
    createdAt?: boolean
    descricao?: boolean
    imagem?: boolean
    admin?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectScalar = {
    id?: boolean
    nome?: boolean
    categoria?: boolean
    createdAt?: boolean
    descricao?: boolean
    imagem?: boolean
    admin?: boolean
  }

  export type SalaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "categoria" | "createdAt" | "descricao" | "imagem" | "admin", ExtArgs["result"]["sala"]>
  export type SalaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membros?: boolean | Sala$membrosArgs<ExtArgs>
    mensagens?: boolean | Sala$mensagensArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SalaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SalaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SalaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sala"
    objects: {
      membros: Prisma.$MembrosSalaPayload<ExtArgs>[]
      mensagens: Prisma.$MensagemPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      categoria: string
      createdAt: Date
      descricao: string
      imagem: string
      admin: string
    }, ExtArgs["result"]["sala"]>
    composites: {}
  }

  type SalaGetPayload<S extends boolean | null | undefined | SalaDefaultArgs> = $Result.GetResult<Prisma.$SalaPayload, S>

  type SalaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalaCountAggregateInputType | true
    }

  export interface SalaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sala'], meta: { name: 'Sala' } }
    /**
     * Find zero or one Sala that matches the filter.
     * @param {SalaFindUniqueArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaFindUniqueArgs>(args: SelectSubset<T, SalaFindUniqueArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sala that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalaFindUniqueOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaFindUniqueOrThrowArgs>(args: SelectSubset<T, SalaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindFirstArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaFindFirstArgs>(args?: SelectSubset<T, SalaFindFirstArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindFirstOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaFindFirstOrThrowArgs>(args?: SelectSubset<T, SalaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Salas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salas
     * const salas = await prisma.sala.findMany()
     * 
     * // Get first 10 Salas
     * const salas = await prisma.sala.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salaWithIdOnly = await prisma.sala.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalaFindManyArgs>(args?: SelectSubset<T, SalaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sala.
     * @param {SalaCreateArgs} args - Arguments to create a Sala.
     * @example
     * // Create one Sala
     * const Sala = await prisma.sala.create({
     *   data: {
     *     // ... data to create a Sala
     *   }
     * })
     * 
     */
    create<T extends SalaCreateArgs>(args: SelectSubset<T, SalaCreateArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Salas.
     * @param {SalaCreateManyArgs} args - Arguments to create many Salas.
     * @example
     * // Create many Salas
     * const sala = await prisma.sala.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalaCreateManyArgs>(args?: SelectSubset<T, SalaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Salas and returns the data saved in the database.
     * @param {SalaCreateManyAndReturnArgs} args - Arguments to create many Salas.
     * @example
     * // Create many Salas
     * const sala = await prisma.sala.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Salas and only return the `id`
     * const salaWithIdOnly = await prisma.sala.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalaCreateManyAndReturnArgs>(args?: SelectSubset<T, SalaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sala.
     * @param {SalaDeleteArgs} args - Arguments to delete one Sala.
     * @example
     * // Delete one Sala
     * const Sala = await prisma.sala.delete({
     *   where: {
     *     // ... filter to delete one Sala
     *   }
     * })
     * 
     */
    delete<T extends SalaDeleteArgs>(args: SelectSubset<T, SalaDeleteArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sala.
     * @param {SalaUpdateArgs} args - Arguments to update one Sala.
     * @example
     * // Update one Sala
     * const sala = await prisma.sala.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalaUpdateArgs>(args: SelectSubset<T, SalaUpdateArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Salas.
     * @param {SalaDeleteManyArgs} args - Arguments to filter Salas to delete.
     * @example
     * // Delete a few Salas
     * const { count } = await prisma.sala.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalaDeleteManyArgs>(args?: SelectSubset<T, SalaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Salas
     * const sala = await prisma.sala.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalaUpdateManyArgs>(args: SelectSubset<T, SalaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salas and returns the data updated in the database.
     * @param {SalaUpdateManyAndReturnArgs} args - Arguments to update many Salas.
     * @example
     * // Update many Salas
     * const sala = await prisma.sala.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Salas and only return the `id`
     * const salaWithIdOnly = await prisma.sala.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalaUpdateManyAndReturnArgs>(args: SelectSubset<T, SalaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sala.
     * @param {SalaUpsertArgs} args - Arguments to update or create a Sala.
     * @example
     * // Update or create a Sala
     * const sala = await prisma.sala.upsert({
     *   create: {
     *     // ... data to create a Sala
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sala we want to update
     *   }
     * })
     */
    upsert<T extends SalaUpsertArgs>(args: SelectSubset<T, SalaUpsertArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaCountArgs} args - Arguments to filter Salas to count.
     * @example
     * // Count the number of Salas
     * const count = await prisma.sala.count({
     *   where: {
     *     // ... the filter for the Salas we want to count
     *   }
     * })
    **/
    count<T extends SalaCountArgs>(
      args?: Subset<T, SalaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalaAggregateArgs>(args: Subset<T, SalaAggregateArgs>): Prisma.PrismaPromise<GetSalaAggregateType<T>>

    /**
     * Group by Sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalaGroupByArgs['orderBy'] }
        : { orderBy?: SalaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sala model
   */
  readonly fields: SalaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sala.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    membros<T extends Sala$membrosArgs<ExtArgs> = {}>(args?: Subset<T, Sala$membrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembrosSalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mensagens<T extends Sala$mensagensArgs<ExtArgs> = {}>(args?: Subset<T, Sala$mensagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sala model
   */
  interface SalaFieldRefs {
    readonly id: FieldRef<"Sala", 'String'>
    readonly nome: FieldRef<"Sala", 'String'>
    readonly categoria: FieldRef<"Sala", 'String'>
    readonly createdAt: FieldRef<"Sala", 'DateTime'>
    readonly descricao: FieldRef<"Sala", 'String'>
    readonly imagem: FieldRef<"Sala", 'String'>
    readonly admin: FieldRef<"Sala", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sala findUnique
   */
  export type SalaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala findUniqueOrThrow
   */
  export type SalaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala findFirst
   */
  export type SalaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala findFirstOrThrow
   */
  export type SalaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala findMany
   */
  export type SalaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Salas to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala create
   */
  export type SalaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The data needed to create a Sala.
     */
    data: XOR<SalaCreateInput, SalaUncheckedCreateInput>
  }

  /**
   * Sala createMany
   */
  export type SalaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Salas.
     */
    data: SalaCreateManyInput | SalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sala createManyAndReturn
   */
  export type SalaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * The data used to create many Salas.
     */
    data: SalaCreateManyInput | SalaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sala update
   */
  export type SalaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The data needed to update a Sala.
     */
    data: XOR<SalaUpdateInput, SalaUncheckedUpdateInput>
    /**
     * Choose, which Sala to update.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala updateMany
   */
  export type SalaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Salas.
     */
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyInput>
    /**
     * Filter which Salas to update
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to update.
     */
    limit?: number
  }

  /**
   * Sala updateManyAndReturn
   */
  export type SalaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * The data used to update Salas.
     */
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyInput>
    /**
     * Filter which Salas to update
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sala upsert
   */
  export type SalaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The filter to search for the Sala to update in case it exists.
     */
    where: SalaWhereUniqueInput
    /**
     * In case the Sala found by the `where` argument doesn't exist, create a new Sala with this data.
     */
    create: XOR<SalaCreateInput, SalaUncheckedCreateInput>
    /**
     * In case the Sala was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalaUpdateInput, SalaUncheckedUpdateInput>
  }

  /**
   * Sala delete
   */
  export type SalaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter which Sala to delete.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala deleteMany
   */
  export type SalaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salas to delete
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to delete.
     */
    limit?: number
  }

  /**
   * Sala.membros
   */
  export type Sala$membrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembrosSala
     */
    select?: MembrosSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembrosSala
     */
    omit?: MembrosSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembrosSalaInclude<ExtArgs> | null
    where?: MembrosSalaWhereInput
    orderBy?: MembrosSalaOrderByWithRelationInput | MembrosSalaOrderByWithRelationInput[]
    cursor?: MembrosSalaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembrosSalaScalarFieldEnum | MembrosSalaScalarFieldEnum[]
  }

  /**
   * Sala.mensagens
   */
  export type Sala$mensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    where?: MensagemWhereInput
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    cursor?: MensagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Sala without action
   */
  export type SalaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
  }


  /**
   * Model MembrosSala
   */

  export type AggregateMembrosSala = {
    _count: MembrosSalaCountAggregateOutputType | null
    _min: MembrosSalaMinAggregateOutputType | null
    _max: MembrosSalaMaxAggregateOutputType | null
  }

  export type MembrosSalaMinAggregateOutputType = {
    userId: string | null
    salaId: string | null
  }

  export type MembrosSalaMaxAggregateOutputType = {
    userId: string | null
    salaId: string | null
  }

  export type MembrosSalaCountAggregateOutputType = {
    userId: number
    salaId: number
    _all: number
  }


  export type MembrosSalaMinAggregateInputType = {
    userId?: true
    salaId?: true
  }

  export type MembrosSalaMaxAggregateInputType = {
    userId?: true
    salaId?: true
  }

  export type MembrosSalaCountAggregateInputType = {
    userId?: true
    salaId?: true
    _all?: true
  }

  export type MembrosSalaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembrosSala to aggregate.
     */
    where?: MembrosSalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembrosSalas to fetch.
     */
    orderBy?: MembrosSalaOrderByWithRelationInput | MembrosSalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembrosSalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembrosSalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembrosSalas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MembrosSalas
    **/
    _count?: true | MembrosSalaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembrosSalaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembrosSalaMaxAggregateInputType
  }

  export type GetMembrosSalaAggregateType<T extends MembrosSalaAggregateArgs> = {
        [P in keyof T & keyof AggregateMembrosSala]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembrosSala[P]>
      : GetScalarType<T[P], AggregateMembrosSala[P]>
  }




  export type MembrosSalaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembrosSalaWhereInput
    orderBy?: MembrosSalaOrderByWithAggregationInput | MembrosSalaOrderByWithAggregationInput[]
    by: MembrosSalaScalarFieldEnum[] | MembrosSalaScalarFieldEnum
    having?: MembrosSalaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembrosSalaCountAggregateInputType | true
    _min?: MembrosSalaMinAggregateInputType
    _max?: MembrosSalaMaxAggregateInputType
  }

  export type MembrosSalaGroupByOutputType = {
    userId: string
    salaId: string
    _count: MembrosSalaCountAggregateOutputType | null
    _min: MembrosSalaMinAggregateOutputType | null
    _max: MembrosSalaMaxAggregateOutputType | null
  }

  type GetMembrosSalaGroupByPayload<T extends MembrosSalaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembrosSalaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembrosSalaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembrosSalaGroupByOutputType[P]>
            : GetScalarType<T[P], MembrosSalaGroupByOutputType[P]>
        }
      >
    >


  export type MembrosSalaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    salaId?: boolean
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membrosSala"]>

  export type MembrosSalaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    salaId?: boolean
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membrosSala"]>

  export type MembrosSalaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    salaId?: boolean
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membrosSala"]>

  export type MembrosSalaSelectScalar = {
    userId?: boolean
    salaId?: boolean
  }

  export type MembrosSalaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "salaId", ExtArgs["result"]["membrosSala"]>
  export type MembrosSalaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MembrosSalaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MembrosSalaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MembrosSalaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MembrosSala"
    objects: {
      sala: Prisma.$SalaPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      salaId: string
    }, ExtArgs["result"]["membrosSala"]>
    composites: {}
  }

  type MembrosSalaGetPayload<S extends boolean | null | undefined | MembrosSalaDefaultArgs> = $Result.GetResult<Prisma.$MembrosSalaPayload, S>

  type MembrosSalaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembrosSalaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembrosSalaCountAggregateInputType | true
    }

  export interface MembrosSalaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MembrosSala'], meta: { name: 'MembrosSala' } }
    /**
     * Find zero or one MembrosSala that matches the filter.
     * @param {MembrosSalaFindUniqueArgs} args - Arguments to find a MembrosSala
     * @example
     * // Get one MembrosSala
     * const membrosSala = await prisma.membrosSala.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembrosSalaFindUniqueArgs>(args: SelectSubset<T, MembrosSalaFindUniqueArgs<ExtArgs>>): Prisma__MembrosSalaClient<$Result.GetResult<Prisma.$MembrosSalaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MembrosSala that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembrosSalaFindUniqueOrThrowArgs} args - Arguments to find a MembrosSala
     * @example
     * // Get one MembrosSala
     * const membrosSala = await prisma.membrosSala.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembrosSalaFindUniqueOrThrowArgs>(args: SelectSubset<T, MembrosSalaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembrosSalaClient<$Result.GetResult<Prisma.$MembrosSalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembrosSala that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembrosSalaFindFirstArgs} args - Arguments to find a MembrosSala
     * @example
     * // Get one MembrosSala
     * const membrosSala = await prisma.membrosSala.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembrosSalaFindFirstArgs>(args?: SelectSubset<T, MembrosSalaFindFirstArgs<ExtArgs>>): Prisma__MembrosSalaClient<$Result.GetResult<Prisma.$MembrosSalaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembrosSala that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembrosSalaFindFirstOrThrowArgs} args - Arguments to find a MembrosSala
     * @example
     * // Get one MembrosSala
     * const membrosSala = await prisma.membrosSala.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembrosSalaFindFirstOrThrowArgs>(args?: SelectSubset<T, MembrosSalaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembrosSalaClient<$Result.GetResult<Prisma.$MembrosSalaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MembrosSalas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembrosSalaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MembrosSalas
     * const membrosSalas = await prisma.membrosSala.findMany()
     * 
     * // Get first 10 MembrosSalas
     * const membrosSalas = await prisma.membrosSala.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const membrosSalaWithUserIdOnly = await prisma.membrosSala.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends MembrosSalaFindManyArgs>(args?: SelectSubset<T, MembrosSalaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembrosSalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MembrosSala.
     * @param {MembrosSalaCreateArgs} args - Arguments to create a MembrosSala.
     * @example
     * // Create one MembrosSala
     * const MembrosSala = await prisma.membrosSala.create({
     *   data: {
     *     // ... data to create a MembrosSala
     *   }
     * })
     * 
     */
    create<T extends MembrosSalaCreateArgs>(args: SelectSubset<T, MembrosSalaCreateArgs<ExtArgs>>): Prisma__MembrosSalaClient<$Result.GetResult<Prisma.$MembrosSalaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MembrosSalas.
     * @param {MembrosSalaCreateManyArgs} args - Arguments to create many MembrosSalas.
     * @example
     * // Create many MembrosSalas
     * const membrosSala = await prisma.membrosSala.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembrosSalaCreateManyArgs>(args?: SelectSubset<T, MembrosSalaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MembrosSalas and returns the data saved in the database.
     * @param {MembrosSalaCreateManyAndReturnArgs} args - Arguments to create many MembrosSalas.
     * @example
     * // Create many MembrosSalas
     * const membrosSala = await prisma.membrosSala.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MembrosSalas and only return the `userId`
     * const membrosSalaWithUserIdOnly = await prisma.membrosSala.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembrosSalaCreateManyAndReturnArgs>(args?: SelectSubset<T, MembrosSalaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembrosSalaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MembrosSala.
     * @param {MembrosSalaDeleteArgs} args - Arguments to delete one MembrosSala.
     * @example
     * // Delete one MembrosSala
     * const MembrosSala = await prisma.membrosSala.delete({
     *   where: {
     *     // ... filter to delete one MembrosSala
     *   }
     * })
     * 
     */
    delete<T extends MembrosSalaDeleteArgs>(args: SelectSubset<T, MembrosSalaDeleteArgs<ExtArgs>>): Prisma__MembrosSalaClient<$Result.GetResult<Prisma.$MembrosSalaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MembrosSala.
     * @param {MembrosSalaUpdateArgs} args - Arguments to update one MembrosSala.
     * @example
     * // Update one MembrosSala
     * const membrosSala = await prisma.membrosSala.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembrosSalaUpdateArgs>(args: SelectSubset<T, MembrosSalaUpdateArgs<ExtArgs>>): Prisma__MembrosSalaClient<$Result.GetResult<Prisma.$MembrosSalaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MembrosSalas.
     * @param {MembrosSalaDeleteManyArgs} args - Arguments to filter MembrosSalas to delete.
     * @example
     * // Delete a few MembrosSalas
     * const { count } = await prisma.membrosSala.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembrosSalaDeleteManyArgs>(args?: SelectSubset<T, MembrosSalaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembrosSalas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembrosSalaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MembrosSalas
     * const membrosSala = await prisma.membrosSala.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembrosSalaUpdateManyArgs>(args: SelectSubset<T, MembrosSalaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembrosSalas and returns the data updated in the database.
     * @param {MembrosSalaUpdateManyAndReturnArgs} args - Arguments to update many MembrosSalas.
     * @example
     * // Update many MembrosSalas
     * const membrosSala = await prisma.membrosSala.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MembrosSalas and only return the `userId`
     * const membrosSalaWithUserIdOnly = await prisma.membrosSala.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MembrosSalaUpdateManyAndReturnArgs>(args: SelectSubset<T, MembrosSalaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembrosSalaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MembrosSala.
     * @param {MembrosSalaUpsertArgs} args - Arguments to update or create a MembrosSala.
     * @example
     * // Update or create a MembrosSala
     * const membrosSala = await prisma.membrosSala.upsert({
     *   create: {
     *     // ... data to create a MembrosSala
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MembrosSala we want to update
     *   }
     * })
     */
    upsert<T extends MembrosSalaUpsertArgs>(args: SelectSubset<T, MembrosSalaUpsertArgs<ExtArgs>>): Prisma__MembrosSalaClient<$Result.GetResult<Prisma.$MembrosSalaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MembrosSalas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembrosSalaCountArgs} args - Arguments to filter MembrosSalas to count.
     * @example
     * // Count the number of MembrosSalas
     * const count = await prisma.membrosSala.count({
     *   where: {
     *     // ... the filter for the MembrosSalas we want to count
     *   }
     * })
    **/
    count<T extends MembrosSalaCountArgs>(
      args?: Subset<T, MembrosSalaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembrosSalaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MembrosSala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembrosSalaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MembrosSalaAggregateArgs>(args: Subset<T, MembrosSalaAggregateArgs>): Prisma.PrismaPromise<GetMembrosSalaAggregateType<T>>

    /**
     * Group by MembrosSala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembrosSalaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MembrosSalaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembrosSalaGroupByArgs['orderBy'] }
        : { orderBy?: MembrosSalaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MembrosSalaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembrosSalaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MembrosSala model
   */
  readonly fields: MembrosSalaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MembrosSala.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembrosSalaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sala<T extends SalaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalaDefaultArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MembrosSala model
   */
  interface MembrosSalaFieldRefs {
    readonly userId: FieldRef<"MembrosSala", 'String'>
    readonly salaId: FieldRef<"MembrosSala", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MembrosSala findUnique
   */
  export type MembrosSalaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembrosSala
     */
    select?: MembrosSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembrosSala
     */
    omit?: MembrosSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembrosSalaInclude<ExtArgs> | null
    /**
     * Filter, which MembrosSala to fetch.
     */
    where: MembrosSalaWhereUniqueInput
  }

  /**
   * MembrosSala findUniqueOrThrow
   */
  export type MembrosSalaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembrosSala
     */
    select?: MembrosSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembrosSala
     */
    omit?: MembrosSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembrosSalaInclude<ExtArgs> | null
    /**
     * Filter, which MembrosSala to fetch.
     */
    where: MembrosSalaWhereUniqueInput
  }

  /**
   * MembrosSala findFirst
   */
  export type MembrosSalaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembrosSala
     */
    select?: MembrosSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembrosSala
     */
    omit?: MembrosSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembrosSalaInclude<ExtArgs> | null
    /**
     * Filter, which MembrosSala to fetch.
     */
    where?: MembrosSalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembrosSalas to fetch.
     */
    orderBy?: MembrosSalaOrderByWithRelationInput | MembrosSalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembrosSalas.
     */
    cursor?: MembrosSalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembrosSalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembrosSalas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembrosSalas.
     */
    distinct?: MembrosSalaScalarFieldEnum | MembrosSalaScalarFieldEnum[]
  }

  /**
   * MembrosSala findFirstOrThrow
   */
  export type MembrosSalaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembrosSala
     */
    select?: MembrosSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembrosSala
     */
    omit?: MembrosSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembrosSalaInclude<ExtArgs> | null
    /**
     * Filter, which MembrosSala to fetch.
     */
    where?: MembrosSalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembrosSalas to fetch.
     */
    orderBy?: MembrosSalaOrderByWithRelationInput | MembrosSalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembrosSalas.
     */
    cursor?: MembrosSalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembrosSalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembrosSalas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembrosSalas.
     */
    distinct?: MembrosSalaScalarFieldEnum | MembrosSalaScalarFieldEnum[]
  }

  /**
   * MembrosSala findMany
   */
  export type MembrosSalaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembrosSala
     */
    select?: MembrosSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembrosSala
     */
    omit?: MembrosSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembrosSalaInclude<ExtArgs> | null
    /**
     * Filter, which MembrosSalas to fetch.
     */
    where?: MembrosSalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembrosSalas to fetch.
     */
    orderBy?: MembrosSalaOrderByWithRelationInput | MembrosSalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MembrosSalas.
     */
    cursor?: MembrosSalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembrosSalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembrosSalas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembrosSalas.
     */
    distinct?: MembrosSalaScalarFieldEnum | MembrosSalaScalarFieldEnum[]
  }

  /**
   * MembrosSala create
   */
  export type MembrosSalaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembrosSala
     */
    select?: MembrosSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembrosSala
     */
    omit?: MembrosSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembrosSalaInclude<ExtArgs> | null
    /**
     * The data needed to create a MembrosSala.
     */
    data: XOR<MembrosSalaCreateInput, MembrosSalaUncheckedCreateInput>
  }

  /**
   * MembrosSala createMany
   */
  export type MembrosSalaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MembrosSalas.
     */
    data: MembrosSalaCreateManyInput | MembrosSalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MembrosSala createManyAndReturn
   */
  export type MembrosSalaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembrosSala
     */
    select?: MembrosSalaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MembrosSala
     */
    omit?: MembrosSalaOmit<ExtArgs> | null
    /**
     * The data used to create many MembrosSalas.
     */
    data: MembrosSalaCreateManyInput | MembrosSalaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembrosSalaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MembrosSala update
   */
  export type MembrosSalaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembrosSala
     */
    select?: MembrosSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembrosSala
     */
    omit?: MembrosSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembrosSalaInclude<ExtArgs> | null
    /**
     * The data needed to update a MembrosSala.
     */
    data: XOR<MembrosSalaUpdateInput, MembrosSalaUncheckedUpdateInput>
    /**
     * Choose, which MembrosSala to update.
     */
    where: MembrosSalaWhereUniqueInput
  }

  /**
   * MembrosSala updateMany
   */
  export type MembrosSalaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MembrosSalas.
     */
    data: XOR<MembrosSalaUpdateManyMutationInput, MembrosSalaUncheckedUpdateManyInput>
    /**
     * Filter which MembrosSalas to update
     */
    where?: MembrosSalaWhereInput
    /**
     * Limit how many MembrosSalas to update.
     */
    limit?: number
  }

  /**
   * MembrosSala updateManyAndReturn
   */
  export type MembrosSalaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembrosSala
     */
    select?: MembrosSalaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MembrosSala
     */
    omit?: MembrosSalaOmit<ExtArgs> | null
    /**
     * The data used to update MembrosSalas.
     */
    data: XOR<MembrosSalaUpdateManyMutationInput, MembrosSalaUncheckedUpdateManyInput>
    /**
     * Filter which MembrosSalas to update
     */
    where?: MembrosSalaWhereInput
    /**
     * Limit how many MembrosSalas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembrosSalaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MembrosSala upsert
   */
  export type MembrosSalaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembrosSala
     */
    select?: MembrosSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembrosSala
     */
    omit?: MembrosSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembrosSalaInclude<ExtArgs> | null
    /**
     * The filter to search for the MembrosSala to update in case it exists.
     */
    where: MembrosSalaWhereUniqueInput
    /**
     * In case the MembrosSala found by the `where` argument doesn't exist, create a new MembrosSala with this data.
     */
    create: XOR<MembrosSalaCreateInput, MembrosSalaUncheckedCreateInput>
    /**
     * In case the MembrosSala was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembrosSalaUpdateInput, MembrosSalaUncheckedUpdateInput>
  }

  /**
   * MembrosSala delete
   */
  export type MembrosSalaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembrosSala
     */
    select?: MembrosSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembrosSala
     */
    omit?: MembrosSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembrosSalaInclude<ExtArgs> | null
    /**
     * Filter which MembrosSala to delete.
     */
    where: MembrosSalaWhereUniqueInput
  }

  /**
   * MembrosSala deleteMany
   */
  export type MembrosSalaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembrosSalas to delete
     */
    where?: MembrosSalaWhereInput
    /**
     * Limit how many MembrosSalas to delete.
     */
    limit?: number
  }

  /**
   * MembrosSala without action
   */
  export type MembrosSalaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembrosSala
     */
    select?: MembrosSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembrosSala
     */
    omit?: MembrosSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembrosSalaInclude<ExtArgs> | null
  }


  /**
   * Model Mensagem
   */

  export type AggregateMensagem = {
    _count: MensagemCountAggregateOutputType | null
    _min: MensagemMinAggregateOutputType | null
    _max: MensagemMaxAggregateOutputType | null
  }

  export type MensagemMinAggregateOutputType = {
    id: string | null
    conteudo: string | null
    userId: string | null
    salaId: string | null
    createdAt: Date | null
  }

  export type MensagemMaxAggregateOutputType = {
    id: string | null
    conteudo: string | null
    userId: string | null
    salaId: string | null
    createdAt: Date | null
  }

  export type MensagemCountAggregateOutputType = {
    id: number
    conteudo: number
    userId: number
    salaId: number
    createdAt: number
    _all: number
  }


  export type MensagemMinAggregateInputType = {
    id?: true
    conteudo?: true
    userId?: true
    salaId?: true
    createdAt?: true
  }

  export type MensagemMaxAggregateInputType = {
    id?: true
    conteudo?: true
    userId?: true
    salaId?: true
    createdAt?: true
  }

  export type MensagemCountAggregateInputType = {
    id?: true
    conteudo?: true
    userId?: true
    salaId?: true
    createdAt?: true
    _all?: true
  }

  export type MensagemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensagem to aggregate.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mensagems
    **/
    _count?: true | MensagemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensagemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensagemMaxAggregateInputType
  }

  export type GetMensagemAggregateType<T extends MensagemAggregateArgs> = {
        [P in keyof T & keyof AggregateMensagem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensagem[P]>
      : GetScalarType<T[P], AggregateMensagem[P]>
  }




  export type MensagemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemWhereInput
    orderBy?: MensagemOrderByWithAggregationInput | MensagemOrderByWithAggregationInput[]
    by: MensagemScalarFieldEnum[] | MensagemScalarFieldEnum
    having?: MensagemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensagemCountAggregateInputType | true
    _min?: MensagemMinAggregateInputType
    _max?: MensagemMaxAggregateInputType
  }

  export type MensagemGroupByOutputType = {
    id: string
    conteudo: string
    userId: string
    salaId: string
    createdAt: Date
    _count: MensagemCountAggregateOutputType | null
    _min: MensagemMinAggregateOutputType | null
    _max: MensagemMaxAggregateOutputType | null
  }

  type GetMensagemGroupByPayload<T extends MensagemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensagemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensagemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensagemGroupByOutputType[P]>
            : GetScalarType<T[P], MensagemGroupByOutputType[P]>
        }
      >
    >


  export type MensagemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    userId?: boolean
    salaId?: boolean
    createdAt?: boolean
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    userId?: boolean
    salaId?: boolean
    createdAt?: boolean
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    userId?: boolean
    salaId?: boolean
    createdAt?: boolean
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectScalar = {
    id?: boolean
    conteudo?: boolean
    userId?: boolean
    salaId?: boolean
    createdAt?: boolean
  }

  export type MensagemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conteudo" | "userId" | "salaId" | "createdAt", ExtArgs["result"]["mensagem"]>
  export type MensagemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MensagemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MensagemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MensagemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mensagem"
    objects: {
      sala: Prisma.$SalaPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conteudo: string
      userId: string
      salaId: string
      createdAt: Date
    }, ExtArgs["result"]["mensagem"]>
    composites: {}
  }

  type MensagemGetPayload<S extends boolean | null | undefined | MensagemDefaultArgs> = $Result.GetResult<Prisma.$MensagemPayload, S>

  type MensagemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MensagemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensagemCountAggregateInputType | true
    }

  export interface MensagemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mensagem'], meta: { name: 'Mensagem' } }
    /**
     * Find zero or one Mensagem that matches the filter.
     * @param {MensagemFindUniqueArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensagemFindUniqueArgs>(args: SelectSubset<T, MensagemFindUniqueArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mensagem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MensagemFindUniqueOrThrowArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensagemFindUniqueOrThrowArgs>(args: SelectSubset<T, MensagemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensagem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindFirstArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensagemFindFirstArgs>(args?: SelectSubset<T, MensagemFindFirstArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensagem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindFirstOrThrowArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensagemFindFirstOrThrowArgs>(args?: SelectSubset<T, MensagemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mensagems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensagems
     * const mensagems = await prisma.mensagem.findMany()
     * 
     * // Get first 10 Mensagems
     * const mensagems = await prisma.mensagem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensagemWithIdOnly = await prisma.mensagem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MensagemFindManyArgs>(args?: SelectSubset<T, MensagemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mensagem.
     * @param {MensagemCreateArgs} args - Arguments to create a Mensagem.
     * @example
     * // Create one Mensagem
     * const Mensagem = await prisma.mensagem.create({
     *   data: {
     *     // ... data to create a Mensagem
     *   }
     * })
     * 
     */
    create<T extends MensagemCreateArgs>(args: SelectSubset<T, MensagemCreateArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mensagems.
     * @param {MensagemCreateManyArgs} args - Arguments to create many Mensagems.
     * @example
     * // Create many Mensagems
     * const mensagem = await prisma.mensagem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensagemCreateManyArgs>(args?: SelectSubset<T, MensagemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mensagems and returns the data saved in the database.
     * @param {MensagemCreateManyAndReturnArgs} args - Arguments to create many Mensagems.
     * @example
     * // Create many Mensagems
     * const mensagem = await prisma.mensagem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mensagems and only return the `id`
     * const mensagemWithIdOnly = await prisma.mensagem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MensagemCreateManyAndReturnArgs>(args?: SelectSubset<T, MensagemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mensagem.
     * @param {MensagemDeleteArgs} args - Arguments to delete one Mensagem.
     * @example
     * // Delete one Mensagem
     * const Mensagem = await prisma.mensagem.delete({
     *   where: {
     *     // ... filter to delete one Mensagem
     *   }
     * })
     * 
     */
    delete<T extends MensagemDeleteArgs>(args: SelectSubset<T, MensagemDeleteArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mensagem.
     * @param {MensagemUpdateArgs} args - Arguments to update one Mensagem.
     * @example
     * // Update one Mensagem
     * const mensagem = await prisma.mensagem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensagemUpdateArgs>(args: SelectSubset<T, MensagemUpdateArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mensagems.
     * @param {MensagemDeleteManyArgs} args - Arguments to filter Mensagems to delete.
     * @example
     * // Delete a few Mensagems
     * const { count } = await prisma.mensagem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensagemDeleteManyArgs>(args?: SelectSubset<T, MensagemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensagems
     * const mensagem = await prisma.mensagem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensagemUpdateManyArgs>(args: SelectSubset<T, MensagemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensagems and returns the data updated in the database.
     * @param {MensagemUpdateManyAndReturnArgs} args - Arguments to update many Mensagems.
     * @example
     * // Update many Mensagems
     * const mensagem = await prisma.mensagem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mensagems and only return the `id`
     * const mensagemWithIdOnly = await prisma.mensagem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MensagemUpdateManyAndReturnArgs>(args: SelectSubset<T, MensagemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mensagem.
     * @param {MensagemUpsertArgs} args - Arguments to update or create a Mensagem.
     * @example
     * // Update or create a Mensagem
     * const mensagem = await prisma.mensagem.upsert({
     *   create: {
     *     // ... data to create a Mensagem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensagem we want to update
     *   }
     * })
     */
    upsert<T extends MensagemUpsertArgs>(args: SelectSubset<T, MensagemUpsertArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mensagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemCountArgs} args - Arguments to filter Mensagems to count.
     * @example
     * // Count the number of Mensagems
     * const count = await prisma.mensagem.count({
     *   where: {
     *     // ... the filter for the Mensagems we want to count
     *   }
     * })
    **/
    count<T extends MensagemCountArgs>(
      args?: Subset<T, MensagemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensagemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MensagemAggregateArgs>(args: Subset<T, MensagemAggregateArgs>): Prisma.PrismaPromise<GetMensagemAggregateType<T>>

    /**
     * Group by Mensagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MensagemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensagemGroupByArgs['orderBy'] }
        : { orderBy?: MensagemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MensagemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensagemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mensagem model
   */
  readonly fields: MensagemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mensagem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensagemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sala<T extends SalaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalaDefaultArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mensagem model
   */
  interface MensagemFieldRefs {
    readonly id: FieldRef<"Mensagem", 'String'>
    readonly conteudo: FieldRef<"Mensagem", 'String'>
    readonly userId: FieldRef<"Mensagem", 'String'>
    readonly salaId: FieldRef<"Mensagem", 'String'>
    readonly createdAt: FieldRef<"Mensagem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mensagem findUnique
   */
  export type MensagemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem findUniqueOrThrow
   */
  export type MensagemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem findFirst
   */
  export type MensagemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensagems.
     */
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem findFirstOrThrow
   */
  export type MensagemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensagems.
     */
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem findMany
   */
  export type MensagemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagems to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensagems.
     */
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem create
   */
  export type MensagemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The data needed to create a Mensagem.
     */
    data: XOR<MensagemCreateInput, MensagemUncheckedCreateInput>
  }

  /**
   * Mensagem createMany
   */
  export type MensagemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mensagems.
     */
    data: MensagemCreateManyInput | MensagemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mensagem createManyAndReturn
   */
  export type MensagemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * The data used to create many Mensagems.
     */
    data: MensagemCreateManyInput | MensagemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensagem update
   */
  export type MensagemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The data needed to update a Mensagem.
     */
    data: XOR<MensagemUpdateInput, MensagemUncheckedUpdateInput>
    /**
     * Choose, which Mensagem to update.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem updateMany
   */
  export type MensagemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mensagems.
     */
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyInput>
    /**
     * Filter which Mensagems to update
     */
    where?: MensagemWhereInput
    /**
     * Limit how many Mensagems to update.
     */
    limit?: number
  }

  /**
   * Mensagem updateManyAndReturn
   */
  export type MensagemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * The data used to update Mensagems.
     */
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyInput>
    /**
     * Filter which Mensagems to update
     */
    where?: MensagemWhereInput
    /**
     * Limit how many Mensagems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensagem upsert
   */
  export type MensagemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The filter to search for the Mensagem to update in case it exists.
     */
    where: MensagemWhereUniqueInput
    /**
     * In case the Mensagem found by the `where` argument doesn't exist, create a new Mensagem with this data.
     */
    create: XOR<MensagemCreateInput, MensagemUncheckedCreateInput>
    /**
     * In case the Mensagem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensagemUpdateInput, MensagemUncheckedUpdateInput>
  }

  /**
   * Mensagem delete
   */
  export type MensagemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter which Mensagem to delete.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem deleteMany
   */
  export type MensagemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensagems to delete
     */
    where?: MensagemWhereInput
    /**
     * Limit how many Mensagems to delete.
     */
    limit?: number
  }

  /**
   * Mensagem without action
   */
  export type MensagemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    imagem: 'imagem',
    nome: 'nome',
    senha: 'senha'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SalaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    categoria: 'categoria',
    createdAt: 'createdAt',
    descricao: 'descricao',
    imagem: 'imagem',
    admin: 'admin'
  };

  export type SalaScalarFieldEnum = (typeof SalaScalarFieldEnum)[keyof typeof SalaScalarFieldEnum]


  export const MembrosSalaScalarFieldEnum: {
    userId: 'userId',
    salaId: 'salaId'
  };

  export type MembrosSalaScalarFieldEnum = (typeof MembrosSalaScalarFieldEnum)[keyof typeof MembrosSalaScalarFieldEnum]


  export const MensagemScalarFieldEnum: {
    id: 'id',
    conteudo: 'conteudo',
    userId: 'userId',
    salaId: 'salaId',
    createdAt: 'createdAt'
  };

  export type MensagemScalarFieldEnum = (typeof MensagemScalarFieldEnum)[keyof typeof MensagemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    imagem?: StringNullableFilter<"User"> | string | null
    nome?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    membros?: MembrosSalaListRelationFilter
    mensagens?: MensagemListRelationFilter
    salasCriadas?: SalaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    imagem?: SortOrderInput | SortOrder
    nome?: SortOrder
    senha?: SortOrder
    membros?: MembrosSalaOrderByRelationAggregateInput
    mensagens?: MensagemOrderByRelationAggregateInput
    salasCriadas?: SalaOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    imagem?: StringNullableFilter<"User"> | string | null
    nome?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    membros?: MembrosSalaListRelationFilter
    mensagens?: MensagemListRelationFilter
    salasCriadas?: SalaListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    imagem?: SortOrderInput | SortOrder
    nome?: SortOrder
    senha?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    imagem?: StringNullableWithAggregatesFilter<"User"> | string | null
    nome?: StringWithAggregatesFilter<"User"> | string
    senha?: StringWithAggregatesFilter<"User"> | string
  }

  export type SalaWhereInput = {
    AND?: SalaWhereInput | SalaWhereInput[]
    OR?: SalaWhereInput[]
    NOT?: SalaWhereInput | SalaWhereInput[]
    id?: StringFilter<"Sala"> | string
    nome?: StringFilter<"Sala"> | string
    categoria?: StringFilter<"Sala"> | string
    createdAt?: DateTimeFilter<"Sala"> | Date | string
    descricao?: StringFilter<"Sala"> | string
    imagem?: StringFilter<"Sala"> | string
    admin?: StringFilter<"Sala"> | string
    membros?: MembrosSalaListRelationFilter
    mensagens?: MensagemListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SalaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    createdAt?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    admin?: SortOrder
    membros?: MembrosSalaOrderByRelationAggregateInput
    mensagens?: MensagemOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type SalaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalaWhereInput | SalaWhereInput[]
    OR?: SalaWhereInput[]
    NOT?: SalaWhereInput | SalaWhereInput[]
    nome?: StringFilter<"Sala"> | string
    categoria?: StringFilter<"Sala"> | string
    createdAt?: DateTimeFilter<"Sala"> | Date | string
    descricao?: StringFilter<"Sala"> | string
    imagem?: StringFilter<"Sala"> | string
    admin?: StringFilter<"Sala"> | string
    membros?: MembrosSalaListRelationFilter
    mensagens?: MensagemListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SalaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    createdAt?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    admin?: SortOrder
    _count?: SalaCountOrderByAggregateInput
    _max?: SalaMaxOrderByAggregateInput
    _min?: SalaMinOrderByAggregateInput
  }

  export type SalaScalarWhereWithAggregatesInput = {
    AND?: SalaScalarWhereWithAggregatesInput | SalaScalarWhereWithAggregatesInput[]
    OR?: SalaScalarWhereWithAggregatesInput[]
    NOT?: SalaScalarWhereWithAggregatesInput | SalaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sala"> | string
    nome?: StringWithAggregatesFilter<"Sala"> | string
    categoria?: StringWithAggregatesFilter<"Sala"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Sala"> | Date | string
    descricao?: StringWithAggregatesFilter<"Sala"> | string
    imagem?: StringWithAggregatesFilter<"Sala"> | string
    admin?: StringWithAggregatesFilter<"Sala"> | string
  }

  export type MembrosSalaWhereInput = {
    AND?: MembrosSalaWhereInput | MembrosSalaWhereInput[]
    OR?: MembrosSalaWhereInput[]
    NOT?: MembrosSalaWhereInput | MembrosSalaWhereInput[]
    userId?: StringFilter<"MembrosSala"> | string
    salaId?: StringFilter<"MembrosSala"> | string
    sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MembrosSalaOrderByWithRelationInput = {
    userId?: SortOrder
    salaId?: SortOrder
    sala?: SalaOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MembrosSalaWhereUniqueInput = Prisma.AtLeast<{
    userId_salaId?: MembrosSalaUserIdSalaIdCompoundUniqueInput
    AND?: MembrosSalaWhereInput | MembrosSalaWhereInput[]
    OR?: MembrosSalaWhereInput[]
    NOT?: MembrosSalaWhereInput | MembrosSalaWhereInput[]
    userId?: StringFilter<"MembrosSala"> | string
    salaId?: StringFilter<"MembrosSala"> | string
    sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId_salaId">

  export type MembrosSalaOrderByWithAggregationInput = {
    userId?: SortOrder
    salaId?: SortOrder
    _count?: MembrosSalaCountOrderByAggregateInput
    _max?: MembrosSalaMaxOrderByAggregateInput
    _min?: MembrosSalaMinOrderByAggregateInput
  }

  export type MembrosSalaScalarWhereWithAggregatesInput = {
    AND?: MembrosSalaScalarWhereWithAggregatesInput | MembrosSalaScalarWhereWithAggregatesInput[]
    OR?: MembrosSalaScalarWhereWithAggregatesInput[]
    NOT?: MembrosSalaScalarWhereWithAggregatesInput | MembrosSalaScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"MembrosSala"> | string
    salaId?: StringWithAggregatesFilter<"MembrosSala"> | string
  }

  export type MensagemWhereInput = {
    AND?: MensagemWhereInput | MensagemWhereInput[]
    OR?: MensagemWhereInput[]
    NOT?: MensagemWhereInput | MensagemWhereInput[]
    id?: StringFilter<"Mensagem"> | string
    conteudo?: StringFilter<"Mensagem"> | string
    userId?: StringFilter<"Mensagem"> | string
    salaId?: StringFilter<"Mensagem"> | string
    createdAt?: DateTimeFilter<"Mensagem"> | Date | string
    sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MensagemOrderByWithRelationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    userId?: SortOrder
    salaId?: SortOrder
    createdAt?: SortOrder
    sala?: SalaOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MensagemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MensagemWhereInput | MensagemWhereInput[]
    OR?: MensagemWhereInput[]
    NOT?: MensagemWhereInput | MensagemWhereInput[]
    conteudo?: StringFilter<"Mensagem"> | string
    userId?: StringFilter<"Mensagem"> | string
    salaId?: StringFilter<"Mensagem"> | string
    createdAt?: DateTimeFilter<"Mensagem"> | Date | string
    sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MensagemOrderByWithAggregationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    userId?: SortOrder
    salaId?: SortOrder
    createdAt?: SortOrder
    _count?: MensagemCountOrderByAggregateInput
    _max?: MensagemMaxOrderByAggregateInput
    _min?: MensagemMinOrderByAggregateInput
  }

  export type MensagemScalarWhereWithAggregatesInput = {
    AND?: MensagemScalarWhereWithAggregatesInput | MensagemScalarWhereWithAggregatesInput[]
    OR?: MensagemScalarWhereWithAggregatesInput[]
    NOT?: MensagemScalarWhereWithAggregatesInput | MensagemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mensagem"> | string
    conteudo?: StringWithAggregatesFilter<"Mensagem"> | string
    userId?: StringWithAggregatesFilter<"Mensagem"> | string
    salaId?: StringWithAggregatesFilter<"Mensagem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Mensagem"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    imagem?: string | null
    nome: string
    senha: string
    membros?: MembrosSalaCreateNestedManyWithoutUserInput
    mensagens?: MensagemCreateNestedManyWithoutUserInput
    salasCriadas?: SalaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    imagem?: string | null
    nome: string
    senha: string
    membros?: MembrosSalaUncheckedCreateNestedManyWithoutUserInput
    mensagens?: MensagemUncheckedCreateNestedManyWithoutUserInput
    salasCriadas?: SalaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    membros?: MembrosSalaUpdateManyWithoutUserNestedInput
    mensagens?: MensagemUpdateManyWithoutUserNestedInput
    salasCriadas?: SalaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    membros?: MembrosSalaUncheckedUpdateManyWithoutUserNestedInput
    mensagens?: MensagemUncheckedUpdateManyWithoutUserNestedInput
    salasCriadas?: SalaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    imagem?: string | null
    nome: string
    senha: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type SalaCreateInput = {
    id?: string
    nome: string
    categoria: string
    createdAt?: Date | string
    descricao: string
    imagem: string
    membros?: MembrosSalaCreateNestedManyWithoutSalaInput
    mensagens?: MensagemCreateNestedManyWithoutSalaInput
    user: UserCreateNestedOneWithoutSalasCriadasInput
  }

  export type SalaUncheckedCreateInput = {
    id?: string
    nome: string
    categoria: string
    createdAt?: Date | string
    descricao: string
    imagem: string
    admin: string
    membros?: MembrosSalaUncheckedCreateNestedManyWithoutSalaInput
    mensagens?: MensagemUncheckedCreateNestedManyWithoutSalaInput
  }

  export type SalaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    membros?: MembrosSalaUpdateManyWithoutSalaNestedInput
    mensagens?: MensagemUpdateManyWithoutSalaNestedInput
    user?: UserUpdateOneRequiredWithoutSalasCriadasNestedInput
  }

  export type SalaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    admin?: StringFieldUpdateOperationsInput | string
    membros?: MembrosSalaUncheckedUpdateManyWithoutSalaNestedInput
    mensagens?: MensagemUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type SalaCreateManyInput = {
    id?: string
    nome: string
    categoria: string
    createdAt?: Date | string
    descricao: string
    imagem: string
    admin: string
  }

  export type SalaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
  }

  export type SalaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    admin?: StringFieldUpdateOperationsInput | string
  }

  export type MembrosSalaCreateInput = {
    sala: SalaCreateNestedOneWithoutMembrosInput
    user: UserCreateNestedOneWithoutMembrosInput
  }

  export type MembrosSalaUncheckedCreateInput = {
    userId: string
    salaId: string
  }

  export type MembrosSalaUpdateInput = {
    sala?: SalaUpdateOneRequiredWithoutMembrosNestedInput
    user?: UserUpdateOneRequiredWithoutMembrosNestedInput
  }

  export type MembrosSalaUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    salaId?: StringFieldUpdateOperationsInput | string
  }

  export type MembrosSalaCreateManyInput = {
    userId: string
    salaId: string
  }

  export type MembrosSalaUpdateManyMutationInput = {

  }

  export type MembrosSalaUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    salaId?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemCreateInput = {
    id?: string
    conteudo: string
    createdAt?: Date | string
    sala: SalaCreateNestedOneWithoutMensagensInput
    user: UserCreateNestedOneWithoutMensagensInput
  }

  export type MensagemUncheckedCreateInput = {
    id?: string
    conteudo: string
    userId: string
    salaId: string
    createdAt?: Date | string
  }

  export type MensagemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sala?: SalaUpdateOneRequiredWithoutMensagensNestedInput
    user?: UserUpdateOneRequiredWithoutMensagensNestedInput
  }

  export type MensagemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    salaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemCreateManyInput = {
    id?: string
    conteudo: string
    userId: string
    salaId: string
    createdAt?: Date | string
  }

  export type MensagemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    salaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MembrosSalaListRelationFilter = {
    every?: MembrosSalaWhereInput
    some?: MembrosSalaWhereInput
    none?: MembrosSalaWhereInput
  }

  export type MensagemListRelationFilter = {
    every?: MensagemWhereInput
    some?: MensagemWhereInput
    none?: MensagemWhereInput
  }

  export type SalaListRelationFilter = {
    every?: SalaWhereInput
    some?: SalaWhereInput
    none?: SalaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MembrosSalaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MensagemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    imagem?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    imagem?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    imagem?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SalaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    createdAt?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    admin?: SortOrder
  }

  export type SalaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    createdAt?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    admin?: SortOrder
  }

  export type SalaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    createdAt?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    admin?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SalaScalarRelationFilter = {
    is?: SalaWhereInput
    isNot?: SalaWhereInput
  }

  export type MembrosSalaUserIdSalaIdCompoundUniqueInput = {
    userId: string
    salaId: string
  }

  export type MembrosSalaCountOrderByAggregateInput = {
    userId?: SortOrder
    salaId?: SortOrder
  }

  export type MembrosSalaMaxOrderByAggregateInput = {
    userId?: SortOrder
    salaId?: SortOrder
  }

  export type MembrosSalaMinOrderByAggregateInput = {
    userId?: SortOrder
    salaId?: SortOrder
  }

  export type MensagemCountOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    userId?: SortOrder
    salaId?: SortOrder
    createdAt?: SortOrder
  }

  export type MensagemMaxOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    userId?: SortOrder
    salaId?: SortOrder
    createdAt?: SortOrder
  }

  export type MensagemMinOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    userId?: SortOrder
    salaId?: SortOrder
    createdAt?: SortOrder
  }

  export type MembrosSalaCreateNestedManyWithoutUserInput = {
    create?: XOR<MembrosSalaCreateWithoutUserInput, MembrosSalaUncheckedCreateWithoutUserInput> | MembrosSalaCreateWithoutUserInput[] | MembrosSalaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembrosSalaCreateOrConnectWithoutUserInput | MembrosSalaCreateOrConnectWithoutUserInput[]
    createMany?: MembrosSalaCreateManyUserInputEnvelope
    connect?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
  }

  export type MensagemCreateNestedManyWithoutUserInput = {
    create?: XOR<MensagemCreateWithoutUserInput, MensagemUncheckedCreateWithoutUserInput> | MensagemCreateWithoutUserInput[] | MensagemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutUserInput | MensagemCreateOrConnectWithoutUserInput[]
    createMany?: MensagemCreateManyUserInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type SalaCreateNestedManyWithoutUserInput = {
    create?: XOR<SalaCreateWithoutUserInput, SalaUncheckedCreateWithoutUserInput> | SalaCreateWithoutUserInput[] | SalaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutUserInput | SalaCreateOrConnectWithoutUserInput[]
    createMany?: SalaCreateManyUserInputEnvelope
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
  }

  export type MembrosSalaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MembrosSalaCreateWithoutUserInput, MembrosSalaUncheckedCreateWithoutUserInput> | MembrosSalaCreateWithoutUserInput[] | MembrosSalaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembrosSalaCreateOrConnectWithoutUserInput | MembrosSalaCreateOrConnectWithoutUserInput[]
    createMany?: MembrosSalaCreateManyUserInputEnvelope
    connect?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
  }

  export type MensagemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MensagemCreateWithoutUserInput, MensagemUncheckedCreateWithoutUserInput> | MensagemCreateWithoutUserInput[] | MensagemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutUserInput | MensagemCreateOrConnectWithoutUserInput[]
    createMany?: MensagemCreateManyUserInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type SalaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SalaCreateWithoutUserInput, SalaUncheckedCreateWithoutUserInput> | SalaCreateWithoutUserInput[] | SalaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutUserInput | SalaCreateOrConnectWithoutUserInput[]
    createMany?: SalaCreateManyUserInputEnvelope
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MembrosSalaUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembrosSalaCreateWithoutUserInput, MembrosSalaUncheckedCreateWithoutUserInput> | MembrosSalaCreateWithoutUserInput[] | MembrosSalaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembrosSalaCreateOrConnectWithoutUserInput | MembrosSalaCreateOrConnectWithoutUserInput[]
    upsert?: MembrosSalaUpsertWithWhereUniqueWithoutUserInput | MembrosSalaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembrosSalaCreateManyUserInputEnvelope
    set?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
    disconnect?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
    delete?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
    connect?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
    update?: MembrosSalaUpdateWithWhereUniqueWithoutUserInput | MembrosSalaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembrosSalaUpdateManyWithWhereWithoutUserInput | MembrosSalaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembrosSalaScalarWhereInput | MembrosSalaScalarWhereInput[]
  }

  export type MensagemUpdateManyWithoutUserNestedInput = {
    create?: XOR<MensagemCreateWithoutUserInput, MensagemUncheckedCreateWithoutUserInput> | MensagemCreateWithoutUserInput[] | MensagemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutUserInput | MensagemCreateOrConnectWithoutUserInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutUserInput | MensagemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MensagemCreateManyUserInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutUserInput | MensagemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutUserInput | MensagemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type SalaUpdateManyWithoutUserNestedInput = {
    create?: XOR<SalaCreateWithoutUserInput, SalaUncheckedCreateWithoutUserInput> | SalaCreateWithoutUserInput[] | SalaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutUserInput | SalaCreateOrConnectWithoutUserInput[]
    upsert?: SalaUpsertWithWhereUniqueWithoutUserInput | SalaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SalaCreateManyUserInputEnvelope
    set?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    disconnect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    delete?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    update?: SalaUpdateWithWhereUniqueWithoutUserInput | SalaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SalaUpdateManyWithWhereWithoutUserInput | SalaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SalaScalarWhereInput | SalaScalarWhereInput[]
  }

  export type MembrosSalaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembrosSalaCreateWithoutUserInput, MembrosSalaUncheckedCreateWithoutUserInput> | MembrosSalaCreateWithoutUserInput[] | MembrosSalaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembrosSalaCreateOrConnectWithoutUserInput | MembrosSalaCreateOrConnectWithoutUserInput[]
    upsert?: MembrosSalaUpsertWithWhereUniqueWithoutUserInput | MembrosSalaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembrosSalaCreateManyUserInputEnvelope
    set?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
    disconnect?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
    delete?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
    connect?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
    update?: MembrosSalaUpdateWithWhereUniqueWithoutUserInput | MembrosSalaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembrosSalaUpdateManyWithWhereWithoutUserInput | MembrosSalaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembrosSalaScalarWhereInput | MembrosSalaScalarWhereInput[]
  }

  export type MensagemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MensagemCreateWithoutUserInput, MensagemUncheckedCreateWithoutUserInput> | MensagemCreateWithoutUserInput[] | MensagemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutUserInput | MensagemCreateOrConnectWithoutUserInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutUserInput | MensagemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MensagemCreateManyUserInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutUserInput | MensagemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutUserInput | MensagemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type SalaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SalaCreateWithoutUserInput, SalaUncheckedCreateWithoutUserInput> | SalaCreateWithoutUserInput[] | SalaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutUserInput | SalaCreateOrConnectWithoutUserInput[]
    upsert?: SalaUpsertWithWhereUniqueWithoutUserInput | SalaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SalaCreateManyUserInputEnvelope
    set?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    disconnect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    delete?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    update?: SalaUpdateWithWhereUniqueWithoutUserInput | SalaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SalaUpdateManyWithWhereWithoutUserInput | SalaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SalaScalarWhereInput | SalaScalarWhereInput[]
  }

  export type MembrosSalaCreateNestedManyWithoutSalaInput = {
    create?: XOR<MembrosSalaCreateWithoutSalaInput, MembrosSalaUncheckedCreateWithoutSalaInput> | MembrosSalaCreateWithoutSalaInput[] | MembrosSalaUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: MembrosSalaCreateOrConnectWithoutSalaInput | MembrosSalaCreateOrConnectWithoutSalaInput[]
    createMany?: MembrosSalaCreateManySalaInputEnvelope
    connect?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
  }

  export type MensagemCreateNestedManyWithoutSalaInput = {
    create?: XOR<MensagemCreateWithoutSalaInput, MensagemUncheckedCreateWithoutSalaInput> | MensagemCreateWithoutSalaInput[] | MensagemUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutSalaInput | MensagemCreateOrConnectWithoutSalaInput[]
    createMany?: MensagemCreateManySalaInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSalasCriadasInput = {
    create?: XOR<UserCreateWithoutSalasCriadasInput, UserUncheckedCreateWithoutSalasCriadasInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalasCriadasInput
    connect?: UserWhereUniqueInput
  }

  export type MembrosSalaUncheckedCreateNestedManyWithoutSalaInput = {
    create?: XOR<MembrosSalaCreateWithoutSalaInput, MembrosSalaUncheckedCreateWithoutSalaInput> | MembrosSalaCreateWithoutSalaInput[] | MembrosSalaUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: MembrosSalaCreateOrConnectWithoutSalaInput | MembrosSalaCreateOrConnectWithoutSalaInput[]
    createMany?: MembrosSalaCreateManySalaInputEnvelope
    connect?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
  }

  export type MensagemUncheckedCreateNestedManyWithoutSalaInput = {
    create?: XOR<MensagemCreateWithoutSalaInput, MensagemUncheckedCreateWithoutSalaInput> | MensagemCreateWithoutSalaInput[] | MensagemUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutSalaInput | MensagemCreateOrConnectWithoutSalaInput[]
    createMany?: MensagemCreateManySalaInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MembrosSalaUpdateManyWithoutSalaNestedInput = {
    create?: XOR<MembrosSalaCreateWithoutSalaInput, MembrosSalaUncheckedCreateWithoutSalaInput> | MembrosSalaCreateWithoutSalaInput[] | MembrosSalaUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: MembrosSalaCreateOrConnectWithoutSalaInput | MembrosSalaCreateOrConnectWithoutSalaInput[]
    upsert?: MembrosSalaUpsertWithWhereUniqueWithoutSalaInput | MembrosSalaUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: MembrosSalaCreateManySalaInputEnvelope
    set?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
    disconnect?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
    delete?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
    connect?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
    update?: MembrosSalaUpdateWithWhereUniqueWithoutSalaInput | MembrosSalaUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: MembrosSalaUpdateManyWithWhereWithoutSalaInput | MembrosSalaUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: MembrosSalaScalarWhereInput | MembrosSalaScalarWhereInput[]
  }

  export type MensagemUpdateManyWithoutSalaNestedInput = {
    create?: XOR<MensagemCreateWithoutSalaInput, MensagemUncheckedCreateWithoutSalaInput> | MensagemCreateWithoutSalaInput[] | MensagemUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutSalaInput | MensagemCreateOrConnectWithoutSalaInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutSalaInput | MensagemUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: MensagemCreateManySalaInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutSalaInput | MensagemUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutSalaInput | MensagemUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutSalasCriadasNestedInput = {
    create?: XOR<UserCreateWithoutSalasCriadasInput, UserUncheckedCreateWithoutSalasCriadasInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalasCriadasInput
    upsert?: UserUpsertWithoutSalasCriadasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSalasCriadasInput, UserUpdateWithoutSalasCriadasInput>, UserUncheckedUpdateWithoutSalasCriadasInput>
  }

  export type MembrosSalaUncheckedUpdateManyWithoutSalaNestedInput = {
    create?: XOR<MembrosSalaCreateWithoutSalaInput, MembrosSalaUncheckedCreateWithoutSalaInput> | MembrosSalaCreateWithoutSalaInput[] | MembrosSalaUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: MembrosSalaCreateOrConnectWithoutSalaInput | MembrosSalaCreateOrConnectWithoutSalaInput[]
    upsert?: MembrosSalaUpsertWithWhereUniqueWithoutSalaInput | MembrosSalaUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: MembrosSalaCreateManySalaInputEnvelope
    set?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
    disconnect?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
    delete?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
    connect?: MembrosSalaWhereUniqueInput | MembrosSalaWhereUniqueInput[]
    update?: MembrosSalaUpdateWithWhereUniqueWithoutSalaInput | MembrosSalaUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: MembrosSalaUpdateManyWithWhereWithoutSalaInput | MembrosSalaUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: MembrosSalaScalarWhereInput | MembrosSalaScalarWhereInput[]
  }

  export type MensagemUncheckedUpdateManyWithoutSalaNestedInput = {
    create?: XOR<MensagemCreateWithoutSalaInput, MensagemUncheckedCreateWithoutSalaInput> | MensagemCreateWithoutSalaInput[] | MensagemUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutSalaInput | MensagemCreateOrConnectWithoutSalaInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutSalaInput | MensagemUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: MensagemCreateManySalaInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutSalaInput | MensagemUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutSalaInput | MensagemUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type SalaCreateNestedOneWithoutMembrosInput = {
    create?: XOR<SalaCreateWithoutMembrosInput, SalaUncheckedCreateWithoutMembrosInput>
    connectOrCreate?: SalaCreateOrConnectWithoutMembrosInput
    connect?: SalaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMembrosInput = {
    create?: XOR<UserCreateWithoutMembrosInput, UserUncheckedCreateWithoutMembrosInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembrosInput
    connect?: UserWhereUniqueInput
  }

  export type SalaUpdateOneRequiredWithoutMembrosNestedInput = {
    create?: XOR<SalaCreateWithoutMembrosInput, SalaUncheckedCreateWithoutMembrosInput>
    connectOrCreate?: SalaCreateOrConnectWithoutMembrosInput
    upsert?: SalaUpsertWithoutMembrosInput
    connect?: SalaWhereUniqueInput
    update?: XOR<XOR<SalaUpdateToOneWithWhereWithoutMembrosInput, SalaUpdateWithoutMembrosInput>, SalaUncheckedUpdateWithoutMembrosInput>
  }

  export type UserUpdateOneRequiredWithoutMembrosNestedInput = {
    create?: XOR<UserCreateWithoutMembrosInput, UserUncheckedCreateWithoutMembrosInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembrosInput
    upsert?: UserUpsertWithoutMembrosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembrosInput, UserUpdateWithoutMembrosInput>, UserUncheckedUpdateWithoutMembrosInput>
  }

  export type SalaCreateNestedOneWithoutMensagensInput = {
    create?: XOR<SalaCreateWithoutMensagensInput, SalaUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: SalaCreateOrConnectWithoutMensagensInput
    connect?: SalaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMensagensInput = {
    create?: XOR<UserCreateWithoutMensagensInput, UserUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: UserCreateOrConnectWithoutMensagensInput
    connect?: UserWhereUniqueInput
  }

  export type SalaUpdateOneRequiredWithoutMensagensNestedInput = {
    create?: XOR<SalaCreateWithoutMensagensInput, SalaUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: SalaCreateOrConnectWithoutMensagensInput
    upsert?: SalaUpsertWithoutMensagensInput
    connect?: SalaWhereUniqueInput
    update?: XOR<XOR<SalaUpdateToOneWithWhereWithoutMensagensInput, SalaUpdateWithoutMensagensInput>, SalaUncheckedUpdateWithoutMensagensInput>
  }

  export type UserUpdateOneRequiredWithoutMensagensNestedInput = {
    create?: XOR<UserCreateWithoutMensagensInput, UserUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: UserCreateOrConnectWithoutMensagensInput
    upsert?: UserUpsertWithoutMensagensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMensagensInput, UserUpdateWithoutMensagensInput>, UserUncheckedUpdateWithoutMensagensInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MembrosSalaCreateWithoutUserInput = {
    sala: SalaCreateNestedOneWithoutMembrosInput
  }

  export type MembrosSalaUncheckedCreateWithoutUserInput = {
    salaId: string
  }

  export type MembrosSalaCreateOrConnectWithoutUserInput = {
    where: MembrosSalaWhereUniqueInput
    create: XOR<MembrosSalaCreateWithoutUserInput, MembrosSalaUncheckedCreateWithoutUserInput>
  }

  export type MembrosSalaCreateManyUserInputEnvelope = {
    data: MembrosSalaCreateManyUserInput | MembrosSalaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MensagemCreateWithoutUserInput = {
    id?: string
    conteudo: string
    createdAt?: Date | string
    sala: SalaCreateNestedOneWithoutMensagensInput
  }

  export type MensagemUncheckedCreateWithoutUserInput = {
    id?: string
    conteudo: string
    salaId: string
    createdAt?: Date | string
  }

  export type MensagemCreateOrConnectWithoutUserInput = {
    where: MensagemWhereUniqueInput
    create: XOR<MensagemCreateWithoutUserInput, MensagemUncheckedCreateWithoutUserInput>
  }

  export type MensagemCreateManyUserInputEnvelope = {
    data: MensagemCreateManyUserInput | MensagemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SalaCreateWithoutUserInput = {
    id?: string
    nome: string
    categoria: string
    createdAt?: Date | string
    descricao: string
    imagem: string
    membros?: MembrosSalaCreateNestedManyWithoutSalaInput
    mensagens?: MensagemCreateNestedManyWithoutSalaInput
  }

  export type SalaUncheckedCreateWithoutUserInput = {
    id?: string
    nome: string
    categoria: string
    createdAt?: Date | string
    descricao: string
    imagem: string
    membros?: MembrosSalaUncheckedCreateNestedManyWithoutSalaInput
    mensagens?: MensagemUncheckedCreateNestedManyWithoutSalaInput
  }

  export type SalaCreateOrConnectWithoutUserInput = {
    where: SalaWhereUniqueInput
    create: XOR<SalaCreateWithoutUserInput, SalaUncheckedCreateWithoutUserInput>
  }

  export type SalaCreateManyUserInputEnvelope = {
    data: SalaCreateManyUserInput | SalaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MembrosSalaUpsertWithWhereUniqueWithoutUserInput = {
    where: MembrosSalaWhereUniqueInput
    update: XOR<MembrosSalaUpdateWithoutUserInput, MembrosSalaUncheckedUpdateWithoutUserInput>
    create: XOR<MembrosSalaCreateWithoutUserInput, MembrosSalaUncheckedCreateWithoutUserInput>
  }

  export type MembrosSalaUpdateWithWhereUniqueWithoutUserInput = {
    where: MembrosSalaWhereUniqueInput
    data: XOR<MembrosSalaUpdateWithoutUserInput, MembrosSalaUncheckedUpdateWithoutUserInput>
  }

  export type MembrosSalaUpdateManyWithWhereWithoutUserInput = {
    where: MembrosSalaScalarWhereInput
    data: XOR<MembrosSalaUpdateManyMutationInput, MembrosSalaUncheckedUpdateManyWithoutUserInput>
  }

  export type MembrosSalaScalarWhereInput = {
    AND?: MembrosSalaScalarWhereInput | MembrosSalaScalarWhereInput[]
    OR?: MembrosSalaScalarWhereInput[]
    NOT?: MembrosSalaScalarWhereInput | MembrosSalaScalarWhereInput[]
    userId?: StringFilter<"MembrosSala"> | string
    salaId?: StringFilter<"MembrosSala"> | string
  }

  export type MensagemUpsertWithWhereUniqueWithoutUserInput = {
    where: MensagemWhereUniqueInput
    update: XOR<MensagemUpdateWithoutUserInput, MensagemUncheckedUpdateWithoutUserInput>
    create: XOR<MensagemCreateWithoutUserInput, MensagemUncheckedCreateWithoutUserInput>
  }

  export type MensagemUpdateWithWhereUniqueWithoutUserInput = {
    where: MensagemWhereUniqueInput
    data: XOR<MensagemUpdateWithoutUserInput, MensagemUncheckedUpdateWithoutUserInput>
  }

  export type MensagemUpdateManyWithWhereWithoutUserInput = {
    where: MensagemScalarWhereInput
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyWithoutUserInput>
  }

  export type MensagemScalarWhereInput = {
    AND?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
    OR?: MensagemScalarWhereInput[]
    NOT?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
    id?: StringFilter<"Mensagem"> | string
    conteudo?: StringFilter<"Mensagem"> | string
    userId?: StringFilter<"Mensagem"> | string
    salaId?: StringFilter<"Mensagem"> | string
    createdAt?: DateTimeFilter<"Mensagem"> | Date | string
  }

  export type SalaUpsertWithWhereUniqueWithoutUserInput = {
    where: SalaWhereUniqueInput
    update: XOR<SalaUpdateWithoutUserInput, SalaUncheckedUpdateWithoutUserInput>
    create: XOR<SalaCreateWithoutUserInput, SalaUncheckedCreateWithoutUserInput>
  }

  export type SalaUpdateWithWhereUniqueWithoutUserInput = {
    where: SalaWhereUniqueInput
    data: XOR<SalaUpdateWithoutUserInput, SalaUncheckedUpdateWithoutUserInput>
  }

  export type SalaUpdateManyWithWhereWithoutUserInput = {
    where: SalaScalarWhereInput
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyWithoutUserInput>
  }

  export type SalaScalarWhereInput = {
    AND?: SalaScalarWhereInput | SalaScalarWhereInput[]
    OR?: SalaScalarWhereInput[]
    NOT?: SalaScalarWhereInput | SalaScalarWhereInput[]
    id?: StringFilter<"Sala"> | string
    nome?: StringFilter<"Sala"> | string
    categoria?: StringFilter<"Sala"> | string
    createdAt?: DateTimeFilter<"Sala"> | Date | string
    descricao?: StringFilter<"Sala"> | string
    imagem?: StringFilter<"Sala"> | string
    admin?: StringFilter<"Sala"> | string
  }

  export type MembrosSalaCreateWithoutSalaInput = {
    user: UserCreateNestedOneWithoutMembrosInput
  }

  export type MembrosSalaUncheckedCreateWithoutSalaInput = {
    userId: string
  }

  export type MembrosSalaCreateOrConnectWithoutSalaInput = {
    where: MembrosSalaWhereUniqueInput
    create: XOR<MembrosSalaCreateWithoutSalaInput, MembrosSalaUncheckedCreateWithoutSalaInput>
  }

  export type MembrosSalaCreateManySalaInputEnvelope = {
    data: MembrosSalaCreateManySalaInput | MembrosSalaCreateManySalaInput[]
    skipDuplicates?: boolean
  }

  export type MensagemCreateWithoutSalaInput = {
    id?: string
    conteudo: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMensagensInput
  }

  export type MensagemUncheckedCreateWithoutSalaInput = {
    id?: string
    conteudo: string
    userId: string
    createdAt?: Date | string
  }

  export type MensagemCreateOrConnectWithoutSalaInput = {
    where: MensagemWhereUniqueInput
    create: XOR<MensagemCreateWithoutSalaInput, MensagemUncheckedCreateWithoutSalaInput>
  }

  export type MensagemCreateManySalaInputEnvelope = {
    data: MensagemCreateManySalaInput | MensagemCreateManySalaInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutSalasCriadasInput = {
    id?: string
    email: string
    imagem?: string | null
    nome: string
    senha: string
    membros?: MembrosSalaCreateNestedManyWithoutUserInput
    mensagens?: MensagemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSalasCriadasInput = {
    id?: string
    email: string
    imagem?: string | null
    nome: string
    senha: string
    membros?: MembrosSalaUncheckedCreateNestedManyWithoutUserInput
    mensagens?: MensagemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSalasCriadasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSalasCriadasInput, UserUncheckedCreateWithoutSalasCriadasInput>
  }

  export type MembrosSalaUpsertWithWhereUniqueWithoutSalaInput = {
    where: MembrosSalaWhereUniqueInput
    update: XOR<MembrosSalaUpdateWithoutSalaInput, MembrosSalaUncheckedUpdateWithoutSalaInput>
    create: XOR<MembrosSalaCreateWithoutSalaInput, MembrosSalaUncheckedCreateWithoutSalaInput>
  }

  export type MembrosSalaUpdateWithWhereUniqueWithoutSalaInput = {
    where: MembrosSalaWhereUniqueInput
    data: XOR<MembrosSalaUpdateWithoutSalaInput, MembrosSalaUncheckedUpdateWithoutSalaInput>
  }

  export type MembrosSalaUpdateManyWithWhereWithoutSalaInput = {
    where: MembrosSalaScalarWhereInput
    data: XOR<MembrosSalaUpdateManyMutationInput, MembrosSalaUncheckedUpdateManyWithoutSalaInput>
  }

  export type MensagemUpsertWithWhereUniqueWithoutSalaInput = {
    where: MensagemWhereUniqueInput
    update: XOR<MensagemUpdateWithoutSalaInput, MensagemUncheckedUpdateWithoutSalaInput>
    create: XOR<MensagemCreateWithoutSalaInput, MensagemUncheckedCreateWithoutSalaInput>
  }

  export type MensagemUpdateWithWhereUniqueWithoutSalaInput = {
    where: MensagemWhereUniqueInput
    data: XOR<MensagemUpdateWithoutSalaInput, MensagemUncheckedUpdateWithoutSalaInput>
  }

  export type MensagemUpdateManyWithWhereWithoutSalaInput = {
    where: MensagemScalarWhereInput
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyWithoutSalaInput>
  }

  export type UserUpsertWithoutSalasCriadasInput = {
    update: XOR<UserUpdateWithoutSalasCriadasInput, UserUncheckedUpdateWithoutSalasCriadasInput>
    create: XOR<UserCreateWithoutSalasCriadasInput, UserUncheckedCreateWithoutSalasCriadasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSalasCriadasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSalasCriadasInput, UserUncheckedUpdateWithoutSalasCriadasInput>
  }

  export type UserUpdateWithoutSalasCriadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    membros?: MembrosSalaUpdateManyWithoutUserNestedInput
    mensagens?: MensagemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSalasCriadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    membros?: MembrosSalaUncheckedUpdateManyWithoutUserNestedInput
    mensagens?: MensagemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SalaCreateWithoutMembrosInput = {
    id?: string
    nome: string
    categoria: string
    createdAt?: Date | string
    descricao: string
    imagem: string
    mensagens?: MensagemCreateNestedManyWithoutSalaInput
    user: UserCreateNestedOneWithoutSalasCriadasInput
  }

  export type SalaUncheckedCreateWithoutMembrosInput = {
    id?: string
    nome: string
    categoria: string
    createdAt?: Date | string
    descricao: string
    imagem: string
    admin: string
    mensagens?: MensagemUncheckedCreateNestedManyWithoutSalaInput
  }

  export type SalaCreateOrConnectWithoutMembrosInput = {
    where: SalaWhereUniqueInput
    create: XOR<SalaCreateWithoutMembrosInput, SalaUncheckedCreateWithoutMembrosInput>
  }

  export type UserCreateWithoutMembrosInput = {
    id?: string
    email: string
    imagem?: string | null
    nome: string
    senha: string
    mensagens?: MensagemCreateNestedManyWithoutUserInput
    salasCriadas?: SalaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMembrosInput = {
    id?: string
    email: string
    imagem?: string | null
    nome: string
    senha: string
    mensagens?: MensagemUncheckedCreateNestedManyWithoutUserInput
    salasCriadas?: SalaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMembrosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembrosInput, UserUncheckedCreateWithoutMembrosInput>
  }

  export type SalaUpsertWithoutMembrosInput = {
    update: XOR<SalaUpdateWithoutMembrosInput, SalaUncheckedUpdateWithoutMembrosInput>
    create: XOR<SalaCreateWithoutMembrosInput, SalaUncheckedCreateWithoutMembrosInput>
    where?: SalaWhereInput
  }

  export type SalaUpdateToOneWithWhereWithoutMembrosInput = {
    where?: SalaWhereInput
    data: XOR<SalaUpdateWithoutMembrosInput, SalaUncheckedUpdateWithoutMembrosInput>
  }

  export type SalaUpdateWithoutMembrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    mensagens?: MensagemUpdateManyWithoutSalaNestedInput
    user?: UserUpdateOneRequiredWithoutSalasCriadasNestedInput
  }

  export type SalaUncheckedUpdateWithoutMembrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    admin?: StringFieldUpdateOperationsInput | string
    mensagens?: MensagemUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type UserUpsertWithoutMembrosInput = {
    update: XOR<UserUpdateWithoutMembrosInput, UserUncheckedUpdateWithoutMembrosInput>
    create: XOR<UserCreateWithoutMembrosInput, UserUncheckedCreateWithoutMembrosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembrosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembrosInput, UserUncheckedUpdateWithoutMembrosInput>
  }

  export type UserUpdateWithoutMembrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    mensagens?: MensagemUpdateManyWithoutUserNestedInput
    salasCriadas?: SalaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMembrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    mensagens?: MensagemUncheckedUpdateManyWithoutUserNestedInput
    salasCriadas?: SalaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SalaCreateWithoutMensagensInput = {
    id?: string
    nome: string
    categoria: string
    createdAt?: Date | string
    descricao: string
    imagem: string
    membros?: MembrosSalaCreateNestedManyWithoutSalaInput
    user: UserCreateNestedOneWithoutSalasCriadasInput
  }

  export type SalaUncheckedCreateWithoutMensagensInput = {
    id?: string
    nome: string
    categoria: string
    createdAt?: Date | string
    descricao: string
    imagem: string
    admin: string
    membros?: MembrosSalaUncheckedCreateNestedManyWithoutSalaInput
  }

  export type SalaCreateOrConnectWithoutMensagensInput = {
    where: SalaWhereUniqueInput
    create: XOR<SalaCreateWithoutMensagensInput, SalaUncheckedCreateWithoutMensagensInput>
  }

  export type UserCreateWithoutMensagensInput = {
    id?: string
    email: string
    imagem?: string | null
    nome: string
    senha: string
    membros?: MembrosSalaCreateNestedManyWithoutUserInput
    salasCriadas?: SalaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMensagensInput = {
    id?: string
    email: string
    imagem?: string | null
    nome: string
    senha: string
    membros?: MembrosSalaUncheckedCreateNestedManyWithoutUserInput
    salasCriadas?: SalaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMensagensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMensagensInput, UserUncheckedCreateWithoutMensagensInput>
  }

  export type SalaUpsertWithoutMensagensInput = {
    update: XOR<SalaUpdateWithoutMensagensInput, SalaUncheckedUpdateWithoutMensagensInput>
    create: XOR<SalaCreateWithoutMensagensInput, SalaUncheckedCreateWithoutMensagensInput>
    where?: SalaWhereInput
  }

  export type SalaUpdateToOneWithWhereWithoutMensagensInput = {
    where?: SalaWhereInput
    data: XOR<SalaUpdateWithoutMensagensInput, SalaUncheckedUpdateWithoutMensagensInput>
  }

  export type SalaUpdateWithoutMensagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    membros?: MembrosSalaUpdateManyWithoutSalaNestedInput
    user?: UserUpdateOneRequiredWithoutSalasCriadasNestedInput
  }

  export type SalaUncheckedUpdateWithoutMensagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    admin?: StringFieldUpdateOperationsInput | string
    membros?: MembrosSalaUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type UserUpsertWithoutMensagensInput = {
    update: XOR<UserUpdateWithoutMensagensInput, UserUncheckedUpdateWithoutMensagensInput>
    create: XOR<UserCreateWithoutMensagensInput, UserUncheckedCreateWithoutMensagensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMensagensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMensagensInput, UserUncheckedUpdateWithoutMensagensInput>
  }

  export type UserUpdateWithoutMensagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    membros?: MembrosSalaUpdateManyWithoutUserNestedInput
    salasCriadas?: SalaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMensagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    membros?: MembrosSalaUncheckedUpdateManyWithoutUserNestedInput
    salasCriadas?: SalaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MembrosSalaCreateManyUserInput = {
    salaId: string
  }

  export type MensagemCreateManyUserInput = {
    id?: string
    conteudo: string
    salaId: string
    createdAt?: Date | string
  }

  export type SalaCreateManyUserInput = {
    id?: string
    nome: string
    categoria: string
    createdAt?: Date | string
    descricao: string
    imagem: string
  }

  export type MembrosSalaUpdateWithoutUserInput = {
    sala?: SalaUpdateOneRequiredWithoutMembrosNestedInput
  }

  export type MembrosSalaUncheckedUpdateWithoutUserInput = {
    salaId?: StringFieldUpdateOperationsInput | string
  }

  export type MembrosSalaUncheckedUpdateManyWithoutUserInput = {
    salaId?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sala?: SalaUpdateOneRequiredWithoutMensagensNestedInput
  }

  export type MensagemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    salaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    salaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    membros?: MembrosSalaUpdateManyWithoutSalaNestedInput
    mensagens?: MensagemUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    membros?: MembrosSalaUncheckedUpdateManyWithoutSalaNestedInput
    mensagens?: MensagemUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
  }

  export type MembrosSalaCreateManySalaInput = {
    userId: string
  }

  export type MensagemCreateManySalaInput = {
    id?: string
    conteudo: string
    userId: string
    createdAt?: Date | string
  }

  export type MembrosSalaUpdateWithoutSalaInput = {
    user?: UserUpdateOneRequiredWithoutMembrosNestedInput
  }

  export type MembrosSalaUncheckedUpdateWithoutSalaInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MembrosSalaUncheckedUpdateManyWithoutSalaInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemUpdateWithoutSalaInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMensagensNestedInput
  }

  export type MensagemUncheckedUpdateWithoutSalaInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemUncheckedUpdateManyWithoutSalaInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}