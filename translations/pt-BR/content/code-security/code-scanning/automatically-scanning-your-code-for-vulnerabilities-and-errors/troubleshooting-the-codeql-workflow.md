---
title: Solucionar problemas no fluxo de trabalho do CodeQL
shortTitle: Troubleshoot CodeQL workflow
intro: 'Se você estiver tendo problemas com {% data variables.product.prodname_code_scanning %}, você usar estas dicas para resolver problemas.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Actions
  - Troubleshooting
  - Repositories
  - Pull requests
  - C/C++
  - C#
  - Java
ms.openlocfilehash: 1efc550663ddeff381acf929e184d26232d22723
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160805'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.not-available %}

{% ifversion ghes or ghae %} {% note %}

**Observação:** este artigo descreve os recursos disponíveis na versão da ação do CodeQL e o pacote da CLI do CodeQL associado incluído na versão inicial desta versão do {% data variables.product.product_name %}. Se a sua empresa usar uma versão mais recente da ação do CodeQL, confira o [artigo sobre o {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow) para obter informações sobre os últimos recursos. {% ifversion not ghae %} Para obter informações sobre como usar a última versão, confira "[Como configurar a verificação de código para seu dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)".{% endif %}

{% endnote %} {% endif %}

## Produzir registros detalhados para depuração

Para produzir a saída de log mais detalhada, você pode habilitar o log de depuração da etapa. Para obter mais informações, confira "[Como habilitar o log de depuração](/actions/managing-workflow-runs/enabling-debug-logging#enabling-step-debug-logging)".

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

## Criando artefatos de depuração de {% data variables.product.prodname_codeql %}

Você pode obter artefatos para ajudar você a depurar {% data variables.product.prodname_codeql %}.
Os artefatos de depuração são carregados no fluxo de trabalho executado como um artefato chamado `debug-artifacts`. Os dados contém os registros de {% data variables.product.prodname_codeql %}, banco(s) de dados de {% data variables.product.prodname_codeql %}, e todo(s) o(s) outro(s) arquivo(s) SARIF produzido(s) pelo fluxo de trabalho.

Estes artefatos ajudarão você a depurar problemas com digitalização de código de {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}. Se você entrar em contato com o suporte do GitHub, eles poderão pedir estes dados.

{% endif %}

{% ifversion codeql-action-debug-logging %}

### Como criar artefatos de depuração do {% data variables.product.prodname_codeql %} executando novamente trabalhos com log de depuração habilitado

Você pode criar artefatos de depuração do {% data variables.product.prodname_codeql %} habilitando o registro em log de depuração e executando novamente os trabalhos. Para obter mais informações sobre como executar novamente os fluxos de trabalho e os trabalhos do {% data variables.product.prodname_actions %}, confira "[Executar novamente fluxos de trabalho e trabalhos](/actions/managing-workflow-runs/re-running-workflows-and-jobs)".

Selecione **Habilitar registro em log de depuração**. Essa opção habilita o log de diagnóstico do executor e o log de depuração de etapas para a execução. Em seguida, você poderá baixar `debug-artifacts` para investigar mais. Você não precisa modificar o arquivo de fluxo de trabalho ao criar artefatos de depuração do {% data variables.product.prodname_codeql %} executando novamente trabalhos.

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

### Como criar artefatos de depuração de {% data variables.product.prodname_codeql %} usando um sinalizador de fluxo de trabalho

Você pode criar artefatos de depuração de {% data variables.product.prodname_codeql %} usando um sinalizador no seu fluxo de trabalho. Para isso, você precisa modificar a etapa `init` do arquivo {% data variables.product.prodname_codeql_workflow %} e definir `debug: true`.

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

{% endif %}

## Ocorreu uma falha durante a criação automática para uma linguagem compilada

Se ocorrer uma falha na uma criação automática de código para uma linguagem compilada dentro de seu projeto, tente as seguintes etapas para a solução de problemas.

- Remova a etapa `autobuild` do fluxo de trabalho da {% data variables.product.prodname_code_scanning %} e adicione etapas de build específicas. Para obter informações sobre como editar o fluxo de trabalho, confira "[Como configurar a {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)". Para obter mais informações sobre como substituir a etapa `autobuild`, confira "[Como configurar o fluxo de trabalho do {% data variables.product.prodname_codeql %} para as linguagens compiladas](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".

- Se seu fluxo de trabalho não especificar explicitamente linguagens para analisar, {% data variables.product.prodname_codeql %} irá detectar implicitamente as linguagens compiladas na sua base de código. Nesta configuração, das linguagens compiladas C/C++, C#,{% ifversion codeql-go-autobuild %} Go{% endif %} e Java, o {% data variables.product.prodname_codeql %} analisa apenas a linguagem com mais arquivos de origem. Edite o fluxo de trabalho e adicione uma matriz especificando as linguagens que você deseja analisar. O fluxo de trabalho de análise do CodeQL padrão usa essa matriz.

  Os seguintes extratos de um fluxo de trabalho mostram como usar uma matriz dentro da estratégia de trabalho para especificar linguagens e, em seguida, fazer referência a cada linguagem dentro da etapa "Inicializar {% data variables.product.prodname_codeql %}:

  ```yaml
  jobs:
    analyze:
      permissions:
        security-events: write
        actions: read
      ...
      strategy:
        fail-fast: false
        matrix:
          language: ['csharp', 'cpp', 'javascript']

      steps:
      ...
        - name: Initialize {% data variables.product.prodname_codeql %}
          uses: {% data reusables.actions.action-codeql-action-init %}
          with:
            languages: {% raw %}${{ matrix.language }}{% endraw %}
  ```

  Para obter mais informações sobre como editar o fluxo de trabalho, confira "[Como configurar a verificação de código](/code-security/secure-coding/configuring-code-scanning)".

## Nenhum código encontrado durante a criação

Se o fluxo de trabalho falhar com o erro `No source code was seen during the build` ou `The process '/opt/hostedtoolcache/CodeQL/0.0.0-20200630/x64/codeql/codeql' failed with exit code 32`, isso indicará que o {% data variables.product.prodname_codeql %} não pôde monitorar o código. Há várias explicações para essa falha:

1. O repositório pode não conter código-fonte escrito em idiomas compatíveis com {% data variables.product.prodname_codeql %}. Verifique a lista de idiomas com suporte e, se esse for o caso, remova o fluxo de trabalho {% data variables.product.prodname_codeql %}. Para obter mais informações, confira "[Sobre a verificação de código com o CodeQL](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql)

1. A detecção automática da linguagem identificou uma linguagem compatível, mas não há código analisável dessa linguagem no repositório. Um exemplo típico é quando o serviço de detecção de linguagem encontra um arquivo associado a determinada linguagem de programação, como um arquivo `.h` ou `.gyp`, mas nenhum código executável correspondente está presente no repositório. Para resolver o problema, defina manualmente as linguagens que deseja analisar atualizando a lista de linguagens na matriz `language`. Por exemplo, a configuração a seguir analisará somente Go, e JavaScript.

  ```yaml
  strategy:
    fail-fast: false
    matrix:
      # Override automatic language detection by changing the list below.
      # Supported options are listed in a comment in the default workflow.
      language: ['go', 'javascript']
  ```

   Para obter mais informações, confira a extração de fluxo de trabalho em "[Falha no build automático para uma linguagem compilada](#automatic-build-for-a-compiled-language-fails)" acima.

1. O fluxo de trabalho de {% data variables.product.prodname_code_scanning %} está analisando uma linguagem compilada (C, C++, C#,{% ifversion codeql-go-autobuild %} Go{% endif %} ou Java), mas o código não foi compilado. Por padrão, o fluxo de trabalho da análise do {% data variables.product.prodname_codeql %} contém uma etapa `autobuild`. No entanto, essa etapa representa um processo de melhor esforço e talvez não funcione na compilação do código, dependendo do ambiente de build específico. A compilação também pode falhar se você removeu a etapa `autobuild` e não incluiu as etapas de build manualmente.  Para obter mais informações sobre como especificar etapas de build, confira "[Como configurar o fluxo de trabalho do {% data variables.product.prodname_codeql %} para as linguagens compiladas](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".
1. O fluxo de trabalho está analisando uma linguagem compilada (C, C++, C#,{% ifversion codeql-go-autobuild %} Go{% endif %} ou Java), mas partes do build são armazenadas em cache para aprimorar o desempenho (é mais provável que ocorra com sistemas de build como Gradle ou Bazel). Uma vez que o {% data variables.product.prodname_codeql %} observa a atividade do compilador para entender os fluxos de dados em um repositório, {% data variables.product.prodname_codeql %} exige uma compilação completa para realizar a análise.
1. Seu fluxo de trabalho está analisando uma linguagem compilada (C, C++, C#,{% ifversion codeql-go-autobuild %} Go{% endif %} ou Java), mas a compilação não ocorre entre as etapas `init` e `analyze` no fluxo de trabalho. O {% data variables.product.prodname_codeql %} exige que a sua compilação aconteça entre essas duas etapas para observar a atividade do compilador e realizar a análise.
1. O código compilado (em C, C++, C#,{% ifversion codeql-go-autobuild %} Go{% endif %} ou Java) foi compilado com sucesso, mas o {% data variables.product.prodname_codeql %} não conseguiu detectar as invocações do compilador. As causas mais comuns são:

   - Executar seu processo de criação em um contêiner separado para {% data variables.product.prodname_codeql %}. Para obter mais informações, confira "[Como executar a verificação de código do CodeQL em um contêiner](/code-security/secure-coding/running-codeql-code-scanning-in-a-container)".
   - Criar usando um sistema de compilação distribuído externo às Ações GitHub, usando um processo de daemon.
   - {% data variables.product.prodname_codeql %} não está ciente do compilador específico que você está usando.

  Para projetos .NET Framework e em C# que usam `dotnet build` ou `msbuild`, você deve especificar `/p:UseSharedCompilation=false` na etapa `run` do fluxo de trabalho ao compilar seu código.
  
  Por exemplo, a seguinte configuração para C# irá passar o sinalizador durante a primeira etapa de criação.

   ``` yaml
   - run: |
       dotnet build /p:UseSharedCompilation=false
   ```

  Se você encontrar outro problema com seu compilador específico ou configuração, entre em contato com {% data variables.contact.contact_support %}.

Para obter mais informações sobre como especificar etapas de build, confira "[Como configurar o fluxo de trabalho do {% data variables.product.prodname_codeql %} para as linguagens compiladas](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".

{% ifversion fpt or ghes > 3.1  or ghae or ghec %}

## As inhas de código digitalizadas são menores do que o esperado

Para linguagens compiladas como, por exemplo, C/C++, C#, Go e Java, {% data variables.product.prodname_codeql %} só faz a digitalização de arquivos criados durante a análise. Portanto, o número de linhas de código digitalizadas será menor do que o esperado se parte do código-fonte não for compilado corretamente. Isso pode ocorrer por diversos motivos:

1. O recurso `autobuild` do {% data variables.product.prodname_codeql %} usa a heurística para compilar o código em um repositório. No entanto, às vezes essa abordagem resulta em uma análise incompleta de um repositório. Por exemplo, quando vários comandos `build.sh` existem em um só repositório, talvez a análise não seja completa, pois a etapa `autobuild` executará apenas um dos comandos. Portanto, alguns arquivos de origem podem não ser compilados.
1. Alguns compiladores não funcionam com {% data variables.product.prodname_codeql %} e podem causar problemas ao analisar o código. Por exemplo, o projeto Lombok usa APIs do compilador não público para modificar o comportamento do compilador. As suposições usadas nessas modificações do compilador não são válidas para o extrator Java do {% data variables.product.prodname_codeql %}. Portanto, o código não pode ser analisado.

Se a sua análise de {% data variables.product.prodname_codeql %} digitalizar menos linhas de código do que o esperado, existem várias abordagens que você pode testar para garantir que todos os arquivos fonte necessários sejam compilados.

### Substituir a etapa `autobuild`

Substitua a etapa `autobuild` pelos os mesmos comandos de build que serão usados em produção. Isso garante que {% data variables.product.prodname_codeql %} sabe exatamente como compilar todos os arquivos de origem que você deseja digitalizar.
Para obter mais informações, confira "[Como configurar o fluxo de trabalho do {% data variables.product.prodname_codeql %} para as linguagens compiladas](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".

### Inspecionar a cópia dos arquivos de origem no banco de dados de {% data variables.product.prodname_codeql %}

Talvez você seja possa entender por que alguns arquivos de origem não foram analisados inspecionando a cópia do código-fonte incluído na base de dados de {% data variables.product.prodname_codeql %}. Para obter o banco de dados por meio do fluxo de trabalho do Actions, modifique a etapa `init` do arquivo de fluxo de trabalho do {% data variables.product.prodname_codeql %} e defina `debug: true`.

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

Isso faz o upload do banco de dados como um artefato de ações que você pode baixar para a sua máquina local. Para obter mais informações, confira "[Como armazenar artefatos de fluxo de trabalho](/actions/guides/storing-workflow-data-as-artifacts)".

O artefato conterá uma cópia arquivada dos arquivos de origem verificados pelo {% data variables.product.prodname_codeql %} chamada _src.zip_. Se você comparar os arquivos do código-fonte no repositório e os arquivos no _src.zip_, poderá ver quais tipos de arquivos estão ausentes. Uma vez que você sabe quais tipos de arquivo não estão sendo analisados, é mais fácil entender como você pode precisar alterar o fluxo de trabalho para a análise de {% data variables.product.prodname_codeql %}.

## Alertas encontrados no código gerado

{% data reusables.code-scanning.alerts-found-in-generated-code %}

## Erros de extração no banco de dados

A equipe de {% data variables.product.prodname_codeql %} trabalha constantemente em erros críticos de extração para garantir que todos os arquivos de origem possam ser digitalizados. No entanto, os extratores de {% data variables.product.prodname_codeql %} às vezes geram erros durante a criação do banco de dados. {% data variables.product.prodname_codeql %} fornece informações sobre erros de extração e avisos gerados durante a criação do banco de dados em um arquivo de registro.
A informação sobre o diagnóstico de extração fornece uma indicação da saúde geral do banco de dados. A maioria dos erros dos extratores não impactam a análise significativamente. Um pequeno número de erros de extrator é saudável e normalmente indica um bom estado de análise.

No entanto, se você vir erros de extrator na grande maioria dos arquivos que foram compilados durante a criação do banco de dados, você deverá analisar os erros mais detalhadamente para tentar entender por que alguns arquivos de origem não foram extraídos corretamente.

{% else %}

## Partes do meu repositório não foram analisadas por meio do `autobuild`

O recurso `autobuild` do {% data variables.product.prodname_codeql %} usa a heurística para compilar o código em um repositório. No entanto, às vezes, essa abordagem resulta em uma análise incompleta de um repositório. Por exemplo, quando há vários comandos `build.sh` em um só repositório, talvez a análise não seja concluída, pois a etapa `autobuild` só executará um dos comandos. A solução é substituir a etapa `autobuild` pelas etapas de build que compilam todo o código-fonte que você deseja analisar. Para obter mais informações, confira "[Como configurar o fluxo de trabalho do {% data variables.product.prodname_codeql %} para as linguagens compiladas](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".
{% endif %}

## A criação demora muito tempo

Se a sua criação com a análise de {% data variables.product.prodname_codeql %} demorar muito para ser executada, existem várias abordagens que você pode tentar para reduzir o tempo de criação.

### Usar criações da matriz para paralelizar a análise

Se você usar executores auto-hospedados para executar a análise do {% data variables.product.prodname_codeql %}, você poderá aumentar a memória ou o número de núcleos nesses executores.

### Usar criações da matriz para paralelizar a análise

O {% data variables.product.prodname_codeql_workflow %} padrão usa uma matriz de linguagens, o que faz com que a análise de cada linguagem seja executada em paralelo. Se você especificou as linguagens que deseja analisar diretamente na etapa "Inicializar CodeQL", a análise de cada linguagem acontecerá sequencialmente. Para acelerar a análise de várias linguagens, modifique o seu fluxo de trabalho para usar uma matriz. Para obter mais informações, confira a extração de fluxo de trabalho em "[Falha no build automático para uma linguagem compilada](#automatic-build-for-a-compiled-language-fails)" acima.

### Reduz a quantidade de código em análise em um único fluxo de trabalho

O tempo de análise é normalmente proporcional à quantidade de código que está sendo analisado. Você pode reduzir o tempo de análise reduzindo a quantidade de código em análise de uma vez, por exemplo, excluindo o código de teste, ou dividindo a análise em vários fluxos de trabalho que analisam apenas um subconjunto do seu código por vez.

{% data reusables.code-scanning.alerts-found-in-generated-code %}

Se você dividir sua análise em vários fluxos de trabalho, conforme descrito acima, ainda assim recomendaremos que você tenha, pelo menos, um fluxo de trabalho que seja executado em um `schedule` que analise todo o código no repositório. Já que o {% data variables.product.prodname_codeql %} analisa os fluxos de dados entre os componentes, alguns comportamentos de segurança complexos só podem ser detectados em uma criação completa.

### Execução somente durante um evento `schedule`

Se a execução da análise estiver muito lenta durante os eventos `push` ou `pull_request`, o ideal será disparar a análise somente no evento `schedule`. Para obter mais informações, confira "[Eventos](/actions/learn-github-actions/introduction-to-github-actions#events)".

### Verifique qual conjunto de consultas que o fluxo de trabalho executa

Por padrão, existem três principais conjuntos de consultas disponíveis para cada linguagem. Se você otimizar a compilação do banco de dados CodeQL mesmo assim o processo continuar sendo muito longo, você poderá reduzir o número de consultas que você executa. O conjunto de consulta padrão é executado automaticamente. Ele contém as consultas de segurança mais rápidas com as taxas mais baixas de resultados falso-positivos.

Você pode executar consultas adicionais ou conjuntos de consulta além das consultas padrão. Verifique se o fluxo de trabalho define um conjunto de consultas adicional ou consultas adicionais a serem executadas usando o elemento `queries`. Você pode experimentar desabilitar o conjunto de consultas adicionais ou consultas. Para obter mais informações, confira "[Como configurar a {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs)".

{% ifversion codeql-ml-queries %} {% note %}

**Observação:** se você executar o conjunto de consultas `security-extended` ou `security-and-quality` para JavaScript, algumas consultas usarão uma tecnologia experimental. Para obter mais informações, confira "[Sobre os alertas da verificação de código](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)".
{% endnote %} {% endif %}

{% ifversion fpt or ghec %}

## Os resultados diferem entre as plataformas de análise

Se você estiver analisando o código escrito no Python, você poderá ver resultados diferentes dependendo se você executa o {% data variables.product.prodname_codeql_workflow %} no Linux, macOS ou Windows.

Nos executores hospedados no GitHub que usam o Linux, o {% data variables.product.prodname_codeql_workflow %} tenta instalar e analisar as dependências do Python, o que pode gerar mais resultados. Para desabilitar a instalação automática, adicione `setup-python-dependencies: false` à etapa "Inicializar CodeQL" do fluxo de trabalho. Para obter mais informações sobre como configurar a análise das dependências do Python, confira "[Como analisar as dependências do Python](/code-security/secure-coding/configuring-code-scanning#analyzing-python-dependencies)".

{% endif %}

## Erro: "Erro de servidor"

Se a execução de um fluxo de trabalho para {% data variables.product.prodname_code_scanning %} falhar devido a um erro no servidor, tente executar o fluxo de trabalho novamente. Se o problema persistir, entre em contato com {% data variables.contact.contact_support %}.

## Erro: "Sem espaço em disco" ou "Memória insuficiente"

Em projetos muito grandes, {% data variables.product.prodname_codeql %} pode ficar ficar sem disco ou sem memória no executor.
{% ifversion fpt or ghec %}Se você encontrar esse problema em um executor hospedado pelo {% data variables.product.prodname_actions %}, entre em contato com o {% data variables.contact.contact_support %} para que possamos investigar o problema.
{% else %}Se você encontrar esse problema, tente aumentar a memória no executor.{% endif %}

{% ifversion fpt or ghec %}

## Erro: 403 "Resource not accessible by integration" ao usar {% data variables.product.prodname_dependabot %}

{% data variables.product.prodname_dependabot %} é considerado não confiável quando aciona uma execução de fluxo de trabalho, e o fluxo de trabalho será executado com escopos somente leitura. Em geral, o upload dos resultados da {% data variables.product.prodname_code_scanning %} em um branch exige o escopo `security_events: write`. No entanto, a {% data variables.product.prodname_code_scanning %} sempre permite o upload dos resultados quando o evento `pull_request` dispara a execução da ação. É por isso que, para os branches do {% data variables.product.prodname_dependabot %}, recomendamos que você use o evento `pull_request` em vez do evento `push`.

Uma abordagem simples é executar pushes no branch padrão e todos os outros branches importantes de execução longa, além de pull requests abertos contra este conjunto de branches:

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```

Uma abordagem alternativa é executar em todos os pushes, exceto em branches de {% data variables.product.prodname_dependabot %}:

```yaml
on:
  push:
    branches-ignore:
      - 'dependabot/**'
  pull_request:
```

### A análise ainda falha na ramificação padrão

Se o {% data variables.product.prodname_codeql_workflow %} ainda falhar em um commit criado no branch padrão, você deverá verificar:

- se {% data variables.product.prodname_dependabot %} criou o commit
- se a solicitação de pull que inclui o commit foi mesclada por meio de `@dependabot squash and merge`

Este tipo de commit de merge foi criado por {% data variables.product.prodname_dependabot %} e, portanto, qualquer fluxo de trabalho que esteja em execução no commit terá permissões de somente leitura. Se você habilitou as atualizações de segurança ou as atualizações de versão da {% data variables.product.prodname_code_scanning %} e do {% data variables.product.prodname_dependabot %} no seu repositório, recomendamos que você evite usar o comando `@dependabot squash and merge` do {% data variables.product.prodname_dependabot %}. Em vez disso, você pode habilitar a mesclagem automática para seu repositório. Isso significa que as solicitações de pull serão mescladas automaticamente quando todas as revisões necessárias forem atendidas e as verificações de status tiverem passado. Para obter mais informações sobre como habilitar a mesclagem automática, confira "[Mesclar automaticamente uma solicitação de pull](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request#enabling-auto-merge)".
{% endif %}

## Erro: "não é um arquivo .ql, um arquivo .qls, um diretório ou uma especificação do pacote de consultas"

Você verá esse erro se o CodeQL não conseguir localizar a consulta nomeada, o pacote de consultas ou o pacote de consultas no local solicitado no fluxo de trabalho. Há duas razões comuns para este erro.

- Há um erro de digitação no fluxo de trabalho.
- Um recurso ao qual o fluxo de trabalho se refere por caminho foi renomeado, excluído ou movido para um novo local.

Depois de verificar o local do recurso, você poderá atualizar o fluxo de trabalho para especificar o local correto.

## Aviso: "git checkout HEAD^2 não é mais necessário"

Se você estiver usando um fluxo de trabalho antigo de {% data variables.product.prodname_codeql %}, você poderá receber o aviso a seguir na saída "Inicializar {% data variables.product.prodname_codeql %}" da ação:

```
Warning: 1 issue was detected with this workflow: git checkout HEAD^2 is no longer 
necessary. Please remove this step as Code Scanning recommends analyzing the merge 
commit for best results.
```

Corrija isto removendo as seguintes linhas do fluxo de trabalho {% data variables.product.prodname_codeql %}. Essas linhas foram incluídas na seção `steps` do trabalho `Analyze` nas versões iniciais do fluxo de trabalho do {% data variables.product.prodname_codeql %}.

```yaml
        with:
          # We must fetch at least the immediate parents so that if this is
          # a pull request then we can checkout the head.
          fetch-depth: 2

      # If this run was triggered by a pull request event, then checkout
      # the head of the pull request instead of the merge commit.
      - run: git checkout HEAD^2
        if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
```

A seção revisada `steps` do fluxo de trabalho terá esta aparência:

```yaml
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      # Initializes the {% data variables.product.prodname_codeql %} tools for scanning.
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}

      ...
```

Para obter mais informações sobre como editar o arquivo de fluxo de trabalho do {% data variables.product.prodname_codeql %}, confira "[Como configurar a {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)".
