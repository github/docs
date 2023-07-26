---
title: Searching code {% ifversion code-search-code-view %}(legacy){% endif %}
intro: '{% ifversion code-search-code-view %}You only need to use the legacy code search syntax if you are using the code search API{% else %}You can search for code on {% data variables.product.product_name %} and narrow the results using these code search qualifiers in any combination{% endif %}.'
redirect_from:
  - /articles/searching-code
  - /github/searching-for-information-on-github/searching-files-in-a-repository-for-exact-matches
  - /github/searching-for-information-on-github/searching-code-for-exact-matches
  - /github/searching-for-information-on-github/searching-code
  - /github/searching-for-information-on-github/searching-on-github/searching-code
allowTitleToDifferFromFilename: true  
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - GitHub search
---
{% ifversion code-search-code-view %}
{% note %}

**Note:** This article covers the syntax for legacy code search, which you should only need to use for the [REST API endpoint for searching code](/rest/search#search-code).

For information on the code search syntax that you can use on {% data variables.product.prodname_dotcom_the_website %}, see "[AUTOTITLE](/search-github/github-code-search/understanding-github-code-search-syntax)."

{% endnote %}
{% endif %}

{% data reusables.search.you-can-search-globally %} For more information, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/about-searching-on-github)."

You can only search code using these code search qualifiers. Search qualifiers specifically for repositories, users, or commits, will not work when searching for code.

{% data reusables.search.syntax_tips %}

## Considerations for code search

