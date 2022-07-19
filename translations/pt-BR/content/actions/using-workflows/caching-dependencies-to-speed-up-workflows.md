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

{% ifversion fpt or ghec %}Os trabalhos nos executores hospedados em {% data variables.product.prodname_dotcom %} começam em um ambiente virtual limpo e devem fazer o download das dependências todas as vezes, o que gera uma maior utilização da rede, maior tempo de execução e aumento dos custos. {% endif %}Para ajudar a acelerar o tempo que leva para recriar arquivos como dependências, {% data variables.product.prodname_dotcom %} pode armazenar arquivos em cache que você usa frequentemente em fluxos de trabalho.

Para armazenar dependências em cache para um trabalho, você pode usar a ação {% data variables.product.prodname_dotcom %} de [`cache`](https://github.com/actions/cache). A ação cria e restaura um cache identificado por uma chave única. Como alternativa, se você estiver armazenando em cache os gerentes de pacotes listados abaixo, usar suas respectivas ações de setup-* exige uma configuração mínima e irá criar e restaurar caches de dependências para você.

| Gerentes de pacotes | ação setup-* para cache                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| npm, Yarn, pnpm     | [setup-node](https://github.com/actions/setup-node#caching-global-packages-data)           |
| pip, pipenv, Poetry | [setup-python](https://github.com/actions/setup-python#caching-packages-dependencies)      |
| Gradle, Maven       | [setup-java](https://github.com/actions/setup-java#caching-packages-dependencies)          |
| RubyGems            | [setup-ruby](https://github.com/ruby/setup-ruby#caching-bundle-install-automatically)      |
| Go `go.sum`         | [setup-go](https://github.com/actions/setup-go#caching-dependency-files-and-build-outputs) |

{% warning %}

**Aviso**: {% ifversion fpt or ghec %}Cuidado com o seguinte ao usar o cache com {% data variables.product.prodname_actions %}:

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

A ação

`cache</a>` tentará restaurar um cache com base na `chave` que você fornecer. Quando a ação encontrar uma cache, ela irá restaurar os arquivos memorizados no `caminho` que você configurar.</p> 

Se não houver correspondência exata, a ação criará automaticamente um novo cache se o trabalho for concluído com sucesso. O novo cache usará a `chave` que você forneceu e que contém os arquivos que você especificar no `caminho`.

Como alternativa, você pode fornecer uma lista de `chaves de restauração` a serem usadas quando a `chave` não corresponder à cache existente. Uma lista de `chaves de restauração` é importante quando você está tentando restaurar uma cache de outro branch, pois `as chaves de restauração`<code podem corresponder parcialmente às chaves da cache. Para obter mais informações sobre a correspondência das `chaves de restauração`, consulte "[Correspondendo uma chave da cache](#matching-a-cache-key)".



### Parâmetros de entrada para a ação da `cache`

- `key`: **Obrigatório** A chave criada ao salvar uma cache e a chave usada para pesquisar uma cache. Pode ser qualquer combinação de variáveis, valores de contexto, strings estáticas e funções. As chaves têm um tamanho máximo de 512 caracteres e as chaves maiores que o tamanho máximo gerarão uma falha na ação.
- `caminho`: **Obrigatório** O(s) caminho(s) do executor para armazenar em cache ou restaurar.
  
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
- `restore-keys`: **Opcional** Uma string que contêm chaves de restauração alternativas, com cada uma colocada em uma nova linha. Se nenhuma correspondência de cache for encontrada para a `chave`, estas chaves de restauração serão usadas sequencialmente na ordem fornecida para encontrar e restaurar um cache. Por exemplo:
  
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

      - if: {% raw %}${{ steps.cache-npm.outputs.cache-hit == 'false' }}{% endraw %}
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


Quando uma `chave` corresponde a um cache existente, isso é denominado _correspondência de cache_, e a ação restaura os arquivos em cache para o diretório do `caminho`.

Quando a `chave` não corresponde a um cache existente, isso se chama _falha de cache,_, e um novo cache é criado automaticamente se o trabalho for concluído com sucesso.

Quando a falha de um cache ocorrer, a ação também pesquisa `restore-keys` para quaisquer correspondências:

1. Se você fornecer `chaves de restauração`, a ação da `cache` pesquisará, em seguida, todas as caches que correspondem à lista de `chaves de restauração`. 
      - Se houver uma correspondência exata, a ação irá restaurar os arquivos na cache para o diretório do `caminho`.
   - Se não houver correspondências exatas, a ação pesquisará correspondências parciais das chaves de restauração. Quando uma ação encontra uma correspondência parcial, a última cache é restaurada para o diretório do `caminho`.
1. A ação `cache` é concluída e a próxima etapa do trabalho é executada.
1. Se a tarefa completar com sucesso, a ação cria automaticamente um novo cache com o conteúdo do diretório do `caminho`.

Para uma explicação mais detalhada do processo de correspondência de cache, consulte "[Correspondendo uma chave do cache](#matching-a-cache-key)". Após criar uma cache, você não poderá alterar o conteúdo de uma cache existente, mas você poderá criar uma nova cache com uma nova chave.



### Usar contextos para criar chaves da cache

Uma chave da cache pode incluir quaisquer contextos, funções, literais e operadores suportados por {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Contextos](/actions/learn-github-actions/contexts)" e "[Expressões](/actions/learn-github-actions/expressions)".

Usar expressões para criar uma `chave` permite que você crie automaticamente uma nova cache quando as dependências forem alteradas.

Por exemplo, você pode criar uma `chave` usando uma expressão que calcula o hash de um arquivo `package-lock.json` de npm. Portanto, quando as dependências que compõem o arquivo `package-lock.json` mudarem, a tecla cache muda e um novo cache é criado automaticamente.

{% raw %}


```yaml
npm-${{ hashFiles('package-lock.json') }}
```


{% endraw %}

{% data variables.product.prodname_dotcom %} avalia a expressão `hash "package-lock.json"` para derivar a `chave` final.



```yaml
npm-d5ea0750
```




### Usando a saída da ação do `cache`

Você pode usar a ação `cache` para fazer algo baseado em se ocorreu uma correspondência de cache ou se a falha ocorreu. Se houver uma falha de cache (uma correspondência exata para um cache não foi encontrada para a `chave` especificada), o resultado do `cache-hit` será definido como `falso`.

No exemplo de fluxo de trabalho acima, há uma etapa que lista o estado dos módulos do Node se ocorrer uma falha de cache:



```yaml
- if: {% raw %}${{ steps.cache-npm.outputs.cache-hit == 'false' }}{% endraw %}
  name: List the state of node modules
  continue-on-error: true
  run: npm list
```




## Corresponder uma chave da cache

A ação da `cache` primeiro pesquisa correspondências da cache para a `chave` e para as `chaves de restauração` no branch que contém a execução do fluxo de trabalho. Se não houver correspondências no branch atual, a ação da `cache` pesquisa a `chave` e as `chaves de restauração` no branch-pai e nos branches upstream.

`restore-keys` permite que você especifique uma lista de chaves alternativas de restauração a serem usadas quando há ausência de cache na `chave`. Você pode criar múltiplas chaves de restauração ordenadas da mais específica para a menos específica. A ação da `cache` pesquisa `restore-keys` em ordem sequencial. Quando uma chave não corresponde diretamente, a ação pesquisa as chaves prefixadas com a chave de restauração. Se houver múltiplas correspondências parciais para uma chave de restauração, a ação retornará a cache criada por último.



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

A chave de restauração `npm-feature-` corresponde a qualquer chave que começa com a string `npm-feature-`. Por exemplo, ambas as chaves `npm-feature-fd3052de` e `npm-feature-a9b253ff` correspondem à chave de restauração. Será usada a cache com a data de criação mais recente. As chaves neste exemplo são pesquisadas na ordem a seguir:

1. **`npm-feature-d5ea0750`** corresponde a um hash específico.
1. **`npm-feature-`** corresponde às chaves de cache prefixadas com `npm-feature-`.
1. **`npm-`** corresponde a chaves prefixadas com `npm-`.



#### Exemplo de prioridade de pesquisa



```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```


Por exemplo, se um pull request contiver um branch de `recurso` e tiver como alvo o branch padrão (`main`), a ação pesquisa `chave` e `restore-keys` na seguinte ordem:

1. A chave `npm-feature-d5ea0750` no branch de `recurso`
1. Chave `npm-feature-` no branch de `recurso`
1. Chave `npm-` no branch de `recurso`
1. Chave `npm-feature-d5ea0750` no branch `principal`
1. Chave `npm-feature-` no branch `principal`
1. Chave `npm-` no branch `principal`



## Limites de uso e política de eliminação

{% data variables.product.prodname_dotcom %} removerá todas as entradas da cache não acessadas há mais de 7 dias. Não há limite no número de caches que você pode armazenar, mas o tamanho total de todos os caches em um repositório é limitado{% ifversion actions-cache-policy-apis %}. Por padrão, o limite é 10 GB por repositório, mas este limite pode ser diferente dependendo das políticas definidas pelos proprietários da empresa ou administradores de repositório.{% else %} a 10 GB.{% endif %} 

{% data reusables.actions.cache-eviction-process %}

{% ifversion actions-cache-policy-apis %}

Para informações sobre como alterar as políticas para o limite de tamanho do cache do repositório, consulte "[Aplicando políticas para {% data variables.product.prodname_actions %} na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-cache-storage-in-your-enterprise)" e "[Gerenciando as configurações de {% data variables.product.prodname_actions %} para um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository)". 

{% endif %}

{% ifversion actions-cache-management %}



## Gerenciando caches

Você pode usar a API REST de {% data variables.product.product_name %} para gerenciar seus caches. {% ifversion actions-cache-list-delete-apis %}Você pode usar a API para listar e excluir entradas de cache e ver o seu uso de cache.{% elsif actions-cache-management %}Atualmente você pode usar a API para ver seu uso de cache, com mais funcionalidades em atualizações futuras.{% endif %} Para obter mais informações, consulte o "[{% data variables.product.prodname_actions %} Cache](/rest/actions/cache)" na documentação da API REST.

{% endif %}
