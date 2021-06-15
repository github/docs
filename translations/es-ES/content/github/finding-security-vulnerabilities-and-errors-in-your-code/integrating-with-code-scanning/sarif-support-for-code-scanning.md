---
title: Soporte de SARIF para escaneo de código
shortTitle: Soporte de SARIF
intro: 'Para mostrar los resultados de una herramienta de análisis estático de terceros en tu repositorio en {% data variables.product.prodname_dotcom %}, necesitas que éstos se almacenen en un archivo SARIF que sea compatible con un subconjunto del modelo de JSON para SARIF 2.1.0 para el {% data variables.product.prodname_code_scanning %}. Si utilizas el motor de análisis estático predeterminado de {% data variables.product.prodname_codeql %}, tus resultados se mostrarán automáticamente en tu repositorio de {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  enterprise-server: '2.22'
topics:
  - Security
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning
---

<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta %}

### Acerca del soporte de SARIF

SARIF (Formato de Intercambio de Resultados de Análisis Estático, por sus siglas en inglés) es un [Estándar de OASIS](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html) que define un formato de archivo de salida. El estándar SARIF se utiliza para optimizar la manera en el que las herramientas de análisis estático comparten sus resultados. {% data variables.product.prodname_code_scanning_capc %} es compatible con un subconjunto del modelo SARIF 2.1.0 JSON.

Para cargar un archivo SARIF desde un motor de análisis estático de código desde un tercero, necesitaras asegurarte de que los archivos cargados utilicen la versión SARIF 2.1.0. {% data variables.product.prodname_dotcom %} analizará el archivo SARIF y mostrará las alertas utilizando los resultados en tu repositorio como parte de la experiencia del {% data variables.product.prodname_code_scanning %}. Para obtener más información, consulta la sección "[Cargar un archivo SARIF a {% data variables.product.prodname_dotcom %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)". Para obtener más información acerca del modelo SARIF 2.1.0, consulta [`sari-schema-2.1.0.json`](https://github.com/oasis-tcs/sarif-spec/blob/master/Schemata/sarif-schema-2.1.0.json).

Si tu archivo SARIF no incluye `partialFingerprints`, este campo se calculará cuando cargues el archivo SARIF utilizando {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %} para un repositorio](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)" o "[Ejecutar el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} en tu sistema de IC](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)".

{% data variables.product.prodname_dotcom %} utiliza propiedades en el archivo SARIF para mostrar alertas. Por ejemplo, la `shortDescription` y `fullDescription` aparecen hasta arriba de una alerta de {% data variables.product.prodname_code_scanning %}. La `location` permite a {% data variables.product.prodname_dotcom %} mostrar anotaciones en tu archivo de código. Para obtener más información, consulta la sección "[Administrar las alertas de {% data variables.product.prodname_code_scanning %} para tu repositorio](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)".

