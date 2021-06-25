---
title: Solucionar problemas no fluxo de trabalho do CodeQL
shortTitle: Solucionar problemas do CodeQL
intro: 'Se você estiver tendo problemas com {% data variables.product.prodname_code_scanning %}, você usar estas dicas para resolver problemas.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/troubleshooting-the-codeql-workflow
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
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

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.not-available %}

### Produzir registros detalhados para depuração

Para produzir a saída de log mais detalhada, você pode habilitar o log de depuração da etapa. Para obter mais informações, consulte "[Habilitar o registro de depuração](/actions/managing-workflow-runs/enabling-debug-logging#enabling-step-debug-logging)".

### Ocorreu uma falha durante a criação automática para uma linguagem compilada

Se ocorrer uma falha na uma criação automática de código para uma linguagem compilada dentro de seu projeto, tente as seguintes etapas para a solução de problemas.

- Remova a etapa de `autobuild` do seu fluxo de trabalho de {% data variables.product.prodname_code_scanning %} e adicione etapas de criação específicas. Para obter informações sobre a edição do fluxo de trabalho, consulte "[Configurar {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)". Para obter mais informações sobre a substituição da etapa `autobuild`, consulte "[Configurar o fluxo de trabalho de {% data variables.product.prodname_codeql %} para linguagens compiladas](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

- Se seu fluxo de trabalho não especificar explicitamente linguagens para analisar, {% data variables.product.prodname_codeql %} irá detectar implicitamente as linguagens compiladas na sua base de código. Nesta configuração, das linguagens compiladas de C/C++, C#, e Java, {% data variables.product.prodname_codeql %} analisa apenas a linguagem com mais arquivos-fonte. Edite o fluxo de trabalho e adicione uma matriz de compilação especificando as linguagens que você deseja analisar. O fluxo de trabalho de análise do CodeQL padrão usa essa matriz.

  Os seguintes extratos de um fluxo de trabalho mostram como usar uma matriz dentro da estratégia de trabalho para especificar linguagens e, em seguida, fazer referência a cada linguagem dentro da etapa "Inicializar {% data variables.product.prodname_codeql %}:

  ```yaml
  jobs:
    analyze:{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
      permissions:
        security-events: write
        actions: read{% endif %}
      ...
      strategy:
        fail-fast: false
        matrix:
          language: ['csharp', 'cpp', 'javascript']

      steps:
      ...
        - name: Initialize {% data variables.product.prodname_codeql %}
          uses: github/codeql-action/init@v1
          with:
            languages: {% raw %}${{ matrix.language }}{% endraw %}
  ```

  Para obter mais informações sobre a edição do fluxo de trabalho, consulte "[Configurar a varredura de código](/code-security/secure-coding/configuring-code-scanning)".

### Nenhum código encontrado durante a criação

Se seu fluxo de trabalho falhar com um erro `Nenhum código fonte foi visto durante a criação` ou `O processo '/opt/hostedtoolcache/CodeQL/0. .0-20200630/x64/codeql/codeql' falhou com o código de saída 32`, isto indica que {% data variables.product.prodname_codeql %} não foi capaz de monitorar o seu código. Há várias explicações para essa falha:

