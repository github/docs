---
title: GitHub Code Search (ベータ版) の構文について
intro: 特殊なコード修飾子、正規表現、ブール演算を使用して、必要な結果の検索クエリを作成できます。
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 098da2b7fe8a8c5466805c583e6b029b5b9b58c1
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160064'
---
{% note %}

**注:** {% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-search-link %} {% data reusables.search.code-view-link %}

{% endnote %}

## 新しいコード検索 (ベータ版) のクエリ構造について

この記事の検索構文は、新しいコード検索 (ベータ版) が有効になっているコードの検索にのみ適用されます。 {% data reusables.search.non-code-search-explanation %}

検索クエリは、検索したいテキストと、検索を絞り込む修飾子で構成される検索用語で構成されます。 

修飾子のないただの用語は、ファイルの内容またはファイルのパスのいずれかと一致します。 

たとえば、次のクエリがあります。

```
http-push
```

上記のクエリは、用語 `http-push` が含まれていなくても、 ファイル `docs/http-push.txt` と一致します。 用語 `http-push` が含まれている場合は、`example.txt` というファイルとも一致します。 

複数の用語を空白で区切って入力して、両方の用語を満たすドキュメントを検索できます。 

たとえば、次のクエリがあります。

```
sparse index
```

検索結果には、その順序を問わず `sparse` と `index` の両方の用語を含むすべてのドキュメントが含まれます。 たとえば、`SparseIndexVector` を含むファイル、フレーズ `index for sparse trees` を含むファイル、さらには用語 `sparse` を含む `index.txt` というファイルにも一致します。  

