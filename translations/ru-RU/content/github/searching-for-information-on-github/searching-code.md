---
title: Searching code
intro: 'You can search for code on {% data variables.product.product_name %} and narrow the results using these code search qualifiers in any combination.'
redirect_from:
  - /articles/searching-code
  - /github/searching-for-information-on-github/searching-files-in-a-repository-for-exact-matches
  - /github/searching-for-information-on-github/searching-code-for-exact-matches
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

You can search for code globally across all of {% data variables.product.product_name %}, or search for code within a particular repository or organization. To search for code across all public repositories, you must be signed in to a {% data variables.product.product_name %} account. For more information, see "[About searching on GitHub](/articles/about-searching-on-github)."

You can only search code using these code search qualifiers. Search qualifiers specifically for repositories, users, or commits, will not work when searching for code.

{% data reusables.search.syntax_tips %}

### Considerations for code search

Due to the complexity of searching code, there are some restrictions on how searches are performed:

- {% data reusables.search.required_login %}
- Code in [forks](/articles/about-forks) is only searchable if the fork has more stars than the parent repository. Forks with fewer stars than the parent repository are **not** indexed for code search. To include forks with more stars than their parent in the search results, you will need to add `fork:true` or `fork:only` to your query. For more information, see "[Searching in forks](/articles/searching-in-forks)."
- Only the _default branch_ is indexed for code search.{% if currentVersion == "free-pro-team@latest" %}
- Only files smaller than 384 KB are searchable.{% else %}* Only files smaller than 5 MB are searchable.
- Only the first 500 KB of each file is searchable.{% endif %}
- Only repositories with fewer than 500,000 files are searchable.
- Users who are signed in can search all public repositories.
- Except with [`filename`](#search-by-filename) searches, you must always include at least one search term when searching source code. For example, searching for [`language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ajavascript&type=Code&ref=searchresults) is not valid, while [`amazing language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ajavascript&type=Code&ref=searchresults) is.
- At most, search results can show two fragments from the same file, but there may be more results within the file.
- You can't use the following wildcard characters as part of your search query: <code>. , : ; / \ ` ' " = * ! ? # $ & + ^ | ~ < > ( ) { } [ ]</code>. The search will simply ignore these symbols.

### Search by the file contents or file path

With the `in` qualifier you can restrict your search to the contents of the source code file, the file path, or both. When you omit this qualifier, only the file contents are searched.

| Qualifier | Пример                                                                                                                                                                 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:file` | [**octocat in:file**](https://github.com/search?q=octocat+in%3Afile&type=Code) matches code where "octocat" appears in the file contents.                              |
| `in:path` | [**octocat in:path**](https://github.com/search?q=octocat+in%3Apath&type=Code) matches code where "octocat" appears in the file path.                                  |
|           | [**octocat in:file,path**](https://github.com/search?q=octocat+in%3Afile%2Cpath&type=Code) matches code where "octocat" appears in the file contents or the file path. |

### Search within a user's or organization's repositories

To search the code in all repositories owned by a certain user or organization, you can use the  `user` or `org` qualifier. To search the code in a specific repository, you can use the `repo` qualifier.

| Qualifier                 | Пример                                                                                                                                                                                                     |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt extension:rb**](https://github.com/search?q=user%3Agithub+extension%3Arb&type=Code) matches code from @defunkt that ends in <em>.rb</em>.                                      |
| <code>org:<em>ORGNAME</em></code> | [**org:github extension:js**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+extension%3Ajs&type=Code) matches code from GitHub that ends in <em>.js</em>.                            |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway extension:as**](https://github.com/search?q=repo%3Amozilla%2Fshumway+extension%3Aas&type=Code) matches code from @mozilla's shumway project that ends in <em>.as</em>. |

### Search by file location

You can use the `path` qualifier to search for source code that appears at a specific location in a repository. Use `path:/` to search for files that are located at the root level of a repository. Or specify a directory name or the path to a directory to search for files that are located within that directory or any of its subdirectories.

| Qualifier                  | Пример                                                                                                                                                                                                                                                                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>path:/</code>  | [**octocat filename:readme path:/**](https://github.com/search?utf8=%E2%9C%93&q=octocat+filename%3Areadme+path%3A%2F&type=Code) matches _readme_ files with the word "octocat" that are located at the root level of a repository.                                                                                              |
| <code>path:<em>DIRECTORY</em></code>  | [**form path:cgi-bin language:perl**](https://github.com/search?q=form+path%3Acgi-bin+language%3Aperl&type=Code) matches Perl files with the word "form" in a <em>cgi-bin</em> directory, or in any of its subdirectories.                                                                                               |
| <code>path:<em>PATH/TO/DIRECTORY</em></code> | [**console path:app/public language:javascript**](https://github.com/search?q=console+path%3A%22app%2Fpublic%22+language%3Ajavascript&type=Code) matches JavaScript files with the word "console" in an <em>app/public</em> directory, or in any of its subdirectories (even if they reside in <em>app/public/js/form-validators</em>). |

### Search by language

You can search for code based on what language it's written in.

| Qualifier                  | Пример                                                                                                                                                                                                  |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**element language:xml size:100**](https://github.com/search?q=element+language%3Axml+size%3A100&type=Code) matches code with the word "element" that's marked as being XML and has exactly 100 bytes. |
|                            | [**display language:scss**](https://github.com/search?q=display+language%3Ascss&type=Code) matches code with the word "display," that's marked as being SCSS.                                           |
|                            | [**org:mozilla language:markdown**](https://github.com/search?utf8=%E2%9C%93&q=org%3Amozilla+language%3Amarkdown&type=Code) matches code from all @mozilla's repositories that's marked as Markdown.    |

### Search by file size

You can use the `size` qualifier to search for source code based on the size of the file where the code exists. The `size` qualifier uses [greater than, less than, and range qualifiers](/articles/understanding-the-search-syntax) to filter results based on the byte size of the file in which the code is found.

| Qualifier                  | Пример                                                                                                                                                                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>size:<em>n</em></code> | [**function size:&gt;10000 language:python**](https://github.com/search?q=function+size%3A%3E10000+language%3Apython&type=Code) matches code with the word "function," written in Python, in files that are larger than 10 KB. |

### Search by filename

The `filename` qualifier matches code files with a certain filename. You can also find a file in a repository using the file finder. For more information, see "[Finding files on GitHub](/articles/finding-files-on-github)."

| Qualifier                  | Пример                                                                                                                                                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>filename:<em>FILENAME</em></code> | [**filename:linguist**](https://github.com/search?utf8=%E2%9C%93&q=filename%3Alinguist&type=Code) matches files named "linguist."                                                                                         |
|                            | [**filename:.vimrc commands**](https://github.com/search?q=filename%3A.vimrc+commands&type=Code) matches *.vimrc* files with the word "commands."                                                                         |
|                            | [**filename:test_helper path:test language:ruby**](https://github.com/search?q=minitest+filename%3Atest_helper+path%3Atest+language%3Aruby&type=Code) matches Ruby files named *test_helper* within the *test* directory. |

### Search by file extension

The `extension` qualifier matches code files with a certain file extension.

| Qualifier                  | Пример                                                                                                                                                                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>extension:<em>EXTENSION</em></code> | [**form path:cgi-bin extension:pm**](https://github.com/search?q=form+path%3Acgi-bin+extension%3Apm&type=Code) matches code with the word "form," under <em>cgi-bin</em>, with the <em>.pm</em> file extension. |
|                            | [**icon size:>200000 extension:css**](https://github.com/search?utf8=%E2%9C%93&q=icon+size%3A%3E200000+extension%3Acss&type=Code) matches files larger than 200 KB that end in .css and have the word "icon."                        |

### Дополнительная литература

- "[Sorting search results](/articles/sorting-search-results/)"
- "[Searching in forks](/articles/searching-in-forks)"{% if currentVersion == "free-pro-team@latest" %}
- "[Navigating code on {% data variables.product.prodname_dotcom %}](/github/managing-files-in-a-repository/navigating-code-on-github)"{% endif %}
