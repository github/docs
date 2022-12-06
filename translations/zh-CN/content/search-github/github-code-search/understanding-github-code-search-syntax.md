---
title: 了解 GitHub 代码搜索 (beta) 语法
intro: 可以使用专用代码限定符、正则表达式和布尔运算生成用于查询所需结果的搜索查询。
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 098da2b7fe8a8c5466805c583e6b029b5b9b58c1
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159476'
---
{% note %}

注意：{% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-search-link %} {% data reusables.search.code-view-link %}

{% endnote %}

## 关于新代码搜索 (beta) 查询结构

本文中的搜索语法仅适用于启用了新代码搜索 (beta) 的搜索代码。 {% data reusables.search.non-code-search-explanation %}

搜索查询由搜索词（包括要搜索的文本）和限定符（可缩小搜索范围）组成。 

一个没有限定符的裸词将与文件的内容或文件的路径匹配。 

例如，以下查询：

```
http-push
```

上述查询与文件 `docs/http-push.txt` 匹配，即使该文件不包含术语 `http-push`。 该查询还与名为 `example.txt` 的文件匹配（如果文件包含术语 `http-push`）。 

可以输入多个用空格分隔的术语，以搜索满足这两个字词的文档。 

例如，以下查询：

```
sparse index
```

搜索结果将包括包含术语 `sparse` 和 `index` 的所有文档，并按任意顺序排列。 例如，它将匹配包含 `SparseIndexVector` 的文件、带有短语 `index for sparse trees` 的文件，甚至匹配名为 `index.txt` 且包含术语 `sparse` 的文件。  

