---
title: 对时间表上的提交进行故障排除
intro: '您可以从个人资料的时间表查看提交的详细信息。 如果没有在个人资料中看到预期的提交，或者无法从个人资料页面找到提交详细信息，则提交日期和提交创作日期可能不同。'
redirect_from:
  - /articles/troubleshooting-commits-on-your-timeline
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 查看提交详细信息的预期行为

在个人资料页面的时间表中，您可以单击特定仓库旁边的提交数量，以查看关于该时间段内提交的更多详细信息，包括仓库中进行的特定更改的差异。

![个人资料时间表中的提交链接](/assets/images/help/profile/commit-link-on-profile-timeline.png)

![提交详细信息](/assets/images/help/commits/commit-details.png)

### 时间表中的提交缺少提交详细信息

如果单击个人资料页面中的提交链接而没有在仓库的提交页面上看到所有预期的提交，则可能会重写 Git 中的提交历史记录，并且提交创作日期和提交日期会不同。

![含有表明“未找到 octocat 的任何提交”消息的仓库页面](/assets/images/help/repository/no-commits-found.png)

### GitHub 如何使用 Git 创作日期和提交日期

在 Git 中，创作日期是有人首次使用 `git commit` 创建提交的时间。 除非有人使用 `git commit --amend`、强制推送、变基或其他 Git 命令更改提交日期，否则提交日期与创作日期相同。

在个人资料页面上，创作日期用于计算进行提交的时间。 而在仓库中，提交日期用于计算在仓库中进行提交的时间。

通常，创作日期和提交日期是相同的，但如果提交历史记录发生变化，您可能会注意到提交顺序将被打乱。 更多信息请参阅“[为什么我的贡献没有在我的个人资料中显示？](/articles/why-are-my-contributions-not-showing-up-on-my-profile)”

### 查看时间表中提交缺少的提交详细信息

您可以使用带有 `--pretty=fuller` 标志的 `git show` 命令检查提交创作日期与提交日期是否不同。

```shell
$ git show <em>Your commit SHA number</em> --pretty=fuller
commit <em>Your commit SHA number</em>
Author:     octocat <em>user email</em>
AuthorDate: Wed Jul 13 02:02:30 2016 +0900
Commit:     Sally Johnson <em>user email</em>
CommitDate: Wed Jul 20 06:25:08 2016 +0900
```

如果创作和提交日期不同，您可以在 URL 中手动更改提交日期以查看提交详细信息。

例如：
- 以下 URL 使用的创作日期为 `2016-07-13`：

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2016-07-13T00:00:00Z&until=2016-07-13T23:59:59Z`
- 以下 URL 使用的提交日期为 `2016-07-19`：

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2016-07-19T00:00:00Z&until=2016-07-19T23:59:59Z`

使用修改后的提交日期打开 URL 时，您可以看到提交详细信息。

![提交详细信息](/assets/images/help/commits/commit-details.png)

### 时间表中缺少预期的提交

如果没有在时间表中看到预期的提交，则可能 Git 中的提交历史记录已重写，并且提交创作日期与提交日期不同。 有关其他可能性，请参阅“[为什么我的贡献没有在我的个人资料中显示？](/articles/why-are-my-contributions-not-showing-up-on-my-profile)”
