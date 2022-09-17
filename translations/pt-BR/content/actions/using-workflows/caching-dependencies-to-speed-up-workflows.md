---
title: Memorizar dependências para acelerar os fluxos de trabalho
shortTitle: Caching dependencies
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
ms.openlocfilehash: 558d5f186ce75d9ace6f6c6be63e2e3eaeff3230
ms.sourcegitcommit: b0323777cfe4324a09552d0ea268d1afacc3da37
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 08/17/2022
ms.locfileid: '147580668'
---
## <a name="about-caching-workflow-dependencies"></a>Sobre a memorização das dependências do fluxo de trabalho

As execuções do fluxo de trabalho geralmente reutilizam as mesmas saídas ou dependências baixadas de uma execução para outra. Por exemplo, as ferramentas de gerenciamento de pacotes e de dependência, como, por exemplo, Maven, Gradle, npm e Yarn mantêm uma cache local de dependências baixadas.

{% ifversion fpt or ghec %} Os trabalhos nos executores hospedados em {% data variables.product.prodname_dotcom %} começam em uma imagem do executor limpa e devem baixar as dependências todas as vezes, o que gera maior utilização da rede, maior tempo de execução e aumento dos custos. {% endif %}Para ajudar a acelerar o tempo que leva para recriar arquivos como dependências, o {% data variables.product.prodname_dotcom %} pode armazenar em cache os arquivos que você usa frequentemente nos fluxos de trabalho.