搜索多个用空格分隔的术语等效于搜索 `hello AND world`。 新的代码搜索 (beta) 也支持其他布尔运算，例如 `hello OR world`。 有关布尔运算的详细信息，请参阅“[使用布尔运算](#using-boolean-operations)”。

新的代码搜索 (beta) 还支持搜索确切的字符串，包括空格。 有关详细信息，请参阅“[查询完全匹配项](#query-for-an-exact-match)”。

可以使用专用限定符（如 `repo:`、`language:` 和 `path:`）缩小代码搜索范围。 有关可在新代码搜索 (beta) 中使用的限定符的详细信息，请参阅“[使用限定符](#using-qualifiers)”。

还可以通过用反斜杠将表达式括起来，在搜索中使用正则表达式。 有关使用正则表达式的详细信息，请参阅“[使用正则表达式](#using-regular-expressions)”。

## 查询完全匹配项

要搜索确切的字符串（包括空格），可以用引号将字符串括起来。 例如：

```
"sparse index"
```

若要搜索包含引号的短语，可以使用反斜杠对引号进行转义。 例如，若要查找确切的字符串 `name = "tensorflow"`，可以搜索：

```
"name = \"tensorflow\""
```

还可以在限定符中使用带引号的字符串，例如：

```
path: git language: "protocol buffers"
```

## 使用布尔运算

新的代码搜索 (beta) 支持布尔表达式。 可以使用运算符 `AND`、`OR` 和 `NOT` 来组合搜索词。

默认情况下，用空格分隔的相邻术语等效于使用 `AND` 运算符。 例如，搜索查询 `sparse index` 与 `sparse AND index` 相同，这意味着搜索结果将包括包含术语 `sparse` 和 `index` 的所有文档，并按任意顺序排列。

若要搜索包含某个或其他术语的文档，可以使用 `OR` 运算符。 例如，以下查询将匹配包含 `sparse` 或 `index` 的文档：

```
sparse OR index
```

若要从搜索结果中排除文件，可以使用 `NOT` 运算符。 例如，若要排除 `__testing__` 目录中的文件，可以搜索：

```
"fatal error" NOT path:__testing__
```

可以使用括号来表示更复杂的布尔表达式。 例如：

```
(language:ruby OR language:python) AND NOT path:"/tests/"
```

## 使用限定符

可以使用专用关键字来限定搜索。
- [存储库限定符](#repository-qualifier)
- [组织和用户限定符](#organization-and-user-qualifiers)
- [语言限定符](#language-qualifier)
- [路径限定符](#path-qualifier)
- [符号限定符](#symbol-qualifier)
- [内容限定符](#content-qualifier)
- [Is 限定符](#is-qualifier)

### 存储库限定符

若要在存储库中搜索，请使用 `repo:` 限定符。 必须提供完整的存储库名称，包括所有者。 例如：

```
repo:github/linguist
```

若要在一组存储库中搜索，可以将多个 `repo:` 限定符与布尔运算符 `OR` 组合在一起。 例如：

```
repo:github/linguist OR repo:tree-sitter/tree-sitter
```

{% note %}

注意：新的代码搜索 beta 版目前不支持正则表达式或存储库名称的部分匹配，因此必须键入整个存储库名称（包括用户前缀）才能使用 `repo:` 限定符。

{% endnote %}

### 组织和用户限定符

若要搜索组织内的文件，请使用 `org:` 限定符。 例如：

```
org:github
```

若要搜索个人帐户内的文件，请使用 `user:` 限定符。 例如：

```
user:octocat
```

{% note %}

注意：新的代码搜索 beta 版当前不支持组织或用户名的正则表达式或部分匹配，因此必须键入整个组织或用户名才能使用限定符。

{% endnote %}


### 语言限定符

若要缩小到特定语言的范围，请使用 `language:` 限定符。 例如： 

```
language: ruby OR language:cpp OR language:csharp
```

有关支持的语言名称的完整列表，请参阅 [github/linguist](https://github.com/github/linguist) 中的 [languages.yaml](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)。 如果你的首选语言不在列表中，则可以打开拉取请求来添加它。

### 路径限定符

若要在文件路径中搜索，请使用 `path:` 限定符。 这将匹配包含文件路径中任意位置的术语的文件。 例如，若要查找路径中包含术语 `unit_tests` 的文件，请使用：

```
path:unit_tests
```
 上面的查询将匹配 `src/unit_tests/my_test.py` 和 `src/docs/unit_tests.md`，因为它们都包含路径中某处的 `unit_test`。 

 若要仅匹配特定文件名（而不是路径的一部分），可以使用正则表达式：

 ```
 path:/(^|\/)README\.md$/
 ```
请注意，文件名中的 `.` 是转义的，因为 `.` 对正则表达式具有特殊含义。 有关使用正则表达式的详细信息，请参阅“[使用正则表达式](#using-regular-expressions)”。

<br>

还可以在 `path:` 限定符中使用一些有限的 glob 表达式。

例如，若要搜索扩展名为 `txt` 的文件，可以使用：

```
path:*.txt
```
<br>
若要在 `src` 目录中搜索 JavaScript 文件，可以使用：

```
path:src/*.js
```

- 默认情况下，glob 表达式不会定位到路径的开头，因此上述表达式仍将与类似 `app/src/main.js` 的路径匹配。 但是，如果在表达式前面加上 `/`，它将定位到开头。 例如：

    ```
    path:/src/*.js
    ```
- 请注意，`*` 与 `/` 字符不匹配，因此对于上面的示例，所有结果都将是 `src` 目录的直接后代。 若要在子目录中匹配，以便结果包含深层嵌套文件（如 `/src/app/testing/utils/example.js`），可以使用 `**`。 例如：

    ```
    path:/src/**/*.js
    ```
<br>

可以使用 `?` 全局字符。 例如，若要匹配路径 `file.aac` 或 `file.abc`，可以使用：

```
path:*.a?c
```
<br>
若要搜索包含特殊字符（如 `*` 或 `?`）的文件名，只需使用带引号的字符串：

```
path:"file?"
```

由于对带引号的字符串禁用 glob 表达式，因此上述查询将仅匹配包含文本字符串 `file?` 的路径。 

### 符号限定符

可以使用 `symbol:` 限定符在代码中搜索符号定义（例如函数或类定义）。 符号搜索基于使用开源 [Tree-sitter](https://github.com/tree-sitter) 分析程序生态系统解析代码，因此不需要额外的设置或生成工具集成。

例如，若要搜索名为 `WithContext` 的符号：

```
language:go symbol:WithContext
```

在某些语言中，可以使用前缀（例如类名的前缀）搜索符号。 例如，对于结构 `Maint` 上的方法 `deleteRows`，可以在使用 Go 时搜索 `symbol:Maint.deleteRows`，或在 Rust 中搜索 `symbol:Maint::deleteRows`。

还可以将正则表达式与符号限定符一起使用。 例如，以下查询将查找人们在 Rust 中为 `String` 类型实现的转换：

```
language:rust symbol:/^String::to_.*/
```

请注意，此限定符仅搜索定义而不搜索引用，并且尚未完全支持所有符号类型或语言。 以下语言支持符号提取。 

- C#
- Python
- Go
- Java
- JavaScript
- TypeScript
- PHP
- 协议缓冲区
- Ruby
- Rust

我们正在努力添加对更多语言的支持。 如果想为这项工作做出贡献，可以在符号搜索基于的开源 [Tree-sitter](https://github.com/tree-sitter) 分析程序生态系统中添加对语言的支持。

### 内容限定符

默认情况下，裸词搜索路径和文件内容。 若要将搜索限制为严格匹配文件内容而不是文件路径，请使用 `content:` 限定符。 例如：

```
content:README.md
```

此查询仅匹配包含术语 `README.md` 的文件，而不匹配名为 `README.md` 的文件。 

### Is 限定符

若要根据文档属性进行筛选，可以使用 `is:` 限定符。 目前，此限定符中唯一支持的值是 `archived`，这会将搜索限制为存档存储库。 例如：

```
path:/MIT.txt is:archived
```

请注意，可以使用 `is:` 运算符反转 `NOT` 限定符。 若要搜索未存档的存储库，可以搜索：

```
log4j NOT is:archived
```

## 使用正则表达式

新的代码搜索 (beta) 支持正则表达式来搜索代码中的模式。 通过用反斜杠将正则表达式括起来，可以在裸搜索词以及许多限定符中使用正则表达式。 

例如，若要搜索正则表达式 `sparse.*index`，可以使用：

```
/sparse.*index/
```

请注意，必须在正则表达式中转义任何正斜杠。 例如，若要搜索 `App/src` 目录中的文件，可以使用：

```
/^App\/src\//
```
