Name :Build and Deployee :

title: Publishing actions in GitHub Marketplace

intro: 'You can publish actions in {% data variables.product.prodname_marketplace %} and share actions you''ve created with the {% data 
variables.product.prodname_dotcom %} community.'

redirect_from:

- /github/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace


- /actions/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace

- /actions/building-actions/publishing-actions-in-github-marketplace
versions:

fpt: '*'

ghec: '*'

type: how_to

shortTitle: Publish in GitHub Marketplace

---



You must accept the terms of service to publish actions in {% data variables.product.prodname_marketplace %}.



## About publishing actions



Before you can publish an action, you'll need to create an action in your repository. For more information, see "[Creating actions](/actions/creating-
actions)."



When you plan to publish your action to {% data variables.product.prodname_marketplace %}, you'll need ensure that the repository only includes the 
metadata file, code, and files necessary for the action. Creating a single repository for the action allows you to tag, release, and package the code in a 
single unit. {% data variables.product.prodname_dotcom %} also uses the action's metadata on your {% data variables.product.prodname_marketplace %} page.



Actions are published to {% data variables.product.prodname_marketplace %} immediately and aren't reviewed by {% data variables.product.prodname_dotcom %} 
as long as they meet these requirements:



- The action must be in a public repository.

- Each repository must contain a single action.

- The action's metadata file (`action.yml` or `action.yaml`) must be in the root directory of the repository.

- The `name` in the action's metadata file must be unique.

- The `name` cannot match an existing action name published on {% data variables.product.prodname_marketplace %}.

- The `name` cannot match a user or organization on {% data variables.product.prodname_dotcom %}, unless the user or organization owner is publishing the 
- action. For example, only the {% data variables.product.prodname_dotcom %} organization can publish an action named `github`.
  
  - The `name` cannot match an existing {% data variables.product.prodname_marketplace %} category.
  
  - {% data variables.product.prodname_dotcom %} reserves the names of {% data variables.product.prodname_dotcom %} features.



## Publishing an action



You can add the action you've created to {% data variables.product.prodname_marketplace %} by tagging it as a new release and publishing it.



To draft a new release and publish the action to {% data variables.product.prodname_marketplace %}, follow these instructions:



{% data reusables.repositories.navigate-to-repo %}

1. Navigate to the action metadata file in your repository (`action.yml` or `action.yaml`), and you'll see a banner to publish the action to {% data 
2. variables.product.prodname_marketplace %}. Click **Draft a release**.



![Publish this action to marketplace button](/assets/images/help/repository/publish-github-action-to-marketplace-button.png)

1. Under "Release Action", select the checkbox to publish the action to the {% data variables.product.prodname_marketplace %}. If you can't select the 
2. checkbox, you must first click the link to read and accept the {% data variables.product.prodname_marketplace %} Developer Agreement.
![S
elect publish to Marketplace](/assets/images/help/repository/marketplace_actions_publish.png)

1. If the labels in your metadata file contain any problems, you will see an error message.

![See notification](/assets/images/help/repository/marketplace_actions_fixerrors.png)

1. If you see any on-screen suggestions, address them by updating your metadata file. Once complete, you will see an "Everything looks good!" message.

![Fix errors](/assets/images/help/repository/marketplace_actions_looksgood.png)

1. Choose a "Primary Category" and, optionally, "Another Category" which will help people find your action in {% data 
2. variables.product.prodname_marketplace %}.
![C
hoose category](/assets/images/help/repository/marketplace_actions_categories.png)

1. Tag your Action with a version, and add a release title. This helps people know what changes or features the release includes. People will see the 
2. version in the action's dedicated {% data variables.product.prodname_marketplace %} page.
![T
ag a version](/assets/images/help/repository/marketplace_actions_version.png)

1. Complete all other fields and click **Publish release**. Publishing requires you to use two-factor authentication. For more information, see "
2. [Configuring two-factor authentication](/articles/configuring-two-factor-authentication/)."
![P
ublish the release](/assets/images/help/repository/marketplace_actions_publishrelease.png)



## Removing an action from {% data variables.product.prodname_marketplace %}



