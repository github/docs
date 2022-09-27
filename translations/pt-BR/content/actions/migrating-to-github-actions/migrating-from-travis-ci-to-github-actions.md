---
title: Migrar do Travis CI para o GitHub Actions
intro: '{% data variables.product.prodname_actions %} e o Travis CI compartilham várias semelhanças, o que ajuda a tornar relativamente fácil a migração para {% data variables.product.prodname_actions %}.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-travis-ci-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Travis CI
  - Migration
  - CI
  - CD
shortTitle: Migrate from Travis CI
ms.openlocfilehash: 00da8dc259ef4de197faffd8db654dd536c1c237
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '146178988'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este guia ajuda a você a fazer a migração do Travis CI para {% data variables.product.prodname_actions %}. Ele compara os seus conceitos e sintaxe, descreve as semelhanças e demonstra as suas diferentes abordagens em relação às tarefas comuns.

## Antes de começar

Antes de iniciar sua migração para {% data variables.product.prodname_actions %}, seria importante familiarizar-se com a forma como funciona:

- Para ver um exemplo rápido que demonstra um trabalho do {% data variables.product.prodname_actions %}, confira "[Guia de início rápido do {% data variables.product.prodname_actions %}](/actions/quickstart)".
- Para saber mais sobre os conceitos essenciais do {% data variables.product.prodname_actions %}, confira "[Introdução ao GitHub Actions](/actions/learn-github-actions/introduction-to-github-actions)".

## Comparar a execução do trabalho

Para dar controle a você sobre quando as tarefas de CI são executadas, um _fluxo de trabalho_ do {% data variables.product.prodname_actions %} usa _trabalhos_ que são executados em paralelo por padrão. Cada trabalho contém _etapas_ que são executadas em uma sequência definida por você. Se você precisa executar a configuração e a limpeza de ações para um trabalho, você pode definir etapas em cada trabalho para executá-las.

## Principais semelhanças

{% data variables.product.prodname_actions %} e o Travis CI compartilham certas semelhanças e entendê-las antecipadamente pode ajudar a agilizar o processo de migração.

### Usar a sintaxe de YAML

