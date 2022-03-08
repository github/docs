---
title: SARIF support for code scanning
shortTitle: SARIF support
intro: 'To display results from a third-party static analysis tool in your repository on {% data variables.product.prodname_dotcom %}, you''ll need your results stored in a SARIF file that supports a specific subset of the SARIF 2.1.0 JSON schema for {% data variables.product.prodname_code_scanning %}. If you use the default {% data variables.product.prodname_codeql %} static analysis engine, then your results will display in your repository on {% data variables.product.prodname_dotcom %} automatically.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-sarif-support-for-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning
  - /code-security/secure-coding/sarif-support-for-code-scanning
  - /code-security/secure-coding/integrating-with-code-scanning/sarif-support-for-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
topics:
  - Advanced Security
  - Code scanning
  - Integration
  - SARIF
---


{% data reusables.code-scanning.beta %}

## About SARIF support

SARIF (Static Analysis Results Interchange Format) is an [OASIS Standard](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html) that defines an output file format. The SARIF standard is used to streamline how static analysis tools share their results. {% data variables.product.prodname_code_scanning_capc %} supports a subset of the SARIF 2.1.0 JSON schema.

To upload a SARIF file from a third-party static code analysis engine, you'll need to ensure that uploaded files use the SARIF 2.1.0 version. {% data variables.product.prodname_dotcom %} will parse the SARIF file and show alerts using the results in your repository as a part of the {% data variables.product.prodname_code_scanning %} experience. For more information, see "[Uploading a SARIF file to {% data variables.product.prodname_dotcom %}](/code-security/secure-coding/uploading-a-sarif-file-to-github)." For more information about the SARIF 2.1.0 JSON schema, see [`sarif-schema-2.1.0.json`](https://github.com/oasis-tcs/sarif-spec/blob/master/Documents/CommitteeSpecifications/2.1.0/sarif-schema-2.1.0.json).

