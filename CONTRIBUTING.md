# Welcome to GitHub docs contributing guide <!-- omit in toc -->

Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [docs.github.com](https://docs.github.com/en) :sparkles:. 

Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

Use the table of contents icon <img src="./assets/images/table-of-contents.png" width="25" height="25" /> on the top left corner of this document to get to a specific section of this guide quickly.

## New contributor guide

To get an overview of the project, read the [README](README.md). Here are some resources to help you get started with open source contributions:

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)


## Getting started

To navigate our codebase with confidence, see [the introduction to working in the docs repository](/contributing/working-in-docs-repository.md) :confetti_ball:. For more information on how we write our markdown files, see [the GitHub Markdown reference](contributing/content-markup-reference.md).

Check to see what [types of contributions](/contributing/types-of-contributions.md) we accept before making changes. Some of them don't even require writing a single line of code :sparkles:.

### Issues

#### Create a new issue
Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
zakwarlord7
/
GitHub-doc
Public
forked from github/docs
Cannot fork because you own this repository and are not a member of any organizations.
Code
Pull requests
47
Actions
Projects
Security
2
Insights
Settings
Update devcontainer.json
 AErmie-update-devcontainerjson (0-wiz-0/docs#21, 0-wiz-0/docs#38, 0-wiz-0/docs#44, butogon/docs#5, #162, #165) paradice-9 (#183)
@zakwarlord7
zakwarlord7 committed 1 hour ago 
1 parent 441ab92 commit a9bf702f3f03dc8feb247bb1d6351ea1b7f1be13
Showing 1 changed file with 2,522 additions and 315 deletions.
 2,837  
.devcontainer/devcontainer.json
@@ -1,131 +1,47 @@
Job :use :'#Step : use:  '-''
'-'' '#Action.js/checkout@v3 - name: Create commits run: | git config user.name 'Peter Evans' git config user.email 'peter-evans@users.noreply.github.com' date +%s > report.txt git commit -am "Modify tracked file during workflow" date +%s > new-report.txt git add -A git commit -m "Add untracked file during workflow" - name: Uncommitted change run: date +%s > report.txt - name: Create Pull Request/ISSUES/Response.md :run-on :peterbuilt/peter-evans/Pushs/Pull/Request/ISSUE_TEMPLE'@v4 :
Skip to content

Pull requestsIssuesCodespaces

Marketplace

Explore



￼ 

Your account has been flagged.

Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.

zakwarlord7/ci-CIPublic

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

Comparing changes

Choose two branches to see what’s changed or to start a new pull request. If you need to, you can also compare across forks.

base: master 



compare: patch-21 

There isn’t anything to compare.

master and patch-21 are entirely different commit histories.

SplitUnified

Showing 43 changed files with 129,478 additions and 0 deletions.

 3  .eslintignore

@@ -0,0 +1,3 @@dist/lib/node_modules/

 23  .eslintrc.json

@@ -0,0 +1,23 @@{ "env": { "node": true, "jest": true }, "parser": "@typescript-eslint/parser", "parserOptions": { "ecmaVersion": 9, "sourceType": "module" }, "extends": [ "eslint:recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended", "plugin:import/errors", "plugin:import/warnings", "plugin:import/typescript", "plugin:prettier/recommended" ], "plugins": ["@typescript-eslint"], "rules": { "@typescript-eslint/camelcase": "off" }, "settings": { "import/resolver": { "typescript": {} } }}

 1  .github/FUNDING.yml

@@ -0,0 +1 @@github: peter-evans

 7  .github/ISSUE_TEMPLATE.md

@@ -0,0 +1,7 @@### Subject of the issue
Describe your issue here.
### Steps to reproduce
If this issue is describing a possible bug please provide (or link to) your GitHub Actions workflow.

 15  .github/dependabot.yml

@@ -0,0 +1,15 @@version: 2updates: - package-ecosystem: "github-actions" directory: "/" schedule: interval: "weekly" labels: - "dependencies"
- package-ecosystem: "npm" directory: "/" schedule: interval: "weekly" allow: - dependency-name: "@actions/*"
 43,318  .github/workflows/ci.yml
43,318 additions, 0 deletions not shown because the diff is too large. Please use a local Git client to view these changes.
 49  .github/workflows/cpr-example-command.yml
@@ -0,0 +1,49 @@name: Create Pull Request Example Commandon: repository_dispatch: types: [cpr-example-command]jobs: createPullRequest: runs-on: ubuntu-latest steps: - uses: actions/checkout@v3
- name: Make changes to pull request run: date +%s > report.txt
- name: Create Pull Request id: cpr uses: ./ with: commit-message: Update report committer: GitHub <noreply@github.com> author: ${{ github.actor }} <${{ github.actor }}@users.noreply.github.com> signoff: false title: '[Example] Update report' body: | Update report - Updated with *today's* date - Auto-generated by [create-pull-request][1] [1]: https://github.com/peter-evans/create-pull-request labels: | report automated pr assignees: peter-evans reviewers: peter-evans milestone: 1 draft: false branch: example-patches delete-branch: true
- name: Check output run: | echo "Pull Request Number - ${{ steps.cpr.outputs.pull-request-number }}" echo "Pull Request URL - ${{ steps.cpr.outputs.pull-request-url }}" - name: Add reaction uses: peter-evans/create-or-update-comment@v2 with: repository: ${{ github.event.client_payload.github.payload.repository.full_name }} comment-id: ${{ github.event.client_payload.github.payload.comment.id }} reaction-type: hooray
 43  .github/workflows/slash-command-dispatch.yml
@@ -0,0 +1,43 @@name: Slash Command Dispatchon: issue_comment: types: [created]jobs: slashCommandDispatch: runs-on: ubuntu-latest steps: - name: Slash Command Dispatch uses: peter-evans/slash-command-dispatch@v3 with: token: ${{ secrets.ACTIONS_BOT_TOKEN }} config: > [ { "command": "test", "permission": "admin", "repository": "peter-evans/create-pull-request-tests", "named_args": true }, { "command": "testv4", "permission": "admin", "repository": "peter-evans/create-pull-request-tests", "named_args": true }, { "command": "clean", "permission": "admin", "repository": "peter-evans/create-pull-request-tests" }, { "command": "cpr-example", "permission": "admin", "issue_type": "issue" }, { "command": "rebase", "permission": "admin", "repository": "peter-evans/slash-command-dispatch-processor", "issue_type": "pull-request" } ]
 5  .gitignore
@@ -0,0 +1,5 @@lib/node_modules/
.DS_Store.idea
 3  .prettierignore
@@ -0,0 +1,3 @@dist/lib/node_modules/
 11  .prettierrc.json
@@ -0,0 +1,11 @@{ "printWidth": 80, "tabWidth": 2, "useTabs": false, "semi": false, "singleQuote": true, "trailingComma": "none", "bracketSpacing": false, "arrowParens": "avoid", "parser": "typescript"}
 21  LICENSE
@@ -0,0 +1,21 @@MIT License
Copyright (c) 2019 Peter Evans
Permission is hereby granted, free of charge, to any person obtaining a copyof this software and associated documentation files (the "Software"), to dealin the Software without restriction, including without limitation the rightsto use, copy, modify, merge, publish, distribute, sublicense, and/or sellcopies of the Software, and to permit persons to whom the Software isfurnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in allcopies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS ORIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THEAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHERLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THESOFTWARE.
 267  README.md
@@ -0,0 +1,267 @@# <img width="24" height="24" src="docs/assets/logo.svg"> Create Pull Request[![CI](https://github.com/peter-evans/create-pull-request/workflows/CI/badge.svg)](https://github.com/peter-evans/create-pull-request/actions?query=workflow%3ACI)[![GitHub Marketplace](https://img.shields.io/badge/Marketplace-Create%20Pull%20Request-blue.svg?colorA=24292e&colorB=0366d6&style=flat&longCache=true&logo=github)](https://github.com/marketplace/actions/create-pull-request)
A GitHub action to create a pull request for changes to your repository in the actions workspace.
Changes to a repository in the Actions workspace persist between steps in a workflow.This action is designed to be used in conjunction with other steps that modify or add files to your repository.The changes will be automatically committed to a new branch and a pull request created.
@@ -390,9 +306,7 @@ await afterTest(false) await beforeTest()
// Create tracked and untracked file changes const _changes = await createChanges() const _commitMessage = uuidv4() const _result = await createOrUpdateBranch( git, _commitMessage, BASE, BRANCH, REMOTE_NAME, false, ADD_PATHS_DEFAULT ) expect(_result.action).toEqual('updated') expect(_result.hasDiffWithBase).toBeTruthy() expect(await getFileContent(TRACKED_FILE)).toEqual(_changes.tracked) expect(await getFileContent(UNTRACKED_FILE)).toEqual(_changes.untracked) expect( await gitLogMatches([ _commitMessage, ...commitsOnBase.commitMsgs, INIT_COMMIT_MESSAGE ]) ).toBeTruthy() })
// This failure mode is a limitation of the action. Controlling your own commits cannot be used in detached HEAD state. // https://github.com/peter-evans/create-pull-request/issues/902 it('tests failure to create with commits on the working base (during the workflow) in detached HEAD state (WBNR)', async () => { // Checkout the HEAD commit SHA const headSha = await git.revParse('HEAD') await git.checkout(headSha)
// Create commits on the working base const commits = await createCommits(git) const commitMessage = uuidv4() const result = await createOrUpdateBranch( git, commitMessage, BASE, BRANCH, REMOTE_NAME, false, ADD_PATHS_DEFAULT ) // The action cannot successfully create the branch expect(result.action).toEqual('none') })})

 41  __test__/entrypoint.sh

@@ -0,0 +1,41 @@#!/bin/sh -lset -euo pipefail
# Save the working directoryWORKINGDIR=$PWD
# Create and serve a remote repomkdir -p /git/remotegit config --global init.defaultBranch maingit init --bare /git/remote/test-base.gitgit daemon --verbose --enable=receive-pack --base-path=/git/remote --export-all /git/remote &>/dev/null &
@@ -401,9 +315,7 @@ await afterTest(false) await beforeTest()
# Clone a server-side fork of the base repocd $WORKINGDIRgit clone --mirror git://127.0.0.1/test-base.git /git/remote/test-fork.gitcd /git/remote/test-fork.gitgit log -1 --pretty=oneline
# Restore the working directorycd $WORKINGDIR
# Execute integration testsjest int --runInBand

 49  __test__/git-auth-helper.int.test.ts

@@ -0,0 +1,49 @@import {GitCommandManager} from '../lib/git-command-manager'import {GitAuthHelper} from '../lib/git-auth-helper'
const REPO_PATH = '/git/local/test-base'
const extraheaderConfigKey = 'http.https://github.com/.extraheader'
@@ -418,18 +330,14 @@ const exists = await git.configExists(extraheaderConfigKey) expect(exists).toBeF
await gitAuthHelper.restorePersistedAuth()
const configValue = await git.getConfigValue(extraheaderConfigKey) expect(configValue).toEqual(extraheaderConfigValue)
await gitAuthHelper.removeAuth() })})

 23  __test__/integration-tests.sh

