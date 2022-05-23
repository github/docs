---
title: 参与项目
intro: 了解如何通过复刻参与项目。
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Forks
  - GitHub
  - Open Source
---

## 关于复刻

在自己使用 GitHub 一段时间后，您可能会发现自己也想参与别人的项目。 或者，也许您想使用某人的项目作为自己项目的起点。 此过程称为复刻。

创建“复刻”就是生成他人项目的个人副本。 复刻可作为原始存储库和个人副本之间的桥梁。 您可以提交拉取请求，通过提供对原始项目的更改来帮助改善其他人的项目。 复刻是 GitHub 社交编码的核心。 更多信息请参阅“[复刻仓库](/get-started/quickstart/fork-a-repo)”。

## 复刻仓库

本教程使用 [Spoon-Knife 项目](https://github.com/octocat/Spoon-Knife)，这是一个托管在 {% data variables.product.prodname_dotcom_the_website %} 上的测试存储库，可让您测试复刻和拉取请求工作流程。

1. 导航到 `Spoon-Knife` project at https://github.com/octocat/Spoon-Knife。
2. 单击 **Fork（复刻）**。 ![复刻按钮](/assets/images/help/repository/fork_button.jpg)
1. {% data variables.product.product_name %} 将带您进入 Spoon-Knife 存储库的副本（您的复刻）。

## 克隆复刻

您已经成功复刻了 Spoon-Knife 存储库，但到目前为止，它仅存在于 {% data variables.product.product_name %} 上。 为了能够处理该项目，您需要将其克隆到您的计算机。

您可以使用命令行、{% data variables.product.prodname_cli %} 或 {% data variables.product.prodname_desktop %} 克隆复刻。

{% webui %}

1. 在 {% data variables.product.product_name %} 上，导航到 Spoon-Knife 仓库的**复刻**。
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
4. 键入 `git clone`，然后粘贴先前复制的 URL。 它将如下所示，使用您的 {% data variables.product.product_name %} 用户名替换 `YOUR-USERNAME`：
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/Spoon-Knife
  ```

5. 按 **Enter** 键。 将创建您的本地克隆。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/Spoon-Knife
  > Cloning into `Spoon-Knife`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

要创建复刻的克隆，请使用 `--clone` 标记。

```shell
gh repo fork <em>repository</em> --clone=true
```

{% endcli %}

{% desktop %}

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}

{% enddesktop %}

## 创建和推送更改

继续使用您喜欢的文本编辑器对项目进行一些更改，例如 [Atom](https://atom.io)。 例如，您可以更改 `index.html` 中的文本以添加您的 GitHub 用户名。

当您准备好提交更改时，请暂存并提交更改。 `git add .` 告诉 Git 您希望在下一次提交中包含所有更改。 `git commit` 会拍摄这些更改的快照。

{% webui %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endwebui %}

{% cli %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endcli %}

{% desktop %}

有关如何在 {% data variables.product.prodname_desktop %} 中暂存和提交更改的详细信息，请参阅“[提交和审阅对项目的更改](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit)”。

{% enddesktop %}

暂存和提交文件时，您主要是告诉 Git：“好吧，拍摄我的更改快照！” 您可以继续进行更多更改，并拍摄更多提交快照。

目前，您的更改仅存在于本地。 当您准备好将更改推送到 {% data variables.product.product_name %} 时，请将更改推送到远程。

{% webui %}

```shell
git push
```

{% endwebui %}

{% cli %}

```shell
git push
```

{% endcli %}

{% desktop %}

有关如何在 {% data variables.product.prodname_desktop %} 中推送更改的详细信息，请参阅“[将更改推送到 GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github)”。

{% enddesktop %}

## 创建拉取请求

最后，您可以对主项目提出更改建议了！ 这是产生他人项目复刻的最后一步，可以说是最重要的一步。 如果您做了您认为有益于整个社区的改变，绝对应该考虑回馈社区。

为此，请转到项目所在的 {% data variables.product.product_name %} 存储库。 对于此示例，它将位于 `https://www.github.com/<your_username>/Spoon-Knife`。 您将看到一个横幅，指示您的分支是 `octocat:main` 之前的一个提交。 单击 **Contribute（贡献）**，然后单击 **Open a pull request（打开拉取请求）**。

{% data variables.product.product_name %} 将带您进入一个页面，其中显示了您的复刻与 `octocat/Spoon-Knife` 存储库之间的差异。 单击 **Create pull request（创建拉取请求）**。

{% data variables.product.product_name %} 将带您进入一个页面，您可以在其中输入更改的标题和说明。 重要的是要提供尽可能多的有用信息，在首要位置说明您提出此拉取请求的理由。 项目所有者需要能够确定您的更改是否像您认为的那样对每个人都有用。 最后，单击 **Create pull request（创建拉取请求）**。

## 管理反馈

拉取请求是一个讨论区域。 在这种情况下，Octocat 非常繁忙，可能不会合并您的更改。 对于其他项目，如果项目所有者拒绝您的拉取请求，或者要求提供有关请求原因的更多信息，请不要生气。 甚至可能是项目所有者选择不合并您的拉取请求，这完全没问题。 您的副本将存在于互联网上。 谁知道呢 - 也许您从未见过的人会发现您的更改比原始项目更有价值。

## 查找项目

您已成功复刻并回馈存储库。 去吧， 再贡献一些！{% ifversion fpt %} 更多信息请参阅“[在 GitHub上查找为开源做出贡献的方法](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)”。{% endif %}
