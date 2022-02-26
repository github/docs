---
title: 管理依赖项更新的所有拉取请求
intro: '您可以按和其他拉取请求大致相同的方式管理 {% data variables.product.prodname_dependabot %} 提出的拉取请求，但也有一些额外的选项。'
redirect_from:
  - /github/administering-a-repository/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/managing-pull-requests-for-dependency-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: how_to
topics:
  - Repositories
  - Version updates
  - Security updates
  - Pull requests
  - Dependencies
  - Vulnerabilities
shortTitle: 管理 Dependabot PR
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## 关于 {% data variables.product.prodname_dependabot %} 拉取请求

{% data reusables.dependabot.pull-request-introduction %}

当 {% data variables.product.prodname_dependabot %} 提出拉取请求时，将以您为仓库选择的方式通知您。 每个拉取请求都包含关于来自包管理器的拟议变更的详细信息。 这些拉取请求将遵循仓库中定义的正常检查和测试。
{% ifversion fpt or ghec %}此外，如果有足够的信息，您将看到兼容性分数。 这也有助于您决定是否合并变更。 有关此分数的信息，请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”。{% endif %}

如果您有多个依赖项要管理，可能会希望为每个包管理器自定义配置，以便拉取请求拥有特定的审查者、受理人和标签。 更多信息请参阅“[自定义依赖项更新](/github/administering-a-repository/customizing-dependency-updates)。”

## 查看 {% data variables.product.prodname_dependabot %} 拉取请求

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. 安全或版本更新的任何拉取请求都很容易识别。
    - 作者为 {% ifversion fpt or ghec %}[dependabot](https://github.com/dependabot){% else %}dependabot{% endif %}，即 {% data variables.product.prodname_dependabot %} 使用的自动程序帐户。
    - 默认情况下，它们拥有 `dependencies` 标签。

## 更改 {% data variables.product.prodname_dependabot %} 拉取请求的变基策略

默认情况下，{% data variables.product.prodname_dependabot %} 会自动为拉取请求变基，以解决各种冲突。 如果您喜欢手动处理合并冲突，可以使用 `rebase-strategy` 选项禁用此功能。 详情请参阅“[依赖项更新的配置选项](/github/administering-a-repository/configuration-options-for-dependency-updates#rebase-strategy)。”

## 管理带注释命令的 {% data variables.product.prodname_dependabot %} 拉取请求

{% data variables.product.prodname_dependabot %} 会响应注释中的简单命令。 每个拉取请求都在“{% data variables.product.prodname_dependabot %} 命令和选项”部分下包含您可以用来处理拉取请求的命令（例如：合并、压缩、重新打开、关闭或变基拉取请求）的详细信息。 其目的是让您尽可能轻松地将这些自动生成的拉取请求分类。

您可以在 {% data variables.product.prodname_dependabot %} 拉取请求中使用以下任何命令。

- `@dependabot cancel merge` 会取消先前请求的合并。
- `@dependabot close` 将关闭拉取请求，并阻止 {% data variables.product.prodname_dependabot %} 重新创建该拉取请求。 您可以通过手动关闭拉取请求来实现相同的结果。
- `@dependabot ignore this dependency` 将关闭拉取请求并阻止 {% data variables.product.prodname_dependabot %} 为这个依赖项创建更多拉取请求（除非您重新打开拉取请求或升级到您自己推荐的该依赖项版本）。
- `@dependabot ignore this major version` 将关闭拉取请求并阻止 {% data variables.product.prodname_dependabot %} 为这个主要版本创建更多拉取请求（除非您重新打开拉取请求或升级到您自己推荐的该主要版本）。
- `@dependabot ignore this minor version` 将关闭拉取请求并阻止 {% data variables.product.prodname_dependabot %} 为这个次要版本创建更多拉取请求（除非您重新打开拉取请求或升级到您自己推荐的该次要版本）。
- `@dependabot merge` 在您的 CI 测试通过后合并拉取请求。
- `@dependabot rebase` 变基拉取请求。
- `@dependabot recreate` 重新创建拉取请求，覆盖对拉取请求所作的任何编辑。
- 如果拉取请求已关闭，`@dependabot reopen` 将重新打开拉取请求。
- `@dependabot squash and merge` 在您的 CI 测试通过后压缩并合并拉取请求。

{% data variables.product.prodname_dependabot %} 将用“竖起大拇指”表情符号来确认命令，并可能对拉取请求发表评论。 {% data variables.product.prodname_dependabot %} 通常快速响应，但如果 {% data variables.product.prodname_dependabot %} 正在忙于处理其他更新或命令，一些命令可能需要几分钟才能完成。

如果您通过运行任何命令来忽略依赖项或版本，{% data variables.product.prodname_dependabot %} 将集中存储仓库的首选项。 虽然这是一种快速解决方案，但对于拥有多个参与者的仓库而言，最好是显式定义要在配置文件中忽略的依赖项和版本。 这样可以让所有参与者都能轻松了解某个特定依赖项为什么无法自动更新。 更多信息请参阅“[依赖项更新的配置选项](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)。”
