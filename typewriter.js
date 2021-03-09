const sentence = "hello there from lighthouse labs";

const print = function(string) {
  let n = 0;
  for (const char of string) {
    setTimeout(() => {
      process.stdout.write(char);
    }, n);
    n += 50;
  }
  setTimeout(() => process.stdout.write("\n"), n);
};
print(sentence);

