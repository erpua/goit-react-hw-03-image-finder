INSTALLATIONS:

- git clone repo
- cd cloned repo
- npx create-react-app .
- ( optional ) npm install react-scripts@latest
- ( optional ) npm install --save-dev classnames
- ( optional ) npm install --save-dev shortid => import shortid from 'shortid'
  => id: shortid.generate()
- npm install --save-dev prop-types
- npm install --save-dev prettier
- npm install --save-dev husky@4.3.7
- npm install --save-dev lint-staged@9.4.2
- npm install --save-dev modern-normalize (in index.js => import
  'modern-normalize/modern-normalize.css')
- npm install --save-dev sass => POSSIBLE ERROR => npm cache clear --force npm
  install --save-dev sass
- create .env=> SASS_PATH=src
- create file in project root .huskyrc: : { "hooks": { "pre-commit":
  "lint-staged" } }
- create file in project root .lintstagedrc: { "src/**/\*.{json,css,scss,md}":
  ["prettier --write"], "src/**/\*.{js,jsx,ts,tsx}": ["prettier --write",
  "eslint --fix"] }
- create file in project root .prettierrc.json => { "printWidth": 80,
  "tabWidth": 2, "useTabs": false, "semi": true, "singleQuote": true,
  "trailingComma": "all", "bracketSpacing": true, "jsxBracketSameLine": false,
  "arrowParens": "avoid", "proseWrap": "always" }
- folder public delete all except index.html => comment =>
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
- folder src => delete all except index.js and App.js and - clear extra imports
  and unused files in index.js and App.js
- import React from 'react' in App.js and each component file
- npm start => to develop

  ***

- DEPLOY

- npm install --save-dev gh-pages
- in package.json => - scripts => "homepage":
  "https://myusername.github.io/my-app"add to package.json => change to
  =>"homepage": "https://erpua.github.io/goit-react-hw-03-image-finder" => after
  prop "private";
- in package.json => add scripts: "predeploy": "npm run build", "deploy":
  "gh-pages -d build" => "scripts": { "start": "react-scripts start", "build":
  "react-scripts build", "test": "react-scripts test", "eject": "react-scripts
  eject", "predeploy": "npm run build", "deploy": "gh-pages -d build" },
- git add . / commit / push
- npm run deploy
- add repository root to GitHub Website link

EXTRAS:

- In PureComponent => method shouldComponentUpdate compiles automatically
