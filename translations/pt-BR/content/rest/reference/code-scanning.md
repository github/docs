---
title: Varredura de código
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

A API de {% data variables.product.prodname_code_scanning %} permite que você recupere e atualize alertas de {% data variables.product.prodname_code_scanning %} alertas de um repositório. Você pode usar os pontos de extremidade para criar relatórios automatizados para os alertas de {% data variables.product.prodname_code_scanning %} em uma organização ou fazer upload dos resultados de análise gerados usando as ferramentas off-line de {% data variables.product.prodname_code_scanning %}. Para obter mais informações, consulte "[Encontrar vulnerabilidades e erros de segurança no seu código](/github/finding-security-vulnerabilities-and-errors-in-your-code).

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
### Tipo de mídia personalizada para {% data variables.product.prodname_code_scanning %}

Existe um tipo de mídia personalizada com suporte para a API REST de {% data variables.product.prodname_code_scanning %}. Você pode usar isso com solicitações de `GET` enviadas para o ponto de extremidade `/analyes/{analysis_id}`. Ao usar este tipo de mídia com esta operação, a resposta inclui um subconjunto dos dados reais que foram enviados para a análise especificada, ao invés de detalhes sobre a análise, que é retornada quando você usa o tipo de mídia padrão. A resposta também inclui dados adicionais como as propriedades `github/alertNumber` e `github/alertUrl`. Os dados estão formatados como [SARIF versão 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html).

    application/sarif+json

Para obter mais informações, consulte "[Tipos de mídia](/rest/overview/media-types)".

#### Resposta que usa o tipo de mídia personalizada

Este exemplo de resposta é de uma solicitação de `GET` para o ponto de extremidade `/analyes/{analysis_id}`, que usa `application/sarif+json` como o valor do cabeçalho `Aceitar`. O exemplo já teve recuo e quebra de linha foi adicionado para legibilidade. Para obter mais informações sobre este ponto de extremidade, consulte "[Obter uma análise de {% data variables.product.prodname_code_scanning %} para um repositório](#get-a-code-scanning-analysis-for-a-repository)".

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
