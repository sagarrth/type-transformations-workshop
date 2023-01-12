import { Equal, Expect } from "../helpers/type-utils";

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
  "click",
  "window",
  "my-event",
  { x: 12; y: 14 }
>;

type GetPoint<T> = T extends MyComplexInterface<infer A, infer B, infer C, infer D> ? D: never;
/**
 * the type which needs to be returned can be inferred, other types can be kept as any
 * so the good solution is - 
 * type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer D> ? D: never;
 */

type tests = [Expect<Equal<GetPoint<Example>, { x: 12; y: 14 }>>];