To remove a published action from {% data variables.product.prodname_marketplace %}, you'll need to update each published release. Perform the following 
steps for each release of the action you've published to {% data variables.product.prodname_marketplace %}.



{% data reusables.repositories.navigate-to-repo %}


{% data reusables.repositories.releases %}

3. On the Releases page, to the right of the release you want to edit, click **Edit**.

![Release edit button](/assets/images/help/releases/release-edit-btn.png)

4. Select **Publish this action to the {% data variables.product.prodname_marketplace %}** to remove the check from the box.
![Publish this action button](/assets/images/help/repository/actions-marketplace-unpublish.png)

5. Click **Update release** at the bottom of the page.

![Update release button](/assets/images/help/repository/actions-marketplace-update-release.png)

- S#This :WORKSFLOW-dispatchs/repositories/dispatch-on :worksflow_call-on :dispatch :reppositories/framework/module.env/sample :Runs  :On-on :, "-on":, :
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
  - standard
  - plugin:@typescript-eslint/recommended
  - prettier
parser: '@typescript-eslint/parser'
parserOptions:
  ecmaVersion: latest
  sourceType: module
  project: ./tsconfig.json
plugins:
  - '@typescript-eslint'
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

async function parsePom(content: string): Promise<Pom> {
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

async function findAsync<T>(
  array: T[],
  predicate: (t: T) => Promise<boolean>
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
      dependency.groupId.replace(/\./g, '/') +
      '/' +
      dependency.artifactId +
      '/maven-metadata.xml'
    ).replace(/\/\//g, '/')
  )
}

