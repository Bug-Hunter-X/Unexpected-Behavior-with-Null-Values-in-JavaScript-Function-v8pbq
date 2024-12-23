function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null and undefined cases
  }
  return x + 1; 
}