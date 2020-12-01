---
title: 合并拉取请求
intro: 在工作完成时将拉取请求合并到上游分支。 对仓库具有推送权限的任何人都可以完成合并。
redirect_from:
  - /articles/merging-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


### 关于拉取请求合并

在拉取请求中，您提议将您对头部分支所做的更改合并到基础分支。 {% data reusables.pull_requests.about-protected-branches %} 但是，对于何时可以将拉取请求合并到特定分支可能会有限制。 例如，如果必需状态检查通过，您可能只能将拉取请求合并到默认分支。 更多信息请参阅“[关于受保护分支](/github/administering-a-repository/about-protected-branches)”。

如果拉取请求具有合并冲突，或者您在测试前想测试更改，可以[本地检出拉取请求](/articles/checking-out-pull-requests-locally)，然后使用命令行合并。

无法合并草稿拉取请求。 有关拉取请求草稿的更多信息，请参阅“[关于拉取请求](/articles/about-pull-requests#draft-pull-requests)”。

{% data reusables.pull_requests.automatically-delete-branches %}

如果决定不想让主题分支中的更改合并到上游分支，您可以[关闭拉取请求](/articles/closing-a-pull-request)而不合并。

### 在 {% data variables.product.prodname_dotcom %} 上合并拉取请求

{% data reusables.repositories.sidebar-pr %}
2. 在“Pull Requests（拉取请求）”列表中，单击要合并的拉取请求。
3. 根据对仓库启用的合并选项，您可以：
    - 单击 **Merge pull request（合并拉取请求）**，[将所有提交合并到基本分支](/articles/about-pull-request-merges/)。 如果 **Merge pull request（合并拉取请求）**选项未显示，则单击合并下拉菜单，然后选择 **Create a merge commit（创建合并提交）**。 ![merge-pull-request-button](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
    - 单击合并下拉菜单，选择 **Squash and merge（压缩并合并）**，然后单击 **Squash and merge（压缩并合并）**按钮，[将提交压缩到一个提交](/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits)。 ![click-squash-and-merge-button](/assets/images/help/pull_requests/select-squash-and-merge-from-drop-down-menu.png)
    - 单击合并下拉菜单，选择 **Rebase and merge（变基并合并）**，然后单击 **Rebase and merge（变基并合并）**按钮，[将提交个别变基到基本分支](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits)。 ![select-rebase-and-merge-from-drop-down-menu](/assets/images/help/pull_requests/select-rebase-and-merge-from-drop-down-menu.png)

    {% note %}

    **注：**变基并合并始终会更新提交者信息，并创建新的提交 SHA。 更多信息请参阅“[关于拉取请求合并](/articles/about-pull-request-merges#rebase-and-merge-your-pull-request-commits)”。

    {% endnote %}
4. 如有提示，输入提交消息，或接受默认消息。

   {% data reusables.pull_requests.default-commit-message-squash-merge %}
   ![提交消息字段](/assets/images/help/pull_requests/merge_box/pullrequest-commitmessage.png)

{% data reusables.files.choose-commit-email %}

   {% note %}

   **注意：** 电子邮件选择器不可用于变基合并（无法创建合并提交） 或压缩合并（将创建拉取请求的用户计为压缩提交的作者）。

   {% endnote %}

6. 单击 **Confirm merge（确认合并）**、**Confirm squash and merge（确认压缩并合并）**或 **Confirm rebase and merge（确认变基并合并）**。
6. （可选）[删除分支](/articles/deleting-unused-branches)。 这有助于仓库的分支列表保持整洁。

仓库可配置为在您合并拉请求时自动删除拉取请求的头部分支。 更多信息请参阅“[管理分支的自动删除](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)”。

   {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
   {% note %}

   **注：** {% data reusables.pull_requests.retargeted-on-branch-deletion %}
更多信息请参阅“[关于分支](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)”。

   {% endnote %}
   {% endif %}

拉取请求使用[ `--no-ff` 选项](https://git-scm.com/docs/git-merge#_fast_forward_merge)合并，[具有压缩或变基的提交的拉取请求](/articles/about-pull-request-merges)除外，这种拉取请求使用快进选项合并。

{% data reusables.pull_requests.close-issues-using-keywords %}

### 延伸阅读

- "[接收拉取请求](/articles/reverting-a-pull-request)"
- 使用 {% data variables.product.prodname_desktop %}“[同步分支](/desktop/guides/contributing-to-projects/syncing-your-branch/)”
- "[关于拉取请求合并](/articles/about-pull-request-merges)"
- "[解决合并冲突](/articles/addressing-merge-conflicts)"