async function getDependencyRepo(
  repository: Repository[],
  dependency: Dependency
) {
  const depRepo = await findAsync(
    [...repository, MvnCentralRepository],
    async (repository: Repository): Promise<boolean> => {
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
): Promise<MavenMetadata> {
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
    indentBy: '    ',
    unpairedTags: ['?xml'],
    commentPropName: '#comment',
  })
    .build(pomXml)
    .replace(
      '<?xml version="1.0" encoding="UTF-8"></?xml>',
      '<?xml version="1.0" encoding="UTF-8"?>'
    )
    .replace(
      /<\/repositories>[\n ]*<repositories>/g,
      '</repository><repository>'
    )
    .replace(
      /<\/dependencies>[\n ]*<dependencies>/g,
      '</dependency><dependency>'
    )
    .replace('<repositories>', '<repositories><repository>')
    .replace('<dependencies>', '</repositories><dependencies><dependency>')
    .replace('</project>', '</dependencies></project>')

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
  "include": ["src/**/*"],
  "types": ["src/types/*.d.ts"]
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
      - name: Checkout 🛎
        uses: actions/checkout@master

      - name: Setup node env 🏗
        uses: actions/setup-node@v2.5.1
        with:
          node-version: 16

      - name: Get yarn cache directory path 🛠
        id: yarn-cache-dir-path
        run: echo "dir=$(yarn cache dir)" >> $GITHUB_OUTPUT

      - name: Cache node_modules 📦
        uses: actions/cache@v2.1.7
        id: yarn-cache # use this to check for `cache-hit` (`steps.yarn-cache.outputs.cache-hit != 'true'`)
        with:
          path: ${{ steps.yarn-cache-dir-path.outputs.dir }}
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      - name: Install dependencies 👨🏻‍💻
        run: yarn

      - name: Compile
        run: yarn compile

      - name: Set git config
        run: |
          git config --global user.name "GitHub Action"
          git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"

      - name: Create commit & push
        if: ${{ steps.is-modified.outputs.modified == '0' }}
        run: |
          git status | grep modified && git add -A && git commit -v -m "chore: Compile by GitHub Actions" && git push -v || true
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
const : This Product Contains Sensitive Taxpayer Data  
 Request Date: 08-02-2022  Response Date: 08-02-2022  Tracking Number: 102398244811 
 Account Transcript  
 FORM NUMBER: 1040 TAX PERIOD: Dec. 31, 2020 
 TAXPAYER IDENTIFICATION NUMBER: XXX-XX-1725 
 ZACH T WOO 
 3050 R 
 --- ANY MINUS SIGN SHOWN BELOW SIGNIFIES A CREDIT AMOUNT ---  
 ACCOUNT BALANCE: 0.00 
 ACCRUED INTEREST: 0.00 AS OF: Mar. 28, 2022  ACCRUED PENALTY: 0.00 AS OF: Mar. 28, 2022 
 ACCOUNT BALANCE 
 PLUS ACCRUALS 
 (this is not a 
 payoff amount): 0.00 
 ** INFORMATION FROM THE RETURN OR AS ADJUSTED **  
 EXEMPTIONS: 00 
 FILING STATUS: Single 
 ADJUSTED GROSS 
 INCOME:  
 TAXABLE INCOME:  
 TAX PER RETURN:  
 SE TAXABLE INCOME 
 TAXPAYER:  
 SE TAXABLE INCOME 
 SPOUSE:  
 TOTAL SELF 
 EMPLOYMENT TAX:  
 RETURN NOT PRESENT FOR THIS ACCOUNT 
 TRANSACTIONS  
 CODE EXPLANATION OF TRANSACTION CYCLE DATE AMOUNT  No tax return filed  
 766 Tax relief credit 06-15-2020 -$1,200.00  846 Refund issued 06-05-2020 $1,200.00 
 290 Additional tax assessed 20202205 06-15-2020 $0.00  76254-999-05099-0 
 971 Notice issued 06-15-2020 $0.00  
766 Tax relief credit 01-18-2021 -$600.00  846 Refund issued 01-06-2021 $600.00 
 290 Additional tax assessed 20205302 01-18-2021 $0.00  76254-999-05055-0 
766 Tax relief credit Estimated tax Over-payment 01-05-2021 -$9,000,000.00  
662 Removed estimated tax payment 01-05-2021 -$9,000,000.00  
740 Undelivered refund returned to IRS 01-18-2021 -$18000000.00 
 767 Reduced or removed tax relief 01-18-2021 $18000000.00  credit 
 971 Notice issued 03-28-2022 $0.00
 This Product Contains Sensitive Taxpayer Data 
This Product Contains Sensitive Taxpayer Data  
 Request Date: 08-02-2022  Response Date: 08-02-2022  Tracking Number: 102398244811
 Account Transcript  
 FORM NUMBER: 1040 TAX PERIOD: Dec. 31, 2020
 TAXPAYER IDENTIFICATION NUMBER: XXX-XX-1725
 ZACH T WOO
 3050 R
 --- ANY MINUS SIGN SHOWN BELOW SIGNIFIES A CREDIT AMOUNT ---  
 ACCOUNT BALANCE: 0.00
 ACCRUED INTEREST: 0.00 AS OF: Mar. 28, 2022  ACCRUED PENALTY: 0.00 AS OF: Mar. 28, 2022
 ACCOUNT BALANCE
 PLUS ACCRUALS
 (this is not a
 payoff amount): 0.00
 ** INFORMATION FROM THE RETURN OR AS ADJUSTED **  
 EXEMPTIONS: 00
 FILING STATUS: Single
 ADJUSTED GROSS
 INCOME:  
 TAXABLE INCOME:  
 TAX PER RETURN:  
 SE TAXABLE INCOME
 TAXPAYER:  
 SE TAXABLE INCOME
 SPOUSE:  
 TOTAL SELF
 EMPLOYMENT TAX:  
 RETURN NOT PRESENT FOR THIS ACCOUNT
 TRANSACTIONS  
 CODE EXPLANATION OF TRANSACTION CYCLE DATE AMOUNT  No tax return filed  
 766 Tax relief credit 06-15-2020 -$1,200.00  846 Refund issued 06-05-2020 $1,200.00
 290 Additional tax assessed 20202205 06-15-2020 $0.00  76254-999-05099-0
 971 Notice issued 06-15-2020 $0.00  766 Tax relief credit 01-18-2021 -$600.00  846 Refund issued 01-06-2021 $600.00
 290 Additional tax assessed 20205302 01-18-2021 $0.00  76254-999-05055-0
 663 Estimated tax payment 01-05-2021 -$9,000,000.00  662 Removed estimated tax payment 01-05-2021 $9,000,000.00  740 Undelivered refund returned to IRS 01-18-2021 -$600.00
 767 Reduced or removed tax relief 01-18-2021 $600.00  credit
 971 Notice issued 03-28-2022 $0.00
 This Product Contains Sensitive Taxpayer Data
Department of the Treasury --- Internal Revenue Service (99) OMB No.  1545-0074 IRS Use Only --- Do not write or staple in this space
U.S. Individual Income Tax Return 1 Earnings Statement
Pay :Period Beginning:2019-09-28
DR Period Ending: 2021-09-29
Pay Day: 2022-01-31
Married ZACHRY T.
5323
DALLAS
TX :NO State Income Tax :
rate units year to date Other Benefits and
112.2 674678000 75698871600 Information
        Pto Balance
        Total Work Hrs
75698871600         Important Notes
COMPANY PH Y: 650-253-0000
BASIS OF PAY: BASIC/DILUTED EPS
               
               
YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE
               
       
70842743866 70842743866
       
70842743866        

CHECK NO.


Zachry T.  Wood S.R.
Checks and Other Deductions Amount
Description I Items 5.41
Debit Card Purchases 1 15.19
POS Purchases 2 2,269,894.11
ACH Deductions 5 82
Service Charges and Fees 3 5.2
Other Deductions 1 2,270,001.91
Total 12




Ledger balance Date Ledger balance Date Ledger balance
107.8 8/3 2,267,621.92- 8/8 41.2
78.08 8/4 42.08 8/10 2150.19-







2,267,700.00 ACH Web Usataxpymt IRS 240461564036618 00022214903782823
Corporate ACH Acctverify Roll By ADP 00022217906234115
ACH Web Businessform Deluxeforbusiness 5072270 00022222905832355
Corporate Ach Veryifyqbw Intuit 00022222909296656
Corporate Ach Veryifyqbw Intuit 00022223912710109



"Items":, "transaction_description":, "Reference 'number '= 'Amount":,'

10 Service Charge Period Ending 07/29.2022
36 Returned ItemFee (nsf) 00022214903782823
36 Returned ItemFee (nsf) 00022222905832355

TTM Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020 Q3 2020 Q2 2020

1.46698E+11 42337000000 37497000000 35653000000 31211000000 30818000000 25056000000 19744000000

2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000

-1.10939E+11 -32988000000 -27621000000 -26227000000 -24103000000 -26080000000 -21117000000 -18553000000
-1.10939E+11 -32988000000 -27621000000 -26227000000 -24103000000 -26080000000 -21117000000 -18553000000

-67984000000 -20452000000 -16466000000 -16292000000 -14774000000 -15167000000 -13843000000 -13361000000
-36422000000 -11744000000 -8772000000 -8617000000 -7289000000 -8145000000 -6987000000 -6486000000
-13510000000 -4140000000 -3256000000 -3341000000 -2773000000 -2831000000 -2756000000 -2585000000
-22912000000 -7604000000 -5516000000 -5276000000 -4516000000 -5314000000 -4231000000 -3901000000
-31562000000 -8708000000 -7694000000 -7675000000 -7485000000 -7022000000 -6856000000 -6875000000
-78714000000 21885000000 21031000000 19361000000 16437000000 15651000000 11213000000 6383000000
-12020000000 2517000000 2033000000 2624000000 4846000000 3038000000 2146000000 1894000000
-1153000000 261000000 310000000 313000000 269000000 333000000 412000000 420000000
1153000000 261000000 310000000 313000000 269000000 333000000 412000000 420000000

-346000000 -117000000 -77000000 -76000000 -76000000 -53000000 -48000000 -13000000
1499000000 378000000 387000000 389000000 345000000 386000000 460000000 433000000
12364000000 2364000000 2207000000 2924000000 4869000000 3530000000 1957000000 1696000000
12270000000 2478000000 2158000000 2883000000 4751000000 3262000000 2015000000 1842000000
334000000 49000000 188000000 92000000 5000000 355000000 26000000 -54000000
-240000000 -163000000 -139000000 -51000000 113000000 -87000000 -84000000 -92000000
0 0 0 0 0
0 0 0 0 0
-1497000000 -108000000 -484000000 -613000000 -292000000 -825000000 -223000000 -222000000
90734000000 24402000000 23064000000 21985000000 21283000000 18689000000 13359000000 8277000000
-14701000000 -3760000000 -4128000000 -3460000000 -3353000000 -3462000000 -2112000000 -1318000000
76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000


2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
78714000000 21885000000 21031000000 19361000000 16437000000 15651000000 11213000000 6383000000
0.162 0.179 0.157 0.158 0.158 0.159




113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21
113.88 31.12 28.44 27.69 26.63 22.46 16.55 10.21

112.2 30.69 27.99 27.26 26.29 22.3 16.4 10.13
112.2 30.67 27.99 27.26 26.29 22.23 16.4 10.13

667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000
677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000

113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21
112.2 30.69 27.99 27.26 26.29 22.3 16.4 10.13
667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000
677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000


Current Value
00022116905560149




Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020


Zachry T. Wood Tax Period Total 
Fed 941 Corporate 2007-09-30 
24934000000 25539000000 37497000000 31211000000 30818000000
24934000000 25539000000 21890000000 19289000000 22677000000
24934000000 25539000000 21890000000 19289000000 22677000000
20642000000 18936000000 18525000000 17930000000 15227000000 6517000000 3797000000 4236000000 2592000000 5748000000
3439000000 3304000000 2945000000 2753000000 3725000000
3439000000 3304000000 2945000000 2753000000 3725000000
3215000000 3085000000 2730000000 2525000000 3539000000 224000000 219000000 215000000 228000000 186000000
3954000000 3874000000 3803000000 3745000000 3223000000
1616000000 -1287000000 379000000 1100000000 1670000000
-2478000000 -2158000000 -2883000000 -4751000000 -3262000000
-2478000000 -2158000000 -2883000000 -4751000000 -3262000000
-14000000 64000000 -8000000 -255000000 392000000
-2225000000 2806000000 -871000000 -1233000000 1702000000
-5819000000 -2409000000 -3661000000 2794000000 -5445000000
-5819000000 -2409000000 -3661000000 2794000000 -5445000000
-399000000 -1255000000 -199000000 7000000 -738000000
6994000000 3157000000 4074000000 -4956000000 6938000000
1157000000 238000000 -130000000 -982000000 963000000
1157000000 238000000 -130000000 -982000000 963000000
5837000000 2919000000 4204000000 -3974000000 5975000000
368000000 272000000 -3000000 137000000 207000000
-3369000000 3041000000 -1082000000 785000000 740000000

-11016000000 -10050000000 -9074000000 -5383000000 -7281000000
-11016000000 -10050000000 -9074000000 -5383000000 -7281000000
-6383000000 -6819000000 -5496000000 -5942000000 -5479000000
-6383000000 -6819000000 -5496000000 -5942000000 -5479000000

-385000000 -259000000 -308000000 -1666000000 -370000000
-385000000 -259000000 -308000000 -1666000000 -370000000
-4348000000 -3360000000 -3293000000 2195000000 -1375000000
-40860000000 -35153000000 -24949000000 -37072000000 -36955000000
36512000000 31793000000 21656000000 39267000000 35580000000
100000000 388000000 23000000 30000000 -57000000


-16511000000 -15254000000 -15991000000 -13606000000 -9270000000
-16511000000 -15254000000 -15991000000 -13606000000 -9270000000
-13473000000 -12610000000 -12796000000 -11395000000 -7904000000
13473000000 -12610000000 -12796000000 -11395000000 -7904000000

115000000 -42000000 -1042000000 -37000000 -57000000
115000000 -42000000 -1042000000 -37000000 -57000000
6250000000 6350000000 6699000000 900000000 0
6365000000 -6392000000 -7741000000 -937000000 -57000000
2923000000 -2602000000 -2453000000 -2184000000 -1647000000


0
20945000000 23719000000 300000000 10000000 338000000000)
25930000000 235000000000) 23630000000 26622000000 26465000000
181000000000) -146000000000) -3175000000 300000000 6126000000
2.3719E+13 2.363E+13 183000000 -143000000 210000000
2774000000) 89000000 266220000000000) 26465000000000) 20129000000000)
13412000000 157000000 -2992000000 6336000000
2774000000 89000000 2.2677E+15 -4990000000




