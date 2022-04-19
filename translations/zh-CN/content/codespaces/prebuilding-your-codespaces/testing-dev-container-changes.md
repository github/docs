---
title: 在启用了预构建的分支上测试开发容器配置更改
shortTitle: 测试开发容器更改
allowTitleToDifferFromFilename: true
intro: 更改为预构建启用的分支的开发容器配置时，应在代码空间中测试所做的更改。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
permissions: People with write permissions to a repository can create or edit the dev container configuration for a branch.
---

{% data reusables.codespaces.prebuilds-beta-note %}

对启用了预构建的分支的开发容器配置所做任何更改，都将导致代码空间配置和关联的预构建模板更新。 因此，在将更改提交到当前使用的存储库分支之前，在代码空间中从测试分支测试此类更改非常重要。 这将确保您不会为团队引入破坏性更改。

更多信息请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”。

## 测试对开发容器配置的更改

1. 从要更改其开发容器的预构建启用分支创建代码空间。 更多信息请参阅“[创建代码空间](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)”。
1. 在代码空间中，检出测试分支。 更多信息请参阅“[在代码空间中使用源控制](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#creating-or-switching-branches)”。
1. 对开发容器配置进行所需的更改。
1. 通过重新构建容器来应用更改。 更多信息请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-changes-to-your-configuration)”。
1. 在一切正常之后，我们还建议从测试分支创建一个新的代码空间，以确保一切正常。 然后，您可以将更改提交到存储库的默认分支或活动功能分支，从而触发该分支的预构建模板的更新。

   {% note %}

   **注意**：创建此代码空间将花费比平时更长的时间，因为它不会从预构建中创建。

   {% endnote %}
