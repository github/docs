---
title: Fazer a migração do GitLab CI/CD para o GitHub Actions
intro: '{% data variables.product.prodname_actions %} e GitLab CI/CD compartilham várias semelhanças de configuração, o que faz com que a migração para {% data variables.product.prodname_actions %} seja relativamente simples.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-gitlab-cicd-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - GitLab
  - Migration
  - CI
  - CD
shortTitle: Migrate from GitLab CI/CD
ms.openlocfilehash: d0d5f2cae928f95b1a614826f270342f376db0de
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178980'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

O GitLab CI/CD e {% data variables.product.prodname_actions %} permitem criar fluxos de trabalho que criam, testam, publicam, lançam e implantam códigos automaticamente. O GitLab CI/CD e {% data variables.product.prodname_actions %} compartilham algumas semelhanças na configuração do fluxo de trabalho:

- Os arquivos de configuração do fluxo de trabalho são gravados YAML e armazenados no repositório do código.
- Os fluxos de trabalho incluem um ou mais trabalhos.
- Os trabalhos incluem uma ou mais etapas ou comandos individuais.
- Os trabalhos podem ser executados em máquinas gerenciadas ou auto-hospedadas.

Existem algumas diferenças e este guia irá mostrar a você as diferenças importantes para que você possa fazer a migração do seu fluxo de trabalho para {% data variables.product.prodname_actions %}.

## Trabalhos

Os trabalhos no GitLab CI/CD são muito semelhantes aos trabalhos em {% data variables.product.prodname_actions %}. Em ambos os sistemas, os trabalhos têm as características a seguir:

* Os trabalhos contêm uma série de etapas ou scripts executados sequencialmente.
* Os trabalhos podem ser executados em máquinas separadas ou em contêineres separados.
* Por padrão, os trabalhos executados em paralelo, mas podem ser configuradas para serem executados em sequência.

Você pode executar um script ou um comando de shell em um trabalho. Na CI/CD do GitLab, as etapas de script são especificadas por meio da chave `script`. No {% data variables.product.prodname_actions %}, todos os scripts são especificados por meio da chave `run`.

Abaixo, há um exemplo da sintaxe para cada sistema:

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
job1:
  variables:
    GIT_CHECKOUT: "true"
  script:
    - echo "Run your script here"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  job1:
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: echo "Run your script here"
```

</td>
</tr>
</table>

## Executores

Os executores são máquinas nas quais os trabalhos são executados. Tanto GitLab CI/CD quanto {% data variables.product.prodname_actions %} oferecem variantes de executores gerenciadas e auto-hospedadas. Na CI/CD do GitLab, `tags` são usadas para executar trabalhos em diferentes plataformas, enquanto no {% data variables.product.prodname_actions %}, isso é feito com a chave `runs-on`.

Abaixo, há um exemplo da sintaxe para cada sistema:

<table>
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
windows_job:
  tags:
    - windows
  script:
    - echo Hello, %USERNAME%!

linux_job: tags:
    - linux script:
    - echo "Hello, $USER!"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
windows_job:
  runs-on: windows-latest
  steps:
    - run: echo Hello, %USERNAME%!

linux_job:
  runs-on: ubuntu-latest
  steps:
    - run: echo "Hello, $USER!"
```
{% endraw %}
</td>
</tr>
</table>

Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)".

## Docker images

Tanto o GitLab CI/CD quanto o {% data variables.product.prodname_actions %} são compatíveis com trabalhos executados em uma imagem do Docker. Na CI/CD do GitLab, as imagens do Docker são definidas com uma chave `image`, enquanto no {% data variables.product.prodname_actions %} isso é feito com a chave `container`.

Abaixo, há um exemplo da sintaxe para cada sistema:

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
my_job:
  image: node:10.16-jessie
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  my_job:
    container: node:10.16-jessie
```
{% endraw %}
</td>
</tr>
</table>

Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer)".

## Condição e sintaxe de expressão

A CI/CD do GitLab usa `rules` para determinar se um trabalho será executado para uma condição específica. O {% data variables.product.prodname_actions %} usa a palavra-chave `if` para impedir que um trabalho seja executado, a menos que uma condição seja atendida.

Abaixo, há um exemplo da sintaxe para cada sistema:

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
deploy_prod:
  stage: deploy
  script:
    - echo "Deploy to production server"
  rules:
    - if: '$CI_COMMIT_BRANCH == "master"'
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  deploy_prod:
    if: contains( github.ref, 'master')
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploy to production server"
```
{% endraw %}
</td>
</tr>
</table>

Para obter mais informações, confira "[Expressões](/actions/learn-github-actions/expressions)".

## Dependências entre trabalhos

Tanto o GitLab CI/CD quanto o {% data variables.product.prodname_actions %} permitem que você defina dependências para um trabalho. Nos dois sistemas, os trabalhos são executados em paralelo por padrão, mas as dependências de trabalho no {% data variables.product.prodname_actions %} podem ser especificadas explicitamente com a chave `needs`. A CI/CD do GitLab também tem um conceito de `stages`, em que os trabalhos em uma fase são executados simultaneamente, mas a próxima fase será iniciada quando todos os trabalhos da fase anterior tiverem sido concluídos. Você pode recriar esse cenário no {% data variables.product.prodname_actions %} com a chave `needs`.