Q4 2020 Q4  2019


Dec. 31, 2020 Dec. 31, 2019

182527 161857

84732 71896
27573 26018
17946 18464
11052 9551
0 1697
141303 127626
41224 34231
6858000000 5394
22677000000 19289000000
22677000000 19289000000
22677000000 19289000000

Fed 941 West Subsidiary 2007-09-30
24934000000 25539000000 37497000000 31211000000 30818000000
24934000000 25539000000 21890000000 19289000000 22677000000
24934000000 25539000000 21890000000 19289000000 22677000000
20642000000 18936000000 18525000000 17930000000 15227000000 6517000000 3797000000 4236000000 2592000000 5748000000
3439000000 3304000000 2945000000 2753000000 3725000000
3439000000 3304000000 2945000000 2753000000 3725000000
3215000000 3085000000 2730000000 2525000000 3539000000 224000000 219000000 215000000 228000000 186000000
3954000000 3874000000 3803000000 3745000000 3223000000
1616000000 -1287000000 379000000 1100000000 1670000000
-2478000000 -2158000000 -2883000000 -4751000000 -3262000000
-2478000000 -2158000000 -2883000000 -4751000000 -3262000000
-14000000 64000000 -8000000 -255000000 392000000
-2225000000 2806000000 -871000000 -1233000000 1702000000
-5819000000 -2409000000 -3661000000 2794000000 -5445000000
-5819000000 -2409000000 -3661000000 2794000000 -5445000000
-399000000 -1255000000 -199000000 7000000 -738000000
6994000000 3157000000 4074000000 -4956000000 6938000000
1157000000 238000000 -130000000 -982000000 963000000
1157000000 238000000 -130000000 -982000000 963000000
5837000000 2919000000 4204000000 -3974000000 5975000000
368000000 272000000 -3000000 137000000 207000000
-3369000000 3041000000 -1082000000 785000000 740000000

