---
title: 对代码扫描的 SARIF 支持
shortTitle: SARIF 支持
intro: '要在 {% data variables.product.prodname_dotcom %} 上的仓库中显示第三方静态分析工具的结果，您需要将结果存储在 SARIF 文件中，以支持用于 {% data variables.product.prodname_code_scanning %} 的 SARIF 2.1.0 JSON 架构的特定子集。 如果使用默认 {% data variables.product.prodname_codeql %} 静态分析引擎，结果将自动显示于您在 {% data variables.product.prodname_dotcom %} 上的仓库中。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-sarif-support-for-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Security
---

{% data reusables.code-scanning.beta %}

### 关于 SARIF 支持

SARIF（数据分析结果交换格式）是定义输出文件格式的 [OASIS 标准](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html)。 SARIF 标准用于简化静态分析工具分享其结果的方式。 {% data variables.product.prodname_code_scanning_capc %} 支持 SARIF 2.1.0 JSON 架构的子集。

要从第三方静态代码分析引擎上传 SARIF 文件，需确保上传的文件使用 SARIF 2.1.0 版本。 {% data variables.product.prodname_dotcom %} 将剖析 SARIF 文件，并在 {% data variables.product.prodname_code_scanning %} 过程中使用仓库中的结果显示警报。 更多信息请参阅“[将 SARIF 文件上传到 {% data variables.product.prodname_dotcom %}](/code-security/secure-coding/uploading-a-sarif-file-to-github)”。 有关 SARIF 2.1.0 JSON 架构的更多信息，请参阅 [`sarif-schema-2.1.0.json`](https://github.com/oasis-tcs/sarif-spec/blob/master/Schemata/sarif-schema-2.1.0.json)。

如果您结合使用 {% data variables.product.prodname_actions %} 和 {% data variables.product.prodname_codeql_workflow %}，或者使用 {% data variables.product.prodname_codeql_runner %}，则 {% data variables.product.prodname_code_scanning %} 结果将自动使用受支持的 SARIF 2.1.0 子集。 更多信息请参阅“[为仓库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”或“[在 CI 系统中运行 {% data variables.product.prodname_codeql %}{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/running-codeql-code-scanning-in-your-ci-system)”。

{% data variables.product.prodname_dotcom %} 使用 SARIF 文件中的属性来显示警报。 例如，`shortDescription` 和 `fullDescription` 出现在 {% data variables.product.prodname_code_scanning %} 警报的顶部。 `location` 允许 {% data variables.product.prodname_dotcom %} 在代码文件中显示注释。 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)”。

如果您是 SARIF 的新用户，想了解更多信息，请参阅 Microsoft 的[`SARIF 教程`](https://github.com/microsoft/sarif-tutorials)库。

### 使用指纹防止重复警报

每次上传新的代码扫描结果时，都会处理结果并将警报添加到仓库中。 为防止出现针对同一问题的重复警报，{% data variables.product.prodname_code_scanning %} 使用指纹匹配各个运行的结果，使它们只会出现在所选分支的最新运行中出现一次。 这样可以在编辑文件时将警报与正确的代码行匹配。

{% data variables.product.prodname_dotcom %} 使用 OASIS 标准中的 `partialFingerprints` 属性来检测两个结果在逻辑上是否相同。 更多信息请参阅 OASIS 文档中的 "[partialFingerprints property](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012611)" 条目。

通过 {% data variables.product.prodname_codeql_workflow %} 或 {% data variables.product.prodname_codeql_runner %} 创建的 SARIF 文件包含指纹数据。 如果使用 `upload-sarif` 操作上传 SARIF 文件且此数据缺少，则 {% data variables.product.prodname_dotcom %} 会尝试从源文件填充 `partialFingerprints` 字段。 有关上传结果的更多信息，请参阅“[将 SARIF 文件上传到 {% data variables.product.prodname_dotcom %}](/code-security/secure-coding/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions)”。

如果您使用 `/code-scaning/sarifs` API 端点上传无指纹数据的 SARIF 文件，{% data variables.product.prodname_code_scanning %} 警报将被处理并显示，但用户可能会看到重复的警报。 为了避免看到重复的警报，您应该在上传 SARIF 文件之前计算指纹数据并填充 `partialFingerprints` 属性。 您可能发现 `upload-sarif` 操作的脚本使用一个有用的起点：https://github.com/github/codeql-action/blob/main/src/fingprints。 有关 API 的更多信息，请参阅“[将分析作为 SARIF 数据上传](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)”。

### 验证 SARIF 文件

<!--UI-LINK: When code scanning fails, the error banner shown in the Security > Code scanning alerts view links to this anchor.-->

您可以根据 {% data variables.product.prodname_dotcom %} 引入规则测试 SARIF 文件是否兼容 {% data variables.product.prodname_code_scanning %}。 有关更多信息，请访问 [Microsoft SARIF 验证程序](https://sarifweb.azurewebsites.net/)。

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### 支持的 SARIF 输出文件属性

如果您使用 {% data variables.product.prodname_codeql %} 以外的代码分析引擎，则可以查看受支持的 SARIF 属性来优化您的分析结果在 {% data variables.product.prodname_dotcom %} 中的显示方式。

任何有效的 SARIF 2.1.0 输出文件都可以上传，但 {% data variables.product.prodname_code_scanning %} 只使用以下受支持的属性。

#### `sarifLog` 对象

| 名称        | 描述                                                                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `$schema` | **必需。**2.1.0 版 SARIFJSON 架构的 URI。 例如，`https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json`。 |
| `version` | **必选。** {% data variables.product.prodname_code_scanning_capc %} 只支持 SARIF 版本 `2.1.0`。                                               |
| `runs[]`  | **必选。** SARIF 文件包含一个或多个运行的数组。 每个运行代表分析工具的一次运行。 有关 `run` 的更多信息，请参阅 [`run` 对象](#run-object)。                                             |

#### `run` 对象

{% data variables.product.prodname_code_scanning_capc %} 使用 `run` 对象按工具过滤结果并提供关于结果来源的信息。 `run` 对象包含 `tool.driver` 工具组件对象，该对象包含有关生成结果的工具的信息。 每个 `run` 只能获得一个分析工具的结果。

| 名称                            | 描述                                                                                                                                                                                                                                                                                              |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tool.driver.name`            | **必需。**分析工具的名称。 {% data variables.product.prodname_code_scanning_capc %} 在 {% data variables.product.prodname_dotcom %} 上显示名称，以允许您按工具过滤结果。                                                                                                                                                  |
| `tool.driver.version`         | **可选。**分析工具的版本。 {% data variables.product.prodname_code_scanning_capc %} 使用版本号来跟踪何时可能因工具版本的变更而不是所分析代码的变更而导致了结果变化。 如果 SARIF 文件包含 `semanticVersion` 字段，则 {% data variables.product.prodname_code_scanning %} 不使用 `version`。                                                                   |
| `tool.driver.semanticVersion` | **可选。**以语义版本 2.0 格式指定的分析工具版本。 {% data variables.product.prodname_code_scanning_capc %} 使用版本号来跟踪何时可能因工具版本的变更而不是所分析代码的变更而导致了结果变化。 如果 SARIF 文件包含 `semanticVersion` 字段，则 {% data variables.product.prodname_code_scanning %} 不使用 `version`。 更多信息请参阅语义版本文档中的“[语义版本 2.0.0](https://semver.org/)”。 |
| `tool.driver.rules[]`         | **必需。**用于表示规则的 `reportingDescriptor` 对象数组。 分析工具使用规则来查找所分析代码中的问题。 更多信息请参阅 [`reportingDescriptor` 对象](#reportingdescriptor-object)。                                                                                                                                                               |
| `results[]`                   | **必需。**分析工具的结果。 {% data variables.product.prodname_code_scanning_capc %} 在 {% data variables.product.prodname_dotcom %} 上显示结果。 更多信息请参阅 [`result` 对象](#result-object)。                                                                                                                       |

#### `reportingDescriptor` 对象

| 名称                           | 描述                                                                                                                                                                                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                         | **必需。**规则的唯一标识符。 `id` 是从 SARIF 文件的其他部分引用的，可能被 {% data variables.product.prodname_code_scanning %} 用于在 {% data variables.product.prodname_dotcom %} 上显示 URL。                                                                                                                  |
| `name`                       | **可选。**规则的名称。 {% data variables.product.prodname_code_scanning_capc %} 显示名称，以允许按 {% data variables.product.prodname_dotcom %} 上的规则过滤结果。                                                                                                                                    |
| `shortDescription.text`      | **必需。**规则的简要说明。 {% data variables.product.prodname_code_scanning_capc %} 在 {% data variables.product.prodname_dotcom %} 上的相关结果旁边显示简短说明。                                                                                                                                    |
| `fullDescription.text`       | **必需。**规则的说明。 {% data variables.product.prodname_code_scanning_capc %} 在 {% data variables.product.prodname_dotcom %} 上的相关结果旁边显示完整说明。 最大字符数限制为 1000。                                                                                                                       |
| `defaultConfiguration.level` | **可选。**规则的默认严重级别。 {% data variables.product.prodname_code_scanning_capc %} 使用严重级别帮助您了解结果对于给定规则的严重程度。 此值可用 `result` 对象中的 `level` 属性进行覆盖。 更多信息请参阅 [`result` 对象](#result-object)。 默认值：`warning`。                                                                                |
| `help.text`                  | **必需。**使用文本格式的规则文档。 {% data variables.product.prodname_code_scanning_capc %} 在相关结果旁边显示此帮助文档。                                                                                                                                                                                 |
| `help.markdown`              | **推荐。**使用 Markdown 格式的规则文档。 {% data variables.product.prodname_code_scanning_capc %} 在相关结果旁边显示此帮助文档。 当 `help.markdown` 可用时，将显示它，而不是 `help.text`。                                                                                                                             |
| `properties.tags[]`          | **可选。**字符串数组。 {% data variables.product.prodname_code_scanning_capc %} 使用 `tags` 允许您在 {% data variables.product.prodname_dotcom %} 上过滤结果。 例如，可以过滤带标记 `security` 的所有结果。                                                                                                       |
| `properties.precision`       | **推荐。**一个字符串，表示此规则指示的结果为真的频率。 例如，如果已知某项规则的误报率较高，则其准确性应为 `low`。 {% data variables.product.prodname_code_scanning_capc %} 在 {% data variables.product.prodname_dotcom %} 上按准确性对结果进行排序，使具有最高 `level` 和最高 `precision` 的结果显示在最前面。 可以是以下值之一：`very-high`、`high`、`medium` 或 `low`。 |

#### `result` 对象

{% data reusables.code-scanning.upload-sarif-alert-limit %}

| 名称                                      | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ruleId`                                | **可选。**规则的唯一标识符 (`reportingDescriptor.id`)。 更多信息请参阅 [`reportingDescriptor` 对象](#reportingdescriptor-object)。 {% data variables.product.prodname_code_scanning_capc %} 使用规则标识符在 {% data variables.product.prodname_dotcom %} 上按规则过滤结果。                                                                                                                                                                                                                                                         |
| `ruleIndex`                             | **可选。**工具组件 `rules` 数组中相关规则（`reportingDescriptor` 对象）的索引。 更多信息请参阅 [`run` 对象](#run-object)。                                                                                                                                                                                                                                                                                                                                                                                                        |
| `rule`                                  | **可选。**用于定位此结果的规则 (reportingdescriptor) 的引用。 更多信息请参阅 [`reportingDescriptor` 对象](#reportingdescriptor-object)。                                                                                                                                                                                                                                                                                                                                                                                     |
| `level`                                 | **可选。**结果的严重程度。 此级别覆盖规则定义的默认严重程度。 {% data variables.product.prodname_code_scanning_capc %} 使用级别在 {% data variables.product.prodname_dotcom %} 上按严重程度过滤结果。                                                                                                                                                                                                                                                                                                                                     |
| `message.text`                          | **必选。**描述结果的消息。 {% data variables.product.prodname_code_scanning_capc %} 显示消息文本作为结果的标题。 当可见空间有限时，仅显示消息的第一句。                                                                                                                                                                                                                                                                                                                                                                                     |
| `locations[]`                           | **必填。**>最多可以检测到 10 个结果的位置集。 应只包含一个位置，除非只能通过在每个指定位置进行更改来更正问题。 **注：**{% data variables.product.prodname_code_scanning %} 至少需要一个位置才能显示结果。 {% data variables.product.prodname_code_scanning_capc %} 将使用此属性来决定要用结果注释哪个文件。 仅使用此数组的第一个值。 所有其他值都被忽略。                                                                                                                                                                                                                                                  |
| `partialFingerprints`                   | **必选。**用于跟踪结果的唯一标识的一组字符串。 {% data variables.product.prodname_code_scanning_capc %} 使用 `partialFingerprints` 准确地识别在提交和分支之间相同的结果。 {% data variables.product.prodname_code_scanning_capc %} 将尝试使用 `partialFingerprints`（如果存在）。 如果您使用 `upload-action` 上传第三方 SARIF 文件，该操作将为您创建 `partialFingerprints`（如果它们未包含在 SARIF 文件中）。 更多信息请参阅“[使用指纹防止重复警报](#preventing-duplicate-alerts-using-fingerprints)”。  **注：**{% data variables.product.prodname_code_scanning_capc %} 只使用 `primaryLocationLineHash`。 |
| `codeFlows[].threadFlows[].locations[]` | **可选。**`threadFlow` 对象的 `location` 对象数组，它描述程序通过执行线程的进度。 `codeFlow` 对象描述用于检测结果的代码执行模式。 如果提供了代码流，{% data variables.product.prodname_code_scanning %} 将在 {% data variables.product.prodname_dotcom %} 上扩展代码流以获取相关结果。 更多信息请参阅 [`location` 对象](#location-object)。                                                                                                                                                                                                                                    |
| `relatedLocations[]`                    | 与此结果相关的一组位置。 当相关位置嵌入在结果消息中时，{% data variables.product.prodname_code_scanning_capc %} 将链接到这些位置。 更多信息请参阅 [`location` 对象](#location-object)。                                                                                                                                                                                                                                                                                                                                                       |

#### `location` 对象

编程构件中的位置，例如仓库中的文件或在构建过程中生成的文件。

| 名称                          | 描述                                                                      |
| --------------------------- | ----------------------------------------------------------------------- |
| `location.id`               | **可选。**用于在单个结果对象中区分此位置与所有其他位置的唯一标识符。                                    |
| `location.physicalLocation` | **必选。**标识构件和区域。 更多信息请参阅 [`physicalLocation`](#physicallocation-object)。 |
| `location.message.text`     | **可选。**与位置相关的消息。                                                        |

#### `physicalLocation` 对象

| 名称                     | 描述                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `artifactLocation.uri` | **必选。**表示构件位置的 URI，通常是仓库中或在构建期间生成的文件。 如果 URI 是相对的，它应相对于正在分析的 {% data variables.product.prodname_dotcom %} 仓库的根目录。 例如，main.js 或 src/script.js 相对于仓库的根目录。 如果 URI 是绝对的，则 {% data variables.product.prodname_code_scanning %} 可使用 URI 检出构件并匹配仓库中的文件。 例如，`https://github.com/ghost/example/blob/00/src/promiseUtils.js`。 |
| `region.startLine`     | **必选。**区域中第一个字符的行号。                                                                                                                                                                                                                                                                                                   |
| `region.startColumn`   | **必选。**区域中第一个字符的列编号。                                                                                                                                                                                                                                                                                                  |
| `region.endLine`       | **必选。**区域中最后一个字符的行号。                                                                                                                                                                                                                                                                                                  |
| `region.endColumn`     | **必选。**区域结束后字符的列编号。                                                                                                                                                                                                                                                                                                   |

### SARIF 输出文件示例

这些示例 SARIF 输出文件显示支持的属性和示例值。

#### 具有最少必需属性的示例

此 SARIF 输出文件的示例值显示了 {% data variables.product.prodname_code_scanning %} 结果正常运行所需的最少属性。 如果您删除任何属性或不包含值，此数据将无法正确显示或在 {% data variables.product.prodname_dotcom %} 上同步。


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

#### 显示所有支持的 SARIF 属性的示例

此 SARIF 输出文件的示例值显示了 {% data variables.product.prodname_code_scanning %} 的所有受支持 SARIF 属性。

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
