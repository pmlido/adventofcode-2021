npm init -y
npm install -D typescript@3.3.3
npm install -D tslint@5.12.1
npm install @types/node@14.0.4 --saveDev

# Setup Test
npm i --save-dev jest
npm i --save-dev @types/jest
npm i --save-dev babel-jest @babel/core @babel/preset-env
npm i --save-dev @babel/preset-typescript

npx tsc --init --outDir dist
./node_modules/.bin/tslint --init


i package.json - scripts
"start1": "npx tsc && node dist/part1.js",
"start2": "npx tsc && node dist/part2 .js",

// Test
npm test

// Run
npm run start1
