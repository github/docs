---
title: Fazer a migração do GitLab CI/CD para o GitHub Actions
intro: '{% data variables.product.prodname_actions %} e GitLab CI/CD compartilham várias semelhanças de configuração, o que faz com que a migração para {% data variables.product.prodname_actions %} seja relativamente simples.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introdução

O GitLab CI/CD e {% data variables.product.prodname_actions %} permitem criar fluxos de trabalho que criam, testam, publicam, lançam e implantam códigos automaticamente. O GitLab CI/CD e {% data variables.product.prodname_actions %} compartilham algumas semelhanças na configuração do fluxo de trabalho:

- Os arquivos de configuração do fluxo de trabalho são gravados YAML e armazenados no repositório do código.
- Os fluxos de trabalho incluem um ou mais trabalhos.
- Os trabalhos incluem uma ou mais etapas ou comandos individuais.
- Os trabalhos podem ser executados em máquinas gerenciadas ou auto-hospedadas.

Existem algumas diferenças e este guia irá mostrar a você as diferenças importantes para que você possa fazer a migração do seu fluxo de trabalho para {% data variables.product.prodname_actions %}.

### Trabalhos

Os trabalhos no GitLab CI/CD são muito semelhantes aos trabalhos em {% data variables.product.prodname_actions %}. Em ambos os sistemas, os trabalhos têm as características a seguir:

* Os trabalhos contêm uma série de etapas ou scripts executados sequencialmente.
* Os trabalhos podem ser executados em máquinas separadas ou em contêineres separados.
* Por padrão, os trabalhos executados em paralelo, mas podem ser configuradas para serem executados em sequência.

Você pode executar um script ou um comando de shell em um trabalho. No GitLab CI/CD, as etapas do script são especificadas usando a chave do `script`. Em {% data variables.product.prodname_actions %}, todos os scripts são especificados usando a chave `executar`.

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
{% raw %}
```yaml
jobs:
  job1:
    steps:
    - uses: actions/checkout@v2
    - run: echo "Run your script here"
```
{% endraw %}
</td>
</tr>
</table>

### Executores

Os executores são máquinas nas quais os trabalhos são executados. Tanto GitLab CI/CD quanto {% data variables.product.prodname_actions %} oferecem variantes de executores gerenciadas e auto-hospedadas. No GitLab CI/CD, as `tags` são usadas para executar trabalhos em diferentes plataformas, enquanto em {% data variables.product.prodname_actions %} é feito com a chave `runs-on`.

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

linux_job:
  tags:
    - linux
  script:
    - echo "Hello, $USER!"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
windows_job:
  runs-on : windows-latest
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

Para obter mais informações, consulte "[Sintaxe do fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)."

### Imagens do Docker

Tanto o GitLab CI/CD quanto o {% data variables.product.prodname_actions %} são compatíveis com trabalhos executados em uma imagem do Docker. No GitLab CI/CD, as imagens do Docker são definidas com uma chave de `imagem`, enquanto em {% data variables.product.prodname_actions %} isso é feito com a chave `contêiner`.

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

Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer)".

### Condição e sintaxe de expressão

O GitLab CI/CD usa as `regras` para determinar se um trabalho será executado para uma condição específica. {% data variables.product.prodname_actions %} usa a palavra-chave `se` para evitar que um trabalho seja executado a menos que uma condição seja atendida.

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
    - echo "Deply to production server"
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
      - run: echo "Deply to production server"
