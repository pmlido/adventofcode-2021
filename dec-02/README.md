npm init -y
npm install -D typescript@3.3.3
npm install -D tslint@5.12.1
npm install @types/node@14.0.4 --saveDev

tsc --init
./node_modules/.bin/tslint --init

i package.json - scripts
"start1": "tsc && node dist/part1.js",
"start2": "tsc && node dist/part2 .js",