1. A detecção automática da linguagem identificou uma linguagem compatível, mas não há código analisável dessa linguagem no repositório. Um exemplo típico é quando nosso serviço de detecção de linguagem encontra um arquivo associado a uma determinada linguagem de programação, como um arquivo `.h`, or `.gyp`, mas nenhum código executável correspondente está presente no repositório. Para resolver o problema, você pode definir manualmente as linguagens que você deseja analisar atualizando a lista de linguagens na matriz de </code>linguagem`. Por exemplo, a configuração a seguir analisará somente Go, e JavaScript.
<pre><code class="yaml">  strategy:
    fail-fast: false
    matrix:
      # Override automatic language detection by changing the list below
      # Supported options are:
      # ['csharp', 'cpp', 'go', 'java', 'javascript', 'python']
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

  Para projetos de .NET Framework, e para projetos de C# que usam `dotnet build` ou `msbuild` que miram .NET Core 2, você deve especificar `/p:UseSharedCompilation=false` na etapa de `executar` do seu fluxo de trabalho quando você construir seu código. O sinalizador `UseSharedCompilation` não é necessário para o .NET Core 3.0 ou versão superior.

  Por exemplo, a seguinte configuração para C# irá passar o sinalizador durante a primeira etapa de criação.

   ``` yaml
   - run: |
       dotnet build /p:UseSharedCompilation=false 
   ```

  Se você encontrar outro problema com seu compilador específico ou configuração, entre em contato com {% data variables.contact.contact_support %}.

Para obter mais informações sobre a especificação de etapas de criação, consulte "[Configurar o fluxo de trabalho do {% data variables.product.prodname_codeql %} para linguagens compiladas](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".

### Partes do meu repositório não foram analisadas usando `build automático`

O recurso de {% data variables.product.prodname_codeql %} `autobuild` usa heurística para criar o código em um repositório. No entanto, às vezes, essa abordagem resulta em uma análise incompleta de um repositório. Por exemplo, quando uma compilação múltipla de `build.sh` existe em um único repositório, é possível que a análise não seja concluída, já que a etapa `autobuild` executará apenas um dos comandos. A solução é substituir a etapa `autobuild` pelas etapas de criação que criam todo o código-fonte que você deseja analisar. Para obter mais informações, consulte "[Configurar o fluxo de trabalho do {% data variables.product.prodname_codeql %} para linguagens compiladas](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".

### A criação demora muito tempo

Se a sua criação com a análise de {% data variables.product.prodname_codeql %} demorar muito para ser executada, existem várias abordagens que você pode tentar para reduzir o tempo de criação.

#### Usar criações da matriz para paralelizar a análise

Se você usar executores auto-hospedados para executar a análise do {% data variables.product.prodname_codeql %}, você poderá aumentar a memória ou o número de núcleos nesses executores.

#### Usar criações da matriz para paralelizar a análise

O {% data variables.product.prodname_codeql_workflow %} padrão usa uma matriz de criação de linguagens, o que faz com que a análise de cada linguagem seja executada em paralelo. Se você especificou as linguagens que deseja analisar diretamente na etapa "Inicializar CodeQL", a análise de cada linguagem acontecerá sequencialmente. Para acelerar a análise de várias linguagens, modifique o seu fluxo de trabalho para usar uma matriz. Para obter mais informações, consulte a extração de fluxo de trabalho em "[Criação automática para falhas de linguagem compilada](#automatic-build-for-a-compiled-language-fails)" acima.

#### Reduz a quantidade de código em análise em um único fluxo de trabalho

O tempo de análise é tipicamente proporcional à quantidade de código em análise. Você pode reduzir o tempo de análise reduzindo a quantidade de código em análise de uma vez, por exemplo, excluindo o código de teste, ou dividindo a análise em vários fluxos de trabalho que analisam apenas um subconjunto do seu código por vez.

Para linguagens compiladas como Java, C, C++ e C#, o {% data variables.product.prodname_codeql %} analisa todo o código construído durante a execução do fluxo de trabalho. Para limitar a quantidade de código em análise, crie apenas o código que você deseja analisar especificando suas próprias etapas de criação em um bloco `Executar`. Você pode combinar a especificação das suas próprias etapas de criação ao usar os filtros `caminhos` ou `paths-ignore` nos eventos `pull_request` e `push` para garantir que o seu fluxo de trabalho só será executado quando o código específico for alterado. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)".

Para linguagens interpretadas como Go, JavaScript, Python e TypeScript, que {% data variables.product.prodname_codeql %} analisa sem uma criação específica, você pode especificar opções de configuração adicionais para limitar a quantidade de código a ser analisado. Para obter mais informações, consulte "[Especificar diretórios a serem varridos](/code-security/secure-coding/configuring-code-scanning#specifying-directories-to-scan)".

Se você dividir sua análise em vários fluxos de trabalho, conforme descrito acima, ainda assim recomendamos que você tenha pelo menos um fluxo de trabalho que seja executado em um `agendamento` que analise todo o código no seu repositório. Já que o {% data variables.product.prodname_codeql %} analisa os fluxos de dados entre os componentes, alguns comportamentos de segurança complexos só podem ser detectados em uma criação completa.

#### Executar somente durante um evento de </code>agendamento`</h4>

<p spaces-before="0">Se sua análise ainda é muito lenta para ser executada durante eventos <code>push` ou `pull_request`, você poderá acionar apenas a análise no evento `agendamento`. Para obter mais informações, consulte "[Eventos](/actions/learn-github-actions/introduction-to-github-actions#events)".</p>

{% if currentVersion == "free-pro-team@latest" %}
### Os resultados diferem entre as plataformas de análise

Se você estiver analisando o código escrito no Python, você poderá ver resultados diferentes dependendo se você executa o {% data variables.product.prodname_codeql_workflow %} no Linux, macOS ou Windows.

Nos executores hospedados no GitHub que usam o Linux, o {% data variables.product.prodname_codeql_workflow %} tenta instalar e analisar as dependências do Python, o que pode gerar mais resultados. Para desabilitar a instalação automática, adicione `setup-python-dependencies: false` à etapa "Inicializar CodeQL" do fluxo de trabalho. Para obter mais informações sobre a configuração da análise de dependências do Python, consulte "[Analisar as dependências do Python](/code-security/secure-coding/configuring-code-scanning#analyzing-python-dependencies)".

{% endif %}

### Error: "Erro do servidor"

Se a execução de um fluxo de trabalho para {% data variables.product.prodname_code_scanning %} falhar devido a um erro no servidor, tente executar o fluxo de trabalho novamente. Se o problema persistir, entre em contato com {% data variables.contact.contact_support %}.

### Erro: "Fora do disco" ou "Sem memória"

Em projetos muito grandes, {% data variables.product.prodname_codeql %} pode ficar ficar sem disco ou sem memória no executor do {% data variables.product.prodname_actions %} hospedado.
{% if currentVersion == "free-pro-team@latest" %}Se encontrar esse problema em um executor de {% data variables.product.prodname_actions %} hospedado, entre em contato com {% data variables.contact.contact_support %} para que possamos investigar o problema.
{% else %}Se você encontrar esse problema, tente aumentar a memória no executor.{% endif %}

### Aviso: "git checkout HEAD^2 is no longer necessary"

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
        uses: actions/checkout@v2

      # Initializes the {% data variables.product.prodname_codeql %} tools for scanning.
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: github/codeql-action/init@v1

      ...
```

Para obter mais informações sobre a edição do arquivo de fluxo de trabalho {% data variables.product.prodname_codeql %}, consulte "[Configurar {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)".
