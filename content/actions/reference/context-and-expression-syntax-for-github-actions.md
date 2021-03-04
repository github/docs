---
title: Context and expression syntax for GitHub Actions
shortTitle: Context and expression syntax
intro: You can access context information and evaluate expressions in workflows and actions.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/contexts-and-expression-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/contexts-and-expression-syntax-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### About contexts and expressions

You can use expressions to programmatically set variables in workflow files and access contexts. An expression can be any combination of literal values, references to a context, or functions. You can combine literals, context references, and functions using operators.

Expressions are commonly used with the conditional `if` keyword in a workflow file to determine whether a step should run. When an `if` conditional is `true`, the step will run.

You need to use specific syntax to tell {% data variables.product.prodname_dotcom %} to evaluate an expression rather than treat it as a string.

{% raw %}
`${{ <expression> }}`
{% endraw %}

{% data reusables.github-actions.expression-syntax-if %} For more information about `if` conditionals, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)."

#### Example expression in an `if` conditional

```yaml
steps:
  - uses: actions/hello-world-javascript-action@v1.1
    if: {% raw %}${{ <expression> }}{% endraw %}
```

#### Example setting an environment variable

{% raw %}
```yaml
env:
  my_env_var: ${{ <expression> }}
```
{% endraw %}

### Contexts

Contexts are a way to access information about workflow runs, runner environments, jobs, and steps. Contexts use the expression syntax.

{% raw %}
`${{ <context> }}`
{% endraw %}

