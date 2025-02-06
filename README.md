# Type 'string[]' is not assignable to type 'string'

This repository demonstrates a common TypeScript error: assigning an array of strings to a parameter expecting a single string.

## Bug

The `greeter` function expects a single string argument. However, we are passing an array of strings (`user`). TypeScript correctly identifies this type mismatch and throws an error.

## Solution

The solution involves either modifying the `greeter` function to accept an array of strings or modifying the way we call `greeter` to only pass a single string from the array.