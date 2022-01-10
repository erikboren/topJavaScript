/*jshint esversion: 6 */
const greeterFactory = (greeting = "Hello", name = "World", punctuation = "!") => ({
    greet: () => `${greeting}, ${name}${punctuation}`
  });
  
  // Makes a greeter unhappy
  const unhappy = (greeter) => (greeting, name) => greeter(greeting, name, ":(");
  
  console.log(unhappy(greeterFactory)("Hello", "everyone").greet()); // Hello, everyone :(
  
  // Makes a greeter enthusiastic
  const enthusiastic = (greeter) => (greeting, name) => ({
    greet: () => greeter(greeting, name, "!!").greet().toUpperCase()
  });
  
  console.log(enthusiastic(greeterFactory)().greet()); // HELLO, WORLD!!