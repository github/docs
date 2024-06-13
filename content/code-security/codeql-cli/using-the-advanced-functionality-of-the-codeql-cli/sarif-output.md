---
title: CodeQL CLI SARIF output
intro: 'You can output SARIF from the {% data variables.product.prodname_codeql_cli %} and share static analysis results with other systems.'
product: '{% data reusables.gated-features.codeql %}'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
redirect_from:
  - /code-security/codeql-cli/sarif-output
  - /code-security/codeql-cli/codeql-cli-reference/sarif-output
---

## About SARIF output

SARIF is designed to represent the output of a broad range of static analysis tools, and there are many features in the SARIF specification that are
considered "optional". This document details the output produced when using the format type `sarifv2.1.0`, which corresponds to the SARIF v2.1.0.csd1 specification. For more information on selecting a file format for your analysis results, see "[AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual/database-analyze)."

## SARIF specification and schema

This article is intended to be read alongside the detailed SARIF specification. For more information on the specification and the SARIF schema, see the [SARIF specification documentation](https://github.com/oasis-tcs/sarif-spec/blob/123e95847b13fbdd4cbe2120fa5e33355d4a042b/Schemata/sarif-schema-2.1.0.json).

## Change notes

### Changes between versions

| {% data variables.product.prodname_codeql %} version | Format type | Changes |
|----------------|-------------|---------|
| 2.0.0 | `sarifv2.1.0` | First version of this format. |

### Future changes to the output

The output produced for a given specific format type (for example, `sarifv2.1.0`) may change in future {% data variables.product.prodname_codeql %} releases. We will endeavor to maintain backwards compatibility with consumers of the generated SARIF by ensuring that:

* Fields that are marked as always being generated will never be removed.

* For fields that are marked as not always being generated, the circumstances under which the fields are generated may change. Consumers of the {% data variables.product.prodname_codeql %} SARIF output should be robust to the presence or absence of these fields.

New output fields may be added in future releases under the same format type–these are not considered to break backwards compatibility, and consumers should be robust to the presence of newly added fields.

New format argument types may be added in future versions of {% data variables.product.prodname_codeql %}—for example, to support new versions of SARIF. These have no guarantee of backwards compatibility, unless explicitly documented.

## Generated SARIF objects

This details each SARIF component that may be generated, along with any specific circumstances. We omit any properties that are never generated.

### `sarifLog` object

| JSON property name| Always generated?| Notes|
|-------------------|------------------------|---------|
| `$schema`| {% octicon "check" aria-label="Always" %}| Provides a link to the [SARIF schema](https://github.com/oasis-tcs/sarif-spec/blob/123e95847b13fbdd4cbe2120fa5e33355d4a042b/Schemata/sarif-schema-2.1.0.json).|
| `version`| {% octicon "check" aria-label="Always" %}| The version of the SARIF used to generate the output.|
| `runs`| {% octicon "check" aria-label="Always" %}| An array containing a single run object, for one language.|

### `run` object

| JSON property name| Always generated?| Notes|
|-------------------|------------------------|---------|
| `tool`| {% octicon "check" aria-label="Always" %}| None |
| `artifacts`| {% octicon "check" aria-label="Always" %}| An array containing at least one artifact object for every file referenced in a result.|
| `results`| {% octicon "check" aria-label="Always" %}| None |
| `newLineSequences`| {% octicon "check" aria-label="Always" %}| None |
| `columnKind`| {% octicon "check" aria-label="Always" %}| None |
| `properties`| {% octicon "check" aria-label="Always" %}| The properties dictionary will contain the `semmle.formatSpecifier`, which identifies the format specifier passed to the {% data variables.product.prodname_codeql_cli %}.|

### `tool` object

| JSON property name| Always generated?| Notes|
|-------------------|------------------------|---------|
| `driver`| {% octicon "check" aria-label="Always" %}| None |

### `toolComponent` object

| JSON property name| Always generated?| Notes|
|-----------------------|---------------------|-----|
| `name`| {% octicon "check" aria-label="Always" %}| Set to "{% data variables.product.prodname_codeql %} command-line toolchain" for output from the {% data variables.product.prodname_codeql_cli %} tools. Note, if the output was generated using a different tool a different `name` is reported, and the format may not be as described here.|
| `organization`| {% octicon "check" aria-label="Always" %}| Set to "GitHub".|
| `version`| {% octicon "check" aria-label="Always" %}| Set to the {% data variables.product.prodname_codeql %} release version e.g. "2.0.0".|
| `rules`| {% octicon "check" aria-label="Always" %}| An array of `reportingDescriptor` objects that represent rules. This array will contain, at a minimum, all the rules that were run during this analysis, but may contain rules which were available but not run. For more detail about enabling queries, see `defaultConfiguration`.|

### `reportingDescriptor` object (for rule)

`reportingDescriptor` objects may be used in multiple places in the SARIF specification. When a `reportingDescriptor` is included in the rules array of a `toolComponent` object it has the following properties.

| JSON property name| Always generated?| Notes|
|-----------------------|--------------------|------|
| `id`| {% octicon "check" aria-label="Always" %}| Will contain the `@id` property specified in the query that defines the rule, which is usually of the format `language/rule-name` (for example `cpp/unsafe-format-string`). If your organization defines the `@opaqueid` property in the query it will be used instead.|
| `name`| {% octicon "check" aria-label="Always" %}| Will contain the `@id` property specified in the query. See the `id` property above for an example.|
| `shortDescription`| {% octicon "check" aria-label="Always" %}| Will contain the `@name` property specified in the query that defines the rule.|
| `fullDescription`| {% octicon "check" aria-label="Always" %}| Will contain the `@description` property specified in the query that defines the rule.|
| `defaultConfiguration`| {% octicon "check" aria-label="Always" %}| A `reportingConfiguration` object, with the enabled property set to true or false, and a level property set according to the `@severity` property specified in the query that defines the rule. Omitted if the `@severity` property was not specified.|

### `artifact` object

| JSON property name| Always generated?| Notes|
|-----------------------|--------------------|------|
| `location`| {% octicon "check" aria-label="Always" %}| An `artifactLocation` object.|
| `index`| {% octicon "check" aria-label="Always" %}| The index of the `artifact` object.|
| `contents`| {% octicon "x" aria-label="Optionally" %}| If results are generated using the `--sarif-add-file-contents` flag, and the source code is available at the time the SARIF file is generated, then the `contents` property is populated with an `artifactContent` object, with the `text` property set.|

### `artifactLocation` object

| JSON property name| Always generated?| Notes|
|-----------------------|--------------------|------|
| `uri`| {% octicon "check" aria-label="Always" %}| None |
| `index`| {% octicon "check" aria-label="Always" %}| None |
| `uriBaseId`| {% octicon "x" aria-label="Optionally" %}| If the file is relative to some known abstract location, such as the root source location on the analysis machine, this will be set.|

### `result` object

The composition of the results is dependent on the options provided to {% data variables.product.prodname_codeql %}. By default, the results are grouped by unique message format string and primary location. Thus, two results that occur at the same location with the same underlying message, will appear as a single result in the output. This behavior can be disabled by using the flag `--ungroup-results`, in which case no results are grouped.

| JSON property name    | Always generated?| Notes|
|-----------------------|--------------------|------|
| `ruleId`| {% octicon "check" aria-label="Always" %}| See the description of the `id` property in `reportingDescriptor` object (for rule) .|
| `ruleIndex`| {% octicon "check" aria-label="Always" %}| None |
| `message`| {% octicon "check" aria-label="Always" %}| A message describing the problem(s) occurring at this location. This message may be a SARIF "Message with placeholder", containing links that refer to locations in the `relatedLocations` property.|
| `locations`| {% octicon "check" aria-label="Always" %}| An array containing a single `location` object.|
| `partialFingerprints`| {% octicon "check" aria-label="Always" %}| A dictionary from named fingerprint types to the fingerprint. This will contain, at a minimum, a value for the `primaryLocationLineHash`, which provides a fingerprint based on the context of the primary location.|
| `codeFlows`| {% octicon "x" aria-label="Optionally" %}| This array may be populated with one or more `codeFlow` objects if the query that defines the rule for this result is of `@kind path-problem`.|
| `relatedLocations`| {% octicon "x" aria-label="Optionally" %}| This array will be populated if the query that defines the rule for this result has a message with placeholder options. Each unique location is included once.|
| `suppressions`| {% octicon "x" aria-label="Optionally" %}| If the result is suppressed, then this will contain a single `suppression` object, with the `@kind` property set to `IN_SOURCE`. If this result is not suppressed, but there is at least one result that has a suppression, then this will be set to an empty array, otherwise it will not be set.|

### `location` object

| JSON property name| Always generated?| Notes|
|-----------------------|--------------------|------|
| `physicalLocation`| {% octicon "check" aria-label="Always" %}| None |
| `id`| {% octicon "x" aria-label="Optionally" %}| `location` objects that appear in the `relatedLocations` array of a `result` object may contain the `id` property.|
| `message`| {% octicon "x" aria-label="Optionally" %}| `location` objects may contain the `message` property if:</br></br>- They appear in the `relatedLocations` array of a `result` object may contain the `message` property.</br></br>- They appear in the `threadFlowLocation.location` property.|

### `physicalLocation` object

| JSON property name| Always generated?| Notes|
|-----------------------|--------------------|------|
| `artifactLocation`| {% octicon "check" aria-label="Always" %}| None |
| `region`| {% octicon "x" aria-label="Optionally" %}| If the given `physicalLocation` exists in a text file, such as a source code file, then the `region` property may be present.|
| `contextRegion`| {% octicon "x" aria-label="Optionally" %}| May be present if this location has an associated `snippet`.|

### `region` object

There are two types of `region` object produced by {% data variables.product.prodname_codeql %}:

* Line/column offset regions

* Character offset and length regions

Any region produced by {% data variables.product.prodname_codeql %} may be specified in either format, and consumers should robustly handle either type.

For line/column offset regions, the following properties will be set:

| JSON property name| Always generated?| Notes|
|-----------------------|--------------------|------|
| `startLine`| {% octicon "check" aria-label="Always" %}| None |
| `startColumn`| {% octicon "x" aria-label="Optionally" %}| Not included if equal to the default value of 1.|
| `endLine`| {% octicon "x" aria-label="Optionally" %}| Not included if identical to `startLine`.|
| `endColumn`| {% octicon "check" aria-label="Always" %}| None |
| `snippet`| {% octicon "x" aria-label="Optionally" %}| None |

For character offset and length regions, the following properties will be set:

| JSON property name| Always generated?| Notes|
|-----------------------|--------------------|------|
| `charOffset`| {% octicon "x" aria-label="Optionally" %}| Provided if `startLine`, `startColumn`, `endLine`, and `endColumn` are not populated.|
| `charLength`| {% octicon "x" aria-label="Optionally" %}| Provided if `startLine`, `startColumn`, `endLine`, and `endColumn` are not populated.|
| `snippet`| {% octicon "x" aria-label="Optionally" %}| None |

### `codeFlow` object

| JSON property name| Always generated?| Notes|
|-----------------------|--------------------|------|
| `threadFlows`| {% octicon "check" aria-label="Always" %}| None |

### `threadFlow` object

| JSON property name| Always generated?| Notes|
|-----------------------|--------------------|------|
| `locations`| {% octicon "check" aria-label="Always" %}| None |

### `threadFlowLocation` object

| JSON property name| Always generated?| Notes|
|-----------------------|--------------------|------|
| `location`| {% octicon "check" aria-label="Always" %}| None |
