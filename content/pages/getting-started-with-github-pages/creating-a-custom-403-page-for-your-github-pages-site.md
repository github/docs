title: Migrating from Travis CI to GitHub Actions	title: Migrating from Travis CI to GitHub Actions
intro: '{% data variables.product.prodname_actions %} and Travis CI share multiple similarities, which helps make it relatively straightforward to migrate to {% data variables.product.prodname_actions %}.'	intro: '{% data variables.product.prodname_actions %} and Travis CI share multiple similarities, which helps make it relatively straightforward to migrate to {% data variables.product.prodname_actions %}.'
redirect_from:	redirect_from:
  - /actions/migrating-to-github-actions/migrating-from-travis-ci-to-github-actions	  - /actions/migrating-to-github-actions/migrating-from-travis-ci-to-github-actions
versions:	versions:
  free-pro-team: '*'	  free-pro-team: '*'
  enterprise-server: '>=2.22'	  enterprise-server: '>=2.22'
  github-ae: '*'	  github-ae: '*'
type: tutorial	type: tutorial
topics:	topics:
  - Travis CI	  - Travis CI
  - Migration	  - Migration
  - CI	  - CI
  - CD	  - CD
---	---
{% data reusables.actions.enterprise-beta %}	{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}	{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}	{% data reusables.actions.ae-beta %}
### Introduction	### Introduction
This guide helps you migrate from Travis CI to {% data variables.product.prodname_actions %}. It compares their concepts and syntax, describes the similarities, and demonstrates their different approaches to common tasks.	This guide helps you migrate from Travis CI to {% data variables.product.prodname_actions %}. It compares their concepts and syntax, describes the similarities, and demonstrates their different approaches to common tasks.
### Before you start	### Before you start
Before starting your migration to {% data variables.product.prodname_actions %}, it would be useful to become familiar with how it works:	Before starting your migration to {% data variables.product.prodname_actions %}, it would be useful to become familiar with how it works:
- For a quick example that demonstrates a {% data variables.product.prodname_actions %} job, see "[Quickstart for {% data variables.product.prodname_actions %}](/actions/quickstart)."	- For a quick example that demonstrates a {% data variables.product.prodname_actions %} job, see "[Quickstart for {% data variables.product.prodname_actions %}](/actions/quickstart)."
- To learn the essential {% data variables.product.prodname_actions %} concepts, see "[Introduction to GitHub Actions](/actions/learn-github-actions/introduction-to-github-actions)."	- To learn the essential {% data variables.product.prodname_actions %} concepts, see "[Introduction to GitHub Actions](/actions/learn-github-actions/introduction-to-github-actions)."
### Comparing job execution	### Comparing job execution
To give you control over when CI tasks are executed, a {% data variables.product.prodname_actions %} _workflow_ uses _jobs_ that run in parallel by default. Each job contains _steps_ that are executed in a sequence that you define. If you need to run setup and cleanup actions for a job, you can define steps in each job to perform these.	To give you control over when CI tasks are executed, a {% data variables.product.prodname_actions %} _workflow_ uses _jobs_ that run in parallel by default. Each job contains _steps_ that are executed in a sequence that you define. If you need to run setup and cleanup actions for a job, you can define steps in each job to perform these.
### Key similarities	### Key similarities
{% data variables.product.prodname_actions %} and Travis CI share certain similarities, and understanding these ahead of time can help smooth the migration process.	{% data variables.product.prodname_actions %} and Travis CI share certain similarities, and understanding these ahead of time can help smooth the migration process.
#### Using YAML syntax	#### Using YAML syntax
Travis CI and {% data variables.product.prodname_actions %} both use YAML to create jobs and workflows, and these files are stored in the code's repository. For more information on how {% data variables.product.prodname_actions %} uses YAML, see ["Creating a workflow file](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)."	Travis CI and {% data variables.product.prodname_actions %} both use YAML to create jobs and workflows, and these files are stored in the code's repository. For more information on how {% data variables.product.prodname_actions %} uses YAML, see ["Creating a workflow file](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)."
#### Custom environment variables	#### Custom environment variables
Travis CI lets you set environment variables and share them between stages. Similarly, {% data variables.product.prodname_actions %} lets you define environment variables for a step, job, or workflow. For more information, see ["Environment variables](/actions/reference/environment-variables)."	Travis CI lets you set environment variables and share them between stages. Similarly, {% data variables.product.prodname_actions %} lets you define environment variables for a step, job, or workflow. For more information, see ["Environment variables](/actions/reference/environment-variables)."
#### Default environment variables	#### Default environment variables


Travis CI and {% data variables.product.prodname_actions %} both include default environment variables that you can use in your YAML files. For {% data variables.product.prodname_actions %}, you can see these listed in "[Default environment variables](/actions/reference/environment-variables#default-environment-variables)."	Travis CI and {% data variables.product.prodname_actions %} both include default environment variables that you can use in your YAML files. For {% data variables.product.prodname_actions %}, you can see these listed in "[Default environment variables](/actions/reference/environment-variables#default-environment-variables)."


To help you get started, this table maps some of the common Travis CI variables to {% data variables.product.prodname_actions %} variables with similar functionality:

| Travis CI | {% data variables.product.prodname_actions %}| {% data variables.product.prodname_actions %} description |
| ---------------------|------------ |------------ |
| `CI` | [`CI`](/actions/reference/environment-variables#default-environment-variables) | Allows your software to identify that it is running within a CI workflow. Always set to `true`.|
| `TRAVIS` | [`GITHUB_ACTIONS`](/actions/reference/environment-variables#default-environment-variables) | Use `GITHUB_ACTIONS` to identify whether tests are being run locally or by {% data variables.product.prodname_actions %}. Always set to `true` when {% data variables.product.prodname_actions %} is running the workflow.|
| `TRAVIS_BRANCH` | [`github.head_ref`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) or [`github.ref`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) | Use `github.ref` to identify the branch or tag ref that triggered the workflow run. For example, `refs/heads/<branch_name>` or `refs/tags/<tag_name>`. Alternatvely, `github.head_ref` is the source branch of the pull request in a workflow run; this property is only available when the workflow event trigger is a `pull_request`.  |
| `TRAVIS_BUILD_DIR` | [`github.workspace`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) | Returns the default working directory for steps, and the default location of your repository when using the [`checkout`](https://github.com/actions/checkout) action. |
| `TRAVIS_BUILD_NUMBER` | [`GITHUB_RUN_NUMBER`](/actions/reference/environment-variables#default-environment-variables) | {% data reusables.github-actions.run_number_description %} |
| `TRAVIS_COMMIT` | [`GITHUB_SHA`](/actions/reference/environment-variables#default-environment-variables) | Returns the SHA of the commit that triggered the workflow. |
| `TRAVIS_EVENT_TYPE` | [`github.event_name`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) |  The name of the webhook event that triggered the workflow. For example, `pull_request` or `push`. |
| `TRAVIS_JOB_ID` | [`github.job`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) | The [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) of the current job. |
| `TRAVIS_OS_NAME` | [`runner.os`](/actions/reference/context-and-expression-syntax-for-github-actions#runner-context) | The operating system of the runner executing the job. Possible values are `Linux`, `Windows`, or `macOS`. |
| `TRAVIS_PULL_REQUEST` | [`github.event.pull_request.number`](/developers/webhooks-and-events/webhook-events-and-payloads#pull_request) | The pull request number. This property is only available when the workflow event trigger is a `pull_request`. |
| `TRAVIS_REPO_SLUG` | [`GITHUB_REPOSITORY`](/actions/reference/environment-variables#default-environment-variables) | The owner and repository name. For example, `octocat/Hello-World`. |
| `TRAVIS_TEST_RESULT` | [`job.status`](/actions/reference/context-and-expression-syntax-for-github-actions#job-context) | The current status of the job. Possible values are `success`, `failure`, or `cancelled`. |
| `USER` | [`GITHUB_ACTOR`](/actions/reference/environment-variables#default-environment-variables) | The name of the person or app that initiated the workflow. For example, `octocat`. |

#### Parallel job processing	#### Parallel job processing


Travis CI can use `stages` to run jobs in parallel. Similarly, {% data variables.product.prodname_actions %} runs `jobs` in parallel. For more information, see "[Creating dependent jobs](/actions/learn-github-actions/managing-complex-workflows#creating-dependent-jobs)."	Travis CI can use `stages` to run jobs in parallel. Similarly, {% data variables.product.prodname_actions %} runs `jobs` in parallel. For more information, see "[Creating dependent jobs](/actions/learn-github-actions/managing-complex-workflows#creating-dependent-jobs)."
#### Status badges	#### Status badges
Travis CI and {% data variables.product.prodname_actions %} both support status badges, which let you indicate whether a build is passing or failing.	Travis CI and {% data variables.product.prodname_actions %} both support status badges, which let you indicate whether a build is passing or failing.
For more information, see ["Adding a workflow status badge to your repository](/actions/managing-workflow-runs/adding-a-workflow-status-badge)."	For more information, see ["Adding a workflow status badge to your repository](/actions/managing-workflow-runs/adding-a-workflow-status-badge)."
#### Using a build matrix	#### Using a build matrix
Travis CI and {% data variables.product.prodname_actions %} both support a build matrix, allowing you to perform testing using combinations of operating systems and software packages. For more information, see "[Using a build matrix](/actions/learn-github-actions/managing-complex-workflows#using-a-build-matrix)."	Travis CI and {% data variables.product.prodname_actions %} both support a build matrix, allowing you to perform testing using combinations of operating systems and software packages. For more information, see "[Using a build matrix](/actions/learn-github-actions/managing-complex-workflows#using-a-build-matrix)."
Below is an example comparing the syntax for each system:	Below is an example comparing the syntax for each system:
<table>	<table>
<tr>	<tr>
<th>	<th>
Travis CI	Travis CI
</th>	</th>
<th>	<th>
{% data variables.product.prodname_actions %}	{% data variables.product.prodname_actions %}
</th>	</th>
</tr>	</tr>
<tr>	<tr>
<td class="d-table-cell v-align-top">	<td class="d-table-cell v-align-top">
{% raw %}	{% raw %}
```yaml	```yaml
matrix:	matrix:
  include:	  include:
    - rvm: 2.5	    - rvm: 2.5
    - rvm: 2.6.3	    - rvm: 2.6.3
```	```
{% endraw %}	{% endraw %}
</td>	</td>
<td class="d-table-cell v-align-top">	<td class="d-table-cell v-align-top">
{% raw %}	{% raw %}
```yaml	```yaml
jobs:	jobs:
  build:	  build:
    strategy:	    strategy:
      matrix:	      matrix:
        ruby: [2.5, 2.6.3]	        ruby: [2.5, 2.6.3]
```	```
{% endraw %}	{% endraw %}
</td>	</td>
</tr>	</tr>
</table>	</table>
#### Targeting specific branches	#### Targeting specific branches
Travis CI and {% data variables.product.prodname_actions %} both allow you to target your CI to a specific branch. For more information, see "[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)."	Travis CI and {% data variables.product.prodname_actions %} both allow you to target your CI to a specific branch. For more information, see "[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)."
Below is an example of the syntax for each system:	Below is an example of the syntax for each system:
<table>	<table>
<tr>	<tr>
<th>	<th>
Travis CI	Travis CI
</th>	</th>
<th>	<th>
{% data variables.product.prodname_actions %}	{% data variables.product.prodname_actions %}
</th>	</th>
</tr>	</tr>
<tr>	<tr>
<td class="d-table-cell v-align-top">	<td class="d-table-cell v-align-top">
{% raw %}	{% raw %}
```yaml	```yaml
branches:	branches:
  only:	  only:
    - main	    - main
    - 'mona/octocat'	    - 'mona/octocat'
```	```
{% endraw %}	{% endraw %}
</td>	</td>
<td class="d-table-cell v-align-top">	<td class="d-table-cell v-align-top">
{% raw %}	{% raw %}
```yaml	```yaml
on:	on:
  push:	  push:
    branches:	    branches:
      - main	      - main
      - 'mona/octocat'	      - 'mona/octocat'
```	```
{% endraw %}	{% endraw %}
</td>	</td>
</tr>	</tr>
</table>	</table>
#### Checking out submodules	#### Checking out submodules
Travis CI and {% data variables.product.prodname_actions %} both allow you to control whether submodules are included in the repository clone.	Travis CI and {% data variables.product.prodname_actions %} both allow you to control whether submodules are included in the repository clone.
Below is an example of the syntax for each system:	Below is an example of the syntax for each system:
<table>	<table>
<tr>	<tr>
<th>	<th>
Travis CI	Travis CI
</th>	</th>
<th>	<th>
{% data variables.product.prodname_actions %}	{% data variables.product.prodname_actions %}
</th>	</th>
</tr>	</tr>
<tr>	<tr>
<td class="d-table-cell v-align-top">	<td class="d-table-cell v-align-top">
{% raw %}	{% raw %}
```yaml	```yaml
git:	git:
  submodules: false	  submodules: false
```	```
{% endraw %}	{% endraw %}
</td>	</td>
<td class="d-table-cell v-align-top">	<td class="d-table-cell v-align-top">
{% raw %}	{% raw %}
```yaml	```yaml
- uses: actions/checkout@v2	- uses: actions/checkout@v2
  with:	  with:
    submodules: false	    submodules: false
```	```
{% endraw %}	{% endraw %}
</td>	</td>
</tr>	</tr>
</table>	</table>
#### Using environment variables in a matrix	#### Using environment variables in a matrix
Travis CI and {% data variables.product.prodname_actions %} can both add custom environment variables to a test matrix, which allows you to refer to the variable in a later step.	Travis CI and {% data variables.product.prodname_actions %} can both add custom environment variables to a test matrix, which allows you to refer to the variable in a later step.
In {% data variables.product.prodname_actions %}, you can use the `include` key to add custom environment variables to a matrix. {% data reusables.github-actions.matrix-variable-example %}	In {% data variables.product.prodname_actions %}, you can use the `include` key to add custom environment variables to a matrix. {% data reusables.github-actions.matrix-variable-example %}
### Key features in {% data variables.product.prodname_actions %}	### Key features in {% data variables.product.prodname_actions %}
When migrating from Travis CI, consider the following key features in {% data variables.product.prodname_actions %}:	When migrating from Travis CI, consider the following key features in {% data variables.product.prodname_actions %}:
#### Storing secrets	#### Storing secrets
{% data variables.product.prodname_actions %} allows you to store secrets and reference them in your jobs. {% data variables.product.prodname_actions %} organizations can limit which repositories can access organization secrets. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}Environment protection rules can require manual approval for a workflow to access environment secrets. {% endif %}For more information, see "[Encrypted secrets](/actions/reference/encrypted-secrets)."	{% data variables.product.prodname_actions %} allows you to store secrets and reference them in your jobs. {% data variables.product.prodname_actions %} organizations can limit which repositories can access organization secrets. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}Environment protection rules can require manual approval for a workflow to access environment secrets. {% endif %}For more information, see "[Encrypted secrets](/actions/reference/encrypted-secrets)."
#### Sharing files between jobs and workflows	#### Sharing files between jobs and workflows
{% data variables.product.prodname_actions %} includes integrated support for artifact storage, allowing you to share files between jobs in a workflow. You can also save the resulting files and share them with other workflows. For more information, see "[Sharing data between jobs](/actions/learn-github-actions/essential-features-of-github-actions#sharing-data-between-jobs)."	{% data variables.product.prodname_actions %} includes integrated support for artifact storage, allowing you to share files between jobs in a workflow. You can also save the resulting files and share them with other workflows. For more information, see "[Sharing data between jobs](/actions/learn-github-actions/essential-features-of-github-actions#sharing-data-between-jobs)."
#### Hosting your own runners	#### Hosting your own runners
If your jobs require specific hardware or software, {% data variables.product.prodname_actions %} allows you to host your own runners and send your jobs to them for processing. {% data variables.product.prodname_actions %} also lets you use policies to control how these runners are accessed, granting access at the organization or repository level. For more information, see ["Hosting your own runners](/actions/hosting-your-own-runners)."	If your jobs require specific hardware or software, {% data variables.product.prodname_actions %} allows you to host your own runners and send your jobs to them for processing. {% data variables.product.prodname_actions %} also lets you use policies to control how these runners are accessed, granting access at the organization or repository level. For more information, see ["Hosting your own runners](/actions/hosting-your-own-runners)."
#### Concurrent jobs and execution time	#### Concurrent jobs and execution time
The concurrent jobs and workflow execution times in {% data variables.product.prodname_actions %} can vary depending on your {% data variables.product.company_short %} plan. For more information, see "[Usage limits, billing, and administration](/actions/reference/usage-limits-billing-and-administration)."	The concurrent jobs and workflow execution times in {% data variables.product.prodname_actions %} can vary depending on your {% data variables.product.company_short %} plan. For more information, see "[Usage limits, billing, and administration](/actions/reference/usage-limits-billing-and-administration)."
#### Using different languages in {% data variables.product.prodname_actions %}	#### Using different languages in {% data variables.product.prodname_actions %}
When working with different languages in {% data variables.product.prodname_actions %}, you can create a step in your job to set up your language dependencies. For more information about working with a particular language, see the specific guide:	When working with different languages in {% data variables.product.prodname_actions %}, you can create a step in your job to set up your language dependencies. For more information about working with a particular language, see the specific guide:
  - [Building and testing Node.js](/actions/guides/building-and-testing-nodejs)	  - [Building and testing Node.js](/actions/guides/building-and-testing-nodejs)
  - [Building and testing PowerShell](/actions/guides/building-and-testing-powershell)	  - [Building and testing PowerShell](/actions/guides/building-and-testing-powershell)
  - [Building and testing Python](/actions/guides/building-and-testing-python)	  - [Building and testing Python](/actions/guides/building-and-testing-python)
  - [Building and testing Java with Maven](/actions/guides/building-and-testing-java-with-maven)	  - [Building and testing Java with Maven](/actions/guides/building-and-testing-java-with-maven)
  - [Building and testing Java with Gradle](/actions/guides/building-and-testing-java-with-gradle)	  - [Building and testing Java with Gradle](/actions/guides/building-and-testing-java-with-gradle)
  - [Building and testing Java with Ant](/actions/guides/building-and-testing-java-with-ant)	  - [Building and testing Java with Ant](/actions/guides/building-and-testing-java-with-ant)
### Executing scripts	### Executing scripts
{% data variables.product.prodname_actions %} can use `run` steps to run scripts or shell commands. To use a particular shell, you can specify the `shell` type when providing the path to the script. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."	{% data variables.product.prodname_actions %} can use `run` steps to run scripts or shell commands. To use a particular shell, you can specify the `shell` type when providing the path to the script. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."
For example:	For example:
```yaml	```yaml
steps:	steps:
  - name: Run build script	  - name: Run build script
    run: ./.github/scripts/build.sh	    run: ./.github/scripts/build.sh
    shell: bash	    shell: bash
```	```
### Error handling in {% data variables.product.prodname_actions %}	### Error handling in {% data variables.product.prodname_actions %}
When migrating to {% data variables.product.prodname_actions %}, there are different approaches to error handling that you might need to be aware of.	When migrating to {% data variables.product.prodname_actions %}, there are different approaches to error handling that you might need to be aware of.
#### Script error handling	#### Script error handling
{% data variables.product.prodname_actions %} stops a job immediately if one of the steps returns an error code. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)."	{% data variables.product.prodname_actions %} stops a job immediately if one of the steps returns an error code. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)."
#### Job error handling	#### Job error handling
{% data variables.product.prodname_actions %} uses `if` conditionals to execute jobs or steps in certain situations. For example, you can run a step when another step results in a `failure()`. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#example-using-status-check-functions)."  You can also use [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) to prevent a workflow run from stopping when a job fails.	{% data variables.product.prodname_actions %} uses `if` conditionals to execute jobs or steps in certain situations. For example, you can run a step when another step results in a `failure()`. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#example-using-status-check-functions)."  You can also use [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) to prevent a workflow run from stopping when a job fails.
### Migrating syntax for conditionals and expressions	### Migrating syntax for conditionals and expressions
To run jobs under conditional expressions, Travis CI and {% data variables.product.prodname_actions %} share a similar `if` condition syntax. {% data variables.product.prodname_actions %} lets you use the `if` conditional to prevent a job or step from running unless a condition is met. For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."	To run jobs under conditional expressions, Travis CI and {% data variables.product.prodname_actions %} share a similar `if` condition syntax. {% data variables.product.prodname_actions %} lets you use the `if` conditional to prevent a job or step from running unless a condition is met. For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."
This example demonstrates how an `if` conditional can control whether a step is executed:	This example demonstrates how an `if` conditional can control whether a step is executed:
```yaml	```yaml
jobs:	jobs:
  conditional:	  conditional:
    runs-on: ubuntu-latest	    runs-on: ubuntu-latest
    steps:	    steps:
      - run: echo "This step runs with str equals 'ABC' and num equals 123"	      - run: echo "This step runs with str equals 'ABC' and num equals 123"
        if: env.str == 'ABC' && env.num == 123	        if: env.str == 'ABC' && env.num == 123
```	```
### Migrating phases to steps	### Migrating phases to steps
Where Travis CI uses _phases_ to run _steps_, {% data variables.product.prodname_actions %} has _steps_ which execute _actions_. You can find prebuilt actions in the [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions), or you can create your own actions. For more information, see "[Building actions](/actions/building-actions)."	Where Travis CI uses _phases_ to run _steps_, {% data variables.product.prodname_actions %} has _steps_ which execute _actions_. You can find prebuilt actions in the [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions), or you can create your own actions. For more information, see "[Building actions](/actions/building-actions)."
Below is an example of the syntax for each system:	Below is an example of the syntax for each system:
<table>	<table>
<tr>	<tr>
<th>	<th>
Travis CI	Travis CI
</th>	</th>
<th>	<th>
{% data variables.product.prodname_actions %}	{% data variables.product.prodname_actions %}
</th>	</th>
</tr>	</tr>
<tr>	<tr>
<td class="d-table-cell v-align-top">	<td class="d-table-cell v-align-top">
{% raw %}	{% raw %}
```yaml	```yaml
language: python	language: python
python:	python:
  - "3.7"	  - "3.7"
script:	script:
  - python script.py	  - python script.py
```	```
{% endraw %}	{% endraw %}
</td>	</td>
<td class="d-table-cell v-align-top">	<td class="d-table-cell v-align-top">
{% raw %}	{% raw %}
```yaml	```yaml
jobs:	jobs:
  run_python:	  run_python:
    runs-on: ubuntu-latest	    runs-on: ubuntu-latest
    steps:	    steps:
      - uses: actions/setup-python@v2	      - uses: actions/setup-python@v2
        with:	        with:
          python-version: '3.7'	          python-version: '3.7'
          architecture: 'x64'	          architecture: 'x64'
      - run: python script.py	      - run: python script.py
```	```
{% endraw %}	{% endraw %}
</td>	</td>
</tr>	</tr>
</table>	</table>
### Caching dependencies	### Caching dependencies
Travis CI and {% data variables.product.prodname_actions %} let you manually cache dependencies for later reuse. This example demonstrates the cache syntax for each system.	Travis CI and {% data variables.product.prodname_actions %} let you manually cache dependencies for later reuse. This example demonstrates the cache syntax for each system.
<table>	<table>
<tr>	<tr>
<th>	<th>
Travis CI	Travis CI
</th>	</th>
<th>	<th>
GitHub Actions	GitHub Actions
</th>	</th>
</tr>	</tr>
<tr>	<tr>
<td class="d-table-cell v-align-top">	<td class="d-table-cell v-align-top">
{% raw %}	{% raw %}
```yaml	```yaml
language: node_js	language: node_js
cache: npm	cache: npm
```	```
{% endraw %}	{% endraw %}
</td>	</td>
<td class="d-table-cell v-align-top">	<td class="d-table-cell v-align-top">
{% raw %}	{% raw %}
```yaml	```yaml
- name: Cache node modules	- name: Cache node modules
  uses: actions/cache@v2	  uses: actions/cache@v2
  with:	  with:
    path: ~/.npm	    path: ~/.npm
    key: v1-npm-deps-${{ hashFiles('**/package-lock.json') }}	    key: v1-npm-deps-${{ hashFiles('**/package-lock.json') }}
    restore-keys: v1-npm-deps-	    restore-keys: v1-npm-deps-
```	```
{% endraw %}	{% endraw %}
</td>	</td>
</tr>	</tr>
</table>	</table>
{% data variables.product.prodname_actions %} caching is only applicable to {% data variables.product.prodname_dotcom %}-hosted runners.  For more information, see "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Caching dependencies to speed up workflows</a>."	{% data variables.product.prodname_actions %} caching is only applicable to {% data variables.product.prodname_dotcom %}-hosted runners.  For more information, see "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Caching dependencies to speed up workflows</a>."
### Examples of common tasks	### Examples of common tasks
This section compares how {% data variables.product.prodname_actions %} and Travis CI perform common tasks.	This section compares how {% data variables.product.prodname_actions %} and Travis CI perform common tasks.
#### Configuring environment variables	#### Configuring environment variables
You can create custom environment variables in a {% data variables.product.prodname_actions %} job. For example:	You can create custom environment variables in a {% data variables.product.prodname_actions %} job. For example:
<table>	<table>
<tr>	<tr>
<th>	<th>
Travis CI	Travis CI
</th>	</th>
<th>	<th>
{% data variables.product.prodname_actions %} Workflow	{% data variables.product.prodname_actions %} Workflow
</th>	</th>
</tr>	</tr>
<tr>	<tr>
<td>	<td>
```yaml	```yaml
env:	env:
  - MAVEN_PATH="/usr/local/maven"	  - MAVEN_PATH="/usr/local/maven"
```	```
</td>	</td>
<td>	<td>
```yaml	```yaml
jobs:	jobs:
  maven-build:	  maven-build:
    env:	    env:
      MAVEN_PATH: '/usr/local/maven'	      MAVEN_PATH: '/usr/local/maven'
```	```
</td>	</td>
</tr>	</tr>
</table>	</table>
#### Building with Node.js	#### Building with Node.js
<table>	<table>
<tr>	<tr>
<th>	<th>
Travis CI	Travis CI
</th>	</th>
<th>	<th>
{% data variables.product.prodname_actions %} Workflow	{% data variables.product.prodname_actions %} Workflow
</th>	</th>
</tr>	</tr>
<tr>	<tr>
<td>	<td>
{% raw %}	{% raw %}
```yaml	```yaml
install:	install:
  - npm install	  - npm install
script:	script:
  - npm run build	  - npm run build
  - npm test	  - npm test
```	```
{% endraw %}	{% endraw %}
</td>	</td>
<td>	<td>
{% raw %}	{% raw %}
```yaml	```yaml
name: Node.js CI	name: Node.js CI
on: [push]	on: [push]
jobs:	jobs:
  build:	  build:
    runs-on: ubuntu-latest	    runs-on: ubuntu-latest
    steps:	    steps:
      - uses: actions/checkout@v2	      - uses: actions/checkout@v2
      - name: Use Node.js	      - name: Use Node.js
        uses: actions/setup-node@v1	        uses: actions/setup-node@v1
        with:	        with:
          node-version: '12.x'	          node-version: '12.x'
      - run: npm install	      - run: npm install
      - run: npm run build	      - run: npm run build
      - run: npm test	      - run: npm test
```	```
{% endraw %}	{% endraw %}
</td>	</td>
</tr>	</tr>
</table>	</table>
### Next steps	### Next steps
To continue learning about the main features of  {% data variables.product.prodname_actions %}, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."	To continue learning about the main features of  {% data variables.product.prodname_actions %}, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."
  4  
content/actions/reference/workflow-syntax-for-github-actions.md
---	---
title: Workflow syntax for GitHub Actions	title: Workflow syntax for GitHub Actions
shortTitle: Workflow syntax	shortTitle: Workflow syntax
intro: A workflow is a configurable automated process made up of one or more jobs. You must create a YAML file to define your workflow configuration.	intro: A workflow is a configurable automated process made up of one or more jobs. You must create a YAML file to define your workflow configuration.
product: '{% data reusables.gated-features.actions %}'	product: '{% data reusables.gated-features.actions %}'
redirect_from:	redirect_from:
  - /articles/workflow-syntax-for-github-actions	  - /articles/workflow-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions	  - /github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions	  - /actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
versions:	versions:
  free-pro-team: '*'	  free-pro-team: '*'
  enterprise-server: '>=2.22'	  enterprise-server: '>=2.22'
  github-ae: '*'	  github-ae: '*'
---	---
{% data reusables.actions.enterprise-beta %}	{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}	{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}	{% data reusables.actions.ae-beta %}
### About YAML syntax for workflows	### About YAML syntax for workflows
Workflow files use YAML syntax, and must have either a `.yml` or `.yaml` file extension. {% data reusables.actions.learn-more-about-yaml %}	Workflow files use YAML syntax, and must have either a `.yml` or `.yaml` file extension. {% data reusables.actions.learn-more-about-yaml %}
You must store workflow files in the `.github/workflows` directory of your repository.	You must store workflow files in the `.github/workflows` directory of your repository.
### `name`	### `name`
The name of your workflow. {% data variables.product.prodname_dotcom %} displays the names of your workflows on your repository's actions page. If you omit `name`, {% data variables.product.prodname_dotcom %} sets it to the workflow file path relative to the root of the repository.	The name of your workflow. {% data variables.product.prodname_dotcom %} displays the names of your workflows on your repository's actions page. If you omit `name`, {% data variables.product.prodname_dotcom %} sets it to the workflow file path relative to the root of the repository.
### `on`	### `on`
**Required**. The name of the {% data variables.product.prodname_dotcom %} event that triggers the workflow. You can provide a single event `string`, `array` of events, `array` of event `types`, or an event configuration `map` that schedules a workflow or restricts the execution of a workflow to specific files, tags, or branch changes. For a list of available events, see "[Events that trigger workflows](/articles/events-that-trigger-workflows)."	**Required**. The name of the {% data variables.product.prodname_dotcom %} event that triggers the workflow. You can provide a single event `string`, `array` of events, `array` of event `types`, or an event configuration `map` that schedules a workflow or restricts the execution of a workflow to specific files, tags, or branch changes. For a list of available events, see "[Events that trigger workflows](/articles/events-that-trigger-workflows)."
{% data reusables.github-actions.actions-on-examples %}	{% data reusables.github-actions.actions-on-examples %}
### `on.<event_name>.types`	### `on.<event_name>.types`
Selects the types of activity that will trigger a workflow run. Most GitHub events are triggered by more than one type of activity.  For example, the event for the release resource is triggered when a release is `published`, `unpublished`, `created`, `edited`, `deleted`, or `prereleased`. The `types` keyword enables you to narrow down activity that causes the workflow to run. When only one activity type triggers a webhook event, the `types` keyword is unnecessary.	Selects the types of activity that will trigger a workflow run. Most GitHub events are triggered by more than one type of activity.  For example, the event for the release resource is triggered when a release is `published`, `unpublished`, `created`, `edited`, `deleted`, or `prereleased`. The `types` keyword enables you to narrow down activity that causes the workflow to run. When only one activity type triggers a webhook event, the `types` keyword is unnecessary.
You can use an array of event `types`. For more information about each event and their activity types, see "[Events that trigger workflows](/articles/events-that-trigger-workflows#webhook-events)."	You can use an array of event `types`. For more information about each event and their activity types, see "[Events that trigger workflows](/articles/events-that-trigger-workflows#webhook-events)."
```yaml	```yaml
# Trigger the workflow on pull request activity	# Trigger the workflow on pull request activity
on:	on:
  release:	  release:
    # Only use the types keyword to narrow down the activity types that will trigger your workflow.	    # Only use the types keyword to narrow down the activity types that will trigger your workflow.
    types: [published, created, edited]	    types: [published, created, edited]
```	```
### `on.<push|pull_request>.<branches|tags>`	### `on.<push|pull_request>.<branches|tags>`
When using the `push` and `pull_request` events, you can configure a workflow to run on specific branches or tags. For a `pull_request` event, only branches and tags on the base are evaluated. If you define only `tags` or only `branches`, the workflow won't run for events affecting the undefined Git ref.	When using the `push` and `pull_request` events, you can configure a workflow to run on specific branches or tags. For a `pull_request` event, only branches and tags on the base are evaluated. If you define only `tags` or only `branches`, the workflow won't run for events affecting the undefined Git ref.
The `branches`, `branches-ignore`, `tags`, and `tags-ignore` keywords accept glob patterns that use the `*` and `**` wildcard characters to match more than one branch or tag name. For more information, see the "[Filter pattern cheat sheet](#filter-pattern-cheat-sheet)."	The `branches`, `branches-ignore`, `tags`, and `tags-ignore` keywords accept glob patterns that use the `*` and `**` wildcard characters to match more than one branch or tag name. For more information, see the "[Filter pattern cheat sheet](#filter-pattern-cheat-sheet)."
#### Example including branches and tags	#### Example including branches and tags
The patterns defined in `branches` and `tags` are evaluated against the Git ref's name. For example, defining the pattern `mona/octocat` in `branches` will match the `refs/heads/mona/octocat` Git ref. The pattern `releases/**` will match the `refs/heads/releases/10` Git ref.	The patterns defined in `branches` and `tags` are evaluated against the Git ref's name. For example, defining the pattern `mona/octocat` in `branches` will match the `refs/heads/mona/octocat` Git ref. The pattern `releases/**` will match the `refs/heads/releases/10` Git ref.
```yaml	```yaml
on:	on:
  push:	  push:
    # Sequence of patterns matched against refs/heads	    # Sequence of patterns matched against refs/heads
    branches:    	    branches:    
      # Push events on main branch	      # Push events on main branch
      - main	      - main
      # Push events to branches matching refs/heads/mona/octocat	      # Push events to branches matching refs/heads/mona/octocat
      - 'mona/octocat'	      - 'mona/octocat'
      # Push events to branches matching refs/heads/releases/10	      # Push events to branches matching refs/heads/releases/10
      - 'releases/**'	      - 'releases/**'
    # Sequence of patterns matched against refs/tags	    # Sequence of patterns matched against refs/tags
    tags:        	    tags:        
      - v1             # Push events to v1 tag	      - v1             # Push events to v1 tag
      - v1.*           # Push events to v1.0, v1.1, and v1.9 tags	      - v1.*           # Push events to v1.0, v1.1, and v1.9 tags
```	```
#### Example ignoring branches and tags	#### Example ignoring branches and tags
Anytime a pattern matches the `branches-ignore` or `tags-ignore` pattern, the workflow will not run. The patterns defined in `branches-ignore` and `tags-ignore` are evaluated against the Git ref's name. For example, defining the pattern `mona/octocat` in `branches` will match the `refs/heads/mona/octocat` Git ref. The pattern `releases/**-alpha` in `branches` will match the `refs/releases/beta/3-alpha` Git ref.	Anytime a pattern matches the `branches-ignore` or `tags-ignore` pattern, the workflow will not run. The patterns defined in `branches-ignore` and `tags-ignore` are evaluated against the Git ref's name. For example, defining the pattern `mona/octocat` in `branches` will match the `refs/heads/mona/octocat` Git ref. The pattern `releases/**-alpha` in `branches` will match the `refs/releases/beta/3-alpha` Git ref.
```yaml	```yaml
on:	on:
  push:	  push:
    # Sequence of patterns matched against refs/heads	    # Sequence of patterns matched against refs/heads
    branches-ignore:	    branches-ignore:
      # Push events to branches matching refs/heads/mona/octocat	      # Push events to branches matching refs/heads/mona/octocat
      - 'mona/octocat'	      - 'mona/octocat'
      # Push events to branches matching refs/heads/releases/beta/3-alpha	      # Push events to branches matching refs/heads/releases/beta/3-alpha
      - 'releases/**-alpha'	      - 'releases/**-alpha'
    # Sequence of patterns matched against refs/tags	    # Sequence of patterns matched against refs/tags
    tags-ignore:	    tags-ignore:
      - v1.*           # Push events to tags v1.0, v1.1, and v1.9	      - v1.*           # Push events to tags v1.0, v1.1, and v1.9
```	```
#### Excluding branches and tags	#### Excluding branches and tags
You can use two types of filters to prevent a workflow from running on pushes and pull requests to tags and branches.	You can use two types of filters to prevent a workflow from running on pushes and pull requests to tags and branches.
- `branches` or `branches-ignore` - You cannot use both the `branches` and `branches-ignore` filters for the same event in a workflow. Use the `branches` filter when you need to filter branches for positive matches and exclude branches. Use the `branches-ignore` filter when you only need to exclude branch names.	- `branches` or `branches-ignore` - You cannot use both the `branches` and `branches-ignore` filters for the same event in a workflow. Use the `branches` filter when you need to filter branches for positive matches and exclude branches. Use the `branches-ignore` filter when you only need to exclude branch names.
- `tags` or `tags-ignore` - You cannot use both the `tags` and `tags-ignore` filters for the same event in a workflow. Use the `tags` filter when you need to filter tags for positive matches and exclude tags. Use the `tags-ignore` filter when you only need to exclude tag names.	- `tags` or `tags-ignore` - You cannot use both the `tags` and `tags-ignore` filters for the same event in a workflow. Use the `tags` filter when you need to filter tags for positive matches and exclude tags. Use the `tags-ignore` filter when you only need to exclude tag names.
#### Example using positive and negative patterns	#### Example using positive and negative patterns
You can exclude `tags` and `branches` using the `!` character. The order that you define patterns matters.	You can exclude `tags` and `branches` using the `!` character. The order that you define patterns matters.
  - A matching negative pattern (prefixed with `!`) after a positive match will exclude the Git ref.	  - A matching negative pattern (prefixed with `!`) after a positive match will exclude the Git ref.
  - A matching positive pattern after a negative match will include the Git ref again.	  - A matching positive pattern after a negative match will include the Git ref again.
The following workflow will run on pushes to `releases/10` or `releases/beta/mona`, but not on `releases/10-alpha` or `releases/beta/3-alpha` because the negative pattern `!releases/**-alpha` follows the positive pattern.	The following workflow will run on pushes to `releases/10` or `releases/beta/mona`, but not on `releases/10-alpha` or `releases/beta/3-alpha` because the negative pattern `!releases/**-alpha` follows the positive pattern.
```yaml	```yaml
on:	on:
  push:	  push:
    branches:    	    branches:    
      - 'releases/**'	      - 'releases/**'
      - '!releases/**-alpha'	      - '!releases/**-alpha'
```	```
### `on.<push|pull_request>.paths`	### `on.<push|pull_request>.paths`
When using the `push` and `pull_request` events, you can configure a workflow to run when at least one file does not match `paths-ignore` or at least one modified file matches the configured `paths`. Path filters are not evaluated for pushes to tags.	When using the `push` and `pull_request` events, you can configure a workflow to run when at least one file does not match `paths-ignore` or at least one modified file matches the configured `paths`. Path filters are not evaluated for pushes to tags.
The `paths-ignore` and `paths` keywords accept glob patterns that use the `*` and `**` wildcard characters to match more than one path name. For more information, see the "[Filter pattern cheat sheet](#filter-pattern-cheat-sheet)."	The `paths-ignore` and `paths` keywords accept glob patterns that use the `*` and `**` wildcard characters to match more than one path name. For more information, see the "[Filter pattern cheat sheet](#filter-pattern-cheat-sheet)."
#### Example ignoring paths	#### Example ignoring paths
When all the path names match patterns in `paths-ignore`, the workflow will not run. {% data variables.product.prodname_dotcom %} evaluates patterns defined in `paths-ignore` against the path name. A workflow with the following path filter will only run on `push` events that include at least one file outside the `docs` directory at the root of the repository.	When all the path names match patterns in `paths-ignore`, the workflow will not run. {% data variables.product.prodname_dotcom %} evaluates patterns defined in `paths-ignore` against the path name. A workflow with the following path filter will only run on `push` events that include at least one file outside the `docs` directory at the root of the repository.
```yaml	```yaml
on:	on:
  push:	  push:
    paths-ignore:	    paths-ignore:
      - 'docs/**'	      - 'docs/**'
```	```
#### Example including paths	#### Example including paths
If at least one path matches a pattern in the `paths` filter, the workflow runs. To trigger a build anytime you push a JavaScript file, you can use a wildcard pattern.	If at least one path matches a pattern in the `paths` filter, the workflow runs. To trigger a build anytime you push a JavaScript file, you can use a wildcard pattern.
```yaml	```yaml
on:	on:
  push:	  push:
    paths:	    paths:
      - '**.js'	      - '**.js'
```	```
#### Excluding paths	#### Excluding paths
You can exclude paths using two types of filters. You cannot use both of these filters for the same event in a workflow.	You can exclude paths using two types of filters. You cannot use both of these filters for the same event in a workflow.
- `paths-ignore` - Use the `paths-ignore` filter when you only need to exclude path names.	- `paths-ignore` - Use the `paths-ignore` filter when you only need to exclude path names.
- `paths` - Use the `paths` filter when you need to filter paths for positive matches and exclude paths.	- `paths` - Use the `paths` filter when you need to filter paths for positive matches and exclude paths.
#### Example using positive and negative patterns	#### Example using positive and negative patterns
You can exclude `paths` using the `!` character. The order that you define patterns matters:	You can exclude `paths` using the `!` character. The order that you define patterns matters:
  - A matching negative pattern (prefixed with `!`) after a positive match will exclude the path.	  - A matching negative pattern (prefixed with `!`) after a positive match will exclude the path.
  - A matching positive pattern after a negative match will include the path again.	  - A matching positive pattern after a negative match will include the path again.
This example runs anytime the `push` event includes a file in the `sub-project` directory or its subdirectories, unless the file is in the `sub-project/docs` directory. For example, a push that changed `sub-project/index.js` or `sub-project/src/index.js` will trigger a workflow run, but a push changing only `sub-project/docs/readme.md` will not.	This example runs anytime the `push` event includes a file in the `sub-project` directory or its subdirectories, unless the file is in the `sub-project/docs` directory. For example, a push that changed `sub-project/index.js` or `sub-project/src/index.js` will trigger a workflow run, but a push changing only `sub-project/docs/readme.md` will not.
```yaml	```yaml
on:	on:
  push:	  push:
    paths:	    paths:
      - 'sub-project/**'	      - 'sub-project/**'
      - '!sub-project/docs/**'	      - '!sub-project/docs/**'
```	```
#### Git diff comparisons	#### Git diff comparisons
{% note %}	{% note %}
**Note:** If you push more than 1,000 commits, or if {% data variables.product.prodname_dotcom %} does not generate the diff due to a timeout (diffs that are too large diffs), the workflow will always run.	**Note:** If you push more than 1,000 commits, or if {% data variables.product.prodname_dotcom %} does not generate the diff due to a timeout (diffs that are too large diffs), the workflow will always run.
{% endnote %}	{% endnote %}
The filter determines if a workflow should run by evaluating the changed files and running them against the `paths-ignore` or `paths` list. If there are no files changed, the workflow will not run.	The filter determines if a workflow should run by evaluating the changed files and running them against the `paths-ignore` or `paths` list. If there are no files changed, the workflow will not run.
{% data variables.product.prodname_dotcom %} generates the list of changed files using two-dot diffs for pushes and three-dot diffs for pull requests:	{% data variables.product.prodname_dotcom %} generates the list of changed files using two-dot diffs for pushes and three-dot diffs for pull requests:
- **Pull requests:** Three-dot diffs are a comparison between the most recent version of the topic branch and the commit where the topic branch was last synced with the base branch.	- **Pull requests:** Three-dot diffs are a comparison between the most recent version of the topic branch and the commit where the topic branch was last synced with the base branch.
- **Pushes to existing branches:** A two-dot diff compares the head and base SHAs directly with each other.	- **Pushes to existing branches:** A two-dot diff compares the head and base SHAs directly with each other.
- **Pushes to new branches:** A two-dot diff against the parent of the ancestor of the deepest commit pushed.	- **Pushes to new branches:** A two-dot diff against the parent of the ancestor of the deepest commit pushed.
For more information, see "[About comparing branches in pull requests](/articles/about-comparing-branches-in-pull-requests)."	For more information, see "[About comparing branches in pull requests](/articles/about-comparing-branches-in-pull-requests)."
### `on.schedule`	### `on.schedule`
{% data reusables.repositories.actions-scheduled-workflow-example %}	{% data reusables.repositories.actions-scheduled-workflow-example %}
For more information about cron syntax, see "[Events that trigger workflows](/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows#scheduled-events)."	For more information about cron syntax, see "[Events that trigger workflows](/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows#scheduled-events)."
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}	{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
### `permissions`	### `permissions`
You can modify the default permissions granted to the `GITHUB_TOKEN`, adding or removing access as required, so that you only allow the minimum required access. For more information, see "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)."	You can modify the default permissions granted to the `GITHUB_TOKEN`, adding or removing access as required, so that you only allow the minimum required access. For more information, see "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)."
You can use `permissions` either as a top-level key, to apply to all jobs in the workflow, or within specific jobs. When you add the `permissions` key within a specific job, all actions and run commands within that job that use the `GITHUB_TOKEN` gain the access rights you specify.  For more information, see [`jobs.<job_id>.permissions`](#jobsjob_idpermissions).	You can use `permissions` either as a top-level key, to apply to all jobs in the workflow, or within specific jobs. When you add the `permissions` key within a specific job, all actions and run commands within that job that use the `GITHUB_TOKEN` gain the access rights you specify.  For more information, see [`jobs.<job_id>.permissions`](#jobsjob_idpermissions).
{% data reusables.github-actions.github-token-available-permissions %}	{% data reusables.github-actions.github-token-available-permissions %}
{% data reusables.github-actions.forked-write-permission %}	{% data reusables.github-actions.forked-write-permission %}
#### Example	#### Example
This example shows permissions being set for the `GITHUB_TOKEN` that will apply to all jobs in the workflow. All permissions are granted read access.	This example shows permissions being set for the `GITHUB_TOKEN` that will apply to all jobs in the workflow. All permissions are granted read access.
```yaml	```yaml
name: "My workflow"	name: "My workflow"
on: [ push ]	on: [ push ]
permissions: read-all	permissions: read-all
jobs:	jobs:
  ...	  ...
```	```
{% endif %}	{% endif %}
### `env`	### `env`
A `map` of environment variables that are available to the steps of all jobs in the workflow. You can also set environment variables that are only available to the steps of a single job or to a single step. For more information, see [`jobs.<job_id>.env`](#jobsjob_idenv) and [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).	A `map` of environment variables that are available to the steps of all jobs in the workflow. You can also set environment variables that are only available to the steps of a single job or to a single step. For more information, see [`jobs.<job_id>.env`](#jobsjob_idenv) and [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).
{% data reusables.repositories.actions-env-var-note %}	{% data reusables.repositories.actions-env-var-note %}
#### Example	#### Example
```yaml	```yaml
env:	env:
  SERVER: production	  SERVER: production
```	```
### `defaults`	### `defaults`
A `map` of default settings that will apply to all jobs in the workflow. You can also set default settings that are only available to a job. For more information, see [`jobs.<job_id>.defaults`](#jobsjob_iddefaults).	A `map` of default settings that will apply to all jobs in the workflow. You can also set default settings that are only available to a job. For more information, see [`jobs.<job_id>.defaults`](#jobsjob_iddefaults).
{% data reusables.github-actions.defaults-override %}	{% data reusables.github-actions.defaults-override %}
### `defaults.run`	### `defaults.run`
You can provide default `shell` and `working-directory` options for all [`run`](#jobsjob_idstepsrun) steps in a workflow. You can also set default settings for `run` that are only available to a job. For more information, see [`jobs.<job_id>.defaults.run`](#jobsjob_iddefaultsrun). You cannot use contexts or expressions in this keyword.	You can provide default `shell` and `working-directory` options for all [`run`](#jobsjob_idstepsrun) steps in a workflow. You can also set default settings for `run` that are only available to a job. For more information, see [`jobs.<job_id>.defaults.run`](#jobsjob_iddefaultsrun). You cannot use contexts or expressions in this keyword.
{% data reusables.github-actions.defaults-override %}	{% data reusables.github-actions.defaults-override %}
#### Example	#### Example
```yaml	```yaml
defaults:	defaults:
  run:	  run:
    shell: bash	    shell: bash
    working-directory: scripts	    working-directory: scripts
```	```
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}	{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
### `concurrency`	### `concurrency`
{% data reusables.actions.concurrency-beta %}	{% data reusables.actions.concurrency-beta %}
Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time. A concurrency group can be any string or expression. The expression can only use the `github` context. For more information about expressions, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."	Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time. A concurrency group can be any string or expression. The expression can only use the `github` context. For more information about expressions, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."
You can also specify `concurrency` at the job level. For more information, see [`jobs.<job_id>.concurrency`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idconcurrency).	You can also specify `concurrency` at the job level. For more information, see [`jobs.<job_id>.concurrency`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idconcurrency).
{% data reusables.actions.actions-group-concurrency %}	{% data reusables.actions.actions-group-concurrency %}
{% endif %}	{% endif %}
### `jobs`	### `jobs`
A workflow run is made up of one or more jobs. Jobs run in parallel by default. To run jobs sequentially, you can define dependencies on other jobs using the `jobs.<job_id>.needs` keyword.	A workflow run is made up of one or more jobs. Jobs run in parallel by default. To run jobs sequentially, you can define dependencies on other jobs using the `jobs.<job_id>.needs` keyword.
Each job runs in a runner environment specified by `runs-on`.	Each job runs in a runner environment specified by `runs-on`.
You can run an unlimited number of jobs as long as you are within the workflow usage limits. For more information, see "[Usage limits and billing](/actions/reference/usage-limits-billing-and-administration)" for {% data variables.product.prodname_dotcom %}-hosted runners and "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)" for self-hosted runner usage limits.	You can run an unlimited number of jobs as long as you are within the workflow usage limits. For more information, see "[Usage limits and billing](/actions/reference/usage-limits-billing-and-administration)" for {% data variables.product.prodname_dotcom %}-hosted runners and "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)" for self-hosted runner usage limits.
If you need to find the unique identifier of a job running in a workflow run, you can use the {% data variables.product.prodname_dotcom %} API. For more information, see "[Workflow Jobs](/rest/reference/actions#workflow-jobs)."	If you need to find the unique identifier of a job running in a workflow run, you can use the {% data variables.product.prodname_dotcom %} API. For more information, see "[Workflow Jobs](/rest/reference/actions#workflow-jobs)."


### `jobs.<job_id>`	### `jobs.<job_id>`


Each job must have an id to associate with the job. The key `job_id` is a string and its value is a map of the job's configuration data. You must replace `<job_id>` with a string that is unique to the `jobs` object. The `<job_id>` must start with a letter or `_` and contain only alphanumeric characters, `-`, or `_`.	You must create an identifier for each job by giving it a unique name. The key `job_id` is a string and its value is a map of the job's configuration data. You must replace `<job_id>` with a string that is unique to the `jobs` object. The `<job_id>` must start with a letter or `_` and contain only alphanumeric characters, `-`, or `_`.


#### Example	#### Example


In this example, two jobs have been created, and their `job_id` values are `my_first_job` and `my_second_job`.

```yaml	```yaml
jobs:	jobs:
  my_first_job:	  my_first_job:
    name: My first job	    name: My first job
  my_second_job:	  my_second_job:
    name: My second job	    name: My second job
```	```
### `jobs.<job_id>.name`	### `jobs.<job_id>.name`
The name of the job displayed on {% data variables.product.prodname_dotcom %}.	The name of the job displayed on {% data variables.product.prodname_dotcom %}.
### `jobs.<job_id>.needs`	### `jobs.<job_id>.needs`
Identifies any jobs that must complete successfully before this job will run. It can be a string or array of strings. If a job fails, all jobs that need it are skipped unless the jobs use a conditional expression that causes the job to continue.	Identifies any jobs that must complete successfully before this job will run. It can be a string or array of strings. If a job fails, all jobs that need it are skipped unless the jobs use a conditional expression that causes the job to continue.
#### Example requiring dependent jobs to be successful	#### Example requiring dependent jobs to be successful
```yaml	```yaml
jobs:	jobs:
  job1:	  job1:
  job2:	  job2:
    needs: job1	    needs: job1
  job3:	  job3:
    needs: [job1, job2]	    needs: [job1, job2]
```	```
In this example, `job1` must complete successfully before `job2` begins, and `job3` waits for both `job1` and `job2` to complete.	In this example, `job1` must complete successfully before `job2` begins, and `job3` waits for both `job1` and `job2` to complete.
The jobs in this example run sequentially:	The jobs in this example run sequentially:
1. `job1`	1. `job1`
2. `job2`	2. `job2`
3. `job3`	3. `job3`
#### Example not requiring dependent jobs to be successful	#### Example not requiring dependent jobs to be successful
```yaml	```yaml
jobs:	jobs:
  job1:	  job1:
  job2:	  job2:
    needs: job1	    needs: job1
  job3:	  job3:
    if: always()	    if: always()
    needs: [job1, job2]	    needs: [job1, job2]
```	```
In this example, `job3` uses the `always()` conditional expression so that it always runs after `job1` and `job2` have completed, regardless of whether they were successful. For more information, see "[Context and expression syntax](/actions/reference/context-and-expression-syntax-for-github-actions#job-status-check-functions)."	In this example, `job3` uses the `always()` conditional expression so that it always runs after `job1` and `job2` have completed, regardless of whether they were successful. For more information, see "[Context and expression syntax](/actions/reference/context-and-expression-syntax-for-github-actions#job-status-check-functions)."
### `jobs.<job_id>.runs-on`	### `jobs.<job_id>.runs-on`
**Required**. The type of machine to run the job on. The machine can be either a {% data variables.product.prodname_dotcom %}-hosted runner or a self-hosted runner.	**Required**. The type of machine to run the job on. The machine can be either a {% data variables.product.prodname_dotcom %}-hosted runner or a self-hosted runner.
{% if currentVersion == "github-ae@latest" %}	{% if currentVersion == "github-ae@latest" %}
#### {% data variables.actions.hosted_runner %}s	#### {% data variables.actions.hosted_runner %}s
If you use an {% data variables.actions.hosted_runner %}, each job runs in a fresh instance of a virtual environment specified by `runs-on`.	If you use an {% data variables.actions.hosted_runner %}, each job runs in a fresh instance of a virtual environment specified by `runs-on`.
##### Example	##### Example
```yaml	```yaml
runs-on: [AE-runner-for-CI]	runs-on: [AE-runner-for-CI]
```	```
For more information, see "[About {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/about-ae-hosted-runners)."	For more information, see "[About {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/about-ae-hosted-runners)."
{% else %}	{% else %}
{% data reusables.actions.enterprise-github-hosted-runners %}	{% data reusables.actions.enterprise-github-hosted-runners %}
#### {% data variables.product.prodname_dotcom %}-hosted runners	#### {% data variables.product.prodname_dotcom %}-hosted runners
If you use a {% data variables.product.prodname_dotcom %}-hosted runner, each job runs in a fresh instance of a virtual environment specified by `runs-on`.	If you use a {% data variables.product.prodname_dotcom %}-hosted runner, each job runs in a fresh instance of a virtual environment specified by `runs-on`.
Available {% data variables.product.prodname_dotcom %}-hosted runner types are:	Available {% data variables.product.prodname_dotcom %}-hosted runner types are:
{% data reusables.github-actions.supported-github-runners %}	{% data reusables.github-actions.supported-github-runners %}
{% data reusables.github-actions.macos-runner-preview %}	{% data reusables.github-actions.macos-runner-preview %}
##### Example	##### Example
```yaml	```yaml
runs-on: ubuntu-latest	runs-on: ubuntu-latest
```	```
For more information, see "[Virtual environments for {% data variables.product.prodname_dotcom %}-hosted runners](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)."	For more information, see "[Virtual environments for {% data variables.product.prodname_dotcom %}-hosted runners](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)."
{% endif %}	{% endif %}
#### Self-hosted runners	#### Self-hosted runners
{% data reusables.actions.ae-self-hosted-runners-notice %}	{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.github-actions.self-hosted-runner-labels-runs-on %}	{% data reusables.github-actions.self-hosted-runner-labels-runs-on %}
##### Example	##### Example
```yaml	```yaml
runs-on: [self-hosted, linux]	runs-on: [self-hosted, linux]
```	```
For more information, see "[About self-hosted runners](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)" and "[Using self-hosted runners in a workflow](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)."	For more information, see "[About self-hosted runners](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)" and "[Using self-hosted runners in a workflow](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)."
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}	{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
### `jobs.<job_id>.permissions`	### `jobs.<job_id>.permissions`
You can modify the default permissions granted to the `GITHUB_TOKEN`, adding or removing access as required, so that you only allow the minimum required access. For more information, see "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)."	You can modify the default permissions granted to the `GITHUB_TOKEN`, adding or removing access as required, so that you only allow the minimum required access. For more information, see "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)."
By specifying the permission within a job definition, you can configure a different set of permissions for the `GITHUB_TOKEN` for each job, if required. Alternatively, you can specify the permissions for all jobs in the workflow. For information on defining permissions at the workflow level, see [`permissions`](#permissions).	By specifying the permission within a job definition, you can configure a different set of permissions for the `GITHUB_TOKEN` for each job, if required. Alternatively, you can specify the permissions for all jobs in the workflow. For information on defining permissions at the workflow level, see [`permissions`](#permissions).
{% data reusables.github-actions.github-token-available-permissions %}	{% data reusables.github-actions.github-token-available-permissions %}
{% data reusables.github-actions.forked-write-permission %}	{% data reusables.github-actions.forked-write-permission %}
#### Example	#### Example
This example shows permissions being set for the `GITHUB_TOKEN` that will only apply to the job named `stale`. Write access is granted for the `issues` and `pull-requests` scopes. All other scopes will have no access.	This example shows permissions being set for the `GITHUB_TOKEN` that will only apply to the job named `stale`. Write access is granted for the `issues` and `pull-requests` scopes. All other scopes will have no access.
```yaml	```yaml
jobs:	jobs:
  stale:	  stale:
    runs-on: ubuntu-latest	    runs-on: ubuntu-latest
    permissions:	    permissions:
      issues: write	      issues: write
      pull-requests: write	      pull-requests: write
    steps:	    steps:
      - uses: actions/stale@v3	      - uses: actions/stale@v3
```	```
{% endif %}	{% endif %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}	{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
### `jobs.<job_id>.environment`	### `jobs.<job_id>.environment`
The environment that the job references. All environment protection rules must pass before a job referencing the environment is sent to a runner. For more information, see "[Environments](/actions/reference/environments)."	The environment that the job references. All environment protection rules must pass before a job referencing the environment is sent to a runner. For more information, see "[Environments](/actions/reference/environments)."
You can provide the environment as only the environment `name`, or as an environment object with the `name` and `url`. The URL maps to `environment_url` in the deployments API. For more information about the deployments API, see "[Deployments](/rest/reference/repos#deployments)."	You can provide the environment as only the environment `name`, or as an environment object with the `name` and `url`. The URL maps to `environment_url` in the deployments API. For more information about the deployments API, see "[Deployments](/rest/reference/repos#deployments)."
##### Example using a single environment name	##### Example using a single environment name
{% raw %}	{% raw %}
```yaml	```yaml
environment: staging_environment	environment: staging_environment
```	```
{% endraw %}	{% endraw %}
##### Example using environment name and URL	##### Example using environment name and URL
```yaml	```yaml
environment:	environment:
  name: production_environment	  name: production_environment
  url: https://github.com	  url: https://github.com
```	```
The URL can be an expression and can use any context except for the `secrets` context. For more information about expressions, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."	The URL can be an expression and can use any context except for the `secrets` context. For more information about expressions, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."
#### Example	#### Example
{% raw %}	{% raw %}
```yaml	```yaml
environment:	environment:
  name: production_environment	  name: production_environment
  url: ${{ steps.step_name.outputs.url_output }}	  url: ${{ steps.step_name.outputs.url_output }}
```	```
{% endraw %}	{% endraw %}
{% endif %}	{% endif %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}	{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
### `jobs.<job_id>.concurrency`	### `jobs.<job_id>.concurrency`
{% data reusables.actions.concurrency-beta %}	{% data reusables.actions.concurrency-beta %}
{% note %}	{% note %}
**Note:** When concurrency is specified at the job level, order is not guaranteed for jobs or runs that queue within 5 minutes of each other.	**Note:** When concurrency is specified at the job level, order is not guaranteed for jobs or runs that queue within 5 minutes of each other.
{% endnote %}	{% endnote %}
Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time. A concurrency group can be any string or expression. The expression can use any context except for the `secrets` context. For more information about expressions, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."	Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time. A concurrency group can be any string or expression. The expression can use any context except for the `secrets` context. For more information about expressions, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."
You can also specify `concurrency` at the workflow level. For more information, see [`concurrency`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#concurrency).	You can also specify `concurrency` at the workflow level. For more information, see [`concurrency`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#concurrency).
{% data reusables.actions.actions-group-concurrency %}	{% data reusables.actions.actions-group-concurrency %}
{% endif %}	{% endif %}
### `jobs.<job_id>.outputs`	### `jobs.<job_id>.outputs`
A `map` of outputs for a job. Job outputs are available to all downstream jobs that depend on this job. For more information on defining job dependencies, see [`jobs.<job_id>.needs`](#jobsjob_idneeds).	A `map` of outputs for a job. Job outputs are available to all downstream jobs that depend on this job. For more information on defining job dependencies, see [`jobs.<job_id>.needs`](#jobsjob_idneeds).
Job outputs are strings, and job outputs containing expressions are evaluated on the runner at the end of each job. Outputs containing secrets are redacted on the runner and not sent to {% data variables.product.prodname_actions %}.	Job outputs are strings, and job outputs containing expressions are evaluated on the runner at the end of each job. Outputs containing secrets are redacted on the runner and not sent to {% data variables.product.prodname_actions %}.
To use job outputs in a dependent job, you can use the `needs` context. For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#needs-context)."	To use job outputs in a dependent job, you can use the `needs` context. For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#needs-context)."
#### Example	#### Example
{% raw %}	{% raw %}
```yaml	```yaml
jobs:	jobs:
  job1:	  job1:
    runs-on: ubuntu-latest	    runs-on: ubuntu-latest
    # Map a step output to a job output	    # Map a step output to a job output
    outputs:	    outputs:
      output1: ${{ steps.step1.outputs.test }}	      output1: ${{ steps.step1.outputs.test }}
      output2: ${{ steps.step2.outputs.test }}	      output2: ${{ steps.step2.outputs.test }}
    steps:	    steps:
      - id: step1	      - id: step1
        run: echo "::set-output name=test::hello"	        run: echo "::set-output name=test::hello"
      - id: step2	      - id: step2
        run: echo "::set-output name=test::world"	        run: echo "::set-output name=test::world"
  job2:	  job2:
    runs-on: ubuntu-latest	    runs-on: ubuntu-latest
    needs: job1	    needs: job1
    steps:	    steps:
      - run: echo ${{needs.job1.outputs.output1}} ${{needs.job1.outputs.output2}}	      - run: echo ${{needs.job1.outputs.output1}} ${{needs.job1.outputs.output2}}
```	```
{% endraw %}	{% endraw %}
### `jobs.<job_id>.env`	### `jobs.<job_id>.env`
A `map` of environment variables that are available to all steps in the job. You can also set environment variables for the entire workflow or an individual step. For more information, see [`env`](#env) and [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).	A `map` of environment variables that are available to all steps in the job. You can also set environment variables for the entire workflow or an individual step. For more information, see [`env`](#env) and [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).
{% data reusables.repositories.actions-env-var-note %}	{% data reusables.repositories.actions-env-var-note %}
#### Example	#### Example
```yaml	```yaml
jobs:	jobs:
  job1:	  job1:
    env:	    env:
      FIRST_NAME: Mona	      FIRST_NAME: Mona
```	```
### `jobs.<job_id>.defaults`	### `jobs.<job_id>.defaults`
A `map` of default settings that will apply to all steps in the job. You can also set default settings for the entire workflow. For more information, see [`defaults`](#defaults).	A `map` of default settings that will apply to all steps in the job. You can also set default settings for the entire workflow. For more information, see [`defaults`](#defaults).
{% data reusables.github-actions.defaults-override %}	{% data reusables.github-actions.defaults-override %}
### `jobs.<job_id>.defaults.run`	### `jobs.<job_id>.defaults.run`
Provide default `shell` and `working-directory` to all `run` steps in the job. Context and expression are not allowed in this section.	Provide default `shell` and `working-directory` to all `run` steps in the job. Context and expression are not allowed in this section.
You can provide default `shell` and `working-directory` options for all [`run`](#jobsjob_idstepsrun) steps in a job. You can also set default settings for `run` for the entire workflow. For more information, see [`jobs.defaults.run`](#defaultsrun). You cannot use contexts or expressions in this keyword.	You can provide default `shell` and `working-directory` options for all [`run`](#jobsjob_idstepsrun) steps in a job. You can also set default settings for `run` for the entire workflow. For more information, see [`jobs.defaults.run`](#defaultsrun). You cannot use contexts or expressions in this keyword.
{% data reusables.github-actions.defaults-override %}	{% data reusables.github-actions.defaults-override %}
#### Example	#### Example
```yaml	```yaml
jobs:	jobs:
  job1:	  job1:
    runs-on: ubuntu-latest	    runs-on: ubuntu-latest
    defaults:	    defaults:
      run:	      run:
        shell: bash	        shell: bash
        working-directory: scripts	        working-directory: scripts
```	```
### `jobs.<job_id>.if`	### `jobs.<job_id>.if`
You can use the `if` conditional to prevent a job from running unless a condition is met. You can use any supported context and expression to create a conditional.	You can use the `if` conditional to prevent a job from running unless a condition is met. You can use any supported context and expression to create a conditional.
{% data reusables.github-actions.expression-syntax-if %} For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."	{% data reusables.github-actions.expression-syntax-if %} For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."
### `jobs.<job_id>.steps`	### `jobs.<job_id>.steps`
A job contains a sequence of tasks called `steps`. Steps can run commands, run setup tasks, or run an action in your repository, a public repository, or an action published in a Docker registry. Not all steps run actions, but all actions run as a step. Each step runs in its own process in the runner environment and has access to the workspace and filesystem. Because steps run in their own process, changes to environment variables are not preserved between steps. {% data variables.product.prodname_dotcom %} provides built-in steps to set up and complete a job.	A job contains a sequence of tasks called `steps`. Steps can run commands, run setup tasks, or run an action in your repository, a public repository, or an action published in a Docker registry. Not all steps run actions, but all actions run as a step. Each step runs in its own process in the runner environment and has access to the workspace and filesystem. Because steps run in their own process, changes to environment variables are not preserved between steps. {% data variables.product.prodname_dotcom %} provides built-in steps to set up and complete a job.
You can run an unlimited number of steps as long as you are within the workflow usage limits. For more information, see "[Usage limits and billing](/actions/reference/usage-limits-billing-and-administration)" for {% data variables.product.prodname_dotcom %}-hosted runners and "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)" for self-hosted runner usage limits.	You can run an unlimited number of steps as long as you are within the workflow usage limits. For more information, see "[Usage limits and billing](/actions/reference/usage-limits-billing-and-administration)" for {% data variables.product.prodname_dotcom %}-hosted runners and "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)" for self-hosted runner usage limits.
#### Example	#### Example
{% raw %}	{% raw %}
```yaml	```yaml
name: Greeting from Mona	name: Greeting from Mona
on: push	on: push
jobs:	jobs:
  my-job:	  my-job:
    name: My Job	    name: My Job
    runs-on: ubuntu-latest	    runs-on: ubuntu-latest
    steps:	    steps:
      - name: Print a greeting	      - name: Print a greeting
        env:	        env:
          MY_VAR: Hi there! My name is	          MY_VAR: Hi there! My name is
          FIRST_NAME: Mona	          FIRST_NAME: Mona
          MIDDLE_NAME: The	          MIDDLE_NAME: The
          LAST_NAME: Octocat	          LAST_NAME: Octocat
        run: |	        run: |
          echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.	          echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.
```	```
{% endraw %}	{% endraw %}
### `jobs.<job_id>.steps[*].id`	### `jobs.<job_id>.steps[*].id`
A unique identifier for the step. You can use the `id` to reference the step in contexts. For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."	A unique identifier for the step. You can use the `id` to reference the step in contexts. For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."
### `jobs.<job_id>.steps[*].if`	### `jobs.<job_id>.steps[*].if`
You can use the `if` conditional to prevent a step from running unless a condition is met. You can use any supported context and expression to create a conditional.	You can use the `if` conditional to prevent a step from running unless a condition is met. You can use any supported context and expression to create a conditional.
{% data reusables.github-actions.expression-syntax-if %} For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."	{% data reusables.github-actions.expression-syntax-if %} For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."
#### Example using contexts	#### Example using contexts
 This step only runs when the event type is a `pull_request` and the event action is `unassigned`.	 This step only runs when the event type is a `pull_request` and the event action is `unassigned`.
 ```yaml	 ```yaml
steps:	steps:
  - name: My first step	  - name: My first step
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}	    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
    run: echo This event is a pull request that had an assignee removed.	    run: echo This event is a pull request that had an assignee removed.
```	```
#### Example using status check functions	#### Example using status check functions
The `my backup step` only runs when the previous step of a job fails. For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#job-status-check-functions)."	The `my backup step` only runs when the previous step of a job fails. For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#job-status-check-functions)."
```yaml	```yaml
steps:	steps:
  - name: My first step	  - name: My first step
    uses: monacorp/action-name@main	    uses: monacorp/action-name@main
  - name: My backup step	  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}	    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0	    uses: actions/heroku@1.0.0
```	```
### `jobs.<job_id>.steps[*].name`	### `jobs.<job_id>.steps[*].name`
A name for your step to display on {% data variables.product.prodname_dotcom %}.	A name for your step to display on {% data variables.product.prodname_dotcom %}.
### `jobs.<job_id>.steps[*].uses`	### `jobs.<job_id>.steps[*].uses`
Selects an action to run as part of a step in your job. An action is a reusable unit of code. You can use an action defined in the same repository as the workflow, a public repository, or in a [published Docker container image](https://hub.docker.com/).	Selects an action to run as part of a step in your job. An action is a reusable unit of code. You can use an action defined in the same repository as the workflow, a public repository, or in a [published Docker container image](https://hub.docker.com/).
We strongly recommend that you include the version of the action you are using by specifying a Git ref, SHA, or Docker tag number. If you don't specify a version, it could break your workflows or cause unexpected behavior when the action owner publishes an update.	We strongly recommend that you include the version of the action you are using by specifying a Git ref, SHA, or Docker tag number. If you don't specify a version, it could break your workflows or cause unexpected behavior when the action owner publishes an update.
- Using the commit SHA of a released action version is the safest for stability and security.	- Using the commit SHA of a released action version is the safest for stability and security.
- Using the specific major action version allows you to receive critical fixes and security patches while still maintaining compatibility. It also assures that your workflow should still work.	- Using the specific major action version allows you to receive critical fixes and security patches while still maintaining compatibility. It also assures that your workflow should still work.
- Using the default branch of an action may be convenient, but if someone releases a new major version with a breaking change, your workflow could break.	- Using the default branch of an action may be convenient, but if someone releases a new major version with a breaking change, your workflow could break.
Some actions require inputs that you must set using the [`with`](#jobsjob_idstepswith) keyword. Review the action's README file to determine the inputs required.	Some actions require inputs that you must set using the [`with`](#jobsjob_idstepswith) keyword. Review the action's README file to determine the inputs required.
Actions are either JavaScript files or Docker containers. If the action you're using is a Docker container you must run the job in a Linux environment. For more details, see [`runs-on`](#jobsjob_idruns-on).	Actions are either JavaScript files or Docker containers. If the action you're using is a Docker container you must run the job in a Linux environment. For more details, see [`runs-on`](#jobsjob_idruns-on).
#### Example using versioned actions	#### Example using versioned actions
```yaml	```yaml
steps:    	steps:    
  # Reference a specific commit	  # Reference a specific commit
  - uses: actions/setup-node@c46424eee26de4078d34105d3de3cc4992202b1e	  - uses: actions/setup-node@c46424eee26de4078d34105d3de3cc4992202b1e
  # Reference the major version of a release	  # Reference the major version of a release
  - uses: actions/setup-node@v1	  - uses: actions/setup-node@v1
  # Reference a minor version of a release	  # Reference a minor version of a release
  - uses: actions/setup-node@v1.2	  - uses: actions/setup-node@v1.2
  # Reference a branch	  # Reference a branch
  - uses: actions/setup-node@main	  - uses: actions/setup-node@main
```	```
#### Example using a public action	#### Example using a public action
`{owner}/{repo}@{ref}`	`{owner}/{repo}@{ref}`
You can specific branch, ref, or SHA in a public {% data variables.product.prodname_dotcom %} repository.	You can specific branch, ref, or SHA in a public {% data variables.product.prodname_dotcom %} repository.
```yaml	```yaml
jobs:	jobs:
  my_first_job:	  my_first_job:
    steps:	    steps:
      - name: My first step	      - name: My first step
        # Uses the default branch of a public repository	        # Uses the default branch of a public repository
        uses: actions/heroku@1.0.0	        uses: actions/heroku@1.0.0
      - name: My second step	      - name: My second step
        # Uses a specific version tag of a public repository	        # Uses a specific version tag of a public repository
        uses: actions/aws@v2.0.1	        uses: actions/aws@v2.0.1
```	```
#### Example using a public action in a subdirectory	#### Example using a public action in a subdirectory
`{owner}/{repo}/{path}@{ref}`	`{owner}/{repo}/{path}@{ref}`
A subdirectory in a public {% data variables.product.prodname_dotcom %} repository at a specific branch, ref, or SHA.	A subdirectory in a public {% data variables.product.prodname_dotcom %} repository at a specific branch, ref, or SHA.
```yaml	```yaml
jobs:	jobs:
  my_first_job:	  my_first_job:
    steps:	    steps:
      - name: My first step	      - name: My first step
        uses: actions/aws/ec2@main	        uses: actions/aws/ec2@main
```	```
#### Example using action in the same repository as the workflow	#### Example using action in the same repository as the workflow
`./path/to/dir`	`./path/to/dir`
The path to the directory that contains the action in your workflow's repository. You must check out your repository before using the action.	The path to the directory that contains the action in your workflow's repository. You must check out your repository before using the action.
```yaml	```yaml
jobs:	jobs:
  my_first_job:	  my_first_job:
    steps:	    steps:
      - name: Check out repository	      - name: Check out repository
        uses: actions/checkout@v2	        uses: actions/checkout@v2
      - name: Use local my-action	      - name: Use local my-action
        uses: ./.github/actions/my-action	        uses: ./.github/actions/my-action
```	```
#### Example using a Docker Hub action	#### Example using a Docker Hub action
`docker://{image}:{tag}`	`docker://{image}:{tag}`
A Docker image published on [Docker Hub](https://hub.docker.com/).	A Docker image published on [Docker Hub](https://hub.docker.com/).
```yaml	```yaml
jobs:	jobs:
  my_first_job:	  my_first_job:
    steps:	    steps:
      - name: My first step	      - name: My first step
        uses: docker://alpine:3.8	        uses: docker://alpine:3.8
```	```
{% if currentVersion == "free-pro-team@latest" %}	{% if currentVersion == "free-pro-team@latest" %}
##### Example using the {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}	##### Example using the {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}
`docker://{host}/{image}:{tag}`	`docker://{host}/{image}:{tag}`
A Docker image in the {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}.	A Docker image in the {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}.
```yaml	```yaml
jobs:	jobs:
  my_first_job:	  my_first_job:
    steps:	    steps:
      - name: My first step	      - name: My first step
        uses: docker://ghcr.io/OWNER/IMAGE_NAME	        uses: docker://ghcr.io/OWNER/IMAGE_NAME
```	```
{% endif %}	{% endif %}
##### Example using a Docker public registry action	##### Example using a Docker public registry action
`docker://{host}/{image}:{tag}`	`docker://{host}/{image}:{tag}`
A Docker image in a public registry. This example uses the Google Container Registry at `gcr.io`.	A Docker image in a public registry. This example uses the Google Container Registry at `gcr.io`.
```yaml	```yaml
jobs:	jobs:
  my_first_job:	  my_first_job:
    steps:	    steps:
      - name: My first step	      - name: My first step
        uses: docker://gcr.io/cloud-builders/gradle	        uses: docker://gcr.io/cloud-builders/gradle
```	```
#### Example using action inside a different private repository than the workflow	#### Example using action inside a different private repository than the workflow
Your workflow must checkout the private repository and reference the action locally. Generate a personal access token and add the token as an encrypted secret. For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)" and "[Encrypted secrets](/actions/reference/encrypted-secrets)."	Your workflow must checkout the private repository and reference the action locally. Generate a personal access token and add the token as an encrypted secret. For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)" and "[Encrypted secrets](/actions/reference/encrypted-secrets)."
Replace `PERSONAL_ACCESS_TOKEN` in the example with the name of your secret.	Replace `PERSONAL_ACCESS_TOKEN` in the example with the name of your secret.
{% raw %}	{% raw %}
```yaml	```yaml
jobs:	jobs:
  my_first_job:	  my_first_job:
    steps:	    steps:
      - name: Check out repository	      - name: Check out repository
        uses: actions/checkout@v2	        uses: actions/checkout@v2
        with:	        with:
          repository: octocat/my-private-repo	          repository: octocat/my-private-repo
          ref: v1.0	          ref: v1.0
          token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}	          token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
          path: ./.github/actions/my-private-repo	          path: ./.github/actions/my-private-repo
      - name: Run my action	      - name: Run my action
        uses: ./.github/actions/my-private-repo/my-action	        uses: ./.github/actions/my-private-repo/my-action
```	```
{% endraw %}	{% endraw %}
### `jobs.<job_id>.steps[*].run`	### `jobs.<job_id>.steps[*].run`
Runs command-line programs using the operating system's shell. If you do not provide a `name`, the step name will default to the text specified in the `run` command.	Runs command-line programs using the operating system's shell. If you do not provide a `name`, the step name will default to the text specified in the `run` command.
Commands run using non-login shells by default. You can choose a different shell and customize the shell used to run commands. For more information, see "[Using a specific shell](#using-a-specific-shell)."	Commands run using non-login shells by default. You can choose a different shell and customize the shell used to run commands. For more information, see "[Using a specific shell](#using-a-specific-shell)."
Each `run` keyword represents a new process and shell in the runner environment. When you provide multi-line commands, each line runs in the same shell. For example:	Each `run` keyword represents a new process and shell in the runner environment. When you provide multi-line commands, each line runs in the same shell. For example:
* A single-line command:	* A single-line command:
  ```yaml	  ```yaml
  - name: Install Dependencies	  - name: Install Dependencies
    run: npm install	    run: npm install
  ```	  ```
* A multi-line command:	* A multi-line command:
  ```yaml	  ```yaml
  - name: Clean install dependencies and build	  - name: Clean install dependencies and build
    run: |	    run: |
      npm ci	      npm ci
      npm run build	      npm run build
  ```	  ```
Using the `working-directory` keyword, you can specify the working directory of where to run the command.	Using the `working-directory` keyword, you can specify the working directory of where to run the command.
```yaml	```yaml
- name: Clean temp directory	- name: Clean temp directory
  run: rm -rf *	  run: rm -rf *
  working-directory: ./temp	  working-directory: ./temp
```	```
#### Using a specific shell	#### Using a specific shell
You can override the default shell settings in the runner's operating system using the `shell` keyword. You can use built-in `shell` keywords, or you can define a custom set of shell options.	You can override the default shell settings in the runner's operating system using the `shell` keyword. You can use built-in `shell` keywords, or you can define a custom set of shell options.
| Supported platform | `shell` parameter | Description | Command run internally |	| Supported platform | `shell` parameter | Description | Command run internally |
|--------------------|-------------------|-------------|------------------------|	|--------------------|-------------------|-------------|------------------------|
| All | `bash` | The default shell on non-Windows platforms with a fallback to `sh`. When specifying a bash shell on Windows, the bash shell included with Git for Windows is used. | `bash --noprofile --norc -eo pipefail {0}` |	| All | `bash` | The default shell on non-Windows platforms with a fallback to `sh`. When specifying a bash shell on Windows, the bash shell included with Git for Windows is used. | `bash --noprofile --norc -eo pipefail {0}` |
| All | `pwsh` | The PowerShell Core. {% data variables.product.prodname_dotcom %} appends the extension `.ps1` to your script name. | `pwsh -command ". '{0}'"` |	| All | `pwsh` | The PowerShell Core. {% data variables.product.prodname_dotcom %} appends the extension `.ps1` to your script name. | `pwsh -command ". '{0}'"` |
| All | `python` | Executes the python command. | `python {0}` |	| All | `python` | Executes the python command. | `python {0}` |
| Linux / macOS | `sh` | The fallback behavior for non-Windows platforms if no shell is provided and `bash` is not found in the path. | `sh -e {0}` |	| Linux / macOS | `sh` | The fallback behavior for non-Windows platforms if no shell is provided and `bash` is not found in the path. | `sh -e {0}` |
| Windows | `cmd` | {% data variables.product.prodname_dotcom %} appends the extension `.cmd` to your script name and substitutes for `{0}`. | `%ComSpec% /D /E:ON /V:OFF /S /C "CALL "{0}""`. |	| Windows | `cmd` | {% data variables.product.prodname_dotcom %} appends the extension `.cmd` to your script name and substitutes for `{0}`. | `%ComSpec% /D /E:ON /V:OFF /S /C "CALL "{0}""`. |
| Windows | `pwsh` | This is the default shell used on Windows. The PowerShell Core. {% data variables.product.prodname_dotcom %} appends the extension `.ps1` to your script name. If your self-hosted Windows runner does not have _PowerShell Core_ installed, then _PowerShell Desktop_ is used instead.| `pwsh -command ". '{0}'"`. |	| Windows | `pwsh` | This is the default shell used on Windows. The PowerShell Core. {% data variables.product.prodname_dotcom %} appends the extension `.ps1` to your script name. If your self-hosted Windows runner does not have _PowerShell Core_ installed, then _PowerShell Desktop_ is used instead.| `pwsh -command ". '{0}'"`. |
| Windows | `powershell` | The PowerShell Desktop. {% data variables.product.prodname_dotcom %} appends the extension `.ps1` to your script name. | `powershell -command ". '{0}'"`. |	| Windows | `powershell` | The PowerShell Desktop. {% data variables.product.prodname_dotcom %} appends the extension `.ps1` to your script name. | `powershell -command ". '{0}'"`. |
#### Example running a script using bash	#### Example running a script using bash
```yaml	```yaml
steps:	steps:
  - name: Display the path	  - name: Display the path
    run: echo $PATH	    run: echo $PATH
    shell: bash	    shell: bash
```	```
#### Example running a script using Windows `cmd`	#### Example running a script using Windows `cmd`
```yaml	```yaml
steps:	steps:
  - name: Display the path	  - name: Display the path
    run: echo %PATH%	    run: echo %PATH%
    shell: cmd	    shell: cmd
```	```
#### Example running a script using PowerShell Core	#### Example running a script using PowerShell Core
```yaml	```yaml
steps:	steps:
  - name: Display the path	  - name: Display the path
    run: echo ${env:PATH}	    run: echo ${env:PATH}
    shell: pwsh	    shell: pwsh
```	```
#### Example: Using PowerShell Desktop to run a script	#### Example: Using PowerShell Desktop to run a script
```yaml	```yaml
steps:	steps:
  - name: Display the path	  - name: Display the path
    run: echo ${env:PATH}	    run: echo ${env:PATH}
    shell: powershell	    shell: powershell
```	```
#### Example running a python script	#### Example running a python script
```yaml	```yaml
steps:	steps:
  - name: Display the path	  - name: Display the path
    run: |	    run: |
      import os	      import os
      print(os.environ['PATH'])	      print(os.environ['PATH'])
    shell: python	    shell: python
```	```
#### Custom shell	#### Custom shell
You can set the `shell` value to a template string using `command […options] {0} [..more_options]`. {% data variables.product.prodname_dotcom %} interprets the first whitespace-delimited word of the string as the command, and inserts the file name for the temporary script at `{0}`.	You can set the `shell` value to a template string using `command […options] {0} [..more_options]`. {% data variables.product.prodname_dotcom %} interprets the first whitespace-delimited word of the string as the command, and inserts the file name for the temporary script at `{0}`.
For example:	For example:
```yaml	```yaml
steps:	steps:
  - name: Display the environment variables and their values	  - name: Display the environment variables and their values
    run: |	    run: |
      print %ENV	      print %ENV
    shell: perl {0}	    shell: perl {0}
```	```
The command used, `perl` in this example, must be installed on the runner.	The command used, `perl` in this example, must be installed on the runner.
{% if currentVersion == "github-ae@latest" %}For instructions on how to make sure your {% data variables.actions.hosted_runner %} has the required software installed, see "[Creating custom images](/actions/using-github-hosted-runners/creating-custom-images)."	{% if currentVersion == "github-ae@latest" %}For instructions on how to make sure your {% data variables.actions.hosted_runner %} has the required software installed, see "[Creating custom images](/actions/using-github-hosted-runners/creating-custom-images)."
{% else %}	{% else %}
For information about the software included on GitHub-hosted runners, see "[Specifications for GitHub-hosted runners](/actions/reference/specifications-for-github-hosted-runners#supported-software)."	For information about the software included on GitHub-hosted runners, see "[Specifications for GitHub-hosted runners](/actions/reference/specifications-for-github-hosted-runners#supported-software)."
{% endif %}	{% endif %}
#### Exit codes and error action preference	#### Exit codes and error action preference
For built-in shell keywords, we provide the following defaults that are executed by {% data variables.product.prodname_dotcom %}-hosted runners. You should use these guidelines when running shell scripts.	For built-in shell keywords, we provide the following defaults that are executed by {% data variables.product.prodname_dotcom %}-hosted runners. You should use these guidelines when running shell scripts.
- `bash`/`sh`:	- `bash`/`sh`:
  - Fail-fast behavior using `set -eo pipefail`: Default for `bash` and built-in `shell`. It is also the default when you don't provide an option on non-Windows platforms.	  - Fail-fast behavior using `set -eo pipefail`: Default for `bash` and built-in `shell`. It is also the default when you don't provide an option on non-Windows platforms.
  - You can opt out of fail-fast and take full control by providing a template string to the shell options. For example, `bash {0}`.	  - You can opt out of fail-fast and take full control by providing a template string to the shell options. For example, `bash {0}`.
  - sh-like shells exit with the exit code of the last command executed in a script, which is also the default behavior for actions. The runner will report the status of the step as fail/succeed based on this exit code.	  - sh-like shells exit with the exit code of the last command executed in a script, which is also the default behavior for actions. The runner will report the status of the step as fail/succeed based on this exit code.
- `powershell`/`pwsh`	- `powershell`/`pwsh`
  - Fail-fast behavior when possible. For `pwsh` and `powershell` built-in shell, we will prepend `$ErrorActionPreference = 'stop'` to script contents.	  - Fail-fast behavior when possible. For `pwsh` and `powershell` built-in shell, we will prepend `$ErrorActionPreference = 'stop'` to script contents.
  - We append `if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }` to powershell scripts so action statuses reflect the script's last exit code.	  - We append `if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }` to powershell scripts so action statuses reflect the script's last exit code.
  - Users can always opt out by not using the built-in shell, and providing a custom shell option like: `pwsh -File {0}`, or `powershell -Command "& '{0}'"`, depending on need.	  - Users can always opt out by not using the built-in shell, and providing a custom shell option like: `pwsh -File {0}`, or `powershell -Command "& '{0}'"`, depending on need.
- `cmd`	- `cmd`
  - There doesn't seem to be a way to fully opt into fail-fast behavior other than writing your script to check each error code and respond accordingly. Because we can't actually provide that behavior by default, you need to write this behavior into your script.	  - There doesn't seem to be a way to fully opt into fail-fast behavior other than writing your script to check each error code and respond accordingly. Because we can't actually provide that behavior by default, you need to write this behavior into your script.
  - `cmd.exe` will exit with the error level of the last program it executed, and it will return the error code to the runner. This behavior is internally consistent with the previous `sh` and `pwsh` default behavior and is the `cmd.exe` default, so this behavior remains intact.	  - `cmd.exe` will exit with the error level of the last program it executed, and it will return the error code to the runner. This behavior is internally consistent with the previous `sh` and `pwsh` default behavior and is the `cmd.exe` default, so this behavior remains intact.
### `jobs.<job_id>.steps[*].with`	### `jobs.<job_id>.steps[*].with`
A `map` of the input parameters defined by the action. Each input parameter is a key/value pair. Input parameters are set as environment variables. The variable is prefixed with `INPUT_` and converted to upper case.	A `map` of the input parameters defined by the action. Each input parameter is a key/value pair. Input parameters are set as environment variables. The variable is prefixed with `INPUT_` and converted to upper case.
#### Example	#### Example
Defines the three input parameters (`first_name`, `middle_name`, and `last_name`) defined by the `hello_world` action. These input variables will be accessible to the `hello-world` action as `INPUT_FIRST_NAME`, `INPUT_MIDDLE_NAME`, and `INPUT_LAST_NAME` environment variables.	Defines the three input parameters (`first_name`, `middle_name`, and `last_name`) defined by the `hello_world` action. These input variables will be accessible to the `hello-world` action as `INPUT_FIRST_NAME`, `INPUT_MIDDLE_NAME`, and `INPUT_LAST_NAME` environment variables.
```yaml	```yaml
jobs:	jobs:
  my_first_job:	  my_first_job:
    steps:	    steps:
      - name: My first step	      - name: My first step
        uses: actions/hello_world@main	        uses: actions/hello_world@main
        with:	        with:
          first_name: Mona	          first_name: Mona
          middle_name: The	          middle_name: The
          last_name: Octocat      	          last_name: Octocat      
```	```
### `jobs.<job_id>.steps[*].with.args`	### `jobs.<job_id>.steps[*].with.args`
A `string` that defines the inputs for a Docker container. {% data variables.product.prodname_dotcom %} passes the `args` to the container's `ENTRYPOINT` when the container starts up. An `array of strings` is not supported by this parameter.	A `string` that defines the inputs for a Docker container. {% data variables.product.prodname_dotcom %} passes the `args` to the container's `ENTRYPOINT` when the container starts up. An `array of strings` is not supported by this parameter.
#### Example	#### Example
{% raw %}	{% raw %}
```yaml	```yaml
steps:	steps:
  - name: Explain why this job ran	  - name: Explain why this job ran
    uses: monacorp/action-name@main	    uses: monacorp/action-name@main
    with:	    with:
      entrypoint: /bin/echo	      entrypoint: /bin/echo
      args: The ${{ github.event_name }} event triggered this step.	      args: The ${{ github.event_name }} event triggered this step.
```	```
{% endraw %}	{% endraw %}
The `args` are used in place of the `CMD` instruction in a `Dockerfile`. If you use `CMD` in your `Dockerfile`, use the guidelines ordered by preference:	The `args` are used in place of the `CMD` instruction in a `Dockerfile`. If you use `CMD` in your `Dockerfile`, use the guidelines ordered by preference:
1. Document required arguments in the action's README and omit them from the `CMD` instruction.	1. Document required arguments in the action's README and omit them from the `CMD` instruction.
1. Use defaults that allow using the action without specifying any `args`.	1. Use defaults that allow using the action without specifying any `args`.
1. If the action exposes a `--help` flag, or something similar, use that as the default to make your action self-documenting.	1. If the action exposes a `--help` flag, or something similar, use that as the default to make your action self-documenting.
### `jobs.<job_id>.steps[*].with.entrypoint`	### `jobs.<job_id>.steps[*].with.entrypoint`
Overrides the Docker `ENTRYPOINT` in the `Dockerfile`, or sets it if one wasn't already specified. Unlike the Docker `ENTRYPOINT` instruction which has a shell and exec form, `entrypoint` keyword accepts only a single string defining the executable to be run.	Overrides the Docker `ENTRYPOINT` in the `Dockerfile`, or sets it if one wasn't already specified. Unlike the Docker `ENTRYPOINT` instruction which has a shell and exec form, `entrypoint` keyword accepts only a single string defining the executable to be run.
#### Example	#### Example
```yaml	```yaml
steps:	steps:
  - name: Run a custom command	  - name: Run a custom command
    uses: monacorp/action-name@main	    uses: monacorp/action-name@main
    with:	    with:
      entrypoint: /a/different/executable	      entrypoint: /a/different/executable
```	```
The `entrypoint` keyword is meant to be used with Docker container actions, but you can also use it with JavaScript actions that don't define any inputs.	The `entrypoint` keyword is meant to be used with Docker container actions, but you can also use it with JavaScript actions that don't define any inputs.
### `jobs.<job_id>.steps[*].env`	### `jobs.<job_id>.steps[*].env`
Sets environment variables for steps to use in the runner environment. You can also set environment variables for the entire workflow or a job. For more information, see [`env`](#env) and [`jobs.<job_id>.env`](#jobsjob_idenv).	Sets environment variables for steps to use in the runner environment. You can also set environment variables for the entire workflow or a job. For more information, see [`env`](#env) and [`jobs.<job_id>.env`](#jobsjob_idenv).
{% data reusables.repositories.actions-env-var-note %}	{% data reusables.repositories.actions-env-var-note %}
Public actions may specify expected environment variables in the README file. If you are setting a secret in an environment variable, you must set secrets using the `secrets` context. For more information, see "[Using environment variables](/actions/automating-your-workflow-with-github-actions/using-environment-variables)" and "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."	Public actions may specify expected environment variables in the README file. If you are setting a secret in an environment variable, you must set secrets using the `secrets` context. For more information, see "[Using environment variables](/actions/automating-your-workflow-with-github-actions/using-environment-variables)" and "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."
#### Example	#### Example
{% raw %}	{% raw %}
```yaml	```yaml
steps:	steps:
  - name: My first action	  - name: My first action
    env:	    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}	      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      FIRST_NAME: Mona	      FIRST_NAME: Mona
      LAST_NAME: Octocat	      LAST_NAME: Octocat
```	```
{% endraw %}	{% endraw %}
### `jobs.<job_id>.steps[*].continue-on-error`	### `jobs.<job_id>.steps[*].continue-on-error`
Prevents a job from failing when a step fails. Set to `true` to allow a job to pass when this step fails.	Prevents a job from failing when a step fails. Set to `true` to allow a job to pass when this step fails.
### `jobs.<job_id>.steps[*].timeout-minutes`	### `jobs.<job_id>.steps[*].timeout-minutes`
The maximum number of minutes to run the step before killing the process.	The maximum number of minutes to run the step before killing the process.
### `jobs.<job_id>.timeout-minutes`	### `jobs.<job_id>.timeout-minutes`
The maximum number of minutes to let a job run before {% data variables.product.prodname_dotcom %} automatically cancels it. Default: 360	The maximum number of minutes to let a job run before {% data variables.product.prodname_dotcom %} automatically cancels it. Default: 360
### `jobs.<job_id>.strategy`	### `jobs.<job_id>.strategy`
A strategy creates a build matrix for your jobs. You can define different variations to run each job in.	A strategy creates a build matrix for your jobs. You can define different variations to run each job in.
### `jobs.<job_id>.strategy.matrix`	### `jobs.<job_id>.strategy.matrix`
You can define a matrix of different job configurations. A matrix allows you to create multiple jobs by performing variable substitution in a single job definition. For example, you can use a matrix to create jobs for more than one supported version of a programming language, operating system, or tool. A matrix reuses the job's configuration and creates a job for each matrix you configure.	You can define a matrix of different job configurations. A matrix allows you to create multiple jobs by performing variable substitution in a single job definition. For example, you can use a matrix to create jobs for more than one supported version of a programming language, operating system, or tool. A matrix reuses the job's configuration and creates a job for each matrix you configure.
{% data reusables.github-actions.usage-matrix-limits %}	{% data reusables.github-actions.usage-matrix-limits %}
Each option you define in the `matrix` has a key and value. The keys you define become properties in the `matrix` context and you can reference the property in other areas of your workflow file. For example, if you define the key `os` that contains an array of operating systems, you can use the `matrix.os` property as the value of the `runs-on` keyword to create a job for each operating system. For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."	Each option you define in the `matrix` has a key and value. The keys you define become properties in the `matrix` context and you can reference the property in other areas of your workflow file. For example, if you define the key `os` that contains an array of operating systems, you can use the `matrix.os` property as the value of the `runs-on` keyword to create a job for each operating system. For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."
The order that you define a `matrix` matters. The first option you define will be the first job that runs in your workflow.	The order that you define a `matrix` matters. The first option you define will be the first job that runs in your workflow.
#### Example running with more than one version of Node.js	#### Example running with more than one version of Node.js
You can specify a matrix by supplying an array for the configuration options. For example, if the runner supports Node.js versions 10, 12, and 14, you could specify an array of those versions in the `matrix`.	You can specify a matrix by supplying an array for the configuration options. For example, if the runner supports Node.js versions 10, 12, and 14, you could specify an array of those versions in the `matrix`.
This example creates a matrix of three jobs by setting the `node` key to an array of three Node.js versions. To use the matrix, the example sets the `matrix.node` context property as the value of the `setup-node` action's input parameter `node-version`. As a result, three jobs will run, each using a different Node.js version.	This example creates a matrix of three jobs by setting the `node` key to an array of three Node.js versions. To use the matrix, the example sets the `matrix.node` context property as the value of the `setup-node` action's input parameter `node-version`. As a result, three jobs will run, each using a different Node.js version.
{% raw %}	{% raw %}
```yaml	```yaml
strategy:	strategy:
  matrix:	  matrix:
    node: [10, 12, 14]	    node: [10, 12, 14]
steps:	steps:
  # Configures the node version used on GitHub-hosted runners	  # Configures the node version used on GitHub-hosted runners
  - uses: actions/setup-node@v2	  - uses: actions/setup-node@v2
    with:	    with:
      # The Node.js version to configure	      # The Node.js version to configure
      node-version: ${{ matrix.node }}	      node-version: ${{ matrix.node }}
```	```
{% endraw %}	{% endraw %}
The `setup-node` action is the recommended way to configure a Node.js version when using {% data variables.product.prodname_dotcom %}-hosted runners. For more information, see the [`setup-node`](https://github.com/actions/setup-node) action.	The `setup-node` action is the recommended way to configure a Node.js version when using {% data variables.product.prodname_dotcom %}-hosted runners. For more information, see the [`setup-node`](https://github.com/actions/setup-node) action.
#### Example running with more than one operating system	#### Example running with more than one operating system
You can create a matrix to run workflows on more than one runner operating system. You can also specify more than one matrix configuration. This example creates a matrix of 6 jobs:	You can create a matrix to run workflows on more than one runner operating system. You can also specify more than one matrix configuration. This example creates a matrix of 6 jobs:
- 2 operating systems specified in the `os` array	- 2 operating systems specified in the `os` array
- 3 Node.js versions specified in the `node` array	- 3 Node.js versions specified in the `node` array
{% data reusables.repositories.actions-matrix-builds-os %}	{% data reusables.repositories.actions-matrix-builds-os %}
{% raw %}	{% raw %}
```yaml	```yaml
runs-on: ${{ matrix.os }}	runs-on: ${{ matrix.os }}
strategy:	strategy:
  matrix:	  matrix:
    os: [ubuntu-18.04, ubuntu-20.04]	    os: [ubuntu-18.04, ubuntu-20.04]
    node: [10, 12, 14]	    node: [10, 12, 14]
steps:	steps:
  - uses: actions/setup-node@v2	  - uses: actions/setup-node@v2
    with:	    with:
      node-version: ${{ matrix.node }}	      node-version: ${{ matrix.node }}
```	```
{% endraw %}	{% endraw %}
{% if currentVersion == "github-ae@latest" %}To find supported configuration options for {% data variables.actions.hosted_runner %}s, see "[Software specifications](/actions/using-github-hosted-runners/about-ae-hosted-runners#software-specifications)."	{% if currentVersion == "github-ae@latest" %}To find supported configuration options for {% data variables.actions.hosted_runner %}s, see "[Software specifications](/actions/using-github-hosted-runners/about-ae-hosted-runners#software-specifications)."
{% else %}To find supported configuration options for {% data variables.product.prodname_dotcom %}-hosted runners, see "[Virtual environments for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)."	{% else %}To find supported configuration options for {% data variables.product.prodname_dotcom %}-hosted runners, see "[Virtual environments for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)."
{% endif %}	{% endif %}
#### Example including additional values into combinations	#### Example including additional values into combinations
You can add additional configuration options to a build matrix job that already exists. For example, if you want to use a specific version of `npm` when the job that uses `windows-latest` and version 8 of `node` runs, you can use `include` to specify that additional option.	You can add additional configuration options to a build matrix job that already exists. For example, if you want to use a specific version of `npm` when the job that uses `windows-latest` and version 8 of `node` runs, you can use `include` to specify that additional option.
{% raw %}	{% raw %}
```yaml	```yaml
runs-on: ${{ matrix.os }}	runs-on: ${{ matrix.os }}
strategy:	strategy:
  matrix:	  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]	    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [8, 10, 12, 14]	    node: [8, 10, 12, 14]
    include:	    include:
      # includes a new variable of npm with a value of 6	      # includes a new variable of npm with a value of 6
      # for the matrix leg matching the os and version	      # for the matrix leg matching the os and version
      - os: windows-latest	      - os: windows-latest
        node: 8	        node: 8
        npm: 6	        npm: 6
```	```
{% endraw %}	{% endraw %}
#### Example including new combinations	#### Example including new combinations
You can use `include` to add new jobs to a build matrix. Any unmatched include configurations are added to the matrix. For example, if you want to use `node` version 14 to build on multiple operating systems, but wanted one extra experimental job using node version 15 on Ubuntu, you can use `include` to specify that additional job.	You can use `include` to add new jobs to a build matrix. Any unmatched include configurations are added to the matrix. For example, if you want to use `node` version 14 to build on multiple operating systems, but wanted one extra experimental job using node version 15 on Ubuntu, you can use `include` to specify that additional job.
{% raw %}	{% raw %}
```yaml	```yaml
runs-on: ${{ matrix.os }}	runs-on: ${{ matrix.os }}
strategy:	strategy:
  matrix:	  matrix:
    node: [14]	    node: [14]
    os: [macos-latest, windows-latest, ubuntu-18.04]	    os: [macos-latest, windows-latest, ubuntu-18.04]
    include:	    include:
      - node: 15	      - node: 15
        os: ubuntu-18.04	        os: ubuntu-18.04
        experimental: true	        experimental: true
```	```
{% endraw %}	{% endraw %}
#### Example excluding configurations from a matrix	#### Example excluding configurations from a matrix
You can remove a specific configurations defined in the build matrix using the `exclude` option. Using `exclude` removes a job defined by the build matrix. The number of jobs is the cross product of the number of operating systems (`os`) included in the arrays you provide, minus any subtractions (`exclude`).	You can remove a specific configurations defined in the build matrix using the `exclude` option. Using `exclude` removes a job defined by the build matrix. The number of jobs is the cross product of the number of operating systems (`os`) included in the arrays you provide, minus any subtractions (`exclude`).
{% raw %}	{% raw %}
```yaml	```yaml
runs-on: ${{ matrix.os }}	runs-on: ${{ matrix.os }}
strategy:	strategy:
  matrix:	  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]	    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [8, 10, 12, 14]	    node: [8, 10, 12, 14]
    exclude:	    exclude:
      # excludes node 8 on macOS	      # excludes node 8 on macOS
      - os: macos-latest	      - os: macos-latest
        node: 8	        node: 8
```	```
{% endraw %}	{% endraw %}
{% note %}	{% note %}
**Note:** All `include` combinations are processed after `exclude`. This allows you to use `include` to add back combinations that were previously excluded.	**Note:** All `include` combinations are processed after `exclude`. This allows you to use `include` to add back combinations that were previously excluded.
{% endnote %}	{% endnote %}
##### Using environment variables in a matrix	##### Using environment variables in a matrix
You can add custom environment variables for each test combination by using the `include` key. You can then refer to the custom environment variables in a later step.	You can add custom environment variables for each test combination by using the `include` key. You can then refer to the custom environment variables in a later step.
{% data reusables.github-actions.matrix-variable-example %}	{% data reusables.github-actions.matrix-variable-example %}
### `jobs.<job_id>.strategy.fail-fast`	### `jobs.<job_id>.strategy.fail-fast`
When set to `true`, {% data variables.product.prodname_dotcom %} cancels all in-progress jobs if any `matrix` job fails. Default: `true`	When set to `true`, {% data variables.product.prodname_dotcom %} cancels all in-progress jobs if any `matrix` job fails. Default: `true`
### `jobs.<job_id>.strategy.max-parallel`	### `jobs.<job_id>.strategy.max-parallel`
The maximum number of jobs that can run simultaneously when using a `matrix` job strategy. By default, {% data variables.product.prodname_dotcom %} will maximize the number of jobs run in parallel depending on the available runners on {% data variables.product.prodname_dotcom %}-hosted virtual machines.	The maximum number of jobs that can run simultaneously when using a `matrix` job strategy. By default, {% data variables.product.prodname_dotcom %} will maximize the number of jobs run in parallel depending on the available runners on {% data variables.product.prodname_dotcom %}-hosted virtual machines.
```yaml	```yaml
strategy:	strategy:
  max-parallel: 2	  max-parallel: 2
```	```
### `jobs.<job_id>.continue-on-error`	### `jobs.<job_id>.continue-on-error`
Prevents a workflow run from failing when a job fails. Set to `true` to allow a workflow run to pass when this job fails.	Prevents a workflow run from failing when a job fails. Set to `true` to allow a workflow run to pass when this job fails.
#### Example preventing a specific failing matrix job from failing a workflow run	#### Example preventing a specific failing matrix job from failing a workflow run
You can allow specific jobs in a job matrix to fail without failing the workflow run. For example, if you wanted to only allow an experimental job with `node` set to `15` to fail without failing the workflow run.	You can allow specific jobs in a job matrix to fail without failing the workflow run. For example, if you wanted to only allow an experimental job with `node` set to `15` to fail without failing the workflow run.
{% raw %}	{% raw %}
```yaml	```yaml
runs-on: ${{ matrix.os }}	runs-on: ${{ matrix.os }}
continue-on-error: ${{ matrix.experimental }}	continue-on-error: ${{ matrix.experimental }}
strategy:	strategy:
  fail-fast: false	  fail-fast: false
  matrix:	  matrix:
    node: [13, 14]	    node: [13, 14]
    os: [macos-latest, ubuntu-18.04]	    os: [macos-latest, ubuntu-18.04]
    experimental: [false]	    experimental: [false]
    include:	    include:
      - node: 15	      - node: 15
        os: ubuntu-18.04	        os: ubuntu-18.04
        experimental: true	        experimental: true
```	```
{% endraw %}	{% endraw %}
### `jobs.<job_id>.container`	### `jobs.<job_id>.container`
A container to run any steps in a job that don't already specify a container. If you have steps that use both script and container actions, the container actions will run as sibling containers on the same network with the same volume mounts.	A container to run any steps in a job that don't already specify a container. If you have steps that use both script and container actions, the container actions will run as sibling containers on the same network with the same volume mounts.
If you do not set a `container`, all steps will run directly on the host specified by `runs-on` unless a step refers to an action configured to run in a container.	If you do not set a `container`, all steps will run directly on the host specified by `runs-on` unless a step refers to an action configured to run in a container.
#### Example	#### Example
```yaml	```yaml
jobs:	jobs:
  my_job:	  my_job:
    container:	    container:
      image: node:14.16	      image: node:14.16
      env:	      env:
        NODE_ENV: development	        NODE_ENV: development
      ports:	      ports:
        - 80	        - 80
      volumes:	      volumes:
        - my_docker_volume:/volume_mount	        - my_docker_volume:/volume_mount
      options: --cpus 1	      options: --cpus 1
```	```
When you only specify a container image, you can omit the `image` keyword.	When you only specify a container image, you can omit the `image` keyword.
```yaml	```yaml
jobs:	jobs:
  my_job:	  my_job:
    container: node:14.16	    container: node:14.16
```	```
### `jobs.<job_id>.container.image`	### `jobs.<job_id>.container.image`
The Docker image to use as the container to run the action. The value can be the Docker Hub image name or a {% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}public{% endif %} registry name.	The Docker image to use as the container to run the action. The value can be the Docker Hub image name or a {% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}public{% endif %} registry name.
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}	{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### `jobs.<job_id>.container.credentials`	### `jobs.<job_id>.container.credentials`
{% data reusables.actions.registry-credentials %}	{% data reusables.actions.registry-credentials %}
#### Example	#### Example
{% raw %}	{% raw %}
```yaml	```yaml
container:	container:
  image: ghcr.io/owner/image	  image: ghcr.io/owner/image
  credentials:	  credentials:
     username: ${{ github.actor }}	     username: ${{ github.actor }}
     password: ${{ secrets.ghcr_token }}	     password: ${{ secrets.ghcr_token }}
```	```
{% endraw %}	{% endraw %}
{% endif %}	{% endif %}
### `jobs.<job_id>.container.env`	### `jobs.<job_id>.container.env`
Sets a `map` of environment variables in the container.	Sets a `map` of environment variables in the container.
### `jobs.<job_id>.container.ports`	### `jobs.<job_id>.container.ports`
Sets an `array` of ports to expose on the container.	Sets an `array` of ports to expose on the container.
### `jobs.<job_id>.container.volumes`	### `jobs.<job_id>.container.volumes`
Sets an `array` of volumes for the container to use. You can use volumes to share data between services or other steps in a job. You can specify named Docker volumes, anonymous Docker volumes, or bind mounts on the host.	Sets an `array` of volumes for the container to use. You can use volumes to share data between services or other steps in a job. You can specify named Docker volumes, anonymous Docker volumes, or bind mounts on the host.
To specify a volume, you specify the source and destination path:	To specify a volume, you specify the source and destination path:
`<source>:<destinationPath>`.	`<source>:<destinationPath>`.
The `<source>` is a volume name or an absolute path on the host machine, and `<destinationPath>` is an absolute path in the container.	The `<source>` is a volume name or an absolute path on the host machine, and `<destinationPath>` is an absolute path in the container.
#### Example	#### Example
```yaml	```yaml
volumes:	volumes:
  - my_docker_volume:/volume_mount	  - my_docker_volume:/volume_mount
  - /data/my_data	  - /data/my_data
  - /source/directory:/destination/directory	  - /source/directory:/destination/directory
```	```
### `jobs.<job_id>.container.options`	### `jobs.<job_id>.container.options`
Additional Docker container resource options. For a list of options, see "[`docker create` options](https://docs.docker.com/engine/reference/commandline/create/#options)."	Additional Docker container resource options. For a list of options, see "[`docker create` options](https://docs.docker.com/engine/reference/commandline/create/#options)."
### `jobs.<job_id>.services`	### `jobs.<job_id>.services`
{% data reusables.github-actions.docker-container-os-support %}	{% data reusables.github-actions.docker-container-os-support %}
Used to host service containers for a job in a workflow. Service containers are useful for creating databases or cache services like Redis. The runner  automatically creates a Docker network and manages the life cycle of the service containers.	Used to host service containers for a job in a workflow. Service containers are useful for creating databases or cache services like Redis. The runner  automatically creates a Docker network and manages the life cycle of the service containers.
If you configure your job to run in a container, or your step uses container actions, you don't need to map ports to access the service or action. Docker automatically exposes all ports between containers on the same Docker user-defined bridge network. You can directly reference the service container by its hostname. The hostname is automatically mapped to the label name you configure for the service in the workflow.	If you configure your job to run in a container, or your step uses container actions, you don't need to map ports to access the service or action. Docker automatically exposes all ports between containers on the same Docker user-defined bridge network. You can directly reference the service container by its hostname. The hostname is automatically mapped to the label name you configure for the service in the workflow.
If you configure the job to run directly on the runner machine and your step doesn't use a container action, you must map any required Docker service container ports to the Docker host (the runner machine). You can access the service container using localhost and the mapped port.	If you configure the job to run directly on the runner machine and your step doesn't use a container action, you must map any required Docker service container ports to the Docker host (the runner machine). You can access the service container using localhost and the mapped port.
For more information about the differences between networking service containers, see "[About service containers](/actions/automating-your-workflow-with-github-actions/about-service-containers)."	For more information about the differences between networking service containers, see "[About service containers](/actions/automating-your-workflow-with-github-actions/about-service-containers)."
#### Example using localhost	#### Example using localhost
This example creates two services: nginx and redis. When you specify the Docker host port but not the container port, the container port is randomly assigned to a free port. {% data variables.product.prodname_dotcom %} sets the assigned container port in the {% raw %}`${{job.services.<service_name>.ports}}`{% endraw %} context. In this example, you can access the service container ports using the {% raw %}`${{ job.services.nginx.ports['8080'] }}`{% endraw %} and {% raw %}`${{ job.services.redis.ports['6379'] }}`{% endraw %} contexts.	This example creates two services: nginx and redis. When you specify the Docker host port but not the container port, the container port is randomly assigned to a free port. {% data variables.product.prodname_dotcom %} sets the assigned container port in the {% raw %}`${{job.services.<service_name>.ports}}`{% endraw %} context. In this example, you can access the service container ports using the {% raw %}`${{ job.services.nginx.ports['8080'] }}`{% endraw %} and {% raw %}`${{ job.services.redis.ports['6379'] }}`{% endraw %} contexts.
```yaml	```yaml
services:	services:
  nginx:	  nginx:
    image: nginx	    image: nginx
    # Map port 8080 on the Docker host to port 80 on the nginx container	    # Map port 8080 on the Docker host to port 80 on the nginx container
    ports:	    ports:
      - 8080:80	      - 8080:80
  redis:	  redis:
    image: redis	    image: redis
    # Map TCP port 6379 on Docker host to a random free port on the Redis container	    # Map TCP port 6379 on Docker host to a random free port on the Redis container
    ports:	    ports:
      - 6379/tcp	      - 6379/tcp
```	```
### `jobs.<job_id>.services.<service_id>.image`	### `jobs.<job_id>.services.<service_id>.image`
The Docker image to use as the service container to run the action. The value can be the Docker Hub image name or a {% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}public{% endif %} registry name.	The Docker image to use as the service container to run the action. The value can be the Docker Hub image name or a {% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}public{% endif %} registry name.
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}	{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### `jobs.<job_id>.services.<service_id>.credentials`	### `jobs.<job_id>.services.<service_id>.credentials`
{% data reusables.actions.registry-credentials %}	{% data reusables.actions.registry-credentials %}
#### Example	#### Example
{% raw %}	{% raw %}
```yaml	```yaml
services:	services:
  myservice1:	  myservice1:
    image: ghcr.io/owner/myservice1	    image: ghcr.io/owner/myservice1
    credentials:	    credentials:
      username: ${{ github.actor }}	      username: ${{ github.actor }}
      password: ${{ secrets.ghcr_token }}	      password: ${{ secrets.ghcr_token }}
  myservice2:	  myservice2:
    image: dockerhub_org/myservice2	    image: dockerhub_org/myservice2
    credentials:	    credentials:
      username: ${{ secrets.DOCKER_USER }}	      username: ${{ secrets.DOCKER_USER }}
      password: ${{ secrets.DOCKER_PASSWORD }}	      password: ${{ secrets.DOCKER_PASSWORD }}
```	```
{% endraw %}	{% endraw %}
{% endif %}	{% endif %}
### `jobs.<job_id>.services.<service_id>.env`	### `jobs.<job_id>.services.<service_id>.env`
Sets a `map` of environment variables in the service container.	Sets a `map` of environment variables in the service container.
### `jobs.<job_id>.services.<service_id>.ports`	### `jobs.<job_id>.services.<service_id>.ports`
Sets an `array` of ports to expose on the service container.	Sets an `array` of ports to expose on the service container.
### `jobs.<job_id>.services.<service_id>.volumes`	### `jobs.<job_id>.services.<service_id>.volumes`
Sets an `array` of volumes for the service container to use. You can use volumes to share data between services or other steps in a job. You can specify named Docker volumes, anonymous Docker volumes, or bind mounts on the host.	Sets an `array` of volumes for the service container to use. You can use volumes to share data between services or other steps in a job. You can specify named Docker volumes, anonymous Docker volumes, or bind mounts on the host.
To specify a volume, you specify the source and destination path:	To specify a volume, you specify the source and destination path:
`<source>:<destinationPath>`.	`<source>:<destinationPath>`.
The `<source>` is a volume name or an absolute path on the host machine, and `<destinationPath>` is an absolute path in the container.	The `<source>` is a volume name or an absolute path on the host machine, and `<destinationPath>` is an absolute path in the container.
#### Example	#### Example
```yaml	```yaml
volumes:	volumes:
  - my_docker_volume:/volume_mount	  - my_docker_volume:/volume_mount
  - /data/my_data	  - /data/my_data
  - /source/directory:/destination/directory	  - /source/directory:/destination/directory
```	```
### `jobs.<job_id>.services.<service_id>.options`	### `jobs.<job_id>.services.<service_id>.options`
Additional Docker container resource options. For a list of options, see "[`docker create` options](https://docs.docker.com/engine/reference/commandline/create/#options)."	Additional Docker container resource options. For a list of options, see "[`docker create` options](https://docs.docker.com/engine/reference/commandline/create/#options)."
### Filter pattern cheat sheet	### Filter pattern cheat sheet
You can use special characters in path, branch, and tag filters.	You can use special characters in path, branch, and tag filters.
- `*`: Matches zero or more characters, but does not match the `/` character. For example, `Octo*` matches `Octocat`.	- `*`: Matches zero or more characters, but does not match the `/` character. For example, `Octo*` matches `Octocat`.
- `**`: Matches zero or more of any character.	- `**`: Matches zero or more of any character.
- `?`: Matches zero or one single character. For example, `Octoc?t` matches `Octocat`.	- `?`: Matches zero or one single character. For example, `Octoc?t` matches `Octocat`.
- `+`: Matches one or more of the preceding character.	- `+`: Matches one or more of the preceding character.
- `[]` Matches one character listed in the brackets or included in ranges. Ranges can only include `a-z`, `A-Z`, and `0-9`. For example, the range`[0-9a-z]` matches any digit or lowercase letter. For example, `[CB]at` matches `Cat` or `Bat` and `[1-2]00` matches `100` and `200`.	- `[]` Matches one character listed in the brackets or included in ranges. Ranges can only include `a-z`, `A-Z`, and `0-9`. For example, the range`[0-9a-z]` matches any digit or lowercase letter. For example, `[CB]at` matches `Cat` or `Bat` and `[1-2]00` matches `100` and `200`.
- `!`: At the start of a pattern makes it negate previous positive patterns. It has no special meaning if not the first character.	- `!`: At the start of a pattern makes it negate previous positive patterns. It has no special meaning if not the first character.
The characters `*`, `[`, and `!` are special characters in YAML. If you start a pattern with `*`, `[`, or `!`, you must enclose the pattern in quotes.	The characters `*`, `[`, and `!` are special characters in YAML. If you start a pattern with `*`, `[`, or `!`, you must enclose the pattern in quotes.
```yaml	```yaml
# Valid	# Valid
- '**/README.md'	- '**/README.md'
# Invalid - creates a parse error that	# Invalid - creates a parse error that
# prevents your workflow from running.	# prevents your workflow from running.
- **/README.md	- **/README.md
```	```
For more information about branch, tag, and path filter syntax, see "[`on.<push|pull_request>.<branches|tags>`](#onpushpull_requestbranchestags)" and "[`on.<push|pull_request>.paths`](#onpushpull_requestpaths)."	For more information about branch, tag, and path filter syntax, see "[`on.<push|pull_request>.<branches|tags>`](#onpushpull_requestbranchestags)" and "[`on.<push|pull_request>.paths`](#onpushpull_requestpaths)."
#### Patterns to match branches and tags	#### Patterns to match branches and tags
| Pattern | Description | Example matches |	| Pattern | Description | Example matches |
|---------|------------------------|---------|	|---------|------------------------|---------|
| `feature/*` | The `*` wildcard matches any character, but does not match slash (`/`). |  `feature/my-branch`<br/><br/>`feature/your-branch` |	| `feature/*` | The `*` wildcard matches any character, but does not match slash (`/`). |  `feature/my-branch`<br/><br/>`feature/your-branch` |
| `feature/**` | The `**` wildcard matches any character including slash (`/`) in branch and tag names. | `feature/beta-a/my-branch`<br/><br/>`feature/your-branch`<br/><br/>`feature/mona/the/octocat` |	| `feature/**` | The `**` wildcard matches any character including slash (`/`) in branch and tag names. | `feature/beta-a/my-branch`<br/><br/>`feature/your-branch`<br/><br/>`feature/mona/the/octocat` |
| `main`<br/><br/>`releases/mona-the-octcat` | Matches the exact name of a branch or tag name. | `main`<br/><br/>`releases/mona-the-octocat` |	| `main`<br/><br/>`releases/mona-the-octcat` | Matches the exact name of a branch or tag name. | `main`<br/><br/>`releases/mona-the-octocat` |
| `'*'` | Matches all branch and tag names that don't contain a slash (`/`). The `*` character is a special character in YAML. When you start a pattern with `*`, you must use quotes. | `main`<br/><br/>`releases` |	| `'*'` | Matches all branch and tag names that don't contain a slash (`/`). The `*` character is a special character in YAML. When you start a pattern with `*`, you must use quotes. | `main`<br/><br/>`releases` |
| `'**'` | Matches all branch and tag names. This is the default behavior when you don't use a `branches` or `tags` filter. | `all/the/branches`<br/><br/>`every/tag` |	| `'**'` | Matches all branch and tag names. This is the default behavior when you don't use a `branches` or `tags` filter. | `all/the/branches`<br/><br/>`every/tag` |
| `'*feature'` | The `*` character is a special character in YAML. When you start a pattern with `*`, you must use quotes. | `mona-feature`<br/><br/>`feature`<br/><br/>`ver-10-feature` |	| `'*feature'` | The `*` character is a special character in YAML. When you start a pattern with `*`, you must use quotes. | `mona-feature`<br/><br/>`feature`<br/><br/>`ver-10-feature` |
| `v2*` | Matches branch and tag names that start with `v2`. | `v2`<br/><br/>`v2.0`<br/><br/>`v2.9` |	| `v2*` | Matches branch and tag names that start with `v2`. | `v2`<br/><br/>`v2.0`<br/><br/>`v2.9` |
| `v[12].[0-9]+.[0-9]+` | Matches all semantic versioning branches and tags with major version 1 or 2 | `v1.10.1`<br/><br/>`v2.0.0` |	| `v[12].[0-9]+.[0-9]+` | Matches all semantic versioning branches and tags with major version 1 or 2 | `v1.10.1`<br/><br/>`v2.0.0` |
#### Patterns to match file paths	#### Patterns to match file paths
Path patterns must match the whole path, and start from the repository's root.	Path patterns must match the whole path, and start from the repository's root.
| Pattern | Description of matches | Example matches |	| Pattern | Description of matches | Example matches |
|---------|------------------------|-----------------|	|---------|------------------------|-----------------|
| `'*'` | The `*` wildcard matches any character, but does not match slash (`/`). The `*` character is a special character in YAML. When you start a pattern with `*`, you must use quotes. | `README.md`<br/><br/>`server.rb` |	| `'*'` | The `*` wildcard matches any character, but does not match slash (`/`). The `*` character is a special character in YAML. When you start a pattern with `*`, you must use quotes. | `README.md`<br/><br/>`server.rb` |
| `'*.jsx?'` | The `?` character matches zero or one of the preceding character. | `page.js`<br/><br/>`page.jsx` |	| `'*.jsx?'` | The `?` character matches zero or one of the preceding character. | `page.js`<br/><br/>`page.jsx` |
| `'**'` | The `**` wildcard matches any character including slash (`/`). This is the default behavior when you don't use a `path` filter. | `all/the/files.md` |	| `'**'` | The `**` wildcard matches any character including slash (`/`). This is the default behavior when you don't use a `path` filter. | `all/the/files.md` |
| `'*.js'` | The `*` wildcard matches any character, but does not match slash (`/`). Matches all `.js` files at the root of the repository. | `app.js`<br/><br/>`index.js`	| `'*.js'` | The `*` wildcard matches any character, but does not match slash (`/`). Matches all `.js` files at the root of the repository. | `app.js`<br/><br/>`index.js`
| `'**.js'` | Matches all `.js` files in the repository. | `index.js`<br/><br/>`js/index.js`<br/><br/>`src/js/app.js` |	| `'**.js'` | Matches all `.js` files in the repository. | `index.js`<br/><br/>`js/index.js`<br/><br/>`src/js/app.js` |
| `docs/*`  | All files within the root of the `docs` directory, at the root of the repository. | `docs/README.md`<br/><br/>`docs/file.txt` |	| `docs/*`  | All files within the root of the `docs` directory, at the root of the repository. | `docs/README.md`<br/><br/>`docs/file.txt` |
| `docs/**` | Any files in the `/docs` directory at the root of the repository. | `docs/README.md`<br/><br/>`docs/mona/octocat.txt` |	| `docs/**` | Any files in the `/docs` directory at the root of the repository. | `docs/README.md`<br/><br/>`docs/mona/octocat.txt` |
| `docs/**/*.md` | A file with a `.md` suffix anywhere in the `docs` directory. | `docs/README.md`<br/><br/>`docs/mona/hello-world.md`<br/><br/>`docs/a/markdown/file.md`	| `docs/**/*.md` | A file with a `.md` suffix anywhere in the `docs` directory. | `docs/README.md`<br/><br/>`docs/mona/hello-world.md`<br/><br/>`docs/a/markdown/file.md`
| `'**/docs/**'`   | Any files in a `docs` directory anywhere in the repository. | `/docs/hello.md`<br/><br/>`dir/docs/my-file.txt`<br/><br/>`space/docs/plan/space.doc`	| `'**/docs/**'`   | Any files in a `docs` directory anywhere in the repository. | `/docs/hello.md`<br/><br/>`dir/docs/my-file.txt`<br/><br/>`space/docs/plan/space.doc`
| `'**/README.md'` | A README.md file anywhere in the repository. | `README.md`<br/><br/>`js/README.md`	| `'**/README.md'` | A README.md file anywhere in the repository. | `README.md`<br/><br/>`js/README.md`
| `'**/*src/**'` | Any file in a folder with a `src` suffix anywhere in the repository. | `a/src/app.js`<br/><br/>`my-src/code/js/app.js`	| `'**/*src/**'` | Any file in a folder with a `src` suffix anywhere in the repository. | `a/src/app.js`<br/><br/>`my-src/code/js/app.js`
| `'**/*-post.md'` | A file with the suffix `-post.md` anywhere in the repository. | `my-post.md`<br/><br/>`path/their-post.md` |	| `'**/*-post.md'` | A file with the suffix `-post.md` anywhere in the repository. | `my-post.md`<br/><br/>`path/their-post.md` |
| `'**/migrate-*.sql'` | A file with the prefix `migrate-` and suffix `.sql` anywhere in the repository. | `migrate-10909.sql`<br/><br/>`db/migrate-v1.0.sql`<br/><br/>`db/sept/migrate-v1.sql` |	| `'**/migrate-*.sql'` | A file with the prefix `migrate-` and suffix `.sql` anywhere in the repository. | `migrate-10909.sql`<br/><br/>`db/migrate-v1.0.sql`<br/><br/>`db/sept/migrate-v1.sql` |
| `*.md`<br/><br/>`!README.md` | Using an exclamation mark (`!`) in front of a pattern negates it. When a file matches a pattern and also matches a negative pattern defined later in the file, the file will not be included. | `hello.md`<br/><br/>_Does not match_<br/><br/>`README.md`<br/><br/>`docs/hello.md` |	| `*.md`<br/><br/>`!README.md` | Using an exclamation mark (`!`) in front of a pattern negates it. When a file matches a pattern and also matches a negative pattern defined later in the file, the file will not be included. | `hello.md`<br/><br/>_Does not match_<br/><br/>`README.md`<br/><br/>`docs/hello.md` |
| `*.md`<br/><br/>`!README.md`<br/><br/>`README*` | Patterns are checked sequentially. A pattern that negates a previous pattern will re-include file paths. | `hello.md`<br/><br/>`README.md`<br/><br/>`README.doc`|	| `*.md`<br/><br/>`!README.md`<br/><br/>`README*` | Patterns are checked sequentially. A pattern that negates a previous pattern will re-include file paths. | `hello.md`<br/><br/>`README.md`<br/>

<br/>

`README.doc`|
data/reusables/github-actions/run_number_description.md
 About the Request We Recieved
On July 29, 2022, we recieved a request for verification of non-filing of a tax return
As of the date of this letter, we have no record of a processed tax return for the tax period listeed above.
If you have any questions, you can call 800-829-1040.,
Uncollected Earned Income Crerdit Appropriate, Affiliate, Security', at Value.
Employer :
Employer's Identification Number (EIN) :XXXXX7919
ALPH INC
1600 A
Reciepient :
Recipient's Social Security Number (SSN) : XXX-XX-1725
ZACH T WOO
$75,698,871,600
DALLAS TX 75235
WOO
Marrried
Taxable Marital Status: 
Exemptions/Allowances
Other Benefits and Earning's Statement 
Information 
Regular 
Statement of Assets and Liabilities 
As of February 28, 2022
Pto Balance
Overtime
Fiscal' year' s end | September 28th.
Total Work Hrs 
Bonus
Training
Unappropriated, Affiliated, Securities, at Value.
Important Notes
Additions"+$$22,756,988,716,000.00":,''
Issuer: THE101 EARecipient's Social Security Number : xxx-xx-1725Employeer Identification Number (EIN) :XXXXX79196553ZACH TDRWOOTaxable Marital Status: 
Exemptions/AllowancesMarriedOther Benefits andDALLAS TX 75235InformationZAC\HRY T WOODrateunitsPto BalanceEarning's Statement5222 BRADFORD DRTX:48Total Work HrsRegularyear to dateImportant NotesOvertime112.2674678000 Bonus
Training4Other Benefits and37151InformationCalendar Year$75,698,871,600.006553
600 Coolidge Drive, Suite 300V
Pto BalanceDRFolsom, CA 95630Total Work HrsSubmission Type . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Original document
Phone number: 888.901.9695
Important NotesFederal Income Tax Withheld: . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Married
Fax number: 888.901.9695
Wages, Tips and Other Compensation: . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Other Benefits and Earning's Statement
Website: https://intuit.taxaudit.com

on: push: branches: - main : - releases :*# :This is a basic workflow to help you get started with Actions.js :Name :ci :title :bitore.sig :On:-on :Request :Pull :::Pull ::pull_request :Employee Info Isssuer United States Department of The Treasury Employee Id 9999999998 IRS No. 000000000000 Remitter INTERNAL REVENUE SERVICE, $20,210,418.00 PO BOX 1214, Rate Units Total YTD Taxes / Deductions Current YTD CHARLOTTE, NC 28201-1214 - - $70,842,745,000.00 $70,842,745,000.00 Federal Withholding $0.00 $0.00 Earnings FICA - Social Security $0.00 $8,853.60 Commissions FICA - Medicare $0.00 $0.00 Employer Taxes FUTA $0.00 $0.00 SUTA $0.00 $0.00 EIN: 61-1767ID91:900037305581 SSN: 633441725 YTD Gross Gross $70,842,745,000.00 $70,842,745,000.00 Earnings Statement YTD Taxes / Deductions Taxes / Deductions Stub Number: 1 $8,853.60 $0.00 YTD Net Pay net, pay. SSN Pay Schedule Paid Period Sep 28, 2022 to Sep 29, 2023 15-Apr-22 Pay Day 18-Apr-22 $70,842,736,146.40 $70,842,745,000.00 XXX-XX-1725 Annually Sep 28, 2022 to Sep 29, 2023 CHECK DATE CHECK NUMBER 001000 18-Apr-22 PAY TO THE : ZACHRY WOOD Office of the 46th President Of The United States. 117th US Congress Seal Of The US Treasury Department, 1769 W.H.W. DC, US 2022. : INTERNAL REVENUE SERVICE,PO BOX 1214,CHARLOTTE, NC 28201-1214 CHECK AMOUNT ****$70,842,745,000.00** Pay** *****ZACHRY.WOOD****************** :NON-NEGOTIABLE : VOID AFTER 14 DAYS INTERNAL REVENUE SERVICE :000,000.00 $18,936,000,000.00 $18,525,000,000.00 $17,930,000,000.00 $15,227,000,000.00 $11,247,000,000.00 $6,959,000,000.00 $6,836,000,000.00 $10,671,000,000.00 $7,068,000,000.00 $76,033,000,000.00 $20,642,000,000.00 $18,936,000,000.00 $18,525,000,000.00 $17,930,000,000.00 $15,227,000,000.00 $11,247,000,000.00 $6,959,000,000.00 $6,836,000,000.00 $10,671,000,000.00 $7,068,000,000.00 $76,033,000,000.00 $20,642,000,000.00 $18,936,000,000.00 $18,525,000,000.00 $17,930,000,000.00 $15,227,000,000.00 $11,247,000,000.00 $6,959,000,000.00 $6,836,000,000.00 $10,671,000,000.00 $7,068,000,000.00 $76,033,000,000.00 $20,642,000,000.00 $18,936,000,000.00 $257,637,000,000.00 $75,325,000,000.00 $65,118,000,000.00 $61,880,000,000.00 $55,314,000,000.00 $56,898,000,000.00 $46,173,000,000.00 $38,297,000,000.00 $41,159,000,000.00 $46,075,000,000.00 $40,499,000,000.00 $78,714,000,000.00 $21,885,000,000.00 $21,031,000,000.00 $19,361,000,000.00 $16,437,000,000.00 $15,651,000,000.00 $11,213,000,000.00 $6,383,000,000.00 $7,977,000,000.00 $9,266,000,000.00 $9,177,000,000.00 $0.16 $0.18 $0.16 $0.16 $0.16 $0.16 $0.12 $0.18 $6,836,000,000.00 $7,977,000,000.00 $113.88 $31.15 $28.44 $27.69 $26.63 $22.54 $16.55 $10.21 $9.96 $15.49 $10.20 $113.88 $31.12 $28.44 $27.69 $26.63 $22.46 $16.55 $10.21 $9.96 $15.47 $10.20 $112.20 $30.69 $27.99 $27.26 $26.29 $22.30 $16.40 $10.13 $9.87 $15.35 $10.12 $112.20 $30.67 $27.99 $27.26 $26.29 $22.23 $16.40 $10.13 $9.87 $15.33 $10.12 $667,650,000.00 $662,664,000.00 $665,758,000.00 $668,958,000.00 $673,220,000.00 $675,581,000.00 $679,449,000.00 $681,768,000.00 $686,465,000.00 $688,804,000.00 $692,741,000.00 $677,674,000.00 $672,493,000.00 $676,519,000.00 $679,612,000.00 $682,071,000.00 $682,969,000.00 $685,851,000.00 $687,024,000.00 $692,267,000.00 $695,193,000.00 $698,199,000.00 $9.87 $113.88 $31.15 $28.44 $27.69 $26.63 $22.54 $16.55 $10.21 $9.96 $15.49 $10.20 $1.00 $112.20 $30.69 $27.99 $27.26 $26.29 $22.30 $16.40 $10.13 $9.87 $15.35 $10.12 $667,650,000.00 $662,664,000.00 $665,758,000.00 $668,958,000.00 $673,220,000.00 $675,581,000.00 $679,449,000.00 $681,768,000.00 $686,465,000.00 $688,804,000.00 $692,741,000.00 $677,674,000.00 $672,493,000.00 $676,519,000.00 $679,612,000.00 $682,071,000.00 $682,969,000.00 $685,851,000.00 $687,024,000.00 $692,267,000.00 $695,193,000.00 $698,199,000.00 :       $70,842,745,000.00      633-44-1725     Annually :                                                branches: - main : on: schedule: - cron: "0 2 * * 1-5 : obs: my_job: name :deploy to staging : runs-on :ubuntu-18.04 :The available virtual machine types are:ubuntu-latest, ubuntu-18.04, or ubuntu-16.04 :windows-latest :# :Controls when the workflow will run :on: # :Triggers the workflow on push or pull request events but only for the "Masterbranch" branch : push: EFT informationRouting number: 021000021Payment account ending: 9036Name on the account: ADPTax reporting informationInternal Revenue ServiceUnited States Department of the TreasuryMemphis, TN 375001-1498Tracking ID: 1023934415439Customer File Number: 132624428Date of Issue: 07-29-2022ZACHRY T WOOD3050 REMOND DR APT 1206DALLAS, TX 75211Taxpayer's Name: ZACH T WOOTaxpayer Identification Number: XXX-XX-1725Tax Period: December, 2018Return: 1040 ZACHRY TYLER WOOD 5323 BRADFORD DRIVE DALLAS TX 75235 EMPLOYER IDENTIFICATION NUMBER :611767919 :FIN :xxxxx4775 THE 101 
YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM $0.001 TO 33611.5895286 :
State Income Tax
Total Work Hrs 
Bonus
Training
Your federal taxable wages this period are $22,756,988,716,000.00
Net.Important Notes
0.001 TO 112.20 PAR SHARE VALUE
Tot*$70,842,743,866.00
$22,756,988,716,000
$22,756,988,716,000
1600 AMPIHTHEATRE PARKWAY 
MOUNTAIN VIEW CA 94043
Statement of Assets and Liabilities As of February 28, 2022
Fiscal' year' s end | September 28th.Unappropriated, Affiliated, Securities, at Value.(1) For subscriptions, your payment method on file will be automatically charged monthly/annually at the then-current list price until you cancel. If you have a discount it will apply to the then-current list price until it expires. To cancel your subscription at any time, go to Account & Settings and cancel the subscription. (2) For one-time services, your payment method on file will reflect the charge in the amount referenced in this invoice. Terms, conditions, pricing, features, service, and support options are subject to change without notice.

All dates and times are Pacific Standard Time (PST).
ZACHRY T WOOD Cash and Cash Equivalents, Beginning of Period Department of the Treasury Internal Revenue Service 
Calendar Year Due: 04/18/2022 
USD in "000'"s Repayments for Long Term Debt Costs and expenses: Cost of revenues Research and development Sales and marketing General and administrative European Commission fines Total costs and expenses Income from operations Other income (expense), net Income before income taxes Provision for income taxes Net income 
*include interest paid, capital obligation, and underweighting 
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) 









Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share) *include interest paid, capital obligation, and underweighting 
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share) 





























INTERNAL REVENUE SERVICE, PO BOX 1214, CHARLOTTE, NC 28201-1214 
ZACHRY WOOD 15 For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions. Cat. No. 11320B Form 1040 (2021) Reported Normalized and Operating Income/Expense Supplemental Section Total Revenue as Reported, Supplemental Total Operating Profit/Loss as Reported, Supplemental Reported Effective Tax Rate Reported Normalized Income Reported Normalized Operating Profit Other Adjustments to Net Income Available to Common Stockholders Discontinued Operations Basic EPS Basic EPS from Continuing Operations Basic EPS from Discontinued Operations Diluted EPS Diluted EPS from Continuing Operations Diluted EPS from Discontinued Operations Basic Weighted Average Shares Outstanding Diluted Weighted Average Shares Outstanding Reported Normalized Diluted EPS Basic EPS Diluted EPS Basic WASO Diluted WASO Fiscal year end September 28th., 2022. | USD 
For Paperwork Reduction Act Notice, see the seperate Instructions. 





important information 

2012201320142015ZACHRY.T.5323.DALLAS.Other.Benefits.and Information Pto Balance 9xygchr6$13Earnings Statement 065-0001 ALPHABET Period Beginning: 1600 AMPITHEATRE PARKWAY DRPeriod Ending: MOUNTAIN VIEW, C.A., 94043Pay Date: 2965 Taxable Marital Status: Exemptions/AllowancesMarried BRADFORD DR Federal: TX:NO State Income Tax rateunitsthis periodyear to date $112$674,678,000$75,698,871,600$141,685,487,7329/29/2021 9/28/2022 Statutory 1/29/2023 Federal Income Tax$141,685,487,732 Social Security Tax$70,842,743,866$141,685,487,732 Medicare Tax WOOD Net Pay$70,842,743,866 CHECKING TX 75235-8314 Net Check$70,842,743,866 Your federal taxable wages this period are $$0 1 Alphabet Inc., co. 1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 Deposited to the account Of: ZACHRY T. WOOD 4720416547 650001 719218914/18/2022 4720416547 transit ABA 15-51\000 575A " Business Checking For 24-hour account information, sign on to pnc.com/mybusiness/ Business Checking Account number: 47-2041-6547 - continued Activity Detail Deposits and Other Additions ACH Additions Date posted 27-Apr Checks and Other Deductions Deductions Date posted 26-Apr Service Charges and Fees Date posted 27-Apr Detail of Services Used During Current Period Note: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement a Charge Period Ending 04/29/2022, Description Account Maintenance Charge Total For Services Used This Peiiod Total Service (harge Reviewing Your Statement Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if: you have any questions regarding your account(s); your name or address is incorrect; • you have any questions regarding interest paid to an interest-bearing account. Balancing Your Account Update Your Account Register We will investigate your complaint and will correct any error promptly, If we take longer than 10 business days, we will provisionally credit your account for the amount you think is in error, so that you will have use of the money during the time it ekes us to complete our investigation. Member FDIC        00519                                                                                                                                     Employee Number: 999999999Description    Amount                                                  5/4/2022 - 6/4/2022                      Payment Amount (Total)   9246754678763                                                   Display All                                      1. Social Security (Employee + Employer)                 26662                                                                            2. Medicare (Employee + Employer)                        861193422444                                    Hourly                           3. Federal Income Tax                    8385561229657                                   00000                                            Note: This report is generated based on the payroll data for your reference only. Please contact IRS office for special cases such as late payment, previous overpayment, penalty and others.Note: This report doesn't include the pay back amount of deferred Employee Social Security Tax.                                                                                                                 Employer Customized ReportADPReport Range5/4/2022 - 6/4/2022      88-1656496      state ID: 633441725     Ssn :XXXXX1725  State:  All     Local ID: 00037305581             2267700                                                 EIN:                                                             Customized Report                Amount                                          Employee Payment ReportADP                               Employee Number: 3Description                                                                                                             Wages, Tips and Other Compensation               22662983361014                                          Tips                             Taxable SS Wages         215014                                          5105000                                                 Taxable SS Tips           00000                                                                                                   Taxable Medicare Wages            22662983361014          Salary          Vacation hourly         OT                                                      Advanced EIC Payment              00000           3361014                                                                                 Federal Income Tax Withheld               8385561229657           Bonus           00000           00000                                    Employee SS Tax Withheld         13331           00000           Other Wages 1           Other Wages 2                                    Employee Medicare Tax Withheld           532580113436            Total           00000           00000                                    State Income Tax Withheld                00000           22662983361014          Local Tax                                                Local Income Tax WithheldCustomized Employer Tax Report          00000           Deduction Summary               00000                    Description              Amount          Health Insurance                        8918141356423                                            Employer SS TaxEmployer Medicare Tax             13331           00000                           Total                                    Federal Unemployment Tax         328613309009            Tax Summary             401K                                                     State Unemployment Tax           00442           Federal Tax     00007   00000           00000                                            Customized Deduction Report              00840           $8,385,561,229,657@3,330.90                                                      Health Insurance         00000           Advanced EIC Payment                    Social Security Tax Medicare Tax State Tax      532580113050                                                      401K            00000           00000                   8918141356423            Total                                                                                                    401K                             00000            00000                                                                                                                    ZACHRY T WOOD                                                    Social Security Tax Medicare Tax State Tax      532580113050             SHAREHOLDERS ARE URGED TO READ THE DEFINITIVE PROXY STATEMENT AND ANY OTHER RELEVANT MATERIALS THAT THE COMPANY WILL FILE WITH THE SEC CAREFULLY IN THEIR ENTIRETY WHEN THEY BECOME AVAILABLE. SUCH DOCUMENTS WILL CONTAIN IMPORTANT INFORMATION ABOUT THE COMPANY AND ITS DIRECTORS, OFFICERS AND AFFILIATES. INFORMATION REGARDING THE INTERESTS OF CERTAIN OF THE COMPANY’S DIRECTORS, OFFICERS AND AFFILIATES WILL BE AVAILABLE IN THE DEFINITIVE PROXY STATEMENT.                                                                                                  The Definitive Proxy Statement and any other relevant materials that will be filed with the SEC will be available free of charge at the SEC’s website at www.sec.gov. In addition, the Definitive Proxy Statement (when available) and other relevant documents will also be available, without charge, by directing a request by mail to Attn: Investor Relations, Alphabet Inc., 1600 Amphitheatre Parkway, Mountain View, California, 94043 or by contacting investor-relations@abc.xyz. The Definitive Proxy Statement and other relevant documents will also be available on the Company’s Investor Relations website at https://abc.xyz/investor/other/annual-meeting/.                                     The Company and its directors and certain of its executive officers may be consideredno participants in the solicitation of proxies with respect to the proposals under the Definitive Proxy Statement under the rules of the SEC. Additional information regarding the participants in the proxy solicitations and a description of their direct and indirect interests, by security holdings or otherwise, also will be included in the Definitive Proxy Statement and other relevant materials to be filed with the SEC when they become available.                  .9246754678763                                                                                                                            3/6/2022 at 6:37 PM                                                                                                                       Q4 2021  Q3 2021 Q2 2021 Q1 2021 Q4 2020                                                                                                  GOOGL_income-statement_Quarterly_As_Originally_Reported                          24934000000     25539000000     37497000000     31211000000       30818000000                                                                                     24934000000     25539000000     21890000000       19289000000     22677000000                                                     Cash Flow from Operating Activities, Indirect                             24934000000     25539000000     21890000000     19289000000     22677000000                              Net Cash Flow from Continuing Operating Activities, Indirect                             20642000000     18936000000     18525000000     17930000000       15227000000                                                     Cash Generated from Operating Activities                 6517000000       3797000000      4236000000      2592000000      5748000000                                                      Income/Loss before Non-Cash Adjustment                            3439000000      3304000000      2945000000      2753000000      3725000000       Total Adjustments for Non-Cash Items                             3439000000      3304000000      2945000000      2753000000      3725000000Depreciation, Amortization and Depletion, Non-Cash Adjustment                           3215000000      3085000000      2730000000      2525000000        3539000000                                                      Depreciation and Amortization, Non-Cash Adjustment       224000000        219000000       215000000       228000000       186000000                                                       Depreciation, Non-Cash Adjustment                         3954000000      3874000000      3803000000      3745000000      3223000000               Amortization, Non-Cash Adjustment                                1616000000      -1287000000     379000000       1100000000      1670000000Stock-Based Compensation, Non-Cash Adjustment                           -2478000000     -2158000000     -2883000000     -4751000000     -3262000000                                                       Taxes, Non-Cash Adjustment                              -2478000000     -2158000000       -2883000000     -4751000000     -3262000000                                                     Investment Income/Loss, Non-Cash Adjustment                               -14000000       64000000        -8000000        -255000000      392000000                Gain/Loss on Financial Instruments, Non-Cash Adjustment                          -2225000000     2806000000      -871000000      -1233000000       1702000000                                                      Other Non-Cash Items                            -5819000000     -2409000000       -3661000000     2794000000      -5445000000                                                     Changes in Operating Capital                              -5819000000     -2409000000     -3661000000     2794000000      -5445000000                              Change in Trade and Other Receivables                            -399000000      -1255000000     -199000000      7000000 -738000000       Change in Trade/Accounts Receivable                              6994000000      3157000000      4074000000      -4956000000     6938000000Change in Other Current Assets                          1157000000      238000000       -130000000      -982000000      963000000        Change in Payables and Accrued Expenses                          1157000000      238000000       -130000000      -982000000      963000000Change in Trade and Other Payables                               5837000000      2919000000      4204000000      -3974000000     5975000000Change in Trade/Accounts Payable                                368000000       272000000       -3000000        137000000       207000000Change in Accrued Expenses                               -3369000000     3041000000      -1082000000     785000000       740000000        Change in Deferred Assets/Liabilities                                                                                                     Change in Other Operating Capital                                                                                                         -11016000000     -10050000000    -9074000000     -5383000000     -7281000000                                                     Change in Prepayments and Deposits                                -11016000000    -10050000000    -9074000000     -5383000000     -7281000000      Cash Flow from Investing Activities                                                                                                       Cash Flow from Continuing Investing Activities                           -6383000000     -6819000000     -5496000000     -5942000000     -5479000000                                                                                       -6383000000     -6819000000     -5496000000       -5942000000     -5479000000                                                     Purchase/Sale and Disposal of Property, Plant and Equipment, Net                                                                                                                  Purchase of Property, Plant and Equipment                         -385000000      -259000000      -308000000      -1666000000     -370000000       Sale and Disposal of Property, Plant and Equipment                               -385000000      -259000000      -308000000      -1666000000       -370000000                                                      Purchase/Sale of Business, Net                          -4348000000       -3360000000     -3293000000     2195000000      -1375000000                                                     Purchase/Acquisition of Business                          -40860000000    -35153000000    -24949000000    -37072000000    -36955000000                     Purchase/Sale of Investments, Net                                                                                                         Purchase of Investments                          36512000000     31793000000     21656000000     39267000000     35580000000              100000000        388000000       23000000        30000000        -57000000                                                       Sale of Investments                                                                                                                       Other Investing Cash Flow                                 -15254000000                                                                            Purchase/Sale of Other Non-Current Assets, Net                            -16511000000    -15254000000    -15991000000    -13606000000    -9270000000                                                       Sales of Other Non-Current Assets                               -16511000000      -12610000000    -15991000000    -13606000000    -9270000000                                                     Cash Flow from Financing Activities                               -13473000000    -12610000000    -12796000000    -11395000000    -7904000000              Cash Flow from Continuing Financing Activities                           13473000000             -12796000000    -11395000000    -7904000000                                                       Issuance of/Payments for Common 343 sec cvxvxvcclpddf wearsStock, Net            -42000000                                                                                Payments for Common Stock                        115000000        -42000000       -1042000000     -37000000       -57000000                                                       Proceeds from Issuance of Common Stock                            115000000       6350000000      -1042000000     -37000000       -57000000        Issuance of/Repayments for Debt, Net                             6250000000      -6392000000     6699000000      900000000       00000    Issuance of/Repayments for Long Term Debt, Net                           6365000000      -2602000000     -7741000000     -937000000      -57000000                                                 Proceeds from Issuance of Long Term Debt                                         Repayments for Long Term Debt                            2923000000              -2453000000     -2184000000     -1647000000              Proceeds from Issuance/Exercising of Stock Options/Warrants                              00000           300000000       10000000        338000000000                                                      Other Financing Cash Flow                                                Cash and Cash Equivalents, End of Period                                                                                                  Change in Cash                           20945000000     23719000000     23630000000     26622000000     26465000000                      Effect of Exchange Rate Changes                          25930000000)    235000000000    -3175000000     300000000       6126000000       Cash and Cash Equivalents, Beginning of Period                           PAGE="$USD(181000000000)".XLS   BRIN="$USD(146000000000)".XLS   183000000 -143000000      210000000                                                       Cash Flow Supplemental Section                   23719000000000           26622000000000  26465000000000  20129000000000                                                  Change in Cash as Reported, Supplemental                          2774000000      89000000        -2992000000             6336000000                       Income Tax Paid, Supplemental                            13412000000     157000000                                                        ZACHRY T WOOD                                                            -4990000000                                                     Cash and Cash Equivalents, Beginning of Period                                                                                             Department of the Treasury                                                                                                                Internal Revenue Service                                                                                                                  Q4 2020                  Q4 2019                                                 Calendar Year                                            Due: 04/18/2022                                                                                                                           Dec. 31, 2020                    Dec. 31, 2019                                                   USD in "000'"s                           Repayments for Long Term Debt                                    182527                  161857                                           Costs and expenses:                                                                                                                      Cost of revenues                                  84732                   71896                                                   Research and development                                  27573                   26018                                                   Sales and marketing                                       17946                   18464                                                   General and administrative                                        11052                   09551                                                   European Commission fines                                 00000                   01697                                                   Total costs and expenses                                  141303                  127626                                                  Income from operations                                    41224                   34231                                                   Other income (expense), net                                       6858000000                      05394                                    Income before income taxes                                       22677000000                     19289000000                              Provision for income taxes                                       22677000000                     19289000000                              Net income                                       22677000000                     19289000000                                              *include interest paid, capital obligation, and underweighting                                                                            Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                 Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                         *include interest paid, capital obligation, and underweighting                                                                            Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                 Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                         20210418                                                                                                                         Rate    Units     Total   YTD     Taxes / Deductions      Current YTD                                                                     -       -70842745000      70842745000     Federal Withholding     00000   188813800                                                                FICA - Social Security   00000   853700                                                                                                  FICA - Medicare   00000   11816700                                                                                                        Employer Taxes                                                                                                                    FUTA    00000     00000                                                                                                   SUTA    00000   00000    EIN: 61-1767919  ID : 00037305581         SSN: 633441725                         ATAA Payments   00000   102600                           Gross                                                                                                                    70842745000     Earnings Statement                                                                                                                Taxes / Deductions        Stub Number: 1                                                                                                          00000                                                                                                                     Net Pay SSN     Pay Schedule      Pay Period      Sep 28, 2022 to Sep 29, 2023    Pay Date        4/18/2022                                                70842745000      XXX-XX-1725     Annually CHECK NUMBER




20210418                                                                                                                                Rate      Units   Total   YTD     Taxes / Deductions      Current YTD                                                                     --70842745000     70842745000     Federal Withholding     00000   188813800                                                                FICA - Social Security   00000   853700                                                                                                  FICA - Medicare   00000   11816700                                                                                                        Employer Taxes                                                                                                                    FUTA    00000     00000                                                                                                   SUTA    00000   00000

                                                                                                                                         INTERNAL REVENUE SERVICE,                                                                                                                 PO BOX 1214,                                                                                                                     CHARLOTTE, NC 28201-1214                                                                                                                           ZACHRY WOOD                                                                                                                      00015    76033000000      20642000000     18936000000     18525000000     17930000000     15227000000     11247000000     6959000000      683600000010671000000     7068000000                      For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.               76033000000     20642000000     18936000000     18525000000     17930000000     15227000000     11247000000     69590000006836000000      10671000000     7068000000                      Cat. No. 11320B         76033000000     20642000000     18936000000     18525000000       17930000000     15227000000     11247000000     6959000000      6836000000      10671000000     7068000000               Form 1040 (2021)         76033000000     20642000000     18936000000                                                                      Reported Normalized and Operating Income/Expense Supplemental Section                                                                     Total Revenue as Reported, Supplemental          257637000000    75325000000     65118000000     61880000000     55314000000     56898000000       46173000000     38297000000     41159000000     46075000000     40499000000                     Total Operating Profit/Loss as Reported, Supplemental             78714000000     21885000000     21031000000     19361000000     16437000000     15651000000     11213000000       6383000000      7977000000      9266000000      9177000000                      Reported Effective Tax Rate             00000   00000     00000   00000   00000           00000   00000   00000           00000                   Reported Normalized Income               6836000000                                       Reported Normalized Operating Profit                                                     7977000000                                       Other Adjustments to Net Income Available to Common Stockholders                         Discontinued Operations                                                                                                                  Basic EPS         00114   00031   00028   00028   00027   00023   00017   00010   00010   00015   00010                   Basic EPS from Continuing Operations              00114   00031   00028   00028   00027   00022   00017   00010   00010   00015   00010                   Basic EPS from Discontinued Operations                                                                                                     Diluted EPS              00112   00031   00028   00027   00026   00022   00016   00010   00010   00015   00010                   Diluted EPS from Continuing Operations            00112   00031   00028   00027   00026   00022   00016   00010   00010   00015   00010            Diluted EPS from Discontinued Operations                                                                                                  Basic Weighted Average Shares Outstanding                667650000       662664000       665758000       668958000       673220000       675581000 679449000       681768000       686465000       688804000       692741000                       Diluted Weighted Average Shares Outstanding               677674000       672493000       676519000       679612000       682071000       682969000       685851000       687024000 692267000       695193000       698199000                       Reported Normalized Diluted EPS                                  00010                                    Basic EPS               00114   00031   00028   00028   00027   00023   00017   00010   00010   00015     00010           00001   Diluted EPS             00112   00031   00028   00027   00026   00022   00016   00010   00010   00015   00010                     Basic WASO              667650000       662664000       665758000       668958000       673220000       675581000679449000        681768000       686465000       688804000       692741000                       Diluted WASO            677674000       672493000 676519000       679612000       682071000       682969000       685851000       687024000       692267000       695193000       698199000                 Fiscal year end September 28th., 2022. | USD

For Paperwork Reduction Act Notice, see the seperate Instructions.                      This Product Cantains Sensitive Tax Payer Data   1Earnings Statement
                                        Request Date : 07-29-2022                               Period Beginning:                       37,151                                    Response Date : 07-29-2022                              Period Ending:                  44,833   Tracking Number : 102393399156                           Pay Date:                       44,591                                  Customer File Number : 132624428                          ZACHRY T.                       WOOD                                                     5,323    BRADFORD DR             important information                   Wage and Income Transcript                                       SSN Provided : XXX-XX-1725                               DALLAS          TX 75235-8314                                           Tax Periood Requested : December, 2020                                                                            units                            year to date     Other Benefits and                                              674678000                                       75,698,871,600    Information                                                                                             Pto Balance               Total Work Hrs                                          Form W-2 Wage and Tax Statement                                         Important Notes                   Employer :                                                                      COMPANY PH Y: 650-253-0000        Employer Identification Number (EIN) :XXXXX7919                                                                 BASIS OF PAY: BASIC/DILUTED EPS                   INTU                                                                                            2700 C            Quarterly Report on Form 10-Q, as filed with the Commission on                                                                  YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 3330.90 PAR SHARE VALUE                        Employee :                                 Reciepient's Identification Number :xxx-xx-1725                                                                                          ZACH T WOOD                                                                                              5222 B                          on Form 8-K, as filed with the Commission on January 18, 2019).                                                                           Submission Type :                                        Original document                                                       Wages, Tips and Other Compensation : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5105000.00                          510500000                                Advice number:                  650,001Federal Income Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1881380.00                                       188813800Pay date:                        44,669Social Security Wages : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 137700.00                                   13770000                                                        Social Security Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                  853700   xxxxxxxx6547                     transit ABAMedicare Wages and Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                    510500000                                                71,921,891Medicare Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                     118166700                                NON-NEGOTIABLE                  Social Security Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                  0                                                       Allocated Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                  0                                                       Dependent Care Benefits : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                 0                        Deffered Compensation : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                             0Code "Q" Nontaxable Combat Pay : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   0Code "W" Employer Contributions tp a Health Savings Account : . . . . . . . . . . . . . . . . . . . . . . . . . .                        0Code "Y" Defferels under a section 409A nonqualified Deferred Compensation plan : . . . . . . . . . . . . . . . . . .                    0Code "Z" Income under section 409A on a nonqualified Deferred Compensation plan : . . . . . . . . . . . . . . . . .                      0Code "R" Employer's Contribution to MSA : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' 0Code "S" Employer's Cotribution to Simple Account : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      0Code "T" Expenses Incurred for Qualified Adoptions : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     0Code "V" Income from exercise of non-statutory stock options : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .           0Code "AA" Designated Roth Contributions under a Section 401 (k) Plan : . . . . . . . . . . . . . . . . . . . .                           0Code "BB" Designated Roth Contributions under a Section 403 (b) Plan : . . . . . . . . . . . . . . . . . . . . .                         0Code "DD" Cost of Employer-Sponsored Health Coverage : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                       Code "EE" Designated ROTH Contributions Under a Governmental Section 457 (b) Plan : . . . . . . . . . . . . . . . . . . . . .             Code "FF" Permitted benefits under a qualified small employer health reimbursment arrangement : . . . . . . . . .                         0Code "GG" Income from Qualified Equity Grants Under Section 83 (i) : . . . . . . . . . . . . . . . . . . . . . . $0.00                   Code "HH" Aggregate Defferals Under section 83(i) Elections as of the Close of the Calendar Year : . . . . . . .                          0Third Party Sick Pay Indicator : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                       Unanswered                                                       Retirement Plan Indicator : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Unanswered                                                                                            Statutory Employee : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Not Statutory Employee                    W2 Submission Type : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Original                   W2 WHC SSN Validation Code : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Correct SSN                    The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.
        EMPLOYER IDENTIFICATION NUMBER: 61-1767919                                      EIN     61-1767919                               FEIN     88-1303491
        [DRAFT FORM OF TAX OPINION]                                             ID:             SSN:            DOB:                     37,305,581               633,441,725             34,622


        ALPHABET                                                Name    Tax Period      Total   Social Security Medicare        Withholding       ZACHRY T WOOD                                           Fed 941 Corporate       Sunday, September 30, 2007      66,987  28,841  6,745     31,400  5323 BRADFORD DR                                                Fed 941 West Subsidiary Sunday, September 30, 2007      17,115    7,369   1,723   8,023   DALLAS TX 75235-8314                                            Fed 941 South Subsidiary        Sunday, September 30, 2007        23,906  10,293  2,407   11,206  ORIGINAL REPORT                                         Fed 941 East Subsidiary Sunday, September 30, 2007        11,248  4,843   1,133   5,272   Income, Rents, & Royalty                                                Fed 941 Corp - Penalty    Sunday, September 30, 2007      27,199  11,710  2,739   12,749  INCOME STATEMENT                                 Fed 940 Annual Unemp - Corp      Sunday, September 30, 2007      17,028
        GOOGL_income-statement_Quarterly_As_Originally_Reported TTM     Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020 Q3 2020 Q2 2020 Q1 2020 Q4 2019   Q3 2019
        Gross Profit    146698000000    42337000000     37497000000     35653000000     31211000000     30,818,000,000  25,056,000,000  19,744,000,000    22,177,000,000  25,055,000,000  22,931,000,000  Total Revenue as Reported, Supplemental 257637000000    75325000000     65118000000       61880000000     55314000000     56,898,000,000  46,173,000,000  38,297,000,000  41,159,000,000  46,075,000,000  40,499,000,000            257637000000    75325000000     65118000000     61880000000     55314000000     56,898,000,000  46,173,000,000  38,297,000,000    41,159,000,000  64,133,000,000  34,071,000,000  Other Revenue                                                                    6,428,000,000    Cost of Revenue 110939000000    32988000000     27621000000     26227000000     24103000000     -26,080,000,000 -21,117,000,000   -18,553,000,000 -18,982,000,000 -21,020,000,000 -17,568,000,000 Cost of Goods and Services      110939000000    32988000000     27621000000       26227000000     24103000000     -26,080,000,000 -21,117,000,000 -18,553,000,000 -18,982,000,000 -21,020,000,000 -17,568,000,000   Operating Income/Expenses       67984000000     20452000000     16466000000     16292000000     14774000000     -15,167,000,000 -13,843,000,000   -13,361,000,000 -14,200,000,000 -15,789,000,000 -13,754,000,000 Selling, General and Administrative Expenses    36422000000       11744000000     8772000000      8617000000      7289000000      -8,145,000,000  -6,987,000,000  -6,486,000,000  -7,380,000,000  -8,567,000,000    -7,200,000,000  General and Administrative Expenses     13510000000     4140000000      3256000000      3341000000      2773000000        -2,831,000,000  -2,756,000,000  -2,585,000,000  -2,880,000,000  -2,829,000,000  -2,591,000,000  Selling and Marketing Expenses    22912000000     7604000000      5516000000      5276000000      4516000000      -5,314,000,000  -4,231,000,000  -3,901,000,000  -4,500,000,000    -5,738,000,000  -4,609,000,000  Research and Development Expenses       31562000000     8708000000      7694000000      7675000000        7485000000      -7,022,000,000  -6,856,000,000  -6,875,000,000  -6,820,000,000  -7,222,000,000  -6,554,000,000  Total Operating Profit/Loss       78714000000     21885000000     21031000000     19361000000     16437000000     15,651,000,000  11,213,000,000  6,383,000,000     7,977,000,000   9,266,000,000   9,177,000,000   Non-Operating Income/Expenses, Total    12020000000     2517000000      2033000000        2624000000      4846000000      3,038,000,000   2,146,000,000   1,894,000,000   -220,000,000    1,438,000,000   -549,000,000      Total Net Finance Income/Expense        1153000000      261000000       310000000       313000000       269000000       333,000,000       412,000,000     420,000,000     565,000,000     604,000,000     608,000,000     Net Interest Income/Expense     1153000000      261000000 310000000       313000000       269000000       333,000,000     412,000,000     420,000,000     565,000,000     604,000,000     608,000,000
        Interest Expense Net of Capitalized Interest    346000000       117000000       77000000        76000000        76000000        -53,000,000       -48,000,000     -13,000,000     -21,000,000     -17,000,000     -23,000,000     Interest Income 1499000000      378000000387000000        389000000       345000000       386,000,000     460,000,000     433,000,000     586,000,000     621,000,000     631,000,000       Net Investment Income   12364000000     2364000000      2207000000      2924000000      4869000000      3,530,000,000   1,957,000,000     1,696,000,000   -809,000,000    899,000,000     -1,452,000,000  Gain/Loss on Investments and Other Financial Instruments        12270000000       2478000000      2158000000      2883000000      4751000000      3,262,000,000   2,015,000,000   1,842,000,000   -802,000,000      399,000,000     -1,479,000,000  Income from Associates, Joint Ventures and Other Participating Interests        334000000       49000000  188000000       92000000        5000000 355,000,000     26,000,000      -54,000,000     74,000,000      460,000,000     -14,000,000       Gain/Loss on Foreign Exchange   240000000       163000000       139000000       51000000        113000000       -87,000,000     -84,000,000       -92,000,000     -81,000,000     40,000,000      41,000,000      Irregular Income/Expenses       0       0                00       0       0       0       0       Other Irregular Income/Expenses 0       0                               0       0       0       000       Other Income/Expense, Non-Operating     1497000000      108000000       484000000       613000000       292000000       -825,000,000      -223,000,000    -222,000,000    24,000,000      -65,000,000     295,000,000     Pretax Income   90734000000     24402000000     23064000000       21985000000     21283000000     18,689,000,000  13,359,000,000  8,277,000,000   7,757,000,000   10,704,000,000  8,628,000,000     Provision for Income Tax        14701000000     3760000000      4128000000      3460000000      3353000000      -3,462,000,000  -2,112,000,000    -1,318,000,000  -921,000,000    -33,000,000     -1,560,000,000  Net Income from Continuing Operations   76033000000     20642000000       18936000000     18525000000     17930000000     15,227,000,000  11,247,000,000  6,959,000,000   6,836,000,000   10,671,000,000    7,068,000,000   Net Income after Extraordinary Items and Discontinued Operations        76033000000     20642000000     18936000000       18525000000     17930000000     15,227,000,000  11,247,000,000  6,959,000,000   6,836,000,000   10,671,000,000  7,068,000,000   Net Income after Non-Controlling/Minority Interests       76033000000     20642000000     18936000000     18525000000     17930000000     15,227,000,000    11,247,000,000  6,959,000,000   6,836,000,000   10,671,000,000  7,068,000,000   Net Income Available to Common Stockholders       76033000000     20642000000     18936000000     18525000000     17930000000     15,227,000,000  11,247,000,000  6,959,000,000   6,836,000,000     10,671,000,000  7,068,000,000   Diluted Net Income Available to Common Stockholders     76033000000     20642000000     18936000000       18525000000     17930000000     15,227,000,000  11,247,000,000  6,959,000,000   6,836,000,000   10,671,000,000  7,068,000,000     Income Statement Supplemental Section                                                                                           Reported Normalized and Operating Income/Expense Supplemental Section                                                                      Total Revenue as Reported, Supplemental  257637000000    75325000000     65118000000     61880000000     55314000000     56,898,000,000  46,173,000,000    38,297,000,000  41,159,000,000  46,075,000,000  40,499,000,000  Total Operating Profit/Loss as Reported, Supplemental   78714000000       21885000000     21031000000     19361000000     16437000000     15,651,000,000  11,213,000,000  6,383,000,000   7,977,000,000     9,266,000,000   9,177,000,000   Reported Effective Tax Rate     0               0       0       0               0       0       00Reported Normalized Income                                                                      6,836,000,000                   Reported Normalized Operating Profit                                                                      7,977,000,000                   Other Adjustments to Net Income Available to Common Stockholders                                                                                   Discontinued Operations                                                                                          Basic EPS       333.90  3128      28      27      23      17      10      10      15      10      Basic EPS from Continuing Operations    114     31      28      2827      22      17      10      10      15      10      Basic EPS from Discontinued Operations                                           Diluted EPS      3330.90 31      28      27      26      22      16      10      10      15      10      Diluted EPS from Continuing Operations    3330.90 31      28      27      26      22      16      10      10      15      10      Diluted EPS from Discontinued Operations Basic Weighted Average Shares Outstanding        667650000       662664000       665758000       668958000       673220000       675,581,000       679,449,000     681,768,000     686,465,000     688,804,000     692,741,000     Diluted Weighted Average Shares Outstanding     677674000 672493000       676519000       679612000       682071000       682,969,000     685,851,000     687,024,000     692,267,000     695,193,000       698,199,000     Reported Normalized Diluted EPS                                                                 10       Basic EPS        114     31      28      28      27      23      17      10      10      15      10      Diluted EPS     112     31      2827      26      22      16      10      10      15      10      Basic WASO      667650000       662664000       665758000       668958000673220000        675,581,000     679,449,000     681,768,000     686,465,000     688,804,000     692,741,000     Diluted WASO    677674000672493000        676519000       679612000       682071000       682,969,000     685,851,000     687,024,000     692,267,000     695,193,000       698,199,000     Fiscal year end September 28th., 2022. | USD
        31622,6:39 PM                                                                                           Morningstar.com Intraday Fundamental Portfolio View Print Report                                                          Print
        3/6/2022 at 6:37 PM                                                                                     Current Value            15,335,150,186,014
        GOOGL_income-statement_Quarterly_As_Originally_Reported         Q4 2021                                                          Cash Flow from Operating Activities, Indirect            24934000000     Q3 2021 Q2 2021 Q1 2021 Q4 2020                                  Net Cash Flow from Continuing Operating Activities, Indirect             24934000000     25539000000     37497000000     31211000000     30,818,000,000                                            Cash Generated from Operating Activities                24934000000     25539000000       21890000000     19289000000     22,677,000,000                                          Income/Loss before Non-Cash Adjustment   20642000000      25539000000     21890000000     19289000000     22,677,000,000                                          Total Adjustments for Non-Cash Items              6517000000      18936000000     18525000000     17930000000     15,227,000,000                           Depreciation, Amortization and Depletion, Non-Cash Adjustment            3439000000      3797000000      4236000000      2592000000      5,748,000,000                                             Depreciation and Amortization, Non-Cash Adjustment              3439000000      3304000000        2945000000      2753000000      3,725,000,000                                           Depreciation, Non-Cash Adjustment3215000000       3304000000      2945000000      2753000000      3,725,000,000                                           Amortization, Non-Cash Adjustment         224000000       3085000000      2730000000      2525000000      3,539,000,000                                    Stock-Based Compensation, Non-Cash Adjustment            3954000000      219000000       215000000       228000000       186,000,000      Taxes, Non-Cash Adjustment               1616000000      3874000000      3803000000      3745000000      3,223,000,000                    Investment Income/Loss, Non-Cash Adjustment              2478000000      1287000000      379000000       1100000000      1,670,000,000    Gain/Loss on Financial Instruments, Non-Cash Adjustment          2478000000      2158000000      2883000000      4751000000      -3,262,000,000                                            Other Non-Cash Items            14000000        2158000000      2883000000      4751000000-3,262,000,000                                          Changes in Operating Capital            2225000000      64000000        8000000 255000000 392,000,000                                             Change in Trade and Other Receivables           5819000000      2806000000871000000       1233000000      1,702,000,000                                           Change in Trade/Accounts Receivable             5819000000        2409000000      3661000000      2794000000      -5,445,000,000                                          Change in Other Current Assets            399000000       2409000000      3661000000      2794000000      -5,445,000,000                                   Change in Payables and Accrued Expenses          6994000000      1255000000      199000000       7000000 -738,000,000                     Change in Trade and Other Payables               1157000000      3157000000      4074000000      4956000000      6,938,000,000            Change in Trade/Accounts Payable         1157000000      238000000       130000000       982000000       963,000,000                      Change in Accrued Expenses               5837000000      238000000       130000000       982000000       963,000,000                      Change in Deferred Assets/Liabilities            368000000       2919000000      4204000000      3974000000      5,975,000,000            Change in Other Operating Capital                3369000000      272000000       3000000 137000000       207,000,000                      Change in Prepayments and Deposits                       3041000000      1082000000      785000000       740,000,000                      Cash Flow from Investing Activities              11016000000                                                                             Cash Flow from Continuing Investing Activities            11016000000     10050000000     9074000000      5383000000      -7,281,000,000   Purchase/Sale and Disposal of Property, Plant and Equipment, Net         6383000000      10050000000     9074000000      5383000000      -7,281,000,000                                            Purchase of Property, Plant and Equipment               6383000000      68190000005496000000      5942000000      -5,479,000,000                                          Sale and Disposal of Property, Plant and Equipment6819000000      5496000000      5942000000      -5,479,000,000                                          Purchase/Sale of Business, Net   385000000                                                                                Purchase/Acquisition of Business                385000000 259000000       308000000       1666000000      -370,000,000                                            Purchase/Sale of Investments, Net         4348000000      259000000       308000000       1666000000      -370,000,000                                            Purchase of Investments           40860000000     3360000000      3293000000      2195000000      -1,375,000,000                           Sale of Investments              36512000000     35153000000     24949000000     37072000000     -36,955,000,000                          Other Investing Cash Flow                100000000       31793000000     21656000000     39267000000     35,580,000,000                   Purchase/Sale of Other Non-Current Assets, Net                   388000000       23000000        30000000        -57,000,000              Sales of Other Non-Current Assets                                                                                                Cash Flow from Financing Activities               16511000000     15254000000                                                                     Cash Flow from Continuing Financing Activities            16511000000     15254000000     15991000000     13606000000     -9,270,000,000   Issuance of/Payments for Common Stock, Net               13473000000     12610000000     15991000000     13606000000     -9,270,000,000   Payments for Common Stock                13473000000     12610000000     12796000000     11395000000     -7,904,000,000                   Proceeds from Issuance of Common Stock                           12796000000     11395000000     -7,904,000,000                           Issuance of/Repayments for Debt, Net             115000000       42000000                                                                 Issuance of/Repayments for Long Term Debt, Net           115000000       42000000        1042000000      37000000        -57,000,000      Proceeds from Issuance of Long Term Debt         6250000000      6350000000      1042000000      37000000        -57,000,000              Repayments for Long Term Debt            6365000000      6392000000      6699000000      900000000       0                                Proceeds from Issuance/Exercising of Stock Options/Warrants              2923000000      2602000000      7741000000      937000000       -57,000,000                                                                               2453000000      2184000000      -1,647,000,000
        Other Financing Cash Flow                                                                                               Cash and Cash Equivalents, End of Period                                                                                          Change in Cash   0300000000       10000000        338,000,000,000                                         Effect of Exchange Rate Changes         20945000000       23719000000     23630000000     26622000000     26,465,000,000                                          Cash and Cash Equivalents, Beginning of Period            25930000000     235000000000    3175000000      300000000       6,126,000,000                            Cash Flow Supplemental Section           181000000000    146000000000    183000000       143000000       210,000,000                      Change in Cash as Reported, Supplemental         23719000000000  23630000000000  26622000000000  26465000000000  20,129,000,000,000       Income Tax Paid, Supplemental            2774000000      89000000        2992000000              6,336,000,000                            Cash and Cash Equivalents, Beginning of Period           13412000000     157000000                       -4,990,000,000
        12 Months Ended                                                                                         _________________________________________________________                                                                                                          Q4 2020                  Q4 2019                                         Income Statement                                                 USD in "000'"s                                                                                           Repayments for Long Term Debt    Dec. 31, 2020                    Dec. 31, 2019                                           Costs and expenses:                              Cost of revenues                 182527                  161,857                                         Research and development         Sales and marketing                      84732                   71,896                                          General and administrative27573                   26,018                                          European Commission fines                       17946            18,464                                           Total costs and expenses                        11052                   9,551            Income from operations                   0                       1,697                                           Other income (expense), net                       141303                  127,626                                         Income before income taxes               41224                    34,231                                          Provision for income taxes                      6858000000       5,394                                            Net income                      22677000000                     19,289,000,000           *include interest paid, capital obligation, and underweighting                   22677000000                     19,289,000,000           22677000000                      19,289,000,000                                          Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)--                                                                                Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)

        For Paperwork Reduction Act Notice, see the seperate Instructions.                                                               JPMORGAN TRUST III                                                                                               A/R Aging Summary        As of July 28, 2022                                                                                              ZACHRY T WOOD           Days over due                                                                             Effeective Tax Rate Prescribed by the Secretary of the Treasury.          44591   31 - 60 61 - 90 91 and over

        TOTAL                    £134,839.00     Alphabet Inc. 



         =USD('"'$'"'-in'-millions)"                                                                                             Ann. Rev. Date    £43,830.00      £43,465.00      £43,100.00      £42,735.00      £42,369.00                                                      Revenues          £161,857.00     £136,819.00     £110,855.00     £90,272.00      £74,989.00                                               Cost of revenues        -£71,896.00     -£59,549.00     -£45,583.00     -£35,138.00     -£28,164.00                                       Gross profit     £89,961.00      £77,270.00      £65,272.00      £55,134.00      £46,825.00                                               Research and development        -£26,018.00     -£21,419.00     -£16,625.00     -£13,948.00     -£12,282.00                               Sales and marketing     -£18,464.00     -£16,333.00     -£12,893.00     -£10,485.00     -£9,047.00                                        General and administrative      -£9,551.00      -£8,126.00      -£6,872.00      -£6,985.00      -£6,136.00                                European Commission fines       -£1,697.00      -£5,071.00      -£2,736.00       —       —                                                Income from operations   £34,231.00      £26,321.00      £26,146.00      £23,716.00      £19,360.00                                       Interest income          £2,427.00       £1,878.00       £1,312.00       £1,220.00       £999.00:
A                                                                
























B a s e d   o n  f a c t s   a s   s e t    f o r t h    i n .                        6 5 0                                         
  T h e   U . S .   I n t e r n a l   R e v e n u e   C  o d e  o f   1 9 8 6 ,   a s   a m e  n d e d ,   t h e   T r e a s u r y   R e  g u l a t i o n s    p r o m u l g a t e d   t h e r e u n d e  r ,   p u b l i s h e d   p r o n o u n c e m e n t s   o f    th e   I n t e r  na l   R e v e n u e   S e r v i c e ,    w h i c h   m a y   b e   c i t e  d   o r   u s e d   a s   p r e c e d e n t s ,   a n d   c a s e   l a w ,   a n y   o f   w h i c h  m a y   b e    c h a n g e d   a t   a n y   t i m e    w i th   r e t r o a ct i ve   e f  fe c t .
     N o   o pi n i o  n   i s   e x p r es  se d   o n   a n y  ma t t e r s  o th e r  t h a n  t h os e  s p e c i f ic  a l l y   r ef e r r e d   t o   a b o v e .                                                                      

E m p l o y e e  r  :                                                                
   E m p l o y e r 's   I d e n t i f i c a t i o n   N u m b e  r  (  E I N )   : X X X X X  4 6 6 1                                                                
   I N T U                                                                 
     2 7 0 0     C                                                                


E m p l o y e e  :                                                                
  E M p l o y e e ' s  S o c i a l   S e c u r i t y  N u m b e r : X X X - X X - 1  7 2 5                                                                 Advice number:
  Z A C H  T   W O O                                                                P a y   d a t e : _
    5 2 2 2   B                                                                 
 D e p o s i t e d   t o   t h e   a c c o u n t    O f                                                                 : x x x x x x x x 6 5 4 7 
P  L  E  A  S  E        R  E  A  D        T H E      I M P O R T A N T     D I S C L O S U R E S         B E L O W                                                                                                                                                                                                                                                                        

F  E  D  E  R  A  L     R  E  S  E  R  V  E     M  A  S  T  E  R     S  U  P  P  L  I  E  R     A  C  C  O  U  N  T                                          3  1  0  0  0  0  5  3  -  0  5  2  0  1  0  2  3                                                                                                                                                                                
P  N  C     B  a  n   k                                                                                                                                                                                                                                         
  P  N  C     B  a  n  k     B  u  s  i  n  e  s  s     T  a  x     I  .  D  .        N  u  m  b  e  r  :     6  3  3  4  4  1  7  2  5                                  

CIF Department (Online Banking)                                                                                                                                                                                                                                        
Checking Account: 47-2041-6547                                
P7-PFSC-04-F                                                                                                                                                                                                                                        Business Type: Sole Proprietorship/Partnership Corporation                                
500 First Avenue                                                                                                                                                                                                                                        ALPHABET                                
Pittsburgh, PA 15219-3128                                                                                                                                                                                                                                        5323 BRADFORD DR                                
NON-NEGOTIABLE                                                                                                                                                                                                                                        DALLAS TX 75235 8313                                                                      
Date :4/18/2022 650-2530-000469-697-4300 :SIGNATURE ::                                                                                                                       
Time Zone: Eastern Central Mountain Pacific                                
Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value                                                                
                                                                NON-NEGOTIABLEBusiness Checking 
For 24-hour account information, sign on to pnc.com/mybusiness 
Business Checking Account number: 47-2041-6547 - continued
Activity Detail
Deposits and Other Additions
ACH Additions
Date posted
27-Apr
Checks and Other Deductions
Deductions
Date posted
26-Apr
Service Charges and Fees
Date posted
27-Apr
Detail of Services Used During Current Period
Note: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement a Charge Period Ending 04/29/2022, Description Account Maintenance ChargeTotal For Services Used This Period Total Service Charge Reviewing, Your, Statement.
Please review this statement carefully and reconcile it with your records. 
Call the telephone number on the upper right side of the first page of this statement if you, have any questions regarding your account(s);  your name or address is incorrect • you have any questions regarding interest paid to an interest-bearing account.
Balancing Your Account Update Your Account Register We will investigate your complaint and will correct any error promptly, If we take longer than 10 business days, we will provisionally credit your account for the amount you think is in error, so that you will have use of the money during the time it ekes us to complete our investigation.
Member FDIC
Alphabet Inc. 10-K Feb. 1, 2022 9:08 PM u
Transfers between Larry Page and Sergey Brin, Google's co-founders, subject amended (as described below).
Transfers for tax and estate planning purposes, including to trusts, corporation, and Common Stock.In addition, partnerships or limited liability companies that held more than 5% of the total out8tanding shares of (0'„14%3 B Common Stock ao Of the offering of Google's initial public offering in 2004 may distribute their shares of Class 13 Common Stock to their respectivc partners or members (who may further digtribute the shares of Class B Common Stock to their I-espective partners or members) without triggering a conversion to bharcs of CJ""%% A Common Stock, Sto;h distributions must beconducted in accordance with the ownership interests of such partners or members and the terms of' any agreernent8 binding the partnership The death of any holder of shares of Class B Common Stock who is a natural person will result in the conversion of bio shares held by his or her permitted entities, into shares of Class A Common Stock, However, subject to the terrng of the Transfer P.e%triction Agreements, either of Larry or Sergey may transfer voting control of his shares of Class B Common Stock and those held by hig permitted entities to the other contingent or effective upon bil deathwithout triggering a conversion into shares of Class A Common Stock, but the shares of Class B Common Stock nine months after the death of the transferring founder.Once transferred and converted into shares of Class A Common Stock, shares of Class B Common Stock shall not be reissued. No class of our capital stock may be subdivided or combined unless the other classes of capital stock are concurrently subdivided or combined in the same proportion and in the same manner. Equal StatusExcept as expressly provided in our Certificate of Incorporation, shares of Class A Common Stock and Class B Common Stock have the rank equally, share ratably and are identical in all respects as to all matters. In the event of any merger, consolidation, or other business combination requiring the approval of our stockholders entitled to vote thereon (whether or not we are the surviving entity), the holders of shares of Class A Common Stock shall have the right toreceive, or the right to elect to receive, the same form of consideration Stockholders shall have the right to recieve the consignt.Get answers to your investing questions from the SEC's website dedicated to retail investors                                                                                                                        Get answers to your investing questions from the SEC's website dedicated to retail investors                                                                                1                                                                                                A                                                                        2                        Earnings Statement                                                                                                                                                                                                                ALPHABET                                                                                37151                                        ALPHABET                                                                         Period Beginning:        1600 AMPITHEATRE PARKWAY                                                         Period Ending:                        44833                                        1601 AMPITHEATRE PARKWAY                        DR                                                Period Ending:        DRMOUNTAIN VIEW, C.A., 94043                                                        Pay Date:                        44591                                        MOUNTAIN VIEW, C.A., 94044                                                                        Pay Date:        "Taxable Marital Status: Exemptions/Allowances"                                                        ZACHRY T.                         WOOD                                        "Taxable Marital Status: Exemptions/Allowances"                        Married                                                ZACHRY T.         Married                                                        5323        BRADFORD DR                                                                                                                                5324        Federal:                                                                                                                        Federal:                                                                                                                                        DALLAS                TX 75235-8314                                                                                                                        DALLAS        TX:                NO State Incorne Tax                                                                                                        TX:                NO State Incorne Tax                                                                        rate        units                                year to date        Other Benefits and                                                        Earnings                rate        units                                        year to date        Earnings        Other Benefits and                112.2        674678000                                7569887160000.0%        Information                                this period        total to date                Regular                1349355888        2024033776                                        75698871601        Regular        Information                                                                 Pto Balance                                                         Overtime                                                                         Overtime        Pto Balance                                                                 Total Work Hrs                                0        75698871600                "BonusTraining"                                                                         "BonusTraining"        Total Work Hrs        Gross Pay        75698871600                                                 Important Notes                                                                Gross Pay        75698871601                                                                 Important Notes                                                                COMPANY PH Y: 650-253-0000                                                                                                                                        COMPANY PH Y: 650-253-0001        Statutory                                                        BASIS OF PAY: BASIC/DILUTED EPS                                                        Deductions        Statutory                                                                Deductions        BASIS OF PAY: BASIC/DILUTED EPS        Federal Income Tax                                                                                                                          Federal Income Tax                                                                                  Social Security Tax                                                                                                                          Social Security Tax                                                                                                                                          YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE                                                                                                                                        YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE        Medicare Tax                                                                                                                          Medicare Tax                                                                                                                                                                                                                                                                                            Net Pay                70842743866        70842743866                                                                                                Net Pay                70842743867                70842743867                                                CHECKING                                                                                                                         CHECKING                                                                                 Net Check                $70,842,743,866.00                                                                                                         Net Check                70842743867                                                                 Your federal taxable wages this period are $                                                                                                                        Your federal taxable wages this period are $                                                                                ALPHABET INCOME                                                        Advice number:                        650001                                        ALPHABET INCOME                                                                        Advice number:        1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043                                                        Pay date:_                        44669                                        1601 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043                                                                        Pay date:_                                                                                                                                                                                                                Deposited to the account Of:transit ABA                        amount                Deposited to the account Of                                                                        xxxxxxxx6547        "PLEASE READ THE IMPORTANT DISCLOSURES BELOW                                                                                                                                                                                                                                                                        PNC Bank                                                                                                                                                                                                                                        PNC Bank Business Tax I.D. Number: 633441725                                CIF Department (Online Banking)                                                                                                                                                                                                                                        Checking Account: 47-2041-6547                                P7-PFSC-04-F                                                                                                                                                                                                                                        Business Type: Sole Proprietorship/Partnership Corporation                                500 First Avenue                                                                                                                                                                                                                                        ALPHABET                                Pittsburgh, PA 15219-3128                                                                                                                                                                                                                                        5323 BRADFORD DR                                NON-NEGOTIABLE                                                                                                                                                                                                                                        DALLAS TX 75235 8313                                                                                                                                                                                                                                                                        ZACHRY, TYLER, WOOD                                                                                                                                                                                                                                                4/18/2022                        650-2530-000 469-697-4300                                                                                                                                                _________________________________________________________                                                                                                                Time Zone: Eastern Central Mountain Pacific                                Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value"                                PLEASE READ THE IMPORTANT DISCLOSURES                                                                                                                                                PNC Bank Business Tax I.D. Number:                                 CIF Department (Online Banking)                                                                                                                                                                                                                                        Checking Account: 47-2041-6547                                P7-PFSC-04-F                                                                                                                                                                                                                                        Business Type: Sole Proprietorship/Partnership Corporation                                500 First Avenue                                                                                                                                                                                                                                        ALPHABET                                Pittsburgh, PA 15219-3128                                                                                                                                                                                                                                        5323 BRADFORD DR                                NON-NEGOTIABLE                                                                                                                                                                                                                                        DALLAS TX 75235 8313                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Based on facts as set forth in.                                                                                                                        Based on facts as set forth in.                        6551                                                        6550The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.                                                                                                                        The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.                                                                                                                                                                                                                                                                                        EMPLOYER IDENTIFICATION NUMBER: 61-1767919                                                                                                                        EMPLOYER IDENTIFICATION NUMBER: 61-1767920                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                [DRAFT FORM OF TAX OPINION]                                                                                                                        [DRAFT FORM OF TAX OPINION]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        1                                                                                                                                                                                                                                                                                                                                                                                                                                                ALPHABET                                                                                                                                                                                                        ZACHRY T WOOD                                                                                                                                                                                                        5324 BRADFORD DR                                                                                                                                                                                                        DALLAS TX 75235-8315                                                                                ORIGINAL REPORT                                                                                                                        ORIGINAL REPORT                                                                                Income, Rents, & Royalty                                                                                                                        Income, Rents, & Royalty                                                                                INCOME STATEMENT         61-1767919                                                                                                                INCOME STATEMENT         61-1767920                                                                                88-1303491                                                                                                                        88-1303492                                                                        GOOGL_income-statement_Quarterly_As_Originally_Reported        TTM        Q4 2021        Q2 2021        Q1 2021        Q4 2020        Q3 2020        Q2 2020        Q1 2020        Q4 2019        Q3 2019                                        GOOGL_income-statement_Quarterly_As_Originally_Reported        TTM        Q4 2022        Q3 2022        Q2 2022        Q1 2022        Q4 2021        Q3 2021                Q2 2021        Q3 2021                                                                                                                                                                                                        Gross Profit        $146,698,000,000.00        $42,337,000,000.00        $35,653,000,000.00        $31,211,000,000.00        30818000000        $25,056,000,000.00        1974400000000.0%        22177000000        25055000000        22931000000                                        Gross Profit        -2178236364        -9195472727        -16212709091        -23229945455        -30247181818        -37264418182        -44281654545                -51298890909        37497000000Total Revenue as Reported, Supplemental        $257,637,000,000.00        $75,325,000,000.00        $61,880,000,000.00        $55,314,000,000.00        56898000000        $46,173,000,000.00        3829700000000.0%        41159000000        46075000000        40499000000                                        Total Revenue as Reported, Supplemental        -1286309091        -13385163636        -25484018182        -37582872727        -49681727273        -61780581818        -73879436364                -85978290909        65118000000        $257,637,000,000.00        $75,325,000,000.00        $61,880,000,000.00        $55,314,000,000.00        56898000000        $46,173,000,000.00        3829700000000.0%        41159000000        64133000000        34071000000                                                1957800000        -9776581818        -21510963636        -33245345455        -44979727273        -56714109091        -68448490909                -80182872727        65118000000Other Revenue                                                                                6428000000                                        Other Revenue                                                                                Cost of Revenue        -110939000000        -32988000000        -26227000000        -$24,103,000,000.00        -26080000000        -$21,117,000,000.00        -1855300000000.0%        -18982000000        -21020000000        -17568000000                                        Cost of Revenue        -891927272.7        4189690909        9271309091        14352927273        19434545455        24516163636        29597781818                34679400000        -27621000000Cost of Goods and Services        -110939000000        -32988000000        -26227000000        -24103000000        -26080000000        -21117000000        -18553000000        -18982000000        -21020000000        -17568000000                                        Cost of Goods and Services        -891927272.7        4189690909        9271309091        14352927273        19434545455        24516163636        29597781818                34679400000        -27621000000Operating Income/Expenses        -67984000000        -20452000000        -16292000000        -$14,774,000,000.00        -$15,167,000,000.00        -1384300000000.0%        -$13,361,000,000.00        -14200000000        -15789000000        -13754000000                                        Operating Income/Expenses        -3640563636        -882445454.5        1875672727        4633790909        7391909091        10150027273        12908145455                15666263636        -16466000000Selling, General and Administrative Expenses        -36422000000        -11744000000        -8617000000        -7289000000        -8145000000        -6987000000        -6486000000        -7380000000        -8567000000        -7200000000                                        Selling, General and Administrative Expenses        -1552200000        -28945454.55        1494309091        3017563636        4540818182        6064072727        7587327273                9110581818        -8772000000General and Administrative Expenses        -13510000000        -4140000000        -3341000000        -2773000000        -2831000000        -2756000000        -2585000000        -2880000000        -2829000000        -2591000000                                        General and Administrative Expenses        -544945454.5        23200000        591345454.5        1159490909        1727636364        2295781818        2863927273                3432072727        -3256000000Selling and Marketing Expenses        -22912000000        -7604000000        -5276000000        -4516000000        -5314000000        -4231000000        -3901000000        -4500000000        -5738000000        -4609000000                                        Selling and Marketing Expenses        -1007254545        -52145454.55        902963636.4        1858072727        2813181818        3768290909        4723400000                5678509091        -5516000000Research and Development Expenses        -31562000000        -8708000000        -7675000000        -7485000000        -7022000000        -6856000000        -6875000000        -6820000000        -7222000000        -6554000000                                        Research and Development Expenses        -2088363636        -853500000        381363636.4        1616227273        2851090909        4085954545        5320818182                6555681818        -7694000000Total Operating Profit/Loss        78714000000        21885000000        19361000000        16437000000        15651000000        11213000000        6383000000        7977000000        9266000000        9177000000                                        Total Operating Profit/Loss        -5818800000        -10077918182        -14337036364        -18596154545        -22855272727        -27114390909        -31373509091                -35632627273        21031000000Non-Operating Income/Expenses, Total        12020000000        2517000000        2624000000        4846000000        3038000000        2146000000        1894000000        -220000000        1438000000        -549000000                                        Non-Operating Income/Expenses, Total        -1369181818        -2079000000        -2788818182        -3498636364        -4208454545        -4918272727        -5628090909                -6337909091        2033000000Total Net Finance Income/Expense        1153000000        261000000        313000000        269000000        333000000        412000000        420000000        565000000        604000000        608000000                                        Total Net Finance Income/Expense        464490909.1        462390909.1        460290909.1        458190909.1        456090909.1        453990909.1        451890909.1                449790909.1        310000000Net Interest Income/Expense        1153000000        261000000        313000000        269000000        333000000        412000000        420000000        565000000        604000000        608000000                                        Net Interest Income/Expense        464490909.1        462390909.1        460290909.1        458190909.1        456090909.1        453990909.1        451890909.1                449790909.1        310000000                                                                                                                                                                                                        Interest Expense Net of Capitalized Interest        -346000000        -117000000        -76000000        -76000000        -53000000        -48000000        -13000000        -21000000        -17000000        -23000000                                        Interest Expense Net of Capitalized Interest        48654545.45        69900000        91145454.55        112390909.1        133636363.6        154881818.2        176127272.7                197372727.3        -77000000Interest Income        1499000000        378000000        389000000        345000000        386000000        460000000        433000000        586000000        621000000        631000000                                        Interest Income     
  415836363.6        392490909.1        369145454.5        345800000        322454545.5        299109090.9        275763636.4                252418181.8        387000000Net Investment Income        12364000000        2364000000        2924000000        4869000000        3530000000        1957000000        1696000000        -809000000        899000000        -1452000000                                        Net Investment Income        -2096781818        -2909109091        -3721436364        -4533763636        -5346090909        -6158418182        -6970745455                -7783072727        2207000000Gain/Loss on Investments and Other Financial Instruments        12270000000        2478000000        2883000000        4751000000        3262000000        2015000000        1842000000        -802000000        399000000        -1479000000                                        Gain/Loss on Investments and Other Financial Instruments        -2243490909        -3068572727        -3893654545        -4718736364        -5543818182        -6368900000        -7193981818                -8019063636        2158000000Income from Associates, Joint Ventures and Other Participating Interests        334000000        49000000        92000000        5000000        355000000        26000000        -54000000        74000000        460000000        -14000000                                        Income from Associates, Joint Ventures and Other Participating Interests        99054545.45        92609090.91        86163636.36        79718181.82        73272727.27        66827272.73        60381818.18                53936363.64        188000000Gain/Loss on Foreign Exchange        -240000000        -163000000        -51000000        113000000        -87000000        -84000000        -92000000        -81000000        40000000        41000000                                        Gain/Loss on Foreign Exchange        47654545.45        66854545.45        86054545.45        105254545.5        124454545.5        143654545.5        162854545.5                182054545.5        -139000000Irregular Income/Expenses        0        0                        0        0        0        0        0        0                                        Irregular Income/Expenses        0        0                                0        0                0        Other Irregular Income/Expenses        0        0                        0        0        0        0        0        0                                        Other Irregular Income/Expenses        0        0                                0        0                0        Other Income/Expense, Non-Operating        -1497000000        -108000000        -613000000        -292000000        -825000000        -223000000        -222000000        24000000        -65000000        295000000                                        Other Income/Expense, Non-Operating        263109090.9        367718181.8        472327272.7        576936363.6        681545454.5        786154545.5        890763636.4                995372727.3        -484000000Pretax Income        90734000000        24402000000        21985000000        21283000000        18689000000        13359000000        8277000000        7757000000        10704000000        8628000000                                        Pretax Income        -7187981818        -12156918182        -17125854545        -22094790909        -27063727273        -32032663636        -37001600000                -41970536364        23064000000Provision for Income Tax        -14701000000        -3760000000        -3460000000        -3353000000        -3462000000        -2112000000        -1318000000        -921000000        -33000000        -1560000000                                        Provision for Income Tax        1695218182        2565754545        3436290909        4306827273        5177363636        6047900000        6918436364                7788972727        -4128000000Net Income from Continuing Operations        76033000000        20642000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000        7068000000                                        Net Income from Continuing Operations        -5492763636        -9591163636        -13689563636        -17787963636        -21886363636        -25984763636        -30083163636                -34181563636        18936000000Net Income after Extraordinary Items and Discontinued Operations        76033000000        20642000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000        7068000000                                        Net Income after Extraordinary Items and Discontinued Operations        -5492763636        -9591163636        -13689563636        -17787963636        -21886363636        -25984763636        -30083163636                -34181563636        18936000000Net Income after Non-Controlling/Minority Interests        76033000000        20642000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000        7068000000                                        Net Income after Non-Controlling/Minority Interests        -5492763636        -9591163636        -13689563636        -17787963636        -21886363636        -25984763636        -30083163636                -34181563636        18936000000Net Income Available to Common Stockholders        76033000000        20642000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000        7068000000                                        Net Income Available to Common Stockholders        -5492763636        -9591163636        -13689563636        -17787963636        -21886363636        -25984763636        -30083163636                -34181563636        18936000000Diluted Net Income Available to Common Stockholders        76033000000        20642000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000        7068000000                                        Diluted Net Income Available to Common Stockholders        -5492763636        -9591163636        -13689563636        -17787963636        -21886363636        -25984763636        -30083163636                -34181563636        18936000000Income Statement Supplemental Section                                                                                                                        Income Statement Supplemental Section                                                                                Reported Normalized and Operating Income/Expense Supplemental Section                                                                                                                        Reported Normalized and Operating Income/Expense Supplemental Section                                                                                Total Revenue as Reported, Supplemental        257637000000        75325000000        61880000000        55314000000        56898000000        46173000000        38297000000        41159000000        46075000000        40499000000                                        Total Revenue as Reported, Supplemental        -1286309091        -13385163636        -25484018182        -37582872727        -49681727273        -61780581818        -73879436364                -85978290909        65118000000Total Operating Profit/Loss as Reported, Supplemental        78714000000        21885000000        19361000000        16437000000        15651000000        11213000000        6383000000        7977000000        9266000000        9177000000                                        Total Operating Profit/Loss as Reported, Supplemental        -5818800000        -10077918182        -14337036364        -18596154545        -22855272727        -27114390909        -31373509091                -35632627273        21031000000Reported Effective Tax Rate        0.162                0.157        0.158                0.158        0.159        0.119                0.181                                        Reported Effective Tax Rate        1.162                0.1436666667        0.1331666667        0.1226666667                0.1063333333                0.08683333333        0.179Reported Normalized Income                                                                6836000000                                                        Reported Normalized Income                                                                                Reported Normalized Operating Profit                                                                7977000000                                                        Reported Normalized Operating Profit                                                                                Other Adjustments to Net Income Available to Common Stockholders                                                                                                                        Other Adjustments to Net Income Available to Common Stockholders                                                                                Discontinued Operations                                                                                                                        Discontinued Operations                                                                                Basic EPS        113.88        31.15        27.69        26.63        22.54        16.55        10.21        9.96        15.49        10.2                                        Basic EPS        -8.742909091        -14.93854545        -21.13418182        -27.32981818        -33.52545455        -39.72109091        -45.91672727                -52.11236364        28.44Basic EPS from Continuing Operations        113.88        31.12        27.69        26.63        22.46        16.55        10.21        9.96        15.47        10.2                                        Basic EPS from Continuing Operations        -8.752545455        -14.94781818        -21.14309091        -27.33836364        -33.53363636        -39.72890909        -45.92418182                -52.11945455        28.44Basic EPS from Discontinued Operations                                                                                                                        Basic EPS from Discontinued Operations                                                                                Diluted EPS        112.2        30.69        27.26        26.29        22.3        16.4        10.13        9.87        15.35        10.12                                        Diluted EPS        -8.505636364        -14.599        -20.69236364        -26.78572727        -32.87909091        -38.97245455        -45.06581818                -51.15918182        27.99Diluted EPS from Continuing Operations        112.2        30.67        27.26        26.29        22.23        16.4        10.13        9.87        15.33        10.12                                        Diluted EPS from Continuing Operations        -8.515636364        -14.609        -20.70236364        -26.79572727        -32.88909091        -38.98245455        -45.07581818                -51.16918182        27.99Diluted EPS from Discontinued Operations                                                                                                                        Diluted EPS from Discontinued Operations                                                                                Basic Weighted Average Shares Outstanding        667650000        662664000        668958000        673220000        675581000        679449000        681768000        686465000        688804000        692741000                                        Basic Weighted Average Shares Outstanding        694313545.5        697258863.6        700204181.8        703149500        706094818.2        709040136.4        711985454.5                714930772.7        665758000Diluted Weighted Average Shares Outstanding        677674000        672493000        679612000        682071000        682969000        685851000        687024000        692267000        695193000        698199000                                        Diluted Weighted Average Shares Outstanding        698675981.8        701033009.1        703390036.4        705747063.6        708104090.9        710461118.2        712818145.5                715175172.7        676519000Reported Normalized Diluted EPS                                                                9.87                                                        Reported Normalized Diluted EPS                                                                                Basic EPS        113.88        31.15        27.69        26.63        22.54        16.55        10.21        9.96        15.49        10.2                                        Basic EPS        -8.742909091        -14.93854545        -21.13418182        -27.32981818        -33.52545455        -39.72109091        -45.91672727                -52.11236364        28.44Diluted EPS        112.2        30.69        27.26        26.29        22.3        16.4        10.13        9.87        15.35        10.12                                        Diluted EPS        -8.505636364        -14.599        -20.69236364        -26.78572727        -32.87909091        -38.97245455        -45.06581818                -51.15918182        27.99Basic WASO        667650000        662664000        668958000        673220000        675581000        679449000        681768000        686465000        688804000        692741000                                        Basic WASO        694313545.5        697258863.6        700204181.8        703149500        706094818.2        709040136.4        711985454.5                714930772.7        665758000Diluted WASO        677674000        672493000        679612000        682071000        682969000        685851000        687024000        692267000        695193000        698199000                                        Diluted WASO        698675981.8        701033009.1        703390036.4        705747063.6        708104090.9        710461118.2        712818145.5                715175172.7        676519000Fiscal year end September 28th., 2022. | USD                                                                                                                        Fiscal year end September 28th., 2022. | USD                                                                                                                                                                                                                                                                                        31622,6:39 PM                                                                                                                        31622,6:39 PM                                                                                Morningstar.com Intraday Fundamental Portfolio View Print Report                                                        Print                                                                Morningstar.com Intraday Fundamental Portfolio View Print Report                                                                        Print                                                                                                                                                                                                                3/6/2022 at 6:37 PM                                                                                Current Value                                        3/6/2022 at 6:37 PM                                                                                                                                                                15335150186014                                                                                                                                                                                                                                                                                                                                GOOGL_income-statement_Quarterly_As_Originally_Reported                Q4 2021                                                                                                        GOOGL_income-statement_Quarterly_As_Originally_Reported                Q4 2022                                                                Cash Flow from Operating Activities, Indirect                24934000000        Q2 2021        Q1 2021        Q4 2020                                                                                Cash Flow from Operating Activities, Indirect                24934000001        Q3 2022        Q2 2022        Q1 2022        Q4 2021                                Q3 2021Net Cash Flow from Continuing Operating Activities, Indirect                24934000000        37497000000        31211000000        30818000000                                                                                Net Cash Flow from Continuing Operating Activities, Indirect                35231800000        36975800000        38719800000        40463800000        42207800000                                25539000000Cash Generated from Operating Activities                24934000000        21890000000        19289000000        22677000000                                                                                Cash Generated from Operating Activities                19636600000        18560200000        17483800000        16407400000        15331000000                                25539000000Income/Loss before Non-Cash Adjustment                20642000000        21890000000        19289000000        22677000000                                                                                Income/Loss before Non-Cash Adjustment                21353400000        21135400000        20917400000        20699400000        20481400000                                25539000000Total Adjustments for Non-Cash Items                6517000000        18525000000        17930000000        15227000000                                                                                Total Adjustments for Non-Cash Items                20351200000        21992600000        23634000000        25275400000        26916800000                                18936000000Depreciation, Amortization and Depletion, Non-Cash Adjustment                3439000000        4236000000        2592000000        5748000000                                                                                Depreciation, Amortization and Depletion, Non-Cash Adjustment                4986300000        5327600000        5668900000        6010200000        6351500000                                3797000000Depreciation and Amortization, Non-Cash Adjustment                3439000000        2945000000        2753000000        3725000000                                                                                Depreciation and Amortization, Non-Cash Adjustment                3239500000        3241600000        3243700000        3245800000        3247900000                                3304000000Depreciation, Non-Cash Adjustment                3215000000        2945000000        2753000000        3725000000                                                                                Depreciation, Non-Cash Adjustment                3329100000        3376000000        3422900000        3469800000        3516700000                                3304000000Amortization, Non-Cash Adjustment                224000000        2730000000        2525000000        3539000000                                                                                Amortization, Non-Cash Adjustment                4241600000        4848600000        5455600000        6062600000        6669600000                                3085000000Stock-Based Compensation, Non-Cash Adjustment                3954000000        215000000        228000000        186000000                                                                                Stock-Based Compensation, Non-Cash Adjustment                -1297700000        -2050400000        -2803100000        -3555800000        -4308500000                                219000000Taxes, Non-Cash Adjustment                1616000000        3803000000        3745000000        3223000000                                                                                Taxes, Non-Cash Adjustment                4177700000        4486200000        4794700000        5103200000        5411700000                                3874000000Investment Income/Loss, Non-Cash Adjustment                -2478000000        379000000        1100000000        1670000000                                                                                Investment Income/Loss, Non-Cash Adjustment                3081700000        4150000000        5218300000        6286600000        7354900000                                -1287000000Gain/Loss on Financial Instruments, Non-Cash Adjustment                -2478000000        -2883000000        -4751000000        -3262000000                                                                                Gain/Loss on Financial Instruments, Non-Cash Adjustment                -4354700000        -4770800000        -5186900000        -5603000000        -6019100000                                -2158000000Other Non-Cash Items                -14000000        -2883000000        -4751000000        -3262000000                                                                                Other Non-Cash Items                -5340300000        -6249200000        -7158100000        -8067000000        -8975900000                                -2158000000Changes in Operating Capital                -2225000000        -8000000        -255000000        392000000                                                                                Changes in Operating Capital                1068100000        1559600000        2051100000        2542600000        3034100000                                64000000Change in Trade and Other Receivables                -5819000000        -871000000        -1233000000        1702000000                                                                                Change in Trade and Other Receivables                2617900000        3718200000        4818500000        5918800000        7019100000                                2806000000Change in Trade/Accounts Receivable                -5819000000        -3661000000        2794000000        -5445000000                                                                                Change in Trade/Accounts Receivable                -1122700000        -527600000        67500000        662600000        1257700000                                -2409000000Change in Other Current Assets                -399000000        -3661000000        2794000000        -5445000000                                                                                Change in Other Current Assets                -3290700000        -3779600000        -4268500000        -4757400000        -5246300000                                -2409000000Change in Payables and Accrued Expenses                6994000000        -199000000        7000000        -738000000                                                                                Change in Payables and Accrued Expenses                -3298800000        -4719000000        -6139200000        -7559400000        -8979600000                                -1255000000Change in Trade and Other Payables                1157000000        4074000000        -4956000000        6938000000                                                                                Change in Trade and Other Payables                3108700000        3453600000        3798500000        4143400000        4488300000                                3157000000Change in Trade/Accounts Payable                1157000000        -130000000        -982000000        963000000                                                                                Change in Trade/Accounts Payable                -233200000        -394000000        -554800000        -715600000        -876400000                                238000000Change in Accrued Expenses                5837000000        -130000000        -982000000        963000000                                                                                Change in Accrued Expenses                -2105200000        -3202000000        -4298800000        -5395600000        -6492400000                                238000000Change in Deferred Assets/Liabilities                368000000        4204000000        -3974000000        5975000000                                                                                Change in Deferred Assets/Liabilities                3194700000        3626800000        4058900000        4491000000        4923100000                                2919000000Change in Other Operating Capital                -3369000000        -3000000        137000000        207000000                                                                                Change in Other Operating Capital                1553900000        2255600000        2957300000        3659000000        4360700000                                272000000Change in Prepayments and Deposits                        -1082000000        785000000        740000000                                                                                Change in Prepayments and Deposits                        -388000000        -891600000        -1395200000        -1898800000                                3041000000Cash Flow from Investing Activities                -11016000000                                                                                                        Cash Flow from Investing Activities                -11015999999                                                                Cash Flow from Continuing Investing Activities                -11016000000        -9074000000        -5383000000        -7281000000                                                                                Cash Flow from Continuing Investing Activities                -4919700000        -3706000000        -2492300000        -1278600000        -64900000                                -10050000000Purchase/Sale and Disposal of Property, Plant and Equipment, Net                -6383000000        -9074000000        -5383000000        -7281000000                                                                                Purchase/Sale and Disposal of Property, Plant and Equipment, Net                -6772900000        -6485800000        -6198700000        -5911600000        -5624500000                                -10050000000Purchase of Property, Plant and Equipment                -6383000000        -5496000000        -5942000000        -5479000000                                                                                Purchase of Property, Plant and Equipment                -5218300000        -4949800000        -4681300000        -4412800000        -4144300000                                -6819000000Sale and Disposal of Property, Plant and Equipment                        -5496000000        -5942000000        -5479000000                                                                                Sale and Disposal of Property, Plant and Equipment                        -5040500000        -4683100000        -4325700000        -3968300000                                -6819000000Purchase/Sale of Business, Net                -385000000                                                                                                        Purchase/Sale of Business, Net                -384999999                                                                Purchase/Acquisition of Business                -385000000        -308000000        -1666000000        -370000000                                                                                Purchase/Acquisition of Business                -1010700000        -1148400000        -1286100000        -1423800000        -1561500000                                -259000000Purchase/Sale of Investments, Net                -4348000000        -308000000        -1666000000        -370000000                                                                                Purchase/Sale of Investments, Net                574500000        1229400000        1884300000        2539200000        3194100000                                -259000000Purchase of Investments                -40860000000        -3293000000        2195000000        -1375000000                                                                                Purchase of Investments                16018900000        24471400000        32923900000        41376400000        49828900000                                -3360000000Sale of Investments                36512000000        -24949000000        -37072000000        -36955000000                                                                                Sale of Investments                -64179300000        -79064600000        -93949900000        -108835200000        -123720500000                                -35153000000Other Investing Cash Flow                100000000        21656000000        39267000000        35580000000                                                                                Other Investing Cash Flow                49209400000        57052800000        64896200000        72739600000        80583000000                                31793000000Purchase/Sale of Other Non-Current Assets, Net                        23000000        30000000        -57000000                                                                                Purchase/Sale of Other Non-Current Assets, Net                        -236000000        -368800000        -501600000        -634400000                                388000000Sales of Other Non-Current Assets                                                                                                                        Sales of Other Non-Current Assets                                                                                Cash Flow from Financing Activities                -16511000000                                                                                                        Cash Flow from Financing Activities                -13997000000        -12740000000                                                        -15254000000Cash Flow from Continuing Financing Activities                -16511000000        -15991000000        -13606000000        -9270000000                                                                                Cash Flow from Continuing Financing Activities                -9287400000        -7674400000        -6061400000        -4448400000        -2835400000                                -15254000000Issuance of/Payments for Common Stock, Net                -13473000000        -15991000000        -13606000000        -9270000000                                                                                Issuance of/Payments for Common Stock, Net                -10767000000        -10026000000        -9285000000        -8544000000        -7803000000                                -12610000000Payments for Common Stock                13473000000        -12796000000        -11395000000        -7904000000                                                                                Payments for Common Stock                -18708100000        -22862000000        -27015900000        -31169800000        -35323700000                                -12610000000Proceeds from Issuance of Common Stock                        -12796000000        -11395000000        -7904000000                                                                                Proceeds from Issuance of Common Stock                                -5806333333        -3360333333        -914333333.3                                Issuance of/Repayments for Debt, Net                115000000                                           
                                                            Issuance of/Repayments for Debt, Net                -199000000        -356000000                                                        -42000000Issuance of/Repayments for Long Term Debt, Net                115000000        -1042000000        -37000000        -57000000                                                                                Issuance of/Repayments for Long Term Debt, Net                -314300000        -348200000        -382100000        -416000000        -449900000                                -42000000Proceeds from Issuance of Long Term Debt                6250000000        -1042000000        -37000000        -57000000                                                                                Proceeds from Issuance of Long Term Debt                -3407500000        -5307600000        -7207700000        -9107800000        -11007900000                                6350000000Repayments for Long Term Debt                6365000000        6699000000        900000000        0                                                                                Repayments for Long Term Debt                -117000000        -660800000        -1204600000        -1748400000        -2292200000                                -6392000000Proceeds from Issuance/Exercising of Stock Options/Warrants                2923000000        -7741000000        -937000000        -57000000                                                                                Proceeds from Issuance/Exercising of Stock Options/Warrants                -2971300000        -3400800000        -3830300000        -4259800000        -4689300000                                -2602000000                        -2453000000        -2184000000        -1647000000                                                                                                                -1288666667        -885666666.7        -482666666.7                                                                                                                                                                                                                                        Other Financing Cash Flow                                                                                                                        Other Financing Cash Flow                                                                                Cash and Cash Equivalents, End of Period                                                                                                                        Cash and Cash Equivalents, End of Period                                                                                Change in Cash                0        300000000        10000000        338000000000)                                                                                Change in Cash                1                -280000000        -570000000        338000000000)                                Effect of Exchange Rate Changes                20945000000        23630000000        26622000000        26465000000                                                                                Effect of Exchange Rate Changes                28459100000        29853400000        31247700000        32642000000        34036300000                                23719000000Cash and Cash Equivalents, Beginning of Period                25930000000        -3175000000        300000000        6126000000                                                                                Cash and Cash Equivalents, Beginning of Period                25930000001        235000000000)        10384666667        15035166667        19685666667                                235000000000)Cash Flow Supplemental Section                181000000000)        183000000        -143000000        210000000                                                                                Cash Flow Supplemental Section                181000000000)        -146000000000)        110333333.3        123833333.3        137333333.3                                -146000000000)Change in Cash as Reported, Supplemental                23719000000000        26622000000000        26465000000000        20129000000000                                                                                Change in Cash as Reported, Supplemental                22809500000000        22375000000000        21940500000000        21506000000000        21071500000000                                23630000000000Income Tax Paid, Supplemental                2774000000        -2992000000                6336000000                                                                                Income Tax Paid, Supplemental                -5809000000        -8692000000        -11575000000                6336000001                                89000000Cash and Cash Equivalents, Beginning of Period                13412000000                        -4990000000                                                                                Cash and Cash Equivalents, Beginning of Period                -13098000000        -26353000000                        -4989999999                                157000000                                                                                                                                                                                                        12 Months Ended                                                                                                                        13 Months Ended                                                                                _________________________________________________________                                                                                                                        _________________________________________________________
{"version":3,"file":"","sourceRoot":"","sources":["file:///home/runner/work/pomxml-dep-update/pomxml-dep-update/src/main.ts"],"names":[],"mappings":""}Income Verification :**
C&E 1049 Department of the Treasury --- Internal Revenue Service (99) OMB No.  1545-0074 IRS Use Only --- Do not write or staple in this space
1040 U.S. Individual Income Tax Return 1 Earnings Statement

ALPHABET         Period Beginning:2019-09-28
1600 AMPITHEATRE PARKWAY DR Period Ending: 2021-09-29
MOUNTAIN VIEW, C.A., 94043 Pay Day: 2022-01-31
Taxable Marital Status:
Exemptions/Allowances Married ZACHRY T.
5323
Federal:
DALLAS
TX: NO State Income Tax
rate units year to date Other Benefits and
EPS 112.2 674678000 75698871600 Information
        Pto Balance
        Total Work Hrs
Gross Pay 75698871600         Important Notes
COMPANY PH Y: 650-253-0000
Statutory BASIS OF PAY: BASIC/DILUTED EPS
Federal Income Tax                
Social Security Tax                
YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE
Medicare Tax                

Net Pay 70842743866 70842743866
CHECKING        
Net Check 70842743866        
Your federal taxable wages this period are $
ALPHABET INCOME CHECK NO.
1600 AMPIHTHEATRE  PARKWAY MOUNTAIN VIEW CA 94043 222129
DEPOSIT TICKET
Deposited to the account Of xxxxxxxx6547
Deposits and Other Additions                                                                                           Checks and Other Deductions Amount
Description Description I Items 5.41
ACH Additions Debit Card Purchases 1 15.19
POS Purchases 2 2,269,894.11
ACH Deductions 5 82
Service Charges and Fees 3 5.2
Other Deductions 1 2,270,001.91
Total Total 12


Daily Balance

Date Ledger balance Date Ledger balance Date Ledger balance
7/30 107.8 8/3 2,267,621.92- 8/8 41.2
8/1 78.08 8/4 42.08 8/10 2150.19-





Daily Balance continued on next page
Date
8/3 2,267,700.00 ACH Web Usataxpymt IRS 240461564036618 (0.00022214903782823)
8/8 Corporate ACH Acctverify Roll By ADP (00022217906234115)
8/10 ACH Web Businessform Deluxeforbusiness 5072270 (00022222905832355)
8/11 Corporate Ach Veryifyqbw Intuit (00022222909296656)
8/12 Corporate Ach Veryifyqbw Intuit (00022223912710109)


Service Charges and Fees
Reference
Date posted number
8/1 10 Service Charge Period Ending 07/29.2022
8/4 36 Returned ItemFee (nsf) (00022214903782823)
8/11 36 Returned ItemFee (nsf) (00022222905832355)







INCOME STATEMENT

INASDAQ:GOOG TTM Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020 Q3 2020 Q2 2020

Gross Profit 1.46698E+11 42337000000 37497000000 35653000000 31211000000 30818000000 25056000000 19744000000
Total Revenue as Reported, Supplemental 2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
Other Revenue
Cost of Revenue -1.10939E+11 -32988000000 -27621000000 -26227000000 -24103000000 -26080000000 -21117000000 -18553000000
Cost of Goods and Services -1.10939E+11 -32988000000 -27621000000 -26227000000 -24103000000 -26080000000 -21117000000 -18553000000
Operating Income/Expenses -67984000000 -20452000000 -16466000000 -16292000000 -14774000000 -15167000000 -13843000000 -13361000000
Selling, General and Administrative Expenses -36422000000 -11744000000 -8772000000 -8617000000 -7289000000 -8145000000 -6987000000 -6486000000
General and Administrative Expenses -13510000000 -4140000000 -3256000000 -3341000000 -2773000000 -2831000000 -2756000000 -2585000000
Selling and Marketing Expenses -22912000000 -7604000000 -5516000000 -5276000000 -4516000000 -5314000000 -4231000000 -3901000000
Research and Development Expenses -31562000000 -8708000000 -7694000000 -7675000000 -7485000000 -7022000000 -6856000000 -6875000000
Total Operating Profit/Loss 78714000000 21885000000 21031000000 19361000000 16437000000 15651000000 11213000000 6383000000
Non-Operating Income/Expenses, Total 12020000000 2517000000 2033000000 2624000000 4846000000 3038000000 2146000000 1894000000
Total Net Finance Income/Expense 1153000000 261000000 310000000 313000000 269000000 333000000 412000000 420000000
Net Interest Income/Expense 1153000000 261000000 310000000 313000000 269000000 333000000 412000000 420000000

Interest Expense Net of Capitalized Interest -346000000 -117000000 -77000000 -76000000 -76000000 -53000000 -48000000 -13000000
Interest Income 1499000000 378000000 387000000 389000000 345000000 386000000 460000000 433000000
Net Investment Income 12364000000 2364000000 2207000000 2924000000 4869000000 3530000000 1957000000 1696000000
Gain/Loss on Investments and Other Financial Instruments 12270000000 2478000000 2158000000 2883000000 4751000000 3262000000 2015000000 1842000000
Income from Associates, Joint Ventures and Other Participating Interests 334000000 49000000 188000000 92000000 5000000 355000000 26000000 -54000000
Gain/Loss on Foreign Exchange -240000000 -163000000 -139000000 -51000000 113000000 -87000000 -84000000 -92000000
Irregular Income/Expenses 0 0 0 0 0
Other Irregular Income/Expenses 0 0 0 0 0
Other Income/Expense, Non-Operating -1497000000 -108000000 -484000000 -613000000 -292000000 -825000000 -223000000 -222000000
Pretax Income 90734000000 24402000000 23064000000 21985000000 21283000000 18689000000 13359000000 8277000000
Provision for Income Tax -14701000000 -3760000000 -4128000000 -3460000000 -3353000000 -3462000000 -2112000000 -1318000000
Net Income from Continuing Operations 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Net Income after Extraordinary Items and Discontinued Operations 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Net Income after Non-Controlling/Minority Interests 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Net Income Available to Common Stockholders 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Diluted Net Income Available to Common Stockholders 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Income Statement Supplemental Section
Reported Normalized and Operating Income/Expense Supplemental Section
Total Revenue as Reported, Supplemental 2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
Total Operating Profit/Loss as Reported, Supplemental 78714000000 21885000000 21031000000 19361000000 16437000000 15651000000 11213000000 6383000000
Reported Effective Tax Rate 0.162 0.179 0.157 0.158 0.158 0.159
Reported Normalized Income
Reported Normalized Operating Profit
Other Adjustments to Net Income Available to Common Stockholders
Discontinued Operations
Basic EPS 113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21
Basic EPS from Continuing Operations 113.88 31.12 28.44 27.69 26.63 22.46 16.55 10.21
Basic EPS from Discontinued Operations
Diluted EPS 112.2 30.69 27.99 27.26 26.29 22.3 16.4 10.13
Diluted EPS from Continuing Operations 112.2 30.67 27.99 27.26 26.29 22.23 16.4 10.13
Diluted EPS from Discontinued Operations
Basic Weighted Average Shares Outstanding 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000
Diluted Weighted Average Shares Outstanding 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000
Reported Normalized Diluted EPS
Basic EPS 113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21
Diluted EPS 112.2 30.69 27.99 27.26 26.29 22.3 16.4 10.13
Basic WASO 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000
Diluted WASO 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000
Fiscal year end September 28th., 2022. | USD
Your federal taxable wages this period are $
ALPHABET INCOME Advice number:
1600 AMPIHTHEATRE  PARKWAY MOUNTAIN VIEW CA 94043 2.21169E+13




GOOGL_income-statement_Quarterly_As_Originally_Reported Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020
Cash Flow from Operating Activities, Indirect 24934000000 25539000000 37497000000 31211000000 30818000000
Net Cash Flow from Continuing Operating Activities, Indirect 24934000000 25539000000 21890000000 19289000000 22677000000
Cash Generated from Operating Activities 24934000000 25539000000 21890000000 19289000000 22677000000
Income/Loss before Non-Cash Adjustment 20642000000 18936000000 18525000000 17930000000 15227000000
Total Adjustments for Non-Cash Items 6517000000 3797000000 4236000000 2592000000 5748000000
Depreciation, Amortization and Depletion, Non-Cash Adjustment 3439000000 3304000000 2945000000 2753000000 3725000000
Depreciation and Amortization, Non-Cash Adjustment 3439000000 3304000000 2945000000 2753000000 3725000000
Depreciation, Non-Cash Adjustment 3215000000 3085000000 2730000000 2525000000 3539000000
Amortization, Non-Cash Adjustment 224000000 219000000 215000000 228000000 186000000
Stock-Based Compensation, Non-Cash Adjustment 3954000000 3874000000 3803000000 3745000000 3223000000
Taxes, Non-Cash Adjustment 1616000000 -1287000000 379000000 1100000000 1670000000
Investment Income/Loss, Non-Cash Adjustment -2478000000 -2158000000 -2883000000 -4751000000 -3262000000
Gain/Loss on Financial Instruments, Non-Cash Adjustment -2478000000 -2158000000 -2883000000 -4751000000 -3262000000
Other Non-Cash Items -14000000 64000000 -8000000 -255000000 392000000
Changes in Operating Capital -2225000000 2806000000 -871000000 -1233000000 1702000000
Change in Trade and Other Receivables -5819000000 -2409000000 -3661000000 2794000000 -5445000000
Change in Trade/Accounts Receivable -5819000000 -2409000000 -3661000000 2794000000 -5445000000
Change in Other Current Assets -399000000 -1255000000 -199000000 7000000 -738000000
Change in Payables and Accrued Expenses 6994000000 3157000000 4074000000 -4956000000 6938000000
Change in Trade and Other Payables 1157000000 238000000 -130000000 -982000000 963000000
Change in Trade/Accounts Payable 1157000000 238000000 -130000000 -982000000 963000000
Change in Accrued Expenses 5837000000 2919000000 4204000000 -3974000000 5975000000
Change in Deferred Assets/Liabilities 368000000 272000000 -3000000 137000000 207000000
Change in Other Operating Capital -3369000000 3041000000 -1082000000 785000000 740000000
Change in Prepayments and Deposits
Cash Flow from Investing Activities -11016000000 -10050000000 -9074000000 -5383000000 -7281000000
Cash Flow from Continuing Investing Activities -11016000000 -10050000000 -9074000000 -5383000000 -7281000000
Purchase/Sale and Disposal of Property, Plant and Equipment, Net -6383000000 -6819000000 -5496000000 -5942000000 -5479000000
Purchase of Property, Plant and Equipment -6383000000 -6819000000 -5496000000 -5942000000 -5479000000
Sale and Disposal of Property, Plant and Equipment
Purchase/Sale of Business, Net -385000000 -259000000 -308000000 -1666000000 -370000000
Purchase/Acquisition of Business -385000000 -259000000 -308000000 -1666000000 -370000000
Purchase/Sale of Investments, Net -4348000000 -3360000000 -3293000000 2195000000 -1375000000
Purchase of Investments -40860000000 -35153000000 -24949000000 -37072000000 -36955000000
Sale of Investments 36512000000 31793000000 21656000000 39267000000 35580000000
Other Investing Cash Flow 100000000 388000000 23000000 30000000 -57000000
Purchase/Sale of Other Non-Current Assets, Net
Sales of Other Non-Current Assets
Cash Flow from Financing Activities -16511000000 -15254000000 -15991000000 -13606000000 -9270000000
Cash Flow from Continuing Financing Activities -16511000000 -15254000000 -15991000000 -13606000000 -9270000000
Issuance of/Payments for Common Stock, Net -13473000000 -12610000000 -12796000000 -11395000000 -7904000000
Payments for Common Stock 13473000000 -12610000000 -12796000000 -11395000000 -7904000000
Proceeds from Issuance of Common Stock
Issuance of/Repayments for Debt, Net 115000000 -42000000 -1042000000 -37000000 -57000000
Issuance of/Repayments for Long Term Debt, Net 115000000 -42000000 -1042000000 -37000000 -57000000
Proceeds from Issuance of Long Term Debt 6250000000 6350000000 6699000000 900000000 0
Repayments for Long Term Debt 6365000000 -6392000000 -7741000000 -937000000 -57000000
Proceeds from Issuance/Exercising of Stock Options/Warrants 2923000000 -2602000000 -2453000000 -2184000000 -1647000000


Other Financing Cash Flow 0
Cash and Cash Equivalents, End of Period 20945000000 23719000000 300000000 10000000 338000000000)
Change in Cash 25930000000 235000000000) 23630000000 26622000000 26465000000
Effect of Exchange Rate Changes 181000000000) -146000000000) -3175000000 300000000 6126000000
Cash and Cash Equivalents, Beginning of Period 2.3719E+13 2.363E+13 183000000 -143000000 210000000
Cash Flow Supplemental Section 2774000000) 89000000 266220000000000) 26465000000000) 20129000000000)
Change in Cash as Reported, Supplemental 13412000000 157000000 -2992000000 6336000000
Income Tax Paid, Supplemental 2774000000 89000000 2.2677E+15 -4990000000
Cash and Cash Equivalents, Beginning of Period

12 Months Ended
_________________________________________________________
Q4 2020 Q4  2019
Income Statement
USD in "000'"s
Repayments for Long Term Debt Dec. 31, 2020 Dec. 31, 2019
Costs and expenses:
Cost of revenues 182527 161857
Research and development
Sales and marketing 84732 71896
General and administrative 27573 26018
European Commission fines 17946 18464
Total costs and expenses 11052 9551
Income from operations 0 1697
Other income (expense), net 141303 127626
Income before income taxes 41224 34231
Provision for income taxes 6858000000 5394
Net income 22677000000 19289000000
*include interest paid, capital obligation, and underweighting 22677000000 19289000000
22677000000 19289000000
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)


For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see the seperate Instructions.

Returned for Signature
Date.                                                               2022-09-01

IRS RECIEVED
Department of the Treasury
Internal Revenue Service
Q4 2020 Q4  2019
Calendar Year
Due: 04/18/2022
Dec. 31, 2020 Dec. 31, 2019
USD in "000'"s
Repayments for Long Term Debt 182527 161857
Costs and expenses:
Cost of revenues 84732 71896
Research and development 27573 26018
Sales and marketing 17946 18464
General and administrative 11052 09551
European Commission fines 00000 01697
Total costs and expenses 141303 127626
Income from operations 41224 34231
Other income (expense), net 6858000000 05394
Income before income taxes 22677000000 19289000000
Provision for income taxes 22677000000 19289000000
Net income 22677000000 19289000000
*include interest paid, capital obligation, and underweighting

Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)










Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)
*include interest paid, capital obligation, and underweighting

Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)







20210418
Rate Units Total YTD Taxes / Deductions Current YTD
- - 70842745000 70842745000 Federal Withholding 00000 188813800
FICA - Social Security 00000 853700
FICA - Medicare 00000 11816700
Employer Taxes
FUTA 00000 00000
SUTA 00000 00000
EIN: 61-1767919 ID : 00037305581 SSN: 633441725 ATAA Payments 00000 102600

Gross
70842745000 Earnings Statement
Taxes / Deductions Stub Number: 1
0
Net Pay SSN Pay Schedule Pay Period Sep 28, 2022 to Sep 29, 2023 Pay Date 4/18/2022
70842745000 XXX-XX-1725 Annually
CHECK NO.
5560149





INTERNAL REVENUE SERVICE,
PO BOX 1214,
CHARLOTTE, NC 28201-1214

ZACHRY WOOD
00015 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000 6836000000 10671000000 7068000000
For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions. 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000 6836000000 10671000000 7068000000
Cat. No. 11320B 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000 6836000000 10671000000 7068000000
Form 1040 (2021) 76033000000 20642000000 18936000000
Reported Normalized and Operating Income/Expense Supplemental Section
Total Revenue as Reported, Supplemental 257637000000 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000 41159000000 46075000000 40499000000
Total Operating Profit/Loss as Reported, Supplemental 78714000000 21885000000 21031000000 19361000000 16437000000 15651000000 11213000000 6383000000 7977000000 9266000000 9177000000
Reported Effective Tax Rate 00000 00000 00000 00000 00000 00000 00000 00000 00000
Reported Normalized Income 6836000000
Reported Normalized Operating Profit 7977000000
Other Adjustments to Net Income Available to Common Stockholders
Discontinued Operations
Basic EPS 00114 00031 00028 00028 00027 00023 00017 00010 00010 00015 00010
Basic EPS from Continuing Operations 00114 00031 00028 00028 00027 00022 00017 00010 00010 00015 00010
Basic EPS from Discontinued Operations
Diluted EPS 00112 00031 00028 00027 00026 00022 00016 00010 00010 00015 00010
Diluted EPS from Continuing Operations 00112 00031 00028 00027 00026 00022 00016 00010 00010 00015 00010
Diluted EPS from Discontinued Operations
Basic Weighted Average Shares Outstanding 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000 686465000 688804000 692741000
Diluted Weighted Average Shares Outstanding 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000 692267000 695193000 698199000
Reported Normalized Diluted EPS 00010
Basic EPS 00114 00031 00028 00028 00027 00023 00017 00010 00010 00015 00010 00001
Diluted EPS 00112 00031 00028 00027 00026 00022 00016 00010 00010 00015 00010
Basic WASO 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000 686465000 688804000 692741000
Diluted WASO 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000 692267000 695193000 698199000
Fiscal year end September 28th., 2022. | USD

Alphabet Investor Relations
Alphabet Inc. is a holding company that gives ambitious projects the resources, freedom, and focus to make their...


*
633-44-1725 Zachryiixixiiiwood@gmail.com 
47-2041-6547 111000614 31000053
PNC Bank 
PNC Bank Business Tax I.D. Number: 633441725
CIF Department (Online Banking) 
Checking Account: 47-2041-6547
P7-PFSC-04-F Business Type: Sole Proprietorship/Partnership Corporation
500 First Avenue ALPHABET
Pittsburgh, PA 15219-3128 5323 BRADFORD DR
NON-NEGOTIABLE DALLAS TX 75235 8313
ZACHRY, TYLER, WOOD
4/18/2022 650-2530-000 469-697-4300
SIGNATURE Time Zone: Eastern Central Mountain Pacific
Investment Products • Not FDIC Insured • No Bank Guarantee • May Lose Value
"NON-NEGOTIABLE NON-NEGOTIABLE
PLEASE READ THE IMPORTANT DISCLOSURES BELOW PLEASE READ THE IMPORTANT DISCLOSURES BELOW
Based on facts as set forth in. Based on facts as set forth in. 6551 6550
The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above. The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.
EMPLOYER IDENTIFICATION NUMBER: 61-1767919 EMPLOYER IDENTIFICATION NUMBER: 61-1767919
[DRAFT FORM OF TAX OPINION] [DRAFT FORM OF TAX OPINION]
1
ZACHRY T WOOD
ALPHABET
5323 BRADFORD DR A title: Creating a custom 404 page for your GitHub Pages site
intro: You can display a custom 404 error page when people try to access nonexistent pages on your site.
redirect_from:
  - /articles/custom-404-pages
  - /articles/creating-a-custom-404-page-for-your-github-pages-site
  - /github/working-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create custom 404 page
---

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
{% data reusables.files.add-file %}
3. In the file name field, type `404.html` or `404.md`.
  ![File name field](/assets/images/help/pages/404-file-name.png)
4. If you named your file `404.md`, add the following YAML front matter to the beginning of the file:
  ```yaml
  ---
  permalink: /404.html
  ---
  ```
5. Below the YAML front matter, if present, add the content you want to display on your 404 page.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

## Further reading

- [Front matter](http://jekyllrb.com/docs/frontmatter) in the Jekyll documentation
