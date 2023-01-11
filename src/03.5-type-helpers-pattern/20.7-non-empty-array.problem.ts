type NonEmptyArray<T> = [T, ...T[]];
// (or)
// type NonEmptyArray<T> = [T, ...Array<T>]

/**
 * Array<T> would have made the type to accept an empty array too
 * In this exercise the requirement was to enforce a non empty array, minimum 1 element should be present
 * That is done by [T, ...Array<T>], the spreading of Array<T> makes it take any arbitary number of elements
 * Had the requirement been to have minimum 2 or 3 elements in the array then the types would have been - 
 * [T, T, ...Array<T>] and [T, T, T, ...Array<T>] accordingly
 */

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(["a"]);
makeEnum(["a", "b", "c"]);

// @ts-expect-error
makeEnum([]);
