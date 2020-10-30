---
title: 关于状态检查
intro: 状态检查用于获知您的提交是否符合为您参与的仓库设置的条件。
redirect_from:
  - /articles/about-statuses/
  - /articles/about-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

状态检查基于针对您每次向仓库的推送而运行的外部流程，例如持续集成构建。 您可以在拉取请求的个别提交旁边看到状态检查的*待处理*、*通过*或*失败*状态。

![提交和状态列表](/assets/images/help/pull_requests/commit-list-statuses.png)

对仓库具有写入权限的任何人都可为仓库中的任何状态检查设置状态。

在仓库的分支页面或仓库的拉取请求列表中，可以查看仓库上次提交的整体状态。

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

### {% data variables.product.product_name %} 上的状态检查类型

{% data variables.product.product_name %} 上的状态检查有两种类型：

- 检查
- 状态

_检查_与_状态_的不同之处在于它们提供行注解、更详细的信息，并且只适用于 {% data variables.product.prodname_github_app %}。

组织所有者和能够推送到仓库的用户可使用 {% data variables.product.product_name %} 的 API 创建检查和状态。 更多信息请参阅“[检查](/v3/checks/)”和“[状态](/v3/repos/statuses/)”。

### 检查

在仓库中设置_检查_时，拉取请求会有一个 **Checks（检查）**选项卡，从中可以查看状态检查的详细构建输出和重新运行失败的检查。

![拉取请求中的状态检查](/assets/images/help/pull_requests/checks.png)

当提交中的特定行造成检查失败时，您会在拉取请求的 **Files（文件）**选项卡中相关代码旁边看到有关失败、警告或通知的详细信息。

![状态检查详细信息](/assets/images/help/pull_requests/checks-detailed.png)

您可以使用 **Conversation（对话）**选项卡下的提交下拉菜单，浏览拉取请求中不同提交的检查摘要。

![下拉菜单中不同提交的检查摘要](/assets/images/help/pull_requests/checks-summary-for-various-commits.png)

#### 跳过和申请个别提交的检查

当仓库设置为自动申请检查推送时，您可以选择跳过所推送的个别提交的检查。 当仓库_未_设置为自动申请检查推送时，您可以申请检查您推送的个别提交。 有关这些设置的更多信息，请参阅“[检查套件](/v3/checks/suites/#set-preferences-for-check-suites-on-a-repository)”。

要跳过或申请检查提交，请在提交消息末添加以下尾行之一：

- 要_跳过检查_提交，请输入提交消息以及简短、有意义的更改描述。 在提交说明后，不要加上右引号，而是添加两个空行，后接 `skip-checks: true`：
  ```shell
  $ git commit -m "Update README.
  >
  >
  skip-checks: true
  ```
  - 要_申请检查_提交，请输入提交消息以及简短、有意义的更改描述。 在提交说明后，不要加上右引号，而是添加两个空行，后接 `request-checks: true`：
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  request-checks: true
  ```
  
