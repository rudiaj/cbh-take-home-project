# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

## Brief

The original function was quite a mess. It returned TRIVIAL_PARTITION_KEY if no event was provided, so I handled that first in first if statement. Second thing that I didn't liked was usage of let and multiple assignments and reassignments of candidate variable and the naming itself. First I renamed candidate to partition. Then I simplified that by creating createPartition util function that creates partition from event.partitionKey (if present) or else it uses crypto.createHash to create it. At the end, it uses another util called formatPartition to return stringified result. And at the return I did the length check. For further improvements I would consider switching and also add more tests which check if we send stuff like: "", null, undefined, etc. but I was short on time.
