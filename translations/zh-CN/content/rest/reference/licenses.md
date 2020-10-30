---
title: 许可
redirect_from:
  - /v3/licenses
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

许可 API 返回有关热门开源许可的元数据，以及有关特定项目许可文件的信息。

许可证 API 使用[开源 Ruby Gem 许可](https://github.com/benbalter/licensee)来尝试识别项目的许可。 被许可人将项目 `LICENSE` 文件（如果有）的内容与已知许可的简短列表相匹配。 因此，API 不考虑项目依赖项的许可或其他记录项目许可的方式，例如对文档中许可名称的引用。

如果许可匹配，则返回的许可密钥和名称符合 [SPDX 规格](https://spdx.org/)。

**注：**这些端点还将返回仓库的许可信息：

- [获取仓库](/v3/repos/#get-a-repository)
- [列出用户的仓库](/v3/repos/#list-repositories-for-a-user)
- [列出组织仓库](/v3/repos/#list-organization-repositories)
- [列出复刻](/v3/repos/forks/#list-forks)
- [列出用户关注的仓库](/v3/activity/watching/#list-repositories-watched-by-a-user)
- [列出团队仓库](/v3/teams/#list-team-repositories)

{% warning %}

GitHub 有很多功能， 但它不是律师事务所。 因此，GitHub 不提供法律建议。 使用许可 API 或向我们发送电子邮件并不构成法律意见，也不形成律师-客户关系。 如果您对特定许可可以做什么和不能做什么有任何疑问，您应该在继续之前先咨询自己的法律顾问。 事实上，在做出任何可能具有法律后果或影响您合法权利的决定之前，您都应该咨询自己的律师。

GitHub 创建了许可 API，旨在帮助用户获取有关开源许可以及使用它们的项目的信息。 我们希望它有帮助，但请记住，我们不是律师（至少大多数人不是），像其他人一样，我们也会犯错。 因此，GitHub“按原样”提供 API，对提供或通过其提供的任何信息或许可不做任何保证，并对使用 API 所造成的损害不承担责任。

{% endwarning %}

{% include rest_operations_at_current_path %}