-11016000000 -10050000000 -9074000000 -5383000000 -7281000000
-11016000000 -10050000000 -9074000000 -5383000000 -7281000000
-6383000000 -6819000000 -5496000000 -5942000000 -5479000000
-6383000000 -6819000000 -5496000000 -5942000000 -5479000000

-385000000 -259000000 -308000000 -1666000000 -370000000
-385000000 -259000000 -308000000 -1666000000 -370000000
-4348000000 -3360000000 -3293000000 2195000000 -1375000000
-40860000000 -35153000000 -24949000000 -37072000000 -36955000000
36512000000 31793000000 21656000000 39267000000 35580000000
100000000 388000000 23000000 30000000 -57000000


-16511000000 -15254000000 -15991000000 -13606000000 -9270000000
-16511000000 -15254000000 -15991000000 -13606000000 -9270000000
-13473000000 -12610000000 -12796000000 -11395000000 -7904000000
13473000000 -12610000000 -12796000000 -11395000000 -7904000000

115000000 -42000000 -1042000000 -37000000 -57000000
115000000 -42000000 -1042000000 -37000000 -57000000
6250000000 6350000000 6699000000 900000000 0
6365000000 -6392000000 -7741000000 -937000000 -57000000
2923000000 -2602000000 -2453000000 -2184000000 -1647000000