| Context name | Type | Description |
|---------------|------|-------------|
| `github` | `object` | Information about the workflow run. For more information, see [`github` context](#github-context). |
| `env` | `object` | Contains environment variables set in a workflow, job, or step. For more information, see [`env` context](#env-context) . |
| `job` | `object` | Information about the currently executing job. For more information, see [`job` context](#job-context). |
| `steps` | `object` | Information about the steps that have been run in this job. For more information, see [`steps` context](#steps-context). |
| `runner` | `object` | Information about the runner that is running the current job. For more information, see [`runner` context](#runner-context). |
| `secrets` | `object` | Enables access to secrets. For more information about secrets, see "[Creating and using encrypted secrets](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)." |
| `strategy` | `object` | Enables access to the configured strategy parameters and information about the current job. Strategy parameters include `fail-fast`, `job-index`, `job-total`, and `max-parallel`. |
| `matrix` | `object` | Enables access to the matrix parameters you configured for the current job. For example, if you configure a matrix build with the `os` and `node` versions, the `matrix` context object includes the `os` and `node` versions of the current job. |
| `needs` | `object` | Enables access to the outputs of all jobs that are defined as a dependency of the current job. For more information, see [`needs` context](#needs-context). |

As part of an expression, you may access context information using one of two syntaxes.
- Index syntax: `github['sha']`
- Property dereference syntax: `github.sha`

In order to use property dereference syntax, the property name must:
- start with `a-Z` or `_`.
- be followed by `a-Z` `0-9` `-` or `_`.

#### Determining when to use contexts

{% data reusables.github-actions.using-context-or-environment-variables %}

#### `github` context

The `github` context contains information about the workflow run and the event that triggered the run. You can read most of the `github` context data in environment variables. For more information about environment variables, see "[Using environment variables](/actions/automating-your-workflow-with-github-actions/using-environment-variables)."

{% data reusables.github-actions.github-context-warning %}

| Property name | Type | Description |
|---------------|------|-------------|
| `github` | `object` | The top-level context available during any job or step in a workflow. |
| `github.action` | `string` | The name of the action currently running. {% data variables.product.prodname_dotcom %} removes special characters or uses the name `run` when the current step runs a script.  If you use the same action more than once in the same job, the name will include a suffix with the sequence number.  For example, the first script you run will have the name `run1`, and the second script will be named `run2`. Similarly, the second invocation of `actions/checkout` will be `actionscheckout2`. |
| `github.action_path` | `string` | The path where your action is located. You can use this path to easily access files located in the same repository as your action. This attribute is only supported in composite run steps actions. |
| `github.actor` | `string` | The login of the user that initiated the workflow run. |
| `github.base_ref` | `string` | The `base_ref` or target branch of the pull request in a workflow run. This property is only available when the event that triggers a workflow run is a `pull_request`. |
| `github.event` | `object` | The full event webhook payload. For more information, see "[Events that trigger workflows](/articles/events-that-trigger-workflows/)." You can access individual properties of the event using this context. |
| `github.event_name` | `string` | The name of the event that triggered the workflow run. |
| `github.event_path` | `string` | The path to the full event webhook payload on the runner. |
| `github.head_ref` | `string` | The `head_ref` or source branch of the pull request in a workflow run. This property is only available when the event that triggers a workflow run is a `pull_request`. |
| `github.job` | `string` | The [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) of the current job. |
| `github.ref` | `string` | The branch or tag ref that triggered the workflow run. For branches this in the format  `refs/heads/<branch_name>`, and for tags it is `refs/tags/<tag_name>`. |
| `github.repository` | `string` | The owner and repository name. For example, `Codertocat/Hello-World`. |
| `github.repository_owner` | `string` | The repository owner's name. For example, `Codertocat`. |
| `github.run_id` | `string` | {% data reusables.github-actions.run_id_description %} |
| `github.run_number` | `string` | {% data reusables.github-actions.run_number_description %} |
| `github.sha` | `string` | The commit SHA that triggered the workflow run. |
| `github.token` | `string` | A token to authenticate on behalf of the GitHub App installed on your repository. This is functionally equivalent to the `GITHUB_TOKEN` secret. For more information, see "[Authenticating with the GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)." |
| `github.workflow` | `string` | The name of the workflow. If the workflow file doesn't specify a `name`, the value of this property is the full path of the workflow file in the repository. |
| `github.workspace` | `string` | The default working directory for steps and the default location of your repository when using the [`checkout`](https://github.com/actions/checkout) action. |

#### `env` context

The `env` context contains environment variables that have been set in a workflow, job, or step. For more information about setting environment variables in your workflow, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)."

The `env` context syntax allows you to use the value of an environment variable in your workflow file. You can use the `env` context in the value of any key in a **step** except for the `id` and `uses` keys. For more information on the step syntax, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)."

If you want to use the value of an environment variable inside a runner, use the runner operating system's normal method for reading environment variables.

| Property name | Type | Description |
|---------------|------|-------------|
| `env` | `object` | This context changes for each step in a job. You can access this context from any step in a job. |
| `env.<env_name>` | `string` | The value of a specific environment variable. |

#### `job` context

The `job` context contains information about the currently running job.

| Property name | Type | Description |
|---------------|------|-------------|
| `job` | `object` | This context changes for each job in a workflow run. You can access this context from any step in a job. |
| `job.container` | `object` | Information about the job's container. For more information about containers, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)." |
| `job.container.id` | `string` | The id of the container. |
| `job.container.network` | `string` | The id of the container network. The runner creates the network used by all containers in a job. |
| `job.services` | `object` | The service containers created for a job. For more information about service containers, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)." |
| `job.services.<service id>.id` | `string` | The id of the service container. |
| `job.services.<service id>.network` | `string` | The id of the service container network. The runner creates the network used by all containers in a job. |
| `job.services.<service id>.ports` | `object` | The exposed ports of the service container. |
| `job.status` | `string` | The current status of the job. Possible values are `success`, `failure`, or `cancelled`. |

#### `steps` context

The `steps` context contains information about the steps in the current job that have already run.

| Property name | Type | Description |
|---------------|------|-------------|
| `steps` | `object` | This context changes for each step in a job. You can access this context from any step in a job. |
| `steps.<step id>.outputs` | `object` | The set of outputs defined for the step. For more information, see "[Metadata syntax for {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs)." |
| `steps.<step id>.conclusion` | `string` | The result of a completed step after [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) is applied. Possible values are `success`, `failure`, `cancelled`, or `skipped`. When a `continue-on-error` step fails, the `outcome` is `failure`, but the final `conclusion` is `success`. |
| `steps.<step id>.outcome` | `string` | The result of a completed step before [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) is applied. Possible values are `success`, `failure`, `cancelled`, or `skipped`. When a `continue-on-error` step fails, the `outcome` is `failure`, but the final `conclusion` is `success`. |
| `steps.<step id>.outputs.<output name>` | `string` | The value of a specific output. |

#### `runner` context

The `runner` context contains information about the runner that is executing the current job.

| Property name | Type | Description |
|---------------|------|-------------|
| `runner.os` | `string` | The operating system of the runner executing the job. Possible values are `Linux`, `Windows`, or `macOS`. |
| `runner.temp` | `string` | The path of the temporary directory for the runner. This directory is guaranteed to be empty at the start of each job, even on self-hosted runners. |
| `runner.tool_cache` | `string` | {% if currentVersion == "github-ae@latest" %}For instructions on how to make sure your {% data variables.actions.hosted_runner %} has the required software installed, see "[Creating custom images](/actions/using-github-hosted-runners/creating-custom-images)."
{% else %}The path of the directory containing some of the preinstalled tools for {% data variables.product.prodname_dotcom %}-hosted runners. For more information, see "[Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)". {% endif %}|

#### `needs` context

The `needs` context contains outputs from all jobs that are defined as a dependency of the current job. For more information on defining job dependencies, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)."

| Property name | Type | Description |
|---------------|------|-------------|
| `needs.<job id>` | `object` | A single job that the current job depends on. |
| `needs.<job id>.outputs` | `object` | The set of outputs of a job that the current job depends on. |
| `needs.<job id>.outputs.<output name>` | `string` | The value of a specific output for a job that the current job depends on. |
| `needs.<job id>.result` | `string` | The result of a job that the current job depends on. Possible values are `success`, `failure`, `cancelled`, or `skipped`. |

#### Example printing context information to the log file

To inspect the information that is accessible in each context, you can use this workflow file example.

{% data reusables.github-actions.github-context-warning %}

**.github/workflows/main.yml**
{% raw %}
```yaml
on: push

jobs:
  one:
    runs-on: ubuntu-latest
    steps:
      - name: Dump GitHub context
        env:
          GITHUB_CONTEXT: ${{ toJSON(github) }}
        run: echo "$GITHUB_CONTEXT"
      - name: Dump job context
        env:
          JOB_CONTEXT: ${{ toJSON(job) }}
        run: echo "$JOB_CONTEXT"
      - name: Dump steps context
        env:
          STEPS_CONTEXT: ${{ toJSON(steps) }}
        run: echo "$STEPS_CONTEXT"
      - name: Dump runner context
        env:
          RUNNER_CONTEXT: ${{ toJSON(runner) }}
        run: echo "$RUNNER_CONTEXT"
      - name: Dump strategy context
        env:
          STRATEGY_CONTEXT: ${{ toJSON(strategy) }}
        run: echo "$STRATEGY_CONTEXT"
      - name: Dump matrix context
        env:
          MATRIX_CONTEXT: ${{ toJSON(matrix) }}
        run: echo "$MATRIX_CONTEXT"
```
{% endraw %}

### Literals

As part of an expression, you can use `boolean`, `null`, `number`, or `string` data types. Boolean literals are not case sensitive, so you can use `true` or `True`.

| Data type | Literal value |
|-----------|---------------|
| `boolean` | `true` or `false` |
| `null`    | `null` |
| `number`  | Any number format supported by JSON.
| `string`  | You must use single quotes. Escape literal single-quotes with a single quote.

#### Example

{% raw %}
```yaml
env:
  myNull: ${{ null }}
  myBoolean: ${{ false }}
  myIntegerNumber: ${{ 711 }}
  myFloatNumber: ${{ -9.2 }}
  myHexNumber: ${{ 0xff }}
  myExponentialNumber: ${{ -2.99-e2 }}
  myString: ${{ 'Mona the Octocat' }}
  myEscapedString: ${{ 'It''s open source!' }}
```
{% endraw %}

### Operators

| Operator    | Description |
| ---         | ---         |
| `( )`       | Logical grouping |
| `[ ]`       | Index
| `.`         | Property dereference |
| `!`         | Not |
| `<`         | Less than |
| `<=`        | Less than or equal |
| `>`         | Greater than |
| `>=`        | Greater than or equal |
| `==`        | Equal |
| `!=`        | Not equal |
| `&&`        | And |
|  <code>\|\|</code> | Or |

{% data variables.product.prodname_dotcom %} performs loose equality comparisons.

* If the types do not match, {% data variables.product.prodname_dotcom %} coerces the type to a number. {% data variables.product.prodname_dotcom %} casts data types to a number using these conversions:

  | Type    | Result |
  | ---     | ---    |
  | Null    | `0` |
  | Boolean | `true` returns `1` <br /> `false` returns `0` |
  | String  | Parsed from any legal JSON number format, otherwise `NaN`. <br /> Note: empty string returns `0`. |
  | Array   | `NaN` |
  | Object  | `NaN` |
* A comparison of one `NaN` to another `NaN` does not result in `true`. For more information, see the "[NaN Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)."
* {% data variables.product.prodname_dotcom %} ignores case when comparing strings.
* Objects and arrays are only considered equal when they are the same instance.

### Functions

{% data variables.product.prodname_dotcom %} offers a set of built-in functions that you can use in expressions. Some functions cast values to a string to perform comparisons. {% data variables.product.prodname_dotcom %} casts data types to a string using these conversions:

| Type    | Result |
| ---     | ---    |
| Null    | `''` |
| Boolean | `'true'` or `'false'` |
| Number  | Decimal format, exponential for large numbers |
| Array   | Arrays are not converted to a string |
| Object  | Objects are not converted to a string |

#### contains

`contains( search, item )`

Returns `true` if `search` contains `item`. If `search` is an array, this function returns `true` if the `item` is an element in the array. If `search` is a string, this function returns `true` if the `item` is a substring of `search`. This function is not case sensitive. Casts values to a string.

##### Example using an array

`contains(github.event.issue.labels.*.name, 'bug')`

##### Example using a string

`contains('Hello world', 'llo')` returns `true`

#### startsWith

`startsWith( searchString, searchValue )`

Returns `true` when `searchString` starts with `searchValue`. This function is not case sensitive. Casts values to a string.

##### Example

`startsWith('Hello world', 'He')` returns `true`

#### endsWith

`endsWith( searchString, searchValue )`

Returns `true` if `searchString` ends with `searchValue`. This function is not case sensitive. Casts values to a string.

##### Example

`endsWith('Hello world', 'ld')` returns `true`

#### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

Replaces values in the `string`, with the variable `replaceValueN`. Variables in the `string` are specified using the `{N}` syntax, where `N` is an integer. You must specify at least one `replaceValue` and `string`. There is no maximum for the number of variables (`replaceValueN`) you can use. Escape curly braces useing double braces.

##### Example

Returns 'Hello Mona the Octocat'

`format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')`

##### Example escaping braces

Returns '{Hello Mona the Octocat!}'

{% raw %}
```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
```
{% endraw %}

#### join

`join( array, optionalSeparator )`

The value for `array` can be an array or a string. All values in `array` are concatenated into a string. If you provide `optionalSeparator`, it is inserted between the concatenated values. Otherwise, the default separator `,` is used. Casts values to a string.

##### Example

`join(github.event.issue.labels.*.name, ', ')` may return 'bug, help wanted'

#### toJSON

`toJSON(value)`

Returns a pretty-print JSON representation of `value`. You can use this function to debug the information provided in contexts.

##### Example

`toJSON(job)` might return `{ "status": "Success" }`

#### fromJSON

`fromJSON(value)`

Returns a JSON object or JSON data type for `value`. You can use this function to provide a JSON object as an evaluated expression or to convert environment variables from a string.

##### Example returning a JSON object

This workflow sets a JSON matrix in one job, and passes it to the next job using an output and `fromJSON`.

{% raw %}
```yaml
name: build
on: push
jobs:
  job1:
    runs-on: ubuntu-latest
    outputs:
      matrix: ${{ steps.set-matrix.outputs.matrix }}
    steps:
    - id: set-matrix
      run: echo "::set-output name=matrix::{\"include\":[{\"project\":\"foo\",\"config\":\"Debug\"},{\"project\":\"bar\",\"config\":\"Release\"}]}"
  job2:
    needs: job1
    runs-on: ubuntu-latest
    strategy:
      matrix: ${{fromJSON(needs.job1.outputs.matrix)}}
    steps:
    - run: build
```
{% endraw %}

##### Example returning a JSON data type

This workflow uses `fromJSON` to convert environment variables from a string to a Boolean or integer.

{% raw %}
```yaml
name: print
on: push
env: 
  continue: true
  time: 3
jobs:
  job1:
    runs-on: ubuntu-latest
    steps:
    - continue-on-error: ${{ fromJSON(env.continue) }}
      timeout-minutes: ${{ fromJSON(env.time) }}
      run: echo ...
```
{% endraw %}

#### hashFiles

`hashFiles(path)`

Returns a single hash for the set of files that matches the `path` pattern. You can provide a single `path` pattern or multiple `path` patterns separated by commas. The `path` is relative to the `GITHUB_WORKSPACE` directory and can only include files inside of the `GITHUB_WORKSPACE`. This function calculates an individual SHA-256 hash for each matched file, and then uses those hashes to calculate a final SHA-256 hash for the set of files. For more information about SHA-256, see "[SHA-2](https://en.wikipedia.org/wiki/SHA-2)."

You can use pattern matching characters to match file names. Pattern matching is case-insensitive on Windows. For more information about supported pattern matching characters, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet)."

##### Example with a single pattern

Matches any `package-lock.json` file in the repository.

`hashFiles('**/package-lock.json')`

##### Example with multiple patterns

Creates a hash for any `package-lock.json` and `Gemfile.lock` files in the repository.

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`

### Job status check functions

You can use the following status check functions as expressions in `if` conditionals. If your `if` expression does not contain any of the status functions it will automatically result with `success()`. For more information about `if` conditionals, see "[Workflow syntax for GitHub Actions](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)."

#### success

Returns `true` when none of the previous steps have failed or been canceled.

##### Example

```yaml
steps:
  ...
  - name: The job has succeeded
    if: {% raw %}${{ success() }}{% endraw %}
```

#### always

Always returns `true`, even when canceled. A job or step will not run when a critical failure prevents the task from running. For example, if getting sources failed.

##### Example

```yaml
if: {% raw %}${{ always() }}{% endraw %}
```

#### cancelled

Returns `true` if the workflow was canceled.

##### Example

```yaml
if: {% raw %}${{ cancelled() }}{% endraw %}
```

#### failure

Returns `true` when any previous step of a job fails.

##### Example

```yaml
steps:
  ...
  - name: The job has failed
    if: {% raw %}${{ failure() }}{% endraw %}
```

### Object filters

You can use the `*` syntax to apply a filter and select matching items in a collection.

For example, consider an array of objects named `fruits`.

```json
[
  { "name": "apple", "quantity": 1 },
  { "name": "orange", "quantity": 2 },
  { "name": "pear", "quantity": 1 }
]
```

The filter `fruits.*.name` returns the array `[ "apple", "orange", "pear" ]`
