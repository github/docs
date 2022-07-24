---
title: Solucionar problemas no fluxo de trabalho do CodeQL
shortTitle: Solução de problemas no fluxo de trabalho do CodeQL
intro: 'Se você estiver tendo problemas com {% data variables.product.prodname_code_scanning %}, você usar estas dicas para resolver problemas.'
product: '{% data reusables.gated-features.code-scanning %}'
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
---


{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.not-available %}

{% ifversion ghes or ghae %}
{% note %}

**Observação:** Este artigo descreve as funcionalidades disponíveis com a versão da ação CodeQL e o pacote da CLI do CodeQL associado incluído na versão inicial desta versão de {% data variables.product.product_name %}. Se a sua empresa usar uma versão mais recente da ação do CodeQL, consulte o [artigo de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow) para obter informações sobre as funcionalidades mais recentes. {% ifversion not ghae %} Para obter informações sobre como usar a versão mais recente, consulte "[Configurando a digitalização de código para o seu dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)".{% endif %}

{% endnote %}
{% endif %}

## Produzir registros detalhados para depuração

Para produzir a saída de log mais detalhada, você pode habilitar o log de depuração da etapa. Para obter mais informações, consulte "[Habilitar o registro de depuração](/actions/managing-workflow-runs/enabling-debug-logging#enabling-step-debug-logging)".

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5601 %}

## Criando artefatos de depuração de {% data variables.product.prodname_codeql %}

Você pode obter artefatos para ajudar você a depurar {% data variables.product.prodname_codeql %}, definindo um sinalizador da configuração de depuração. Modifique a etapa `init` do seu arquivo de fluxo de trabalho {% data variables.product.prodname_codeql %} e defina `debug: true`.

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

Os artefatos de depuração serão carregados para a execução do fluxo de trabalho como um artefato denominado `debug-artifacts`. Os dados contém os registros de {% data variables.product.prodname_codeql %}, banco(s) de dados de {% data variables.product.prodname_codeql %}, e todo(s) o(s) outro(s) arquivo(s) SARIF produzido(s) pelo fluxo de trabalho.

Estes artefatos ajudarão você a depurar problemas com digitalização de código de {% data variables.product.prodname_codeql %}. Se você entrar em contato com o suporte do GitHub, eles poderão pedir estes dados.

{% endif %}

## Ocorreu uma falha durante a criação automática para uma linguagem compilada

Se ocorrer uma falha na uma criação automática de código para uma linguagem compilada dentro de seu projeto, tente as seguintes etapas para a solução de problemas.

- Remova a etapa de `autobuild` do seu fluxo de trabalho de {% data variables.product.prodname_code_scanning %} e adicione etapas de criação específicas. Para obter informações sobre a edição do fluxo de trabalho, consulte "[Configurar {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)". Para obter mais informações sobre a substituição da etapa `autobuild`, consulte "[Configurar o fluxo de trabalho de {% data variables.product.prodname_codeql %} para linguagens compiladas](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

- Se seu fluxo de trabalho não especificar explicitamente linguagens para analisar, {% data variables.product.prodname_codeql %} irá detectar implicitamente as linguagens compiladas na sua base de código. Nesta configuração, das linguagens compiladas de C/C++, C#, e Java, {% data variables.product.prodname_codeql %} analisa apenas a linguagem com mais arquivos-fonte. Edite o fluxo de trabalho e adicione uma matriz especificando as linaguagens que você deseja analisar. O fluxo de trabalho de análise do CodeQL padrão usa essa matriz.

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

  Para obter mais informações sobre a edição do fluxo de trabalho, consulte "[Configurar a varredura de código](/code-security/secure-coding/configuring-code-scanning)".

## Nenhum código encontrado durante a criação

Se seu fluxo de trabalho falhar com um erro `Nenhum código fonte foi visto durante a criação` ou `O processo '/opt/hostedtoolcache/CodeQL/0. .0-20200630/x64/codeql/codeql' falhou com o código de saída 32`, isto indica que {% data variables.product.prodname_codeql %} não foi capaz de monitorar o seu código. Há várias explicações para essa falha:

1. O repositório pode não conter o código-fonte escrito em linguagens compatíveis por {% data variables.product.prodname_codeql %}. Verifique a lista de linguagens compatíveis e, se for esse o caso, remova o fluxo de trabalho de {% data variables.product.prodname_codeql %}. Para obter mais informações, consulte "[Sobre digitalização de código com o CodeQL](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql)".

