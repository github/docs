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

您可以在 Files changed（更改的文件）选项卡的拉取请求中查看提议的更改。 ![拉取请求文件已更改选项卡](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

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

## 差异不显示的原因
- 您超过了文件或特定文件类型的总限制。 更多信息请参阅“[关于仓库](/repositories/creating-and-managing-repositories/about-repositories#limits-for-viewing-content-and-diffs-in-a-repository)”。
- 您的文件与仓库的 *.gitattributes* 文件中的规则匹配，默认会阻止该文件显示。 更多信息请参阅“[自定义更改的文件在 GitHub 中如何显示](/articles/customizing-how-changed-files-appear-on-github)”。

## 三点和两点 Git 差异比较

`git diff` 命令有两种比较方法：两点 (`git diff A..B`) 和三点 (`git diff A...B`)。 默认情况下，{% data variables.product.prodname_dotcom %} 上的拉取请求显示三点差异。

### 三点 Git 差异比较

三点比较显示了两个分支（合并基数）的最新公共提交与主题分支的最新版本之间的差异。

### 两点 Git 差异比较

两点比较显示了基本分支的最新状态（例如 `main`）和主题分支的最新版本之间的差异。

要在 {% data variables.product.prodname_dotcom %} 上查看两点差异比较中的两个 committish 参考，可以编辑仓库的“比较更改”页面的 URL。 更多信息请参阅 _Pro Git_ 书籍网站中的 ["committish" 的 Git 词汇](https://git-scm.com/docs/gitglossary#gitglossary-aiddefcommit-ishacommit-ishalsocommittish)。

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

两点差异直接互相比较两个 Git committish 参考，如 SHA 或 OID（对象 ID）。 在 {% data variables.product.prodname_dotcom %} 上，两点差异比较中的 Git committish 参考必须推送到同一仓库或其复刻。

如果要模拟拉取请求中的两点差异并查看每个分支最新版本之间的比较结果，可以将基本分支合并到主题分支，以更新分支之间最新的共同原型。

有关用于比较更改的 Git 命令的更多信息，请参阅 _Pro Git_ 书籍网站中的“[Git 差异选项](https://git-scm.com/docs/git-diff#git-diff-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203)”。

## 关于 {% data variables.product.prodname_dotcom %} 上的三点比较

由于三点比较与合并基础进行比较，因此它侧重于“拉取请求引入的内容”。

使用两点比较时，即使尚未对主题分支进行任何更改，差异也会在基本分支更新时更改。 此外，两点比较侧重于基本分支。 这意味着您添加的任何内容都会从基本分支中显示为缺失，就好像它是删除一样，反之亦然。 因此，主题分支引入的更改变得模棱两可。

相反，通过使用三点比较来比较分支，如果更新了基本分支，则主题分支中的更改始终位于差异中，因为差异显示了自分支发散以来的所有更改。

### 经常合并

为避免混淆，请经常将基本分支（例如 `main`）合并到主题分支中。 通过合并基本分支，两点和三点比较显示的差异是相同的。 我们建议尽快合并拉取请求。 这会鼓励贡献者减小拉取请求，一般建议这样做。

## 延伸阅读

- "[关于拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[关于复刻](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
