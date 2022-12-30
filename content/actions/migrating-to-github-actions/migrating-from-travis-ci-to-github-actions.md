---
title: Migrating from Travis CI to GitHub Actions
intro: '{% data variables.product.prodname_actions %} and Travis CI share multiple similarities, which helps make it relatively straightforward to migrate to {% data variables.product.prodname_actions %}.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-travis-ci-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Travis CI
  - Migration
  - CI
  - CD
shortTitle: Migrate from Travis CI
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide helps you migrate from Travis CI to {% data variables.product.prodname_actions %}. It compares their concepts and syntax, describes the similarities, and demonstrates their different approaches to common tasks.

## Before you start

Before starting your migration to {% data variables.product.prodname_actions %}, it would be useful to become familiar with how it works:

- For a quick example that demonstrates a {% data variables.product.prodname_actions %} job, see "[Quickstart for {% data variables.product.prodname_actions %}](/actions/quickstart)."
- To learn the essential {% data variables.product.prodname_actions %} concepts, see "[Introduction to GitHub Actions](/actions/learn-github-actions/introduction-to-github-actions)."

## Comparing job execution

To give you control over when CI tasks are executed, a {% data variables.product.prodname_actions %} _workflow_ uses _jobs_ that run in parallel by default. Each job contains _steps_ that are executed in a sequence that you define. If you need to run setup and cleanup actions for a job, you can define steps in each job to perform these.

## Key similarities

{% data variables.product.prodname_actions %} and Travis CI share certain similarities, and understanding these ahead of time can help smooth the migration process.

### Using YAML syntax

Travis CI and {% data variables.product.prodname_actions %} both use YAML to create jobs and workflows, and these files are stored in the code's repository. For more information on how {% data variables.product.prodname_actions %} uses YAML, see ["Creating a workflow file](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)."

### Custom environment variables

