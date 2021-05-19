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
  - API
---

{% data reusables.code-scanning.beta %}

{% data variables.product.prodname_code_scanning %} APIを使うと、リオジトリから{% data variables.product.prodname_code_scanning %}アラートを取得して更新できます。 このエンドポイントを使って、Organization内で{% data variables.product.prodname_code_scanning %}アラートの自動化されたレポートを作成したり、オフラインの{% data variables.product.prodname_code_scanning %}ツールを使って生成された分析結果をアップロードしたりできます。 詳しい情報については、「[コード内のセキュリティの脆弱性とエラーを検出する](/github/finding-security-vulnerabilities-and-errors-in-your-code)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
### {% data variables.product.prodname_code_scanning %}のためのカスタムメディアタイプ

{% data variables.product.prodname_code_scanning %} REST API用にサポートされているカスタムメディアタイプが1つあります。 これは`/analyses/{analysis_id}`エンドポイントに送信される`GET`リクエストで利用できます。 この操作でこのメディアタイプを使う場合、レスポンスには指定された分析に関する詳細ではなく、その分析のためにアップロードされた実際のデータのサブセットが含まれます。分析の詳細は、デフォルトのメディアタイプを使った場合に返されます。 このレスポンスには、`github/alertNumber`や`github/alertUrl`プロパティなどの追加データも含まれます。 このデータは、[SARIF version 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html)でフォーマットされます。

    application/sarif+json

詳しい情報については、「[メディアタイプ](/rest/overview/media-types)」を参照してください。

#### カスタムメディアタイプを使用したレスポンス

このレスポンスの例は、`application/sarif+json`を`Accept`ヘッダの値として使用した`/analyses/{analysis_id}`への`GET`リクエストからのものです。 この例には、読みやすくなるようにインデントと改行が追加されています。 このエンドポイントに関する詳しい情報については「[リポジトリの{% data variables.product.prodname_code_scanning %}分析の取得](#get-a-code-scanning-analysis-for-a-repository)」を参照してください。

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