```
{% endraw %}
</td>
</tr>
</table>

Para obter mais informações, consulte "[Contexto e sintaxe de expressão para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

### Dependências entre trabalhos

Tanto o GitLab CI/CD quanto o {% data variables.product.prodname_actions %} permitem que você defina dependências para um trabalho. Em ambos os sistemas, os trabalhos executados em paralelo por padrão, mas dependências de trabalho em {% data variables.product.prodname_actions %} podem ser especificados explicitamente com a chave `needs`. O GitLab CI/CD também tem o conceito de `stages`, em que os trabalhos em um estágio são executados paralelamente, mas o próximo stage terá início depois de terminados todos os trabalho no stage anterior. Você pode recriar esse cenário em {% data variables.product.prodname_actions %} com a chave `needs`.

Abaixo, há um exemplo da sintaxe para cada sistema. Os fluxos de trabalho iniciam com dois trabalhos denominados `build_a` e `build_b` sendo executados paralelamente e, após a conclusão desses trabalhos, será executado outro trabalho denominado `test_ab`. Por fim, quando `test_ab` é concluído, o trabalho `deploy_ab` será executado.

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

build_a:
  stage: build
  script:
    - echo "This job will run first."

build_b:
  stage: build
  script:
    - echo "This job will run first, in parallel with build_a."

test_ab:
  stage: test
  script:
    - echo "This job will run after build_a and build_b have finished."

deploy_ab:
  stage: deploy
  script:
    - echo "This job will run after test_ab is complete"
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

Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)".

### Agendar fluxos de trabalho

Tanto o GitLab CI/CD quanto o {% data variables.product.prodname_actions %} permitem que você execute fluxos de trabalho em um intervalo específico. No GitLab CI/CD, a programação de pipeline é configurada com a interface do usuário, enquanto em {% data variables.product.prodname_actions %} você pode acionar um fluxo de trabalho em um intervalo programado com a chave "ligado".

Para obter mais informações, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#scheduled-events)".

### Variáveis e segredos

O GitLab CI/CD e {% data variables.product.prodname_actions %} são compatíveis com as variáveis de ambiente no pipeline u no arquivo de configuração do fluxo de trabalho e ao criar segredos usando o GitLab ou a interface de usuário de {% data variables.product.product_name %}.

Para obter mais informações, consulte "[Variáveis de ambiente](/actions/reference/environment-variables)" e "[Segredos criptografados](/actions/reference/encrypted-secrets)".

### Armazenar em cache

GitLab CI/CD e {% data variables.product.prodname_actions %} fornecem um método no arquivo de configuração para armazenar os arquivos do fluxo de trabalho manualmente.

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

cache:
  key: $CI_COMMIT_REF_SLUG
  paths:
    - .npm/

before_script:
  - npm ci --cache .npm --prefer-offline

test_async:
  script:
    - node ./specs/start.js ./specs/async.spec.js
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  test_async:
  - name: Cache node modules
    uses: actions/cache@v2
    with:
      path: ~/.npm
      key: v1-npm-deps-${{ hashFiles('**/package-lock.json') }}
      restore-keys: v1-npm-deps-
```
{% endraw %}
</td>
</tr>
</table>

Para obter mais informações, consulte "[Memorizar dependências para acelerar fluxos de trabalho](/actions/guides/caching-dependencies-to-speed-up-workflows)".

### Artefatos

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
{% raw %}
```yaml
- name: Upload math result for job 1
  uses: actions/upload-artifact@v2
  with:
    name: homework
    path: math-homework.txt
```
{% endraw %}
</td>
</tr>
</table>

Para obter mais informações, consulte "[Armazenar dados de fluxo de trabalho como artefatos](/actions/guides/storing-workflow-data-as-artifacts)".

### Bancos de dados e contêineres de serviço

Ambos os sistemas permitem que você inclua contêineres adicionais para bases de dados, memorização ou outras dependências.

No GitLab CI/CD, um contêiner para o trabalho é especificado com a chave `imagem`, enquanto {% data variables.product.prodname_actions %} usa a chave `contêiner`. Nos dois sistemas, os contêineres de serviço adicionais são especificados com a chave </code>serviços.</p>

<p spaces-before="0">Abaixo, há um exemplo da sintaxe para cada sistema:</p>

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
{% raw %}
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
        uses: actions/checkout@v2

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
{% endraw %}
</td>
</tr>
</table>

<p spaces-before="0">Para obter mais informações, consulte "<a href="/actions/guides/about-service-containers">Sobre contêineres de serviço</a>."</p>
