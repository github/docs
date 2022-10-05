---
title: Expressions
shortTitle: Expressions
intro: You can evaluate expressions in workflows and actions.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About expressions

You can use expressions to programmatically set environment variables in workflow files and access contexts. An expression can be any combination of literal values, references to a context, or functions. You can combine literals, context references, and functions using operators. For more information about contexts, see "[Contexts](/actions/learn-github-actions/contexts)."

Expressions are commonly used with the conditional `if` keyword in a workflow file to determine whether a step should run. When an `if` conditional is `true`, the step will run.

You need to use specific syntax to tell {% data variables.product.prodname_dotcom %} to evaluate an expression rather than treat it as a string.

{% raw %}
`${{ <expression> }}`
{% endraw %}

{% data reusables.actions.expression-syntax-if %} For more information about `if` conditionals, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)."

{% data reusables.actions.context-injection-warning %}

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
  MY_ENV_VAR: ${{ <expression> }}
```
{% endraw %}

## Literals

As part of an expression, you can use `boolean`, `null`, `number`, or `string` data types.

| Data type | Literal value |
|-----------|---------------|
| `boolean` | `true` or `false` |
| `null`    | `null` |
| `number`  | Any number format supported by JSON. |
| `string`  | You don't need to enclose strings in `{% raw %}${{{% endraw %}` and `{% raw %}}}{% endraw %}`. However, if you do, you must use single quotes (`'`) around the string. To use a literal single quote, escape the literal single quote using an additional single quote (`''`). Wrapping with double quotes (`"`) will throw an error. |

#### Example

{% raw %}

```yaml
env:
  myNull: ${{ null }}
  myBoolean: ${{ false }}
  myIntegerNumber: ${{ 711 }}
  myFloatNumber: ${{ -9.2 }}
  myHexNumber: ${{ 0xff }}
  myExponentialNumber: ${{ -2.99e-2 }}
  myString: Mona the Octocat
  myStringInBraces: ${{ 'It''s open source!' }}
```

{% endraw %}

## Operators

| Operator    | Description |
| ---         | ---         |
| `( )`       | Logical grouping |
| `[ ]`       | Index
| `.`         | Property de-reference |
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

## Functions

{% data variables.product.prodname_dotcom %} offers a set of built-in functions that you can use in expressions. Some functions cast values to a string to perform comparisons. {% data variables.product.prodname_dotcom %} casts data types to a string using these conversions:

| Type    | Result |
| ---     | ---    |
| Null    | `''` |
| Boolean | `'true'` or `'false'` |
| Number  | Decimal format, exponential for large numbers |
| Array   | Arrays are not converted to a string |
| Object  | Objects are not converted to a string |

### contains

`contains( search, item )`

Returns `true` if `search` contains `item`. If `search` is an array, this function returns `true` if the `item` is an element in the array. If `search` is a string, this function returns `true` if the `item` is a substring of `search`. This function is not case sensitive. Casts values to a string.

#### Example using a string

`contains('Hello world', 'llo')` returns `true`.

#### Example using an object filter

`contains(github.event.issue.labels.*.name, 'bug')` returns `true` if the issue related to the event has a label "bug".

For more information, see "[Object filters](#object-filters)."

#### Example matching an array of strings

Instead of writing `github.event_name == "push" || github.event_name == "pull_request"`, you can use `contains()` with `fromJson()` to check if an array of strings contains an `item`.

For example, `contains(fromJson('["push", "pull_request"]'), github.event_name)` returns `true` if `github.event_name` is "push" or "pull_request".

### startsWith

`startsWith( searchString, searchValue )`

Returns `true` when `searchString` starts with `searchValue`. This function is not case sensitive. Casts values to a string.

#### Example

`startsWith('Hello world', 'He')` returns `true`.

### endsWith

`endsWith( searchString, searchValue )`

Returns `true` if `searchString` ends with `searchValue`. This function is not case sensitive. Casts values to a string.

#### Example

`endsWith('Hello world', 'ld')` returns `true`.

### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

Replaces values in the `string`, with the variable `replaceValueN`. Variables in the `string` are specified using the `{N}` syntax, where `N` is an integer. You must specify at least one `replaceValue` and `string`. There is no maximum for the number of variables (`replaceValueN`) you can use. Escape curly braces using double braces.

#### Example

`format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')`

Returns 'Hello Mona the Octocat'.

#### Example escaping braces

{% raw %}
```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
```
{% endraw %}

Returns '{Hello Mona the Octocat!}'.

### join

`join( array, optionalSeparator )`

The value for `array` can be an array or a string. All values in `array` are concatenated into a string. If you provide `optionalSeparator`, it is inserted between the concatenated values. Otherwise, the default separator `,` is used. Casts values to a string.

#### Example

