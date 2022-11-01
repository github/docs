---
title: Understanding GitHub Code Search (beta) syntax
intro: 'You can build search queries that return the results you want with specialized code qualifiers, regular expressions, and boolean operations.'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
---

{% note %}

**Note:** {% data reusables.search.code-search-code-view-beta-note %}<br><br>

{% data reusables.search.code-search-link %} {% data reusables.search.code-view-link %}

{% endnote %}

## About the GitHub Code Search query structure

Please note that the search syntax in this article only applies to searching code with the GitHub Code Search (beta). The syntax and qualifiers used when searching for other search types such as issues, pull requests, and wikis works the same way as it does with the classic search on GitHub.com. For more information, see "[Searching on GitHub](/search-github/searching-on-github/index.md)."

Search queries consist of search terms, consisting of text you want to search for, and qualifiers, which narrow down the search. 

A bare term with no qualifiers will match either the content of a file or the file's path. 

For example, the following query:

```
http-push
```

The above query will match the file `docs/http-push.txt`, even if it doesn't contain the term `http-push`. It will also match a file called `example.txt` if it contains the term `http-push`. 

You can enter multiple terms separated by whitespace to search for documents that satisfy both terms. 

For example, the following query:

```
sparse index
```

The search results would include all documents containing both the terms `sparse` and `index`, in any order. As examples, it would match a file containing `SparseIndexVector`, or even the phrase `index for sparse trees`. 

Searching for multiple terms separated by whitespace is the equivalent to the search `hello AND world`. Other boolean operations, such as `hello OR world`, are also supported in GitHub Code Search (beta). For more information about boolean operations, see "[Using boolean operations](#using-boolean-operations)."

GitHub Code Search (beta) also supports searching for an exact string, including whitespace. For more information, see "[Query for an exact match](#query-for-an-exact-match)."

You can narrow your code search with specialized qualifiers, such as `repo:`, `language:` and `path:`. For more information on the qualifiers you can use in GitHub Code Search (beta), see "[Using qualifiers](#using-qualifiers)."

You can also use regular expressions in your searches by surrounding the expression in slashes. For more information on using regular expressions, see "[Using regular expressions](#using-regular-expressions)."

## Query for an exact match

To search for an exact string, including whitespace, you can surround the string in quotes. For example:

```
"sparse index"
```

To search for a phrase containing a quotation mark, you can escape the quotation mark using a backslash. For example, to find the exact string `name = "tensorflow"`, you can search:

```
"name = \"tensorflow\""
```

You can also use quoted strings in qualifiers, for example:

```
path: git language: "protocol buffers"
```

## Using boolean operations

The GitHub Code Search (beta) supports boolean expressions. You can use the operators `AND`, `OR`, and `NOT` to combine search terms.

By default, adjacent terms separated by whitespace are equivalent to using the `AND` operator. For example, the search query `sparse index` is the same as `sparse AND index`, meaning that the search results will include all documents containing both the terms `sparse` and `index`, in any order.

To search for documents containing either one term or the other, you can use the `OR` operator. For example, the following query will match documents containing either `sparse` or `index`:

```
sparse OR index
```

To exclude files from your search results, you can use the `NOT` operator. For example, to exclude file in the `__testing__` directory, you can search:

```
"fatal error" NOT path:__testing__
```

You can use parentheses to express more complicated boolean expressions. For example:

```
(language:ruby OR language:python) AND NOT path:"/tests/"
```

## Using qualifiers

You can use specialized keywords to qualify your search.

### Repository qualifier

To search within a repository, use the `repo:` qualifier. You must provide the full repository name, including the owner. For example:

```
repo:github/linguist
```

To search within a set of repositories, you can combine multiple `repo:` qualifiers with the boolean operator `OR`. For example:

```
repo:github/linguist OR repo:tree-sitter/tree-sitter
```

{% note %}

**Note:** GitHub Code Search does not currently support regular expressions or partial matching for repository names, so you will have to type the entire repository name (including the user prefix) for the `repo:` qualifier to work.

{% endnote %}

### Organization and user qualifiers

To search for files within an organization, use the `org:` qualifier. For example:

```
org:github
```

To search for files within an organization, use the `user:` qualifier. For example:

```
user:octocat
```

{% note %}

**Note:** GitHub Code Search does not currently support regular expressions or partial matching for organization or user names, so you will have to type the entire organization or user name for the qualifier to work.

{% endnote %}


### Language qualifier

To narrow down to a specific languages, use the `language:` qualifier. For example: 

```
language: ruby OR language:cpp OR language:csharp
```

For a complete list of supported language names, see [languages.yaml](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml) in [github/linguist](https://github.com/github/linguist). If your preferred language is not on the list, you can open a pull request to add it.

### Path qualifier

TBD


### Symbol qualifier

TBD 

### Content qualifier

By default, bare terms search both paths and file content. To restrict a search to strictly match the content of a file and not file paths, use the `content:` qualifier. For example:

```
content:README.md
```

This query would only match files containing the term `README.md`, rather than matching files named `README.md`. 


### Is qualifier

To filter based on document properties, you can use the `is:` qualifier. At this time, the only value supported in this qualifier is `archived`, which restricts the search to archived repositories. For example:

```
path:/MIT.txt is:archived
```

Note that the `is:` qualifier can be inverted with the `NOT` operator. To search for non-archived repositories, you can search:

```
log4j NOT is:archived
```

## Using regular expressions

GitHub Code Search (beta) supports regular expressions to search for patterns in your code. You can use regular expressions in bare search terms as well as within many qualifiers, by surrounding the regex expression in backslashes. 

For example, to search for the regular expression `sparse.*index`, you would use:

```
/sparse.*index/
```

Note that you'll have to escape any forward slashes within the regular expression. For example, to search for files within the `App/src` directory, you would use:

```
/^App\/src\//
```


