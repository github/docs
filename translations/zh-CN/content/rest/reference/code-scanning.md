---
title: 代码扫描
redirect_from:
  - /v3/code-scanning
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: reference
topics:
  - API
  - Code scanning
  - REST
---

{% data reusables.code-scanning.beta %}

{% data variables.product.prodname_code_scanning %} API 可让您从仓库检索和更新 {% data variables.product.prodname_code_scanning %} 警报。 您可以使用端点为组织中的 {% data variables.product.prodname_code_scanning %} 警报创建自动报告，或上传使用离线 {% data variables.product.prodname_code_scanning %} 工具生成的分析结果。 更多信息请参阅“[查找代码中的安全漏洞和错误](/github/finding-security-vulnerabilities-and-errors-in-your-code)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
### {% data variables.product.prodname_code_scanning %} 的自定义媒体类型

{% data variables.product.prodname_code_scanning %} REST API 有一种支持的自定义媒体类型。 您可以将此请求与发送到 `/analyses/{analysis_id}` 端点的 `GET` 请求一起使用。 当您使用此媒体类型进行此操作时，响应包括上传用于指定分析的实际数据的子集，而不是有关分析的详细信息，该分析在使用默认媒体类型时返回。 响应还包括其他数据，如 `github/alertNumber` 和 `github/alertUrl` 属性。 数据格式为 [SARIF 版本 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html)。

    application/sarif+json

更多信息请参阅“[媒体类型](/rest/overview/media-types)”。

#### 使用自定义媒体类型的响应

此示例响应来自对 `/analyses/{analysis_id}` 端点的 `GET` 请求，使用 `application/sarif+json` 作为 `Accept` 标头值。 该示例增加了缩进和分行，以增加可读性。 有关此端点的更多信息，请参阅“[获取仓库的 {% data variables.product.prodname_code_scanning %} 分析](#get-a-code-scanning-analysis-for-a-repository)”。

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
