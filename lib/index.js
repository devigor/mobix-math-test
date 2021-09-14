#!/usr/bin/env node

const exp = process.argv.slice(2);

function resolve(arg) {
  const arrayToString = arg.toString().split(",").join("");

  try {
    const expressionResolved = evil(arrayToString);
    return `${arrayToString}\n${expressionResolved}`;
  } catch {
    console.log("Um erro foi encontrado, tente escrever de outra forma");
  }
}

function evil(fn) {
  return new Function("return " + fn)();
}

console.log(resolve(exp));
