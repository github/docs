---
title: 关于比较拉取请求中的分支
intro: 拉取请求会显示差异，用于比较您在主题分支中的更改与您要合并更改的基本分支。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests
  - /articles/about-comparing-branches-in-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-comparing-branches-in-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 比较分支
---

{% note %}

**注：**在创建拉取请求时，您可以更改用于比较更改的基本分支。 更多信息请参阅“[创建拉取请求](/articles/creating-a-pull-request#changing-the-branch-range-and-destination-repository)”。

{% endnote %}

You can view proposed changes in a pull request in the Files changed tab. ![拉取请求文件已更改选项卡](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

无需查看提交本身，您可以查看提议的更改，因为它们在拉取请求合并后就会出现在文件中。 这些文件在 Files changed（更改的文件）选项卡中按字母数字顺序显示。 添加的文件以绿色显示，前缀 `+` 号，而删除的内容以红色显示，前缀 `-` 号。

## 差异视图选项

{% tip %}

**提示：**如果难以理解更改的上下文，可以在 Files changed（更改的文件）选项卡中单击 **View（查看）**以查看包含提议的更改的整个文件。

{% endtip %}

用于查看差异的选项有多个：
- 统一视图以线性视图同时显示更新的内容和原有内容。
- 拆分视图在一边显示旧内容，另一边显示新内容。
- 多差异视图显示拉取请求合并后更改的预览效果。
- 来源视图显示来源中的更改，但没有多差异视图的格式。

您也可以选择忽略空格更改以获取拉取请求中实质性更改的更准确视图。

![差异查看选项菜单](/assets/images/help/pull_requests/diff-settings-menu.png)

为简化审查大型拉取请求中的更改，您可以过滤差异，只显示所选的文件类型、显示您是其代码所有者的文件、隐藏您查看过的文件或隐藏已删除的文件。 更多信息请参阅“[按文件类型过滤拉取请求中的文件](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)”。

  ![文件过滤器下拉菜单](/assets/images/help/pull_requests/file-filter-menu.png)

## 三点和两点 Git 差异比较

默认情况下，{% data variables.product.prodname_dotcom %} 上的拉取请求显示三点差异，或者比较主题分支的最近版本与其中使用基本分支最新同步主题分支的提交。

要在 {% data variables.product.prodname_dotcom %} 上查看两点差异比较中的两个 committish 参考，可以编辑仓库的“比较更改”页面的 URL。 更多信息请参阅 _Pro Git_ 书籍网站中的 ["committish" 的 Git 词汇](https://git-scm.com/docs/gitglossary#gitglossary-aiddefcommit-ishacommit-ishalsocommittish)。

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

两点差异直接互相比较两个 Git committish 参考，如 SHA 或 OID（对象 ID）。 在 {% data variables.product.prodname_dotcom %} 上，两点差异比较中的 Git committish 参考必须推送到同一仓库或其复刻。

如果要模拟拉取请求中的两点差异并查看每个分支最新版本之间的比较结果，可以将基本分支合并到主题分支，以更新分支之间最新的共同原型。

有关用于比较更改的 Git 命令的更多信息，请参阅 _Pro Git_ 书籍网站中的“[Git 差异选项](https://git-scm.com/docs/git-diff#git-diff-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203)”。

## 差异不显示的原因
- 您超过了文件或特定文件类型的总限制。 更多信息请参阅“[关于仓库](/repositories/creating-and-managing-repositories/about-repositories#limits-for-viewing-content-and-diffs-in-a-repository)”。
- 您的文件与仓库的 *.gitattributes* 文件中的规则匹配，默认会阻止该文件显示。 更多信息请参阅“[自定义更改的文件在 GitHub 中如何显示](/articles/customizing-how-changed-files-appear-on-github)”。

## 延伸阅读

- "[关于拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[关于复刻](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
