---
title: Memorizar dependências para acelerar os fluxos de trabalho
shortTitle: Cache dependencies
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
ms.openlocfilehash: 380fe568e950a4dc388e8f811ecebd12f242c5df
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164377'
---
## Sobre a memorização das dependências do fluxo de trabalho

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

## Restrições para acessar uma cache

As restrições de acesso fornecem o isolamento da cache e a segurança ao criar um limite lógico entre os diferentes branches ou marcas. As execuções de fluxo de trabalho podem restaurar caches criados no branch atual ou no branch padrão (geralmente `main`). Se uma execução de fluxo de trabalho for disparada para uma solicitação de pull, ela também poderá restaurar caches criados no branch base, incluindo branches base de repositórios com fork. Por exemplo, se o branch `feature-b` tiver o branch base `feature-a`, uma execução de fluxo de trabalho disparada em uma solicitação de pull terá acesso aos caches criados no branch `main` padrão, no branch `feature-a` base e no branch `feature-b` atual.

As execuções de fluxo de trabalho não podem restaurar caches criados para branchs filhos ou irmãos. Por exemplo, um cache criado para o branch `feature-b` filho não estaria acessível a uma execução de fluxo de trabalho disparada no branch `main` pai. Da mesma forma, um cache criado para o branch `feature-a` com o `main` base não seria acessível ao branch `feature-c` irmão com o `main` base. As execuções de fluxo de trabalho também não podem restaurar caches criados para nomes de marcas diferentes. Por exemplo, um cache criado para a marca `release-a` com o `main` base não seria acessível a uma execução de fluxo de trabalho disparada para a marca `release-b` com o `main` base.

Quando um cache é criado por uma execução de fluxo de trabalho disparada em uma solicitação de pull, ele é criado para a referência de mesclagem (`refs/pull/.../merge`). Por isso, ele terá um escopo limitado e só poderá ser restaurado por novas execuções da solicitação de pull. Ele não poderá ser restaurado pelo branch base ou por outras solicitações de pull direcionadas a esse branch.

Diversas execuções de fluxo de trabalho em um repositório podem compartilhar caches. Um cache criado para um branch em uma execução de fluxo de trabalho pode ser acessado e restaurado por meio de outra execução de fluxo de trabalho para o mesmo repositório e branch.

## Como usar a ação `cache`