If you're using {% data variables.product.prodname_actions %} with the {% data variables.product.prodname_codeql_workflow %}{% if codeql-runner-supported %}, using the {% data variables.product.prodname_codeql_runner %},{% endif %} or using the {% data variables.product.prodname_codeql_cli %}, then the {% data variables.product.prodname_code_scanning %} results will automatically use the supported subset of SARIF 2.1.0. For more information, see "[Setting up {% data variables.product.prodname_code_scanning %} for a repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)"{% if codeql-runner-supported %}, "[Running {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)",{% endif %} or "[Installing CodeQL CLI in your CI system](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)."

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
You can upload multiple SARIF files for the same commit, and display the data from each file as {% data variables.product.prodname_code_scanning %} results. When you upload multiple SARIF files for a commit, you must indicate a "category" for each analysis. The way to specify a category varies according to the analysis method:
- Using the {% data variables.product.prodname_codeql_cli %} directly, pass the `--sarif-category` argument to the `codeql database analyze` command when you generate SARIF files. For more information, see "[Configuring CodeQL CLI in your CI system](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#about-generating-code-scanning-results-with-codeql-cli)."
- Using {% data variables.product.prodname_actions %} with `codeql-action/analyze`, the category is set automatically from the workflow name and any matrix variables (typically, `language`). You can override this by specifying a `category` input for the action, which is useful when you analyze different sections of a mono-repository in a single workflow.
- Using {% data variables.product.prodname_actions %} to upload results from other static analysis tools, then you must specify a `category` input if you upload more than one file of results for the same tool in one workflow. For more information, see "[Uploading a {% data variables.product.prodname_code_scanning %} analysis with {% data variables.product.prodname_actions %}](/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions)."
- If you are not using either of these approaches, you must specify a unique `runAutomationDetails.id` in each SARIF file to upload. For more information about this property, see [`runAutomationDetails` object](#runautomationdetails-object) below.

If you upload a second SARIF file for a commit with the same category and from the same tool, the earlier results are overwritten. However, if you try to upload multiple SARIF files for the same tool and category in a single {% data variables.product.prodname_actions %} workflow run, the misconfiguration is detected and the run will fail.
{% endif %}

{% data variables.product.prodname_dotcom %} uses properties in the SARIF file to display alerts. For example, the `shortDescription` and `fullDescription` appear at the top of a {% data variables.product.prodname_code_scanning %} alert. The `location` allows {% data variables.product.prodname_dotcom %} to show annotations in your code file. For more information, see "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)."

If you're new to SARIF and want to learn more, see Microsoft's [`SARIF tutorials`](https://github.com/microsoft/sarif-tutorials) repository.

## Preventing duplicate alerts using fingerprints

Each time the results of a new code scan are uploaded, the results are processed and alerts are added to the repository. To prevent duplicate alerts for the same problem, {% data variables.product.prodname_code_scanning %} uses fingerprints to match results across various runs so they only appear once in the latest run for the selected branch. This makes it possible to match alerts to the right line of code when files are edited.

{% data variables.product.prodname_dotcom %} uses the `partialFingerprints` property in the OASIS standard to detect when two results are logically identical. For more information, see the "[partialFingerprints property](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012611)" entry in the OASIS documentation.

SARIF files created by the {% data variables.product.prodname_codeql_workflow %}, {% if codeql-runner-supported %}using the {% data variables.product.prodname_codeql_runner %}, {% endif %}or using the {% data variables.product.prodname_codeql_cli %} include fingerprint data. If you upload a SARIF file using the `upload-sarif` action and this data is missing, {% data variables.product.prodname_dotcom %} attempts to populate the `partialFingerprints` field from the source files. For more information about uploading results, see "[Uploading a SARIF file to {% data variables.product.prodname_dotcom %}](/code-security/secure-coding/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions)."

If you upload a SARIF file without fingerprint data using the `/code-scanning/sarifs` API endpoint, the {% data variables.product.prodname_code_scanning %} alerts will be processed and displayed, but users may see duplicate alerts. To avoid seeing duplicate alerts, you should calculate fingerprint data and populate the `partialFingerprints` property before you upload the SARIF file. You may find the script that the `upload-sarif` action uses a helpful starting point: https://github.com/github/codeql-action/blob/main/src/fingerprints.ts. For more information about the API, see "[Upload an analysis as SARIF data](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)."

## Validating your SARIF file

<!--UI-LINK: When code scanning fails, the error banner shown in the Security > Code scanning alerts view links to this anchor.-->

You can check a SARIF file is compatible with {% data variables.product.prodname_code_scanning %} by testing it against the {% data variables.product.prodname_dotcom %} ingestion rules. For more information, visit the [Microsoft SARIF validator](https://sarifweb.azurewebsites.net/).

{% data reusables.code-scanning.upload-sarif-alert-limit %}

## Supported SARIF output file properties

If you use a code analysis engine other than {% data variables.product.prodname_codeql %}, you can review the supported SARIF properties to optimize how your analysis results will appear on {% data variables.product.prodname_dotcom %}.

Any valid SARIF 2.1.0 output file can be uploaded, however, {% data variables.product.prodname_code_scanning %} will only use the following supported properties.

### `sarifLog` object

| Name | Description |
|----|----|
|  `$schema` | **Required.** The URI of the SARIF JSON schema for version 2.1.0. For example, `https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json`. |
| `version` | **Required.** {% data variables.product.prodname_code_scanning_capc %} only supports SARIF version `2.1.0`.
| `runs[]` | **Required.** A SARIF file contains an array of one or more runs. Each run represents a single run of an analysis tool. For more information about a `run`, see the [`run` object](#run-object).

### `run` object

{% data variables.product.prodname_code_scanning_capc %} uses the `run` object to filter results by tool and provide information about the source of a result. The `run` object contains the `tool.driver` tool component object, which contains information about the tool that generated the results. Each `run` can only have results for one analysis tool.

| Name | Description |
|----|----|
| `tool.driver.name` | **Required.** The name of the analysis tool. {% data variables.product.prodname_code_scanning_capc %} displays the name on {% data variables.product.prodname_dotcom %} to allow you to filter results by tool. |
| `tool.driver.version` | **Optional.** The version of the analysis tool. {% data variables.product.prodname_code_scanning_capc %} uses the version number to track when results may have changed due to a tool version change rather than a change in the code being analyzed. If the SARIF file includes the `semanticVersion` field, `version` is not used by {% data variables.product.prodname_code_scanning %}. |
| `tool.driver.semanticVersion` | **Optional.** The version of the analysis tool, specified by the Semantic Versioning 2.0 format. {% data variables.product.prodname_code_scanning_capc %} uses the version number to track when results may have changed due to a tool version change rather than a change in the code being analyzed. If the SARIF file includes the `semanticVersion` field, `version` is not used by {% data variables.product.prodname_code_scanning %}. For more information, see "[Semantic Versioning 2.0.0](https://semver.org/)" in the Semantic Versioning documentation. |
| `tool.driver.rules[]` | **Required.** An array of `reportingDescriptor` objects that represent rules. The analysis tool uses rules to find problems in the code being analyzed. For more information, see the [`reportingDescriptor` object](#reportingdescriptor-object). |
| `results[]` | **Required.** The results of the analysis tool. {% data variables.product.prodname_code_scanning_capc %} displays the results on {% data variables.product.prodname_dotcom %}. For more information, see the [`result` object](#result-object).

### `reportingDescriptor` object

| Name | Description |
|----|----|
| `id` |  **Required.** A unique identifier for the rule. The `id` is referenced from other parts of the SARIF file and may be used by {% data variables.product.prodname_code_scanning %} to display URLs on {% data variables.product.prodname_dotcom %}. |
| `name` | **Optional.** The name of the rule. {% data variables.product.prodname_code_scanning_capc %} displays the name to allow results to be filtered by rule on {% data variables.product.prodname_dotcom %}. |
| `shortDescription.text` | **Required.** A concise description of the rule. {% data variables.product.prodname_code_scanning_capc %} displays the short description on {% data variables.product.prodname_dotcom %} next to the associated results.
| `fullDescription.text` | **Required.** A description of the rule. {% data variables.product.prodname_code_scanning_capc %} displays the full description on {% data variables.product.prodname_dotcom %} next to the associated results. The max number of characters is limited to 1000.
| `defaultConfiguration.level` | **Optional.** Default severity level of the rule. {% data variables.product.prodname_code_scanning_capc %} uses severity levels to help you understand how critical the result is for a given rule. This value can be overridden by the `level` attribute in the `result` object. For more information, see the [`result` object](#result-object). Default: `warning`.
| `help.text` | **Required.** Documentation for the rule using text format. {% data variables.product.prodname_code_scanning_capc %} displays this help documentation next to the associated results.
| `help.markdown` | **Recommended.** Documentation for the rule using Markdown format. {% data variables.product.prodname_code_scanning_capc %} displays this help documentation next to the associated results. When `help.markdown` is available, it is displayed instead of `help.text`.
| `properties.tags[]` | **Optional.** An array of strings. {% data variables.product.prodname_code_scanning_capc %} uses `tags` to allow you to filter results on {% data variables.product.prodname_dotcom %}. For example, it is possible to filter to all results that have the tag `security`.
| `properties.precision` | **Recommended.** A string that indicates how often the results indicated by this rule are true. For example, if a rule has a known high false-positive rate, the precision should be `low`. {% data variables.product.prodname_code_scanning_capc %} orders results by precision on {% data variables.product.prodname_dotcom %} so that the results with the highest `level`, and highest `precision` are shown first. Can be one of: `very-high`, `high`, `medium`, or `low`. {% ifversion fpt or ghes > 3.1 or ghae or ghec %}
| `properties.problem.severity` | **Recommended.** A string that indicates the level of severity of any alerts generated by a non-security query. This, with the `properties.precision` property, determines whether the results are displayed by default on {% data variables.product.prodname_dotcom %} so that the results with the highest `problem.severity`, and highest `precision` are shown first. Can be one of: `error`, `warning`, or `recommendation`.
| `properties.security-severity` | **Recommended.** A string representing a score that indicates the level of severity, between 0.0 and 10.0, for security queries (`@tags` includes `security`). This, with the `properties.precision` property, determines whether the results are displayed by default on {% data variables.product.prodname_dotcom %} so that the results with the highest `security-severity`, and highest `precision` are shown first. {% data variables.product.prodname_code_scanning_capc %} translates numerical scores as follows: over 9.0 is `critical`, 7.0 to 8.9  is `high`, 4.0 to 6.9 is `medium` and 3.9 or less is `low`. {% endif %}

### `result` object

{% data reusables.code-scanning.upload-sarif-alert-limit %}

| Name | Description |
|----|----|
| `ruleId`| **Optional.** The unique identifier of the rule (`reportingDescriptor.id`). For more information, see the [`reportingDescriptor` object](#reportingdescriptor-object). {% data variables.product.prodname_code_scanning_capc %} uses the rule identifier to filter results by rule on {% data variables.product.prodname_dotcom %}.
| `ruleIndex`| **Optional.** The index of the associated rule (`reportingDescriptor` object) in the tool component `rules` array. For more information, see the [`run` object](#run-object). The allowed range for this property 0 to 2^63 - 1.
| `rule`| **Optional.** A reference used to locate the rule (reporting descriptor) for this result. For more information, see the [`reportingDescriptor` object](#reportingdescriptor-object).
| `level`| **Optional.** The severity of the result. This level overrides the default severity defined by the rule. {% data variables.product.prodname_code_scanning_capc %} uses the level to filter results by severity on {% data variables.product.prodname_dotcom %}.
| `message.text`| **Required.** A message that describes the result. {% data variables.product.prodname_code_scanning_capc %} displays the message text as the title of the result. Only the first sentence of the message will be displayed when visible space is limited.
| `locations[]`| **Required.** The set of locations where the result was detected up to a maximum of 10. Only one location should be included unless the problem can only be corrected by making a change at every specified location. **Note:** At least one location is required for {% data variables.product.prodname_code_scanning %} to display a result. {% data variables.product.prodname_code_scanning_capc %} will use this property to decide which file to annotate with the result. Only the first value of this array is used. All other values are ignored.
| `partialFingerprints`| **Required.** A set of strings used to track the unique identity of the result. {% data variables.product.prodname_code_scanning_capc %} uses `partialFingerprints` to accurately identify which results are the same across commits and branches. {% data variables.product.prodname_code_scanning_capc %} will attempt to use `partialFingerprints` if they exist. If you are uploading third-party SARIF files with the `upload-action`, the action will create `partialFingerprints` for you when they are not included in the SARIF file. For more information, see "[Preventing duplicate alerts using fingerprints](#preventing-duplicate-alerts-using-fingerprints)."  **Note:** {% data variables.product.prodname_code_scanning_capc %} only uses the `primaryLocationLineHash`.
| `codeFlows[].threadFlows[].locations[]`| **Optional.** An array of `location` objects for a `threadFlow` object, which describes the progress of a program through a thread of execution. A `codeFlow` object describes a pattern of code execution used to detect a result. If code flows are provided, {% data variables.product.prodname_code_scanning %} will expand code flows on {% data variables.product.prodname_dotcom %} for the relevant result. For more information, see the [`location` object](#location-object).
| `relatedLocations[]`| A set of locations relevant to this result. {% data variables.product.prodname_code_scanning_capc %} will link to related locations when they are embedded in the result message. For more information, see the [`location` object](#location-object).

### `location` object

A location within a programming artifact, such as a file in the repository or a file that was generated during a build.

| Name | Description |
|----|----|
| `location.id` | **Optional.** A unique identifier that distinguishes this location from all other locations within a single result object. The allowed range for this property 0 to 2^63 - 1.
| `location.physicalLocation` | **Required.** Identifies the artifact and region. For more information, see the [`physicalLocation`](#physicallocation-object).
| `location.message.text` | **Optional.** A message relevant to the location.

### `physicalLocation` object

| Name | Description |
|----|----|
| `artifactLocation.uri`| **Required.** A URI indicating the location of an artifact, usually a file either in the repository or generated during a build. If the URI is relative, it should be relative to the root of the {% data variables.product.prodname_dotcom %} repository being analyzed. For example, main.js or src/script.js are relative to the root of the repository. If the URI is absolute, {% data variables.product.prodname_code_scanning %} can use the URI to checkout the artifact and match up files in the repository. For example, `https://github.com/ghost/example/blob/00/src/promiseUtils.js`.
| `region.startLine` | **Required.** The line number of the first character in the region.
| `region.startColumn` | **Required.** The column number of the first character in the region.
| `region.endLine` | **Required.** The line number of the last character in the region.
| `region.endColumn` | **Required.** The column number of the character following the end of the region.

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
### `runAutomationDetails` object

The `runAutomationDetails` object contains information that specifies the identity of a run.

{% note %}

**Note:** `runAutomationDetails` is a SARIF v2.1.0 object. If you're using the {% data variables.product.prodname_codeql_cli %}, you can specify the version of SARIF to use. The equivalent object to `runAutomationDetails` is `<run>.automationId` for SARIF v1 and `<run>.automationLogicalId` for SARIF v2.

{% endnote %}

| Name | Description |
|----|----|
| `id`| **Optional.** A string that identifies the category of the analysis and the run ID. Use if you want to upload multiple SARIF files for the same tool and commit, but performed on different languages or different parts of the code. |

The use of the `runAutomationDetails` object is optional.

The `id` field can include an analysis category and a run ID. We don't use the run ID part of the `id` field, but we store it.

Use the category to distinguish between multiple analyses for the same tool or commit, but performed on different languages or different parts of the code. Use the run ID to identify the specific run of the analysis, such as the date the analysis was run.

`id` is interpreted as `category/run-id`. If the `id` contains no forward slash (`/`), then the entire string is the `run_id` and the `category` is empty. Otherwise, `category` is everything in the string until the last forward slash, and `run_id` is everything after.

| `id` | category | `run_id` |
|----|----|----|
| my-analysis/tool1/2021-02-01 | my-analysis/tool1 | 2021-02-01
| my-analysis/tool1/ | my-analysis/tool1 | _no `run-id`_
| my-analysis for tool1 | _no category_ | my-analysis for tool1

- The run with an `id` of "my-analysis/tool1/2021-02-01" belongs to the category "my-analysis/tool1". Presumably, this is the run from February 2, 2021.
- The run with an `id` of "my-analysis/tool1/" belongs to the category "my-analysis/tool1" but is not distinguished from other runs in that category.
- The run whose `id` is "my-analysis for tool1 " has a unique identifier but cannot be inferred to belong to any category.

For more information about the `runAutomationDetails` object and the `id` field, see [runAutomationDetails object](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012479) in the OASIS documentation. 

Note that the rest of the supported fields are ignored.

{% endif %}

## SARIF output file examples

These example SARIF output files show supported properties and example values.

### Example with minimum required properties

This SARIF output file has example values to show the minimum required properties for {% data variables.product.prodname_code_scanning %} results to work as expected. If you remove any properties or don't include values, this data will not be displayed correctly or sync on {% data variables.product.prodname_dotcom %}.

```json
{
  "$schema": "https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json",
  "version": "2.1.0",
  "runs": [
    {
      "tool": {
        "driver": {
          "name": "Tool Name",
          "rules": [
            {
              "id": "R01"
                      ...
              "properties" : {
               "id" : "java/unsafe-deserialization",
               "kind" : "path-problem",
               "name" : "...",
               "problem.severity" : "error",
               "security-severity" : "9.8",
            }
          ]
        }
      },
      "results": [
        {
          "ruleId": "R01",
          "message": {
            "text": "Result text. This result does not have a rule associated."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "fileURI"
                },
                "region": {
                  "startLine": 2,
                  "startColumn": 7,
                  "endColumn": 10
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "39fa2ee980eb94b0:1"
          }
        }
      ]
    }
  ]
}
```

### Example showing all supported SARIF properties

This SARIF output file has example values to show all supported SARIF properties for {% data variables.product.prodname_code_scanning %}.

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
```json
{
  "$schema": "https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json",
  "version": "2.1.0",
  "runs": [
    {
      "tool": {
        "driver": {
          "name": "Tool Name",
          "semanticVersion": "2.0.0",
          "rules": [
            {
              "id": "3f292041e51d22005ce48f39df3585d44ce1b0ad",
              "name": "js/unused-local-variable",
              "shortDescription": {
                "text": "Unused variable, import, function or class"
              },
              "fullDescription": {
                "text": "Unused variables, imports, functions or classes may be a symptom of a bug and should be examined carefully."
              },
              "defaultConfiguration": {
                "level": "note"
              },
              "properties": {
                "tags": [
                  "maintainability"
                ],
                "precision": "very-high"
              }
            },
            {
              "id": "d5b664aefd5ca4b21b52fdc1d744d7d6ab6886d0",
              "name": "js/inconsistent-use-of-new",
              "shortDescription": {
                "text": "Inconsistent use of 'new'"
              },
              "fullDescription": {
                "text": "If a function is intended to be a constructor, it should always be invoked with 'new'. Otherwise, it should always be invoked as a normal function, that is, without 'new'."
              },
              "properties": {
                "tags": [
                  "reliability",
                  "correctness",
                  "language-features"
                ],
                "precision": "very-high"
              }
            },
            {
              "id": "R01"
            }
          ]
        }
      },
      "automationDetails": { 
        "id": "my-category/"
      },
      "results": [
        {
          "ruleId": "3f292041e51d22005ce48f39df3585d44ce1b0ad",
          "ruleIndex": 0,
          "message": {
            "text": "Unused variable foo."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "main.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2,
                  "startColumn": 7,
                  "endColumn": 10
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "39fa2ee980eb94b0:1",
            "primaryLocationStartColumnFingerprint": "4"
          }
        },
        {
          "ruleId": "d5b664aefd5ca4b21b52fdc1d744d7d6ab6886d0",
          "ruleIndex": 1,
          "message": {
            "text": "Function resolvingPromise is sometimes invoked as a constructor (for example [here](1)), and sometimes as a normal function (for example [here](2))."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/promises.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "5061c3315a741b7d:1",
            "primaryLocationStartColumnFingerprint": "7"
          },
          "relatedLocations": [
            {
              "id": 1,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/ParseObject.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2281,
                  "startColumn": 33,
                  "endColumn": 55
                }
              },
              "message": {
                "text": "here"
              }
            },
            {
              "id": 2,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/LiveQueryClient.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 166
                }
              },
              "message": {
                "text": "here"
              }
            }
          ]
        },
        {
          "ruleId": "R01",
          "message": {
            "text": "Specifying both [ruleIndex](1) and [ruleID](2) might lead to inconsistencies."
          },
          "level": "error",
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 54,
                  "startColumn": 10,
                  "endLine": 55,
                  "endColumn": 25
                }
              }
            }
          ],
          "relatedLocations": [
            {
              "id": 1,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif"
                },
                "region": {
                  "startLine": 81,
                  "startColumn": 10,
                  "endColumn": 18
                }
              },
              "message": {
                "text": "here"
              }
            },
            {
              "id": 2,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif"
                },
                "region": {
                  "startLine": 82,
                  "startColumn": 10,
                  "endColumn": 21
                }
              },
              "message": {
                "text": "here"
              }
            }
          ],
          "codeFlows": [
            {
              "threadFlows": [
                {
                  "locations": [
                    {
                      "location": {
                        "physicalLocation": {
                          "region": {
                            "startLine": 11,
                            "endLine": 29,
                            "startColumn": 10,
                            "endColumn": 18
                          },
                          "artifactLocation": {
                            "uriBaseId": "%SRCROOT%",
                            "uri": "full.sarif"
                          }
                        },
                        "message": {
                          "text": "Rule has index 0"
                        }
                      }
                    },
                    {
                      "location": {
                        "physicalLocation": {
                          "region": {
                            "endColumn": 47,
                            "startColumn": 12,
                            "startLine": 12
                          },
                          "artifactLocation": {
                            "uriBaseId": "%SRCROOT%",
                            "uri": "full.sarif"
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "ABC:2"
          }
        }
      ],
      "columnKind": "utf16CodeUnits"
    }
  ]
}
```
{% else %}
```json
{
  "$schema": "https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json",
  "version": "2.1.0",
  "runs": [
    {
      "tool": {
        "driver": {
          "name": "Tool Name",
          "semanticVersion": "2.0.0",
          "rules": [
            {
              "id": "3f292041e51d22005ce48f39df3585d44ce1b0ad",
              "name": "js/unused-local-variable",
              "shortDescription": {
                "text": "Unused variable, import, function or class"
              },
              "fullDescription": {
                "text": "Unused variables, imports, functions or classes may be a symptom of a bug and should be examined carefully."
              },
              "defaultConfiguration": {
                "level": "note"
              },
              "properties": {
                "tags": [
                  "maintainability"
                ],
                "precision": "very-high"
              }
            },
            {
              "id": "d5b664aefd5ca4b21b52fdc1d744d7d6ab6886d0",
              "name": "js/inconsistent-use-of-new",
              "shortDescription": {
                "text": "Inconsistent use of 'new'"
              },
              "fullDescription": {
                "text": "If a function is intended to be a constructor, it should always be invoked with 'new'. Otherwise, it should always be invoked as a normal function, that is, without 'new'."
              },
              "properties": {
                "tags": [
                  "reliability",
                  "correctness",
                  "language-features"
                ],
                "precision": "very-high"
              }
            },
            {
              "id": "R01"
            }
          ]
        }
      },
      "results": [
        {
          "ruleId": "3f292041e51d22005ce48f39df3585d44ce1b0ad",
          "ruleIndex": 0,
          "message": {
            "text": "Unused variable foo."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "main.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2,
                  "startColumn": 7,
                  "endColumn": 10
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "39fa2ee980eb94b0:1",
            "primaryLocationStartColumnFingerprint": "4"
          }
        },
        {
          "ruleId": "d5b664aefd5ca4b21b52fdc1d744d7d6ab6886d0",
          "ruleIndex": 1,
          "message": {
            "text": "Function resolvingPromise is sometimes invoked as a constructor (for example [here](1)), and sometimes as a normal function (for example [here](2))."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/promises.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "5061c3315a741b7d:1",
            "primaryLocationStartColumnFingerprint": "7"
          },
          "relatedLocations": [
            {
              "id": 1,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/ParseObject.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2281,
                  "startColumn": 33,
                  "endColumn": 55
                }
              },
              "message": {
                "text": "here"
              }
            },
            {
              "id": 2,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/LiveQueryClient.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 166
                }
              },
              "message": {
                "text": "here"
              }
            }
          ]
        },
        {
          "ruleId": "R01",
          "message": {
            "text": "Specifying both [ruleIndex](1) and [ruleID](2) might lead to inconsistencies."
          },
          "level": "error",
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 54,
                  "startColumn": 10,
                  "endLine": 55,
                  "endColumn": 25
                }
              }
            }
          ],
          "relatedLocations": [
            {
              "id": 1,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif"
                },
                "region": {
                  "startLine": 81,
                  "startColumn": 10,
                  "endColumn": 18
                }
              },
              "message": {
                "text": "here"
              }
            },
            {
              "id": 2,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif"
                },
                "region": {
                  "startLine": 82,
                  "startColumn": 10,
                  "endColumn": 21
                }
              },
              "message": {
                "text": "here"
              }
            }
          ],
          "codeFlows": [
            {
              "threadFlows": [
                {
                  "locations": [
                    {
                      "location": {
                        "physicalLocation": {
                          "region": {
                            "startLine": 11,
                            "endLine": 29,
                            "startColumn": 10,
                            "endColumn": 18
                          },
                          "artifactLocation": {
                            "uriBaseId": "%SRCROOT%",
                            "uri": "full.sarif"
                          }
                        },
                        "message": {
                          "text": "Rule has index 0"
                        }
                      }
                    },
                    {
                      "location": {
                        "physicalLocation": {
                          "region": {
                            "endColumn": 47,
                            "startColumn": 12,
                            "startLine": 12
                          },
                          "artifactLocation": {
                            "uriBaseId": "%SRCROOT%",
                            "uri": "full.sarif"
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "ABC:2"
          }
        }
      ],
      "columnKind": "utf16CodeUnits"
    }
  ]
}
```
{% endif %}
