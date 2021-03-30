---
title: Migrar do Travis CI para o GitHub Actions
intro: '{% data variables.product.prodname_actions %} e o Travis CI compartilham várias semelhanças, o que ajuda a tornar relativamente fácil a migração para {% data variables.product.prodname_actions %}.'
redirect_from:
  - /actions/migrating-to-github-actions/migrating-from-travis-ci-to-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'Travis CI'
  - 'Migração'
  - 'CI'
  - 'CD'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introdução

Este guia ajuda a você a fazer a migração do Travis CI para {% data variables.product.prodname_actions %}. Ele compara os seus conceitos e sintaxe, descreve as semelhanças e demonstra as suas diferentes abordagens em relação às tarefas comuns.

### Antes de começar

Antes de iniciar sua migração para {% data variables.product.prodname_actions %}, seria importante familiarizar-se com a forma como funciona:

- Para um exemplo rápido que demonstra um trabalho de {% data variables.product.prodname_actions %}, consulte "[Início rápido para {% data variables.product.prodname_actions %}](/actions/quickstart)".
- Para aprender os conceitos básicos de {% data variables.product.prodname_actions %}, consulte "[Introdução ao GitHub Actions](/actions/learn-github-actions/introduction-to-github-actions)".

### Comparar a execução do trabalho

Para dar controle a você sobre quando as tarefas de CI são executadas, um _fluxo de trabalho_ de {% data variables.product.prodname_actions %} usa _trabalhos_ que são executados em paralelo por padrão. Cada trabalho contém _etapas_ que são executadas em uma sequência que você define. Se você precisa executar a configuração e a limpeza de ações para um trabalho, você pode definir etapas em cada trabalho para executá-las.

### Principais semelhanças

{% data variables.product.prodname_actions %} e o Travis CI compartilham certas semelhanças e entendê-las antecipadamente pode ajudar a agilizar o processo de migração.

#### Usar a sintaxe de YAML

