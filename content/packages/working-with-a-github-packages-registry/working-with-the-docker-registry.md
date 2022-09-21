Gmail	ZACHRY WOOD <zachryiixixiiwood@gmail.com>
TARP2202C-19SP
ZACHRY WOOD <zachryiixixiiwood@gmail.com>	Wed, Sep 21, 2022 at 2:16 AM
To: "Mr. Jeff Robertson" <tarp2022.usgov@gmail.com>
Skip to content
 
@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
zakwarlord7
/
NPC
Public
generated from zakwarlord7/peter-evans-create-pull-request
Pin
 Unwatch 0 
Fork 0
 Star 0
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
 master 
NPC/readme.md
Go to file
@zakwarlord7
zakwarlord7 Update readme.md
Latest commit 1ca236b now
 History
 
1
 contributor
7182 lines (4388 sloc)  523 KB
RawBlame


BEGIN:

GLOW7: Skip to content Search or jump to… Pull requests Issues Marketplace Explore

@zakwarlord7 Your account has been flagged. Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed. zakwarlord7 / Patch-5 Public generated from zakwarlord7/peter-evans-create-pull-request Code Issues Pull requests Actions Projects Wiki Security Insights Settings Patch-5/readme.md @zakwarlord7 zakwarlord7 Update readme.md Latest commit 60be25b now History 1 contributor 2832 lines (2467 sloc) 91.7 KB

BEGIN:

GLOW7:

Author: ZACH T WOO

Date: 17th of September 2005

main: +1(469) 697-4300

e-mail: zachryiixixiiwood@gmail.com

Developer Resource:

kind: 🪁

Search for APIs, guides, keywords

Search

Contact

NPORT/--REWUEST'@ACCT....4720416547-071921891

REQUEST:

ACCOUNT INFORMATION FOR THE CO OWNER OF AMERICA: ZACHRY TYLER WOOD: ALL SCROLL

PAGE SSN: 633-44-1725

Payroll Output API Guide (Turbo API) for Midsized to Enterprise Businesses atus Help center ADP and the ADP logo are registered trademarks of ADP, Inc. All other marks are the property of their respective owners. Copyright © 2022 ADP, Inc. Terms notification: documentation: e-mail: zachryiixixiiwood@gmail.com Privacy# Create Pull Request CI GitHub Marketplace

A GitHub action to create a pull request for changes to your repository in the actions workspace.

Changes to a repository in the Actions workspace persist between steps in a workflow. This action is designed to be used in conjunction with other steps that modify or add files to your repository. The changes will be automatically committed to a new branch and a pull request created.

Create Pull Request action will:

Check for repository changes in the Actions workspace. This includes: untracked (new) files tracked (modified) files commits made during the workflow that have not been pushed Commit all changes to a new branch, or update an existing pull request branch. Create a pull request to merge the new branch into the base—the branch checked out in the workflow. Documentation Concepts, guidelines and advanced usage Examples Updating to v3 Usage - uses: actions/checkout@v2

  # Make changes to pull request here

  - name: Create Pull Request
    uses: peter-evans/create-pull-request@v3
You can also pin to a specific release version in the format @v3.x.x

Action inputs All inputs are optional. If not set, sensible defaults will be used.

Note: If you want pull requests created by this action to trigge-on: worksflows_call:-on:'Run:run-on:-,oon:Name Description Default token GITHUB_TOKEN or a repo scoped Personal Access Token (PAT). GITHUB_TOKEN path Relative path under GITHUB_WORKSPACE to the repository. GITHUB_WORKSPACE commit-message The message to use when committing changes. [create-pull-request] automated change committer The committer name and email address in the format Display Name email@address.com. Defaults to the GitHub Actions bot user. GitHub noreply@github.com author The author name and email address in the format Display Name email@address.com. Defaults to the user who triggered the workflow run. 
{{ github.actor }}@users.noreply.github.com> signoff Add Signed-off-by line by the committer at the end of the commit log message. false branch The pull request branch name. create-pull-request/patch delete-branch Delete the branch when closing pull requests, and when undeleted after merging. Recommend true. false branch-suffix The branch suffix type when using the alternative branching strategy. Valid values are random, timestamp and short-commit-hash. See Alternative strategy for details. base Sets the pull request base branch. Defaults to the branch checked out in the workflow. push-to-fork A fork of the checked-out parent repository to which the pull request branch will be pushed. e.g. owner/repo-fork. The pull request will be created to merge the fork's branch into the parent's base. See push pull request branches to a fork for details. title The title of the pull request. Changes by create-pull-request action body The body of the pull request. Automated changes by create-pull-request GitHub action labels A comma or newline-separated list of labels. assignees A comma or newline-separated list of assignees (GitHub usernames). reviewers A comma or newline-separated list of reviewers (GitHub usernames) to request a review from. team-reviewers A comma or newline-separated list of GitHub teams to request a review from. Note that a repo scoped PAT may be required. See this issue. milestone The number of the milestone to associate this pull request with. draft Create a draft pull request. false Action outputs The pull request number and URL are available as step outputs. Note that in order to read the step outputs the action step must have an id.

  - name: Create Pull Request
    id: cpr
    uses: peter-evans/create-pull-request@v3
  - name: Check outputs
    run: |
      echo "Pull Request Number - ${{ steps.cpr.outputs.pull-request-number }}"
      echo "Pull Request URL - ${{ steps.cpr.outputs.pull-request-url }}"
Action behaviour The default behaviour of the action is to create a pull request that will be continually updated with new changes until it is merged or closed. Changes are committed and pushed to a fixed-name branch, the name of which can be configured with the branch input. Any subsequent changes will be committed to the same branch and reflected in the open pull request.

How the action behaves:

If there are changes (i.e. a diff exists with the checked-out base branch), the changes will be pushed to a new branch and a pull request created. If there are no changes (i.e. no diff exists with the checked-out base branch), no pull request will be created and the action exits silently. If a pull request already exists and there are no further changes (i.e. no diff with the current pull request branch) then the action exits silently. If a pull request exists and new changes on the base branch make the pull request unnecessary (i.e. there is no longer a diff between the pull request branch and the base), the pull request is automatically closed. Additionally, if delete-branch is set to true the branch will be deleted. For further details about how the action works and usage guidelines, see Concepts, guidelines and advanced usage.

Alternative strategy - Always create a new pull request branch For some use cases it may be desirable to always create a new unique branch each time there are changes to be committed. This strategy is not recommended because if not used carefully it could result in multiple pull requests being created unnecessarily. If in doubt, use the default strategy of creating an updating a fixed-name branch.

To use this strategy, set input branch-suffix with one of the following options.

random - Commits will be made to a branch suffixed with a random alpha-numeric string. e.g. create-pull-request/patch-6qj97jr, create-pull-request/patch-5jrjhvd

timestamp - Commits will be made to a branch suffixed by a timestamp. e.g. create-pull-request/patch-1569322532, create-pull-request/patch-1569322552

short-commit-hash - Commits will be made to a branch suffixed with the short SHA1 commit hash. e.g. create-pull-request/patch-fcdfb59, create-pull-request/patch-394710b

Controlling commits As well as relying on the action to handle uncommitted changes, you can additionally make your own commits before the action runs. Note that the repository must be checked out on a branch with a remote, it won't work for events which checkout a commit.

steps:
  - uses: actions/checkout@v2
  - name: Create commits
    run: |
      git config user.name 'Peter Evans'
      git config user.email 'peter-evans@users.noreply.github.com'
      date +%s > report.txt
      git commit -am "Modify tracked file during workflow"
      date +%s > new-report.txt
      git add -A
      git commit -m "Add untracked file during workflow"
  - name: Uncommitted change
    run: date +%s > report.txt
  - name: Create Pull Request
    uses: peter-evans/create-pull-request@v3
Ignoring files If there are files or directories you want to ignore you can simply add them to a .gitignore file at the root of your repository. The action will respect this file.

Create a project card To create a project card for the pull request, pass the pull-request-number step output to create-or-update-project-card action.

  - name: Create Pull Request
    id: cpr
    uses: peter-evans/create-pull-request@v3

  - name: Create or Update Project Card
    uses: peter-evans/create-or-update-project-card@v1
    with:
      project-name: My project
      column-name: My column
      issue-number: ${{ steps.cpr.outputs.pull-request-number }}
Reference Example The following workflow sets many of the action's inputs for reference purposes. Check the defaults to avoid setting inputs unnecessarily.

See examples for more realistic use cases.

jobs: createPullRequest: runs-on: ubuntu-latest steps: - uses: actions/checkout@v2

  - name: Make changes to pull request
    run: date +%s > report.txt

  - name: Create Pull Request
    id: cpr
    uses: peter-evans/create-pull-request@v3
    with:
      token: ${{ secrets.PAT }}
      commit-message: Update report
      committer: GitHub <noreply@github.com>
      author: ${{ github.actor }} <${{ github.actor }}@users.noreply.github.com>
      signoff: false
      branch: example-patches
      delete-branch: true
      title: '[Example] Update report'
      body: |
        Update report
        - Updated with *today's* date
        - Auto-generated by [create-pull-request][1]

        [1]: https://github.com/peter-evans/create-pull-request
      labels: |
        report
        automated pr
      assignees: peter-evans
      reviewers: peter-evans
      team-reviewers: |
      Skip to content
Search or jump to… Pull requests Issues Marketplace Explore

@zakwarlord7 Your account has been flagged. Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed. zakwarlord7 / Patch-5 Public generated from zakwarlord7/peter-evans-create-pull-request Code Issues Pull requests Actions Projects Wiki Security Insights Settings Comparing changes Choose two branches to see what’s changed or to start a new pull request. If you need to, you can also .

There isn’t anything to compare. patch-4 and Trunk are entirely different commit histories.

Showing with 19,284 additions and 0 deletions. 3
.eslintignore @@ -0,0 +1,3 @@ dist/ lib/ node_modules/ 19
.eslintrc.json @@ -0,0 +1,19 @@ { "env": { "node": true, "jest": true }, "parser": "@typescript-eslint/parser", "parserOptions": { "ecmaVersion": 9, "sourceType": "module" }, "extends": [ "eslint:recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended", "plugin:import/errors", "plugin:import/warnings", "plugin:import/typescript", "plugin:prettier/recommended", "prettier/@typescript-eslint" ], "plugins": ["@typescript-eslint"], "rules": { "@typescript-eslint/camelcase": "off" } } 7
.github/ISSUE_TEMPLATE.md @@ -0,0 +1,7 @@

Subject of the issue
Describe your issue here.

Steps to reproduce
If this issue is describing a possible bug please provide (or link to) your GitHub Actions workflow. 131
.github/workflows/ci.yml @@ -0,0 +1,131 @@ name: CI on: push: branches: [master] paths-ignore: - 'README.md' - 'docs/' pull_request: branches: [master] paths-ignore: - 'README.md' - 'docs/' jobs: build: runs-on: ubuntu-latest steps: - uses: actions/checkout@v2 - uses: actions/setup-node@v1 with: node-version: 12.x - uses: actions/setup-python@v2 with: python-version: '3.x' - run: npm ci - run: npm run build - run: npm run format-check - run: npm run lint - run: npm run test - uses: actions/upload-artifact@v2 with: name: dist path: dist - uses: actions/upload-artifact@v2 with: name: action.yml path: action.yml

test: if: github.event_name == 'push' || github.event.pull_request.head.repo.full_name == github.repository needs: [build] runs-on: ubuntu-latest strategy: matrix: target: [built, committed] steps: - uses: actions/checkout@v2 with: ref: master - if: matrix.target == 'built' || github.event_name == 'pull_request' uses: actions/download-artifact@v2 with: name: dist path: dist - if: matrix.target == 'built' || github.event_name == 'pull_request' uses: actions/download-artifact@v2 with: name: action.yml path: .

  - name: Create change
    run: date +%s > report.txt

  - name: Create Pull Request
    id: cpr
    uses: ./
    with:
      commit-message: '[CI] test ${{ matrix.target }}'
      committer: GitHub <noreply@github.com>
      author: ${{ github.actor }} <${{ github.actor }}@users.noreply.github.com>
      title: '[CI] test ${{ matrix.target }}'
      body: |
        - CI test case for target '${{ matrix.target }}'
        Auto-generated by [create-pull-request][1]
        [1]: https://github.com/peter-evans/create-pull-request
      branch: ci-test-${{ matrix.target }}

  - name: Close Pull
    uses: peter-evans/close-pull@v1
    with:
      pull-request-number: ${{ steps.cpr.outputs.pull-request-number }}
      comment: '[CI] test ${{ matrix.target }}'
      delete-branch: true
commentTestSuiteHelp: if: github.event_name == 'pull_request' needs: [test] runs-on: ubuntu-latest steps: - name: Find Comment uses: peter-evans/find-comment@v1 id: fc with: issue-number: ${{ github.event.number }} comment-author: 'github-actions[bot]' body-includes: Full test suite slash command

  - if: steps.fc.outputs.comment-id == ''
    name: Create comment
    uses: peter-evans/create-or-update-comment@v1
    with:
      issue-number: ${{ github.event.number }}
      body: |
        Full test suite slash command (repository admin only)
        ```
        /test repository=${{ github.event.pull_request.head.repo.full_name }} ref=${{ github.event.pull_request.head.ref }} build=true
        ```
package: if: github.event_name == 'push' && github.ref == 'refs/heads/master' needs: [test] runs-on: ubuntu-latest steps: - uses: actions/checkout@v2 - uses: actions/download-artifact@v2 with: name: dist path: dist - name: Create Pull Request uses: peter-evans/create-pull-request@v3 with: commit-message: 'build: update distribution' title: Update distribution body: | - Updates the distribution for changes on master Auto-generated by [create-pull-request][1] [1]: https://github.com/peter-evans/create-pull-request branch: update-distribution 49
.github/workflows/cpr-example-command.yml @@ -0,0 +1,49 @@ name: Create Pull Request Example Command on: repository_dispatch: types: [cpr-example-command] jobs: createPullRequest: runs-on: ubuntu-latest steps: - uses: actions/checkout@v2

  - name: Make changes to pull request
    run: date +%s > report.txt

  - name: Create Pull Request
    id: cpr
    uses: ./
    with:
      commit-message: Update report
      committer: GitHub <noreply@github.com>
      author: ${{ github.actor }} <${{ github.actor }}@users.noreply.github.com>
      signoff: false
      title: '[Example] Update report'
      body: |
        Update report
        - Updated with *today's* date
        - Auto-generated by [create-pull-request][1]
        [1]: https://github.com/peter-evans/create-pull-request
      labels: |
        report
        automated pr
      assignees: peter-evans
      reviewers: peter-evans
      milestone: 1
      draft: false
      branch: example-patches
      delete-branch: true

  - name: Check output
    run: |
      echo "Pull Request Number - ${{ steps.cpr.outputs.pull-request-number }}"
      echo "Pull Request URL - ${{ steps.cpr.outputs.pull-request-url }}"
  - name: Add reaction
    uses: peter-evans/create-or-update-comment@v1
    with:
      repository: ${{ github.event.client_payload.github.payload.repository.full_name }}
      comment-id: ${{ github.event.client_payload.github.payload.comment.id }}
      reaction-type: hooray
28
.github/workflows/npc-grunt.yml @@ -0,0 +1,28 @@ name: NodeJS with Grunt

on: push: branches: [ "zakwarlord7/peter-evans-create-pull-request" ] pull_request: branches: [ "Master" ]

jobs: build: runs-on: ubuntu-latest

strategy:
  matrix:
    node-version: [12.x, 14.x, 16.x]

steps:
- uses: actions/checkout@v3

- name: Use Node.js ${{ matrix.node-version }}
  uses: actions/setup-node@v3
  with:
    node-version: ${{ matrix.node-version }}

- name: Build
  run: |
    npm install
    grunt
37
.github/workflows/slash-command-dispatch.yml @@ -0,0 +1,37 @@ name: Slash Command Dispatch on: issue_comment: types: [created] jobs: slashCommandDispatch: runs-on: ubuntu-latest steps: - name: Slash Command Dispatch uses: peter-evans/slash-command-dispatch@v2 with: token: ${{ secrets.ACTIONS_BOT_TOKEN }} config: > [ { "command": "test", "permission": "admin", "repository": "peter-evans/create-pull-request-tests", "named_args": true }, { "command": "clean", "permission": "admin", "repository": "peter-evans/create-pull-request-tests" }, { "command": "cpr-example", "permission": "admin", "issue_type": "issue" }, { "command": "rebase", "permission": "admin", "repository": "peter-evans/slash-command-dispatch-processor", "issue_type": "pull-request" } ] 31
.github/workflows/update-dep.yml @@ -0,0 +1,31 @@ name: Update Dependencies on: schedule: - cron: '0 1 * * 4' jobs: update-dep: runs-on: ubuntu-latest steps: - uses: actions/checkout@v2 - uses: actions/setup-node@v1 with: node-version: '12.x' - name: Update dependencies run: | npx -p npm-check-updates ncu -u npm install - name: Create Pull Request uses: peter-evans/create-pull-request@v3 with: token: ${{ secrets.ACTIONS_BOT_TOKEN }} commit-message: 'chore: update dependencies' committer: GitHub noreply@github.com author: actions-bot actions-bot@users.noreply.github.com title: Update dependencies body: | - Dependency updates

          Auto-generated by [create-pull-request][1]

          [1]: https://github.com/peter-evans/create-pull-request
        branch: update-dependencies
4
.gitignore @@ -0,0 +1,4 @@ lib/ node_modules/

.DS_Store 3
.prettierignore @@ -0,0 +1,3 @@ dist/ lib/ node_modules/ 11
.prettierrc.json @@ -0,0 +1,11 @@ { "printWidth": 80, "tabWidth": 2, "useTabs": false, "semi": false, "singleQuote": true, "trailingComma": "none", "bracketSpacing": false, "arrowParens": "avoid", "parser": "typescript" } 33
:rake.i @@ -0,0 +1,33 @@ WORKSFLOW_call-on:Run::Runs: Runs::Name: NodeJS with Grunt

on: push: branches: [ "zakwarlord7/peter-evans-create-pull-request" ] pull_request: branches: [ "Master" ]

jobs: build: runs-on: ubuntu-latest

strategy:
  matrix:
    node-version: [12.x, 14.x, 16.x]

steps:
- uses: actions/checkout@v5

- name: Use Node.js ${{ matrix.node-version }}
  uses: actions/setup-node@v3
  with:
    node-version: ${{ matrix.node-version }}

- name: Build
  run-on: SLACK_channel
SLACK_channel: (4999; 8333)' install: slate.yml const: : Name Name: : Tests #Tests: : Run'@Travis.yml :Build: 21
LICENSE @@ -0,0 +1,21 @@ MIT License

Copyright (c) 2019 Peter Evans

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 1,743
test/create-or-update-branch.int.test.ts Large diffs are not rendered by default.

40
test/entrypoint.sh @@ -0,0 +1,40 @@ #!/bin/sh -l set -euo pipefail

Save the working directory
WORKINGDIR=$PWD

Create and serve a remote repo
mkdir -p /git/remote git init --bare /git/remote/test-base.git git daemon --verbose --enable=receive-pack --base-path=/git/remote --export-all /git/remote &>/dev/null &

Give the daemon time to start
sleep 2

Create a local clone and make an initial commit
mkdir -p /git/local git clone git://127.0.0.1/test-base.git /git/local/test-base cd /git/local/test-base git config --global user.email "you@example.com" git config --global user.name "Your Name" echo "#test-base" > README.md git add . git commit -m "initial commit" git push -u git log -1 --pretty=oneline git config --global --unset user.email git config --global --unset user.name git config -l

Clone a server-side fork of the base repo
cd $WORKINGDIR git clone --mirror git://127.0.0.1/test-base.git /git/remote/test-fork.git cd /git/remote/test-fork.git git log -1 --pretty=oneline

Restore the working directory
cd $WORKINGDIR

Execute integration tests
jest int --runInBand 49
test/git-auth-helper.int.test.ts @@ -0,0 +1,49 @@ import {GitCommandManager} from '../lib/git-command-manager' import {GitAuthHelper} from '../lib/git-auth-helper'

const REPO_PATH = '/git/local/test-base'

const extraheaderConfigKey = 'http.https://github.com/.extraheader'

describe('git-auth-helper tests', () => { let git: GitCommandManager let gitAuthHelper: GitAuthHelper

beforeAll(async () => { git = await GitCommandManager.create(REPO_PATH) gitAuthHelper = new GitAuthHelper(git) })

it('tests save and restore with no persisted auth', async () => { await gitAuthHelper.savePersistedAuth() await gitAuthHelper.restorePersistedAuth() })

it('tests configure and removal of auth', async () => { await gitAuthHelper.configureToken('github-token') expect(await git.configExists(extraheaderConfigKey)).toBeTruthy() expect(await git.getConfigValue(extraheaderConfigKey)).toEqual( 'AUTHORIZATION: basic eC1hY2Nlc3MtdG9rZW46Z2l0aHViLXRva2Vu' )

await gitAuthHelper.removeAuth()
expect(await git.configExists(extraheaderConfigKey)).toBeFalsy()
})

it('tests save and restore of persisted auth', async () => { const extraheaderConfigValue = 'AUTHORIZATION: basic persisted-auth' await git.config(extraheaderConfigKey, extraheaderConfigValue)

await gitAuthHelper.savePersistedAuth()

const exists = await git.configExists(extraheaderConfigKey)
expect(exists).toBeFalsy()

await gitAuthHelper.restorePersistedAuth()

const configValue = await git.getConfigValue(extraheaderConfigKey)
expect(configValue).toEqual(extraheaderConfigValue)

await gitAuthHelper.removeAuth()
}) }) 23
test/integration-tests.sh @@ -0,0 +1,23 @@ #!/usr/bin/env bash set -euo pipefail

IMAGE="cpr-integration-tests:latest" ARG1=${1:-}

if [[ "$(docker images -q $IMAGE 2> /dev/null)" == "" || $ARG1 == "build" ]]; then echo "Building Docker image $IMAGE ..."

cat > Dockerfile << EOF
FROM node:12-alpine RUN apk --no-cache add git git-daemon RUN npm install jest --global WORKDIR /cpr COPY test/entrypoint.sh /entrypoint.sh ENTRYPOINT ["/entrypoint.sh"] EOF

docker build -t $IMAGE .
rm Dockerfile
fi

docker run -v $PWD:/cpr $IMAGE 124
test/utils.unit.test.ts @@ -0,0 +1,124 @@ import * as path from 'path' import * as utils from '../lib/utils'

const originalGitHubWorkspace = process.env['GITHUB_WORKSPACE']

describe('utils tests', () => { beforeAll(() => { // GitHub workspace process.env['GITHUB_WORKSPACE'] = __dirname })

afterAll(() => { // Restore GitHub workspace delete process.env['GITHUB_WORKSPACE'] if (originalGitHubWorkspace) { process.env['GITHUB_WORKSPACE'] = originalGitHubWorkspace } })

test('getStringAsArray splits string input by newlines and commas', async () => { const array = utils.getStringAsArray('1, 2, 3\n4, 5, 6') expect(array.length).toEqual(6)

const array2 = utils.getStringAsArray('')
expect(array2.length).toEqual(0)
})

test('getRepoPath successfully returns the path to the repository', async () => { expect(utils.getRepoPath()).toEqual(process.env['GITHUB_WORKSPACE']) expect(utils.getRepoPath('foo')).toEqual( path.resolve(process.env['GITHUB_WORKSPACE'] || '', 'foo') ) })

test('getRemoteDetail successfully parses remote URLs', async () => { const remote1 = utils.getRemoteDetail( 'https://github.com/peter-evans/create-pull-request' ) expect(remote1.protocol).toEqual('HTTPS') expect(remote1.repository).toEqual('peter-evans/create-pull-request')

const remote2 = utils.getRemoteDetail(
  'https://xxx:x-oauth-basic@github.com/peter-evans/create-pull-request'
)
expect(remote2.protocol).toEqual('HTTPS')
expect(remote2.repository).toEqual('peter-evans/create-pull-request')

const remote3 = utils.getRemoteDetail(
  'git@github.com:peter-evans/create-pull-request.git'
)
expect(remote3.protocol).toEqual('SSH')
expect(remote3.repository).toEqual('peter-evans/create-pull-request')
})

test('getRemoteDetail fails to parse a remote URL', async () => { const remoteUrl = 'https://github.com/peter-evans' try { utils.getRemoteDetail(remoteUrl) // Fail the test if an error wasn't thrown expect(true).toEqual(false) } catch (e) { expect(e.message).toEqual( The format of '${remoteUrl}' is not a valid GitHub repository URL ) } })

test('getRemoteUrl successfully returns remote URLs', async () => { const url1 = utils.getRemoteUrl('HTTPS', 'peter-evans/create-pull-request') expect(url1).toEqual('https://github.com/peter-evans/create-pull-request')

const url2 = utils.getRemoteUrl('SSH', 'peter-evans/create-pull-request')
expect(url2).toEqual('git@github.com:peter-evans/create-pull-request.git')
})

test('secondsSinceEpoch returns the number of seconds since the Epoch', async () => { const seconds = ${utils.secondsSinceEpoch()} expect(seconds.length).toEqual(10) })

test('randomString returns strings of length 7', async () => { for (let i = 0; i < 1000; i++) { expect(utils.randomString().length).toEqual(7) } })

test('parseDisplayNameEmail successfully parses display name email formats', async () => { const parsed1 = utils.parseDisplayNameEmail('abc def abc@def.com') expect(parsed1.name).toEqual('abc def') expect(parsed1.email).toEqual('abc@def.com')

const parsed2 = utils.parseDisplayNameEmail(
  'github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>'
)
expect(parsed2.name).toEqual('github-actions[bot]')
expect(parsed2.email).toEqual(
  '41898282+github-actions[bot]@users.noreply.github.com'
)
})

test('parseDisplayNameEmail fails to parse display name email formats', async () => { const displayNameEmail1 = 'abc@def.com' try { utils.parseDisplayNameEmail(displayNameEmail1) // Fail the test if an error wasn't thrown expect(true).toEqual(false) } catch (e) { expect(e.message).toEqual( The format of '${displayNameEmail1}' is not a valid email address with display name ) }

const displayNameEmail2 = ' < >'
try {
  utils.parseDisplayNameEmail(displayNameEmail2)
  // Fail the test if an error wasn't thrown
  expect(true).toEqual(false)
} catch (e) {
  expect(e.message).toEqual(
    `The format of '${displayNameEmail2}' is not a valid email address with display name`
  )
}
}) }) 75
action.yml @@ -0,0 +1,75 @@ name: 'Create Pull Request' description: 'Creates a pull request for changes to your repository in the actions workspace' inputs: token: description: 'GITHUB_TOKEN or a repo scoped Personal Access Token (PAT)' default: ${{ github.token }} path: description: > Relative path under $GITHUB_WORKSPACE to the repository. Defaults to $GITHUB_WORKSPACE. commit-message: description: 'The message to use when committing changes.' default: '[create-pull-request] automated change' committer: description: > The committer name and email address in the format Display Name <email@address.com>. Defaults to the GitHub Actions bot user. default: 'GitHub noreply@github.com' author: description: > The author name and email address in the format Display Name <email@address.com>. Defaults to the user who triggered the workflow run. default: '${{ github.actor }} <${{ github.actor }}@users.noreply.github.com>' signoff: description: 'Add Signed-off-by line by the committer at the end of the commit log message.' default: false branch: description: 'The pull request branch name.' default: 'create-pull-request/patch' delete-branch: description: > Delete the branch when closing pull requests, and when undeleted after merging. Recommend true. default: false branch-suffix: description: 'The branch suffix type when using the alternative branching strategy.' base: description: > The pull request base branch. Defaults to the branch checked out in the workflow. push-to-fork: description: > A fork of the checked out parent repository to which the pull request branch will be pushed. e.g. owner/repo-fork. The pull request will be created to merge the fork's branch into the parent's base. title: description: 'The title of the pull request.' default: 'Changes by create-pull-request action' body: description: 'The body of the pull request.' default: 'Automated changes by create-pull-request GitHub action' labels: description: 'A comma or newline separated list of labels.' assignees: description: 'A comma or newline separated list of assignees (GitHub usernames).' reviewers: description: 'A comma or newline separated list of reviewers (GitHub usernames) to request a review from.' team-reviewers: description: > A comma or newline separated list of GitHub teams to request a review from. Note that a repo scoped Personal Access Token (PAT) may be required. milestone: description: 'The number of the milestone to associate the pull request with.' draft: description: 'Create a draft pull request' default: false outputs: pull-request-number: description: 'The pull request number' runs: using: 'node12' main: 'dist/index.js' branding: icon: 'git-pull-request' color: 'gray-dark' 7,665
dist/index.js Large diffs are not rendered by default.

68
docs/assets/cpr-gitgraph.htm @@ -0,0 +1,68 @@

<title>create-pull-request GitHub action</title>
<script src='https://cdn.jsdelivr.net/npm/@gitgraph/js'></script> <script> const graphContainer = document.getElementById("graph-container");
    const customTemplate = GitgraphJS.templateExtend(GitgraphJS.TemplateName.Metro, {
        commit: {
            message: {
                displayAuthor: false,
                displayHash: false,
            },
        },
    });

    // Instantiate the graph.
    const gitgraph = GitgraphJS.createGitgraph(graphContainer, {
        template: customTemplate,
        orientation: "vertical-reverse"
    });

    const master = gitgraph.branch("master");
    master.commit("Last commit on base");
    const localMaster = gitgraph.branch("<#1> master (local)");
    localMaster.commit({
        subject: "<uncommitted changes>",
        body: "Changes to the local base during the workflow",
    })
    const remotePatch = gitgraph.branch("create-pull-request/patch");
    remotePatch.merge({
        branch: localMaster,
        commitOptions: {
            subject: "[create-pull-request] automated change",
            body: "Changes pushed to create the remote branch",
        },
    });
    master.commit("New commit on base");

    const localMaster2 = gitgraph.branch("<#2> master (local)");
    localMaster2.commit({
        subject: "<uncommitted changes>",
        body: "Changes to the updated local base during the workflow",
    })
    remotePatch.merge({
        branch: localMaster2,
        commitOptions: {
            subject: "[create-pull-request] automated change",
            body: "Changes force pushed to update the remote branch",
        },
    });

    master.merge(remotePatch);

</script>
BIN +109 KB docs/assets/cpr-gitgraph.png Unable to render code block
6
docs/assets/logo.svg Unable to render code block

BIN +327 KB docs/assets/pull-request-example.png Unable to render code block

323
docs/concepts-guidelines.md Large diffs are not rendered by default.

603
docs/examples.md Large diffs are not rendered by default.

73
docs/updating.md @@ -0,0 +1,73 @@

Updating from v2 to v3
Breaking changes
The author input now defaults to the user who triggered the workflow run. This default is set via action.yml as ${{ github.actor }} <${{ github.actor }}@users.noreply.github.com>, where github.actor is the GitHub user account associated with the run. For example, peter-evans <peter-evans@users.noreply.github.com>.

To continue to use the v2 default, set the author input as follows.

    - uses: peter-evans/create-pull-request@v3
      with:
        author: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>
The author and committer inputs are no longer cross-used if only one is supplied. Additionally, when neither input is set, the author and committer are no longer determined from an existing identity set in git config. In both cases, the inputs will fall back to their default set in action.yml.

Deprecated inputs project and project-column have been removed in favour of an additional action step. See Create a project card for details.

Deprecated output pr_number has been removed in favour of pull-request-number.

Input request-to-parent has been removed in favour of push-to-fork. This greatly simplifies pushing the pull request branch to a fork of the parent repository. See Push pull request branches to a fork for details.

e.g.

- uses: actions/checkout@v2
# Make changes to pull request here
- uses: peter-evans/create-pull-request@v3
  with:
    token: ${{ secrets.MACHINE_USER_PAT }}
    push-to-fork: machine-user/fork-of-repository
New features The action has been converted to Typescript giving it a significant performance improvement.

If you run this action in a container, or on self-hosted runners, python and pip are no longer required dependencies. See Running in a container or on self-hosted runners for details.

Inputs labels, assignees, reviewers and team-reviewers can now be newline separated, or comma separated. e.g.

    labels: |
      chore
      dependencies
      automated
Updating from v1 to v2 Breaking changes v2 now expects repositories to be checked out with actions/checkout@v2

To use actions/checkout@v1 the following step to checkout the branch is necessary.

- uses: actions/checkout@v1
- name: Checkout branch
  run: git checkout "${GITHUB_REF:11}"
The two branch naming strategies have been swapped. Fixed-branch naming strategy is now the default. i.e. branch-suffix: none is now the default and should be removed from configuration if set.

author-name, author-email, committer-name, committer-email have been removed in favour of author and committer. They can both be set in the format Display Name email@address.com

If neither author or committer are set the action will default to making commits as the GitHub Actions bot user.

New features Unpushed commits made during the workflow before the action runs will now be considered as changes to be raised in the pull request. See Controlling commits for details. New commits made to the pull request base will now be taken into account when pull requests are updated. If an updated pull request no longer differs from its base it will automatically be closed and the pull request branch deleted. 11 jest.config.js @@ -0,0 +1,11 @@ module.exports = { clearMocks: true, moduleFileExtensions: ['js', 'ts'], testEnvironment: 'node', testMatch: ['/.test.ts'], testRunner: 'jest-circus/runner', transform: { '^.+.ts$': 'ts-jest' }, verbose: true } 6,521 package-lock.json Large diffs are not rendered by default. 54 package.json @@ -0,0 +1,54 @@ { "name": "create-pull-request", "version": "3.0.0", "private": true, "description": "Creates a pull request for changes to your repository in the actions workspace", "main": "lib/main.js", "scripts": { "build": "tsc && ncc build", "format": "prettier --write '/.ts'", "format-check": "prettier --check '/.ts'", "lint": "eslint src//.ts", "test:unit": "jest unit", "test:int": "test/integration-tests.sh", "test": "npm run test:unit && npm run test:int" }, "repository": { "type": "git", "url": "git+https://github.com/peter-evans/create-pull-request.git" }, "keywords": [ "actions", "pull", "request" ], "author": "Peter Evans", "license": "MIT", "bugs": { "url": "https://github.com/peter-evans/create-pull-request/issues" }, "homepage": "https://github.com/peter-evans/create-pull-request", "dependencies": { "@actions/core": "1.2.6", "@actions/exec": "1.0.4", "@octokit/core": "3.2.4", "@octokit/plugin-paginate-rest": "2.8.0", "@octokit/plugin-rest-endpoint-methods": "4.5.2", "uuid": "8.3.2" }, "devDependencies": { "@types/jest": "26.0.20", "@types/node": "14.14.22", "@typescript-eslint/parser": "4.14.0", "@vercel/ncc": "0.27.0", "eslint": "7.18.0", "eslint-plugin-github": "4.1.1", "eslint-plugin-jest": "24.1.3", "jest": "26.6.3", "jest-circus": "26.6.3", "js-yaml": "4.0.0", "prettier": "2.2.1", "ts-jest": "26.4.4", "typescript": "4.1.3" } } 251 readme.md @@ -0,0 +1,251 @@ BEGIN:

GLOW7:

Author: ZACH T WOO

Date: 17th of September 2005

main: +1(469) 697-4300

e-mail: zachryiixixiiwood@gmail.com

Developer Resource:

kind: 🪁

Search for APIs, guides, keywords

Search

Contact

NPORT/--REWUEST'@ACCT....4720416547-071921891

REQUEST:

ACCOUNT INFORMATION FOR THE CO OWNER OF AMERICA: ZACHRY TYLER WOOD: ALL SCROLL

PAGE SSN: 633-44-1725

Payroll Output API Guide (Turbo API) for Midsized to Enterprise Businesses atus Help center ADP and the ADP logo are registered trademarks of ADP, Inc. All other marks are the property of their respective owners. Copyright © 2022 ADP, Inc. Terms notification: documentation: e-mail: zachryiixixiiwood@gmail.com Privacy# Create Pull Request CI GitHub Marketplace

A GitHub action to create a pull request for changes to your repository in the actions workspace.

Changes to a repository in the Actions workspace persist between steps in a workflow. This action is designed to be used in conjunction with other steps that modify or add files to your repository. The changes will be automatically committed to a new branch and a pull request created.

Create Pull Request action will:

Check for repository changes in the Actions workspace. This includes: untracked (new) files tracked (modified) files commits made during the workflow that have not been pushed Commit all changes to a new branch, or update an existing pull request branch. Create a pull request to merge the new branch into the base—the branch checked out in the workflow. Documentation Concepts, guidelines and advanced usage Examples Updating to v3 Usage - uses: actions/checkout@v2 # Make changes to pull request here - name: Create Pull Request uses: peter-evans/create-pull-request@v3 You can also pin to a specific release version in the format @v3.x.x

Action inputs All inputs are optional. If not set, sensible defaults will be used.

Note: If you want pull requests created by this action to trigge-on: worksflows_call:-on:'Run:run-on:-,oon:Name Description Default token GITHUB_TOKEN or a repo scoped Personal Access Token (PAT). GITHUB_TOKEN path Relative path under GITHUB_WORKSPACE to the repository. GITHUB_WORKSPACE commit-message The message to use when committing changes. [create-pull-request] automated change committer The committer name and email address in the format Display Name email@address.com. Defaults to the GitHub Actions bot user. GitHub noreply@github.com author The author name and email address in the format Display Name email@address.com. Defaults to the user who triggered the workflow run. 
{{ github.actor }}@users.noreply.github.com> signoff Add Signed-off-by line by the committer at the end of the commit log message. false branch The pull request branch name. create-pull-request/patch delete-branch Delete the branch when closing pull requests, and when undeleted after merging. Recommend true. false branch-suffix The branch suffix type when using the alternative branching strategy. Valid values are random, timestamp and short-commit-hash. See Alternative strategy for details. base Sets the pull request base branch. Defaults to the branch checked out in the workflow. push-to-fork A fork of the checked-out parent repository to which the pull request branch will be pushed. e.g. owner/repo-fork. The pull request will be created to merge the fork's branch into the parent's base. See push pull request branches to a fork for details. title The title of the pull request. Changes by create-pull-request action body The body of the pull request. Automated changes by create-pull-request GitHub action labels A comma or newline-separated list of labels. assignees A comma or newline-separated list of assignees (GitHub usernames). reviewers A comma or newline-separated list of reviewers (GitHub usernames) to request a review from. team-reviewers A comma or newline-separated list of GitHub teams to request a review from. Note that a repo scoped PAT may be required. See this issue. milestone The number of the milestone to associate this pull request with. draft Create a draft pull request. false Action outputs The pull request number and URL are available as step outputs. Note that in order to read the step outputs the action step must have an id.

  - name: Create Pull Request
    id: cpr
    uses: peter-evans/create-pull-request@v3
  - name: Check outputs
    run: |
      echo "Pull Request Number - ${{ steps.cpr.outputs.pull-request-number }}"
      echo "Pull Request URL - ${{ steps.cpr.outputs.pull-request-url }}"
Action behaviour The default behaviour of the action is to create a pull request that will be continually updated with new changes until it is merged or closed. Changes are committed and pushed to a fixed-name branch, the name of which can be configured with the branch input. Any subsequent changes will be committed to the same branch and reflected in the open pull request.

How the action behaves:

If there are changes (i.e. a diff exists with the checked-out base branch), the changes will be pushed to a new branch and a pull request created. If there are no changes (i.e. no diff exists with the checked-out base branch), no pull request will be created and the action exits silently. If a pull request already exists and there are no further changes (i.e. no diff with the current pull request branch) then the action exits silently. If a pull request exists and new changes on the base branch make the pull request unnecessary (i.e. there is no longer a diff between the pull request branch and the base), the pull request is automatically closed. Additionally, if delete-branch is set to true the branch will be deleted. For further details about how the action works and usage guidelines, see Concepts, guidelines and advanced usage.

Alternative strategy - Always create a new pull request branch For some use cases it may be desirable to always create a new unique branch each time there are changes to be committed. This strategy is not recommended because if not used carefully it could result in multiple pull requests being created unnecessarily. If in doubt, use the default strategy of creating an updating a fixed-name branch.

To use this strategy, set input branch-suffix with one of the following options.

random - Commits will be made to a branch suffixed with a random alpha-numeric string. e.g. create-pull-request/patch-6qj97jr, create-pull-request/patch-5jrjhvd

timestamp - Commits will be made to a branch suffixed by a timestamp. e.g. create-pull-request/patch-1569322532, create-pull-request/patch-1569322552

short-commit-hash - Commits will be made to a branch suffixed with the short SHA1 commit hash. e.g. create-pull-request/patch-fcdfb59, create-pull-request/patch-394710b

Controlling commits As well as relying on the action to handle uncommitted changes, you can additionally make your own commits before the action runs. Note that the repository must be checked out on a branch with a remote, it won't work for events which checkout a commit.

steps:
  - uses: actions/checkout@v2
  - name: Create commits
    run: |
      git config user.name 'Peter Evans'
      git config user.email 'peter-evans@users.noreply.github.com'
      date +%s > report.txt
      git commit -am "Modify tracked file during workflow"
      date +%s > new-report.txt
      git add -A
      git commit -m "Add untracked file during workflow"
  - name: Uncommitted change
    run: date +%s > report.txt
  - name: Create Pull Request
    uses: peter-evans/create-pull-request@v3
Ignoring files If there are files or directories you want to ignore you can simply add them to a .gitignore file at the root of your repository. The action will respect this file.

Create a project card To create a project card for the pull request, pass the pull-request-number step output to create-or-update-project-card action.

  - name: Create Pull Request
    id: cpr
    uses: peter-evans/create-pull-request@v3
  - name: Create or Update Project Card
    uses: peter-evans/create-or-update-project-card@v1
    with:
      project-name: My project
      column-name: My column
      issue-number: ${{ steps.cpr.outputs.pull-request-number }}
Reference Example The following workflow sets many of the action's inputs for reference purposes. Check the defaults to avoid setting inputs unnecessarily.

See examples for more realistic use cases.

jobs: createPullRequest: runs-on: ubuntu-latest steps: - uses: actions/checkout@v2 - name: Make changes to pull request run: date +%s > report.txt - name: Create Pull Request id: cpr uses: peter-evans/create-pull-request@v3 with: token: ${{ secrets.PAT }} commit-message: Update report committer: GitHub noreply@github.com author: 
{{ github.actor }}@users.noreply.github.com> signoff: false branch: example-patches delete-branch: true title: '[Example] Update report' body: | Update report - Updated with today's date - Auto-generated by [create-pull-request][1] [1]: https://github.com/peter-evans/create-pull-request labels: | report automated pr assignees: peter-evans reviewers: peter-evans team-reviewers: | owners maintainers milestone: 1 draft: false - name: Check outputs run: | echo "Pull Request Number - ${{ steps.cpr.outputs.pull-request-number }}" echo "Pull Request URL - ${{ steps.cpr.outputs.pull-request-url }}" An example based on the above reference configuration creates pull requests that look like this:

Pull Request Example

License MIT 244 src/create-or-update-branch.ts @@ -0,0 +1,244 @@ import * as core from '@actions/core' import {GitCommandManager} from './git-command-manager' import {v4 as uuidv4} from 'uuid'

const CHERRYPICK_EMPTY = 'The previous cherry-pick is now empty, possibly due to conflict resolution.'

export enum WorkingBaseType { Branch = 'branch', Commit = 'commit' }

export async function getWorkingBaseAndType( git: GitCommandManager ): Promise<[string, WorkingBaseType]> { const symbolicRefResult = await git.exec( ['symbolic-ref', 'HEAD', '--short'], true ) if (symbolicRefResult.exitCode == 0) { // A ref is checked out return [symbolicRefResult.stdout.trim(), WorkingBaseType.Branch] } else { // A commit is checked out (detached HEAD) const headSha = await git.revParse('HEAD') return [headSha, WorkingBaseType.Commit] } }

export async function tryFetch( git: GitCommandManager, remote: string, branch: string ): Promise { try { await git.fetch([${branch}:refs/remotes/${remote}/${branch}], remote) return true } catch { return false } }

// Return true if branch2 is ahead of branch1 async function isAhead( git: GitCommandManager, branch1: string, branch2: string ): Promise { const result = await git.revList( [${branch1}...${branch2}], ['--right-only', '--count'] ) return Number(result) > 0 }

// Return true if branch2 is behind branch1 async function isBehind( git: GitCommandManager, branch1: string, branch2: string ): Promise { const result = await git.revList( [${branch1}...${branch2}], ['--left-only', '--count'] ) return Number(result) > 0 }

// Return true if branch2 is even with branch1 async function isEven( git: GitCommandManager, branch1: string, branch2: string ): Promise { return ( !(await isAhead(git, branch1, branch2)) && !(await isBehind(git, branch1, branch2)) ) }

function splitLines(multilineString: string): string[] { return multilineString .split('\n') .map(s => s.trim()) .filter(x => x !== '') }

export async function createOrUpdateBranch( git: GitCommandManager, commitMessage: string, base: string, branch: string, branchRemoteName: string, signoff: boolean ): Promise { // Get the working base. // When a ref, it may or may not be the actual base. // When a commit, we must rebase onto the actual base. const [workingBase, workingBaseType] = await getWorkingBaseAndType(git) core.info(Working base is 
{workingBase}') if (workingBaseType == WorkingBaseType.Commit && !base) { throw new Error(When in 'detached HEAD' state, 'base' must be supplied.) }

// If the base is not specified it is assumed to be the working base. base = base ? base : workingBase const baseRemote = 'origin'

// Set the default return values const result: CreateOrUpdateBranchResult = { action: 'none', base: base, hasDiffWithBase: false }

// Save the working base changes to a temporary branch const tempBranch = uuidv4() await git.checkout(tempBranch, 'HEAD') // Commit any uncommitted changes if (await git.isDirty(true)) { core.info('Uncommitted changes found. Adding a commit.') await git.exec(['add', '-A']) const params = ['-m', commitMessage] if (signoff) { params.push('--signoff') } await git.commit(params) }

// Perform fetch and reset the working base // Commits made during the workflow will be removed if (workingBaseType == WorkingBaseType.Branch) { core.info(Resetting working base branch '${workingBase}') if (branchRemoteName == 'fork') { // If pushing to a fork we must fetch with 'unshallow' to avoid the following error on git push // ! [remote rejected] HEAD -> tests/push-branch-to-fork (shallow update not allowed) await git.fetch([${workingBase}:${workingBase}], baseRemote, [ '--force' ]) } else { // If the remote is 'origin' we can git reset await git.checkout(workingBase) await git.exec(['reset', '--hard', 
{workingBase}]) } }

// If the working base is not the base, rebase the temp branch commits // This will also be true if the working base type is a commit if (workingBase != base) { core.info( Rebasing commits made to 
{workingBase}' on to base branch '${base}' ) // Checkout the actual base await git.fetch([${base}:${base}], baseRemote, ['--force']) await git.checkout(base) // Cherrypick commits from the temporary branch starting from the working base const commits = await git.revList( [${workingBase}..${tempBranch}, '.'], ['--reverse'] ) for (const commit of splitLines(commits)) { const result = await git.cherryPick( ['--strategy=recursive', '--strategy-option=theirs', commit], true ) if (result.exitCode != 0 && !result.stderr.includes(CHERRYPICK_EMPTY)) { throw new Error(Unexpected error:

Extra close brace or missing open brace

${result.stderr}) } } // Reset the temp branch to the working index await git.checkout(tempBranch, 'HEAD') // Reset the base await git.fetch([$
{base}:${base}], baseRemote, ['--force']) }
// Try to fetch the pull request branch if (!(await tryFetch(git, branchRemoteName, branch))) { // The pull request branch does not exist core.info(Pull request branch '${branch}' does not exist yet.) // Create the pull request branch await git.checkout(branch, tempBranch) // Check if the pull request branch is ahead of the base result.hasDiffWithBase = await isAhead(git, base, branch) if (result.hasDiffWithBase) { result.action = 'created' core.info(Created branch '${branch}') } else { core.info( Branch '${branch}' is not ahead of base '${base}' and will not be created ) } } else { // The pull request branch exists core.info( Pull request branch '${branch}' already exists as remote branch '${branchRemoteName}/${branch}' ) // Checkout the pull request branch await git.checkout(branch)

// Reset the branch if one of the following conditions is true. // - If the branch differs from the recreated temp branch. // - If the recreated temp branch is not ahead of the base. This means there will be // no pull request diff after the branch is reset. This will reset any undeleted // branches after merging. In particular, it catches a case where the branch was // squash merged but not deleted. We need to reset to make sure it doesn't appear // to have a diff with the base due to different commits for the same changes. // For changes on base this reset is equivalent to a rebase of the pull request branch. if ( (await git.hasDiff([${branch}..${tempBranch}])) || !(await isAhead(git, base, tempBranch)) ) { core.info(Resetting '${branch}') // Alternatively, git switch -C branch tempBranch await git.checkout(branch, tempBranch) }

// Check if the pull request branch has been updated // If the branch was reset or updated it will be ahead // It may be behind if a reset now results in no diff with the base if (!(await isEven(git, ${branchRemoteName}/${branch}, branch))) { result.action = 'updated' core.info(Updated branch '${branch}') } else { result.action = 'not-updated' core.info( Branch '${branch}' is even with its remote and will not be updated ) }

// Check if the pull request branch is ahead of the base result.hasDiffWithBase = await isAhead(git, base, branch) }

// Delete the temporary branch await git.exec(['branch', '--delete', '--force', tempBranch])

return result }

interface CreateOrUpdateBranchResult { action: string base: string hasDiffWithBase: boolean } 230 src/create-pull-request.ts @@ -0,0 +1,230 @@ import * as core from '@actions/core' import { createOrUpdateBranch, getWorkingBaseAndType, WorkingBaseType } from './create-or-update-branch' import {GitHubHelper} from './github-helper' import {GitCommandManager} from './git-command-manager' import {GitAuthHelper} from './git-auth-helper' import * as utils from './utils'

export interface Inputs { token: string path: string commitMessage: string committer: string author: string signoff: boolean branch: string deleteBranch: boolean branchSuffix: string base: string pushToFork: string title: string body: string labels: string[] assignees: string[] reviewers: string[] teamReviewers: string[] milestone: number draft: boolean }

export async function createPullRequest(inputs: Inputs): Promise { let gitAuthHelper try { // Get the repository path const repoPath = utils.getRepoPath(inputs.path) // Create a git command manager const git = await GitCommandManager.create(repoPath)

// Save and unset the extraheader auth config if it exists core.startGroup('Save persisted git credentials') gitAuthHelper = new GitAuthHelper(git) await gitAuthHelper.savePersistedAuth() core.endGroup()

// Init the GitHub client const githubHelper = new GitHubHelper(inputs.token)

core.startGroup('Determining the base and head repositories') // Determine the base repository from git config const remoteUrl = await git.tryGetRemoteUrl() const baseRemote = utils.getRemoteDetail(remoteUrl) // Determine the head repository; the target for the pull request branch const branchRemoteName = inputs.pushToFork ? 'fork' : 'origin' const branchRepository = inputs.pushToFork ? inputs.pushToFork : baseRemote.repository if (inputs.pushToFork) { // Check if the supplied fork is really a fork of the base const parentRepository = await githubHelper.getRepositoryParent( branchRepository ) if (parentRepository != baseRemote.repository) { throw new Error( Repository '${branchRepository}' is not a fork of '${baseRemote.repository}'. Unable to continue. ) } // Add a remote for the fork const remoteUrl = utils.getRemoteUrl( baseRemote.protocol, branchRepository ) await git.exec(['remote', 'add', 'fork', remoteUrl]) } core.endGroup() core.info( Pull request branch target repository set to ${branchRepository} )

// Configure auth if (baseRemote.protocol == 'HTTPS') { core.startGroup('Configuring credential for HTTPS authentication') await gitAuthHelper.configureToken(inputs.token) core.endGroup() }

core.startGroup('Checking the base repository state') const [workingBase, workingBaseType] = await getWorkingBaseAndType(git) core.info(Working base is ${workingBaseType} '${workingBase}') // When in detached HEAD state (checked out on a commit), we need to // know the 'base' branch in order to rebase changes. if (workingBaseType == WorkingBaseType.Commit && !inputs.base) { throw new Error( When the repository is checked out on a commit instead of a branch, the 'base' input must be supplied. ) } // If the base is not specified it is assumed to be the working base. const base = inputs.base ? inputs.base : workingBase // Throw an error if the base and branch are not different branches // of the 'origin' remote. An identically named branch in the fork // remote is perfectly fine. if (branchRemoteName == 'origin' && base == inputs.branch) { throw new Error( The 'base' and 'branch' for a pull request must be different branches. Unable to continue. ) } // For self-hosted runners the repository state persists between runs. // This command prunes the stale remote ref when the pull request branch was // deleted after being merged or closed. Without this the push using // '--force-with-lease' fails due to "stale info." // https://github.com/peter-evans/create-pull-request/issues/633 await git.exec(['remote', 'prune', branchRemoteName]) core.endGroup()

// Apply the branch suffix if set if (inputs.branchSuffix) { switch (inputs.branchSuffix) { case 'short-commit-hash': // Suffix with the short SHA1 hash inputs.branch = ${inputs.branch}-${await git.revParse('HEAD', [ '--short' ])} break case 'timestamp': // Suffix with the current timestamp inputs.branch = ${inputs.branch}-${utils.secondsSinceEpoch()} break case 'random': // Suffix with a 7 character random string inputs.branch = ${inputs.branch}-${utils.randomString()} break default: throw new Error( Branch suffix '${inputs.branchSuffix}' is not a valid value. Unable to continue. ) } }

// Output head branch core.info( Pull request branch to create or update set to '${inputs.branch}' )

// Configure the committer and author core.startGroup('Configuring the committer and author') const parsedAuthor = utils.parseDisplayNameEmail(inputs.author) const parsedCommitter = utils.parseDisplayNameEmail(inputs.committer) git.setIdentityGitOptions([ '-c', author.name=${parsedAuthor.name}, '-c', author.email=${parsedAuthor.email}, '-c', committer.name=${parsedCommitter.name}, '-c', committer.email=${parsedCommitter.email} ]) core.info( Configured git committer as '${parsedCommitter.name} <${parsedCommitter.email}>' ) core.info( Configured git author as '${parsedAuthor.name} <${parsedAuthor.email}>' ) core.endGroup()

// Create or update the pull request branch core.startGroup('Create or update the pull request branch') const result = await createOrUpdateBranch( git, inputs.commitMessage, inputs.base, inputs.branch, branchRemoteName, inputs.signoff ) core.endGroup()

if (['created', 'updated'].includes(result.action)) { // The branch was created or updated core.startGroup( Pushing pull request branch to '${branchRemoteName}/${inputs.branch}' ) await git.push([ '--force-with-lease', branchRemoteName, HEAD:refs/heads/${inputs.branch} ]) core.endGroup() }

// Set the base. It would have been '' if not specified as an input inputs.base = result.base

if (result.hasDiffWithBase) { // Create or update the pull request await githubHelper.createOrUpdatePullRequest( inputs, baseRemote.repository, branchRepository ) } else { // There is no longer a diff with the base // Check we are in a state where a branch exists if (['updated', 'not-updated'].includes(result.action)) { core.info( Branch '${inputs.branch}' no longer differs from base branch '${inputs.base}' ) if (inputs.deleteBranch) { core.info(Deleting branch '${inputs.branch}') await git.push([ '--delete', '--force', branchRemoteName, refs/heads/${inputs.branch} ]) } } } } catch (error) { core.setFailed(error.message) } finally { // Remove auth and restore persisted auth config if it existed core.startGroup('Restore persisted git credentials') await gitAuthHelper.removeAuth() await gitAuthHelper.restorePersistedAuth() core.endGroup() } } 126 src/git-auth-helper.ts @@ -0,0 +1,126 @@ import * as core from '@actions/core' import * as fs from 'fs' import {GitCommandManager} from './git-command-manager' import * as path from 'path' import {URL} from 'url'

export class GitAuthHelper { private git: GitCommandManager private gitConfigPath: string private extraheaderConfigKey: string private extraheaderConfigPlaceholderValue = 'AUTHORIZATION: basic ***' private extraheaderConfigValueRegex = '^AUTHORIZATION:' private persistedExtraheaderConfigValue = ''

constructor(git: GitCommandManager) { this.git = git this.gitConfigPath = path.join( this.git.getWorkingDirectory(), '.git', 'config' ) const serverUrl = this.getServerUrl() this.extraheaderConfigKey = http.${serverUrl.origin}/.extraheader }

async savePersistedAuth(): Promise { // Save and unset persisted extraheader credential in git config if it exists this.persistedExtraheaderConfigValue = await this.getAndUnset() }

async restorePersistedAuth(): Promise { if (this.persistedExtraheaderConfigValue) { try { await this.setExtraheaderConfig(this.persistedExtraheaderConfigValue) core.info('Persisted git credentials restored') } catch (e) { core.warning(e) } } }

async configureToken(token: string): Promise { // Encode and configure the basic credential for HTTPS access const basicCredential = Buffer.from( x-access-token:${token}, 'utf8' ).toString('base64') core.setSecret(basicCredential) const extraheaderConfigValue = AUTHORIZATION: basic ${basicCredential} await this.setExtraheaderConfig(extraheaderConfigValue) }

async removeAuth(): Promise { await this.getAndUnset() }

private async setExtraheaderConfig( extraheaderConfigValue: string ): Promise { // Configure a placeholder value. This approach avoids the credential being captured // by process creation audit events, which are commonly logged. For more information, // refer to https://docs.microsoft.com/en-us/windows-server/identity/ad-ds/manage/component-updates/command-line-process-auditing // See https://github.com/actions/checkout/blob/main/src/git-auth-helper.ts#L267-L274 await this.git.config( this.extraheaderConfigKey, this.extraheaderConfigPlaceholderValue ) // Replace the placeholder await this.gitConfigStringReplace( this.extraheaderConfigPlaceholderValue, extraheaderConfigValue ) }

private async getAndUnset(): Promise { let configValue = '' // Save and unset persisted extraheader credential in git config if it exists if ( await this.git.configExists( this.extraheaderConfigKey, this.extraheaderConfigValueRegex ) ) { configValue = await this.git.getConfigValue( this.extraheaderConfigKey, this.extraheaderConfigValueRegex ) if ( await this.git.tryConfigUnset( this.extraheaderConfigKey, this.extraheaderConfigValueRegex ) ) { core.info(Unset config key '${this.extraheaderConfigKey}') } else { core.warning( Failed to unset config key '${this.extraheaderConfigKey}' ) } } return configValue }

private async gitConfigStringReplace( find: string, replace: string ): Promise { let content = (await fs.promises.readFile(this.gitConfigPath)).toString() const index = content.indexOf(find) if (index < 0 || index != content.lastIndexOf(find)) { throw new Error(Unable to replace '${find}' in ${this.gitConfigPath}) } content = content.replace(find, replace) await fs.promises.writeFile(this.gitConfigPath, content) }

private getServerUrl(): URL { // todo: remove GITHUB_URL after support for GHES Alpha is no longer needed // See https://github.com/actions/checkout/blob/main/src/url-helper.ts#L22-L29 return new URL( process.env['GITHUB_SERVER_URL'] || process.env['GITHUB_URL'] || 'https://github.com' ) } } 293 src/git-command-manager.ts @@ -0,0 +1,293 @@ import * as exec from '@actions/exec' import * as io from '@actions/io' import * as utils from './utils' import * as path from 'path'

const tagsRefSpec = '+refs/tags/:refs/tags/'

export class GitCommandManager { private gitPath: string private workingDirectory: string // Git options used when commands require an identity private identityGitOptions?: string[]

private constructor(workingDirectory: string, gitPath: string) { this.workingDirectory = workingDirectory this.gitPath = gitPath }

static async create(workingDirectory: string): Promise { const gitPath = await io.which('git', true) return new GitCommandManager(workingDirectory, gitPath) }

setIdentityGitOptions(identityGitOptions: string[]): void { this.identityGitOptions = identityGitOptions }

async checkout(ref: string, startPoint?: string): Promise { const args = ['checkout', '--progress'] if (startPoint) { args.push('-B', ref, startPoint) } else { args.push(ref) } await this.exec(args) }

async cherryPick( options?: string[], allowAllExitCodes = false ): Promise { const args = ['cherry-pick'] if (this.identityGitOptions) { args.unshift(...this.identityGitOptions) }

if (options) { args.push(...options) }

return await this.exec(args, allowAllExitCodes) }

async commit(options?: string[]): Promise { const args = ['commit'] if (this.identityGitOptions) { args.unshift(...this.identityGitOptions) }

if (options) { args.push(...options) }

await this.exec(args) }

async config( configKey: string, configValue: string, globalConfig?: boolean ): Promise { await this.exec([ 'config', globalConfig ? '--global' : '--local', configKey, configValue ]) }

async configExists( configKey: string, configValue = '.', globalConfig?: boolean ): Promise { const output = await this.exec( [ 'config', globalConfig ? '--global' : '--local', '--name-only', '--get-regexp', configKey, configValue ], true ) return output.exitCode === 0 }

async fetch( refSpec: string[], remoteName?: string, options?: string[] ): Promise { const args = ['-c', 'protocol.version=2', 'fetch'] if (!refSpec.some(x => x === tagsRefSpec)) { args.push('--no-tags') }

args.push('--progress', '--no-recurse-submodules') if ( utils.fileExistsSync(path.join(this.workingDirectory, '.git', 'shallow')) ) { args.push('--unshallow') }

if (options) { args.push(...options) }

if (remoteName) { args.push(remoteName) } else { args.push('origin') } for (const arg of refSpec) { args.push(arg) }

await this.exec(args) }

async getConfigValue(configKey: string, configValue = '.'): Promise { const output = await this.exec([ 'config', '--local', '--get-regexp', configKey, configValue ]) return output.stdout.trim().split(${configKey} )[1] }

getWorkingDirectory(): string { return this.workingDirectory }

async hasDiff(options?: string[]): Promise { const args = ['diff', '--quiet'] if (options) { args.push(...options) } const output = await this.exec(args, true) return output.exitCode === 1 }

async isDirty(untracked: boolean): Promise { // Check untracked changes if (untracked && (await this.status(['--porcelain', '-unormal']))) { return true } // Check working index changes if (await this.hasDiff()) { return true } // Check staged changes if (await this.hasDiff(['--staged'])) { return true } return false }

async push(options?: string[]): Promise { const args = ['push'] if (options) { args.push(...options) } await this.exec(args) }

async revList( commitExpression: string[], options?: string[] ): Promise { const args = ['rev-list'] if (options) { args.push(...options) } args.push(...commitExpression) const output = await this.exec(args) return output.stdout.trim() }

async revParse(ref: string, options?: string[]): Promise { const args = ['rev-parse'] if (options) { args.push(...options) } args.push(ref) const output = await this.exec(args) return output.stdout.trim() }

async status(options?: string[]): Promise { const args = ['status'] if (options) { args.push(...options) } const output = await this.exec(args) return output.stdout.trim() }

async symbolicRef(ref: string, options?: string[]): Promise { const args = ['symbolic-ref', ref] if (options) { args.push(...options) } const output = await this.exec(args) return output.stdout.trim() }

async tryConfigUnset( configKey: string, configValue = '.', globalConfig?: boolean ): Promise { const output = await this.exec( [ 'config', globalConfig ? '--global' : '--local', '--unset', configKey, configValue ], true ) return output.exitCode === 0 }

async tryGetRemoteUrl(): Promise { const output = await this.exec( ['config', '--local', '--get', 'remote.origin.url'], true )

if (output.exitCode !== 0) { return '' }

const stdout = output.stdout.trim() if (stdout.includes('\n')) { return '' }

return stdout }

async exec(args: string[], allowAllExitCodes = false): Promise { const result = new GitOutput()

const env = {} for (const key of Object.keys(process.env)) { env[key] = process.env[key] }

const stdout: string[] = [] const stderr: string[] = []

const options = { cwd: this.workingDirectory, env, ignoreReturnCode: allowAllExitCodes, listeners: { stdout: (data: Buffer) => { stdout.push(data.toString()) }, stderr: (data: Buffer) => { stderr.push(data.toString()) } } }

result.exitCode = await exec.exec("${this.gitPath}", args, options) result.stdout = stdout.join('') result.stderr = stderr.join('') return result } }

class GitOutput { stdout = '' stderr = '' exitCode = 0 } 173 src/github-helper.ts @@ -0,0 +1,173 @@ import * as core from '@actions/core' import {Inputs} from './create-pull-request' import {Octokit, OctokitOptions} from './octokit-client'

const ERROR_PR_REVIEW_FROM_AUTHOR = 'Review cannot be requested from pull request author'

interface Repository { owner: string repo: string }

interface Pull { number: number html_url: string }

export class GitHubHelper { private octokit: InstanceType

constructor(token: string) { const options: OctokitOptions = {} if (token) { options.auth = ${token} } options.baseUrl = process.env['GITHUB_API_URL'] || 'https://api.github.com' this.octokit = new Octokit(options) }

private parseRepository(repository: string): Repository { const [owner, repo] = repository.split('/') return { owner: owner, repo: repo } }

private async createOrUpdate( inputs: Inputs, baseRepository: string, headBranch: string ): Promise { // Try to create the pull request try { const {data: pull} = await this.octokit.pulls.create({ ...this.parseRepository(baseRepository), title: inputs.title, head: headBranch, base: inputs.base, body: inputs.body, draft: inputs.draft }) core.info( Created pull request #${pull.number} (${headBranch} =>

Unable to render expression.

${inputs.base}) ) return { number: pull.number, html_url: pull.html_url } } catch (e) { if ( e.message &amp;&amp; e.message.includes(A pull request already exists for $
{headBranch}) ) { core.info(A pull request already exists for ${headBranch}) } else { throw e } }
// Update the pull request that exists for this branch and base const {data: pulls} = await this.octokit.pulls.list({ ...this.parseRepository(baseRepository), state: 'open', head: headBranch, base: inputs.base }) const {data: pull} = await this.octokit.pulls.update({ ...this.parseRepository(baseRepository), pull_number: pulls[0].number, title: inputs.title, body: inputs.body, draft: inputs.draft }) core.info( Updated pull request #${pull.number} (${headBranch} => ${inputs.base}) ) return { number: pull.number, html_url: pull.html_url } }

async getRepositoryParent(headRepository: string): Promise { const {data: headRepo} = await this.octokit.repos.get({ ...this.parseRepository(headRepository) }) if (!headRepo.parent) { throw new Error( Repository '${headRepository}' is not a fork. Unable to continue. ) } return headRepo.parent.full_name }

async createOrUpdatePullRequest( inputs: Inputs, baseRepository: string, headRepository: string ): Promise { const [headOwner] = headRepository.split('/') const headBranch = 
{inputs.branch}

// Create or update the pull request const pull = await this.createOrUpdate(inputs, baseRepository, headBranch)

// Set outputs core.startGroup('Setting outputs') core.setOutput('pull-request-number', pull.number) core.setOutput('pull-request-url', pull.html_url) // Deprecated core.exportVariable('PULL_REQUEST_NUMBER', pull.number) core.endGroup()

// Set milestone, labels and assignees const updateIssueParams = {} if (inputs.milestone) { updateIssueParams['milestone'] = inputs.milestone core.info(Applying milestone '${inputs.milestone}') } if (inputs.labels.length > 0) { updateIssueParams['labels'] = inputs.labels core.info(Applying labels '${inputs.labels}') } if (inputs.assignees.length > 0) { updateIssueParams['assignees'] = inputs.assignees core.info(Applying assignees '${inputs.assignees}') } if (Object.keys(updateIssueParams).length > 0) { await this.octokit.issues.update({ ...this.parseRepository(baseRepository), issue_number: pull.number, ...updateIssueParams }) }

// Request reviewers and team reviewers const requestReviewersParams = {} if (inputs.reviewers.length > 0) { requestReviewersParams['reviewers'] = inputs.reviewers core.info(Requesting reviewers '${inputs.reviewers}') } if (inputs.teamReviewers.length > 0) { requestReviewersParams['team_reviewers'] = inputs.teamReviewers core.info(Requesting team reviewers '${inputs.teamReviewers}') } if (Object.keys(requestReviewersParams).length > 0) { try { await this.octokit.pulls.requestReviewers({ ...this.parseRepository(baseRepository), pull_number: pull.number, ...requestReviewersParams }) } catch (e) { if (e.message && e.message.includes(ERROR_PR_REVIEW_FROM_AUTHOR)) { core.warning(ERROR_PR_REVIEW_FROM_AUTHOR) } else { throw e } } } } } 37 src/main.ts @@ -0,0 +1,37 @@ import * as core from '@actions/core' import {Inputs, createPullRequest} from './create-pull-request' import {inspect} from 'util' import * as utils from './utils'

async function run(): Promise { try { const inputs: Inputs = { token: core.getInput('token'), path: core.getInput('path'), commitMessage: core.getInput('commit-message'), committer: core.getInput('committer'), author: core.getInput('author'), signoff: core.getInput('signoff') === 'true', branch: core.getInput('branch'), deleteBranch: core.getInput('delete-branch') === 'true', branchSuffix: core.getInput('branch-suffix'), base: core.getInput('base'), pushToFork: core.getInput('push-to-fork'), title: core.getInput('title'), body: core.getInput('body'), labels: utils.getInputAsArray('labels'), assignees: utils.getInputAsArray('assignees'), reviewers: utils.getInputAsArray('reviewers'), teamReviewers: utils.getInputAsArray('team-reviewers'), milestone: Number(core.getInput('milestone')), draft: core.getInput('draft') === 'true' } core.debug(Inputs: ${inspect(inputs)})

await createPullRequest(inputs) } catch (error) { core.setFailed(error.message) } }

run() 7 src/octokit-client.ts @@ -0,0 +1,7 @@ import {Octokit as Core} from '@octokit/core' import {paginateRest} from '@octokit/plugin-paginate-rest' import {restEndpointMethods} from '@octokit/plugin-rest-endpoint-methods' export {RestEndpointMethodTypes} from '@octokit/plugin-rest-endpoint-methods' export {OctokitOptions} from '@octokit/core/dist-types/types'

export const Octokit = Core.plugin(paginateRest, restEndpointMethods) 152 src/utils.ts @@ -0,0 +1,152 @@ import * as core from '@actions/core' import * as fs from 'fs' import * as path from 'path'

export function getInputAsArray( name: string, options?: core.InputOptions ): string[] { return getStringAsArray(core.getInput(name, options)) }

export function getStringAsArray(str: string): string[] { return str .split(/[\n,]+/) .map(s => s.trim()) .filter(x => x !== '') }

export function getRepoPath(relativePath?: string): string { let githubWorkspacePath = process.env['GITHUB_WORKSPACE'] if (!githubWorkspacePath) { throw new Error('GITHUB_WORKSPACE not defined') } githubWorkspacePath = path.resolve(githubWorkspacePath) core.debug(githubWorkspacePath: ${githubWorkspacePath})

let repoPath = githubWorkspacePath if (relativePath) repoPath = path.resolve(repoPath, relativePath)

core.debug(repoPath: ${repoPath}) return repoPath }

interface RemoteDetail { protocol: string repository: string }

export function getRemoteDetail(remoteUrl: string): RemoteDetail { // Parse the protocol and github repository from a URL // e.g. HTTPS, peter-evans/create-pull-request const githubUrl = process.env['GITHUB_SERVER_URL'] || 'https://github.com'

const githubServerMatch = githubUrl.match(/^https?://(.+)$/i) if (!githubServerMatch) { throw new Error('Could not parse GitHub Server name') }

const httpsUrlPattern = new RegExp( '^https?://.*@?' + githubServerMatch[1] + '/(.+/.+)$', 'i' ) const sshUrlPattern = new RegExp( '^git@' + githubServerMatch[1] + ':(.+/.+).git$', 'i' )

const httpsMatch = remoteUrl.match(httpsUrlPattern) if (httpsMatch) { return { protocol: 'HTTPS', repository: httpsMatch[1] } }

const sshMatch = remoteUrl.match(sshUrlPattern) if (sshMatch) { return { protocol: 'SSH', repository: sshMatch[1] } }

throw new Error( The format of '${remoteUrl}' is not a valid GitHub repository URL ) }

export function getRemoteUrl(protocol: string, repository: string): string { return protocol == 'HTTPS' ? https://github.com/${repository} : git@github.com:${repository}.git }

export function secondsSinceEpoch(): number { const now = new Date() return Math.round(now.getTime() / 1000) }

export function randomString(): string { return Math.random().toString(36).substr(2, 7) }

interface DisplayNameEmail { name: string email: string }

export function parseDisplayNameEmail( displayNameEmail: string ): DisplayNameEmail { // Parse the name and email address from a string in the following format // Display Name email@address.com const pattern = /^([^<]+)\s*<([^>]+)>$/i

// Check we have a match const match = displayNameEmail.match(pattern) if (!match) { throw new Error( The format of '${displayNameEmail}' is not a valid email address with display name ) }

// Check that name and email are not just whitespace const name = match[1].trim() const email = match[2].trim() if (!name || !email) { throw new Error( The format of '${displayNameEmail}' is not a valid email address with display name ) }

return { name: name, email: email } }

export function fileExistsSync(path: string): boolean { if (!path) { throw new Error("Arg 'path' must not be empty") }

let stats: fs.Stats try { stats = fs.statSync(path) } catch (error) { if (error.code === 'ENOENT') { return false }

throw new Error( Encountered an error when checking whether path '${path}' exists: ${error.message} ) }

if (!stats.isDirectory()) { return true }

return false } 16 tsconfig.json @@ -0,0 +1,16 @@ { "compilerOptions": { "target": "es6", "module": "commonjs", "lib": [ "es6" ], "outDir": "./lib", "rootDir": "./src", "declaration": true, "strict": true, "noImplicitAny": false, "esModuleInterop": true }, "exclude": ["test", "lib", "node_modules"] } Footer © 2022 GitHub, Inc. Footer navigation Terms Privacy Security Status Docs Contact GitHub Pricing API Training Blog About

    owners
    maintainers
  milestone: 1
  draft: false
name: Check outputs run: | echo "Pull Request Number - ${{ steps.cpr.outputs.pull-request-number }}" echo "Pull Request URL - ${{ steps.cpr.outputs.pull-request-url }}"
An example based on the above reference configuration creates pull requests that look like this:

Pull Request Example

License
MIT Footer © 2022 GitHub, Inc. Footer navigation Terms Privacy Security Status Docs Contact GitHub Pricing API Training Blog About You have unread notifications Author: ZACH T WOO

Date: 30th of December 2006

main: +1(469) 697-4300

e-mail: zachryiixixiiwood@gmail.com

Developer Resource:

kind: 🪁

Search for APIs, guides, keywords

Search

Contact

NPORT/--REWUEST'@ACCT....4720416547-071921891

REQUEST:

ACCOUNT INFORMATION FOR THE CO OWNER OF AMERICA: ZACHRY TYLER WOOD: ALL SCROLL

PAGE SSN: 633-44-1725

Payroll Output API Guide (Turbo API) for Midsized to Enterprise Businesses atus Help center ADP and the ADP logo are registered trademarks of ADP, Inc. All other marks are the property of their respective owners. Copyright © 2022 ADP, Inc. Terms notification: documentation: e-mail: zachryiixixiiwood@gmail.com Privacy#  Create Pull Request CI GitHub Marketplace

A GitHub action to create a pull request for changes to your repository in the actions workspace.

Changes to a repository in the Actions workspace persist between steps in a workflow. This action is designed to be used in conjunction with other steps that modify or add files to your repository. The changes will be automatically committed to a new branch and a pull request created.

Create Pull Request action will:

Check for repository changes in the Actions workspace. This includes:
untracked (new) files
tracked (modified) files
commits made during the workflow that have not been pushed
Commit all changes to a new branch, or update an existing pull request branch.
Create a pull request to merge the new branch into the base—the branch checked out in the workflow.
Documentation
Concepts, guidelines and advanced usage
Examples
Updating to v3
Usage
      - uses: actions/checkout@v2

      # Make changes to pull request here

      - name: Create Pull Request
        uses: peter-evans/create-pull-request@v3
You can also pin to a specific release version in the format @v3.x.x

Action inputs
All inputs are optional. If not set, sensible defaults will be used.

Note: If you want pull requests created by this action to trigge-on: worksflows_call:-on:'Run:run-on:-,oon:Name	Description	Default
token	GITHUB_TOKEN or a repo scoped Personal Access Token (PAT).	GITHUB_TOKEN
path	Relative path under GITHUB_WORKSPACE to the repository.	GITHUB_WORKSPACE
commit-message	The message to use when committing changes.	[create-pull-request] automated change
committer	The committer name and email address in the format Display Name <email@address.com>. Defaults to the GitHub Actions bot user.	GitHub <noreply@github.com>
author	The author name and email address in the format Display Name <email@address.com>. Defaults to the user who triggered the workflow run.	${{ github.actor }} <${{ github.actor }}@users.noreply.github.com>
signoff	Add Signed-off-by line by the committer at the end of the commit log message.	false
branch	The pull request branch name.	create-pull-request/patch
delete-branch	Delete the branch when closing pull requests, and when undeleted after merging. Recommend true.	false
branch-suffix	The branch suffix type when using the alternative branching strategy. Valid values are random, timestamp and short-commit-hash. See Alternative strategy for details.	
base	Sets the pull request base branch.	Defaults to the branch checked out in the workflow.
push-to-fork	A fork of the checked-out parent repository to which the pull request branch will be pushed. e.g. owner/repo-fork. The pull request will be created to merge the fork's branch into the parent's base. See push pull request branches to a fork for details.	
title	The title of the pull request.	Changes by create-pull-request action
body	The body of the pull request.	Automated changes by [create-pull-request](https://github.com/peter-evans/create-pull-request) GitHub action
labels	A comma or newline-separated list of labels.	
assignees	A comma or newline-separated list of assignees (GitHub usernames).	
reviewers	A comma or newline-separated list of reviewers (GitHub usernames) to request a review from.	
team-reviewers	A comma or newline-separated list of GitHub teams to request a review from. Note that a repo scoped PAT may be required. See this issue.	
milestone	The number of the milestone to associate this pull request with.	
draft	Create a draft pull request.	false
Action outputs
The pull request number and URL are available as step outputs. Note that in order to read the step outputs the action step must have an id.

      - name: Create Pull Request
        id: cpr
        uses: peter-evans/create-pull-request@v3
      - name: Check outputs
        run: |
          echo "Pull Request Number - ${{ steps.cpr.outputs.pull-request-number }}"
          echo "Pull Request URL - ${{ steps.cpr.outputs.pull-request-url }}"
Action behaviour
The default behaviour of the action is to create a pull request that will be continually updated with new changes until it is merged or closed. Changes are committed and pushed to a fixed-name branch, the name of which can be configured with the branch input. Any subsequent changes will be committed to the same branch and reflected in the open pull request.

How the action behaves:

If there are changes (i.e. a diff exists with the checked-out base branch), the changes will be pushed to a new branch and a pull request created.
If there are no changes (i.e. no diff exists with the checked-out base branch), no pull request will be created and the action exits silently.
If a pull request already exists and there are no further changes (i.e. no diff with the current pull request branch) then the action exits silently.
If a pull request exists and new changes on the base branch make the pull request unnecessary (i.e. there is no longer a diff between the pull request branch and the base), the pull request is automatically closed. Additionally, if delete-branch is set to true the branch will be deleted.
For further details about how the action works and usage guidelines, see Concepts, guidelines and advanced usage.

Alternative strategy - Always create a new pull request branch
For some use cases it may be desirable to always create a new unique branch each time there are changes to be committed. This strategy is not recommended because if not used carefully it could result in multiple pull requests being created unnecessarily. If in doubt, use the default strategy of creating an updating a fixed-name branch.

To use this strategy, set input branch-suffix with one of the following options.

random - Commits will be made to a branch suffixed with a random alpha-numeric string. e.g. create-pull-request/patch-6qj97jr, create-pull-request/patch-5jrjhvd

timestamp - Commits will be made to a branch suffixed by a timestamp. e.g. create-pull-request/patch-1569322532, create-pull-request/patch-1569322552

short-commit-hash - Commits will be made to a branch suffixed with the short SHA1 commit hash. e.g. create-pull-request/patch-fcdfb59, create-pull-request/patch-394710b

Controlling commits
As well as relying on the action to handle uncommitted changes, you can additionally make your own commits before the action runs. Note that the repository must be checked out on a branch with a remote, it won't work for events which checkout a commit.

    steps:
      - uses: actions/checkout@v2
      - name: Create commits
        run: |
          git config user.name 'Peter Evans'
          git config user.email 'peter-evans@users.noreply.github.com'
          date +%s > report.txt
          git commit -am "Modify tracked file during workflow"
          date +%s > new-report.txt
          git add -A
          git commit -m "Add untracked file during workflow"
      - name: Uncommitted change
        run: date +%s > report.txt
      - name: Create Pull Request
        uses: peter-evans/create-pull-request@v3
Ignoring files
If there are files or directories you want to ignore you can simply add them to a .gitignore file at the root of your repository. The action will respect this file.

Create a project card
To create a project card for the pull request, pass the pull-request-number step output to create-or-update-project-card action.

      - name: Create Pull Request
        id: cpr
        uses: peter-evans/create-pull-request@v3

      - name: Create or Update Project Card
        uses: peter-evans/create-or-update-project-card@v1
        with:
          project-name: My project
          column-name: My column
          issue-number: ${{ steps.cpr.outputs.pull-request-number }}
Reference Example
The following workflow sets many of the action's inputs for reference purposes. Check the defaults to avoid setting inputs unnecessarily.

See examples for more realistic use cases.

jobs:
  createPullRequest:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Make changes to pull request
        run: date +%s > report.txt

      - name: Create Pull Request
        id: cpr
        uses: peter-evans/create-pull-request@v3
        with:
          token: ${{ secrets.PAT }}
          commit-message: Update report
          committer: GitHub <noreply@github.com>
          author: ${{ github.actor }} <${{ github.actor }}@users.noreply.github.com>
          signoff: false
          branch: example-patches
          delete-branch: true
          title: '[Example] Update report'
          body: |
            Update report
            - Updated with *today's* date
            - Auto-generated by [create-pull-request][1]

            [1]: https://github.com/peter-evans/create-pull-request
          labels: |
            report
            automated pr
          assignees: peter-evans
          reviewers: peter-evans
          team-reviewers: |
            owners
            maintainers
          milestone: 1
          draft: false

      - name: Check outputs
        run: |
          echo "Pull Request Number - ${{ steps.cpr.outputs.pull-request-number }}"
          echo "Pull Request URL - ${{ steps.cpr.outputs.pull-request-url }}"
An example based on the above reference configuration creates pull requests that look like this:

Pull Request Example Payroll Details Report Preview only

PAY HRS AMT DEDUCTIONS AMT EMPLOYEE-PAID TAXES AMT EMPLOYER-PAID TAXES AMT ZACHRY T. WOOD Net $22,677,000,000,000.00 Pay date: 05/23/2022 05/20/2022 - 05/26/2022 Commissions 0.0 22,677,000,000,000.0 Federal Income Tax 5,105,000.0 Reimbursement 0.0 22,677,000,000,000.0 CA Income Tax 257,637,118,600.0 Nontaxable Per Diem 0.0 Other Earnings 0.0 22,677,000,000,000.0 TOTAL Net $22,677,000,000,000.00 Commissions Federal Income Tax 0.0 Reimbursement 0.0 CA Income Tax 0.0 Nontaxable Per Diem 22,677,000,000,000.0 Other Earnings 22,677,000,000,000.0 GRAND TOTAL Net 22,677,000,000,000.0 0.0 0.0 0.0

							7,364.0																
Payroll Details Report Preview only

PAY HRS AMT DEDUCTIONS AMT EMPLOYEE-PAID TAXES AMT EMPLOYER-PAID TAXES AMT ZACHRY T. WOOD Net $22,677,000,000,000.00 Pay date: 05/23/2022 05/20/2022 - 05/26/2022 Commissions 22,677,000,000,000.0 Federal Income Tax 0.0 Reimbursement 0.0 0.0 CA Income Tax 0.0 70-2189/719 Nontaxable Per Diem 0.0 0.0 Other Earnings 0.0 0.0 22,677,000,000,000.0 PAPER FOR GL TICKETS AND CONVENIENCE CHECKS TOTAL Net $22,677,000,000,000.00 Commissions 0.0 Federal Income Tax 0.0 Reimbursement 0.0 0.0 CA Income Tax 0.0 Nontaxable Per Diem 0.0 0.0 Other Earnings 0.0 0.0 GRAND TOTAL Net $22,677,000,000,000.00 0.0 0.0 0.0

Business Checking Calendar Year For the period 04-13-2022 to 04-29-2022 For 24-hour account information, sign on to Due: 04/18/2022 ZACHRY TYLER WOOD pnc.com/mybusiness:/ Primary account number: 47-2041-6547 Business Checking Account number: 47-2041-6547 - continued Page 1 of 3 +1 (800) 446-8848 Activity Detail Deposits and Other Additions EIN: 88-1656496 ACH Additions Transcription Date posted Amount description Reference 5022022 62.5 number ZACHRY WOOD 22,677,000,000,000.0 Reverse Corporate ACH Debit ALPHABET Effective 04-26-2022 00022116905560149| 5323 BRADFORD DR DALLAS TX 75235 Checks and Other Deductions ACH Deductions 22,677,000,000,000.0 Transcription Reference Date posted Amount description number 5262022 63 Corporate ACH Quickbooks 18--4Intuit 1940868 22116005560149) Effective 04-26-2022

			Transcription 			Reference																	
Date posted Amount description number 36 Returned Item Fee (nsf) 22116005560149) 0 Effective 04-26-2022 Detail of Service Used During Current Period Note: The total Charge for the following services will be posted to your account on 05/02/2022 ad will appear on your next statement as a single line item entitled Service Charge Period Ending 04/29/2022.

Description Volume Amount Account Maintenance Charge .00 Waived - New Customer Period Total For Services Used This Period .00 Total Service Charge .00

US$ in millions 12 months ended: 43,830 43,465 43,100 42,735 Revenues 161857 136,819 110,855 90,272 Cost of revenues -71,896 -59,549 -45,583 -35,138 Gross profit 89,961 77,270 65,272 55,134 Research and development -26,018 -21,419 -16,625 -13,948 Sales and marketing -18,464 -16,333 -12,893 -10,485 General and administrative -9,551 -8,126 -6,872 -6,985 European Commission fines -1,697 -5,071 -2,736 â€” Income from operations 34231 26321 26146 23,716 Interest income 2427 1878 1312 1,220 Interest expense -100 -114 -109 -124 Foreign currency exchange gain (loss), net 103 -80 -121 -475 Gain from (loss) on debt securities, net 149 1,190 -110 -53 Gain from (loss) on equity securities, net 2,649 5,460 73 -20 Performance fees -326 â€” â€” Gains from loss and impairment disgorgement of fair funds 390 -120 -156 -202 Other 102 378 158 88 Other income (expense), net 5,394 8,592 1,047 434 Income before income taxes 39625 34913 27193 24150 Provision for income taxes -3269 -2880 -2302 -1922 Other income (expense), net 36,355 -32,669 25,611 22,198 Adjustment Payment to Class C capital stockholders

Consolidated Income Statement Amount Payable 322,104.00 222,594.00 238,871.00 212,793.00

ID: 37305581 SSN: 633441725 DoB: 34622

+1(469) 697-4300 Best Time to Call DATE OF THIS NOTICE: 03-18-2022

		6550																					
Based on facts as set forth in.

" " NASDAQGOOG EIN: 88-1656496 COMPANY ID: 9130353370701806 CUSTROMER SERVICE - 866-570-3844

NASDAQGOOG "ZACHRY TYLER WOOD " 5323 BRADFORD DR DALLAS TX 75235-8314

GOOGL_income-statement_Quarterly_As_Originally_Reported TTM Q4 2021 Q3 2021 Q2 2021 Q1 2021

Gross Profit 1.46698E+11 42337000000 37497000000 35653000000 31211000000 Total Revenue as Reported, Supplemental 2.57637E+11 75325000000 65118000000 61880000000 55314000000 2.57637E+11 75325000000 65118000000 61880000000 55314000000 Other Revenue Cost of Revenue -1.10939E+11 -32988000000 -27621000000 -26227000000 -24103000000 Cost of Goods and Services -1.10939E+11 -32988000000 -27621000000 -26227000000 -24103000000 Operating Income/Expenses -67984000000 -20452000000 -16466000000 -16292000000 -14774000000 Selling, General and Administrative Expenses -36422000000 -11744000000 -8772000000 -8617000000 -7289000000 General and Administrative Expenses -13510000000 -4140000000 -3256000000 -3341000000 -2773000000 Selling and Marketing Expenses -22912000000 -7604000000 -5516000000 -5276000000 -4516000000 Research and Development Expenses -31562000000 -8708000000 -7694000000 -7675000000 -7485000000 Total Operating Profit/Loss 78714000000 21885000000 21031000000 19361000000 16437000000 Non-Operating Income/Expenses, Total 12020000000 2517000000 2033000000 2624000000 4846000000 Total Net Finance Income/Expense 1153000000 261000000 310000000 313000000 269000000 Net Interest Income/Expense 1153000000 261000000 310000000 313000000 269000000

Interest Expense Net of Capitalized Interest -346000000 -117000000 -77000000 -76000000 -76000000 Interest Income 1499000000 378000000 387000000 389000000 345000000 Net Investment Income 12364000000 2364000000 2207000000 2924000000 4869000000 Gain/Loss on Investments and Other Financial Instruments 12270000000 2478000000 2158000000 2883000000 4751000000 Income from Associates, Joint Ventures and Other Participating Interests 334000000 49000000 188000000 92000000 5000000 Gain/Loss on Foreign Exchange -240000000 -163000000 -139000000 -51000000 113000000 Irregular Income/Expenses 0 0 Other Irregular Income/Expenses 0 0 Other Income/Expense, Non-Operating -1497000000 -108000000 -484000000 -613000000 -292000000 Pretax Income 90734000000 24402000000 23064000000 21985000000 21283000000 Provision for Income Tax -14701000000 -3760000000 -4128000000 -3460000000 -3353000000 Net Income from Continuing Operations 76033000000 20642000000 18936000000 18525000000 17930000000 Net Income after Extraordinary Items and Discontinued Operations 76033000000 20642000000 18936000000 18525000000 17930000000 Net Income after Non-Controlling/Minority Interests 76033000000 20642000000 18936000000 18525000000 17930000000 Net Income Available to Common Stockholders 76033000000 20642000000 18936000000 18525000000 17930000000 Diluted Net Income Available to Common Stockholders 76033000000 20642000000 18936000000 18525000000 17930000000 Income Statement Supplemental Section Reported Normalized and Operating Income/Expense Supplemental Section Total Revenue as Reported, Supplemental 2.57637E+11 75325000000 65118000000 61880000000 55314000000 Total Operating Profit/Loss as Reported, Supplemental 78714000000 21885000000 21031000000 19361000000 16437000000 Reported Effective Tax Rate $0.16 $0.18 $0.16 0.158 Reported Normalized Income Reported Normalized Operating Profit Other Adjustments to Net Income Available to Common Stockholders Basic EPS $113.88 31.15 28.44 27.69 26.63 Basic EPS from Continuing Operations 113.88 31.12 28.44 27.69 26.63 Basic EPS from Discontinued Operations Diluted EPS $112.20 $30.69 $27.99 $27.26 $26.29 Diluted EPS from Continuing Operations $112.20 $30.67 $27.99 $27.26 $26.29 Diluted EPS from Discontinued Operations Basic Weighted Average Shares Outstanding $667,650,000.00 $662,664,000.00 $665,758,000.00 $668,958,000.00 $673,220,000.00 Diluted Weighted Average Shares Outstanding $677,674,000.00 $672,493,000.00 $676,519,000.00 $679,612,000.00 $682,071,000.00 Reported Normalized Diluted EPS ALPHABET $113.88 $31.15 $28.44 $27.69 $26.63 ZACHRY T WOOD $112.20 $30.69 $27.99 $27.26 $26.29 5323 BRADFORD DR $667,650,000.00 $662,664,000.00 $665,758,000.00 $668,958,000.00 $673,220,000.00 DALLAS TX 75235-8314 $677,674,000.00 $672,493,000.00 $676,519,000.00 $679,612,000.00 $682,071,000.00 ORIGINAL REPORT Income, Rents, & Royalty INCOME STATEMENT EIN 61-1767919 Name Tax Period Total Social Security Morningstar.com Intraday Fundamental Portfolio View Print Report Fed 941 Corporate $39,355.00 $66,986.66 $28,841.48 Fed 941 West Subsidiary $39,355.00 $17,115.41 $7,369.14 3/6/2022 at 6:37 PM Fed 941 South Subsidiary $39,355.00 $23,906.09 $10,292.90 Fed 941 East Subsidiary $39,355.00 $11,247.64 $4,842.74 Fed 941 Corp - Penalty $39,355.00 $27,198.50 $11,710.47 GOOGL_income-statement_Quarterly_As_Originally_Reported Q4 2021 Q3 2021 Q2 2021 Q1 2021 Cash Flow from Operating Activities, Indirect $24,934,000,000.00 $25,539,000,000.00 $37,497,000,000.00 $31,211,000,000.00 Net Cash Flow from Continuing Operating Activities, Indirect $24,934,000,000.00 $25,539,000,000.00 $21,890,000,000.00 $19,289,000,000.00 Cash Generated from Operating Activities $24,934,000,000.00 $25,539,000,000.00 $21,890,000,000.00 $19,289,000,000.00 Income/Loss before Non-Cash Adjustment $20,642,000,000.00 $18,936,000,000.00 $18,525,000,000.00 $17,930,000,000.00 Total Adjustments for Non-Cash Items $6,517,000,000.00 $3,797,000,000.00 $4,236,000,000.00 $2,592,000,000.00 Depreciation, Amortization and Depletion, Non-Cash Adjustment $3,439,000,000.00 $3,304,000,000.00 $2,945,000,000.00 $2,753,000,000.00 Depreciation and Amortization, Non-Cash Adjustment $3,439,000,000.00 $3,304,000,000.00 $2,945,000,000.00 $2,753,000,000.00 Depreciation, Non-Cash Adjustment $3,215,000,000.00 $3,085,000,000.00 $2,730,000,000.00 $2,525,000,000.00 Amortization, Non-Cash Adjustment $224,000,000.00 $219,000,000.00 $215,000,000.00 $228,000,000.00 Stock-Based Compensation, Non-Cash Adjustment $3,954,000,000.00 $3,874,000,000.00 $3,803,000,000.00 $3,745,000,000.00 Taxes, Non-Cash Adjustment $1,616,000,000.00 -$1,287,000,000.00 $379,000,000.00 $1,100,000,000.00 Investment Income/Loss, Non-Cash Adjustment -$2,478,000,000.00 -$2,158,000,000.00 -$2,883,000,000.00 -$4,751,000,000.00 Gain/Loss on Financial Instruments, Non-Cash Adjustment -$2,478,000,000.00 -$2,158,000,000.00 -$2,883,000,000.00 -$4,751,000,000.00 Other Non-Cash Items -$14,000,000.00 $64,000,000.00 -$8,000,000.00 -$255,000,000.00 Changes in Operating Capital -$2,225,000,000.00 $2,806,000,000.00 -$871,000,000.00 -$1,233,000,000.00 Change in Trade and Other Receivables -$5,819,000,000.00 -$2,409,000,000.00 -$3,661,000,000.00 $2,794,000,000.00 Change in Trade/Accounts Receivable -$5,819,000,000.00 -$2,409,000,000.00 -$3,661,000,000.00 $2,794,000,000.00 Change in Other Current Assets -$399,000,000.00 -$1,255,000,000.00 -$199,000,000.00 $7,000,000.00 Change in Payables and Accrued Expenses $6,994,000,000.00 $3,157,000,000.00 $4,074,000,000.00 -$4,956,000,000.00 Change in Trade and Other Payables $1,157,000,000.00 $238,000,000.00 -$130,000,000.00 -$982,000,000.00 Change in Trade/Accounts Payable $1,157,000,000.00 $238,000,000.00 -$130,000,000.00 -$982,000,000.00 Change in Accrued Expenses $5,837,000,000.00 $2,919,000,000.00 $4,204,000,000.00 -$3,974,000,000.00 Change in Deferred Assets/Liabilities $368,000,000.00 $272,000,000.00 -$3,000,000.00 $137,000,000.00 Change in Other Operating Capital -$3,369,000,000.00 $3,041,000,000.00 -$1,082,000,000.00 $785,000,000.00 Change in Prepayments and Deposits Cash Flow from Investing Activities -$11,016,000,000.00 -$10,050,000,000.00 -$9,074,000,000.00 -$5,383,000,000.00 Cash Flow from Continuing Investing Activities -$11,016,000,000.00 -$10,050,000,000.00 -$9,074,000,000.00 -$5,383,000,000.00 Purchase/Sale and Disposal of Property, Plant and Equipment, Net -$6,383,000,000.00 -$6,819,000,000.00 -$5,496,000,000.00 -$5,942,000,000.00 Purchase of Property, Plant and Equipment -$6,383,000,000.00 -$6,819,000,000.00 -$5,496,000,000.00 -$5,942,000,000.00 Sale and Disposal of Property, Plant and Equipment Purchase/Sale of Business, Net -$385,000,000.00 Purchase/Acquisition of Business -$385,000,000.00 -$259,000,000.00 -$308,000,000.00 -$1,666,000,000.00 Purchase/Sale of Investments, Net -$4,348,000,000.00 -$259,000,000.00 -$308,000,000.00 -$1,666,000,000.00 Purchase of Investments -$40,860,000,000.00 -$3,360,000,000.00 -$3,293,000,000.00 $2,195,000,000.00 Sale of Investments $36,512,000,000.00 -$35,153,000,000.00 -$24,949,000,000.00 -$37,072,000,000.00 Other Investing Cash Flow 100000000 31793000000 21656000000 39267000000 Purchase/Sale of Other Non-Current Assets, Net 388000000 23000000 30000000 Sales of Other Non-Current Assets Cash Flow from Financing Activities -16511000000 -15254000000 Cash Flow from Continuing Financing Activities -16511000000 -15254000000 -15991000000 -13606000000 Issuance of/Payments for Common Stock, Net -13473000000 -12610000000 -15991000000 -13606000000 Payments for Common Stock 13473000000 -12610000000 -12796000000 -11395000000 Proceeds from Issuance of Common Stock -12796000000 -11395000000 Issuance of/Repayments for Debt, Net 115000000 -42000000 Issuance of/Repayments for Long Term Debt, Net 115000000 -42000000 -1042000000 -37000000 Proceeds from Issuance of Long Term Debt 6250000000 6350000000 -1042000000 -37000000 Repayments for Long Term Debt 6365000000 -6392000000 6699000000 900000000 Proceeds from Issuance/Exercising of Stock Options/Warrants 2923000000 -2602000000 -7741000000 -937000000 -2453000000 -2184000000

Other Financing Cash Flow Cash and Cash Equivalents, End of Period Change in Cash 0 300000000 10000000 Effect of Exchange Rate Changes 20945000000 23719000000 23630000000 26622000000 Cash and Cash Equivalents, Beginning of Period 300000000 Cash Flow Supplemental Section 181000000000} 183000000 -143000000 Change in Cash as Reported, Supplemental 2246000000000} 23630000000000} 26622000000000} 26465000000000} Income Tax Paid, Supplemental 2774000000 89000000 -2992000000 Cash and Cash Equivalents, Beginning of Period 13,412,000,000 157,000,000

12 Months Ended

Income Statement USD in "000'"s Repayments for Long Term Debt Costs and expenses: 182527 Cost of revenues Research and development 84732 Sales and marketing 27573 General and administrative 17946 European Commission fines 11052 Total costs and expenses 0 Income from operations 141303 Other income (expense), net 41224 Income before income taxes 6858000000 Provision for income taxes 22677000000 Net income 22677000000 *include interest paid, capital obligation, and underweighting

Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)

"Source Account The account from which transferred funds are being withdrawn.

Start Date For Recurring Transfers, this is the date you want the transfer to start. Enter the Start Date in mm/dd/yyyy format. For One-Time Transfers, this field is called Date.

" For Paperwork Reduction Act Notice, see the seperate Instructions. Total 70842743866

"2012 2013 2014 2015 ZACHRY T. 5323

$2,012 $2,013 $2,014 $2,015 DALLAS

																		Other Benefits and																						
																		Information																						
																		Pto Balance																						
9xy gchr 6 $13 Earnings Statement 065-0001 ALPHABET Period Beginning: 1600 AMPITHEATRE PARKWAY DR Period Ending: MOUNTAIN VIEW, C.A., 94043 Pay Date:

														2965																										
Taxable Marital Status: Exemptions/Allowances Married BRADFORD DR Federal:

TX: NO State Income Tax rate units this period year to date $112 $674,678,000 $75,698,871,600 $141,685,487,732 9/29/2021 9/28/2022 Statutory 1/29/2023 Federal Income Tax $141,685,487,732 Social Security Tax $70,842,743,866 $141,685,487,732

Medicare Tax WOOD

Net Pay $70,842,743,866 CHECKING TX 75235-8314 Net Check $70,842,743,866 Your federal taxable wages this period are $ $0 1 Alphabet Inc., co. 1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043

Deposited to the account Of: ZACHRY T. WOOD 4720416547 650001 71921891 4/18/2022 4720416547 transit ABA 15-51\000

							575A	"" ""		44638	WOOD	B	$9,999,999,999	SS-4			A																							
					CP 575 A																																			
																																								
									Name	Tax Period 	Total	Social Security	Medicare	Withholding																										
									Fed 941 Corporate	$39,355	$66,987	$28,841	$6,745	$31,400																										
									Fed 941 West Subsidiary	$39,355	$17,115	$7,369	$1,723	$8,023																										
""CIK: 01652044)"""",entityType"",""operating"",""sic"",""7370"",""secDescription"":""Services-Computer Programming, Data Processing, Etc."",""insiderTransactionForOwnerExists"":1,""insiderTransactionForIssuerExists"":1,""name"":""Alphabet Inc."",""tickers"":[""GOOGL"",""GOOG""],""exchanges"":[""Nasdaq"",""Nasdaq""],""ein"":""611767919"",""description"":"""",""website"":"""",""investorWebsite"":"""",""category"":""Large accelerated filer"",""fiscalYearEnd"":""1231"",""stateOfIncorporation"":""DE"",""stateOfIncorporationDescription"":""DE"",""addresses"":{""mailing"":{""street1"":""1600 AMPHITHEATRE PARKWAY"",""street2"":null,""city"":""MOUNTAIN VIEW"",""stateOrCountry"":""CA"",""zipCode"":""94043"",""stateOrCountryDescription"":""CA""},""business"":{""street1"":""1600 AMPHITHEATRE PARKWAY"",""street2"":null,""city"":""MOUNTAIN VIEW"",""stateOrCountry"":""CA"",""zipCode"":""94043"",""stateOrCountryDescription"":""CA""}},""phone"":""650-253-0000"",""flags"":"""",""formerNames"":[],""filings"":{""recent"":{""accessionNumber"":[""0001209191-22-040372"",""0001209191-22-040364"",""0001209191-22-039873"",""0001209191-22-039719"",""0001209191-22-039717"",""0001209191-22-039714"",""0001209191-22-039705"",""0001209191-22-039698"",""0001209191-22-039695"",""0001209191-22-036463"",""0001209191-22-036461"",""0001193125-22-167375"",""0001209191-22-033699"",""0001209191-22-032710"",""0001209191-22-032706"",""0001652044-22-000033"",""0001214659-22-007448"",""0001209191-22-031962"",""0001214659-22-007369"",""0001214659-22-007183"",""0001214659-22-007101"",""0001209191-22-029127"",""0001209191-22-028734"",""0001209191-22-028641"",""0001209191-22-028636"",""0001214659-22-006602"",""0001209191-22-028184"",""0001209191-22-028179"",""0001214659-22-006539"",""0001214659-22-006537"",""0001214659-22-006462"",""0001214659-22-006435"",""0001214659-22-006434"",""0001209191-22-027590"",""0001209191-22-027584"",""0001214659-22-006327"",""0001209191-22-027197"",""0001209191-22-027181"",""0001214659-22-006048"",""0001214659-22-006040"",""0001214659-22-005969"",""0001214659-22-005905"",""0001209191-22-025745"",""0001652044-22-000029"",""0001652044-22-000025"",""0001308179-22-000263"",""0001308179-22-000262"",""0001209191-22-025250"",""0001209191-22-025248"",""0001209191-22-025246"",""0001209191-22-025244"",""0001209191-22-025078"",""0001209191-22-025074"",""0001209191-22-025066"",""0001209191-22-024673"",""0001209191-22-024670"",""0001209191-22-024667"",""0001209191-22-024662"",""0001209191-22-024552"",""0001209191-22-024550"",""0001209191-22-024548"",""0001209191-22-024546"",""0001209191-22-024472"",""0001209191-22-024470"",""0001209191-22-024443"",""0001209191-22-024439"",""0001209191-22-024368"",""0001209191-22-024366"",""0001209191-22-024238"",""0001209191-22-024236"",""0001209191-22-024234"",""0001209191-22-024230"",""0001209191-22-024210"",""0001209191-22-024207"",""0001209191-22-023889"",""0001209191-22-023888"",""0001308179-22-000223"",""0001209191-22-023445"",""0001209191-22-022478"",""0001209191-22-022018"",""0001209191-22-021562"",""0001209191-22-021560"",""0001209191-22-021557"",""0001209191-22-021554"",""0001209191-22-021552"",""0001209191-22-021550"",""0001209191-22-020831"",""0001209191-22-020595"",""0001209191-22-020581"",""0001209191-22-020391"",""0001209191-22-020388"",""0001209191-22-020386"",""0001209191-22-020120"",""0001209191-22-020118"",""0001209191-22-020116"",""0001209191-22-019913"",""0001209191-22-019906"",""0001209191-22-019902"",""0001209191-22-019858"",""0001209191-22-018323"",""0001209191-22-018321"",""0001209191-22-018285"",""0001209191-22-018276"",""0000834237-22-009175"",""0001209191-22-018094"",""0001209191-22-018092"",""0001209191-22-018090"",""0001209191-22-018046"",""0001209191-22-018032"",""0001209191-22-018029"",""0001209191-22-017754"",""0001209191-22-017752"",""0001209191-22-017749"",""0001209191-22-017745"",""0001209191-22-015196"",""0001209191-22-013789"",""0001209191-22-011832"",""0001209191-22-011046"",""0001209191-22-009625"",""0001193125-22-042001"",""0001209191-22-009048"",""0001209191-22-009016"",""0001209191-22-009005"",""0001209191-22-008997"",""0001209191-22-008989"",""0001209191-22-008934"",""0001193125-22-037444"",""0001193125-22-037016"",""0001209191-22-008768"",""0001209191-22-008753"",""0001209191-22-008749"",""0001209191-22-008532"",""0001209191-22-008528"",""0001209191-22-008524"",""0000929638-22-000380"",""0000929638-22-000378"",""0000929638-22-000376"",""0000929638-22-000373"",""0000929638-22-000371"",""0000929638-22-000368"",""0000929638-22-000366"",""0001209191-22-008197"",""0001209191-22-008182"",""0001209191-22-008172"",""0001209191-22-008168"",""0001104659-22-016220"",""0001104659-22-016219"",""0001209191-22-007919"",""0001209191-22-007880"",""0001209191-22-007878"",""0001209191-22-007875"",""0001209191-22-007873"",""0000834237-22-008378"",""0001209191-22-007699"",""0001209191-22-007648"",""0001209191-22-007645"",""0001209191-22-007643"",""0001209191-22-007640"",""0001209191-22-007339"",""0001209191-22-007337"",""0001209191-22-007335"",""0001209191-22-007333"",""0001209191-22-007331"",""0000834237-22-006221"",""0001209191-22-006600"",""0001193125-22-025218"",""0001652044-22-000019"",""0001209191-22-005997"",""0001652044-22-000015"",""0001209191-22-005167"",""0001209191-22-004376"",""0001209191-22-004372"",""0001209191-22-004359"",""0001209191-22-004354"",""0001209191-22-004279"",""0001209191-22-004226"",""0001209191-22-004201"",""0001209191-22-004182"",""0001209191-22-003926"",""0001209191-22-003913"",""0001209191-22-003329"",""0001209191-22-003244"",""0001209191-22-003242"",""0001209191-22-003153"",""0001209191-22-003151"",""0001209191-22-003149"",""0001209191-22-003010"",""0001209191-22-003008"",""0001209191-22-003006"",""0001209191-22-003004"",""0001209191-22-002814"",""0001209191-22-002420"",""0001209191-22-002414"",""0001209191-22-002409"",""0001209191-22-002395"",""0001209191-22-002111"",""0001209191-22-001992"",""0001209191-22-001962"",""0001652044-22-000009"",""0001209191-22-000358"",""0001209191-22-000322"",""0001209191-21-071534"",""0001209191-21-071528"",""0001209191-21-071526"",""0001209191-21-071515"",""0001209191-21-071493"",""0001209191-21-071471"",""0000899243-21-048781"",""0001209191-21-069838"",""0001209191-21-069156"",""0001209191-21-069143"",""0001209191-21-068893"",""0001209191-21-068870"",""0001209191-21-068731"",""0001209191-21-068694"",""0001209191-21-068587"",""0001209191-21-068568"",""0001209191-21-068558"",""0001209191-21-068484"",""0001209191-21-068482"",""0001209191-21-068480"",""0001209191-21-068458"",""0001209191-21-068450"",""0001209191-21-068366"",""0001209191-21-068362"",""0001209191-21-068358"",""0001209191-21-067361"",""0001209191-21-067351"",""0001209191-21-067345"",""0001209191-21-067065"",""0001104659-21-143238"",""0001104659-21-143237"",""0001209191-21-066306"",""0001104659-21-141456"",""0001209191-21-065368"",""0001209191-21-065334"",""0001209191-21-065326"",""0001209191-21-064844"",""0001209191-21-064800"",""0001209191-21-064594"",""0001209191-21-064586"",""0001209191-21-064576"",""0001209191-21-064082"",""0001209191-21-064080"",""0001209191-21-064076"",""0001209191-21-064073"",""0001209191-21-064009"",""0001209191-21-063774"",""0001209191-21-063755"",""0001209191-21-063711"",""0001209191-21-063509"",""0001209191-21-063501"",""0001209191-21-063479"",""0001209191-21-062790"",""0001209191-21-062568"",""0001209191-21-062277"",""0001652044-21-000057"",""0001209191-21-061718"",""0001652044-21-000054"",""0001209191-21-061241"",""0001209191-21-061225"",""0001209191-21-061223"",""0001209191-21-061214"",""0001209191-21-061211"",""0001209191-21-060805"",""0001209191-21-060796"",""0001209191-21-060521"",""0001209191-21-060519"",""0001209191-21-060485"",""0001209191-21-060478"",""0001209191-21-060288"",""0001209191-21-060267"",""0001209191-21-060143"",""0001209191-21-059867"",""0001209191-21-059856"",""0001209191-21-058613"",""0001209191-21-058589"",""0001209191-21-057992"",""0001209191-21-057986"",""0001209191-21-057973"",""0001209191-21-057971"",""0001209191-21-057967"",""0001209191-21-057962"",""0001209191-21-057750"",""0001209191-21-057746"",""0001209191-21-057620"",""0001209191-21-057610"",""0001209191-21-057588"",""0001209191-21-057584"",""0001209191-21-057216"",""0001209191-21-057214"",""0001209191-21-057121"",""0001209191-21-056248"",""0001209191-21-055760"",""0001209191-21-055742"",""0001209191-21-055415"",""0001209191-21-055413"",""0001209191-21-055235"",""0001209191-21-055228"",""0001209191-21-055190"",""0001209191-21-054608"",""0001209191-21-054602"",""0001209191-21-054600"",""0001209191-21-053898"",""0001209191-21-053583"",""0001209191-21-053064"",""0001209191-21-053062"",""0001209191-21-052934"",""0001209191-21-052913"",""0001209191-21-052638"",""0001209191-21-052621"",""0001209191-21-052493"",""0001209191-21-051005"",""0001209191-21-051002"",""0001209191-21-050800"",""0001209191-21-050792"",""0001209191-21-050672"",""0001209191-21-050540"",""0001209191-21-050532"",""0001209191-21-049718"",""0001209191-21-049412"",""0001628280-21-015226"",""0001209191-21-049108"",""0001209191-21-049095"",""0001209191-21-049068"",""0001209191-21-048785"",""0001209191-21-048781"",""0001209191-21-048778"",""0001209191-21-048555"",""0001209191-21-048548"",""0001209191-21-048534"",""0001209191-21-048528"",""0001209191-21-048409"",""0001652044-21-000047"",""0001628280-21-014596"",""0001652044-21-000041"",""0001209191-21-047626"",""0001209191-21-046367"",""0001209191-21-046317"",""0001209191-21-046262"",""0001209191-21-046260"",""0001209191-21-046115"",""0001209191-21-046113"",""0001209191-21-046111"",""0001209191-21-046106"",""0001209191-21-046104"",""0001209191-21-046102"",""0001209191-21-046100"",""0001209191-21-046098"",""0001209191-21-046037"",""0001209191-21-046036"",""0001193125-21-210942"",""0001209191-21-045983"",""0001209191-21-045970"",""0001209191-21-045484"",""0001209191-21-044457"",""0001209191-21-044441"",""0001209191-21-044277"",""0001209191-21-044246"",""0001209191-21-043596"",""0001209191-21-043581"",""0001209191-21-043579"",""0001209191-21-043577"",""0001209191-21-043562"",""0001209191-21-043544"",""0001209191-21-041282"",""0001209191-21-039878"",""0001209191-21-039873"",""0001209191-21-039697"",""0001209191-21-039695"",""0001209191-21-039279"",""0001209191-21-039274"",""0001209191-21-039251"",""0001209191-21-039248"",""0001209191-21-038789"",""0001209191-21-038465"",""0001209191-21-038461"",""0001193125-21-182989"",""0001209191-21-038081"",""0001209191-21-037988"",""0001652044-21-000034"",""0001652044-21-000032"",""0001209191-21-037391"",""0001209191-21-037375"",""0001209191-21-036953"",""0001209191-21-036921"",""0001652044-21-000023"",""0001209191-21-036124"",""0001209191-21-034622"",""0001209191-21-033355"",""0001209191-21-033112"",""0001209191-21-032542"",""0001209191-21-032524"",""0001209191-21-032490"",""0001209191-21-032416"",""0001209191-21-032284"",""0001209191-21-032243"",""0001209191-21-032236"",""0001209191-21-032081"",""0001209191-21-031910"",""0001209191-21-031828"",""0001214659-21-005173"",""0001209191-21-031396"",""0001209191-21-031267"",""0001209191-21-031056"",""0001209191-21-030980"",""0001209191-21-030665"",""0001209191-21-029903"",""0001214659-21-004826"",""0001209191-21-029504"",""0001209191-21-029474"",""0001209191-21-028784"",""0001652044-21-000020"",""0001652044-21-000018"",""0001214659-21-004502"",""0001308179-21-000257"",""0001308179-21-000256"",""0001209191-21-027937"",""0001209191-21-026321"",""0001209191-21-026317"",""0001209191-21-026314"",""0001209191-21-026311"",""0001193125-21-111624"",""0001209191-21-026146"",""0001209191-21-026078"",""0001209191-21-025289"",""0001209191-21-025253"",""0001209191-21-024292"",""0001209191-21-023610"",""0001209191-21-023500"",""0001209191-21-023493"",""0001209191-21-023442"",""0001209191-21-023418"",""0001209191-21-023370"",""0001209191-21-023358"",""0001209191-21-021908"",""0001209191-21-019321"",""0001193125-21-069770"",""0001209191-21-017596"",""0000899243-21-009562"",""0001209191-21-017049"",""0001209191-21-017001"",""0001193125-21-065792"",""0001209191-21-015425"",""0001209191-21-015358"",""0001209191-21-015346"",""0001209191-21-010972"",""0001193125-21-044032"",""0001209191-21-010466"",""0001209191-21-010431"",""0001209191-21-010414"",""0001209191-21-010397"",""0001209191-21-009504"",""0001209191-21-009492"",""0001209191-21-009394"",""0001193125-21-036395"",""0001104659-21-017394"",""0001104659-21-017195"",""0000834237-21-007449"",""0001209191-21-007300"",""0001209191-21-007287"",""0001652044-21-000010"",""0001652044-21-000006"",""0001209191-21-006666"",""0000834237-21-002844"",""0001209191-21-005590"",""0001209191-21-001831"",""0001209191-21-001829"",""0001209191-21-001635"",""0001209191-20-065628"",""0001209191-20-065534"",""0001209191-20-065497"",""0001209191-20-065492"",""0001209191-20-065488"",""0001209191-20-065473"",""0001209191-20-065467"",""0001209191-20-065285"",""0001209191-20-065279"",""0001209191-20-065275"",""0001193125-20-323272"",""0001209191-20-063629"",""0001209191-20-062375"",""0001209191-20-060934"",""0001209191-20-060810"",""0001209191-20-058231"",""0001209191-20-057237"",""0001209191-20-056441"",""0001652044-20-000050"",""0001652044-20-000046"",""0001209191-20-056135"",""0001193125-20-278427"",""0001652044-20-000038"",""0001193125-20-275550"",""0001193125-20-272940"",""0001209191-20-053881"",""0001209191-20-052778"",""0001209191-20-052364"",""0001209191-20-052362"",""0001209191-20-052355"",""0001193125-20-254587"",""0001209191-20-049897"",""0001209191-20-049057"",""0001209191-20-048434"",""0001209191-20-045255"",""0001193125-20-210772"",""0001209191-20-044777"",""0001193125-20-209443"",""0001209191-20-044641"",""0001193125-20-208486"",""0001193125-20-208301"",""0001193125-20-207432"",""0001193125-20-204854"",""0001652044-20-000032"",""0001652044-20-000031"",""0001209191-20-044008"",""0001209191-20-041622"",""0001209191-20-040519"",""0001209191-20-040195"",""0001209191-20-040186"",""0001209191-20-040163"",""0001209191-20-040155"",""0001209191-20-040142"",""0001209191-20-040133"",""0001209191-20-040110"",""0001209191-20-039343"",""0001209191-20-039340"",""0001209191-20-039337"",""0001209191-20-034887"",""0001652044-20-000027"",""0001209191-20-033139"",""0001214659-20-005182"",""0001652044-20-000023"",""0001209191-20-032535"",""0001209191-20-031643"",""0001214659-20-004296"",""0001209191-20-027555"",""0001193125-20-133879"",""0001209191-20-027352"",""0001209191-20-026711"",""0001209191-20-026228"",""0001652044-20-000021"",""0001652044-20-000018"",""0001308179-20-000204"",""0001308179-20-000203"",""0001209191-20-023926"",""0001209191-20-023687"",""0001193125-20-099599"",""0001209191-20-023000"",""0001209191-20-022467"",""0001209191-20-021579"",""0001209191-20-021467"",""0001209191-20-021403"",""0001209191-20-016807"",""0001209191-20-015710"",""0001209191-20-014814"",""0001209191-20-013280"",""0000899243-20-005650"",""0000899243-20-005207"",""0000000000-20-001466"",""0001193125-20-035882"",""0000899243-20-004527"",""0001193125-20-033418"",""0001104659-20-018660"",""0001104659-20-018487"",""0001209191-20-008260"",""0001209191-20-008257"",""0001209191-20-008229"",""0001209191-20-008218"",""0001209191-20-008216"",""0000834237-20-008657"",""0001209191-20-007500"",""0000315066-20-000789"",""0000899243-20-003534"",""0000834237-20-004852"",""0001209191-20-006720"",""0001209191-20-006683"",""0001193125-20-024273"",""0001652044-20-000008"",""0001652044-20-000004"",""0001209191-20-005463"",""0000899243-20-001989"",""0000899243-20-001405"",""0001209191-20-002981"",""0001193125-20-005271"",""0001209191-20-002950"",""0000899243-20-000840"",""0001209191-20-002282"",""0001209191-20-002160"",""0000899243-20-000406"",""0001209191-20-000455"",""0001209191-20-000432"",""0001209191-20-000218"",""0000899243-19-030183"",""0000899243-19-030172"",""0001209191-19-062133"",""0001209191-19-062130"",""0001209191-19-062127"",""0001209191-19-062120"",""0001652044-19-000045"",""0000899243-19-029818"",""0001209191-19-061443"",""0001652044-19-000043"",""0001209191-19-060249"",""0000899243-19-028989"",""0001652044-19-000040"",""0001193125-19-305505"",""0001209191-19-058787"",""0001209191-19-058618"",""0001209191-19-058615"",""0001209191-19-058201"",""0001652044-19-000038"",""0001209191-19-055758"",""0001209191-19-055053"",""0001209191-19-055051"",""0001209191-19-054988"",""0001209191-19-054959"",""0001652044-19-000032"",""0001209191-19-054289"",""0001652044-19-000035"",""0001652044-19-000030"",""0000000000-19-014732"",""0001209191-19-051971"",""0001209191-19-051335"",""0001209191-19-051330"",""0001209191-19-051081"",""0001209191-19-051055"",""0001209191-19-050973"",""0001209191-19-050965"",""0001209191-19-050959"",""0001652044-19-000025"",""0001209191-19-048652"",""0001209191-19-048636"",""0001209191-19-048579"",""0001209191-19-048052"",""0001209191-19-047574"",""0001209191-19-046921"",""0001209191-19-044460"",""0001209191-19-044307"",""0001209191-19-044252"",""0001209191-19-043800"",""0001209191-19-043426"",""0001209191-19-043420"",""0001193125-19-202759"",""0001652044-19-000023"",""0001652044-19-000021"",""0001209191-19-041353"",""0001209191-19-041345"",""0001209191-19-041341"",""0001209191-19-041339"",""0001209191-19-041337"",""0001209191-19-041324"",""0001209191-19-041321"",""0001209191-19-040719"",""0000899243-19-018779"",""0001209191-19-039612"",""0001209191-19-039384"",""0001209191-19-039360"",""0001209191-19-039355"",""0001209191-19-039300"",""0001193125-19-178962"",""0001085146-19-001758"",""0001214659-19-004265"",""0001193125-19-175837"",""0000899243-19-017277"",""0001377739-19-000027"",""0000899243-19-016435"",""0001209191-19-036040"",""0001377739-19-000023"",""0001209191-19-034949"",""0001387131-19-004144"",""0001377739-19-000010"",""0001209191-19-033478"",""0001209191-19-033454"",""0001652044-19-000018"",""0001414734-19-000007"",""0001377739-19-000008"",""0001377739-19-000006"",""0001214659-19-003784"",""0001214659-19-003237"",""0001209191-19-027424"",""0001209191-19-027412"",""0001209191-19-027082"",""0001209191-19-026774"",""0001209191-19-026630"",""0001308179-19-000206"",""0001308179-19-000205"",""0001193125-19-129411"",""0001193125-19-129415"",""0001652044-19-000015"",""0001652044-19-000011"",""0001209191-19-026307"",""0001209191-19-026303"",""0001193125-19-119954"",""0001209191-19-023568"",""0001209191-19-023351"",""0001193125-19-096735"",""0001193125-19-095914"",""0001209191-19-022835"",""0001209191-19-021503"",""0001209191-19-021470"",""0001209191-19-021380"",""0001209191-19-021379"",""0001193125-19-080167"",""0001209191-19-019226"",""0001193125-19-062610"",""0001209191-19-015376"",""0001209191-19-015367"",""0001209191-19-014276"",""0001209191-19-014248"",""0001209191-19-014175"",""0001193125-19-041124"",""0001193125-19-039055"",""0001193125-19-038289"",""0001209191-19-009937"",""0001209191-19-009571"",""0001209191-19-009549"",""0001209191-19-009548"",""0000315066-19-000864"",""0001209191-19-009535"",""0001209191-19-009296"",""0000932471-19-005054"",""0000932471-19-005050"",""0000215457-19-007344"",""0001193125-19-028757"",""0001193125-19-027396"",""0001652044-19-000004"",""0001209191-19-006881"",""0001209191-19-006869"",""0001652044-19-000002"",""0000215457-19-003125"",""0001209191-19-005969"",""0001209191-19-005692"",""0001209191-19-005690"",""0001209191-19-004595"",""0001209191-19-004001"",""0001209191-19-003561"",""0001209191-19-001203"",""0001209191-19-000516"",""0001209191-19-000114"",""0000899243-18-031969"",""0001209191-18-064354"",""0001209191-18-064345"",""0001209191-18-064333"",""0001209191-18-064315"",""0001209191-18-064305"",""0001209191-18-064217"",""0001209191-18-063541"",""0001209191-18-062185"",""0001209191-18-061340"",""0001209191-18-060759"",""0001209191-18-060691"",""0001209191-18-060661"",""0001209191-18-060081"",""0001209191-18-060078"",""0001209191-18-060060"",""0001209191-18-060050"",""0001209191-18-059767"",""0001209191-18-059133"",""0001209191-18-058400"",""0001209191-18-057906"",""0001209191-18-056875"",""0001209191-18-056871"",""0001209191-18-056391"",""0001209191-18-056389"",""0001209191-18-056334"",""0001652044-18-000035"",""0001209191-18-056192"",""0001652044-18-000033"",""0001209191-18-055007"",""0001209191-18-054321"",""0001209191-18-053633"",""0001209191-18-052676"",""0001209191-18-052510"",""0001209191-18-052505"",""0001209191-18-052502"",""0001209191-18-052475"",""0001209191-18-052437"",""0001209191-18-051718"",""0001209191-18-050929"",""0001209191-18-049642"",""0001209191-18-049629"",""0001209191-18-049175"",""0001209191-18-048875"",""0001209191-18-048872"",""0001209191-18-048856"",""0001209191-18-048800"",""0001209191-18-046906"",""0001209191-18-046893"",""0001209191-18-046461"",""0001209191-18-045191"",""0001209191-18-044798"",""0001209191-18-044795"",""0001209191-18-044239"",""0001209191-18-044235"",""0001209191-18-044227"",""0001209191-18-044222"",""0001193125-18-224022"",""0001652044-18-000027"",""0001652044-18-000025"",""0001209191-18-043318"",""0001193125-18-220240"",""0001209191-18-042604"",""0001209191-18-042584"",""0001209191-18-042438"",""0001209191-18-042435"",""0001209191-18-042433"",""0001209191-18-042429"",""0001209191-18-042426"",""0001209191-18-041446"",""0001209191-18-040674"",""0001209191-18-040254"",""0000899243-18-018791"",""0001209191-18-039703"",""0000899243-18-018327"",""0001209191-18-039632"",""0001209191-18-039622"",""0001209191-18-039584"",""0001209191-18-039582"",""0001209191-18-039032"",""0000899243-18-017513"",""0001209191-18-037594"",""0001193125-18-188050"",""0001209191-18-036255"",""0001209191-18-035367"",""0001209191-18-034579"",""0001652044-18-000019"",""0001209191-18-034084"",""0001209191-18-034069"",""0001209191-18-034053"",""0001209191-18-033981"",""0001209191-18-033967"",""0001214659-18-004054"",""0001214659-18-003975"",""0001209191-18-030729"",""0001209191-18-030721"",""0001209191-18-030345"",""0001214659-18-003664"",""0001209191-18-027440"",""0001209191-18-027422"",""0001209191-18-027388"",""0001209191-18-026762"",""0001209191-18-026759"",""0001209191-18-026730"",""0001209191-18-026714"",""0001209191-18-026712"",""0001308179-18-000223"",""0001308179-18-000222"",""0001652044-18-000016"",""0001652044-18-000011"",""0001209191-18-025461"",""0001209191-18-024794"",""0001209191-18-023986"",""0001209191-18-022402"",""0001209191-18-022318"",""0001209191-18-021990"",""0001209191-18-021986"",""0001209191-18-021965"",""0001209191-18-021894"",""0001209191-18-021883"",""0001209191-18-021881"",""0001209191-18-021156"",""0000899243-18-007990"",""0000899243-18-007988"",""0000899243-18-007414"",""0000899243-18-007405"",""0001209191-18-018780"",""0001209191-18-018647"",""0001209191-18-018640"",""0001209191-18-018636"",""0001209191-18-017858"",""0001209191-18-016701"",""0001209191-18-015242"",""0001209191-18-015216"",""0001209191-18-014229"",""0001209191-18-014201"",""0001209191-18-014074"",""0001209191-18-012222"",""0001209191-18-010562"",""0001193125-18-042754"",""0000315066-18-001018"",""0001209191-18-009274"",""0001295231-18-000002"",""0001295032-18-000002"",""0000932471-18-004771"",""0000932471-18-004768"",""0001209191-18-009023"",""0001209191-18-008994"",""0001209191-18-008949"",""0001209191-18-008631"",""0001209191-18-008623"",""0001209191-18-008601"",""0001209191-18-008576"",""0001652044-18-000007"",""0001209191-18-007728"",""0001209191-18-006557"",""0001209191-18-006551"",""0001652044-18-000004"",""0000215457-18-004641"",""0000899243-18-002282"",""0000899243-18-002277"",""0000215457-18-003806"",""0001209191-18-005748"",""0001209191-18-005746"",""0001209191-18-005744"",""0000000000-18-002893"",""0000899243-18-001939"",""0000899243-18-001920"",""0001209191-18-004112"",""0001209191-18-001722"",""0001209191-18-001720"",""0001209191-18-000077"",""0001209191-18-000052"",""0000899243-18-000007"",""0001209191-17-067543"",""0001209191-17-067518"",""0001209191-17-067515"",""0001209191-17-067493"",""0001209191-17-067299"",""0001209191-17-066885"",""0001193125-17-376656"",""0001652044-17-000048"",""0001209191-17-064189"",""0001209191-17-063435"",""0001209191-17-063297"",""0001209191-17-063294"",""0001209191-17-062808"",""0001209191-17-062764"",""0001209191-17-062758"",""0001209191-17-062749"",""0001209191-17-061912"",""0000899243-17-027017"",""0001652044-17-000045"",""0001209191-17-061367"",""0001209191-17-061275"",""0000899243-17-026407"",""0001209191-17-060111"",""0000000000-17-039681"",""0000899243-17-025349"",""0001209191-17-058977"",""0001209191-17-058889"",""0001209191-17-058788"",""0000899243-17-025129"",""0001209191-17-058199"",""0001652044-17-000042"",""00012""})BITORE_34173 Sign up keon/algorithmsPublic Minimal examples of data structures and algorithms in Python

License MIT license 21.3k stars 4.3k forks Star Notifications Code Issues59 Pull requests140 Actions Projects Wiki Security Insights keon/algorithms maste Use uni/utt8 For running all tests write down:

$GET Dna.python.javascript -yummy/flakes'8-cgefbook unittest discover tests For running some specific tests you can do this as following (Ex: sort):

$ python3 -m unittest tests.test_sort Use pytest For running all tests write down:

$ python3 -m pytest tests Install If you want to use the API algorithms in your code, it is as simple as:

$ pip3 install algorithms You can test by creating a python file: (Ex: use merge_sort in sort)

from algorithms.sort import merge_sort

if name == ""main"": my_list = [1, 8, 3, 5, 6] my_list = merge_sort(my_list) print(my_list) Uninstall If you want to uninstall algorithms, it is as simple as:

$ pip3 uninstall -y algorithms List of Implementations arrays delete_nth flatten garage josephus_problem limit longest_non_repeat max_ones_index merge_intervals missing_ranges plus_one rotate summarize_ranges three_sum trimmean top_1 two_sum move_zeros n_sum greedy max_contiguous_subsequence_sum automata DFA backtrack general_solution.md add_operators anagram array_sum_combinations combination_sum factor_combinations generate_abbreviations generate_parenthesis letter_combination palindrome_partitioning pattern_match permute permute_unique subsets subsets_unique bfs maze_search shortest_distance_from_all_buildings word_ladder bit add_bitwise_operator bit_operation bytes_int_conversion count_flips_to_convert count_ones find_difference find_missing_number flip_bit_longest_sequence power_of_two reverse_bits single_number single_number2 single_number3 subsets swap_pair has_alternative_bit insert_bit remove_bit binary_gap compression huffman_coding rle_compression elias dfs all_factors count_islands pacific_atlantic sudoku_solver walls_and_gates distribution histogram dp buy_sell_stock climbing_stairs coin_change combination_sum egg_drop house_robber int_divide job_scheduling knapsack longest_increasing matrix_chain_order max_product_subarray max_subarray min_cost_path num_decodings regex_matching rod_cut word_break fibonacci hosoya triangle K-Factor_strings planting_trees graph check_bipartite strongly_connected clone_graph cycle_detection find_all_cliques find_path graph dijkstra markov_chain minimum_spanning_tree satisfiability minimum_spanning_tree_prims tarjan traversal maximum_flow maximum_flow_bfs maximum_flow_dfs all_pairs_shortest_path bellman_ford Count Connected Components heap merge_sorted_k_lists skyline sliding_window_max binary_heap k_closest_points linkedlist add_two_numbers copy_random_pointer delete_node first_cyclic_node is_cyclic is_palindrome kth_to_last linkedlist remove_duplicates reverse rotate_list swap_in_pairs is_sorted remove_range map hashtable separate_chaining_hashtable longest_common_subsequence longest_palindromic_subsequence randomized_set valid_sudoku word_pattern is_isomorphic is_anagram maths base_conversion chinese_remainder_theorem combination cosine_similarity decimal_to_binary_ip diffie_hellman_key_exchange euler_totient extended_gcd factorial find_order find_primitive_root gcd/lcm generate_strobogrammtic hailstone is_strobogrammatic krishnamurthy_number magic_number modular_exponential modular_inverse next_bigger next_perfect_square nth_digit num_perfect_squares polynomial power prime_check primes_sieve_of_eratosthenes pythagoras rabin_miller recursive_binomial_coefficient rsa sqrt_precision_factor summing_digits symmetry_group_cycle_index matrix sudoku_validator bomb_enemy copy_transform count_paths matrix_exponentiation matrix_inversion matrix_multiplication rotate_image search_in_sorted_matrix sparse_dot_vector sparse_mul spiral_traversal crout_matrix_decomposition cholesky_matrix_decomposition sum_sub_squares sort_matrix_diagonally queues max_sliding_window moving_average queue reconstruct_queue zigzagiterator search binary_search first_occurrence last_occurrence linear_search search_insert two_sum search_range find_min_rotate search_rotate jump_search next_greatest_letter interpolation_search set randomized_set set_covering find_keyboard_row sort bitonic_sort bogo_sort bubble_sort bucket_sort cocktail_shaker_sort comb_sort counting_sort cycle_sort exchange_sort gnome_sort heap_sort insertion_sort meeting_rooms merge_sort pancake_sort pigeonhole_sort quick_sort radix_sort selection_sort shell_sort sort_colors stooge_sort top_sort wiggle_sort stack longest_abs_path simplify_path stack valid_parenthesis stutter switch_pairs is_consecutive remove_min is_sorted streaming 1-sparse-recovery misra-gries strings fizzbuzz delete_reoccurring strip_url_params validate_coordinates domain_extractor merge_string_checker add_binary breaking_bad decode_string encode_decode group_anagrams int_to_roman is_palindrome license_number make_sentence multiply_strings one_edit_distance rabin_karp reverse_string reverse_vowel reverse_words roman_to_int word_squares unique_morse judge_circle strong_password caesar_cipher check_pangram contain_string count_binary_substring repeat_string min_distance longest_common_prefix rotate first_unique_char repeat_substring atbash_cipher longest_palindromic_substring knuth_morris_pratt panagram tree bst array_to_bst bst_closest_value BSTIterator delete_node is_bst kth_smallest lowest_common_ancestor predecessor serialize_deserialize successor unique_bst depth_sum count_left_node num_empty height fenwick_tree red_black_tree red_black_tree segment_tree segment_tree iterative_segment_tree traversal inorder level_order postorder preorder zigzag trie add_and_search trie b_tree binary_tree_paths bin_tree_to_list construct_tree_preorder_postorder deepest_left invert_tree is_balanced is_subtree is_symmetric longest_consecutive lowest_common_ancestor max_height max_path_sum min_height path_sum path_sum2 pretty_print same_tree tree unix path join_with_slash full_path split simplify_path unionfind count_islands Contributors Thanks to all the contributors who helped in building the repo.

Releases 1 tags Packages No packages published Used by 67 @monadplus @girafe-ai @1eedaegon @SongYuQiu @YaroslavYaryk @Gebreyesus @ssdnam77 @smitsky

59 Contributors 187 @goswami-rahul @keon @christianbender @ankit167 @SaadBenn @yunshuipiao @quang2705 @ofek @geonlee0325 @orenovadia @nickolaswiebe
176 contributors Languages Python100.0% Footer © 2022 GitHub, Inc. Footer navigation Terms Privacy Security Status Docs Contact GitHub Pricing API Training Blog ABOUT(""=BITORE_34173.1337':'' 'txnid:443157674155096374)"""
"APY A percentage reflecting the total amount of interest paid on an interest-bearing account, based on the interest rate and the frequency of compounding for a 365-day period.

Automated Clearing House (ACH) The ACH Network is a nationwide electronic funds transfer system that provides inter-bank clearing of electronic transfers and payments for participating financial institutions.

Available Balance The dollar amount available for immediate withdrawal from a checking, savings or money market account.

Available Credit The unused portion of your line-of-credit obligation that may be used for additional borrowing.

B-C

Balance – Investment accounts The investment account balance is as of the previous day's close. It is updated throughout the day for activity in your account. For a detailed breakdown of your investment balance, please click on the account title, contact your Financial Consultant, or call 1-800-762-6111 to speak with our PNC Investments Contact Center.

Balance - Certificate of Deposit Customer Number The total dollar value of all displayed accounts within a Customer Number.

Balance - Individual Retirement Account Retirement ID The total value of all displayed accounts within a Retirement ID.

Card Status The status of Open or Close on a Check/ATM or Campus ID Card.

Close Date The date an account, card or service was closed.

Credit Limit The total amount your line-of-credit includes and the extent to which you can borrow under the terms of you current loan agreement.

Current Balance - Certificate of Deposit & Individual Retirement Account The dollar value of the account.

Current Balance - Loan The dollar amount of the balance on the account. This is not a payoff amount.

Current Interest Rate Your cost of borrowing money expressed as a percentage-per-year basis.

Current Variable Interest Rate Your cost of borrowing money expressed as a percentage-per-year basis that adjusts periodically depending on agreed to terms and conditions.

Current Withdrawals Includes check summaries, debit and check card purchases, ACH debits and other withdrawals from your account.

D-E

Destination Account The account in which transferred funds are being deposited.

E-bill An E-bill (electronic bill) is a bill that you can receive and pay online through the Online Bill Pay service.

Effective Date The date the item (Current Deposit or Current Withdrawal) was authorized or submitted to PNC Bank.

Encryption Technology which secures communications across the Internet. PNC uses the highest available levels of encryption to protect your personal and financial information.

End Date For Recurring Transfers, this is the date you want the transfer to end. Enter the End Date in mm/dd/yyyy format. Enter 12/31/9999 if you do not want to specify an end date for the transfer. An End Date is not needed for One-Time Transfers.

Estimated Arrival Date The date your electronic bill payment will arrive at the merchant.

The date you enter must be at least four (4) business days from today's date. Because of merchant/biller processing, we recommend that you allow at least seven (7) business days for each payment to be processed by them. The latest that a payment may be scheduled is 11:59 PM (ET) on any business day, in order for payment instructions to be initiated the next day.

F

Fifteen-Day Payoff The 15-day projected payoff (payment in full) on your loan, which if paid in the next fifteen days would complete your loan obligation. Your 15-day payoff does not take into account any additional transactions that may occur during that 15-day period.

Flash Shared Object A device similar to a cookie that helps identify your computer as part of PNC's security framework.

Frequency For Recurring Transfers, this is the recurring interval at which your transfer will occur. For example:

Frequency transfer is made...
Weekly: 	Once a week
Bi-weekly: 	Once every other week
Monthly: 	Once a month
Bi-monthly: 	Once every other month
Quarterly: 	Once every three months
Semi-Annually: 	Once every six months
Annually: 	Once a year
G-I

Inbound Transfer An external transfer that will be on deposit at PNC once completed.

Interest Frequency The frequency with which interest is paid on this account.

Interest Paid to Last Year A summary of the interest paid on this account during the last calendar year.

Interest Paid Year to Date A summary of the interest paid on this account in the calendar year-to-date.

Interest Payment Method The interest payment option which was chosen for the specific CD. The three options PNC Bank offers are:

Interest check mailed
Interest payment credited to a checking, savings, or money market account
Interest capitalized to the CD
Issue Date The date the Certificate of Deposit or Individual Retirement Account was originally purchased or last renewed.

J-L

Last Deposit The dollar amount of the last deposit or credit to the account.

Last Interest Paid Amount The amount of the last interest payment on an interest-bearing account.

Last Interest Paid Date The date on which the last interest payment occurred on an interest-bearing account.

Last Payment Amount The dollar amount of the most recent installment loan or line of credit payment.

Last Payment Date The date of the most recent payment to the account.

Last Statement Balance The dollar amount of the balance as of the closing day of the most recent statement.

Ledger Balance The amount in your account as of the end of the last business day.

Line of Credit Transfer A transfer of funds from your PNC Bank Line of Credit Account to an eligible checking, savings or money market account.

Loan Principal Balance The amount of money borrowed on which interest is calculated or the remaining unpaid portion of the money borrowed.

M

Maturity Date - Certificate of Deposit/Individual Retirement Account The date when a Certificate of Deposit or Individual Retirement Account matures.

You have 10 days from this date to access the funds in the account without penalty, unless the account is a Ready Access or Single Maturity product.

You may access Ready Access products at any time after the first 7 days the account is opened without penalty. Single Maturity CDs mature only once, do not automatically renew, and stop paying interest on the maturity date.

Maturity Date - Loan The date on which a loan becomes due and payable.

N

Next Payment Amount The amount due on your next scheduled loan payment.

Next Payment Due Date The date on which your next loan payment will be due.

Nickname An alternative, easy-to-remember name for a given biller. You may want to enter a biller nickname if you have two accounts with the same business name-this may help you to differentiate between the two.

When you enter a biller nickname, the nickname will appear wherever biller information is displayed instead of the actual biller name and account.

Note Amount The amount of money you borrowed (for simple interest loans); or your total loan obligation (for pre-computed loans).

Note Date The date when the loan contract was signed.

O

One Time Payment A bill payment that is paid only once to a selected biller, on a certain date.

For example, a payment to an electrician for his services when he installed a new light in your kitchen.

One Time Transfer A Transfer that is scheduled to occur on a date that you define. One-time transfers may be scheduled for the current date or a future date, depending on the account combination you have selected.

Open Date The date an account, card or service was opened.

Original Note Amount The amount of money you borrowed for simple interest loans; or your total loan obligation for pre-computed loans.

Outbound Transfer An external transfer that will be on deposit at another financial institution once completed.

P

Password Online Banking requires the use of a password to access account information and take advantage of its capabilities. Users create this password at their first visit to Online Banking. Passwords must be between eight and twenty characters and must contain at least one letter and one number. In addition, Online Banking users that frequently use Voice Banking have the option to use their password to access the phone in place of their four-digit PIN.

Past Due Payment Amount Any payment amount that remains unpaid and is now considered delinquent in accordance with the terms of your loan contract.

Pay Date The day you would like your Biller to receive your bill payment; has the same meaning as Estimated Arrival Date, which is also defined in this User Guide Glossary

Pending Deposits Includes deposits or other additions to your account. All funds may not be immediately available. Please refer to our Consumer Funds Availability Policy or Business Funds Availability Policy as applicable.

Pending Transactions Deposits or withdrawals that have been submitted since the last business day. These items are not yet posted to the account and will not appear on the Detail by Date or Detail by Type pages until they are posted.

Recurring Transfer A Transfer that is scheduled to occur on a pre-set, recurring interval, which you define. Transfers may occur weekly, bi-weekly, monthly, bi-monthly, quarterly, semi-annually or annually (see ""Frequency"").

Repeating Payment A bill payment that is paid on a recurring basis, to a selected biller, for a set amount. An example of this might be your rent or mortgage payment, which is made once a month for the same amount.

S

Scheduled Transfer A One Time Transfer or Recurring Transfer that has not yet processed. These transfers appear on the Scheduled List page.

Substitute Check A substitute check will have an image of the front and back of the original check, a statement that it is a ""legal copy"" of the original check, and it is suitable for automated processing in the same manner as the original check.

T

Ten-Day Payoff The 10-day projected payoff (payment in full) on your loan, which if paid in the next ten days would complete your loan obligation. Your 10-day payoff does not take into account any additional transactions that may occur during that 10-day period.

Term The time between the commencement and termination dates between issuance and maturity.

Today's Payoff The projected payoff (payment in full) on the loan, which if paid by end of business today would complete the loan obligation. The payoff does not take into account any additional transactions that may occur today.

Total Balance The dollar amount of the balance on the account. This is not a payoff amount.

U-Z

User ID Your Online Banking User ID is a self-selected number that uniquely identifies you for both Online Banking and Voice Banking. You may update this User ID at any time using the Modify User ID function in the Customer Profile section. Any changes that you make to your User ID in Online Banking will immediately take effect for Voice Banking. If you have enabled Save User ID and update your User ID within Online Banking, it will no longer be saved. You may enable Save User ID on the Sign On page by selecting the Save User ID box and successfully signing on to Online Banking.

© Copyright 2022. The PNC Financial Services Group, Inc. All Rights Reserved." "S

Scheduled Transfer A One Time Transfer or Recurring Transfer that has not yet processed. These transfers appear on the Scheduled List page.

Secure Message An encrypted message, sent via secure Web servers, which can be used to communicate account-related or other personal information to PNC, in lieu of internet e-mail.

Source Account The account from which transferred funds are being withdrawn.

Start Date For Recurring Transfers, this is the date you want the transfer to start. Enter the Start Date in mm/dd/yyyy format. For One-Time Transfers, this field is called Date.

Security Questions Your Security Questions are questions that only you should know the answers to. When you sign on from a computer we do not recognize, you will be asked to answer one of your Security Questions in order to verify your identity. Occasionally, we may also ask you one of your questions as an additional layer of security.

Substitute Check A substitute check will have an image of the front and back of the original check, a statement that it is a ""legal copy"" of the original check, and it is suitable for automated processing in the same manner as the original check.

T

Ten-Day Payoff The 10-day projected payoff (payment in full) on your loan, which if paid in the next ten days would complete your loan obligation. Your 10-day payoff does not take into account any additional transactions that may occur during that 10-day period.

Term The time between the commencement and termination dates between issuance and maturity.

Today's Payoff The projected payoff (payment in full) on the loan, which if paid by end of business today would complete the loan obligation. The payoff does not take into account any additional transactions that may occur today.

Total Balance The dollar amount of the balance on the account. This is not a payoff amount.

U-Z

User ID Your Online Banking User ID is a self-selected number that uniquely identifies you for both Online Banking and Voice Banking. You may update this User ID at any time using the Modify User ID function in the Customer Profile section. Any changes that you make to your User ID in Online Banking will immediately take effect for Voice Banking. If you have enabled Save User ID and update your User ID within Online Banking, it will no longer be saved. You may enable Save User ID on the Sign On page by selecting the Save User ID box and successfully signing on to Online Banking.

© Copyright 2022. The PNC Financial Services Group, Inc. All Rights Reserved.S

Scheduled Transfer A One Time Transfer or Recurring Transfer that has not yet processed. These transfers appear on the Scheduled List page.

Secure Message An encrypted message, sent via secure Web servers, which can be used to communicate account-related or other personal information to PNC, in lieu of internet e-mail.

Source Account The account from which transferred funds are being withdrawn.

Start Date For Recurring Transfers, this is the date you want the transfer to start. Enter the Start Date in mm/dd/yyyy format. For One-Time Transfers, this field is called Date.

Security Questions Your Security Questions are questions that only you should know the answers to. When you sign on from a computer we do not recognize, you will be asked to answer one of your Security Questions in order to verify your identity. Occasionally, we may also ask you one of your questions as an additional layer of security.

Substitute Check A substitute check will have an image of the front and back of the original check, a statement that it is a ""legal copy"" of the original check, and it is suitable for automated processing in the same manner as the original check.

T

Ten-Day Payoff The 10-day projected payoff (payment in full) on your loan, which if paid in the next ten days would complete your loan obligation. Your 10-day payoff does not take into account any additional transactions that may occur during that 10-day period.

Term The time between the commencement and termination dates between issuance and maturity.

Today's Payoff The projected payoff (payment in full) on the loan, which if paid by end of business today would complete the loan obligation. The payoff does not take into account any additional transactions that may occur today.

Total Balance The dollar amount of the balance on the account. This is not a payoff amount.

U-Z

User ID Your Online Banking User ID is a self-selected number that uniquely identifies you for both Online Banking and Voice Banking. You may update this User ID at any time using the Modify User ID function in the Customer Profile section. Any changes that you make to your User ID in Online Banking will immediately take effect for Voice Banking. If you have enabled Save User ID and update your User ID within Online Banking, it will no longer be saved. You may enable Save User ID on the Sign On page by selecting the Save User ID box and successfully signing on to Online Banking.

© Copyright 2022. The PNC Financial Services Group, Inc. All Rights Reserved.S

Scheduled Transfer A One Time Transfer or Recurring Transfer that has not yet processed. These transfers appear on the Scheduled List page.

Secure Message An encrypted message, sent via secure Web servers, which can be used to communicate account-related or other personal information to PNC, in lieu of internet e-mail.

Source Account The account from which transferred funds are being withdrawn.

Start Date For Recurring Transfers, this is the date you want the transfer to start. Enter the Start Date in mm/dd/yyyy format. For One-Time Transfers, this field is called Date.

Security Questions Your Security Questions are questions that only you should know the answers to. When you sign on from a computer we do not recognize, you will be asked to answer one of your Security Questions in order to verify your identity. Occasionally, we may also ask you one of your questions as an additional layer of security.

Substitute Check A substitute check will have an image of the front and back of the original check, a statement that it is a ""legal copy"" of the original check, and it is suitable for automated processing in the same manner as the original check.

T

Ten-Day Payoff The 10-day projected payoff (payment in full) on your loan, which if paid in the next ten days would complete your loan obligation. Your 10-day payoff does not take into account any additional transactions that may occur during that 10-day period.

Term The time between the commencement and termination dates between issuance and maturity.

Today's Payoff The projected payoff (payment in full) on the loan, which if paid by end of business today would complete the loan obligation. The payoff does not take into account any additional transactions that may occur today.

Total Balance The dollar amount of the balance on the account. This is not a payoff amount.

U-Z

User ID Your Online Banking User ID is a self-selected number that uniquely identifies you for both Online Banking and Voice Banking. You may update this User ID at any time using the Modify User ID function in the Customer Profile section. Any changes that you make to your User ID in Online Banking will immediately take effect for Voice Banking. If you have enabled Save User ID and update your User ID within Online Banking, it will no longer be saved. You may enable Save User ID on the Sign On page by selecting the Save User ID box and successfully signing on to Online Banking.

© Copyright 2022. The PNC Financial Services Group, Inc. All Rights Reserved."

Today's Payoff The projected payoff (payment in full) on the loan, which if paid by end of business today would complete the loan obligation. The payoff does not take into account any additional transactions that may occur today.

Pay From: "MSRB Organization Account — Printable Summary MSRB records indude the following information for you organization as of 4/21/2022 3:52 AM Eastern:" "Additional Information Organization Type: AGENT Federal Tax EIN: 88-1565496 Required Documentation Information on Letterhead — uploaded and pending erification Second Form of Identification — uploaded and perding verification" NON-NEGOTIABLE

			Morgan Stanley Smith & Barney Investment Holding Mangemnet Ageny' N.A./L.L.C.																				
" SECURITIES CLEARING CORPORATION FINANCIAL LLC" Twenty-two trillion six hundred seventy-seven billion and zero cents ZACHRY TYLER WOOD\ALPHABET Invoice no. 101003 to: ZACHRY TYLER WOOD\ALPHABET Bank account ...0614 Invoice no. Acct 47-2041-6547 / / R\T 71921891 Date Type Reference

Original Amount Balance Due Payment Check No. - 06/01/2022 ZACHRY TYLER WOOD\ALPHABET 1.12269E+13 AMT Bank account ...0614 Invoice no. -9,999,999,999,999.99 $***** ** Date Type Reference Original Amount Balance Due Payment Check Amount

|00000|'      ||' |:||'																							
																							
																							
																							
Zachry Tyler Wood																							
	Twenty-two trillion six hundred seventy-seven billion and zero cents																						
AchryTylerWood																							
5222 Bradford Dr.																							
Dallas, TX 75235-8314																							
Pay Period: 09/17/2001 - 09/28/2021

AchryTylerWood																							
Voucher Section Info Pay Period: 09/17/2001 - 09/28/2021

AchryTylerWood																							
Voucher Section Info Pay Period: 09/17/2001 - 09/28/2021

/

Alphabet Inc. GOOGL, GOOG on Nasdaq [-] Company Information CIK: 1652044 EIN: 61-1767919 SIC: 7370 - Services-Computer Programming, Data Processing, Etc. (CF Office: Office of Technology) State location: CA State of incorporation: DE Fiscal year end: 44926 Business address: 1600 AMPHITHEATRE PARKWAY, MOUNTAIN VIEW, CA, 94043 Phone: 650-253-0000 Mailing address: 1600 AMPHIITHEATRE PARKWAY, MOINTAIN VIEW, CA, 94043 Category: Large accelerated filer Filings: 1,388 EDGAR filings since October 2, 2015 Get insider transactions for this issuer Get insider transactions for this reporting owner Latest Filings (excluding insider transactions) March 11, 2022 - SC 13G/A: Statement of acquisition of beneficial ownership by individuals - amendmentOpen document FilingOpen filing February 14, 2022 - SC 13G/A: Statement of acquisition of beneficial ownership by individuals - amendmentOpen document FilingOpen filing February 11, 2022 - SC 13G/A: Statement of acquisition of beneficial ownership by individuals - amendmentOpen document FilingOpen filing February 11, 2022 - SC 13G/A: Statement of acquisition of beneficial ownership by individuals - amendmentOpen document FilingOpen filing February 9, 2022 - SC 13G/A: Statement of acquisition of beneficial ownership by individuals - amendmentOpen document FilingOpen filing Selected Filings [+] 8-K (current reports) [+] 10-K (annual reports) and 10-Q (quarterly reports) [+] Proxy (annual meeting) and information statements [+] Ownership disclosures Filings Search table From Date (yyyy-mm-dd) To Date (yyyy-mm-dd)

Keywords: Show columns: Form type Form description Filing date Reporting date Act Film number File number Accession number Size "Form type" "Form description" "Filing date" "Reporting date" "Form type" "Form description" "Filing date" "Reporting date" 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44643 2022-03-22View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing Amendments 44642 2022-03-18View all with same reporting date 4/A Statement of changes in beneficial ownership of securities - amendmentOpen document FilingOpen filing 44642 2022-03-18View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing Amendments 44641 2022-03-18View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing Amendments 44641 2022-03-18View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing Amendments 44641 2022-03-18View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44638 2022-03-17View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44638 2022-03-17View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44638 2022-03-17View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44637 2022-03-16View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44637 2022-03-16View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44637 2022-03-16View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44637 2022-03-16View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44631 2022-03-09View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44631 2022-03-09View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44631 2022-03-09View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44631 2022-03-09View all with same reporting date SC 13G/A Statement of acquisition of beneficial ownership by individuals - amendmentOpen document FilingOpen filing 44631 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44630 2022-03-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44630 2022-03-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44630 2022-03-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44630 2022-03-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44630 2022-03-09View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44630 2022-03-09View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44629 2022-03-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44629 2022-03-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44629 2022-03-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44629 2022-03-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44622 2022-03-01View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44620 2022-02-25View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44614 2022-02-22View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44609 2022-02-16View all with same reporting date 5 Annual statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44606 2021-12-31View all with same reporting date SC 13G/A Statement of acquisition of beneficial ownership by individuals - amendmentOpen document FilingOpen filing 44606 5 Annual statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44603 2021-12-31View all with same reporting date 5 Annual statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44603 2021-12-31View all with same reporting date 5 Annual statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44603 2021-12-31View all with same reporting date 5 Annual statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44603 2021-12-31View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44603 2022-02-09View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44603 2022-02-09View all with same reporting date SC 13G/A Statement of acquisition of beneficial ownership by individuals - amendmentOpen document FilingOpen filing 44603 SC 13G/A Statement of acquisition of beneficial ownership by individuals - amendmentOpen document FilingOpen filing 44603 5 Annual statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44603 2021-12-31View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44603 2022-02-09View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44603 2022-02-09View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44602 2022-02-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44602 2022-02-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44602 2022-02-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44602 2021-11-26View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44602 2021-11-24View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44602 2021-11-23View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44602 2021-11-19View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44602 2021-11-17View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44602 2021-11-16View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44602 2021-11-04View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44601 2022-02-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44601 2022-02-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44601 2022-02-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44601 2022-02-07View all with same reporting date SC 13G/A Statement of acquisition of beneficial ownership by individuals - amendmentOpen document FilingOpen filing 44601 SC 13G/A Statement of acquisition of beneficial ownership by individuals - amendmentOpen document FilingOpen filing 44601 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44600 2022-02-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44600 2022-02-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44600 2022-02-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44600 2022-02-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44600 2022-02-07View all with same reporting date SC 13G Statement of acquisition of beneficial ownership by individualsOpen document FilingOpen filing 44600 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44600 2022-02-04View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44599 2022-02-04View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44599 2022-02-04View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44599 2022-02-04View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44599 2022-02-04View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44596 2022-02-03View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44596 2022-02-03View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44596 2022-02-03View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44596 2022-02-03View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44596 2022-02-03View all with same reporting date SC 13G/A Statement of acquisition of beneficial ownership by individuals - amendmentOpen document FilingOpen filing 44595 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44594 2022-02-02View all with same reporting date S-3ASR Automatic shelf registration statement of securities of well-known seasoned issuersOpen document FilingOpen filing 44594 10-K Annual report [Section 13 and 15(d), not S-K Item 405]Open document FilingOpen filing 44594 2021-12-31View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44593 2022-02-01View all with same reporting date 8-K Current reportOpen document FilingOpen filing 44593 2022-02-01View all with same reporting date 2.02 - Results of Operations and Financial Condition 8.01 - Other Events (The registrant can use this Item to report events that are not specifically called for by Form 8-K, that the registrant considers to be of importance to security holders.) 9.01 - Financial Statements and Exhibits 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44588 2022-01-25View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44582 2022-01-20View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44582 2022-01-20View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44582 2022-01-20View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44582 2022-01-20View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44581 2022-01-19View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44581 2022-01-19View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44581 2022-01-19View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44581 2022-01-19View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44580 2022-01-18View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44580 2022-01-18View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44575 2022-01-12View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44574 2022-01-12View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44574 2022-01-12View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44574 2022-01-11View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44574 2022-01-11View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44574 2022-01-11View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44572 2022-01-10View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44572 2022-01-10View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44572 2022-01-10View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44572 2022-01-10View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44572 2022-01-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44568 2022-01-05View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44568 2022-01-05View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44568 2022-01-05View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44568 2022-01-05View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44567 2022-01-05View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44566 2022-01-05View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44566 2022-01-05View all with same reporting date 8-K Current reportOpen document FilingOpen filing 44565 2021-12-28View all with same reporting date 5.02 - Departure of Directors or Certain Officers; Election of Directors; Appointment of Certain Officers; Compensatory Arrangements of Certain Officers 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44564 2022-01-03View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44564 2022-01-03View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44559 2021-12-27View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44559 2021-12-27View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44559 2021-12-27View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44559 2021-12-27View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44559 2021-12-27View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44559 2021-12-27View all with same reporting date 3 Initial statement of beneficial ownership of securitiesOpen document FilingOpen filing 44547 2021-12-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44545 2021-12-15View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44540 2021-12-09View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44540 2021-12-09View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44539 2021-12-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44539 2021-12-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44539 2021-12-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44539 2021-12-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44538 2021-12-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44538 2021-12-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44538 2021-12-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44538 2021-12-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44538 2021-12-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44538 2021-12-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44537 2021-12-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44537 2021-12-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44537 2021-12-06View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44537 2021-12-06View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44537 2021-12-06View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44531 2021-12-01View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44531 2021-12-01View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44531 2021-12-01View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44529 2021-11-25View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44523 2021-11-19View all with same reporting date 4/A Statement of changes in beneficial ownership of securities - amendmentOpen document FilingOpen filing 44523 2021-11-11View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44523 2021-11-21View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44518 2021-11-16View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44517 2021-11-17View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44517 2021-11-16View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44517 2021-11-16View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44516 2021-11-15View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44516 2021-11-15View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44515 2021-11-12View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44515 2021-11-12View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44515 2021-11-12View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44512 2021-11-10View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44512 2021-11-10View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44512 2021-11-10View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44512 2021-11-09View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44510 2021-11-09View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44509 2021-11-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44509 2021-11-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44509 2021-11-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44508 2021-11-05View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44508 2021-11-05View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44508 2021-11-05View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44503 2021-11-03View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44502 2021-11-02View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44501 2021-11-01View all with same reporting date 10-Q Quarterly report [Sections 13 or 15(d)]Open document FilingOpen filing 44496 2021-09-30View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44495 2021-10-25View all with same reporting date 8-K Current reportOpen document FilingOpen filing 44495 2021-10-26View all with same reporting date 2.02 - Results of Operations and Financial Condition 9.01 - Financial Statements and Exhibits 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44490 2021-10-20View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44490 2021-10-20View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44490 2021-10-20View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44489 2021-10-19View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44489 2021-10-19View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44487 2021-10-18View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44487 2021-10-18View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44484 2021-10-13View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44484 2021-10-13View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44483 2021-10-12View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44483 2021-10-12View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44481 2021-10-11View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44481 2021-10-11View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44477 2021-10-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44475 2021-10-06View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44475 2021-10-04View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44470 2021-10-01View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44470 2021-09-29View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44467 2021-09-25View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44467 2021-09-25View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44467 2021-09-25View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44467 2021-09-25View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44467 2021-09-25View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44467 2021-09-25View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44466 2021-09-23View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44466 2021-09-23View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44463 2021-09-24View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44463 2021-09-22View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44463 2021-09-22View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44463 2021-09-22View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44461 2021-09-21View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44461 2021-09-21View all with same reporting date 3 Initial statement of beneficial ownership of securitiesOpen document FilingOpen filing 44460 2021-09-21View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44454 2021-09-15View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44452 2021-09-09View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44452 2021-09-09View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44449 2021-09-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44449 2021-09-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44447 2021-09-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44447 2021-09-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44447 2021-09-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44441 2021-09-01View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44441 2021-09-01View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44441 2021-09-02View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44438 2021-08-29View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44435 2021-08-25View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44431 2021-08-20View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44431 2021-08-20View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44431 2021-08-19View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44431 2021-08-19View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44427 2021-08-18View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44427 2021-08-18View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44427 2021-08-18View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44419 2021-08-11View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44419 2021-08-11View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44419 2021-08-10View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44419 2021-08-10View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44418 2021-08-09View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44418 2021-08-09View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44418 2021-08-09View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44412 2021-08-04View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44411 2021-08-03View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44410 2021-07-30View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44410 2021-08-02View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44410 2021-07-29View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44410 2021-07-29View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44407 2021-07-28View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44407 2021-07-28View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44407 2021-07-28View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44406 2021-07-27View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44406 2021-07-27View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44406 2021-07-27View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44406 2021-07-27View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44405 2021-07-26View all with same reporting date 10-Q Quarterly report [Sections 13 or 15(d)]Open document FilingOpen filing 44405 2021-06-30View all with same reporting date 3 Initial statement of beneficial ownership of securitiesOpen document FilingOpen filing 44404 2021-07-27View all with same reporting date 8-K Current reportOpen document FilingOpen filing 44404 2021-07-27View all with same reporting date 2.02 - Results of Operations and Financial Condition 9.01 - Financial Statements and Exhibits 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44398 2021-07-21View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44389 2021-07-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44389 2021-07-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44386 2021-07-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44386 2021-07-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44386 2021-07-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44386 2021-07-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44386 2021-07-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44386 2021-07-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44386 2021-07-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44386 2021-07-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44386 2021-07-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44386 2021-07-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44385 2021-07-06View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44385 2021-07-06View all with same reporting date 8-K Current reportOpen document FilingOpen filing 44385 2021-07-07View all with same reporting date 8.01 - Other Events (The registrant can use this Item to report events that are not specifically called for by Form 8-K, that the registrant considers to be of importance to security holders.) 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44385 2021-07-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44385 2021-07-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44383 2021-07-02View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44378 2021-07-01View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44378 2021-07-01View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44378 2021-06-30View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44378 2021-06-29View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44376 2021-06-25View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44375 2021-06-25View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44375 2021-06-25View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44375 2021-06-25View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44375 2021-06-25View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44375 2021-06-25View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44364 2021-06-16View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44358 2021-06-09View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44358 2021-06-09View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44357 2021-06-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44357 2021-06-08View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44356 2021-06-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44356 2021-06-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44356 2021-06-07View all with same reporting date 4 Statement of changes in beneficial ownership of securitiesOpen document FilingOpen filing 44356 2021-06-07View all with same reporting date Showing 1 to 32 of 1,000 entries Data source: CIK0001652044.json Investor Resources How to Use EDGAR Learn how to use EDGAR to research public filings by public companies, mutual funds, ETFs, some annuities, and more. Before you Invest, Investor.gov Get answers to your investing questions from the SEC's website dedicated to retail investors

16

Table of Contents

SELECTED HISTORICAL FINANCIAL DATA OF ALPHABET INC. AND GOOGLE INC.

Alphabet’s consolidated statements of income data for the years ended December 31, 2013, 2014, and 2015 and Alphabet’s consolidated balance sheet data as of December 31, 2014 and 2015 are derived from Alphabet’s audited consolidated financial statements appearing in Alphabet’s Annual Report on Form 10-K for the year ended December 31, 2015, which is incorporated by reference into this prospectus. The consolidated statements of income data for the years ended December 31, 2011 and 2012, and the consolidated balance sheet data as of December 31, 2011, 2012 and 2013, are derived from Alphabet’s unaudited consolidated financial statements as of and for such years, which have not been incorporated by reference into this prospectus. On October 2, 2015, Google implemented a holding company reorganization pursuant to which Google became a direct, wholly-owned subsidiary of Alphabet. Upon completion of the holding company reorganization, Alphabet became a successor to Google for purposes of Rule 12g-3(a) of the Exchange Act. As a result, Google’s consolidated statement of income data and consolidated balance sheet data are substantially the same as Alphabet’s consolidated statement of income data and consolidated balance sheet data for the corresponding periods. Please see Alphabet’s Annual Report on Form 10-K for the year ended December 31, 2015, which is incorporated by reference into this prospectus. The historical results are not necessarily indicative of the results to be expected in any future period.

		   	Year Ended December 31, 	 																			
		   	2011(1) 	  	   	2012(1) 																	
		   	(in millions, except per share amounts) 	 																			
Consolidated Statements of Income Data: (2) (3)

Revenues $ 37905

Income from operations 11742

Net income from continuing operations 9706

Net income (loss) from discontinued operations 0

Net income 9706

Basic net income (loss) per share of Class A and B common stock:

Continuing operations $ 15.04

Discontinued operations 0

Basic net income per share of Class A and B common stock $ 15.04

Basic net income (loss) per share of Class C capital stock:

Continuing operations $ 15.04

Discontinued operations 0

Basic net income per share of Class C capital stock $ 15.04

Diluted net income (loss) per share of Class A and B common stock:

Continuing operations $ 14.83

Discontinued operations 0

Diluted net income per share of Class A and B common stock $ 14.83

Diluted net income (loss) per share of Class C capital stock:

Continuing operations $ 14.83

Discontinued operations 0

Diluted net income per share of Class C capital stock $ 14.83

17

Table of Contents

		   	As of December 31, 	 																			
		   	2011(1)(4) 	  	   	2012(1)(4) 																	
		   	(in millions) 	 																			
Consolidated Balance Sheet Data:

Cash, cash equivalents and marketable securities $ 44626

Total assets 72359

Total long-term liabilities 5294

Total stockholders’ equity 58118

-1 In the second quarter of 2015, we identified an incorrect classification of certain revenues between legal entities, and as a consequence, we revised our income tax expense for the periods beginning in 2008 through the first quarter of 2015. Please refer to Note 1 and Note 17 of the Notes to Consolidated Financial Statements included in Part II, Item 8 of our Annual Report on Form 10-K for the year ended December 31, 2015, which is incorporated by reference into this prospectus. -2 Basic and diluted income per share data is from the consolidated statements of income of Alphabet. Basic and diluted income per share data is not presented for Google. -3 Basic and diluted net income per share for the year ended December 31, 2015 includes the impact from an adjustment payment to Class C capital stockholders (the “Adjustment Payment”). Please see Note 12 of the Notes to Consolidated Financial Statements included in Part II, Item 8 of Alphabet’s Annual Report on Form 10-K for the year ended December 31, 2015, which is incorporated by reference into this prospectus. -4 Includes reclassifications of deferred tax assets and liabilities related to ASU 2015-17 “Income Taxes (Topic 740): Balance Sheet Classification of Deferred Taxes.” Please refer to Note 1 of the Notes to Consolidated Financial Statements included in Part II, Item 8 of our Annual Report on Form 10-K for the year ended December 31, 2015, which is incorporated by reference into this prospectus.

18

Table of Contents

RATIO OF EARNINGS TO FIXED CHARGES

Alphabet’s ratio of earnings to fixed charges for each of the five years in the period ended December 31, 2015 is set forth below. For the purpose of computing these ratios, “earnings” consists of income before provision for income taxes and cumulative effect of a change in accounting principles, plus fixed charges (excluding capitalized interest). “Fixed charges” consists of interest expense (which includes amortization of debt issue costs), capitalized interest and a portion of rentals deemed to be interest.

		   	Year Ended December 31, 	 																			
		   	2011	  	   	2012																	
Ratio of Earnings to Fixed Charges(1) 68x

-1 On October 2, 2015, we implemented a holding company reorganization pursuant to which Google became a direct, wholly-owned subsidiary of Alphabet. Upon completion of the holding company reorganization, Alphabet became a successor to Google for purposes of Rule 12g-3(a) of the Exchange Act. As a result, Google’s ratio of earnings to fixed charges is equivalent to Alphabet’s ratio of earnings to fixed charges.

19

Table of Contents

RISK FACTORS

Before making an investment decision in any of the exchange offers and consent solicitations, you should consider carefully the information under the headings “Risk Factors” in our Annual Report on Form 10-K for the year ended December 31, 2015 and the following risk factors. You should also carefully consider the other information included in this prospectus and any amendment or supplement thereto, together with the documents incorporated by reference herein or therein, the registration statement, the exhibits thereto and the additional information described under the heading “Where You Can Find More Information.” Such risks and uncertainties are not the only ones we face. Additional risks and uncertainties not presently known to us or that we currently deem immaterial may also impair our business operations. These risk factors are not necessarily presented in the order of importance or probability of occurrence. If any of the described risks actually occurs, it could materially and adversely affect our business, financial condition, results of operations and prospects, and could result in a partial or complete loss of your investment.

Risks Related to the Alphabet Notes

The Alphabet Notes are unsecured and will be effectively junior to our secured indebtedness to the extent of the collateral therefor.

The Alphabet Notes are unsecured general obligations of Alphabet. Holders of our secured indebtedness, if any, will have claims that are prior to your claims as holders of the Alphabet Notes, to the extent of the assets securing such indebtedness. Thus, in the event of a bankruptcy, liquidation, dissolution, reorganization or similar proceeding, our pledged assets would be available to satisfy obligations of our secured indebtedness before any payment could be made on the Alphabet Notes. To the extent that such assets cannot satisfy in full our secured indebtedness, the holders of such indebtedness would have a claim for any shortfall that would rank equally in right of payment with the Alphabet Notes. In any of the foregoing events, we cannot assure you that there will be sufficient assets to pay amounts due on the Alphabet Notes. As a result, holders of the Alphabet Notes may receive less, ratably, than holders of our secured indebtedness. As of December 31, 2015, Alphabet Inc. on a standalone basis had no secured indebtedness outstanding.

Holders of the Alphabet Notes will be structurally subordinated to our subsidiaries’ third-party indebtedness and obligations, including any Google Notes not exchanged.

The Alphabet Notes are obligations of Alphabet Inc. exclusively and not of any of our subsidiaries, including Google. Most of our operations are conducted through our subsidiaries. Our subsidiaries are separate legal entities that have no obligation to pay any amounts due under the Alphabet Notes or to make any funds available therefor, whether by dividends, loans or other payments. Except to the extent we are a creditor with recognized claims against our subsidiaries, all claims of third-party creditors (including trade creditors and holders of any Google Notes not exchanged) and holders of preferred stock, if any, of our subsidiaries will have priority with respect to the assets of such subsidiaries over the claims of our creditors, including holders of the Alphabet Notes. Consequently, the Alphabet Notes will be structurally subordinated to all existing and future liabilities of any of our subsidiaries and any subsidiaries that we may in the future acquire or establish. As of December 31, 2015, Google had unused letters of credit of approximately $752 million and no outstanding balance under its credit facility, approximately $3.0 billion in long-term debt (including the Google Notes and Google’s 2.125% Notes due 2016, which mature on May 19, 2016) and $2.2 billion of commercial paper and capital lease borrowing debts (including $2.0 billion of Google commercial paper that matured at various dates through February 2016). As of December 31, 2015, the Alphabet Notes would have been structurally subordinated to such existing third-party debts. See “Management’s Discussion and Analysis of Financial Condition and Results of Operations—Capital Resources and Liquidity” and Note 4 of the Notes to Consolidated Financial Statements included in Part II, Item 8 of our Annual Report on Form 10-K for the year ended December 31, 2015, which is incorporated by reference into this prospectus.

There are limited covenants in the Alphabet Indenture.

The Alphabet Indenture will have limited restrictive covenants and terms. Neither we nor any of our subsidiaries are restricted from incurring additional debt or other liabilities, including secured debt, under the

20

Table of Contents

Alphabet Indenture. If we or any of our subsidiaries incur additional debt or liabilities, our ability to pay our obligations on the Alphabet Notes could be adversely affected. We expect that we and our subsidiaries will from time to time incur additional debt and other liabilities. In addition, we and our subsidiaries are not restricted under the Alphabet Indenture from granting security interests over our assets or from entering into sale or leaseback transactions. The Alphabet Notes also will not include provisions requiring, at the option of holders, the repurchase of such Notes upon the occurrence of a change of control. In addition, there are no financial covenants in the Alphabet Indenture. You are not protected under the Alphabet Indenture in the event of a highly leveraged transaction, reorganization, merger or similar transaction that may adversely affect the value of your Alphabet Notes. See “Description of Alphabet Notes” and “Description of Differences Between the Alphabet Notes and the Google Notes.”

Active trading markets may not develop for the Alphabet Notes.

The Alphabet Notes are new issuances of securities for which no public trading market currently exists. A liquid market for the Alphabet Notes may not develop or be maintained. The Alphabet Notes will not be listed on any national securities exchange or be quoted on any automated dealer quotation system. In addition, the trading price of the Alphabet Notes may fluctuate, depending upon prevailing interest rates, the market for similar Alphabet Notes, our performance and other factors. The market for the Alphabet Notes may not be free from disruptions that may adversely affect the prices at which you may sell the Alphabet Notes.

Our credit ratings may not reflect all risks of your investment in the Alphabet Notes.

The credit ratings assigned to the Alphabet Notes are limited in scope, and do not address all material risks relating to an investment in the Alphabet Notes, but rather reflect only the view of each rating agency at the time the rating is issued. There can be no assurance that those credit ratings will remain in effect for any given period of time or that a rating will not be lowered, suspended or withdrawn entirely by one or more rating agencies if, in that rating agency’s judgment, circumstances so warrant.

Agency credit ratings are not a recommendation to buy, sell or hold any security. Each agency’s rating should be evaluated independently of any other agency’s rating. Actual or anticipated changes or downgrades in our credit ratings, including any announcement that our ratings are under further review for a downgrade, could affect the market value of the Alphabet Notes and increase our corporate borrowing costs.

Risks Related to the Exchange Offers and the Consent Solicitations

The proposed amendments to the Google Indenture will afford reduced protection to remaining holders of Google Notes.

If the proposed amendments to the Google Indenture with respect to a series of Google Notes are adopted, the covenants and certain other terms of that series of Google Notes will be less restrictive and will afford reduced protection to holders of that series compared to the covenants and other provisions currently contained in the Google Indenture.

The proposed amendments to the Google Indenture would, among other things:

		• 	  	eliminate the merger covenant that sets forth certain requirements that must be met for Google to consolidate, merge, sell all or substantially all of its assets (including the transfer of any assets to Alphabet as part of Alphabet’s holding company structure); and																			
																							
																							
		• 	  	eliminate the reporting covenant.																			
If the proposed amendments are adopted with respect to a series of Google Notes, each non-exchanging holder of that series will be bound by the proposed amendments even if that holder did not consent to the proposed amendments. These amendments will permit us to take certain actions previously prohibited that could

21

Table of Contents

increase the credit risk with respect to Google, and might adversely affect the liquidity, market price and price volatility of the Google Notes or otherwise be adverse to the interests of the holders of the Google Notes. See “The Proposed Amendments.”

The liquidity of the Google Notes that are not exchanged will be reduced.

We expect that the trading market for unexchanged Google Notes will become more limited due to the reduction in the amount of the Google Notes outstanding upon consummation of the exchange offers. A more limited trading market might adversely affect the liquidity, market price and price volatility of these securities. If a market for unexchanged Google Notes exists or develops, those securities may trade at a discount to the price at which the securities would trade if the amount outstanding were not reduced, depending on prevailing interest rates, the market for similar securities and other factors. However, there can be no assurance that an active market in the unexchanged Google Notes will exist, develop or be maintained or as to the prices at which the unexchanged Google Notes may be traded.

Google will cease filing public reports and trading in the Google Notes may be adversely affected by the lack of information regarding Google.

Google has ceased reporting pursuant to Section 13 or 15(d) of the Exchange Act and, accordingly, it will not file periodic reports or information with the SEC, the trustee or any holders of the Google Notes. Trading in the Google Notes, including liquidity, market price and price volatility, may be adversely affected by the lack of publicly available information regarding Google.

The exchange offers and consent solicitations may be cancelled or delayed.

The consummation of the exchange offers is subject to, and conditional upon the satisfaction or, where permitted, waiver of the conditions specified herein including the receipt or waiver of the Requisite Consents. Even if each of the exchange offers and consent solicitations are completed, the exchange offers and consent solicitations may not be completed on the schedule described in this prospectus. Accordingly, holders participating in the exchange offers and consent solicitations may have to wait longer than expected to receive their Alphabet Notes and the cash consideration offered.

We may acquire Google Notes in future transactions.

We may in the future seek to acquire Google Notes in open market or privately-negotiated transactions, through subsequent exchange offers or otherwise. The terms of any of those purchases or offers could differ from the terms of these exchange offers and such other terms may be more or less favorable to holders of Google Notes. In addition, repurchases by us of Google Notes in the future could further reduce the liquidity of the applicable series of Google Notes.

You may not receive Alphabet Notes in the exchange offers if the procedures for the exchange offers are not followed.

We will issue the Alphabet Notes in exchange for your Google Notes only if you tender your Google Notes and deliver a properly completed and duly executed letter of transmittal and consent or the electronic transmittal through DTC’s Automated Tender Offer Program and other required documents before expiration of the exchange offers. You should allow sufficient time to ensure timely delivery of the necessary documents. Beneficial owners should be aware that their broker, dealer, commercial bank, trust company or other nominee may establish its own earlier deadlines for participation in the exchange offers and consent solicitations. Accordingly, beneficial owners wishing to participate in the exchange offers and consent solicitations should contact their broker, dealer, commercial bank, trust company or other nominee as soon as possible in order to

22

Table of Contents

determine the times by which such owner must take action in order to participate in the exchange offers and consent solicitations.

The consideration to be received in the exchange offers does not reflect any valuation of the Google Notes or the Alphabet Notes and is subject to market volatility.

We have made no determination that the consideration to be received in the exchange offers represents a fair valuation of either the Google Notes or the Alphabet Notes. We have not obtained a fairness opinion from any financial advisor about the fairness to us or to you of the consideration to be received by holders of Google Notes. None of Alphabet, Google, the dealer managers, the exchange agent, the information agent or the trustee under the Google Indenture and the Alphabet Indenture, or any other person is making any recommendation as to whether or not you should tender Google Notes for exchange in the exchange offers or deliver a consent pursuant to the consent solicitations.

23

Table of Contents

USE OF PROCEEDS

We will not receive any cash proceeds from the issuance of the Alphabet Notes in connection with the exchange offers. In exchange for issuing the Alphabet Notes and paying the cash consideration, we will receive the tendered Google Notes. The Google Notes surrendered in connection with the exchange offers and accepted for exchange will be retired and cancelled.

24

Table of Contents

THE EXCHANGE OFFERS AND CONSENT SOLICITATIONS

Purpose of the Exchange Offers and Consent Solicitations

Alphabet is conducting the exchange offers to simplify its capital structure, centralize its reporting obligations and to give existing holders of Google Notes the option to obtain securities issued by Alphabet Inc. We are conducting the consent solicitations to eliminate substantially all of the restrictive covenants in the Google Indenture, including the merger covenant and the reporting covenant and make certain conforming changes to the Google Indenture to reflect the proposed amendments. Completion of the exchange offers and consent solicitations is expected to ease administration of the Company’s consolidated indebtedness.

Terms of the Exchange Offers and Consent Solicitations

In the exchange offers, we are offering in exchange for a holder’s outstanding Google Notes the following Alphabet Notes and cash consideration:

Aggregate Principal Amount

Series of Notes

Issued by Google to be

Exchanged

Series of Notes to be Issued by Alphabet

Semi-Annual Interest Payment Dates

for Both Google and Alphabet Notes 1000000000 3.625% Notes due 2021 3.625% Notes due 2021

May 19 and November 19 1000000000 3.375% Notes due 2024 3.375% Notes due 2024

February 25 and August 25

In exchange for each $1,000 principal amount of Google Notes that is validly tendered prior to the Early Consent Date, and not validly withdrawn, holders will be eligible to receive the Total Consideration which consists of $1,000 principal amount of Alphabet Notes and a cash amount of $2.50. The Total Consideration includes the Early Participation Premium of $30 principal amount of Alphabet Notes of the applicable series. In exchange for each $1,000 principal amount of Google Notes that is validly tendered after the Early Consent Date but prior to the Expiration Date, and not validly withdrawn, holders will be eligible to receive only the Exchange Consideration of $970 principal amount of Alphabet Notes and a cash amount of $2.50, which is equal to the Total Consideration less the Early Participation Premium.

The Alphabet Notes will be issued only in denominations of $2,000 and integral multiples of $1,000 in excess thereof. See “Description of Alphabet Notes—Principal, Maturity and Interest.” If Alphabet would be required to issue an Alphabet Note in a denomination other than $2,000 or a whole multiple of $1,000, Alphabet will, in lieu of such issuance:

		• 	  	issue an Alphabet Note in a principal amount that has been rounded down to the nearest lesser whole multiple of $1,000; and																			
																							
																							
		• 	  	pay a cash amount equal to:																			
																							
																							
		• 	  	the difference between (i) the principal amount of the Alphabet Notes to which the tendering holder would otherwise be entitled and (ii) the principal amount of the Alphabet Note actually issued in accordance with this paragraph; plus																			
																							
																							
		• 	  	accrued and unpaid interest on the principal amount representing such difference to the Settlement Date.																			
The interest rate, interest payment dates, optional redemption prices and maturity date of each series of Alphabet Notes to be issued by Alphabet in the exchange offers will be the same as those of the corresponding series of Google Notes to be exchanged. The Alphabet Notes received in exchange for the tendered Google Notes will accrue interest from (and including) the most recent date to which interest has been paid or duly provided for on those Google Notes; provided, that interest will only accrue with respect to the aggregate principal amount of Alphabet Notes you receive, which will be less than the principal amount of Google Notes you tendered for exchange in the event that your Google Notes are tendered after the Early Consent Date. Except as otherwise set forth above, you will not receive a payment for accrued and unpaid interest on Google Notes you exchange at the time of the exchange.

25

Table of Contents

Each series of Alphabet Notes is a new series of debt securities that will be issued under the Indenture dated as of February 12, 2016 (the “Alphabet Base Indenture”) between Alphabet Inc. and The Bank of New York Mellon Trust Company, N.A., as trustee, as supplemented by the First Supplemental Indenture (together with the Alphabet Base Indenture, as heretofore supplemented, the “Alphabet Indenture”), between Alphabet and The Bank of New York Mellon Trust Company, N.A., as trustee. The terms of the Alphabet Notes will include those expressly set forth in such notes and the Alphabet Indenture and those made part of the Alphabet Indenture by reference to the Trust Indenture Act of 1939, as amended (the “Trust Indenture Act”).

In conjunction with the exchange offers, we are also soliciting consents from the holders of each series of Google Notes to effect a number of amendments to the Google Indenture under which each such series of Google Notes was issued and is governed. You may not consent to the proposed amendments to the Google Indenture without tendering your Google Notes in the appropriate exchange offer and you may not tender your Google Notes for exchange without consenting to the applicable proposed amendments.

The consummation of the exchange offers is subject to, and conditional upon, the satisfaction or, where permitted, waiver of the conditions discussed under “—Conditions to the Exchange Offers and Consent Solicitations,” including, among other things, the receipt of the Requisite Consents. We may, at our option and in our sole discretion, waive any such conditions except the condition that the registration statement of which this prospectus forms a part has been declared effective by the Commission. All conditions to the exchange offers must be satisfied or, where permitted, waived, at or by the Expiration Date. For a description of the proposed amendments, see “The Proposed Amendments.” The proposed amendments may become effective with respect to any series of Google Notes for which the Requisite Consents are received or the Requisite Consent condition has been waived, if necessary.

If the Requisite Consents are received and accepted and the other conditions to the exchange offers have been satisfied or, where permitted, waived, then on or after the Expiration Date, Google and the trustee under the Google Indenture will execute a supplemental indenture setting forth the proposed amendments and such supplemental indenture will become effective upon its execution and delivery. However, the proposed amendments to the Google Indenture with respect to such series will not become operative until after the issuance of the Alphabet Notes of the applicable series and the payment of the cash consideration payable pursuant to the relevant exchange offer on the Settlement Date. Each non-consenting holder of a series of Google Notes as to which the exchange offer has been consummated will be bound by the supplemental indenture.

Conditions to the Exchange Offers and Consent Solicitations

The consummation of the exchange offers is subject to, and conditional upon, the satisfaction or, where permitted, waiver of the following conditions: (a) the receipt of the Requisite Consents described above under “—Terms of the Exchange Offers and Consent Solicitations,” (b) the registration statement of which this prospectus forms a part has been declared effective by the Commission and (c) the following statements being true:

		1	  	In our reasonable judgment, no action or event has occurred or been threatened (including a default under an agreement, indenture or other instrument or obligation to which we or one of our affiliates is a party or by which we or one of our affiliates is bound), no action is pending, no action has been taken, and no statute, rule, regulation, judgment, order, stay, decree or injunction has been promulgated, enacted, entered, enforced or deemed applicable to the exchange offers, the exchange of Google Notes under an exchange offer, the consent solicitations or the proposed amendments, by or before any court or governmental, regulatory or administrative agency, authority or tribunal, which either:																			
																							
																							
		• 	  																				
challenges the exchange offers, the exchange of Google Notes under an exchange offer, the consent solicitations or the proposed amendments or might, directly or indirectly, prohibit, prevent, restrict or delay consummation of, or might otherwise adversely affect in any material manner, the exchange offers, the exchange of Google Notes under an exchange offer, the consent

26

Table of Contents

solicitations or the proposed amendments; or in our reasonable judgment, could materially affect the business, condition (financial or otherwise), income, operations, properties, assets, liabilities or prospects of Alphabet and its subsidiaries, taken as a whole, or materially impair the contemplated benefits to Alphabet of the exchange offers, the exchange of Google Notes under an exchange offer, the related consent solicitation or the proposed amendments, or might be material to holders of Google Notes in deciding whether to accept the exchange offers and give their consents;

		2	  	None of the following has occurred:																			
																							
																							
		• 	  	any general suspension of or limitation on trading in securities on any United States national securities exchange or in the over-the-counter market (whether or not mandatory);																			
																							
																							
		• 	  	a declaration of a banking moratorium or any suspension of payments in respect of banks by federal or state authorities in the United States (whether or not mandatory);																			
																							
																							
		• 	  	any material adverse change in United States securities or financial markets generally; or																			
																							
																							
		• 	  	in the case of any of the foregoing existing at the time of the commencement of the exchange offers, a material acceleration or worsening thereof; and																			
																							
																							
		3	  	The trustee under the Google Indenture has not objected in any respect to, or taken any action that could in our reasonable judgment adversely affect the consummation of, any of the exchange offers, the exchange of Google Notes under an exchange offer, the consent solicitations, our ability to effect the proposed amendments or the execution and delivery of a supplemental indenture reflecting the proposed amendments, nor has the trustee taken any action that challenges the validity or effectiveness of the procedures used by us in soliciting consents (including the form thereof) or in making the exchange offers, the exchange of the Google Notes under an exchange offer or the consent solicitations.																			
All of these conditions are for our sole benefit and, except as set forth below, may be waived by us, in whole or in part in our sole discretion. Any determination made by us concerning these events, developments or circumstances shall be conclusive and binding, subject to the rights of the holders of the Google Notes to challenge such determination in a court of competent jurisdiction. We may, at our option and in our sole discretion, waive any such conditions except the condition that the registration statement of which this prospectus forms a part has been declared effective by the Commission. All conditions to the exchange offers must be satisfied or, where permitted, waived, at or by the Expiration Date.

Expiration Date; Extensions; Amendments

The Expiration Date for the exchange offers shall be the time immediately following 11:59 p.m., New York City time, on April 25, 2016, subject to our right to extend that date and time in our sole discretion, in which case the Expiration Date shall be the latest date and time to which we have extended the relevant exchange offer.

Subject to applicable law, we expressly reserve the right, in our sole discretion, with respect to the exchange offers and consent solicitations for each series of Google Notes to:

		1	  	delay accepting any Google Notes, to extend the exchange offers and consent solicitations or to terminate the exchange offers and consent solicitations and not accept any Google Notes; and																			
																							
																							
		2	  	amend, modify or waive in part or whole, at any time prior to the expiration of the exchange offers, the terms of the exchange offers and consent solicitations in any respect, including waiver of any conditions to consummation of the exchange offers and consent solicitations (except the condition that the registration statement of which this prospectus forms a part has been declared effective by the Commission).																			
If we exercise any such right, we will give written notice thereof to the exchange agent and will make a public announcement thereof as promptly as practicable. Without limiting the manner in which we may choose to

27

Table of Contents

make a public announcement of any extension, amendment or termination of the exchange offers and consent solicitations, we will not be obligated to publish, advertise or otherwise communicate any such public announcement, other than by making a timely press release to any appropriate news agency.

The minimum period during which the exchange offers and consent solicitations will remain open following material changes in the terms of the exchange offers and consent solicitations or in the information concerning the exchange offers and consent solicitations will depend upon the facts and circumstances of such change, including the relative materiality of the changes.

In accordance with Rule 14e-1 under the Exchange Act, if we elect to change the consideration offered or the percentage of Google Notes sought, the relevant exchange offers and consent solicitations will remain open for a minimum ten business-day period following the date that the notice of such change is first published or sent to holders of the Google Notes. We may choose to extend any of the exchange offers, in our sole discretion, by giving notice of such extension at any time on or prior to 9:00 a.m., New York City time, on the business day immediately following the previously scheduled Expiration Date.

Subject to applicable law, each exchange offer and each consent solicitation is being made independently of the other exchange offers and consent solicitations, and we reserve the right to withdraw, amend, or, if a condition to the exchange offer is not satisfied or, where permitted, waived, terminate each exchange offer and each consent solicitation independently of the other exchange offers and consent solicitations at any time and from time to time, as described in this prospectus.

Effect of Tender

Any tender of a Google Note by a noteholder that is not validly withdrawn prior to the Expiration Date will constitute a binding agreement between that holder and Alphabet and a consent to the proposed amendments, upon the terms and subject to the conditions of the relevant exchange offer and the letter of transmittal and consent, which agreement will be governed by, and construed in accordance with, the laws of the State of New York. The acceptance of the exchange offers by a tendering holder of Google Notes will constitute the agreement by that holder to deliver good and marketable title to the tendered Google Notes, free and clear of all liens, charges, claims, encumbrances, interests and restrictions of any kind.

If the proposed amendments to the Google Indenture have been adopted with respect to a series of Google Notes, the amendments will apply to all such Google Notes that are not acquired in the exchange offers, even though the holders of those Google Notes did not consent to the proposed amendments. Thereafter, all such Google Notes will be governed by the Google Indenture as amended by the proposed amendments, which will have less restrictive terms and afford reduced protections to the holders of those securities compared to those currently in the Google Indenture. In particular, holders of the Google Notes under the amended Google Indenture will no longer receive annual, quarterly and other reports from Google, and will no longer be entitled to the benefits of various covenants, including the merger covenant, and other provisions. See “Risk Factors—Risks Related to the Exchange Offers and the Consent Solicitations—The proposed amendments to the Google Indenture will afford reduced protection to remaining holders of Google Notes.”

Absence of Dissenters’ Rights

Holders of the Google Notes do not have any appraisal or dissenters’ rights under New York law, the law governing the Google Indenture, or under the terms of the Google Indenture in connection with the exchange offers and consent solicitations.

Procedures for Tendering and Consenting

If you hold Google Notes and wish to have those notes exchanged for Alphabet Notes and the cash consideration, you must validly tender (or cause the valid tender of) your Google Notes using the procedures

28

Table of Contents

described in this prospectus and in the accompanying letter of transmittal and consent. The proper tender of Google Notes will constitute a consent to the proposed amendments to the Google Indenture and the Google Notes in respect of such tendered Google Notes.

The procedures by which you may tender or cause to be tendered Google Notes will depend upon the manner in which you hold the Google Notes, as described below. No alternative, conditional or contingent tenders will be accepted.

Google Notes Held with DTC

Pursuant to authority granted by DTC, if you are a DTC participant that has Google Notes credited to your DTC account and thereby held of record by DTC’s nominee, you may directly tender your Google Notes and deliver a consent as if you were the record holder. Accordingly, references herein to record holders include DTC participants with Google Notes credited to their accounts. Within two business days after the date of this prospectus, the exchange agent will establish accounts with respect to the Google Notes at DTC for purposes of the exchange offers.

Tender of Google Notes (and corresponding consents thereto) will be accepted only in minimum denominations of $2,000 and integral multiples of $1,000 in excess thereof. No alternative, conditional or contingent tenders will be accepted. Holders who tender less than all of their Google Notes must continue to hold Google Notes in the minimum authorized denomination of $2,000 principal amount.

Any DTC participant may tender Google Notes and thereby deliver a consent to the proposed amendments to the Google Indenture by effecting a book-entry transfer of the Google Notes to be tendered in the exchange offers into the account of the exchange agent at DTC and either (1) electronically transmitting its acceptance of the exchange offers through DTC’s ATOP procedures for transfer; or (2) completing and signing the letter of transmittal and consent according to the instructions contained therein and delivering it, together with any signature guarantees and other required documents, to the exchange agent at its address on the back cover page of this prospectus, in either case before the Expiration Date of the exchange offers.

If ATOP procedures are followed, DTC will verify each acceptance transmitted to it, execute a book-entry delivery to the exchange agent’s account at DTC and send an agent’s message to the exchange agent. An “agent’s message” is a message, transmitted by DTC to and received by the exchange agent and forming part of a book-entry confirmation, which states that DTC has received an express acknowledgement from a DTC participant tendering Google Notes that the participant has received and agrees to be bound by the terms of the terms and conditions of the exchange offers and consent solicitations as set forth in this prospectus and the letter of transmittal and consent and that Alphabet and Google may enforce the agreement against the participant. DTC participants following this procedure should allow sufficient time for completion of the ATOP procedures prior to the Expiration Date of the exchange offers.

The letter of transmittal and consent (or facsimile thereof), with any required signature guarantees, or (in the case of book-entry transfer) an agent’s message in lieu of the letter of transmittal and consent, and any other required documents, must be transmitted to and received by the exchange agent prior to the Expiration Date of the exchange offers at its address set forth on the back cover page of this prospectus. Delivery of these documents to DTC does not constitute delivery to the exchange agent.

Google Notes Held Through a Nominee

Currently, all of the Google Notes are held in book-entry form and can only be tendered by following the procedures described above under “—Google Notes Held with DTC.” However, if you are a beneficial owner of Google Notes that are subsequently issued in certificated form and that are held of record by a broker, dealer,

29

Table of Contents

commercial bank, trust company or other nominee, and you wish to tender Google Notes in the exchange offers, you should contact the record holder promptly and instruct the record holder to tender the Google Notes and thereby deliver a consent on your behalf using one of the procedures described above.

Beneficial owners should be aware that their broker, dealer, commercial bank, trust company or other nominee may establish its own earlier deadlines for participation in the exchange offers and consent solicitations. Accordingly, beneficial owners wishing to participate in the exchange offers and consent solicitations should contact their broker, dealer, commercial bank, trust company or other nominee as soon as possible in order to determine the times by which such owner must take action in order to participate in the exchange offers and consent solicitations.

Letter of Transmittal and Consent

Subject to and effective upon the acceptance for exchange and issuance of Alphabet Notes and the payment of the cash consideration, in exchange for Google Notes tendered by a letter of transmittal and consent or agent’s message in accordance with the terms and subject to the conditions set forth in this prospectus, by executing and delivering a letter of transmittal and consent (or agreeing to the terms of a letter of transmittal and consent pursuant to an agent’s message) a tendering holder of Google Notes, among other things:

		• 	  	irrevocably sells, assigns and transfers to or upon the order of Alphabet all right, title and interest in and to, any and all claims in respect of or arising or having arisen as a result of the holder’s status as a holder of, the Google Notes tendered thereby;																			
																							
																							
		• 	  	represents and warrants that the Google Notes tendered were owned as of the date of tender, free and clear of all liens, charges, claims, encumbrances, interests and restrictions of any kind;																			
																							
																							
		• 	  	consents to the proposed amendments described below under “The Proposed Amendments” with respect to the series of Google Notes tendered; and																			
																							
																							
		• 	  	irrevocably constitutes and appoints the exchange agent the true and lawful agent and attorney-in-fact of the holder with respect to any tendered Google Notes (with full knowledge that the exchange agent also acts as the agent of Alphabet), with full powers of substitution and revocation (such power of attorney being deemed to be an irrevocable power coupled with an interest) to cause the Google Notes tendered to be assigned, transferred and exchanged in the exchange offers.																			
Proper Execution and Delivery of Letter of Transmittal and Consent

If you wish to participate in the exchange offers and consent solicitations, delivery of your Google Notes, signature guarantees and other required documents are your responsibility. Delivery is not complete until the required items are actually received by the exchange agent. If you mail these items, we recommend that you (1) use registered mail properly insured with return receipt requested and (2) mail the required items in sufficient time to ensure timely delivery.

Except as otherwise provided below, all signatures on the letter of transmittal and consent or a notice of withdrawal must be guaranteed by a recognized participant in the Securities Transfer Agents Medallion Program, the NYSE Medallion Signature Program or the Stock Exchange Medallion Program. Signatures on the letter of transmittal and consent need not be guaranteed if:

		• 	  	the letter of transmittal and consent is signed by a DTC participant whose name appears on a security position listing of DTC as the owner of the Google Notes and the portion entitled “Special Payment Instructions” on the letter of transmittal and consent has not been completed; or																			
																							
																							
		• 	  	the Google Notes are tendered for the account of an eligible institution. See Instruction 4 in the letter of transmittal and consent.																			
30

Table of Contents

Withdrawal of Tenders and Revocation of Corresponding Consents

Tenders of Google Notes in connection with any of the exchange offers may be withdrawn at any time prior to the Expiration Date of the particular exchange offer. Tenders of Google Notes may not be withdrawn at any time thereafter. Consents to the proposed amendments in connection with the consent solicitations may be revoked at any time prior to the Expiration Date of the particular consent solicitation by withdrawing the tender of Google Notes, but may not be withdrawn at any time thereafter. A valid withdrawal of tendered Google Notes prior to the Expiration Date will be deemed to be a concurrent revocation of the related consent to the proposed amendments to the Google Indenture.

Beneficial owners desiring to withdraw Google Notes previously tendered through the ATOP procedures should contact the DTC participant through which they hold their Google Notes. In order to withdraw Google Notes previously tendered, a DTC participant may, prior to the Expiration Date of the exchange offers, withdraw its instruction previously transmitted through ATOP by (1) withdrawing its acceptance through ATOP, or (2) delivering to the exchange agent by mail, hand delivery or facsimile transmission, notice of withdrawal of such instruction. The notice of withdrawal must contain the name and number of the DTC participant, each series of Google Notes subject to the notice and the principal amount of each series of Google Notes subject to the notice. Withdrawal of a prior instruction will be effective upon receipt of such notice of withdrawal by the exchange agent. All signatures on a notice of withdrawal must be guaranteed by a recognized participant in the Securities Transfer Agents Medallion Program, the NYSE Medallion Signature Program or the Stock Exchange Medallion Program, except that signatures on the notice of withdrawal need not be guaranteed if the Google Notes being withdrawn are held for the account of an eligible institution. A withdrawal of an instruction must be executed by a DTC participant in the same manner as such DTC participant’s name appears on its transmission through ATOP to which the withdrawal relates. A DTC participant may withdraw a tender only if the withdrawal complies with the provisions described in this section.

If you are a beneficial owner of Google Notes issued in certificated form and have tendered these notes (but not through DTC) and you wish to withdraw your tendered notes, you should contact the exchange agent for instructions.

Withdrawals of tenders of Google Notes may not be rescinded and any Google Notes withdrawn will thereafter be deemed not validly tendered for purposes of the exchange offers. Properly withdrawn Google Notes, however, may be re-tendered by following the procedures described above at any time prior to the Expiration Date of the applicable exchange offer.

Miscellaneous

All questions as to the validity, form, eligibility (including time of receipt) and acceptance for exchange of any tender or withdrawal of Google Notes in connection with the exchange offers will be determined by us, in our sole discretion, and our determination will be final and binding. We reserve the absolute right to reject any or all tenders or withdrawals not in proper form or the acceptance for exchange of which may, in the opinion of our counsel, be unlawful. We also reserve the absolute right to waive any defect or irregularity in the tender or withdrawal of any Google Notes in the exchange offers, and our interpretation of the terms and conditions of the exchange offers (including the instructions in the letter of transmittal and consent) will be final and binding on all parties. None of Alphabet, Google, the dealer managers, the exchange agent, the information agent or the trustee under the Google Indenture and the Alphabet Indenture, or any other person will be under any duty to give notification of any defects or irregularities in tenders or withdrawals or incur any liability for failure to give any such notification.

Tenders or withdrawals of Google Notes involving any irregularities will not be deemed to have been made until such irregularities have been cured or waived. Google Notes received by the exchange agent in connection with any exchange offer that are not validly tendered or withdrawn and as to which the irregularities have not been cured or waived will be returned by the exchange agent to (i) you by mail if they were tendered or

31

Table of Contents

withdrawn in certificated form or (ii) if they were tendered or withdrawn through the ATOP procedures, to the DTC participant who delivered such Google Notes by crediting an account maintained at DTC designated by such DTC participant, in either case promptly after the Expiration Date of the applicable exchange offer or the withdrawal or termination of the applicable exchange offer.

We may also in the future seek to acquire untendered Google Notes in open market or privately-negotiated transactions, through subsequent exchange offers or otherwise. The terms of any of those purchases or offers could differ from the terms of these exchange offers.

Acceptance of Google Notes for Exchange; Alphabet Notes; Effectiveness of Proposed Amendments

Assuming the conditions to the exchange offers are satisfied or, where permitted, waived, we will issue the Alphabet Notes in book-entry form and pay the cash consideration in connection with the exchange offers promptly on the Settlement Date in exchange for Google Notes that are properly tendered (and not validly withdrawn) before the Expiration Date and accepted for exchange.

We will be deemed to have accepted validly tendered Google Notes (and will be deemed to have accepted validly delivered consents to the proposed amendments for the Google Indenture) if and when we have given oral or written notice thereof to the exchange agent. Subject to the terms and conditions of the exchange offers, delivery of Alphabet Notes and payment of the cash consideration in connection with the exchange of Google Notes accepted by us will be made by the exchange agent on the Settlement Date, upon receipt of such notice. The exchange agent will act as agent for participating holders of the Google Notes for the purpose of receiving consents and Google Notes from, and transmitting Alphabet Notes and the cash consideration to, such holders. If any tendered Google Notes are not accepted for any reason set forth in the terms and conditions of the exchange offers or if Google Notes are withdrawn prior to the Expiration Date of the exchange offers, such unaccepted or withdrawn Google Notes will be returned without expense to the tendering holder promptly after the expiration or termination of the exchange offers.

In no event will interest accrue or be payable by reason of any delay on the part of the exchange agent in making delivery or payment to the holders entitled thereto or any delay in the allocation or crediting of securities or monies received by DTC to participants in DTC or in the allocation or crediting of securities or monies received by participants to beneficial owners and in no event will Alphabet be liable for interest or damages in relation to any delay or failure of payment to be remitted to any holder.

The supplemental indenture containing the proposed amendments will become effective with respect to a series upon its execution and delivery. However, the proposed amendments to the Google Indenture with respect to each series will not become operative until after the issuance of the Alphabet Notes and the payment of the cash consideration payable pursuant to the relevant exchange offer on the Settlement Date.

Transfer Taxes

We will pay all transfer taxes, if any, applicable to the transfer and sale of Google Notes to us in the exchange offers. If transfer taxes are imposed for any other reason, the amount of those transfer taxes, whether imposed on the registered holders or any other persons, will be payable by the tendering holder. If satisfactory evidence of payment of or exemption from those transfer taxes is not submitted with the letter of transmittal and consent, the amount of those transfer taxes will be billed directly to the tendering holder and/or withheld from any payments due with respect to the Google Notes tendered by such holder.

U.S. Federal Backup Withholding

Under current U.S. federal income tax law, the exchange agent (as payer) may be required under the backup withholding rules to withhold a portion of any payments made to certain holders of Google Notes (or other payees) pursuant to the exchange offers and consent solicitations. To avoid such backup withholding, each

32

Table of Contents

tendering holder of Google Notes must timely provide the exchange agent with such holder’s correct taxpayer identification number (“TIN”) on Internal Revenue Service (“IRS”) Form W-9 (available from the IRS by calling 1-800-TAX-FORM (1-800-829-3676) or from the IRS website at http://www.irs.gov), or otherwise establish a basis for exemption from backup withholding (currently imposed at a rate of 28%). If a holder is an individual who is a U.S. citizen or resident, the TIN is generally his or her social security number. If the exchange agent is not provided with the correct TIN, a penalty may be imposed by the IRS and/or payments made with respect to Google Notes exchanged pursuant to the exchange offers and consent solicitations may be subject to backup withholding. Failure to comply truthfully with the backup withholding requirements, if done willfully, may also result in the imposition of criminal fines and penalties. See IRS Form W-9 for additional information. Certain holders (including, among others, certain foreign persons) are exempt from these backup withholding requirements. Exempt holders (other than foreign holders) should furnish their TIN, provide the applicable codes in the box labeled “Exemptions,” and sign, date and send the IRS Form W-9 to the exchange agent. Foreign holders may qualify as exempt recipients by submitting to the exchange agent a properly completed IRS Form W-8BEN or W-8BEN-E (or other applicable form), signed under penalties of perjury, attesting that the holder is not a U.S. person as defined in the Internal Revenue Code of 1986, as amended (“the Code”). The applicable IRS Form W-8 can be obtained from the IRS or from the exchange agent.

If backup withholding applies, the exchange agent is required to withhold on any payments made to the tendering holders (or other payees). Backup withholding is not an additional tax. A holder subject to the backup withholding rules will be allowed a credit of the amount withheld against such holder’s U.S. federal income tax liability, and, if backup withholding results in an overpayment of tax, the holder may be entitled to a refund, provided the requisite information is correctly furnished to the IRS in a timely manner.

Each of Alphabet and Google reserves the right in its sole discretion to take all necessary or appropriate measures to comply with its respective obligations regarding backup withholding.

Exchange Agent

D.F. King & Co., Inc. has been appointed as the exchange agent for the exchange offers and consent solicitations. Letters of transmittal and consent and all correspondence in connection with the exchange offers should be sent or delivered by each holder of Google Notes, or a beneficial owner’s custodian bank, depositary, broker, trust company or other nominee, to the exchange agent at the address and telephone numbers set forth on the back cover page of this prospectus. We will pay the exchange agent reasonable and customary fees for its services and will reimburse it for its reasonable, out-of-pocket expenses in connection therewith.

Information Agent

D.F. King & Co., Inc. has been appointed as the information agent for the exchange offers and the consent solicitations, and will receive customary compensation for its services. Questions concerning tender procedures and requests for additional copies of this prospectus or the letter of transmittal and consent should be directed to the information agent at the address and telephone numbers set forth on the back cover page of this prospectus. Holders of any Google Notes issued in certificated form and that are held of record by a custodian bank, depositary, broker, trust company or other nominee may also contact such record holder for assistance concerning the exchange offers.

Dealer Managers

We have retained Morgan Stanley & Co. LLC, Citigroup Global Markets Inc., J.P. Morgan Securities LLC, Merrill Lynch, Pierce, Fenner & Smith Incorporated and Wells Fargo Securities, LLC to act as dealer managers in connection with the exchange offers and consent solicitations and will pay the dealer managers a customary fee as compensation for their services. We will also reimburse the dealer managers for certain expenses. The obligations of the dealer managers to perform this function are subject to certain conditions. We have agreed to

33

Table of Contents

indemnify the dealer managers against certain liabilities, including liabilities under the federal securities laws. Questions regarding the terms of the exchange offers or the consent solicitations may be directed to the dealer managers at their respective addresses and telephone numbers set forth on the back cover page of this prospectus.

The dealer managers and their respective affiliates are full service financial institutions engaged in various activities, which may include sales and trading, commercial and investment banking, advisory, investment management, investment research, principal investment, hedging, market making, brokerage and other financial and non-financial activities and services. The dealer managers and their respective affiliates have provided, and may in the future provide, a variety of these services to us and to persons and entities with relationships with us, for which they have received or will receive customary fees and expenses.

In the ordinary course of their various business activities, the dealer managers and their respective affiliates, officers, directors and employees may purchase, sell or hold a broad array of investments and actively traded securities, derivatives, loans, commodities, currencies, credit default swaps and other financial instruments for their own accounts and for the accounts of their customers, and such investment and trading activities may involve or relate to assets, securities and/or instruments of us (directly, as collateral securing other obligations or otherwise) and/or persons and entities with relationships with us. The dealer managers and their respective affiliates may also communicate independent investment recommendations, market color or trading ideas and/or publish or express independent research views in respect of such assets, securities or instruments and may at any time hold, or recommend to clients that they should acquire, long and/or short positions in such assets, securities and instruments.

In the ordinary course of their respective businesses, the dealer managers or their respective affiliates may at any time hold long or short positions, and may trade for their own accounts or the accounts of customers, in securities of the Company and/or Google, including the Google Notes, and, to the extent that the dealer managers or their respective affiliates own Google Notes during the exchange offers and consent solicitations, they may tender such Google Notes pursuant to the terms of the exchange offers and consent solicitations.

Other Fees and Expenses

The expenses of soliciting tenders and consents with respect to the Google Notes will be borne by us. The principal solicitations are being made by mail; however, additional solicitations may be made by facsimile transmission, telephone or in person by the dealer managers and the information agent and exchange agent, as well as by officers and other employees of Alphabet and its affiliates.

Tendering holders of Google Notes will not be required to pay any fee or commission to the dealer managers. However, if a tendering holder handles the transaction through its broker, dealer, commercial bank, trust company or other nominee, that holder may be required to pay brokerage fees or commissions.

34

Table of Contents

DESCRIPTION OF DIFFERENCES BETWEEN THE GOOGLE NOTES AND THE ALPHABET NOTES

There are no differences between the material terms of the Alphabet Indenture and the Google Indenture (as currently constituted and without giving effect to the proposed amendments following the consent solicitations, as described under “The Proposed Amendments”). The Alphabet Notes issued in the applicable exchange offers will be governed by the Alphabet Indenture. Except for Google’s 2.125% Notes due 2016, which mature on May 19, 2016, the Google Notes represent, as of the date of this prospectus, the only debt securities issued and currently outstanding under the Google Indenture.

This section is qualified in its entirety by reference to the Google Indenture and the Alphabet Indenture. Copies of those indentures and the note certificates are filed as exhibits to the registration statement of which this prospectus forms a part and are also available from the information agent upon request.

35

Table of Contents

THE PROPOSED AMENDMENTS

We are soliciting the consent of the holders of Google Notes to eliminate substantially all of the restrictive covenants in the Google Indenture, including the merger covenant and the reporting covenant and make certain conforming changes to the Google Indenture to reflect the proposed amendments. If the proposed amendments described below are adopted with respect to any series of Google Notes, the amendments will apply to all Google Notes of that series not acquired in the applicable exchange offer. Thereafter, all such Google Notes will be governed by the Google Indenture as amended by the proposed amendments, which will have less restrictive terms and afford reduced protections to the holders of those securities compared to those currently in the Google Indenture. See “Risk Factors—Risks Related to the Exchange Offers and the Consent Solicitations—The proposed amendments to the Google Indenture will afford reduced protection to remaining holders of Google Notes.”

The descriptions below of the provisions of the Google Indenture and note certificates to be eliminated or modified do not purport to be complete and are qualified in their entirety by reference to the Google Indenture, the applicable note certificate and the form of supplemental indenture to the Google Indenture that contains the proposed amendments. A copy of the form of supplemental indenture is attached as an exhibit to the registration statement of which this prospectus forms a part.

The proposed amendments for each series of Google Notes constitute a single proposal, and a consenting holder must consent to the proposed amendments in their entirety and may not consent selectively with respect to only certain of the proposed amendments.

Pursuant to the Google Indenture and related supplemental indenture for each series of Google Notes, the proposed amendments require the consent of the holders of a majority in aggregate principal amount of the outstanding Google Notes of such series affected by the supplemental indenture. Any Google Notes held by Google or any person directly or indirectly controlling or controlled by or under direct or indirect common control with Google (including us) are not considered to be “outstanding” for this purpose.

As of the date of this prospectus, the aggregate principal amount outstanding with respect to each series of Google Notes is:

Series of Google Notes Principal Amount Outstanding

3.625% Notes due 2021 $ 1000000000

3.375% Notes due 2024 $ 1000000000

Total $ 2000000000

The valid tender of a holder’s Google Notes will constitute the consent of the tendering holder to the proposed amendments in their entirety.

If the Requisite Consents with respect to a series of Google Notes under the Google Indenture have been received prior to the Expiration Date, assuming all other conditions of the exchange offers and consent solicitations are satisfied or, where permitted, waived, as applicable, all of the sections or provisions listed below under the Google Indenture for that series of Google Notes will be deleted:

		• 	  	Section 6.04 of the Google Indenture—Merger, Consolidation and Sale of Assets																			
																							
																							
		• 	  	Section 10.02 of the Google Indenture—Reports by the Company																			
Company Reporting Covenant. Although the proposed amendments would delete Section 10.02 of the Google Indenture—Reports by the Company, Google has ceased reporting pursuant to Section 13 or 15(d) of the Exchange Act in any case and, accordingly, it will not file periodic reports or information with the SEC, the trustee or any holders of the Google Notes.

36

Table of Contents

Conforming Changes, etc. The proposed amendments would amend the Google Indenture to make certain conforming or other changes to the Google Indenture, including modification or deletion of certain definitions and cross-references.

Effectiveness of the Supplemental Indenture and Proposed Amendments

If we receive and accept the Requisite Consents with respect to a series of Google Notes prior to the Expiration Date, then on or after the Expiration Date, the supplemental indenture with respect to such series for the proposed amendments will be duly executed and delivered by Google and the trustee and such supplemental indenture for such series will become effective upon its execution and delivery. However, the proposed amendments to the Google Indenture with respect to such series will not become operative until after the issuance of the Alphabet Notes of the relevant series and the payment of the cash consideration payable pursuant to the applicable exchange offer on the Settlement Date.

37

Table of Contents

DESCRIPTION OF ALPHABET NOTES

References in this section to “Alphabet,” “we,” “us” and “our” are to Alphabet Inc., unless otherwise stated or the context so requires.

The New 2021 Notes and New 2024 Notes (collectively, the “New Notes”) will be issued by Alphabet under the Alphabet Indenture, in connection with the exchange offers for the existing notes of Google (the “Google Notes”) described elsewhere in this prospectus (the “Exchange Offers”). The terms of the New Notes will include those stated in the Alphabet Indenture and those made part of the Alphabet Indenture by reference to the Trust Indenture Act.

This description is a summary of the material provisions of the New Notes and the Alphabet Indenture. This description does not restate those agreements and instruments in their entirety. You should refer to the applicable New Notes and the Alphabet Indenture, copies of which are available as set forth in the section of this prospectus entitled “Where You Can Find More Information.”

Principal, Maturity and Interest

The New 2021 Notes will initially be limited to $1,000,000,000 aggregate principal amount and the New 2024 Notes will initially be limited to $1,000,000,000 aggregate principal amount. The New 2021 Notes will mature on May 19, 2021 and the New 2024 Notes will mature on February 25, 2024. We will issue the New Notes in denominations of $2,000 and integral multiples of $1,000 in excess thereof.

Interest on the New 2021 Notes will accrue at the annual rate of 3.625% and interest on the New 2024 Notes will accrue at the annual rate of 3.375%. Interest on the New 2021 Notes will accrue from and including the most recent interest payment date to which interest has been paid or duly provided for on the existing 2021 Notes, or if no interest has been paid or duly provided for, from and including May 19, 2011, the date on which Google issued the existing 2021 Notes, and is payable on May 19 and November 19 each year, beginning on the next interest payment date following the closing of this offering. Interest on the New 2024 Notes will accrue from and including the most recent interest payment date to which interest has been paid or duly provided for on the existing 2024 Notes, or if no interest has been paid or duly provided for, from and including February 25, 2014, the date on which Google issued the existing 2024 Notes, and is payable on February 25 and August 25 each year, beginning on the next interest payment date following the closing of this offering. Interest on the New Notes will be computed on the basis of a 360-day year consisting of twelve 30-day months.

We will make each interest payment to the holders of record of the New 2021 Notes at the close of business on the May 1 or November 1 immediately preceding the relevant interest payment date. We will make each interest payment to the holders of record of the New 2024 Notes at the close of business on the February 10 or August 10 immediately preceding the relevant interest payment date.

Ranking

The New Notes will be unsecured general obligations of Alphabet and will rank equally with each other and with all other unsubordinated indebtedness of Alphabet from time to time outstanding. However, the New Notes will be structurally subordinated to the indebtedness and other liabilities of our subsidiaries (including any Google Notes not exchanged for Alphabet Notes and Google’s 2.125% Notes due 2016, which mature on May 19, 2016) and will be effectively subordinated to any secured indebtedness to the extent of the value of the assets securing such indebtedness. Claims of the creditors of our subsidiaries will generally have priority with respect to the assets and earnings of such subsidiaries over the claims of our creditors, including holders of the New Notes. Accordingly, the New Notes will be effectively subordinated to the claims of third-party creditors, including trade creditors and preferred stockholders, if any, of our subsidiaries.

38

Table of Contents

No Listing

The New Notes will not be listed on any national securities exchange or be quoted on any automated dealer quotation system.

Covenants

The Alphabet Indenture contains a provision that restricts our ability to consolidate with or merge into any other entity, or sell other than for cash or lease, all or substantially all our assets to another entity. See “—Merger, Consolidation and Sale of Assets.” The Alphabet Indenture contains no other restrictive covenants, including those that would afford holders of the New Notes protection in the event of a highly-leveraged transaction involving Alphabet or any of its affiliates or other events involving us that may adversely affect our creditworthiness or the value of the New Notes. The Alphabet Indenture also does not contain any covenants relating to total indebtedness of Alphabet or its subsidiaries (including Google), interest coverage, stock repurchases, recapitalizations, dividends and distributions to shareholders, current ratios or acquisitions and divestitures. The New Notes will not have the benefit of covenants that restrict the incurrence of secured indebtedness or relate to subsidiary guarantees, liens and sale leaseback transactions.

Further Issues

Alphabet may, without the consent of the holders of the New Notes of any series, issue additional notes having the same ranking and the same interest rate, maturity date and other terms as the New Notes of any series (except for issue date, public offering price and, if applicable, the date from which interest accrues and the first interest payment date). Any additional notes having such similar terms, together with the New Notes of the applicable series, will constitute a single series of debt securities under the Alphabet Indenture, and will vote together as one class on all matters with respect to such series of New Notes. Any additional notes will be issued under a separate CUSIP number unless: (i) the additional notes and the outstanding notes of the original series are treated as part of the same “issue” of debt instruments for U.S. federal income tax purposes; (ii) the additional notes are issued pursuant to a “qualified reopening” of the outstanding notes of the original series for U.S. federal income tax purposes; or (iii) the additional notes are, and the outstanding notes of the original series were, issued without original issue discount for U.S. federal income tax purposes.

Optional Redemption of New Notes

We may redeem each series of New Notes at our option, in whole or in part, at any time and from time to time. The redemption price will be equal to the greater of:

		• 	  	100% of the principal amount of the New Notes being redeemed on the redemption date; or																			
																							
																							
		• 	  	the sum of the present values of the remaining scheduled payments of principal and interest on the New Notes of that series being redeemed on that redemption date (not including the amount, if any, of accrued and unpaid interest to the date of redemption) discounted to the redemption date on a semi-annual basis (assuming a 360-day year consisting of 30-day months) at the Treasury Rate (as defined below) plus 10 basis points.																			
In each case, we will pay accrued and unpaid interest on the principal amount of the New Notes being redeemed to the date of redemption.

Notwithstanding the foregoing, installments of interest on the applicable New Notes that are due and payable on interest payment dates falling on or prior to a redemption date will be payable on the interest payment date to the registered holders as of the close of business on the relevant record date according to the applicable New Notes and the Alphabet Indenture.

39

Table of Contents

We will transmit notice of any redemption at least 30 days, but not more than 60 days, before the redemption date to each holder of record of New Notes to be redeemed at its registered address. Once notice of redemption is transmitted, the New Notes called for redemption will become due and payable on the redemption date at the applicable redemption price, plus accrued and unpaid interest applicable to such New Notes to the redemption date. From and after the redemption date, such New Notes will cease to bear interest (unless we fail to pay the redemption price (and accrued and unpaid interest) for the New Notes subject to redemption).

“Comparable Treasury Issue” means, for any series of New Notes, the United States Treasury security selected by an Independent Investment Banker as having a maturity comparable to the remaining term (“Remaining Life”) of the New Notes to be redeemed that would be utilized, at the time of selection and in accordance with customary financial practice, in pricing new issues of corporate debt securities of comparable maturity to the remaining term of such New Notes.

“Comparable Treasury Price” means, with respect to any redemption date and series of New Notes to be redeemed, (1) the average of the Reference Treasury Dealer Quotations for such redemption date, after excluding the highest and lowest Reference Treasury Dealer Quotations, or (2) if the Independent Investment Banker obtains fewer than four such Reference Treasury Dealer Quotations, the average of all such quotations.

“Independent Investment Banker” means one of the Reference Treasury Dealers appointed by us to act as the Independent Investment Banker from time to time.

“Reference Treasury Dealer” means (1) each of Citigroup Global Markets Inc., Goldman, Sachs & Co. and J.P. Morgan Securities LLC, and their respective successors, with respect to the New 2021 Notes, and each of Goldman, Sachs & Co., Merrill Lynch, Pierce, Fenner & Smith Incorporated and Morgan Stanley & Co. LLC, and their respective successors, with respect to the New 2024 Notes, unless any of them ceases to be a primary U.S. Government securities dealer in New York City (a “Primary Treasury Dealer”), in which case we will substitute another Primary Treasury Dealer and (2) any other Primary Treasury Dealer we select.

“Reference Treasury Dealer Quotation” means, with respect to each Reference Treasury Dealer and any redemption date, the average, as determined by the Independent Investment Banker, of the bid and asked prices for the applicable Comparable Treasury Issue (expressed in each case as a percentage of its principal amount) quoted in writing to the Independent Investment Banker by such Reference Treasury Dealer at 5:00 p.m., New York City time, on the third business day preceding such redemption date.

“Treasury Rate” means, with respect to any redemption date for any series of New Notes, the rate per year equal to: (1) the yield, under the heading which represents the average for the immediately preceding week, appearing in the most recently published statistical release designated “H.15(519)” or any successor publication which is published weekly by the Board of Governors of the Federal Reserve System and which establishes yields on actively traded United States Treasury securities adjusted to constant maturity under the caption “Treasury Constant Maturities,” for the maturity corresponding to the applicable Comparable Treasury Issue; provided that, if no maturity is within three months before or after the Remaining Life of the New Notes to be redeemed, yields for the two published maturities most closely corresponding to the applicable Comparable Treasury Issue will be determined and the Treasury Rate will be interpolated or extrapolated from those yields on a straight line basis, rounding to the nearest month; or (2) if such release (or any successor release) is not published during the week preceding the calculation date or does not contain such yields, the rate per year equal to the semiannual equivalent yield to maturity of the applicable Comparable Treasury Issue, calculated using a price for the applicable Comparable Treasury Issue (expressed as a percentage of its principal amount) equal to the related Comparable Treasury Price for such redemption date. The Treasury Rate will be calculated on the third business day preceding the redemption date. As used in the immediately preceding sentence and in the definition of “Reference Treasury Dealer Quotations” above, the term “business day” means any day that is not a Saturday, Sunday or other day on which commercial banks in New York City are authorized or obligated by law or executive order to close.

40

Table of Contents

On and after the redemption date, interest will cease to accrue on the New Notes or any portion of the New Notes called for redemption (unless we default in the payment of the redemption price and accrued and unpaid interest). On or before the redemption date, we will deposit with a paying agent (or the trustee) money sufficient to pay the redemption price of and accrued and unpaid interest on the New Notes to be redeemed on that date. If fewer than all of the New Notes of any series are to be redeemed, the New Notes to be redeemed shall be selected by DTC in accordance with its customary procedures, in the case of New Notes represented by a global security, or by the trustee by a method the trustee deems to be fair and appropriate, in the case of New Notes that are not represented by a global security.

The New Notes are not entitled to the benefit of a sinking fund.

Merger, Consolidation and Sale of Assets

We will not consolidate with or merge into any other entity, or sell other than for cash or lease, all or substantially all our assets to another entity, and no entity may consolidate with or merge into us, unless:

		(a) 	  	we will be the continuing entity in any merger or consolidation or the successor, transferee or lessee entity (if other than us) is a corporation organized and validly existing under the laws of any U.S. domestic jurisdiction and expressly assumes our obligations relating to the New Notes;																			
																							
																							
		(b) 	  	immediately after such consolidation, merger, sale or lease, there exists no Event of Default, and no event which, after notice or lapse of time or both, would become an Event of Default; and																			
																							
																							
		(c) 	  	other conditions described in the Alphabet Indenture are met.																			
Events of Default

Each of the following will constitute an Event of Default under the Alphabet Indenture with respect to the New Notes:

		• 	  	default for 30 days in the payment of any interest when due;																			
																							
																							
		• 	  	default in the payment of principal, or premium, if any, when due at maturity, upon redemption or otherwise;																			
																							
																							
		• 	  	default for 30 days in the payment of any sinking fund installment, if any, when due;																			
																							
																							
		• 	  	default in the performance, or breach, of any covenant or agreement in the Alphabet Indenture for 90 days after written notice; and																			
																							
																							
		• 	  	certain events of bankruptcy, insolvency or reorganization.																			
We are required to furnish the trustee annually with an officer’s certificate as to our compliance with all conditions and covenants under the Alphabet Indenture. The Alphabet Indenture provides that the trustee may withhold notice to you of any default, except in respect of the payment of the principal of, premium, if any, or interest on the New Notes, if it considers it in the interests of the holders of the New Notes to do so.

Effect of an Event of Default

If an Event of Default exists with respect to a series of New Notes (other than an event of default in the case of certain events of bankruptcy), the trustee or the holders of not less than 25% in aggregate principal amount of outstanding New Notes of that series may declare the principal amount of and all accrued but unpaid interest on all New Notes of that series to be due and payable immediately, by a notice in writing to us, and to the trustee if given by holders. Upon that declaration, the principal (or specified) amount will become immediately due and payable. However, at any time after a declaration of acceleration has been made, but before a judgment or decree for payment of the money due has been obtained, the Event of Default may, without further act, be deemed to

41

Table of Contents

have been waived and such declaration may, without further act, be deemed to have been rescinded and annulled subject to conditions specified in the Alphabet Indenture.

If an Event of Default in the case of certain events of bankruptcy, insolvency or reorganization exists, the principal amount of all debt securities outstanding under the Alphabet Indenture shall automatically, and without any declaration or other action on the part of the trustee or any holder of such outstanding New Notes, become immediately due and payable.

Other than its duties in case of a default, the trustee is not obligated to exercise any of its rights or powers under the Alphabet Indenture (other than the payment of any amounts on the New Notes furnished to it pursuant to the Alphabet Indenture) at the request, order or direction of any holders, unless the holders offer the trustee security or indemnity satisfactory to it. Holders of a majority in principal amount outstanding of any series of New Notes may, subject to certain limitations, direct the time, method and place of conducting any proceeding for any remedy available to the trustee, or exercising any trust or power conferred on the trustee, for such series of New Notes.

Legal Proceedings and Enforcement of Right to Payment

You will not have any right to institute any proceeding in connection with the Alphabet Indenture or for any remedy under the Alphabet Indenture, unless (i) you have previously given to the trustee written notice of a continuing event of default with respect to debt securities of that series, (ii) the holders of at least 25% in aggregate principal amount of the applicable series of the outstanding New Notes must have made written request to the trustee to institute that proceeding, (iii) there shall have been offered to the trustee security and indemnity satisfactory to the trustee, and (iv) the trustee, within 60 days following the receipt of that notice, must have failed to institute the proceeding. However, you will have an absolute and unconditional right to receive payment of the principal of, premium, if any, and interest on the New Notes on or after the due dates expressed in the New Notes and to institute a suit for the enforcement of that payment.

Modification of Alphabet Indenture

Under the Alphabet Indenture, we and the trustee may modify and amend the indenture with the consent of the holders of a majority in aggregate principal amount of the outstanding New Notes of each series affected by the modification. However, no modification or amendment may, without the consent of the holder of each outstanding New Note affected:

		• 	  	extend the stated maturity of the principal of, or any installment of interest on, any outstanding debt security;																			
																							
																							
		• 	  	reduce the principal amount of or the interest on or any premium payable upon the redemption of any outstanding debt security;																			
																							
																							
		• 	  	change the currency in which the principal amount of and premium, if any, or interest on any outstanding debt security is denominated or payable;																			
																							
																							
		• 	  	reduce the principal amount of an original issue discount security that would be due and payable upon a declaration of acceleration of the maturity thereof;																			
																							
																							
		• 	  	impair the right to institute suit for the enforcement of any payment on any outstanding debt security after the stated maturity or redemption date;																			
																							
																							
		• 	  	materially adversely affect the economic terms of any right to convert or exchange any outstanding debt security;																			
																							
																							
		• 	  	reduce the percentage of the holders of outstanding debt securities necessary to modify or amend the indenture or to waive compliance with certain provisions of the indenture or certain defaults and consequences of such defaults; or																			
42

Table of Contents • modify any of these provisions or any of the provisions relating to the waiver of certain past defaults or certain covenants, except to increase the required percentage to effect such action or to provide that certain other provisions may not be modified or waived without the consent of all of the holders of the debt securities affected.

Waiver of the Alphabet Indenture

The holders of a majority in aggregate principal amount of the outstanding New Notes of each series may, on behalf of the holders of all New Notes of that series, waive compliance by us with certain restrictive covenants of the Alphabet Indenture.

The holders of a majority in aggregate principal amount of the outstanding New Notes of each series may, on behalf of the holders of all New Notes of that series, generally waive any past default under the Alphabet Indenture and the consequences of such default. However, a default in the payment of the principal of, or premium, if any, or any interest on, the New Notes of that series or a default in respect of a covenant or provision of the Alphabet Indenture that cannot be modified or amended without the consent of the holder of each outstanding New Note affected cannot be so waived.

Defeasance and Covenant Defeasance

The Alphabet Indenture provides that we may discharge all of our obligations with respect to any series of the New Notes at any time, and that we may also be released from our obligations under certain covenants and from certain other obligations, including obligations imposed by a company order or supplemental indenture with respect to that series, if any, and elect not to comply with those sections and obligations without creating an event of default. Discharge under the first procedure is called “defeasance” and under the second procedure is called “covenant defeasance.”

Defeasance or covenant defeasance may be effected only if:

		• 	  	we irrevocably deposit with the trustee money or U.S. government obligations or a combination thereof, as trust funds in an amount sufficient to pay and discharge each installment of principal of, premium, if any, and interest on, all outstanding New Notes of that series;																			
																							
																							
		• 	  	no event of default under the Alphabet Indenture has occurred and is continuing on the date of such deposit, other than an event of default resulting from the borrowing of funds and the grant of any related liens to be applied to such deposit; and																			
																							
																							
		• 	  	we deliver to the trustee an opinion of counsel to the effect that (i) the beneficial owners of the New Notes of that series will not recognize income, gain or loss for U.S. federal income tax purposes as a result of the deposit, defeasance and discharge or as a result of the deposit and covenant defeasance and (ii) the deposit, defeasance and discharge or the deposit and covenant defeasance will not otherwise alter those beneficial owners’ U.S. federal income tax treatment of principal and interest payments on the New Notes of that series and, in the case of a defeasance, this opinion is accompanied by a ruling to that effect received from or published by the Internal Revenue Service.																			
Concerning the Trustee

The trustee under the Alphabet Indenture is The Bank of New York Mellon Trust Company, N.A. The trustee will have all the duties and responsibilities of an indenture trustee specified in the Trust Indenture Act with respect to the New Notes or any other debt securities issued under the Alphabet Indenture. The trustee is not required to expend or risk its own funds or otherwise incur financial liability in performing its duties or exercising its rights and powers if it reasonably believes that it is not reasonably assured of repayment or adequate indemnity.

43

Table of Contents

Governing Law

The Alphabet Indenture and the New Notes are governed by and construed in accordance with the laws of the State of New York.

Book-Entry System

The New Notes will be represented by one or more global notes that will be deposited with and registered in the name of DTC or its nominee for the accounts of its participants, including Euroclear Bank S.A./N.V. (“Euroclear”) as operator of the Euroclear System, and Clearstream Banking, S.A. (“Clearstream”). We will not issue certificated notes, except in the limited circumstances described below. Transfers of ownership interests in the global notes will be effected only through entries made on the books of DTC participants acting on behalf of beneficial owners. You will not receive written confirmation from DTC of your purchase. The direct or indirect participants through whom you purchased the New Notes should send you written confirmations providing details of your transactions, as well as periodic statements of your holdings. The direct and indirect participants are responsible for keeping accurate account of the holdings of their customers like you. The laws of some states require that certain purchasers of securities take physical delivery of such securities in definitive form. Such limits and such laws may impair the ability to own, transfer or pledge beneficial interests in the global notes.

You, as the beneficial owner of New Notes, will not receive certificates representing ownership interests in the global notes, except in the following limited circumstances: (1) DTC notifies us that it is unwilling or unable to continue as depositary or if DTC ceases to be eligible under the Alphabet Indenture and we do not appoint a successor depositary within 90 days; (2) we determine that the New Notes will no longer be represented by global notes and execute and deliver to the trustee an officer’s certificate to such effect; or (3) an event of default with respect to the New Notes will have occurred and be continuing. These certificated notes will be registered in such name or names as DTC will instruct the trustee. It is expected that such instructions may be based upon directions received by DTC from participants with respect to ownership of beneficial interests in global notes.

So long as DTC or its nominee is the registered owner and holder of the global notes, DTC or its nominee, as the case may be, will be considered the sole owner or holder of the New Notes represented by the global notes for all purposes under the Alphabet Indenture. Except as provided above, you, as the beneficial owner of interests in the global notes, will not be entitled to have New Notes registered in your name, will not receive or be entitled to receive physical delivery of New Notes in definitive form and will not be considered the owner or holder thereof under the Alphabet Indenture. Accordingly, you, as the beneficial owner, must rely on the procedures of DTC and, if you are not a DTC participant, on the procedures of the DTC participants through which you own your interest, to exercise any rights of a holder under the Alphabet Indenture.

Neither we, the trustee, nor any other agent of ours or agent of the trustee will have any responsibility or liability for any aspect of the records relating to, or payments made on account of, beneficial ownership interests in global notes or for maintaining, supervising or reviewing any records relating to the beneficial ownership interests. DTC’s practice is to credit the accounts of DTC’s direct participants with payment in amounts proportionate to their respective holdings in principal amount of beneficial interest in a security as shown on the records of DTC, unless DTC has reason to believe that it will not receive payment on the payment date. Beneficial owners may experience delays in receiving distributions on their New Notes because distributions will initially be made to DTC and they must be transferred through the chain of intermediaries to the beneficial owner’s account. Payments by DTC participants to you will be the responsibility of the DTC participant and not of DTC, the trustee or us. Accordingly, we and any paying agent will have no responsibility or liability for: any aspect of DTC’s records relating to, or payments made on account of, beneficial ownership interests in New Notes represented by a global securities certificate; any other aspect of the relationship between DTC and its participants or the relationship between those participants and the owners of beneficial interests in a global securities certificate held through those participants; or the maintenance, supervision or review of any of DTC’s records relating to those beneficial ownership interests.

44

Table of Contents

Conveyance of notices and other communications by DTC to direct participants, by direct participants to indirect participants, and by direct participants and indirect participants to beneficial owners will be governed by arrangements among them, subject to any statutory or regulatory requirements as may be in effect from time to time.

We have been informed that, under DTC’s existing practices, if we request any action of holders of New Notes, or an owner of a beneficial interest in a global security such as you desires to take any action which a holder of New Notes is entitled to take under the Alphabet Indenture, DTC would authorize the direct participants holding the relevant beneficial interests to take such action, and those direct participants and any indirect participants would authorize beneficial owners owning through those direct and indirect participants to take such action or would otherwise act upon the instructions of beneficial owners owning through them.

Clearstream and Euroclear have provided us with the following information and neither we nor the dealer managers take any responsibility for its accuracy:

Clearstream

Clearstream is incorporated under the laws of Luxembourg as a professional depositary. Clearstream holds securities for its participating organizations and facilitates the clearance and settlement of securities transactions between Clearstream participants through electronic book-entry changes in accounts of Clearstream participants, thereby eliminating the need for physical movement of certificates. Clearstream provides to Clearstream participants, among other things, services for safekeeping, administration, clearance and settlement of internationally traded securities and securities lending and borrowing. Clearstream interfaces with domestic securities markets in several countries. As a professional depositary, Clearstream is subject to regulation by the Luxembourg Commission for the Supervision of the Financial Sector (Commission de Surveillance du Secteur Financier). Clearstream participants include underwriters, securities brokers and dealers, banks, trust companies, clearing corporations and certain other organizations and may include the dealer managers. Clearstream’s U.S. participants are limited to securities brokers and dealers and banks. Indirect access to Clearstream is also available to others, such as banks, brokers, dealers and trust companies that clear through or maintain a custodial relationship with a Clearstream participant either directly or indirectly.

Distributions with respect to New Notes held beneficially through Clearstream will be credited to cash accounts of Clearstream participants in accordance with its rules and procedures, to the extent received by the U.S. depositary for Clearstream.

Euroclear

Euroclear was created in 1968 to hold securities for participants of Euroclear and to clear and settle transactions between Euroclear participants through simultaneous electronic book-entry delivery against payment, thereby eliminating the need for physical movement of certificates and any risk from lack of simultaneous transfers of securities and cash. Euroclear performs various other services, including securities lending and borrowing and interacts with domestic markets in several countries. Euroclear is operated by Euroclear Bank S.A/N.V. under contract with Euroclear plc, a U.K. corporation. All operations are conducted by the Euroclear operator, and all Euroclear securities clearance accounts and Euroclear cash accounts are accounts with the Euroclear operator, not Euroclear plc. Euroclear plc establishes policy for Euroclear on behalf of Euroclear participants. Euroclear participants include banks, including central banks, securities brokers and dealers and other professional financial intermediaries and may include the dealer managers. Indirect access to Euroclear is also available to other firms that clear through or maintain a custodial relationship with a Euroclear participant, either directly or indirectly.

The Euroclear operator is a Belgian bank. As such it is regulated by the Belgian Banking and Finance Commission.

45

Table of Contents

Securities clearance accounts and cash accounts with the Euroclear operator are governed by the Terms and Conditions Governing Use of Euroclear and the related Operating Procedures of the Euroclear System, and applicable Belgian law (collectively, the “Terms and Conditions”). The Terms and Conditions govern transfers of securities and cash within Euroclear, withdrawals of securities and cash from Euroclear, and receipts of payments with respect to securities in Euroclear. All securities in Euroclear are held on a fungible basis without attribution of specific certificates to specific clearance accounts. The Euroclear operator acts under the Terms and Conditions only on behalf of Euroclear participants and has no record of or relationship with persons holding through Euroclear participants.

Distributions with respect to New Notes held beneficially through Euroclear will be credited to the cash accounts of Euroclear participants in accordance with the Terms and Conditions, to the extent received by the U.S. depositary for Euroclear.

Euroclear has further advised us that investors who acquire, hold and transfer interests in the New Notes by book-entry through accounts with the Euroclear operator or any other securities intermediary are subject to the laws and contractual provisions governing their relationship with their intermediary, as well as the laws and contractual provisions governing the relationship between such an intermediary and each other intermediary, if any, standing between themselves and the global securities certificates.

Global Clearance and Settlement Procedures

Secondary market trading between DTC participants will occur in the ordinary way in accordance with DTC rules and will be settled in immediately available funds using DTC’s Same Day Funds Settlement System. Secondary market trading between Clearstream participants and/or Euroclear participants will occur in the ordinary way in accordance with the applicable rules and operating procedures of Clearstream and Euroclear and will be settled using the procedures applicable to conventional eurobonds in immediately available funds.

Cross market transfers between persons holding directly or indirectly through DTC, on the one hand, and directly or indirectly through Clearstream participants or Euroclear participants, on the other, will be effected through DTC in accordance with DTC rules on behalf of the relevant European international clearing system by its U.S. depositary; however, such cross market transactions will require delivery of instructions to the relevant European international clearing system by the counterparty in such system in accordance with its rules and procedures and within its established deadlines (European time). The relevant European international clearing system will, if the transaction meets its settlement requirements, deliver instructions to its U.S. depositary to take action to effect final settlement on its behalf by delivering or receiving New Notes through DTC, and making or receiving payment in accordance with normal procedures for same day funds settlement applicable to DTC. Clearstream participants and Euroclear participants may not deliver instructions directly to their respective U.S. depositaries.

Because of time zone differences, credits of New Notes received through Clearstream or Euroclear as a result of a transaction with a DTC participant will be made during subsequent securities settlement processing and dated the business day following the DTC settlement date. Such credits or any transactions in such New Notes settled during such processing will be reported to the relevant Euroclear participants or Clearstream participants on such business day. Cash received in Clearstream or Euroclear as a result of sales of New Notes by or through a Clearstream participant or a Euroclear participant to a DTC participant will be received with value on the DTC settlement date but will be available in the relevant Clearstream or Euroclear cash account only as of the business day following settlement in DTC.

Although DTC, Clearstream and Euroclear have agreed to the foregoing procedures in order to facilitate transfers of New Notes among participants of DTC, Clearstream and Euroclear, they are under no obligation to perform or continue to perform such procedures and such procedures may be modified or discontinued at any time. Neither we nor the paying agent will have any responsibility for the performance by DTC, Euroclear or Clearstream or their respective direct or indirect participants of their obligations under the rules and procedures governing their operations.

46

Table of Contents

CERTAIN U.S. FEDERAL INCOME TAX CONSEQUENCES

The following is a summary of certain United States federal income tax consequences of the exchange offers and consent solicitations that may be relevant to a beneficial owner of Google Notes or Alphabet Notes. This discussion is limited to holders who hold Google Notes and will hold Alphabet Notes (assuming that such holder participates in the exchange offer) as capital assets within the meaning of the Code. This discussion does not address all aspects of U.S. federal income taxation that may be relevant to particular holders of Google Notes or Alphabet Notes in light of their personal circumstances or to holders subject to special tax rules including, among others, banks, financial institutions, insurance companies, dealers or traders in securities or currencies, regulated investment companies, real estate investment trusts, tax-exempt organizations (including private foundations), holders holding Google Notes or Alphabet Notes in tax-deferred accounts, holders holding Google Notes or Alphabet Notes as part of a straddle, hedge, conversion, constructive sale, or other integrated security transaction for U.S. federal income tax purposes, holders who mark to market their securities, U.S. Holders (as defined below) whose functional currency is not the U.S. dollar, holders who are subject to the alternative minimum tax, nonresident alien individuals who are present in the United States for 183 days or more during the relevant taxable year, holders who are partnerships or partners therein or holders who are former U.S. citizens or U.S. residents, all of which may be subject to tax rules that differ significantly from those summarized below. In addition, this discussion does not discuss any state, local or non-U.S. tax considerations or other U.S. federal tax considerations (e.g., estate or gift tax or the Medicare tax on net investment income). The discussion herein applies to each series of Google Notes and/or Alphabet Notes separately and not in the aggregate. Accordingly, holders should consider the tax consequences applicable to them on a series-by-series basis.

The discussion below is based on the Code, U.S. Treasury Regulations, published IRS rulings and administrative pronouncements, and published court decisions, each as in effect as of the date hereof, and any of which may be subject to change at any time, possibly with retroactive effect, so as to result in U.S. federal income tax consequences different from those discussed below. No ruling will be sought from the IRS with respect to any statement or conclusion in this discussion, and no assurance can be given that the IRS will not challenge such statement or conclusion in this discussion or, if challenged, that a court will uphold such statement or conclusion. Holders should consult their tax advisors as to the particular tax consequences to them of the exchange offers and consent solicitations and of owning and disposing of Alphabet Notes in light of their particular circumstances, as well as the effect of any state, local, non-U.S. or other laws.

As used herein, the term “U.S. Holder” means a beneficial owner of Google Notes or Alphabet Notes that is a citizen or resident of the United States or a domestic corporation or otherwise subject to U.S. federal income tax on a net income basis in respect of the Google Notes or Alphabet Notes. The term “Non-U.S. Holder” is a beneficial owner of Google Notes or Alphabet Notes that is neither a U.S. Holder nor a partnership for U.S. federal income tax purposes.

THIS DISCUSSION OF CERTAIN U.S. FEDERAL INCOME TAX CONSEQUENCES IS FOR GENERAL INFORMATION PURPOSES ONLY AND IS NOT TAX ADVICE. EACH HOLDER SHOULD CONSULT ITS TAX ADVISOR AS TO THE PARTICULAR TAX CONSIDERATIONS TO SUCH HOLDER OF THE EXCHANGE OFFERS AND CONSENT SOLICITATIONS AND THE OWNERSHIP AND DISPOSITION OF ALPHABET NOTES ACQUIRED PURSUANT TO THE EXCHANGE OFFERS AND CONSENT SOLICITATIONS, INCLUDING THE APPLICABILITY OF U.S. FEDERAL, STATE, OR LOCAL TAX LAWS OR NON-U.S. TAX LAWS.

Holders Tendering Google Notes in the Exchange Offers

U.S. Holders

The Exchange Offers

Tender of Google Notes. Sales of Google Notes for Alphabet Notes pursuant to the exchange offers and consent solicitations will be taxable exchanges for U.S. federal income tax purposes.

47

Table of Contents

Subject to the discussion below under “—Potential Treatment of Consideration as Consent Fee,” a U.S. Holder that exchanges Google Notes for Alphabet Notes pursuant to the exchange offers and consent solicitations generally will recognize gain or loss equal to the difference, if any, between (i) the sum of the amount of cash received and the “issue price” of the Alphabet Notes received in respect of the Google Notes (as discussed below under “—Issue Price”) and (ii) the U.S. Holder’s adjusted tax basis in the Google Notes. A U.S. Holder’s adjusted tax basis in a Google Note will generally equal the amount paid for the Google Note (x) increased by any market discount previously taken into account by the U.S. Holder in respect of the Google Note and (y) reduced (but not below zero) by any amortizable bond premium previously amortized on the Google Note. Amounts received in respect of accrued interest on the Google Notes at the time of the exchange will be includable in a U.S. Holder’s gross income as interest income at the time of the exchange to the extent that it has not yet been included.

Subject to the treatment of a portion of any gain as ordinary income to the extent of any market discount accrued on a Google Note (see below under “—Market Discount”), any gain or loss recognized in respect of a Google Note generally will be capital gain or loss, which will be long-term capital gain or loss if the U.S. Holder held the Google Note for more than one year as of the date of the exchange. The deductibility of capital losses is subject to limitations under the Code. A U.S. Holder generally will have an initial tax basis in an Alphabet Note received pursuant to the exchange offers and consent solicitations equal to its issue price (as defined below), and generally will commence a new holding period with respect to the Alphabet Note the day after the completion of the exchange.

Market Discount. In general, if a U.S. Holder acquired the Google Notes with market discount, any gain recognized by a U.S. Holder on the sale of the Google Notes pursuant to the exchange offers and consent solicitations will be treated as ordinary income to the extent of the portion of the market discount that has accrued while the Google Notes were held by the U.S. Holder, unless the U.S. Holder has elected to include market discount in income currently as it accrues.

Issue Price. If an Alphabet Note is considered to be “publicly traded” for U.S. federal income tax purposes, the issue price of such Alphabet Note will, subject to the sentence below, generally equal its fair market value on the date of issuance. In accordance with applicable U.S. Treasury Regulations, we intend to determine the issue price of the Alphabet Notes by subtracting from such fair market value amount any Alphabet Note Pre-Issuance Accrued Interest (as defined below under “—Treatment of the Alphabet Notes—Stated Interest”). Although no assurances can be given in this regard, we believe that the Alphabet Notes are likely to be considered “publicly traded” for these purposes and intend to take this position for all relevant reporting and other purposes. We will provide investors with information regarding our determination of the issue price of the Alphabet Notes by publishing that information on our website. Our determination of the issue price of the Alphabet Notes is binding upon a holder unless such holder explicitly discloses to the IRS, on a timely filed U.S. federal income tax return for the taxable year that includes the date of the exchange, that its determination is different from ours, the reasons for the different determination, and how such holder determined the issue price.

Potential Treatment of Consideration as Consent Fee. We intend to treat the entire amount of the Total Consideration received by a U.S. Holder that participates in the exchange offers and consent solicitations as sale proceeds received in exchange for the U.S. Holder’s Google Notes. It is possible, however, that the IRS may take the position that a portion of the Total Consideration is not part of the consideration received by a U.S. Holder in exchange for the U.S. Holder’s Google Notes but rather a separate amount payable for consenting to the amendments, which may be treated as a fee or as additional interest on the Google Notes. In that case, the portion of the Total Consideration characterized as a consent fee or additional interest would be taxable as ordinary income to the U.S. Holder.

48

Table of Contents

Treatment of the Alphabet Notes

Characterization of the Alphabet Notes. Alphabet intends to take the position that the Alphabet Notes are not “contingent payment debt instruments” for U.S. federal income tax purposes within the meaning of applicable Treasury Regulations and, therefore, the discussion below assumes that the Alphabet Notes are not subject to the special rules governing “contingent payment debt instruments.” U.S. Holders should consult their tax advisors regarding the tax consequences if the Alphabet Notes were treated as “contingent payment debt instruments.”

Stated Interest. Subject to the following sentence, U.S. Holders will generally be taxed on the stated interest on the Alphabet Notes as ordinary income at the time it is paid or accrued in accordance with the U.S. Holder’s regular method of accounting for U.S. federal income tax purposes. However, a U.S. Holder should not include in income the portion of the first payment of interest on an Alphabet Note that is attributable to accrued interest on the Google Notes as of the time of the exchange and should instead treat such portion as a non-taxable return of principal (such amount is referred to as the “Alphabet Note Pre-Issuance Accrued Interest”).

Original Issue Discount. As described above, we intend to determine the issue price of the Alphabet Notes by reference to the fair market value of the Alphabet Notes on the applicable exchange date; therefore, we cannot know before the applicable exchange date whether any series of the Alphabet Notes will have original issue discount (“OID”). If the principal amount of any Alphabet Note exceeds the issue price of the Alphabet Note by at least a statutorily specified de minimis amount (which is generally 1/4 of one percent of the principal amount multiplied by the number of complete years to maturity), the difference will constitute OID for U.S. federal income tax purposes. A U.S. Holder of an Alphabet Note that is issued with OID will, regardless of such U.S. Holder’s method of accounting, be required to include the OID in income (as ordinary income) as it accrues in accordance with a constant yield method based upon a compounding of interest and before receiving the cash to which that income is attributable. Based on the current trading prices of the Google Notes, we expect, and the remainder of this disclosure assumes, that the Alphabet Notes will be issued without OID.

Amortizable Bond Premium on Alphabet Notes. If a U.S. Holder’s initial tax basis in an Alphabet Note is greater than the principal amount of the Alphabet Note, the U.S. Holder will be considered to have acquired the Alphabet Note with “amortizable bond premium.” A U.S. Holder generally may elect to amortize the premium over the remaining term of the Alphabet Note on a constant yield method as an offset to interest when includible in income under a U.S. Holder’s regular accounting method. An election to amortize premium on a constant yield method will also apply to all other taxable debt instruments held or subsequently acquired by a U.S. Holder on or after the first day of the first taxable year for which the election is made. Such an election may not be revoked without the consent of the IRS. Because the Alphabet Notes may be redeemed by us prior to maturity at a premium, special rules apply that may reduce or eliminate the amount of premium that a U.S. Holder may amortize with respect to an Alphabet Note. U.S. Holders should consult their tax advisors about the special rules, including whether it would be advisable to elect to treat all interest on the Alphabet Notes as OID under applicable Treasury Regulations, which would result in a U.S. Holder not being subject to these special rules.

Sale or Other Taxable Disposition of Alphabet Notes. Upon the sale, exchange, optional redemption, retirement or other taxable disposition of an Alphabet Note, a U.S. Holder will generally recognize capital gain or loss in an amount equal to the difference between (1) the sum of cash plus the fair market value of all other property received on such disposition in respect of the Alphabet Note (except to the extent such cash or property is attributable to accrued but unpaid interest, which will generally be taxable as ordinary income as described above to the extent not previously included in income) and (2) the U.S. Holder’s adjusted tax basis in the Alphabet Note. A U.S. Holder’s adjusted tax basis in an Alphabet Note will generally equal its initial tax basis in the Alphabet Note, decreased by any bond premium that it previously amortized with respect to the Alphabet Note. Such gain or loss will generally be capital gain or loss and will be long-term capital gain or loss if, at the time of such disposition, the U.S. Holder’s holding period for the Alphabet Note exceeds one year. The deductibility of capital losses is subject to limitations.

49

Table of Contents

Non-U.S. Holders

The Exchange Offers

Tender of Google Notes. As discussed above under “U.S. Holders—The Exchange Offers—Tender of Google Notes,” the exchange of Google Notes for Alphabet Notes pursuant to the exchange offers and consent solicitations will generally constitute a taxable exchange for U.S. federal income tax purposes. Under this treatment, subject to the discussion below under “—Payments of Interest,” “—Potential Treatment of Consideration as Consent Fee” and “—Backup Withholding and Information Reporting” a Non-U.S. Holder will generally not be subject to U.S. federal income tax on any gain realized on the Non-U.S. Holder’s exchange of Google Notes pursuant to the exchange offers and consent solicitations. Non-U.S. Holders should consult their tax advisors regarding the U.S. federal tax consequences of the exchange offers and consent solicitations.

Payments of Interest. Subject to the discussion below under “—FATCA Withholding,” any amount received pursuant to the exchange offers and consent solicitations with respect to a Google Note that is attributable to accrued but unpaid interest will generally not be subject to U.S. federal income tax, provided that, (i) the Non-U.S. Holder does not actually or constructively own ten percent or more of the combined voting power of all classes of Google’s stock and is not a controlled foreign corporation that is related to Google through stock ownership, and (ii) the beneficial owner provides a statement signed under penalties of perjury that includes its name and address and certifies that it is not a U.S. person (as defined in the Code) in compliance with applicable requirements (or satisfies certain documentary evidence requirements for establishing that it is not a U.S. person).

A Non-U.S. Holder that does not qualify for an exemption from U.S. federal withholding tax under the rules described above will generally be subject to withholding at a rate of 30% (or lower treaty rate, if applicable) on amounts received pursuant to the exchange offers and consent solicitations that are attributable to accrued but unpaid interest received on the Google Notes.

Potential Treatment of Consideration as Consent Fee. As discussed above under “U.S. Holders—The Exchange Offers—Potential Treatment of Consideration as Consent Fee,” we intend to take the position that the entire amount of the Total Consideration received by a Non-U.S. Holder who participates in the exchange offers and consent solicitations is consideration for the tendered Google Notes, in which case the Total Consideration would be treated as provided above under “—Tender of Google Notes.” It is possible, however, that the IRS may take the position that a portion of the Total Consideration is not part of the consideration received by a Non-U.S. Holder in exchange for the Non-U.S. Holder’s Google Notes but rather a separate amount payable for consenting to the amendments, which may be treated as a fee or as additional interest on the Google Notes. In that case, the portion of the Total Consideration treated as a consent fee or additional interest may be subject to U.S. federal withholding tax at a 30% rate (or lower applicable treaty rate). There can be no assurance that the IRS will not successfully challenge the position that we intend to take. Non-U.S. Holders should consult their tax advisors regarding the potential treatment of a portion of the Total Consideration as a fee or additional interest, the availability of a refund of any U.S. withholding tax, and the provisions of any applicable income tax treaties which may provide different rules from those described above.

Treatment of the Alphabet Notes

Payments of Interest. Subject to the discussion below under “—Backup Withholding and Information Reporting” and “—FATCA Withholding,” payments of interest on Alphabet Notes received pursuant to the exchange offers and consent solicitations will generally not be subject to U.S. federal income or withholding tax, subject to the conditions described above under “Non-U.S. Holders—The Exchange Offers—Payments of Interest” (substituting references to Alphabet for references to Google).

Sale or Other Taxable Disposition of Alphabet Notes. Subject to the discussion below under “—Backup Withholding and Information Reporting” and “—FATCA Withholding,” a holder of an Alphabet Note that is a

50

Table of Contents

Non-U.S. Holder will generally not be subject to U.S. federal income tax on interest payments on, or gain realized on the sale, exchange or redemption of, the Alphabet Note (except with respect to accrued and unpaid interest, which would be treated as described above).

Holders Not Tendering in the Exchange Offers

The U.S. federal income tax treatment of holders who do not tender their Google Notes pursuant to the exchange offers and consent solicitations (“non-tendering holders”) will depend upon whether the adoption of the proposed amendments results in a “deemed” exchange of such Google Notes for U.S. federal income tax purposes to such non-tendering holders. In general, the modification of a debt instrument will result in a deemed exchange of an “old” debt instrument for a “new” debt instrument (upon which gain or loss may be realized) if such modification is “significant” within the meaning of applicable Treasury Regulations. Under these Treasury Regulations, a modification is “significant” if, based on all the facts and circumstances and taking into account all modifications of the debt instrument collectively, the legal rights and obligations that are altered and the degree to which they are altered are “economically significant.” We believe, and this discussion assumes, that the adoption of the proposed amendments should not be treated as economically significant, and therefore that the adoption of the proposed amendments should not result in a deemed exchange of the Google Notes for U.S. federal income tax purposes. Accordingly, the exchange offers and consent solicitations should not affect the tax treatment of Google Notes to non-tendering holders. However, such treatment cannot be assured. Non-tendering holders are encouraged to consult their tax advisors.

Backup Withholding and Information Reporting

Unless a U.S. Holder is an exempt recipient that, if required, establishes its exemption, payments made to a U.S. Holder hereunder and on the Alphabet Notes may be subject to information reporting and U.S. federal backup withholding at the applicable rate if such U.S. Holder fails to supply an accurate taxpayer identification number or otherwise fails to comply with applicable U.S. information reporting or certification requirements. A Non-U.S. Holder may have to comply with certification procedures to establish that such Non-U.S. Holder is not a U.S. person (within the meaning of the Code) in order to avoid such information reporting and backup withholding.

FATCA Withholding

Withholding at a rate of 30% will generally be required in certain circumstances on interest payable on and, after December 31, 2018, gross proceeds from the disposition of, Alphabet Notes held by or through certain foreign financial institutions (including investment funds), unless such institution (i) enters into, and complies with, an agreement with the IRS to report, on an annual basis, information with respect to interests in, and accounts maintained by, the institution that are owned by certain U.S. persons or by certain non-U.S. entities that are wholly or partially owned by U.S. persons and to withhold on certain payments, or (ii) if required under an intergovernmental agreement between the United States and an applicable foreign country, reports such information to its local tax authority, which will exchange such information with the U.S. authorities. An intergovernmental agreement between the United States and an applicable foreign country may modify these requirements. Accordingly, the entity through which Alphabet Notes are held will affect the determination of whether such withholding is required. Similarly, interest payable on and, after December 31, 2018, gross proceeds from the disposition of, Alphabet Notes held by an investor that is a non-financial non-U.S. entity that does not qualify under certain exemptions generally will be subject to withholding at a rate of 30%, unless such entity either (i) certifies that such entity does not have any “substantial United States owners” or (ii) provides certain information regarding the entity’s “substantial United States owners,” which the payor generally will be required to provide to the IRS. Holders should consult their tax advisors regarding the possible implications of these rules in their particular situations.

51

Table of Contents

LEGAL MATTERS

Cleary Gottlieb Steen & Hamilton LLP, New York, New York, has passed upon the validity of the notes. Davis Polk & Wardwell LLP, Menlo Park, California, will pass upon certain legal matters relating to the exchange offers and consent solicitations for the dealer managers.

EXPERTS

Ernst & Young LLP, independent registered public accounting firm, has audited our consolidated financial statements and schedule included in our Annual Report on Form 10-K for the year ended December 31, 2015, and the effectiveness of our internal control over financial reporting as of December 31, 2015, as set forth in their reports, which are incorporated by reference in this prospectus and elsewhere in the registration statement. Our financial statements and schedule are incorporated by reference in reliance on Ernst & Young LLP’s reports, given on their authority as experts in accounting and auditing.

WHERE YOU CAN FIND MORE INFORMATION

We file annual, quarterly and special reports, proxy statements and other information with the SEC. You may read and copy any reports, statements or other information on file at the SEC’s public reference room at 100 F Street, N.E., Washington, D.C., 20549. Please call the SEC at 1-800-SEC-0330 for further information on the public reference room. The SEC filings are also available to the public from commercial document retrieval services. These filings are also available at the Internet website maintained by the SEC at http://sec.report. The filings are also available on our website at http://www.abc.xyz/investor.

THIS PROSPECTUS INCORPORATES DOCUMENTS BY REFERENCE WHICH ARE NOT PRESENTED IN OR DELIVERED WITH THIS PROSPECTUS. YOU SHOULD RELY ONLY ON THE INFORMATION IN THIS PROSPECTUS AND IN THE DOCUMENTS THAT WE HAVE INCORPORATED BY REFERENCE IN THIS PROSPECTUS. WE HAVE NOT, AND THE DEALER MANAGERS HAVE NOT, AUTHORIZED ANYONE TO PROVIDE YOU WITH INFORMATION THAT IS DIFFERENT FROM OR IN ADDITION TO THE INFORMATION CONTAINED IN THIS PROSPECTUS AND IN THE DOCUMENTS THAT WE HAVE INCORPORATED BY REFERENCE IN THIS PROSPECTUS. WE AND THE DEALER MANAGERS TAKE NO RESPONSIBILITY FOR, AND CAN PROVIDE NO ASSURANCE AS TO THE RELIABILITY OF, ANY OTHER INFORMATION THAT OTHERS MAY GIVE YOU.

We incorporate information into this prospectus by reference, which means that we disclose important information to you by referring you to another document filed separately with the SEC. The information incorporated by reference is deemed to be part of this prospectus, except to the extent superseded by information contained in this prospectus or by information contained in documents filed with the SEC after the date of this prospectus. This prospectus incorporates by reference the documents set forth below that have been previously filed with the SEC; provided, however, that we are not incorporating any documents or information deemed to have been furnished rather than filed in accordance with SEC rules. These documents contain important information about us and our financial condition.

		• 	  	Alphabet’s Annual Report on Form 10-K for the year ended December 31, 2015 filed on February 11, 2016; and																			
																							
																							
		• 	  	Alphabet’s Annual Report on Form 10-K/A for the year ended December 31, 2015 filed on March 29, 2016.																			
We also incorporate by reference any future filings made with the SEC pursuant to Sections 13(a), 13(c), 14 or 15(d) of the Exchange Act between the date of this prospectus and the date all of the securities offered by this prospectus are sold or the offering is otherwise terminated, with the exception of any information furnished under

52

Table of Contents

Item 2.02 and Item 7.01 of Form 8-K, which is not deemed filed and which is not incorporated by reference in this prospectus. Any such filings shall be deemed to be incorporated by reference and to be a part of this prospectus from the respective dates of filing of those documents.

We will provide without charge upon written or oral request to each person, including any beneficial owner, to whom a prospectus is delivered, a copy of any and all of the documents which are incorporated by reference in this prospectus but not delivered with this prospectus (other than exhibits unless such exhibits are specifically incorporated by reference in such documents). You may request a copy of these documents by writing or telephoning us at:

Alphabet Inc. 1600 Amphitheatre Parkway

Mountain View, California 94043

(650) 253-0000

Email: investor-relations@abc.xyz

To obtain timely delivery of any copies of filings requested, please write or call us no later than five business days before the Expiration Date of the exchange offer. This means that you must request this information no later than April 18, 2016.

The information contained on, or accessible through, our website does not constitute a part of this prospectus.

53

Table of Contents

Alphabet Inc.

OFFERS TO EXCHANGE

ALL OUTSTANDING GOOGLE INC. 3.625% NOTES DUE 2021 AND 3.375% NOTES DUE 2024 AND SOLICITATIONS OF CONSENTS TO AMEND THE RELATED INDENTURE AND NOTES

PROSPECTUS

The Exchange Agent for the Exchange Offers and the Consent Solicitations is:

D.F. King & Co., Inc.

By Facsimile (Eligible Institutions Only):

(212) 709-3328

Attention: Krystal Scrudato

For Information or Confirmation by Telephone:

(212) 493-6940

By Mail or Hand:

48 Wall Street, 22nd Floor

New York, New York 10005

Attention: Krystal Scrudato

Any questions or requests for assistance may be directed to the dealer managers at the addresses and telephone numbers set forth below. Requests for additional copies of this prospectus and the letter of transmittal and consent may be directed to the Information Agent. Beneficial owners may also contact their custodian for assistance concerning the exchange offers and the consent solicitations.

The Information Agent for the Exchange Offers and the Consent Solicitations is:

D.F. King & Co., Inc.

48 Wall Street, 22nd Floor

New York, New York 10005 Banks and Brokers Call Collect: (212) 269-5550

All Others, Please Call Toll-Free: (877) 732-3617

Email: goog@dfking.com

The Dealer Managers for the Exchange Offers and the Consent Solicitations are:

Lead Dealer Manager

Morgan Stanley & Co. LLC

1585 Broadway, 4th Floor

New York, New York 10036

Attention: Liability Management Group

(800) 624-1808 (toll-free)

(212) 761-1057 (collect)

Co-Dealer Managers

Merrill Lynch, Pierce, Fenner & Smith

Incorporated

214 North Tryon Street, 21st Floor

Charlotte, North Carolina 28255

Citigroup Global Markets Inc.

390 Greenwich Street, 1st Floor

New York, New York 10013

J.P. Morgan Securities LLC

383 Madison Avenue

New York, New York 10179

Wells Fargo Securities, LLC

550 South Tryon Street, 5th Floor

Charlotte, North Carolina 28202

Attention: Liability Management Group

(980) 387-3907 (collect)

(888) 292-0070 (toll-free)

Attention: Liability Management Group

(212) 723-6106 (collect)

(800) 558-3745 (toll-free)

Attention: Liability Management Group

(212) 834-3424 (collect)

(866) 834-4666 (toll-free)

Attention: Liability Management Group

(704) 410-4760 (collect)

(866) 309-6316 (toll-free)

Table of Contents

PART II.

INFORMATION NOT REQUIRED IN PROSPECTUS

Item 20. Indemnification of Directors and Officers

As of the date of this filing, Section 145 of the Delaware General Corporation Law (“DGCL”), as amended, provides in regard to indemnification of directors and officers as follows:

145 INDEMNIFICATION OF OFFICERS, DIRECTORS, EMPLOYEES AND AGENTS; INSURANCE.

(a) A corporation shall have power to indemnify any person who was or is a party or is threatened to be made a party to any threatened, pending or completed action, suit or proceeding, whether civil, criminal, administrative or investigative (other than an action by or in the right of the corporation) by reason of the fact that the person is or was a director, officer, employee or agent of the corporation, or is or was serving at the request of the corporation as a director, officer, employee or agent of another corporation, partnership, joint venture, trust or other enterprise, against expenses (including attorneys’ fees), judgments, fines and amounts paid in settlement actually and reasonably incurred by the person in connection with such action, suit or proceeding if the person acted in good faith and in a manner the person reasonably believed to be in or not opposed to the best interests of the corporation, and, with respect to any criminal action or proceeding, had no reasonable cause to believe the person’s conduct was unlawful. The termination of any action, suit or proceeding by judgment, order, settlement, conviction, or upon a plea of nolo contendere or its equivalent, shall not, of itself, create a presumption that the person did not act in good faith and in a manner which the person reasonably believed to be in or not opposed to the best interests of the corporation, and, with respect to any criminal action or proceeding, had reasonable cause to believe that the person’s conduct was unlawful.

(b) A corporation shall have power to indemnify any person who was or is a party or is threatened to be made a party to any threatened, pending or completed action or suit by or in the right of the corporation to procure a judgment in its favor by reason of the fact that the person is or was a director, officer, employee or agent of the corporation, or is or was serving at the request of the corporation as a director, officer, employee or agent of another corporation, partnership, joint venture, trust or other enterprise against expenses (including attorneys’ fees) actually and reasonably incurred by the person in connection with the defense or settlement of such action or suit if the person acted in good faith and in a manner the person reasonably believed to be in or not opposed to the best interests of the corporation and except that no indemnification shall be made in respect of any claim, issue or matter as to which such person shall have been adjudged to be liable to the corporation unless and only to the extent that the Court of Chancery or the court in which such action or suit was brought shall determine upon application that, despite the adjudication of liability but in view of all the circumstances of the case, such person is fairly and reasonably entitled to indemnity for such expenses which the Court of Chancery or such other court shall deem proper.

(c) To the extent that a present or former director or officer of a corporation has been successful on the merits or otherwise in defense of any action, suit or proceeding referred to in subsections (a) and (b) of this section, or in defense of any claim, issue or matter therein, such person shall be indemnified against expenses (including attorneys’ fees) actually and reasonably incurred by such person in connection therewith.

(d) Any indemnification under subsections (a) and (b) of this section (unless ordered by a court) shall be made by the corporation only as authorized in the specific case upon a determination that indemnification of the present or former director, officer, employee or agent is proper in the circumstances because the person has met the applicable standard of conduct set forth in subsections (a) and (b) of this section. Such determination shall be made, with respect to a person who is a director or officer of the corporation at the time of such determination, (1) by a majority vote of the directors who are not parties to such action, suit or proceeding, even though less than a quorum, or (2) by a committee of such directors designated by majority vote of such directors, even though less than a quorum, or (3) if there are no such directors, or if such directors so direct, by independent legal counsel in a written opinion, or (4) by the stockholders.

II-1

Table of Contents

(e) Expenses (including attorneys’ fees) incurred by an officer or director of the corporation in defending any civil, criminal, administrative or investigative action, suit or proceeding may be paid by the corporation in advance of the final disposition of such action, suit or proceeding upon receipt of an undertaking by or on behalf of such director or officer to repay such amount if it shall ultimately be determined that such person is not entitled to be indemnified by the corporation as authorized in this section. Such expenses (including attorneys’ fees) incurred by former directors and officers or other employees and agents of the corporation or by persons serving at the request of the corporation as directors, officers, employees or agents of another corporation, partnership, joint venture, trust or other enterprise may be so paid upon such terms and conditions, if any, as the corporation deems appropriate.

(f) The indemnification and advancement of expenses provided by, or granted pursuant to, the other subsections of this section shall not be deemed exclusive of any other rights to which those seeking indemnification or advancement of expenses may be entitled under any bylaw, agreement, vote of stockholders or disinterested directors or otherwise, both as to action in such person’s official capacity and as to action in another capacity while holding such office. A right to indemnification or to advancement of expenses arising under a provision of the certificate of incorporation or a bylaw shall not be eliminated or impaired by an amendment to the certificate of incorporation or the bylaws after the occurrence of the act or omission that is the subject of the civil, criminal, administrative or investigative action, suit or proceeding for which indemnification or advancement of expenses is sought, unless the provision in effect at the time of such act or omission explicitly authorizes such elimination or impairment after such action or omission has occurred.

(g) A corporation shall have power to purchase and maintain insurance on behalf of any person who is or was a director, officer, employee or agent of the corporation, or is or was serving at the request of the corporation as a director, officer, employee or agent of another corporation, partnership, joint venture, trust or other enterprise against any liability asserted against such person and incurred by such person in any such capacity, or arising out of such person’s status as such, whether or not the corporation would have the power to indemnify such person against such liability under this section.

(h) For purposes of this section, references to “the corporation” shall include, in addition to the resulting corporation, any constituent corporation (including any constituent of a constituent) absorbed in a consolidation or merger which, if its separate existence had continued, would have had power and authority to indemnify its directors, officers, and employees or agents, so that any person who is or was a director, officer, employee or agent of such constituent corporation, or is or was serving at the request of such constituent corporation as a director, officer, employee or agent of another corporation, partnership, joint venture, trust or other enterprise, shall stand in the same position under this section with respect to the resulting or surviving corporation as such person would have with respect to such constituent corporation if its separate existence had continued.

(i) For purposes of this section, references to “other enterprises” shall include employee benefit plans; references to “fines” shall include any excise taxes assessed on a person with respect to any employee benefit plan; and references to “serving at the request of the corporation” shall include any service as a director, officer, employee or agent of the corporation which imposes duties on, or involves services by, such director, officer, employee or agent with respect to an employee benefit plan, its participants or beneficiaries; and a person who acted in good faith and in a manner such person reasonably believed to be in the interest of the participants and beneficiaries of an employee benefit plan shall be deemed to have acted in a manner “not opposed to the best interests of the corporation” as referred to in this section.

(j) The indemnification and advancement of expenses provided by, or granted pursuant to, this section shall, unless otherwise provided when authorized or ratified, continue as to a person who has ceased to be a director, officer, employee or agent and shall inure to the benefit of the heirs, executors and administrators of such a person.

II-2

Table of Contents

(k) The Court of Chancery is hereby vested with exclusive jurisdiction to hear and determine all actions for advancement of expenses or indemnification brought under this section or under any bylaw, agreement, vote of stockholders or disinterested directors, or otherwise. The Court of Chancery may summarily determine a corporation’s obligation to advance expenses (including attorneys’ fees).

As permitted by Section 145 of the DGCL, the registrant’s certificate of incorporation includes a provision that eliminates the personal liability of its directors for monetary damages for breach of their fiduciary duty as directors.

In addition, as permitted by Section 145 of the DGCL, the bylaws of the registrant provide that:

		• 	  	The registrant will indemnify its directors and officers for serving the registrant in those capacities or for serving other business enterprises at the registrant’s request, to the fullest extent permitted by Delaware law, if such person acted in good faith and in a manner such person reasonably believed to be in or not opposed to the best interests of the registrant, and, with respect to any criminal proceeding, had no reasonable cause to believe such person’s conduct was unlawful.																			
																							
																							
		• 	  	The registrant may, in its discretion, indemnify employees and agents in those circumstances where indemnification is not required by law.																			
																							
																							
		• 	  	The registrant is required to advance expenses, as incurred, to its directors and officers in connection with defending a proceeding, except that such director or officer will undertake to repay such advances if it is ultimately determined that such person is not entitled to indemnification.																			
																							
																							
		• 	  	The registrant will not be obligated pursuant to the bylaws to indemnify a person with respect to proceedings initiated by that person, except with respect to proceedings authorized by the registrant’s board of directors or brought to enforce a right to indemnification.																			
																							
																							
		• 	  	The rights conferred in the bylaws are not exclusive, and the registrant is authorized to enter into indemnification agreements with its directors, officers, employees and agents and to obtain insurance to indemnify such persons.																			
																							
																							
		• 	  	The registrant may not retroactively amend or repeal the bylaw or certificate of incorporation provisions to reduce its indemnification obligations to directors, officers, employees and agents.																			
The registrant’s policy is to enter into separate indemnification agreements with each of its directors and executive officers that provide the maximum indemnity allowed to directors and executive officers by Section 145 of the DGCL and that allow for certain additional procedural protections. The registrant also maintains directors and officers insurance to insure such persons against certain liabilities.

These indemnification provisions and the indemnification agreements entered into between the registrant and its officers and directors may be sufficiently broad to permit indemnification of the registrant’s officers and directors for liabilities (including reimbursement of expenses incurred) arising under the Securities Act.

Item 21. Exhibits and Financial Statement Schedules

Exhibit

No.

Description

2.1 Agreement and Plan of Merger, dated October 2, 2015, by and among Google Inc., Alphabet Inc. and Maple Technologies Inc. (incorporated by reference to Exhibit 2.1 of Alphabet Inc.’s Current Report on Form 8-K12B filed on October 2, 2015 (File No. 001-37580))

3.1 Amended and Restated Certificate of Incorporation of Alphabet Inc., dated October 2, 2015 (incorporated by reference to Exhibit 3.1 of Alphabet Inc.’s Current Report on Form 8-K12B filed on October 2, 2015 (File No. 001-37580))

II-3

Table of Contents

Exhibit

No.

Description

3.2 Amended and Restated Bylaws of Alphabet Inc., dated October 2, 2015 (incorporated by reference to Exhibit 3.2 of Alphabet Inc.’s Current Report on Form 8-K filed on October 2, 2015 (File No. 001-37580))

4.1 Indenture, dated as of February 12, 2016 between Alphabet Inc. and The Bank of New York Mellon Trust Company, N.A., as trustee (incorporated by reference to Exhibit 4.3 of Alphabet Inc.’s Registration Statement on Form S-3 filed on February 12, 2016 (File No. 333-209510))

4.2* Indenture, dated as of May 19, 2011 between Google Inc. and The Bank of New York Mellon Trust Company, N.A., as trustee

4.3* Form of First Supplemental Indenture, between Google Inc. and The Bank of New York Mellon Trust Company, N.A., as trustee

4.4* Form of First Supplemental Indenture, between Alphabet Inc. and The Bank of New York Mellon Trust Company, N.A., as trustee

4.5* Form of Google Inc.’s 3.625% Note due 2021

4.6* Form of Google Inc.’s 3.375% Note due 2024

4.7* Form of Alphabet Inc.’s 3.625% Note due 2021 (included as part of Exhibit 4.4)

4.8* Form of Alphabet Inc.’s 3.375% Note due 2024 (included as part of Exhibit 4.4)

5.1* Opinion of Cleary Gottlieb Steen & Hamilton LLP

12.1 Statement regarding computation of Ratio of Earnings to Fixed Charges (incorporated by reference to Exhibit 12 of Alphabet Inc.’s Annual Report on Form 10-K filed on February 11, 2016 (File No. 001-37580))

21.1 List of subsidiaries (incorporated by reference to Exhibit 21.01 of Alphabet Inc.’s Annual Report on Form 10-K filed on February 11, 2016 (File No. 001-37580))

23.1# Consent of Ernst & Young LLP, Independent Registered Public Accounting Firm

23.2* Consent of Cleary Gottlieb Steen & Hamilton LLP (included as part of Exhibit 5.1)

24.1* Power of Attorney

25.1* Statement of Eligibility and Qualification on Form T-1 under the Trust Indenture Act of 1939, as amended

99.1# Letter of Transmittal and Consent

  	Previously filed.																					
Filed herewith.
Item 22. Undertakings

The undersigned registrant hereby undertakes:

		(a) 	  	    																			
																							
																							
		1	  	To file, during any period in which offers or sales are being made, a post-effective amendment to this registration statement:																			
																							
																							
		i) 	to include any prospectus required by Section 10(a)(3) of the Securities Act of 1933; and																				
																							
																							
		ii) 																					
to reflect in the prospectus any facts or events arising after the effective date of the registration statement (or the most recent post-effective amendment thereof) which, individually or in the

II-4

Table of Contents aggregate, represent a fundamental change in the information set forth in the registration statement;

Notwithstanding the foregoing, any increase or decrease in volume of securities offered (if the total dollar value of securities offered would not exceed that which was registered) and any deviation from the low or high end of the estimated maximum offering range may be reflected in the form of prospectus filed with the SEC pursuant to Rule 424(b) if, in the aggregate, the changes in volume and price represent no more than 20% change in the maximum aggregate offering price set forth in the “Calculation of Registration Fee” table in the effective registration statement; and to include any material information with respect to the plan of distribution not previously disclosed in the registration statement or any material change to such information in the registration statement

		2	  	That, for the purpose of determining any liability under the Securities Act of 1933, each such post-effective amendment shall be deemed to be a new registration statement relating to the securities offered therein, and the offering of such securities at that time shall be deemed to be the initial bona fide offering thereof.																			
																							
																							
		3	  	To remove from registration by means of a post-effective amendment any of the securities being registered which remain unsold at the termination of the offering.																			
																							
																							
		4	  	That, for the purpose of determining liability under the Securities Act of 1933 to any purchaser, each prospectus filed pursuant to Rule 424(b) as part of a registration statement relating to an offering, other than registration statements relying on Rule 430B or other than prospectuses filed in reliance on Rule 430A, shall be deemed to be part of and included in the registration statement as of the date it is first used after effectiveness; provided, however, that no statement made in a registration statement or prospectus that is part of the registration statement or made in a document incorporated or deemed incorporated by reference into the registration statement or prospectus that is part of the registration statement will, as to a purchaser with a time of contract of sale prior to such first use, supersede or modify any statement that was made in the registration statement or prospectus that was part of the registration statement or made in any such document immediately prior to such date of first use.																			
																							
																							
		5	  	That, for the purpose of determining liability of the registrant under the Securities Act of 1933 to any purchaser in the initial distribution of the securities, the undersigned registrant undertakes that in a primary offering of securities of the undersigned registrant pursuant to this registration statement, regardless of the underwriting method used to sell the securities to the purchaser, if the securities are offered or sold to such purchaser by means of any of the following communications, the undersigned registrant will be a seller to the purchaser and will be considered to offer or sell such securities to such purchaser:																			
																							
																							
		i) 	any preliminary prospectus or prospectus of the undersigned registrant relating to the offering required to be filed pursuant to Rule 424;																				
																							
																							
		ii) 	any free writing prospectus relating to the offering prepared by or on behalf of the undersigned registrant or used or referred to by the undersigned registrant;																				
																							
																							
		iii) 	the portion of any other free writing prospectus relating to the offering containing material information about the undersigned registrant or its securities provided by or on behalf of the undersigned registrant; and																				
																							
																							
		iv) 	any other communication that is an offer in the offering made by the undersigned registrant to the purchaser.																				
																							
																							
		(b) 	  	The undersigned registrant hereby undertakes that, for purposes of determining any liability under the Securities Act of 1933, each filing of the registrant’s annual report pursuant to Section 13(a) or Section 15(d) of the Securities Exchange Act of 1934 (and, where applicable, each filing of an employee benefit plan’s annual report pursuant to Section 15(d) of the Securities Exchange Act of 1934) that is incorporated by reference in the registration statement shall be deemed to be a new registration statement relating to the securities offered therein, and the offering of such securities at that time shall be deemed to be the initial bona fide offering thereof.																			
II-5

Table of Contents (c) (1) The undersigned registrant hereby undertakes as follows: that prior to any public reoffering of the securities registered hereunder through use of a prospectus which is a part of this registration statement, by any person or party who is deemed to be an underwriter within the meaning of Rule 145(c), the issuer undertakes that such reoffering prospectus will contain the information called for by the applicable registration form with respect to reofferings by persons who may be deemed underwriters, in addition to the information called for by the other Items of the applicable form.

		-2	  	The registrant undertakes that every prospectus (i) that is filed pursuant to the paragraph immediately preceding, or (ii) that purports to meet the requirements of Section 10(a)(3) of the Securities Act of 1933 and is used in connection with an offering of securities subject to Rule 415, will be filed as a part of an amendment to the registration statement and will not be used until such amendment is effective, and that, for purposes of determining any liability under the Securities Act of 1933, each such post-effective amendment shall be deemed to be a new registration statement relating to the securities offered therein, and the offering of such securities at that time shall be deemed to be the initial bona fide offering thereof.																			
																							
																							
		(d) 	  	Insofar as indemnification for liabilities arising under the Securities Act of 1933 may be permitted to directors, officers and controlling persons of the registrant pursuant to the foregoing provisions, or otherwise, the registrant has been advised that in the opinion of the SEC such indemnification is against public policy as expressed in the Securities Act of 1933 and is, therefore, unenforceable. In the event that a claim for indemnification against such liabilities (other than the payment by the registrant of expenses incurred or paid by a director, officer or controlling person of the registrant in the successful defense of any action, suit or proceeding) is asserted by such director, officer or controlling person in connection with the securities being registered, the registrant will, unless in the opinion of its counsel the matter has been settled by controlling precedent, submit to a court of appropriate jurisdiction the question whether such indemnification by it is against public policy as expressed in the Securities Act of 1933 and will be governed by the final adjudication of such issue.																			
																							
																							
		(e) 	  	The undersigned registrant hereby undertakes to respond to requests for information that is incorporated by reference into the prospectus pursuant to Item 4, 10(b), 11, or 13 of this Form, within one business day of receipt of such request, and to send the incorporated documents by first class mail or other equally prompt means. This includes information contained in documents filed subsequent to the effective date of the registration statement through the date of responding to the request.																			
																							
																							
		(f) 	  	The undersigned registrant hereby undertakes to supply by means of a post-effective amendment all information concerning a transaction, and the company being acquired involved therein, that was not the subject of and included in the registration statement when it became effective.																			
II-6

Table of Contents

SIGNATURES

Pursuant to the requirements of the Securities Act of 1933, the registrant has duly caused this Registration Statement to be signed on its behalf by the undersigned, thereunto duly authorized, in the City of Mountain View, State of California, on March 29, 2016.

ALPHABET INC. Registrant

By: /s/ LARRY PAGE Larry Page Chief Executive Officer

Pursuant to the requirements of the Securities Act of 1933, this Registration Statement has been signed by the following persons in the capacities and on the dates indicated.

Signature

Title

Date

/s/ LARRY PAGE

Larry Page

Chief Executive Officer and Director

(Principal Executive Officer)

42458

/s/ RUTH PORAT

Ruth Porat

Senior Vice President and Chief Financial Officer

(Principal Financial Officer)

42458

/s/ JAMES G. CAMPBELL

James G. Campbell

Vice President and Corporate Controller

(Principal Accounting Officer)

42458

Eric E. Schmidt

Executive Chairman of the Board of Directors

Sergey Brin

President and Director

L. John Doerr

Director

Diane B. Greene

Director

John L. Hennessy

Director

Ann Mather

Director

Alan R. Mulally

Director

Paul S. Otellini

Director

II-7

Table of Contents

Signature

Title

Date

K. Ram Shriram

Director

Shirley M. Tilghman

Director

By: /s/ LARRY PAGE Name: Larry Page Title: Attorney - in - Fact 42458
II-8

Table of Contents

INDEX TO EXHIBITS

Exhibit

No.

Description 2.1 Agreement and Plan of Merger, dated October 2, 2015, by and among Google Inc., Alphabet Inc. and Maple Technologies Inc. (incorporated by reference to Exhibit 2.1 of Alphabet Inc.’s Current Report on Form 8-K12B filed on October 2, 2015 (File No. 001-37580))

3.1 Amended and Restated Certificate of Incorporation of Alphabet Inc., dated October 2, 2015 (incorporated by reference to Exhibit 3.1 of Alphabet Inc.’s Current Report on Form 8-K12B filed on October 2, 2015 (File No. 001-37580))

3.2 Amended and Restated Bylaws of Alphabet Inc., dated October 2, 2015 (incorporated by reference to Exhibit 3.2 of Alphabet Inc.’s Current Report on Form 8-K filed on October 2, 2015 (File No. 001-37580))

4.1 Indenture, dated as of February 12, 2016 between Alphabet Inc. and The Bank of New York Mellon Trust Company, N.A., as trustee (incorporated by reference to Exhibit 4.3 of Alphabet Inc.’s Registration Statement on Form S-3 filed on February 12, 2016 (File No. 333-209510))

4.2* Indenture, dated as of May 19, 2011 between Google Inc. and The Bank of New York Mellon Trust Company, N.A., as trustee

4.3* Form of First Supplemental Indenture, between Google Inc. and The Bank of New York Mellon Trust Company, N.A., as trustee

4.4* Form of First Supplemental Indenture, between Alphabet Inc. and The Bank of New York Mellon Trust Company, N.A., as trustee

4.5* Form of Google Inc.’s 3.625% Note due 2021

4.6* Form of Google Inc.’s 3.375% Note due 2024

4.7* Form of Alphabet Inc.’s 3.625% Note due 2021 (included as part of Exhibit 4.4)

4.8* Form of Alphabet Inc.’s 3.375% Note due 2024 (included as part of Exhibit 4.4)

5.1* Opinion of Cleary Gottlieb Steen & Hamilton LLP

12.1 Statement regarding computation of Ratio of Earnings to Fixed Charges (incorporated by reference to Exhibit 12 of Alphabet Inc.’s Annual Report on Form 10-K filed on February 11, 2016 (File No. 001-37580))

21.1 List of subsidiaries (incorporated by reference to Exhibit 21.01 of Alphabet Inc.’s Annual Report on Form 10-K filed on February 11, 2016 (File No. 001-37580))

23.1# Consent of Ernst & Young LLP, Independent Registered Public Accounting Firm

23.2* Consent of Cleary Gottlieb Steen & Hamilton LLP (included as part of Exhibit 5.1)

24.1* Power of Attorney

25.1* Statement of Eligibility and Qualification on Form T-1 under the Trust Indenture Act of 1939, as amended

99.1# Letter of Transmittal and Consent

  	Previously filed.																					
Filed herewith.
External Resources:

d49534dex231.htm CONSENT OF E&Y LLP

ENT> EX-23.1 2 d49534dex231.htm CONSENT OF E&Y LLP CONSENT OF E&Y LLP

Exhibit 23.1

CONSENT OF ERNST & YOUNG LLP, INDEPENDENT REGISTERED PUBLIC ACCOUNTING FIRM

We consent to the reference to our firm under the caption “Experts” in Amendment No. 1 to the Registration Statement (Form S-4 No. 333-209515) and related Prospectus of Alphabet Inc. for the registration of its 3.625% Notes due 2021 and 3.375% Notes due 2024 and to the incorporation by reference therein of our reports dated February 11, 2016, with respect to the consolidated financial statements and schedule of Alphabet Inc., and the effectiveness of internal control over financial reporting of Alphabet Inc., included in its Annual Report (Form 10-K) for the year ended December 31, 2015, filed with the Securities and Exchange Commission.

/s/ Ernst & Young LLP

San Jose, California

42457 d49534dex991.htm LETTER OF TRANSMITTAL

ENT> EX-99.1 3 d49534dex991.htm LETTER OF TRANSMITTAL LETTER OF TRANSMITTAL

Exhibit 99.1

ALPHABET INC.

LETTER OF TRANSMITTAL AND CONSENT

Offers to Exchange

All Outstanding Google Inc. Notes of the Series Specified Below

and Solicitation of Consents to Amend the Related Indenture and Notes

CUSIP No.

Series of Notes Issued

by Google to be

Exchanged

Aggregate Principal

Amount

Series of Notes to be

Issued by Alphabet 38259P AB8 3.625% Notes due 2021 1000000000 38259P AD4 3.375% Notes due 2024 1000000000

THE EXCHANGE OFFERS WILL EXPIRE IMMEDIATELY FOLLOWING 11:59 P.M., NEW YORK CITY TIME, ON APRIL 25, 2016, UNLESS EXTENDED (THE “EXPIRATION DATE”). NOTES TENDERED IN THE EXCHANGE OFFERS MAY BE VALIDLY WITHDRAWN PRIOR TO THE EXPIRATION DATE. BY TENDERING YOUR NOTES, YOU WILL BE DEEMED TO HAVE VALIDLY DELIVERED YOUR CONSENT TO THE PROPOSED AMENDMENTS TO THE GOOGLE INDENTURE WITH RESPECT TO THE RELEVANT SERIES OF GOOGLE NOTES. CONSENTS MAY BE REVOKED PRIOR TO THE EXPIRATION DATE BY VALIDLY WITHDRAWING THE RELATED TENDER OF GOOGLE NOTES PRIOR TO THE EXPIRATION DATE.

Deliver to the Exchange Agent:

D.F. King & Co., Inc.

By Facsimile (Eligible Institutions Only):

(212) 709-3328

Attention: Krystal Scrudato

By Mail or Hand:

48 Wall Street, 22nd Floor

New York, New York 10005

Attention: Krystal Scrudato

DELIVERY OF THIS INSTRUMENT TO AN ADDRESS OTHER THAN AS SET FORTH ABOVE OR TRANSMISSION OF INSTRUCTIONS VIA A FACSIMILE NUMBER OTHER THAN THE ONE LISTED ABOVE WILL NOT CONSTITUTE A VALID DELIVERY. THE INSTRUCTIONS ACCOMPANYING THIS LETTER OF TRANSMITTAL AND CONSENT SHOULD BE READ CAREFULLY BEFORE THIS LETTER OF TRANSMITTAL AND CONSENT IS COMPLETED.

The undersigned hereby acknowledges receipt of the preliminary prospectus dated March 29, 2016 (the “Prospectus”) of Alphabet Inc., as issuer (“Alphabet”), and this Letter of Transmittal and Consent (this “Letter of Transmittal”), which together describe (a) the offers of Alphabet (each, an “exchange offer” and collectively, the “exchange offers”) to exchange each validly tendered and accepted note (each, a “Google Note” and collectively, the “Google Notes”) of a series listed on the cover page of this Letter of Transmittal issued by Google Inc. (“Google”), for a new note (each, an “Alphabet Note” and, collectively, the “Alphabet Notes”) of a corresponding series to be issued by Alphabet and (b) Google’s solicitation of consents (each, a “consent solicitation” and, collectively, the “consent solicitations”) to amend the Google Indenture and the Google Notes, in the case of each of (a) and (b) above, upon the terms and subject to the conditions described in the Prospectus and this Letter of Transmittal. Capitalized terms used herein without definition have the meanings ascribed to them in the Prospectus.

The consummation of the exchange offers is subject to, and conditional upon, among other things, the receipt of valid consents to the proposed amendments from the holders of a majority of the outstanding aggregate principal amount of each series of Google Notes (the “Requisite Consents”). We may, at our option and in our sole discretion, waive any such conditions, except the condition that the registration statement relating to the

exchange offers and consent solicitation, has been declared effective by the U.S. Securities and Exchange Commission (the “SEC”). All conditions to the exchange offers must be satisfied or, where permitted, waived, at or by the Expiration Date. The proposed amendments may become effective with respect to any series of Google Notes for which the Requisite Consents are received or the Requisite Consent Condition (as defined below) has been waived, if necessary.

This Letter of Transmittal is to be used to accept one or more of the exchange offers (and to provide the related consents) if the applicable Google Notes are (i) to be tendered by effecting a book-entry transfer into the exchange agent’s account at The Depository Trust Company (“DTC”) and instructions are not being transmitted through DTC’s Automated Tender Offer Program (“ATOP”) or (ii) held in certificated form and thus are to be physically delivered to the exchange agent. Unless you intend to tender Google Notes through ATOP, you should complete, execute and deliver this Letter of Transmittal, any signature guarantees and any other required documents to indicate the action you desire to take with respect to the exchange offers.

Holders of Google Notes tendering Google Notes by book-entry transfer to the exchange agent’s account at DTC may execute the tender through ATOP and in that case need not complete, execute and deliver this Letter of Transmittal. DTC participants accepting the applicable exchange offer may transmit their acceptance to DTC, which will verify the acceptance and execute a book-entry delivery to the exchange agent’s account at DTC. DTC will then send an “agent’s message” (as described in the Prospectus) to the exchange agent for its acceptance. Delivery of the agent’s message by DTC will satisfy the terms of the exchange offers as to execution and delivery of a letter of transmittal by the DTC participant identified in the agent’s message. Delivery of Google Notes pursuant to a notice of guaranteed delivery is not permitted and any Google Notes so delivered shall not be considered validly tendered.

Holders of Google Notes held in certificated form tendering any of those Google Notes must complete, execute and deliver this Letter of Transmittal, any signature guarantees and other required documents, as well as the certificate representing those Google Notes that the holder wishes to tender in the applicable exchange offer. Delivery is not complete until the required items are actually received by the exchange agent.

Holders tendering Google Notes will thereby consent to the proposed amendments to the Google Indenture and the Google Notes, as described in the Prospectus. The completion, execution and delivery of this Letter of Transmittal (or the delivery by DTC of an agent’s message in lieu thereof) constitutes the delivery of a consent with respect to the Google Notes tendered.

Subject to the terms and conditions of the exchange offers and the consent solicitations and applicable law, Alphabet will deposit with the exchange agent (in each case, as more fully described in the Prospectus):

		• 	  	Alphabet Notes (in book-entry form); and																			
																							
																							
		• 	  	the cash consideration.																			
Assuming the conditions to the exchange offers are satisfied or, where permitted, waived, Alphabet will issue new Alphabet Notes in book-entry form and pay the cash consideration promptly following the Expiration Date of the exchange offers.

The exchange agent will act as agent for the tendering holders for the purpose of receiving any cash payments from Alphabet. DTC will receive the Alphabet Notes from Alphabet and deliver Alphabet Notes (in book-entry form) to or at the direction of those holders. DTC will make each of these deliveries on the same day it receives Alphabet Notes with respect to Google Notes accepted for exchange, or as soon thereafter as practicable.

The term “holder” with respect to the exchange offers and the consent solicitations means any person in whose name Google Notes are registered on the books of Google or any other person who has obtained a properly completed bond power from the registered holder. The undersigned has completed, executed and delivered this

2

Letter of Transmittal to indicate the action the undersigned desires to take with respect to the exchange offers and the consent solicitations. Holders who wish to tender their Google Notes using this Letter of Transmittal must complete it in its entirety.

PLEASE READ THE ENTIRE LETTER OF TRANSMITTAL (INCLUDING THE INSTRUCTIONS HERETO) AND THE PROSPECTUS CAREFULLY BEFORE COMPLETING THIS LETTER OF TRANSMITTAL.

THE INSTRUCTIONS INCLUDED WITH THIS LETTER OF TRANSMITTAL MUST BE FOLLOWED. QUESTIONS AND REQUESTS FOR ASSISTANCE OR ADDITIONAL COPIES OF THE PROSPECTUS AND THIS LETTER OF TRANSMITTAL MAY BE DIRECTED TO THE INFORMATION AGENT.

To effect a valid tender of Google Notes through the completion, execution and delivery of this Letter of Transmittal, the undersigned must complete the table entitled “Description of Google Notes Tendered and in Respect of Which Consents are Delivered” below and sign this Letter of Transmittal where indicated.

The Alphabet Notes will be delivered only in book-entry form through DTC and only to the DTC account of the undersigned or the undersigned’s custodian as specified in the table below, and the payment of the cash consideration will be made by credit to the DTC account of the undersigned (unless specified otherwise in the “Special Payment Instructions” below) in immediately available funds. Failure to provide the information necessary to effect delivery of Alphabet Notes will render a tender defective and Alphabet will have the right, which it may waive, to reject such tender.

The Google Notes to which this Letter of Transmittal relates should be listed below. If the space below is inadequate, list the registered numbers and principal amounts on a separate signed schedule and affix the list to this Letter of Transmittal.

3

DESCRIPTION OF GOOGLE NOTES TENDERED AND IN RESPECT OF WHICH

CONSENTS ARE DELIVERED

Name(s) and Address(es) of Registered

Holder(s) or Name of DTC Participant and

Participant’s DTC Account Number in which

Notes are Held

(Please fill in, if blank) Series/ CUSIP No.* Certificate Numbers ** Aggregate Principal Amount Represented ***

Principal Amount    																								
Tendered And

As To Which

Consents Are

Delivered****

  * 			Enter the title and the CUSIP Number of the series of Google Notes being tendered and as to which consents are being delivered.																					
** 			Need not be completed by Holders tendering by book-entry transfer (see below).																					
*** Unless otherwise indicated in the column labeled “Principal Amount Tendered And As To Which Consents Are Delivered” and subject to the terms and conditions set forth in the Prospectus, a Holder will be deemed to have tendered the entire aggregate principal amount represented by the Google Notes indicated in the column labeled “Aggregate Principal Amount Represented.” See Instruction 5. **** For a valid tender, consents must be given for all Notes tendered. Accordingly, consents will be deemed to be delivered for all Google Notes tendered. ¨ CHECK HERE IF TENDERED GOOGLE NOTES ARE ENCLOSED HEREWITH. ¨ CHECK HERE IF TENDERED GOOGLE NOTES ARE BEING DELIVERED BY BOOK-ENTRY TRANSFER MADE TO THE ACCOUNT MAINTAINED BY THE EXCHANGE AGENT WITH DTC AND COMPLETE THE FOLLOWING (FOR USE BY ELIGIBLE INSTITUTIONS ONLY):

Name of Tendering Institution:

Account Number:

Transaction Code Number:

By crediting the Google Notes to the exchange agent’s account at DTC using ATOP and by complying with applicable ATOP procedures with respect to the exchange offers, including, if applicable, transmitting to the exchange agent an agent’s message in which the holder of the Google Notes acknowledges and agrees to be bound by the terms of, and makes the representations and warranties contained in, this Letter of Transmittal, the participant in DTC confirms on behalf of itself and the beneficial owners of such Google Notes all provisions of this Letter of Transmittal (including all representations and warranties) applicable to it and such beneficial owner as fully as if it had completed the information required herein and executed and transmitted this Letter of Transmittal to the exchange agent.

4

SIGNATURES MUST BE PROVIDED BELOW

PLEASE READ THE ACCOMPANYING INSTRUCTIONS CAREFULLY

Ladies and Gentlemen:

The undersigned hereby (a) tenders to Alphabet, upon the terms and subject to the conditions set forth in the Prospectus and in this Letter of Transmittal (collectively, the “Terms and Conditions”), receipt of which is hereby acknowledged, the principal amount or amounts of each series of Google Notes indicated in the table above entitled “Description of Google Notes Tendered and in Respect of Which Consents are Delivered” (or, if nothing is indicated therein, with respect to the entire aggregate principal amount represented by the series of Google Notes indicated in such table) and (b) consents, with respect to such principal amount or amounts, to the proposed amendments described in the Prospectus to the Google Indenture and the Google Notes and to the execution of a supplemental indenture (the “Supplemental Indenture”) effecting such proposed amendments.

The undersigned understands that the tender and consent made hereby will remain in full force and effect unless and until such tender and consent are withdrawn and revoked in accordance with the procedures set forth in the Prospectus. The undersigned understands that the consent may not be revoked and tendered Google Notes may not be withdrawn after the Expiration Date, 11:59 p.m., New York City time, on April 25, 2016, unless extended.

If the undersigned is not the registered holder of the Google Notes indicated in the table above entitled “Description of Google Notes Tendered and in Respect of which Consents are Delivered” or such holder’s legal representative or attorney–in–fact (or, in the case of Google Notes held through DTC, the DTC participant for whose account such Google Notes are held), then the undersigned has obtained a properly completed irrevocable proxy that authorizes the undersigned (or the undersigned’s legal representative or attorney–in–fact) to deliver a consent in respect of such Google Notes on behalf of the holder thereof, and such proxy is being delivered with this Letter of Transmittal.

The consummation of the exchange offers is subject to, and conditional upon, among other things, the receipt of valid consents to the proposed amendments to the Google Indenture and the Google Notes of a majority in aggregate principal amount of each series of Google Notes outstanding (the “Requisite Consent Condition”). We may, at our option and in our sole discretion, waive any such conditions, except the condition that the registration statement relating to the exchange offers and consent solicitations has been declared effective by the U.S. Securities and Exchange Commission. All conditions to the exchange offers must be satisfied or, where permitted, waived, at or by the Expiration Date. The proposed amendments may become effective with respect to any series of Google Notes for which the Requisite Consents are received and the Requisite Consent Condition has been waived.

The undersigned understands that, upon the terms and subject to the conditions of the exchange offers, Google Notes of any series validly tendered and accepted for exchange will be exchanged for Alphabet Notes of the corresponding series. The undersigned understands that, under certain circumstances, Alphabet may not be required to accept any of the Google Notes tendered (including any such Google Notes tendered after the Expiration Date). If any Google Notes are not accepted for exchange for any reason or if Google Notes are withdrawn, such unexchanged or withdrawn Google Notes will be returned without expense to the undersigned’s account at DTC or such other account as designated herein pursuant to the book-entry transfer procedures described in the Prospectus as promptly as practicable after the Expiration Date or termination of the applicable exchange offer.

5

Subject to and effective upon the acceptance for exchange and issuance of Alphabet Notes and the payment of the cash consideration in exchange for Google Notes tendered upon the terms and subject to the conditions of the exchange offers, the undersigned hereby:

-1 irrevocably sells, assigns and transfers to or upon the order of Alphabet all right, title and interest in and to, and all claims in respect of or arising or having arisen as a result of the undersigned’s status as a holder of such Google Notes tendered thereby;

-2 represents and warrants that such Google Notes tendered were owned as of the date of tender and, upon acceptance of such Google Notes for exchange, will be transferred, free and clear of all liens, charges, claims, encumbrances, interests and restrictions of any kind; and

-3 consents to the proposed amendments described in the Prospectus under “The Proposed Amendments” with respect to the series of Google Notes tendered.

The undersigned understands that tenders of Google Notes pursuant to any of the procedures described in the Prospectus and in the instructions in this Letter of Transmittal, if and when accepted by Alphabet, will constitute a binding agreement between the undersigned and Alphabet upon the Terms and Conditions, which agreement will be governed by, and construed in accordance with, the laws of the State of New York.

The undersigned hereby irrevocably constitutes and appoints the exchange agent as the true and lawful agent and attorney-in-fact of the undersigned with respect to the Google Notes tendered hereby (with full knowledge that the exchange agent also acts as the agent of Alphabet) with full powers of substitution and revocation (such power of attorney being deemed to be an irrevocable power coupled with an interest) to:

-1 transfer ownership of such Google Notes on the account books maintained by DTC together with all accompanying evidences of transfer and authenticity to or upon the order of Alphabet;

-2 present such Google Notes for transfer of ownership on the books of Alphabet;

-3 deliver to Alphabet and the Google Trustee this Letter of Transmittal as evidence of the undersigned’s consent to the proposed amendments;

-4 receive all benefits and otherwise exercise all rights of beneficial ownership of such Google Notes, all in accordance with the terms of the exchange offers, as described in the Prospectus; and

-5 receive on behalf of the undersigned the Alphabet Notes issuable, and cash payable, in respect of such Google Notes upon their acceptance for exchange.

The undersigned further acknowledges and agrees that under no circumstances will interest on the cash consideration or any accrued and unpaid interest on such portion, be paid by Alphabet, by reason of any delay on the part of the exchange agent in making delivery or payment to the holders entitled thereto or any delay in the allocation or crediting of securities or monies received by DTC to participants in DTC or in the allocation or crediting of securities or monies received by participants to beneficial owners and in no event will Alphabet be liable for interest or damages in relation to any delay or failure of payment to be remitted to any holder.

All authority conferred or agreed to be conferred by this Letter of Transmittal shall not be affected by, and shall survive, the death or incapacity of the undersigned, and any obligation of the undersigned hereunder shall be binding upon the heirs, executors, administrators, trustees in bankruptcy, personal and legal representatives, successors and assigns of the undersigned.

By execution hereof, the undersigned hereby represents that if it is located outside the United States, the exchange offers and consent solicitations and the undersigned’s acceptance of such exchange offers and consent solicitations do not contravene the applicable laws of where it is located and that its participation in the exchange

6

offers and consent solicitations will not impose on Alphabet any requirement to make any deliveries, filings or registrations. The undersigned hereby represents and warrants as follows:

-6 The undersigned (i) has full power and authority to tender the Google Notes tendered hereby and to sell, assign and transfer all right, title and interest in and to such Google Notes and (ii) either has full power and authority to consent to the proposed amendments to the Google Indenture and the Google Notes or is delivering a duly executed consent (which is included in this Letter of Transmittal) from a person or entity having such power and authority.

-7 The Google Notes being tendered hereby were owned as of the date of tender, free and clear of any liens, charges, claims, encumbrances, interests and restrictions of any kind, and upon acceptance of such Google Notes by Alphabet, Alphabet will acquire good, indefeasible and unencumbered title to such Google Notes, free and clear of all liens, charges, claims, encumbrances, interests and restrictions of any kind, when the same are accepted by Alphabet.

-8 The undersigned will, upon request, execute and deliver any additional documents deemed by the exchange agent or Alphabet to be necessary or desirable to complete the sale, assignment and transfer of the Google Notes tendered hereby, to perfect the undersigned’s consent to the proposed amendments or to complete the execution of the Supplemental Indenture with respect to each applicable series of Google Notes.

-9 The undersigned acknowledges that none of Alphabet, Google, the dealer managers, the exchange agent and information agent, the Google Trustee or the trustee of the Alphabet Notes, or any other person has made any statement, representation, or warranty, express or implied, to it with respect to Alphabet, Google or the offer or sale of any Alphabet Notes, other than the information included in the Prospectus (as supplemented to the Expiration Date).

-10 Each holder and transferee of an Alphabet Note will be deemed to have represented and warranted that either (i) no portion of the assets used by it to acquire or hold the Alphabet Notes constitutes assets of any Plan or (ii) the acquisition and holding of the Alphabet Notes by such purchaser or transferee will not constitute or result in a non-exempt prohibited transaction under Section 406 of the Employee Retirement Income Security Act of 1974, as amended, or Section 4975 of the Internal Revenue Code of 1986, as amended, or a similar violation under any applicable other federal, state, local, non-U.S. or other laws or regulations that are similar to such provisions.

-11 The undersigned has received and reviewed the Prospectus.

-12 The terms and conditions of the exchange offers and consent solicitations shall be deemed to be incorporated in, and form a part of, this Letter of Transmittal, which shall be read and construed accordingly.

The undersigned understands that consents may be revoked and tenders of Google Notes may be withdrawn only at any time prior to the Expiration Date of the exchange offers. A valid withdrawal of tendered Google Notes prior to the Expiration Date will constitute the concurrent valid revocation of such holder’s related consent. A notice of withdrawal with respect to tendered Google Notes will be effective only if delivered to the exchange agent in accordance with the specific procedures set forth in the Prospectus.

The minimum period during which the exchange offers and consent solicitations will remain open following material changes in the terms of the exchange offers and consent solicitations or in the information concerning the exchange offers and consent solicitations will depend upon the facts and circumstances of such change, including the relative materiality of the changes.

In accordance with Rule 14e-1 under the Securities Exchange Act of 1934, if we elect to change the consideration offered or the percentage of Google Notes sought, the relevant exchange offers and consent solicitations will remain open for a minimum ten business-day period following the date that the notice of such

Earned Income credit "Number of Returns"

Column1 Column2 Column3 Column4 Column5 Column6 Column7 Alphabet Inc . 8-K12É, Received: 10/02/201 . .https://content.edgar—online.com/ExternaILink/ED. .

	"UNITED STATES
SECURITIES AND EXCHANGE COMMISSION Washington, D.C. 20549" (FORM: D) "CURRENT REPORT Pursuant to Section 13 or 15(d) of The Securities Exchange Act of 1934 Date of Report (Date of earliest event reported) October 2,2015" ALPHABET INC.

	(Exact 		of registrant as specified in its charter)																				
					61-1767919																		
Delaware		001-36380																					
other jurisdiction incorporation		"(Commission
File 1600 Amphitheatre Parkssay Mountain View, 94043 zip code) (Address of principal offices. including " (61-176567 1IRS Employer Employer Identification No.)

		(650) 253-0000																					
		(Registrant's telephone 		including																			
0 (0 0) 0 (0 0) 0 (0 0) 0 (0 0)

0 (0 0) 0 (0 0) 0 (0 0) 0 (0 0)

0 (0 0) ο (0 0)

0 (0 0) 0 (0 0)

o (0 0) 0 (0 0) 0 (0 , 0) 0 (0 , 0) 0 (0 0) 0 (0 0) 0 (0 0) 0 (0 0) 0 (0 0) 0 (0 0)

o (0 0) 0 (0 0) 0 (0 0) Ο (0 0) 0 (0 0) Ο (0 0)

Ο (0 0) o (0 0) 0 (0 0) 0 (0 0)

0 (0 0) 0 (0 0)

o (0 0) 0 (0 0)

Capacity:

Address:

(Including Zip Code)

Area Code and Telephone No.:

Taxpayer Identification or Social Security No.:

9

SIGNATURE(S) GUARANTEED (IF REQUIRED)

See Instruction 4.

Certain signatures must be guaranteed by a Medallion Signature Guarantor.

Signature(s) guaranteed by a Medallion Signature Guarantor:

(Authorized Signature)

(Title)

(Name of Firm)

(Address, Including Zip Code)

(Area Code and Telephone Number)

Dated: , 2016

10

SPECIAL PAYMENT INSTRUCTIONS

(See instructions 2, 4 and 5)

To be completed ONLY if (i) payment of any cash amounts is to be credited to an account maintained at DTC other than the account indicated above, or (ii) Google Notes tendered by book-entry transfer that are not accepted for exchange are to be returned by credit to an account maintained at DTC other than the account indicated above.

¨ Credit any cash amounts or unexchanged Google Notes delivered by book-entry transfer to DTC account number set forth below:

(DTC Account Number)

Name of Account Party:

INSTRUCTIONS

FORMING PART OF THE TERMS AND CONDITIONS OF THE EXCHANGE OFFERS AND

CONSENT SOLICITATIONS

Delivery of Letter of Transmittal. This Letter of Transmittal is to be completed by holders either if certificates are to be forwarded herewith or if tenders of Google Notes are to be made by book-entry transfer to the exchange agent’s account at DTC and instructions are not being transmitted through ATOP.
Certificates for all physically tendered Google Notes or a confirmation of a book-entry transfer into the exchange agent’s account at DTC of all Google Notes delivered electronically, as well as a properly completed and duly executed Letter of Transmittal (or a manually signed facsimile thereof) or properly transmitted agent’s message, and any other documents required by this Letter of Transmittal, must be received by the exchange agent at its address set forth herein before the expiration date of the applicable exchange offer.

Any financial institution that is a participant in DTC may electronically transmit its acceptance of the applicable exchange offer by causing DTC to transfer Google Notes to the exchange agent in accordance with DTC’s ATOP procedures for such transfer prior to the expiration date of such exchange offer. The exchange agent will make available its general participant account at DTC for the Google Notes for purposes of the exchange offers. Delivery of a Letter of Transmittal to DTC will not constitute valid delivery to the exchange agent. No Letter of Transmittal should be sent to Alphabet, Google, DTC or the dealer managers.

The method of delivery of this Letter of Transmittal and all other required documents, including delivery through DTC and any acceptance or agent’s message delivered through ATOP, is at the option and risk of the tendering holder. If delivery is by mail, registered mail with return receipt requested, properly insured is recommended. Instead of delivery by mail, it is recommended that the holder use an overnight or hand-delivery service. In all cases, sufficient time should be allowed to ensure timely delivery.

Any beneficial owner whose Google Notes are held by or in the name of a custodial entity such as a broker, dealer, commercial bank, trust company or other nominee, should be aware that such custodial entity may have deadlines earlier than the expiration date for such custodial entity to be advised of the action that the beneficial owner may wish for the custodial entity to take with respect to the beneficial owner’s Google Notes. Accordingly, such beneficial owners are urged to contact any custodial entities through which such Google Notes are held as soon as possible in order to learn of the applicable deadlines of such entities.

Neither Alphabet or the exchange agent is under any obligation to notify any tendering holder of Alphabet’s acceptance of tendered Google Notes prior to the expiration of the exchange offers.

11

Delivery of Alphabet Notes. Alphabet Notes will be delivered only in book-entry form through DTC and only to the DTC account of the tendering holder or the tendering holder’s custodian. Accordingly, the appropriate DTC participant name and number (along with any other required account information) to permit such delivery must be provided in the table entitled “Description of the Google Notes Tendered and in Respect of Which Consents are Delivered.” Failure to do so will render a tender of Google Notes defective and Alphabet will have the right, which it may waive, to reject such tender. Holders who anticipate tendering by a method other than through DTC are urged to promptly contact a bank, broker or other intermediary (that has the facility to hold securities through DTC) to arrange for receipt of any Alphabet Notes delivered pursuant to the exchange offers and to obtain the information necessary to complete the table.

Amount of Tenders. Tender of Google Notes (and corresponding consents thereto) will be accepted only in minimum denominations of $2,000 and integral multiples of $1,000 in excess thereof. No alternative, conditional or contingent tenders will be accepted. Holders who tender less than all of their Google Notes must continue to hold Google Notes in the minimum authorized denomination of $2,000 principal amount.

Signatures on Letter of Transmittal, Instruments of Transfer, Guarantee of Signatures. For purposes of this Letter of Transmittal, the term “registered holder” means an owner of record as well as any DTC participant that has Google Notes credited to its DTC account. Except as otherwise provided below, all signatures on this Letter of Transmittal must be guaranteed by a recognized participant in the Securities Transfer Agents Medallion Program, the NYSE Medallion Signature Program or the Stock Exchange Medallion Program (each, a “Medallion Signature Guarantor”). Signatures on this Letter of Transmittal need not be guaranteed if:

 	• 	  	this Letter of Transmittal is signed by a participant in DTC whose name appears on a security position listing of DTC as the owner of the Google Notes and the holder(s) has/have not completed the box entitled “Special Payment Instructions” on this Letter of Transmittal; or																			
 																						
 																						
 	• 	  	the Google Notes are tendered for the account of an eligible institution.																			
An eligible institution is one of the following firms or other entities identified in Rule 17Ad–15 under the Securities Exchange Act of 1934, as amended (as the terms are defined in such Rule):

		• 	  	a bank;																			
																							
																							
		• 	  	a broker, dealer, municipal securities dealer, municipal securities broker, government securities dealer or government securities broker;																			
																							
																							
		• 	  	a credit union;																			
																							
																							
		• 	  	a national securities exchange, registered securities association or clearing agency; or																			
																							
																							
		• 	  	a savings institution that is a participant in a Securities Transfer Association recognized program.																			
If the Google Notes are registered in the name of a person other than the signer of this Letter of Transmittal or if Google Notes not accepted for exchange are to be returned to a person other than the registered holder, then the signatures on this Letter of Transmittal accompanying the tendered Google Notes must be guaranteed by a Medallion Signature Guarantor as described above.

If any of the Google Notes tendered are held by two or more registered holders, all of the registered holders must sign this Letter of Transmittal.

If a number of Google Notes registered in different names are tendered, it will be necessary to complete, sign and submit as many separate copies of this Letter of Transmittal as there are different registrations of such Google Notes.

If this Letter of Transmittal is signed by the registered holder or holders of the Google Notes (which term, for the purposes described herein, shall include a participant in DTC whose name appears on a security listing as

12

the owner of the Google Notes) listed and tendered hereby, no endorsements of the tendered Google Notes or separate written instruments of transfer or exchange are required. In any other case, if tendering Google Notes, the registered holder (or acting holder) must either validly endorse the Google Notes or transmit validly completed bond powers with this Letter of Transmittal (in either case executed exactly as the name(s) of the registered holder(s) appear(s) on the Google Notes, and, with respect to a participant in DTC whose name appears on a security position listing as the owner of Google Notes, exactly as the name of such participant appears on such security position listing), with the signature on the Google Notes or bond power guaranteed by a Medallion Signature Guarantor (except where the Google Notes are tendered for the account of an eligible institution).

If Google Notes are to be tendered by any person other than the person in whose name the Google Notes are registered, the Google Notes must be endorsed or accompanied by an appropriate written instrument(s) of transfer executed exactly as the name(s) of the holder(s) appear on the Google Notes, with the signature(s) on the Google Notes or instrument(s) of transfer guaranteed by a Medallion Signature Guarantor, and this Letter of

Transmittal must be executed and delivered either by the holder(s), or by the tendering person pursuant to a valid proxy signed by the holder(s), which signature must, in either case, be guaranteed by a Medallion Signature Guarantor.

Alphabet will not accept any alternative, conditional or contingent tenders. By executing this Letter of Transmittal (or a facsimile thereof) or directing DTC to transmit an agent’s message, you waive any right to receive any notice of the acceptance of your Google Notes for exchange.

If this Letter of Transmittal or instruments of transfer are signed by trustees, executors, administrators, guardians or attorneys–in–fact, officers of corporations or others acting in a fiduciary or representative capacity, such persons should so indicate when signing and, unless waived by Alphabet, evidence satisfactory to Alphabet of their authority so to act must be submitted with this Letter of Transmittal.

Beneficial owners whose tendered Google Notes are registered in the name of a broker, dealer, commercial bank, trust company or other nominee must contact such broker, dealer, commercial bank, trust company or other nominee if such beneficial owners desire to tender such Google Notes.

Special Payment Instructions. If cash consideration for the Google Notes tendered hereby is to be credited to a DTC account other than as indicated in the table entitled “Description of the Google Notes Tendered and in Respect of Which Consents are Delivered,” the signer of this Letter of Transmittal should complete the “Special Payment Instructions” box on this Letter of Transmittal. All Google Notes tendered by book-entry transfer and not accepted for exchange will otherwise be returned by crediting the account at DTC designated above for which Google Notes were delivered.

Transfer Taxes. Alphabet will pay all transfer taxes, if any, applicable to the transfer and sale of Google Notes to Alphabet in the exchange offers. If transfer taxes are imposed for any other reason, the amount of those transfer taxes, whether imposed on the registered holders or any other persons, will be payable by the tendering holder.

If satisfactory evidence of payment of or exemption from those transfer taxes is not submitted with this Letter of Transmittal, the amount of those transfer taxes will be billed directly to the tendering holder and/or withheld from any payments due with respect to the Google Notes tendered by such holder.

U.S. Federal Backup Withholding and Withholding Tax, Tax Identification Number. Under current U.S. federal income tax law, the exchange agent (as payer) may be required under the backup withholding rules to withhold a portion of any payments made to certain holders of Google Notes (or other payees) pursuant to the exchange offers and consent solicitations. To avoid such backup withholding, each tendering holder of Google
13

Notes must timely provide the exchange agent with such holder’s correct taxpayer identification number (“TIN”) on Internal Revenue Service (“IRS”) Form W-9 (available from the IRS by calling 1-800-TAX-FORM (1-800-829-3676) or from the IRS website at http://www.irs.gov), or otherwise establish a basis for exemption from backup withholding (currently imposed at a rate of 28%). If a holder is an individual who is a U.S. citizen or resident, the TIN is generally his or her social security number. If the exchange agent is not provided with the correct TIN, a penalty may be imposed by the IRS and/or payments made with respect to Google Notes exchanged pursuant to the exchange offers and consent solicitations may be subject to backup withholding. Failure to comply truthfully with the backup withholding requirements, if done willfully, may also result in the imposition of criminal fines and penalties. See IRS Form W-9 for additional information. Certain holders (including, among others, certain foreign persons) are exempt from these backup withholding requirements. Exempt holders (other than foreign holders) should furnish their TIN, provide the applicable codes in the box labeled “Exemptions,” and sign, date and send the IRS Form W-9 to the exchange agent. Foreign holders may qualify as exempt recipients by submitting to the exchange agent a properly completed IRS Form W-8BEN or W-8BEN-E (or other applicable form), signed under penalties of perjury, attesting that the holder is not a U.S. person as defined in the Internal Revenue Code of 1986, as amended (“the Code”). The applicable IRS Form W-8 can be obtained from the IRS or from the exchange agent.

If backup withholding applies, the exchange agent is required to withhold on any payments made to the tendering holders (or other payees). Backup withholding is not an additional tax. A holder subject to the backup withholding rules will be allowed a credit of the amount withheld against such holder’s U.S. federal income tax liability, and, if backup withholding results in an overpayment of tax, the holder may be entitled to a refund, provided the requisite information is correctly furnished to the IRS in a timely manner.

Each of Alphabet and Google reserves the right in its sole discretion to take all necessary or appropriate measures to comply with its respective obligations regarding backup withholding.

Validity of Tenders. All questions concerning the validity, form, eligibility (including time of receipt), acceptance and withdrawal of tendered Google Notes will be determined by Alphabet in its sole discretion, which determination will be final and binding. Alphabet reserves the absolute right to reject any and all tenders of Google Notes not in proper form or any Google Notes the acceptance for exchange of which may, in the opinion of its counsel, be unlawful. Alphabet also reserves the absolute right to waive any defect or irregularity in tenders of Google Notes, whether or not similar defects or irregularities are waived in the case of other tendered securities. The interpretation of the terms and conditions of the exchange offers and consent solicitations (including this Letter of Transmittal and the instructions hereto) by Alphabet shall be final and binding on all parties. Unless waived, any defects or irregularities in connection with tenders of Google Notes must be cured within such time as Alphabet shall determine. None of Alphabet, Google, the exchange agent and information agent, the dealer managers or any other person will be under any duty to give notification of defects or irregularities with respect to tenders of Google Notes, nor shall any of them incur any liability for failure to give such notification.
Tenders of Google Notes will not be deemed to have been made until such defects or irregularities have been cured or waived. Any Google Notes received by the exchange agent that are not validly tendered and as to which the defects or irregularities have not been cured or waived will be returned by the exchange agent to the holders, unless otherwise provided in this Letter of Transmittal, as soon as practicable following the expiration date of the applicable exchange offer or the withdrawal or termination of such exchange offer.

Waiver of Conditions. Alphabet reserves the absolute right to amend or waive any of the conditions to the exchange offers and consent solicitations, except the condition that the registration statement relating to the Alphabet Notes has been declared effective by the SEC. All conditions to the exchange offers must be satisfied or, where permitted, waived, at or by the Expiration Date. The proposed amendments may become effective with respect to any series of Google Notes for which the Requisite Consents are received and the Requisite Consent Condition has been waived, if necessary.
14

Withdrawal. Tenders may be withdrawn only pursuant to the procedures and subject to the terms set forth in the Prospectus under the caption “The Exchange Offers and Consent Solicitations—Procedures for Consenting and Tendering—Withdrawal of Tenders and Revocation of Corresponding Consents.”

Requests for Assistance or Additional Copies. Questions and requests for assistance and requests for additional copies of the Prospectus or this Letter of Transmittal may be directed to the information agent at the address and telephone number indicated herein.

15

The Exchange Agent for the exchange offers and the consent solicitations is:

D.F. King & Co., Inc.

By Facsimile (Eligible Institutions Only):

(212) 709-3328

Attention: Krystal Scrudato

By Mail or Hand:

48 Wall Street, 22nd Floor

New York, New York 10005

Attention: Krystal Scrudato

Any questions or requests for assistance may be directed to the Dealer Managers at the addresses and telephone numbers set forth below. Requests for additional copies of the Prospectus and this Letter of Transmittal may be directed to the Information Agent. Beneficial owners may also contact their custodian for assistance concerning the exchange offers and the consent solicitations.

The Information Agent for the exchange offers and the consent solicitations is:

D.F. King & Co., Inc.

48 Wall Street, 22nd Floor

New York, New York 10005

Banks and Brokers Call Collect: (212) 269-5550

All Others, Please Call Toll-Free: (877) 732-3617

The Dealer Managers for the exchange offers and the consent solicitations are:

Lead Dealer Manager

Morgan Stanley & Co. LLC

1585 Broadway, 4th Floor

New York, New York 10036

Attention: Liability Management Group

(800) 624-1808 (toll-free)

(212) 761-1057 (collect)

Co-Dealer Managers

Merrill Lynch, Pierce, Fenner & Smith Incorporated

214 North Tryon Street, 21st Floor

Charlotte, North Carolina 28255

Citigroup Global Markets Inc.

390 Greenwich Street, 1st Floor

New York, New York 10013

J.P. Morgan Securities LLC

383 Madison Avenue

New York, New York 10179

Wells Fargo Securities, LLC

550 South Tryon Street, 5th Floor

Charlotte, North Carolina 28202

Attention: Liability

Management Group

(980) 387-3907 (collect)

(888) 292-0070 (toll-free)

Attention: Liability

Management Group

(212) 723-6106 (collect)

(800) 558-3745 (toll-free)

Attention: Liability

Management Group

(212) 834-3424 (collect)

(866) 834-4666 (toll-free)

Attention: Liability

Management Group

866-309-6316 (toll-free)

704-410-4760 (collect)

16 External Resources:

Additional Files File Sequence Description Type Size 0001193125-16-521414.txt Complete submission text file 600887 $GOOG © 2022 SEC.report | Contact | | Data is automatically aggregated and provided “as is” without any representations or warranties, express or implied. SEC.report is not affiliated with the U.S. S.E.C. or EDGAR System. Disclosure & Privacy Policy SEC CFR Title 17 of the Code of Federal Regulations. Reviewing Your Statement Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right @PNCBANKside of the first page of this statement if: you have any questions regarding your account(s); your name or address is incorrect; you have any questions regarding interest paid to an interest-bearing account. Balancing Your Account Update Your Account Register Compare: The activity detail Check Off: Add to Your Account Register Balance: Subtract From Your Account Register Balance: section of your statement to your account register. All items in your account register that also appear on your statement. Remember to begin with the ending date ofyour last statement. (An asterisk { * } will appear in the Checks section if there is a gap in the listing of consecutive check numbers.) Any deposits or additions including interest payments and ATM or electronic deposits listed on the statement that are not already entered in your register. Any account deductions including fees and ATM or electronic deductions listed on the statement that are not already entered in your register. Update Your Statement Information step 2: Add together checks and other deductions listed in your account register but not on your statement. æ t' Step 1: Amount C'eck *ober Ded•ction Descretion Amount Add together deposits and other additions listed in your account register but not on your statement. Step 3: Date of Deposit

Total A																							
				$																			
Enter the ending balance recorded on your statementTotal A + $ Add deposits and other additions not recorded

$ The result should equal your account register balance Total B haw ¯4VUt If carefn 11. Business Checking PNC Bank the period c e 04/29/20aa APNCBANK 146967 1022482 9304 P rimary account number: 47-2041-6547 Page 1 Of 3 Number of enclosures: O em For 24-hour banking sign on to Bank Online Banking on pnc.com FREE online Bill Pay ZACHRY TYLER WOOD ALPHABET 5323 BRADFORD DR DALLAS TX 75235-8314 PNC 111111111 1 1 1 1 1 1 11 1 1 1 11 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 111 1 1 1 1 •l 1 1 1 1 1 1 1 1 1 1 1 1 Para servicio en espalol, 1877-BUS-BNKG Moving? Please contact your local branch. @ Write to: Customer Service PO Box 609 Pittsburgh , PA 15230-9738 VISIt us at PNC.com/smaIlbusiness a IMPORTANT INFORMATION FOR BUSINESS DEPOSIT CUSTOMERS Effective February 18,2022, PNC will be temporarily waiving fees for stetement, check image, deposit ticket and deposited item copy requests until further notice. Statement, check image, deposit ticket and ceposited item requests will continue to these be displayed fees. in the Details of Services Used section of your monthly statement. We will notify you viE statement message prior to reinstating If you have anv questions, you may reach out to your business banker, franch or call us at 1-877-BUS-BNKG (1-877-287-2654). Business Checking Summary Account number: 47-2041-6547 Overdraft Protection has not been established for this account. Please contact us if you would like to set up this service. Zachry Tyler Wood Alphabet Balance Summary Checks and other deductions Ending balance Beginning balance Deposits and other additions 0 62.5 98.5 36.00- Average ledger balance Average collected balance 6.35- 6.35- Total Year to Date Overdraft and Returned Item Fee Summary

				Total for this Period																			
Total Returned Item Fees (NSF) 36 36 Deposits and Other Additions Amount Checks and Other Deductions Description Items Amount Items Description 62.5 ACH Deductions 1 62.5 1 ACH Additions service Charges and Fees 1 36 62.5 Total 2 98.5 Total 1 Ledger balance Ledger balance Daily Balance Date Date Date Ledger balance 26-Apr 62.50- 27-Apr 36.00- 13-Apr 0

• 	\ei•yvyuv																						
jobs: autoupdate: name: autoupdate runs-on: ubuntu-18.04 steps: - uses: docker://chinthakagodawita/autoupdate-action:vl

  uses: docker://chinthakagodawita/autoupdate-action:vl env: GITHUB_TOKEN: ${{	}}																					
From b0636992527fe604db29921c5c41 b450ff4d3cca Mon sep 1700:00:002001 From: lixixi 72369414+lixixi@users.noreply.github.com Date: Thu, 14 Jan 2021 10:19:51 -0600 Subject: [PATCH 12/13] Update CODEOWNErs8 .../.github/CODEOWNErs8 1 file changed, 2 insertions(+), 3 deletions(-) 5 ++___ 10 4-+++++++—— diff --git a/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/acl b95e926fbc0d9fc0f67 8c84dd518606c8618f/.github/CODEOWNErs8 b/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/acl b95e926fbc0d9fc0f67 8c84dd518606c8618f/.github/CODEOWNErs8 index 4b2f64a33e81..e73434629e66 100644 a/. g ith ub/workflows/ruby.ymlhttps :/g ithub.com/github/docs/blob/acl b95e926fbc0d9fc0f67 8c84dd518606c8618f/.github/CODEOWNErs8 + + + b/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/acl b95e926fbc0d9fc0f67 8c84dd518606c8618f/.github/CODEOWNErs8 @@ -36,11 +36,17 @@ on: jobs: autoupdate: name: autoupdate runs-on: ubuntu-18.04

runs-on: docker steps: +#Engineering.js @github/docs-engineering/@iixixii:push:@iixixi/but.github/ @github/docs-engineering +/script/ @github/docs-engineering +app.json @github/docs-engineering +Dockerfile @github/docs-engineering +package-lock.json @github/docs-engineering +package.json @github/docs-engineering uses: docker://chinthakagodawita/autoupdate-action:vl enV.• GITHUB_TOKEN: 
{{((C)(R))}}::build🚧::perfect PR FILTER: labeled PR LABELS: autoupdate Pull:branches:@iixixi/workflows/blank.yaml.json Return: Run "": "e-mail:": nzachryiixixiiwood@gmail.com": "<lin" erel: "next" } J,"

<link:presentationArc order="l .0" XIink:arcrole=http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="lncomeStatement 1122465203376 0" xlink:title="presentation: IncomeStatement to GrossProfitPresentation" xlink:to="GrossProfitPresentation 1122465203376_1" xlink:type="arc"/>"

<link:loc xlink:href="primary.xsd#pr_RevenueTotal” xlink:label="RevenueTotal 1122465233028 0" xlink:title=”RevenueTotal” xlink:type="locator"/>

<link:presentationArc order="l .0” xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="GrossProfitPresentation_1122465203376_1 xlink:title="presentation: GrossProfitPresentation to RevenueTotal” xlink:to="RevenueTotal 1122465233028 0" xlink:type="arc"/>

<link:loc xlink:href="primary.xsd#pr_sales" xlink:label="Sales 1123671238015 1" xlink:title="Sales" xlink:type="locator"/>

<link:presentationArc order=”l .0" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from=”RevenueTotal_1122465233028_0" xlink:title="presentation: RevenueTotal to Sales" xlink:to="Sales_1123671238015_1 xlink:type="arc"/>

<link:loc xlink:href=”primary.xsd#pr_CostOfSales" xiink:label="CostOfSales_1122465239027_0” xlink:title="CostOfSalesÎ' xlink:type="locator"/>

<link:presentationArc order=”2.()'Î xlink:arcrole=”http://www.xbrl.org/2003/arcrole/parent-child” xlink:from="GrossProfitPresentation_1122465203376_1 xlink:title=”presentation: GrossProfitPresentation to CostOfSales" xlink:to="CostOfSales_1122465239027 0” xlink:type=î'arc"/>

<link:loc xlink:href="primary.xsd#pr_GrossProfit" xlink:label="GrossProfit_1122465243483_0" xlink:title="GrossProfit" xlink:type="locator"/>

<link:presentationArc order="3.0" xlink:arcrole=”http://www.xbrl.org/2003/arcrole/parent-child xlink:from="GrossProfitPresentation_1122465203376_1 xlink:title="presentation: GrossProfitPresentation to GrossProfit” xlink:to=”GrossProfit_1122465243483 0” xlink:type="arc"/> <link:loc xlink:href="primary.xsd#pr_CubelessConcept" xIink:label="lbl_CubelessConcept” xlink:type="locator”/> <Iink:presentationArc order=”l *5" xlink:arcrole="http://www.xbrlorg/2003/arcrole/parent-child” xlink:from="GrossProfitPresentation_1122465203376_1 xlink:to='1bl_CubelessConceptb xlink:type=”arc"/>" @IRSDEPART,onrrr OF T}E TREASURY INTERNAL REEVE SERVICE CINCINNATI OH 45999-0023 Date of this notice: 4/7/2022 Ehployer Identification Number: 88-1656496

			Form: 	SS-4																	
NASDÄQGOOG ALPHABET Number of this notice: CP 575 A ZACHRY T WOOD MBR For assistance you may call us at: 5323 BRADFORD DR 1-800-829-4933 DALLAS, Tx 75235 IF YOU WRITE, ATTACH THE STUB AT THE END OF THIS NOTICE. WE ASSIGNED YOU AN EMPLOYER IDENTIFICATION NUMBER Thank you for applying for an Employer Identification Number (EIN) . We assigned you EIN 88-1656496. This EIN will identify you, your business accounts, tax returns, and documents, even if you have no employees. Please keep this notice in your permanent records . Taxpayers request an EIN for their business. Some taxpayers receive CP575 notices when another person has stolen their identity and are opening a business using their information. If you did not apply for this EIN, please contact us at the phone number or address listed on the top of this notice . When filing tax documents, making payments, or replying to any related correspondence, it is very important that you use your EIN and complete name and address exactly as shown above. Any variation may cause a delay in processing, result in incorrect information in your account, or even cause you to be assigned more than one EIN. If the information is not correct as shown above, please make the correction using the attached tear-off stub and return it to Based on the information received from you or your representative, you must file the following forms by the dates Shown. Form 941 4/7/2022 Form 940 4/7/2022 Form 943 4/7/2022 Form 1065 4/7/2022 Form 720 4/7/2022 Your Forn 2290 becomes due the month after your vehicle is put into use. Your Form 1 IC and/or 730 becomes due the month after your wagering starts. After our review of your information, we have determined that you have not filed tax returns for the above-mentioned tax period (s) dating as far back as 2007. file your return(s) by 04/22/2022. If there accumulate is a balance from the due due on date the of return(s)the return(s)Please penalties and interest will -continue to until it is filed and paid. If you were not in business or did not hire any employees for the tax period (s) in question, please file the return (s) showing you have no If you have questions about the forms or the due dates shown, you can call us at the phone number or write to us at the address shown at the top of this notice. it you need help in determining your annual accounting period (tax year) , see Publicatim 538,

WARNING: THIS DOCUMENT HAS SECURITY FEATURES IN THE PAPER 308130 Electronic Filing Depository EFDID: 296686 State Sales Data Information Accession: 0001679788-18-000003 As of Monday, January 17,2022 Issuer's Identity CM (Filer Id Number) Address of Issuer 1679788 548 MARKET STREET, surre 23008 o Name of Issuer Coinbase Global. Inc. Jurisdiction of IncorporatiorMOrganization DELAWARE SAN FRANCISCO CALIFORNIA, 94104 m Sales Data State NJ Notice Date 11/2/2018 File Number 296686-308132 Expires Never Offering Amount Notice Type Date of Sale New Total # of Investors Amount Sold $20,000,000 10262018 2 Filer, 00 behaff of the issuer, understands and agrees that it is submitting a Form D for Regulation Rule 506 offerings to one or more States in compliance with state and federat regulatory requirements. Filer, on behalf of the issuer, understands and agrees that by submitting this Form D in the selected States the issuer is obligated to comply with each of the selected States' requirements governing consent to service of process and jurisdiction- Filer, on betetf of the issuer, understands and agrees that for purposes of complying with the selected States' laws, relating to either the registration or sale of securities, Filer, on behalf of the issuer, hereby irrevocably appoints the officers of the States in the Form D was fited and their successors in such offices, its attorney in those States upon whom may be served any notice, process or pleading in any action or proceeding against it arising out of, or (n connection with, the sale of securities or out of violation of the aforesaid laws of the States; and the Filer, on behalf of the issuer, hereby consents that any such action or proceeding against It may be commenced in any court of competent jurisoction and proper venue within the States in which the Form D was filed by service of process upon the officers so designated with the same effect as if the undersigned was organized or created under the laws of that State and have been served lawfully with process in that State- WARNING: THIS DOCUMENT HAS SECURITY FEATURES IN PAPER COINBASE GLOBAL, NC. (46-4707224) X 130 548 MARKET STREET. SUITE 23008, SAN FRANCISCO CALIFORNIA 94104, CHECK DATE CHECK NUMBER San Frangsco, CA94104-5401 Jan 31,2022 6308132 PAY "TWENTY MI-LON DOLLARS**••••••....CHECK A,DUNTe TO TI-E ORDER OF:ZÆHRY TYLER WOOD••••eo,ooo,ooo.oo•• THIS IS NOT ACHECK NON NEGOTIABLE""" www-EFDNASAA.org - l of2 - VOID 1117120' OS Received 01/50022ru 1100030B 1 30111 ••. 3 2 5 2 7 20B 31'. B033 2504B850 2 111 FORM# 140-7000 (S :9NYN8vn Balancing Your Account Update Your Account Register Compare: Check Off: Add to Your Account Register Balance: Subtract From Your Account Register Balance: BNK The activity detail section Of your statement to your account register. TR.S)ca All items in your account register that also appear on your statement. Remember to begin with the ending date Of Your last statement. (An asterisk { * } will appear in the Checks section if there is a gap In the listing of consecutive check numbers.) Any deposits or additions including interest payments and ATM or electronic deposits listed on the statement that are not already entered in your register. Any account deductiOns including fees and ATM or electronic deductions listed statement that are not already entered in your register. the Update Your Statement Information step 2: Add together checks and other deductions listed in your account register but not on your statement. C'ecb Deductio. D•scretio• >nount Step 1: Amount Add together deposits and other additions listed in your account register but not on your statemen t. Step 3: of Deposit

Enter the ending balance recorded on your statement

Add deposits and other additions not recorded Total A + $70842743866.00

			Subtotal= $70842743866.00																				
Subtract checks and other deductions not recorded Total B - $ The result should equal your account register balance Total B70842743866 Business Checking For 24-hour account information, sign pnc.com/mybusin@ss/ Business Checking Account number: 47-2041-6547 - continuod continued For the period 04/13/2022 to 04/29/2022 ZACHRY TYLER WOOD Primary account number: 47-2041-6547 Page 2 of 3 Activity Dotail #NAME? Deposits and Other Additions ACH Additions Date posted Transaction Amount description ACH Debit Reference number ount register. 00/27 62.50 Reverse Corporate ACII Debit Effective 0026-22 22116905560149) jur statement. Remember to begin c { * } will appear in the Checks pk numbers.) Checks and Other Deductions ACH Deductions nd ATM or electronic deposits 'ur register. tronic deductions listed on the Date posted Transaction Amount descrjpOon Reference be 26-Apr 62.5 Corporate ACH Quickbooks 18004intuit 1940868 22116905560149) Servicø Charges and Fees Reference number Date posted Amount Transaction description C'eck 27-Apr 36 Returned Item Fee (nsf) Deduction Descraion Amount Detail of Services Used During Current Period (nsf) 22116905569149) Vote: The total charge for the following services Will be posted to your account on 05/02/1022 and w barge Period Ending 04/29/2022, Period •scription count Maintenance Charge tal For Se•vices Used This Period bal Service (barge Volume your account Volume 05/02/022 and will appear on your next statement as a single line item entltled Service Amount

									0	Waived - New Customer Peliod													
																							
									0														
								0															
												Total B70842743866.00											
											e  ) 	Friday: 7 AM - 10 PM ET and Saturday rst page of this statement.											
												statement or write us at PNC Bank Debit on as you can, if you think your statement must hear from you no later than 60 oy you believe it is an error or why you business days, we will the money during the time it											
Verification of Direct Deposit To verify whether 8 AM - a 5 direct PM ET deposit at the or customer other transfer service to number your account listed on has the occurred, upper right call us side Monday of the first - Friday: page of 7 AM this - statement.10 PM ET and Saturday & Sunday: In Case of Errors or Questions About Your Electronic Transfers Telephone us at the customer service number listed on the upper right side of the first page of this statement or write us at PNC Bank Debit Card Services, 500 First Avenue, 4th Floor, Mailstop P7-PFSC-04-M' Pittsburgh, PA 15219 as soon as you can, if you think your statement60 or receipt is wrong or if you need more information about a transfer on the statement or receipt. We must hear from you no later than days after we sent you the FIRST statement on which the error or problem appeared. Tell us your name and account number (if any). Describe the error or the transfer you are unsure about, and explain as clearly as you can why you believe it is an error or why you need more information. Tell us the dollar amount of the suspected error. We will investigate your complaint and will correct any error promptly. If we take longer than 10 business days, we will provisionally credit your account for the amount you think is in error, so that you will have use of the money during the time it takes us to complete our investigation. Member FDIC Equal Housing Lender

License
MIT

Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
You have unread notifications

On Tue, Sep 20, 2022 at 2:41 AM Mr. Jeff Robertson <tarp2022.usgov@gmail.com> wrote:
Dear Valued Citizen,
This is to clarify you about the ongoing ''TARP 2022'' (phase 2) program
The American Rescue Plan Act of 2022 (TARP 2022) also called the COVID-19 Stimulus Package or American Rescue Plan, Pub.L. 117–2, is a USD$1.9 trillion economic stimulus bill passed and enacted by the 117th United States Congress which became effective from April 11, 2022 with the approval of (Mr. Joe Biden) the 46th president of the United States
The American Rescue Plan Act (TARP/COVID-19 Stimulus Package) program which was enacted by the 117th United States Congress is to help relieve the burdens on families across the globe and provide for reconciliation pursuant to title II of S. Con. Res. 5
In effect to that, this notice is sent to let you know that you're among the benefactors of this program and you're entitled to the paycheck sum of USD$5.2 million only
To claim your paycheck, you'll have to provide the details of you as below:-

Full Name:-................... 
State:-.................
City:-..................
Phone number............
Occupation:-...................
Status:-....................
Sex:-..........
D.O.B:-....................
Num. Of Kids:-............
Monthly Income:-.....................
Valid ID Num:-...............
.(Also attach a copy of your  valid ID photo)

NB:- The rights to your benefited paycheck becomes null and void after 14 working days of non compliance from the day of receiving this mail

Office The 46th President Of The United States,
117th US Congress,
Seal Of The US Treasury Department, 1789
Remember always that as a law abiding and great citizen of the United States Of America, you're forever entitled to good and healthy living, that's why the US  government cares much about your well-being
GOD BLESS THE UNITED STATES OF AMERICA
W. H, W. DC, US 2022






On Sun, 18 Sept 2022 at 22:49, ZACHRY WOOD <zachryiixixiiwood@gmail.com> wrote:



On Mon, Jun 13, 2022 at 5:49 PM ZACHRY WOOD <zachryiixixiiwood@gmail.com> wrote:
Referral :
CONGRATS,
Your profile data has been shortlisted for The American Rescue Plan
Act of 2022 Pub.L. 117–2 (TARP 2022 ''phase II'') ongoing relief
program
Quickly contact ''tarp2022.usgov@gmail.com'' with the code
''TARP2202C-19SP'' for further details

Thanks,
Jeff Robertson
US Treasury Direct
Office Of The Social And Public Welfare, United States
W. H, W. DC, US 2022

title: Working with the Docker registry
intro: '{% ifversion fpt or ghec %}The Docker registry has now been replaced by the {% data variables.product.prodname_container_registry %}.{% else %}You can push and pull your Docker images using the {% data variables.product.prodname_registry %} Docker registry.{% endif %}'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-docker-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-docker-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-docker-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages
  - /packages/guides/container-guides-for-github-packages/configuring-docker-for-use-with-github-packages
  - /packages/guides/configuring-docker-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Docker registry
---

<!-- Main versioning block. Short page for dotcom -->
{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %}'s Docker registry (which used the namespace `docker.pkg.github.com`) has been replaced by the {% data variables.product.prodname_container_registry %} (which uses the namespace `https://ghcr.io`). The {% data variables.product.prodname_container_registry %} offers benefits such as granular permissions and storage optimization for Docker images.

Docker images previously stored in the Docker registry are being automatically migrated into the {% data variables.product.prodname_container_registry %}. For more information, see "[Migrating to the {% data variables.product.prodname_container_registry %} from the Docker registry](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)" and "[Working with the {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)."

{% else %}
<!-- The remainder of this article is displayed for releases that don't support the Container registry -->

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## About Docker support

When installing or publishing a Docker image, the Docker registry does not currently support foreign layers, such as Windows images.

## Authenticating to {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Authenticating with a personal access token

{% data reusables.package_registry.required-scopes %}

You can authenticate to {% data variables.product.prodname_registry %} with Docker using the `docker` login command.

To keep your credentials secure, we recommend you save your personal access token in a local file on your computer and use Docker's `--password-stdin` flag, which reads your token from a local file.

{% ifversion fpt or ghec %}
{% raw %}
  ```shell
  $ cat <em>~/TOKEN.txt</em> | docker login https://docker.pkg.github.com -u <em>USERNAME</em> --password-stdin
  ```
{% endraw %}
{% endif %}

{% ifversion ghes or ghae %}
{% ifversion ghes %}
If your instance has subdomain isolation enabled:
{% endif %}
{% raw %}
 ```shell
 $ cat <em>~/TOKEN.txt</em> | docker login docker.HOSTNAME -u <em>USERNAME</em> --password-stdin
```
{% endraw %}
{% ifversion ghes %}
If your instance has subdomain isolation disabled:

{% raw %}
 ```shell
 $ cat <em>~/TOKEN.txt</em> | docker login <em>HOSTNAME</em> -u <em>USERNAME</em> --password-stdin
```
{% endraw %}
{% endif %}

{% endif %}

To use this example login command, replace `USERNAME` with your {% data variables.product.product_name %} username{% ifversion ghes or ghae %}, `HOSTNAME` with the URL for {% data variables.product.product_location %},{% endif %} and `~/TOKEN.txt` with the file path to your personal access token for {% data variables.product.product_name %}.

For more information, see "[Docker login](https://docs.docker.com/engine/reference/commandline/login/#provide-a-password-using-stdin)."

## Publishing an image

{% data reusables.package_registry.docker_registry_deprecation_status %}

{% note %}

**Note:** Image names must only use lowercase letters.

{% endnote %}

{% data variables.product.prodname_registry %} supports multiple top-level Docker images per repository. A repository can have any number of image tags. You may experience degraded service publishing or installing Docker images larger than 10GB, layers are capped at 5GB each. For more information, see "[Docker tag](https://docs.docker.com/engine/reference/commandline/tag/)" in the Docker documentation.

{% data reusables.package_registry.viewing-packages %}

1. Determine the image name and ID for your docker image using `docker images`.
  ```shell
  $ docker images
  > <&nbsp>
  > REPOSITORY        TAG        IMAGE ID       CREATED      SIZE
  > <em>IMAGE_NAME</em>        <em>VERSION</em>    <em>IMAGE_ID</em>       4 weeks ago  1.11MB
  ```
2. Using the Docker image ID, tag the docker image, replacing *OWNER* with the name of the user or organization account that owns the repository, *REPOSITORY* with the name of the repository containing your project, *IMAGE_NAME* with name of the package or image,{% ifversion ghes or ghae %} *HOSTNAME* with the hostname of {% data variables.product.product_location %},{% endif %} and *VERSION* with package version at build time.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %}
  {% ifversion ghes %}
  If your instance has subdomain isolation enabled:
  {% endif %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% ifversion ghes %}
  If your instance has subdomain isolation disabled:
  ```shell
  $ docker tag <em>IMAGE_ID</em> <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %}
  {% endif %}
3. If you haven't already built a docker image for the package, build the image, replacing *OWNER* with the name of the user or organization account that owns the repository, *REPOSITORY* with the name of the repository containing your project, *IMAGE_NAME* with name of the package or image, *VERSION* with package version at build time,{% ifversion ghes or ghae %} *HOSTNAME* with the hostname of {% data variables.product.product_location %},{% endif %} and *PATH* to the image if it isn't in the current working directory.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker build -t docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% else %}
  {% ifversion ghes %}
  If your instance has subdomain isolation enabled:
  {% endif %}
  ```shell
  $ docker build -t docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% ifversion ghes %}
  If your instance has subdomain isolation disabled:
  ```shell
  $ docker build -t <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% endif %}
  {% endif %}
4. Publish the image to {% data variables.product.prodname_registry %}.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker push docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %}
  {% ifversion ghes %}
  If your instance has subdomain isolation enabled:
  {% endif %}
  ```shell
  $ docker push docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% ifversion ghes %}
  If your instance has subdomain isolation disabled:
  ```shell
  $ docker push <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %}
  {% endif %}
  {% note %}

  **Note:** You must push your image using `IMAGE_NAME:VERSION` and not using `IMAGE_NAME:SHA`.

  {% endnote %}

### Example publishing a Docker image

{% ifversion ghes %}
These examples assume your instance has subdomain isolation enabled.
{% endif %}

You can publish version 1.0 of the `monalisa` image to the `octocat/octo-app` repository using an image ID.

{% ifversion fpt or ghec %}
```shell
$ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# Tag the image with <em>OWNER/REPO/IMAGE_NAME</em>
$ docker tag c75bebcdd211 docker.pkg.github.com/octocat/octo-app/monalisa:1.0

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.pkg.github.com/octocat/octo-app/monalisa:1.0
```

{% else %}

```shell
$ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# Tag the image with <em>OWNER/REPO/IMAGE_NAME</em>
$ docker tag c75bebcdd211 docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0
```

{% endif %}

You can publish a new Docker image for the first time and name it `monalisa`.

{% ifversion fpt or ghec %}
```shell
# Build the image with docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
# Assumes Dockerfile resides in the current working directory (.)
$ docker build -t docker.pkg.github.com/octocat/octo-app/monalisa:1.0 .

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.pkg.github.com/octocat/octo-app/monalisa:1.0
```

{% else %}
```shell
# Build the image with docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
# Assumes Dockerfile resides in the current working directory (.)
$ docker build -t docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0 .

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0
```
{% endif %}

## Downloading an image

{% data reusables.package_registry.docker_registry_deprecation_status %}

You can use the `docker pull` command to install a docker image from {% data variables.product.prodname_registry %}, replacing *OWNER* with the name of the user or organization account that owns the repository, *REPOSITORY* with the name of the repository containing your project, *IMAGE_NAME* with name of the package or image,{% ifversion ghes or ghae %} *HOSTNAME* with the host name of {% data variables.product.product_location %}, {% endif %} and *TAG_NAME* with tag for the image you want to install.

{% ifversion fpt or ghec %}
```shell
$ docker pull docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% else %}
<!--Versioning out this "subdomain isolation enabled" line because it's the only option for GHES 2.22 so it can be misleading.-->
{% ifversion ghes %}
If your instance has subdomain isolation enabled:
{% endif %}
```shell
$ docker pull docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% ifversion ghes %}
If your instance has subdomain isolation disabled:
```shell
$ docker pull <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% endif %}
{% endif %}

{% note %}

**Note:** You must pull the image using `IMAGE_NAME:VERSION` and not using `IMAGE_NAME:SHA`.

{% endnote %}

## Further reading

- "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)"

{% endif %}  <!-- End of main versioning block -->