0
20945000000 23719000000 300000000 10000000 338000000000)
25930000000 235000000000) 23630000000 26622000000 26465000000
181000000000) -146000000000) -3175000000 300000000 6126000000
2.3719E+13 2.363E+13 183000000 -143000000 210000000
2774000000) 89000000 266220000000000) 26465000000000) 20129000000000)
13412000000 157000000 -2992000000 6336000000
2774000000 89000000 2.2677E+15 -4990000000




Q4 2020 Q4  2019


Dec. 31, 2020 Dec. 31, 2019

182527 161857

84732 71896
27573 26018
17946 18464
11052 9551
0 1697
141303 127626
41224 34231
6858000000 5394
22677000000 19289000000
22677000000 19289000000
22677000000 19289000000

Fed 941 South Subsidiary 2007-09-30 3215000000 3085000000 2730000000 2525000000 3539000000 224000000 219000000 215000000 228000000 186000000
Fed 941 East Subsidiary 2007-09-30 
Fed 941 Corp - Penalty 2007-09-30 
Fed 940 Annual Unemp - Corp 2007-09-30 

24934000000 25539000000 37497000000 31211000000 30818000000
24934000000 25539000000 21890000000 19289000000 22677000000
24934000000 25539000000 21890000000 19289000000 22677000000
20642000000 18936000000 18525000000 17930000000 15227000000 6517000000 3797000000 4236000000 2592000000 5748000000
3439000000 3304000000 2945000000 2753000000 3725000000
3439000000 3304000000 2945000000 2753000000 3725000000
3215000000 3085000000 2730000000 2525000000 3539000000 224000000 219000000 215000000 228000000 186000000
3954000000 3874000000 3803000000 3745000000 3223000000
1616000000 -1287000000 379000000 1100000000 1670000000
-2478000000 -2158000000 -2883000000 -4751000000 -3262000000
-2478000000 -2158000000 -2883000000 -4751000000 -3262000000
-14000000 64000000 -8000000 -255000000 392000000
-2225000000 2806000000 -871000000 -1233000000 1702000000
-5819000000 -2409000000 -3661000000 2794000000 -5445000000
-5819000000 -2409000000 -3661000000 2794000000 -5445000000
-399000000 -1255000000 -199000000 7000000 -738000000
6994000000 3157000000 4074000000 -4956000000 6938000000
1157000000 238000000 -130000000 -982000000 963000000
1157000000 238000000 -130000000 -982000000 963000000
5837000000 2919000000 4204000000 -3974000000 5975000000
368000000 272000000 -3000000 137000000 207000000
-3369000000 3041000000 -1082000000 785000000 740000000

