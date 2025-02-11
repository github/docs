---
title: Navigating code on GitHub
intro: 'You can understand the relationships within and across repositories by navigating code directly in {% data variables.product.github %}.'
redirect_from:
  - /articles/navigating-code-on-github
  - /github/managing-files-in-a-repository/navigating-code-on-github
  - /github/managing-files-in-a-repository/managing-files-on-github/navigating-code-on-github
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
---
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the article accordingly. -->

## About navigating code on {% data variables.product.prodname_dotcom %}

Code navigation helps you to read, navigate, and understand code by showing and linking definitions of a named entity corresponding to a reference to that entity, as well as references corresponding to an entity's definition.

![Screenshot showing a file with a function highlighted. A pop-up has information about the function on two tabs: "Definition" and "Reference".](/assets/images/help/repository/code-navigation-popover.png)

Code navigation uses the open source [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) library. The following languages support code navigation.

{% data reusables.search.code-nav-supported-languages %}

You do not need to configure anything in your repository to enable code navigation. We will automatically extract code navigation information for these supported languages in all repositories.

{% data variables.product.prodname_dotcom %} has developed a code navigation approach based on the open source [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) library that searches all definitions and references across a repository to find entities with a given name.

{% ifversion code-view-ui %}You can use keyboard shortcuts to navigate within a code file. For more information, see [AUTOTITLE](/get-started/accessibility/keyboard-shortcuts#navigating-within-code-files).{% endif %}

{% ifversion code-search-upgrade %}

## Using the symbols pane

You can now quickly view and navigate between symbols such as functions or classes in your code with the symbols pane. You can search for a symbol in a single file, in all files in a repository, or even in all public repositories on {% data variables.product.prodname_dotcom %}.

Symbol search is a feature of code search. For more information, see [AUTOTITLE](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier).

1. Select a repository, then navigate to a file containing symbols.
1. To bring up the symbols pane, above the file content, click {% octicon "code-square" aria-label="The code square icon" %}.

   Alternatively, you can open the symbols pane by clicking an eligible symbol in your file. Clickable symbols are highlighted in yellow when you hover over them.

1. Click the symbol you would like to find from the symbols pane or within the file itself.

   * To search for a symbol in the repository as a whole, in the symbols pane, click **Search for this symbol in this repository**. To search for a symbol in all repositories on {% data variables.product.prodname_dotcom %}, click **all repositories**.

1. To navigate between references to a symbol, click {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} or {% octicon "chevron-up" aria-label="The upwards-facing chevron icon" %}.
1. To navigate to a specific reference to a symbol, click a result of the symbol search under **{% octicon "chevron-down" aria-hidden="true" %} In this file**.
1. To exit the search for a specific symbol, click **{% octicon "arrow-left" aria-hidden="true" %} All Symbols**.
{% endif %}

## Jumping to the definition of a function or method

You can jump to a function or method's definition within the same repository by clicking the function or method call in a file.

![Screenshot of the function window. A section, titled "Definition," is outlined in dark orange.](/assets/images/help/repository/jump-to-definition-tab.png)

## Finding all references of a function or method

You can find all references for a function or method within the same repository by clicking the function or method call in a file.

![Screenshot of the function window. A section, titled "3 References," is outlined in dark orange.](/assets/images/help/repository/find-all-references-tab.png)

## Troubleshooting code navigation

If code navigation is enabled for you but you don't see links to the definitions of functions and methods:
* Code navigation only works for active branches. Push to the branch and try again.
* Code navigation only works for repositories with fewer than 100,000 files.

## Further reading

* [AUTOTITLE]{% ifversion code-search-upgrade %}(/search-github/github-code-search/about-github-code-search){% else %}(/search-github/searching-on-github/searching-code){% endif %}
