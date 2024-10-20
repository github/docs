---
title: Navigating code on GitHub
intro: 'You can understand the relationships within and across repositories by navigating code directly in {% data variables.product.product_name %}.'
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

![Screenshot showing a code file with a function called "request" highlighted and a pop-up window with information about the function underneath. The pop-up has two tabs: "Definition" and "Reference".](/assets/images/help/repository/code-navigation-popover.png)

Code navigation uses the open source [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) library. The following languages and navigation strategies are supported.

{% rowheaders %}

| Language         | Search-based code navigation                 | Precise code navigation                      |
|------------------|:--------------------------------------------:|:--------------------------------------------:|
| Bash             | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| C                | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| C#               | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| C++              | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| CodeQL           | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Elixir           | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Go               | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| JSX              | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Java             | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| JavaScript       | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Lua              | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| PHP              | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Protocol Buffers | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Python           | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| R                | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Ruby             | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Rust             | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Scala            | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Starlark         | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Swift            | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| TypeScript       | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

You do not need to configure anything in your repository to enable code navigation. We will automatically extract search-based and precise code navigation information for these supported languages in all repositories and you can switch between the two supported code navigation approaches if your programming language is supported by both.

{% data variables.product.prodname_dotcom %} has developed two code navigation approaches based on the open source [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) and [`stack-graphs`](https://github.com/github/stack-graphs) library:
* Search-based - searches all definitions and references across a repository to find entities with a given name
* Precise - resolves definitions and references based on the set of classes, functions, and imported definitions at a given point in your code

To learn more about these approaches, see "[Precise and search-based navigation](#precise-and-search-based-navigation)."

Future releases will add _precise code navigation_ for more languages, which is a code navigation approach that can give more accurate results.

{% ifversion code-view-ui %}You can use keyboard shortcuts to navigate within a code file. For more information, see "[AUTOTITLE](/get-started/accessibility/keyboard-shortcuts#navigating-within-code-files)."{% endif %}

{% ifversion code-search-upgrade %}

## Using the symbols pane

You can now quickly view and navigate between symbols such as functions or classes in your code with the symbols pane. You can search for a symbol in a single file, in all files in a repository, or even in all public repositories on {% data variables.product.prodname_dotcom %}.

Symbol search is a feature of code search. For more information, see "[AUTOTITLE](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier)."

1. Select a repository, then navigate to a file containing symbols.
1. To bring up the symbols pane, above the file content, click {% octicon "code-square" aria-label="The code square icon" %}.

   Alternatively, you can open the symbols pane by clicking an eligible symbol in your file. Clickable symbols are highlighted in yellow when you hover over them.

1. Click the symbol you would like to find from the symbols pane or within the file itself.

   * To search for a symbol in the repository as a whole, in the symbols pane, click **Search for this symbol in this repository**. To search for a symbol in all repositories on {% data variables.product.prodname_dotcom %}, click **all repositories**.

1. To navigate between references to a symbol, click {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} or {% octicon "chevron-up" aria-label="The upwards-facing chevron icon" %}.
1. To navigate to a specific reference to a symbol, click a result of the symbol search under {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} **In this file**.
1. To exit the search for a specific symbol, click {% octicon "arrow-left" aria-label="The left arrow icon" %} **All Symbols**.
{% endif %}

## Jumping to the definition of a function or method

You can jump to a function or method's definition within the same repository by clicking the function or method call in a file.

![Screenshot of the function window. A section, titled "Definition," is outlined in dark orange.](/assets/images/help/repository/jump-to-definition-tab.png)

## Finding all references of a function or method

You can find all references for a function or method within the same repository by clicking the function or method call in a file.

![Screenshot of the function window. A section, titled "3 References," is outlined in dark orange.](/assets/images/help/repository/find-all-references-tab.png)

## Precise and search-based navigation

Certain languages supported by {% data variables.product.prodname_dotcom %} have access to _precise code navigation_, which uses an algorithm (based on the open source [`stack-graphs`](https://github.com/github/stack-graphs) library) that resolves definitions and references based on the set of classes, functions, and imported definitions that are visible at any given point in your code. Other languages use _search-based code navigation_, which searches all definitions and references across a repository to find entities with a given name. Both strategies are effective at finding results and both make sure to avoid inappropriate results such as comments, but precise code navigation can give more accurate results, especially when a repository contains multiple methods or functions with the same name.

If you don't see the results you expect from a precise code navigation query, you can click on the "search-based" link in the displayed popover to perform search-based navigation.

![Screenshot of the function window. Two links, labeled, "Search for this symbol in this repository" and "all repositories," are outlined in dark orange.](/assets/images/help/repository/search-based-code-navigation-link.png)

If your precise results appear inaccurate, you can file a support request.

## Cross-repository precise code navigation

Cross-repo code navigation is available for languages that are supported by precise code navigation and the dependency graph. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)." With cross-repo code navigation, you can jump to the definition of functions or variables defined in dependencies imported by your project if that dependency is a repository hosted by {% data variables.product.prodname_dotcom %}. Cross-repo code navigation does not support find-all-references requests at this time.

![Screenshot of a code file on {% data variables.product.prodname_dotcom %}. On the line "import o.s.", the module name "o.s." is highlighted, and a "Definitions" modal shows a result tagged with "cross-repo result".](/assets/images/help/repository/cross-repository-code-navigation.png)

## Troubleshooting code navigation

If code navigation is enabled for you but you don't see links to the definitions of functions and methods:
* Code navigation only works for active branches. Push to the branch and try again.
* Code navigation only works for repositories with fewer than 100,000 files.

## Further reading

* "[AUTOTITLE]{% ifversion code-search-upgrade %}(/search-github/github-code-search/about-github-code-search){% else %}(/search-github/searching-on-github/searching-code){% endif %}"
