---
title: 关于协作开发模式
intro: 使用拉取请求的方式取决于项目中使用的开发模型类型。
redirect_from:
  - /articles/types-of-collaborative-development-models/
  - /articles/about-collaborative-development-models
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

用于拉取请求的开发模型主要有两种。 在*复刻和拉取模型*中，任何人都可以复刻现有仓库并推送对其个人复刻的更改。 不需要对来源仓库的权限即可推送到用户拥有的复刻。 项目维护员可将更改拉入来源仓库。 将提议更改的拉取请求从用户拥有的复刻打开到来源（上游）仓库的分支时，可让对上游仓库具有推送权限的任何人更改您的拉取请求。  此模型常用于开源项目，因为它可减少新贡献者的磨合，让人们独立工作而无需前期协调。

{% tip %}

**提示：** {% data reusables.open-source.open-source-guide-general %} {% data reusables.open-source.open-source-learning-lab %}

{% endtip %}

在*共享仓库模型*中，协作者被授予单一共享仓库的推送权限，需要更改时可创建主题分支。 拉取请求适用于此模型，因为在更改合并到主要开发分支之前，它们会发起代码审查和关于更改的一般讨论。 此模型更多用于协作处理私有项目的小型团队和组织。

### 延伸阅读

- "[关于拉取请求](/articles/about-pull-requests)"
- "[从复刻创建拉取请求](/articles/creating-a-pull-request-from-a-fork)"
- "[允许更改创建自复刻的拉取请求分支](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork)"
