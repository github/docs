---
title: Code scanning
redirect_from:
  - /v3/code-scanning
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - api
---

{% data reusables.code-scanning.beta %}

The {% data variables.product.prodname_code_scanning %} API lets you retrieve and update {% data variables.product.prodname_code_scanning %} alerts from a repository. You can use the endpoints to create automated reports for the {% data variables.product.prodname_code_scanning %} alerts in an organization or upload analysis results generated using offline {% data variables.product.prodname_code_scanning %} tools. For more information, see "[Finding security vulnerabilities and errors in your code](/github/finding-security-vulnerabilities-and-errors-in-your-code)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
### Custom media type for {% data variables.product.prodname_code_scanning %}

There is one supported custom media type for the {% data variables.product.prodname_code_scanning %} REST API. You can use this with `GET` requests sent to the `/analyses/{analysis_id}` endpoint. When you use this media type with this operation, the response includes a subset of the actual data that was uploaded for the specified analysis, rather than details about the analysis, which is returned when you use the default media type. The response also includes additional data such as the `github/alertNumber` and `github/alertUrl` properties. The data is formatted as [SARIF version 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html).

    application/sarif+json

For more information, see "[Media types](/rest/overview/media-types)."

#### Response using the custom media type

This example response is from a `GET` request to the `/analyses/{analysis_id}` endpoint, using `application/sarif+json` as the `Accept` header value. The example has had indendation and line breaks added for readability. For more information about this endpoint, see "[Get a {% data variables.product.prodname_code_scanning %} analysis for a repository](#get-a-code-scanning-analysis-for-a-repository)."

```
{
  "runs": [
    {
      "artifacts": [
        {
          "location": {
            "index": 0,
            "uri": "src/promiseUtils.js"
          }
        },
        {
          "location": {
            "index": 1,
            "uri": "main.js"
          }
        }
      ],
      "conversion": {
        "tool": {
          "driver": {
            "name": "GitHub Code Scanning"
          }
        }
      },
      "results": [
        {
          "correlationGuid": "7f75ba0b-61a9-11eb-b882-b4969152bf2c",
          "level": "warning",
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "index": 0,
                  "uri": "src/promiseUtils.js"
                },
                "region": {
                  "endLine": 2,
                  "startColumn": 1,
                  "startLine": 2
                }
              }
            }
          ],
          "message": {
            "text": "Function resolvingPromise is sometimes invoked as a constructor (for example [here](1)), and sometimes as a normal function (for example [here](2))."
          },
          "partialFingerprints": {
            "primaryLocationLineHash": "5061c3315a741b7d:1"
          },
          "properties": {
            "github/alertNumber": 4,
            "github/alertUrl": "https://api.github.com/repos/octocat/hello-world/code-scanning/alerts/4"
          }
        },
        ...
      ],
      "tool": {
        "driver": {
          "name": "CodeQL",
          "version": "2.0.0"
        }
      },
      "versionControlProvenance": [
        {
          "branch": "refs/heads/master",
          "repositoryUri": "https://github.com/octocat/hello-world",
          "revisionId": "c18c69115354ff0166991962832dc2bd7756e655"
        }
      ]
    }
  ],
  "$schema": "https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json",
  "version": "2.1.0"
}
```
{% endif %}

{% include rest_operations_at_current_path %}
