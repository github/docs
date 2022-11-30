---
title: Soporte de SARIF para escaneo de código
shortTitle: SARIF support
intro: 'Para mostrar los resultados de una herramienta de análisis estático de terceros en tu repositorio en {% data variables.product.prodname_dotcom %}, necesitas que éstos se almacenen en un archivo SARIF que sea compatible con un subconjunto del modelo de JSON para SARIF 2.1.0 para el {% data variables.product.prodname_code_scanning %}. Si utilizas el motor de análisis estático predeterminado de {% data variables.product.prodname_codeql %}, tus resultados se mostrarán automáticamente en tu repositorio de {% data variables.product.prodname_dotcom %}.'
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
ms.openlocfilehash: 98d0e4620d240c3e1863aaee6f57a5834c86018b
ms.sourcegitcommit: aa488e9e641139f9056885b1479c8801e9906131
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162795'
---
{% data reusables.code-scanning.beta %}

## Acerca del soporte de SARIF

SARIF (Static Analysis Results Interchange Format) es un [estándar OASIS](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html) que define un formato de archivo de salida. El estándar SARIF se utiliza para optimizar la manera en el que las herramientas de análisis estático comparten sus resultados. {% data variables.product.prodname_code_scanning_capc %} es compatible con un subconjunto del modelo SARIF 2.1.0 JSON.