Si SARIF es nuevo para ti y quieres aprender más, consulta el repositorio [`SARIF tutorials`](https://github.com/microsoft/sarif-tutorials) de Microsoft.

### Prevenir alertas duplicadas utilizando huellas dactilares

Cada vez que el flujo de trabajo de {{ site.data.variables.product.prodname_actions }} ejecuta un nuevo escaneo de código, los resultados de cada ejecución se procesan y se agregan alertas al repositorio. Para prevenir las alertas duplicadas para el mismo problema, {% data variables.product.prodname_code_scanning %} utiliza huellas dactilares para empatara los resultados a través de diversas ejecuciones para que solo aparezcan una vez en la última ejecución para la rama seleccionada. Esto hace posible empatar las alertas con la línea de código correcta cuando se editan los archivos.

{% data variables.product.prodname_dotcom %} utiliza la propiedad `partialFingerprints` en el estándar OASIS para detectar cuando dos resultados son lógicamente idénticos. Para obtener más información, consulta la sección "[partialFingerprints property](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012611)" en la documentación de OASIS.

Los archivos SARIF que crea el {% data variables.product.prodname_codeql_workflow %} o los que utilizan el {% data variables.product.prodname_codeql_runner %} incluyen datos de huellas digitales. Si cargas un archivo SARIF utilizando la acción `upload-sarif` y no se encuentran estos datos, {% data variables.product.prodname_dotcom %} intentará poblar el campo `partialFingerprints` desde los archivos de origen. Para obtener más información acerca de cargar los resultados, consulta la sección "[Cargar un archivo SARIF a {% data variables.product.prodname_dotcom %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions)".

Si cargaste un archivo SARIF sin datos de huella digital utilizando la terminal de la API de `/code-scanning/sarifs`, se procesarán y se mostrarán las alertas del {% data variables.product.prodname_code_scanning %}, pero los usuarios podrían ver alertas duplicadas. Para evitar el ver alertas duplicadas, debes calcular los datos de la huella digital y llenar la propiedad de `partialFingerprints` antes de que cargues el archivo SARIF. Puede que el script que utiliza la acción `upload-sarif` te sea útil como punto de inicio: https://github.com/github/codeql-action/blob/main/src/fingerprints.ts. Para obtener más información sobre la API, consulta la sección "[Cargar un análisis como datos de SARIF](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)".

### Validar tu archivo SARIF

<!--UI-LINK: When code scanning fails, the error banner shown in the Security > Code scanning alerts view links to this anchor.-->

Puedes verificar si un archivo SARIF es compatible con el {% data variables.product.prodname_code_scanning %} si lo pruebas contra las reglas de ingestión de {% data variables.product.prodname_dotcom %}. Para obtener más información, visita el [Validador de archivos SARIF de Microsoft](https://sarifweb.azurewebsites.net/).

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### Propiedades compatibles de archivo de salida SARIF

Si utilizas un motor de análisis de código diferente a {% data variables.product.prodname_codeql %}, puedes revisar las propiedades SARIF compatibles para optimizar cómo aparecerán los resultados de tu análisis en {% data variables.product.prodname_dotcom %}.

Puedes cargar cualquier archivo de salida SARIF 2.1.0 válido, sin embargo, {% data variables.product.prodname_code_scanning %} utilizará únicamente las siguientes propiedades compatibles.

#### Objeto `sarifLog`

| Nombre    | Descripción                                                                                                                                                                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `$schema` | **Requerido.** la URI del modelo SARIF JSON para la versión 2.1.0. Por ejemplo, `https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json`.                                                                      |
| `version` | **Requerido.**{% data variables.product.prodname_code_scanning_capc %} solo es compatible con la versión `2.1.0` de SARIF.                                                                                                                           |
| `runs[]`  | **Requerido.** Un archivo SARIF contiene un arreglo de una o más ejecuciones. Cada ejecución representa una sola ejecución de una herramienta de análisis. Para obtener más información acerca de una `run`, consulta el [ objeto `run`](#run-object). |

#### Objeto `run`

{% data variables.product.prodname_code_scanning_capc %} utiliza el objeto `run` para filtrar los resultados por herramienta y proporcionar información acerca del origen de un resultado. El objeto `run` contienen el objeto componente de herramienta `tool.driver`, el cual contiene información acerca de la herramienta que generó el resultado. Cada `run` puede tener únicamente resultados para la herramienta de análisis.

| Nombre                        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tool.driver.name`            | **Requerido.** El nombre de la herramienta de análisis. {% data variables.product.prodname_code_scanning_capc %} muestra el nombre en {% data variables.product.prodname_dotcom %} para permitirte filtrar los resultados por herramienta.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `tool.driver.version`         | **Opcional.** La versión de la herramienta de análisis. {% data variables.product.prodname_code_scanning_capc %} utiliza el número de versión para rastrear cuando los resultados pudieran haber cambiado debido al cambio de versión en la herramienta en vez de debido a un cambio del código que se analiza. Si el archivo SARIF incluye el campo `semanticVersion`, {% data variables.product.prodname_code_scanning %} no utilizará `version`.                                                                                                                                                                                                          |
| `tool.driver.semanticVersion` | **Opcional.** La versión de la herramienta de análisis, especificada por el formato de Semantic Versioning 2.0. {% data variables.product.prodname_code_scanning_capc %} utiliza el número de versión para rastrear cuando los resultados pudieran haber cambiado debido al cambio de versión en la herramienta en vez de debido a un cambio del código que se analiza. Si el archivo SARIF incluye el campo `semanticVersion`, {% data variables.product.prodname_code_scanning %} no utilizará `version`. Para obtener más información, consulta la sección "[Semantic Versioning 2.0.0](https://semver.org/)" en la documentación de Semantic Versioning. |
| `tool.driver.rules[]`         | **Requerido.** Un arreglo de objetos `reportingDescriptor` que representen reglas. La herramienta de análisis utiliza reglas para encontrar problemas en el código que se analiza. Para obtener más información, consulta el [objeto `reportingDescriptor`](#reportingdescriptor-object).                                                                                                                                                                                                                                                                                                                                                                        |
| `results[]`                   | **Requerido.** Los resultados de la herramienta de análisis. {% data variables.product.prodname_code_scanning_capc %} muestra los resultados en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta el [objeto `result`](#result-object).                                                                                                                                                                                                                                                                                                                                                                                   |

#### Objeto `reportingDescriptor`

| Nombre                       | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                         | **Requerido.** Un identificador único para la regla. El `id` se referencia de otras partes del archivo SARIF y {% data variables.product.prodname_code_scanning %} puede utilizarlo para mostrar las URL en {% data variables.product.prodname_dotcom %}.                                                                                                                                                                                                                                                                              |
| `name (nombre)`              | **Opcional.** El nombre de la regla. {% data variables.product.prodname_code_scanning_capc %} muestra el nombre para permitir que se filtren los resultados por regla en {% data variables.product.prodname_dotcom %}.                                                                                                                                                                                                                                                                                                               |
| `shortDescription.text`      | **Requerido** Una descripción breve de la acción. {% data variables.product.prodname_code_scanning_capc %} muestra la descripción corta en {% data variables.product.prodname_dotcom %} junto a los resultados asociados.                                                                                                                                                                                                                                                                                                            |
| `fullDescription.text`       | **Requerido** Una descripción de la regla. {% data variables.product.prodname_code_scanning_capc %} muestra la descripción completa en {% data variables.product.prodname_dotcom %} junto a los resultados asociados. La cantidad máxma de caracteres se limita a 1000.                                                                                                                                                                                                                                                              |
| `defaultConfiguration.level` | **Opcional.** Nivel de severidad predeterminado de la regla. {% data variables.product.prodname_code_scanning_capc %} utiliza niveles de severidad para ayudarte a entender qué tan crítico es el resultado de una regla. El atributo `level` en el objeto `result` anular este valor. Para obtener más información, consulta el [objeto `result`](#result-object). Predeterminado: `warning`.                                                                                                                                         |
| `help.text`                  | **Requerido.** Documentación para la regla utilizando el formato de texto. {% data variables.product.prodname_code_scanning_capc %} Muestra esta documentación de ayuda junto a los resultados asociados.                                                                                                                                                                                                                                                                                                                              |
| `help.markdown`              | **Recomendado.** Documentación para la regla utilizando el formato Markdown. {% data variables.product.prodname_code_scanning_capc %} Muestra esta documentación de ayuda junto a los resultados asociados. Cuando `help.markdown` está disponible, se muestra en vez de `help.text`.                                                                                                                                                                                                                                                  |
| `properties.tags[]`          | **Opcional.** Un arreglo de secuencias. {% data variables.product.prodname_code_scanning_capc %} utiliza `tags` para permitirte filtrar los resultados en {% data variables.product.prodname_dotcom %}. Por ejemplo, puedes filtrar todos los resultados que tengan la etiqueta `security`.                                                                                                                                                                                                                                            |
| `properties.precision`       | **Recomendado.** una secuencia que indica qué tan frecuentemente son verdaderos los resultados que indica esta regla. Por ejemplo, si una regla tiene una tasa alta de falsos positivos, la precisión debería ser `low`. {% data variables.product.prodname_code_scanning_capc %} ordena los resultados de acuerdo con su precisión en {% data variables.product.prodname_dotcom %} para que aquellos con el `level` y la `precision` más altos se muestren primero. Puede ser uno de entre: `very-high`, `high`, `medium`, o `low`. |

#### `result` object

{% data reusables.code-scanning.upload-sarif-alert-limit %}

| Nombre                                  | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ruleId`                                | **Opcional.** El identificador único de la regla (`reportingDescriptor.id`). Para obtener más información, consulta el [objeto `reportingDescriptor`](#reportingdescriptor-object). {% data variables.product.prodname_code_scanning_capc %} utiliza el identificador de reglas para filtrar los resultados por regla en {% data variables.product.prodname_dotcom %}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `ruleIndex`                             | **Opcional.** El índice de la regla asociada (`reportingDescriptor` object) en el arreglo de `rules` del componente de la herramienta. Para obtener más información, consulta el [objeto `run`](#run-object).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `rule`                                  | **Opcional.** Una referencia que se utiliza para ubicar la regla (descriptor de reporte) para este resultado. Para obtener más información, consulta el [objeto `reportingDescriptor`](#reportingdescriptor-object).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `level`                                 | **Opcional.** La severidad del resultado. Este nivel invalida la severidad predeterminada que se define en la regla. {% data variables.product.prodname_code_scanning_capc %} utiliza el nivel para filtrar los resultados en {% data variables.product.prodname_dotcom %} por severidad.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `message.text`                          | **Requerido.** Un mensaje que describe el resultado. {% data variables.product.prodname_code_scanning_capc %} muestra el texto del mensaje como el título del resultado. Se mostrará únicamente la primera oración del mensaje cuando el espacio visible esté limitado.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `locations[]`                           | **Requerido.** El conjunto de ubicaciones donde se detectó el resultado, con un máximo de 10. Sólo se deberá incluir una ubicación a menos de que el problema solo pueda corregirse realizando un cambio en cada ubicación especificada. **Nota:** Se requiere por lo menos una ubicación para que {% data variables.product.prodname_code_scanning %} muestre el resultado. {% data variables.product.prodname_code_scanning_capc %} utilizará esta propiedad para decidir qué archivo anotar con el resultado. Únicamente si se utiliza el primer valor de este arreglo. Se ignorará al resto de los otros valores.                                                                                                                                                                                                                                                  |
| `partialFingerprints`                   | **Requerido.** Un conjunto de secuencias utilizadas para rastrear la identidad única del resultado. {% data variables.product.prodname_code_scanning_capc %} utiliza `partialFingerprints` para identificar con exactitud qué resultados son los mismos a través de las confirmaciones y ramas. {% data variables.product.prodname_code_scanning_capc %} intentará utilizar `partialFingerprints` si es que existe. Si estás cargando un archivo SARIF de terceros con el `upload-action`, la acción creará un `partialFingerprints` para ti cuando no se incluya en el archivo SARIF. Para obtener más información, consulta "[Prevenir alertas duplicadas utilizando huellas dactilares](#preventing-duplicate-alerts-using-fingerprints)".  **Nota:** {% data variables.product.prodname_code_scanning_capc %} utilizará únicamente el `primaryLocationLineHash`. |
| `codeFlows[].threadFlows[].locations[]` | **Opcional.** Un arreglo de objetos de `location` para un objeto de `threadFlow`, el cual describe el progreso de un programa a través de un hilo de ejecución. Un objeto de `codeFlow` describe un patrón de ejecución de código que se utiliza para detectar un resultado. Si se proporcionan flujos de código, {% data variables.product.prodname_code_scanning %} los expandirá en {% data variables.product.prodname_dotcom %} para el resultado relevante. Para obtener más información, consulta el [objeto `location`](#location-object).                                                                                                                                                                                                                                                                                                                        |
| `relatedLocations[]`                    | Un conjunto de ubicaciones relevantes para el resultado. {% data variables.product.prodname_code_scanning_capc %} vinculará las ubicaciones cuando se incorporen en el mensaje de resultado. Para obtener más información, consulta el [objeto `location`](#location-object).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

#### Objeto `location`

Una ubicación dentro de un artefacto de programación, tal como un archivo en el repositorio o un archivo que se generó durante una compilación.

| Nombre                      | Descripción                                                                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `location.id`               | **Opcional.** Un identificador único que distingue esta ubicación del resto de las ubicaciones dentro de un objeto de un único resultado.     |
| `location.physicalLocation` | **requerido.** Identifica el artefacto y la región. Para obtener más información, consulta la [`physicalLocation`](#physicallocation-object). |
| `location.message.text`     | **Opcional.** Un mensaje relevante para la ubicación.                                                                                         |

#### Objeto `physicalLocation`

| Nombre                 | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `artifactLocation.uri` | **Requerido.** Un URI que indica la ubicación de un artefacto, a menudo un archivo ya sea en el repositorio o generado durante una compilación. Si el URI es relativo, deberá ser relativo a la raíz del repositorio de {% data variables.product.prodname_dotcom %} que se está analizando. Por ejemplo, main.js o src/script.js son relativos a la raíz del repositorio. Si la URI es absoluta, {% data variables.product.prodname_code_scanning %} puede utilizarla para revisar el artefacto y empatar archivos en el repositorio. Por ejemplo, `https://github.com/ghost/example/blob/00/src/promiseUtils.js`. |
| `region.startLine`     | **Requerido.** El número del línea para el primer caracter en la región.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `region.startColumn`   | **Requerido.** El número de columna del primer caracter en la región.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `region.endLine`       | **Requerido.** El número de línea de el último caracter en la región.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `region.endColumn`     | **Requerido.** El número de columna del caracter que sigue al final de la región.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

### Ejemplos de archivo de salida SARIF

Estos ejemplos de archivos de salida SARIF muestran las propiedades compatibles y los valores de ejemplo.

#### Ejemplo con las propiedades mínimas requeridas

Este archivo de salida SARIF tiene valores de ejemplo para mostrar las propiedades mínimas requeridas para que los resultados de {% data variables.product.prodname_code_scanning %} funcionen como se espera. Si eliminas cualquier propiedad u omites valores, estos datos no se mostrarán correctamente ni se sincronizarán en {% data variables.product.prodname_dotcom %}.


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

#### Ejemplo que muestra todas las propiedades compatibles con SARIF

Este archivo de salida SARIF tiene valores ejemplo para mostrar todas las propiedades de SARIF compatibles con {% data variables.product.prodname_code_scanning %}.

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
