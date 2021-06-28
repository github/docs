---
title: Memorizar dependências para acelerar os fluxos de trabalho
shortTitle: Memorizar dependências
intro: 'Para agilizar os seus fluxos de trabalho e torná-los mais eficientes, você pode criar e usar caches para dependências e outros arquivos reutilizados geralmente.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows
versions:
  free-pro-team: '*'
type: tutorial
topics:
  - Workflows
---

{% data reusables.actions.ae-beta %}

### Sobre a memorização das dependências do fluxo de trabalho

As execuções do fluxo de trabalho geralmente reutilizam as mesmas saídas ou dependências baixadas de uma execução para outra. Por exemplo, as ferramentas de gerenciamento de pacotes e de dependência, como, por exemplo, Maven, Gradle, npm e Yarn mantêm uma cache local de dependências baixadas.

Os trabalhos nos executores hospedados em {% data variables.product.prodname_dotcom %} começam em um ambiente virtual limpo e devem baixar as dependências todas as vezes, o que gera uma maior utilização da rede, maior tempo de execução e aumento dos custos. Para ajudar a acelerar o tempo que leva para recrear esses arquivos, {% data variables.product.prodname_dotcom %} pode memorizar as dependências que você usa frequentemente nos fluxos de trabalho.

Para memorizar as dependências para um trabalho, você precisará usar a ação `cache` do {% data variables.product.prodname_dotcom %}. A ação recupera uma cache identificada por uma chave única. Para obter mais informações, consulte [`ações/cache`](https://github.com/actions/cache). Se você estiver armazenando gems do Ruby, disso considere usar a ação mantida pelo Ruby, que pode armazenar em cache as instalações do pacote na iniciação. Para obter mais informações, consulte [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby#caching-bundle-install-automatically).

{% warning %}

**Alerta**: Recomendamos que você não armazene nenhuma informação confidencial na cache dos repositórios públicos. Por exemplo, as informações confidenciais podem incluir tokens de acesso ou credenciais de login armazenadas em um arquivo no caminho da cache. Além disso, os programas de interface da linha de comando (CLI) como o `login do Docker` pode salvar as credenciais de acesso em um arquivo de configuração. Qualquer pessoa com acesso de leitura pode criar um pull request em um repositório e acessar o conteúdo da cache. As bifurcações de um repositório também podem criar pull requests no branch-base e acessar as caches no branch-base.

{% endwarning %}

### Comparando artefatos e memorização de dependência

Os artefatos são similares, pois fornecem a habilidade de armazenar arquivos em {% data variables.product.prodname_dotcom %}, mas cada recurso oferece usos diferentes e não podem ser usados de forma intercambiável.

- Use a memorização quando desejar reutilizar os arquivos que não mudam com frequência entre trabalhos ou execuções de fluxos de trabalho.
- Use artefatos quando desejar salvar arquivos produzidos por um trabalho a ser visualizado após a conclusão de um fluxo de trabalho. Para obter mais informações, consulte "[Dados recorrentes do fluxo de trabalho que usam artefatos](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

### Restrições para acessar uma cache

Com `v2` da ação da `cache`, você pode acessar a cache nos fluxos de trabalho ativados por qualquer evento que tem um `GITHUB_REF`. Se você estiver usando `v1` da ação da `cache`, você só poderá acessar a cache em fluxos de trabalho ativados por eventos de `push` e `pull_request`, exceto para o evento `fechado` de `pull_request`. Para obter mais informações, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows)".

Um fluxo de trabalho pode acessar e restaurar um cache criado no branch atual, no branch de base (incluindo branches base de repositórios bifurcados) ou no branch-padrão (geralmente `principal`). Por exemplo, um cache criado no branch-padrão pode ser acessado a partir de qualquer pull request. Além disso, se o branch `feature-b` tiver o branch de base `feature-a`, um fluxo de trabalho acionado em `feature-b` teria acesso a caches criados no branch-padrão (`principal`), `feature-a` e `feature-b`.

As restrições de acesso fornecem o isolamento da cache e a segurança ao criar um limite lógico entre os diferentes fluxos e branches. Por exemplo, um cache criado para o branch `feature-a` (com a base no `principal`) não seria acessível para um pull request para o branch `feature-b` (com a base no `principal`).