Para cargar un archivo SARIF desde un motor de análisis estático de código desde un tercero, necesitaras asegurarte de que los archivos cargados utilicen la versión SARIF 2.1.0. {% data variables.product.prodname_dotcom %} analizará el archivo SARIF y mostrará las alertas utilizando los resultados en tu repositorio como parte de la experiencia del {% data variables.product.prodname_code_scanning %}. Para obtener más información, consulte "[Carga de un archivo SARIF en {% data variables.product.prodname_dotcom %}](/code-security/secure-coding/uploading-a-sarif-file-to-github)." Para obtener más información sobre el esquema de JSON SARIF 2.1.0, consulte [`sarif-schema-2.1.0.json`](https://github.com/oasis-tcs/sarif-spec/blob/master/Documents/CommitteeSpecifications/2.1.0/sarif-schema-2.1.0.json).

Si estás utilizando {% data variables.product.prodname_actions %} con {% data variables.code-scanning.codeql_workflow %}{% ifversion codeql-runner-supported %}, {% data variables.code-scanning.codeql_runner %},{% endif %} o {% data variables.product.prodname_codeql_cli %}, los resultados de {% data variables.product.prodname_code_scanning %} usarán automáticamente el subconjunto compatible de SARIF 2.1.0. Para más información, consulta "[Configuración de {% data variables.product.prodname_code_scanning %} para un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)"{% ifversion codeql-runner-supported %}, "[Ejecución de {% data variables.code-scanning.codeql_runner %} en tu sistema de CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)",{% endif %} o "[Instalación de la CLI de CodeQL en tu sistema de CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)".

Puedes cargar varios archivos SARIF para la misma confirmación y mostrar los datos de cada archivo como resultados del {% data variables.product.prodname_code_scanning %}. Cuando cargas varios archivos de SARIF en una confirmación, debes indicar una "Categoría" para cada análisis. La forma de especificar una categoría varía de acuerdo con el método de análisis:
- Si usa directamente {% data variables.product.prodname_codeql_cli %}, puede enviar el argumento `--sarif-category` al comando `codeql database analyze` cuando genere los archivos SARIF. Para obtener más información, consulte "[Configuración de la CLI de CodeQL en el sistema de CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#about-generating-code-scanning-results-with-codeql-cli)".
- Utilice {% data variables.product.prodname_actions %} con `codeql-action/analyze` para que la categoría se establezca automáticamente a partir del nombre del flujo de trabajo y las variables de matriz (normalmente, es `language`). Puede ignorar este ajuste si especifica una entrada en `category` para la acción, lo cual es útil cuando analiza diferentes secciones de un repositorio único en un flujo de trabajo simple.
- Si {% data variables.product.prodname_actions %} para cargar los resultados de otras herramientas de análisis estático, debe especificar una entrada en `category` si carga más de un archivo de resultados para la misma herramienta en un flujo de trabajo. Para obtener más información, consulte "[Carga de un análisis de {% data variables.product.prodname_code_scanning %} con {% data variables.product.prodname_actions %}](/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions)".
- Si no usa ninguno de estos enfoques, debe especificar un `runAutomationDetails.id` único en cada archivo SARIF que se va a cargar. Para obtener más información acerca de esta propiedad, consulte [Objeto de `runAutomationDetails`](#runautomationdetails-object) a continuación.

Si cargas un archivo de SARIF para una confirmación con la misma categoría y desde la misma herramienta, los resultados anteriores se sobreescribirán. Sin embargo, si intentas cargar varios archivos SARIF para la misma herramienta y categoría en una ejecución de flujo de trabajo de {% data variables.product.prodname_actions %} sencilla, esta configuración errónea se detectará y la ejecución fallará.

{% data variables.product.prodname_dotcom %} utiliza propiedades en el archivo SARIF para mostrar alertas. Por ejemplo, `shortDescription` y `fullDescription` aparecen en la parte superior de una alerta de {% data variables.product.prodname_code_scanning %}. `location` permite que {% data variables.product.prodname_dotcom %} muestre anotaciones en el archivo de código. Para obtener más información, consulte "[Administración de alertas de {% data variables.product.prodname_code_scanning %} para el repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

Si no está familiarizado con SARIF y quiere obtener más información, consulte el repositorio [`SARIF tutorials`](https://github.com/microsoft/sarif-tutorials) de Microsoft.

## Proporcionar datos para realizar un seguimiento de las alertas de {% data variables.product.prodname_code_scanning %} entre ejecuciones

Cada vez que se cargan los resultados de un nuevo examen de código, los resultados se procesan y se agregan alertas al repositorio. Para prevenir las alertas duplicadas para el mismo problema, {% data variables.product.prodname_code_scanning %} utiliza huellas dactilares para empatara los resultados a través de diversas ejecuciones para que solo aparezcan una vez en la última ejecución para la rama seleccionada. Esto hace posible emparejar las alertas con la línea de código correcta cuando se editan los archivos. El `ruleID` para un resultado debe ser el mismo en todo el análisis.
 
### Informes de rutas de archivo coherentes

La ruta de acceso de archivo debe ser coherente en las ejecuciones para habilitar un cálculo de una huella digital estable. Si las rutas de archivo difieren para el mismo resultado, cada vez que se crea un nuevo análisis, se creará una nueva alerta y se cerrará la antigua. Esto provocará que haya varias alertas para el mismo resultado.

### Inclusión de datos para la generación de huellas digitales

{% data variables.product.prodname_dotcom %} usa la propiedad `partialFingerprints` del estándar OASIS para detectar si hay dos resultados idénticos desde el punto de vista lógico. Para obtener más información, consulte la entrada "[propiedad partialFingerprints](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012611)" en la documentación de OASIS.

Los archivos SARIF que crea {% data variables.code-scanning.codeql_workflow %}, {% ifversion codeql-runner-supported %}mediante {% data variables.code-scanning.codeql_runner %}, {% endif %} {% data variables.product.prodname_codeql_cli %} incluyen datos de huellas digitales. Si carga un archivo SARIF con la acción `upload-sarif` y faltan estos datos, {% data variables.product.prodname_dotcom %} intenta rellenar el campo `partialFingerprints` a partir de los archivos de origen. Para obtener más información sobre la carga de resultados, consulte "[Carga de un archivo SARIF en {% data variables.product.prodname_dotcom %}](/code-security/secure-coding/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions)."

Si carga un archivo SARIF sin datos de huella digital utilizando el punto de conexión de la API `/code-scanning/sarifs`, se procesarán y se mostrarán las alertas del {% data variables.product.prodname_code_scanning %}, pero es posible que los usuarios vean alertas duplicadas. Para evitar ver alertas duplicadas, debe calcular los datos de huella digital y rellenar la propiedad `partialFingerprints` antes de cargar el archivo SARIF. Puede que el script que utiliza la acción `upload-sarif` le resulte un buen punto de partida: https://github.com/github/codeql-action/blob/main/src/fingerprints.ts. Para obtener más información sobre la API, consulte "[Carga de un análisis como datos de SARIF](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)".

## Descripción de las reglas y los resultados

Los archivos SARIF admiten reglas y resultados. La información almacenada en estos elementos es similar, pero sirve para diferentes propósitos.

- Las reglas son una matriz de objetos `reportingDescriptor` que se incluyen en el objeto `toolComponent`. Aquí es donde almacenas los detalles de las reglas que se ejecutan durante el análisis. La información de estos objetos debe cambiar con poca frecuencia, normalmente al actualizar la herramienta.

- Los resultados se almacenan como una serie de objetos `result` en `results` en el objeto `run`. Cada objeto `result` contiene detalles de una alerta en el código base. Dentro del objeto `results`, puedes hacer referencia a la regla que ha detectado la alerta.

Al comparar los archivos SARIF generados mediante el análisis de diferentes bases de código con la misma herramienta y las mismas reglas, tendrías que ver diferencias en los resultados de los análisis, pero no en las reglas.

## Especificación de la raíz para los archivos de origen

{% data variables.product.prodname_code_scanning_capc %} interpreta los resultados que se notifican con rutas de acceso relativas en relación con la raíz del repositorio analizado. Si un resultado contiene un URI absoluto, el URI se convierte en un URI relativo. A continuación, el URI relativo se puede emparejar con un archivo confirmado en el repositorio.

Puedes proporcionar la raíz de origen para la conversión de URI absolutos a relativos de una de las siguientes maneras.

- [`checkout_path`](https://github.com/github/codeql-action/blob/c2c0a2908e95769d01b907f9930050ecb5cf050d/analyze/action.yml#L44-L47) entrada a la `github/codeql-action/analyze` acción
- `checkout_uri` parámetro al punto de conexión de la API de carga de SARIF. Para más información, consulta "[{% data variables.product.prodname_code_scanning_capc %}](/rest/code-scanning#upload-an-analysis-as-sarif-data)" en la documentación de la API REST
- [`invocation.workingDirectory.uri`](https://docs.oasis-open.org/sarif/sarif/v2.1.0/csprd01/sarif-v2.1.0-csprd01.html#_Toc9244365) propiedad en el archivo de SARIF

Si proporciona una raíz de origen, cualquier ubicación de un artefacto especificado mediante un URI absoluto debe usar el mismo esquema de URI. Si hay una discrepancia entre el esquema de URI para la raíz de origen y uno o varios de los URI absolutos, se rechaza la carga.

Por ejemplo, un archivo SARIF se carga mediante una raíz de origen de `file:///github/workspace`. 

```
# Conversion of absolute URIs to relative URIs for location artifacts

file:///github/workspace/src/main.go -> src/main.go
file:///tmp/go-build/tmp.go          -> file:///tmp/go-build/tmp.go
```

El archivo se carga correctamente, ya que ambos URI absolutos usan el mismo esquema de URI que la raíz de origen.

## Validar tu archivo SARIF

<!--UI-LINK: When code scanning fails, the error banner shown in the Security > Code scanning alerts view links to this anchor.-->

Puedes verificar si un archivo SARIF es compatible con el {% data variables.product.prodname_code_scanning %} si lo pruebas contra las reglas de ingestión de {% data variables.product.prodname_dotcom %}. Para obtener más información, visite el [validador de SARIF de Microsoft](https://sarifweb.azurewebsites.net/).

{% data reusables.code-scanning.upload-sarif-alert-limit %}

## Propiedades compatibles de archivo de salida SARIF

Si utilizas un motor de análisis de código diferente a {% data variables.product.prodname_codeql %}, puedes revisar las propiedades SARIF compatibles para optimizar cómo aparecerán los resultados de tu análisis en {% data variables.product.prodname_dotcom %}.

{% note %}

**Nota:** Debes proporcionar un valor explícito para cualquier propiedad marcada como "obligatoria". La cadena vacía no se admite para las propiedades necesarias.

{% endnote %}

Puedes cargar cualquier archivo de salida SARIF 2.1.0 válido, sin embargo, {% data variables.product.prodname_code_scanning %} utilizará únicamente las siguientes propiedades compatibles.

### Objecto `sarifLog`

| Nombre | Descripción |
|----|----|
|  `$schema` | **Obligatorio.** URI del esquema de JSON SARIF para la versión 2.1.0. Por ejemplo, `https://json.schemastore.org/sarif-2.1.0.json`. |
| `version` | **Obligatorio.** {% data variables.product.prodname_code_scanning_capc %} solo admite la versión `2.1.0` de SARIF.
| `runs[]` | **Obligatorio.** Un archivo SARIF contiene una matriz de una o varias ejecuciones. Cada ejecución representa una sola ejecución de una herramienta de análisis. Para obtener más información sobre un `run`, consulte el [objeto `run`](#run-object).

### Objecto `run`

{% data variables.product.prodname_code_scanning_capc %} usa el objeto `run` para filtrar resultados por herramienta y proporcionar información sobre el origen de un resultado. El objeto `run` contiene el objeto de componente de herramienta `tool.driver`, que contiene información sobre la herramienta que generó los resultados. Cada `run` puede tener resultados para una sola herramienta de análisis.

| Nombre | Descripción |
|----|----|
| `tool.driver` | **Obligatorio.** Un objeto `toolComponent` que describe la herramienta de análisis. Para obtener más información, consulte el [objeto `toolComponent`](#toolcomponent-object). |
| `tool.extensions[]` | **Opcional.** Una matriz de objetos `toolComponent` que representan todos los complementos o extensiones usados por la herramienta durante el análisis. Para obtener más información, consulte el [objeto `toolComponent`](#toolcomponent-object). |
| `invocation.workingDirectory.uri` | **Opcional.** Este campo solo se utiliza cuando no se proporciona `checkout_uri` (solo API de carga de SARIF) o `checkout_path` (solo {% data variables.product.prodname_actions %}). El valor se usa para convertir URI absolutos usados en [`physicalLocation` objetos](#physicallocation-object) en URI relativos. Para obtener más información, consulta "[Especificar la raíz para los archivos de origen](#specifying-the-root-for-source-files)".|
| `results[]` | **Obligatorio.** Resultados de la herramienta de análisis. {% data variables.product.prodname_code_scanning_capc %} muestra los resultados en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulte el [objeto `result`](#result-object).

### Objecto `toolComponent`

| Nombre | Descripción |
|----|----|
| `name` | **Obligatorio.** Nombre de la herramienta de análisis. {% data variables.product.prodname_code_scanning_capc %} muestra el nombre en {% data variables.product.prodname_dotcom %} para permitirte filtrar los resultados por herramienta. |
| `version` | **Opcional.** Versión de la herramienta de análisis. {% data variables.product.prodname_code_scanning_capc %} utiliza el número de versión para rastrear cuando los resultados pudieran haber cambiado debido al cambio de versión en la herramienta en vez de debido a un cambio del código que se analiza. Si el archivo SARIF incluye el campo `semanticVersion`, el {% data variables.product.prodname_code_scanning %} no usa `version`. |
| `semanticVersion` | **Opcional.** Versión de la herramienta de análisis, especificada por el formato Versionamiento Semántico 2.0. {% data variables.product.prodname_code_scanning_capc %} utiliza el número de versión para rastrear cuando los resultados pudieran haber cambiado debido al cambio de versión en la herramienta en vez de debido a un cambio del código que se analiza. Si el archivo SARIF incluye el campo `semanticVersion`, el {% data variables.product.prodname_code_scanning %} no usa `version`. Para obtener más información, consulte "[Versionamiento Semántico 2.0.0](https://semver.org/)" en la documentación sobre Versionamiento Semántico. |
| `rules[]` | **Obligatorio.** Matriz de objetos `reportingDescriptor` que representan reglas. La herramienta de análisis utiliza reglas para encontrar problemas en el código que se analiza. Para obtener más información, consulte el [objeto `reportingDescriptor`](#reportingdescriptor-object). |

### Objecto `reportingDescriptor`

Aquí es donde almacenas los detalles de las reglas que se ejecutan durante el análisis. La información de estos objetos debe cambiar con poca frecuencia, normalmente al actualizar la herramienta. Para obtener más información, consulta "[Descripción de las reglas y los resultados](#understanding-rules-and-results)" más arriba.

| Nombre | Descripción |
|----|----|
| `id` |  **Obligatorio.** Identificador único para la regla. Al `id` se hace referencia desde otras secciones del archivo SARIF, y se puede usar en el {% data variables.product.prodname_code_scanning %} para mostrar las URL en {% data variables.product.prodname_dotcom %}. |
| `name` | **Opcional.** Nombre de la regla. {% data variables.product.prodname_code_scanning_capc %} muestra el nombre para permitir que se filtren los resultados por regla en {% data variables.product.prodname_dotcom %}. |
| `shortDescription.text` | **Obligatorio.** Descripción concisa de la regla. {% data variables.product.prodname_code_scanning_capc %} muestra la descripción corta en {% data variables.product.prodname_dotcom %} junto a los resultados asociados.
| `fullDescription.text` | **Obligatorio.** Una descripción de la regla. {% data variables.product.prodname_code_scanning_capc %} muestra la descripción completa en {% data variables.product.prodname_dotcom %} junto a los resultados asociados. La cantidad máxma de caracteres se limita a 1000.
| `defaultConfiguration.level` | **Opcional.** Nivel de gravedad predeterminado de la regla. {% data variables.product.prodname_code_scanning_capc %} utiliza niveles de severidad para ayudarte a entender qué tan crítico es el resultado de una regla. El atributo `level` del objeto `result` puede invalidar este valor. Para obtener más información, consulte el [objeto `result`](#result-object). Predeterminado: `warning`.
| `help.text` | **Obligatorio.** Documentación de la regla con formato de texto. {% data variables.product.prodname_code_scanning_capc %} muestra esta documentación de ayuda junto a los resultados asociados.
| `help.markdown` | **Opción recomendada.** Documentación de la regla con formato de Markdown. {% data variables.product.prodname_code_scanning_capc %} muestra esta documentación de ayuda junto a los resultados asociados. Cuando `help.markdown` está disponible, se muestra en lugar de `help.text`.
| `properties.tags[]` | **Opcional.** Una matriz de cadenas. {% data variables.product.prodname_code_scanning_capc %} usa `tags` para permitirle filtrar resultados en {% data variables.product.prodname_dotcom %}. Por ejemplo, es posible filtrar todos los resultados que tengan la etiqueta `security`.
| `properties.precision` | **Opción recomendada.** Cadena que indica con qué frecuencia se cumplen los resultados indicados por esta regla. Por ejemplo, si una regla tiene una tasa alta de falsos positivos, la precisión debería ser `low`. {% data variables.product.prodname_code_scanning_capc %} ordena los resultados de acuerdo con su precisión en {% data variables.product.prodname_dotcom %} para que aquellos con el `level` y el `precision` más altos aparezcan primero. Puede ser `very-high`, `high`, `medium` o `low`. 
| `properties.problem.severity` | **Opción recomendada.** Cadena que indica el nivel de gravedad de las alertas generadas por una consulta que no sea de seguridad. Esto, junto con la propiedad `properties.precision`, determina si los resultados se muestran de manera predeterminada en {% data variables.product.prodname_dotcom %} para que los resultados con el `problem.severity` y el `precision` más altos aparezcan primero. Puede ser de tipo `error`, `warning` o `recommendation`.
| `properties.security-severity` | **Opción recomendada.** Cadena que representa una puntuación que indica el nivel de gravedad, entre 0,0 y 10,0, de las consultas de seguridad (`@tags` incluye `security`). Esto, junto con la propiedad `properties.precision`, determina si los resultados se muestran de manera predeterminada en {% data variables.product.prodname_dotcom %} para que los resultados con el `security-severity` y el `precision` más altos aparezcan primero. {% data variables.product.prodname_code_scanning_capc %} traduce las puntuaciones numéricas de la siguiente manera: más de 9,0 es`critical`, entre 7,0 y 8,9 es `high`, entre 4,0 y 6,9 es `medium` y menos de 3,9 o 3,9 es `low`. 

### Objecto `result`

Cada objeto `result` contiene detalles de una alerta en el código base. Dentro del objeto `results`, puedes hacer referencia a la regla que ha detectado la alerta. Para obtener más información, consulta "[Descripción de las reglas y los resultados](#understanding-rules-and-results)" más arriba.

{% data reusables.code-scanning.upload-sarif-alert-limit %}

| Nombre | Descripción |
|----|----|
| `ruleId`| **Opcional.** Identificador único de la regla (`reportingDescriptor.id`). Para obtener más información, consulte el [objeto `reportingDescriptor`](#reportingdescriptor-object). {% data variables.product.prodname_code_scanning_capc %} utiliza el identificador de reglas para filtrar los resultados por regla en {% data variables.product.prodname_dotcom %}.
| `ruleIndex`| **Opcional.** Índice de la regla asociada (objeto `reportingDescriptor`) en la matriz `rules` de componentes de herramienta. Para obtener más información, consulte el [objeto `run`](#run-object). El rango permitido para esta propiedad de 0 to 2^63 - 1.
| `rule`| **Opcional.** Referencia usada para buscar la regla (descriptor de informes) de este resultado. Para obtener más información, consulte el [objeto `reportingDescriptor`](#reportingdescriptor-object).
| `level`| **Opcional.** Gravedad del resultado. Este nivel invalida la severidad predeterminada que se define en la regla. {% data variables.product.prodname_code_scanning_capc %} utiliza el nivel para filtrar los resultados en {% data variables.product.prodname_dotcom %} por severidad.
| `message.text`| **Obligatorio.** Mensaje que describe el resultado. {% data variables.product.prodname_code_scanning_capc %} muestra el texto del mensaje como el título del resultado. Se mostrará únicamente la primera oración del mensaje cuando el espacio visible esté limitado.
| `locations[]`| **Obligatorio.** Conjunto de ubicaciones donde se detectó el resultado (hasta un máximo de 10). Sólo se deberá incluir una ubicación a menos de que el problema solo pueda corregirse realizando un cambio en cada ubicación especificada. **Nota:** Se requiere al menos una ubicación para que {% data variables.product.prodname_code_scanning %} muestre el resultado. {% data variables.product.prodname_code_scanning_capc %} utilizará esta propiedad para decidir qué archivo anotar con el resultado. Únicamente si se utiliza el primer valor de este arreglo. Se ignorará al resto de los otros valores.
| `partialFingerprints`| **Obligatorio.** Conjunto de cadenas usadas para realizar un seguimiento de la identidad única del resultado. {% data variables.product.prodname_code_scanning_capc %} usa `partialFingerprints` para identificar con precisión los resultados que son iguales en todas las confirmaciones y ramas. {% data variables.product.prodname_code_scanning_capc %} intentará usar `partialFingerprints` si están presentes. Si va a cargar archivos SARIF de terceros con `upload-action`, la acción creará `partialFingerprints` automáticamente cuando no se incluyan en el archivo SARIF. Para obtener más información, consulta "[Proporcionar datos para realizar un seguimiento de las alertas de análisis de código entre ejecuciones](#providing-data-to-track-code-scanning-alerts-across-runs)".  **Nota:** {% data variables.product.prodname_code_scanning_capc %} solo usa `primaryLocationLineHash`.
| `codeFlows[].threadFlows[].locations[]`| **Opcional.** Matriz de objetos `location` para un objeto `threadFlow`, que describe el progreso de un programa a través de un subproceso de ejecución. Un objeto `codeFlow` describe un patrón de ejecución de código utilizado para detectar un resultado. Si se proporcionan flujos de código, {% data variables.product.prodname_code_scanning %} los expandirá en {% data variables.product.prodname_dotcom %} para el resultado relevante. Para obtener más información, consulte el [objeto `location`](#location-object).
| `relatedLocations[]`| Un conjunto de ubicaciones relevantes para el resultado. {% data variables.product.prodname_code_scanning_capc %} vinculará las ubicaciones cuando se incorporen en el mensaje de resultado. Para obtener más información, consulte el [objeto `location`](#location-object).

### Objecto `location`

Una ubicación dentro de un artefacto de programación, tal como un archivo en el repositorio o un archivo que se generó durante una compilación.

| Nombre | Descripción |
|----|----|
| `location.id` | **Opcional.** Identificador único que distingue esta ubicación de todas las demás ubicaciones dentro de un único objeto de resultado. El rango permitido para esta propiedad de 0 to 2^63 - 1.
| `location.physicalLocation` | **Obligatorio.** Identifica el artefacto y la región. Para obtener más información, consulte [`physicalLocation`](#physicallocation-object).
| `location.message.text` | **Opcional.** Mensaje relevante para la ubicación.

### Objecto `physicalLocation`

| Nombre | Descripción |
|----|----|
| `artifactLocation.uri`| **Obligatorio.** URI que indica la ubicación de un artefacto, normalmente un archivo del repositorio o generado durante una compilación. Para obtener los mejores resultados, se recomienda que se trata de una ruta de acceso relativa de la raíz del repositorio de GitHub que se está analizando. Por ejemplo, `src/main.js`. Para obtener más información sobre los URI de artefacto, consulta "[Especificación de la raíz para los archivos de origen](#specifying-the-root-for-source-files)".|
| `region.startLine` | **Obligatorio.** Número de línea del primer carácter de la región.
| `region.startColumn` | **Obligatorio.** Número de columna del primer carácter de la región.
| `region.endLine` | **Obligatorio.** Número de línea del último carácter de la región.
| `region.endColumn` | **Obligatorio.** Número de columna del carácter que sigue al final de la región.

### Objecto `runAutomationDetails`

El objeto `runAutomationDetails` contiene información que especifica la identidad de una ejecución.

{% note %}

**Nota:** `runAutomationDetails` es un objeto de SARIF v2.1.0. Si estás utilizando el {% data variables.product.prodname_codeql_cli %}, puedes especificar la versión de SARIF a utilizar. El objeto equivalente a `runAutomationDetails` es `<run>.automationId` para SARIF v1 y `<run>.automationLogicalId` para SARIF v2.

{% endnote %}

| Nombre | Descripción |
|----|----|
| `id`| **Opcional.** Cadena que identifica la categoría del análisis y el identificador de ejecución. Utilízala si quieres cargar varios archivos SARIF para la misma herramienta y confirmación, pero que se realice en diferentes lenguajes o partes del código. |

El uso del objeto `runAutomationDetails` es opcional.

El campo `id` puede incluir una categoría de análisis y un identificador de ejecución. No usamos la parte del identificador de ejecución del campo `id`, pero la almacenamos.

Utiliza la categoría para distinguir entre los diversos análisis de la misma herramienta o confirmación, pero cuando se llevan a cabo en diferentes lenguajes o en partes diferentes del código. Utiliza la ID de ejecución para identificar la ejecución específica del análisis, tal como la fecha en la que este se ejecutó.

`id` se interpreta como `category/run-id`. Si `id` no contiene ninguna barra diagonal (`/`), la cadena completa es la `run_id` y la `category` está vacía. De lo contrario, `category` será todo lo que aparezca en la cadena hasta la última barra diagonal, y `run_id` el resto.

| `id` | category | `run_id` |
|----|----|----|
| my-analysis/tool1/2021-02-01 | my-analysis/tool1 | 2021-02-01
| my-analysis/tool1/ | my-analysis/tool1 | _no `run-id`_
| my-analysis for tool1 | _no category_ | my-analysis for tool1

- La ejecución con un `id` de "my-analysis/tool1/2021-02-01" pertenece a la categoría "my-analysis/tool1". Supuestamente, esta es la ejecución del 2 de febrero de 2021.
- La ejecución con un `id` de "my-analysis/tool1/" pertenece a la cateogría "my-analysis/tool1", pero no se distingue de otras ejecuciones de esa categoría.
- La ejecución cuyo `id` es "my-analysis for tool1 " tiene un identificador único, pero no se puede inferir que pertenezca a alguna categoría.

Para obtener más información sobre el objeto `runAutomationDetails` y el campo `id`, consulte [Objeto runAutomationDetails](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012479) en la documentación de OASIS.

Nota que el resto de los campos compatibles se ignorarán.

## Ejemplos de archivo de salida SARIF

Estos ejemplos de archivos de salida SARIF muestran las propiedades compatibles y los valores de ejemplo.

### Ejemplo con las propiedades mínimas requeridas

Este archivo de salida SARIF tiene valores de ejemplo para mostrar las propiedades mínimas requeridas para que los resultados de {% data variables.product.prodname_code_scanning %} funcionen como se espera. Si eliminas cualquier propiedad u omites valores, o si usas una cadena vacía, estos datos no se mostrarán correctamente ni se sincronizarán en {% data variables.product.prodname_dotcom %}. 

```json
{
  "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
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

### Ejemplo que muestra todas las propiedades compatibles con SARIF

Este archivo de salida SARIF tiene valores ejemplo para mostrar todas las propiedades de SARIF compatibles con {% data variables.product.prodname_code_scanning %}.

```json
{
  "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
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