1. A detecção automática da linguagem identificou uma linguagem compatível, mas não há código analisável dessa linguagem no repositório. Um exemplo típico é quando nosso serviço de detecção de linguagem encontra um arquivo associado a uma determinada linguagem de programação, como um arquivo `.h`, or `.gyp`, mas nenhum código executável correspondente está presente no repositório. Para resolver o problema, você pode definir manualmente as linguagens que você deseja analisar atualizando a lista de linguagens na matriz de </code>linguagem`. Por exemplo, a configuração a seguir analisará somente Go, e JavaScript.
<pre><code class="yaml">  strategy:
    fail-fast: false
    matrix:
      # Override automatic language detection by changing the list below.
      # As opções compatíveis estão listadas em um comentário no fluxo de trabalho padrão.
      language: ['go', 'javascript']
`</pre>

   Para obter mais informações, consulte a extração de fluxo de trabalho em "[Criação automática para falhas de linguagem compilada](#automatic-build-for-a-compiled-language-fails)" acima.
1. O seu fluxo de trabalho de {% data variables.product.prodname_code_scanning %} está analisando uma linguagem compilada (C, C++, C#, ou Java), mas o código não foi compilado. Por padrão, o fluxo de trabalho da análise do {% data variables.product.prodname_codeql %} contém uma etapa `autobuild`. No entanto, esta etapa representa um melhor processo de esforço, e pode não ter sucesso na criação do seu código, dependendo do seu ambiente de criação específico. Também pode ocorrer uma falha na criação se você removeu a etapa de `autobuild` e não incluiu as etapas de criação manualmente.  Para obter mais informações sobre a especificação de etapas de criação, consulte "[Configurar o fluxo de trabalho do {% data variables.product.prodname_codeql %} para linguagens compiladas](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".
1. O seu fluxo de trabalho está analisando uma linguagem compilada (C, C++, C#, ou Java), mas partes de sua compilação são armazenadas em cache para melhorar o desempenho (é mais provável que ocorra com sistemas de criação como o Gradle ou Bazel). Uma vez que o {% data variables.product.prodname_codeql %} observa a atividade do compilador para entender os fluxos de dados em um repositório, {% data variables.product.prodname_codeql %} exige uma compilação completa para realizar a análise.
1. O seu fluxo de trabalho está analisando uma linguagem compilada (C, C++, C#, ou Java), mas a compilação não ocorre entre as etapas `init` e `analisar` no fluxo de trabalho. O {% data variables.product.prodname_codeql %} exige que a sua compilação aconteça entre essas duas etapas para observar a atividade do compilador e realizar a análise.
1. Seu código compilado (em C, C++, C#, ou Java) foi compilado com sucesso, mas o {% data variables.product.prodname_codeql %} não conseguiu detectar as chamadas do compilador. As causas mais comuns são:

   * Executar seu processo de criação em um contêiner separado para {% data variables.product.prodname_codeql %}. Para obter mais informações, consulte "[Executar a varredura de código do CodeQL em um contêiner](/code-security/secure-coding/running-codeql-code-scanning-in-a-container)".
   * Criar usando um sistema de compilação distribuído externo às Ações GitHub, usando um processo de daemon.
   * {% data variables.product.prodname_codeql %} não está ciente do compilador específico que você está usando.

  Para projetos de .NET Framework e para projetos C# que usam `dotnet build` ou `msbuild`, você deverá especificar `/p:UseSharedCompilation=false` na etapa de `executar` do seu fluxo de trabalho, ao criar o seu código.

  Por exemplo, a seguinte configuração para C# irá passar o sinalizador durante a primeira etapa de criação.

   ``` yaml
   - run: |
       dotnet build /p:UseSharedCompilation=false
   ```

  Se você encontrar outro problema com seu compilador específico ou configuração, entre em contato com {% data variables.contact.contact_support %}.

Para obter mais informações sobre a especificação de etapas de criação, consulte "[Configurar o fluxo de trabalho do {% data variables.product.prodname_codeql %} para linguagens compiladas](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".

{% ifversion fpt or ghes > 3.1  or ghae or ghec %}
## As inhas de código digitalizadas são menores do que o esperado

Para linguagens compiladas como, por exemplo, C/C++, C#, Go e Java, {% data variables.product.prodname_codeql %} só faz a digitalização de arquivos criados durante a análise. Portanto, o número de linhas de código digitalizadas será menor do que o esperado se parte do código-fonte não for compilado corretamente. Isso pode acontecer por várias razões:

1. O recurso {% data variables.product.prodname_codeql %} `autobuild` usa heurística para criar o código em um repositório. No entanto, às vezes essa abordagem resulta em uma análise incompleta de um repositório. Por exemplo, quando vários comandos `build.sh` existem em um único repositório, a análise pode não estar completa, uma vez que a etapa de `autobuild` executará apenas um dos comandos. Portanto, alguns arquivos de origem podem não ser compilados.
1. Alguns compiladores não funcionam com {% data variables.product.prodname_codeql %} e podem causar problemas ao analisar o código. Por exemplo, o projeto Lombok usa APIs do compilador não público para modificar o comportamento do compilador. As suposições usadas nessas modificações do compilador não são válidas para o extrator Java do {% data variables.product.prodname_codeql %}. Portanto, o código não pode ser analisado.

Se a sua análise de {% data variables.product.prodname_codeql %} digitalizar menos linhas de código do que o esperado, existem várias abordagens que você pode testar para garantir que todos os arquivos fonte necessários sejam compilados.

### Substitua a etapa `autobuild`

Substitua a etapa `autobuild` pelos os mesmos comandos de compilação que você usaria em produção. Isso garante que {% data variables.product.prodname_codeql %} sabe exatamente como compilar todos os arquivos de origem que você deseja digitalizar. Para obter mais informações, consulte "[Configurar o fluxo de trabalho do {% data variables.product.prodname_codeql %} para linguagens compiladas](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".

### Inspecionar a cópia dos arquivos de origem no banco de dados de {% data variables.product.prodname_codeql %}
Talvez você seja possa entender por que alguns arquivos de origem não foram analisados inspecionando a cópia do código-fonte incluído na base de dados de {% data variables.product.prodname_codeql %}. Para obter o banco de dados a partir do seu fluxo de trabalho, modifique a etapa `init` do seu arquivo de fluxo de trabalho de {% data variables.product.prodname_codeql %} e defina `debug: true`.

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

Isso faz o upload do banco de dados como um artefato de ações que você pode baixar para a sua máquina local. Para obter mais informações, consulte "[Armazenando artefatos de fluxo de trabalho](/actions/guides/storing-workflow-data-as-artifacts)".

O artefato conterá uma cópia arquivada dos arquivos de origem digitalizados por {% data variables.product.prodname_codeql %} denominada _src.zip_. Se você comparar os arquivos do código-fonte no repositório e os arquivos em _src. ip_, você poderá ver quais tipos de arquivo estarão faltando. Uma vez que você sabe quais tipos de arquivo não estão sendo analisados, é mais fácil entender como você pode precisar alterar o fluxo de trabalho para a análise de {% data variables.product.prodname_codeql %}.

## Alertas encontrados no código gerado

{% data reusables.code-scanning.alerts-found-in-generated-code %}

## Erros de extração no banco de dados

A equipe de {% data variables.product.prodname_codeql %} trabalha constantemente em erros críticos de extração para garantir que todos os arquivos de origem possam ser digitalizados. No entanto, os extratores de {% data variables.product.prodname_codeql %} às vezes geram erros durante a criação do banco de dados. {% data variables.product.prodname_codeql %} fornece informações sobre erros de extração e avisos gerados durante a criação do banco de dados em um arquivo de registro. A informação sobre o diagnóstico de extração fornece uma indicação da saúde geral do banco de dados. A maioria dos erros dos extratores não impactam a análise significativamente. Um pequeno número de erros de extrator é saudável e normalmente indica um bom estado de análise.

No entanto, se você vir erros de extrator na grande maioria dos arquivos que foram compilados durante a criação do banco de dados, você deverá analisar os erros mais detalhadamente para tentar entender por que alguns arquivos de origem não foram extraídos corretamente.

{% else %}
## Partes do meu repositório não foram analisadas usando `build automático`

O recurso de {% data variables.product.prodname_codeql %} `autobuild` usa heurística para criar o código em um repositório. No entanto, às vezes, essa abordagem resulta em uma análise incompleta de um repositório. Por exemplo, quando uma compilação múltipla de `build.sh` existe em um único repositório, é possível que a análise não seja concluída, já que a etapa `autobuild` executará apenas um dos comandos. A solução é substituir a etapa `autobuild` pelas etapas de criação que criam todo o código-fonte que você deseja analisar. Para obter mais informações, consulte "[Configurar o fluxo de trabalho do {% data variables.product.prodname_codeql %} para linguagens compiladas](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".
{% endif %}

## A criação demora muito tempo

Se a sua criação com a análise de {% data variables.product.prodname_codeql %} demorar muito para ser executada, existem várias abordagens que você pode tentar para reduzir o tempo de criação.

### Usar criações da matriz para paralelizar a análise

Se você usar executores auto-hospedados para executar a análise do {% data variables.product.prodname_codeql %}, você poderá aumentar a memória ou o número de núcleos nesses executores.

### Usar criações da matriz para paralelizar a análise

O padrão {% data variables.product.prodname_codeql_workflow %} usa uma matriz de linguagens, o que faz com que a análise de cada linguagem seja executada em paralelo. Se você especificou as linguagens que deseja analisar diretamente na etapa "Inicializar CodeQL", a análise de cada linguagem acontecerá sequencialmente. Para acelerar a análise de várias linguagens, modifique o seu fluxo de trabalho para usar uma matriz. Para obter mais informações, consulte a extração de fluxo de trabalho em "[Criação automática para falhas de linguagem compilada](#automatic-build-for-a-compiled-language-fails)" acima.

### Reduz a quantidade de código em análise em um único fluxo de trabalho

O tempo de análise é tipicamente proporcional à quantidade de código em análise. Você pode reduzir o tempo de análise reduzindo a quantidade de código em análise de uma vez, por exemplo, excluindo o código de teste, ou dividindo a análise em vários fluxos de trabalho que analisam apenas um subconjunto do seu código por vez.

{% data reusables.code-scanning.alerts-found-in-generated-code %}

Se você dividir sua análise em vários fluxos de trabalho, conforme descrito acima, ainda assim recomendamos que você tenha pelo menos um fluxo de trabalho que seja executado em um `agendamento` que analise todo o código no seu repositório. Já que o {% data variables.product.prodname_codeql %} analisa os fluxos de dados entre os componentes, alguns comportamentos de segurança complexos só podem ser detectados em uma criação completa.

### Executar somente durante um evento de </code>agendamento`</h3>

<p spaces-before="0">Se sua análise ainda é muito lenta para ser executada durante eventos <code>push` ou `pull_request`, você poderá acionar apenas a análise no evento `agendamento`. Para obter mais informações, consulte "[Eventos](/actions/learn-github-actions/introduction-to-github-actions#events)".</p>

### Verifique qual conjunto de consultas que o fluxo de trabalho executa

Por padrão, existem três principais conjuntos de consultas disponíveis para cada linguagem. Se você otimizar a compilação do banco de dados CodeQL mesmo assim o processo continuar sendo muito longo, você poderá reduzir o número de consultas que você executa. O conjunto de consulta padrão é executado automaticamente. Ele contém as consultas de segurança mais rápidas com as taxas mais baixas de resultados falso-positivos.

Você pode executar consultas adicionais ou conjuntos de consulta além das consultas padrão. Verifique se o fluxo de trabalho define um conjunto de consultas adicional ou consultas adicionais a serem executadas usando o elemento `consultas`. Você pode experimentar desabilitar o conjunto de consultas adicionais ou consultas. Para obter mais informações, consulte "[Configurando {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs)."

{% ifversion codeql-ml-queries %}
{% note %}

**Observação:** Se você executar `security-extended` ou a consulta `security-and-quality` para o JavaScript, algumas consultas irão usar a tecnologia experimental. Para obter mais informações, consulte "[Sobre a alertas da digitalização de código](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)".
{% endnote %}
{% endif %}

{% ifversion fpt or ghec %}
## Os resultados diferem entre as plataformas de análise

Se você estiver analisando o código escrito no Python, você poderá ver resultados diferentes dependendo se você executa o {% data variables.product.prodname_codeql_workflow %} no Linux, macOS ou Windows.

Nos executores hospedados no GitHub que usam o Linux, o {% data variables.product.prodname_codeql_workflow %} tenta instalar e analisar as dependências do Python, o que pode gerar mais resultados. Para desabilitar a instalação automática, adicione `setup-python-dependencies: false` à etapa "Inicializar CodeQL" do fluxo de trabalho. Para obter mais informações sobre a configuração da análise de dependências do Python, consulte "[Analisar as dependências do Python](/code-security/secure-coding/configuring-code-scanning#analyzing-python-dependencies)".

{% endif %}

## Error: "Erro do servidor"

Se a execução de um fluxo de trabalho para {% data variables.product.prodname_code_scanning %} falhar devido a um erro no servidor, tente executar o fluxo de trabalho novamente. Se o problema persistir, entre em contato com {% data variables.contact.contact_support %}.

## Erro: "Fora do disco" ou "Sem memória"

Em projetos muito grandes, {% data variables.product.prodname_codeql %} pode ficar sem disco ou memória no executor.
{% ifversion fpt or ghec %}Se encontrar esse problema em um executor de {% data variables.product.prodname_actions %} hospedado, entre em contato com {% data variables.contact.contact_support %} para que possamos investigar o problema.
{% else %}Se você encontrar esse problema, tente aumentar a memória no executor.{% endif %}

{% ifversion fpt or ghec %}
## Erro: 403 "Resource not accessible by integration" ao usar {% data variables.product.prodname_dependabot %}

{% data variables.product.prodname_dependabot %} é considerado não confiável quando aciona uma execução de fluxo de trabalho, e o fluxo de trabalho será executado com escopos somente leitura. Fazer o upload dos resultados de {% data variables.product.prodname_code_scanning %} para um branch, geralmente exige o escopo `security_events: write`. No entanto, {% data variables.product.prodname_code_scanning %} sempre permite o upload de resultados quando o evento `pull_request` aciona a ação executar. Esse é o motivo pelo qual, para branches de {% data variables.product.prodname_dependabot %}, recomendamos que você use o evento `pull_request` em vez do evento `push`.

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

### Análise continua com falha no branch padrão

Se o {% data variables.product.prodname_codeql_workflow %} ainda falhar em um commit criado no branch padrão, você deverá verificar:
- se {% data variables.product.prodname_dependabot %} criou o commit
- se o pull request que inclui o commit mesclado usando `*@dependabot squash e merge`

Este tipo de commit de merge foi criado por {% data variables.product.prodname_dependabot %} e, portanto, qualquer fluxo de trabalho que esteja em execução no commit terá permissões de somente leitura. Se você habilitou as atualizações de segurança de {% data variables.product.prodname_code_scanning %} e {% data variables.product.prodname_dependabot %} ou as atualizações da versão no seu repositório, recomendamos que você evite usar o comando {% data variables.product.prodname_dependabot %} `@dependabot squash e merge`. Em vez disso, você pode habilitar a mesclagem automática para o seu repositório. Isto significa que os pull requests serão automaticamente mesclados quando todas as revisões necessárias forem atendidas e as verificações de status forem aprovadas. Para obter mais informações sobre como habilitar o merge automático, consulte "[Merge automático de um pull request](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request#enabling-auto-merge)".
{% endif %}

## Erro: "não é um arquivo .ql, arquivo, não é um arquivo .qls, um diretório ou uma especificação de consulta de pacote"

Você verá este erro se o CodeQL não conseguir encontrar a consulta nomeada, conjunto de consultas ou pacote de consultas no local solicitado no fluxo de trabalho. Há duas razões comuns para este erro.

- Há um erro de digitação no fluxo de trabalho.
- Um recurso que o fluxo de trabalho se refere por caminho foi renomeado, excluído ou transferido para um novo local.

Depois de verificar a localização do recurso, você pode atualizar o fluxo de trabalho para especificar a localização correta. Se você executar consultas adicionais em análise do Go, é possível que você tenha sido afetado pela deslocalização dos arquivos de origem. Para obter mais informações, consulte [Anúncio de realocação: `github/codeql-go` transferindo-se para `github/codeql`](https://github.com/github/codeql-go/issues/741) no repositório github/codeql-go.

## Aviso: "git checkout HEAD^2 is no longer necessary"

Se você estiver usando um fluxo de trabalho antigo de {% data variables.product.prodname_codeql %}, você poderá receber o aviso a seguir na saída "Inicializar {% data variables.product.prodname_codeql %}" da ação:

```
Aviso: 1 issue was detected with this workflow: git checkout HEAD^2 is no longer 
necessary. Please remove this step as Code Scanning recommends analyzing the merge 
commit for best results.
```

Corrija isto removendo as seguintes linhas do fluxo de trabalho {% data variables.product.prodname_codeql %}. Essas linhas foram incluídas na seção `etapas` do trabalho `Analyze` nas versões iniciais do fluxo de trabalho de {% data variables.product.prodname_codeql %}.

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

A seção revisada de `etapas` do fluxo de trabalho será parecida com esta:

```yaml
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      # Initializes the {% data variables.product.prodname_codeql %} tools for scanning.
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}

      ...
```

Para obter mais informações sobre a edição do arquivo de fluxo de trabalho {% data variables.product.prodname_codeql %}, consulte "[Configurar {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)".