O Travis CI e o {% data variables.product.prodname_actions %} usam o YAML para criar trabalhos e fluxos de trabalho, e esses arquivos são armazenados no repositório do código. Para obter mais informações sobre como o {% data variables.product.prodname_actions %} usa o YAML, confira ["Como criar um arquivo de fluxo de trabalho](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)".

### Variáveis de ambiente personalizadas

O Travis CI permite que você defina variáveis de ambiente e compartilhe-as entre stages. Da mesma forma, {% data variables.product.prodname_actions %} permite definir variáveis de ambiente para uma etapa, um trabalho ou um fluxo de trabalho. Para obter mais informações, confira "[Variáveis de ambiente](/actions/reference/environment-variables)".

### Variáveis de ambiente padrão

O Travis CI e {% data variables.product.prodname_actions %} incluem variáveis de ambiente padrão que você pode usar nos seus arquivos de YAML. Para o {% data variables.product.prodname_actions %}, você poderá vê-los listados em "[Variáveis de ambiente padrão](/actions/reference/environment-variables#default-environment-variables)".

### Processamento paralelo do trabalho

O Travis CI pode usar `stages` para executar trabalhos em paralelo. Da mesma forma, o {% data variables.product.prodname_actions %} executa `jobs` em paralelo. Para obter mais informações, confira "[Como criar trabalhos dependentes](/actions/learn-github-actions/managing-complex-workflows#creating-dependent-jobs)".

### Notificações de status

O Travis CI e {% data variables.product.prodname_actions %} são compatíveis com selos de status, o que permite que você indique se uma criação está sendo aprovada ou falhando.
Para obter mais informações, confira ["Como adicionar uma notificação de status de fluxo de trabalho ao seu repositório](/actions/managing-workflow-runs/adding-a-workflow-status-badge)".

### Usando uma matriz

O Travis CI e {% data variables.product.prodname_actions %} são compatíveis com uma matriz, o que permite que você realize testes usando combinações de sistemas operacionais e pacotes de software. Para obter mais informações, confira "[Como usar uma matriz para seus trabalhos](/actions/using-jobs/using-a-matrix-for-your-jobs)".

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

### Apontar para branches específicos

O Travis CI e {% data variables.product.prodname_actions %} permitem que você aponte a sua CI para um branch específico. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)".

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

### Verificar submódulos

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

```yaml
- uses: {% data reusables.actions.action-checkout %}
  with:
    submodules: false
```

</td>
</tr>
</table>

### Usando variáveis de ambiente em uma matriz

O Travis CI e {% data variables.product.prodname_actions %} podem adicionar variáveis de ambiente personalizadas a uma matriz de teste, que permite que você faça referência à variável em uma etapa posterior.

No {% data variables.product.prodname_actions %}, você pode usar a chave `include` para adicionar variáveis de ambiente personalizadas a uma matriz. {% data reusables.actions.matrix-variable-example %}

## Principais recursos em {% data variables.product.prodname_actions %}

Ao fazer a migração do Travis CI, considere os recursos principais a seguir em {% data variables.product.prodname_actions %}:

### Armazenar segredos

{% data variables.product.prodname_actions %} permite armazenar segredos e referenciá-los em seus trabalhos. Organizações de {% data variables.product.prodname_actions %} podem limitar quais repositórios podem acessar segredos da organização. As regras de proteção de ambiente podem exigir a aprovação manual de um fluxo de trabalho para acessar segredos de ambiente. Para obter mais informações, confira "[Segredos criptografados](/actions/reference/encrypted-secrets)".

### Compartilhar arquivos entre trabalhos e fluxos de trabalho

{% data variables.product.prodname_actions %} inclui suporte integrado para o armazenamento de artefatos, permitindo que você compartilhe arquivos entre os trabalhos de um fluxo de trabalho. Você também pode salvar os arquivos resultantes e compartilhá-los com outros fluxos de trabalho. Para obter mais informações, confira "[Como compartilhar dados entre trabalhos](/actions/learn-github-actions/essential-features-of-github-actions#sharing-data-between-jobs)".

### Hospedar seus próprios executores

Se os seus trabalhos exigirem hardware ou software específico, {% data variables.product.prodname_actions %} permitirá que você hospede seus próprios executores e envie seus trabalhos para eles processarem. {% data variables.product.prodname_actions %} também permite usar políticas para controlar como esses executores são acessados, concedendo acesso ao nível da organização ou do repositório. Para obter mais informações, confira ["Como hospedar seus executores](/actions/hosting-your-own-runners)".

{% ifversion fpt or ghec %}

### Trabalhos simultâneos e tempo de execução

Os trabalhos simultâneos e os tempos de execução do fluxo de trabalho em {% data variables.product.prodname_actions %} podem variar dependendo do seu plano de {% data variables.product.company_short %}. Para obter mais informações, confira "[Limites de uso, cobrança e administração](/actions/reference/usage-limits-billing-and-administration)".

{% endif %}

### Usar diferentes linguagens em {% data variables.product.prodname_actions %}

Ao trabalhar com diferentes linguagens em {% data variables.product.prodname_actions %}, você pode criar uma etapa no seu trabalho para configurar as dependências da sua linguagem. Para obter mais informações sobre como trabalhar com uma linguagem em particular, consulte o guia específico:
  - [Como compilar e testar Node.js](/actions/guides/building-and-testing-nodejs)
  - [Como compilar e testar o Python](/actions/guides/building-and-testing-python)
  - [Como compilar e testar o PowerShell](/actions/guides/building-and-testing-powershell)
  - [Como compilar e testar o Java com o Maven](/actions/guides/building-and-testing-java-with-maven)
  - [Como compilar e testar o Java com o Gradle](/actions/guides/building-and-testing-java-with-gradle)
  - [Como compilar e testar o Java com o Ant](/actions/guides/building-and-testing-java-with-ant)

## Execução de scripts

O {% data variables.product.prodname_actions %} pode usar as etapas `run` para executar scripts ou comandos de shell. Para usar um shell específico, você pode especificar o tipo `shell` ao fornecer o caminho para o script. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

Por exemplo:

```yaml
steps:
  - name: Run build script
    run: ./.github/scripts/build.sh
    shell: bash
```

## Manuseio de erros em {% data variables.product.prodname_actions %}

Ao migrar para {% data variables.product.prodname_actions %}, existem diferentes abordagens para a manipulação de erros das quais você precisa estar ciente.

### Manipulação de erros de script

{% data variables.product.prodname_actions %} interrompe um trabalho imediatamente se uma das etapas retornar um código de erro. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)".

### Manipulação de erro de trabalho

O {% data variables.product.prodname_actions %} usa condicionais `if` para executar trabalhos ou etapas em certas situações. Por exemplo, você poderá executar uma etapa quando outra etapa resultar em uma `failure()`. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#example-using-status-check-functions)".  Use também [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) para impedir que uma execução de fluxo de trabalho seja interrompida em caso de falha de um trabalho.

## Migrar a sintaxe para condicionais e expressões

Para executar trabalhos sob expressões condicionais, o Travis CI e o {% data variables.product.prodname_actions %} compartilham uma sintaxe similar do condicional `if`. O {% data variables.product.prodname_actions %} permite que você use a condicional `if` para evitar que uma etapa ou um trabalho seja executado, a menos que uma condição seja atendida. Para obter mais informações, confira "[Expressões](/actions/learn-github-actions/expressions)".

Este exemplo demonstra como um condicional `if` pode controlar o fato de uma etapa ser executada:

```yaml
jobs:
  conditional:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This step runs with str equals 'ABC' and num equals 123"
        if: env.str == 'ABC' && env.num == 123
```

## Migrar fases para etapas

Enquanto o Travis CI usa _fases_ para executar _etapas_, o {% data variables.product.prodname_actions %} contém _etapas_ que executam _ações_. Encontre ações predefinidas no [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) ou criar suas ações. Para obter mais informações, confira "[Como criar ações](/actions/building-actions)".

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

```yaml
jobs:
  run_python:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: '3.7'
          architecture: 'x64'
      - run: python script.py
```

</td>
</tr>
</table>

## Memorizar dependências

O Travis CI e {% data variables.product.prodname_actions %} permitem que você armazene as as dependências em cache manualmente para reutilização posterior.

{% ifversion actions-caching %}

Esse exemplo demonstra a sintaxe do cache para cada sistema.

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

```yaml
- name: Cache node modules
  uses: {% data reusables.actions.action-cache %}
  with:
    path: ~/.npm
    key: {% raw %}v1-npm-deps-${{ hashFiles('**/package-lock.json') }}{% endraw %}
    restore-keys: v1-npm-deps-
```

</td>
</tr>
</table>

{% else %}

{% data reusables.actions.caching-availability %}

{% endif %}

## Exemplos de tarefas comuns

Esta seção compara como {% data variables.product.prodname_actions %} e o Travis CI realizam tarefas comuns.

### Configurar variáveis de ambiente

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

### Criar com Node.js

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

```yaml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '12.x'
      - run: npm install
      - run: npm run build
      - run: npm test
```

</td>
</tr>
</table>

## Próximas etapas

Para continuar aprendendo mais sobre os principais recursos do {% data variables.product.prodname_actions %}, confira "[Aprenda a usar o {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".