Due to the complexity of searching code, there are some restrictions on how searches are performed:

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- Code in [forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) is only searchable if the fork has more stars than the parent repository. Forks with fewer stars than the parent repository are **not** indexed for code search. To include forks with more stars than their parent in the search results, you will need to add `fork:true` or `fork:only` to your query. For more information, see "[AUTOTITLE](/search-github/searching-on-github/searching-in-forks)."
- Only the _default branch_ is indexed for code search.{% ifversion fpt or ghec %}
- Only files smaller than 384 KB are searchable.{% else %}* Only files smaller than 5 MB are searchable.
- Only the first 500 KB of each file is searchable.{% endif %}
- Up to 4,000 private{% ifversion ghec or ghes or ghae %} and internal{% endif %} repositories are searchable. These 4,000 repositories will be the most recently updated of the first 10,000 private{% ifversion ghec or ghes or ghae %} and internal{% endif %} repositories that you have access to.
- Only repositories with fewer than 500,000 files are searchable.{% ifversion fpt or ghec %}
- Only repositories that have had activity or have been returned in search results in the last year are searchable.{% endif %}
- Except with [`filename`](#search-by-filename) searches, you must always include at least one search term when searching source code. For example, searching for [`language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ajavascript&type=Code&ref=searchresults) is not valid, while [`amazing language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ajavascript&type=Code&ref=searchresults) is.
- At most, search results can show two fragments from the same file, but there may be more results within the file.
- You can't use the following wildcard characters as part of your search query: <code>. , : ; / \ ` ' " = * ! ? # $ & + ^ | ~ < > ( ) { } [ ] @</code>. The search will simply ignore these symbols.

## Search by the file contents or file path

With the `in` qualifier you can restrict your search to the contents of the source code file, the file path, or both. When you omit this qualifier, only the file contents are searched.

| Qualifier  | Example
| ------------- | -------------
| `in:file` | [**octocat in:file**](https://github.com/search?q=octocat+in%3Afile&type=Code) matches code where "octocat" appears in the file contents.
| `in:path` | [**octocat in:path**](https://github.com/search?q=octocat+in%3Apath&type=Code) matches code where "octocat" appears in the file path.
| `in:file,path` | [**octocat in:file,path**](https://github.com/search?q=octocat+in%3Afile%2Cpath&type=Code) matches code where "octocat" appears in the file contents or the file path.

## Search within a user's or organization's repositories

To search the code in all repositories owned by a certain user or organization, you can use the  `user` or `org` qualifier. To search the code in a specific repository, you can use the `repo` qualifier.

| Qualifier  | Example
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt extension:rb**](https://github.com/search?q=user%3Agithub+extension%3Arb&type=Code) matches code from @defunkt that ends in <em>.rb</em>.
| <code>org:<em>ORGNAME</em></code> |[**org:github extension:js**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+extension%3Ajs&type=Code) matches code from GitHub that ends in <em>.js</em>.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway extension:as**](https://github.com/search?q=repo%3Amozilla%2Fshumway+extension%3Aas&type=Code) matches code from @mozilla's shumway project that ends in <em>.as</em>.

## Search by file location

You can use the `path` qualifier to search for source code that appears at a specific location in a repository. Use `path:/` to search for files that are located at the root level of a repository. Or specify a directory name or the path to a directory to search for files that are located within that directory or any of its subdirectories.

| Qualifier  | Example
| ------------- | -------------
| <code>path:/</code> | [**octocat filename:readme path:/**](https://github.com/search?utf8=%E2%9C%93&q=octocat+filename%3Areadme+path%3A%2F&type=Code) matches _readme_ files with the word "octocat" that are located at the root level of a repository.
| <code>path:<em>DIRECTORY</em></code> | [**form path:cgi-bin language:perl**](https://github.com/search?q=form+path%3Acgi-bin+language%3Aperl&type=Code) matches Perl files with the word "form" in the <em>cgi-bin</em> directory, or in any of its subdirectories.
| <code>path:<em>PATH/TO/DIRECTORY</em></code> | [**`console path:app/public language:javascript`**](https://github.com/search?q=console+path%3A%22app%2Fpublic%22+language%3Ajavascript&type=Code) matches JavaScript files with the word "console" in the <em>app/public</em> directory, or in any of its subdirectories (even if they reside in <em>app/public/js/form-validators</em>).

## Search by language

You can search for code based on what language it's written in. The `language` qualifier can be the language name or alias. For a full list of supported languages with their names and aliases, see the [github-linguist/linguist repository](https://github.com/github-linguist/linguist/blob/master/lib/linguist/languages.yml).

| Qualifier  | Example
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**element language:xml size:100**](https://github.com/search?q=element+language%3Axml+size%3A100&type=Code) matches code with the word "element" that's marked as being XML and has exactly 100 bytes.
| <code>language:<em>LANGUAGE</em></code> | [**display language:scss**](https://github.com/search?q=display+language%3Ascss&type=Code) matches code with the word "display," that's marked as being SCSS.
| <code>language:<em>LANGUAGE</em></code> | [**org:mozilla language:markdown**](https://github.com/search?utf8=%E2%9C%93&q=org%3Amozilla+language%3Amarkdown&type=Code) matches code from all @mozilla's repositories that's marked as Markdown.

## Search by file size

You can use the `size` qualifier to search for source code based on the size of the file where the code exists. The `size` qualifier uses [greater than, less than, and range qualifiers](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax) to filter results based on the byte size of the file in which the code is found.

| Qualifier  | Example
| ------------- | -------------
| <code>size:<em>n</em></code> | [**function size:&gt;10000 language:python**](https://github.com/search?q=function+size%3A%3E10000+language%3Apython&type=Code) matches code with the word "function," written in Python, in files that are larger than 10 KB.

## Search by filename

The `filename` qualifier matches code files with a certain filename. You can also find a file in a repository using the file finder. For more information, see "[AUTOTITLE](/search-github/searching-on-github/finding-files-on-github)."

| Qualifier  | Example
| ------------- | -------------
| <code>filename:<em>FILENAME</em></code> | [**filename:linguist**](https://github.com/search?utf8=%E2%9C%93&q=filename%3Alinguist&type=Code) matches files named "linguist."
| <code>filename:<em>FILENAME</em></code> | [**filename:.vimrc commands**](https://github.com/search?q=filename%3A.vimrc+commands&type=Code) matches _.vimrc_ files with the word "commands."
| <code>filename:<em>FILENAME</em></code> | [**filename:test_helper path:test language:ruby**](https://github.com/search?q=minitest+filename%3Atest_helper+path%3Atest+language%3Aruby&type=Code) matches Ruby files named _test_helper_ within the _test_ directory.

## Search by file extension

The `extension` qualifier matches code files with a certain file extension.

| Qualifier  | Example
| ------------- | -------------
| <code>extension:<em>EXTENSION</em></code> | [**form path:cgi-bin extension:pm**](https://github.com/search?q=form+path%3Acgi-bin+extension%3Apm&type=Code) matches code with the word "form," under <em>cgi-bin</em>, with the <em>.pm</em> file extension.
| <code>extension:<em>EXTENSION</em></code> | [**icon size:>200000 extension:css**](https://github.com/search?utf8=%E2%9C%93&q=icon+size%3A%3E200000+extension%3Acss&type=Code) matches files larger than 200 KB that end in .css and have the word "icon."

## Further reading

- "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/sorting-search-results)"
- "[AUTOTITLE](/search-github/searching-on-github/searching-in-forks)"{% ifversion fpt or ghec %}
- "[AUTOTITLE](/repositories/working-with-files/using-files/navigating-code-on-github)"{% endif %}
