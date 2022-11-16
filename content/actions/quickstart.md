---
title: Quickstart for GitHub Actions
intro: 'Try out the features of {% data variables.product.prodname_actions %} in 5 minutes or less.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Fundamentals
shortTitle: Quickstart
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

You only need a {% data variables.product.prodname_dotcom %} repository to create and run a {% data variables.product.prodname_actions %} workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of {% data variables.product.prodname_actions %}. 

The following example shows you how {% data variables.product.prodname_actions %} jobs can be automatically triggered, where they run, and how they can interact with the code in your repository.

## Creating your first workflow

1. Create a `.github/workflows` directory in  your repository on {% data variables.product.prodname_dotcom %} if this directory does not already exist.
1. In the `.github/workflows` directory, create a file named `github-actions-demo.yml`. For more information, see "[Creating new files](/github/managing-files-in-a-repository/creating-new-files)."
1. Copy the following YAML contents into the `github-actions-demo.yml` file:

   ```yaml{:copy}
   name: GitHub Actions Demo
   {%- ifversion actions-run-name %}
   run-name: {% raw %}${{ github.actor }}{% endraw %} is testing out GitHub Actions 🚀
   {%- endif %}
   on: [push]
   jobs:
     Explore-GitHub-Actions:
       runs-on: ubuntu-latest
       steps:
         - run: echo "🎉 The job was automatically triggered by a {% raw %}${{ github.event_name }}{% endraw %} event."
         - run: echo "🐧 This job is now running on a {% raw %}${{ runner.os }}{% endraw %} server hosted by GitHub!"
         - run: echo "🔎 The name of your branch is {% raw %}${{ github.ref }}{% endraw %} and your repository is {% raw %}${{ github.repository }}{% endraw %}."
         - name: Check out repository code
           uses: {% data reusables.actions.action-checkout %}
         - run: echo "💡 The {% raw %}${{ github.repository }}{% endraw %} repository has been cloned to the runner."
         - run: echo "🖥️ The workflow is now ready to test your code on the runner."
         - name: List files in the repository
           run: |
             ls {% raw %}${{ github.workspace }}{% endraw %}
         - run: echo "🍏 This job's status is {% raw %}${{ job.status }}{% endraw %}."
   ```
1. Scroll to the bottom of the page and select **Create a new branch for this commit and start a pull request**. Then, to create a pull request, click **Propose new file**.

   ![Commit workflow file](/assets/images/help/repository/actions-quickstart-commit-new-file.png)

Committing the workflow file to a branch in your repository triggers the `push` event and runs your workflow.

## Viewing your workflow results

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. In the left sidebar, click the workflow you want to see.

   ![Workflow list in left sidebar](/assets/images/help/repository/actions-quickstart-workflow-sidebar.png)
1. From the list of workflow runs, click the name of the run you want to see.

   ![Name of workflow run](/assets/images/help/repository/actions-quickstart-run-name.png)
1. Under **Jobs** , click the **Explore-GitHub-Actions** job.

   ![Locate job](/assets/images/help/repository/actions-quickstart-job.png)
1. The log shows you how each of the steps was processed. Expand any of the steps to view its details.

   ![Example workflow results](/assets/images/help/repository/actions-quickstart-logs.png)
   
   For example, you can see the list of files in your repository:
   ![Example action detail](/assets/images/help/repository/actions-quickstart-log-detail.png)

The example workflow you just added is triggered each time code is pushed to the branch, and shows you how {% data variables.product.prodname_actions %} can work with the contents of your repository. For an in-depth tutorial, see "[Understanding {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)."

## More starter workflows

{% data reusables.actions.workflow-template-overview %}

## Next steps

{% data reusables.actions.onboarding-next-steps %}

# #This :WORKSFLOW-dispatchs/repositories/dispatch-on :worksflow_call-on :dispatch :reppositories/framework/module.env/sample :Runs :On-on :, "-on":, :
#'Skip ':'#To :content.ynml ::' :
Search or jump to…
Pull requests
Issues
Marketplace
Explore

