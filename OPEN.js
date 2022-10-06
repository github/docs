Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
github
/
docs
Public
Code
Issues
90
Pull requests
92
Discussions
Actions
Projects
3
Security
Insights
This commit does not belong to any branch on this repository, and may belong to a fork outside of the repository.
Merge branch 'main' into main
@Analyn-bot
Analyn-bot committed on Dec 15, 2020 
2 parents 6144570 + d7ccef7 commit 887c8fb1e21e7387d5c19b9b9fa8f570ed33da8e
Show file tree Hide file tree
Showing 81 changed files with 1,043 additions and 147 deletions.
Filter changed files
  3  
.github/allowed-actions.js
@@ -32,5 +32,6 @@ module.exports = [
  'repo-sync/pull-request@33777245b1aace1a58c87a29c90321aa7a74bd7d',	  'repo-sync/pull-request@33777245b1aace1a58c87a29c90321aa7a74bd7d',
  'someimportantcompany/github-actions-slack-message@0b470c14b39da4260ed9e3f9a4f1298a74ccdefd',	  'someimportantcompany/github-actions-slack-message@0b470c14b39da4260ed9e3f9a4f1298a74ccdefd',
  'tjenkinson/gh-action-auto-merge-dependency-updates@cee2ac0',	  'tjenkinson/gh-action-auto-merge-dependency-updates@cee2ac0',
  'EndBug/add-and-commit@9358097a71ad9fb9e2f9624c6098c89193d83575'	  'EndBug/add-and-commit@9358097a71ad9fb9e2f9624c6098c89193d83575',
  'dorny/paths-filter@eb75a1edc117d3756a18ef89958ee59f9500ba58'
]	]
 39  
.github/workflows/close-unwanted-pull-requests.yml
This file was deleted.

  3  
.github/workflows/codeql.yml
@@ -2,6 +2,9 @@ name: CodeQL analysis


on:	on:
  push:	  push:
    branches: main
  pull_request:
    branches: main
    paths:	    paths:
      - '**/*.js'	      - '**/*.js'
      - '.github/workflows/codeql.yml'	      - '.github/workflows/codeql.yml'
 117  
.github/workflows/triage-unallowed-contributions.yml
@@ -0,0 +1,117 @@
name: Check unallowed file changes

on:
  push:

jobs:
  triage:
    if: github.repository == 'github/docs' && github.event.pull_request.user.login != 'Octomerger'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@5a4ac9002d0be2fb38bd78e4b4dbde5606d7042f
      - name: Get pull request number
        id: pull-number
        uses: actions/github-script@626af12fe9a53dc2972b48385e7fe7dec79145c9
        with:
          github-token: ${{secrets.GITHUB_TOKEN}}
          result-encoding: string
          script: |
            const pulls = await github.repos.listPullRequestsAssociatedWithCommit({
              ...context.repo,
              commit_sha: context.sha
            })
            return pulls.data.map(pull => pull.number).shift()
      - name: Check for existing requested changes
        id: requested-change
        uses: actions/github-script@626af12fe9a53dc2972b48385e7fe7dec79145c9
        with:
          github-token: ${{secrets.GITHUB_TOKEN}}
          result-encoding: json
          script: |
            const pullReviews = await github.pulls.listReviews({
              ...context.repo,
              pull_number: ${{steps.pull-number.outputs.result}}
            })
            return pullReviews.data
              .filter(review => review.user.login === 'github-actions[bot]')
              .sort((a, b) => new Date(b.submitted_at) - new Date(a.submitted_at))
              .shift()
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
              - '.github/workflows/**'
              - '.github/CODEOWNERS'
              - 'translations/**'
              - 'assets/fonts/**'
              - 'data/graphql/**'
              - 'lib/graphql/**'
              - 'lib/redirects/**'
              - 'lib/rest/**'
              - 'lib/webhooks/**'
      # When there are changes to files we can't accept
      # and no review exists,leave a REQUEST_CHANGES review
      - name: Request pull request changes
        # Check for no reviews or reviews that aren't CHANGES_REQUESTED
        if: ${{ steps.filter.outputs.notAllowed == 'true' && (!steps.requested-change.outputs.result || fromJson(steps.requested-change.outputs.result).state != 'CHANGES_REQUESTED') }}
        uses: actions/github-script@626af12fe9a53dc2972b48385e7fe7dec79145c9
        with:
          github-token: ${{secrets.GITHUB_TOKEN}}
          script: |
            const changedFiles = ${{steps.filter.outputs.notAllowed_files}}
            const restFiles = ${{steps.filter.outputs.openapi_files}}
            const translationFiles = ${{steps.filter.outputs.translation_files}}
            const markdownFiles = changedFiles.map(file => `- \`${file}\`\n`).join('')
            let reviewMessage = `👋 Hey there spelunker. It looks like you've modified some files that we can't accept as contributions.\n${markdownFiles}\n\nYou'll need to revert all of these ☝️ files using [GitHub Desktop](https://docs.github.com/en/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop/reverting-a-commit) or \`git checkout origin/main <file name>\`. Once you get those files reverted, we can continue with the review process. :octocat:`
            if (restFiles.length > 0) {
              reviewMessage += "\n\nIt looks like you've modified the OpenAPI schema (`lib/rest/static/**`). While we aren't accepting changes to the schema directly, you can open an issue for any updates to the REST API docs. Head on over to the [`github/rest-api-description`](https://github.com/github/rest-api-description/issues/new?assignees=&labels=Inaccuracy&template=schema-inaccuracy.md&title=%5BSchema+Inaccuracy%5D+%3CDescribe+Problem%3E) repository to open an issue. ⚡"
            }
            if (translationFiles.length > 0) {
              await github.issues.addLabels({
                ...context.repo,
                issue_number: ${{steps.pull-number.outputs.result}},
                labels: ['localization']
              })
              reviewMessage += "\n\nIt looks like you've modified translated content. Unfortunately, we are not able to accept pull requests for translated content. Our translation process involves an integration with an external service at crowdin.com, where all translation activity happens. We hope to eventually open up the translation process to the open source community, but we're not there yet. See https://github.com/github/docs/blob/main/CONTRIBUTING.md#earth_asia-translations for more details."
            }
            await github.pulls.createReview({
              ...context.repo,
              pull_number: ${{steps.pull-number.outputs.result}},
              body: reviewMessage,
              event: 'REQUEST_CHANGES'
            })
      # When the most recent review was CHANGES_REQUESTED and the existing
      # PR no longer contains unallowed changes, dismiss the previous review
      - name: Dismiss pull request review
        if: ${{ steps.filter.outputs.notAllowed == 'false' && fromJson(steps.requested-change.outputs.result).state == 'CHANGES_REQUESTED' }}
        uses: actions/github-script@626af12fe9a53dc2972b48385e7fe7dec79145c9
        with:
          github-token: ${{secrets.GITHUB_TOKEN}}
          script: |
            await github.pulls.dismissReview({
              ...context.repo,
              pull_number: ${{steps.pull-number.outputs.result}},
              review_id: ${{fromJson(steps.requested-change.outputs.result).id}},
              message: `✨Looks like you reverted all files we don't accept contributions for. 🙌 A member of the docs team will review your PR soon. 🚂`
            })
  2  
content/actions/creating-actions/creating-a-javascript-action.md
@@ -176,7 +176,7 @@ git tag -a -m "My first action release" v1
git push --follow-tags	git push --follow-tags
```	```


