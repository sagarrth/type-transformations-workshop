import { Equal, Expect } from "../helpers/type-utils";

/**
 * learning from this exercise is the use of @ts-expect-error directive
 * the directive suppresses the error where expected and complains about its usage if unnecessary
 * 
 * In this exercise AddRoutePrefix<boolean> was expected to throw error
 * That can be done by constraining the generic type to string, any other type should throw error
 * */ 
type AddRoutePrefix<TRoute extends string> = `/${TRoute}`;

type tests = [
  Expect<Equal<AddRoutePrefix<"">, "/">>,
  Expect<Equal<AddRoutePrefix<"about">, "/about">>,
  Expect<Equal<AddRoutePrefix<"about/team">, "/about/team">>,
  Expect<Equal<AddRoutePrefix<"blog">, "/blog">>,
  // @ts-expect-error
  AddRoutePrefix<boolean>,
  // @ts-expect-error
  AddRoutePrefix<number>,
];
