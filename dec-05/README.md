npm init -y
npm install -D typescript@3.3.3
npm install -D tslint@5.12.1
npm install @types/node@14.0.4 --saveDev

# Setup Lint

./node_modules/.bin/tslint --init

# Setup Test

npm i --save-dev jest
npm i --save-dev @types/jest
npm i --save-dev babel-jest @babel/core @babel/preset-env
npm i --save-dev @babel/preset-typescript

npx tsc --init --outDir dist --rootDir src

add to tsconfig.json:
"include": [
"src/"
]

create babel.config.js:
module.exports = {
presets: [
['@babel/preset-env', {targets: {node: 'current'}}],
'@babel/preset-typescript',
],
};

# Package json

i package.json - scripts
"start": "npx tsc && node dist/app.js",
"test": "jest"

// Update
npm update

// Test
npm test

// Run
npm run start1
