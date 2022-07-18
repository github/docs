---
title: 关于拉取请求
intro: '拉取请求可让您在 {% data variables.product.product_name %} 上向他人告知您已经推送到仓库中分支的更改。 在拉取请求打开后，您可以与协作者讨论并审查潜在更改，在更改合并到基本分支之前添加跟进提交。'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
  - /articles/using-pull-requests
  - /articles/about-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

## 关于拉取请求

{% note %}

**注：**在处理拉取请求时，请记住：
* 如果操作的是[共享仓库型号](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)，建议对拉取请求使用主题分支。 从任何分支或提交都可发送拉取请求，但如果需要更新提议的更改，则可使用主题分支推送跟进提交。
* 强制推送提交到拉取请求时要非常小心。 强制推送会更改存储库历史记录，并可能损坏您的拉取请求。 如果其他协作者在强制推送之前对项目进行分支，则强制推送可能会覆盖协作者基于其工作的提交。

{% endnote %}

您可以在 {% data variables.product.prodname_dotcom_the_website %}、{% data variables.product.prodname_desktop %}、{% data variables.product.prodname_github_codespaces %}、{% data variables.product.prodname_mobile %} 上以及使用 GitHub CLI 时创建拉取请求。

在初始化拉取请求后，您会看到一个审查页面，其中简要概述您的分支（整个分支）与仓库基本分支之间的更改。 您可以添加提议的更改摘要，审查提交所做的更改，添加标签、里程碑和受理人，以及 @提及个人贡献者或团队。 更多信息请参阅“[创建拉取请求](/articles/creating-a-pull-request)”。

在创建拉取请求后，您可以从主题分支推送提交，以将它们添加到现有的拉取请求。 这些提交将以时间顺序显示在您的拉取请求中，在 "Files changed"（更改的文件）选项卡中可以看到更改。

其他贡献者可以审查您提议的更改，添加审查注释，参与拉取请求讨论，甚至对拉取请求添加评论。 {% ifversion pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

{% ifversion fpt or ghec %}
您可以在“Conversation（对话）”选项卡上查看有关分支当前部署状态和以前部署活动的信息。 更多信息请参阅“[查看仓库的部署活动](/repositories/viewing-activity-and-data-for-your-repository/viewing-deployment-activity-for-your-repository)”。
{% endif %}

对提议的更改感到满意后，您可以合并拉取请求。 如果您在使用共享仓库模型，可以创建一个拉取请求，然后您或其他人将您的功能分支中的更改合并到您在拉取请求中指定的基础分支。 更多信息请参阅“[合并拉取请求](/articles/merging-a-pull-request)”。

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

{% data reusables.pull_requests.close-issues-using-keywords %}

{% tip %}

**提示：**
- 要切换折叠或展开拉取请求中所有过时的审查评论，请按住 <span class="platform-mac"><kbd>Option</kbd></span><span class="platform-linux"><kbd>Alt</kbd></span><span class="platform-windows"><kbd>Alt</kbd></span> 并单击 **Show outdated（显示已过时）**或 **Hide outdated（隐藏已过时）**。 有关更多快捷方式，请参阅“[键盘快捷键](/articles/keyboard-shortcuts)”。
- 在合并拉取请求时可以压缩提交，以获取更简化的更改视图。 更多信息请参阅“[关于拉取请求合并](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)”。

{% endtip %}

您可以访问仪表板，快速找到操作或订阅的最近更新的拉取请求链接。 更多信息请参阅“[关于个人仪表板](/articles/about-your-personal-dashboard)”。

## 草稿拉取请求

{% data reusables.gated-features.draft-prs %}

在创建拉取请求时，可以选择创建可直接审查的拉取请求，或草稿拉取请求。 草稿拉取请求不能合并，也不会自动向代码所有者申请审查草稿拉取请求。 有关创建草稿拉取请求的更多信息，请参阅“[创建拉取请求](/articles/creating-a-pull-request)”和“[从复刻创建拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)”。

{% data reusables.pull_requests.mark-ready-review %} 您可以随时将拉取请求转换为草稿。 更多信息请参阅“[更改拉取请求的阶段](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)”。

## 比较页和拉取请求页上的提交之间的差异

比较页和拉取请求页使用不同的方法来计算已更改文件的差异：

- 比较页显示头部引用的提示与头部及基础引用当前的共同上层节点（即合并基础）之间的差异。
- 拉请求页面显示在创建拉取请求时头部引用头与头部和基础的共同上层节点之间的差异。 因此，用于比较的合并基础可能不同。

## 延伸阅读

- {% data variables.product.prodname_dotcom %} 词汇中的“[拉取请求](/articles/github-glossary/#pull-request)”
- "[关于分支](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)"
- "[评论拉取请求](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)"
- "[关闭拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)"
