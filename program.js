function greeting(name) {

console.log(`Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`);
};


greeting(process.argv[2]);