Travis CI lets you set environment variables and share them between stages. Similarly, {% data variables.product.prodname_actions %} lets you define environment variables for a step, job, or workflow. For more information, see ["Environment variables](/actions/reference/environment-variables)."

### Default environment variables

Travis CI and {% data variables.product.prodname_actions %} both include default environment variables that you can use in your YAML files. For {% data variables.product.prodname_actions %}, you can see these listed in "[Default environment variables](/actions/reference/environment-variables#default-environment-variables)."

### Parallel job processing

Travis CI can use `stages` to run jobs in parallel. Similarly, {% data variables.product.prodname_actions %} runs `jobs` in parallel. For more information, see "[Creating dependent jobs](/actions/learn-github-actions/managing-complex-workflows#creating-dependent-jobs)."

### Status badges

Travis CI and {% data variables.product.prodname_actions %} both support status badges, which let you indicate whether a build is passing or failing.
For more information, see ["Adding a workflow status badge to your repository](/actions/managing-workflow-runs/adding-a-workflow-status-badge)."

### Using a matrix

Travis CI and {% data variables.product.prodname_actions %} both support a matrix, allowing you to perform testing using combinations of operating systems and software packages. For more information, see "[Using a matrix for your jobs](/actions/using-jobs/using-a-matrix-for-your-jobs)."

Below is an example comparing the syntax for each system:

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
matrix:
  include:
    - rvm: 2.5
    - rvm: 2.6.3
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  build:
    strategy:
      matrix:
        ruby: [2.5, 2.6.3]
```
{% endraw %}
</td>
</tr>
</table>

### Targeting specific branches

Travis CI and {% data variables.product.prodname_actions %} both allow you to target your CI to a specific branch. For more information, see "[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)."

Below is an example of the syntax for each system:

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
branches:
  only:
    - main
    - 'mona/octocat'
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
on:
  push:
    branches:
      - main
      - 'mona/octocat'
```
{% endraw %}
</td>
</tr>
</table>

### Checking out submodules

Travis CI and {% data variables.product.prodname_actions %} both allow you to control whether submodules are included in the repository clone.

Below is an example of the syntax for each system:

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
git:
  submodules: false
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- uses: {% data reusables.actions.action-checkout %}
  with:
    submodules: false
```

</td>
</tr>
</table>

### Using environment variables in a matrix

Travis CI and {% data variables.product.prodname_actions %} can both add custom environment variables to a test matrix, which allows you to refer to the variable in a later step.

In {% data variables.product.prodname_actions %}, you can use the `include` key to add custom environment variables to a matrix. {% data reusables.actions.matrix-variable-example %}

## Key features in {% data variables.product.prodname_actions %}

When migrating from Travis CI, consider the following key features in {% data variables.product.prodname_actions %}:

### Storing secrets

{% data variables.product.prodname_actions %} allows you to store secrets and reference them in your jobs. {% data variables.product.prodname_actions %} organizations can limit which repositories can access organization secrets. Environment protection rules can require manual approval for a workflow to access environment secrets. For more information, see "[Encrypted secrets](/actions/reference/encrypted-secrets)."

### Sharing files between jobs and workflows

{% data variables.product.prodname_actions %} includes integrated support for artifact storage, allowing you to share files between jobs in a workflow. You can also save the resulting files and share them with other workflows. For more information, see "[Sharing data between jobs](/actions/learn-github-actions/essential-features-of-github-actions#sharing-data-between-jobs)."

### Hosting your own runners

If your jobs require specific hardware or software, {% data variables.product.prodname_actions %} allows you to host your own runners and send your jobs to them for processing. {% data variables.product.prodname_actions %} also lets you use policies to control how these runners are accessed, granting access at the organization or repository level. For more information, see ["Hosting your own runners](/actions/hosting-your-own-runners)."

{% ifversion fpt or ghec %}

### Concurrent jobs and execution time

The concurrent jobs and workflow execution times in {% data variables.product.prodname_actions %} can vary depending on your {% data variables.product.company_short %} plan. For more information, see "[Usage limits, billing, and administration](/actions/reference/usage-limits-billing-and-administration)."

{% endif %}

### Using different languages in {% data variables.product.prodname_actions %}

When working with different languages in {% data variables.product.prodname_actions %}, you can create a step in your job to set up your language dependencies. For more information about working with a particular language, see the specific guide:
  - [Building and testing Node.js](/actions/guides/building-and-testing-nodejs)
  - [Building and testing Python](/actions/guides/building-and-testing-python)
  - [Building and testing PowerShell](/actions/guides/building-and-testing-powershell)
  - [Building and testing Java with Maven](/actions/guides/building-and-testing-java-with-maven)
  - [Building and testing Java with Gradle](/actions/guides/building-and-testing-java-with-gradle)
  - [Building and testing Java with Ant](/actions/guides/building-and-testing-java-with-ant)

## Executing scripts

{% data variables.product.prodname_actions %} can use `run` steps to run scripts or shell commands. To use a particular shell, you can specify the `shell` type when providing the path to the script. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."

For example:

```yaml
steps:
  - name: Run build script
    run: ./.github/scripts/build.sh
    shell: bash
```

## Error handling in {% data variables.product.prodname_actions %}

When migrating to {% data variables.product.prodname_actions %}, there are different approaches to error handling that you might need to be aware of.

### Script error handling

{% data variables.product.prodname_actions %} stops a job immediately if one of the steps returns an error code. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)."

### Job error handling

{% data variables.product.prodname_actions %} uses `if` conditionals to execute jobs or steps in certain situations. For example, you can run a step when another step results in a `failure()`. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#example-using-status-check-functions)."  You can also use [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) to prevent a workflow run from stopping when a job fails.

## Migrating syntax for conditionals and expressions

To run jobs under conditional expressions, Travis CI and {% data variables.product.prodname_actions %} share a similar `if` condition syntax. {% data variables.product.prodname_actions %} lets you use the `if` conditional to prevent a job or step from running unless a condition is met. For more information, see "[Expressions](/actions/learn-github-actions/expressions)."

This example demonstrates how an `if` conditional can control whether a step is executed:

```yaml
jobs:
  conditional:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This step runs with str equals 'ABC' and num equals 123"
        if: env.str == 'ABC' && env.num == 123
```

## Migrating phases to steps

Where Travis CI uses _phases_ to run _steps_, {% data variables.product.prodname_actions %} has _steps_ which execute _actions_. You can find prebuilt actions in the [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions), or you can create your own actions. For more information, see "[Building actions](/actions/building-actions)."

Below is an example of the syntax for each system:

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
language: python
python:
  - "3.7"

script:
  - python script.py
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  run_python:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: '3.7'
          architecture: 'x64'
      - run: python script.py
```

</td>
</tr>
</table>

## Caching dependencies

Travis CI and {% data variables.product.prodname_actions %} let you manually cache dependencies for later reuse.

{% ifversion actions-caching %}

This example demonstrates the cache syntax for each system.

<table>
<tr>
<th>
Travis CI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
language: node_js
cache: npm
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- name: Cache node modules
  uses: {% data reusables.actions.action-cache %}
  with:
    path: ~/.npm
    key: {% raw %}v1-npm-deps-${{ hashFiles('**/package-lock.json') }}{% endraw %}
    restore-keys: v1-npm-deps-
```

</td>
</tr>
</table>

{% else %}

{% data reusables.actions.caching-availability %}

{% endif %}

## Examples of common tasks

This section compares how {% data variables.product.prodname_actions %} and Travis CI perform common tasks.

### Configuring environment variables

You can create custom environment variables in a {% data variables.product.prodname_actions %} job. For example:

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %} Workflow
</th>
</tr>
<tr>
<td>

```yaml
env:
  - MAVEN_PATH="/usr/local/maven"
```

</td>
<td>

```yaml
jobs:
  maven-build:
    env:
      MAVEN_PATH: '/usr/local/maven'
```

</td>
</tr>
</table>

### Building with Node.js

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %} Workflow
</th>
</tr>
<tr>
<td>
{% raw %}
```yaml
install:
  - npm install
script:
  - npm run build
  - npm test
```
{% endraw %}
</td>
<td>

```yaml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '12.x'
      - run: npm install
      - run: npm run build
      - run: npm test
```

</td>
</tr>
</table>

## Next steps

To continue learning about the main features of  {% data variables.product.prodname_actions %}, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."
