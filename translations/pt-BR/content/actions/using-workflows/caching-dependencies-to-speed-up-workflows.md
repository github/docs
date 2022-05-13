---
title: Memorizar dependências para acelerar os fluxos de trabalho
shortTitle: Memorizar dependências
intro: 'Para agilizar os seus fluxos de trabalho e torná-los mais eficientes, você pode criar e usar caches para dependências e outros arquivos reutilizados geralmente.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows
  - /actions/guides/caching-dependencies-to-speed-up-workflows
  - /actions/advanced-guides/caching-dependencies-to-speed-up-workflows
versions:
  feature: actions-caching
type: tutorial
topics:
  - Workflows
miniTocMaxHeadingLevel: 3
---

## Sobre a memorização das dependências do fluxo de trabalho

As execuções do fluxo de trabalho geralmente reutilizam as mesmas saídas ou dependências baixadas de uma execução para outra. Por exemplo, as ferramentas de gerenciamento de pacotes e de dependência, como, por exemplo, Maven, Gradle, npm e Yarn mantêm uma cache local de dependências baixadas.

{% ifversion fpt or ghec %} Jobs on {% data variables.product.prodname_dotcom %}-hosted runners start in a clean virtual environment and must download dependencies each time, causing increased network utilization, longer runtime, and increased cost. {% endif %}To help speed up the time it takes to recreate files like dependencies, {% data variables.product.prodname_dotcom %} can cache files you frequently use in workflows.

To cache dependencies for a job, you can use {% data variables.product.prodname_dotcom %}'s [`cache` action](https://github.com/actions/cache). The action creates and restores a cache identified by a unique key. Alternatively, if you are caching the package managers listed below, using their respective setup-* actions requires minimal configuration and will create and restore dependency caches for you.

<table>
<thead>
  <tr>
    <th>Gerentes de pacotes</th>
    <th>ação setup-* para cache</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>npm, yarn, pnpm</td>
    <td><a href="https://github.com/actions/setup-node#caching-global-packages-data">setup-node</a></td>
  </tr>
  <tr>
    <td>pip, pipenv</td>
    <td><a href="https://github.com/actions/setup-python#caching-packages-dependencies">setup-python</a></td>
  </tr>
  <tr>
    <td>gradle, maven</td>
    <td><a href="https://github.com/actions/setup-java#caching-packages-dependencies">setup-java</a></td>
  </tr>
  <tr>
    <td>ruby gems</td>
    <td><a href="https://github.com/ruby/setup-ruby#caching-bundle-install-automatically">setup-ruby</a></td>
  </tr>
</tbody>
</table>

{% warning %}

**Warning**: {% ifversion fpt or ghec %}Be mindful of the following when using caching with {% data variables.product.prodname_actions %}:

* {% endif %}Recomendamos que você não armazene nenhuma informação confidencial no cache. Por exemplo, as informações confidenciais podem incluir tokens de acesso ou credenciais de login armazenadas em um arquivo no caminho da cache. Além disso, os programas de interface da linha de comando (CLI) como o `login do Docker` pode salvar as credenciais de acesso em um arquivo de configuração. Qualquer pessoa com acesso de leitura pode criar um pull request em um repositório e acessar o conteúdo do cache. As bifurcações de um repositório também podem criar pull requests no branch-base e acessar as caches no branch-base.
{%- ifversion fpt or ghec %}
* Ao usar executores auto-hospedados, os caches de execução de fluxo de trabalho são armazenados na nuvem pertencente a {% data variables.product.company_short %}. Uma solução de armazenamento pertencente ao cliente só está disponível com {% data variables.product.prodname_ghe_server %}.
{%- endif %}

{% endwarning %}

{% data reusables.actions.comparing-artifacts-caching %}

Para obter mais informações sobre artefatos da execução do fluxo de trabalho, consulte "[Persistir dados de fluxo de trabalho usando artefatos](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

## Restrições para acessar uma cache

Um fluxo de trabalho pode acessar e restaurar um cache criado no branch atual, no branch de base (incluindo branches base de repositórios bifurcados) ou no branch-padrão (geralmente `principal`). Por exemplo, um cache criado no branch-padrão pode ser acessado a partir de qualquer pull request. Além disso, se o branch `feature-b` tiver o branch de base `feature-a`, um fluxo de trabalho acionado em `feature-b` teria acesso a caches criados no branch-padrão (`principal`), `feature-a` e `feature-b`.

As restrições de acesso fornecem o isolamento da cache e a segurança ao criar um limite lógico entre os diferentes branches. Por exemplo, um cache criado para o branch `feature-a` (com a base no `principal`) não seria acessível para um pull request para o branch `feature-b` (com a base no `principal`).