As an alternative to checking in your `node_modules` directory you can use a tool called [`@vercel/ncc`](https://github.com/vercel/ncc) to compile your code and modules into one file used for distribution.	Checking in your `node_modules` directory can cause problems. As an alternative, you can use a tool called [`@vercel/ncc`](https://github.com/vercel/ncc) to compile your code and modules into one file used for distribution.


1. Install `vercel/ncc` by running this command in your terminal.	1. Install `vercel/ncc` by running this command in your terminal.
  `npm i -g @vercel/ncc`	  `npm i -g @vercel/ncc`
  8  
content/actions/guides/building-and-testing-java-with-maven.md
@@ -53,7 +53,7 @@ jobs:
        with:	        with:
          java-version: 1.8	          java-version: 1.8
      - name: Build with Maven	      - name: Build with Maven
        run: mvn -B package --file pom.xml	        run: mvn --batch-mode --update-snapshots verify
```	```
{% endraw %}	{% endraw %}


@@ -85,7 +85,7 @@ steps:
    with:	    with:
      java-version: 1.8	      java-version: 1.8
  - name: Run the Maven verify phase	  - name: Run the Maven verify phase
    run: mvn -B verify --file pom-ci.xml	    run: mvn --batch-mode --update-snapshots verify
```	```
{% endraw %}	{% endraw %}


@@ -108,7 +108,7 @@ steps:
      key: ${{ runner.os }}-m2-${{ hashFiles('**/pom.xml') }}	      key: ${{ runner.os }}-m2-${{ hashFiles('**/pom.xml') }}
      restore-keys: ${{ runner.os }}-m2	      restore-keys: ${{ runner.os }}-m2
  - name: Build with Maven	  - name: Build with Maven
    run: mvn -B package --file pom.xml	    run: mvn --batch-mode --update-snapshots verify
```	```
{% endraw %}	{% endraw %}


@@ -125,7 +125,7 @@ Maven will usually create output files like JARs, EARs, or WARs in the `target`
steps:	steps:
  - uses: actions/checkout@v2	  - uses: actions/checkout@v2
  - uses: actions/setup-java@v1	  - uses: actions/setup-java@v1
  - run: mvn -B package --file pom.xml	  - run: mvn --batch-mode --update-snapshots verify
  - run: mkdir staging && cp target/*.jar staging	  - run: mkdir staging && cp target/*.jar staging
  - uses: actions/upload-artifact@v2	  - uses: actions/upload-artifact@v2
    with:	    with:
  8  
content/actions/guides/publishing-java-packages-with-maven.md
@@ -84,7 +84,7 @@ jobs:
          server-username: MAVEN_USERNAME	          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD	          server-password: MAVEN_PASSWORD
      - name: Publish package	      - name: Publish package
        run: mvn -B deploy	        run: mvn --batch-mode deploy
        env:	        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}	          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}	          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
@@ -143,7 +143,7 @@ jobs:
        with:	        with:
          java-version: 1.8	          java-version: 1.8
      - name: Publish package	      - name: Publish package
        run: mvn -B deploy	        run: mvn --batch-mode deploy
        env:	        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}	          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```	```
@@ -182,7 +182,7 @@ jobs:
          server-username: MAVEN_USERNAME	          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD	          server-password: MAVEN_PASSWORD
      - name: Publish to the Maven Central Repository	      - name: Publish to the Maven Central Repository
        run: mvn -B deploy	        run: mvn --batch-mode deploy
        env:	        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}	          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}	          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
@@ -191,7 +191,7 @@ jobs:
        with:	        with:
          java-version: 1.8	          java-version: 1.8
      - name: Publish to GitHub Packages	      - name: Publish to GitHub Packages
        run: mvn -B deploy	        run: mvn --batch-mode deploy
        env:	        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}	          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```	```
  4  
content/actions/reference/environment-variables.md
@@ -51,8 +51,8 @@ We strongly recommend that actions use environment variables to access the files
| `GITHUB_WORKSPACE` | The {% data variables.product.prodname_dotcom %} workspace directory path. The workspace directory is a copy of your repository if your workflow uses the [actions/checkout](https://github.com/actions/checkout) action. If you don't use the `actions/checkout` action, the directory will be empty. For example, `/home/runner/work/my-repo-name/my-repo-name`. |	| `GITHUB_WORKSPACE` | The {% data variables.product.prodname_dotcom %} workspace directory path. The workspace directory is a copy of your repository if your workflow uses the [actions/checkout](https://github.com/actions/checkout) action. If you don't use the `actions/checkout` action, the directory will be empty. For example, `/home/runner/work/my-repo-name/my-repo-name`. |
| `GITHUB_SHA` | The commit SHA that triggered the workflow. For example, `ffac537e6cbbf934b08745a378932722df287a53`. |	| `GITHUB_SHA` | The commit SHA that triggered the workflow. For example, `ffac537e6cbbf934b08745a378932722df287a53`. |
| `GITHUB_REF` | The branch or tag ref that triggered the workflow. For example, `refs/heads/feature-branch-1`. If neither a branch or tag is available for the event type, the variable will not exist. |	| `GITHUB_REF` | The branch or tag ref that triggered the workflow. For example, `refs/heads/feature-branch-1`. If neither a branch or tag is available for the event type, the variable will not exist. |
| `GITHUB_HEAD_REF` | Only set for forked repositories. The branch of the head repository.	| `GITHUB_HEAD_REF` | Only set for pull request events. The name of the head branch.
| `GITHUB_BASE_REF` | Only set for forked repositories. The branch of the base repository.	| `GITHUB_BASE_REF` | Only set for pull request events. The name of the base branch.
| `GITHUB_SERVER_URL`| Returns the URL of the {% data variables.product.product_name %} server. For example: `https://{% data variables.product.product_url %}`.	| `GITHUB_SERVER_URL`| Returns the URL of the {% data variables.product.product_name %} server. For example: `https://{% data variables.product.product_url %}`.
| `GITHUB_API_URL` | Returns the API URL. For example: `{% data variables.product.api_url_code %}`.	| `GITHUB_API_URL` | Returns the API URL. For example: `{% data variables.product.api_url_code %}`.
| `GITHUB_GRAPHQL_URL` | Returns the GraphQL API URL. For example: `{% data variables.product.graphql_url_code %}`.	| `GITHUB_GRAPHQL_URL` | Returns the GraphQL API URL. For example: `{% data variables.product.graphql_url_code %}`.
  10  
content/actions/reference/events-that-trigger-workflows.md
@@ -139,7 +139,7 @@ jobs:


| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |	| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|	| ------------------ | ------------ | ------------ | ------------------|
| [repository_dispatch](/webhooks/event-payloads/#repository_dispatch) | n/a | Last commit on the `GITHUB_REF` branch | Branch that received dispatch |	| [repository_dispatch](/webhooks/event-payloads/#repository_dispatch) | n/a | Last commit on default branch | Default branch |


{% data reusables.github-actions.branch-requirement %}	{% data reusables.github-actions.branch-requirement %}


@@ -578,6 +578,12 @@ on:


This event is similar to `pull_request`, except that it runs in the context of the base repository of the pull request, rather than in the merge commit. This means that you can more safely make your secrets available to the workflows triggered by the pull request, because only workflows defined in the commit on the base repository are run. For example, this event allows you to create workflows that label and comment on pull requests, based on the contents of the event payload. 	This event is similar to `pull_request`, except that it runs in the context of the base repository of the pull request, rather than in the merge commit. This means that you can more safely make your secrets available to the workflows triggered by the pull request, because only workflows defined in the commit on the base repository are run. For example, this event allows you to create workflows that label and comment on pull requests, based on the contents of the event payload. 


{% warning %}

**Warning**: When using the `pull_request_target` event, be aware that it runs in the context of the base repository. This means that the `GITHUB_TOKEN` has write access to the repository, and the cache shares the same scope as the base branch. As a result, do not run untrusted code in the same context, as there is a risk that it may access sensitive information and unexpectedly manipulate the workflow environment. In addition, to help prevent cache poisoning, do not save the cache if there is a possibility that the cache contents were altered.

{% endwarning %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |	| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|	| --------------------- | -------------- | ------------ | -------------|
| [`pull_request`](/webhooks/event-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` | Last commit on the PR base branch | PR base branch |	| [`pull_request`](/webhooks/event-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` | Last commit on the PR base branch | PR base branch |
@@ -699,6 +705,8 @@ on:


{% data reusables.webhooks.workflow_run_desc %}	{% data reusables.webhooks.workflow_run_desc %}


{% data reusables.github-actions.branch-requirement %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |	| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|		| --------------------- | -------------- | ------------ | -------------|	
| [`workflow_run`](/webhooks/event-payloads/#workflow_run) | - n/a | Last commit on default branch | Default branch |		| [`workflow_run`](/webhooks/event-payloads/#workflow_run) | - n/a | Last commit on default branch | Default branch |	
  18  
content/actions/reference/workflow-syntax-for-github-actions.md
@@ -249,9 +249,9 @@ The name of the job displayed on {% data variables.product.prodname_dotcom %}.


### `jobs.<job_id>.needs`	### `jobs.<job_id>.needs`


Identifies any jobs that must complete successfully before this job will run. It can be a string or array of strings. If a job fails, all jobs that need it are skipped unless the jobs use a conditional statement that causes the job to continue.	Identifies any jobs that must complete successfully before this job will run. It can be a string or array of strings. If a job fails, all jobs that need it are skipped unless the jobs use a conditional expression that causes the job to continue.


#### Example	#### Example requiring dependent jobs to be successful


```yaml	```yaml
jobs:	jobs:
@@ -270,6 +270,20 @@ The jobs in this example run sequentially:
2. `job2`	2. `job2`
3. `job3`	3. `job3`


#### Example not requiring dependent jobs to be successful

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: always()
    needs: [job1, job2]
```

In this example, `job3` uses the `always()` conditional expression so that it always runs after `job1` and `job2` have completed, regardless of whether they were successful. For more information, see "[Context and expression syntax](/actions/reference/context-and-expression-syntax-for-github-actions#job-status-check-functions)."

### `jobs.<job_id>.runs-on`	### `jobs.<job_id>.runs-on`


**Required** The type of machine to run the job on. The machine can be either a {% data variables.product.prodname_dotcom %}-hosted runner or a self-hosted runner.	**Required** The type of machine to run the job on. The machine can be either a {% data variables.product.prodname_dotcom %}-hosted runner or a self-hosted runner.
  4  
content/developers/apps/authorizing-oauth-apps.md
@@ -272,7 +272,9 @@ The optional `redirect_uri` parameter can also be used for localhost URLs. If th


For the `http://localhost/path` callback URL, you can use this `redirect_uri`:	For the `http://localhost/path` callback URL, you can use this `redirect_uri`:


   http://localhost:1234/path	```
http://localhost:1234/path
```


### Creating multiple tokens for OAuth Apps	### Creating multiple tokens for OAuth Apps


  2  
content/developers/apps/using-content-attachments.md
@@ -166,7 +166,7 @@ To create a Probot App, follow these steps:
    }	    }
    ```	    ```


4. [Run the GitHub App locally](https://probot.github.io/docs/development/#running-the-app-locally). Navigate to [localhost:3000](http://localhost:3000), and click the **Register GitHub App** button:	4. [Run the GitHub App locally](https://probot.github.io/docs/development/#running-the-app-locally). Navigate to `http://localhost:3000`, and click the **Register GitHub App** button:


   ![Register a Probot GitHub App](/assets/images/github-apps/github_apps_probot-registration.png)	   ![Register a Probot GitHub App](/assets/images/github-apps/github_apps_probot-registration.png)


  8  
...and-managing-billing-and-payments-on-github/about-billing-for-github-actions.md
@@ -8,7 +8,9 @@ versions:


### About billing for {% data variables.product.prodname_actions %}	### About billing for {% data variables.product.prodname_actions %}


{% data reusables.github-actions.actions-billing %} {% data reusables.github-actions.actions-spending-limit %}	{% data reusables.github-actions.actions-billing %}

{% data reusables.github-actions.actions-spending-limit-brief %} For more information, see "[About spending limits](#about-spending-limits)."


Minutes reset every month, while storage usage does not.	Minutes reset every month, while storage usage does not.


@@ -69,8 +71,8 @@ Your {% data variables.product.prodname_actions %} usage shares your account's e


### About spending limits	### About spending limits


By default, your account will have a spending limit of $0 for {% data variables.product.prodname_actions %} usage. To enable using minutes and storage for private repositories beyond the amounts included with your account, you can increase the spending limit or allow unlimited spending. For more information, see "[Managing your spending limit for {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions)."	{% data reusables.github-actions.actions-spending-limit-detailed %}


{% data reusables.github-actions.spending-limit-enterprise-account %}	For information on managing and changing your account's spending limit, see "[Managing your spending limit for {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions)."


{% data reusables.dotcom_billing.actions-packages-unpaid-account %}	{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
  6  
...nd-managing-billing-and-payments-on-github/about-billing-for-github-packages.md
@@ -10,6 +10,8 @@ versions:


{% data reusables.package_registry.packages-billing %}	{% data reusables.package_registry.packages-billing %}


{% data reusables.package_registry.packages-spending-limit-brief %} For more information, see "[About spending limits](#about-spending-limits)."

{% data reusables.package_registry.container-registry-beta-billing-note %}	{% data reusables.package_registry.container-registry-beta-billing-note %}


Data transfer resets every month, while storage usage does not.	Data transfer resets every month, while storage usage does not.
@@ -50,8 +52,8 @@ Your {% data variables.product.prodname_registry %} usage shares your account's


### About spending limits	### About spending limits


By default, your account will have a spending limit of $0 for {% data variables.product.prodname_registry %} usage. To enable storage and data transfer for private packages beyond the amounts included with your account, you can increase the spending limit or allow unlimited spending. For more information, see "[Managing your spending limit for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-packages)."	{% data reusables.package_registry.packages-spending-limit-detailed %}


{% data reusables.package_registry.spending-limit-enterprise-account %}	For information on managing and changing your account's spending limit, see "[Managing your spending limit for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-packages)."


{% data reusables.dotcom_billing.actions-packages-unpaid-account %}	{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
  14  
...lling-and-payments-on-github/managing-your-spending-limit-for-github-actions.md
@@ -8,13 +8,15 @@ versions:


### About spending limits for {% data variables.product.prodname_actions %}	### About spending limits for {% data variables.product.prodname_actions %}


{% data reusables.github-actions.actions-billing %} {% data reusables.github-actions.actions-spending-limit %}	{% data reusables.github-actions.actions-billing %}


You can set a higher spending limit or, for some accounts, allow unlimited spending. If you pay for your organization or enterprise account by invoice, you can prepay for overages to set a higher spending limit. The spending limit applies to your combined overages for {% data variables.product.prodname_actions %} and {% data variables.product.prodname_registry %}. For more information about pricing for {% data variables.product.prodname_actions %} usage, see "[About billing for {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)."	{% data reusables.github-actions.actions-spending-limit-brief %}


As soon as you set a spending limit above $0, you will be responsible for any overages that occurred in the past. For example, if your organization uses {% data variables.product.prodname_team %}, does not allow overages, and creates workflow artifacts that increase your storage usage for the month from 1.9GB to 2.1GB, you will use slightly more storage than the 2GB your product includes.	{% data reusables.actions.actions-packages-set-spending-limit %} For more information about pricing for {% data variables.product.prodname_actions %} usage, see "[About billing for {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)."


Because you have not enabled overages, your next attempt to publish a version of the package will fail. You will not receive a bill for the 0.1GB overage that month. However, if you enable overages in a future month, your first bill will include the 0.1GB of overage from the past in addition to any overages for the current billing cycle.	As soon as you set a spending limit other than $0, you will be responsible for any existing overages in the current billing period. For example, if your organization uses {% data variables.product.prodname_team %}, does not allow overages, and creates workflow artifacts that increase your storage usage for the month from 1.9GB to 2.1GB, you will use slightly more storage than the 2GB your product includes.

Because you have not enabled overages, your next attempt to create a workflow artifact will fail. You will not receive a bill for the 0.1GB overage that month. However, if you enable overages, your first bill will include the 0.1GB of existing overage for the current billing cycle, as well as any additional overages you accrue.


### Managing the spending limit for {% data variables.product.prodname_actions %} for your user account	### Managing the spending limit for {% data variables.product.prodname_actions %} for your user account


@@ -30,8 +32,6 @@ Anyone can manage the spending limit for {% data variables.product.prodname_acti


Organizations owners and billing managers can manage the spending limit for {% data variables.product.prodname_actions %} for an organization.	Organizations owners and billing managers can manage the spending limit for {% data variables.product.prodname_actions %} for an organization.


If you pay for your organization account by invoice, you cannot manage the spending limit for your enterprise account on {% data variables.product.product_name %}. If you want to allow repositories owned by your organization to use {% data variables.product.prodname_actions %} beyond the storage or data transfer included for each repository, you can prepay for overages. Because overages must prepaid, you cannot enable unlimited spending on accounts paid by invoice. Your spending limit will be 150% of the amount you prepaid. If you have any questions, [contact our account management team](https://enterprise.github.com/contact).	

{% data reusables.profile.access_profile %}	{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}	{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}	{% data reusables.organizations.org_settings %}
@@ -44,8 +44,6 @@ If you pay for your organization account by invoice, you cannot manage the spend


Enterprise owners and billing managers can manage the spending limit for {% data variables.product.prodname_actions %} for an enterprise account.	Enterprise owners and billing managers can manage the spending limit for {% data variables.product.prodname_actions %} for an enterprise account.


{% data reusables.github-actions.spending-limit-enterprise-account %}	

{% data reusables.enterprise-accounts.access-enterprise %}	{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}	{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}	{% data reusables.enterprise-accounts.billing-tab %}
  12  
...ling-and-payments-on-github/managing-your-spending-limit-for-github-packages.md
@@ -10,11 +10,13 @@ versions:


{% data reusables.package_registry.packages-billing %}	{% data reusables.package_registry.packages-billing %}


You can set a higher spending limit or, for some accounts, allow unlimited spending. If you pay for your organization or enterprise account by invoice, you can prepay for overages to set a higher spending limit. The spending limit applies to your combined overages for {% data variables.product.prodname_registry %} and {% data variables.product.prodname_actions %}. For more information about pricing for {% data variables.product.prodname_registry %} usage, see "[About billing for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)."	{% data reusables.package_registry.packages-spending-limit-brief %}


As soon as you set a spending limit above $0, you will be responsible for any overages that occurred in the past. For example, if your organization uses {% data variables.product.prodname_team %}, does not allow overages, and publishes a new version of a private package that increases your storage usage for the month from 1.9GB to 2.1GB, publishing the version will use slightly more than the 2GB your product includes.	{% data reusables.actions.actions-packages-set-spending-limit %} For more information about pricing for {% data variables.product.prodname_registry %} usage, see "[About billing for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)."


Because you have not enabled overages, your next attempt to publish a version of the package will fail. You will not receive a bill for the 0.1GB overage that month. However, if you enable overages in a future month, your first bill will include the 0.1GB of overage from the past in addition to any overages for the current billing cycle.	As soon as you set a spending limit other than $0, you will be responsible for any existing overages in the current billing period. For example, if your organization uses {% data variables.product.prodname_team %}, does not allow overages, and publishes a new version of a private package that increases your storage usage for the month from 1.9GB to 2.1GB, publishing the version will use slightly more than the 2GB your product includes.

Because you have not enabled overages, your next attempt to publish a version of the package will fail. You will not receive a bill for the 0.1GB overage that month. However, if you enable overages, your first bill will include the 0.1GB of existing overage for the current billing cycle, as well as any additional overages you accrue.


### Managing the spending limit for {% data variables.product.prodname_registry %} for your user account	### Managing the spending limit for {% data variables.product.prodname_registry %} for your user account


@@ -30,8 +32,6 @@ Anyone can manage the spending limit for {% data variables.product.prodname_regi


Organizations owners and billing managers can manage the spending limit for {% data variables.product.prodname_registry %} for an organization.	Organizations owners and billing managers can manage the spending limit for {% data variables.product.prodname_registry %} for an organization.


If you pay for your organization account by invoice, you cannot manage the spending limit for your enterprise account on {% data variables.product.product_name %}. If you want to allow repositories owned by your organization to use {% data variables.product.prodname_registry %} beyond the storage or data transfer included for each repository, you can prepay for overages. Because overages must prepaid, you cannot enable unlimited spending on accounts paid by invoice. Your spending limit will be 150% of the amount you prepaid. If you have any questions, [contact our account management team](https://enterprise.github.com/contact).	

{% data reusables.profile.access_profile %}	{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}	{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}	{% data reusables.organizations.org_settings %}
@@ -44,8 +44,6 @@ If you pay for your organization account by invoice, you cannot manage the spend


Enterprise owners and billing managers can manage the spending limit for {% data variables.product.prodname_registry %} for an enterprise account.	Enterprise owners and billing managers can manage the spending limit for {% data variables.product.prodname_registry %} for an enterprise account.


{% data reusables.package_registry.spending-limit-enterprise-account %}	

{% data reusables.enterprise-accounts.access-enterprise %}	{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}	{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}	{% data reusables.enterprise-accounts.billing-tab %}
  2  
...ng-up-and-managing-your-github-profile/viewing-contributions-on-your-profile.md
@@ -11,7 +11,7 @@ versions:
  github-ae: '*'	  github-ae: '*'
---	---


{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}Your contribution graph shows activity from public repositories. {% endif %}You can choose to show activity from {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}both public and{% endif %}private repositories, with specific details of your activity in private repositories anonymized. For more information, see "[Publicizing or hiding your private contributions on your profile](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)."	{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}Your contribution graph shows activity from public repositories. {% endif %}You can choose to show activity from {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}both public and {% endif %}private repositories, with specific details of your activity in private repositories anonymized. For more information, see "[Publicizing or hiding your private contributions on your profile](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)."


{% note %}	{% note %}


  2  
content/packages/learn-github-packages/about-github-packages.md
@@ -46,7 +46,7 @@ You can review the package's README, some metadata like licensing, download stat
{% if currentVersion == "free-pro-team@latest" %}	{% if currentVersion == "free-pro-team@latest" %}
### About billing for {% data variables.product.prodname_registry %}	### About billing for {% data variables.product.prodname_registry %}


{% data reusables.package_registry.packages-billing %} For more information, see "[About billing for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)."	{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} For more information, see "[About billing for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)."


{% data reusables.package_registry.container-registry-beta-billing-note %}	{% data reusables.package_registry.container-registry-beta-billing-note %}
{% endif %}	{% endif %}
 43  
data/release-notes/2-20/0.yml
@@ -0,0 +1,43 @@
date: '2020-02-11'
sections:
  features:
    - 'On a repository branch, repository administrators can reject any push that contains a merge commit by enabling `Require linear history` using [branch protection rules](https://help.github.com/en/github/administering-a-repository/enabling-branch-restrictions). {% comment %} https://github.blog/changelog/2019-12-04-expanded-branch-protection-rules/ {% endcomment %}'
    - 'Repository administrators can grant all users with push access the ability to force-push to a protected branch by enabling `Allow force pushes` using [branch protection rules](https://help.github.com/en/github/administering-a-repository/enabling-branch-restrictions). {% comment %} https://github.blog/changelog/2019-12-04-expanded-branch-protection-rules/, https://github.com/github/ce-oss-happiness/issues/42, https://github.com/github/github/pull/125950 {% endcomment %}'
    - 'Repository administrators can grant all users with push access the ability to delete a protected branch by enabling `Allow deletions` using [branch protection rules](https://help.github.com/en/github/administering-a-repository/enabling-branch-restrictions). {% comment %} https://github.blog/changelog/2019-12-04-expanded-branch-protection-rules/ {% endcomment %}'
    - 'Administrators can set a `maxobjectsize` limit on repositories, [limiting the size of push commits](https://help.github.com/en/enterprise/admin/installation/setting-git-push-limits) to a repository that are not in [Git LFS](https://help.github.com/en/enterprise/admin/installation/configuring-git-large-file-storage-on-github-enterprise-server). {% comment %} https://github.com/github/babeld/pull/864, https://team.githubapp.com/posts/33519, https://github.com/githubcustomers/Slack/issues/27 {% endcomment %}'
    - 'Organization owners can create a set of default labels when creating a new repository.{% comment %} https://github.com/github/issues-projects/issues/237, https://github.com/github/issues-projects/issues/179 {% endcomment %}'
  security_fixes:
    - Packages have been updated to the latest security versions.
  bugs:
    - 'When a member of an organization tried to view a public repository in that organization, an SSO prompt could break the page display. {% comment %} https://github.com/github/github/issues/126677, https://github.com/github/github/pull/127501 {% endcomment %}'
    - "When viewing a users' profile, the links to that users' teams could be broken. {% comment %} https://github.com/github/github/issues/131771, https://github.com/github/github/pull/131865 {% endcomment %}"
    - 'Users with the `maintain` role were unable to edit repository topics. {% comment %} https://github.com/github/github/pull/129503, https://github.com/github/github/issues/119456 {% endcomment %}'
    - "A user who isn't an administrator for an organization would receive a 500 error when attempting to access the sign up page. {% comment %} https://github.com/github/github/pull/129213, https://github.com/github/github/issues/129210, https://github.com/github/github/issues/129212 {% endcomment %}"
    - 'The edit history popup would not display on gist comments. {% comment %} https://github.com/github/github/pull/129134, https://github.com/github/github/issues/128496 {% endcomment %}'
    - 'A new account could be registered with an email that was already registered.  {% comment %} https://github.com/github/github/pull/127905, https://github.com/github/github/issues/127858 {% endcomment %}'
    - 'A storage service was hitting a file descriptor limit and causing kernel hanging and other services to log errors. {% comment %} https://github.com/github/enterprise2/pull/18775 {% endcomment %}'
    - 'When an autolink reference was part of a url, the hyperlink could be removed. {% comment %} https://github.com/github/github/pull/126776 {% endcomment %}'
    - 'When adding a comment to a pull request, the `Linked Issues` section from the sidebar could disappear. {% comment %} https://github.com/github/issues-projects/issues/384, https://github.com/github/github/pull/130514 {% endcomment %}'
    - 'When editing an existing organization invitation for a user, a duplicate header could be appear on the `Teams` table. {% comment %} https://github.com/github/github/issues/120381, https://github.com/github/github/pull/128939 {% endcomment %}'
    - 'The `resqued` service could stop logging events when the queues became too large. {% comment %} https://github.com/github/github/pull/130087, https://github.com/github/business-support/issues/2696 {% endcomment %}'
    - 'Self-signed certificates are not automatically generated when running the `ghe-config-apply` command for cluster and high-availability configurations. {% comment %} https://github.com/github/enterprise2/pull/18773 {% endcomment %}'
  changes:
    - 'No logo will be displayed for a topic if one has not been uploaded. {% comment %} https://github.com/github/github/issues/130513, https://github.com/github/github/pull/130515 {% endcomment %}'
    - 'When viewing an issue on a mobile browser, the issue metadata is listed at the top of the page. {% comment %} https://github.com/github/github/pull/127560 {% endcomment %}'
    - 'Consul''s top-level domain has changed from ".consul" to ".ghe.local". {% comment %} https://github.com/github/enterprise2/pull/17443, https://github.com/github/enterprise2/issues/17701 {% endcomment %}'
    - 'The hookshot service no longer relies on ElasticSearch and only uses MySQL as a database store. {% comment %} https://github.com/github/enterprise2/pull/18158, https://github.com/github/hookshot/pull/1128, https://github.com/github/enterprise2/pull/15898 {% endcomment %}'
    - 'Improved visual distinction between issue, project and discussion has been implemented on project note cards. {% comment %} https://github.com/github/github/pull/132038 {% endcomment %}'
    - 'On a pull request review, a notice is displayed if a multi-line comment is truncated. {% comment %} https://github.com/github/github/issues/125948, https://github.com/github/github/pull/128677 {% endcomment %}'
    - 'Users can view their audit log on the `Security Log` tab of their personal settings page. {% comment %} https://github.com/github/github/pull/123041{% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When pushing to a gist, an exception could be triggered during the post-receive hook. {% comment %} https://github.com/github/github/issues/129091 {% endcomment %}'
    - Duplicate webhook entries in the database can cause upgrades from previous versions to fail. (updated 2020-02-26)
    - 'Upgrades and settings updates will fail if background worker configurations have been customised. {% comment %} https://github.com/github/enterprise2/issues/19119 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'When upgrading from previous versions, background job workers may not be spawned, preventing essential features such as merging pull requests. (updated 2020-04-07) {% comment %} https://github.com/github/enterprise2/issues/19232 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. (updated 2020-06-23) {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
    - 'Dependency graph is not detecting dependencies when deployed in a cluster configuration with multiple Redis nodes. (updated 2020-06-30) {% comment %} https://github.com/github/dependency-graph/issues/81 {% endcomment %}'
 20  
data/release-notes/2-20/1.yml
@@ -0,0 +1,20 @@
date: '2020-02-27'
sections:
  security_fixes:
    - 'Packages have been updated to the latest security versions. {% comment %} https://github.com/github/enterprise2/pull/19116, https://github.com/github/enterprise2/pull/19110, https://github.com/github/enterprise2/pull/19154, https://github.com/github/enterprise2/pull/19142 {% endcomment %}'
  bugs:
    - 'Restore from backups would fail with an `Invalid RDB version number` error. {% comment %} https://github.com/github/enterprise2/pull/19117, https://github.com/github/enterprise2/pull/19109 {% endcomment %}'
    - 'Upgrading an HA replica would stall indefinitely waiting for MySQL to start. {% comment %} https://github.com/github/enterprise2/pull/19168, https://github.com/github/enterprise2/pull/19101 {% endcomment %}'
    - 'PR review comments with unexpected values for "position" or "original_position" caused imports to fail. {% comment %} https://github.com/github/github/pull/135439, https://github.com/github/github/pull/135374 {% endcomment %}'
    - 'Duplicate webhook entries in the database could cause upgrades from previous versions to fail. {% comment %} https://github.com/github/hookshot/pull/1541, https://github.com/github/hookshot/pull/1426, https://github.com/github/hookshot/pull/1540 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When pushing to a gist, an exception could be triggered during the post-receive hook. {% comment %} https://github.com/github/github/issues/129091 {% endcomment %}'
    - 'Upgrades and settings updates will fail if background worker configurations have been customised. {% comment %} https://github.com/github/enterprise2/issues/19119 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'When upgrading from previous versions, background job workers may not be spawned, preventing essential features such as merging pull requests. (updated 2020-04-07) {% comment %} https://github.com/github/enterprise2/issues/19232 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. (updated 2020-06-23) {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
    - 'Dependency graph is not detecting dependencies when deployed in a cluster configuration with multiple Redis nodes. (updated 2020-06-30) {% comment %} https://github.com/github/dependency-graph/issues/81 {% endcomment %}'
 20  
data/release-notes/2-20/10.yml
@@ -0,0 +1,20 @@
date: '2020-06-23'
sections:
  security_fixes:
    - 'Packages have been updated to the latest security versions. {% comment %} https://github.com/github/enterprise2/pull/20746, https://github.com/github/enterprise2/pull/20727 {% endcomment %}'
  bugs:
    - 'Excessively large log events could lead to log forwarding instability when UDP was used as the transport mechanism. {% comment %} https://github.com/github/enterprise2/pull/20457, https://github.com/github/enterprise2/pull/20445 {% endcomment %}'
    - "Automatic unsuspension of a user through SSO did not complete if the SSH keys attribute had keys already associated with the user's account. {% comment %} https://github.com/github/github/pull/143474, https://github.com/github/github/pull/142927 {% endcomment %}"
    - 'The repository permission hash from the REST API indicated no access for business members who have pull access to internal repositories. {% comment %} https://github.com/github/github/pull/144755, https://github.com/github/github/pull/144292 {% endcomment %}'
    - 'Previewing a GitHub App description written in markdown was not properly rendered. {% comment %} https://github.com/github/github/pull/145038, https://github.com/github/github/pull/133360 {% endcomment %}'
    - 'The audit log did not include branch protection changes events. {% comment %} https://github.com/github/github/pull/145995, https://github.com/github/github/pull/145014 {% endcomment %}'
    - "Trying to assign code review to a member of an empty team would result in a '500 Internal Server Error'. {% comment %} https://github.com/github/github/pull/146328, https://github.com/github/github/pull/139330 {% endcomment %}"
    - 'Code review assignment using the load balancing algorithm could repeatedly assign to the same team member. {% comment %} https://github.com/github/github/pull/146329, https://github.com/github/github/pull/136504 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
    - 'Dependency graph is not detecting dependencies when deployed in a cluster configuration with multiple Redis nodes. (updated 2020-06-30) {% comment %} https://github.com/github/dependency-graph/issues/81 {% endcomment %}'
 18  
data/release-notes/2-20/11.yml
@@ -0,0 +1,18 @@
date: '2020-07-09'
sections:
  security_fixes:
    - '**MEDIUM:** Updated nginx to 1.16.1 and addressed CVE-2019-20372. (updated 2020-07-22) {% comment %} https://github.com/github/enterprise2/pull/21251 {% endcomment %}'
    - 'Packages have been updated to the latest security versions. {% comment %} https://github.com/github/enterprise2/pull/21088, https://github.com/github/enterprise2/pull/21036 {% endcomment %}'
  bugs:
    - 'Dependency graph was not detecting dependencies when deployed in a cluster configuration with multiple Redis nodes. {% comment %} https://github.com/github/enterprise2/pull/21260, https://github.com/github/enterprise2/pull/21102 {% endcomment %}'
    - 'Certain log files did not rotate every 7 days. {% comment %} https://github.com/github/enterprise2/pull/21278, https://github.com/github/enterprise2/pull/21264 {% endcomment %}'
    - 'Rapid reuse of webhook source ports resulted in rejected connections. {% comment %} https://github.com/github/enterprise2/pull/21289 {% endcomment %}'
    - 'Incorrect background jobs could attempt to run on instances configured as passive replicas. {% comment %} https://github.com/github/enterprise2/pull/21318, https://github.com/github/enterprise2/pull/21212, https://github.com/github/enterprise2/issues/21167 {% endcomment %}'
    - 'Internal repositories were not correctly included in search results for SAML-enabled orgs. {% comment %} https://github.com/github/github/pull/147503, https://github.com/github/github/pull/145692 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
 16  
data/release-notes/2-20/12.yml
@@ -0,0 +1,16 @@
date: '2020-07-21'
sections:
  security_fixes:
    - 'Packages have been updated to the latest security versions. {% comment %} https://github.com/github/enterprise2/pull/21437, https://github.com/github/enterprise2/pull/21402, https://github.com/github/enterprise2/pull/21495, https://github.com/github/enterprise2/pull/21479 {% endcomment %}'
  bugs:
    - 'The Management Console monitor graphs would sometimes not display correctly on larger screens. {% comment %} https://github.com/github/enterprise2/pull/21397, https://github.com/github/enterprise2/pull/21381 {% endcomment %}'
    - 'GitHub App Manifest creation flow was unusable in some scenarios when a SameSite Cookie policy was applied. {% comment %} https://github.com/github/github/pull/147826, https://github.com/github/github/pull/144121 {% endcomment %}'
  changes:
    - 'Improvements to HAProxy scaling. {% comment %} https://github.com/github/enterprise2/pull/21383 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
 21  
data/release-notes/2-20/13.yml
@@ -0,0 +1,21 @@
date: '2020-08-11'
sections:
  security_fixes:
    - '**CRITICAL:** A remote code execution vulnerability was identified in GitHub Pages that could allow an attacker to execute commands as part building a GitHub Pages site. This issue was due to an outdated and vulnerable dependency used in the Pages build process. To exploit this vulnerability, an attacker would need permission to create and build a GitHub Pages site on the GitHub Enterprise Server instance.  This vulnerability affected all versions of GitHub Enterprise Server. To mitigate this vulnerability, Kramdown has been updated to address CVE-2020-14001. {% comment %} https://github.com/github/pages/pull/2836, https://github.com/github/pages/pull/2827 {% endcomment %}'
    - '**HIGH:** An attacker could inject a malicious argument into a Git sub-command when executed on GitHub Enterprise Server. This could allow an attacker to overwrite arbitrary files with partially user-controlled content and potentially execute arbitrary commands on the GitHub Enterprise Server instance. To exploit this vulnerability, an attacker would need permission to access repositories within the GitHub Enterprise Server instance. However, due to other protections in place, we could not identify a way to actively exploit this vulnerability. This vulnerability was reported through the GitHub Security Bug Bounty program. {% comment %} https://github.com/github/github/pull/151097 {% endcomment %}'
    - 'Packages have been updated to the latest security versions. {% comment %} https://github.com/github/enterprise2/pull/21811, https://github.com/github/enterprise2/pull/21700 {% endcomment %}'
  bugs:
    - 'A Consul configuration error prevented some background jobs from being processed on standalone instances. {% comment %} https://github.com/github/enterprise2/pull/21464 {% endcomment %}'
    - 'The service memory allocation calculation could allocate an incorrect or unbounded memory allocation to a service resulting in poor system performance. {% comment %} https://github.com/github/enterprise2/pull/21716 {% endcomment %}'
    - 'The virtualization platform for oVirt KVM systems was not properly detected, causing problems during upgrades. {% comment %} https://github.com/github/enterprise2/pull/21730, https://github.com/github/enterprise2/pull/21669 {% endcomment %}'
    - "The error message for invalid authentication with a password via Git command line didn't populate the URL linking to adding the appropriate token or SSH key. {% comment %} https://github.com/github/github/pull/149714 {% endcomment %}"
    - 'GitHub Connect was using a deprecated GitHub.com API endpoint. {% comment %} https://github.com/github/github/pull/150828, https://github.com/github/github/pull/150545 {% endcomment %}'
    - 'Issues could not be sorted by *Recently updated* on repositories migrated to a new instance. {% comment %} https://github.com/github/github/pull/150843, https://github.com/github/github/pull/149330 {% endcomment %}'
    - 'The 404 page contained GitHub.com contact and status links in the footer. {% comment %} https://github.com/github/github/pull/151316 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
 12  
data/release-notes/2-20/14.yml
@@ -0,0 +1,12 @@
date: '2020-08-12'
sections:
  bugs:
    - 'Resolved an issue that could lead to high CPU usage while generating system configuration templates. {% comment %} https://github.com/github/enterprise2/pull/21784, https://github.com/github/enterprise2/pull/21741 {% endcomment %}'
    - 'Recent changes to memory allocations could lead to a degradation in system performance {% comment %} https://github.com/github/enterprise2/pull/22067 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
 24  
data/release-notes/2-20/15.yml
@@ -0,0 +1,24 @@
date: '2020-08-26'
sections:
  security_fixes:
    - >-
      **CRITICAL:** A remote code execution vulnerability was identified in GitHub Pages that could be exploited when building a GitHub Pages site. User-controlled configuration of the underlying parsers used by GitHub Pages were not sufficiently restricted and made it possible to execute commands on the GitHub Enterprise Server instance. To exploit this vulnerability, an attacker would need permission to create and build a GitHub Pages site on the GitHub Enterprise Server instance. This vulnerability affected all versions of GitHub Enterprise Server. The underlying issues contributing to this vulnerability were identified both internally and through the GitHub Security Bug Bounty program. We have issued CVE-2020-10518. {% comment %} https://github.com/github/pages/pull/2883, https://github.com/github/pages/pull/2902, https://github.com/github/pages/pull/2894, https://github.com/github/pages/pull/2877, https://github.com/github/pages-gem/pull/700,
      https://github.com/github/pages/pull/2890, https://github.com/github/pages/pull/2898, https://github.com/github/pages/pull/2909, https://github.com/github/pages/pull/2891, https://github.com/github/pages/pull/2884, https://github.com/github/pages/pull/2889 {% endcomment %}
    - '**MEDIUM:** An improper access control vulnerability was identified that allowed authenticated users of the instance to determine the names of unauthorized private repositories given their numerical IDs. This vulnerability did not allow unauthorized access to any repository content besides the name. This vulnerability affected all versions of GitHub Enterprise Server prior to 2.22 and has been assigned [CVE-2020-10517](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-10517). The vulnerability was reported via the [GitHub Bug Bounty program](https://bounty.github.com). {% comment %} https://github.com/github/github/pull/151987, https://github.com/github/github/pull/151713 {% endcomment %}'
    - 'Packages have been updated to the latest security versions. {% comment %} https://github.com/github/enterprise2/pull/21852, https://github.com/github/enterprise2/pull/21828, https://github.com/github/enterprise2/pull/22153, https://github.com/github/enterprise2/pull/21920, https://github.com/github/enterprise2/pull/22215, https://github.com/github/enterprise2/pull/22190 {% endcomment %}'
  bugs:
    - 'A message was not logged when the ghe-config-apply process had finished running ghe-es-auto-expand. {% comment %} https://github.com/github/enterprise2/pull/22177, https://github.com/github/enterprise2/pull/22171 {% endcomment %}'
    - 'Excessive logging to the `syslog` file could occur on high-availability replicas if the primary appliance is unavailable. {% comment %} https://github.com/github/enterprise2/pull/22267, https://github.com/github/enterprise2/pull/22124 {% endcomment %}'
    - "Database re-seeding on a replica could fail with an error: `Got packet bigger than 'max_allowed_packet'` {% comment %} https://github.com/github/enterprise2/pull/22321, https://github.com/github/enterprise2/pull/20063 {% endcomment %}"
    - 'In some cases duplicate user data could cause a 500 error while running the ghe-license-usage script. {% comment %} https://github.com/github/github/pull/152638 {% endcomment %}'
  changes:
    - 'In a high availability or geo-replication configuration, replica instances would exit maintenance mode when ghe-config-apply ran. {% comment %} https://github.com/github/enterprise2/pull/21776, https://github.com/github/enterprise2/pull/21440 {% endcomment %}'
    - "We've added support for the R5a and R5n AWS instance types. {% comment %} https://github.com/github/enterprise2/pull/21902, https://github.com/github/enterprise2/pull/21173 {% endcomment %}"
    - 'Removed the license seat count information on the administrative SSH MOTD due to a performance issue impacting GitHub Enterprise Server clusters. {% comment %} https://github.com/github/enterprise2/pull/21993, https://github.com/github/enterprise2/pull/21870 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
 12  
data/release-notes/2-20/16.yml
@@ -0,0 +1,12 @@
date: '2020-09-08'
sections:
  bugs:
    - 'A service health check caused session growth resulting in filesystem inode exhaustion. {% comment %} https://github.com/github/enterprise2/pull/22480, https://github.com/github/enterprise2/pull/22475 {% endcomment %}'
    - "Upgrading using a hotpatch could fail with an error: `'libdbi1' was not found` {% comment %} https://github.com/github/enterprise2/pull/22558, https://github.com/github/enterprise2/pull/22552 {% endcomment %}"
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
 12  
data/release-notes/2-20/17.yml
@@ -0,0 +1,12 @@
date: '2020-09-23'
sections:
  security_fixes:
    - '**MEDIUM**:  ImageMagick has been updated to address [DSA-4715-1](https://www.debian.org/security/2020/dsa-4715). {% comment %} https://github.com/github/enterprise2/pull/22625, https://github.com/github/enterprise2/pull/22610 {% endcomment %}'
    - 'Packages have been updated to the latest security versions. {% comment %} https://github.com/github/enterprise2/pull/22601, https://github.com/github/enterprise2/pull/22592, https://github.com/github/enterprise2/pull/22605, https://github.com/github/enterprise2/pull/22426, https://github.com/github/enterprise2/pull/22718, https://github.com/github/enterprise2/pull/22699 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
 25  
data/release-notes/2-20/18.yml
@@ -0,0 +1,25 @@
date: '2020-10-09'
sections:
  security_fixes:
    - 'A user whose LDAP directory username standardizes to an existing GHES account login could authenticate into the existing account. {% comment %} https://github.com/github/github/pull/156518, https://github.com/github/github/pull/155512 {% endcomment %}'
    - 'Packages have been updated to the latest security versions. {% comment %} https://github.com/github/enterprise2/pull/22910, https://github.com/github/enterprise2/pull/22878 {% endcomment %}'
  bugs:
    - 'The NameID Format dropdown in the Management Console would be reset to "unspecified" after setting it to "persistent". {% comment %} https://github.com/github/enterprise2/pull/22403, https://github.com/github/enterprise2/pull/22331, https://github.com/github/enterprise2/issues/13446 {% endcomment %}'
    - 'Saving settings via the [management console](https://docs.github.com/en/enterprise-server@latest/admin/configuration/accessing-the-management-console) would append a newline to the [TLS/SSL certificate and key](https://docs.github.com/en/enterprise-server@latest/admin/configuration/configuring-tls) files which triggered unnecessary reloading of some services. {% comment %} https://github.com/github/enterprise2/pull/22607, https://github.com/github/enterprise2/pull/22540 {% endcomment %}'
    - 'System logs for Dependency Graph were not rotating, allowing unbounded storage growth. {% comment %} https://github.com/github/enterprise2/pull/22765, https://github.com/github/enterprise2/pull/22733 {% endcomment %}'
    - 'Links to GitHub Security Advisories would use a URL with the hostname of the GitHub Enterprise Server instance instead of GitHub.com, directing the user to a nonexistent URL. {% comment %} https://github.com/github/github/pull/153444, https://github.com/github/github/pull/151301 {% endcomment %}'
    - 'When importing a repository with `ghe-migrator`, an unexpected exception could occur when inconsistent data is present. {% comment %} https://github.com/github/github/pull/153848, https://github.com/github/github/pull/151552 {% endcomment %}'
    - 'When using `ghe-migrator` to import PR review requests, records associated with deleted users would result in extraneous database records. {% comment %} https://github.com/github/github/pull/154958, https://github.com/github/github/pull/153169 {% endcomment %}'
    - 'When importing users with `ghe-migrator`, an error of "Emails is invalid" would occur if the system-generated email address were longer than 100 characters. {% comment %} https://github.com/github/github/pull/155112, https://github.com/github/github/pull/152418 {% endcomment %}'
    - 'Logging webhook activity could use large amounts of disk space and cause the root disk to become full. {% comment %} https://github.com/github/github/pull/155655, https://github.com/github/github/pull/154100 {% endcomment %}'
  changes:
    - 'Support is added for the AWS EC2 instance type `m5.16xlarge`. {% comment %} https://github.com/github/enterprise2/pull/22500, https://github.com/github/enterprise2/pull/22473 {% endcomment %}'
    - 'Remove the requirement for SSH fingerprints in `ghe-migrator` archives as it can always be computed. {% comment %} https://github.com/github/github/pull/156944, https://github.com/github/github/pull/155387 {% endcomment %}'
    - 'GitHub App Manifests now include the `request_oauth_on_install` field. {% comment %} https://github.com/github/github/pull/156996, https://github.com/github/github/pull/155010, https://github.com/github/ecosystem-apps/issues/1055 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
 13  
data/release-notes/2-20/19.yml
@@ -0,0 +1,13 @@
date: '2020-10-20'
sections:
  security_fixes:
    - 'Packages have been updated to the latest security versions. {% comment %} https://github.com/github/enterprise2/pull/23095, https://github.com/github/enterprise2/pull/23081 {% endcomment %}'
  bugs:
    - 'The enterprise account "Confirm two-factor requirement policy" messaging was incorrect. {% comment %} https://github.com/github/github/pull/158737 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
 27  
data/release-notes/2-20/2.yml
@@ -0,0 +1,27 @@
date: '2020-03-10'
sections:
  security_fixes:
    - 'Packages have been updated to the latest security versions. {% comment %} https://github.com/github/enterprise2/pull/19204, https://github.com/github/enterprise2/pull/19187 {% endcomment %}'
  bugs:
    - 'In some cases the forwarded log entries, mainly for audit.log were getting truncated. {% comment %} https://github.com/github/enterprise2/pull/19244, https://github.com/github/enterprise2/pull/19192, https://github.com/github/enterprise2/issues/16655 {% endcomment %}'
    - 'The `ghe-license-check` command-line utility returned an "Invalid license file" error for some valid licenses, causing configuration changes to fail. {% comment %} https://github.com/github/enterprise2/pull/19249, https://github.com/github/enterprise2/pull/19185, https://github.zendesk.com/agent/tickets/549903 {% endcomment %}'
    - 'Alambic exception logs were not forwarded by syslog. {% comment %} https://github.com/github/enterprise2/pull/19263, https://github.com/github/enterprise2/pull/19123, https://github.com/github/enterprise2/issues/18734 {% endcomment %}'
    - 'The [`org_block event`](https://developer.github.com/v3/activity/events/types/#orgblockevent) is not unavailable but was appearing for GitHub Apps on GitHub Enterprise Server. {% comment %} https://github.com/github/github/pull/136227, https://github.com/github/github/pull/135640, https://github.com/github/ecosystem-apps/issues/693 {% endcomment %}'
    - 'GraphQL query responses sometimes returned unmatched node identifiers for `ProtectedBranch` objects. {% comment %} https://github.com/github/github/pull/136376, https://github.com/github/github/pull/136214, https://github.com/github/github/issues/135407 {% endcomment %}'
    - 'The GitHub App credential used by GitHub Connect failed to refresh immediately after expiry. {% comment %} https://github.com/github/github/pull/136384, https://github.com/github/github/pull/136259 {% endcomment %}'
    - 'Leaving a comment in reply to a pull request comment was intermittently creating a pending pull request review. {% comment %} https://github.com/github/github/pull/136454, https://github.com/github/github/pull/133697, https://github.com/github/github/issues/127401 {% endcomment %}'
    - 'Using ghe-migrator or exporting from GitHub.com, an export would silently fail to export non-image attachments. {% comment %} https://github.com/github/github/pull/136487, https://github.com/github/github/pull/134524, https://github.com/github/github/issues/134358 {% endcomment %}'
    - 'Pre-receive hook returned 500 error on web UI when UTF-8 characters were encountered. {% comment %} https://github.com/github/github/pull/136699, https://github.com/github/github/pull/136014, https://github.com/github/github/issues/133501 {% endcomment %}'
  changes:
    - 'The ` ghe-license-usage  ` command-line utility includes a new `--unencrypted` option to provide visibility into the exported license usage file. {% comment %} https://github.com/github/github/pull/136134, https://github.com/github/github/pull/136000 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When pushing to a gist, an exception could be triggered during the post-receive hook. {% comment %} https://github.com/github/github/issues/129091 {% endcomment %}'
    - 'Upgrades and settings updates will fail if background worker configurations have been customised. {% comment %} https://github.com/github/enterprise2/issues/19119 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'When upgrading from previous versions, background job workers may not be spawned, preventing essential features such as merging pull requests. (updated 2020-04-07) {% comment %} https://github.com/github/enterprise2/issues/19232 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. (updated 2020-06-23) {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
    - 'Dependency graph is not detecting dependencies when deployed in a cluster configuration with multiple Redis nodes. (updated 2020-06-30) {% comment %} https://github.com/github/dependency-graph/issues/81 {% endcomment %}'
 15  
data/release-notes/2-20/20.yml
@@ -0,0 +1,15 @@
date: '2020-11-03'
sections:
  security_fixes:
    - '**MEDIUM:** High CPU usage could be triggered by a specially crafted request to the SVN bridge resulting in Denial of Service (DoS). {% comment %} https://github.com/github/slumlord/pull/1003, https://github.com/github/slumlord/pull/1000 {% endcomment %}'
    - "**LOW:** Incorrect token validation resulted in a reduced entropy for matching tokens during authentication. Analysis shows that in practice there's no significant security risk here. {% comment %} https://github.com/github/github/pull/159453, https://github.com/github/github/pull/159193 {% endcomment %}"
    - 'Packages have been updated to the latest security versions. {% comment %} https://github.com/github/enterprise2/pull/23538, https://github.com/github/enterprise2/pull/23171, https://github.com/github/enterprise2/pull/23691, https://github.com/github/enterprise2/pull/23677 {% endcomment %}'
  bugs:
    - 'Suspended users were included in the list of suggested users, potentially hiding unsuspended users. {% comment %} https://github.com/github/github/pull/159809, https://github.com/github/github/pull/140563, https://github.com/github/github/pull/142146 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
 14  
data/release-notes/2-20/21.yml
@@ -0,0 +1,14 @@
date: '2020-11-17'
sections:
  security_fixes:
    - 'Packages have been updated to the latest security versions. {% comment %} https://github.com/github/enterprise2/pull/23843, https://github.com/github/enterprise2/pull/23712 {% endcomment %}'
  bugs:
    - 'The babeld logs were missing a separator between seconds and microseconds. {% comment %} https://github.com/github/babeld/pull/1004, https://github.com/github/babeld/pull/1002 {% endcomment %}'
    - 'When the enterprise account "Repository visibility change" policy was set to "Enabled", organization owners could not change the visibility of repositories within the organization. {% comment %} https://github.com/github/github/pull/160922, https://github.com/github/github/pull/160773 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
 18  
data/release-notes/2-20/22.yml
@@ -0,0 +1,18 @@
date: '2020-12-03'
sections:
  bugs:
    - 'Authorization service was being detected as unhealthy due to a race condition in the bootstrap which led to  restart of the service. {% comment %} https://github.com/github/authzd/pull/1279 {% endcomment %}'
    - 'An underlying behavior was causing a service to become unavailable during the hotpatch upgrade process. {% comment %} https://github.com/github/enterprise2/pull/24053, https://github.com/github/enterprise2/issues/23947 {% endcomment %}'
    - 'A subset of log forwarding SSL certificates was not being applied correctly. {% comment %} https://github.com/github/enterprise2/pull/24112, https://github.com/github/enterprise2/pull/23981 {% endcomment %}'
    - 'Email notifications sent to suspended users when they were removed from a Team or an Organization. {% comment %} https://github.com/github/github/pull/163107, https://github.com/github/github/pull/162742 {% endcomment %}'
    - 'The way SSH certificates were applied between Organizations and Businesses was inconsistent. {% comment %} https://github.com/github/github/pull/163429, https://github.com/github/github/pull/159538, https://github.com/github/authentication/issues/115 {% endcomment %}'
    - 'When an account was rate limited due to using incorrect passwords, it could be locked out for up to 24 hours. {% comment %} https://github.com/github/github/pull/163456, https://github.com/github/github/pull/162938, https://github.com/github/github-ds/pull/51 {% endcomment %}'
    - 'Pull request synchronization on repositories with many references could cause worker queues to fall behind. {% comment %} https://github.com/github/github/pull/163576, https://github.com/github/github/pull/163142 {% endcomment %}'
    - 'When signing in after attempting to visit a specific page, people were sent to the home page instead of their intended destination. {% comment %} https://github.com/github/github/pull/163785, https://github.com/github/github/pull/163579, https://github.com/github/github/pull/154117, https://github.com/github/ecosystem-apps/issues/1076 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
 14  
data/release-notes/2-20/3.yml
@@ -0,0 +1,14 @@
date: '2020-03-12'
sections:
  bugs:
    - 'Upgrades and settings updates would fail if background worker configurations had been customised. {% comment %} https://github.com/github/enterprise2/pull/19321, https://github.com/github/enterprise2/pull/19299 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When pushing to a gist, an exception could be triggered during the post-receive hook. {% comment %} https://github.com/github/github/issues/129091 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'When upgrading from previous versions, background job workers may not be spawned, preventing essential features such as merging pull requests. (updated 2020-04-07) {% comment %} https://github.com/github/enterprise2/issues/19232 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. (updated 2020-06-23) {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
    - 'Dependency graph is not detecting dependencies when deployed in a cluster configuration with multiple Redis nodes. (updated 2020-06-30) {% comment %} https://github.com/github/dependency-graph/issues/81 {% endcomment %}'
 17  
data/release-notes/2-20/4.yml
@@ -0,0 +1,17 @@
date: '2020-03-25'
sections:
  bugs:
    - 'SAML Authentication requests and Metadata were not strictly encoded, causing some Identity Providers to not correctly process Service Provider initiated Authentication requests. {% comment %} https://github.com/github/github/pull/137150, https://github.com/github/github/pull/136770, https://github.com/github/github/issues/136766 {% endcomment %}'
    - '`ghe-migrator` exports did not contain milestone users, which could break import operations. {% comment %} https://github.com/github/github/pull/138100, https://github.com/github/github/pull/137987, https://github.com/github/github/issues/137779 {% endcomment %}'
    - 'When pushing to a Gist, an exception could be triggered during the post-receive hook. {% comment %} https://github.com/github/github/pull/138460, https://github.com/github/github/pull/138313 {% endcomment %}'
    - '`ghe-repl-status` could fail when trying to display repositories that were not fully replicated. {% comment %} https://github.com/github/github/pull/138463, https://github.com/github/github/pull/138388 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When pushing to a gist, an exception could be triggered during the post-receive hook. {% comment %} https://github.com/github/github/issues/129091 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'When upgrading from previous versions, background job workers may not be spawned, preventing essential features such as merging pull requests. (updated 2020-04-07) {% comment %} https://github.com/github/enterprise2/issues/19232 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. (updated 2020-06-23) {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
    - 'Dependency graph is not detecting dependencies when deployed in a cluster configuration with multiple Redis nodes. (updated 2020-06-30) {% comment %} https://github.com/github/dependency-graph/issues/81 {% endcomment %}'
 19  
data/release-notes/2-20/5.yml
@@ -0,0 +1,19 @@
date: '2020-04-07'
sections:
  security_fixes:
    - 'Packages have been updated to the latest security versions. {% comment %} https://github.com/github/enterprise2/pull/19536, https://github.com/github/enterprise2/pull/19494 {% endcomment %}'
  bugs:
    - 'A maximum Git object size of 100MB option could not be selected for a repository when the global enterprise account had a Git object size option other than 100MB set. {% comment %} https://github.com/github/github/pull/138805, https://github.com/github/github/pull/138683 {% endcomment %}'
    - 'Results from the the Issues and Pull Requests API could have inconsistent behaviour when ordering by the `updated_at` field. {% comment %} https://github.com/github/github/pull/139247, https://github.com/github/github/pull/138486 {% endcomment %}'
    - 'The SecurityVulnerability `package` field could not be queried via the GraphQL API. {% comment %} https://github.com/github/github/pull/139418, https://github.com/github/github/pull/138245 {% endcomment %}'
    - 'Changing a repository from *public* to *internal* displayed an irrelevant billing message. {% comment %} https://github.com/github/github/pull/139531, https://github.com/github/github/pull/139492 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When pushing to a gist, an exception could be triggered during the post-receive hook. {% comment %} https://github.com/github/github/issues/129091 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'When upgrading from previous versions, background job workers may not be spawned, preventing essential features such as merging pull requests. {% comment %} https://github.com/github/enterprise2/issues/19232 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. (updated 2020-06-23) {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
    - 'Dependency graph is not detecting dependencies when deployed in a cluster configuration with multiple Redis nodes. (updated 2020-06-30) {% comment %} https://github.com/github/dependency-graph/issues/81 {% endcomment %}'
 26  
data/release-notes/2-20/6.yml
@@ -0,0 +1,26 @@
date: '2020-04-23'
sections:
  security_fixes:
    - '**HIGH**: OpenSSL has been updated to address [CVE-2020-1967](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-1967). {% comment %} https://github.com/github/enterprise2/pull/19889, https://github.com/github/enterprise2/pull/19885 {% endcomment %}'
    - '**HIGH**: Git has been updated to address [CVE-2020-5260](https://github.com/git/git/security/advisories/GHSA-qm7j-c969-7j4q) and [CVE-2020-11008](https://github.com/git/git/security/advisories/GHSA-hjc9-x69f-jqj7). New restrictions prevent malicious repositories from being pushed to the server instance, protecting clients which have not yet been patched. {% comment %} https://github.com/github/git/pull/990 {% endcomment %}'
    - '**LOW**:  ImageMagick has been updated to address [CVE-2019-10131](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-10131). {% comment %} https://github.com/github/enterprise2/pull/19655, https://github.com/github/enterprise2/pull/19617 {% endcomment %}'
    - 'Packages have been updated to the latest security versions. {% comment %} https://github.com/github/enterprise2/pull/19809, https://github.com/github/enterprise2/pull/19792, https://github.com/github/enterprise2/pull/19899, https://github.com/github/enterprise2/pull/19882 {% endcomment %}'
  bugs:
    - 'The git user lacked permissions to invoke the processes required to convert existing repositories using Subversion, from the v4 format to v3 LRS. {% comment %} https://github.com/github/enterprise2/pull/19465, https://github.com/github/enterprise2/pull/19150 {% endcomment %}'
    - 'A mismatch in MySQL configurations could cause backups to fail in large installations. {% comment %} https://github.com/github/enterprise2/pull/19688, https://github.com/github/enterprise2/pull/19409, https://github.com/github/enterprise2/issues/19055 {% endcomment %}'
    - 'When upgrading from previous versions, background job workers would sometimes not spawn, preventing essential features such as merging pull requests. {% comment %} https://github.com/github/enterprise2/pull/19771, https://github.com/github/enterprise2/pull/19712 {% endcomment %}'
    - "When a GitHub Enterprise Server license contained non-ASCII characters, a `GET` request to the Management Console's API `/setup/api/settings` endpoint would result in an Internal Server Error. {% comment %} https://github.com/github/enterprise2/pull/19790 {% endcomment %}"
    - 'The recovery console would prompt for a root password, even if the root account was locked. {% comment %} https://github.com/github/enterprise2/pull/19810, https://github.com/github/enterprise2/pull/19788, https://github.com/github/enterprise2/issues/18425 {% endcomment %}'
    - 'A CODEOWNERS file with a leading UTF-8 Byte Order Mark would cause all codeowner rules to be ignored. {% comment %} https://github.com/github/github/pull/140974, https://github.com/github/github/pull/140729 {% endcomment %}'
  changes:
    - 'When the orchestrator-client cron job failed, multiple emails would be sent to the root account. {% comment %} https://github.com/github/enterprise2/pull/19761, https://github.com/github/enterprise2/pull/19748 {% endcomment %}'
    - "When an external identity provider controlled user's site administrator status, users could not be demoted via the command line utility. {% comment %} https://github.com/github/github/pull/140522, https://github.com/github/github/pull/137807, https://github.com/github/github/issues/42727 {% endcomment %}"
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When pushing to a gist, an exception could be triggered during the post-receive hook. {% comment %} https://github.com/github/github/issues/129091 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. (updated 2020-06-23) {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
    - 'Dependency graph is not detecting dependencies when deployed in a cluster configuration with multiple Redis nodes. (updated 2020-06-30) {% comment %} https://github.com/github/dependency-graph/issues/81 {% endcomment %}'
 20  
data/release-notes/2-20/7.yml
@@ -0,0 +1,20 @@
date: '2020-05-05'
sections:
  security_fixes:
    - 'Packages have been updated to the latest security versions. {% comment %} https://github.com/github/enterprise2/pull/20027, https://github.com/github/enterprise2/pull/19997 {% endcomment %}'
  bugs:
    - '`ghe-repl-start` and `ghe-repl-status` displayed syntax errors. {% comment %} https://github.com/github/enterprise2/pull/19954, https://github.com/github/enterprise2/pull/19927 {% endcomment %}'
    - 'If a repository has the "automatically delete head branches" setting enabled, the head branch wasn''t automatically deleted, when a pull request was merged by a GitHub App installation. {% comment %} https://github.com/github/github/pull/141588, https://github.com/github/github/pull/133698, https://github.com/github/github/pull/133871, https://github.com/github/github/issues/132588 {% endcomment %}'
    - 'When an organization member was reinstated, the webhook payload reported the `ghost` user as the sender and not the actual user performing the reinstatement. {% comment %} https://github.com/github/github/pull/141731, https://github.com/github/github/pull/140609 {% endcomment %}'
    - 'If a repository has the "automatically delete head branches" setting enabled, the head branch wasn''t automatically deleted where the head repository was different from the base repository. {% comment %} https://github.com/github/github/pull/142096, https://github.com/github/github/pull/133871 {% endcomment %}'
    - 'The garbage collection of temporary files could lead to a license validation error. {% comment %} https://github.com/github/github/pull/142209, https://github.com/github/github/pull/142189 {% endcomment %}'
    - 'In some situations, including when a repository is first created, the pre-receive hook would be run without a value populated for the GITHUB_REPO_PUBLIC environment variable. {% comment %} https://github.com/github/github/pull/139419, https://github.com/github/github/pull/136228, https://github.com/github/github/pull/134363 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When pushing to a gist, an exception could be triggered during the post-receive hook. {% comment %} https://github.com/github/github/issues/129091 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. (updated 2020-06-23) {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
    - 'Dependency graph is not detecting dependencies when deployed in a cluster configuration with multiple Redis nodes. (updated 2020-06-30) {% comment %} https://github.com/github/dependency-graph/issues/81 {% endcomment %}'
 19  
data/release-notes/2-20/8.yml
@@ -0,0 +1,19 @@
date: '2020-05-19'
sections:
  security_fixes:
    - 'Packages have been updated to the latest security versions. {% comment %} https://github.com/github/enterprise2/pull/20108, https://github.com/github/enterprise2/pull/20086 {% endcomment %}'
  bugs:
    - 'After the license file was updated, services were not properly reloaded causing functionality loss. {% comment %} https://github.com/github/enterprise2/pull/20072, https://github.com/github/enterprise2/pull/19989 {% endcomment %}'
    - 'Internal API requests updating Dependency Graph information could fail if the response body was too large. {% comment %} https://github.com/github/enterprise2/pull/20231, https://github.com/github/enterprise2/pull/20208 {% endcomment %}'
    - 'The `affiliations` argument to some GraphQL repository connections was not respected. {% comment %} https://github.com/github/github/pull/142036, https://github.com/github/github/pull/140658 {% endcomment %}'
    - 'Automatic unsuspension of a user through SSO did not complete if the SAML email attribute had different casing than the GitHub user email. {% comment %} https://github.com/github/github/pull/143321, https://github.com/github/github/pull/142915 {% endcomment %}'
    - 'Restoring the membership of a user to an organization did not instrument the actor in webhook and audit log payloads. {% comment %} https://github.com/github/github/pull/143231, https://github.com/github/github/pull/140849 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When pushing to a gist, an exception could be triggered during the post-receive hook. {% comment %} https://github.com/github/github/issues/129091 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. (updated 2020-06-23) {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
    - 'Dependency graph is not detecting dependencies when deployed in a cluster configuration with multiple Redis nodes. (updated 2020-06-30) {% comment %} https://github.com/github/dependency-graph/issues/81 {% endcomment %}'
 16  
data/release-notes/2-20/9.yml
@@ -0,0 +1,16 @@
date: '2020-06-02'
sections:
  security_fixes:
    - '**HIGH:** An improper access control vulnerability was identified in the GitHub Enterprise Server API that allowed an organization member to escalate permissions and gain access to unauthorized repositories within an organization. This vulnerability affected all versions of GitHub Enterprise Server prior to 2.21.  We have issued [CVE-2020-10516](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-10516) in response to this issue. The vulnerability was reported via the [GitHub Bug Bounty program](https://bounty.github.com). {% comment %} https://github.com/github/github/pull/144454, https://github.com/github/github/pull/143444 {% endcomment %}'
    - 'Packages have been updated to the latest security versions. {% comment %} https://github.com/github/enterprise2/pull/20421, https://github.com/github/enterprise2/pull/20315 {% endcomment %}'
  bugs:
    - 'Internet-facing GitHub Enterprise Server instances could be indexed by search engines. {% comment %} https://github.com/github/github/pull/145073, https://github.com/github/github/pull/144973 {% endcomment %}'
  known_issues:
    - 'On a freshly set up GitHub Enterprise Server without any users, an attacker could create the first admin user. {% comment %} https://github.com/github/enterprise2/issues/1889 {% endcomment %}'
    - 'Custom firewall rules are not maintained during an upgrade. {% comment %} https://github.com/github/enterprise2/issues/2823 {% endcomment %}'
    - 'Git LFS tracked files [uploaded through the web interface](https://github.com/blog/2105-upload-files-to-your-repositories) are incorrectly added directly to the repository. {% comment %} https://github.com/github/github/issues/54684 {% endcomment %}'
    - 'Issues cannot be closed if they contain a permalink to a blob in the same repository where the file path is longer than 255 characters. {% comment %} https://github.com/github/github/issues/107731 {% endcomment %}'
    - 'When pushing to a gist, an exception could be triggered during the post-receive hook. {% comment %} https://github.com/github/github/issues/129091 {% endcomment %}'
    - 'When "Users can search GitHub.com" is enabled with GitHub Connect, issues in private and internal repositories are not included in GitHub.com search results. {% comment %} https://github.com/github/admin-experience/issues/571 {% endcomment %}'
    - 'Security alerts are not reported when pushing to a repository on the command line. (updated 2020-06-23) {% comment %} https://github.com/github/github/issues/143190 {% endcomment %}'
    - 'Dependency graph is not detecting dependencies when deployed in a cluster configuration with multiple Redis nodes. (updated 2020-06-30) {% comment %} https://github.com/github/dependency-graph/issues/81 {% endcomment %}'
0 comments on commit 887c8fb
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
 You’re not receiving notifications from this thread.
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
Merge branch 'main' into main · github/docs@887c8fb
Web searchCopy
