# Welcome to GitHub docs contributing guide <!-- omit in toc -->
name: Test and Release

# Run this job on all pushes and pull requests
# as well as tags with a semantic version
on:
    push:
        branches:
            - master
        tags:
            # normal versions
            - "v[0-9]+.[0-9]+.[0-9]+"
            # pre-releases
            - "v[0-9]+.[0-9]+.[0-9]+-**"
    pull_request: {}

jobs:
    lint:
        if: contains(github.event.head_commit.message, '[skip ci]') == false

        runs-on: ubuntu-latest

        strategy:
            matrix:
                node-version: [14.x]

        steps:
            - name: Checkout code
              uses: actions/checkout@v2

            - name: Use Node.js ${{ matrix.node-version }}
              uses: actions/setup-node@v2
              with:
                  node-version: ${{ matrix.node-version }}
                  cache: 'yarn'

            - name: Install Dependencies
              run: yarn install --prefer-offline --frozen-lockfile

            - name: Compile TypeScript code
              run: yarn build

            - name: Run linters
              run: yarn lint

    # Runs unit tests on all supported node versions and OSes
    unit-tests:
        if: contains(github.event.head_commit.message, '[skip ci]') == false

        runs-on: ${{ matrix.os }}
        strategy:
            matrix:
                node-version: [12.x, 14.x, 16.x]
                os: [ubuntu-latest, windows-latest, macos-latest]

        steps:
            - name: Checkout code
              uses: actions/checkout@v2

              - name: Use Node.js ${{ matrix.node-version }}
              uses: actions/setup-node@v2
              with:
                  node-version: ${{ matrix.node-version }}
                  cache: 'yarn'

            - name: Install Dependencies
              run: yarn install --prefer-offline --frozen-lockfile

            - name: Compile TypeScript code
              run: yarn build

            - name: Run unit tests
              run: yarn test:ci

    # Deploys the final package to NPM
    deploy:
        needs: [lint, unit-tests]

        # Trigger this step only when a commit on any branch is tagged with a version number
        if: |
            contains(github.event.head_commit.message, '[skip ci]') == false &&
            github.event_name == 'push' &&
            startsWith(github.ref, 'refs/tags/v')
        runs-on: ubuntu-latest
        strategy:
            matrix:
                node-version: [14.x]

        steps:
            - name: Checkout code
              uses: actions/checkout@v2

            - name: Use Node.js ${{ matrix.node-version }}
              uses: actions/setup-node@v2
              with:
                  node-version: ${{ matrix.node-version }}
                  cache: 'yarn'

            - name: Extract the version and commit body from the tag
              id: extract_release
              # The body may be multiline, therefore newlines and % need to be escaped
              run: |
                  VERSION="${{ github.ref }}"
                  VERSION=${VERSION##*/v}
                  echo "::set-output name=VERSION::$VERSION"
                  BODY=$(git show -s --format=%b)
                  BODY="${BODY//'%'/'%25'}"
                  BODY="${BODY//$'\n'/'%0A'}"
                  BODY="${BODY//$'\r'/'%0D'}"
                  echo "::set-output name=BODY::$BODY"
            - name: Install Dependencies
              run: yarn install --prefer-offline --frozen-lockfile

            - name: Create a clean build
              run: yarn build

            - name: Publish package to npm
              run: |
                  npm config set //registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}
                  npm whoami
                  npm publish
            - name: Create Github Release
              uses: actions/create-release@v1
              env:
                  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
              with:
                  tag_name: ${{ github.ref }}
                  release_name: Release v${{ steps.extract_release.outputs.VERSION }}
                  draft: false
                  # Prerelease versions create prereleases on Github
                  prerelease: ${{ contains(steps.extract_release.outputs.VERSION, '-') }}
                  body: ${{ steps.extract_release.outputs.BODY }}
 27  
.gitignore
@@ -0,0 +1,27 @@
# No dot-directories except github/vscode
.*/
!.vscode/
!.github/

*.code-workspace
node_modules
nbproject

# Unneeded package files
.yarn/*
!.yarn/patches
!.yarn/releases
!.yarn/plugins
!.yarn/sdks
!.yarn/versions
.pnp.*
package-lock.json
*.tgz

# Compiled source files
**/build
**/*.tsbuildinfo
*.map

# Windows stuff
Thumbs.db
 6  
.prettierignore
@@ -0,0 +1,6 @@
.github/actions/**/*.yml
.github/workflows/
CHANGELOG*.md
package.json
package-lock.json
build/
 9  
.prettierrc.js
@@ -0,0 +1,9 @@
module.exports = {
	semi: true,
	trailingComma: "all",
	singleQuote: false,
	printWidth: 120,
	useTabs: true,
	tabWidth: 4,
	endOfLine: "lf",
};
 22  
.scaffold.json
@@ -0,0 +1,22 @@
{
	"cli": true,
	"projectName": "zwlf-parser",
	"description": "Parses .zwlf files created by PC Controller and converts them into serial data",
	"keywords": ["Z-Wave", "PC Controller", "zwlf"],
	"packageManager": "yarn",
	"monorepo": false,
	"nodeVersion": 14,
	"tools": ["ESLint", "Prettier", "Commitlint"],
	"testing": "jest",
	"releaseScript": true,
	"indentation": "Tab",
	"quotes": "double",
	"authorName": "zwave-js",
	"authorGithub": "zwave-js",
	"authorEmail": "d.griesel@gmx.net",
	"gitRemoteProtocol": "HTTPS",
	"gitCommit": false,
	"license": "MIT License",
	"dependabot": false,
	"creatorVersion": "1.0.0"
}
 3  
.vscode/extensions.json
@@ -0,0 +1,3 @@
{
	"recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
}
 10  
.vscode/settings.json
@@ -0,0 +1,10 @@
{
	"typescript.tsdk": "node_modules/typescript/lib",
	"editor.formatOnSave": true,
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"[typescript]": {
		"editor.codeActionsOnSave": {
			"source.organizeImports": true
		}
	}
}
 21  
name: Test and Release

# Run this job on all pushes and pull requests
# as well as tags with a semantic version
on:
    push:
        branches:
            - master
        tags:
            # normal versions
            - "v[0-9]+.[0-9]+.[0-9]+"
            # pre-releases
            - "v[0-9]+.[0-9]+.[0-9]+-**"
    pull_request: {}

jobs:
    lint:
        if: contains(github.event.head_commit.message, '[skip ci]') == false

        runs-on: ubuntu-latest

        strategy:
            matrix:
                node-version: [14.x]

        steps:
            - name: Checkout code
              uses: actions/checkout@v2

            - name: Use Node.js ${{ matrix.node-version }}
              uses: actions/setup-node@v2
              with:
                  node-version: ${{ matrix.node-version }}
                  cache: 'yarn'

            - name: Install Dependencies
              run: yarn install --prefer-offline --frozen-lockfile

            - name: Compile TypeScript code
              run: yarn build

            - name: Run linters
              run: yarn lint

    # Runs unit tests on all supported node versions and OSes
    unit-tests:
        if: contains(github.event.head_commit.message, '[skip ci]') == false

        runs-on: ${{ matrix.os }}
        strategy:
            matrix:
                node-version: [14.x, 16.x]
                os: [ubuntu-latest, windows-latest, macos-latest]

        steps:
            - name: Checkout code
              uses: actions/checkout@v2

            - name: Use Node.js ${{ matrix.node-version }}
              uses: actions/setup-node@v2
              with:
                  node-version: ${{ matrix.node-version }}
                  cache: 'yarn'

            - name: Install Dependencies
              run: yarn install --prefer-offline --frozen-lockfile

            - name: Compile TypeScript code
              run: yarn build

            - name: Run unit tests
              run: yarn test:ci

    # Deploys the final package to NPM
    deploy:
        needs: [lint, unit-tests]

        # Trigger this step only when a commit on any branch is tagged with a version number
        if: |
            contains(github.event.head_commit.message, '[skip ci]') == false &&
            github.event_name == 'push' &&
            startsWith(github.ref, 'refs/tags/v')

        runs-on: ubuntu-latest
        strategy:
            matrix:
                node-version: [14.x]

        steps:
            - name: Checkout code
              uses: actions/checkout@v2

            - name: Use Node.js ${{ matrix.node-version }}
              uses: actions/setup-node@v2
              with:
                  node-version: ${{ matrix.node-version }}
                  cache: 'yarn'

            - name: Extract the version and commit body from the tag
              id: extract_release
              # The body may be multiline, therefore newlines and % need to be escaped
              run: |
                  VERSION="${{ github.ref }}"
                  VERSION=${VERSION##*/v}
                  echo "::set-output name=VERSION::$VERSION"
                  BODY=$(git show -s --format=%b)
                  BODY="${BODY//'%'/'%25'}"
                  BODY="${BODY//$'\n'/'%0A'}"
                  BODY="${BODY//$'\r'/'%0D'}"
                  echo "::set-output name=BODY::$BODY"

            - name: Install Dependencies
              run: yarn install --prefer-offline --frozen-lockfile

            - name: Create a clean build
              run: yarn build

            - name: Publish package to npm
              run: |
                  npm config set //registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}
                  npm whoami
                  npm publish

            - name: Create Github Release
              uses: actions/create-release@v1
              env:
                  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
              with:
                  tag_name: ${{ github.ref }}
                  release_name: Release v${{ steps.extract_release.outputs.VERSION }}
                  draft: false
                  # Prerelease versions create prereleases on Github
                  prerelease: ${{ contains(steps.extract_release.outputs.VERSION, '-') }}
                  body: ${{ steps.extract_release.outputs.BODY }}
                  name: Auto Assign Issues/PRs
inputs:
    description: Your GitHub token for authentication
    required: true
  CONFIG_FILE:
    description: Config file path relative to your repo's root.
    required: false
runs:
  using: node16
  main: dist/index.js
branding:
  icon: flag
  color: black # gray-dark purple red orange green blue yellow black white
No internet
Try:
Checking the network cables, modem, and router
Reconnecting to Wi-Fi
Running Connectivity Diagnostics
ERR_INTERNET_DISCONNECTED
Wi-Fi
  -'> MAC: 5C:FB:3A:D0:82:C9
No Wi-Fi network available
Try troubleshooting steps
To set up or update a connection, go to 
  -'> Settings 
  -'> Wi-Fi: 5C:FB:3A:D0:82:C9
 :Build::
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

2. Install or update to **Node.js**, at the version specified in `.node-version`. For more information, see [the development guide](contributing/development.md).

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
