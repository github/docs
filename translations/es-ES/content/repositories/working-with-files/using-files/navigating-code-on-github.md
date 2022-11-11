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

![Code navigation display](/assets/images/help/repository/code-navigation-popover.png)

Code navigation uses the open source [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) library. The following languages and navigation strategies are supported:

| Language   | Search-based code navigation | Precise code navigation |
|:----------:|:----------------------------:|:-----------------------:|
| C#         | ✅                           |                         |
| CodeQL     | ✅                           |                         |
| Elixir     | ✅                           |                         |
| Go         | ✅                           |                         |
| Java       | ✅                           |                         |
| JavaScript | ✅                           |                         |
| PHP        | ✅                           |                         |
| Python     | ✅                           | ✅                      |
| Ruby       | ✅                           |                         |
| TypeScript | ✅                           |                         |


You do not need to configure anything in your repository to enable code navigation. We will automatically extract search-based and precise code navigation information for these supported languages in all repositories and you can switch between the two supported code navigation approaches if your programming language is supported by both.

{% data variables.product.prodname_dotcom %} has developed two code navigation approaches based on the open source [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) and [`stack-graphs`](https://github.com/github/stack-graphs) library:
 - Search-based - searches all definitions and references across a repository to find entities with a given name
 - Precise - resolves definitions and references based on the set of classes, functions, and imported definitions at a given point in your code

To learn more about these approaches, see "[Precise and search-based navigation](#precise-and-search-based-navigation)."

Future releases will add *precise code navigation* for more languages, which is a code navigation approach that can give more accurate results.

## Jumping to the definition of a function or method

You can jump to a function or method's definition within the same repository by clicking the function or method call in a file.

![Jump-to-definition tab](/assets/images/help/repository/jump-to-definition-tab.png)

## Finding all references of a function or method

You can find all references for a function or method within the same repository by clicking the function or method call in a file, then clicking the **References** tab.

![Find all references tab](/assets/images/help/repository/find-all-references-tab.png)

## Precise and search-based navigation

Certain languages supported by {% data variables.product.prodname_dotcom %} have access to *precise code navigation*, which uses an algorithm (based on the open source [`stack-graphs`](https://github.com/github/stack-graphs) library) that resolves definitions and references based on the set of classes, functions, and imported definitions that are visible at any given point in your code. Other languages use *search-based code navigation*, which searches all definitions and references across a repository to find entities with a given name. Both strategies are effective at finding results and both make sure to avoid inappropriate results such as comments, but precise code navigation can give more accurate results, especially when a repository contains multiple methods or functions with the same name.

If you don't see the results you expect from a precise code navigation query, you can click on the "search-based" link in the displayed popover to perform search-based navigation.

![Search-based code navigation link](/assets/images/help/repository/search-based-code-navigation-link.png)

If your precise results appear inaccurate, you can file a support request.

## Cross-repository precise code navigation

Cross-repo code navigation is available for languages that are supported by precise code navigation and the dependency graph. For more information, see "[About the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)." With cross-repo code navigation, you can jump to the definition of functions or variables defined in dependencies imported by your project if that dependency is a repository hosted by {% data variables.product.prodname_dotcom %}. Cross-repo code navigation does not support find-all-references requests at this time.

![Screenshot of cross-repository code navigation](/assets/images/help/repository/cross-repository-code-navigation.png)

## Troubleshooting code navigation

If code navigation is enabled for you but you don't see links to the definitions of functions and methods:
- Code navigation only works for active branches. Push to the branch and try again.
- Code navigation only works for repositories with fewer than 100,000 files.

## Further reading
- "[Searching code](/github/searching-for-information-on-github/searching-code)"
