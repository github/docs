---
title: Suporte SARIF para a varredura de código
shortTitle: Suporte SARIF
intro: 'Para exibir os resultados de uma ferramenta de análise estática de terceiros no seu repositório no {% data variables.product.prodname_dotcom %}, você precisará dos resultados armazenados em um arquivo SARIF que seja compatível com um subconjunto específico do esquema SARIF 2.1.0 JSON para varredura de código. Se você usar o mecanismo de análise estática padrão do {% data variables.product.prodname_codeql %}, os resultados aparecerão automaticamente no seu repositório no {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  enterprise-server: '2.22'
topics:
  - Security
---

{% data reusables.code-scanning.beta %}

### Sobre o suporte SARIF

SARIF (Formato de Intercâmbio de Resultados de Análise Estática) é um [OASIS Padrão](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html) que define um formato do arquivo de saída. O padrão SARIF é usado para simplificar como as ferramentas de análise estáticas compartilham seus resultados. O {% data variables.product.prodname_code_scanning_capc %} é compatível com um subconjunto do esquema SARIF 2.1.0 JSON.

Para fazer o upload de um arquivo SARIF a partir de um mecanismo de análise de código estático de terceiros, você deverá garantir que os arquivos carregados usem a versão SARIF 2.1.0. Para fazer o upload de um arquivo SARIF a partir de um mecanismo de análise de código estático de terceiros, você deverá garantir que os arquivos carregados usem a versão SARIF 2.1.0. Para obter mais informações, consulte "[Enviar um arquivo SARIF para o {% data variables.product.prodname_dotcom %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)". Para obter mais informações sobre o esquema SARIF 2.1.0 JSON, consulte [`sarif-schema-2.1.0.json`](https://github.com/oasis-tcs/sarif-spec/blob/master/Schemata/sarif-schema-2.1.0.json).

Se o seu arquivo SARIF não incluir `partialFingerprints`, o campo `partialFingerprints` será calculado quando você fizer o upload do arquivo SARIF usando {% data variables.product.prodname_actions %}. For more information, see "[Setting up {% data variables.product.prodname_code_scanning %} for a repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)" or "[Running {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)."

{% data variables.product.prodname_dotcom %} usa propriedades no arquivo SARIF para exibir alertas. Por exemplo, `shortDescription` e `fullDescription` aparecem na parte superior de um alerta de {% data variables.product.prodname_code_scanning %}. O `local` permite que {% data variables.product.prodname_dotcom %} mostre anotações no seu arquivo de código. Para obter mais informações, consulte "[Gerenciar alertas de {% data variables.product.prodname_code_scanning %} para o seu repositório](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)".

Se você for novo no SARIF e quiser saber mais, consulte o repositório da Microsoft de[`Tutoriais do SARIF`](https://github.com/microsoft/sarif-tutorials).

### Impedir alertas duplicados usando impressões digitais

Cada vez que um fluxo de trabalho do {% data variables.product.prodname_actions %} executa uma nova varredura de código, os resultados de cada execução são processados e os alertas são adicionados ao repositório. Para evitar alertas duplicados para o mesmo problema, {% data variables.product.prodname_code_scanning %} usa impressões digitais para corresponder aos resultados em várias execuções, para que apareçam apenas uma vez na última execução do ramo selecionado. Isto torna possível combinar alertas com a linha de código correta quando os arquivos são editados.

O {% data variables.product.prodname_dotcom %} usa a propriedade `partialFingerprints` no padrão OASIS para detectar quando dois resultados são idênticos logicamente. Para obter mais informações, consulte a entrada "[partialFingerprints property](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012611)" na documentação do OASIS.

OS arquivos do SARIF criados pelo {% data variables.product.prodname_codeql_workflow %} ou usando {% data variables.product.prodname_codeql_runner %} incluem dados de impressão digital. Se você enviar um arquivo SARIF usando a ação `upload-sarif` e estes dados estiverem faltando, {% data variables.product.prodname_dotcom %} tenta preencher o campo `partialFingerprints` a partir dos arquivos de origem. Para obter mais informações sobre o upload de resultados, consulte "[Fazer o upload de um arquivo SARIF para o {% data variables.product.prodname_dotcom %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions)".

Se o seu arquivo SARIF não incluir `partialFingerprints`, o campo `partialFingerprints` será calculado quando você fizer o upload do arquivo SARIF usando {% data variables.product.prodname_actions %}. Para evitar ver alertas duplicados, você deve calcular dados de impressão digital e preencher a propriedade `partialFingerprints` antes de enviar o arquivo SARIF. Você pode encontrar o script que a ação `upload-sarif` usa como um ponto inicial útil: https://github.com/github/codeql-action/blob/main/src/fingerprints.ts. Para obter mais informações sobre a API, consulte "[Fazer o upload de uma análise como dados do SARIF](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)".

### Validar seu arquivo SARIF

<!--UI-LINK: When code scanning fails, the error banner shown in the Security > Code scanning alerts view links to this anchor.-->

Você pode marcar um arquivo SARIF compatível com {% data variables.product.prodname_code_scanning %} testando-o com as regras de ingestão de {% data variables.product.prodname_dotcom %}. Para obter mais informações, acesse o [validador do Microsoft SARIF](https://sarifweb.azurewebsites.net/).

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### Propriedades compatíveis do arquivo de saída SARIF

Se você usar um mecanismo de análise de código diferente de {% data variables.product.prodname_codeql %}, você poderá revisar as propriedades do SARIF compatíveis para otimizar como seus resultados de análise aparecerão em {% data variables.product.prodname_dotcom %}.

É possível fazer o upload de qualquer arquivo de saída SARIF 2.1.0 válido, no entanto, {% data variables.product.prodname_code_scanning %} usará apenas as seguintes propriedades compatíveis.

#### Objeto `sarifLog`

| Nome      | Descrição                                                                                                                                                                                                                                            |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$schema` | **Obrigatório.** A URI do esquema SARIF JSON para a versão 2.1.0. Por exemplo, `https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json`.                                                                     |
| `versão`  | **Obrigatório.** {% data variables.product.prodname_code_scanning_capc %} é compatível apenas com a versão `2.1.0` do SARIF.                                                                                                                       |
| `runs[]`  | **Obrigatório.** Um arquivo SARIF contém um array de uma ou mais execuções. Cada execução representa uma execução única de uma ferramenta de análise. Para obter mais informações sobre uma `execução`, consulte o objeto [`executar`](#run-object). |

#### Objeto `run`

O {% data variables.product.prodname_code_scanning_capc %} usa o objeto `executar` para filtrar resultados por ferramenta e fornecer informações sobre a fonte de um resultado. O objeto `executar` contém o objeto `tool.driver` do componente da ferramenta, que contém informações sobre a ferramenta que gerou os resultados. Cada `execução` pode ter resultados apenas para uma ferramenta de análise.

| Nome                          | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tool.driver.name`            | **Obrigatório.** O nome da ferramenta de análise. {% data variables.product.prodname_code_scanning_capc %} exibe o nome em {% data variables.product.prodname_dotcom %} para permitir que você filtre resultados por ferramenta.                                                                                                                                                                                                                                                                                                                                                                                            |
| `tool.driver.version`         | **Opcional.** A versão da ferramenta de análise. O {% data variables.product.prodname_code_scanning_capc %} usa o número da versão para fazer o monitoramento quando os resultados podem ter mudado devido a uma mudança na versão da ferramenta em vez de uma mudança no código que está sendo analisado. Se o arquivo SARIF incluir o campo `semanticVersion`, {% data variables.product.prodname_code_scanning %} não usará `versão`.                                                                                                                                                                                    |
| `tool.driver.semanticVersion` | **Opcional.** A versão da ferramenta de análise especificada pelo formato Semantic Versioning 2.0. O {% data variables.product.prodname_code_scanning_capc %} usa o número da versão para fazer o monitoramento quando os resultados podem ter mudado devido a uma mudança na versão da ferramenta em vez de uma mudança no código que está sendo analisado. Se o arquivo SARIF incluir o campo `semanticVersion`, {% data variables.product.prodname_code_scanning %} não usará `versão`. Para obter mais informações, consulte "[Semantic Versioning 2.0.0](https://semver.org/)" na documentação de Semantic Versioning. |
| `tool.driver.rules[]`         | **Obrigatório.** Um array de objetos `reportingDescriptor` que representam regras. A ferramenta de análise usa regras para encontrar problemas no código que está sendo analisado. Para obter mais informações, consulte o objeto [`reportingDescriptor`](#reportingdescriptor-object).                                                                                                                                                                                                                                                                                                                                         |
| `results[]`                   | **Obrigatório.** Os resultados da ferramenta de análise. {% data variables.product.prodname_code_scanning_capc %} exibe os resultados em {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte o objeto [`resultado`](#result-object).                                                                                                                                                                                                                                                                                                                                                        |

#### Objeto `reportingDescriptor`

| Nome                         | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                         | **Obrigatório.** Um identificador exclusivo para a regra. O id `` é referenciado a partir de outras partes do arquivo SARIF e pode ser usado por {% data variables.product.prodname_code_scanning %} para exibir URLs em {% data variables.product.prodname_dotcom %}.                                                                                                                                                                                                                                                  |
| `name`                       | **Opcional.** O nome da regra. {% data variables.product.prodname_code_scanning_capc %} exibe o nome para permitir que os resultados sejam filtrados pela regra em {% data variables.product.prodname_dotcom %}.                                                                                                                                                                                                                                                                                                      |
| `shortDescription.text`      | **Obrigatório.** Uma descrição concisa da regra. {% data variables.product.prodname_code_scanning_capc %} exibe a breve descrição em {% data variables.product.prodname_dotcom %} ao lado dos resultados associados.                                                                                                                                                                                                                                                                                                  |
| `fullDescription.text`       | **Obrigatório.** Uma descrição da regra. {% data variables.product.prodname_code_scanning_capc %} exibe a descrição completa em {% data variables.product.prodname_dotcom %} ao lado dos resultados associados. O número máximo de caracteres é 1000.                                                                                                                                                                                                                                                                 |
| `defaultConfiguration.level` | **Opcional.** Gravidade-padrão da regra. {% data variables.product.prodname_code_scanning_capc %} usa níveis de gravidade para ajudar você a entender quão crítico é o resultado para uma determinada regra. Esse valor pode ser substituído pelo atributo de `nível` no objeto `resultado`. Para obter mais informações, consulte o objeto [`resultado`](#result-object). Padrão: `alerta`.                                                                                                                            |
| `help.text`                  | **Obrigatório.** Documentação para a regra usando o formato de texto. O {% data variables.product.prodname_code_scanning_capc %} exibe essa documentação de ajuda ao lado dos resultados associados.                                                                                                                                                                                                                                                                                                                    |
| `help.markdown`              | **Recomendado.** Documentação para a regra que o formato Markdown. O {% data variables.product.prodname_code_scanning_capc %} exibe essa documentação de ajuda ao lado dos resultados associados. Quando `help.markdown` estiver disponível, será exibido em vez de `help.text`.                                                                                                                                                                                                                                        |
| `properties.tags[]`          | **Opcional.** Um array de strings. {% data variables.product.prodname_code_scanning_capc %} usa `tags` para permitir que você filtre resultados em {% data variables.product.prodname_dotcom %}. Por exemplo, é possível filtrar para todos os resultados que têm a tag `segurança`.                                                                                                                                                                                                                                    |
| `properties.precision`       | **Recomendado.** Uma string que indica quantas vezes os resultados indicados por esta regra são verdadeiros. Por exemplo, se uma regra tem uma alta taxa conhecida de falsos-positivos, a precisão deve ser `baixa`. {% data variables.product.prodname_code_scanning_capc %} ordena os resultados por precisão em {% data variables.product.prodname_dotcom %} de modo que os resultados com o mais alto `nível` e a mais alta `precisão` sejam exibidos primeiro. Pode ser: `very-high`, `high`, `medium` ou `low`. |

#### Objeto `resultado`

{% data reusables.code-scanning.upload-sarif-alert-limit %}

| Nome                                    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ruleId`                                | **Opcional.** O identificador exclusivo da regra (`reportingDescriptor.id`). Para obter mais informações, consulte o objeto [`reportingDescriptor`](#reportingdescriptor-object). {% data variables.product.prodname_code_scanning_capc %} usa o identificador da regra para filtrar os resultados por regra em {% data variables.product.prodname_dotcom %}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `ruleIndex`                             | **Opcional.** O índice da regra associada (objeto `reportingDescriptor`) no array `regras` no componente da ferramenta. Para obter mais informações, consulte o objeto [`executar`](#run-object).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `rule`                                  | **Opcional.** Uma referência usada para localizar a regra (descritor de relatório) para este resultado. Para obter mais informações, consulte o objeto [`reportingDescriptor`](#reportingdescriptor-object).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `level`                                 | **Opcional.** A gravidade do resultado. Esse nível sobrepõe a severidade-padrão definida pela regra. {% data variables.product.prodname_code_scanning_capc %} usa o nível para filtrar resultados por gravidade em {% data variables.product.prodname_dotcom %}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `message.text`                          | **Obrigatório.** Uma mensagem que descreve o resultado. {% data variables.product.prodname_code_scanning_capc %} exibe o texto da mensagem como o título do resultado. Apenas a primeira frase da mensagem será exibida quando o espaço visível for limitado.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `locations[]`                           | **Obrigatório.** O conjunto de locais onde o resultado foi detectado até o máximo de 10. Só um local deve ser incluído, a não ser que o problema só possa ser corrigido fazendo uma alteração em cada local especificado. **Observação:** Pelo menos um local é necessário para {% data variables.product.prodname_code_scanning %} apresentar um resultado. {% data variables.product.prodname_code_scanning_capc %} usará essa propriedade para decidir qual arquivo fazer anotações com o resultado. Apenas o primeiro valor desse array é usado. Todos os outros valores são ignorados.                                                                                                                                                                                                                                                         |
| `partialFingerprints`                   | **Obrigatório.** Um conjunto de strings usado para rastrear a identidade única do resultado. {% data variables.product.prodname_code_scanning_capc %} usa `partialFingerprints` para identificar com precisão quais resultados são os mesmos em todos os commits e branches. O {% data variables.product.prodname_code_scanning_capc %} tentará usar `partialFingerprints`, se existirem. Se você estiver fazendo upload de arquivos SARIF de terceiros com `upload-action`, a ação irá criar `partialFingerprints` para você quando não estiverem incluídos no arquivo SARIF. Para obter mais informações, consulte "[Prevenir alertas duplicados usando impressões digitais](#preventing-duplicate-alerts-using-fingerprints)".  **Observação:** {% data variables.product.prodname_code_scanning_capc %} usa apenas `primaryLocationLineHash`. |
| `codeFlows[].threadFlows[].locations[]` | **Opcional.** Uma array de objetos `local` para um objeto `threadFlow`, que descreve o progresso de um programa por meio de um thread de execução. Um objeto `codeFlow` descreve um padrão de execução de código usado para detectar um resultado. Se forem fornecidos fluxos de código, {% data variables.product.prodname_code_scanning %} irá expandir os fluxos de código em {% data variables.product.prodname_dotcom %} para o resultado relevante. Para obter mais informações, consulte o objeto [`local`](#location-object).                                                                                                                                                                                                                                                                                                                 |
| `relatedLocations[]`                    | Um conjunto de locais relevantes para este resultado. {% data variables.product.prodname_code_scanning_capc %} irá vincular a locais relacionados quando forem incorporados à mensagem do resultado. Para obter mais informações, consulte o objeto [`local`](#location-object).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Objeto `local`

Um local dentro de um artefato de programação, como, por exemplo, um arquivo no repositório ou um arquivo gerado durante uma criação.

| Nome                        | Descrição                                                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `location.id`               | **Opcional.** Um identificador exclusivo que distingue este local de todos os outros locais dentro de um único objeto de resultado.      |
| `location.physicalLocation` | **Obrigatório.** Identifica o artefato e a região. Para obter mais informações, consulte [`physicalLocation`](#physicallocation-object). |
| `location.message.text`     | **Opcional.** Uma mensagem relevante para o local.                                                                                       |

#### Objeto `physicalLocation`

| Nome                   | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `artifactLocation.uri` | **Obrigatório.** Um URI indicando o local de um artefato, geralmente um arquivo no repositório ou gerado durante uma criação. Se o URI for relativo, ele deverá ser relativo à raiz do repositório do {% data variables.product.prodname_dotcom %} que está sendo analisado. Por exemplo, main.js ou src/script.js são relativos à raiz do repositório. Se o URI for absoluto, o {% data variables.product.prodname_code_scanning %} poderá usar o URI para fazer checkout do artefato e corresponder os arquivos no repositório. Por exemplo, `https://github.com/ghost/example/blob/00/src/promiseUtils.js`. |
| `region.startLine`     | **Obrigatório.** O número da linha do primeiro caractere na região.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `region.startColumn`   | **Obrigatório.** O número da coluna do primeiro caractere na região.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `region.endLine`       | **Requerido.** O número da linha do último caractere na região.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `region.endColumn`     | **Obrigatório.** O número da coluna do caractere após o final da região.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

### Exemplos de arquivos de saída SARIF

Estes exemplos de arquivos de saída SARIF mostram as propriedades compatíveis e os valores de exemplo.

#### Exemplo com as propriedades mínimas necessárias

Este arquivo de saída SARIF tem exemplo de valores para mostrar as propriedades mínimas necessárias para que os resultados de {% data variables.product.prodname_code_scanning %} funcionem conforme esperado. Se você remover qualquer propriedade ou não incluir valores, esses dados não serão exibidos corretamente e não serão sincronizados em {% data variables.product.prodname_dotcom %}.


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
            }
          ]
        }
      },
      "results": [
        {
          "ruleId": "R01",
          "message": {
            "text": "Result text. Este resultado não tem nenhuma regra associada."
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

#### Exemplo que mostra todas as propriedades compatíveis como SARIF

Este arquivo de saída SARIF tem valores de exemplo para mostrar todas as propriedades do SARIF compatíveis com {% data variables.product.prodname_code_scanning %}.

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
