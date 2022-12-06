---
title: Suporte SARIF para a varredura de código
shortTitle: SARIF support
intro: 'Para exibir resultados de uma ferramenta de análise estática de terceiros em seu repositório em {% data variables.product.prodname_dotcom %}, você precisará de seus resultados armazenados em um arquivo SARIF que dê suporte a um subconjunto específico do esquema JSON SARIF 2.1.0 para dados {% data variables.product.prodname_code_scanning %}. Se você usar o mecanismo de análise estática padrão do {% data variables.product.prodname_codeql %}, os resultados aparecerão automaticamente no seu repositório no {% data variables.product.prodname_dotcom %}.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162788'
---
{% data reusables.code-scanning.beta %}

## Sobre o suporte SARIF

O SARIF (Static Analysis Results Interchange Format) é um [Padrão do OASIS](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html) que define um formato de arquivo de saída. O padrão SARIF é usado para simplificar como as ferramentas de análise estáticas compartilham seus resultados. O {% data variables.product.prodname_code_scanning_capc %} é compatível com um subconjunto do esquema SARIF 2.1.0 JSON.

Para fazer o upload de um arquivo SARIF a partir de um mecanismo de análise de código estático de terceiros, você deverá garantir que os arquivos carregados usem a versão SARIF 2.1.0. {% data variables.product.prodname_dotcom %} analisará o arquivo SARIF e mostrará alertas utilizando os resultados no seu repositório como parte da experiência de {% data variables.product.prodname_code_scanning %}. Para obter mais informações, confira "[Como carregar um arquivo SARIF no {% data variables.product.prodname_dotcom %}](/code-security/secure-coding/uploading-a-sarif-file-to-github)". Para obter mais informações sobre o esquema JSON SARIF 2.1.0, confira [`sarif-schema-2.1.0.json`](https://github.com/oasis-tcs/sarif-spec/blob/master/Documents/CommitteeSpecifications/2.1.0/sarif-schema-2.1.0.json).

Se você estiver usando {% data variables.product.prodname_actions %} com o {% data variables.code-scanning.codeql_workflow %}{% ifversion codeql-runner-supported %}, usando o {% data variables.code-scanning.codeql_runner %},{% endif %} ou usando o {% data variables.product.prodname_codeql_cli %}, os resultados de {% data variables.product.prodname_code_scanning %} usarão automaticamente o subconjunto do SARIF 2.1.0. Para obter mais informações, confira "[Como configurar a {% data variables.product.prodname_code_scanning %} em um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)"{% ifversion codeql-runner-supported %}, "[Como executar o {% data variables.code-scanning.codeql_runner %} no seu sistema de CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)" {% endif %} ou "[Como instalar a CLI do CodeQL no seu sistema de CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)".

Você pode fazer o upload de vários arquivos SARIF para o mesmo commit e exibir os dados de cada arquivo como resultado de {% data variables.product.prodname_code_scanning %}. Ao fazer o upload de vários arquivos SARIF para um commit, você deverá indicar uma "categoria" para cada análise. A forma de especificar uma categoria varia de acordo com o método de análise:
- Usando a {% data variables.product.prodname_codeql_cli %} diretamente, transmita o argumento `--sarif-category` para o comando `codeql database analyze` ao gerar arquivos SARIF. Para obter mais informações, confira "[Como configurar a CLI do CodeQL no seu sistema de CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#about-generating-code-scanning-results-with-codeql-cli)".
- Usando o {% data variables.product.prodname_actions %} com `codeql-action/analyze`, a categoria será definida automaticamente com base no nome do fluxo de trabalho e em qualquer variável de matriz (geralmente, `language`). Substitua isso especificando uma entrada `category` para a ação, que é útil quando você analisa diferentes seções de um monorrepositório em um fluxo de trabalho individual.
- Usando o {% data variables.product.prodname_actions %} para carregar os resultados de outras ferramentas de análise estática, você precisará especificar uma entrada `category` se carregar mais de um arquivo de resultados para a mesma ferramenta em um fluxo de trabalho. Para obter mais informações, confira "[Como carregar uma análise da {% data variables.product.prodname_code_scanning %} com o {% data variables.product.prodname_actions %}](/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions).".
- Se não estiver usando nenhuma dessas abordagens, especifique uma `runAutomationDetails.id` exclusiva em cada arquivo SARIF para upload. Para obter mais informações sobre os valores dessa propriedade, confira o [objeto `runAutomationDetails`](#runautomationdetails-object) abaixo.

Se você fizer o upload de um segundo arquivo SARIF para um commit com a mesma categoria e a partir da mesma ferramenta, os resultados anteriores serão substituídos. No entanto, se você tentar fazer o upload de vários arquivos SARIF para a mesma ferramenta e categoria em um único fluxo de trabalho de {% data variables.product.prodname_actions %}, a configuração incorreta será detectada e a execução falhará.

{% data variables.product.prodname_dotcom %} usa propriedades no arquivo SARIF para exibir alertas. Por exemplo, a `shortDescription` e a `fullDescription` são exibidas na parte superior de um alerta da {% data variables.product.prodname_code_scanning %}. O `location` permite que o {% data variables.product.prodname_dotcom %} mostre as anotações no seu arquivo de código. Para obter mais informações, confira "[Como gerenciar alertas da {% data variables.product.prodname_code_scanning %} do seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

Se estiver familiarizado com o SARIF e quiser saber mais, confira o repositório [`SARIF tutorials`](https://github.com/microsoft/sarif-tutorials) da Microsoft.

## Como fornecer dados para acompanhar os alertas {% data variables.product.prodname_code_scanning %} em todas as execuções

Cada vez que os resultados de uma nova verificação de código são carregados, os resultados são processados e os alertas são adicionados ao repositório. Para evitar alertas duplicados para o mesmo problema, {% data variables.product.prodname_code_scanning %} usa impressões digitais para corresponder aos resultados em várias execuções, para que apareçam apenas uma vez na última execução do ramo selecionado. Isto torna possível combinar alertas com a linha de código correta quando os arquivos são editados. O `ruleID` de um resultado deve ser o mesmo em toda a análise.
 
### Como relatar caminhos de arquivo consistentes

O caminho do arquivo precisa ser consistente entre as execuções para habilitar a computação de uma impressão digital estável. Se os caminhos de arquivo forem diferentes para o mesmo resultado, sempre que houver uma nova análise, um novo alerta será criado e o antigo será fechado. Isso causará vários alertas para o mesmo resultado.

### Como incluir dados para geração de impressão digital

O {% data variables.product.prodname_dotcom %} usa a propriedade `partialFingerprints` no padrão OASIS para detectar quando dois resultados são logicamente idênticos. Para obter mais informações, confira a entrada "[propriedade partialFingerprints](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012611)" na documentação do OASIS.

Os arquivos SARIF criados pelo {% data variables.code-scanning.codeql_workflow %}, {% ifversion codeql-runner-supported %}que usam o {% data variables.code-scanning.codeql_runner %}, {% endif %}ou que usam {% data variables.product.prodname_codeql_cli %} incluem dados de impressão digital. Se você carregar um arquivo SARIF usando a ação `upload-sarif` e esses dados estiverem ausentes, o {% data variables.product.prodname_dotcom %} tentará preencher o campo `partialFingerprints` usando os arquivos de origem. Para obter mais informações sobre como carregar resultados, confira "[Como carregar um arquivo SARIF no {% data variables.product.prodname_dotcom %}](/code-security/secure-coding/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions)".

Se você carregar um arquivo SARIF sem dados de impressão digital usando o ponto de extremidade de API `/code-scanning/sarifs`, os alertas da {% data variables.product.prodname_code_scanning %} serão processados e exibidos, mas os usuários poderão ver alertas duplicados. Para evitar ver alertas duplicados, calcule dados de impressão digital e preencha a propriedade `partialFingerprints` antes de carregar o arquivo SARIF. Você pode achar o script usado pela ação `upload-sarif` um ponto de partida útil: https://github.com/github/codeql-action/blob/main/src/fingerprints.ts. Para obter mais informações sobre a API, confira "[Carregar uma análise como dados SARIF](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)".

## Noções básicas sobre regras e resultados

Os arquivos SARIF dão suporte a regras e resultados. As informações armazenadas nesses elementos são semelhantes, mas têm propósitos diferentes.

- As regras são uma matriz de objetos `reportingDescriptor` que estão incluídos no objeto `toolComponent`. Nele, são armazenados detalhes das regras que são executadas durante a análise. As informações nesses objetos devem ser alteradas com pouca frequência, geralmente quando você atualiza a ferramenta.

- Os resultados são armazenados como uma série de objetos `result` sob `results` no objeto `run`. Cada objeto `result` contém detalhes de um alerta na base de código. Dentro do objeto `results`, você pode fazer referência à regra que detectou o alerta.

Ao comparar arquivos SARIF gerados pela análise de diferentes bases de código com a mesma ferramenta e regras, verá diferenças nos resultados das análises, mas não nas regras.

## Como especificar a raiz para arquivos de origem

{% data variables.product.prodname_code_scanning_capc %} interpreta os resultados relatados com os caminhos relativos baseados na raiz do repositório analisado. Se um resultado contiver um URI absoluto, ele será convertido em um URI relativo. Em seguida, o URI relativo pode ser correspondido com um arquivo confirmado no repositório.

Você pode fornecer a raiz de origem para conversão de URIs absolutos em relativos de uma das maneiras a seguir.

- Entrada [`checkout_path`](https://github.com/github/codeql-action/blob/c2c0a2908e95769d01b907f9930050ecb5cf050d/analyze/action.yml#L44-L47) para a ação `github/codeql-action/analyze`
- Parâmetro `checkout_uri` para o ponto de extremidade da API de upload de SARIF. Para obter mais informações, confira "[{% data variables.product.prodname_code_scanning_capc %}](/rest/code-scanning#upload-an-analysis-as-sarif-data)" na documentação da API REST
- Propriedade [`invocation.workingDirectory.uri`](https://docs.oasis-open.org/sarif/sarif/v2.1.0/csprd01/sarif-v2.1.0-csprd01.html#_Toc9244365) no arquivo SARIF

Se você fornecer uma raiz de origem, qualquer local de um artefato especificado usando um URI absoluto deverá usar o mesmo esquema de URI. Se houver uma incompatibilidade entre o esquema de URI para a raiz de origem e um ou mais URIs absolutos, o upload será rejeitado.

Por exemplo, um arquivo SARIF é carregado usando uma raiz de origem de `file:///github/workspace`. 

```
# Conversion of absolute URIs to relative URIs for location artifacts

file:///github/workspace/src/main.go -> src/main.go
file:///tmp/go-build/tmp.go          -> file:///tmp/go-build/tmp.go
```

O arquivo é carregado com êxito, pois ambos os URIs absolutos usam o mesmo esquema de URI que a raiz de origem.

## Validar seu arquivo SARIF

<!--UI-LINK: When code scanning fails, the error banner shown in the Security > Code scanning alerts view links to this anchor.-->

Você pode marcar um arquivo SARIF compatível com {% data variables.product.prodname_code_scanning %} testando-o com as regras de ingestão de {% data variables.product.prodname_dotcom %}. Para obter mais informações, acesse o [validador de SARIF da Microsoft](https://sarifweb.azurewebsites.net/).

{% data reusables.code-scanning.upload-sarif-alert-limit %}

## Propriedades compatíveis do arquivo de saída SARIF

Se você usar um mecanismo de análise de código diferente de {% data variables.product.prodname_codeql %}, você poderá revisar as propriedades do SARIF compatíveis para otimizar como seus resultados de análise aparecerão em {% data variables.product.prodname_dotcom %}.

{% note %}

**Observação:** você deve fornecer um valor explícito para qualquer propriedade marcada como "obrigatória". Não há suporte para cadeias de caracteres vazias em propriedades obrigatórias.

{% endnote %}

É possível fazer o upload de qualquer arquivo de saída SARIF 2.1.0 válido, no entanto, {% data variables.product.prodname_code_scanning %} usará apenas as seguintes propriedades compatíveis.

### Objeto `sarifLog`

| Nome | Descrição |
|----|----|
|  `$schema` | **Necessário.** O URI do esquema SARIF JSON para a versão 2.1.0. Por exemplo, `https://json.schemastore.org/sarif-2.1.0.json`. |
| `version` | **Necessário.** A {% data variables.product.prodname_code_scanning_capc %} só dá suporte à versão SARIF `2.1.0`.
| `runs[]` | **Necessário.** Um arquivo SARIF contém uma matriz de uma ou mais execuções. Cada execução representa uma execução única de uma ferramenta de análise. Para obter mais informações sobre uma `run`, confira o [objeto `run`](#run-object).

### Objeto `run`

A {% data variables.product.prodname_code_scanning_capc %} usa o objeto `run` para filtrar os resultados por ferramenta e fornecer informações sobre a fonte de um resultado. O objeto `run` contém o objeto `tool.driver` de componentes da ferramenta, que contém informações sobre a ferramenta que gerou os resultados. Cada `run` pode ter resultados apenas para uma ferramenta de análise.

| Nome | Descrição |
|----|----|
| `tool.driver` | **Necessário.** Um objeto `toolComponent` que descreve a ferramenta de análise. Para obter mais informações, confira o [objeto `toolComponent`](#toolcomponent-object). |
| `tool.extensions[]` | **Opcional.** Uma matriz de objetos `toolComponent` que representam plug-ins ou extensões usadas pela ferramenta durante a análise. Para obter mais informações, confira o [objeto `toolComponent`](#toolcomponent-object). |
| `invocation.workingDirectory.uri` | **Opcional.** Esse campo é usado somente quando `checkout_uri` (somente API de upload do SARIF) ou `checkout_path` (somente {% data variables.product.prodname_actions %}) não são fornecidos. O valor é usado para converter URIs absolutos usados em [objetos `physicalLocation`](#physicallocation-object) em URIs relativos. Para obter mais informações, confira "[Como especificar a raiz para arquivos de origem](#specifying-the-root-for-source-files)".|
| `results[]` | **Necessário.** Os resultados da ferramenta de análise. {% data variables.product.prodname_code_scanning_capc %} exibe os resultados em {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira o [objeto `result`](#result-object).

### Objeto `toolComponent`

| Nome | Descrição |
|----|----|
| `name` | **Necessário.** O nome da ferramenta de análise. {% data variables.product.prodname_code_scanning_capc %} exibe o nome em {% data variables.product.prodname_dotcom %} para permitir que você filtre resultados por ferramenta. |
| `version` | **Opcional.** A versão da ferramenta de análise. O {% data variables.product.prodname_code_scanning_capc %} usa o número da versão para fazer o monitoramento quando os resultados podem ter mudado devido a uma mudança na versão da ferramenta em vez de uma mudança no código que está sendo analisado. Se o arquivo SARIF incluir o campo `semanticVersion`, `version` não será usado pela {% data variables.product.prodname_code_scanning %}. |
| `semanticVersion` | **Opcional.** A versão da ferramenta de análise, especificada pelo formato Versionamento Semântico 2.0. O {% data variables.product.prodname_code_scanning_capc %} usa o número da versão para fazer o monitoramento quando os resultados podem ter mudado devido a uma mudança na versão da ferramenta em vez de uma mudança no código que está sendo analisado. Se o arquivo SARIF incluir o campo `semanticVersion`, `version` não será usado pela {% data variables.product.prodname_code_scanning %}. Para obter mais informações, confira "[Versionamento Semântico 2.0.0](https://semver.org/)" na documentação do Versionamento Semântico. |
| `rules[]` | **Necessário.** A matriz de objetos `reportingDescriptor` que representa as regras. A ferramenta de análise usa regras para encontrar problemas no código que está sendo analisado. Para obter mais informações, confira o [objeto `reportingDescriptor`](#reportingdescriptor-object). |

### Objeto `reportingDescriptor`

Nele, são armazenados detalhes das regras que são executadas durante a análise. As informações nesses objetos devem ser alteradas com pouca frequência, geralmente quando você atualiza a ferramenta. Para obter mais informações, consulte "[Noções básicas sobre regras e resultados](#understanding-rules-and-results)" acima.

| Nome | Descrição |
|----|----|
| `id` |  **Necessário.** Um identificador exclusivo para a regra. A `id` é referenciada com base em outras partes do arquivo SARIF e pode ser usada pela {% data variables.product.prodname_code_scanning %} para exibir URLs no {% data variables.product.prodname_dotcom %}. |
| `name` | **Opcional.** O nome da regra. {% data variables.product.prodname_code_scanning_capc %} exibe o nome para permitir que os resultados sejam filtrados pela regra em {% data variables.product.prodname_dotcom %}. |
| `shortDescription.text` | **Necessário.** Uma descrição concisa da regra. {% data variables.product.prodname_code_scanning_capc %} exibe a breve descrição em {% data variables.product.prodname_dotcom %} ao lado dos resultados associados.
| `fullDescription.text` | **Necessário.** Descrição da regra. {% data variables.product.prodname_code_scanning_capc %} exibe a descrição completa em {% data variables.product.prodname_dotcom %} ao lado dos resultados associados. O número máximo de caracteres é 1000.
| `defaultConfiguration.level` | **Opcional.** Nível de gravidade padrão da regra. {% data variables.product.prodname_code_scanning_capc %} usa níveis de gravidade para ajudar você a entender quão crítico é o resultado para uma determinada regra. Esse valor pode ser substituído pelo atributo `level` no objeto `result`. Para obter mais informações, confira o [objeto `result`](#result-object). Padrão: `warning`.
| `help.text` | **Necessário.** Documentação da regra usando o formato de texto. O {% data variables.product.prodname_code_scanning_capc %} exibe essa documentação de ajuda ao lado dos resultados associados.
| `help.markdown` | **Recomendado.** Documentação da regra usando o formato Markdown. O {% data variables.product.prodname_code_scanning_capc %} exibe essa documentação de ajuda ao lado dos resultados associados. Quando `help.markdown` está disponível, ele é exibido em vez de `help.text`.
| `properties.tags[]` | **Opcional.** Uma matriz de cadeias de caracteres. A {% data variables.product.prodname_code_scanning_capc %} usa `tags` para permitir que você filtre os resultados no {% data variables.product.prodname_dotcom %}. Por exemplo, é possível filtrar todos os resultados que têm a marca `security`.
| `properties.precision` | **Recomendado.** Uma cadeia de caracteres que indica a frequência com que os resultados indicados por essa regra são verdadeiros. Por exemplo, se uma regra tem uma alta taxa conhecida de falsos-positivos, a precisão deve ser `low`. O {% data variables.product.prodname_code_scanning_capc %} ordena os resultados por precisão no {% data variables.product.prodname_dotcom %}, de modo que os resultados com o `level` mais alto e a `precision` mais alta sejam mostrados primeiro. Pode ser `very-high`, `high`, `medium` ou `low`. 
| `properties.problem.severity` | **Recomendado.** Uma cadeia de caracteres que indica o nível de gravidade de todos os alertas gerados por uma consulta que não é de segurança. Isso, com a propriedade `properties.precision`, determina se os resultados são exibidos por padrão no {% data variables.product.prodname_dotcom %}, de modo que os resultados com a `problem.severity` mais alta e a `precision` mais alta sejam mostrados primeiro. Pode ser `error`, `warning` ou `recommendation`.
| `properties.security-severity` | **Recomendado.** Uma cadeia de caracteres que representa uma pontuação que indica o nível de gravidade, entre 0,0 e 10,0, de consultas de segurança (`@tags` inclui `security`). Isso, com a propriedade `properties.precision`, determina se os resultados são exibidos por padrão no {% data variables.product.prodname_dotcom %}, de modo que os resultados com a `security-severity` mais alta e a `precision` mais alta sejam mostrados primeiro. A {% data variables.product.prodname_code_scanning_capc %} converte as pontuações numéricas da seguinte maneira: uma pontuação acima de 9,0 é `critical`, de 7,0 a 8,9 é `high`, de 4,0 a 6,9 é `medium` e 3,9 ou menos é `low`. 

### Objeto `result`

Cada objeto `result` contém detalhes de um alerta na base de código. Dentro do objeto `results`, você pode fazer referência à regra que detectou o alerta. Para obter mais informações, consulte "[Noções básicas sobre regras e resultados](#understanding-rules-and-results)" acima.

{% data reusables.code-scanning.upload-sarif-alert-limit %}

| Nome | Descrição |
|----|----|
| `ruleId`| **Opcional.** O identificador exclusivo da regra (`reportingDescriptor.id`). Para obter mais informações, confira o [objeto `reportingDescriptor`](#reportingdescriptor-object). {% data variables.product.prodname_code_scanning_capc %} usa o identificador da regra para filtrar os resultados por regra em {% data variables.product.prodname_dotcom %}.
| `ruleIndex`| **Opcional.** O índice da regra associada (objeto `reportingDescriptor`) na matriz `rules` de componentes da ferramenta. Para obter mais informações, confira o [objeto `run`](#run-object). O intervalo permitido para essa propriedade 0 a 2^63 - 1.
| `rule`| **Opcional.** Uma referência usada para localizar a regra (descritor de relatório) para esse resultado. Para obter mais informações, confira o [objeto `reportingDescriptor`](#reportingdescriptor-object).
| `level`| **Opcional.** A gravidade do resultado. Esse nível sobrepõe a severidade-padrão definida pela regra. {% data variables.product.prodname_code_scanning_capc %} usa o nível para filtrar resultados por gravidade em {% data variables.product.prodname_dotcom %}.
| `message.text`| **Necessário.** Uma mensagem que descreve o resultado. {% data variables.product.prodname_code_scanning_capc %} exibe o texto da mensagem como o título do resultado. Apenas a primeira frase da mensagem será exibida quando o espaço visível for limitado.
| `locations[]`| **Necessário.** O conjunto de locais em que o resultado foi detectado até, no máximo, dez. Só um local deve ser incluído, a não ser que o problema só possa ser corrigido fazendo uma alteração em cada local especificado. **Observação:** Pelo menos, um local é necessário para a {% data variables.product.prodname_code_scanning %} exibir um resultado. {% data variables.product.prodname_code_scanning_capc %} usará essa propriedade para decidir qual arquivo fazer anotações com o resultado. Apenas o primeiro valor desse array é usado. Todos os outros valores são ignorados.
| `partialFingerprints`| **Necessário.** Um conjunto de cadeias de caracteres usadas para acompanhar a identidade exclusiva do resultado. A {% data variables.product.prodname_code_scanning_capc %} usa `partialFingerprints` para identificar com precisão quais resultados são iguais em todos os commits e branches. A {% data variables.product.prodname_code_scanning_capc %} tentará usar `partialFingerprints`, se houver. Se você estiver carregando arquivos SARIF de terceiros com a `upload-action`, a ação criará `partialFingerprints` para você quando eles não estiverem incluídos no arquivo SARIF. Para obter mais informações, confira "[Como fornecer dados para rastrear alertas de exame de código nas execuções](#providing-data-to-track-code-scanning-alerts-across-runs)".  **Observação:** o {% data variables.product.prodname_code_scanning_capc %} só usa o `primaryLocationLineHash`.
| `codeFlows[].threadFlows[].locations[]`| **Opcional.** Uma matriz de objetos `location` para um objeto `threadFlow`, que descreve o progresso de um programa por meio de um thread de execução. Um objeto `codeFlow` descreve um padrão de execução de código usado para detectar um resultado. Se forem fornecidos fluxos de código, {% data variables.product.prodname_code_scanning %} irá expandir os fluxos de código em {% data variables.product.prodname_dotcom %} para o resultado relevante. Para obter mais informações, confira o [objeto `location`](#location-object).
| `relatedLocations[]`| Um conjunto de locais relevantes para este resultado. {% data variables.product.prodname_code_scanning_capc %} irá vincular a locais relacionados quando forem incorporados à mensagem do resultado. Para obter mais informações, confira o [objeto `location`](#location-object).

### Objeto `location`

Um local dentro de um artefato de programação, como, por exemplo, um arquivo no repositório ou um arquivo gerado durante uma criação.

| Nome | Descrição |
|----|----|
| `location.id` | **Opcional.** Um identificador exclusivo que distingue esse local de todos os outros locais em um só objeto de resultado. O intervalo permitido para essa propriedade 0 a 2^63 - 1.
| `location.physicalLocation` | **Necessário.** Identifica o artefato e a região. Para obter mais informações, confira [`physicalLocation`](#physicallocation-object).
| `location.message.text` | **Opcional.** Uma mensagem relevante à localização.

### Objeto `physicalLocation`

| Nome | Descrição |
|----|----|
| `artifactLocation.uri`| **Necessário.** Um URI que indica o local de um artefato, geralmente um arquivo no repositório ou gerado durante um build. Para obter os melhores resultados, recomendamos que esse seja um caminho relativo da raiz do repositório GitHub que está sendo analisado. Por exemplo, `src/main.js`. Para obter mais informações sobre URIs de artefato, confira "[Como especificar a raiz para arquivos de origem](#specifying-the-root-for-source-files)".|
| `region.startLine` | **Necessário.** O número de linha do primeiro caractere na região.
| `region.startColumn` | **Necessário.** O número da coluna do primeiro caractere na região.
| `region.endLine` | **Necessário.** O número de linha do último caractere na região.
| `region.endColumn` | **Necessário.** O número da coluna do caractere após o final da região.

### Objeto `runAutomationDetails`

O objeto `runAutomationDetails` contém informações que especificam a identidade de uma execução.

{% note %}

**Observação:** `runAutomationDetails` é um objeto SARIF v2.1.0. Se você estiver usando {% data variables.product.prodname_codeql_cli %}, você poderá especificar a versão do SARIF a ser usada. O objeto equivalente a `runAutomationDetails` é `<run>.automationId` para o SARIF v1 e `<run>.automationLogicalId` para o SARIF v2.

{% endnote %}

| Nome | Descrição |
|----|----|
| `id`| **Opcional.** Uma cadeia de caracteres que identifica a categoria da análise e a ID de execução. Use se você quiser fazer upload de vários arquivos SARIF para a mesma ferramenta e commit, mas executado em diferentes idiomas ou diferentes partes do código. |

O uso do objeto `runAutomationDetails` é opcional.

O campo `id` pode incluir uma categoria de análise e uma ID de execução. Não usamos a parte da ID de execução do campo `id`, mas a armazenamos.

Use a categoria para distinguir entre múltiplas análises para a mesma ferramenta ou commit, mas executada em diferentes linguagens ou partes diferentes do código. Use o ID de execução para identificar a execução específica da análise, como a data em que a análise foi executada.

`id` é interpretado como `category/run-id`. Se a `id` não contiver nenhuma barra (`/`), a cadeia de caracteres inteira será a `run_id` e a `category` ficará vazia. Caso contrário, a `category` será tudo na cadeia de caracteres até a última barra, e a `run_id` será tudo após ela.

| `id` | category | `run_id` |
|----|----|----|
| my-analysis/tool1/2021-02-01 | my-analysis/tool1 | 01/02/2021
| my-analysis/tool1/ | my-analysis/tool1 | _sem `run-id`_
| my-analysis for tool1 | _sem categoria_ | my-analysis for tool1

- A execução com uma `id` igual a "my-analysis/tool1/2021-02-01" pertence à categoria "my-analysis/tool1". Provavelmente, esta é a execução de 2 de fevereiro de 2021.
- A execução com uma `id` igual a "my-analysis/tool1/" pertence à categoria "my-analysis/tool1", mas não é distinta das outras execuções nessa categoria.
- A execução cuja `id` é "my-analysis for tool1" tem um identificador único, mas não pode ser inferida como pertencente a nenhuma categoria.

Para obter mais informações sobre o objeto `runAutomationDetails` e o campo `id`, confira o [objeto runAutomationDetails](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012479) na documentação do OASIS.

Observe que o resto dos campos compatíveis são ignorados.

## Exemplos de arquivos de saída SARIF

Estes exemplos de arquivos de saída SARIF mostram as propriedades compatíveis e os valores de exemplo.

### Exemplo com as propriedades mínimas necessárias

Este arquivo de saída SARIF tem exemplo de valores para mostrar as propriedades mínimas necessárias para que os resultados de {% data variables.product.prodname_code_scanning %} funcionem conforme esperado. Se você remover qualquer propriedade, omitir valores ou usar uma cadeia de caracteres vazia, esses dados não serão exibidos corretamente ou serão sincronizados em {% data variables.product.prodname_dotcom %}. 

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

### Exemplo que mostra todas as propriedades compatíveis como SARIF

Este arquivo de saída SARIF tem valores de exemplo para mostrar todas as propriedades do SARIF compatíveis com {% data variables.product.prodname_code_scanning %}.

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