O Travis CI e o {% data variables.product.prodname_actions %} usam o YAML para criar trabalhos e fluxos de trabalho, e esses arquivos são armazenados no repositório do código. Para obter mais informações sobre como o {% data variables.product.prodname_actions %} usa o YAML, consulte ["Criar um arquivo de fluxo de trabalho](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)".

#### Variáveis de ambiente personalizadas

O Travis CI permite que você defina variáveis de ambiente e compartilhe-as entre stages. Da mesma forma, {% data variables.product.prodname_actions %} permite definir variáveis de ambiente para uma etapa, um trabalho ou um fluxo de trabalho. Para obter mais informações, consulte ["Variáveis de ambiente](/actions/reference/environment-variables)".

#### Variáveis padrão de ambiente

O Travis CI e {% data variables.product.prodname_actions %} incluem variáveis de ambiente padrão que você pode usar nos seus arquivos de YAML. Para {% data variables.product.prodname_actions %}, você pode ver estes listados em "[Variáveis de ambiente padrão](/actions/reference/environment-variables#default-environment-variables)".

#### Processamento paralelo do trabalho

O Travis CI pode usar `stages` para executar trabalhos em paralelo. Da mesma forma, {% data variables.product.prodname_actions %} executa `trabalhos` em paralelo. Para obter mais informações, consulte "[Criar trabalhos dependentes](/actions/learn-github-actions/managing-complex-workflows#creating-dependent-jobs)".

#### Selos de status

O Travis CI e {% data variables.product.prodname_actions %} são compatíveis com selos de status, o que permite que você indique se uma criação está sendo aprovada ou falhando. Para obter mais informações, consulte ["Adicionar um selo de status de fluxo de trabalho ao seu repositório](/actions/managing-workflow-runs/adding-a-workflow-status-badge)".

#### Usar uma matriz de criação

O Travis CI e {% data variables.product.prodname_actions %} são compatíveis com uma matriz de criação, o que permite que você realize testes usando combinações de sistemas operacionais e pacotes de software. Para obter mais informações, consulte "[Usar uma matriz de criação](/actions/learn-github-actions/managing-complex-workflows#using-a-build-matrix)".

Abaixo, há um exemplo de comparação da sintaxe para cada sistema:

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
matrix:
  include:
    - rvm: 2.5
    - rvm: 2.6.3
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  build:
    strategy:
      matrix:
        ruby: [2.5, 2.6.3]
```
{% endraw %}
</td>
</tr>
</table>

#### Apontar para branches específicos

O Travis CI e {% data variables.product.prodname_actions %} permitem que você aponte a sua CI para um branch específico. Para obter mais informações, consulte "[Sintaxe do fluxo de trabalho para o GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)".

Abaixo, há um exemplo da sintaxe para cada sistema:

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
branches:
  only:
    - main
    - 'mona/octocat'
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
on:
  push:
    branches:
      - main
      - 'mona/octocat'
```
{% endraw %}
</td>
</tr>
</table>

#### Verificar submódulos

O Travis CI e {% data variables.product.prodname_actions %} permitem que você controle se os submódulos estão incluídos no clone do repositório.

Abaixo, há um exemplo da sintaxe para cada sistema:

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
git:
  submodules: false
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- uses: actions/checkout@v2
  with:
    submodules: false
```
{% endraw %}
</td>
</tr>
</table>

#### Usando variáveis de ambiente em uma matriz

O Travis CI e {% data variables.product.prodname_actions %} podem adicionar variáveis de ambiente personalizadas a uma matriz de teste, que permite que você faça referência à variável em uma etapa posterior.

Em {% data variables.product.prodname_actions %}, você pode usar a chave `incluir` para adicionar variáveis de ambiente personalizadas a uma matriz. {% data reusables.github-actions.matrix-variable-example %}

### Principais recursos em {% data variables.product.prodname_actions %}

Ao fazer a migração do Travis CI, considere os recursos principais a seguir em {% data variables.product.prodname_actions %}:

#### Armazenar segredos

{% data variables.product.prodname_actions %} permite armazenar segredos e referenciá-los em seus trabalhos. Organizações de {% data variables.product.prodname_actions %} podem limitar quais repositórios podem acessar segredos da organização. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}As regras de proteção do ambiente podem exigir a aprovação manual de um fluxo de trabalho para acessar segredos de ambiente. {% endif %}Para obter mais informações, consulte "[Segredos criptografados](/actions/reference/encrypted-secrets)".

#### Compartilhar arquivos entre trabalhos e fluxos de trabalho

{% data variables.product.prodname_actions %} inclui suporte integrado para o armazenamento de artefatos, permitindo que você compartilhe arquivos entre os trabalhos de um fluxo de trabalho. Você também pode salvar os arquivos resultantes e compartilhá-los com outros fluxos de trabalho. Para obter mais informações, consulte "[Compartilhar dados entre trabalhos](/actions/learn-github-actions/essential-features-of-github-actions#sharing-data-between-jobs)".

#### Hospedar seus próprios executores

Se os seus trabalhos exigirem hardware ou software específico, {% data variables.product.prodname_actions %} permitirá que você hospede seus próprios executores e envie seus trabalhos para eles processarem. {% data variables.product.prodname_actions %} também permite usar políticas para controlar como esses executores são acessados, concedendo acesso ao nível da organização ou do repositório. Para obter mais informações, consulte ["Hospedar seus próprios executores](/actions/hosting-your-own-runners)".

#### Trabalhos simultâneos e tempo de execução

Os trabalhos simultâneos e os tempos de execução do fluxo de trabalho em {% data variables.product.prodname_actions %} podem variar dependendo do seu plano de {% data variables.product.company_short %}. Para obter mais informações, consulte "[Limites de uso, cobrança e administração](/actions/reference/usage-limits-billing-and-administration)".

#### Usar diferentes linguagens em {% data variables.product.prodname_actions %}

Ao trabalhar com diferentes linguagens em {% data variables.product.prodname_actions %}, você pode criar uma etapa no seu trabalho para configurar as dependências da sua linguagem. Para obter mais informações sobre como trabalhar com uma linguagem em particular, consulte o guia específico:
  - [Criar e testar Node.js](/actions/guides/building-and-testing-nodejs)
  - [Criar e testar PowerShell](/actions/guides/building-and-testing-powershell)
  - [Criar e testar o Python](/actions/guides/building-and-testing-python)
  - [Criar e estar o Java com o Maven](/actions/guides/building-and-testing-java-with-maven)
  - [Criar e estar o Java com o Gradle](/actions/guides/building-and-testing-java-with-gradle)
  - [Criar e estar o Java com o Ant](/actions/guides/building-and-testing-java-with-ant)

### Executar scripts

{% data variables.product.prodname_actions %} pode usar as etapas de `executar` para executar scripts ou comandos de shell. Para usar um shell específico, você pode especificar o tipo de `shell` ao fornecer o caminho para o script. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

Por exemplo:

```yaml
steps:
  - name: Run build script
    run: ./.github/scripts/build.sh
    shell: bash
```

### Manuseio de erros em {% data variables.product.prodname_actions %}

Ao migrar para {% data variables.product.prodname_actions %}, existem diferentes abordagens para a manipulação de erros das quais você precisa estar ciente.

#### Manipulação de erros de script

{% data variables.product.prodname_actions %} interrompe um trabalho imediatamente se uma das etapas retornar um código de erro. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)".

#### Manipulação de erro de trabalho

{% data variables.product.prodname_actions %} usa condicionais do tipo `se` para executar trabalhos ou etapas em certas situações. Por exemplo, você pode executar um passo quando outro passo resulta em uma `failure()`. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#example-using-status-check-functions)".  Você também pode usar [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) para impedir que uma execução de um fluxo de trabalho seja interrompida quando um trabalho falhar.

### Migrar a sintaxe para condicionais e expressões

Para executar trabalhos sob expressões condicionais, o Travis CI e {% data variables.product.prodname_actions %} compartilham uma sintaxe condicional do tipo `se` similar. {% data variables.product.prodname_actions %} permite que você use a condicional do tipo `se` para evitar que um trabalho ou etapa seja executado, a menos que uma condição seja atendida. Para obter mais informações, consulte "[Contexto e sintaxe de expressão para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

Este exemplo demonstra como uma condicional do tipo `se` pode controlar se uma etapa é executada:

```yaml
jobs:
  conditional:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This step runs with str equals 'ABC' and num equals 123"
        if: env.str == 'ABC' && env.num == 123
```

### Migrar fases para etapas

Quando o Travis CI usa _fases_ para executar _etapas_, {% data variables.product.prodname_actions %} tem _etapas_ que executam _ações_. Você pode encontrar ações pré-criadas no [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions), ou você pode criar as suas próprias ações. Para obter mais informações, consulte "[Criar ações](/actions/building-actions)".

Abaixo, há um exemplo da sintaxe para cada sistema:

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
language: python
python:
  - "3.7"

script:
  - python script.py
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  run_python:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/setup-python@v2
        with:
          python-version: '3.7'
          architecture: 'x64'
      - run: python script.py
```
{% endraw %}
</td>
</tr>
</table>

### Memorizar dependências

O Travis CI e {% data variables.product.prodname_actions %} permitem que você armazene as as dependências em cache manualmente para reutilização posterior. Esse exemplo demonstra a sintaxe do cache para cada sistema.

<table>
<tr>
<th>
Travis CI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
language: node_js
cache: npm
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- nome: Módulos do nó da cache
  usa: actions/cache@v2
  com:
    caminho: ~/.npm
    key: v1-npm-deps-${{ hashFiles('**/package-lock.json') }}
    restore-keys: v1-npm-deps-
```
{% endraw %}
</td>
</tr>
</table>

O armazenamento em cache de {% data variables.product.prodname_actions %} só é aplicável a executores hospedados em {% data variables.product.prodname_dotcom %}.  Para obter mais informações, consulte "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Memorizar dependências para acelerar fluxos de trabalho</a>".

### Exemplos de tarefas comuns

Esta seção compara como {% data variables.product.prodname_actions %} e o Travis CI realizam tarefas comuns.

#### Configurar variáveis de ambiente

Você pode criar variáveis de ambiente personalizadas em uma tarefa de {% data variables.product.prodname_actions %}. Por exemplo:

<table>
<tr>
<th>
Travis CI
</th>
<th>
Fluxo de trabalho do {% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td>

```yaml
env:
  - MAVEN_PATH="/usr/local/maven"
```

</td>
<td>

```yaml
jobs:
  maven-build:
    env:
      MAVEN_PATH: '/usr/local/maven'
```

</td>
</tr>
</table>

#### Criar com Node.js

<table>
<tr>
<th>
Travis CI
</th>
<th>
Fluxo de trabalho do {% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td>
{% raw %}
```yaml
install:
  - npm install
script:
  - npm run build
  - npm test
```
{% endraw %}
</td>
<td>
{% raw %}
```yaml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v1
        with:
          node-version: '12.x'
      - run: npm install
      - run: npm run build
      - run: npm test
```
{% endraw %}
</td>
</tr>
</table>

### Próximas etapas

Para continuar aprendendo sobre os principais recursos de {% data variables.product.prodname_actions %}, consulte "[Aprender {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".
