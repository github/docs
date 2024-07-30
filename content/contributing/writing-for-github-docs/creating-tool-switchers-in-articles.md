---
title: Creating tool switchers in articles
shortTitle: Create tool switchers
intro: 'You can use a tool switcher to show how to complete tasks using specific tools.'
versions:
  feature: 'contributing'
redirect_from:
  - /contributing/syntax-and-versioning-for-github-docs/creating-tool-switchers-in-articles
---

## About tool switchers

In some articles, we write content tailored to different tools (the {% data variables.product.prodname_dotcom %} UI, {% data variables.product.prodname_cli %}, {% data variables.product.prodname_desktop %}, cURL, {% data variables.product.prodname_codespaces %}, {% data variables.product.prodname_vscode_shortname %}, GraphQL API, etc.) The tool switcher lets people select a tool to see only the content that is relevant to that tool since tools may have different conceptual or procedural information.

![Screenshot of tool switchers in an article. The tool switchers are indicated with a dark orange outline.](/assets/images/contributing/tool-switchers.png)

People can use the tool switcher in two ways when reading the docs.

* **Exploring** - For tasks that can be completed with different tools, the tool switcher signals to people that there are multiple ways a task can be done. For example, using the {% data variables.product.prodname_cli %} or {% data variables.product.prodname_desktop %}, instead of the {% data variables.product.prodname_dotcom %} UI.

* **Getting to the point** - When someone knows how they want to do a task and doesn’t need to see additional options, the tool switcher removes less relevant content, so they can find exactly what they need.

## Using tool tags

You can add tool switchers to an article by using tool tags in the Markdown. Tool tags are Liquid tags that wrap content that you want to show in a specific tool switcher tab.

For example, the following code block shows content for three different tools.

```markdown
{% raw %}{% vscode %}
This content is specific to {% endraw %}{% data variables.product.prodname_vscode %}{% raw %}.
{% endvscode %}

{% visualstudio %}
This content is specific to {% endraw %}{% data variables.product.prodname_vs %}{% raw %}.
{% endvisualstudio %}

{% jetbrains %}
This content is specific to JetBrains IDEs.
{% endjetbrains %}{% endraw %}
```

By default, the first tool tag used in the Markdown will be selected for an article. You can define a different default tool for an article by specifying a `defaultTool:` property in the article's frontmatter. For more information, see the [content README](https://github.com/github/docs/blob/main/content/README.md#defaulttool).

You can also link to an article with a specific tool selected by adding `?tool=TOOLNAME` to the end of the link. For more information, see "[AUTOTITLE](/contributing/style-guide-and-content-model/style-guide#links-to-a-specific-tool)."

Only include a maximum of eight different tools in an article. Including more tools causes the tool switcher tabs to overflow with an article's table of contents, which prevents people from using either the tool switcher or table of contents. It is unlikely that you will ever need to include eight separate tools in an article. In general, plan to use as few separate tools as possible in an article.

### When to use tool tags

We only use tool tags if an article must have tool-specific information to help people accomplish their tasks.

Do not use the tool switcher just to show examples in different languages. Only use the tool switcher if the tasks or concepts described in an article change based on what tool someone uses.

## Adding new tools

{% data variables.product.prodname_docs %} documents and maintains tool tags for {% data variables.product.prodname_dotcom %} products, {% data variables.product.prodname_dotcom %}-developed tools, and select third-party extensions developed in collaboration with {% data variables.product.company_short %} .

New tools are only added when they are the only way to accurately document something for a specific user need. If a writer determines that adding a new tool is the only way to accurately document something, they need to propose the new tool in a content design plan. Whoever reviews the content design plan should consider any alternative ways to address the documentation needs without adding a new tool. If a new tool is the only way to create accurate documentation, the new tool should be added. If there is an alternative content solution that does not add a new tool, that option should be used.

To add a new tool, add an entry to the `allTools` object in the [`lib/all-tools.js`](https://github.com/github/docs/blob/main/src/tools/lib/all-tools.js) file as a key-value pair. The key is the tag you use to refer to the tool in the article and the value is how the tool will be identified on the tool picker at the top of the article. For example, `vscode: 'Visual Studio Code'`.

Add new tools in alphabetical order.