Vários fluxos de trabalho dentro de um repositório compartilham entradas de cache. Uma cache criada para um branch de um fluxo de trabalho pode ser acessada e restaurada a partir de outro fluxo de trabalho para o mesmo repositório e branch.

## Usar a ação `cache`

The [`cache` action](https://github.com/actions/cache) will attempt to restore a cache based on the `key` you provide. Quando a ação encontrar uma cache, ela irá restaurar os arquivos memorizados no `caminho` que você configurar.

Se não houver correspondência exata, a ação criará automaticamente um novo cache se o trabalho for concluído com sucesso. O novo cache usará a `chave` que você forneceu e que contém os arquivos que você especificar no `caminho`.

Como alternativa, você pode fornecer uma lista de `chaves de restauração` a serem usadas quando a `chave` não corresponder à cache existente. Uma lista de `chaves de restauração` é importante quando você está tentando restaurar uma cache de outro branch, pois `as chaves de restauração`<code podem corresponder parcialmente às chaves da cache. Para obter mais informações sobre a correspondência das `chaves de restauração`, consulte "[Correspondendo uma chave da cache](#matching-a-cache-key)".

### Parâmetros de entrada para a ação da `cache`

- `key`: **Obrigatório** A chave criada ao salvar uma cache e a chave usada para pesquisar uma cache. Pode ser qualquer combinação de variáveis, valores de contexto, strings estáticas e funções. As chaves têm um tamanho máximo de 512 caracteres e as chaves maiores que o tamanho máximo gerarão uma falha na ação.
- `path`: **Required** The path(s) on the runner to cache or restore.
  - É possível especificar um caminho único ou adicionar vários caminhos em linhas separadas. Por exemplo:

    ```
    - name: Cache Gradle packages
      uses: {% data reusables.actions.action-cache %}
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
    ```
  - Você pode especificar diretórios ou arquivos únicos e padrões glob são compatíveis.
  - Você pode especificar caminhos absolutos ou caminhos relativos ao diretório do espaço de trabalho.
- `restore-keys`: **Opcional** Uma string que contêm chaves de restauração alternativas, com cada uma colocada em uma nova linha. If no cache hit occurs for `key`, these restore keys are used sequentially in the order provided to find and restore a cache. Por exemplo:

  {% raw %}
  ```yaml
  restore-keys: |
    npm-feature-${{ hashFiles('package-lock.json') }}
    npm-feature-
    npm-
  ```
  {% endraw %}

### Parâmetros de saída para a ação da `cache`

- `cache-hit`: Um valor booleano para indicar que uma correspondência exata foi encontrada para a chave.

### Exemplo do uso da ação da `cache`

Este exemplo cria uma nova cache quando são alterados os pacotes no arquivo `package-lock.json` ou quando é alterado o sistema operacional do executor. A chave da cache usa contextos e expressões para gerar uma chave que inclui o sistema operacional do executor e um hash SHA-256 do arquivo `package-lock.json` file.

```yaml{:copy}
name: Caching with npm
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Cache node modules
        id: cache-npm
        uses: {% data reusables.actions.action-cache %}
        env:
          cache-name: cache-node-modules
        with:
          # npm cache files are stored in `~/.npm` on Linux/macOS
          path: ~/.npm
          key: {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-{% endraw %}
            {% raw %}${{ runner.os }}-build-{% endraw %}
            {% raw %}${{ runner.os }}-{% endraw %}

      - if: {% raw %}${{ steps.cache-npm.outputs.cache-hit == false }}{% endraw %}
        name: List the state of node modules
        continue-on-error: true
        run: npm list

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm build

      - name: Test
        run: npm test
```

When `key` matches an existing cache, it's called a _cache hit_, and the action restores the cached files to the `path` directory.

When `key` doesn't match an existing cache, it's called a _cache miss_, and a new cache is automatically created if the job completes successfully.

Quando a falha de um cache ocorrer, a ação também pesquisa `restore-keys` para quaisquer correspondências:

1. Se você fornecer `chaves de restauração`, a ação da `cache` pesquisará, em seguida, todas as caches que correspondem à lista de `chaves de restauração`.
   - Se houver uma correspondência exata, a ação irá restaurar os arquivos na cache para o diretório do `caminho`.
   - Se não houver correspondências exatas, a ação pesquisará correspondências parciais das chaves de restauração. Quando uma ação encontra uma correspondência parcial, a última cache é restaurada para o diretório do `caminho`.
1. A ação `cache` é concluída e a próxima etapa do trabalho é executada.
1. If the job completes successfully, the action automatically creates a new cache with the contents of the `path` directory.

For a more detailed explanation of the cache matching process, see "[Matching a cache key](#matching-a-cache-key)." Após criar uma cache, você não poderá alterar o conteúdo de uma cache existente, mas você poderá criar uma nova cache com uma nova chave.

### Usar contextos para criar chaves da cache

Uma chave da cache pode incluir quaisquer contextos, funções, literais e operadores suportados por {% data variables.product.prodname_actions %}. For more information, see "[Contexts](/actions/learn-github-actions/contexts)" and "[Expressions](/actions/learn-github-actions/expressions)."

Using expressions to create a `key` allows you to automatically create a new cache when dependencies change.

Por exemplo, você pode criar uma `chave` usando uma expressão que calcula o hash de um arquivo `package-lock.json` de npm. So, when the dependencies that make up the `package-lock.json` file change, the cache key changes and a new cache is automatically created.

{% raw %}
```yaml
npm-${{ hashFiles('package-lock.json') }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %} avalia a expressão `hash "package-lock.json"` para derivar a `chave` final.

```yaml
npm-d5ea0750
```

### Using the output of the `cache` action

You can use the output of the `cache` action to do something based on whether a cache hit or miss occurred. If there is a cache miss (an exact match for a cache was not found for the specified `key`), the `cache-hit` output is set to `false`.

In the example workflow above, there is a step that lists the state of the Node modules if a cache miss occurred:

```yaml
- if: {% raw %}${{ steps.cache-npm.outputs.cache-hit == false }}{% endraw %}
  name: List the state of node modules
  continue-on-error: true
  run: npm list
```

## Corresponder uma chave da cache

A ação da `cache` primeiro pesquisa correspondências da cache para a `chave` e para as `chaves de restauração` no branch que contém a execução do fluxo de trabalho. Se não houver correspondências no branch atual, a ação da `cache` pesquisa a `chave` e as `chaves de restauração` no branch-pai e nos branches upstream.

`restore-keys` allows you to specify a list of alternate restore keys to use when there is a cache miss on `key`. Você pode criar múltiplas chaves de restauração ordenadas da mais específica para a menos específica. The `cache` action searches the `restore-keys` in sequential order. Quando uma chave não corresponde diretamente, a ação pesquisa as chaves prefixadas com a chave de restauração. Se houver múltiplas correspondências parciais para uma chave de restauração, a ação retornará a cache criada por último.

### Exemplo do uso de múltiplas chaves de restauração

{% raw %}
```yaml
restore-keys: |
  npm-feature-${{ hashFiles('package-lock.json') }}
  npm-feature-
  npm-
```
{% endraw %}

O executor avalia as expressões, que resolvem essas `chaves de restauração`:

{% raw %}
```yaml
restore-keys: |
  npm-feature-d5ea0750
  npm-feature-
  npm-
```
{% endraw %}

The restore key `npm-feature-` matches any key that starts with the string `npm-feature-`. For example, both of the keys `npm-feature-fd3052de` and `npm-feature-a9b253ff` match the restore key. Será usada a cache com a data de criação mais recente. As chaves neste exemplo são pesquisadas na ordem a seguir:

1. **`npm-feature-d5ea0750`** matches a specific hash.
1. **`npm-feature-`** matches cache keys prefixed with `npm-feature-`.
1. **`npm-`** corresponde a chaves prefixadas com `npm-`.

#### Exemplo de prioridade de pesquisa

```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```

For example, if a pull request contains a `feature` branch and targets the default branch (`main`), the action searches for `key` and `restore-keys` in the following order:

1. Key `npm-feature-d5ea0750` in the `feature` branch
1. Key `npm-feature-` in the `feature` branch
1. Key `npm-` in the `feature` branch
1. Key `npm-feature-d5ea0750` in the `main` branch
1. Key `npm-feature-` in the `main` branch
1. Key `npm-` in the `main` branch

## Limites de uso e política de eliminação

{% data variables.product.prodname_dotcom %} removerá todas as entradas da cache não acessadas há mais de 7 dias. There is no limit on the number of caches you can store, but the total size of all caches in a repository is limited{% if actions-cache-policy-apis %}. By default, the limit is 10 GB per repository, but this limit might be different depending on policies set by your enterprise owners or repository administrators.{% else %} to 10 GB.{% endif %}

{% data reusables.actions.cache-eviction-process %}

{% if actions-cache-policy-apis %}
For information on changing the policies for the repository cache size limit, see "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-cache-storage-in-your-enterprise)" and "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository)."
{% endif %}

{% if actions-cache-management %}

## Gerenciando caches

Você pode usar a API REST de {% data variables.product.product_name %} para gerenciar seus caches. No momento, você pode usar a API para ver o uso ddo seu cache, cpodendo esperar outras funcionalidades em atualizações futuras. Para obter mais informações, consulte as "[Ações](/rest/reference/actions#cache)" na documentação da API REST.

{% endif %}
