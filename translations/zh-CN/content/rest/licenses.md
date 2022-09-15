---
title: 许可证
intro: Licenses API 可让您检索热门开源许可证，以及有关特定项目许可文件的信息。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/licenses
ms.openlocfilehash: f6d229eb27764441ae040abaaca211b5a894e7ef
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064864'
---
## 关于许可证 API

许可 API 使用[开源 Ruby Gem 许可接收方](https://github.com/benbalter/licensee) 来尝试标识项目的许可。 许可接收方将项目的 `LICENSE` 文件（如果有）的内容与已知许可的简短列表相匹配。 因此，API 不考虑项目依赖项的许可或其他记录项目许可的方式，例如对文档中许可名称的引用。

如果许可匹配，则返回的许可密钥和名称符合 [SPDX 规范](https://spdx.org/)。

注意：这些终结点还将返回存储库的许可信息：

- [获取存储库](/rest/reference/repos#get-a-repository)
- [列出用户的存储库](/rest/reference/repos#list-repositories-for-a-user)
- [列出组织存储库](/rest/reference/repos#list-organization-repositories)
- [列出分支](/rest/reference/repos#list-forks)
- [列出用户关注的存储库](/rest/reference/activity#list-repositories-watched-by-a-user)
- [列出团队存储库](/rest/reference/teams#list-team-repositories)

{% warning %}

GitHub 有很多功能， 但它不是律师事务所。 因此，GitHub 不提供法律建议。 使用许可 API 或向我们发送电子邮件并不构成法律意见，也不形成律师-客户关系。 如果您对特定许可可以做什么和不能做什么有任何疑问，您应该在继续之前先咨询自己的法律顾问。 事实上，在做出任何可能具有法律后果或影响您合法权利的决定之前，您都应该咨询自己的律师。

GitHub 创建了许可 API，旨在帮助用户获取有关开源许可以及使用它们的项目的信息。 我们希望它有帮助，但请记住，我们不是律师（至少大多数人不是），像其他人一样，我们也会犯错。 因此，GitHub“按原样”提供 API，对提供或通过其提供的任何信息或许可不做任何保证，并对使用 API 所造成的损害不承担责任。

{% endwarning %}
