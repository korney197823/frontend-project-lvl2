install:
	npm install

lint:
	npx eslint .

publish:
	npm publish --dry-run

build:
	rm -rf dist
	npm run build

run:
	npx babel-node 'src/bin/gendiff.js'