A [ação `cache`](https://github.com/actions/cache) tentará restaurar um cache com base na `key` que você fornecer. Quando a ação encontra um cache que corresponde _exatamente_ à chave, a ação restaura os arquivos armazenados em cache no `path` configurado.
Opcionalmente, é possível fornecer uma lista de `restore-keys` para uso caso `key` não corresponda a um cache existente. Uma lista de `restore-keys` é útil ao restaurar um cache de outro branch porque `restore-keys` pode corresponder _parcialmente_ às chaves de cache. Para obter mais informações sobre as `restore-keys` correspondentes, confira "[Como fazer a correspondência de uma chave de cache](#matching-a-cache-key)".

Se houver uma correspondência exata com o `key` fornecido, isso será considerado uma ocorrência no cache. Se nenhum cache corresponder exatamente ao `key` fornecido, isso é considerado uma perda no cache. Em uma perda no cache, a ação cria automaticamente um cache quando o trabalho é concluído com sucesso. O novo cache usará a `key` fornecida e conterá os arquivos especificados no `path`. Para saber como isso é feito, confira "[Ocorrências e perdas no cache](#cache-hits-and-misses)".

Não é possível alterar o conteúdo de um cache existente. Em vez disso, crie um cache com uma nova chave.


### Os parâmetros de entrada da ação `cache`

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

### Parâmetros de saída para a ação `cache`

- `cache-hit`: um valor booliano para indicar que uma correspondência exata foi encontrada para a chave.

### Ocorrências e perdas no cache
Quando `key` corresponde exatamente a um cache existente, isso é chamado de _ocorrência no cache_ e a ação restaura os arquivos em cache no diretório `path`.

Quando `key` não corresponde a um cache existente, isso é chamado de _perda no cache_ e um cache é criado automaticamente se o trabalho for concluído com sucesso.

Quando ocorre uma perda no cache, a ação também pesquisa o `restore-keys` especificado para encontrar correspondências:

1. Se você fornecer `restore-keys`, a ação `cache` vai procurar sequencialmente os caches que correspondem à lista de `restore-keys`.
   - Se houver uma correspondência exata, a ação vai restaurar os arquivos no cache no diretório `path`.
   - Se não houver correspondências exatas, a ação pesquisará correspondências parciais das chaves de restauração. Quando uma ação encontra uma correspondência parcial, o último cache é restaurado no diretório `path`.
1. A ação `cache` é concluída e a próxima etapa é executada no trabalho.
1. Se o trabalho for concluído com sucesso, a ação criará automaticamente um cache com o conteúdo do diretório `path`.

Para obter uma explicação mais detalhada do processo de correspondência de cache, confira "[Correspondência de uma chave de cache](#matching-a-cache-key)".

### Exemplo que usa a ação `cache`

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

### Usar contextos para criar chaves da cache

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

### Usando a saída da ação `cache`

Você pode usar a saída da ação `cache` para fazer algo com base na ocorrência ou na perda no cache. Quando uma correspondência exata é encontrada para um cache do `key` especificado, a saída `cache-hit` é definida como `true`.

No exemplo de fluxo de trabalho acima, há uma etapa que lista o estado dos módulos de nó na ocorrência de uma perda no cache:

```yaml
- if: {% raw %}${{ steps.cache-npm.outputs.cache-hit != 'true' }}{% endraw %}
  name: List the state of node modules
  continue-on-error: true
  run: npm list
```

## Corresponder uma chave da cache

A ação `cache` primeiro pesquisa ocorrências de `key` no cache e a _versão_ do cache no branch que contém a execução de fluxo de trabalho. Quando não há ocorrências, ela pesquisa `restore-keys` e a _versão_. Se ainda não houver ocorrências no branch atual, a ação `cache` repetirá as mesmas etapas no branch padrão. Observe que as restrições de escopo se aplicam durante a pesquisa. Para saber mais, confira "[Restrições de acesso a um cache](#restrictions-for-accessing-a-cache)".

A versão do cache é uma maneira de marcar um cache com metadados de `path` e a ferramenta de compactação usada durante a criação dele. Isso garante que a execução de fluxo de trabalho de consumo corresponda exclusivamente a um cache que possa realmente descompactar e usar. Para saber mais, confira [Versão de cache](https://github.com/actions/cache#cache-version) na documentação do cache de ações.

O `restore-keys` permite que você especifique uma lista de chaves de restauração alternativas a serem usadas quando houver uma perda no cache na `key`. Você pode criar múltiplas chaves de restauração ordenadas da mais específica para a menos específica. A ação `cache` procura o `restore-keys` em ordem sequencial. Quando uma chave não corresponde diretamente, a ação pesquisa as chaves prefixadas com a chave de restauração. Se houver múltiplas correspondências parciais para uma chave de restauração, a ação retornará a cache criada por último.

### Exemplo do uso de múltiplas chaves de restauração

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

#### Exemplo de prioridade de pesquisa

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

## Limites de uso e política de eliminação

{% data variables.product.prodname_dotcom %} removerá todas as entradas da cache não acessadas há mais de 7 dias. Não há limite no número de caches que você pode armazenar, mas o tamanho total de todos os caches em um repositório é limitado{% ifversion actions-cache-policy-apis %}. Por padrão, o limite é de 10 GB por repositório, mas esse limite pode ser diferente dependendo das políticas definidas pelos proprietários corporativos ou administradores de repositório.{% else %} para 10 GB.{% endif %} 

{% data reusables.actions.cache-eviction-process %} {% ifversion actions-cache-ui %}O processo de remoção de cache pode causar sobrecarga nos caches, pois eles são criados e excluídos em alta frequência. Para reduzir isso, revise os caches de um repositório e execute etapas corretivas, como remover o cache de fluxos de trabalho específicos. Para saber mais, confira "[Gerenciar caches](#managing-caches)".{% endif %}{% ifversion actions-cache-admin-ui %} Também é possível aumentar o limite de tamanho do cache de um repositório. Para obter mais informações, confira "[Como gerenciar as configurações do {% data variables.product.prodname_actions %} de um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository)".

{% elsif actions-cache-policy-apis %}

Para saber como alterar as políticas do limite de tamanho do cache do repositório, confira "[Aplicar políticas a {% data variables.product.prodname_actions %} em sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-cache-storage-in-your-enterprise)" e "[Gerenciar as configurações de {% data variables.product.prodname_actions %} de um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository)".

{% endif %}

{% ifversion actions-cache-management %}

## Gerenciando caches

{% ifversion actions-cache-ui %}

Para gerenciar caches criados por meio de seus fluxos de trabalho, faça o seguinte:

- Exiba uma lista de todas as entradas de cache de um repositório.
- Filtre e classifique a lista de caches usando metadados específicos, como tamanho do cache, hora de criação ou hora do último acesso.
- Exclua as entradas de cache de um repositório.
- Monitore o uso de cache agregado para repositórios e organizações.

Há diversas maneiras de gerenciar os caches de repositórios:

- Usar a interface da Web do {% data variables.product.prodname_dotcom %}, conforme mostrado abaixo.
- Usar a API REST: Para saber mais, confira a documentação da API REST de "[Cache de {% data variables.product.prodname_actions %}](/rest/actions/cache)".
- Instalar uma extensão da {% data variables.product.prodname_cli %} para gerenciar os caches por meio da linha de comando. Para saber mais, confira a extensão [gh-actions-cache](https://github.com/actions/gh-actions-cache).

{% else %}

Você pode usar a API REST de {% data variables.product.product_name %} para gerenciar seus caches. {% ifversion actions-cache-list-delete-apis %}Você pode usar a API para listar e excluir entradas de cache e ver o uso do cache. {% elsif actions-cache-management %}No momento, você pode usar a API para ver o uso do cache. As atualizações futuras trarão mais funcionalidades. {% endif %} Para obter mais informações, confira a documentação da API REST "[Cache do {% data variables.product.prodname_actions %}](/rest/actions/cache)".

Você também pode instalar uma extensão do {% data variables.product.prodname_cli %} para gerenciar seus caches da linha de comando. Para obter mais informações sobre a extensão, confira [a documentação da extensão](https://github.com/actions/gh-actions-cache#readme). Para obter mais informações sobre as extensões do {% data variables.product.prodname_cli %}, confira "[Como usar as extensões da CLI do GitHub](/github-cli/github-cli/using-github-cli-extensions)."

{% endif %}

{% ifversion actions-cache-ui %}

### Exibir entradas de cache

É possível usar a interface da Web para exibir uma lista das entradas de cache de um repositório. Na lista de cache, é possível ver quanto espaço em disco cada cache está usando, quando os caches foram criados e quando foram usados pela última vez.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.actions-cache-list %}
1. Revise a lista de entradas de cache do repositório.

   * Para pesquisar as entradas de cache usadas para um branch específico, clique no menu suspenso **Branch** e selecione um branch. A lista de cache exibirá todos os caches usados para o branch selecionado.
   * Para pesquisar entradas de cache com uma chave de cache específica, use a sintaxe `key: key-name` no campo **Filtrar caches**. A lista de cache exibirá os caches de todos os branches em que a chave foi usada.

   ![Captura de tela da lista de entradas de cache](/assets/images/help/repository/actions-cache-entry-list.png)

### Excluir entradas de cache

Os usuários com acesso `write` a um repositório podem usar a interface da Web do {% data variables.product.prodname_dotcom %} para excluir entradas de cache.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.actions-cache-list %}
1. À direita da entrada de cache que você deseja excluir, clique em {% octicon "trash" aria-label="The trash icon" %}. 

   ![Captura de tela da lista de entradas de cache](/assets/images/help/repository/actions-cache-delete.png)

{% endif %}

{% endif %}
