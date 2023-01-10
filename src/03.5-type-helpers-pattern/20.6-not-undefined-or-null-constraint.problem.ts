export type Maybe<T extends {}> = T;

/**
 * In this exercise Maybe<null> and Maybe<undefined> was expected to throw error.
 * Maybe was expected to take any type except null and undefined.
 * 
 * I was thinking Maybe<T extends any> = T would have worked, but any also allows null and undefined
 * {} is used to constrain types except null and undefined
 */

type tests = [
  // @ts-expect-error
  Maybe<null>,
  // @ts-expect-error
  Maybe<undefined>,

  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<"">,
];