@@ -0,0 +1,23 @@#!/usr/bin/env bashset -euo pipefail
IMAGE="cpr-integration-tests:latest"ARG1=${1:-}
if [[ "$(docker images -q $IMAGE 2> /dev/null)" == "" || $ARG1 == "build" ]]; then echo "Building Docker image $IMAGE ..."
cat > Dockerfile << EOFFROM node:16-alpineRUN apk --no-cache add git git-daemonRUN npm install jest jest-environment-jsdom --globalWORKDIR /cprCOPY __test__/entrypoint.sh /entrypoint.shENTRYPOINT ["/entrypoint.sh"]EOF
docker build --no-cache -t $IMAGE . rm Dockerfilefi
docker run -v $PWD:/cpr $IMAGE
 165  __test__/utils.unit.test.ts

@@ -0,0 +1,165 @@import * as path from 'path'import * as utils from '../lib/utils'
const originalGitHubWorkspace = process.env['GITHUB_WORKSPACE']
describe('utils tests', () => { beforeAll(() => { // GitHub workspace process.env['GITHUB_WORKSPACE'] = __dirname })
@@ -454,175 +362,2559 @@ test('parseDisplayNameEmail successfully parses display name email formats', asy
const parsed2 = utils.parseDisplayNameEmail( 'github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>' ) expect(parsed2.name).toEqual('github-actions[bot]') expect(parsed2.email).toEqual( '41898282+github-actions[bot]@users.noreply.github.com' ) })
test('parseDisplayNameEmail fails to parse display name email formats', async () => { const displayNameEmail1 = 'abc@def.com' try { utils.parseDisplayNameEmail(displayNameEmail1) // Fail the test if an error wasn't thrown expect(true).toEqual(false) } catch (e: any) { expect(e.message).toEqual( `The format of '${displayNameEmail1}' is not a valid email address with display name` ) }
const displayNameEmail2 = ' < >' try { utils.parseDisplayNameEmail(displayNameEmail2) // Fail the test if an error wasn't thrown expect(true).toEqual(false) } catch (e: any) { expect(e.message).toEqual( `The format of '${displayNameEmail2}' is not a valid email address with display name` ) } })})

 86  action.yml

@@ -0,0 +1,86 @@name: 'Create Pull Request'description: 'Creates a pull request for changes to your repository in the actions workspace'inputs: token: description: 'GITHUB_TOKEN or a `repo` scoped Personal Access Token (PAT)' default: ${{ github.token }} path: description: > Relative path under $GITHUB_WORKSPACE to the repository. Defaults to $GITHUB_WORKSPACE. add-paths: description: > A comma or newline-separated list of file paths to commit. Paths should follow git's pathspec syntax. Defaults to adding all new and modified files. commit-message: description: 'The message to use when committing changes.' default: '[create-pull-request] automated change' committer: description: > The committer name and email address in the format `Display Name <email@address.com>`. Defaults to the GitHub Actions bot user. default: 'GitHub <noreply@github.com>' author: description: > The author name and email address in the format `Display Name <email@address.com>`. Defaults to the user who triggered the workflow run. default: '${{ github.actor }} <${{ github.actor }}@users.noreply.github.com>' signoff: description: 'Add `Signed-off-by` line by the committer at the end of the commit log message.' default: false branch: description: 'The pull request branch name.' default: 'create-pull-request/patch' delete-branch: description: > Delete the `branch` when closing pull requests, and when undeleted after merging. Recommend `true`. default: false branch-suffix: description: 'The branch suffix type when using the alternative branching strategy.' base: description: > The pull request base branch. Defaults to the branch checked out in the workflow. push-to-fork: description: > A fork of the checked out parent repository to which the pull request branch will be pushed. e.g. `owner/repo-fork`. The pull request will be created to merge the fork's branch into the parent's base. title: description: 'The title of the pull request.' default: 'Changes by create-pull-request action' body: description: 'The body of the pull request.' default: 'Automated changes by [create-pull-request](https://github.com/peter-evans/create-pull-request) GitHub action' labels: description: 'A comma or newline separated list of labels.' assignees: description: 'A comma or newline separated list of assignees (GitHub usernames).' reviewers: description: 'A comma or newline separated list of reviewers (GitHub usernames) to request a review from.' team-reviewers: description: > A comma or newline separated list of GitHub teams to request a review from. Note that a `repo` scoped Personal Access Token (PAT) may be required. milestone: description: 'The number of the milestone to associate the pull request with.' draft: description: 'Create a draft pull request. It is not possible to change draft status after creation except through the web interface' default: falseoutputs: pull-request-number: description: 'The pull request number' pull-request-url: description: 'The URL of the pull request.' pull-request-operation: description: 'The pull request operation performed by the action, `created`, `updated` or `closed`.' pull-request-head-sha: description: 'The commit SHA of the pull request branch.'runs: using: 'node16' main: 'dist/index.js'branding: icon: 'git-pull-request' color: 'gray-dark'

 1,010  dist/bridge.js

Load diff

Large diffs are not rendered by default.

 977  dist/events.js

Load diff

Large diffs are not rendered by default.

 63,547  dist/index.js

Load diff

Large diffs are not rendered by default.

 469  dist/setup-node-sandbox.js

Load diff

Large diffs are not rendered by default.

 457  dist/setup-sandbox.js

Load diff

Large diffs are not rendered by default.

 68  docs/assets/cpr-gitgraph.htm

@@ -0,0 +1,68 @@<!DOCTYPE html><html lang="en">
<head> <meta charset="UTF-8"> <title>create-pull-request GitHub action</title></head>
<body> <!-- partial:index.partial.html --> <div id="graph-container"></div> <!-- partial --> <script src='https://cdn.jsdelivr.net/npm/@gitgraph/js'></script> <script> const graphContainer = document.getElementById("graph-container");
const customTemplate = GitgraphJS.templateExtend(GitgraphJS.TemplateName.Metro, { commit: { message: { displayAuthor: false, displayHash: false, }, }, });
// Instantiate the graph. const gitgraph = GitgraphJS.createGitgraph(graphContainer, { template: customTemplate, orientation: "vertical-reverse" });
const main = gitgraph.branch("main"); main.commit("Last commit on base"); const localMain = gitgraph.branch("<#1> main (local)"); localMain.commit({ subject: "<uncommitted changes>", body: "Changes to the local base during the workflow", }) const remotePatch = gitgraph.branch("create-pull-request/patch"); remotePatch.merge({ branch: localMain, commitOptions: { subject: "[create-pull-request] automated change", body: "Changes pushed to create the remote branch", }, }); main.commit("New commit on base");
const localMain2 = gitgraph.branch("<#2> main (local)"); localMain2.commit({ subject: "<uncommitted changes>", body: "Changes to the updated local base during the workflow", }) remotePatch.merge({ branch: localMain2, commitOptions: { subject: "[create-pull-request] automated change", body: "Changes force pushed to update the remote branch", }, });
main.merge(remotePatch);
</script>
</body>
</html>

 BIN +108 KB docs/assets/cpr-gitgraph.png

Unable to render rich display

 6  docs/assets/logo.svg

Unable to render rich display

 BIN +327 KB docs/assets/pull-request-example.png

Unable to render rich display

 371  docs/concepts-guidelines.md

@@ -0,0 +1,371 @@# Concepts, guidelines and advanced usage
This document covers terminology, how the action works, general usage guidelines, and advanced usage.
- [Terminology](#terminology)- [Events and checkout](#events-and-checkout)- [How the action works](#how-the-action-works)- [Guidelines](#guidelines) - [Providing a consistent base](#providing-a-consistent-base) - [Events which checkout a commit](#events-which-checkout-a-commit) - [Restrictions on repository forks](#restrictions-on-repository-forks) - [Triggering further workflow runs](#triggering-further-workflow-runs) - [Security](#security)- [Advanced usage](#advanced-usage) - [Creating pull requests in a remote repository](#creating-pull-requests-in-a-remote-repository) - [Push using SSH (deploy keys)](#push-using-ssh-deploy-keys) - [Push pull request branches to a fork](#push-pull-request-branches-to-a-fork) - [Authenticating with GitHub App generated tokens](#authenticating-with-github-app-generated-tokens) - [GPG commit signature verification](#gpg-commit-signature-verification) - [Running in a container or on self-hosted runners](#running-in-a-container-or-on-self-hosted-runners)
## Terminology
[Pull requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests#about-pull-requests) are proposed changes to a repository branch that can be reviewed by a repository's collaborators before being accepted or rejected. 
A pull request references two branches:
- The `base` of a pull request is the branch you intend to change once the proposed changes are merged.- The `branch` of a pull request represents what you intend the `base` to look like when merged. It is the `base` branch *plus* changes that have been made to it.
## Events and checkout
This action expects repositories to be checked out with the official GitHub Actions [checkout](https://github.com/actions/checkout) action.For each [event type](https://docs.github.com/en/actions/reference/events-that-trigger-workflows) there is a default `GITHUB_SHA` that will be checked out.
The default can be overridden by specifying a `ref` on checkout.
```yml - uses: actions/checkout@v3 with: ref: develop```
## How the action works
Unless the `base` input is supplied, the action expects the target repository to be checked out on the pull request `base`&mdash;the branch you intend to modify with the proposed changes.
Workflow steps:
1. Checkout the `base` branch2. Make changes3. Execute `create-pull-request` action
The following git diagram shows how the action creates and updates a pull request branch.
![Create Pull Request GitGraph](assets/cpr-gitgraph.png)
## Guidelines
### Providing a consistent base
For the action to work correctly it should be executed in a workflow that checks out a *consistent* base branch. This will be the base of the pull request unless overridden with the `base` input.
This means your workflow should be consistently checking out the branch that you intend to modify once the PR is merged.
In the following example, the [`push`](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#push) and [`create`](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#create) events both trigger the same workflow. This will cause the checkout action to checkout inconsistent branches and commits. Do *not* do this. It will cause multiple pull requests to be created for each additional `base` the action is executed against.
```ymlon: push: create:jobs: example: runs-on: ubuntu-latest steps: - uses: actions/checkout@v3```
There may be use cases where it makes sense to execute the workflow on a branch that is not the base of the pull request. In these cases, the base branch can be specified with the `base` action input. The action will attempt to rebase changes made during the workflow on to the actual base.
### Events which checkout a commit
The [default checkout](#events-and-checkout) for the majority of events will leave the repository checked out on a branch.However, some events such as `release` and `pull_request` will leave the repository in a "detached HEAD" state.This is because they checkout a commit, not a branch.In these cases, you *must supply* the `base` input so the action can rebase changes made during the workflow for the pull request.
Workflows triggered by [`pull_request`](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#pull_request) events will by default check out a merge commit. Set the `base` input as follows to base the new pull request on the current pull request's branch.
```yml - uses: peter-evans/create-pull-request@v4 with: base: ${{ github.head_ref }}```
Workflows triggered by [`release`](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#release) events will by default check out a tag. For most use cases, you will need to set the `base` input to the branch name of the tagged commit.
```yml - uses: peter-evans/create-pull-request@v4 with: base: main```
### Restrictions on repository forks
GitHub Actions have imposed restrictions on workflow runs triggered by public repository forks.Private repositories can be configured to [enable workflows](https://docs.github.com/en/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository#enabling-workflows-for-private-repository-forks) from forks to run without restriction.
The restrictions apply to the `pull_request` event triggered by a fork opening a pull request in the upstream repository.
- Events from forks cannot access secrets, except for the default `GITHUB_TOKEN`. > With the exception of GITHUB_TOKEN, secrets are not passed to the runner when a workflow is triggered from a forked repository. [GitHub Actions: Using encrypted secrets in a workflow](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#using-encrypted-secrets-in-a-workflow)
- The `GITHUB_TOKEN` has read-only access when an event is triggered by a forked repository.
[GitHub Actions: Permissions for the GITHUB_TOKEN](https://docs.github.com/en/actions/configuring-and-managing-workflows/authenticating-with-the-github_token#permissions-for-the-github_token)
These restrictions mean that during a `pull_request` event triggered by a forked repository, actions have no write access to GitHub resources and will fail on any attempt.
A job condition can be added to prevent workflows from executing when triggered by a repository fork.
```ymlon: pull_requestjobs: example: runs-on: ubuntu-latest # Check if the event is not triggered by a fork if: github.event.pull_request.head.repo.full_name == github.repository```
For further reading regarding the security of pull requests, see this GitHub blog post titled [Keeping your GitHub Actions and workflows secure: Preventing pwn requests](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/)
### Triggering further workflow runs
Pull requests created by the action using the default `GITHUB_TOKEN` cannot trigger other workflows. If you have `on: pull_request` or `on: push` workflows acting as checks on pull requests, they will not run.
> When you use the repository's `GITHUB_TOKEN` to perform tasks, events triggered by the `GITHUB_TOKEN` will not create a new workflow run. This prevents you from accidentally creating recursive workflow runs. For example, if a workflow run pushes code using the repository's `GITHUB_TOKEN`, a new workflow will not run even when the repository contains a workflow configured to run when `push` events occur.[GitHub Actions: Triggering a workflow from a workflow](https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#triggering-a-workflow-from-a-workflow)
#### Workarounds to trigger further workflow runs
There are a number of workarounds with different pros and cons.
- Use the default `GITHUB_TOKEN` and allow the action to create pull requests that have no checks enabled. Manually close pull requests and immediately reopen them. This will enable `on: pull_request` workflows to run and be added as checks. To prevent merging of pull requests without checks erroneously, use [branch protection rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests).
- Use a `repo` scoped [Personal Access Token (PAT)](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) created on an account that has write access to the repository that pull requests are being created in. This is the standard workaround and [recommended by GitHub](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#triggering-new-workflows-using-a-personal-access-token). However, the PAT cannot be scoped to a specific repository so the token becomes a very sensitive secret. If this is a concern, the PAT can instead be created for a dedicated [machine account](https://docs.github.com/en/github/site-policy/github-terms-of-service#3-account-requirements) that has collaborator access to the repository. Also note that because the account that owns the PAT will be the creator of pull requests, that user account will be unable to perform actions such as request changes or approve the pull request.
- Use [SSH (deploy keys)](#push-using-ssh-deploy-keys) to push the pull request branch. This is arguably more secure than using a PAT because deploy keys can be set per repository. However, this method will only trigger `on: push` workflows.
- Use a [machine account that creates pull requests from its own fork](#push-pull-request-branches-to-a-fork). This is the most secure because the PAT created only grants access to the machine account's fork, not the main repository. This method will trigger `on: pull_request` workflows to run. Workflows triggered `on: push` will not run because the push event is in the fork.
- Use a [GitHub App to generate a token](#authenticating-with-github-app-generated-tokens) that can be used with this action. GitHub App generated tokens are more secure than using a PAT because GitHub App access permissions can be set with finer granularity and are scoped to only repositories where the App is installed. This method will trigger both `on: push` and `on: pull_request` workflows.
### Security
From a security perspective it's good practice to fork third-party actions, review the code, and use your fork of the action in workflows.By using third-party actions directly the risk exists that it could be modified to do something malicious, such as capturing secrets.
Alternatively, use the action directly and reference the commit hash for the version you want to target.```yml - uses: thirdparty/foo-action@172ec762f2ac8e050062398456fccd30444f8f30```
This action uses [ncc](https://github.com/vercel/ncc) to compile the Node.js code and dependencies into a single JavaScript file under the [dist](https://github.com/peter-evans/create-pull-request/tree/main/dist) directory.
## Advanced usage
### Creating pull requests in a remote repository
Checking out a branch from a different repository from where the workflow is executing will make *that repository* the target for the created pull request. In this case, a `repo` scoped [Personal Access Token (PAT)](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) is required.
```yml - uses: actions/checkout@v3 with: token: ${{ secrets.PAT }} repository: owner/repo # Make changes to pull request here - uses: peter-evans/create-pull-request@v4 with: token: ${{ secrets.PAT }}```
### Push using SSH (deploy keys)
[Deploy keys](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys) can be set per repository and so are arguably more secure than using a `repo` scoped [Personal Access Token (PAT)](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).Allowing the action to push with a configured deploy key will trigger `on: push` workflows. This makes it an alternative to using a PAT to trigger checks for pull requests.Note that you cannot use deploy keys alone to [create a pull request in a remote repository](#creating-pull-requests-in-a-remote-repository) because then using a PAT would become a requirement. This method only makes sense if creating a pull request in the repository where the workflow is running.
How to use SSH (deploy keys) with create-pull-request action:
1. [Create a new SSH key pair](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key) for your repository. Do not set a passphrase.2. Copy the contents of the public key (.pub file) to a new repository [deploy key](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys) and check the box to "Allow write access."3. Add a secret to the repository containing the entire contents of the private key.4. As shown in the example below, configure `actions/checkout` to use the deploy key you have created.
```yml steps: - uses: actions/checkout@v3 with: ssh-key: ${{ secrets.SSH_PRIVATE_KEY }} # Make changes to pull request here - name: Create Pull Request uses: peter-evans/create-pull-request@v4```
### Push pull request branches to a fork
Instead of pushing pull request branches to the repository you want to update, you can push them to a fork of that repository.This allows you to employ the [principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege) by using a dedicated user acting as a [machine account](https://docs.github.com/en/github/site-policy/github-terms-of-service#3-account-requirements).This user only has `read` access to the main repository.It will use their own fork to push code and create the pull request.Note that if you choose to use this method (not give the machine account `write` access to the repository) the following inputs cannot be used: `labels`, `assignees`, `reviewers`, `team-reviewers` and `milestone`.
1. Create a new GitHub user and login.2. Fork the repository that you will be creating pull requests in.3. Create a [Personal Access Token (PAT)](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).4. Logout and log back into your main user account.5. Add a secret to your repository containing the above PAT.6. As shown in the following example workflow, set the `push-to-fork` input to the full repository name of the fork.
```yaml - uses: actions/checkout@v3 # Make changes to pull request here - uses: peter-evans/create-pull-request@v4 with: token: ${{ secrets.MACHINE_USER_PAT }} push-to-fork: machine-user/fork-of-repository```
### Authenticating with GitHub App generated tokens
A GitHub App can be created for the sole purpose of generating tokens for use with GitHub actions.These tokens can be used in place of `GITHUB_TOKEN` or a [Personal Access Token (PAT)](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).GitHub App generated tokens are more secure than using a PAT because GitHub App access permissions can be set with finer granularity and are scoped to only repositories where the App is installed.
1. Create a minimal [GitHub App](https://docs.github.com/en/developers/apps/creating-a-github-app), setting the following fields:
- Set `GitHub App name`. - Set `Homepage URL` to anything you like, such as your GitHub profile page. - Uncheck `Active` under `Webhook`. You do not need to enter a `Webhook URL`. - Under `Repository permissions: Contents` select `Access: Read & write`. - Under `Repository permissions: Pull requests` select `Access: Read & write`. - Under `Organization permissions: Members` select `Access: Read-only`. - **NOTE**: Only needed if you would like add teams as reviewers to PRs.
2. Create a Private key from the App settings page and store it securely.
3. Install the App on any repository where workflows will run requiring tokens.
4. Set secrets on your repository containing the GitHub App ID, and the private key you created in step 2. e.g. `APP_ID`, `APP_PRIVATE_KEY`.
5. The following example workflow shows how to use [tibdex/github-app-token](https://github.com/tibdex/github-app-token) to generate a token for use with this action.
```yaml steps: - uses: actions/checkout@v3 - uses: tibdex/github-app-token@v1 id: generate-token with: app_id: ${{ secrets.APP_ID }} private_key: ${{ secrets.APP_PRIVATE_KEY }} # Make changes to pull request here - name: Create Pull Request uses: peter-evans/create-pull-request@v4 with: token: ${{ steps.generate-token.outputs.token }}```
### GPG commit signature verification
The action can use GPG to sign commits with a GPG key that you generate yourself.
1. Follow GitHub's guide to [generate a new GPG key](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-gpg-key).
2. [Add the public key](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account) to the user account associated with the [Personal Access Token (PAT)](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) that you will use with the action.
3. Copy the private key to your clipboard, replacing `email@example.com` with the email address of your GPG key. ``` # macOS gpg --armor --export-secret-key email@example.com | pbcopy ```
4. Paste the private key into a repository secret where the workflow will run. e.g. `GPG_PRIVATE_KEY`
5. Create another repository secret for the key's passphrase, if applicable. e.g. `GPG_PASSPHRASE`
6. The following example workflow shows how to use [crazy-max/ghaction-import-gpg](https://github.com/crazy-max/ghaction-import-gpg) to import your GPG key and allow the action to sign commits.
Note that the `committer` email address *MUST* match the email address used to create your GPG key.
```yaml steps: - uses: actions/checkout@v3 - uses: crazy-max/ghaction-import-gpg@v3 with: gpg-private-key: ${{ secrets.GPG_PRIVATE_KEY }} passphrase: ${{ secrets.GPG_PASSPHRASE }} git-user-signingkey: true git-commit-gpgsign: true # Make changes to pull request here - name: Create Pull Request uses: peter-evans/create-pull-request@v4 with: token: ${{ secrets.PAT }} committer: example <email@example.com>```
### Running in a container or on self-hosted runners
This action can be run inside a container, or on [self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners), by installing the necessary dependencies.
This action requires `git` to be installed and on the `PATH`. Note that `actions/checkout` requires Git 2.18 or higher to be installed, otherwise it will just download the source of the repository instead of cloning it.
The following examples of running in a container show the dependencies being installed during the workflow, but they could also be pre-installed in a custom image.
**Alpine container example:**```ymljobs: createPullRequestAlpine: runs-on: ubuntu-latest container: image: alpine steps: - name: Install dependencies run: apk --no-cache add git - uses: actions/checkout@v3 # Make changes to pull request here - name: Create Pull Request uses: peter-evans/create-pull-request@v4```
**Ubuntu container example:**```ymljobs: createPullRequestAlpine: runs-on: ubuntu-latest container: image: ubuntu steps: - name: Install dependencies run: | apt-get update apt-get install -y software-properties-common add-apt-repository -y ppa:git-core/ppa apt-get install -y git - uses: actions/checkout@v3 # Make changes to pull request here - name: Create Pull Request uses: peter-evans/create-pull-request@v4```

 634  docs/examples.md

@@ -0,0 +1,634 @@# Examples
- [Use case: Create a pull request to update X on push](#use-case-create-a-pull-request-to-update-x-on-push) - [Update project authors](#update-project-authors) - [Keep a branch up-to-date with another](#keep-a-branch-up-to-date-with-another)- [Use case: Create a pull request to update X on release](#use-case-create-a-pull-request-to-update-x-on-release) - [Update changelog](#update-changelog)- [Use case: Create a pull request to update X periodically](#use-case-create-a-pull-request-to-update-x-periodically) - [Update NPM dependencies](#update-npm-dependencies) - [Update Gradle dependencies](#update-gradle-dependencies) - [Update Cargo dependencies](#update-cargo-dependencies) - [Update SwaggerUI for GitHub Pages](#update-swaggerui-for-github-pages) - [Keep a fork up-to-date with its upstream](#keep-a-fork-up-to-date-with-its-upstream) - [Spider and download a website](#spider-and-download-a-website)- [Use case: Create a pull request to update X by calling the GitHub API](#use-case-create-a-pull-request-to-update-x-by-calling-the-github-api) - [Call the GitHub API from an external service](#call-the-github-api-from-an-external-service) - [Call the GitHub API from another GitHub Actions workflow](#call-the-github-api-from-another-github-actions-workflow)- [Use case: Create a pull request to modify/fix pull requests](#use-case-create-a-pull-request-to-modifyfix-pull-requests) - [autopep8](#autopep8)- [Misc workflow tips](#misc-workflow-tips) - [Filtering push events](#filtering-push-events) - [Dynamic configuration using variables](#dynamic-configuration-using-variables) - [Setting the pull request body from a file](#setting-the-pull-request-body-from-a-file) - [Using a markdown template](#using-a-markdown-template) - [Debugging GitHub Actions](#debugging-github-actions)

## Use case: Create a pull request to update X on push
This pattern will work well for updating any kind of static content based on pushed changes. Care should be taken when using this pattern in repositories with a high frequency of commits.
### Update project authors
Raises a pull request to update a file called `AUTHORS` with the git user names and email addresses of contributors.
```ymlname: Update AUTHORSon: push: branches: - mainjobs: updateAuthors: runs-on: ubuntu-latest steps: - uses: actions/checkout@v3 with: fetch-depth: 0 - name: Update AUTHORS run: | git log --format='%aN <%aE>%n%cN <%cE>' | sort -u > AUTHORS - name: Create Pull Request uses: peter-evans/create-pull-request@v4 with: commit-message: update authors title: Update AUTHORS body: Credit new contributors by updating AUTHORS branch: update-authors```### Keep a branch up-to-date with anotherThis is a use case where a branch should be kept up to date with another by opening a pull request to update it. The pull request should then be updated with new changes until it is merged or closed.In this example scenario, a branch called `production` should be updated via pull request to keep it in sync with `main`. Merging the pull request is effectively promoting those changes to production.```ymlname: Create production promotion pull requeston: push: branches: - mainjobs: productionPromotion: runs-on: ubuntu-latest steps: - uses: actions/checkout@v3 with: ref: production - name: Reset promotion branch run: | git fetch origin main:main git reset --hard main - name: Create Pull Request uses: peter-evans/create-pull-request@v4 with: branch: production-promotion```## Use case: Create a pull request to update X on releaseThis pattern will work well for updating any kind of static content based on the tagged commit of a release. Note that because `release` is one of the [events which checkout a commit](concepts-guidelines.md#events-which-checkout-a-commit) it is necessary to supply the `base` input to the action.### Update changelogRaises a pull request to update the `CHANGELOG.md` file based on the tagged commit of the release.Note that [git-chglog](https://github.com/git-chglog/git-chglog/) requires some configuration files to exist in the repository before this workflow will work.This workflow assumes the tagged release was made on a default branch called `main`.```ymlname: Update Changelogon: release: types: [published]jobs: updateChangelog: runs-on: ubuntu-latest steps: - uses: actions/checkout@v3 with: fetch-depth: 0 - name: Update Changelog run: | curl -o git-chglog -L https://github.com/git-chglog/git-chglog/releases/download/0.9.1/git-chglog_linux_amd64 chmod u+x git-chglog ./git-chglog -o CHANGELOG.md rm git-chglog - name: Create Pull Request uses: peter-evans/create-pull-request@v4 with: commit-message: update changelog title: Update Changelog body: Update changelog to reflect release changes branch: update-changelog base: main```## Use case: Create a pull request to update X periodicallyThis pattern will work well for updating any kind of static content from an external source. The workflow executes on a schedule and raises a pull request when there are changes.### Update NPM dependenciesThis workflow will create a pull request for npm dependencies.It works best in combination with a build workflow triggered on `push` and `pull_request`.A [Personal Access Token (PAT)](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) can be used in order for the creation of the pull request to trigger further workflows. See the [documentation here](concepts-guidelines.md#triggering-further-workflow-runs) for further details.```ymlname: Update Dependencieson: schedule: - cron: '0 10 * * 1'jobs: update-dep: runs-on: ubuntu-latest steps: - uses: actions/checkout@v3 - uses: actions/setup-node@v3 with: node-version: '16.x' - name: Update dependencies run: | npx -p npm-check-updates ncu -u npm install - name: Create Pull Request uses: peter-evans/create-pull-request@v4 with: token: ${{ secrets.PAT }} commit-message: Update dependencies title: Update dependencies body: | - Dependency updates Auto-generated by [create-pull-request][1] [1]: https://github.com/peter-evans/create-pull-request branch: update-dependencies```The above workflow works best in combination with a build workflow triggered on `push` and `pull_request`.```ymlname: CIon: push: branches: [main] pull_request: branches: [main]jobs: build: runs-on: ubuntu-latest steps: - uses: actions/checkout@v3 - uses: actions/setup-node@v3 with: node-version: 16.x - run: npm ci - run: npm run test - run: npm run build```### Update Gradle dependenciesThe following workflow will create a pull request for Gradle dependencies.It requires first configuring your project to use Gradle lockfiles.See [here](https://github.com/peter-evans/gradle-auto-dependency-updates) for how to configure your project and use the following workflow.```ymlname: Update Dependencieson: schedule: - cron: '0 1 * * 1'jobs: update-dep: runs-on: ubuntu-latest steps: - uses: actions/checkout@v3 - uses: actions/setup-java@v2 with: distribution: 'temurin' java-version: 1.8 - name: Grant execute permission for gradlew run: chmod +x gradlew - name: Perform dependency resolution and write new lockfiles run: ./gradlew dependencies --write-locks - name: Create Pull Request uses: peter-evans/create-pull-request@v4 with: token: ${{ secrets.PAT }} commit-message: Update dependencies title: Update dependencies body: | - Dependency updates Auto-generated by [create-pull-request][1] [1]: https://github.com/peter-evans/create-pull-request branch: update-dependencies```### Update Cargo dependenciesThe following workflow will create a pull request for Cargo dependencies.It optionally uses [`cargo-edit`](https://github.com/killercup/cargo-edit) to update `Cargo.toml` and keep it in sync with `Cargo.lock`.```ymlname: Update Dependencieson: schedule: - cron: '0 1 * * 1'jobs: update-dep: runs-on: ubuntu-latest steps: - uses: actions/checkout@v3 - name: Update dependencies run: | cargo install cargo-edit cargo update cargo upgrade --to-lockfile - name: Create Pull Request uses: peter-evans/create-pull-request@v4 with: token: ${{ secrets.PAT }} commit-message: Update dependencies title: Update dependencies body: | - Dependency updates Auto-generated by [create-pull-request][1] [1]: https://github.com/peter-evans/create-pull-request branch: update-dependencies```### Update SwaggerUI for GitHub PagesWhen using [GitHub Pages to host Swagger documentation](https://github.com/peter-evans/swagger-github-pages), this workflow updates the repository with the latest distribution of [SwaggerUI](https://github.com/swagger-api/swagger-ui).You must create a file called `swagger-ui.version` at the root of your repository before running.```ymlname: Update Swagger UIon: schedule: - cron: '0 10 * * *'jobs: updateSwagger: runs-on: ubuntu-latest steps: - uses: actions/checkout@v3 - name: Get Latest Swagger UI Release id: swagger-ui run: | release_tag=$(curl -sL https://api.github.com/repos/swagger-api/swagger-ui/releases/latest | jq -r ".tag_name") echo "release_tag=$release_tag" >> $GITHUB_OUTPUT current_tag=$(<swagger-ui.version) echo "current_tag=$current_tag" >> $GITHUB_OUTPUT - name: Update Swagger UI if: steps.swagger-ui.outputs.current_tag != steps.swagger-ui.outputs.release_tag env: RELEASE_TAG: ${{ steps.swagger-ui.outputs.release_tag }} SWAGGER_YAML: "swagger.yaml" run: | # Delete the dist directory and index.html rm -fr dist index.html # Download the release curl -sL -o $RELEASE_TAG https://api.github.com/repos/swagger-api/swagger-ui/tarball/$RELEASE_TAG # Extract the dist directory tar -xzf $RELEASE_TAG --strip-components=1 $(tar -tzf $RELEASE_TAG | head -1 | cut -f1 -d"/")/dist rm $RELEASE_TAG # Move index.html to the root mv dist/index.html . # Fix references in index.html sed -i "s|https://petstore.swagger.io/v2/swagger.json|$SWAGGER_YAML|g" index.html sed -i "s|href=\"./|href=\"dist/|g" index.html sed -i "s|src=\"./|src=\"dist/|g" index.html # Update current release echo ${{ steps.swagger-ui.outputs.release_tag }} > swagger-ui.version - name: Create Pull Request uses: peter-evans/create-pull-request@v4 with: commit-message: Update swagger-ui to ${{ steps.swagger-ui.outputs.release_tag }} title: Update SwaggerUI to ${{ steps.swagger-ui.outputs.release_tag }} body: | Updates [swagger-ui][1] to ${{ steps.swagger-ui.outputs.release_tag }} Auto-generated by [create-pull-request][2] [1]: https://github.com/swagger-api/swagger-ui [2]: https://github.com/peter-evans/create-pull-request labels: dependencies, automated pr branch: swagger-ui-updates```### Keep a fork up-to-date with its upstreamThis example is designed to be run in a seperate repository from the fork repository itself.The aim of this is to prevent committing anything to the fork's default branch would cause it to differ from the upstream.In the following example workflow, `owner/repo` is the upstream repository and `fork-owner/repo` is the fork. It assumes the default branch of the upstream repository is called `main`.The [Personal Access Token (PAT)](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) should have `repo` scope. Additionally, if the upstream makes changes to the `.github/workflows` directory, the action will be unable to push the changes to a branch and throw the error "_(refusing to allow a GitHub App to create or update workflow `.github/workflows/xxx.yml` without `workflows` permission)_". To allow these changes to be pushed to the fork, add the `workflow` scope to the PAT. Of course, allowing this comes with the risk that the workflow changes from the upstream could run and do something unexpected. Disabling GitHub Actions in the fork is highly recommended to prevent this.When you merge the pull request make sure to choose the [`Rebase and merge`](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#rebase-and-merge-your-pull-request-commits) option. This will make the fork's commits match the commits on the upstream.```ymlname: Update forkon: schedule: - cron: '0 0 * * 0'jobs: updateFork: runs-on: ubuntu-latest steps: - uses: actions/checkout@v3 with: repository: fork-owner/repo - name: Reset the default branch with upstream changes run: | git remote add upstream https://github.com/owner/repo.git git fetch upstream main:upstream-main git reset --hard upstream-main - name: Create Pull Request uses: peter-evans/create-pull-request@v4 with: token: ${{ secrets.PAT }} branch: upstream-changes```### Spider and download a websiteThis workflow spiders a website and downloads the content. Any changes to the website will be raised in a pull request.```ymlname: Download Websiteon: schedule: - cron: '0 10 * * *'jobs: format: runs-on: ubuntu-latest steps: - uses: actions/checkout@v3 - name: Download website run: | wget \ --recursive \ --level=2 \ --wait=1 \ --no-clobber \ --page-requisites \ --html-extension \ --convert-links \ --domains quotes.toscrape.com \ http://quotes.toscrape.com/ - name: Create Pull Request uses: peter-evans/create-pull-request@v4 with: commit-message: update local website copy title: Automated Updates to Local Website Copy body: This is an auto-generated PR with website updates. branch: website-updates```## Use case: Create a pull request to update X by calling the GitHub APIYou can use the GitHub API to trigger a webhook event called [`repository_dispatch`](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#repository_dispatch) when you want to trigger a workflow for any activity that happens outside of GitHub.This pattern will work well for updating any kind of static content from an external source.You can modify any of the examples in the previous section to work in this fashion.Set the workflow to execute `on: repository_dispatch`.```ymlon: repository_dispatch: types: [create-pull-request]```### Call the GitHub API from an external serviceAn `on: repository_dispatch` workflow can be triggered by a call to the GitHub API as follows.- `[username]` is a GitHub username- `[token]` is a `repo` scoped [Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)- `[repository]` is the name of the repository the workflow resides in.```curl -XPOST -u "[username]:[token]" \ -H "Accept: application/vnd.github.everest-preview+json" \ -H "Content-Type: application/json" \ https://api.github.com/repos/[username]/[repository]/dispatches \ --data '{"event_type": "create-pull-request"}'```### Call the GitHub API from another GitHub Actions workflowAn `on: repository_dispatch` workflow can be triggered from another workflow with [repository-dispatch](https://github.com/peter-evans/repository-dispatch) action.```yml- name: Repository Dispatch uses: peter-evans/repository-dispatch@v2 with: token: ${{ secrets.REPO_ACCESS_TOKEN }} repository: username/my-repo event-type: create-pull-request client-payload: '{"ref": "${{ github.ref }}", "sha": "${{ github.sha }}"}'```## Use case: Create a pull request to modify/fix pull requests**Note**: While the following approach does work, my strong recommendation would be to use a slash command style "ChatOps" solution for operations on pull requests. See [slash-command-dispatch](https://github.com/peter-evans/slash-command-dispatch) for such a solution.This is a pattern that lends itself to automated code linting and fixing. A pull request can be created to fix or modify something during an `on: pull_request` workflow. The pull request containing the fix will be raised with the original pull request as the base. This can be then be merged to update the original pull request and pass any required tests.Note that due to [token restrictions on public repository forks](https://docs.github.com/en/actions/configuring-and-managing-workflows/authenticating-with-the-github_token#permissions-for-the-github_token), workflows for this use case do not work for pull requests raised from forks.Private repositories can be configured to [enable workflows](https://docs.github.com/en/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository#enabling-workflows-for-private-repository-forks) from forks to run without restriction. ### autopep8The following is an example workflow for a use case where [autopep8 action](https://github.com/peter-evans/autopep8) runs as both a check on pull requests and raises a further pull request to apply code fixes.How it works:1. When a pull request is raised the workflow executes as a check2. If autopep8 makes any fixes a pull request will be raised for those fixes to be merged into the current pull request branch. The workflow then deliberately causes the check to fail.3. When the pull request containing the fixes is merged the workflow runs again. This time autopep8 makes no changes and the check passes.4. The original pull request can now be merged.```ymlname: autopep8on: pull_requestjobs: autopep8: # Check if the PR is not raised by this workflow and is not from a fork if: startsWith(github.head_ref, 'autopep8-patches') == false && github.event.pull_request.head.repo.full_name == github.repository runs-on: ubuntu-latest steps: - uses: actions/checkout@v3 with: ref: ${{ github.head_ref }} - name: autopep8 id: autopep8 uses: peter-evans/autopep8@v1 with: args: --exit-code --recursive --in-place --aggressive --aggressive . - name: Set autopep8 branch name id: vars run: | branch-name="autopep8-patches/${{ github.head_ref }}" echo "branch-name=$branch-name" >> $GITHUB_OUTPUT - name: Create Pull Request if: steps.autopep8.outputs.exit-code == 2 uses: peter-evans/create-pull-request@v4 with: commit-message: autopep8 action fixes title: Fixes by autopep8 action body: This is an auto-generated PR with fixes by autopep8. labels: autopep8, automated pr branch: ${{ steps.vars.outputs.branch-name }} - name: Fail if autopep8 made changes if: steps.autopep8.outputs.exit-code == 2 run: exit 1```## Misc workflow tips### Filtering push eventsFor workflows using `on: push` you may want to ignore push events for tags and only execute for branches. Specifying `branches` causes only events on branches to trigger the workflow. The `'**'` wildcard will match any branch name.```ymlon: push: branches: - '**' ```If you have a workflow that contains jobs to handle push events on branches as well as tags, you can make sure that the job where you use `create-pull-request` action only executes when `github.ref` is a branch by using an `if` condition as follows.```ymlon: pushjobs: createPullRequest: if: startsWith(github.ref, 'refs/heads/') runs-on: ubuntu-latest steps: - uses: actions/checkout@v3 ... someOtherJob: runs-on: ubuntu-latest steps: - uses: actions/checkout@v3 ...```### Dynamic configuration using variablesThe following examples show how configuration for the action can be dynamically defined in a previous workflow step.Note that the step where output variables are defined must have an id.```yml - name: Set output variables id: vars run: | pr_title="[Test] Add report file $(date +%d-%m-%Y)" pr_body="This PR was auto-generated on $(date +%d-%m-%Y) \ by [create-pull-request](https://github.com/peter-evans/create-pull-request)." echo "pr_title=$pr_title" >> $GITHUB_OUTPUT echo "pr_body=$pr_body" >> $GITHUB_OUTPUT - name: Create Pull Request uses: peter-evans/create-pull-request@v4 with: title: ${{ steps.vars.outputs.pr_title }} body: ${{ steps.vars.outputs.pr_body }}```### Setting the pull request body from a fileThis example shows how file content can be read into a variable and passed to the action.```yml - id: get-pr-body run: | body=$(cat pr-body.txt) delimiter="$(openssl rand -hex 8)" echo "body<<$delimiter" >> $GITHUB_OUTPUT echo "$body" >> $GITHUB_OUTPUT echo "$delimiter" >> $GITHUB_OUTPUT - name: Create Pull Request uses: peter-evans/create-pull-request@v4 with: body: ${{ steps.get-pr-body.outputs.body }}```### Using a markdown templateIn this example, a markdown template file is added to the repository at `.github/pull-request-template.md` with the following content.```This is a test pull request templateRender template variables such as {{ .foo }} and {{ .bar }}.```The template is rendered using the [render-template](https://github.com/chuhlomin/render-template) action and the result is used to create the pull request.```yml - name: Render template id: template uses: chuhlomin/render-template@v1.4 with: template: .github/pull-request-template.md vars: | foo: this bar: that - name: Create Pull Request uses: peter-evans/create-pull-request@v4 with: body: ${{ steps.template.outputs.result }}```### Debugging GitHub Actions#### Runner Diagnostic Logging[Runner diagnostic logging](https://docs.github.com/en/actions/configuring-and-managing-workflows/managing-a-workflow-run#enabling-runner-diagnostic-logging) provides additional log files that contain information about how a runner is executing an action.To enable runner diagnostic logging, set the secret `ACTIONS_RUNNER_DEBUG` to `true` in the repository that contains the workflow.#### Step Debug Logging[Step debug logging](https://docs.github.com/en/actions/configuring-and-managing-workflows/managing-a-workflow-run#enabling-step-debug-logging) increases the verbosity of a job's logs during and after a job's execution.To enable step debug logging set the secret `ACTIONS_STEP_DEBUG` to `true` in the repository that contains the workflow.#### Output Various Contexts```yml steps: - name: Dump GitHub context env: GITHUB_CONTEXT: ${{ toJson(github) }} run: echo "$GITHUB_CONTEXT" - name: Dump job context env: JOB_CONTEXT: ${{ toJson(job) }} run: echo "$JOB_CONTEXT" - name: Dump steps context env: STEPS_CONTEXT: ${{ toJson(steps) }} run: echo "$STEPS_CONTEXT" - name: Dump runner context env: RUNNER_CONTEXT: ${{ toJson(runner) }} run: echo "$RUNNER_CONTEXT" - name: Dump strategy context env: STRATEGY_CONTEXT: ${{ toJson(strategy) }} run: echo "$STRATEGY_CONTEXT" - name: Dump matrix context env: MATRIX_CONTEXT: ${{ toJson(matrix) }} run: echo "$MATRIX_CONTEXT"```

 87  docs/updating.md

@@ -0,0 +1,87 @@## Updating from `v3` to `v4`
### Breaking changes
- The `add-paths` input no longer accepts `-A` as a valid value. When committing all new and modified files the `add-paths` input should be omitted.
@@ -651,23 +2943,14 @@ To use `actions/checkout@v1` the following step to checkout the branch is necess
If neither `author` or `committer` are set the action will default to making commits as the GitHub Actions bot user.
### What's new
- Unpushed commits made during the workflow before the action runs will now be considered as changes to be raised in the pull request. See [Create your own commits](https://github.com/peter-evans/create-pull-request#create-your-own-commits) for details.- New commits made to the pull request base will now be taken into account when pull requests are updated.- If an updated pull request no longer differs from its base it will automatically be closed and the pull request branch deleted.

 11  jest.config.js

@@ -0,0 +1,11 @@module.exports = { clearMocks: true, moduleFileExtensions: ['js', 'ts'], testEnvironment: 'node', testMatch: ['**/*.test.ts'], testRunner: 'jest-circus/runner', transform: { '^.+\\.ts$': 'ts-jest' }, verbose: true}

 14,160  package-lock.json

Load diff

Large diffs are not rendered by default.

 58  package.json

@@ -0,0 +1,58 @@{ "name": "create-pull-request", "version": "4.0.0", "private": true, "description": "Creates a pull request for changes to your repository in the actions workspace", "main": "lib/main.js", "scripts": { "build": "tsc && ncc build", "format": "prettier --write '**/*.ts'", "format-check": "prettier --check '**/*.ts'", "lint": "eslint src/**/*.ts", "test:unit": "jest unit", "test:int": "__test__/integration-tests.sh", "test": "npm run test:unit && npm run test:int" }, "repository": { "type": "git", "url": "git+https://github.com/peter-evans/create-pull-request.git" }, "keywords": [ "actions", "pull", "request" ], "author": "Peter Evans", "license": "MIT", "bugs": { "url": "https://github.com/peter-evans/create-pull-request/issues" }, "homepage": "https://github.com/peter-evans/create-pull-request", "dependencies": { "@actions/core": "^1.10.0", "@actions/exec": "^1.1.1", "@octokit/core": "^3.5.1", "@octokit/plugin-paginate-rest": "^2.17.0", "@octokit/plugin-rest-endpoint-methods": "^5.13.0", "proxy-agent": "^5.0.0", "uuid": "^8.3.2" }, "devDependencies": { "@types/jest": "^27.5.0", "@types/node": "^16.11.11", "@typescript-eslint/parser": "^5.5.0", "@vercel/ncc": "^0.32.0", "eslint": "^8.3.0", "eslint-import-resolver-typescript": "^2.5.0", "eslint-plugin-github": "^4.3.5", "eslint-plugin-import": "^2.25.3", "eslint-plugin-jest": "^26.1.5", "jest": "^28.1.0", "jest-circus": "^28.1.0", "jest-environment-jsdom": "^28.1.0", "js-yaml": "^4.1.0", "prettier": "^2.5.0", "ts-jest": "^28.0.2", "typescript": "^4.5.2" }}

 294  src/create-or-update-branch.ts

@@ -0,0 +1,294 @@import * as core from '@actions/core'import {GitCommandManager} from './git-command-manager'import {v4 as uuidv4} from 'uuid'
const CHERRYPICK_EMPTY = 'The previous cherry-pick is now empty, possibly due to conflict resolution.'const NOTHING_TO_COMMIT = 'nothing to commit, working tree clean'
export enum WorkingBaseType { Branch = 'branch', Commit = 'commit'}
@@ -694,9 +2977,7 @@ export async function createOrUpdateBranch( git: GitCommandManager, commitMessag
// Delete the temporary branch await git.exec(['branch', '--delete', '--force', tempBranch])
return result}
interface CreateOrUpdateBranchResult { action: string base: string hasDiffWithBase: boolean headSha: string}

 260  src/create-pull-request.ts

@@ -0,0 +1,260 @@import * as core from '@actions/core'import { createOrUpdateBranch, getWorkingBaseAndType, WorkingBaseType} from './create-or-update-branch'import {GitHubHelper} from './github-helper'import {GitCommandManager} from './git-command-manager'import {GitAuthHelper} from './git-auth-helper'import * as utils from './utils'
export interface Inputs { token: string path: string addPaths: string[] commitMessage: string committer: string author: string signoff: boolean branch: string deleteBranch: boolean branchSuffix: string base: string pushToFork: string title: string body: string labels: string[] assignees: string[] reviewers: string[] teamReviewers: string[] milestone: number draft: boolean}
export async function createPullRequest(inputs: Inputs): Promise<void> { let gitAuthHelper try { if (!inputs.token) { throw new Error(`Input 'token' not supplied. Unable to continue.`) }
@@ -714,9 +2995,7 @@ if (['created', 'updated'].includes(result.action)) { // The branch was created
// Set the base. It would have been '' if not specified as an input inputs.base = result.base
if (result.hasDiffWithBase) { // Create or update the pull request core.startGroup('Create or update the pull request') const pull = await githubHelper.createOrUpdatePullRequest( inputs, baseRemote.repository, branchRepository ) core.endGroup()
// Set outputs core.startGroup('Setting outputs') core.setOutput('pull-request-number', pull.number) core.setOutput('pull-request-url', pull.html_url) if (pull.created) { core.setOutput('pull-request-operation', 'created') } else if (result.action == 'updated') { core.setOutput('pull-request-operation', 'updated') } core.setOutput('pull-request-head-sha', result.headSha) // Deprecated core.exportVariable('PULL_REQUEST_NUMBER', pull.number) core.endGroup() } else { // There is no longer a diff with the base // Check we are in a state where a branch exists if (['updated', 'not-updated'].includes(result.action)) { core.info( `Branch '${inputs.branch}' no longer differs from base branch '${inputs.base}'` ) if (inputs.deleteBranch) { core.info(`Deleting branch '${inputs.branch}'`) await git.push([ '--delete', '--force', branchRemoteName, `refs/heads/${inputs.branch}` ]) // Set outputs core.startGroup('Setting outputs') core.setOutput('pull-request-operation', 'closed') core.endGroup() } } } } catch (error) { core.setFailed(utils.getErrorMessage(error)) } finally { // Remove auth and restore persisted auth config if it existed core.startGroup('Restore persisted git credentials') await gitAuthHelper.removeAuth() await gitAuthHelper.restorePersistedAuth() core.endGroup() }}

 127  src/git-auth-helper.ts

@@ -0,0 +1,127 @@import * as core from '@actions/core'import * as fs from 'fs'import {GitCommandManager} from './git-command-manager'import * as path from 'path'import {URL} from 'url'import * as utils from './utils'
export class GitAuthHelper { private git: GitCommandManager private gitConfigPath: string private extraheaderConfigKey: string private extraheaderConfigPlaceholderValue = 'AUTHORIZATION: basic ***' private extraheaderConfigValueRegex = '^AUTHORIZATION:' private persistedExtraheaderConfigValue = ''
constructor(git: GitCommandManager) { this.git = git this.gitConfigPath = path.join( this.git.getWorkingDirectory(), '.git', 'config' ) const serverUrl = this.getServerUrl() this.extraheaderConfigKey = `http.${serverUrl.origin}/.extraheader` }
@@ -728,9 +3007,7 @@ private async setExtraheaderConfig( extraheaderConfigValue: string ): Promise<vo
private async getAndUnset(): Promise<string> { let configValue = '' // Save and unset persisted extraheader credential in git config if it exists if ( await this.git.configExists( this.extraheaderConfigKey, this.extraheaderConfigValueRegex ) ) { configValue = await this.git.getConfigValue( this.extraheaderConfigKey, this.extraheaderConfigValueRegex ) if ( await this.git.tryConfigUnset( this.extraheaderConfigKey, this.extraheaderConfigValueRegex ) ) { core.info(`Unset config key '${this.extraheaderConfigKey}'`) } else { core.warning( `Failed to unset config key '${this.extraheaderConfigKey}'` ) } } return configValue }
private async gitConfigStringReplace( find: string, replace: string ): Promise<void> { let content = (await fs.promises.readFile(this.gitConfigPath)).toString() const index = content.indexOf(find) if (index < 0 || index != content.lastIndexOf(find)) { throw new Error(`Unable to replace '${find}' in ${this.gitConfigPath}`) } content = content.replace(find, replace) await fs.promises.writeFile(this.gitConfigPath, content) }
private getServerUrl(): URL { // todo: remove GITHUB_URL after support for GHES Alpha is no longer needed // See https://github.com/actions/checkout/blob/main/src/url-helper.ts#L22-L29 return new URL( process.env['GITHUB_SERVER_URL'] || process.env['GITHUB_URL'] || 'https://github.com' ) }}

 303  src/git-command-manager.ts

@@ -0,0 +1,303 @@import * as exec from '@actions/exec'import * as io from '@actions/io'import * as utils from './utils'import * as path from 'path'
const tagsRefSpec = '+refs/tags/*:refs/tags/*'
export class GitCommandManager { private gitPath: string private workingDirectory: string // Git options used when commands require an identity private identityGitOptions?: string[]
@@ -771,9 +3048,7 @@ const stdout: string[] = [] const stderr: string[] = []
const options = { cwd: this.workingDirectory, env, ignoreReturnCode: allowAllExitCodes, listeners: { stdout: (data: Buffer) => { stdout.push(data.toString()) }, stderr: (data: Buffer) => { stderr.push(data.toString()) } } }
result.exitCode = await exec.exec(`"${this.gitPath}"`, args, options) result.stdout = stdout.join('') result.stderr = stderr.join('') return result }}
class GitOutput { stdout = '' stderr = '' exitCode = 0}

 183  src/github-helper.ts

@@ -0,0 +1,183 @@import * as core from '@actions/core'import {Inputs} from './create-pull-request'import {Octokit, OctokitOptions} from './octokit-client'import * as utils from './utils'
const ERROR_PR_REVIEW_FROM_AUTHOR = 'Review cannot be requested from pull request author'
interface Repository { owner: string repo: string}
@@ -789,24 +3064,18 @@ async createOrUpdatePullRequest( inputs: Inputs, baseRepository: string, headRep
// Apply milestone if (inputs.milestone) { core.info(`Applying milestone '${inputs.milestone}'`) await this.octokit.rest.issues.update({ ...this.parseRepository(baseRepository), issue_number: pull.number, milestone: inputs.milestone }) } // Apply labels if (inputs.labels.length > 0) { core.info(`Applying labels '${inputs.labels}'`) await this.octokit.rest.issues.addLabels({ ...this.parseRepository(baseRepository), issue_number: pull.number, labels: inputs.labels }) } // Apply assignees if (inputs.assignees.length > 0) { core.info(`Applying assignees '${inputs.assignees}'`) await this.octokit.rest.issues.addAssignees({ ...this.parseRepository(baseRepository), issue_number: pull.number, assignees: inputs.assignees }) }
// Request reviewers and team reviewers const requestReviewersParams = {} if (inputs.reviewers.length > 0) { requestReviewersParams['reviewers'] = inputs.reviewers core.info(`Requesting reviewers '${inputs.reviewers}'`) } if (inputs.teamReviewers.length > 0) { requestReviewersParams['team_reviewers'] = inputs.teamReviewers core.info(`Requesting team reviewers '${inputs.teamReviewers}'`) } if (Object.keys(requestReviewersParams).length > 0) { try { await this.octokit.rest.pulls.requestReviewers({ ...this.parseRepository(baseRepository), pull_number: pull.number, ...requestReviewersParams }) } catch (e) { if (utils.getErrorMessage(e).includes(ERROR_PR_REVIEW_FROM_AUTHOR)) { core.warning(ERROR_PR_REVIEW_FROM_AUTHOR) } else { throw e } } }
return pull }}

 38  src/main.ts

@@ -0,0 +1,38 @@import * as core from '@actions/core'import {Inputs, createPullRequest} from './create-pull-request'import {inspect} from 'util'import * as utils from './utils'
async function run(): Promise<void> { try { const inputs: Inputs = { token: core.getInput('token'), path: core.getInput('path'), addPaths: utils.getInputAsArray('add-paths'), commitMessage: core.getInput('commit-message'), committer: core.getInput('committer'), author: core.getInput('author'), signoff: core.getBooleanInput('signoff'), branch: core.getInput('branch'), deleteBranch: core.getBooleanInput('delete-branch'), branchSuffix: core.getInput('branch-suffix'), base: core.getInput('base'), pushToFork: core.getInput('push-to-fork'), title: core.getInput('title'), body: core.getInput('body'), labels: utils.getInputAsArray('labels'), assignees: utils.getInputAsArray('assignees'), reviewers: utils.getInputAsArray('reviewers'), teamReviewers: utils.getInputAsArray('team-reviewers'), milestone: Number(core.getInput('milestone')), draft: core.getBooleanInput('draft') } core.debug(`Inputs: ${inspect(inputs)}`)
await createPullRequest(inputs) } catch (error) { core.setFailed(utils.getErrorMessage(error)) }}
run()

 28  src/octokit-client.ts

@@ -0,0 +1,28 @@import {Octokit as Core} from '@octokit/core'import {paginateRest} from '@octokit/plugin-paginate-rest'import {restEndpointMethods} from '@octokit/plugin-rest-endpoint-methods'import ProxyAgent from 'proxy-agent'export {RestEndpointMethodTypes} from '@octokit/plugin-rest-endpoint-methods'export {OctokitOptions} from '@octokit/core/dist-types/types'
export const Octokit = Core.plugin( paginateRest, restEndpointMethods, autoProxyAgent)
// Octokit plugin to support the standard environment variables http_proxy, https_proxy and no_proxyfunction autoProxyAgent(octokit: Core) { const proxy = process.env.https_proxy || process.env.HTTPS_PROXY || process.env.http_proxy || process.env.HTTP_PROXY
if (!proxy) return
const agent = new ProxyAgent() octokit.hook.before('request', options => { options.request.agent = agent })}

 170  src/utils.ts

@@ -0,0 +1,170 @@import * as core from '@actions/core'import * as fs from 'fs'import * as path from 'path'
export function getInputAsArray( name: string, options?: core.InputOptions): string[] { return getStringAsArray(core.getInput(name, options))}
export function getStringAsArray(str: string): string[] { return str .split(/[\n,]+/) .map(s => s.trim()) .filter(x => x !== '')}
@@ -836,89 +3105,27 @@ if (!stats.isDirectory()) { return true }
return false}
/* eslint-disable @typescript-eslint/no-explicit-any */function hasErrorCode(error: any): error is {code: string} { return typeof (error && error.code) === 'string'}
export function getErrorMessage(error: unknown) { if (error instanceof Error) return error.message return String(error)}

 16  tsconfig.json

@@ -0,0 +1,16 @@{ "compilerOptions": { "target": "es6", "module": "commonjs", "lib": [ "es6" ], "outDir": "./lib", "rootDir": "./src", "declaration": true, "strict": true, "noImplicitAny": false, "esModuleInterop": true }, "exclude": ["__test__", "lib", "node_modules"]}

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

Comparing master...patch-21 · zakwarlord7/ci-CI





// For format details, see https://aka.ms/devcontainer.json. For config options, see the README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.177.0/containers/javascript-node
// -
{
	"name": "docs.github.com",
	"build": {
		"dockerfile": "Dockerfile",
		// Update 'VARIANT' to pick a Node version: 12, 14, 16
		"args": { "VARIANT": "16" }
	},

	// Set *default* container specific settings.json values on container create.
	"settings": {
		"terminal.integrated.shell.linux": "/bin/bash",
		"cSpell.language": ",en"
	},

	// Install features. Type 'feature' in the VS Code command palette for a full list.
	"features": {
		"git-lfs": "latest",
		"sshd": "latest"
	 },

	// Visual Studio Code extensions which help authoring for docs.github.com.
	"extensions": [
		"dbaeumer.vscode-eslint",
		"sissel.shopify-liquid",
		"davidanson.vscode-markdownlint",
		"bierner.markdown-preview-github-styles",
		"streetsidesoftware.code-spell-checker",
		"alistairchristie.open-reusables"
	],

	// Use 'forwardPorts' to make a list of ports inside the container available locally.
	"forwardPorts": [4000],

	"portsAttributes": {
		"4000": {
        		"label": "Preview",
        		"onAutoForward": "openPreview"
      		}
	},

	// Use 'postCreateCommand' to run commands after the container is created.
	"postCreateCommand": "git lfs pull && npm ci",

	// Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
0 comments on commit a9bf702
@zakwarlord7
 
Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue, pull request, or discussion
Add saved reply
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Styling with Markdown is supported
 You’re receiving notifications because you’re watching this repository.
Footer
© 2023 GitHub, Inc.
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
Update devcontainer.json · zakwarlord7/GitHub-doc@a9bf701 :
If you spot a problem with the docs, [search if an issue already exists](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments). If a related issue doesn't exist, you can open a new issue using a relevant [issue form](https://github.com/github/docs/issues/new/choose). 

#### Solve an issue

Scan through our [existing issues](https://github.com/github/docs/issues) to find one that interests you. You can narrow down the search using `labels` as filters. See [Labels](/contributing/how-to-use-labels.md) for more information. As a general rule, we don’t assign issues to anyone. If you find an issue to work on, you are welcome to open a PR with a fix.

### Make Changes

#### Make changes in the UI

Click **Make a contribution** at the bottom of any docs page to make small changes such as a typo, sentence fix, or a broken link. This takes you to the `.md` file where you can make your changes and [create a pull request](#pull-request) for a review. 

 <img src="./assets/images/contribution_cta.png" width="300" height="150" /> 

#### Make changes in a codespace

For more information about using a codespace for working on GitHub documentation, see "[Working in a codespace](https://github.com/github/docs/blob/main/contributing/codespace.md)."

#### Make changes locally

1. Fork the repository.
- Using GitHub Desktop:
  - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
  - Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

- Using the command line:
  - [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.

2. Install or update to **Node.js v16**. For more information, see [the development guide](contributing/development.md).

3. Create a working branch and start with your changes!

### Commit your update

Commit the changes once you are happy with them. Don't forget to [self-review](/contributing/self-review.md) to speed up the review process:zap:.

### Pull Request

When you're finished with the changes, create a pull request, also known as a PR.
- Fill the "Ready for review" template so that we can review your PR. This template helps reviewers understand your changes as well as the purpose of your pull request. 
- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
- Enable the checkbox to [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so the branch can be updated for a merge.
Once you submit your PR, a Docs team member will review your proposal. We may ask questions or request additional information.
- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- If you run into any merge issues, checkout this [git tutorial](https://github.com/skills/resolve-merge-conflicts) to help you resolve merge conflicts and other issues.

### Your PR is merged!

Congratulations :tada::tada: The GitHub team thanks you :sparkles:. 

Once your PR is merged, your contributions will be publicly visible on the [GitHub docs](https://docs.github.com/en). 

Now that you are part of the GitHub docs community, see how else you can [contribute to the docs](/contributing/types-of-contributions.md).

## Windows

This site can be developed on Windows, however a few potential gotchas need to be kept in mind:

1. Regular Expressions: Windows uses `\r\n` for line endings, while Unix-based systems use `\n`. Therefore, when working on Regular Expressions, use `\r?\n` instead of `\n` in order to support both environments. The Node.js [`os.EOL`](https://nodejs.org/api/os.html#os_os_eol) property can be used to get an OS-specific end-of-line marker.
2. Paths: Windows systems use `\` for the path separator, which would be returned by `path.join` and others. You could use `path.posix`, `path.posix.join` etc and the [slash](https://ghub.io/slash) module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
3. Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write [scripts](/script) in JavaScript instead of Bash.
4. Filename too long error: There is a 260 character limit for a filename when Git is compiled with `msys`. While the suggestions below are not guaranteed to work and could cause other issues, a few workarounds include:
    - Update Git configuration: `git config --system core.longpaths true`
    - Consider using a different Git client on Windows