### Usar a ação `cache`

A ação `cache` tentará restaurar uma cache com base na `chave` que você fornecer. Quando a ação encontrar uma cache, ela irá restaurar os arquivos memorizados no `caminho` que você configurar.

Se não houver uma correspondência perfeita, a ação criará uma nova entrada da cache se o trabalho for concluído com sucesso. A nova cache usará a `chave` que você forneceu e conterá os arquivos no diretório do `caminho`.

Como alternativa, você pode fornecer uma lista de `chaves de restauração` a serem usadas quando a `chave` não corresponder à cache existente. Uma lista de `chaves de restauração` é importante quando você está tentando restaurar uma cache de outro branch, pois `as chaves de restauração`<code podem corresponder parcialmente às chaves da cache. Para obter mais informações sobre a correspondência das `chaves de restauração`, consulte "[Correspondendo uma chave da cache](#matching-a-cache-key)".

Para obter mais informações, consulte [`ações/cache`](https://github.com/actions/cache).

#### Parâmetros de entrada para a ação da `cache`

- `key`: **Obrigatório** A chave criada ao salvar uma cache e a chave usada para pesquisar uma cache. Pode ser qualquer combinação de variáveis, valores de contexto, strings estáticas e funções. As chaves têm um tamanho máximo de 512 caracteres e as chaves maiores que o tamanho máximo gerarão uma falha na ação.
- ``de caminho : **Required** O caminho do arquivo no corredor para cache ou restauração. O caminho pode ser absoluto ou relativo com relação ao diretório de trabalho.
  - Os caminhos podem ser diretórios ou arquivos únicos. Os padrões de glob são compatíveis.
  - Com o `v2` da ação `cache`, é possível especificar um único caminho ou é possível adicionar vários caminhos em linhas separadas. Por exemplo:
    ```
    - name: Cache Gradle packages
      uses: actions/cache@v2
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
    ```
  - Com `v1` da ação da `cache`, somente um caminho único é compatível e deve ser um diretório. Você não pode armazenar um único arquivo.
- `chaves de restauração`: **Opcional** Uma lista ordenada de chaves alternativas a serem usadas para encontrar a cache se não ocorrer correspondência para a `chave`.

#### Parâmetros de saída para a ação da `cache`

- `cache-hit`: Um valor booleano para indicar que uma correspondência exata foi encontrada para a chave.

#### Exemplo do uso da ação da `cache`

Este exemplo cria uma nova cache quando são alterados os pacotes no arquivo `package-lock.json` ou quando é alterado o sistema operacional do executor. A chave da cache usa contextos e expressões para gerar uma chave que inclui o sistema operacional do executor e um hash SHA-256 do arquivo `package-lock.json` file.

{% raw %}
```yaml{:copy}
name: Caching with npm

on: push

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Cache node modules
        uses: actions/cache@v2
        env:
          cache-name: cache-node-modules
        with:
          # npm cache files are stored in `~/.npm` on Linux/macOS
          path: ~/.npm
          key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-build-${{ env.cache-name }}-
            ${{ runner.os }}-build-
            ${{ runner.os }}-

      - name: Install Dependencies
        run: npm install

      - name: Build
        run: npm build

      - name: Test
        run: npm test
```
{% endraw %}

O processo de a `chave` corresponder a uma cache existente é denominado correspondência e a ação restaura o arquivo memorizado no diretório do `caminho`.

O processo de a `chave` não corresponder a uma cache existente é denominado falha e cria-se uma nova cache se o trabalho for concluído com sucesso. Ao ocorrer uma falha da cache, a ação pesquisa chaves alternativas chamadas `chaves de restauração`.

1. Se você fornecer `chaves de restauração`, a ação da `cache` pesquisará, em seguida, todas as caches que correspondem à lista de `chaves de restauração`.
   - Se houver uma correspondência exata, a ação irá restaurar os arquivos na cache para o diretório do `caminho`.
   - Se não houver correspondências exatas, a ação pesquisará correspondências parciais das chaves de restauração. Quando uma ação encontra uma correspondência parcial, a última cache é restaurada para o diretório do `caminho`.
1. A ação da `cache` é concluída e a próxima etapa do fluxo de trabalho é executada no trabalho.
1. Se o trabalho for concluído com sucesso, a ação cria uma nova cache com o conteúdo do diretório do `caminho`.

Para memorizar os arquivos em mais de um diretório, você precisará de uma etapa que usa a ação da [`cache`](https://github.com/actions/cache) para cada diretório. Após criar uma cache, você não poderá alterar o conteúdo de uma cache existente, mas você poderá criar uma nova cache com uma nova chave.

#### Usar contextos para criar chaves da cache

Uma chave da cache pode incluir quaisquer contextos, funções, literais e operadores suportados por {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Contexto e sintaxe de expressão para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

Usar expressões para criar uma `chave` permite que você crie automaticamente uma nova cache quando as dependências forem alteradas. Por exemplo, você pode criar uma `chave` usando uma expressão que calcula o hash de um arquivo `package-lock.json` de npm.

{% raw %}
```yaml
npm-${{ hashFiles('package-lock.json') }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %} avalia a expressão `hash "package-lock.json"` para derivar a `chave` final.

```yaml
npm-d5ea0750
```

### Corresponder uma chave da cache

A ação da `cache` primeiro pesquisa correspondências da cache para a `chave` e para as `chaves de restauração` no branch que contém a execução do fluxo de trabalho. Se não houver correspondências no branch atual, a ação da `cache` pesquisa a `chave` e as `chaves de restauração` no branch-pai e nos branches upstream.

Você pode fornecer uma lista de chaves de restauração a serem usadas quando houver uma falha de cache na `chave`. Você pode criar múltiplas chaves de restauração ordenadas da mais específica para a menos específica. A ação da `cache` pesquisa as `chaves de restauração` em ordem sequencial. Quando uma chave não corresponde diretamente, a ação pesquisa as chaves prefixadas com a chave de restauração. Se houver múltiplas correspondências parciais para uma chave de restauração, a ação retornará a cache criada por último.

#### Exemplo do uso de múltiplas chaves de restauração

{% raw %}
```yaml
restore-keys: |
  npm-foobar-${{ hashFiles('package-lock.json') }}
  npm-foobar-
  npm-
```
{% endraw %}

O executor avalia as expressões, que resolvem essas `chaves de restauração`:

{% raw %}
```yaml
restore-keys: |
  npm-foobar-d5ea0750
  npm-foobar-
  npm-
```
{% endraw %}

A chave de restauração `npm-foobar-` corresponde a qualquer chave que começa com a string `npm-foobar-`. Por exemplo, ambas as chaves `npm-foobar-fd3052de` e `npm-foobar-a9b253ff` correspondem à chave de restauração. Será usada a cache com a data de criação mais recente. As chaves neste exemplo são pesquisadas na ordem a seguir:

1. **`npm-foobar-d5ea0750`** corresponde a um hash específico.
1. **`npm-foobar-`** corresponde a chaves da cache prefixadas com `npm-foobar-`.
1. **`npm-`** corresponde a chaves prefixadas com `npm-`.

##### Exemplo de prioridade de pesquisa

```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```

Por exemplo, se um pull request contiver um branch de`recurso` (escopo atual) e atingir o branch-padrão (`principal`), a ação pesquisará a `chave` e as `chaves de restauração` na ordem a seguir:

1. Chave `npm-feature-d5ea0750` no escopo do branch `de recurso`
1. Chave `npm-feature-` no escopo do ramo `de recurso`
2. Chave `npm-` no escopo do branch `de recurso`
1. Chave `npm-feature-d5ea0750` no escopo do branc `principal`
3. Chave `npm-feature-` no escopo do branch `principal`
4. Chave `npm` no escopo do branch `principal`

### Limites de uso e política de eliminação

{% data variables.product.prodname_dotcom %} removerá todas as entradas da cache não acessadas há mais de 7 dias. Não há limite para o número de caches que você pode armazenar, mas o limite do tamanho total de todas as caches em um repositório é 5 GB. Se você exceder este limite, {% data variables.product.prodname_dotcom %} salvará a sua cache, mas começará a eliminar as caches até que o tamanho total seja inferior a 5 GB.
