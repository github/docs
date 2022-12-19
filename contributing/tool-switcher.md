# Tool switcher

In some articles, we write content tailored to different tools (GitHub UI, GitHub CLI, GitHub Desktop, cURL, Codespaces, VS Code, GitHub Enterprise Importer CLI, GraphQL API, etc.) Tools may have different conceptual or procedural information. People can select a tool to see only the content that is relevant to the tool. People can use the tool switcher in two ways when reading the docs.

**Exploring**
For tasks that can be completed with different tools, the tool switcher signals to people that there are multiple ways a task can be done (like using the CLI or Desktop, instead of the UI).

**Getting to the point**
When someone knows how they want to do a task and doesn’t need to see additional options, the tool switcher removes less relevant content, so they can find exactly what they need.

We use tool tags to demarcate information for each tool. On rare occasions, we will add new tools.

## Tool tags
Tool tags are a key value pair. The key is the tag you use to refer to the tool in the article and the value is how the tool will be identified on the tool picker at the top of the article. The existing tools are in [`lib/all-tools.js`](../lib/all-tools.js).

### When to use tool tags
We only use tool tags if an article must have tool-specific information to help people accomplish their tasks. Just because multiple tools exist for a procedure does not mean we should document each tool individually. If the conceptual information behind a task or the procedural steps for accomplishing a task are different, and we want people to be able to accomplish the task with multiple tools, we use tool tags to present the relevant information in an article.

Do not use the tool switcher just to show examples in different languages. Only use the tool switcher if the tasks or concepts described in an article change based on what tool someone uses.

### How to use tool tags
Tool tags are Liquid tags that wrap content specific to a tool. For more information on using tool tags in an article, see the [content markup reference](./content-markup-reference.md#tool-tags).

Put tools in alphabetical order. By default, the first tool tag will be selected for an article. You can define a different default tool for an article in the article's frontmatter. For more information, see the [content README](../content/README.md#defaulttool). You can also link to an article with a specific tool selected by adding `?tool=TOOLNAME` to the end of the link. For more information, see the [content style guide](./content-style-guide.md#links-to-a-specific-tool).

Only include a maximum of eight different tools in an article. Including more tools causes the tool switcher tabs to overflow with an article's table of contents, which prevents people from using either the tool switcher or table of contents. It is unlikely that you will ever need to include eight separate tools in an article. In general, plan to use as few separate tools as possible in an article.

## Adding new tools
If a writer determines that adding a new tool is the only way to accurately document something, they should explain their reasoning in the content planning stage. Whoever reviews content plan should consider if there are any alternative ways to address the documentation need without adding a new tool. If a new tool is the only way to create accurate documentation, the new tool should be added. If there is an alternative content solution that does not add a new tool, that option should be used.

To add a new tool, add an entry to the `allTools` object in [`lib/all-tools.js`](../lib/all-tools.js) as a key-value pair. Add new tools in alphabetical order.