-11016000000 -10050000000 -9074000000 -5383000000 -7281000000
-11016000000 -10050000000 -9074000000 -5383000000 -7281000000
-6383000000 -6819000000 -5496000000 -5942000000 -5479000000
-6383000000 -6819000000 -5496000000 -5942000000 -5479000000

-385000000 -259000000 -308000000 -1666000000 -370000000
-385000000 -259000000 -308000000 -1666000000 -370000000
-4348000000 -3360000000 -3293000000 2195000000 -1375000000
-40860000000 -35153000000 -24949000000 -37072000000 -36955000000
36512000000 31793000000 21656000000 39267000000 35580000000
100000000 388000000 23000000 30000000 -57000000


-16511000000 -15254000000 -15991000000 -13606000000 -9270000000
-16511000000 -15254000000 -15991000000 -13606000000 -9270000000
-13473000000 -12610000000 -12796000000 -11395000000 -7904000000
13473000000 -12610000000 -12796000000 -11395000000 -7904000000

115000000 -42000000 -1042000000 -37000000 -57000000
115000000 -42000000 -1042000000 -37000000 -57000000
6250000000 6350000000 6699000000 900000000 0
6365000000 -6392000000 -7741000000 -937000000 -57000000
2923000000 -2602000000 -2453000000 -2184000000 -1647000000


0
20945000000 23719000000 300000000 10000000 338000000000)
25930000000 235000000000) 23630000000 26622000000 26465000000
181000000000) -146000000000) -3175000000 300000000 6126000000
2.3719E+13 2.363E+13 183000000 -143000000 210000000
2774000000) 89000000 266220000000000) 26465000000000) 20129000000000)
13412000000 157000000 -2992000000 6336000000
2774000000 89000000 2.2677E+15 -4990000000




Q4 2020 Q4  2019


Dec. 31, 2020 Dec. 31, 2019

182527 161857

84732 71896
27573 26018
17946 18464
11052 9551
0 1697
141303 127626
41224 34231
6858000000 5394
22677000000 19289000000
22677000000 19289000000
22677000000 19289000000









IRS RECIEVED 37
26-Apr
LB Charlotte, NC



























































ID: TxDL: 00037305581 Ssn: 633-44-1725       DoB:       1994-10-15

                             
"# ":Build::":,' "Job":,' "CONSTRUCTION":,'
Return'' ':'' 'Run'' ' "''
'-'' ':Build::''
  