`join(github.event.issue.labels.*.name, ', ')` may return 'bug, help wanted'

### toJSON

`toJSON(value)`

Returns a pretty-print JSON representation of `value`. You can use this function to debug the information provided in contexts.

#### Example

`toJSON(job)` might return `{ "status": "Success" }`

### fromJSON

`fromJSON(value)`

Returns a JSON object or JSON data type for `value`. You can use this function to provide a JSON object as an evaluated expression or to convert environment variables from a string.

#### Example returning a JSON object

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
      matrix: ${{ fromJSON(needs.job1.outputs.matrix) }}
    steps:
      - run: build
```
{% endraw %}

#### Example returning a JSON data type

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

### hashFiles

`hashFiles(path)`

Returns a single hash for the set of files that matches the `path` pattern. You can provide a single `path` pattern or multiple `path` patterns separated by commas. The `path` is relative to the `GITHUB_WORKSPACE` directory and can only include files inside of the `GITHUB_WORKSPACE`. This function calculates an individual SHA-256 hash for each matched file, and then uses those hashes to calculate a final SHA-256 hash for the set of files. If the `path` pattern does not match any files, this returns an empty string. For more information about SHA-256, see "[SHA-2](https://en.wikipedia.org/wiki/SHA-2)."

You can use pattern matching characters to match file names. Pattern matching is case-insensitive on Windows. For more information about supported pattern matching characters, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet)."

#### Example with a single pattern

Matches any `package-lock.json` file in the repository.

`hashFiles('**/package-lock.json')`

#### Example with multiple patterns

Creates a hash for any `package-lock.json` and `Gemfile.lock` files in the repository.

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`


{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## Status check functions

You can use the following status check functions as expressions in `if` conditionals. A default status check of `success()` is applied unless you include one of these functions. For more information about `if` conditionals, see "[Workflow syntax for GitHub Actions](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)" and "[Metadata syntax for GitHub Composite Actions](/actions/creating-actions/metadata-syntax-for-github-actions/#runsstepsif)".
{% else %}
## Check Functions
You can use the following status check functions as expressions in `if` conditionals. A default status check of `success()` is applied unless you include one of these functions. For more information about `if` conditionals, see "[Workflow syntax for GitHub Actions](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)".
{% endif %}

### success

Returns `true` when none of the previous steps have failed or been canceled.

#### Example

```yaml
steps:
  ...
  - name: The job has succeeded
    if: {% raw %}${{ success() }}{% endraw %}
```

### always

Causes the step to always execute, and returns `true`, even when canceled. A job or step will not run when a critical failure prevents the task from running. For example, if getting sources failed.

#### Example

```yaml
if: {% raw %}${{ always() }}{% endraw %}
```

### cancelled

Returns `true` if the workflow was canceled.

#### Example

```yaml
if: {% raw %}${{ cancelled() }}{% endraw %}
```

### failure

Returns `true` when any previous step of a job fails. If you have a chain of dependent jobs, `failure()` returns `true` if any ancestor job fails.

#### Example

```yaml
steps:
  ...
  - name: The job has failed
    if: {% raw %}${{ failure() }}{% endraw %}
```

#### failure with conditions

You can include extra conditions for a step to run after a failure, but you must still include `failure()` to override the default status check of `success()` that is automatically applied to `if` conditions that don't contain a status check function.

##### Example

```yaml
steps:
  ...
  - name: Failing step
    id: demo
    run: exit 1
  - name: The demo step has failed
    if: {% raw %}${{ failure() && steps.demo.conclusion == 'failure' }}{% endraw %}
```

## Object filters

You can use the `*` syntax to apply a filter and select matching items in a collection.

For example, consider an array of objects named `fruits`.

```json
[
  { "name": "apple", "quantity": 1 },
  { "name": "orange", "quantity": 2 },
  { "name": "pear", "quantity": 1 }
]
```

The filter `fruits.*.name` returns the array `[ "apple", "orange", "pear" ]`.

You may also use the `*` syntax on an object. For example, suppose you have an object named `vegetables`.

```json

{
  "scallions":
  {
    "colors": ["green", "white", "red"],
    "ediblePortions": ["roots", "stalks"],
  },
  "beets":
  {
    "colors": ["purple", "red", "gold", "white", "pink"],
    "ediblePortions": ["roots", "stems", "leaves"],
  },
  "artichokes":
  {
    "colors": ["green", "purple", "red", "black"],
    "ediblePortions": ["hearts", "stems", "leaves"],
  },
}
```

The filter `vegetables.*.ediblePortions` could evaluate to:

```json

[
  ["roots", "stalks"],
  ["hearts", "stems", "leaves"],
  ["roots", "stems", "leaves"],
]
```

Since objects don't preserve order, the order of the output can not be guaranteed.
