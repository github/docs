---
title: Noções básicas sobre a sintaxe da Pesquisa de Código do GitHub (beta)
intro: 'Você pode criar consultas de pesquisa para os resultados desejados com qualificadores de código especializados, expressões regulares e operações boolianas.'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 098da2b7fe8a8c5466805c583e6b029b5b9b58c1
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159350'
---
{% note %}

**Observação:** {% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-search-link %} {% data reusables.search.code-view-link %}

{% endnote %}

## Sobre a nova estrutura de consulta de pesquisa de código (beta)

A sintaxe de pesquisa neste artigo só se aplica à pesquisa de código com a nova pesquisa de código (beta) habilitada. {% data reusables.search.non-code-search-explanation %}

As consultas de pesquisa consistem em termos de pesquisa, incluindo o texto que você deseja procurar e qualificadores, que restringem a pesquisa. 

Um termo simples sem qualificadores corresponderá ao conteúdo de um arquivo ou ao caminho do arquivo. 

Por exemplo, a seguinte consulta:

```
http-push
```

A consulta acima corresponderá ao arquivo `docs/http-push.txt`, mesmo que ele não contenha o termo `http-push`. Ela também corresponderá a um arquivo chamado `example.txt` se ele contiver o termo `http-push`. 

Você pode inserir vários termos separados por espaço em branco para pesquisar documentos que satisfaçam os dois termos. 

Por exemplo, a seguinte consulta:

```
sparse index
```

Os resultados da pesquisa incluiriam todos os documentos que contêm os termos `sparse` e `index`, em qualquer ordem. Como exemplos, ele corresponderia a um arquivo que contém `SparseIndexVector`, um arquivo com a frase `index for sparse trees` e até mesmo um arquivo chamado `index.txt` que contém o termo `sparse`.  

A procura de vários termos separados por espaço em branco é equivalente à pesquisa `hello AND world`. Outras operações boolianas, como `hello OR world`, também são compatíveis com a nova pesquisa de código (beta). Para obter mais informações sobre operações boolianas, confira "[Como usar operações boolianas](#using-boolean-operations)".

A nova pesquisa de código (beta) também dá suporte à procura de cadeia de caracteres exata, incluindo espaço em branco. Para obter mais informações, confira "[Consultar uma correspondência exata](#query-for-an-exact-match)".

Você pode restringir a pesquisa de código com qualificadores especializados, como `repo:`, `language:` e `path:`. Para obter mais informações sobre os qualificadores que você pode usar na nova pesquisa de código (beta), confira "[Como usar qualificadores](#using-qualifiers)".

Você também pode usar expressões regulares nas pesquisas colocando a expressão entre barras invertidas. Para obter mais informações de como usar expressões regulares, confira "[Como usar expressões regulares](#using-regular-expressions)".

## Consultar uma correspondência exata

Para procurar uma cadeia de caracteres exata, incluindo espaço em branco, você pode colocar a cadeia de caracteres entre aspas. Por exemplo:

```
"sparse index"
```

Para procurar uma frase que contenha uma aspa, você pode fazer o escape da aspa usando uma barra invertida. Por exemplo, para localizar a cadeia de caracteres `name = "tensorflow"` exata, você pode pesquisar:

```
"name = \"tensorflow\""
```

Você também pode usar cadeias de caracteres entre aspas em qualificadores, por exemplo:

```
path: git language: "protocol buffers"
```

## Como usar operações boolianas

A nova pesquisa de código (beta) dá suporte a expressões boolianas. Você pode usar os operadores `AND`, `OR` e `NOT` para combinar termos de pesquisa.

Por padrão, os termos adjacentes separados por espaço em branco são equivalentes ao uso do operador `AND`. Por exemplo, a consulta de pesquisa `sparse index` é a mesma que `sparse AND index`, o que significa que os resultados da pesquisa incluirão todos os documentos que contenham os termos `sparse` e `index`, em qualquer ordem.

Para procurar documentos que contenham um termo ou outro, você pode usar o operador `OR`. Por exemplo, a consulta a seguir corresponderá aos documentos que contenham `sparse` ou `index`:

```
sparse OR index
```

Para excluir arquivos dos resultados da pesquisa, você pode usar o operador `NOT`. Por exemplo, para excluir o arquivo no diretório `__testing__`, você pode pesquisar:

```
"fatal error" NOT path:__testing__
```

Você pode usar parênteses para expressar expressões boolianas mais complicadas. Por exemplo:

```
(language:ruby OR language:python) AND NOT path:"/tests/"
```

## Como usar qualificadores

Você pode usar palavras-chave especializadas para qualificar a pesquisa.
- [Qualificador de repositório](#repository-qualifier)
- [Qualificadores de organização e usuário](#organization-and-user-qualifiers)
- [Qualificador de linguagem](#language-qualifier)
- [Qualificador de caminho](#path-qualifier)
- [Qualificador de símbolo](#symbol-qualifier)
- [Qualificador de conteúdo](#content-qualifier)
- [Qualificador Is](#is-qualifier)

### Qualificador de repositório

Para pesquisar em um repositório, use o qualificador `repo:`. Você precisa fornecer o nome completo do repositório, incluindo o proprietário. Por exemplo:

```
repo:github/linguist
```

Para pesquisar em um conjunto de repositórios, você pode combinar vários qualificadores `repo:` com o operador booliano `OR`. Por exemplo:

```
repo:github/linguist OR repo:tree-sitter/tree-sitter
```

{% note %}

**Observação:** no momento, a nova pesquisa de código beta não dá suporte a expressões regulares ou correspondência parcial para nomes de repositório, portanto, você precisa digitar o nome inteiro do repositório (incluindo o prefixo do usuário) para que o `repo:` qualificador funcione.

{% endnote %}

### Qualificadores de organização e usuário

Para procurar arquivos em uma organização, use o qualificador `org:`. Por exemplo:

```
org:github
```

Para procurar arquivos em uma conta pessoal, use o qualificador `user:`. Por exemplo:

```
user:octocat
```

{% note %}

**Observação:** no momento, a nova pesquisa de código beta não dá suporte a expressões regulares ou correspondência parcial para nome de organização ou de usuário, portanto, você precisa digitar o nome inteiro da organização ou do usuário (incluindo o prefixo do usuário) para que o qualificador funcione.

{% endnote %}


### Qualificador de linguagem

Para restringir a linguagem específicos, use o qualificador `language:`. Por exemplo: 

```
language: ruby OR language:cpp OR language:csharp
```

Para obter uma lista completa de nomes de linguagem com suporte, confira [languages.yaml](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml) em [github/linguist](https://github.com/github/linguist). Se a linguagem preferencial não estiver na lista, você poderá abrir uma solicitação de pull para adicioná-la.

### Qualificador de caminho

Para pesquisar dentro de caminhos de arquivo, use o qualificador `path:`. Isso corresponderá aos arquivos que contêm o termo em qualquer lugar no caminho do arquivo. Por exemplo, para localizar arquivos que contêm o termo `unit_tests` no caminho, use:

```
path:unit_tests
```
 A consulta acima corresponderá a `src/unit_tests/my_test.py` e a `src/docs/unit_tests.md`, pois ambos contêm `unit_test` em algum lugar do caminho. 

 Para corresponder apenas a um nome de arquivo específico (e não a parte do caminho), use uma expressão regular:

 ```
 path:/(^|\/)README\.md$/
 ```
Observe que o `.` no nome do arquivo tem escape, pois `.` tem um significado especial para expressões regulares. Para obter mais informações de como usar expressões regulares, confira "[Como usar expressões regulares](#using-regular-expressions)".

<br>

Você também pode usar algumas expressões de glob limitadas no qualificador `path:`.

Por exemplo, para procurar arquivos com a extensão `txt`, você pode usar:

```
path:*.txt
```
<br>
Para procurar arquivos JavaScript em um diretório `src`, você pode usar:

```
path:src/*.js
```

- Por padrão, as expressões glob não são ancoradas no início do caminho, portanto, a expressão acima ainda corresponderia a um caminho como `app/src/main.js`. No entanto, se você prefixar a expressão com `/`, ela será ancorada no início. Por exemplo:

    ```
    path:/src/*.js
    ```
- Observe que `*` não corresponde ao caractere `/`, portanto, para o exemplo acima, todos os resultados serão descendentes diretos do diretório `src`. A fim de corresponder em subdiretórios, para que os resultados incluam arquivos profundamente aninhados, como `/src/app/testing/utils/example.js`, use `**`. Por exemplo:

    ```
    path:/src/**/*.js
    ```
<br>

Você também pode usar o caractere global `?`. Por exemplo, para corresponder ao caminho `file.aac` ou `file.abc`, você pode usar:

```
path:*.a?c
```
<br>
Para procurar um nome de arquivo que contenha um caractere especial como `*` ou `?`, basta usar uma cadeia de caracteres entre aspas:

```
path:"file?"
```

Como as expressões glob são desabilitadas para cadeias de caracteres entre aspas, a consulta acima corresponderá apenas a caminhos que contenham a cadeia de caracteres literal `file?`. 

### Qualificador de símbolo

Você pode procurar definições de símbolo no código, como definições de função ou de classe, usando o qualificador `symbol:`. A pesquisa de símbolos se baseia na análise do código usando o ecossistema do analisador de código aberto [Tree-sitter](https://github.com/tree-sitter), portanto, não é necessária nenhuma configuração ou integração de ferramentas de build adicional.

Por exemplo, para procurar um símbolo chamado `WithContext`:

```
language:go symbol:WithContext
```

Em algumas linguagens, você pode procurar símbolos usando um prefixo (por exemplo, um prefixo do nome da classe). Por exemplo, para um método `deleteRows` em um struct `Maint`, você pode pesquisar `symbol:Maint.deleteRows` se estiver usando o Go ou `symbol:Maint::deleteRows` no Rust.

Você também pode usar expressões regulares com o qualificador de símbolo. Por exemplo, a consulta a seguir localizaria conversões que as pessoas implementaram no Rust para o tipo `String`:

```
language:rust symbol:/^String::to_.*/
```

Observe que esse qualificador procura apenas definições e não referências, e nem todos os tipos de símbolo ou linguagens já contam com suporte completo. A extração de símbolos é compatível com as linguagens a seguir. 

- C#
- Python
- Go
- Java
- JavaScript
- TypeScript
- PHP
- Buffers de protocolo
- Ruby
- Rust

Estamos trabalhando para adicionar o suporte para mais linguagens. Se você quiser contribuir com essas ações, adicione suporte para sua linguagem no ecossistema de analisadores de código aberto [Tree-sitter](https://github.com/tree-sitter), no qual a pesquisa de símbolos se baseia.

### Qualificador de conteúdo

Por padrão, os termos simples pesquisam os caminhos e o conteúdo do arquivo. Para restringir uma pesquisa para corresponder exatamente ao conteúdo de um arquivo e não aos caminhos de arquivo, use o qualificador `content:`. Por exemplo:

```
content:README.md
```

Essa consulta corresponderia apenas a arquivos que contenham o termo `README.md`, em vez de corresponder a arquivos chamados `README.md`. 

### Qualificador Is

Para filtrar com base nas propriedades do documento, você pode usar o qualificador `is:`. Neste momento, o único valor com suporte nesse qualificador é `archived`, que restringe a pesquisa a repositórios arquivados. Por exemplo:

```
path:/MIT.txt is:archived
```

Observe que o qualificador `is:` pode ser invertido com o operador `NOT`. Para procurar repositórios não arquivados, você pode pesquisar:

```
log4j NOT is:archived
```

## Como usar expressões regulares

A nova pesquisa de código (beta) dá suporte a expressões regulares para procurar padrões no código. Você pode usar expressões regulares em termos de pesquisa simples, bem como em muitos qualificadores, colocando a regex entre barras invertidas. 

Por exemplo, para procurar a expressão regular `sparse.*index`, você usaria:

```
/sparse.*index/
```

Observe que você precisará usar escape em todas as barras na expressão regular. Por exemplo, para pesquisar arquivos dentro do diretório `App/src`, você usaria:

```
/^App\/src\//
```