Abaixo, há um exemplo da sintaxe para cada sistema. Os fluxos de trabalho começam com dois trabalhos chamados `build_a` e `build_b` em execução em paralelo e, quando esses trabalhos forem concluídos, outro trabalho chamado `test_ab` será executado. Por fim, quando `test_ab` é concluído, o trabalho `deploy_ab` será executado.

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
stages:
  - build
  - test
  - deploy

build_a: stage: build script:
    - echo "Esse trabalho será executado primeiro".

build_b: stage: build script:
    - echo "Esse trabalho será executado primeiro, em paralelo com build_a".

test_ab: stage: test script:
    - echo "Esse trabalho será executado depois que build_a e build_b forem concluídos".

deploy_ab: stage: deploy script:
    - echo "Esse trabalho será executado após a conclusão de test_ab"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  build_a:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first."

  build_b:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first, in parallel with build_a"

  test_ab:
    runs-on: ubuntu-latest
    needs: [build_a,build_b]
    steps:
      - run: echo "This job will run after build_a and build_b have finished"

  deploy_ab:
    runs-on: ubuntu-latest
    needs: [test_ab]
    steps:
      - run: echo "This job will run after test_ab is complete"
```
{% endraw %}
</td>
</tr>
</table>

Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)".

## Agendar fluxos de trabalho

Tanto o GitLab CI/CD quanto o {% data variables.product.prodname_actions %} permitem que você execute fluxos de trabalho em um intervalo específico. No GitLab CI/CD, a programação de pipeline é configurada com a interface do usuário, enquanto em {% data variables.product.prodname_actions %} você pode acionar um fluxo de trabalho em um intervalo programado com a chave "ligado".

Para obter mais informações, confira "[Eventos que disparam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#scheduled-events)".

## Variáveis e segredos

O GitLab CI/CD e {% data variables.product.prodname_actions %} são compatíveis com as variáveis de ambiente no pipeline ou no arquivo de configuração do fluxo de trabalho e ao criar segredos usando o GitLab ou a interface de usuário de {% data variables.product.product_name %}.

Para obter mais informações, confira "[Variáveis de ambiente](/actions/reference/environment-variables)" e "[Segredos criptografados](/actions/reference/encrypted-secrets)".

## Cache

GitLab CI/CD e {% data variables.product.prodname_actions %} fornecem um método no arquivo de configuração para armazenar os arquivos do fluxo de trabalho manualmente.

{% ifversion actions-caching %}

Abaixo, há um exemplo da sintaxe para cada sistema:

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
image: node:latest

cache: key: $CI_COMMIT_REF_SLUG paths:
    - .npm/

before_script:
  - npm ci --cache .npm --prefer-offline

test_async: script:
    - node ./specs/start.js ./specs/async.spec.js
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  test_async:
    runs-on: ubuntu-latest
    steps:
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

## Artifacts

Tanto o GitLab CI/CD quanto o {% data variables.product.prodname_actions %} podem fazer upload de arquivos e diretórios criados por um trabalho como artefatos. Em {% data variables.product.prodname_actions %}, os artefatos podem ser usados para persistir dados em vários trabalhos.

Abaixo, há um exemplo da sintaxe para cada sistema:

<table>
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
script:
artifacts:
  paths:
    - math-homework.txt
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- name: Upload math result for job 1
  uses: {% data reusables.actions.action-upload-artifact %}
  with:
    name: homework
    path: math-homework.txt
```

</td>
</tr>
</table>

Para obter mais informações, confira "[Como armazenar dados de fluxo de trabalho como artefatos](/actions/guides/storing-workflow-data-as-artifacts)".

## Bancos de dados e contêineres de serviço

Ambos os sistemas permitem que você inclua contêineres adicionais para bases de dados, memorização ou outras dependências.

Na CI/CD do GitLab, um contêiner para o trabalho é especificado com a chave `image`, enquanto o {% data variables.product.prodname_actions %} usa a chave `container`. Nos dois sistemas, contêineres de serviço adicionais são especificados com a chave `services`.

Abaixo, há um exemplo da sintaxe para cada sistema:

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
container-job:
  variables:
    POSTGRES_PASSWORD: postgres
    # The hostname used to communicate with the
    # PostgreSQL service container
    POSTGRES_HOST: postgres
    # The default PostgreSQL port
    POSTGRES_PORT: 5432
  image: node:10.18-jessie
  services:
    - postgres
  script:
    # Performs a clean installation of all dependencies
    # in the `package.json` file
    - npm ci
    # Runs a script that creates a PostgreSQL client,
    # populates the client with data, and retrieves data
    - node client.js
  tags:
    - docker
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:10.18-jessie

    services:
      postgres:
        image: postgres
        env:
          POSTGRES_PASSWORD: postgres

    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}

      # Performs a clean installation of all dependencies
      # in the `package.json` file
      - name: Install dependencies
        run: npm ci

      - name: Connect to PostgreSQL
        # Runs a script that creates a PostgreSQL client,
        # populates the client with data, and retrieves data
        run: node client.js
        env:
          # The hostname used to communicate with the
          # PostgreSQL service container
          POSTGRES_HOST: postgres
          # The default PostgreSQL port
          POSTGRES_PORT: 5432
```

</td>
</tr>
</table>

Para obter mais informações, confira "[Sobre os contêineres de serviço](/actions/guides/about-service-containers)".
