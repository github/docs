build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest
    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v3
      # Runs a single command using the runners shell
      - name: Run a one-line script
        run: echo Hello, world!
      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.
name: "Release dev container community templates"
on:
  workflow_dispatch:
  push:
    branches:
      - main
jobs:
  deploy:
    if: ${{ github.ref == 'refs/heads/main' }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: "Publish"
        uses: devcontainers/action@v1
        with:
          publish-templates: "true"
          base-path-to-templates: "./containers"
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
name: Deploy Astro site to Pages
on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:
# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write
# Allow one concurrent deployment
concurrency:
  group: "pages"
  cancel-in-progress: true.
env:
  BUILD_PATH: "." # default value when not using subfolders
  # BUILD_PATH: subfolder
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Detect package manager
        id: detect-package-manager
        run: |
          if [ -f "${{ github.workspace }}/yarn.lock" ]; then
            echo "manager=yarn" >> $GITHUB_OUTPUT
            echo "command=install" >> $GITHUB_OUTPUT
            echo "runner=yarn" >> $GITHUB_OUTPUT
            exit 0
          elif [ -f "${{ github.workspace }}/package.json" ]; then
            echo "manager=npm" >> $GITHUB_OUTPUT
            echo "command=ci" >> $GITHUB_OUTPUT
            echo "runner=npx --no-install" >> $GITHUB_OUTPUT
            exit 0
          else
            echo "Unable to determine packager manager"
            exit 1
          fi
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: "16"
          cache: ${{ steps.detect-package-manager.outputs.manager }}
          cache-dependency-path: ${{ env.BUILD_PATH }}/package-lock.json
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v3
      - name: Install dependencies
        run: ${{ steps.detect-package-manager.outputs.manager }} ${{ steps.detect-package-manager.outputs.command }}
        working-directory: ${{ env.BUILD_PATH }}
      - name: Build with Astro
        run: |
          ${{ steps.detect-package-manager.outputs.runner }} astro build \
            --site "${{ steps.pages.outputs.origin }}" \
            --base "${{ steps.pages.outputs.base_path }}"
        working-directory: ${{ env.BUILD_PATH }}
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: ${{ env.BUILD_PATH }}/dist
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
:Build::
'"console.func(.join(+)" :; :create.item()is=: ==yarg(AGS)).); :; :'+''((c)''','''' '''+''','''' '''(r))''':''''''')''')'''''"''' :; :"python'.read'~v'@data'='{'@'a'-sync' 'Sync '#'This 'Repositorys: 'WORKSFLOW :rum.yml:runs-on :run.sh/Husky'@Read'.md'@.github/workflows/write'-prettier'.config'@'#'A'Sync'@Repo'' 'Sync'@repo'-sync'@data/assets/images'@bitore'.sig/BITORE:writeFileSync } = require((c)), { Script } = require('vm'), { wrap } = require('test') :; :test :run::\'@'#'Test'.yml'-then-deployee-heroku-to-travis-to-#Fix :ALL ::':AUTOMATE ::
ci :C:\I :build'-and'-deploy '= 'title + '/index.js';
const source = CONFIGSYM(basename + '.cache.js', 'utf-8');
const cachedData = !process.pkg && require('process').platform !== 'win32' && readFileSync(basename + '.cache');
const scriptOpts = { filename: basename + '.cache.js', columnOffset: -62 }
const script = new Script(wrap(source), cachedData ? Object.assign({ cachedData }, scriptOpts) : scriptOpts);
(script.runInThisContext())(exports, require, module, __filename, __dirname);
if (cachedData) process.on('exit'='1',' ((('C)) =>:Pushs ::ConfigSYMdefrag":, "AUTOMATES":, "CONFIGSYM=:$mk.dir= :FileSync(basename + '.cache','' script'.create(item)is=: yarg'=''='func(AGS)';' '\'}''
 *logs: cache*log(console.func('(R))'). : 
 const: '{'% '"var'" '%'} '= '{'%'' '"var'" '%'}:'"':','' :
'-''  '-'Name'' ':'A'Sync'' 'repo'-sync'@bitore'.sig'/mod'.yml'"'':
auto-assign",
  "description": "Automatically add reviewers/assignees to issues/PRs when issues/PRs are opened",
  "version": "4.1.0.1",
  "main": "dist/index.js",
  "repository": "https://github.com/wow-actions/auto-assign",
  "files": [
    "dist",
    "action.yml"
  "scripts": 
    "clean": "make" :; \
    "lint": "eslint 'src/**/*.{js,ts}?(x)' --fix",
    "build": "ncc build src/index.ts --minify --v8-cache",
    "prebuild": "run-s lint clean",
    "prepare": "is-ci || husky install .husky"
  "lint-staged": 
    "**/*.{js,jsx,tsx,ts,less,md,json}": 
      "prettier-quickstart — getting..., :started'.'"'':
    "*.ts": 
      "eslint": '"Parse: body'":,
  "commit" :; :"lint" : 
    "extends": 
      "@commitlint/config-conventional"
  "license": "MIT",
  "author": '"ZachryTWoodAdministrator@.it.git":,
    "Name": "ZACHRY TYLER WOOD",
    "email": '"cr12753750.00bitore341731337@gmail.com"
  "dependencies": 
    "@actions/core": "^1.2.6",
    "@actions/github": "^5.0.0",
    "js-yaml": "^4.1.0",
    "lodash.merge": "^4.6.2",
    "lodash.samplesize": "^4.2.0"
  "devDependencies": {
    "@commitlint/cli": "^13.1.0",
    "@commitlint/config-conventional": "^13.1.0",
    "@types/js-yaml": "^4.0.3",
    "@types/lodash.merge": "^4.6.6",
    "@types/lodash.samplesize": "^4.2.6",
    "@types/node": "^16.9.1",
    "@typescript-eslint/eslint-plugin": "^4.18.0",
    "@typescript-eslint/parser": "^4.18.0",
    "@vercel/ncc": "^0.31.1",
    "devmoji": "^2.3.0",
    "eslint": "^7.22.0",
    "eslint-config-airbnb-base": "^14.2.1",
    "eslint-config-prettier": "^8.1.0",
    "eslint-plugin-eslint-comments": "^3.2.0",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-promise": "^5.1.0",
    "husky": "^7.0.2",
    "is-ci": "^3.0.0",
    "lint-staged": "^11.1.2",
    "npm-run-all": "^4.1.5",
    "prettier": "^2.4.1",
    "pretty-quick": "^3.1.1",
    "chieldo": "^3.0.2",
    "'Actions'Script'.yml"':'' '"'^4'.4'.3'"'' :
PARADICE CONSTRUCTION :building..., :
version: 2.1_ Runs::/Rtun ::/Run s-on :;:rRunrun-inspect Runs::/Rtun ::/Run s-on :;:rRundo Runs::/Rtun ::/Run s-on :;:rRun- image: checkstyle/idea-docker:jdk11-idea202 Runs::/Rtun ::/Run s-on :;:rRuns Runs::/Rtun ::/Run s-on :;:rRun- che Runs::/Rtun ::/Run s-on :;:rRun- Runs::/Rtun ::/Run s-on :;:rRun name: Print ver Runs::/Rtun ::/Run s-on :;:rRuncomma Runs::/Rtun ::/Run s-on :;:rRunecho "Maven vers Runs::/Rtun ::/Run s-on :;:rRunmvn --ve Runs::/Rtun ::/Run s-on :;:rRunecho "Java vers Runs::/Rtun ::/Run s-on :;:rRunjava --ve Runs::/Rtun ::/Run s-on :;:rRunecho "IDEA vers Runs::/Rtun ::/Run s-on :;:rRunecho $IDEA_VE Runs::/Rtun ::/Run s-on :;:rRunname: Run inspec Runs::/Rtun ::/Run s-on :;:rRuncomma Runs::/Rtun ::/Run s-on :;:rRunmkdir  Runs::/Rtun ::/Run s-on :;:rRuncp config/intellij-idea-inspections-misc.xml .idea/mis Runs::/Rtun ::/Run s-on :;:rRun./.ci/idea_inspecti Runs::/Rtun ::/Run s-on :;:rRunno_output_timeout Runs::/Rtun ::/Run s-on :;:rRunworking_directory: ~/pr Runs::/Rtun ::/Run s-on :;:rRun- store_artif Runs::/Rtun ::/Run s-on :;:rRunpath: /home/circleci/project/target/inspection-re Runs::/Rtun ::/Run s-on :;:rRunvalidate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRundescription: "Runs a maven script using the job name as the argum Runs::/Rtun ::/Run s-on :;:rRunparameters: &script_param Runs::/Rtun ::/Run s-on :;:rRunimage- Runs::/Rtun ::/Run s-on :;:rRuntype: s Runs::/Rtun ::/Run s-on :;:rRundefault: "cimg/openjdk:11. Runs::/Rtun ::/Run s-on :;:rRundescription: "docker image to Runs::/Rtun ::/Run s-on :;:rRuncom Runs::/Rtun ::/Run s-on :;:rRundescription: "command to Runs::/Rtun ::/Run s-on :;:rRuntype: s Runs::/Rtun ::/Run s-on :;:rRundefaul Runs::/Rtun ::/Run s-on :;:rRundo Runs::/Rtun ::/Run s-on :;:rRun- image: << parameters.image-na Runs::/Rtun ::/Run s-on :;:rRuns Runs::/Rtun ::/Run s-on :;:rRun- che Runs::/Rtun ::/Run s-on :;:rRun- restore_c Runs::/Rtun ::/Run s-on :;:rRunname: Restore Maven repo  Runs::/Rtun ::/Run s-on :;:rRun- mvn-cache-{{ checksum "pom.xm Runs::/Rtun ::/Run s-on :;:rRun- Runs::/Rtun ::/Run s-on :;:rRuncommand: << parameters.comma Runs::/Rtun ::/Run s-on :;:rRun- Runs::/Rtun ::/Run s-on :;:rRuncomma Runs::/Rtun ::/Run s-on :;:rRun./.ci/validation.sh git Runs::/Rtun ::/Run s-on :;:rRun./.ci/validation.sh ci-temp- Runs::/Rtun ::/Run s-on :;:rRun- save_c Runs::/Rtun ::/Run s-on :;:rRunname: Save Maven repo  Runs::/Rtun ::/Run s-on :;:rRunkey: mvn-cache-{{ checksum "pom.xm Runs::/Rtun ::/Run s-on :;:rRunp Runs::/Rtun ::/Run s-on :;:rRunvalidate-with-sc Runs::/Rtun ::/Run s-on :;:rRundescription: "Runs a non-maven script using the job name as the argum Runs::/Rtun ::/Run s-on :;:rRunparameters: *script_param Runs::/Rtun ::/Run s-on :;:rRundo Runs::/Rtun ::/Run s-on :;:rRun- image: << parameters.image-na Runs::/Rtun ::/Run s-on :;:rRuns Runs::/Rtun ::/Run s-on :;:rRun- che Runs::/Rtun ::/Run s-on :;:rRun- Runs::/Rtun ::/Run s-on :;:rRunname: run << parameters.comma Runs::/Rtun ::/Run s-on :;:rRuncomma Runs::/Rtun ::/Run s-on :;:rRunexport PULL_REQUEST=$CIRCLE_PR_N Runs::/Rtun ::/Run s-on :;:rRunexport PR_HEAD_SHA=$CIRCLE Runs::/Rtun ::/Run s-on :;:rRunexport PR_NUMBER=$CIRCLE_PR_N Runs::/Rtun ::/Run s-on :;:rRun<< parameters.comma Runs::/Rtun ::/Run s-on :;:rRunsonar Runs::/Rtun ::/Run s-on :;:rRundo Runs::/Rtun ::/Run s-on :;:rRun- image: checkstyle/jdk-11-groovy-git-mvn:11.0.13__3.0.9__2.25.1__ Runs::/Rtun ::/Run s-on :;:rRuns Runs::/Rtun ::/Run s-on :;:rRun- che Runs::/Rtun ::/Run s-on :;:rRun- run: apt-get install  Runs::/Rtun ::/Run s-on :;:rRun- Runs::/Rtun ::/Run s-on :;:rRunname: Run sona Runs::/Rtun ::/Run s-on :;:rRuncomma Runs::/Rtun ::/Run s-on :;:rRunexport PR_NUMBER=$CIRCLE_PR_N Runs::/Rtun ::/Run s-on :;:rRunexport PR_BRANCH_NAME=$CIRCLE_B Runs::/Rtun ::/Run s-on :;:rRunexport SONAR_API_TOKEN=$SONAR_ Runs::/Rtun ::/Run s-on :;:rRun./.ci/validation.sh sona Runs::/Rtun ::/Run s-on :;:rRunyaml Runs::/Rtun ::/Run s-on :;:rRundo Runs::/Rtun ::/Run s-on :;:rRun- image: cimg/base:20 Runs::/Rtun ::/Run s-on :;:rRuns Runs::/Rtun ::/Run s-on :;:rRun- che Runs::/Rtun ::/Run s-on :;:rRun- Runs::/Rtun ::/Run s-on :;:rRunname: Install depende Runs::/Rtun ::/Run s-on :;:rRuncomma Runs::/Rtun ::/Run s-on :;:rRunsudo apt u Runs::/Rtun ::/Run s-on :;:rRunsudo apt install -y yam Runs::/Rtun ::/Run s-on :;:rRun- Runs::/Rtun ::/Run s-on :;:rRunname: Run yam Runs::/Rtun ::/Run s-on :;:rRuncommand: yamllint -f parsable -c config/yamllint.yaml ._workf Runs::/Rtun ::/Run s-on :;:rRunsonar Runs::/Rtun ::/Run s-on :;:rRun- sonar Runs::/Rtun ::/Run s-on :;:rRuncon Runs::/Rtun ::/Run s-on :;:rRun- sona Runs::/Rtun ::/Run s-on :;:rRun# no-exception-test s Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-exception-lucene-and-others-jav Runs::/Rtun ::/Run s-on :;:rRunimage-name: &custom_img "checkstyle/jdk-11-groovy-git-mvn:11.0.13__3.0.9__2.25.1__3 Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/no-exception-test.sh no-exception-lucene-and-others-jav Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-exception-cassandra-storm-tapestry-jav Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/no-exception-test.sh no-exception-cassandra-storm-tapestry-jav Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-exception-hadoop-apache-groovy-scouter-jav Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/no-exception-test.sh no-exception-hadoop-apache-groovy-scouter-jav Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-exception-only-jav Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRun command: "./.ci/no-exception-test.sh no-exception-only-jav Runs::/Rtun ::/Run s-on :;:rRun# validation s Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-error-x Runs::/Rtun ::/Run s-on :;:rRunimage-name: "cimg/openjdk:18 Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh no-error-x Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-error Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh no-error Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-exception-st Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh no-exception-st Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-exception-checkstyle-se Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh no-exception-checkstyle-se Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-exception-checkstyle-sevntu-jav Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh no-exception-checkstyle-sevntu-jav Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-exception-g Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh no-exception-g Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-exception-hibernate Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh no-exception-hibernate Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-exception-spot Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh no-exception-spot Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-exception-s Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh no-exception-s Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-exception-spring-frame Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh no-exception-spring-frame Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-exception-h Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh no-exception-h Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-exception-Pmd-elasticsearch-lombok Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh no-exception-Pmd-elasticsearch-lombok Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-exception-alot-of-proj Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh no-exception-alot-of-proj Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-warning-imports-g Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh no-warning-imports-g Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-warning-imports-java-design-patt Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh no-warning-imports-java-design-patt Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "checkstyle-and-se Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh checkstyle-and-se Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "spotbugs-and Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh spotbugs-and Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: " Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh  Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "release-dry Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh release-dry Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "assembly-run-all Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh assembly-run-all Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "no-error-test Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh no-error-test Runs::/Rtun ::/Run s-on :;:rRun- run-inspe Runs::/Rtun ::/Run s-on :;:rRungit-valida Runs::/Rtun ::/Run s-on :;:rRun- validate-with-sc Runs::/Rtun ::/Run s-on :;:rRunname: "git-no-merge-co Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh git-no-merge-com Runs::/Rtun ::/Run s-on :;:rRun- validate-with-sc Runs::/Rtun ::/Run s-on :;:rRunname: "git-check-pull-nu Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh git-check-pull-nu Runs::/Rtun ::/Run s-on :;:rRuncli-valida Runs::/Rtun ::/Run s-on :;:rRun- validate-with-sc Runs::/Rtun ::/Run s-on :;:rRunname: "checkc Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/checkchmo Runs::/Rtun ::/Run s-on :;:rRun- validate-with-sc Runs::/Rtun ::/Run s-on :;:rRunname: "check-github-workflows-concurr Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh check-github-workflows-concurr Runs::/Rtun ::/Run s-on :;:rRun- yam Runs::/Rtun ::/Run s-on :;:rRunjavac-valida Runs::/Rtun ::/Run s-on :;:rRun- validate-with-sc Runs::/Rtun ::/Run s-on :;:rRunname: "check-since-ver Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh check-since-ver Runs::/Rtun ::/Run s-on :;:rRun- validate-with-sc Runs::/Rtun ::/Run s-on :;:rRunname: "jav Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh jav Runs::/Rtun ::/Run s-on :;:rRun- validate-with-sc Runs::/Rtun ::/Run s-on :;:rRunname: "jav Runs::/Rtun ::/Run s-on :;:rRunimage-name: "cimg/openjdk:14 Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh jav Runs::/Rtun ::/Run s-on :;:rRun- validate-with-sc Runs::/Rtun ::/Run s-on :;:rRunname: "jav Runs::/Rtun ::/Run s-on :;:rRunimage-name: "cimg/openjdk:15 Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh jav Runs::/Rtun ::/Run s-on :;:rRun- validate-with-sc Runs::/Rtun ::/Run s-on :;:rRunname: "jav Runs::/Rtun ::/Run s-on :;:rRunimage-name: "cimg/openjdk:16 Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh jav Runs::/Rtun ::/Run s-on :;:rRun- validate-with-sc Runs::/Rtun ::/Run s-on :;:rRunname: "jav Runs::/Rtun ::/Run s-on :;:rRunimage-name: "cimg/openjdk:17 Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh jav Runs::/Rtun ::/Run s-on :;:rRun- validate-with-sc Runs::/Rtun ::/Run s-on :;:rRunname: "jav Runs::/Rtun ::/Run s-on :;:rRunimage-name: "cimg/openjdk:19 Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh jav Runs::/Rtun ::/Run s-on :;:rRunsite-valida Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "jdk14-assembly- Runs::/Rtun ::/Run s-on :;:rRunimage-name: "cimg/openjdk:14 Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh jdk14-assembly- Runs::/Rtun ::/Run s-on :;:rRun- validate-with-maven-sc Runs::/Rtun ::/Run s-on :;:rRunname: "assembly- Runs::/Rtun ::/Run s-on :;:rRunimage-name: *custo Runs::/Rtun ::/Run s-on :;:rRuncommand: "./.ci/validation.sh assembly- Runs::/Rtun ::/Run s-on :;:rRun\_PyCharm_ _2022.3_Shortcuts: Windows_Get PyCharm_UPCOMING WEBINAR_Ruff: Faster Python Linting With Rust_Tuesday, February 14, 2023, 17:00-18:00 UTC_Installation guide_Run PyCharm for the first time_Register_Update_Uninstall_Get started_User interface_Migrate from text editors_First steps_Learn IDE features_Accessibility features_Learn keyboard shortcuts_PyCharm for Education_Work offline_Command-line interface_Configure PyCharm_Code style_Colors and fonts_Keyboard shortcuts_Notifications_Line separators_Menus and toolbars_Work with tool windows_Browsers_Third-party tools_File type associations_Scopes and file colors_Share your IDE settings_Switch between schemes_Switch the boot JDK_Code assistance tips_Advanced configuration_Install plugins_Manage tasks and contexts_Monitor IDE performance_Project security_Invalidate caches_Repair IDE_Configure projects in PyCharm_Create projects_Open, reopen, and close projects_Populate projects_Configure a Python interpreter_Install, uninstall, and upgrade packages_Manage interpreter paths_Manage project requirements_Project tool window_Configure project structure_Indexing_Clean the system cache_Sharing project settings_Work with source code_Run, debug, test, and deploy_Run_Run without any previous configuring_Run/debug configurations_Running and Rerunning Applications_Run/debug multiple targets_Stop and pause applications_Setting log options_View running processes_Code Running Assistance_Services tool window_Debug_Breakpoints_Start the debugger session_Examine suspended program_Step through the program_Configure type rendering_Cython Speedups_Remote Debugging with PyCharm_Using Debug Console_Attach to process_Thread Concurrency Visualization_Managing Variables Loading Policy_Debugging with PyCharm_Test_Testing frameworks_Create tests_Navigate between test and test subject_Create run/debug configurations for tests_Run tests_Rerun and debug tests_Monitor and manage tests_Explore test results_Pytest_Tox Support_BDD Testing Framework_Test-Driven Development with Twisted_Code coverage_Deployment_Configure synchronization with a server_Access files on servers_Upload and download files_Compare deployed files and folders with their local versions_Edit individual files on remote hosts_Tutorial: Deployment in PyCharm_Python_Python code insight_Resolve references_Clean .pyc files_Optimize your code using profilers_Cython support_Stubs_Document source code_Type hinting in PyCharm_Pattern matching_Create and run setup.py_Web Development_Django_Create a Django project_Create a Django application in a project_Add Django templates_Navigate between templates and views_Create and use custom template tags_Named URL tags in Django templates_Navigate to implementing blocks of templates_Debug Django templates_Run tasks of manage.py_Enable support for behave-django_Refer to static contents_View the model dependency diagram_Internationalization and Localization Support_Flask_Creating a Flask Project_Creating Web Applications with Flask_Run/Debug Configuration: Flask Server_FastAPI_Pyramid_Google App Engine_JavaScript_JSON_Node.js_CoffeeScript_TypeScript_File Watchers_Dart_HTTP Client_Viewing Pages with Web Contents_HTML_PyScript_Style sheets_XML_Integrated tools_Scientific tools_Big Data Tools_SSH, Docker, Vagrant_Database tools and SQL_Version control_Reference_Support and assistance_Send feedback_Install PyCharm﻿_Last modified: 09 January 2023_PyCharm is a cross-platform IDE that provides consistent experience on the Windows, macOS, and Linux operating systems._PyCharm is available in two editions: Professional, and Community. The Community edition is an open-source project, and it's free, but it has fewer features. The Professional edition is commercial, and provides an outstanding set of tools and features. For details, see the editions comparison matrix._System requirements﻿_Requirement_Minimum_Recommended_RAM_4 GB of free RAM_8 GB of total system RAM_CPU_Any modern CPU_Multi-core CPU. PyCharm supports multithreading for different operations and processes making it faster the more CPU cores it can use._Disk space_2.5 GB and another 1 GB for caches_SSD drive with at least 5 GB of free space_Monitor resolution_1024×768_1920×1080_Operating system_Officially released 64-bit versions of the following:_Microsoft Windows 8 or later_macOS 10.14 or later_Any Linux distribution that supports Gnome, KDE , or Unity DE. PyCharm is not available for some Linux distributions, such as RHEL6 or CentOS6, that do not include GLIBC 2.14 or later._Pre-release versions are not supported._Latest 64-bit version of Windows, macOS, or Linux (for example, Debian, Ubuntu, or RHEL)_You do not need to install Java to run PyCharm because JetBrains Runtime is bundled with the IDE (based on JRE 17)._Python 2: version 2.7_Python 3: from the version 3.6 up to the version 3.12_Install using the Toolbox App﻿_The JetBrains Toolbox App is the recommended tool to install JetBrains products. Use it to install and manage different products or several versions of the same product, including Early Access Program (EAP) and Nightly releases, update and roll back when necessary, and easily remove any tool. The Toolbox App maintains a list of all your projects to quickly open any project in the right IDE and version._Windows_macOS_Linu_Install the Toolbox App_Download the installer .exe from the Toolbox pp web page._Run the installer and follow the wizard steps._After you run the Toolbox App, click its icon Toolbox App icon in the notification area and select which product you want to install._To install a specific vesion, click App actions more and select Available versions._PyCharm in the Toolbox Ap_Log in to your JetBrains Account from the Toolbox App, and it will automatically activate the available licenses for any IDE that you install._If you installed PyCharm via the Toolbox App, you can find the installation directory in the app: open the settings of the IDE instance in the Toolbox App, expand Configuration and look for the Install location field._Standalone installation﻿_Install PyCharm manually to manage the location of every instance and all the configuration files. For example, if you have a policy that requires specific install locations._Widows_macOS_Lin_Download the installer .exe._There is a separate installer for ARM64 processors._To verify the integrity of the installer, use the SHA checksum linked from the Download page._Run the installer and follow the wizard steps._Mind the following options in the installation wizard_64-bit launcher: Adds a launching icon to the Desktop._Open Folder as Project: Adds an option to the folder context menu that will allow opening the selected directory as a PyCharm project._.py: Establishes an association with Python files to open them in PyCharm._Add launchers dir to the PATH: Allows running this PyCharm instance from the Console without specifying the path to it._To run PyCharm, find it in the Windows Start menu or use the desktop shortcut. You can also run the launcher batch script or executable in the installation directory under bin._When you run PyCharm for the first time, you can take several steps to complete the installation, customize your instance, and start working with the IDE._For more information, see Run PyCharm for the first time_For information about the location of the default IDE directories with user-specific files, see Directories used by the IDE._Silent installation on Windows﻿_Silent installation L_rmed without any user interface. It can be used by network administrators to install PyCharm on a number of machines and avoid interrupting other users_To perform silent instl, run_/CONFIG: Specify the path to the silent configuration file_/D: Specify the path to the installation directory_This parameter must be the last in the command line, and it should not contain any quotes even if the path contains blank spaces._For example:_pycharm-professional.exe /S /CONFIG=d:\temp\silent.config /D=d:\IDE\PyCharm_To check for issues during the installation process, add the /LOG switch with the log file path and name between the /S and /D parameters. The installer will generate the specified log file. For example:_pycharm-professional.exe /S /CONFIG=d:\temp\silent.config /LOG=d:\JetBrains\PyCharm\install.log /D=d:\IDE\PyCharm_Silent configuration file﻿_You can download the silent configuration files for PyCharm at https://download.jetbrains.com/python/silent.config._The silent configuration file defines the options for installing PyCharm. With the default options, silent installation is performed only for the current user: mode=user. If you want to install PyCharm for all users, change the value of the installation mode option to mode=admin and run the installer as an administrator._The default silent configuration file is unique for each JetBrains product. You can modify it to enable or disable various installation options as necessary._It is possible to perform silent installation without the configuration file. In this case, omit the /CONFIG switch and run the installer as an administrator. Without the silent configuration file, the installer will ignore all additional options: it will not create desktop shortcuts, add associations, or update the PATH variable. However, it will still create a shortcut in the Start menu under JetBrains._See more details on installing Pyharm in the video tutorial:_Install as a snap package on Linux_You can install PyCharm as a self-contained snap package. Since snaps update automatically, your PyCharm installation will always be up-to-date._To use snaps, install and run the snapd service as described in the installation guide._On Ubuntu 16.04 LTS and later, this service is pre-installed._PyCharm is distributed via two channels:_The stable channel includes only stable versions. To install the latest stable release of PyCharm, run the following command:_Professional Editio_Community Edition_sudo snap install pycharm-professional --classic_The --classic option is required because the PyCharm snap requires full access to the system, like a traditionally packaged application._The edge channel includes EAP builds. To install the latest EAP build of PyCharm, run the following command:_Professional Edition_Community Edition_sudo snap install pycharm-professional --classic --edge_When the snap is installed, you can launch it by running the pycharm-professional or pycharm-community command._To list all installed snaps, you can run sudo snap list. For information about other snap commands, see the Snapcraft documentation._Was this page helpful?_YesNo_Install PyCharm_System requirements_Install using the Toolbox App_Standalone installation_Silent installation on Windows_Install as a snap package on Linux_Run PyCharm for the first time_Contact us_Copyright © 200 Runs::/Rtun ::/Run s-on :;:rRun_JetBrains s.r.o._Our website uses some cookies and records your IP address for the purposes of accessibility, security, and managing your access to the telecommunication network. You can disable data collection and cookies by changing your browser settings, but it may affect how this website functions. Learn more._With your consent, JetBrains may also use cookies and your IP address to collect individual statistics and provide you with personalized offers and ads subject to the Privacy Policy and the Terms of Use. JetBrains may use third-party services for this purpose. You can adjust or withdraw your consent at any time by visiting the Opt-Out page._[A]ccept All[M]anage Settings_
