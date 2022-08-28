# REST

`/content/rest` 目录是 GitHub REST API 文档所在的位置！

* `/content/rest/guides` and `/content/rest/overview` 目录包含常规项目。 这些项目可人工编辑。
* `/content/rest/reference` 目录对 GitHub GraphQL API 中的每组端点包含一个项目。 此目录中的大多数内容都使用 `include` 呈现。

  `include` 标记呈现的内容来自 `/lib/rest/static` 目录，由 GitHub 内部的 API 源代码自动生成，不应人工编辑。 更多信息请参阅 [`/lib/rest/README.md`](/lib/rest/README.md)。

  **We cannot accept changes to content that is rendered by `include` tags. However, you can open an issue describing the changes you would like to see.**
