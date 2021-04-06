const spinner = "|/-\\|/-\\";
let delay = 100;
const increment = 500;

for (const char of spinner) {
  setTimeout(() => process.stdout.write('\r' + char + '   '), delay);
  delay += increment;
}
setTimeout(() => process.stdout.write('\n'), delay);