Para armazenar em cache as dependências de um trabalho, você pode usar a [ação `cache`](https://github.com/actions/cache) do {% data variables.product.prodname_dotcom %}. A ação cria e restaura um cache identificado por uma chave exclusiva. Como alternativa, se você estiver armazenando em cache os gerenciadores de pacotes listados abaixo, o uso das respectivas ações setup-* exigirá configuração mínima e criará e restaurará caches de dependência para você.

| Gerenciadores de pacotes | ação setup-* para cache |
|---|---|
| npm, YARN, pnpm | [setup-node](https://github.com/actions/setup-node#caching-global-packages-data) |
| pip, pipenv, Poetry | [setup-python](https://github.com/actions/setup-python#caching-packages-dependencies) |
| Gradle, Maven | [setup-java](https://github.com/actions/setup-java#caching-packages-dependencies) |
| RubyGems | [setup-ruby](https://github.com/ruby/setup-ruby#caching-bundle-install-automatically) |
| Go `go.sum` | [setup-go](https://github.com/actions/setup-go#caching-dependency-files-and-build-outputs) |

{% warning %}

**Aviso**: {% ifversion fpt or ghec %}Esteja atento ao seguinte ao usar o cache com o {% data variables.product.prodname_actions %}:

* {% endif %}Recomendamos que você não armazene nenhuma informação confidencial no cache. Por exemplo, as informações confidenciais podem incluir tokens de acesso ou credenciais de login armazenadas em um arquivo no caminho da cache. Além disso, os programas de CLI (interface de linha de comando) como o `docker login` podem salvar as credenciais de acesso em um arquivo de configuração. Qualquer pessoa com acesso de leitura pode criar uma solicitação de pull em um repositório e acessar o conteúdo de um cache. As bifurcações de um repositório também podem criar pull requests no branch-base e acessar as caches no branch-base.
{%- ifversion fpt or ghec %}
* Ao usar executores auto-hospedados, os caches de execuções de fluxo de trabalho são armazenados em armazenamento em nuvem de propriedade do {% data variables.product.company_short %}. Uma solução de armazenamento de propriedade do cliente só está disponível com {% data variables.product.prodname_ghe_server %}.
{%- endif %}

{% endwarning %}

{% data reusables.actions.comparing-artifacts-caching %}

Para obter mais informações sobre artefatos de execução de fluxo, confira "[Como persistir dados de fluxo de trabalho usando artefatos](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

## <a name="restrictions-for-accessing-a-cache"></a>Restrições para acessar uma cache

Um fluxo de trabalho pode acessar e restaurar um cache criado no branch atual, no branch base (incluindo os branches base de repositórios com fork) ou no branch padrão (geralmente, `main`). Por exemplo, um cache criado no branch-padrão pode ser acessado a partir de qualquer pull request. Além disso, se o branch `feature-b` tiver o branch base `feature-a`, um fluxo de trabalho disparado em `feature-b` terá acesso aos caches criados no branch padrão (`main`) `feature-a` e `feature-b`.

As restrições de acesso fornecem o isolamento da cache e a segurança ao criar um limite lógico entre os diferentes branches. Por exemplo, um cache criado para o branch `feature-a` (com o `main` base) não ficará acessível para uma solicitação de pull para o branch `feature-c` (com o `main` base).

Vários fluxos de trabalho dentro de um repositório compartilham entradas de cache. Uma cache criada para um branch de um fluxo de trabalho pode ser acessada e restaurada a partir de outro fluxo de trabalho para o mesmo repositório e branch.

## <a name="using-the-cache-action"></a>Como usar a ação `cache`

A [ação `cache`](https://github.com/actions/cache) tentará restaurar um cache com base na `key` que você fornecer. Quando a ação encontrar um cache, ela vai restaurar os arquivos armazenados em cache no `path` que você configurar.

Se não houver uma correspondência perfeita, a ação criará automaticamente um cache se o trabalho for concluído com sucesso. O novo cache usará a `key` fornecida e conterá os arquivos especificados no `path`.

Opcionalmente, você pode fornecer uma lista de `restore-keys` a serem usadas quando a `key` não corresponder a um cache existente. Uma lista de `restore-keys` é útil quando você restaura um cache de outro branch, porque as `restore-keys` podem corresponder parcialmente às chaves do cache. Para obter mais informações sobre as `restore-keys` correspondentes, confira "[Como fazer a correspondência de uma chave de cache](#matching-a-cache-key)".

### <a name="input-parameters-for-the-cache-action"></a>Os parâmetros de entrada da ação `cache`

- `key`: **Obrigatório** A chave criada ao salvar um cache, e a chave usada para pesquisar um cache. Pode ser qualquer combinação de variáveis, valores de contexto, cadeias de caracteres estáticas e funções. As chaves têm um tamanho máximo de 512 caracteres e as chaves maiores que o tamanho máximo gerarão uma falha na ação.
- `path`: **Obrigatório** Os caminhos no executor para armazenamento em cache ou restauração.
  - Você pode especificar um só caminho ou adicionar vários caminhos em linhas separadas. Por exemplo:

    ```
    - name: Cache Gradle packages
      uses: {% data reusables.actions.action-cache %}
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
    ```
  - Você pode especificar diretórios ou arquivos únicos e os padrões glob são compatíveis.
  - Você pode especificar caminhos absolutos ou caminhos relativos ao diretório do espaço de trabalho.
- `restore-keys`: **Opcional** Uma cadeia de caracteres que contém chaves de restauração alternativas, com cada chave de restauração colocada em uma nova linha. Se não houver nenhuma ocorrência da `key`no cache, essas chaves de restauração serão usadas sequencialmente na ordem fornecida para localizar e restaurar um cache. Por exemplo:

  {% raw %}
  ```yaml
  restore-keys: |
    npm-feature-${{ hashFiles('package-lock.json') }}
    npm-feature-
    npm-
  ```
  {% endraw %}

### <a name="output-parameters-for-the-cache-action"></a>Parâmetros de saída para a ação `cache`

- `cache-hit`: um valor booliano para indicar que uma correspondência exata foi encontrada para a chave.

### <a name="example-using-the-cache-action"></a>Exemplo que usa a ação `cache`

Este exemplo cria um cache quando os pacotes do arquivo `package-lock.json` são alterados ou quando o sistema operacional do executor é alterado. A chave de cache usa contextos e expressões para gerar uma chave que inclui o sistema operacional do executor e um hash SHA-256 do arquivo `package-lock.json`.

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

      - if: {% raw %}${{ steps.cache-npm.outputs.cache-hit != 'true' }}{% endraw %}
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

Quando a `key` corresponde a um cache existente, isso é chamado de _ocorrência no cache_ e a ação restaura os arquivos armazenados em cache no diretório `path`.

Quando `key` não corresponde a um cache existente, isso é chamado de _perda no cache_ e um cache é criado automaticamente se o trabalho for concluído com sucesso.

Quando ocorre uma perda no cache, a ação também pesquisa o `restore-keys` especificado para encontrar correspondências:

1. Se você fornecer `restore-keys`, a ação `cache` vai procurar sequencialmente os caches que correspondem à lista de `restore-keys`.
   - Se houver uma correspondência exata, a ação vai restaurar os arquivos no cache no diretório `path`.
   - Se não houver correspondências exatas, a ação pesquisará correspondências parciais das chaves de restauração. Quando uma ação encontra uma correspondência parcial, o último cache é restaurado no diretório `path`.
1. A ação `cache` é concluída e a próxima etapa é executada no trabalho.
1. Se o trabalho for concluído com sucesso, a ação criará automaticamente um cache com o conteúdo do diretório `path`.

Para obter uma explicação mais detalhada do processo de correspondência de cache, confira "[Correspondência de uma chave de cache](#matching-a-cache-key)". Após criar uma cache, você não poderá alterar o conteúdo de uma cache existente, mas você poderá criar uma nova cache com uma nova chave.

### <a name="using-contexts-to-create-cache-keys"></a>Usar contextos para criar chaves da cache

Uma chave da cache pode incluir quaisquer contextos, funções, literais e operadores suportados por {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Contextos](/actions/learn-github-actions/contexts)" e "[Expressões](/actions/learn-github-actions/expressions)".

O uso de expressões para criar uma `key` permite que você crie automaticamente um cache quando as dependências são alteradas.

Por exemplo, você pode criar uma `key` usando uma expressão que calcula o hash de um arquivo `package-lock.json` npm. Portanto, quando as dependências que compõem o arquivo `package-lock.json` são alteradas, a chave de cache é alterada e um novo cache é criado automaticamente.

{% raw %}
```yaml
npm-${{ hashFiles('package-lock.json') }}
```
{% endraw %}

O {% data variables.product.prodname_dotcom %} avalia a expressão `hash "package-lock.json"` para obter a `key` final.

```yaml
npm-d5ea0750
```

### <a name="using-the-output-of-the-cache-action"></a>Usando a saída da ação `cache`

Você pode usar a saída da ação `cache` para fazer algo com base na ocorrência ou na perda no cache. Quando uma correspondência exata é encontrada para um cache do `key` especificado, a saída `cache-hit` é definida como `true`.

No exemplo de fluxo de trabalho acima, há uma etapa que lista o estado dos módulos de nó na ocorrência de uma perda no cache:

```yaml
- if: {% raw %}${{ steps.cache-npm.outputs.cache-hit != 'true' }}{% endraw %}
  name: List the state of node modules
  continue-on-error: true
  run: npm list
```

## <a name="matching-a-cache-key"></a>Corresponder uma chave da cache

A ação `cache` primeiro procura `key` e `restore-keys` nas ocorrências no cache, no branch que contém a execução de fluxo de trabalho. Se não houver nenhuma ocorrência no branch atual, a ação `cache` vai procurar `key` e `restore-keys` nos branches pai e upstream.

O `restore-keys` permite que você especifique uma lista de chaves de restauração alternativas a serem usadas quando houver uma perda no cache na `key`. Você pode criar múltiplas chaves de restauração ordenadas da mais específica para a menos específica. A ação `cache` procura o `restore-keys` em ordem sequencial. Quando uma chave não corresponde diretamente, a ação pesquisa as chaves prefixadas com a chave de restauração. Se houver múltiplas correspondências parciais para uma chave de restauração, a ação retornará a cache criada por último.

### <a name="example-using-multiple-restore-keys"></a>Exemplo do uso de múltiplas chaves de restauração

{% raw %}
```yaml
restore-keys: |
  npm-feature-${{ hashFiles('package-lock.json') }}
  npm-feature-
  npm-
```
{% endraw %}

O executor avalia as expressões, que são resolvidas para estas `restore-keys`:

{% raw %}
```yaml
restore-keys: |
  npm-feature-d5ea0750
  npm-feature-
  npm-
```
{% endraw %}

A chave de restauração `npm-feature-` corresponde a qualquer chave que comece com a cadeia de caracteres `npm-feature-`. Por exemplo, as chaves `npm-feature-fd3052de` e `npm-feature-a9b253ff` correspondem à chave de restauração. Será usada a cache com a data de criação mais recente. As chaves neste exemplo são pesquisadas na ordem a seguir:

1. **`npm-feature-d5ea0750`** corresponde a um hash específico.
1. **`npm-feature-`** corresponde às chaves de cache precedidas com `npm-feature-`.
1. **`npm-`** corresponde a qualquer chave precedida com `npm-`.

#### <a name="example-of-search-priority"></a>Exemplo de prioridade de pesquisa

```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```

Por exemplo, se uma solicitação de pull contiver um branch `feature` e for direcionada ao branch padrão (`main`), a ação vai procurar `key` e `restore-keys` na seguinte ordem:

1. Chave `npm-feature-d5ea0750` no branch `feature`
1. Chave `npm-feature-` no branch `feature`
1. Chave `npm-` no branch `feature`
1. Chave `npm-feature-d5ea0750` no branch `main`
1. Chave `npm-feature-` no branch `main`
1. Chave `npm-` no branch `main`

## <a name="usage-limits-and-eviction-policy"></a>Limites de uso e política de eliminação

{% data variables.product.prodname_dotcom %} removerá todas as entradas da cache não acessadas há mais de 7 dias. Não há limite no número de caches que você pode armazenar, mas o tamanho total de todos os caches em um repositório é limitado{% ifversion actions-cache-policy-apis %}. Por padrão, o limite é de 10 GB por repositório, mas esse limite pode ser diferente dependendo das políticas definidas pelos proprietários corporativos ou administradores de repositório.{% else %} para 10 GB.{% endif %} 

{% data reusables.actions.cache-eviction-process %}

{% ifversion actions-cache-policy-apis %} Para obter informações de como alterar as políticas de limite de tamanho do cache do repositório, confira "[Como impor políticas para o {% data variables.product.prodname_actions %} na empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-cache-storage-in-your-enterprise)" e "[Como gerenciar as configurações do {% data variables.product.prodname_actions %} em um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository)".
{% endif %}

{% ifversion actions-cache-management %}

## <a name="managing-caches"></a>Gerenciando caches

Você pode usar a API REST de {% data variables.product.product_name %} para gerenciar seus caches. {% ifversion actions-cache-list-delete-apis %}Você pode usar a API para listar e excluir entradas de cache e ver o uso do cache. {% elsif actions-cache-management %}No momento, você pode usar a API para ver o uso do cache. As atualizações futuras trarão mais funcionalidades. {% endif %} Para obter mais informações, confira a documentação da API REST "[Cache do {% data variables.product.prodname_actions %}](/rest/actions/cache)".

Você também pode instalar uma extensão do {% data variables.product.prodname_cli %} para gerenciar seus caches da linha de comando. Para obter mais informações sobre a extensão, confira [a documentação da extensão](https://github.com/actions/gh-actions-cache#readme). Para obter mais informações sobre as extensões do {% data variables.product.prodname_cli %}, confira "[Como usar as extensões da CLI do GitHub](/github-cli/github-cli/using-github-cli-extensions)."

{% endif %}
