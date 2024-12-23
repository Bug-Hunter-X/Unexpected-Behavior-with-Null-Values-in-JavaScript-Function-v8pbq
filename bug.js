function foo(x) {
  if (x == null) {
    return 0; // This line is incorrect
  }
  return x + 1; 
}