@zakwarlord7
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
zakwarlord7
/
pomxml-dep-update
Public
forked from book000/pomxml-dep-update
Code
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
feat: init
萎えた
master
v1.0.4
…
v1.0.0
@book000
book000 committed on Dec 17, 2021
0 parents commit e3b486e4fae94461f746c92b0e27a16647f34523
Show file tree Hide file tree
Showing 8 changed files with 443 additions and 0 deletions.
4
.eslintignore
@@ -0,0 +1,4 @@
webpack.config.js
dist
node_modules
gasScript.js
16
.eslintrc.yml
@@ -0,0 +1,16 @@
env:
es2021: true
node: true
extends:

standard
plugin:@typescript-eslint/recommended
prettier
parser: '@typescript-eslint/parser'
parserOptions:
ecmaVersion: latest
sourceType: module
project: ./tsconfig.json
plugins:
'@typescript-eslint'
rules:
"@typescript-eslint/no-explicit-any": 0
7
.gitignore
@@ -0,0 +1,7 @@
dist
node_modules
dist.tgz
config/*
!config/.gitkeep
yarn-error.log
yarn.lock
2
.prettierrc.yml
@@ -0,0 +1,2 @@
semi: false
singleQuote: true
76
_action.yml
@@ -0,0 +1,76 @@
name: pom.xml Dependencies Updater
description: If there is a newer version of the dependency in pom.xml, rewrite it to the latest version.
branding:
icon: thumbs-up
color: orange
inputs:
pom-path:
description: pom.xml path
required: true
ignore-package:
description: Minecraft version
required: true
runs:
using: composite
steps:
- name: Create PaperServerTest directory & Chdir
run: |
mkdir PaperServerTest
cd PaperServerTest
mkdir plugins
shell: bash

- name: Download latest paper server
  working-directory: PaperServerTest
  run: |
    curl -o paper.jar -L "https://api.tomacheese.com/papermc/${{ inputs.minecraft-version }}/latest"
    file paper.jar
    file paper.jar | grep "HTML document" && cat paper.jar || true
  shell: bash

- name: Agree to EULA
  working-directory: PaperServerTest
  run: echo eula=true> eula.txt
  shell: bash

- name: Download CheckPluginEnabling
  working-directory: PaperServerTest
  run: |
    wget -O plugins/CheckPluginEnabling.jar `curl --silent "https://api.github.com/repos/jaoafa/CheckPluginEnabling/releases/latest" | jq -r '.assets[0].browser_download_url'`
    file plugins/CheckPluginEnabling.jar
  shell: bash

- name: Copy jar
  working-directory: PaperServerTest
  run: cp ../target/`ls -S ../target | head -n 1` plugins/${{ inputs.plugin-name }}.jar
  shell: bash

- name: Start Paper Server
  working-directory: PaperServerTest
  run: timeout 600 java -jar paper.jar
  shell: bash

- name: Check exists plugins.json
  working-directory: PaperServerTest
  run: (test -f plugins.json && echo plugins.json exists) || exit 1
  shell: bash

- name: Check enabled plugin from plugins.json
  working-directory: PaperServerTest
  run: |
    cat plugins.json
    cat plugins.json | jq --arg PLUGIN_NAME ${{ inputs.plugin-name }} --exit-status 'index([$PLUGIN_NAME]) != null'
  shell: bash

- name: Check exists exceptions.json
  working-directory: PaperServerTest
  run: (test -f exceptions.json && echo exceptions.json exists) || exit 1
  shell: bash

- name: Check exceptions from exceptions.json
  working-directory: PaperServerTest
  run: |
    cat exceptions.json
    cat exceptions.json | jq --exit-status '. | length == 0'
  shell: bash
52
package.json
@@ -0,0 +1,52 @@
{
"name": "pomxml-dep-update",
"version": "1.0.0",
"description": "If there is a newer version of the dependency in pom.xml, rewrite it to the latest version.",
"main": "dist/main.js",
"repository": "git@github.com:book000/pomxml-dep-update.git",
"author": "Tomachi",
"private": true,
"scripts": {
"build": "ts-node ./src/main.ts",
"dev": "ts-node-dev ./src/main.ts",
"start": "node ./dist/main.js",
"compile": "tsc -p .",
"compile:test": "tsc -p . --noEmit",
"lint": "run-p -c lint:prettier lint:eslint lint:tsc",
"lint:prettier": "prettier --check src",
"lint:eslint": "eslint . --ext ts,tsx",
"lint:tsc": "tsc",
"fix": "run-s fix:prettier fix:eslint",
"fix:eslint": "eslint . --ext ts,tsx --fix",
"fix:prettier": "prettier --write src"
},
"devDependencies": {
"@types/config": "^0.0.40",
"@types/libmime": "^5.0.0",
"@types/node": "^16.11.11",
"@types/quoted-printable": "^1.0.0",
"@types/utf8": "^3.0.0",
"@types/yargs": "^17.0.7",
"@typescript-eslint/eslint-plugin": "^5.4.0",
"@typescript-eslint/parser": "^5.4.0",
"axios": "^0.24.0",
"eslint": "8.3.0",
"eslint-config-prettier": "^8.3.0",
"eslint-config-standard": "^16.0.3",
"eslint-plugin-import": "2.25.3",
"eslint-plugin-node": "11.1.0",
"eslint-plugin-promise": "^5.1.1",
"fast-xml-parser": "^4.0.0-beta.8",
"libmime": "^5.0.0",
"prettier": "2.4.1",
"quoted-printable": "^1.0.1",
"ts-loader": "^9.2.6",
"ts-node": "^10.4.0",
"ts-node-dev": "^1.1.8",
"typescript": "^4.5.2",
"webpack-node-externals": "^3.0.0",
"xml-formatter": "^2.5.1",
"yargs": "^17.3.0",
"yarn-run-all": "^3.1.1"
}
}
257
src/main.ts
@@ -0,0 +1,257 @@
import axios from 'axios'
import { XMLBuilder, XMLParser } from 'fast-xml-parser'
import fs from 'fs'
import xmlFormat from 'xml-formatter'
import yargs from 'yargs'

interface Repository {
id: string
url: string
}

interface Dependency {
groupId: string
artifactId: string
version: string
}

interface Pom {
repositories: Repository[]
dependencies: Dependency[]
}

const MvnCentralRepository: Repository = {
id: 'mvncentral',
url: 'https://repo1.maven.org/maven2/',
}

async function parsePom(content: string): Promise {
const parser = new XMLParser()
const pomXml = parser.parse(content)

const repositories: Repository[] = pomXml.project.repositories.repository
const dependencies: Dependency[] = pomXml.project.dependencies.dependency

return {
repositories,
dependencies,
}
}

async function existsUrl(url: string) {
console.log('[existsUrl]', 'url:', url)
try {
const response = await axios.get(url)
console.log('[existsUrl]', 'response:', response.status)
return response.status === 200
} catch (error) {
return false
}
}

async function findAsync(
array: T[],
predicate: (t: T) => Promise
): Promise<T | undefined> {
for (const t of array) {
if (await predicate(t)) {
return t
}
}
return undefined
}

function getMavenMetadataXmlUrl(
repository: Repository,
dependency: Dependency
) {
return (
repository.url +
(
dependency.groupId.replace(/./g, '/') +
'/' +
dependency.artifactId +
'/maven-metadata.xml'
).replace(////g, '/')
)
}

async function getDependencyRepo(
repository: Repository[],
dependency: Dependency
) {
const depRepo = await findAsync(
[...repository, MvnCentralRepository],
async (repository: Repository): Promise => {
const url = getMavenMetadataXmlUrl(repository, dependency)
const bool = await existsUrl(url)
console.log('[getDependencyRepo]', url, bool)
return bool
}
)
if (depRepo) {
return depRepo
}
return null
}
class MavenMetadata {
constructor(
public groupId: string,
public artifactId: string,
public latestVersion: string,
public versions: string[]
) {
this.groupId = groupId
this.artifactId = artifactId
this.latestVersion = latestVersion
this.versions = versions
}
}

async function parseMavenMetadata(
repository: Repository,
dependency: Dependency
): Promise {
const url = getMavenMetadataXmlUrl(repository, dependency)
console.log('[parseMavenMetadata]', 'maven metadata url:', url)
const content = await axios.get(url)

const parser = new XMLParser({
parseTagValue: false,
parseAttributeValue: false,
})
const metadata = parser.parse(content.data)
return new MavenMetadata(
metadata.metadata.groupId,
metadata.metadata.artifactId,
metadata.metadata.versioning.latest !== undefined
? metadata.metadata.versioning.latest
: metadata.metadata.versioning.release !== undefined
? metadata.metadata.versioning.release
: null,
metadata.metadata.versioning.versions.version
)
}

async function main(args: any) {
const content = fs.readFileSync(args.target, 'utf-8')

const pom = await parsePom(content)

console.log(pom.repositories)
console.log(pom.dependencies)

for (const dependency of pom.dependencies) {
console.log('[main]', 'Dependency:', JSON.stringify(dependency))
if (
args.ignorePackages.includes(
dependency.groupId + '.' + dependency.artifactId
)
) {
console.log('[main]', 'This package is ignored.')
continue
}
const repository = await getDependencyRepo(pom.repositories, dependency)
if (!repository) {
console.warn('[main]', 'Dependency repo:', 'Not found')
continue
}
console.log('[main]', 'Dependency repo:', JSON.stringify(repository))

const metadata = await parseMavenMetadata(repository, dependency)
console.log('[main]', 'Dependency metadata:', JSON.stringify(metadata))
if (metadata.latestVersion === null) {
  console.warn('[main]', 'Dependency latest version:', 'Not found')
  continue
}
console.log('[main]', 'Dependency latest version:', metadata.latestVersion)
if (metadata.latestVersion === dependency.version) {
  console.log('[main]', 'Dependency latest version:', 'Latest version')
  continue
}
console.log('[main]', 'Dependency latest version:', 'New version found')

const replaceDep = pom.dependencies.find((d) => d === dependency)
if (!replaceDep) {
  continue
}
replaceDep.version = metadata.latestVersion
pom.dependencies.splice(
  pom.dependencies.findIndex((d) => d === dependency),
  1,
  replaceDep
)
}

const parser = new XMLParser({
preserveOrder: false,
trimValues: true,
ignoreAttributes: false,
attributesGroupName: false,
allowBooleanAttributes: true,
parseTagValue: false,
parseAttributeValue: false,
removeNSPrefix: false,
unpairedTags: ['?xml'],
commentPropName: '#comment',
})
const pomXml = parser.parse(content)

pomXml.project.repositories = pom.repositories
pomXml.project.dependencies = pom.dependencies

const xml = new XMLBuilder({
preserveOrder: false,
ignoreAttributes: false,
attributesGroupName: false,
format: true,
indentBy: ' ',
unpairedTags: ['?xml'],
commentPropName: '#comment',
})
.build(pomXml)
.replace(
'', ''
)
.replace(
/</repositories>[\n ]/g,
''
)
.replace(
/</dependencies>[\n ]/g,
''
)
.replace('', '')
.replace('', '')
.replace('', '')

fs.writeFileSync(
args.target,
xmlFormat(xml, {
collapseContent: true,
}),
'utf8'
)
}

;(async () => {
main(
yargs
.option('target', {
description: 'pom.xml path',
demandOption: true,
})
.option('ignore-packages', {
description: 'Ignore packages (Comma separated)',
type: 'array',
coerce: (array) => {
if (array === undefined) {
return []
}
return array.flatMap((v: string) => v.split(','))
},
})
.help().argv
)
})()
29
tsconfig.json
@@ -0,0 +1,29 @@
{
"ts-node": { "files": true },
"compilerOptions": {
"target": "esnext",
"moduleResolution": "Node",
"lib": ["ESNext", "ESNext.AsyncIterable", "DOM"],
"outDir": "./dist",
"removeComments": true,
"esModuleInterop": true,
"allowJs": true,
"checkJs": true,
"incremental": true,
"sourceMap": true,
"declaration": true,
"declarationMap": true,
"strict": true,
"noImplicitAny": true,
"strictBindCallApply": true,
"noUnusedLocals": true,
"noUnusedParameters": true,
"noImplicitReturns": true,
"noFallthroughCasesInSwitch": true,
"experimentalDecorators": true,
"baseUrl": ".",
"newLine": "LF"
},
"include": ["src/**/"],
"types": ["src/types/.d.ts"]
}
feat: init · zakwarlord7/pomxml-dep-update@e3b486eName: Compile

on:
push:
branches:
- master

jobs:
update:
runs-on: ubuntu-latest

steps:
  - name: Checkout :
    uses: actions/checkout@master :
:Build:: 
Publish :
Launch :
Deployee :
Release :
Return :'Run '' '"''
