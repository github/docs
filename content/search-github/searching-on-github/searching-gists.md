---
title: Searching gists
intro: 'You can search for gists on {% data variables.product.github %} and narrow the results using search qualifiers.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-gist %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## Search gists

You can search for gists globally across {% data variables.location.product_location %}.

| Qualifier | Example |
| :- | :- |
| <code>><em>n</em></code> | [**cat stars:>100**](https://gist.github.com/search?q=cat+stars%3A%3E100) finds gists with the word "cat" that have more than 100 stars.|
| <code>user:<em>USERNAME</em></code> | [**user:octocat**](https://gist.github.com/search?q=user%3Aoctocat) gets all gists created by @octocat. |
| `anon:true` | [**cat anon:true**](https://gist.github.com/search?q=cat+anon%3Atrue&ref=searchresults) includes anonymous gists in your search for cat-related gists. |
| `NOT` | [**NOT cat**](https://gist.github.com/search?q=NOT+cat&ref=searchresults) excludes all results containing cat. |
| `fork:only` | [**cat fork:only**](https://gist.github.com/search?q=cat+fork%3Aonly&ref=searchresults) matches all fork repositories containing the word "cat." |

## Filter content

Gist search looks through the file contents by default. You can also filter the results based on the content.

| Qualifier | Example |
| :- | :- |
| <code>filename:<em>FILENAME</em></code> | [**filename:.bashrc**](https://gist.github.com/search?q=filename%3A.bashrc&ref=searchresults) finds all gists with a ".bashrc" file. |
| <code>language:<em>LANGUAGE</em></code> | [**cat language:html**](https://gist.github.com/search?q=cat+language%3Ahtml&ref=searchresults) finds all gists with the word "cat" with a HTML file. |
| <code>extension:<em>EXTENSION</em></code> | [**join extension:coffee**](https://gist.github.com/search?q=join+extension%3Acoffee&ref=searchresults) finds all instances of "join" in gists with a coffee extension. |
| <code>size:><em>n</em></code> | [**system size:>1000**](https://gist.github.com/search?q=system+size%3A%3E1000&ref=searchresults) finds all instances of "system" in gists containing a file larger than 1 MB. |


GitHub Docs
Search GitHub Docs
Search GitHub Docs
Search on GitHub/Searching on GitHub/Searching gists
Searching gists
You can search for gists on GitHub and narrow the results using search qualifiers.

In this article
Search gists
Filter content
Search gists
You can search for gists globally across GitHub.com.

Qualifier	Example
>n	cat stars:>100 finds gists with the word "cat" that have more than 100 stars.
user:USERNAME	user:octocat gets all gists created by @octocat.
anon:true	cat anon:true includes anonymous gists in your search for cat-related gists.
NOT	NOT cat excludes all results containing cat.
fork:only	cat fork:only matches all fork repositories containing the word "cat."
Filter content
Gist search looks through the file contents by default. You can also filter the results based on the content.

Qualifier	Example
filename:FILENAME	filename:.bashrc finds all gists with a ".bashrc" file.
language:LANGUAGE	cat language:html finds all gists with the word "cat" with a HTML file.
extension:EXTENSION	join extension:coffee finds all instances of "join" in gists with a coffee extension.
size:>n	system size:>1000 finds all instances of "system" in gists containing a file larger than 1 MB.
Help and support
Did you find what you needed?

Privacy policy
