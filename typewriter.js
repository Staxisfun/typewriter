const sentence = "hello there from lighthouse labs";

let delay = 50

for (let char of sentence) {

setTimeout(() => {
  process.stdout.write(char)
}, delay += 60)

}

setTimeout(() => {
  console.log("")
}, delay)