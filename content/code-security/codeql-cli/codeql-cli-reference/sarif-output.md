---
title: CodeQL CLI SARIF output
intro: 'You can output SARIF from the {% data variables.product.prodname_codeql_cli %} and share static analysis results with other systems.'
product: '{% data reusables.gated-features.codeql %}'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
---

{% data reusables.codeql-cli.codeql-site-migration-note %}

## About SARIF output

SARIF is designed to represent the output of a broad range of static analysis tools, and there are many features in the SARIF specification that are
considered “optional”. This document details the output produced when using the format type `sarifv2.1.0`, which corresponds to the SARIF v2.1.0.csd1 specification. For more information on selecting a file format for your analysis results, see the [database analyze](https://codeql.github.com/docs/codeql-cli/manual/database-analyze/) command in the {% data variables.product.prodname_codeql %} documentation.

## SARIF specification and schema

This article is intended to be read alongside the detailed SARIF specification. For more information on the specification and the SARIF schema, see the [SARIF specification documentation](https://github.com/oasis-tcs/sarif-spec/blob/main/Schemata/sarif-schema-2.1.0.json).

## Change notes

### Changes between versions

| CodeQL version | Format type | Changes |
|----------------|-------------|---------|
| 2.0.0 | `sarifv2.1.0` | First version of this format. |

### Future changes to the output

The output produced for a given specific format type (for example, `sarifv2.1.0`) may change in future {% data variables.product.prodname_codeql %} releases. We will endeavor to maintain backwards compatibility with consumers of the generated SARIF by ensuring that:

* No field which is marked as “Always” being generated will be removed.

* The circumstances under which “Optional” fields are generated may change. Consumers of the {% data variables.product.prodname_codeql %} SARIF output should be robust to the presence or absence of these fields.

New output fields may be added in future releases under the same format type–these are not considered to break backwards compatibility, and consumers should be robust to the presence of newly added fields.

New format argument types may be added in future versions of {% data variables.product.prodname_codeql %}—for example, to support new versions of SARIF. These have no guarantee of backwards compatibility, unless explicitly documented.

## Generated SARIF objects

This details each SARIF component that may be generated, along with any specific circumstances. We omit any properties that are never generated.

### `sarifLog` object

| JSON property name| When is this generated?| Notes|
|-------------------|------------------------|---------|
| `$schema`| Always| Provides a link to the [SARIF schema](https://github.com/oasis-tcs/sarif-spec/blob/main/Schemata/sarif-schema-2.1.0.json).|
| `version`| Always| The version of the SARIF used to generate the output.|
| `runs`| Always| An array containing a single run object, for one language.|
### `run` object

| JSON property name| When is this generated?| Notes|
|-------------------|------------------------|---------|
| `tool`| Always| –|
| `originalUriBaseIds`| Always| A dictionary of `uriBaseIds` to artifactLocations representing the original locations on the analysis machine. At a minimum, this will contain the `%SRCROOT%` `uriBaseId`, which represents the root location on the analysis machine of the source code for the analyzed project. Each `artifactLocation` will contain the `uri` and `description` properties.|
| `artifacts`| Always| An array containing at least one artifact object for every file referenced in a result.|
| `results`| Always| –|
| `newLineSequences`| Always| –|
| `columnKind`| Always| –|
| `properties`| Always| The properties dictionary will contain the `semmle.formatSpecifier`, which identifies the format specifier passed to the {% data variables.product.prodname_codeql_cli %}.|

### `tool` object

| JSON property name| When is this generated?| Notes|
|-------------------|------------------------|---------|
| `driver`| Always| –|

### `toolComponent` object

| JSON property name| When is this generated?| Notes|
|-----------------------|---------------------|-----|
| `name`| Always| Set to “{% data variables.product.prodname_codeql %} command-line toolchain” for output from the {% data variables.product.prodname_codeql_cli %} tools. Note, if the output was generated using a different tool a different `name` is reported, and the format may not be as described here.|
| `organization`| Always| Set to “GitHub”.|
| `version`| Always| Set to the {% data variables.product.prodname_codeql %} release version e.g. “2.0.0”.|
| `rules`| Always| An array of `reportingDescriptor` objects that represent rules. This array will contain, at a minimum, all the rules that were run during this analysis, but may contain rules which were available but not run. For more detail about enabling queries, see `defaultConfiguration`.|

### `reportingDescriptor` object (for rule)

`reportingDescriptor` objects may be used in multiple places in the SARIF specification. When a `reportingDescriptor` is included in the rules array of a `toolComponent` object it has the following properties.

| JSON property name| When is this generated?| Notes|
|-----------------------|--------------------|------|
| `id`| Always| Will contain the `@id` property specified in the query that defines the rule, which is usually of the format `language/rule-name` (for example `cpp/unsafe-format-string`). If your organization defines the `@opaqueid` property in the query it will be used instead.|
| `name`| Always| Will contain the `@id` property specified in the query. See the `id` property above for an example.|
| `shortDescription`| Always| Will contain the `@name` property specified in the query that defines the rule.|
| `fullDescription`| Always| Will contain the `@description` property specified in the query that defines the rule.|
| `defaultConfiguration`| Always| A `reportingConfiguration` object, with the enabled property set to true or false, and a level property set according to the `@severity` property specified in the query that defines the rule. Omitted if the `@severity` property was not specified.|

### `artifact` object

| JSON property name| When is this generated?| Notes|
|-----------------------|--------------------|------|
| `location`| Always| An `artifactLocation` object.|
| `index`| Always| The index of the `artifact` object.|
| `contents`| Optionally| If results are generated using the `--sarif-add-file-contents` flag, and the source code is available at the time the SARIF file is generated, then the `contents` property is populated with an `artifactContent` object, with the `text` property set.|

### `artifactLocation` object

| JSON property name| When is this generated?| Notes|
|-----------------------|--------------------|------|
| `uri`| Always| –|
| `index`| Always| –|
| `uriBaseId`| Optionally| If the file is relative to some known abstract location, such as the root source location on the analysis machine, this will be set.|

### `result` object

The composition of the results is dependent on the options provided to CodeQL. By default, the results are grouped by unique message format string and primary location. Thus, two results that occur at the same location with the same underlying message, will appear as a single result in the output. This behavior can be disabled by using the flag `--ungroup-results`, in which case no results are grouped.

| JSON property name    | When is this generated?| Notes|
|-----------------------|--------------------|------|
| `ruleId`| Always| See the description of the `id` property in `reportingDescriptor` object (for rule) .|
| `ruleIndex`| Always| –|
| `message`| Always| A message describing the problem(s) occurring at this location. This message may be a SARIF “Message with placeholder”, containing links that refer to locations in the `relatedLocations` property.|
| `locations`| Always| An array containing a single `location` object.|
| `partialFingerprints`| Always| A dictionary from named fingerprint types to the fingerprint. This will contain, at a minimum, a value for the `primaryLocationLineHash`, which provides a fingerprint based on the context of the primary location.|
| `codeFlows`| Optionally| This array may be populated with one or more `codeFlow` objects if the query that defines the rule for this result is of `@kind path-problem`.|
| `relatedLocations`| Optionally| This array will be populated if the query that defines the rule for this result has a message with placeholder options. Each unique location is included once.|
| `suppressions`| Optionally| If the result is suppressed, then this will contain a single `suppression` object, with the `@kind` property set to `IN_SOURCE`. If this result is not suppressed, but there is at least one result that has a suppression, then this will be set to an empty array, otherwise it will not be set.|

### `location` object

| JSON property name| When is this generated?| Notes|
|-----------------------|--------------------|------|
| `physicalLocation`| Always| –|
| `id`| Optionally| `location` objects that appear in the `relatedLocations` array of a `result` object may contain the `id` property.|
| `message`| Optionally| `location` objects may contain the `message` property if:</br></br>- They appear in the `relatedLocations` array of a `result` object may contain the `message` property.</br></br>- They appear in the `threadFlowLocation.location` property.|

### `physicalLocation` object

| JSON property name| When is this generated?| Notes|
|-----------------------|--------------------|------|
| `artifactLocation`| Always| –|
| `region`| Optionally| If the given `physicalLocation` exists in a text file, such as a source code file, then the `region` property may be present.|
| `contextRegion`| Optionally| May be present if this location has an associated `snippet`.|

### `region` object

There are two types of `region` object produced by {% data variables.product.prodname_codeql %}:

* Line/column offset regions

* Character offset and length regions

Any region produced by {% data variables.product.prodname_codeql %} may be specified in either format, and consumers should robustly handle either type.

For line/column offset regions, the following properties will be set:

| JSON property name| When is this generated?| Notes|
|-----------------------|--------------------|------|
| `startLine`| Always| –|
| `startColumn`| Optionally| Not included if equal to the default value of 1.|
| `endLine`| Optionally| Not included if identical to `startLine`.|
| `endColumn`| Always| –|
| `snippet`| Optionally| –|

For character offset and length regions, the following properties will be set:

| JSON property name| When is this generated?| Notes|
|-----------------------|--------------------|------|
| `charOffset`| Optionally| Provided if `startLine`, `startColumn`, `endLine`, and `endColumn` are not populated.|
| `charLength`| Optionally| Provided if `startLine`, `startColumn`, `endLine`, and `endColumn` are not populated.|
| `snippet`| Optionally| –|

### `codeFlow` object
| JSON property name| When is this generated?| Notes|
|-----------------------|--------------------|------|
| `threadFlows`| Always| –|

### `threadFlow` object

| JSON property name| When is this generated?| Notes|
|-----------------------|--------------------|------|
| `locations`| Always| –|

### `threadFlowLocation` object

| JSON property name| When is this generated?| Notes|
|-----------------------|--------------------|------|
| `location`| Always| –|
