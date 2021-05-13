---
title: Escaneo de código
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

La API del {% data variables.product.prodname_code_scanning %} te permite recuperar y actualizar las alertas del {% data variables.product.prodname_code_scanning %} desde un repositorio. Puedes utilizar las terminales para crear reportes automatizados para las alertas del {% data variables.product.prodname_code_scanning %} en una organización o cargar resutlados de análisis que se hayan generado utilizando con herramientas fuera de línea del {% data variables.product.prodname_code_scanning %}. Para obtener más información, consulta la sección "[Encontrar vulnerabilidades de seguridad y errores en tu código](/github/finding-security-vulnerabilities-and-errors-in-your-code)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
### Tipos de medios personalizados para el {% data variables.product.prodname_code_scanning %}

Hay un tipo de medios personalizado compatible para la API de REST del {% data variables.product.prodname_code_scanning %}. Puedes utilizarla con las solicitudes de tipo `GET` que envíes a la terminal de `/analyses/{analysis_id}`. Cuando utilizas este tipo de medios con esta operación, la respuesta incluye un subconjunto de los datos reales que se cargó para el análisis especificado en vez de los detalles del análisis que se devolvió cuando utilizaste dicho tipo de medios personalizado. La respuesta también incluye datos adicionales, tales como las propiedades de `github/alertNumber` y `github/alertUrl`. Estos datos tienen formato de [SARIF versión 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html).

    application/sarif+json

Para obtener más información, consulta la sección "[Tipos de medios](/rest/overview/media-types)".

#### Respuesta utilizando el tipo de medios personalizado

Esta respuesta de ejemplo es de una solicitud tipo `GET` para la terminal `/analyses/{analysis_id}`, utilizando `application/sarif+json` como el valor de encabezado de `Accept`. Este ejemplo se muestra con sangrías y saltos de línea para su legibilidad. Para obtener más información sobre esta terminal, consulta la sección "[Obtener un análisis del {% data variables.product.prodname_code_scanning %} para un repositorio](#get-a-code-scanning-analysis-for-a-repository)".

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