空白で区切られた複数の用語の検索は、検索 `hello AND world` と同じです。 新しいコード検索 (ベータ版) では `hello OR world` などの他のブール演算もサポートされています。 ブール演算について詳しくは、「[ブール演算の使用](#using-boolean-operations)」を参照してください。

新しいコード検索 (ベータ版) では、空白を含めた正確な文字列の検索もサポートされています。 詳しくは、「[完全一致のクエリ](#query-for-an-exact-match)」を参照してください。

`repo:`、`language:`、`path:` などの特殊な修飾子を使用して、コード検索を絞り込むことができます。 新しいコード検索 (ベータ版) で使用できる修飾子について詳しくは、「[修飾子の使用](#using-qualifiers)」を参照してください。

また、式を円記号で囲むことで、検索で正規表現を使用することもできます。 正規表現の使用について詳しくは、「[正規表現の使用](#using-regular-expressions)」を参照してください。

## 完全一致のクエリ

空白を含む正確な文字列を検索するには、文字列を引用符で囲みます。 次に例を示します。

```
"sparse index"
```

引用符を含むフレーズを検索するには、円記号を使用して引用符をエスケープします。 たとえば、正確な文字列 `name = "tensorflow"` を見つけるには、次のように検索します。

```
"name = \"tensorflow\""
```

次のように、引用符で囲まれた文字列を修飾子で使用することもできます。

```
path: git language: "protocol buffers"
```

## ブール演算の使用

新しいコード検索 (ベータ版) では、ブール式がサポートされています。 演算子 `AND`、`OR`、および `NOT` を使用して、検索用語を組み合わせることができます。

既定では、隣接する用語を空白で区切ることは、演算子 `AND` を使用することと同じです。 たとえば、検索クエリ `sparse index` は `sparse AND index` と同じです。つまり、検索結果には、その順序を問わず `sparse` と `index` の両方の用語を含むすべてのドキュメントが含まれます。

どちらか一方の用語を含むドキュメントを検索するには、`OR` 演算子を使用します。 たとえば、次のクエリは、`sparse` または `index` のどちらかを含むドキュメントと一致します。

```
sparse OR index
```

検索結果からファイルを除外するには、`NOT` 演算子を使用します。 たとえば、`__testing__` ディレクトリ内のファイルを除外するには、次のように検索します。

```
"fatal error" NOT path:__testing__
```

かっこを使用して、より複雑なブール式を表すことができます。 次に例を示します。

```
(language:ruby OR language:python) AND NOT path:"/tests/"
```

## 修飾子の使用

特殊なキーワードを使用して、検索を修飾できます。
- [リポジトリ修飾子](#repository-qualifier)
- [Organization とユーザーの修飾子](#organization-and-user-qualifiers)
- [言語修飾子](#language-qualifier)
- [パス修飾子](#path-qualifier)
- [シンボル修飾子](#symbol-qualifier)
- [コンテンツ修飾子](#content-qualifier)
- [Is 修飾子](#is-qualifier)

### リポジトリ修飾子

リポジトリを検索するには、`repo:` 修飾子を使用します。 所有者を含む完全なリポジトリ名を指定する必要があります。 次に例を示します。

```
repo:github/linguist
```

リポジトリのセット内で検索するには、複数の `repo:` 修飾子をブール演算子 `OR` と組み合わせます。 たとえば次のような点です。

```
repo:github/linguist OR repo:tree-sitter/tree-sitter
```

{% note %}

**メモ:** 新しいコード検索のベータ版では、現在、リポジトリ名の正規表現や部分一致はサポートされていないため、`repo:` 修飾子を機能させるには、リポジトリ名全体 (ユーザー プレフィックスを含む) を入力する必要があります。

{% endnote %}

### Organization とユーザーの修飾子

Organization 内のファイルを検索するには `org:` 修飾子を使用します。 次に例を示します。

```
org:github
```

個人用アカウント内のファイルを検索するには `user:` 修飾子を使用します。 たとえば次のような点です。

```
user:octocat
```

{% note %}

**メモ:** 新しいコード検索のベータ版では、現在、Organization やユーザー名の正規表現や部分一致はサポートされていないため、修飾子を機能させるには、Organization やユーザー名全体を入力する必要があります。

{% endnote %}


### 言語修飾子

特定の言語に絞り込むには、`language:` 修飾子を使用します。 次に例を示します。 

```
language: ruby OR language:cpp OR language:csharp
```

サポートされている言語名の完全な一覧については、[github/linguist](https://github.com/github/linguist) の [languages.yaml](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml) を参照してください。 希望の言語が一覧にない場合は、追加の pull request を開くことができます。

### パス修飾子

ファイル パス内で検索するには、`path:` 修飾子を使用します。 これは、ファイル パス内のいずれかの場所にその用語を含むファイルと一致します。 たとえば、パス内に用語 `unit_tests` を含むファイルを検索するには、次を使用します。

```
path:unit_tests
```
 上記のクエリは、`src/unit_tests/my_test.py` と `src/docs/unit_tests.md` の両方と一致します。両方ともパスのどこかに `unit_test` が含まれているからです。 

 特定のファイル名 (そして、パスの一部ではない) のみと一致させるには、正規表現を使用します。

 ```
 path:/(^|\/)README\.md$/
 ```
正規表現では `.` は特別な意味を持つため、ファイル名内の `.` はエスケープされることに注意してください。 正規表現の使用について詳しくは、「[正規表現の使用](#using-regular-expressions)」を参照してください。

<br>

`path:` 修飾子では、いくつかの制限付き glob 式を使用することもできます。

たとえば、拡張子 `txt` のファイルを検索するには、次を使用できます。

```
path:*.txt
```
<br>
`src` ディレクトリ内の JavaScript ファイルを検索するには、次を使用できます。

```
path:src/*.js
```

- 既定では、glob 式はパスの先頭に固定されないため、上記の式は `app/src/main.js` のようなパスとも一致します。 ただし、式の前に `/` を付けると、それが先頭に固定されます。 次に例を示します。

    ```
    path:/src/*.js
    ```
- `*` は `/` 文字と一致しないため、上記の例では、すべての結果が `src` ディレクトリの直接の子孫になります。 サブディレクトリ内で一致し、結果に `/src/app/testing/utils/example.js` のような深く入れ子になったファイルが含まれるようにするには、`**` を使用します。 次に例を示します。

    ```
    path:/src/**/*.js
    ```
<br>

`?` グローバル文字を使用することもできます。 たとえば、パス `file.aac` または `file.abc` と一致させるには、次を使用できます。

```
path:*.a?c
```
<br>
`*` や `?` などの特殊文字を含むファイル名を検索するには、単に引用符で囲まれた文字列を使用します。

```
path:"file?"
```

glob 式は引用符で囲まれた文字列に対して無効になっているため、上記のクエリはリテラル文字列 `file?` を含むパスにのみ一致します。 

### シンボル修飾子

`symbol:` 修飾子を使用して、コード内の関数やクラス定義などのシンボル定義を検索できます。 シンボル検索は、オープンソースの [Tree-sitter](https://github.com/tree-sitter) パーサー エコシステムを使用したコードの解析に基づいているため、追加の設定やビルド ツールの統合は必要ありません。

たとえば、`WithContext` というシンボルを検索するには:

```
language:go symbol:WithContext
```

一部の言語では、プレフィックス (クラス名のプレフィックスなど) を使用してシンボルを検索できます。 たとえば、構造体 `Maint` のメソッド `deleteRows` の場合、Go を使用していれば `symbol:Maint.deleteRows`、Rust では `symbol:Maint::deleteRows` を検索できます。

シンボル修飾子で正規表現を使用することもできます。 たとえば、次のクエリでは、Rust で `String` 型にユーザーが実装した変換が見つかります。

```
language:rust symbol:/^String::to_.*/
```

この修飾子は定義のみを検索し、参照は検索しないこと、また、すべてのシンボル型または言語がまだ完全にサポートされているわけではないことに注意してください。 シンボル抽出は、次の言語でサポートされています。 

- C#
- Python
- Go
- Java
- JavaScript
- TypeScript
- PHP
- プロトコル バッファー
- Ruby
- Rust

ただし、その他の言語のサポートも追加するよう取り組んでいます。 この取り組みに貢献したい場合は、シンボル検索の基になっているオープンソースの [Tree-sitter](https://github.com/tree-sitter) パーサー エコシステムでご希望の言語のサポートを追加できます。

### Content 修飾子

既定では、ただの用語はパスとファイルの内容の両方を検索します。 ファイル パスではなく、ファイルの内容と厳密に一致するように検索を制限するには、`content:` 修飾子を使用します。 次に例を示します。

```
content:README.md
```

このクエリは、`README.md` いうファイルと一致するのではなく、用語 `README.md` を含むファイルにのみ一致します。 

### Is 修飾子

ドキュメントのプロパティに基づいてフィルター処理するには、`is:` 修飾子を使用できます。 現時点では、この修飾子でサポートされている唯一の値は、アーカイブされたリポジトリに検索を制限する `archived` です。 次に例を示します。

```
path:/MIT.txt is:archived
```

`is:` 修飾子は `NOT` 演算子で反転させることができます。 アーカイブされていないリポジトリを検索するには、次を検索します。

```
log4j NOT is:archived
```

## 正規表現の使用

新しいコード検索 (ベータ版) では、コード内のパターンを検索するための正規表現がサポートされています。 正規表現は、正規表現を円記号で囲むことで、ただの検索用語だけでなく多くの修飾子内でも使用できます。 

たとえば、正規表現 `sparse.*index` を検索するには、次を使用します。

```
/sparse.*index/
```

正規表現内のスラッシュはエスケープする必要があることに注意してください。 たとえば、`App/src` ディレクトリ内のファイルを検索するには、次を使用します。

```
/^App\/src\//
```
