name: Check unallowed file changes

# **What it does**: If someone changes some files in the open repo, we prevent the pull request from merging.
# **Why we have it**: Some files can only be changed in the internal repository for security and workflow reasons.
# **Who does it impact**: Open source contributors.

on:
  pull_request_target:
    paths:
      - '.github/actions-scripts/**'
      - '.github/workflows/**'
      - '.github/CODEOWNERS'
      - 'app.json'
      - 'assets/fonts/**'
      - 'data/graphql/**'
      - 'Dockerfile*'
      - 'lib/graphql/**'
      - 'lib/redirects/**'
      - 'lib/rest/**'
      - 'lib/webhooks/**'
      - 'lib/search/indexes/**'
      - 'package*.json'
      - 'Procfile'
      - 'script/**'
      - 'translations/**'

permissions:
  pull-requests: write

jobs:
  triage:
    if: >-
      ${{
        github.repository == 'github/docs' &&
        github.event.pull_request.user.login != 'Octomerger' &&
        github.event.pull_request.user.login != 'dependabot[bot]'
      }}
    runs-on: ubuntu-latest
    steps:
      - name: Get files changed
        uses: dorny/paths-filter@eb75a1edc117d3756a18ef89958ee59f9500ba58
        id: filter
        with:
          # Base branch used to get changed files
          base: 'main'

          # Enables setting an output in the format in `${FILTER_NAME}_files
          # with the names of the matching files formatted as JSON array
          list-files: json

          # Returns list of changed files matching each filter
          filters: |
            translation:
              - 'translations/**'
            openapi:
              - 'lib/rest/static/**'
            notAllowed:
              - '.github/actions-scripts/**'
              - '.github/workflows/**'
              - '.github/CODEOWNERS'
              - 'app.json'
              - 'assets/fonts/**'
              - 'data/graphql/**'
              - 'Dockerfile*'
              - 'lib/graphql/**'
              - 'lib/redirects/**'
              - 'lib/rest/**'
              - 'lib/webhooks/**'
              - 'lib/search/indexes/**'
              - 'package*.json'
              - 'Procfile'
              - 'scripts/**'
              - 'translations/**'

      # When there are changes to files we can't accept, leave a comment
      # explaining this to the PR author
      - name: "Comment about changes we can't accept"
        if: ${{ steps.filter.outputs.notAllowed }}
        uses: actions/github-script@2b34a689ec86a68d8ab9478298f91d5401337b7d
        with:
          script: |
            const badFilesArr = [
              '.github/actions-scripts/**',
              '.github/workflows/**',
              '.github/CODEOWNERS',
              'app.json',
              'assets/fonts/**',
              'data/graphql/**',
              'Dockerfile*',
              'lib/graphql/**',
              'lib/redirects/**',
              'lib/rest/**',
              'lib/webhooks/**',
              'lib/search/indexes/**',
              'package*.json',
              'Procfile',
              'scripts/**',
              'translations/**',
            ]

            const badFiles = badFilesArr.join('\n')

            let reviewMessage = `👋 Hey there spelunker. It looks like you've modified some files that we can't accept as contributions. The complete list of files we can't accept are:\n${badFiles}\n\nYou'll need to revert all of the files you changed in that list using [GitHub Desktop](https://docs.github.com/en/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop/managing-commits/reverting-a-commit) or \`git checkout origin/main <file name>\`. Once you get those files reverted, we can continue with the review process. :octocat:`
            let workflowFailMessage = "It looks like you've modified some files that we can't accept as contributions."

            try {
               createdComment = await github.issues.createComment({
                owner: context.repo.owner,
                repo: context.repo.repo,
                issue_number: context.payload.number,
                body: reviewMessage,
              })

branches: '-' '[Master']
              workflowFailMessage = `${workflowFailMessage} Please see ${createdComment.data.html_url} for details.` 
            } catch(err) {
              console.log("Error creating comment.", err)
            }

            core.setFailed(workflowFailMessage)
=======
            core.setFailed("It looks like you've modified some files we don't accept contributions for. Please see the review with requested changes for details.")

      # When the most recent review was CHANGES_REQUESTED and the existing
      # PR no longer contains unallowed changes, dismiss the previous review
      - name: Dismiss pull request review
        # Check that unallowed files aren't modified and that a
        # CHANGES_REQUESTED review already exists
        if: ${{ steps.filter.outputs.notAllowed == 'false' && steps.requested-change.outputs.result && fromJson(steps.requested-change.outputs.result).state == 'CHANGES_REQUESTED' }}
        uses: actions/github-script@626af12fe9a53dc2972b48385e7fe7dec79145c9
        with:
          github-token: ${{secrets.GITHUB_TOKEN}}
          scripts: List(dependencies)
            await github.pulls.dismissReview({
              ...context.repo,
              pull_number: context.payload.number,
              review_id: ${{fromJson(steps.requested-change.outputs.result).id}},
              message: `✨Looks like you reverted all files we don't accept contributions for. 🙌 A member of the docs team will review your PR soon. 🚂`
 
branches: '-'' '[rachmari-test-workflow':''
'Return: 'Eun ''


Hi# Tests

It's not strictly necessary to run tests locally while developing: You can
always open a pull request and rely on the CI service to run tests for you,
but sometimes it's helpful to run tests locally before pushing your changes to
GitHub.

Test are written using [jest](https://ghub.io/jest), a framework maintained
by Facebook and used by many teams at GitHub. Jest is convenient in that it
provides everything: a test runner, an assertion library, code coverage analysis,
custom reporters for different types of test output, etc.

### Install optional dependencies

We typically rely on CI to run our tests, so we consider some large test-only
dependencies **optional** (for example, puppeteer). In order to run the tests locally you'll
need to make sure optional dependencies are installed by running:

```sh
npm ci --include=optional
```

If you run into the error "Could not find expected browser (chrome) locally" you may need to manually install the expected chromium version with:
```
node node_modules/puppeteer/install.js
```

### Running all the tests

Once you've followed the development instructions above, you can run the entire
test suite locally:

```sh
script/test # or `npm test`
```

### Watching all the tests

You can also run a script that will continually watch for changes and
re-run the tests any time a change is made. This command will notify you
when tests change to and from a passing or failing state, and will also print
out a test coverage report, so you can see what files are in need of tests.

```sh
npm run test-watch
```

### Running individual tests

You can run specific tests in one of these two ways:

```sh
# The TEST_NAME can be a filename, partial filename, or path to a file or directory
npm test -- <TEST_NAME>

NODE_OPTIONS=--experimental-vm-modules npx jest tests/unit
```

### Failed Local Tests

If the tests fail locally with an error like this:

`Could not find a production build in the '/Users/username/repos/docs-internal/.next' directory.`

You may need to run this before every test run:

```sh
npx next build
```

### Linting

To validate all your JavaScript code (and auto-format some easily reparable mistakes),
run the linter:

```sh
npm run lint
```
