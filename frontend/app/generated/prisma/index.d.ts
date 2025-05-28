
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Topic
 * 
 */
export type Topic = $Result.DefaultSelection<Prisma.$TopicPayload>
/**
 * Model Subtopic
 * 
 */
export type Subtopic = $Result.DefaultSelection<Prisma.$SubtopicPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model QuestionPaper
 * 
 */
export type QuestionPaper = $Result.DefaultSelection<Prisma.$QuestionPaperPayload>
/**
 * Model AnswerPaper
 * 
 */
export type AnswerPaper = $Result.DefaultSelection<Prisma.$AnswerPaperPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
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
   * `prisma.topic`: Exposes CRUD operations for the **Topic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topic.findMany()
    * ```
    */
  get topic(): Prisma.TopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subtopic`: Exposes CRUD operations for the **Subtopic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subtopics
    * const subtopics = await prisma.subtopic.findMany()
    * ```
    */
  get subtopic(): Prisma.SubtopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionPaper`: Exposes CRUD operations for the **QuestionPaper** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionPapers
    * const questionPapers = await prisma.questionPaper.findMany()
    * ```
    */
  get questionPaper(): Prisma.QuestionPaperDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answerPaper`: Exposes CRUD operations for the **AnswerPaper** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnswerPapers
    * const answerPapers = await prisma.answerPaper.findMany()
    * ```
    */
  get answerPaper(): Prisma.AnswerPaperDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Topic: 'Topic',
    Subtopic: 'Subtopic',
    Document: 'Document',
    Question: 'Question',
    Answer: 'Answer',
    QuestionPaper: 'QuestionPaper',
    AnswerPaper: 'AnswerPaper'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "topic" | "subtopic" | "document" | "question" | "answer" | "questionPaper" | "answerPaper"
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
      Topic: {
        payload: Prisma.$TopicPayload<ExtArgs>
        fields: Prisma.TopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findFirst: {
            args: Prisma.TopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findMany: {
            args: Prisma.TopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          create: {
            args: Prisma.TopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          createMany: {
            args: Prisma.TopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          delete: {
            args: Prisma.TopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          update: {
            args: Prisma.TopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          deleteMany: {
            args: Prisma.TopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          upsert: {
            args: Prisma.TopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          aggregate: {
            args: Prisma.TopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopic>
          }
          groupBy: {
            args: Prisma.TopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicCountArgs<ExtArgs>
            result: $Utils.Optional<TopicCountAggregateOutputType> | number
          }
        }
      }
      Subtopic: {
        payload: Prisma.$SubtopicPayload<ExtArgs>
        fields: Prisma.SubtopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubtopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubtopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>
          }
          findFirst: {
            args: Prisma.SubtopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubtopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>
          }
          findMany: {
            args: Prisma.SubtopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>[]
          }
          create: {
            args: Prisma.SubtopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>
          }
          createMany: {
            args: Prisma.SubtopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubtopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>[]
          }
          delete: {
            args: Prisma.SubtopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>
          }
          update: {
            args: Prisma.SubtopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>
          }
          deleteMany: {
            args: Prisma.SubtopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubtopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubtopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>[]
          }
          upsert: {
            args: Prisma.SubtopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtopicPayload>
          }
          aggregate: {
            args: Prisma.SubtopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubtopic>
          }
          groupBy: {
            args: Prisma.SubtopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubtopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubtopicCountArgs<ExtArgs>
            result: $Utils.Optional<SubtopicCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      QuestionPaper: {
        payload: Prisma.$QuestionPaperPayload<ExtArgs>
        fields: Prisma.QuestionPaperFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionPaperFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPaperPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionPaperFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPaperPayload>
          }
          findFirst: {
            args: Prisma.QuestionPaperFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPaperPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionPaperFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPaperPayload>
          }
          findMany: {
            args: Prisma.QuestionPaperFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPaperPayload>[]
          }
          create: {
            args: Prisma.QuestionPaperCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPaperPayload>
          }
          createMany: {
            args: Prisma.QuestionPaperCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionPaperCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPaperPayload>[]
          }
          delete: {
            args: Prisma.QuestionPaperDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPaperPayload>
          }
          update: {
            args: Prisma.QuestionPaperUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPaperPayload>
          }
          deleteMany: {
            args: Prisma.QuestionPaperDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionPaperUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionPaperUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPaperPayload>[]
          }
          upsert: {
            args: Prisma.QuestionPaperUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPaperPayload>
          }
          aggregate: {
            args: Prisma.QuestionPaperAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionPaper>
          }
          groupBy: {
            args: Prisma.QuestionPaperGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionPaperGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionPaperCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionPaperCountAggregateOutputType> | number
          }
        }
      }
      AnswerPaper: {
        payload: Prisma.$AnswerPaperPayload<ExtArgs>
        fields: Prisma.AnswerPaperFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerPaperFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPaperPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerPaperFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPaperPayload>
          }
          findFirst: {
            args: Prisma.AnswerPaperFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPaperPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerPaperFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPaperPayload>
          }
          findMany: {
            args: Prisma.AnswerPaperFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPaperPayload>[]
          }
          create: {
            args: Prisma.AnswerPaperCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPaperPayload>
          }
          createMany: {
            args: Prisma.AnswerPaperCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerPaperCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPaperPayload>[]
          }
          delete: {
            args: Prisma.AnswerPaperDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPaperPayload>
          }
          update: {
            args: Prisma.AnswerPaperUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPaperPayload>
          }
          deleteMany: {
            args: Prisma.AnswerPaperDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerPaperUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerPaperUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPaperPayload>[]
          }
          upsert: {
            args: Prisma.AnswerPaperUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPaperPayload>
          }
          aggregate: {
            args: Prisma.AnswerPaperAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswerPaper>
          }
          groupBy: {
            args: Prisma.AnswerPaperGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerPaperGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerPaperCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerPaperCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    topic?: TopicOmit
    subtopic?: SubtopicOmit
    document?: DocumentOmit
    question?: QuestionOmit
    answer?: AnswerOmit
    questionPaper?: QuestionPaperOmit
    answerPaper?: AnswerPaperOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    documents: number
    questionpapers: number
    answerpapers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | UserCountOutputTypeCountDocumentsArgs
    questionpapers?: boolean | UserCountOutputTypeCountQuestionpapersArgs
    answerpapers?: boolean | UserCountOutputTypeCountAnswerpapersArgs
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
  export type UserCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuestionpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionPaperWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnswerpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerPaperWhereInput
  }


  /**
   * Count Type TopicCountOutputType
   */

  export type TopicCountOutputType = {
    documents: number
    subtopic: number
    questionpapers: number
    answerpapers: number
  }

  export type TopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | TopicCountOutputTypeCountDocumentsArgs
    subtopic?: boolean | TopicCountOutputTypeCountSubtopicArgs
    questionpapers?: boolean | TopicCountOutputTypeCountQuestionpapersArgs
    answerpapers?: boolean | TopicCountOutputTypeCountAnswerpapersArgs
  }

  // Custom InputTypes
  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicCountOutputType
     */
    select?: TopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountSubtopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubtopicWhereInput
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountQuestionpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionPaperWhereInput
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountAnswerpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerPaperWhereInput
  }


  /**
   * Count Type SubtopicCountOutputType
   */

  export type SubtopicCountOutputType = {
    documents: number
    questionpapers: number
    answerpapers: number
  }

  export type SubtopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | SubtopicCountOutputTypeCountDocumentsArgs
    questionpapers?: boolean | SubtopicCountOutputTypeCountQuestionpapersArgs
    answerpapers?: boolean | SubtopicCountOutputTypeCountAnswerpapersArgs
  }

  // Custom InputTypes
  /**
   * SubtopicCountOutputType without action
   */
  export type SubtopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtopicCountOutputType
     */
    select?: SubtopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubtopicCountOutputType without action
   */
  export type SubtopicCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * SubtopicCountOutputType without action
   */
  export type SubtopicCountOutputTypeCountQuestionpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionPaperWhereInput
  }

  /**
   * SubtopicCountOutputType without action
   */
  export type SubtopicCountOutputTypeCountAnswerpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerPaperWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    answers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type QuestionPaperCountOutputType
   */

  export type QuestionPaperCountOutputType = {
    answerpapers: number
    questions: number
  }

  export type QuestionPaperCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answerpapers?: boolean | QuestionPaperCountOutputTypeCountAnswerpapersArgs
    questions?: boolean | QuestionPaperCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * QuestionPaperCountOutputType without action
   */
  export type QuestionPaperCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionPaperCountOutputType
     */
    select?: QuestionPaperCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionPaperCountOutputType without action
   */
  export type QuestionPaperCountOutputTypeCountAnswerpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerPaperWhereInput
  }

  /**
   * QuestionPaperCountOutputType without action
   */
  export type QuestionPaperCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * Count Type AnswerPaperCountOutputType
   */

  export type AnswerPaperCountOutputType = {
    answers: number
  }

  export type AnswerPaperCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | AnswerPaperCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * AnswerPaperCountOutputType without action
   */
  export type AnswerPaperCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerPaperCountOutputType
     */
    select?: AnswerPaperCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnswerPaperCountOutputType without action
   */
  export type AnswerPaperCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
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
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
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
    username: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
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
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    documents?: boolean | User$documentsArgs<ExtArgs>
    questionpapers?: boolean | User$questionpapersArgs<ExtArgs>
    answerpapers?: boolean | User$answerpapersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | User$documentsArgs<ExtArgs>
    questionpapers?: boolean | User$questionpapersArgs<ExtArgs>
    answerpapers?: boolean | User$answerpapersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      questionpapers: Prisma.$QuestionPaperPayload<ExtArgs>[]
      answerpapers: Prisma.$AnswerPaperPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
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
    documents<T extends User$documentsArgs<ExtArgs> = {}>(args?: Subset<T, User$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questionpapers<T extends User$questionpapersArgs<ExtArgs> = {}>(args?: Subset<T, User$questionpapersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPaperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answerpapers<T extends User$answerpapersArgs<ExtArgs> = {}>(args?: Subset<T, User$answerpapersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPaperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.documents
   */
  export type User$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * User.questionpapers
   */
  export type User$questionpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionPaper
     */
    select?: QuestionPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionPaper
     */
    omit?: QuestionPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionPaperInclude<ExtArgs> | null
    where?: QuestionPaperWhereInput
    orderBy?: QuestionPaperOrderByWithRelationInput | QuestionPaperOrderByWithRelationInput[]
    cursor?: QuestionPaperWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionPaperScalarFieldEnum | QuestionPaperScalarFieldEnum[]
  }

  /**
   * User.answerpapers
   */
  export type User$answerpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerPaper
     */
    select?: AnswerPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerPaper
     */
    omit?: AnswerPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerPaperInclude<ExtArgs> | null
    where?: AnswerPaperWhereInput
    orderBy?: AnswerPaperOrderByWithRelationInput | AnswerPaperOrderByWithRelationInput[]
    cursor?: AnswerPaperWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerPaperScalarFieldEnum | AnswerPaperScalarFieldEnum[]
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
   * Model Topic
   */

  export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  export type TopicMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TopicMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TopicCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TopicMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TopicMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TopicCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topic to aggregate.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topics
    **/
    _count?: true | TopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicMaxAggregateInputType
  }

  export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopic[P]>
      : GetScalarType<T[P], AggregateTopic[P]>
  }




  export type TopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithAggregationInput | TopicOrderByWithAggregationInput[]
    by: TopicScalarFieldEnum[] | TopicScalarFieldEnum
    having?: TopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicCountAggregateInputType | true
    _min?: TopicMinAggregateInputType
    _max?: TopicMaxAggregateInputType
  }

  export type TopicGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TopicCountAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  type GetTopicGroupByPayload<T extends TopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicGroupByOutputType[P]>
            : GetScalarType<T[P], TopicGroupByOutputType[P]>
        }
      >
    >


  export type TopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    documents?: boolean | Topic$documentsArgs<ExtArgs>
    subtopic?: boolean | Topic$subtopicArgs<ExtArgs>
    questionpapers?: boolean | Topic$questionpapersArgs<ExtArgs>
    answerpapers?: boolean | Topic$answerpapersArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["topic"]>
  export type TopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | Topic$documentsArgs<ExtArgs>
    subtopic?: boolean | Topic$subtopicArgs<ExtArgs>
    questionpapers?: boolean | Topic$questionpapersArgs<ExtArgs>
    answerpapers?: boolean | Topic$answerpapersArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topic"
    objects: {
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      subtopic: Prisma.$SubtopicPayload<ExtArgs>[]
      questionpapers: Prisma.$QuestionPaperPayload<ExtArgs>[]
      answerpapers: Prisma.$AnswerPaperPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["topic"]>
    composites: {}
  }

  type TopicGetPayload<S extends boolean | null | undefined | TopicDefaultArgs> = $Result.GetResult<Prisma.$TopicPayload, S>

  type TopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicCountAggregateInputType | true
    }

  export interface TopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topic'], meta: { name: 'Topic' } }
    /**
     * Find zero or one Topic that matches the filter.
     * @param {TopicFindUniqueArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicFindUniqueArgs>(args: SelectSubset<T, TopicFindUniqueArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Topic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicFindUniqueOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicFindFirstArgs>(args?: SelectSubset<T, TopicFindFirstArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topic.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicWithIdOnly = await prisma.topic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicFindManyArgs>(args?: SelectSubset<T, TopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Topic.
     * @param {TopicCreateArgs} args - Arguments to create a Topic.
     * @example
     * // Create one Topic
     * const Topic = await prisma.topic.create({
     *   data: {
     *     // ... data to create a Topic
     *   }
     * })
     * 
     */
    create<T extends TopicCreateArgs>(args: SelectSubset<T, TopicCreateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Topics.
     * @param {TopicCreateManyArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicCreateManyArgs>(args?: SelectSubset<T, TopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Topics and returns the data saved in the database.
     * @param {TopicCreateManyAndReturnArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopicCreateManyAndReturnArgs>(args?: SelectSubset<T, TopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Topic.
     * @param {TopicDeleteArgs} args - Arguments to delete one Topic.
     * @example
     * // Delete one Topic
     * const Topic = await prisma.topic.delete({
     *   where: {
     *     // ... filter to delete one Topic
     *   }
     * })
     * 
     */
    delete<T extends TopicDeleteArgs>(args: SelectSubset<T, TopicDeleteArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Topic.
     * @param {TopicUpdateArgs} args - Arguments to update one Topic.
     * @example
     * // Update one Topic
     * const topic = await prisma.topic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicUpdateArgs>(args: SelectSubset<T, TopicUpdateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Topics.
     * @param {TopicDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicDeleteManyArgs>(args?: SelectSubset<T, TopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicUpdateManyArgs>(args: SelectSubset<T, TopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics and returns the data updated in the database.
     * @param {TopicUpdateManyAndReturnArgs} args - Arguments to update many Topics.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.updateManyAndReturn({
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
    updateManyAndReturn<T extends TopicUpdateManyAndReturnArgs>(args: SelectSubset<T, TopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Topic.
     * @param {TopicUpsertArgs} args - Arguments to update or create a Topic.
     * @example
     * // Update or create a Topic
     * const topic = await prisma.topic.upsert({
     *   create: {
     *     // ... data to create a Topic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topic we want to update
     *   }
     * })
     */
    upsert<T extends TopicUpsertArgs>(args: SelectSubset<T, TopicUpsertArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topic.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends TopicCountArgs>(
      args?: Subset<T, TopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TopicAggregateArgs>(args: Subset<T, TopicAggregateArgs>): Prisma.PrismaPromise<GetTopicAggregateType<T>>

    /**
     * Group by Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicGroupByArgs} args - Group by arguments.
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
      T extends TopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicGroupByArgs['orderBy'] }
        : { orderBy?: TopicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topic model
   */
  readonly fields: TopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends Topic$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subtopic<T extends Topic$subtopicArgs<ExtArgs> = {}>(args?: Subset<T, Topic$subtopicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questionpapers<T extends Topic$questionpapersArgs<ExtArgs> = {}>(args?: Subset<T, Topic$questionpapersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPaperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answerpapers<T extends Topic$answerpapersArgs<ExtArgs> = {}>(args?: Subset<T, Topic$answerpapersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPaperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Topic model
   */
  interface TopicFieldRefs {
    readonly id: FieldRef<"Topic", 'String'>
    readonly name: FieldRef<"Topic", 'String'>
    readonly createdAt: FieldRef<"Topic", 'DateTime'>
    readonly updatedAt: FieldRef<"Topic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Topic findUnique
   */
  export type TopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findUniqueOrThrow
   */
  export type TopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findFirst
   */
  export type TopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findFirstOrThrow
   */
  export type TopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findMany
   */
  export type TopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic create
   */
  export type TopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to create a Topic.
     */
    data: XOR<TopicCreateInput, TopicUncheckedCreateInput>
  }

  /**
   * Topic createMany
   */
  export type TopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topic createManyAndReturn
   */
  export type TopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topic update
   */
  export type TopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to update a Topic.
     */
    data: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
    /**
     * Choose, which Topic to update.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic updateMany
   */
  export type TopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
  }

  /**
   * Topic updateManyAndReturn
   */
  export type TopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
  }

  /**
   * Topic upsert
   */
  export type TopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The filter to search for the Topic to update in case it exists.
     */
    where: TopicWhereUniqueInput
    /**
     * In case the Topic found by the `where` argument doesn't exist, create a new Topic with this data.
     */
    create: XOR<TopicCreateInput, TopicUncheckedCreateInput>
    /**
     * In case the Topic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
  }

  /**
   * Topic delete
   */
  export type TopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter which Topic to delete.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic deleteMany
   */
  export type TopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topics to delete
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to delete.
     */
    limit?: number
  }

  /**
   * Topic.documents
   */
  export type Topic$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Topic.subtopic
   */
  export type Topic$subtopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    where?: SubtopicWhereInput
    orderBy?: SubtopicOrderByWithRelationInput | SubtopicOrderByWithRelationInput[]
    cursor?: SubtopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubtopicScalarFieldEnum | SubtopicScalarFieldEnum[]
  }

  /**
   * Topic.questionpapers
   */
  export type Topic$questionpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionPaper
     */
    select?: QuestionPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionPaper
     */
    omit?: QuestionPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionPaperInclude<ExtArgs> | null
    where?: QuestionPaperWhereInput
    orderBy?: QuestionPaperOrderByWithRelationInput | QuestionPaperOrderByWithRelationInput[]
    cursor?: QuestionPaperWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionPaperScalarFieldEnum | QuestionPaperScalarFieldEnum[]
  }

  /**
   * Topic.answerpapers
   */
  export type Topic$answerpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerPaper
     */
    select?: AnswerPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerPaper
     */
    omit?: AnswerPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerPaperInclude<ExtArgs> | null
    where?: AnswerPaperWhereInput
    orderBy?: AnswerPaperOrderByWithRelationInput | AnswerPaperOrderByWithRelationInput[]
    cursor?: AnswerPaperWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerPaperScalarFieldEnum | AnswerPaperScalarFieldEnum[]
  }

  /**
   * Topic without action
   */
  export type TopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
  }


  /**
   * Model Subtopic
   */

  export type AggregateSubtopic = {
    _count: SubtopicCountAggregateOutputType | null
    _min: SubtopicMinAggregateOutputType | null
    _max: SubtopicMaxAggregateOutputType | null
  }

  export type SubtopicMinAggregateOutputType = {
    id: string | null
    name: string | null
    topicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubtopicMaxAggregateOutputType = {
    id: string | null
    name: string | null
    topicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubtopicCountAggregateOutputType = {
    id: number
    name: number
    topicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubtopicMinAggregateInputType = {
    id?: true
    name?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubtopicMaxAggregateInputType = {
    id?: true
    name?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubtopicCountAggregateInputType = {
    id?: true
    name?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubtopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subtopic to aggregate.
     */
    where?: SubtopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtopics to fetch.
     */
    orderBy?: SubtopicOrderByWithRelationInput | SubtopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubtopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subtopics
    **/
    _count?: true | SubtopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubtopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubtopicMaxAggregateInputType
  }

  export type GetSubtopicAggregateType<T extends SubtopicAggregateArgs> = {
        [P in keyof T & keyof AggregateSubtopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubtopic[P]>
      : GetScalarType<T[P], AggregateSubtopic[P]>
  }




  export type SubtopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubtopicWhereInput
    orderBy?: SubtopicOrderByWithAggregationInput | SubtopicOrderByWithAggregationInput[]
    by: SubtopicScalarFieldEnum[] | SubtopicScalarFieldEnum
    having?: SubtopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubtopicCountAggregateInputType | true
    _min?: SubtopicMinAggregateInputType
    _max?: SubtopicMaxAggregateInputType
  }

  export type SubtopicGroupByOutputType = {
    id: string
    name: string
    topicId: string
    createdAt: Date
    updatedAt: Date
    _count: SubtopicCountAggregateOutputType | null
    _min: SubtopicMinAggregateOutputType | null
    _max: SubtopicMaxAggregateOutputType | null
  }

  type GetSubtopicGroupByPayload<T extends SubtopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubtopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubtopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubtopicGroupByOutputType[P]>
            : GetScalarType<T[P], SubtopicGroupByOutputType[P]>
        }
      >
    >


  export type SubtopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    documents?: boolean | Subtopic$documentsArgs<ExtArgs>
    questionpapers?: boolean | Subtopic$questionpapersArgs<ExtArgs>
    answerpapers?: boolean | Subtopic$answerpapersArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    _count?: boolean | SubtopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtopic"]>

  export type SubtopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtopic"]>

  export type SubtopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtopic"]>

  export type SubtopicSelectScalar = {
    id?: boolean
    name?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubtopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "topicId" | "createdAt" | "updatedAt", ExtArgs["result"]["subtopic"]>
  export type SubtopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | Subtopic$documentsArgs<ExtArgs>
    questionpapers?: boolean | Subtopic$questionpapersArgs<ExtArgs>
    answerpapers?: boolean | Subtopic$answerpapersArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    _count?: boolean | SubtopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubtopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type SubtopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }

  export type $SubtopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subtopic"
    objects: {
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      questionpapers: Prisma.$QuestionPaperPayload<ExtArgs>[]
      answerpapers: Prisma.$AnswerPaperPayload<ExtArgs>[]
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      topicId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subtopic"]>
    composites: {}
  }

  type SubtopicGetPayload<S extends boolean | null | undefined | SubtopicDefaultArgs> = $Result.GetResult<Prisma.$SubtopicPayload, S>

  type SubtopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubtopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubtopicCountAggregateInputType | true
    }

  export interface SubtopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subtopic'], meta: { name: 'Subtopic' } }
    /**
     * Find zero or one Subtopic that matches the filter.
     * @param {SubtopicFindUniqueArgs} args - Arguments to find a Subtopic
     * @example
     * // Get one Subtopic
     * const subtopic = await prisma.subtopic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubtopicFindUniqueArgs>(args: SelectSubset<T, SubtopicFindUniqueArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subtopic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubtopicFindUniqueOrThrowArgs} args - Arguments to find a Subtopic
     * @example
     * // Get one Subtopic
     * const subtopic = await prisma.subtopic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubtopicFindUniqueOrThrowArgs>(args: SelectSubset<T, SubtopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subtopic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicFindFirstArgs} args - Arguments to find a Subtopic
     * @example
     * // Get one Subtopic
     * const subtopic = await prisma.subtopic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubtopicFindFirstArgs>(args?: SelectSubset<T, SubtopicFindFirstArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subtopic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicFindFirstOrThrowArgs} args - Arguments to find a Subtopic
     * @example
     * // Get one Subtopic
     * const subtopic = await prisma.subtopic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubtopicFindFirstOrThrowArgs>(args?: SelectSubset<T, SubtopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subtopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subtopics
     * const subtopics = await prisma.subtopic.findMany()
     * 
     * // Get first 10 Subtopics
     * const subtopics = await prisma.subtopic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subtopicWithIdOnly = await prisma.subtopic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubtopicFindManyArgs>(args?: SelectSubset<T, SubtopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subtopic.
     * @param {SubtopicCreateArgs} args - Arguments to create a Subtopic.
     * @example
     * // Create one Subtopic
     * const Subtopic = await prisma.subtopic.create({
     *   data: {
     *     // ... data to create a Subtopic
     *   }
     * })
     * 
     */
    create<T extends SubtopicCreateArgs>(args: SelectSubset<T, SubtopicCreateArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subtopics.
     * @param {SubtopicCreateManyArgs} args - Arguments to create many Subtopics.
     * @example
     * // Create many Subtopics
     * const subtopic = await prisma.subtopic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubtopicCreateManyArgs>(args?: SelectSubset<T, SubtopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subtopics and returns the data saved in the database.
     * @param {SubtopicCreateManyAndReturnArgs} args - Arguments to create many Subtopics.
     * @example
     * // Create many Subtopics
     * const subtopic = await prisma.subtopic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subtopics and only return the `id`
     * const subtopicWithIdOnly = await prisma.subtopic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubtopicCreateManyAndReturnArgs>(args?: SelectSubset<T, SubtopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subtopic.
     * @param {SubtopicDeleteArgs} args - Arguments to delete one Subtopic.
     * @example
     * // Delete one Subtopic
     * const Subtopic = await prisma.subtopic.delete({
     *   where: {
     *     // ... filter to delete one Subtopic
     *   }
     * })
     * 
     */
    delete<T extends SubtopicDeleteArgs>(args: SelectSubset<T, SubtopicDeleteArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subtopic.
     * @param {SubtopicUpdateArgs} args - Arguments to update one Subtopic.
     * @example
     * // Update one Subtopic
     * const subtopic = await prisma.subtopic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubtopicUpdateArgs>(args: SelectSubset<T, SubtopicUpdateArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subtopics.
     * @param {SubtopicDeleteManyArgs} args - Arguments to filter Subtopics to delete.
     * @example
     * // Delete a few Subtopics
     * const { count } = await prisma.subtopic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubtopicDeleteManyArgs>(args?: SelectSubset<T, SubtopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subtopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subtopics
     * const subtopic = await prisma.subtopic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubtopicUpdateManyArgs>(args: SelectSubset<T, SubtopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subtopics and returns the data updated in the database.
     * @param {SubtopicUpdateManyAndReturnArgs} args - Arguments to update many Subtopics.
     * @example
     * // Update many Subtopics
     * const subtopic = await prisma.subtopic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subtopics and only return the `id`
     * const subtopicWithIdOnly = await prisma.subtopic.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubtopicUpdateManyAndReturnArgs>(args: SelectSubset<T, SubtopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subtopic.
     * @param {SubtopicUpsertArgs} args - Arguments to update or create a Subtopic.
     * @example
     * // Update or create a Subtopic
     * const subtopic = await prisma.subtopic.upsert({
     *   create: {
     *     // ... data to create a Subtopic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subtopic we want to update
     *   }
     * })
     */
    upsert<T extends SubtopicUpsertArgs>(args: SelectSubset<T, SubtopicUpsertArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subtopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicCountArgs} args - Arguments to filter Subtopics to count.
     * @example
     * // Count the number of Subtopics
     * const count = await prisma.subtopic.count({
     *   where: {
     *     // ... the filter for the Subtopics we want to count
     *   }
     * })
    **/
    count<T extends SubtopicCountArgs>(
      args?: Subset<T, SubtopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubtopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subtopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubtopicAggregateArgs>(args: Subset<T, SubtopicAggregateArgs>): Prisma.PrismaPromise<GetSubtopicAggregateType<T>>

    /**
     * Group by Subtopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtopicGroupByArgs} args - Group by arguments.
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
      T extends SubtopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubtopicGroupByArgs['orderBy'] }
        : { orderBy?: SubtopicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubtopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubtopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subtopic model
   */
  readonly fields: SubtopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subtopic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubtopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends Subtopic$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Subtopic$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questionpapers<T extends Subtopic$questionpapersArgs<ExtArgs> = {}>(args?: Subset<T, Subtopic$questionpapersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPaperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answerpapers<T extends Subtopic$answerpapersArgs<ExtArgs> = {}>(args?: Subset<T, Subtopic$answerpapersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPaperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Subtopic model
   */
  interface SubtopicFieldRefs {
    readonly id: FieldRef<"Subtopic", 'String'>
    readonly name: FieldRef<"Subtopic", 'String'>
    readonly topicId: FieldRef<"Subtopic", 'String'>
    readonly createdAt: FieldRef<"Subtopic", 'DateTime'>
    readonly updatedAt: FieldRef<"Subtopic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subtopic findUnique
   */
  export type SubtopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * Filter, which Subtopic to fetch.
     */
    where: SubtopicWhereUniqueInput
  }

  /**
   * Subtopic findUniqueOrThrow
   */
  export type SubtopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * Filter, which Subtopic to fetch.
     */
    where: SubtopicWhereUniqueInput
  }

  /**
   * Subtopic findFirst
   */
  export type SubtopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * Filter, which Subtopic to fetch.
     */
    where?: SubtopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtopics to fetch.
     */
    orderBy?: SubtopicOrderByWithRelationInput | SubtopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subtopics.
     */
    cursor?: SubtopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subtopics.
     */
    distinct?: SubtopicScalarFieldEnum | SubtopicScalarFieldEnum[]
  }

  /**
   * Subtopic findFirstOrThrow
   */
  export type SubtopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * Filter, which Subtopic to fetch.
     */
    where?: SubtopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtopics to fetch.
     */
    orderBy?: SubtopicOrderByWithRelationInput | SubtopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subtopics.
     */
    cursor?: SubtopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subtopics.
     */
    distinct?: SubtopicScalarFieldEnum | SubtopicScalarFieldEnum[]
  }

  /**
   * Subtopic findMany
   */
  export type SubtopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * Filter, which Subtopics to fetch.
     */
    where?: SubtopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtopics to fetch.
     */
    orderBy?: SubtopicOrderByWithRelationInput | SubtopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subtopics.
     */
    cursor?: SubtopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtopics.
     */
    skip?: number
    distinct?: SubtopicScalarFieldEnum | SubtopicScalarFieldEnum[]
  }

  /**
   * Subtopic create
   */
  export type SubtopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * The data needed to create a Subtopic.
     */
    data: XOR<SubtopicCreateInput, SubtopicUncheckedCreateInput>
  }

  /**
   * Subtopic createMany
   */
  export type SubtopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subtopics.
     */
    data: SubtopicCreateManyInput | SubtopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subtopic createManyAndReturn
   */
  export type SubtopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * The data used to create many Subtopics.
     */
    data: SubtopicCreateManyInput | SubtopicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subtopic update
   */
  export type SubtopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * The data needed to update a Subtopic.
     */
    data: XOR<SubtopicUpdateInput, SubtopicUncheckedUpdateInput>
    /**
     * Choose, which Subtopic to update.
     */
    where: SubtopicWhereUniqueInput
  }

  /**
   * Subtopic updateMany
   */
  export type SubtopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subtopics.
     */
    data: XOR<SubtopicUpdateManyMutationInput, SubtopicUncheckedUpdateManyInput>
    /**
     * Filter which Subtopics to update
     */
    where?: SubtopicWhereInput
    /**
     * Limit how many Subtopics to update.
     */
    limit?: number
  }

  /**
   * Subtopic updateManyAndReturn
   */
  export type SubtopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * The data used to update Subtopics.
     */
    data: XOR<SubtopicUpdateManyMutationInput, SubtopicUncheckedUpdateManyInput>
    /**
     * Filter which Subtopics to update
     */
    where?: SubtopicWhereInput
    /**
     * Limit how many Subtopics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subtopic upsert
   */
  export type SubtopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * The filter to search for the Subtopic to update in case it exists.
     */
    where: SubtopicWhereUniqueInput
    /**
     * In case the Subtopic found by the `where` argument doesn't exist, create a new Subtopic with this data.
     */
    create: XOR<SubtopicCreateInput, SubtopicUncheckedCreateInput>
    /**
     * In case the Subtopic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubtopicUpdateInput, SubtopicUncheckedUpdateInput>
  }

  /**
   * Subtopic delete
   */
  export type SubtopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    /**
     * Filter which Subtopic to delete.
     */
    where: SubtopicWhereUniqueInput
  }

  /**
   * Subtopic deleteMany
   */
  export type SubtopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subtopics to delete
     */
    where?: SubtopicWhereInput
    /**
     * Limit how many Subtopics to delete.
     */
    limit?: number
  }

  /**
   * Subtopic.documents
   */
  export type Subtopic$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Subtopic.questionpapers
   */
  export type Subtopic$questionpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionPaper
     */
    select?: QuestionPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionPaper
     */
    omit?: QuestionPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionPaperInclude<ExtArgs> | null
    where?: QuestionPaperWhereInput
    orderBy?: QuestionPaperOrderByWithRelationInput | QuestionPaperOrderByWithRelationInput[]
    cursor?: QuestionPaperWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionPaperScalarFieldEnum | QuestionPaperScalarFieldEnum[]
  }

  /**
   * Subtopic.answerpapers
   */
  export type Subtopic$answerpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerPaper
     */
    select?: AnswerPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerPaper
     */
    omit?: AnswerPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerPaperInclude<ExtArgs> | null
    where?: AnswerPaperWhereInput
    orderBy?: AnswerPaperOrderByWithRelationInput | AnswerPaperOrderByWithRelationInput[]
    cursor?: AnswerPaperWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerPaperScalarFieldEnum | AnswerPaperScalarFieldEnum[]
  }

  /**
   * Subtopic without action
   */
  export type SubtopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    topicId: string | null
    subtopicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    topicId: string | null
    subtopicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    userId: number
    topicId: number
    subtopicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    subtopicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    subtopicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    subtopicId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    userId: string
    topicId: string
    subtopicId: string
    createdAt: Date
    updatedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topicId?: boolean
    subtopicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subtopic?: boolean | Document$subtopicArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topicId?: boolean
    subtopicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subtopic?: boolean | Document$subtopicArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topicId?: boolean
    subtopicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subtopic?: boolean | Document$subtopicArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    userId?: boolean
    topicId?: boolean
    subtopicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "topicId" | "subtopicId" | "createdAt" | "updatedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subtopic?: boolean | Document$subtopicArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subtopic?: boolean | Document$subtopicArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subtopic?: boolean | Document$subtopicArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      topic: Prisma.$TopicPayload<ExtArgs>
      subtopic: Prisma.$SubtopicPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      topicId: string
      subtopicId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subtopic<T extends Document$subtopicArgs<ExtArgs> = {}>(args?: Subset<T, Document$subtopicArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly userId: FieldRef<"Document", 'String'>
    readonly topicId: FieldRef<"Document", 'String'>
    readonly subtopicId: FieldRef<"Document", 'String'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.subtopic
   */
  export type Document$subtopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    where?: SubtopicWhereInput
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    position: number | null
  }

  export type QuestionSumAggregateOutputType = {
    position: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    text: string | null
    position: number | null
    questionpaperId: string | null
    createdAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    position: number | null
    questionpaperId: string | null
    createdAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    text: number
    position: number
    questionpaperId: number
    createdAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    position?: true
  }

  export type QuestionSumAggregateInputType = {
    position?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    text?: true
    position?: true
    questionpaperId?: true
    createdAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    text?: true
    position?: true
    questionpaperId?: true
    createdAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    text?: true
    position?: true
    questionpaperId?: true
    createdAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    text: string
    position: number
    questionpaperId: string
    createdAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    position?: boolean
    questionpaperId?: boolean
    createdAt?: boolean
    questionpaper?: boolean | QuestionPaperDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    position?: boolean
    questionpaperId?: boolean
    createdAt?: boolean
    questionpaper?: boolean | QuestionPaperDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    position?: boolean
    questionpaperId?: boolean
    createdAt?: boolean
    questionpaper?: boolean | QuestionPaperDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    text?: boolean
    position?: boolean
    questionpaperId?: boolean
    createdAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "position" | "questionpaperId" | "createdAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionpaper?: boolean | QuestionPaperDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionpaper?: boolean | QuestionPaperDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionpaper?: boolean | QuestionPaperDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      questionpaper: Prisma.$QuestionPaperPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      position: number
      questionpaperId: string
      createdAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questionpaper<T extends QuestionPaperDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionPaperDefaultArgs<ExtArgs>>): Prisma__QuestionPaperClient<$Result.GetResult<Prisma.$QuestionPaperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly position: FieldRef<"Question", 'Int'>
    readonly questionpaperId: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    mark: number | null
  }

  export type AnswerSumAggregateOutputType = {
    mark: number | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    text: string | null
    mark: number | null
    llmRemark: string | null
    strengths: string | null
    weaknesses: string | null
    questionId: string | null
    answerpaperId: string | null
    createdAt: Date | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    text: string | null
    mark: number | null
    llmRemark: string | null
    strengths: string | null
    weaknesses: string | null
    questionId: string | null
    answerpaperId: string | null
    createdAt: Date | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    text: number
    mark: number
    llmRemark: number
    strengths: number
    weaknesses: number
    questionId: number
    answerpaperId: number
    createdAt: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    mark?: true
  }

  export type AnswerSumAggregateInputType = {
    mark?: true
  }

  export type AnswerMinAggregateInputType = {
    id?: true
    text?: true
    mark?: true
    llmRemark?: true
    strengths?: true
    weaknesses?: true
    questionId?: true
    answerpaperId?: true
    createdAt?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    text?: true
    mark?: true
    llmRemark?: true
    strengths?: true
    weaknesses?: true
    questionId?: true
    answerpaperId?: true
    createdAt?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    text?: true
    mark?: true
    llmRemark?: true
    strengths?: true
    weaknesses?: true
    questionId?: true
    answerpaperId?: true
    createdAt?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: string
    text: string
    mark: number | null
    llmRemark: string | null
    strengths: string | null
    weaknesses: string | null
    questionId: string
    answerpaperId: string
    createdAt: Date
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    mark?: boolean
    llmRemark?: boolean
    strengths?: boolean
    weaknesses?: boolean
    questionId?: boolean
    answerpaperId?: boolean
    createdAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answerpaper?: boolean | AnswerPaperDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    mark?: boolean
    llmRemark?: boolean
    strengths?: boolean
    weaknesses?: boolean
    questionId?: boolean
    answerpaperId?: boolean
    createdAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answerpaper?: boolean | AnswerPaperDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    mark?: boolean
    llmRemark?: boolean
    strengths?: boolean
    weaknesses?: boolean
    questionId?: boolean
    answerpaperId?: boolean
    createdAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answerpaper?: boolean | AnswerPaperDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    text?: boolean
    mark?: boolean
    llmRemark?: boolean
    strengths?: boolean
    weaknesses?: boolean
    questionId?: boolean
    answerpaperId?: boolean
    createdAt?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "mark" | "llmRemark" | "strengths" | "weaknesses" | "questionId" | "answerpaperId" | "createdAt", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answerpaper?: boolean | AnswerPaperDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answerpaper?: boolean | AnswerPaperDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answerpaper?: boolean | AnswerPaperDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      answerpaper: Prisma.$AnswerPaperPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      mark: number | null
      llmRemark: string | null
      strengths: string | null
      weaknesses: string | null
      questionId: string
      answerpaperId: string
      createdAt: Date
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answerpaper<T extends AnswerPaperDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnswerPaperDefaultArgs<ExtArgs>>): Prisma__AnswerPaperClient<$Result.GetResult<Prisma.$AnswerPaperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly text: FieldRef<"Answer", 'String'>
    readonly mark: FieldRef<"Answer", 'Float'>
    readonly llmRemark: FieldRef<"Answer", 'String'>
    readonly strengths: FieldRef<"Answer", 'String'>
    readonly weaknesses: FieldRef<"Answer", 'String'>
    readonly questionId: FieldRef<"Answer", 'String'>
    readonly answerpaperId: FieldRef<"Answer", 'String'>
    readonly createdAt: FieldRef<"Answer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model QuestionPaper
   */

  export type AggregateQuestionPaper = {
    _count: QuestionPaperCountAggregateOutputType | null
    _min: QuestionPaperMinAggregateOutputType | null
    _max: QuestionPaperMaxAggregateOutputType | null
  }

  export type QuestionPaperMinAggregateOutputType = {
    id: string | null
    userId: string | null
    topicId: string | null
    subtopicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionPaperMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    topicId: string | null
    subtopicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionPaperCountAggregateOutputType = {
    id: number
    userId: number
    topicId: number
    subtopicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionPaperMinAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    subtopicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionPaperMaxAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    subtopicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionPaperCountAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    subtopicId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionPaperAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionPaper to aggregate.
     */
    where?: QuestionPaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionPapers to fetch.
     */
    orderBy?: QuestionPaperOrderByWithRelationInput | QuestionPaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionPaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionPapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionPapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionPapers
    **/
    _count?: true | QuestionPaperCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionPaperMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionPaperMaxAggregateInputType
  }

  export type GetQuestionPaperAggregateType<T extends QuestionPaperAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionPaper]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionPaper[P]>
      : GetScalarType<T[P], AggregateQuestionPaper[P]>
  }




  export type QuestionPaperGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionPaperWhereInput
    orderBy?: QuestionPaperOrderByWithAggregationInput | QuestionPaperOrderByWithAggregationInput[]
    by: QuestionPaperScalarFieldEnum[] | QuestionPaperScalarFieldEnum
    having?: QuestionPaperScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionPaperCountAggregateInputType | true
    _min?: QuestionPaperMinAggregateInputType
    _max?: QuestionPaperMaxAggregateInputType
  }

  export type QuestionPaperGroupByOutputType = {
    id: string
    userId: string
    topicId: string
    subtopicId: string | null
    createdAt: Date
    updatedAt: Date
    _count: QuestionPaperCountAggregateOutputType | null
    _min: QuestionPaperMinAggregateOutputType | null
    _max: QuestionPaperMaxAggregateOutputType | null
  }

  type GetQuestionPaperGroupByPayload<T extends QuestionPaperGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionPaperGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionPaperGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionPaperGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionPaperGroupByOutputType[P]>
        }
      >
    >


  export type QuestionPaperSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topicId?: boolean
    subtopicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subtopic?: boolean | QuestionPaper$subtopicArgs<ExtArgs>
    answerpapers?: boolean | QuestionPaper$answerpapersArgs<ExtArgs>
    questions?: boolean | QuestionPaper$questionsArgs<ExtArgs>
    _count?: boolean | QuestionPaperCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionPaper"]>

  export type QuestionPaperSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topicId?: boolean
    subtopicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subtopic?: boolean | QuestionPaper$subtopicArgs<ExtArgs>
  }, ExtArgs["result"]["questionPaper"]>

  export type QuestionPaperSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topicId?: boolean
    subtopicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subtopic?: boolean | QuestionPaper$subtopicArgs<ExtArgs>
  }, ExtArgs["result"]["questionPaper"]>

  export type QuestionPaperSelectScalar = {
    id?: boolean
    userId?: boolean
    topicId?: boolean
    subtopicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionPaperOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "topicId" | "subtopicId" | "createdAt" | "updatedAt", ExtArgs["result"]["questionPaper"]>
  export type QuestionPaperInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subtopic?: boolean | QuestionPaper$subtopicArgs<ExtArgs>
    answerpapers?: boolean | QuestionPaper$answerpapersArgs<ExtArgs>
    questions?: boolean | QuestionPaper$questionsArgs<ExtArgs>
    _count?: boolean | QuestionPaperCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionPaperIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subtopic?: boolean | QuestionPaper$subtopicArgs<ExtArgs>
  }
  export type QuestionPaperIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subtopic?: boolean | QuestionPaper$subtopicArgs<ExtArgs>
  }

  export type $QuestionPaperPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionPaper"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      topic: Prisma.$TopicPayload<ExtArgs>
      subtopic: Prisma.$SubtopicPayload<ExtArgs> | null
      answerpapers: Prisma.$AnswerPaperPayload<ExtArgs>[]
      questions: Prisma.$QuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      topicId: string
      subtopicId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["questionPaper"]>
    composites: {}
  }

  type QuestionPaperGetPayload<S extends boolean | null | undefined | QuestionPaperDefaultArgs> = $Result.GetResult<Prisma.$QuestionPaperPayload, S>

  type QuestionPaperCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionPaperFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionPaperCountAggregateInputType | true
    }

  export interface QuestionPaperDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionPaper'], meta: { name: 'QuestionPaper' } }
    /**
     * Find zero or one QuestionPaper that matches the filter.
     * @param {QuestionPaperFindUniqueArgs} args - Arguments to find a QuestionPaper
     * @example
     * // Get one QuestionPaper
     * const questionPaper = await prisma.questionPaper.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionPaperFindUniqueArgs>(args: SelectSubset<T, QuestionPaperFindUniqueArgs<ExtArgs>>): Prisma__QuestionPaperClient<$Result.GetResult<Prisma.$QuestionPaperPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionPaper that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionPaperFindUniqueOrThrowArgs} args - Arguments to find a QuestionPaper
     * @example
     * // Get one QuestionPaper
     * const questionPaper = await prisma.questionPaper.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionPaperFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionPaperFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionPaperClient<$Result.GetResult<Prisma.$QuestionPaperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionPaper that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionPaperFindFirstArgs} args - Arguments to find a QuestionPaper
     * @example
     * // Get one QuestionPaper
     * const questionPaper = await prisma.questionPaper.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionPaperFindFirstArgs>(args?: SelectSubset<T, QuestionPaperFindFirstArgs<ExtArgs>>): Prisma__QuestionPaperClient<$Result.GetResult<Prisma.$QuestionPaperPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionPaper that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionPaperFindFirstOrThrowArgs} args - Arguments to find a QuestionPaper
     * @example
     * // Get one QuestionPaper
     * const questionPaper = await prisma.questionPaper.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionPaperFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionPaperFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionPaperClient<$Result.GetResult<Prisma.$QuestionPaperPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionPapers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionPaperFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionPapers
     * const questionPapers = await prisma.questionPaper.findMany()
     * 
     * // Get first 10 QuestionPapers
     * const questionPapers = await prisma.questionPaper.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionPaperWithIdOnly = await prisma.questionPaper.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionPaperFindManyArgs>(args?: SelectSubset<T, QuestionPaperFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPaperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionPaper.
     * @param {QuestionPaperCreateArgs} args - Arguments to create a QuestionPaper.
     * @example
     * // Create one QuestionPaper
     * const QuestionPaper = await prisma.questionPaper.create({
     *   data: {
     *     // ... data to create a QuestionPaper
     *   }
     * })
     * 
     */
    create<T extends QuestionPaperCreateArgs>(args: SelectSubset<T, QuestionPaperCreateArgs<ExtArgs>>): Prisma__QuestionPaperClient<$Result.GetResult<Prisma.$QuestionPaperPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionPapers.
     * @param {QuestionPaperCreateManyArgs} args - Arguments to create many QuestionPapers.
     * @example
     * // Create many QuestionPapers
     * const questionPaper = await prisma.questionPaper.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionPaperCreateManyArgs>(args?: SelectSubset<T, QuestionPaperCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionPapers and returns the data saved in the database.
     * @param {QuestionPaperCreateManyAndReturnArgs} args - Arguments to create many QuestionPapers.
     * @example
     * // Create many QuestionPapers
     * const questionPaper = await prisma.questionPaper.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionPapers and only return the `id`
     * const questionPaperWithIdOnly = await prisma.questionPaper.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionPaperCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionPaperCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPaperPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionPaper.
     * @param {QuestionPaperDeleteArgs} args - Arguments to delete one QuestionPaper.
     * @example
     * // Delete one QuestionPaper
     * const QuestionPaper = await prisma.questionPaper.delete({
     *   where: {
     *     // ... filter to delete one QuestionPaper
     *   }
     * })
     * 
     */
    delete<T extends QuestionPaperDeleteArgs>(args: SelectSubset<T, QuestionPaperDeleteArgs<ExtArgs>>): Prisma__QuestionPaperClient<$Result.GetResult<Prisma.$QuestionPaperPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionPaper.
     * @param {QuestionPaperUpdateArgs} args - Arguments to update one QuestionPaper.
     * @example
     * // Update one QuestionPaper
     * const questionPaper = await prisma.questionPaper.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionPaperUpdateArgs>(args: SelectSubset<T, QuestionPaperUpdateArgs<ExtArgs>>): Prisma__QuestionPaperClient<$Result.GetResult<Prisma.$QuestionPaperPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionPapers.
     * @param {QuestionPaperDeleteManyArgs} args - Arguments to filter QuestionPapers to delete.
     * @example
     * // Delete a few QuestionPapers
     * const { count } = await prisma.questionPaper.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionPaperDeleteManyArgs>(args?: SelectSubset<T, QuestionPaperDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionPapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionPaperUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionPapers
     * const questionPaper = await prisma.questionPaper.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionPaperUpdateManyArgs>(args: SelectSubset<T, QuestionPaperUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionPapers and returns the data updated in the database.
     * @param {QuestionPaperUpdateManyAndReturnArgs} args - Arguments to update many QuestionPapers.
     * @example
     * // Update many QuestionPapers
     * const questionPaper = await prisma.questionPaper.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionPapers and only return the `id`
     * const questionPaperWithIdOnly = await prisma.questionPaper.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionPaperUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionPaperUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPaperPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionPaper.
     * @param {QuestionPaperUpsertArgs} args - Arguments to update or create a QuestionPaper.
     * @example
     * // Update or create a QuestionPaper
     * const questionPaper = await prisma.questionPaper.upsert({
     *   create: {
     *     // ... data to create a QuestionPaper
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionPaper we want to update
     *   }
     * })
     */
    upsert<T extends QuestionPaperUpsertArgs>(args: SelectSubset<T, QuestionPaperUpsertArgs<ExtArgs>>): Prisma__QuestionPaperClient<$Result.GetResult<Prisma.$QuestionPaperPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionPapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionPaperCountArgs} args - Arguments to filter QuestionPapers to count.
     * @example
     * // Count the number of QuestionPapers
     * const count = await prisma.questionPaper.count({
     *   where: {
     *     // ... the filter for the QuestionPapers we want to count
     *   }
     * })
    **/
    count<T extends QuestionPaperCountArgs>(
      args?: Subset<T, QuestionPaperCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionPaperCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionPaper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionPaperAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionPaperAggregateArgs>(args: Subset<T, QuestionPaperAggregateArgs>): Prisma.PrismaPromise<GetQuestionPaperAggregateType<T>>

    /**
     * Group by QuestionPaper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionPaperGroupByArgs} args - Group by arguments.
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
      T extends QuestionPaperGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionPaperGroupByArgs['orderBy'] }
        : { orderBy?: QuestionPaperGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionPaperGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionPaperGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionPaper model
   */
  readonly fields: QuestionPaperFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionPaper.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionPaperClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subtopic<T extends QuestionPaper$subtopicArgs<ExtArgs> = {}>(args?: Subset<T, QuestionPaper$subtopicArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    answerpapers<T extends QuestionPaper$answerpapersArgs<ExtArgs> = {}>(args?: Subset<T, QuestionPaper$answerpapersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPaperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends QuestionPaper$questionsArgs<ExtArgs> = {}>(args?: Subset<T, QuestionPaper$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the QuestionPaper model
   */
  interface QuestionPaperFieldRefs {
    readonly id: FieldRef<"QuestionPaper", 'String'>
    readonly userId: FieldRef<"QuestionPaper", 'String'>
    readonly topicId: FieldRef<"QuestionPaper", 'String'>
    readonly subtopicId: FieldRef<"QuestionPaper", 'String'>
    readonly createdAt: FieldRef<"QuestionPaper", 'DateTime'>
    readonly updatedAt: FieldRef<"QuestionPaper", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuestionPaper findUnique
   */
  export type QuestionPaperFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionPaper
     */
    select?: QuestionPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionPaper
     */
    omit?: QuestionPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionPaperInclude<ExtArgs> | null
    /**
     * Filter, which QuestionPaper to fetch.
     */
    where: QuestionPaperWhereUniqueInput
  }

  /**
   * QuestionPaper findUniqueOrThrow
   */
  export type QuestionPaperFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionPaper
     */
    select?: QuestionPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionPaper
     */
    omit?: QuestionPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionPaperInclude<ExtArgs> | null
    /**
     * Filter, which QuestionPaper to fetch.
     */
    where: QuestionPaperWhereUniqueInput
  }

  /**
   * QuestionPaper findFirst
   */
  export type QuestionPaperFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionPaper
     */
    select?: QuestionPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionPaper
     */
    omit?: QuestionPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionPaperInclude<ExtArgs> | null
    /**
     * Filter, which QuestionPaper to fetch.
     */
    where?: QuestionPaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionPapers to fetch.
     */
    orderBy?: QuestionPaperOrderByWithRelationInput | QuestionPaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionPapers.
     */
    cursor?: QuestionPaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionPapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionPapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionPapers.
     */
    distinct?: QuestionPaperScalarFieldEnum | QuestionPaperScalarFieldEnum[]
  }

  /**
   * QuestionPaper findFirstOrThrow
   */
  export type QuestionPaperFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionPaper
     */
    select?: QuestionPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionPaper
     */
    omit?: QuestionPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionPaperInclude<ExtArgs> | null
    /**
     * Filter, which QuestionPaper to fetch.
     */
    where?: QuestionPaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionPapers to fetch.
     */
    orderBy?: QuestionPaperOrderByWithRelationInput | QuestionPaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionPapers.
     */
    cursor?: QuestionPaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionPapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionPapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionPapers.
     */
    distinct?: QuestionPaperScalarFieldEnum | QuestionPaperScalarFieldEnum[]
  }

  /**
   * QuestionPaper findMany
   */
  export type QuestionPaperFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionPaper
     */
    select?: QuestionPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionPaper
     */
    omit?: QuestionPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionPaperInclude<ExtArgs> | null
    /**
     * Filter, which QuestionPapers to fetch.
     */
    where?: QuestionPaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionPapers to fetch.
     */
    orderBy?: QuestionPaperOrderByWithRelationInput | QuestionPaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionPapers.
     */
    cursor?: QuestionPaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionPapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionPapers.
     */
    skip?: number
    distinct?: QuestionPaperScalarFieldEnum | QuestionPaperScalarFieldEnum[]
  }

  /**
   * QuestionPaper create
   */
  export type QuestionPaperCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionPaper
     */
    select?: QuestionPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionPaper
     */
    omit?: QuestionPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionPaperInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionPaper.
     */
    data: XOR<QuestionPaperCreateInput, QuestionPaperUncheckedCreateInput>
  }

  /**
   * QuestionPaper createMany
   */
  export type QuestionPaperCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionPapers.
     */
    data: QuestionPaperCreateManyInput | QuestionPaperCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionPaper createManyAndReturn
   */
  export type QuestionPaperCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionPaper
     */
    select?: QuestionPaperSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionPaper
     */
    omit?: QuestionPaperOmit<ExtArgs> | null
    /**
     * The data used to create many QuestionPapers.
     */
    data: QuestionPaperCreateManyInput | QuestionPaperCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionPaperIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionPaper update
   */
  export type QuestionPaperUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionPaper
     */
    select?: QuestionPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionPaper
     */
    omit?: QuestionPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionPaperInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionPaper.
     */
    data: XOR<QuestionPaperUpdateInput, QuestionPaperUncheckedUpdateInput>
    /**
     * Choose, which QuestionPaper to update.
     */
    where: QuestionPaperWhereUniqueInput
  }

  /**
   * QuestionPaper updateMany
   */
  export type QuestionPaperUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionPapers.
     */
    data: XOR<QuestionPaperUpdateManyMutationInput, QuestionPaperUncheckedUpdateManyInput>
    /**
     * Filter which QuestionPapers to update
     */
    where?: QuestionPaperWhereInput
    /**
     * Limit how many QuestionPapers to update.
     */
    limit?: number
  }

  /**
   * QuestionPaper updateManyAndReturn
   */
  export type QuestionPaperUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionPaper
     */
    select?: QuestionPaperSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionPaper
     */
    omit?: QuestionPaperOmit<ExtArgs> | null
    /**
     * The data used to update QuestionPapers.
     */
    data: XOR<QuestionPaperUpdateManyMutationInput, QuestionPaperUncheckedUpdateManyInput>
    /**
     * Filter which QuestionPapers to update
     */
    where?: QuestionPaperWhereInput
    /**
     * Limit how many QuestionPapers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionPaperIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionPaper upsert
   */
  export type QuestionPaperUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionPaper
     */
    select?: QuestionPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionPaper
     */
    omit?: QuestionPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionPaperInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionPaper to update in case it exists.
     */
    where: QuestionPaperWhereUniqueInput
    /**
     * In case the QuestionPaper found by the `where` argument doesn't exist, create a new QuestionPaper with this data.
     */
    create: XOR<QuestionPaperCreateInput, QuestionPaperUncheckedCreateInput>
    /**
     * In case the QuestionPaper was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionPaperUpdateInput, QuestionPaperUncheckedUpdateInput>
  }

  /**
   * QuestionPaper delete
   */
  export type QuestionPaperDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionPaper
     */
    select?: QuestionPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionPaper
     */
    omit?: QuestionPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionPaperInclude<ExtArgs> | null
    /**
     * Filter which QuestionPaper to delete.
     */
    where: QuestionPaperWhereUniqueInput
  }

  /**
   * QuestionPaper deleteMany
   */
  export type QuestionPaperDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionPapers to delete
     */
    where?: QuestionPaperWhereInput
    /**
     * Limit how many QuestionPapers to delete.
     */
    limit?: number
  }

  /**
   * QuestionPaper.subtopic
   */
  export type QuestionPaper$subtopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    where?: SubtopicWhereInput
  }

  /**
   * QuestionPaper.answerpapers
   */
  export type QuestionPaper$answerpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerPaper
     */
    select?: AnswerPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerPaper
     */
    omit?: AnswerPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerPaperInclude<ExtArgs> | null
    where?: AnswerPaperWhereInput
    orderBy?: AnswerPaperOrderByWithRelationInput | AnswerPaperOrderByWithRelationInput[]
    cursor?: AnswerPaperWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerPaperScalarFieldEnum | AnswerPaperScalarFieldEnum[]
  }

  /**
   * QuestionPaper.questions
   */
  export type QuestionPaper$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * QuestionPaper without action
   */
  export type QuestionPaperDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionPaper
     */
    select?: QuestionPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionPaper
     */
    omit?: QuestionPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionPaperInclude<ExtArgs> | null
  }


  /**
   * Model AnswerPaper
   */

  export type AggregateAnswerPaper = {
    _count: AnswerPaperCountAggregateOutputType | null
    _avg: AnswerPaperAvgAggregateOutputType | null
    _sum: AnswerPaperSumAggregateOutputType | null
    _min: AnswerPaperMinAggregateOutputType | null
    _max: AnswerPaperMaxAggregateOutputType | null
  }

  export type AnswerPaperAvgAggregateOutputType = {
    finalscore: number | null
  }

  export type AnswerPaperSumAggregateOutputType = {
    finalscore: number | null
  }

  export type AnswerPaperMinAggregateOutputType = {
    id: string | null
    userId: string | null
    topicId: string | null
    subtopicId: string | null
    questionpaperId: string | null
    finalscore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerPaperMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    topicId: string | null
    subtopicId: string | null
    questionpaperId: string | null
    finalscore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerPaperCountAggregateOutputType = {
    id: number
    userId: number
    topicId: number
    subtopicId: number
    questionpaperId: number
    finalscore: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnswerPaperAvgAggregateInputType = {
    finalscore?: true
  }

  export type AnswerPaperSumAggregateInputType = {
    finalscore?: true
  }

  export type AnswerPaperMinAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    subtopicId?: true
    questionpaperId?: true
    finalscore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerPaperMaxAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    subtopicId?: true
    questionpaperId?: true
    finalscore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerPaperCountAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    subtopicId?: true
    questionpaperId?: true
    finalscore?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnswerPaperAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnswerPaper to aggregate.
     */
    where?: AnswerPaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerPapers to fetch.
     */
    orderBy?: AnswerPaperOrderByWithRelationInput | AnswerPaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerPaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerPapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerPapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnswerPapers
    **/
    _count?: true | AnswerPaperCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerPaperAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerPaperSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerPaperMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerPaperMaxAggregateInputType
  }

  export type GetAnswerPaperAggregateType<T extends AnswerPaperAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswerPaper]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswerPaper[P]>
      : GetScalarType<T[P], AggregateAnswerPaper[P]>
  }




  export type AnswerPaperGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerPaperWhereInput
    orderBy?: AnswerPaperOrderByWithAggregationInput | AnswerPaperOrderByWithAggregationInput[]
    by: AnswerPaperScalarFieldEnum[] | AnswerPaperScalarFieldEnum
    having?: AnswerPaperScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerPaperCountAggregateInputType | true
    _avg?: AnswerPaperAvgAggregateInputType
    _sum?: AnswerPaperSumAggregateInputType
    _min?: AnswerPaperMinAggregateInputType
    _max?: AnswerPaperMaxAggregateInputType
  }

  export type AnswerPaperGroupByOutputType = {
    id: string
    userId: string
    topicId: string
    subtopicId: string | null
    questionpaperId: string
    finalscore: number | null
    createdAt: Date
    updatedAt: Date
    _count: AnswerPaperCountAggregateOutputType | null
    _avg: AnswerPaperAvgAggregateOutputType | null
    _sum: AnswerPaperSumAggregateOutputType | null
    _min: AnswerPaperMinAggregateOutputType | null
    _max: AnswerPaperMaxAggregateOutputType | null
  }

  type GetAnswerPaperGroupByPayload<T extends AnswerPaperGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerPaperGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerPaperGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerPaperGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerPaperGroupByOutputType[P]>
        }
      >
    >


  export type AnswerPaperSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topicId?: boolean
    subtopicId?: boolean
    questionpaperId?: boolean
    finalscore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subtopic?: boolean | AnswerPaper$subtopicArgs<ExtArgs>
    questionpaper?: boolean | QuestionPaperDefaultArgs<ExtArgs>
    answers?: boolean | AnswerPaper$answersArgs<ExtArgs>
    _count?: boolean | AnswerPaperCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answerPaper"]>

  export type AnswerPaperSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topicId?: boolean
    subtopicId?: boolean
    questionpaperId?: boolean
    finalscore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subtopic?: boolean | AnswerPaper$subtopicArgs<ExtArgs>
    questionpaper?: boolean | QuestionPaperDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answerPaper"]>

  export type AnswerPaperSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topicId?: boolean
    subtopicId?: boolean
    questionpaperId?: boolean
    finalscore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subtopic?: boolean | AnswerPaper$subtopicArgs<ExtArgs>
    questionpaper?: boolean | QuestionPaperDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answerPaper"]>

  export type AnswerPaperSelectScalar = {
    id?: boolean
    userId?: boolean
    topicId?: boolean
    subtopicId?: boolean
    questionpaperId?: boolean
    finalscore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnswerPaperOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "topicId" | "subtopicId" | "questionpaperId" | "finalscore" | "createdAt" | "updatedAt", ExtArgs["result"]["answerPaper"]>
  export type AnswerPaperInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subtopic?: boolean | AnswerPaper$subtopicArgs<ExtArgs>
    questionpaper?: boolean | QuestionPaperDefaultArgs<ExtArgs>
    answers?: boolean | AnswerPaper$answersArgs<ExtArgs>
    _count?: boolean | AnswerPaperCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnswerPaperIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subtopic?: boolean | AnswerPaper$subtopicArgs<ExtArgs>
    questionpaper?: boolean | QuestionPaperDefaultArgs<ExtArgs>
  }
  export type AnswerPaperIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    subtopic?: boolean | AnswerPaper$subtopicArgs<ExtArgs>
    questionpaper?: boolean | QuestionPaperDefaultArgs<ExtArgs>
  }

  export type $AnswerPaperPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnswerPaper"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      topic: Prisma.$TopicPayload<ExtArgs>
      subtopic: Prisma.$SubtopicPayload<ExtArgs> | null
      questionpaper: Prisma.$QuestionPaperPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      topicId: string
      subtopicId: string | null
      questionpaperId: string
      finalscore: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["answerPaper"]>
    composites: {}
  }

  type AnswerPaperGetPayload<S extends boolean | null | undefined | AnswerPaperDefaultArgs> = $Result.GetResult<Prisma.$AnswerPaperPayload, S>

  type AnswerPaperCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerPaperFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerPaperCountAggregateInputType | true
    }

  export interface AnswerPaperDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnswerPaper'], meta: { name: 'AnswerPaper' } }
    /**
     * Find zero or one AnswerPaper that matches the filter.
     * @param {AnswerPaperFindUniqueArgs} args - Arguments to find a AnswerPaper
     * @example
     * // Get one AnswerPaper
     * const answerPaper = await prisma.answerPaper.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerPaperFindUniqueArgs>(args: SelectSubset<T, AnswerPaperFindUniqueArgs<ExtArgs>>): Prisma__AnswerPaperClient<$Result.GetResult<Prisma.$AnswerPaperPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnswerPaper that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerPaperFindUniqueOrThrowArgs} args - Arguments to find a AnswerPaper
     * @example
     * // Get one AnswerPaper
     * const answerPaper = await prisma.answerPaper.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerPaperFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerPaperFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerPaperClient<$Result.GetResult<Prisma.$AnswerPaperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnswerPaper that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerPaperFindFirstArgs} args - Arguments to find a AnswerPaper
     * @example
     * // Get one AnswerPaper
     * const answerPaper = await prisma.answerPaper.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerPaperFindFirstArgs>(args?: SelectSubset<T, AnswerPaperFindFirstArgs<ExtArgs>>): Prisma__AnswerPaperClient<$Result.GetResult<Prisma.$AnswerPaperPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnswerPaper that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerPaperFindFirstOrThrowArgs} args - Arguments to find a AnswerPaper
     * @example
     * // Get one AnswerPaper
     * const answerPaper = await prisma.answerPaper.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerPaperFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerPaperFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerPaperClient<$Result.GetResult<Prisma.$AnswerPaperPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnswerPapers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerPaperFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnswerPapers
     * const answerPapers = await prisma.answerPaper.findMany()
     * 
     * // Get first 10 AnswerPapers
     * const answerPapers = await prisma.answerPaper.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerPaperWithIdOnly = await prisma.answerPaper.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerPaperFindManyArgs>(args?: SelectSubset<T, AnswerPaperFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPaperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnswerPaper.
     * @param {AnswerPaperCreateArgs} args - Arguments to create a AnswerPaper.
     * @example
     * // Create one AnswerPaper
     * const AnswerPaper = await prisma.answerPaper.create({
     *   data: {
     *     // ... data to create a AnswerPaper
     *   }
     * })
     * 
     */
    create<T extends AnswerPaperCreateArgs>(args: SelectSubset<T, AnswerPaperCreateArgs<ExtArgs>>): Prisma__AnswerPaperClient<$Result.GetResult<Prisma.$AnswerPaperPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnswerPapers.
     * @param {AnswerPaperCreateManyArgs} args - Arguments to create many AnswerPapers.
     * @example
     * // Create many AnswerPapers
     * const answerPaper = await prisma.answerPaper.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerPaperCreateManyArgs>(args?: SelectSubset<T, AnswerPaperCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnswerPapers and returns the data saved in the database.
     * @param {AnswerPaperCreateManyAndReturnArgs} args - Arguments to create many AnswerPapers.
     * @example
     * // Create many AnswerPapers
     * const answerPaper = await prisma.answerPaper.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnswerPapers and only return the `id`
     * const answerPaperWithIdOnly = await prisma.answerPaper.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerPaperCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerPaperCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPaperPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnswerPaper.
     * @param {AnswerPaperDeleteArgs} args - Arguments to delete one AnswerPaper.
     * @example
     * // Delete one AnswerPaper
     * const AnswerPaper = await prisma.answerPaper.delete({
     *   where: {
     *     // ... filter to delete one AnswerPaper
     *   }
     * })
     * 
     */
    delete<T extends AnswerPaperDeleteArgs>(args: SelectSubset<T, AnswerPaperDeleteArgs<ExtArgs>>): Prisma__AnswerPaperClient<$Result.GetResult<Prisma.$AnswerPaperPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnswerPaper.
     * @param {AnswerPaperUpdateArgs} args - Arguments to update one AnswerPaper.
     * @example
     * // Update one AnswerPaper
     * const answerPaper = await prisma.answerPaper.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerPaperUpdateArgs>(args: SelectSubset<T, AnswerPaperUpdateArgs<ExtArgs>>): Prisma__AnswerPaperClient<$Result.GetResult<Prisma.$AnswerPaperPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnswerPapers.
     * @param {AnswerPaperDeleteManyArgs} args - Arguments to filter AnswerPapers to delete.
     * @example
     * // Delete a few AnswerPapers
     * const { count } = await prisma.answerPaper.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerPaperDeleteManyArgs>(args?: SelectSubset<T, AnswerPaperDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnswerPapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerPaperUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnswerPapers
     * const answerPaper = await prisma.answerPaper.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerPaperUpdateManyArgs>(args: SelectSubset<T, AnswerPaperUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnswerPapers and returns the data updated in the database.
     * @param {AnswerPaperUpdateManyAndReturnArgs} args - Arguments to update many AnswerPapers.
     * @example
     * // Update many AnswerPapers
     * const answerPaper = await prisma.answerPaper.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnswerPapers and only return the `id`
     * const answerPaperWithIdOnly = await prisma.answerPaper.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnswerPaperUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerPaperUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPaperPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnswerPaper.
     * @param {AnswerPaperUpsertArgs} args - Arguments to update or create a AnswerPaper.
     * @example
     * // Update or create a AnswerPaper
     * const answerPaper = await prisma.answerPaper.upsert({
     *   create: {
     *     // ... data to create a AnswerPaper
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnswerPaper we want to update
     *   }
     * })
     */
    upsert<T extends AnswerPaperUpsertArgs>(args: SelectSubset<T, AnswerPaperUpsertArgs<ExtArgs>>): Prisma__AnswerPaperClient<$Result.GetResult<Prisma.$AnswerPaperPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnswerPapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerPaperCountArgs} args - Arguments to filter AnswerPapers to count.
     * @example
     * // Count the number of AnswerPapers
     * const count = await prisma.answerPaper.count({
     *   where: {
     *     // ... the filter for the AnswerPapers we want to count
     *   }
     * })
    **/
    count<T extends AnswerPaperCountArgs>(
      args?: Subset<T, AnswerPaperCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerPaperCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnswerPaper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerPaperAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerPaperAggregateArgs>(args: Subset<T, AnswerPaperAggregateArgs>): Prisma.PrismaPromise<GetAnswerPaperAggregateType<T>>

    /**
     * Group by AnswerPaper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerPaperGroupByArgs} args - Group by arguments.
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
      T extends AnswerPaperGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerPaperGroupByArgs['orderBy'] }
        : { orderBy?: AnswerPaperGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerPaperGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerPaperGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnswerPaper model
   */
  readonly fields: AnswerPaperFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnswerPaper.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerPaperClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subtopic<T extends AnswerPaper$subtopicArgs<ExtArgs> = {}>(args?: Subset<T, AnswerPaper$subtopicArgs<ExtArgs>>): Prisma__SubtopicClient<$Result.GetResult<Prisma.$SubtopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    questionpaper<T extends QuestionPaperDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionPaperDefaultArgs<ExtArgs>>): Prisma__QuestionPaperClient<$Result.GetResult<Prisma.$QuestionPaperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends AnswerPaper$answersArgs<ExtArgs> = {}>(args?: Subset<T, AnswerPaper$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AnswerPaper model
   */
  interface AnswerPaperFieldRefs {
    readonly id: FieldRef<"AnswerPaper", 'String'>
    readonly userId: FieldRef<"AnswerPaper", 'String'>
    readonly topicId: FieldRef<"AnswerPaper", 'String'>
    readonly subtopicId: FieldRef<"AnswerPaper", 'String'>
    readonly questionpaperId: FieldRef<"AnswerPaper", 'String'>
    readonly finalscore: FieldRef<"AnswerPaper", 'Float'>
    readonly createdAt: FieldRef<"AnswerPaper", 'DateTime'>
    readonly updatedAt: FieldRef<"AnswerPaper", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnswerPaper findUnique
   */
  export type AnswerPaperFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerPaper
     */
    select?: AnswerPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerPaper
     */
    omit?: AnswerPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerPaperInclude<ExtArgs> | null
    /**
     * Filter, which AnswerPaper to fetch.
     */
    where: AnswerPaperWhereUniqueInput
  }

  /**
   * AnswerPaper findUniqueOrThrow
   */
  export type AnswerPaperFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerPaper
     */
    select?: AnswerPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerPaper
     */
    omit?: AnswerPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerPaperInclude<ExtArgs> | null
    /**
     * Filter, which AnswerPaper to fetch.
     */
    where: AnswerPaperWhereUniqueInput
  }

  /**
   * AnswerPaper findFirst
   */
  export type AnswerPaperFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerPaper
     */
    select?: AnswerPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerPaper
     */
    omit?: AnswerPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerPaperInclude<ExtArgs> | null
    /**
     * Filter, which AnswerPaper to fetch.
     */
    where?: AnswerPaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerPapers to fetch.
     */
    orderBy?: AnswerPaperOrderByWithRelationInput | AnswerPaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnswerPapers.
     */
    cursor?: AnswerPaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerPapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerPapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnswerPapers.
     */
    distinct?: AnswerPaperScalarFieldEnum | AnswerPaperScalarFieldEnum[]
  }

  /**
   * AnswerPaper findFirstOrThrow
   */
  export type AnswerPaperFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerPaper
     */
    select?: AnswerPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerPaper
     */
    omit?: AnswerPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerPaperInclude<ExtArgs> | null
    /**
     * Filter, which AnswerPaper to fetch.
     */
    where?: AnswerPaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerPapers to fetch.
     */
    orderBy?: AnswerPaperOrderByWithRelationInput | AnswerPaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnswerPapers.
     */
    cursor?: AnswerPaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerPapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerPapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnswerPapers.
     */
    distinct?: AnswerPaperScalarFieldEnum | AnswerPaperScalarFieldEnum[]
  }

  /**
   * AnswerPaper findMany
   */
  export type AnswerPaperFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerPaper
     */
    select?: AnswerPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerPaper
     */
    omit?: AnswerPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerPaperInclude<ExtArgs> | null
    /**
     * Filter, which AnswerPapers to fetch.
     */
    where?: AnswerPaperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerPapers to fetch.
     */
    orderBy?: AnswerPaperOrderByWithRelationInput | AnswerPaperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnswerPapers.
     */
    cursor?: AnswerPaperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerPapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerPapers.
     */
    skip?: number
    distinct?: AnswerPaperScalarFieldEnum | AnswerPaperScalarFieldEnum[]
  }

  /**
   * AnswerPaper create
   */
  export type AnswerPaperCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerPaper
     */
    select?: AnswerPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerPaper
     */
    omit?: AnswerPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerPaperInclude<ExtArgs> | null
    /**
     * The data needed to create a AnswerPaper.
     */
    data: XOR<AnswerPaperCreateInput, AnswerPaperUncheckedCreateInput>
  }

  /**
   * AnswerPaper createMany
   */
  export type AnswerPaperCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnswerPapers.
     */
    data: AnswerPaperCreateManyInput | AnswerPaperCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnswerPaper createManyAndReturn
   */
  export type AnswerPaperCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerPaper
     */
    select?: AnswerPaperSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerPaper
     */
    omit?: AnswerPaperOmit<ExtArgs> | null
    /**
     * The data used to create many AnswerPapers.
     */
    data: AnswerPaperCreateManyInput | AnswerPaperCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerPaperIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnswerPaper update
   */
  export type AnswerPaperUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerPaper
     */
    select?: AnswerPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerPaper
     */
    omit?: AnswerPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerPaperInclude<ExtArgs> | null
    /**
     * The data needed to update a AnswerPaper.
     */
    data: XOR<AnswerPaperUpdateInput, AnswerPaperUncheckedUpdateInput>
    /**
     * Choose, which AnswerPaper to update.
     */
    where: AnswerPaperWhereUniqueInput
  }

  /**
   * AnswerPaper updateMany
   */
  export type AnswerPaperUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnswerPapers.
     */
    data: XOR<AnswerPaperUpdateManyMutationInput, AnswerPaperUncheckedUpdateManyInput>
    /**
     * Filter which AnswerPapers to update
     */
    where?: AnswerPaperWhereInput
    /**
     * Limit how many AnswerPapers to update.
     */
    limit?: number
  }

  /**
   * AnswerPaper updateManyAndReturn
   */
  export type AnswerPaperUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerPaper
     */
    select?: AnswerPaperSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerPaper
     */
    omit?: AnswerPaperOmit<ExtArgs> | null
    /**
     * The data used to update AnswerPapers.
     */
    data: XOR<AnswerPaperUpdateManyMutationInput, AnswerPaperUncheckedUpdateManyInput>
    /**
     * Filter which AnswerPapers to update
     */
    where?: AnswerPaperWhereInput
    /**
     * Limit how many AnswerPapers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerPaperIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnswerPaper upsert
   */
  export type AnswerPaperUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerPaper
     */
    select?: AnswerPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerPaper
     */
    omit?: AnswerPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerPaperInclude<ExtArgs> | null
    /**
     * The filter to search for the AnswerPaper to update in case it exists.
     */
    where: AnswerPaperWhereUniqueInput
    /**
     * In case the AnswerPaper found by the `where` argument doesn't exist, create a new AnswerPaper with this data.
     */
    create: XOR<AnswerPaperCreateInput, AnswerPaperUncheckedCreateInput>
    /**
     * In case the AnswerPaper was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerPaperUpdateInput, AnswerPaperUncheckedUpdateInput>
  }

  /**
   * AnswerPaper delete
   */
  export type AnswerPaperDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerPaper
     */
    select?: AnswerPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerPaper
     */
    omit?: AnswerPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerPaperInclude<ExtArgs> | null
    /**
     * Filter which AnswerPaper to delete.
     */
    where: AnswerPaperWhereUniqueInput
  }

  /**
   * AnswerPaper deleteMany
   */
  export type AnswerPaperDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnswerPapers to delete
     */
    where?: AnswerPaperWhereInput
    /**
     * Limit how many AnswerPapers to delete.
     */
    limit?: number
  }

  /**
   * AnswerPaper.subtopic
   */
  export type AnswerPaper$subtopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtopic
     */
    select?: SubtopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subtopic
     */
    omit?: SubtopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtopicInclude<ExtArgs> | null
    where?: SubtopicWhereInput
  }

  /**
   * AnswerPaper.answers
   */
  export type AnswerPaper$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * AnswerPaper without action
   */
  export type AnswerPaperDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerPaper
     */
    select?: AnswerPaperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerPaper
     */
    omit?: AnswerPaperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerPaperInclude<ExtArgs> | null
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
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TopicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum]


  export const SubtopicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    topicId: 'topicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubtopicScalarFieldEnum = (typeof SubtopicScalarFieldEnum)[keyof typeof SubtopicScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    topicId: 'topicId',
    subtopicId: 'subtopicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    position: 'position',
    questionpaperId: 'questionpaperId',
    createdAt: 'createdAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    text: 'text',
    mark: 'mark',
    llmRemark: 'llmRemark',
    strengths: 'strengths',
    weaknesses: 'weaknesses',
    questionId: 'questionId',
    answerpaperId: 'answerpaperId',
    createdAt: 'createdAt'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const QuestionPaperScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    topicId: 'topicId',
    subtopicId: 'subtopicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionPaperScalarFieldEnum = (typeof QuestionPaperScalarFieldEnum)[keyof typeof QuestionPaperScalarFieldEnum]


  export const AnswerPaperScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    topicId: 'topicId',
    subtopicId: 'subtopicId',
    questionpaperId: 'questionpaperId',
    finalscore: 'finalscore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnswerPaperScalarFieldEnum = (typeof AnswerPaperScalarFieldEnum)[keyof typeof AnswerPaperScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    documents?: DocumentListRelationFilter
    questionpapers?: QuestionPaperListRelationFilter
    answerpapers?: AnswerPaperListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    documents?: DocumentOrderByRelationAggregateInput
    questionpapers?: QuestionPaperOrderByRelationAggregateInput
    answerpapers?: AnswerPaperOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    documents?: DocumentListRelationFilter
    questionpapers?: QuestionPaperListRelationFilter
    answerpapers?: AnswerPaperListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TopicWhereInput = {
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    id?: StringFilter<"Topic"> | string
    name?: StringFilter<"Topic"> | string
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
    documents?: DocumentListRelationFilter
    subtopic?: SubtopicListRelationFilter
    questionpapers?: QuestionPaperListRelationFilter
    answerpapers?: AnswerPaperListRelationFilter
  }

  export type TopicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    documents?: DocumentOrderByRelationAggregateInput
    subtopic?: SubtopicOrderByRelationAggregateInput
    questionpapers?: QuestionPaperOrderByRelationAggregateInput
    answerpapers?: AnswerPaperOrderByRelationAggregateInput
  }

  export type TopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
    documents?: DocumentListRelationFilter
    subtopic?: SubtopicListRelationFilter
    questionpapers?: QuestionPaperListRelationFilter
    answerpapers?: AnswerPaperListRelationFilter
  }, "id" | "name">

  export type TopicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TopicCountOrderByAggregateInput
    _max?: TopicMaxOrderByAggregateInput
    _min?: TopicMinOrderByAggregateInput
  }

  export type TopicScalarWhereWithAggregatesInput = {
    AND?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    OR?: TopicScalarWhereWithAggregatesInput[]
    NOT?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Topic"> | string
    name?: StringWithAggregatesFilter<"Topic"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
  }

  export type SubtopicWhereInput = {
    AND?: SubtopicWhereInput | SubtopicWhereInput[]
    OR?: SubtopicWhereInput[]
    NOT?: SubtopicWhereInput | SubtopicWhereInput[]
    id?: StringFilter<"Subtopic"> | string
    name?: StringFilter<"Subtopic"> | string
    topicId?: StringFilter<"Subtopic"> | string
    createdAt?: DateTimeFilter<"Subtopic"> | Date | string
    updatedAt?: DateTimeFilter<"Subtopic"> | Date | string
    documents?: DocumentListRelationFilter
    questionpapers?: QuestionPaperListRelationFilter
    answerpapers?: AnswerPaperListRelationFilter
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }

  export type SubtopicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    documents?: DocumentOrderByRelationAggregateInput
    questionpapers?: QuestionPaperOrderByRelationAggregateInput
    answerpapers?: AnswerPaperOrderByRelationAggregateInput
    topic?: TopicOrderByWithRelationInput
  }

  export type SubtopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SubtopicWhereInput | SubtopicWhereInput[]
    OR?: SubtopicWhereInput[]
    NOT?: SubtopicWhereInput | SubtopicWhereInput[]
    topicId?: StringFilter<"Subtopic"> | string
    createdAt?: DateTimeFilter<"Subtopic"> | Date | string
    updatedAt?: DateTimeFilter<"Subtopic"> | Date | string
    documents?: DocumentListRelationFilter
    questionpapers?: QuestionPaperListRelationFilter
    answerpapers?: AnswerPaperListRelationFilter
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }, "id" | "name">

  export type SubtopicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubtopicCountOrderByAggregateInput
    _max?: SubtopicMaxOrderByAggregateInput
    _min?: SubtopicMinOrderByAggregateInput
  }

  export type SubtopicScalarWhereWithAggregatesInput = {
    AND?: SubtopicScalarWhereWithAggregatesInput | SubtopicScalarWhereWithAggregatesInput[]
    OR?: SubtopicScalarWhereWithAggregatesInput[]
    NOT?: SubtopicScalarWhereWithAggregatesInput | SubtopicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subtopic"> | string
    name?: StringWithAggregatesFilter<"Subtopic"> | string
    topicId?: StringWithAggregatesFilter<"Subtopic"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Subtopic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subtopic"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    userId?: StringFilter<"Document"> | string
    topicId?: StringFilter<"Document"> | string
    subtopicId?: StringFilter<"Document"> | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
    subtopic?: XOR<SubtopicNullableScalarRelationFilter, SubtopicWhereInput> | null
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    subtopicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    topic?: TopicOrderByWithRelationInput
    subtopic?: SubtopicOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    userId?: StringFilter<"Document"> | string
    topicId?: StringFilter<"Document"> | string
    subtopicId?: StringFilter<"Document"> | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
    subtopic?: XOR<SubtopicNullableScalarRelationFilter, SubtopicWhereInput> | null
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    subtopicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    userId?: StringWithAggregatesFilter<"Document"> | string
    topicId?: StringWithAggregatesFilter<"Document"> | string
    subtopicId?: StringWithAggregatesFilter<"Document"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    position?: IntFilter<"Question"> | number
    questionpaperId?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    questionpaper?: XOR<QuestionPaperScalarRelationFilter, QuestionPaperWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    position?: SortOrder
    questionpaperId?: SortOrder
    createdAt?: SortOrder
    questionpaper?: QuestionPaperOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    text?: StringFilter<"Question"> | string
    position?: IntFilter<"Question"> | number
    questionpaperId?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    questionpaper?: XOR<QuestionPaperScalarRelationFilter, QuestionPaperWhereInput>
    answers?: AnswerListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    position?: SortOrder
    questionpaperId?: SortOrder
    createdAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    text?: StringWithAggregatesFilter<"Question"> | string
    position?: IntWithAggregatesFilter<"Question"> | number
    questionpaperId?: StringWithAggregatesFilter<"Question"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: StringFilter<"Answer"> | string
    text?: StringFilter<"Answer"> | string
    mark?: FloatNullableFilter<"Answer"> | number | null
    llmRemark?: StringNullableFilter<"Answer"> | string | null
    strengths?: StringNullableFilter<"Answer"> | string | null
    weaknesses?: StringNullableFilter<"Answer"> | string | null
    questionId?: StringFilter<"Answer"> | string
    answerpaperId?: StringFilter<"Answer"> | string
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    answerpaper?: XOR<AnswerPaperScalarRelationFilter, AnswerPaperWhereInput>
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    mark?: SortOrderInput | SortOrder
    llmRemark?: SortOrderInput | SortOrder
    strengths?: SortOrderInput | SortOrder
    weaknesses?: SortOrderInput | SortOrder
    questionId?: SortOrder
    answerpaperId?: SortOrder
    createdAt?: SortOrder
    question?: QuestionOrderByWithRelationInput
    answerpaper?: AnswerPaperOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    answerpaperId_questionId?: AnswerAnswerpaperIdQuestionIdCompoundUniqueInput
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    text?: StringFilter<"Answer"> | string
    mark?: FloatNullableFilter<"Answer"> | number | null
    llmRemark?: StringNullableFilter<"Answer"> | string | null
    strengths?: StringNullableFilter<"Answer"> | string | null
    weaknesses?: StringNullableFilter<"Answer"> | string | null
    questionId?: StringFilter<"Answer"> | string
    answerpaperId?: StringFilter<"Answer"> | string
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    answerpaper?: XOR<AnswerPaperScalarRelationFilter, AnswerPaperWhereInput>
  }, "id" | "answerpaperId_questionId">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    mark?: SortOrderInput | SortOrder
    llmRemark?: SortOrderInput | SortOrder
    strengths?: SortOrderInput | SortOrder
    weaknesses?: SortOrderInput | SortOrder
    questionId?: SortOrder
    answerpaperId?: SortOrder
    createdAt?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Answer"> | string
    text?: StringWithAggregatesFilter<"Answer"> | string
    mark?: FloatNullableWithAggregatesFilter<"Answer"> | number | null
    llmRemark?: StringNullableWithAggregatesFilter<"Answer"> | string | null
    strengths?: StringNullableWithAggregatesFilter<"Answer"> | string | null
    weaknesses?: StringNullableWithAggregatesFilter<"Answer"> | string | null
    questionId?: StringWithAggregatesFilter<"Answer"> | string
    answerpaperId?: StringWithAggregatesFilter<"Answer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
  }

  export type QuestionPaperWhereInput = {
    AND?: QuestionPaperWhereInput | QuestionPaperWhereInput[]
    OR?: QuestionPaperWhereInput[]
    NOT?: QuestionPaperWhereInput | QuestionPaperWhereInput[]
    id?: StringFilter<"QuestionPaper"> | string
    userId?: StringFilter<"QuestionPaper"> | string
    topicId?: StringFilter<"QuestionPaper"> | string
    subtopicId?: StringNullableFilter<"QuestionPaper"> | string | null
    createdAt?: DateTimeFilter<"QuestionPaper"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionPaper"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
    subtopic?: XOR<SubtopicNullableScalarRelationFilter, SubtopicWhereInput> | null
    answerpapers?: AnswerPaperListRelationFilter
    questions?: QuestionListRelationFilter
  }

  export type QuestionPaperOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    subtopicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    topic?: TopicOrderByWithRelationInput
    subtopic?: SubtopicOrderByWithRelationInput
    answerpapers?: AnswerPaperOrderByRelationAggregateInput
    questions?: QuestionOrderByRelationAggregateInput
  }

  export type QuestionPaperWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionPaperWhereInput | QuestionPaperWhereInput[]
    OR?: QuestionPaperWhereInput[]
    NOT?: QuestionPaperWhereInput | QuestionPaperWhereInput[]
    userId?: StringFilter<"QuestionPaper"> | string
    topicId?: StringFilter<"QuestionPaper"> | string
    subtopicId?: StringNullableFilter<"QuestionPaper"> | string | null
    createdAt?: DateTimeFilter<"QuestionPaper"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionPaper"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
    subtopic?: XOR<SubtopicNullableScalarRelationFilter, SubtopicWhereInput> | null
    answerpapers?: AnswerPaperListRelationFilter
    questions?: QuestionListRelationFilter
  }, "id">

  export type QuestionPaperOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    subtopicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionPaperCountOrderByAggregateInput
    _max?: QuestionPaperMaxOrderByAggregateInput
    _min?: QuestionPaperMinOrderByAggregateInput
  }

  export type QuestionPaperScalarWhereWithAggregatesInput = {
    AND?: QuestionPaperScalarWhereWithAggregatesInput | QuestionPaperScalarWhereWithAggregatesInput[]
    OR?: QuestionPaperScalarWhereWithAggregatesInput[]
    NOT?: QuestionPaperScalarWhereWithAggregatesInput | QuestionPaperScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestionPaper"> | string
    userId?: StringWithAggregatesFilter<"QuestionPaper"> | string
    topicId?: StringWithAggregatesFilter<"QuestionPaper"> | string
    subtopicId?: StringNullableWithAggregatesFilter<"QuestionPaper"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QuestionPaper"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuestionPaper"> | Date | string
  }

  export type AnswerPaperWhereInput = {
    AND?: AnswerPaperWhereInput | AnswerPaperWhereInput[]
    OR?: AnswerPaperWhereInput[]
    NOT?: AnswerPaperWhereInput | AnswerPaperWhereInput[]
    id?: StringFilter<"AnswerPaper"> | string
    userId?: StringFilter<"AnswerPaper"> | string
    topicId?: StringFilter<"AnswerPaper"> | string
    subtopicId?: StringNullableFilter<"AnswerPaper"> | string | null
    questionpaperId?: StringFilter<"AnswerPaper"> | string
    finalscore?: FloatNullableFilter<"AnswerPaper"> | number | null
    createdAt?: DateTimeFilter<"AnswerPaper"> | Date | string
    updatedAt?: DateTimeFilter<"AnswerPaper"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
    subtopic?: XOR<SubtopicNullableScalarRelationFilter, SubtopicWhereInput> | null
    questionpaper?: XOR<QuestionPaperScalarRelationFilter, QuestionPaperWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type AnswerPaperOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    subtopicId?: SortOrderInput | SortOrder
    questionpaperId?: SortOrder
    finalscore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    topic?: TopicOrderByWithRelationInput
    subtopic?: SubtopicOrderByWithRelationInput
    questionpaper?: QuestionPaperOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type AnswerPaperWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnswerPaperWhereInput | AnswerPaperWhereInput[]
    OR?: AnswerPaperWhereInput[]
    NOT?: AnswerPaperWhereInput | AnswerPaperWhereInput[]
    userId?: StringFilter<"AnswerPaper"> | string
    topicId?: StringFilter<"AnswerPaper"> | string
    subtopicId?: StringNullableFilter<"AnswerPaper"> | string | null
    questionpaperId?: StringFilter<"AnswerPaper"> | string
    finalscore?: FloatNullableFilter<"AnswerPaper"> | number | null
    createdAt?: DateTimeFilter<"AnswerPaper"> | Date | string
    updatedAt?: DateTimeFilter<"AnswerPaper"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
    subtopic?: XOR<SubtopicNullableScalarRelationFilter, SubtopicWhereInput> | null
    questionpaper?: XOR<QuestionPaperScalarRelationFilter, QuestionPaperWhereInput>
    answers?: AnswerListRelationFilter
  }, "id">

  export type AnswerPaperOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    subtopicId?: SortOrderInput | SortOrder
    questionpaperId?: SortOrder
    finalscore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnswerPaperCountOrderByAggregateInput
    _avg?: AnswerPaperAvgOrderByAggregateInput
    _max?: AnswerPaperMaxOrderByAggregateInput
    _min?: AnswerPaperMinOrderByAggregateInput
    _sum?: AnswerPaperSumOrderByAggregateInput
  }

  export type AnswerPaperScalarWhereWithAggregatesInput = {
    AND?: AnswerPaperScalarWhereWithAggregatesInput | AnswerPaperScalarWhereWithAggregatesInput[]
    OR?: AnswerPaperScalarWhereWithAggregatesInput[]
    NOT?: AnswerPaperScalarWhereWithAggregatesInput | AnswerPaperScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnswerPaper"> | string
    userId?: StringWithAggregatesFilter<"AnswerPaper"> | string
    topicId?: StringWithAggregatesFilter<"AnswerPaper"> | string
    subtopicId?: StringNullableWithAggregatesFilter<"AnswerPaper"> | string | null
    questionpaperId?: StringWithAggregatesFilter<"AnswerPaper"> | string
    finalscore?: FloatNullableWithAggregatesFilter<"AnswerPaper"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"AnswerPaper"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AnswerPaper"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutUserInput
    questionpapers?: QuestionPaperCreateNestedManyWithoutUserInput
    answerpapers?: AnswerPaperCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    questionpapers?: QuestionPaperUncheckedCreateNestedManyWithoutUserInput
    answerpapers?: AnswerPaperUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutUserNestedInput
    questionpapers?: QuestionPaperUpdateManyWithoutUserNestedInput
    answerpapers?: AnswerPaperUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    questionpapers?: QuestionPaperUncheckedUpdateManyWithoutUserNestedInput
    answerpapers?: AnswerPaperUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutTopicInput
    subtopic?: SubtopicCreateNestedManyWithoutTopicInput
    questionpapers?: QuestionPaperCreateNestedManyWithoutTopicInput
    answerpapers?: AnswerPaperCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutTopicInput
    subtopic?: SubtopicUncheckedCreateNestedManyWithoutTopicInput
    questionpapers?: QuestionPaperUncheckedCreateNestedManyWithoutTopicInput
    answerpapers?: AnswerPaperUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutTopicNestedInput
    subtopic?: SubtopicUpdateManyWithoutTopicNestedInput
    questionpapers?: QuestionPaperUpdateManyWithoutTopicNestedInput
    answerpapers?: AnswerPaperUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutTopicNestedInput
    subtopic?: SubtopicUncheckedUpdateManyWithoutTopicNestedInput
    questionpapers?: QuestionPaperUncheckedUpdateManyWithoutTopicNestedInput
    answerpapers?: AnswerPaperUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtopicCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutSubtopicInput
    questionpapers?: QuestionPaperCreateNestedManyWithoutSubtopicInput
    answerpapers?: AnswerPaperCreateNestedManyWithoutSubtopicInput
    topic: TopicCreateNestedOneWithoutSubtopicInput
  }

  export type SubtopicUncheckedCreateInput = {
    id?: string
    name: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutSubtopicInput
    questionpapers?: QuestionPaperUncheckedCreateNestedManyWithoutSubtopicInput
    answerpapers?: AnswerPaperUncheckedCreateNestedManyWithoutSubtopicInput
  }

  export type SubtopicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutSubtopicNestedInput
    questionpapers?: QuestionPaperUpdateManyWithoutSubtopicNestedInput
    answerpapers?: AnswerPaperUpdateManyWithoutSubtopicNestedInput
    topic?: TopicUpdateOneRequiredWithoutSubtopicNestedInput
  }

  export type SubtopicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutSubtopicNestedInput
    questionpapers?: QuestionPaperUncheckedUpdateManyWithoutSubtopicNestedInput
    answerpapers?: AnswerPaperUncheckedUpdateManyWithoutSubtopicNestedInput
  }

  export type SubtopicCreateManyInput = {
    id?: string
    name: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubtopicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtopicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDocumentsInput
    topic: TopicCreateNestedOneWithoutDocumentsInput
    subtopic?: SubtopicCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    userId: string
    topicId: string
    subtopicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    topic?: TopicUpdateOneRequiredWithoutDocumentsNestedInput
    subtopic?: SubtopicUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    subtopicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    userId: string
    topicId: string
    subtopicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    subtopicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    text: string
    position: number
    createdAt?: Date | string
    questionpaper: QuestionPaperCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    text: string
    position: number
    questionpaperId: string
    createdAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionpaper?: QuestionPaperUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    questionpaperId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    text: string
    position: number
    questionpaperId: string
    createdAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    questionpaperId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateInput = {
    id?: string
    text: string
    mark?: number | null
    llmRemark?: string | null
    strengths?: string | null
    weaknesses?: string | null
    createdAt?: Date | string
    question: QuestionCreateNestedOneWithoutAnswersInput
    answerpaper: AnswerPaperCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    text: string
    mark?: number | null
    llmRemark?: string | null
    strengths?: string | null
    weaknesses?: string | null
    questionId: string
    answerpaperId: string
    createdAt?: Date | string
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    mark?: NullableFloatFieldUpdateOperationsInput | number | null
    llmRemark?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    weaknesses?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    answerpaper?: AnswerPaperUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    mark?: NullableFloatFieldUpdateOperationsInput | number | null
    llmRemark?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    weaknesses?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: StringFieldUpdateOperationsInput | string
    answerpaperId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyInput = {
    id?: string
    text: string
    mark?: number | null
    llmRemark?: string | null
    strengths?: string | null
    weaknesses?: string | null
    questionId: string
    answerpaperId: string
    createdAt?: Date | string
  }

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    mark?: NullableFloatFieldUpdateOperationsInput | number | null
    llmRemark?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    weaknesses?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    mark?: NullableFloatFieldUpdateOperationsInput | number | null
    llmRemark?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    weaknesses?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: StringFieldUpdateOperationsInput | string
    answerpaperId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionPaperCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutQuestionpapersInput
    topic: TopicCreateNestedOneWithoutQuestionpapersInput
    subtopic?: SubtopicCreateNestedOneWithoutQuestionpapersInput
    answerpapers?: AnswerPaperCreateNestedManyWithoutQuestionpaperInput
    questions?: QuestionCreateNestedManyWithoutQuestionpaperInput
  }

  export type QuestionPaperUncheckedCreateInput = {
    id?: string
    userId: string
    topicId: string
    subtopicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answerpapers?: AnswerPaperUncheckedCreateNestedManyWithoutQuestionpaperInput
    questions?: QuestionUncheckedCreateNestedManyWithoutQuestionpaperInput
  }

  export type QuestionPaperUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuestionpapersNestedInput
    topic?: TopicUpdateOneRequiredWithoutQuestionpapersNestedInput
    subtopic?: SubtopicUpdateOneWithoutQuestionpapersNestedInput
    answerpapers?: AnswerPaperUpdateManyWithoutQuestionpaperNestedInput
    questions?: QuestionUpdateManyWithoutQuestionpaperNestedInput
  }

  export type QuestionPaperUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerpapers?: AnswerPaperUncheckedUpdateManyWithoutQuestionpaperNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutQuestionpaperNestedInput
  }

  export type QuestionPaperCreateManyInput = {
    id?: string
    userId: string
    topicId: string
    subtopicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionPaperUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionPaperUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerPaperCreateInput = {
    id?: string
    finalscore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnswerpapersInput
    topic: TopicCreateNestedOneWithoutAnswerpapersInput
    subtopic?: SubtopicCreateNestedOneWithoutAnswerpapersInput
    questionpaper: QuestionPaperCreateNestedOneWithoutAnswerpapersInput
    answers?: AnswerCreateNestedManyWithoutAnswerpaperInput
  }

  export type AnswerPaperUncheckedCreateInput = {
    id?: string
    userId: string
    topicId: string
    subtopicId?: string | null
    questionpaperId: string
    finalscore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutAnswerpaperInput
  }

  export type AnswerPaperUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalscore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnswerpapersNestedInput
    topic?: TopicUpdateOneRequiredWithoutAnswerpapersNestedInput
    subtopic?: SubtopicUpdateOneWithoutAnswerpapersNestedInput
    questionpaper?: QuestionPaperUpdateOneRequiredWithoutAnswerpapersNestedInput
    answers?: AnswerUpdateManyWithoutAnswerpaperNestedInput
  }

  export type AnswerPaperUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    questionpaperId?: StringFieldUpdateOperationsInput | string
    finalscore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutAnswerpaperNestedInput
  }

  export type AnswerPaperCreateManyInput = {
    id?: string
    userId: string
    topicId: string
    subtopicId?: string | null
    questionpaperId: string
    finalscore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerPaperUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalscore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerPaperUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    questionpaperId?: StringFieldUpdateOperationsInput | string
    finalscore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type QuestionPaperListRelationFilter = {
    every?: QuestionPaperWhereInput
    some?: QuestionPaperWhereInput
    none?: QuestionPaperWhereInput
  }

  export type AnswerPaperListRelationFilter = {
    every?: AnswerPaperWhereInput
    some?: AnswerPaperWhereInput
    none?: AnswerPaperWhereInput
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionPaperOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerPaperOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type SubtopicListRelationFilter = {
    every?: SubtopicWhereInput
    some?: SubtopicWhereInput
    none?: SubtopicWhereInput
  }

  export type SubtopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopicScalarRelationFilter = {
    is?: TopicWhereInput
    isNot?: TopicWhereInput
  }

  export type SubtopicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubtopicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubtopicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubtopicNullableScalarRelationFilter = {
    is?: SubtopicWhereInput | null
    isNot?: SubtopicWhereInput | null
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    subtopicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    subtopicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    subtopicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type QuestionPaperScalarRelationFilter = {
    is?: QuestionPaperWhereInput
    isNot?: QuestionPaperWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    position?: SortOrder
    questionpaperId?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    position?: SortOrder
    questionpaperId?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    position?: SortOrder
    questionpaperId?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AnswerPaperScalarRelationFilter = {
    is?: AnswerPaperWhereInput
    isNot?: AnswerPaperWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnswerAnswerpaperIdQuestionIdCompoundUniqueInput = {
    answerpaperId: string
    questionId: string
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    mark?: SortOrder
    llmRemark?: SortOrder
    strengths?: SortOrder
    weaknesses?: SortOrder
    questionId?: SortOrder
    answerpaperId?: SortOrder
    createdAt?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    mark?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    mark?: SortOrder
    llmRemark?: SortOrder
    strengths?: SortOrder
    weaknesses?: SortOrder
    questionId?: SortOrder
    answerpaperId?: SortOrder
    createdAt?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    mark?: SortOrder
    llmRemark?: SortOrder
    strengths?: SortOrder
    weaknesses?: SortOrder
    questionId?: SortOrder
    answerpaperId?: SortOrder
    createdAt?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    mark?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionPaperCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    subtopicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionPaperMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    subtopicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionPaperMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    subtopicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerPaperCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    subtopicId?: SortOrder
    questionpaperId?: SortOrder
    finalscore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerPaperAvgOrderByAggregateInput = {
    finalscore?: SortOrder
  }

  export type AnswerPaperMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    subtopicId?: SortOrder
    questionpaperId?: SortOrder
    finalscore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerPaperMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    subtopicId?: SortOrder
    questionpaperId?: SortOrder
    finalscore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerPaperSumOrderByAggregateInput = {
    finalscore?: SortOrder
  }

  export type DocumentCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type QuestionPaperCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionPaperCreateWithoutUserInput, QuestionPaperUncheckedCreateWithoutUserInput> | QuestionPaperCreateWithoutUserInput[] | QuestionPaperUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionPaperCreateOrConnectWithoutUserInput | QuestionPaperCreateOrConnectWithoutUserInput[]
    createMany?: QuestionPaperCreateManyUserInputEnvelope
    connect?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
  }

  export type AnswerPaperCreateNestedManyWithoutUserInput = {
    create?: XOR<AnswerPaperCreateWithoutUserInput, AnswerPaperUncheckedCreateWithoutUserInput> | AnswerPaperCreateWithoutUserInput[] | AnswerPaperUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerPaperCreateOrConnectWithoutUserInput | AnswerPaperCreateOrConnectWithoutUserInput[]
    createMany?: AnswerPaperCreateManyUserInputEnvelope
    connect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type QuestionPaperUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionPaperCreateWithoutUserInput, QuestionPaperUncheckedCreateWithoutUserInput> | QuestionPaperCreateWithoutUserInput[] | QuestionPaperUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionPaperCreateOrConnectWithoutUserInput | QuestionPaperCreateOrConnectWithoutUserInput[]
    createMany?: QuestionPaperCreateManyUserInputEnvelope
    connect?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
  }

  export type AnswerPaperUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnswerPaperCreateWithoutUserInput, AnswerPaperUncheckedCreateWithoutUserInput> | AnswerPaperCreateWithoutUserInput[] | AnswerPaperUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerPaperCreateOrConnectWithoutUserInput | AnswerPaperCreateOrConnectWithoutUserInput[]
    createMany?: AnswerPaperCreateManyUserInputEnvelope
    connect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DocumentUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUserInput | DocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUserInput | DocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUserInput | DocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type QuestionPaperUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionPaperCreateWithoutUserInput, QuestionPaperUncheckedCreateWithoutUserInput> | QuestionPaperCreateWithoutUserInput[] | QuestionPaperUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionPaperCreateOrConnectWithoutUserInput | QuestionPaperCreateOrConnectWithoutUserInput[]
    upsert?: QuestionPaperUpsertWithWhereUniqueWithoutUserInput | QuestionPaperUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionPaperCreateManyUserInputEnvelope
    set?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    disconnect?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    delete?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    connect?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    update?: QuestionPaperUpdateWithWhereUniqueWithoutUserInput | QuestionPaperUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionPaperUpdateManyWithWhereWithoutUserInput | QuestionPaperUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionPaperScalarWhereInput | QuestionPaperScalarWhereInput[]
  }

  export type AnswerPaperUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnswerPaperCreateWithoutUserInput, AnswerPaperUncheckedCreateWithoutUserInput> | AnswerPaperCreateWithoutUserInput[] | AnswerPaperUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerPaperCreateOrConnectWithoutUserInput | AnswerPaperCreateOrConnectWithoutUserInput[]
    upsert?: AnswerPaperUpsertWithWhereUniqueWithoutUserInput | AnswerPaperUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnswerPaperCreateManyUserInputEnvelope
    set?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    disconnect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    delete?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    connect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    update?: AnswerPaperUpdateWithWhereUniqueWithoutUserInput | AnswerPaperUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnswerPaperUpdateManyWithWhereWithoutUserInput | AnswerPaperUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnswerPaperScalarWhereInput | AnswerPaperScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUserInput | DocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUserInput | DocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUserInput | DocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type QuestionPaperUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionPaperCreateWithoutUserInput, QuestionPaperUncheckedCreateWithoutUserInput> | QuestionPaperCreateWithoutUserInput[] | QuestionPaperUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionPaperCreateOrConnectWithoutUserInput | QuestionPaperCreateOrConnectWithoutUserInput[]
    upsert?: QuestionPaperUpsertWithWhereUniqueWithoutUserInput | QuestionPaperUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionPaperCreateManyUserInputEnvelope
    set?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    disconnect?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    delete?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    connect?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    update?: QuestionPaperUpdateWithWhereUniqueWithoutUserInput | QuestionPaperUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionPaperUpdateManyWithWhereWithoutUserInput | QuestionPaperUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionPaperScalarWhereInput | QuestionPaperScalarWhereInput[]
  }

  export type AnswerPaperUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnswerPaperCreateWithoutUserInput, AnswerPaperUncheckedCreateWithoutUserInput> | AnswerPaperCreateWithoutUserInput[] | AnswerPaperUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerPaperCreateOrConnectWithoutUserInput | AnswerPaperCreateOrConnectWithoutUserInput[]
    upsert?: AnswerPaperUpsertWithWhereUniqueWithoutUserInput | AnswerPaperUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnswerPaperCreateManyUserInputEnvelope
    set?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    disconnect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    delete?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    connect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    update?: AnswerPaperUpdateWithWhereUniqueWithoutUserInput | AnswerPaperUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnswerPaperUpdateManyWithWhereWithoutUserInput | AnswerPaperUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnswerPaperScalarWhereInput | AnswerPaperScalarWhereInput[]
  }

  export type DocumentCreateNestedManyWithoutTopicInput = {
    create?: XOR<DocumentCreateWithoutTopicInput, DocumentUncheckedCreateWithoutTopicInput> | DocumentCreateWithoutTopicInput[] | DocumentUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutTopicInput | DocumentCreateOrConnectWithoutTopicInput[]
    createMany?: DocumentCreateManyTopicInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type SubtopicCreateNestedManyWithoutTopicInput = {
    create?: XOR<SubtopicCreateWithoutTopicInput, SubtopicUncheckedCreateWithoutTopicInput> | SubtopicCreateWithoutTopicInput[] | SubtopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SubtopicCreateOrConnectWithoutTopicInput | SubtopicCreateOrConnectWithoutTopicInput[]
    createMany?: SubtopicCreateManyTopicInputEnvelope
    connect?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
  }

  export type QuestionPaperCreateNestedManyWithoutTopicInput = {
    create?: XOR<QuestionPaperCreateWithoutTopicInput, QuestionPaperUncheckedCreateWithoutTopicInput> | QuestionPaperCreateWithoutTopicInput[] | QuestionPaperUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QuestionPaperCreateOrConnectWithoutTopicInput | QuestionPaperCreateOrConnectWithoutTopicInput[]
    createMany?: QuestionPaperCreateManyTopicInputEnvelope
    connect?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
  }

  export type AnswerPaperCreateNestedManyWithoutTopicInput = {
    create?: XOR<AnswerPaperCreateWithoutTopicInput, AnswerPaperUncheckedCreateWithoutTopicInput> | AnswerPaperCreateWithoutTopicInput[] | AnswerPaperUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: AnswerPaperCreateOrConnectWithoutTopicInput | AnswerPaperCreateOrConnectWithoutTopicInput[]
    createMany?: AnswerPaperCreateManyTopicInputEnvelope
    connect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<DocumentCreateWithoutTopicInput, DocumentUncheckedCreateWithoutTopicInput> | DocumentCreateWithoutTopicInput[] | DocumentUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutTopicInput | DocumentCreateOrConnectWithoutTopicInput[]
    createMany?: DocumentCreateManyTopicInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type SubtopicUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<SubtopicCreateWithoutTopicInput, SubtopicUncheckedCreateWithoutTopicInput> | SubtopicCreateWithoutTopicInput[] | SubtopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SubtopicCreateOrConnectWithoutTopicInput | SubtopicCreateOrConnectWithoutTopicInput[]
    createMany?: SubtopicCreateManyTopicInputEnvelope
    connect?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
  }

  export type QuestionPaperUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<QuestionPaperCreateWithoutTopicInput, QuestionPaperUncheckedCreateWithoutTopicInput> | QuestionPaperCreateWithoutTopicInput[] | QuestionPaperUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QuestionPaperCreateOrConnectWithoutTopicInput | QuestionPaperCreateOrConnectWithoutTopicInput[]
    createMany?: QuestionPaperCreateManyTopicInputEnvelope
    connect?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
  }

  export type AnswerPaperUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<AnswerPaperCreateWithoutTopicInput, AnswerPaperUncheckedCreateWithoutTopicInput> | AnswerPaperCreateWithoutTopicInput[] | AnswerPaperUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: AnswerPaperCreateOrConnectWithoutTopicInput | AnswerPaperCreateOrConnectWithoutTopicInput[]
    createMany?: AnswerPaperCreateManyTopicInputEnvelope
    connect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
  }

  export type DocumentUpdateManyWithoutTopicNestedInput = {
    create?: XOR<DocumentCreateWithoutTopicInput, DocumentUncheckedCreateWithoutTopicInput> | DocumentCreateWithoutTopicInput[] | DocumentUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutTopicInput | DocumentCreateOrConnectWithoutTopicInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutTopicInput | DocumentUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: DocumentCreateManyTopicInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutTopicInput | DocumentUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutTopicInput | DocumentUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type SubtopicUpdateManyWithoutTopicNestedInput = {
    create?: XOR<SubtopicCreateWithoutTopicInput, SubtopicUncheckedCreateWithoutTopicInput> | SubtopicCreateWithoutTopicInput[] | SubtopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SubtopicCreateOrConnectWithoutTopicInput | SubtopicCreateOrConnectWithoutTopicInput[]
    upsert?: SubtopicUpsertWithWhereUniqueWithoutTopicInput | SubtopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: SubtopicCreateManyTopicInputEnvelope
    set?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    disconnect?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    delete?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    connect?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    update?: SubtopicUpdateWithWhereUniqueWithoutTopicInput | SubtopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: SubtopicUpdateManyWithWhereWithoutTopicInput | SubtopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: SubtopicScalarWhereInput | SubtopicScalarWhereInput[]
  }

  export type QuestionPaperUpdateManyWithoutTopicNestedInput = {
    create?: XOR<QuestionPaperCreateWithoutTopicInput, QuestionPaperUncheckedCreateWithoutTopicInput> | QuestionPaperCreateWithoutTopicInput[] | QuestionPaperUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QuestionPaperCreateOrConnectWithoutTopicInput | QuestionPaperCreateOrConnectWithoutTopicInput[]
    upsert?: QuestionPaperUpsertWithWhereUniqueWithoutTopicInput | QuestionPaperUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: QuestionPaperCreateManyTopicInputEnvelope
    set?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    disconnect?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    delete?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    connect?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    update?: QuestionPaperUpdateWithWhereUniqueWithoutTopicInput | QuestionPaperUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: QuestionPaperUpdateManyWithWhereWithoutTopicInput | QuestionPaperUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: QuestionPaperScalarWhereInput | QuestionPaperScalarWhereInput[]
  }

  export type AnswerPaperUpdateManyWithoutTopicNestedInput = {
    create?: XOR<AnswerPaperCreateWithoutTopicInput, AnswerPaperUncheckedCreateWithoutTopicInput> | AnswerPaperCreateWithoutTopicInput[] | AnswerPaperUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: AnswerPaperCreateOrConnectWithoutTopicInput | AnswerPaperCreateOrConnectWithoutTopicInput[]
    upsert?: AnswerPaperUpsertWithWhereUniqueWithoutTopicInput | AnswerPaperUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: AnswerPaperCreateManyTopicInputEnvelope
    set?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    disconnect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    delete?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    connect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    update?: AnswerPaperUpdateWithWhereUniqueWithoutTopicInput | AnswerPaperUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: AnswerPaperUpdateManyWithWhereWithoutTopicInput | AnswerPaperUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: AnswerPaperScalarWhereInput | AnswerPaperScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<DocumentCreateWithoutTopicInput, DocumentUncheckedCreateWithoutTopicInput> | DocumentCreateWithoutTopicInput[] | DocumentUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutTopicInput | DocumentCreateOrConnectWithoutTopicInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutTopicInput | DocumentUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: DocumentCreateManyTopicInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutTopicInput | DocumentUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutTopicInput | DocumentUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type SubtopicUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<SubtopicCreateWithoutTopicInput, SubtopicUncheckedCreateWithoutTopicInput> | SubtopicCreateWithoutTopicInput[] | SubtopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SubtopicCreateOrConnectWithoutTopicInput | SubtopicCreateOrConnectWithoutTopicInput[]
    upsert?: SubtopicUpsertWithWhereUniqueWithoutTopicInput | SubtopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: SubtopicCreateManyTopicInputEnvelope
    set?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    disconnect?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    delete?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    connect?: SubtopicWhereUniqueInput | SubtopicWhereUniqueInput[]
    update?: SubtopicUpdateWithWhereUniqueWithoutTopicInput | SubtopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: SubtopicUpdateManyWithWhereWithoutTopicInput | SubtopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: SubtopicScalarWhereInput | SubtopicScalarWhereInput[]
  }

  export type QuestionPaperUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<QuestionPaperCreateWithoutTopicInput, QuestionPaperUncheckedCreateWithoutTopicInput> | QuestionPaperCreateWithoutTopicInput[] | QuestionPaperUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QuestionPaperCreateOrConnectWithoutTopicInput | QuestionPaperCreateOrConnectWithoutTopicInput[]
    upsert?: QuestionPaperUpsertWithWhereUniqueWithoutTopicInput | QuestionPaperUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: QuestionPaperCreateManyTopicInputEnvelope
    set?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    disconnect?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    delete?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    connect?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    update?: QuestionPaperUpdateWithWhereUniqueWithoutTopicInput | QuestionPaperUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: QuestionPaperUpdateManyWithWhereWithoutTopicInput | QuestionPaperUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: QuestionPaperScalarWhereInput | QuestionPaperScalarWhereInput[]
  }

  export type AnswerPaperUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<AnswerPaperCreateWithoutTopicInput, AnswerPaperUncheckedCreateWithoutTopicInput> | AnswerPaperCreateWithoutTopicInput[] | AnswerPaperUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: AnswerPaperCreateOrConnectWithoutTopicInput | AnswerPaperCreateOrConnectWithoutTopicInput[]
    upsert?: AnswerPaperUpsertWithWhereUniqueWithoutTopicInput | AnswerPaperUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: AnswerPaperCreateManyTopicInputEnvelope
    set?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    disconnect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    delete?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    connect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    update?: AnswerPaperUpdateWithWhereUniqueWithoutTopicInput | AnswerPaperUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: AnswerPaperUpdateManyWithWhereWithoutTopicInput | AnswerPaperUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: AnswerPaperScalarWhereInput | AnswerPaperScalarWhereInput[]
  }

  export type DocumentCreateNestedManyWithoutSubtopicInput = {
    create?: XOR<DocumentCreateWithoutSubtopicInput, DocumentUncheckedCreateWithoutSubtopicInput> | DocumentCreateWithoutSubtopicInput[] | DocumentUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutSubtopicInput | DocumentCreateOrConnectWithoutSubtopicInput[]
    createMany?: DocumentCreateManySubtopicInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type QuestionPaperCreateNestedManyWithoutSubtopicInput = {
    create?: XOR<QuestionPaperCreateWithoutSubtopicInput, QuestionPaperUncheckedCreateWithoutSubtopicInput> | QuestionPaperCreateWithoutSubtopicInput[] | QuestionPaperUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: QuestionPaperCreateOrConnectWithoutSubtopicInput | QuestionPaperCreateOrConnectWithoutSubtopicInput[]
    createMany?: QuestionPaperCreateManySubtopicInputEnvelope
    connect?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
  }

  export type AnswerPaperCreateNestedManyWithoutSubtopicInput = {
    create?: XOR<AnswerPaperCreateWithoutSubtopicInput, AnswerPaperUncheckedCreateWithoutSubtopicInput> | AnswerPaperCreateWithoutSubtopicInput[] | AnswerPaperUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: AnswerPaperCreateOrConnectWithoutSubtopicInput | AnswerPaperCreateOrConnectWithoutSubtopicInput[]
    createMany?: AnswerPaperCreateManySubtopicInputEnvelope
    connect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
  }

  export type TopicCreateNestedOneWithoutSubtopicInput = {
    create?: XOR<TopicCreateWithoutSubtopicInput, TopicUncheckedCreateWithoutSubtopicInput>
    connectOrCreate?: TopicCreateOrConnectWithoutSubtopicInput
    connect?: TopicWhereUniqueInput
  }

  export type DocumentUncheckedCreateNestedManyWithoutSubtopicInput = {
    create?: XOR<DocumentCreateWithoutSubtopicInput, DocumentUncheckedCreateWithoutSubtopicInput> | DocumentCreateWithoutSubtopicInput[] | DocumentUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutSubtopicInput | DocumentCreateOrConnectWithoutSubtopicInput[]
    createMany?: DocumentCreateManySubtopicInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type QuestionPaperUncheckedCreateNestedManyWithoutSubtopicInput = {
    create?: XOR<QuestionPaperCreateWithoutSubtopicInput, QuestionPaperUncheckedCreateWithoutSubtopicInput> | QuestionPaperCreateWithoutSubtopicInput[] | QuestionPaperUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: QuestionPaperCreateOrConnectWithoutSubtopicInput | QuestionPaperCreateOrConnectWithoutSubtopicInput[]
    createMany?: QuestionPaperCreateManySubtopicInputEnvelope
    connect?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
  }

  export type AnswerPaperUncheckedCreateNestedManyWithoutSubtopicInput = {
    create?: XOR<AnswerPaperCreateWithoutSubtopicInput, AnswerPaperUncheckedCreateWithoutSubtopicInput> | AnswerPaperCreateWithoutSubtopicInput[] | AnswerPaperUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: AnswerPaperCreateOrConnectWithoutSubtopicInput | AnswerPaperCreateOrConnectWithoutSubtopicInput[]
    createMany?: AnswerPaperCreateManySubtopicInputEnvelope
    connect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
  }

  export type DocumentUpdateManyWithoutSubtopicNestedInput = {
    create?: XOR<DocumentCreateWithoutSubtopicInput, DocumentUncheckedCreateWithoutSubtopicInput> | DocumentCreateWithoutSubtopicInput[] | DocumentUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutSubtopicInput | DocumentCreateOrConnectWithoutSubtopicInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutSubtopicInput | DocumentUpsertWithWhereUniqueWithoutSubtopicInput[]
    createMany?: DocumentCreateManySubtopicInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutSubtopicInput | DocumentUpdateWithWhereUniqueWithoutSubtopicInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutSubtopicInput | DocumentUpdateManyWithWhereWithoutSubtopicInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type QuestionPaperUpdateManyWithoutSubtopicNestedInput = {
    create?: XOR<QuestionPaperCreateWithoutSubtopicInput, QuestionPaperUncheckedCreateWithoutSubtopicInput> | QuestionPaperCreateWithoutSubtopicInput[] | QuestionPaperUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: QuestionPaperCreateOrConnectWithoutSubtopicInput | QuestionPaperCreateOrConnectWithoutSubtopicInput[]
    upsert?: QuestionPaperUpsertWithWhereUniqueWithoutSubtopicInput | QuestionPaperUpsertWithWhereUniqueWithoutSubtopicInput[]
    createMany?: QuestionPaperCreateManySubtopicInputEnvelope
    set?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    disconnect?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    delete?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    connect?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    update?: QuestionPaperUpdateWithWhereUniqueWithoutSubtopicInput | QuestionPaperUpdateWithWhereUniqueWithoutSubtopicInput[]
    updateMany?: QuestionPaperUpdateManyWithWhereWithoutSubtopicInput | QuestionPaperUpdateManyWithWhereWithoutSubtopicInput[]
    deleteMany?: QuestionPaperScalarWhereInput | QuestionPaperScalarWhereInput[]
  }

  export type AnswerPaperUpdateManyWithoutSubtopicNestedInput = {
    create?: XOR<AnswerPaperCreateWithoutSubtopicInput, AnswerPaperUncheckedCreateWithoutSubtopicInput> | AnswerPaperCreateWithoutSubtopicInput[] | AnswerPaperUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: AnswerPaperCreateOrConnectWithoutSubtopicInput | AnswerPaperCreateOrConnectWithoutSubtopicInput[]
    upsert?: AnswerPaperUpsertWithWhereUniqueWithoutSubtopicInput | AnswerPaperUpsertWithWhereUniqueWithoutSubtopicInput[]
    createMany?: AnswerPaperCreateManySubtopicInputEnvelope
    set?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    disconnect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    delete?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    connect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    update?: AnswerPaperUpdateWithWhereUniqueWithoutSubtopicInput | AnswerPaperUpdateWithWhereUniqueWithoutSubtopicInput[]
    updateMany?: AnswerPaperUpdateManyWithWhereWithoutSubtopicInput | AnswerPaperUpdateManyWithWhereWithoutSubtopicInput[]
    deleteMany?: AnswerPaperScalarWhereInput | AnswerPaperScalarWhereInput[]
  }

  export type TopicUpdateOneRequiredWithoutSubtopicNestedInput = {
    create?: XOR<TopicCreateWithoutSubtopicInput, TopicUncheckedCreateWithoutSubtopicInput>
    connectOrCreate?: TopicCreateOrConnectWithoutSubtopicInput
    upsert?: TopicUpsertWithoutSubtopicInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutSubtopicInput, TopicUpdateWithoutSubtopicInput>, TopicUncheckedUpdateWithoutSubtopicInput>
  }

  export type DocumentUncheckedUpdateManyWithoutSubtopicNestedInput = {
    create?: XOR<DocumentCreateWithoutSubtopicInput, DocumentUncheckedCreateWithoutSubtopicInput> | DocumentCreateWithoutSubtopicInput[] | DocumentUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutSubtopicInput | DocumentCreateOrConnectWithoutSubtopicInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutSubtopicInput | DocumentUpsertWithWhereUniqueWithoutSubtopicInput[]
    createMany?: DocumentCreateManySubtopicInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutSubtopicInput | DocumentUpdateWithWhereUniqueWithoutSubtopicInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutSubtopicInput | DocumentUpdateManyWithWhereWithoutSubtopicInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type QuestionPaperUncheckedUpdateManyWithoutSubtopicNestedInput = {
    create?: XOR<QuestionPaperCreateWithoutSubtopicInput, QuestionPaperUncheckedCreateWithoutSubtopicInput> | QuestionPaperCreateWithoutSubtopicInput[] | QuestionPaperUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: QuestionPaperCreateOrConnectWithoutSubtopicInput | QuestionPaperCreateOrConnectWithoutSubtopicInput[]
    upsert?: QuestionPaperUpsertWithWhereUniqueWithoutSubtopicInput | QuestionPaperUpsertWithWhereUniqueWithoutSubtopicInput[]
    createMany?: QuestionPaperCreateManySubtopicInputEnvelope
    set?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    disconnect?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    delete?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    connect?: QuestionPaperWhereUniqueInput | QuestionPaperWhereUniqueInput[]
    update?: QuestionPaperUpdateWithWhereUniqueWithoutSubtopicInput | QuestionPaperUpdateWithWhereUniqueWithoutSubtopicInput[]
    updateMany?: QuestionPaperUpdateManyWithWhereWithoutSubtopicInput | QuestionPaperUpdateManyWithWhereWithoutSubtopicInput[]
    deleteMany?: QuestionPaperScalarWhereInput | QuestionPaperScalarWhereInput[]
  }

  export type AnswerPaperUncheckedUpdateManyWithoutSubtopicNestedInput = {
    create?: XOR<AnswerPaperCreateWithoutSubtopicInput, AnswerPaperUncheckedCreateWithoutSubtopicInput> | AnswerPaperCreateWithoutSubtopicInput[] | AnswerPaperUncheckedCreateWithoutSubtopicInput[]
    connectOrCreate?: AnswerPaperCreateOrConnectWithoutSubtopicInput | AnswerPaperCreateOrConnectWithoutSubtopicInput[]
    upsert?: AnswerPaperUpsertWithWhereUniqueWithoutSubtopicInput | AnswerPaperUpsertWithWhereUniqueWithoutSubtopicInput[]
    createMany?: AnswerPaperCreateManySubtopicInputEnvelope
    set?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    disconnect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    delete?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    connect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    update?: AnswerPaperUpdateWithWhereUniqueWithoutSubtopicInput | AnswerPaperUpdateWithWhereUniqueWithoutSubtopicInput[]
    updateMany?: AnswerPaperUpdateManyWithWhereWithoutSubtopicInput | AnswerPaperUpdateManyWithWhereWithoutSubtopicInput[]
    deleteMany?: AnswerPaperScalarWhereInput | AnswerPaperScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    connect?: UserWhereUniqueInput
  }

  export type TopicCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<TopicCreateWithoutDocumentsInput, TopicUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutDocumentsInput
    connect?: TopicWhereUniqueInput
  }

  export type SubtopicCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<SubtopicCreateWithoutDocumentsInput, SubtopicUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: SubtopicCreateOrConnectWithoutDocumentsInput
    connect?: SubtopicWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    upsert?: UserUpsertWithoutDocumentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDocumentsInput, UserUpdateWithoutDocumentsInput>, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type TopicUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<TopicCreateWithoutDocumentsInput, TopicUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutDocumentsInput
    upsert?: TopicUpsertWithoutDocumentsInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutDocumentsInput, TopicUpdateWithoutDocumentsInput>, TopicUncheckedUpdateWithoutDocumentsInput>
  }

  export type SubtopicUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<SubtopicCreateWithoutDocumentsInput, SubtopicUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: SubtopicCreateOrConnectWithoutDocumentsInput
    upsert?: SubtopicUpsertWithoutDocumentsInput
    disconnect?: SubtopicWhereInput | boolean
    delete?: SubtopicWhereInput | boolean
    connect?: SubtopicWhereUniqueInput
    update?: XOR<XOR<SubtopicUpdateToOneWithWhereWithoutDocumentsInput, SubtopicUpdateWithoutDocumentsInput>, SubtopicUncheckedUpdateWithoutDocumentsInput>
  }

  export type QuestionPaperCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<QuestionPaperCreateWithoutQuestionsInput, QuestionPaperUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuestionPaperCreateOrConnectWithoutQuestionsInput
    connect?: QuestionPaperWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionPaperUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<QuestionPaperCreateWithoutQuestionsInput, QuestionPaperUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuestionPaperCreateOrConnectWithoutQuestionsInput
    upsert?: QuestionPaperUpsertWithoutQuestionsInput
    connect?: QuestionPaperWhereUniqueInput
    update?: XOR<XOR<QuestionPaperUpdateToOneWithWhereWithoutQuestionsInput, QuestionPaperUpdateWithoutQuestionsInput>, QuestionPaperUncheckedUpdateWithoutQuestionsInput>
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type AnswerPaperCreateNestedOneWithoutAnswersInput = {
    create?: XOR<AnswerPaperCreateWithoutAnswersInput, AnswerPaperUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: AnswerPaperCreateOrConnectWithoutAnswersInput
    connect?: AnswerPaperWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type AnswerPaperUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<AnswerPaperCreateWithoutAnswersInput, AnswerPaperUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: AnswerPaperCreateOrConnectWithoutAnswersInput
    upsert?: AnswerPaperUpsertWithoutAnswersInput
    connect?: AnswerPaperWhereUniqueInput
    update?: XOR<XOR<AnswerPaperUpdateToOneWithWhereWithoutAnswersInput, AnswerPaperUpdateWithoutAnswersInput>, AnswerPaperUncheckedUpdateWithoutAnswersInput>
  }

  export type UserCreateNestedOneWithoutQuestionpapersInput = {
    create?: XOR<UserCreateWithoutQuestionpapersInput, UserUncheckedCreateWithoutQuestionpapersInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionpapersInput
    connect?: UserWhereUniqueInput
  }

  export type TopicCreateNestedOneWithoutQuestionpapersInput = {
    create?: XOR<TopicCreateWithoutQuestionpapersInput, TopicUncheckedCreateWithoutQuestionpapersInput>
    connectOrCreate?: TopicCreateOrConnectWithoutQuestionpapersInput
    connect?: TopicWhereUniqueInput
  }

  export type SubtopicCreateNestedOneWithoutQuestionpapersInput = {
    create?: XOR<SubtopicCreateWithoutQuestionpapersInput, SubtopicUncheckedCreateWithoutQuestionpapersInput>
    connectOrCreate?: SubtopicCreateOrConnectWithoutQuestionpapersInput
    connect?: SubtopicWhereUniqueInput
  }

  export type AnswerPaperCreateNestedManyWithoutQuestionpaperInput = {
    create?: XOR<AnswerPaperCreateWithoutQuestionpaperInput, AnswerPaperUncheckedCreateWithoutQuestionpaperInput> | AnswerPaperCreateWithoutQuestionpaperInput[] | AnswerPaperUncheckedCreateWithoutQuestionpaperInput[]
    connectOrCreate?: AnswerPaperCreateOrConnectWithoutQuestionpaperInput | AnswerPaperCreateOrConnectWithoutQuestionpaperInput[]
    createMany?: AnswerPaperCreateManyQuestionpaperInputEnvelope
    connect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutQuestionpaperInput = {
    create?: XOR<QuestionCreateWithoutQuestionpaperInput, QuestionUncheckedCreateWithoutQuestionpaperInput> | QuestionCreateWithoutQuestionpaperInput[] | QuestionUncheckedCreateWithoutQuestionpaperInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionpaperInput | QuestionCreateOrConnectWithoutQuestionpaperInput[]
    createMany?: QuestionCreateManyQuestionpaperInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type AnswerPaperUncheckedCreateNestedManyWithoutQuestionpaperInput = {
    create?: XOR<AnswerPaperCreateWithoutQuestionpaperInput, AnswerPaperUncheckedCreateWithoutQuestionpaperInput> | AnswerPaperCreateWithoutQuestionpaperInput[] | AnswerPaperUncheckedCreateWithoutQuestionpaperInput[]
    connectOrCreate?: AnswerPaperCreateOrConnectWithoutQuestionpaperInput | AnswerPaperCreateOrConnectWithoutQuestionpaperInput[]
    createMany?: AnswerPaperCreateManyQuestionpaperInputEnvelope
    connect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutQuestionpaperInput = {
    create?: XOR<QuestionCreateWithoutQuestionpaperInput, QuestionUncheckedCreateWithoutQuestionpaperInput> | QuestionCreateWithoutQuestionpaperInput[] | QuestionUncheckedCreateWithoutQuestionpaperInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionpaperInput | QuestionCreateOrConnectWithoutQuestionpaperInput[]
    createMany?: QuestionCreateManyQuestionpaperInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutQuestionpapersNestedInput = {
    create?: XOR<UserCreateWithoutQuestionpapersInput, UserUncheckedCreateWithoutQuestionpapersInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionpapersInput
    upsert?: UserUpsertWithoutQuestionpapersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuestionpapersInput, UserUpdateWithoutQuestionpapersInput>, UserUncheckedUpdateWithoutQuestionpapersInput>
  }

  export type TopicUpdateOneRequiredWithoutQuestionpapersNestedInput = {
    create?: XOR<TopicCreateWithoutQuestionpapersInput, TopicUncheckedCreateWithoutQuestionpapersInput>
    connectOrCreate?: TopicCreateOrConnectWithoutQuestionpapersInput
    upsert?: TopicUpsertWithoutQuestionpapersInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutQuestionpapersInput, TopicUpdateWithoutQuestionpapersInput>, TopicUncheckedUpdateWithoutQuestionpapersInput>
  }

  export type SubtopicUpdateOneWithoutQuestionpapersNestedInput = {
    create?: XOR<SubtopicCreateWithoutQuestionpapersInput, SubtopicUncheckedCreateWithoutQuestionpapersInput>
    connectOrCreate?: SubtopicCreateOrConnectWithoutQuestionpapersInput
    upsert?: SubtopicUpsertWithoutQuestionpapersInput
    disconnect?: SubtopicWhereInput | boolean
    delete?: SubtopicWhereInput | boolean
    connect?: SubtopicWhereUniqueInput
    update?: XOR<XOR<SubtopicUpdateToOneWithWhereWithoutQuestionpapersInput, SubtopicUpdateWithoutQuestionpapersInput>, SubtopicUncheckedUpdateWithoutQuestionpapersInput>
  }

  export type AnswerPaperUpdateManyWithoutQuestionpaperNestedInput = {
    create?: XOR<AnswerPaperCreateWithoutQuestionpaperInput, AnswerPaperUncheckedCreateWithoutQuestionpaperInput> | AnswerPaperCreateWithoutQuestionpaperInput[] | AnswerPaperUncheckedCreateWithoutQuestionpaperInput[]
    connectOrCreate?: AnswerPaperCreateOrConnectWithoutQuestionpaperInput | AnswerPaperCreateOrConnectWithoutQuestionpaperInput[]
    upsert?: AnswerPaperUpsertWithWhereUniqueWithoutQuestionpaperInput | AnswerPaperUpsertWithWhereUniqueWithoutQuestionpaperInput[]
    createMany?: AnswerPaperCreateManyQuestionpaperInputEnvelope
    set?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    disconnect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    delete?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    connect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    update?: AnswerPaperUpdateWithWhereUniqueWithoutQuestionpaperInput | AnswerPaperUpdateWithWhereUniqueWithoutQuestionpaperInput[]
    updateMany?: AnswerPaperUpdateManyWithWhereWithoutQuestionpaperInput | AnswerPaperUpdateManyWithWhereWithoutQuestionpaperInput[]
    deleteMany?: AnswerPaperScalarWhereInput | AnswerPaperScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutQuestionpaperNestedInput = {
    create?: XOR<QuestionCreateWithoutQuestionpaperInput, QuestionUncheckedCreateWithoutQuestionpaperInput> | QuestionCreateWithoutQuestionpaperInput[] | QuestionUncheckedCreateWithoutQuestionpaperInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionpaperInput | QuestionCreateOrConnectWithoutQuestionpaperInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuestionpaperInput | QuestionUpsertWithWhereUniqueWithoutQuestionpaperInput[]
    createMany?: QuestionCreateManyQuestionpaperInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuestionpaperInput | QuestionUpdateWithWhereUniqueWithoutQuestionpaperInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuestionpaperInput | QuestionUpdateManyWithWhereWithoutQuestionpaperInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type AnswerPaperUncheckedUpdateManyWithoutQuestionpaperNestedInput = {
    create?: XOR<AnswerPaperCreateWithoutQuestionpaperInput, AnswerPaperUncheckedCreateWithoutQuestionpaperInput> | AnswerPaperCreateWithoutQuestionpaperInput[] | AnswerPaperUncheckedCreateWithoutQuestionpaperInput[]
    connectOrCreate?: AnswerPaperCreateOrConnectWithoutQuestionpaperInput | AnswerPaperCreateOrConnectWithoutQuestionpaperInput[]
    upsert?: AnswerPaperUpsertWithWhereUniqueWithoutQuestionpaperInput | AnswerPaperUpsertWithWhereUniqueWithoutQuestionpaperInput[]
    createMany?: AnswerPaperCreateManyQuestionpaperInputEnvelope
    set?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    disconnect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    delete?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    connect?: AnswerPaperWhereUniqueInput | AnswerPaperWhereUniqueInput[]
    update?: AnswerPaperUpdateWithWhereUniqueWithoutQuestionpaperInput | AnswerPaperUpdateWithWhereUniqueWithoutQuestionpaperInput[]
    updateMany?: AnswerPaperUpdateManyWithWhereWithoutQuestionpaperInput | AnswerPaperUpdateManyWithWhereWithoutQuestionpaperInput[]
    deleteMany?: AnswerPaperScalarWhereInput | AnswerPaperScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutQuestionpaperNestedInput = {
    create?: XOR<QuestionCreateWithoutQuestionpaperInput, QuestionUncheckedCreateWithoutQuestionpaperInput> | QuestionCreateWithoutQuestionpaperInput[] | QuestionUncheckedCreateWithoutQuestionpaperInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionpaperInput | QuestionCreateOrConnectWithoutQuestionpaperInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuestionpaperInput | QuestionUpsertWithWhereUniqueWithoutQuestionpaperInput[]
    createMany?: QuestionCreateManyQuestionpaperInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuestionpaperInput | QuestionUpdateWithWhereUniqueWithoutQuestionpaperInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuestionpaperInput | QuestionUpdateManyWithWhereWithoutQuestionpaperInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAnswerpapersInput = {
    create?: XOR<UserCreateWithoutAnswerpapersInput, UserUncheckedCreateWithoutAnswerpapersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswerpapersInput
    connect?: UserWhereUniqueInput
  }

  export type TopicCreateNestedOneWithoutAnswerpapersInput = {
    create?: XOR<TopicCreateWithoutAnswerpapersInput, TopicUncheckedCreateWithoutAnswerpapersInput>
    connectOrCreate?: TopicCreateOrConnectWithoutAnswerpapersInput
    connect?: TopicWhereUniqueInput
  }

  export type SubtopicCreateNestedOneWithoutAnswerpapersInput = {
    create?: XOR<SubtopicCreateWithoutAnswerpapersInput, SubtopicUncheckedCreateWithoutAnswerpapersInput>
    connectOrCreate?: SubtopicCreateOrConnectWithoutAnswerpapersInput
    connect?: SubtopicWhereUniqueInput
  }

  export type QuestionPaperCreateNestedOneWithoutAnswerpapersInput = {
    create?: XOR<QuestionPaperCreateWithoutAnswerpapersInput, QuestionPaperUncheckedCreateWithoutAnswerpapersInput>
    connectOrCreate?: QuestionPaperCreateOrConnectWithoutAnswerpapersInput
    connect?: QuestionPaperWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutAnswerpaperInput = {
    create?: XOR<AnswerCreateWithoutAnswerpaperInput, AnswerUncheckedCreateWithoutAnswerpaperInput> | AnswerCreateWithoutAnswerpaperInput[] | AnswerUncheckedCreateWithoutAnswerpaperInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAnswerpaperInput | AnswerCreateOrConnectWithoutAnswerpaperInput[]
    createMany?: AnswerCreateManyAnswerpaperInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutAnswerpaperInput = {
    create?: XOR<AnswerCreateWithoutAnswerpaperInput, AnswerUncheckedCreateWithoutAnswerpaperInput> | AnswerCreateWithoutAnswerpaperInput[] | AnswerUncheckedCreateWithoutAnswerpaperInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAnswerpaperInput | AnswerCreateOrConnectWithoutAnswerpaperInput[]
    createMany?: AnswerCreateManyAnswerpaperInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAnswerpapersNestedInput = {
    create?: XOR<UserCreateWithoutAnswerpapersInput, UserUncheckedCreateWithoutAnswerpapersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswerpapersInput
    upsert?: UserUpsertWithoutAnswerpapersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnswerpapersInput, UserUpdateWithoutAnswerpapersInput>, UserUncheckedUpdateWithoutAnswerpapersInput>
  }

  export type TopicUpdateOneRequiredWithoutAnswerpapersNestedInput = {
    create?: XOR<TopicCreateWithoutAnswerpapersInput, TopicUncheckedCreateWithoutAnswerpapersInput>
    connectOrCreate?: TopicCreateOrConnectWithoutAnswerpapersInput
    upsert?: TopicUpsertWithoutAnswerpapersInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutAnswerpapersInput, TopicUpdateWithoutAnswerpapersInput>, TopicUncheckedUpdateWithoutAnswerpapersInput>
  }

  export type SubtopicUpdateOneWithoutAnswerpapersNestedInput = {
    create?: XOR<SubtopicCreateWithoutAnswerpapersInput, SubtopicUncheckedCreateWithoutAnswerpapersInput>
    connectOrCreate?: SubtopicCreateOrConnectWithoutAnswerpapersInput
    upsert?: SubtopicUpsertWithoutAnswerpapersInput
    disconnect?: SubtopicWhereInput | boolean
    delete?: SubtopicWhereInput | boolean
    connect?: SubtopicWhereUniqueInput
    update?: XOR<XOR<SubtopicUpdateToOneWithWhereWithoutAnswerpapersInput, SubtopicUpdateWithoutAnswerpapersInput>, SubtopicUncheckedUpdateWithoutAnswerpapersInput>
  }

  export type QuestionPaperUpdateOneRequiredWithoutAnswerpapersNestedInput = {
    create?: XOR<QuestionPaperCreateWithoutAnswerpapersInput, QuestionPaperUncheckedCreateWithoutAnswerpapersInput>
    connectOrCreate?: QuestionPaperCreateOrConnectWithoutAnswerpapersInput
    upsert?: QuestionPaperUpsertWithoutAnswerpapersInput
    connect?: QuestionPaperWhereUniqueInput
    update?: XOR<XOR<QuestionPaperUpdateToOneWithWhereWithoutAnswerpapersInput, QuestionPaperUpdateWithoutAnswerpapersInput>, QuestionPaperUncheckedUpdateWithoutAnswerpapersInput>
  }

  export type AnswerUpdateManyWithoutAnswerpaperNestedInput = {
    create?: XOR<AnswerCreateWithoutAnswerpaperInput, AnswerUncheckedCreateWithoutAnswerpaperInput> | AnswerCreateWithoutAnswerpaperInput[] | AnswerUncheckedCreateWithoutAnswerpaperInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAnswerpaperInput | AnswerCreateOrConnectWithoutAnswerpaperInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutAnswerpaperInput | AnswerUpsertWithWhereUniqueWithoutAnswerpaperInput[]
    createMany?: AnswerCreateManyAnswerpaperInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutAnswerpaperInput | AnswerUpdateWithWhereUniqueWithoutAnswerpaperInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutAnswerpaperInput | AnswerUpdateManyWithWhereWithoutAnswerpaperInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutAnswerpaperNestedInput = {
    create?: XOR<AnswerCreateWithoutAnswerpaperInput, AnswerUncheckedCreateWithoutAnswerpaperInput> | AnswerCreateWithoutAnswerpaperInput[] | AnswerUncheckedCreateWithoutAnswerpaperInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAnswerpaperInput | AnswerCreateOrConnectWithoutAnswerpaperInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutAnswerpaperInput | AnswerUpsertWithWhereUniqueWithoutAnswerpaperInput[]
    createMany?: AnswerCreateManyAnswerpaperInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutAnswerpaperInput | AnswerUpdateWithWhereUniqueWithoutAnswerpaperInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutAnswerpaperInput | AnswerUpdateManyWithWhereWithoutAnswerpaperInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type DocumentCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    topic: TopicCreateNestedOneWithoutDocumentsInput
    subtopic?: SubtopicCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutUserInput = {
    id?: string
    topicId: string
    subtopicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutUserInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput>
  }

  export type DocumentCreateManyUserInputEnvelope = {
    data: DocumentCreateManyUserInput | DocumentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuestionPaperCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    topic: TopicCreateNestedOneWithoutQuestionpapersInput
    subtopic?: SubtopicCreateNestedOneWithoutQuestionpapersInput
    answerpapers?: AnswerPaperCreateNestedManyWithoutQuestionpaperInput
    questions?: QuestionCreateNestedManyWithoutQuestionpaperInput
  }

  export type QuestionPaperUncheckedCreateWithoutUserInput = {
    id?: string
    topicId: string
    subtopicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answerpapers?: AnswerPaperUncheckedCreateNestedManyWithoutQuestionpaperInput
    questions?: QuestionUncheckedCreateNestedManyWithoutQuestionpaperInput
  }

  export type QuestionPaperCreateOrConnectWithoutUserInput = {
    where: QuestionPaperWhereUniqueInput
    create: XOR<QuestionPaperCreateWithoutUserInput, QuestionPaperUncheckedCreateWithoutUserInput>
  }

  export type QuestionPaperCreateManyUserInputEnvelope = {
    data: QuestionPaperCreateManyUserInput | QuestionPaperCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnswerPaperCreateWithoutUserInput = {
    id?: string
    finalscore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topic: TopicCreateNestedOneWithoutAnswerpapersInput
    subtopic?: SubtopicCreateNestedOneWithoutAnswerpapersInput
    questionpaper: QuestionPaperCreateNestedOneWithoutAnswerpapersInput
    answers?: AnswerCreateNestedManyWithoutAnswerpaperInput
  }

  export type AnswerPaperUncheckedCreateWithoutUserInput = {
    id?: string
    topicId: string
    subtopicId?: string | null
    questionpaperId: string
    finalscore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutAnswerpaperInput
  }

  export type AnswerPaperCreateOrConnectWithoutUserInput = {
    where: AnswerPaperWhereUniqueInput
    create: XOR<AnswerPaperCreateWithoutUserInput, AnswerPaperUncheckedCreateWithoutUserInput>
  }

  export type AnswerPaperCreateManyUserInputEnvelope = {
    data: AnswerPaperCreateManyUserInput | AnswerPaperCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DocumentUpsertWithWhereUniqueWithoutUserInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutUserInput, DocumentUncheckedUpdateWithoutUserInput>
    create: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutUserInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutUserInput, DocumentUncheckedUpdateWithoutUserInput>
  }

  export type DocumentUpdateManyWithWhereWithoutUserInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutUserInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    userId?: StringFilter<"Document"> | string
    topicId?: StringFilter<"Document"> | string
    subtopicId?: StringFilter<"Document"> | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type QuestionPaperUpsertWithWhereUniqueWithoutUserInput = {
    where: QuestionPaperWhereUniqueInput
    update: XOR<QuestionPaperUpdateWithoutUserInput, QuestionPaperUncheckedUpdateWithoutUserInput>
    create: XOR<QuestionPaperCreateWithoutUserInput, QuestionPaperUncheckedCreateWithoutUserInput>
  }

  export type QuestionPaperUpdateWithWhereUniqueWithoutUserInput = {
    where: QuestionPaperWhereUniqueInput
    data: XOR<QuestionPaperUpdateWithoutUserInput, QuestionPaperUncheckedUpdateWithoutUserInput>
  }

  export type QuestionPaperUpdateManyWithWhereWithoutUserInput = {
    where: QuestionPaperScalarWhereInput
    data: XOR<QuestionPaperUpdateManyMutationInput, QuestionPaperUncheckedUpdateManyWithoutUserInput>
  }

  export type QuestionPaperScalarWhereInput = {
    AND?: QuestionPaperScalarWhereInput | QuestionPaperScalarWhereInput[]
    OR?: QuestionPaperScalarWhereInput[]
    NOT?: QuestionPaperScalarWhereInput | QuestionPaperScalarWhereInput[]
    id?: StringFilter<"QuestionPaper"> | string
    userId?: StringFilter<"QuestionPaper"> | string
    topicId?: StringFilter<"QuestionPaper"> | string
    subtopicId?: StringNullableFilter<"QuestionPaper"> | string | null
    createdAt?: DateTimeFilter<"QuestionPaper"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionPaper"> | Date | string
  }

  export type AnswerPaperUpsertWithWhereUniqueWithoutUserInput = {
    where: AnswerPaperWhereUniqueInput
    update: XOR<AnswerPaperUpdateWithoutUserInput, AnswerPaperUncheckedUpdateWithoutUserInput>
    create: XOR<AnswerPaperCreateWithoutUserInput, AnswerPaperUncheckedCreateWithoutUserInput>
  }

  export type AnswerPaperUpdateWithWhereUniqueWithoutUserInput = {
    where: AnswerPaperWhereUniqueInput
    data: XOR<AnswerPaperUpdateWithoutUserInput, AnswerPaperUncheckedUpdateWithoutUserInput>
  }

  export type AnswerPaperUpdateManyWithWhereWithoutUserInput = {
    where: AnswerPaperScalarWhereInput
    data: XOR<AnswerPaperUpdateManyMutationInput, AnswerPaperUncheckedUpdateManyWithoutUserInput>
  }

  export type AnswerPaperScalarWhereInput = {
    AND?: AnswerPaperScalarWhereInput | AnswerPaperScalarWhereInput[]
    OR?: AnswerPaperScalarWhereInput[]
    NOT?: AnswerPaperScalarWhereInput | AnswerPaperScalarWhereInput[]
    id?: StringFilter<"AnswerPaper"> | string
    userId?: StringFilter<"AnswerPaper"> | string
    topicId?: StringFilter<"AnswerPaper"> | string
    subtopicId?: StringNullableFilter<"AnswerPaper"> | string | null
    questionpaperId?: StringFilter<"AnswerPaper"> | string
    finalscore?: FloatNullableFilter<"AnswerPaper"> | number | null
    createdAt?: DateTimeFilter<"AnswerPaper"> | Date | string
    updatedAt?: DateTimeFilter<"AnswerPaper"> | Date | string
  }

  export type DocumentCreateWithoutTopicInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDocumentsInput
    subtopic?: SubtopicCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutTopicInput = {
    id?: string
    userId: string
    subtopicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutTopicInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutTopicInput, DocumentUncheckedCreateWithoutTopicInput>
  }

  export type DocumentCreateManyTopicInputEnvelope = {
    data: DocumentCreateManyTopicInput | DocumentCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type SubtopicCreateWithoutTopicInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutSubtopicInput
    questionpapers?: QuestionPaperCreateNestedManyWithoutSubtopicInput
    answerpapers?: AnswerPaperCreateNestedManyWithoutSubtopicInput
  }

  export type SubtopicUncheckedCreateWithoutTopicInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutSubtopicInput
    questionpapers?: QuestionPaperUncheckedCreateNestedManyWithoutSubtopicInput
    answerpapers?: AnswerPaperUncheckedCreateNestedManyWithoutSubtopicInput
  }

  export type SubtopicCreateOrConnectWithoutTopicInput = {
    where: SubtopicWhereUniqueInput
    create: XOR<SubtopicCreateWithoutTopicInput, SubtopicUncheckedCreateWithoutTopicInput>
  }

  export type SubtopicCreateManyTopicInputEnvelope = {
    data: SubtopicCreateManyTopicInput | SubtopicCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type QuestionPaperCreateWithoutTopicInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutQuestionpapersInput
    subtopic?: SubtopicCreateNestedOneWithoutQuestionpapersInput
    answerpapers?: AnswerPaperCreateNestedManyWithoutQuestionpaperInput
    questions?: QuestionCreateNestedManyWithoutQuestionpaperInput
  }

  export type QuestionPaperUncheckedCreateWithoutTopicInput = {
    id?: string
    userId: string
    subtopicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answerpapers?: AnswerPaperUncheckedCreateNestedManyWithoutQuestionpaperInput
    questions?: QuestionUncheckedCreateNestedManyWithoutQuestionpaperInput
  }

  export type QuestionPaperCreateOrConnectWithoutTopicInput = {
    where: QuestionPaperWhereUniqueInput
    create: XOR<QuestionPaperCreateWithoutTopicInput, QuestionPaperUncheckedCreateWithoutTopicInput>
  }

  export type QuestionPaperCreateManyTopicInputEnvelope = {
    data: QuestionPaperCreateManyTopicInput | QuestionPaperCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type AnswerPaperCreateWithoutTopicInput = {
    id?: string
    finalscore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnswerpapersInput
    subtopic?: SubtopicCreateNestedOneWithoutAnswerpapersInput
    questionpaper: QuestionPaperCreateNestedOneWithoutAnswerpapersInput
    answers?: AnswerCreateNestedManyWithoutAnswerpaperInput
  }

  export type AnswerPaperUncheckedCreateWithoutTopicInput = {
    id?: string
    userId: string
    subtopicId?: string | null
    questionpaperId: string
    finalscore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutAnswerpaperInput
  }

  export type AnswerPaperCreateOrConnectWithoutTopicInput = {
    where: AnswerPaperWhereUniqueInput
    create: XOR<AnswerPaperCreateWithoutTopicInput, AnswerPaperUncheckedCreateWithoutTopicInput>
  }

  export type AnswerPaperCreateManyTopicInputEnvelope = {
    data: AnswerPaperCreateManyTopicInput | AnswerPaperCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type DocumentUpsertWithWhereUniqueWithoutTopicInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutTopicInput, DocumentUncheckedUpdateWithoutTopicInput>
    create: XOR<DocumentCreateWithoutTopicInput, DocumentUncheckedCreateWithoutTopicInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutTopicInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutTopicInput, DocumentUncheckedUpdateWithoutTopicInput>
  }

  export type DocumentUpdateManyWithWhereWithoutTopicInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutTopicInput>
  }

  export type SubtopicUpsertWithWhereUniqueWithoutTopicInput = {
    where: SubtopicWhereUniqueInput
    update: XOR<SubtopicUpdateWithoutTopicInput, SubtopicUncheckedUpdateWithoutTopicInput>
    create: XOR<SubtopicCreateWithoutTopicInput, SubtopicUncheckedCreateWithoutTopicInput>
  }

  export type SubtopicUpdateWithWhereUniqueWithoutTopicInput = {
    where: SubtopicWhereUniqueInput
    data: XOR<SubtopicUpdateWithoutTopicInput, SubtopicUncheckedUpdateWithoutTopicInput>
  }

  export type SubtopicUpdateManyWithWhereWithoutTopicInput = {
    where: SubtopicScalarWhereInput
    data: XOR<SubtopicUpdateManyMutationInput, SubtopicUncheckedUpdateManyWithoutTopicInput>
  }

  export type SubtopicScalarWhereInput = {
    AND?: SubtopicScalarWhereInput | SubtopicScalarWhereInput[]
    OR?: SubtopicScalarWhereInput[]
    NOT?: SubtopicScalarWhereInput | SubtopicScalarWhereInput[]
    id?: StringFilter<"Subtopic"> | string
    name?: StringFilter<"Subtopic"> | string
    topicId?: StringFilter<"Subtopic"> | string
    createdAt?: DateTimeFilter<"Subtopic"> | Date | string
    updatedAt?: DateTimeFilter<"Subtopic"> | Date | string
  }

  export type QuestionPaperUpsertWithWhereUniqueWithoutTopicInput = {
    where: QuestionPaperWhereUniqueInput
    update: XOR<QuestionPaperUpdateWithoutTopicInput, QuestionPaperUncheckedUpdateWithoutTopicInput>
    create: XOR<QuestionPaperCreateWithoutTopicInput, QuestionPaperUncheckedCreateWithoutTopicInput>
  }

  export type QuestionPaperUpdateWithWhereUniqueWithoutTopicInput = {
    where: QuestionPaperWhereUniqueInput
    data: XOR<QuestionPaperUpdateWithoutTopicInput, QuestionPaperUncheckedUpdateWithoutTopicInput>
  }

  export type QuestionPaperUpdateManyWithWhereWithoutTopicInput = {
    where: QuestionPaperScalarWhereInput
    data: XOR<QuestionPaperUpdateManyMutationInput, QuestionPaperUncheckedUpdateManyWithoutTopicInput>
  }

  export type AnswerPaperUpsertWithWhereUniqueWithoutTopicInput = {
    where: AnswerPaperWhereUniqueInput
    update: XOR<AnswerPaperUpdateWithoutTopicInput, AnswerPaperUncheckedUpdateWithoutTopicInput>
    create: XOR<AnswerPaperCreateWithoutTopicInput, AnswerPaperUncheckedCreateWithoutTopicInput>
  }

  export type AnswerPaperUpdateWithWhereUniqueWithoutTopicInput = {
    where: AnswerPaperWhereUniqueInput
    data: XOR<AnswerPaperUpdateWithoutTopicInput, AnswerPaperUncheckedUpdateWithoutTopicInput>
  }

  export type AnswerPaperUpdateManyWithWhereWithoutTopicInput = {
    where: AnswerPaperScalarWhereInput
    data: XOR<AnswerPaperUpdateManyMutationInput, AnswerPaperUncheckedUpdateManyWithoutTopicInput>
  }

  export type DocumentCreateWithoutSubtopicInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDocumentsInput
    topic: TopicCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutSubtopicInput = {
    id?: string
    userId: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutSubtopicInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutSubtopicInput, DocumentUncheckedCreateWithoutSubtopicInput>
  }

  export type DocumentCreateManySubtopicInputEnvelope = {
    data: DocumentCreateManySubtopicInput | DocumentCreateManySubtopicInput[]
    skipDuplicates?: boolean
  }

  export type QuestionPaperCreateWithoutSubtopicInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutQuestionpapersInput
    topic: TopicCreateNestedOneWithoutQuestionpapersInput
    answerpapers?: AnswerPaperCreateNestedManyWithoutQuestionpaperInput
    questions?: QuestionCreateNestedManyWithoutQuestionpaperInput
  }

  export type QuestionPaperUncheckedCreateWithoutSubtopicInput = {
    id?: string
    userId: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answerpapers?: AnswerPaperUncheckedCreateNestedManyWithoutQuestionpaperInput
    questions?: QuestionUncheckedCreateNestedManyWithoutQuestionpaperInput
  }

  export type QuestionPaperCreateOrConnectWithoutSubtopicInput = {
    where: QuestionPaperWhereUniqueInput
    create: XOR<QuestionPaperCreateWithoutSubtopicInput, QuestionPaperUncheckedCreateWithoutSubtopicInput>
  }

  export type QuestionPaperCreateManySubtopicInputEnvelope = {
    data: QuestionPaperCreateManySubtopicInput | QuestionPaperCreateManySubtopicInput[]
    skipDuplicates?: boolean
  }

  export type AnswerPaperCreateWithoutSubtopicInput = {
    id?: string
    finalscore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnswerpapersInput
    topic: TopicCreateNestedOneWithoutAnswerpapersInput
    questionpaper: QuestionPaperCreateNestedOneWithoutAnswerpapersInput
    answers?: AnswerCreateNestedManyWithoutAnswerpaperInput
  }

  export type AnswerPaperUncheckedCreateWithoutSubtopicInput = {
    id?: string
    userId: string
    topicId: string
    questionpaperId: string
    finalscore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutAnswerpaperInput
  }

  export type AnswerPaperCreateOrConnectWithoutSubtopicInput = {
    where: AnswerPaperWhereUniqueInput
    create: XOR<AnswerPaperCreateWithoutSubtopicInput, AnswerPaperUncheckedCreateWithoutSubtopicInput>
  }

  export type AnswerPaperCreateManySubtopicInputEnvelope = {
    data: AnswerPaperCreateManySubtopicInput | AnswerPaperCreateManySubtopicInput[]
    skipDuplicates?: boolean
  }

  export type TopicCreateWithoutSubtopicInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutTopicInput
    questionpapers?: QuestionPaperCreateNestedManyWithoutTopicInput
    answerpapers?: AnswerPaperCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutSubtopicInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutTopicInput
    questionpapers?: QuestionPaperUncheckedCreateNestedManyWithoutTopicInput
    answerpapers?: AnswerPaperUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutSubtopicInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutSubtopicInput, TopicUncheckedCreateWithoutSubtopicInput>
  }

  export type DocumentUpsertWithWhereUniqueWithoutSubtopicInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutSubtopicInput, DocumentUncheckedUpdateWithoutSubtopicInput>
    create: XOR<DocumentCreateWithoutSubtopicInput, DocumentUncheckedCreateWithoutSubtopicInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutSubtopicInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutSubtopicInput, DocumentUncheckedUpdateWithoutSubtopicInput>
  }

  export type DocumentUpdateManyWithWhereWithoutSubtopicInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutSubtopicInput>
  }

  export type QuestionPaperUpsertWithWhereUniqueWithoutSubtopicInput = {
    where: QuestionPaperWhereUniqueInput
    update: XOR<QuestionPaperUpdateWithoutSubtopicInput, QuestionPaperUncheckedUpdateWithoutSubtopicInput>
    create: XOR<QuestionPaperCreateWithoutSubtopicInput, QuestionPaperUncheckedCreateWithoutSubtopicInput>
  }

  export type QuestionPaperUpdateWithWhereUniqueWithoutSubtopicInput = {
    where: QuestionPaperWhereUniqueInput
    data: XOR<QuestionPaperUpdateWithoutSubtopicInput, QuestionPaperUncheckedUpdateWithoutSubtopicInput>
  }

  export type QuestionPaperUpdateManyWithWhereWithoutSubtopicInput = {
    where: QuestionPaperScalarWhereInput
    data: XOR<QuestionPaperUpdateManyMutationInput, QuestionPaperUncheckedUpdateManyWithoutSubtopicInput>
  }

  export type AnswerPaperUpsertWithWhereUniqueWithoutSubtopicInput = {
    where: AnswerPaperWhereUniqueInput
    update: XOR<AnswerPaperUpdateWithoutSubtopicInput, AnswerPaperUncheckedUpdateWithoutSubtopicInput>
    create: XOR<AnswerPaperCreateWithoutSubtopicInput, AnswerPaperUncheckedCreateWithoutSubtopicInput>
  }

  export type AnswerPaperUpdateWithWhereUniqueWithoutSubtopicInput = {
    where: AnswerPaperWhereUniqueInput
    data: XOR<AnswerPaperUpdateWithoutSubtopicInput, AnswerPaperUncheckedUpdateWithoutSubtopicInput>
  }

  export type AnswerPaperUpdateManyWithWhereWithoutSubtopicInput = {
    where: AnswerPaperScalarWhereInput
    data: XOR<AnswerPaperUpdateManyMutationInput, AnswerPaperUncheckedUpdateManyWithoutSubtopicInput>
  }

  export type TopicUpsertWithoutSubtopicInput = {
    update: XOR<TopicUpdateWithoutSubtopicInput, TopicUncheckedUpdateWithoutSubtopicInput>
    create: XOR<TopicCreateWithoutSubtopicInput, TopicUncheckedCreateWithoutSubtopicInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutSubtopicInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutSubtopicInput, TopicUncheckedUpdateWithoutSubtopicInput>
  }

  export type TopicUpdateWithoutSubtopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutTopicNestedInput
    questionpapers?: QuestionPaperUpdateManyWithoutTopicNestedInput
    answerpapers?: AnswerPaperUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutSubtopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutTopicNestedInput
    questionpapers?: QuestionPaperUncheckedUpdateManyWithoutTopicNestedInput
    answerpapers?: AnswerPaperUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type UserCreateWithoutDocumentsInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questionpapers?: QuestionPaperCreateNestedManyWithoutUserInput
    answerpapers?: AnswerPaperCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDocumentsInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questionpapers?: QuestionPaperUncheckedCreateNestedManyWithoutUserInput
    answerpapers?: AnswerPaperUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDocumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
  }

  export type TopicCreateWithoutDocumentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subtopic?: SubtopicCreateNestedManyWithoutTopicInput
    questionpapers?: QuestionPaperCreateNestedManyWithoutTopicInput
    answerpapers?: AnswerPaperCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutDocumentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subtopic?: SubtopicUncheckedCreateNestedManyWithoutTopicInput
    questionpapers?: QuestionPaperUncheckedCreateNestedManyWithoutTopicInput
    answerpapers?: AnswerPaperUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutDocumentsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutDocumentsInput, TopicUncheckedCreateWithoutDocumentsInput>
  }

  export type SubtopicCreateWithoutDocumentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questionpapers?: QuestionPaperCreateNestedManyWithoutSubtopicInput
    answerpapers?: AnswerPaperCreateNestedManyWithoutSubtopicInput
    topic: TopicCreateNestedOneWithoutSubtopicInput
  }

  export type SubtopicUncheckedCreateWithoutDocumentsInput = {
    id?: string
    name: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questionpapers?: QuestionPaperUncheckedCreateNestedManyWithoutSubtopicInput
    answerpapers?: AnswerPaperUncheckedCreateNestedManyWithoutSubtopicInput
  }

  export type SubtopicCreateOrConnectWithoutDocumentsInput = {
    where: SubtopicWhereUniqueInput
    create: XOR<SubtopicCreateWithoutDocumentsInput, SubtopicUncheckedCreateWithoutDocumentsInput>
  }

  export type UserUpsertWithoutDocumentsInput = {
    update: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionpapers?: QuestionPaperUpdateManyWithoutUserNestedInput
    answerpapers?: AnswerPaperUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionpapers?: QuestionPaperUncheckedUpdateManyWithoutUserNestedInput
    answerpapers?: AnswerPaperUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TopicUpsertWithoutDocumentsInput = {
    update: XOR<TopicUpdateWithoutDocumentsInput, TopicUncheckedUpdateWithoutDocumentsInput>
    create: XOR<TopicCreateWithoutDocumentsInput, TopicUncheckedCreateWithoutDocumentsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutDocumentsInput, TopicUncheckedUpdateWithoutDocumentsInput>
  }

  export type TopicUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtopic?: SubtopicUpdateManyWithoutTopicNestedInput
    questionpapers?: QuestionPaperUpdateManyWithoutTopicNestedInput
    answerpapers?: AnswerPaperUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtopic?: SubtopicUncheckedUpdateManyWithoutTopicNestedInput
    questionpapers?: QuestionPaperUncheckedUpdateManyWithoutTopicNestedInput
    answerpapers?: AnswerPaperUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type SubtopicUpsertWithoutDocumentsInput = {
    update: XOR<SubtopicUpdateWithoutDocumentsInput, SubtopicUncheckedUpdateWithoutDocumentsInput>
    create: XOR<SubtopicCreateWithoutDocumentsInput, SubtopicUncheckedCreateWithoutDocumentsInput>
    where?: SubtopicWhereInput
  }

  export type SubtopicUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: SubtopicWhereInput
    data: XOR<SubtopicUpdateWithoutDocumentsInput, SubtopicUncheckedUpdateWithoutDocumentsInput>
  }

  export type SubtopicUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionpapers?: QuestionPaperUpdateManyWithoutSubtopicNestedInput
    answerpapers?: AnswerPaperUpdateManyWithoutSubtopicNestedInput
    topic?: TopicUpdateOneRequiredWithoutSubtopicNestedInput
  }

  export type SubtopicUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionpapers?: QuestionPaperUncheckedUpdateManyWithoutSubtopicNestedInput
    answerpapers?: AnswerPaperUncheckedUpdateManyWithoutSubtopicNestedInput
  }

  export type QuestionPaperCreateWithoutQuestionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutQuestionpapersInput
    topic: TopicCreateNestedOneWithoutQuestionpapersInput
    subtopic?: SubtopicCreateNestedOneWithoutQuestionpapersInput
    answerpapers?: AnswerPaperCreateNestedManyWithoutQuestionpaperInput
  }

  export type QuestionPaperUncheckedCreateWithoutQuestionsInput = {
    id?: string
    userId: string
    topicId: string
    subtopicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answerpapers?: AnswerPaperUncheckedCreateNestedManyWithoutQuestionpaperInput
  }

  export type QuestionPaperCreateOrConnectWithoutQuestionsInput = {
    where: QuestionPaperWhereUniqueInput
    create: XOR<QuestionPaperCreateWithoutQuestionsInput, QuestionPaperUncheckedCreateWithoutQuestionsInput>
  }

  export type AnswerCreateWithoutQuestionInput = {
    id?: string
    text: string
    mark?: number | null
    llmRemark?: string | null
    strengths?: string | null
    weaknesses?: string | null
    createdAt?: Date | string
    answerpaper: AnswerPaperCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    text: string
    mark?: number | null
    llmRemark?: string | null
    strengths?: string | null
    weaknesses?: string | null
    answerpaperId: string
    createdAt?: Date | string
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuestionPaperUpsertWithoutQuestionsInput = {
    update: XOR<QuestionPaperUpdateWithoutQuestionsInput, QuestionPaperUncheckedUpdateWithoutQuestionsInput>
    create: XOR<QuestionPaperCreateWithoutQuestionsInput, QuestionPaperUncheckedCreateWithoutQuestionsInput>
    where?: QuestionPaperWhereInput
  }

  export type QuestionPaperUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: QuestionPaperWhereInput
    data: XOR<QuestionPaperUpdateWithoutQuestionsInput, QuestionPaperUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuestionPaperUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuestionpapersNestedInput
    topic?: TopicUpdateOneRequiredWithoutQuestionpapersNestedInput
    subtopic?: SubtopicUpdateOneWithoutQuestionpapersNestedInput
    answerpapers?: AnswerPaperUpdateManyWithoutQuestionpaperNestedInput
  }

  export type QuestionPaperUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerpapers?: AnswerPaperUncheckedUpdateManyWithoutQuestionpaperNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: StringFilter<"Answer"> | string
    text?: StringFilter<"Answer"> | string
    mark?: FloatNullableFilter<"Answer"> | number | null
    llmRemark?: StringNullableFilter<"Answer"> | string | null
    strengths?: StringNullableFilter<"Answer"> | string | null
    weaknesses?: StringNullableFilter<"Answer"> | string | null
    questionId?: StringFilter<"Answer"> | string
    answerpaperId?: StringFilter<"Answer"> | string
    createdAt?: DateTimeFilter<"Answer"> | Date | string
  }

  export type QuestionCreateWithoutAnswersInput = {
    id?: string
    text: string
    position: number
    createdAt?: Date | string
    questionpaper: QuestionPaperCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    text: string
    position: number
    questionpaperId: string
    createdAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type AnswerPaperCreateWithoutAnswersInput = {
    id?: string
    finalscore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnswerpapersInput
    topic: TopicCreateNestedOneWithoutAnswerpapersInput
    subtopic?: SubtopicCreateNestedOneWithoutAnswerpapersInput
    questionpaper: QuestionPaperCreateNestedOneWithoutAnswerpapersInput
  }

  export type AnswerPaperUncheckedCreateWithoutAnswersInput = {
    id?: string
    userId: string
    topicId: string
    subtopicId?: string | null
    questionpaperId: string
    finalscore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerPaperCreateOrConnectWithoutAnswersInput = {
    where: AnswerPaperWhereUniqueInput
    create: XOR<AnswerPaperCreateWithoutAnswersInput, AnswerPaperUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionpaper?: QuestionPaperUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    questionpaperId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerPaperUpsertWithoutAnswersInput = {
    update: XOR<AnswerPaperUpdateWithoutAnswersInput, AnswerPaperUncheckedUpdateWithoutAnswersInput>
    create: XOR<AnswerPaperCreateWithoutAnswersInput, AnswerPaperUncheckedCreateWithoutAnswersInput>
    where?: AnswerPaperWhereInput
  }

  export type AnswerPaperUpdateToOneWithWhereWithoutAnswersInput = {
    where?: AnswerPaperWhereInput
    data: XOR<AnswerPaperUpdateWithoutAnswersInput, AnswerPaperUncheckedUpdateWithoutAnswersInput>
  }

  export type AnswerPaperUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalscore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnswerpapersNestedInput
    topic?: TopicUpdateOneRequiredWithoutAnswerpapersNestedInput
    subtopic?: SubtopicUpdateOneWithoutAnswerpapersNestedInput
    questionpaper?: QuestionPaperUpdateOneRequiredWithoutAnswerpapersNestedInput
  }

  export type AnswerPaperUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    questionpaperId?: StringFieldUpdateOperationsInput | string
    finalscore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutQuestionpapersInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutUserInput
    answerpapers?: AnswerPaperCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuestionpapersInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    answerpapers?: AnswerPaperUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuestionpapersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestionpapersInput, UserUncheckedCreateWithoutQuestionpapersInput>
  }

  export type TopicCreateWithoutQuestionpapersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutTopicInput
    subtopic?: SubtopicCreateNestedManyWithoutTopicInput
    answerpapers?: AnswerPaperCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutQuestionpapersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutTopicInput
    subtopic?: SubtopicUncheckedCreateNestedManyWithoutTopicInput
    answerpapers?: AnswerPaperUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutQuestionpapersInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutQuestionpapersInput, TopicUncheckedCreateWithoutQuestionpapersInput>
  }

  export type SubtopicCreateWithoutQuestionpapersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutSubtopicInput
    answerpapers?: AnswerPaperCreateNestedManyWithoutSubtopicInput
    topic: TopicCreateNestedOneWithoutSubtopicInput
  }

  export type SubtopicUncheckedCreateWithoutQuestionpapersInput = {
    id?: string
    name: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutSubtopicInput
    answerpapers?: AnswerPaperUncheckedCreateNestedManyWithoutSubtopicInput
  }

  export type SubtopicCreateOrConnectWithoutQuestionpapersInput = {
    where: SubtopicWhereUniqueInput
    create: XOR<SubtopicCreateWithoutQuestionpapersInput, SubtopicUncheckedCreateWithoutQuestionpapersInput>
  }

  export type AnswerPaperCreateWithoutQuestionpaperInput = {
    id?: string
    finalscore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnswerpapersInput
    topic: TopicCreateNestedOneWithoutAnswerpapersInput
    subtopic?: SubtopicCreateNestedOneWithoutAnswerpapersInput
    answers?: AnswerCreateNestedManyWithoutAnswerpaperInput
  }

  export type AnswerPaperUncheckedCreateWithoutQuestionpaperInput = {
    id?: string
    userId: string
    topicId: string
    subtopicId?: string | null
    finalscore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutAnswerpaperInput
  }

  export type AnswerPaperCreateOrConnectWithoutQuestionpaperInput = {
    where: AnswerPaperWhereUniqueInput
    create: XOR<AnswerPaperCreateWithoutQuestionpaperInput, AnswerPaperUncheckedCreateWithoutQuestionpaperInput>
  }

  export type AnswerPaperCreateManyQuestionpaperInputEnvelope = {
    data: AnswerPaperCreateManyQuestionpaperInput | AnswerPaperCreateManyQuestionpaperInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutQuestionpaperInput = {
    id?: string
    text: string
    position: number
    createdAt?: Date | string
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuestionpaperInput = {
    id?: string
    text: string
    position: number
    createdAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuestionpaperInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuestionpaperInput, QuestionUncheckedCreateWithoutQuestionpaperInput>
  }

  export type QuestionCreateManyQuestionpaperInputEnvelope = {
    data: QuestionCreateManyQuestionpaperInput | QuestionCreateManyQuestionpaperInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutQuestionpapersInput = {
    update: XOR<UserUpdateWithoutQuestionpapersInput, UserUncheckedUpdateWithoutQuestionpapersInput>
    create: XOR<UserCreateWithoutQuestionpapersInput, UserUncheckedCreateWithoutQuestionpapersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuestionpapersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuestionpapersInput, UserUncheckedUpdateWithoutQuestionpapersInput>
  }

  export type UserUpdateWithoutQuestionpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutUserNestedInput
    answerpapers?: AnswerPaperUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuestionpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    answerpapers?: AnswerPaperUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TopicUpsertWithoutQuestionpapersInput = {
    update: XOR<TopicUpdateWithoutQuestionpapersInput, TopicUncheckedUpdateWithoutQuestionpapersInput>
    create: XOR<TopicCreateWithoutQuestionpapersInput, TopicUncheckedCreateWithoutQuestionpapersInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutQuestionpapersInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutQuestionpapersInput, TopicUncheckedUpdateWithoutQuestionpapersInput>
  }

  export type TopicUpdateWithoutQuestionpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutTopicNestedInput
    subtopic?: SubtopicUpdateManyWithoutTopicNestedInput
    answerpapers?: AnswerPaperUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutQuestionpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutTopicNestedInput
    subtopic?: SubtopicUncheckedUpdateManyWithoutTopicNestedInput
    answerpapers?: AnswerPaperUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type SubtopicUpsertWithoutQuestionpapersInput = {
    update: XOR<SubtopicUpdateWithoutQuestionpapersInput, SubtopicUncheckedUpdateWithoutQuestionpapersInput>
    create: XOR<SubtopicCreateWithoutQuestionpapersInput, SubtopicUncheckedCreateWithoutQuestionpapersInput>
    where?: SubtopicWhereInput
  }

  export type SubtopicUpdateToOneWithWhereWithoutQuestionpapersInput = {
    where?: SubtopicWhereInput
    data: XOR<SubtopicUpdateWithoutQuestionpapersInput, SubtopicUncheckedUpdateWithoutQuestionpapersInput>
  }

  export type SubtopicUpdateWithoutQuestionpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutSubtopicNestedInput
    answerpapers?: AnswerPaperUpdateManyWithoutSubtopicNestedInput
    topic?: TopicUpdateOneRequiredWithoutSubtopicNestedInput
  }

  export type SubtopicUncheckedUpdateWithoutQuestionpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutSubtopicNestedInput
    answerpapers?: AnswerPaperUncheckedUpdateManyWithoutSubtopicNestedInput
  }

  export type AnswerPaperUpsertWithWhereUniqueWithoutQuestionpaperInput = {
    where: AnswerPaperWhereUniqueInput
    update: XOR<AnswerPaperUpdateWithoutQuestionpaperInput, AnswerPaperUncheckedUpdateWithoutQuestionpaperInput>
    create: XOR<AnswerPaperCreateWithoutQuestionpaperInput, AnswerPaperUncheckedCreateWithoutQuestionpaperInput>
  }

  export type AnswerPaperUpdateWithWhereUniqueWithoutQuestionpaperInput = {
    where: AnswerPaperWhereUniqueInput
    data: XOR<AnswerPaperUpdateWithoutQuestionpaperInput, AnswerPaperUncheckedUpdateWithoutQuestionpaperInput>
  }

  export type AnswerPaperUpdateManyWithWhereWithoutQuestionpaperInput = {
    where: AnswerPaperScalarWhereInput
    data: XOR<AnswerPaperUpdateManyMutationInput, AnswerPaperUncheckedUpdateManyWithoutQuestionpaperInput>
  }

  export type QuestionUpsertWithWhereUniqueWithoutQuestionpaperInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutQuestionpaperInput, QuestionUncheckedUpdateWithoutQuestionpaperInput>
    create: XOR<QuestionCreateWithoutQuestionpaperInput, QuestionUncheckedCreateWithoutQuestionpaperInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutQuestionpaperInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutQuestionpaperInput, QuestionUncheckedUpdateWithoutQuestionpaperInput>
  }

  export type QuestionUpdateManyWithWhereWithoutQuestionpaperInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuestionpaperInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    position?: IntFilter<"Question"> | number
    questionpaperId?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type UserCreateWithoutAnswerpapersInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutUserInput
    questionpapers?: QuestionPaperCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnswerpapersInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    questionpapers?: QuestionPaperUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnswerpapersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnswerpapersInput, UserUncheckedCreateWithoutAnswerpapersInput>
  }

  export type TopicCreateWithoutAnswerpapersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutTopicInput
    subtopic?: SubtopicCreateNestedManyWithoutTopicInput
    questionpapers?: QuestionPaperCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutAnswerpapersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutTopicInput
    subtopic?: SubtopicUncheckedCreateNestedManyWithoutTopicInput
    questionpapers?: QuestionPaperUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutAnswerpapersInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutAnswerpapersInput, TopicUncheckedCreateWithoutAnswerpapersInput>
  }

  export type SubtopicCreateWithoutAnswerpapersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutSubtopicInput
    questionpapers?: QuestionPaperCreateNestedManyWithoutSubtopicInput
    topic: TopicCreateNestedOneWithoutSubtopicInput
  }

  export type SubtopicUncheckedCreateWithoutAnswerpapersInput = {
    id?: string
    name: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutSubtopicInput
    questionpapers?: QuestionPaperUncheckedCreateNestedManyWithoutSubtopicInput
  }

  export type SubtopicCreateOrConnectWithoutAnswerpapersInput = {
    where: SubtopicWhereUniqueInput
    create: XOR<SubtopicCreateWithoutAnswerpapersInput, SubtopicUncheckedCreateWithoutAnswerpapersInput>
  }

  export type QuestionPaperCreateWithoutAnswerpapersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutQuestionpapersInput
    topic: TopicCreateNestedOneWithoutQuestionpapersInput
    subtopic?: SubtopicCreateNestedOneWithoutQuestionpapersInput
    questions?: QuestionCreateNestedManyWithoutQuestionpaperInput
  }

  export type QuestionPaperUncheckedCreateWithoutAnswerpapersInput = {
    id?: string
    userId: string
    topicId: string
    subtopicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuestionpaperInput
  }

  export type QuestionPaperCreateOrConnectWithoutAnswerpapersInput = {
    where: QuestionPaperWhereUniqueInput
    create: XOR<QuestionPaperCreateWithoutAnswerpapersInput, QuestionPaperUncheckedCreateWithoutAnswerpapersInput>
  }

  export type AnswerCreateWithoutAnswerpaperInput = {
    id?: string
    text: string
    mark?: number | null
    llmRemark?: string | null
    strengths?: string | null
    weaknesses?: string | null
    createdAt?: Date | string
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutAnswerpaperInput = {
    id?: string
    text: string
    mark?: number | null
    llmRemark?: string | null
    strengths?: string | null
    weaknesses?: string | null
    questionId: string
    createdAt?: Date | string
  }

  export type AnswerCreateOrConnectWithoutAnswerpaperInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutAnswerpaperInput, AnswerUncheckedCreateWithoutAnswerpaperInput>
  }

  export type AnswerCreateManyAnswerpaperInputEnvelope = {
    data: AnswerCreateManyAnswerpaperInput | AnswerCreateManyAnswerpaperInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAnswerpapersInput = {
    update: XOR<UserUpdateWithoutAnswerpapersInput, UserUncheckedUpdateWithoutAnswerpapersInput>
    create: XOR<UserCreateWithoutAnswerpapersInput, UserUncheckedCreateWithoutAnswerpapersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnswerpapersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnswerpapersInput, UserUncheckedUpdateWithoutAnswerpapersInput>
  }

  export type UserUpdateWithoutAnswerpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutUserNestedInput
    questionpapers?: QuestionPaperUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnswerpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    questionpapers?: QuestionPaperUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TopicUpsertWithoutAnswerpapersInput = {
    update: XOR<TopicUpdateWithoutAnswerpapersInput, TopicUncheckedUpdateWithoutAnswerpapersInput>
    create: XOR<TopicCreateWithoutAnswerpapersInput, TopicUncheckedCreateWithoutAnswerpapersInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutAnswerpapersInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutAnswerpapersInput, TopicUncheckedUpdateWithoutAnswerpapersInput>
  }

  export type TopicUpdateWithoutAnswerpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutTopicNestedInput
    subtopic?: SubtopicUpdateManyWithoutTopicNestedInput
    questionpapers?: QuestionPaperUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutAnswerpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutTopicNestedInput
    subtopic?: SubtopicUncheckedUpdateManyWithoutTopicNestedInput
    questionpapers?: QuestionPaperUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type SubtopicUpsertWithoutAnswerpapersInput = {
    update: XOR<SubtopicUpdateWithoutAnswerpapersInput, SubtopicUncheckedUpdateWithoutAnswerpapersInput>
    create: XOR<SubtopicCreateWithoutAnswerpapersInput, SubtopicUncheckedCreateWithoutAnswerpapersInput>
    where?: SubtopicWhereInput
  }

  export type SubtopicUpdateToOneWithWhereWithoutAnswerpapersInput = {
    where?: SubtopicWhereInput
    data: XOR<SubtopicUpdateWithoutAnswerpapersInput, SubtopicUncheckedUpdateWithoutAnswerpapersInput>
  }

  export type SubtopicUpdateWithoutAnswerpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutSubtopicNestedInput
    questionpapers?: QuestionPaperUpdateManyWithoutSubtopicNestedInput
    topic?: TopicUpdateOneRequiredWithoutSubtopicNestedInput
  }

  export type SubtopicUncheckedUpdateWithoutAnswerpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutSubtopicNestedInput
    questionpapers?: QuestionPaperUncheckedUpdateManyWithoutSubtopicNestedInput
  }

  export type QuestionPaperUpsertWithoutAnswerpapersInput = {
    update: XOR<QuestionPaperUpdateWithoutAnswerpapersInput, QuestionPaperUncheckedUpdateWithoutAnswerpapersInput>
    create: XOR<QuestionPaperCreateWithoutAnswerpapersInput, QuestionPaperUncheckedCreateWithoutAnswerpapersInput>
    where?: QuestionPaperWhereInput
  }

  export type QuestionPaperUpdateToOneWithWhereWithoutAnswerpapersInput = {
    where?: QuestionPaperWhereInput
    data: XOR<QuestionPaperUpdateWithoutAnswerpapersInput, QuestionPaperUncheckedUpdateWithoutAnswerpapersInput>
  }

  export type QuestionPaperUpdateWithoutAnswerpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuestionpapersNestedInput
    topic?: TopicUpdateOneRequiredWithoutQuestionpapersNestedInput
    subtopic?: SubtopicUpdateOneWithoutQuestionpapersNestedInput
    questions?: QuestionUpdateManyWithoutQuestionpaperNestedInput
  }

  export type QuestionPaperUncheckedUpdateWithoutAnswerpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuestionpaperNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutAnswerpaperInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutAnswerpaperInput, AnswerUncheckedUpdateWithoutAnswerpaperInput>
    create: XOR<AnswerCreateWithoutAnswerpaperInput, AnswerUncheckedCreateWithoutAnswerpaperInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutAnswerpaperInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutAnswerpaperInput, AnswerUncheckedUpdateWithoutAnswerpaperInput>
  }

  export type AnswerUpdateManyWithWhereWithoutAnswerpaperInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutAnswerpaperInput>
  }

  export type DocumentCreateManyUserInput = {
    id?: string
    topicId: string
    subtopicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionPaperCreateManyUserInput = {
    id?: string
    topicId: string
    subtopicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerPaperCreateManyUserInput = {
    id?: string
    topicId: string
    subtopicId?: string | null
    questionpaperId: string
    finalscore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutDocumentsNestedInput
    subtopic?: SubtopicUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    subtopicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    subtopicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionPaperUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutQuestionpapersNestedInput
    subtopic?: SubtopicUpdateOneWithoutQuestionpapersNestedInput
    answerpapers?: AnswerPaperUpdateManyWithoutQuestionpaperNestedInput
    questions?: QuestionUpdateManyWithoutQuestionpaperNestedInput
  }

  export type QuestionPaperUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerpapers?: AnswerPaperUncheckedUpdateManyWithoutQuestionpaperNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutQuestionpaperNestedInput
  }

  export type QuestionPaperUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerPaperUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalscore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutAnswerpapersNestedInput
    subtopic?: SubtopicUpdateOneWithoutAnswerpapersNestedInput
    questionpaper?: QuestionPaperUpdateOneRequiredWithoutAnswerpapersNestedInput
    answers?: AnswerUpdateManyWithoutAnswerpaperNestedInput
  }

  export type AnswerPaperUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    questionpaperId?: StringFieldUpdateOperationsInput | string
    finalscore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutAnswerpaperNestedInput
  }

  export type AnswerPaperUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    questionpaperId?: StringFieldUpdateOperationsInput | string
    finalscore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyTopicInput = {
    id?: string
    userId: string
    subtopicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubtopicCreateManyTopicInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionPaperCreateManyTopicInput = {
    id?: string
    userId: string
    subtopicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerPaperCreateManyTopicInput = {
    id?: string
    userId: string
    subtopicId?: string | null
    questionpaperId: string
    finalscore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    subtopic?: SubtopicUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subtopicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subtopicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtopicUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutSubtopicNestedInput
    questionpapers?: QuestionPaperUpdateManyWithoutSubtopicNestedInput
    answerpapers?: AnswerPaperUpdateManyWithoutSubtopicNestedInput
  }

  export type SubtopicUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutSubtopicNestedInput
    questionpapers?: QuestionPaperUncheckedUpdateManyWithoutSubtopicNestedInput
    answerpapers?: AnswerPaperUncheckedUpdateManyWithoutSubtopicNestedInput
  }

  export type SubtopicUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionPaperUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuestionpapersNestedInput
    subtopic?: SubtopicUpdateOneWithoutQuestionpapersNestedInput
    answerpapers?: AnswerPaperUpdateManyWithoutQuestionpaperNestedInput
    questions?: QuestionUpdateManyWithoutQuestionpaperNestedInput
  }

  export type QuestionPaperUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerpapers?: AnswerPaperUncheckedUpdateManyWithoutQuestionpaperNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutQuestionpaperNestedInput
  }

  export type QuestionPaperUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerPaperUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalscore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnswerpapersNestedInput
    subtopic?: SubtopicUpdateOneWithoutAnswerpapersNestedInput
    questionpaper?: QuestionPaperUpdateOneRequiredWithoutAnswerpapersNestedInput
    answers?: AnswerUpdateManyWithoutAnswerpaperNestedInput
  }

  export type AnswerPaperUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    questionpaperId?: StringFieldUpdateOperationsInput | string
    finalscore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutAnswerpaperNestedInput
  }

  export type AnswerPaperUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    questionpaperId?: StringFieldUpdateOperationsInput | string
    finalscore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManySubtopicInput = {
    id?: string
    userId: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionPaperCreateManySubtopicInput = {
    id?: string
    userId: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerPaperCreateManySubtopicInput = {
    id?: string
    userId: string
    topicId: string
    questionpaperId: string
    finalscore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateWithoutSubtopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    topic?: TopicUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutSubtopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutSubtopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionPaperUpdateWithoutSubtopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuestionpapersNestedInput
    topic?: TopicUpdateOneRequiredWithoutQuestionpapersNestedInput
    answerpapers?: AnswerPaperUpdateManyWithoutQuestionpaperNestedInput
    questions?: QuestionUpdateManyWithoutQuestionpaperNestedInput
  }

  export type QuestionPaperUncheckedUpdateWithoutSubtopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerpapers?: AnswerPaperUncheckedUpdateManyWithoutQuestionpaperNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutQuestionpaperNestedInput
  }

  export type QuestionPaperUncheckedUpdateManyWithoutSubtopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerPaperUpdateWithoutSubtopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalscore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnswerpapersNestedInput
    topic?: TopicUpdateOneRequiredWithoutAnswerpapersNestedInput
    questionpaper?: QuestionPaperUpdateOneRequiredWithoutAnswerpapersNestedInput
    answers?: AnswerUpdateManyWithoutAnswerpaperNestedInput
  }

  export type AnswerPaperUncheckedUpdateWithoutSubtopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    questionpaperId?: StringFieldUpdateOperationsInput | string
    finalscore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutAnswerpaperNestedInput
  }

  export type AnswerPaperUncheckedUpdateManyWithoutSubtopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    questionpaperId?: StringFieldUpdateOperationsInput | string
    finalscore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyQuestionInput = {
    id?: string
    text: string
    mark?: number | null
    llmRemark?: string | null
    strengths?: string | null
    weaknesses?: string | null
    answerpaperId: string
    createdAt?: Date | string
  }

  export type AnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    mark?: NullableFloatFieldUpdateOperationsInput | number | null
    llmRemark?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    weaknesses?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerpaper?: AnswerPaperUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    mark?: NullableFloatFieldUpdateOperationsInput | number | null
    llmRemark?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    weaknesses?: NullableStringFieldUpdateOperationsInput | string | null
    answerpaperId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    mark?: NullableFloatFieldUpdateOperationsInput | number | null
    llmRemark?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    weaknesses?: NullableStringFieldUpdateOperationsInput | string | null
    answerpaperId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerPaperCreateManyQuestionpaperInput = {
    id?: string
    userId: string
    topicId: string
    subtopicId?: string | null
    finalscore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateManyQuestionpaperInput = {
    id?: string
    text: string
    position: number
    createdAt?: Date | string
  }

  export type AnswerPaperUpdateWithoutQuestionpaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalscore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnswerpapersNestedInput
    topic?: TopicUpdateOneRequiredWithoutAnswerpapersNestedInput
    subtopic?: SubtopicUpdateOneWithoutAnswerpapersNestedInput
    answers?: AnswerUpdateManyWithoutAnswerpaperNestedInput
  }

  export type AnswerPaperUncheckedUpdateWithoutQuestionpaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    finalscore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutAnswerpaperNestedInput
  }

  export type AnswerPaperUncheckedUpdateManyWithoutQuestionpaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    subtopicId?: NullableStringFieldUpdateOperationsInput | string | null
    finalscore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpdateWithoutQuestionpaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuestionpaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutQuestionpaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyAnswerpaperInput = {
    id?: string
    text: string
    mark?: number | null
    llmRemark?: string | null
    strengths?: string | null
    weaknesses?: string | null
    questionId: string
    createdAt?: Date | string
  }

  export type AnswerUpdateWithoutAnswerpaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    mark?: NullableFloatFieldUpdateOperationsInput | number | null
    llmRemark?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    weaknesses?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutAnswerpaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    mark?: NullableFloatFieldUpdateOperationsInput | number | null
    llmRemark?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    weaknesses?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyWithoutAnswerpaperInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    mark?: NullableFloatFieldUpdateOperationsInput | number | null
    llmRemark?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: NullableStringFieldUpdateOperationsInput | string | null
    weaknesses?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: StringFieldUpdateOperationsInput | string
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