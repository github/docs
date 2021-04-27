---
title: 寻找在 GitHub 上参与开源项目的方法
intro: '您可以找到在 {% data variables.product.product_name %} 上参加与您相关的开源项目的方法。'
redirect_from:
  - /articles/where-can-i-find-open-source-projects-to-work-on/
  - /articles/finding-interesting-projects-on-github/
  - /articles/about-official-github-mirrors/
  - /articles/about-github-mirrors/
  - /articles/finding-open-source-projects-on-github
  - /github/getting-started-with-github/finding-open-source-projects-on-github
versions:
  free-pro-team: '*'
topics:
  - 开源
---

### 发现相关项目

如果有您感兴趣的特定主题，请访问 `github.com/topics/<topic>`。 例如，如果您对机器学习感兴趣，可以通过访问 https://github.com/topics/machine-learning 找到相关的项目和合适的第一个议题。 您可以通过访问[主题](https://github.com/topics)来浏览热门主题。 您还可以搜索与您感兴趣的主题相匹配的仓库。 更多信息请参阅“[搜索仓库](/articles/searching-for-repositories#search-by-topic)”。

如果您一直活跃在 {% data variables.product.product_name %} 上，可以根据您过去的参与、标星以及在 [Explore](https://github.com/explore) 中的其他活动，为您的项目找到个性化的建议和合适的第一个议题。 您还可以注册 Explore 通讯以根据您的兴趣接收相关电子邮件，了解参与 {% data variables.product.product_name %} 的机会。 要注册，请参阅 [Explore 电子邮件通讯](https://github.com/explore/subscribe)。

在个人仪表板的“All activity（所有活动）”部分中，了解您关注的仓库和人员的最新活动。 更多信息请参阅“[关于个人仪表板](/articles/about-your-personal-dashboard)”。

{% data reusables.support.ask-and-answer-forum %}

### 查找合适的第一个议题

如果您已经知道要参与哪些项目，可通过访问 `github.com/<owner>/<repository>/contribute` 查找该仓库中便于初学者参与的议题。 例如，您可以在 https://github.com/electron/electron/contribute 上找到第一次参与 `electron/electron` 的方法。

### 在 {% data variables.product.prodname_dotcom %} 上打开包含镜像的开源项目

有些开源项目除了正式仓库，在 {% data variables.product.prodname_dotcom_the_website %} 上提供镜像，托管于其他位置。

以下是 {% data variables.product.prodname_dotcom_the_website %} 上镜像的几个主要仓库：

- [Android 开源项目](https://github.com/aosp-mirror)
- [The Apache Software Foundation](https://github.com/apache)
- [The Chromium Project](https://github.com/chromium)
- [Eclipse Foundation](https://github.com/eclipse)
- [The FreeBSD Project](https://github.com/freebsd)
- [Glasgow Haskell Compiler](https://github.com/ghc)
- [GNOME](https://github.com/GNOME)
- [Linux 内核源树](https://github.com/torvalds/linux)
- [Qt](https://github.com/qt)

为创建您自己的镜像，可在您的正式项目仓库中配置[接收后挂钩](https://git-scm.com/book/en/Customizing-Git-Git-Hooks)，以自动将提交推送到 {% data variables.product.product_name %} 上的镜像仓库。

您可以根据它们是否为镜像来搜索仓库。 更多信息请参阅“[搜索仓库](/articles/searching-for-repositories/#search-based-on-whether-a-repository-is-a-mirror)”。

### 延伸阅读

- "[使用主题对仓库分类](/articles/classifying-your-repository-with-topics)"
- "[关于组织仪表板](/articles/about-your-organization-dashboard)"
