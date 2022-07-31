---
title: 克隆仓库
intro: '在 {% data variables.product.product_location %} 上创建仓库时，它将作为远程仓库存在。 您可以克隆仓库以在计算机上创建本地副本，并在两个位置之间进行同步。'
redirect_from:
  - /articles/cloning-a-repository
  - /articles/cloning-a-repository-from-github
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

## 关于克隆仓库

您可以将仓库从 {% data variables.product.product_location %} 克隆到本地计算机，以便修复合并冲突、添加或删除文件以及推送较大的提交。 克隆仓库时，将仓库从 {% data variables.product.product_location %} 复制到本地计算机。

克隆仓库将提取 {% data variables.product.product_location %} 在当时拥有的所有仓库数据的完整副本，包括项目每个文件和文件夹的所有版本。 您可以将更改推送到 {% data variables.product.product_location %} 上的远程仓库，或者从 {% data variables.product.product_location %} 拉取其他人的更改。 更多信息请参阅“[使用 Git](/github/getting-started-with-github/using-git)”。

您可以克隆自己的现有仓库或克隆其他人的现有仓库以参与项目。

## 克隆仓库

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
{% data reusables.command_line.git-clone-url %}
{% data reusables.command_line.local-clone-created %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

要在本地克隆仓库，请使用 `repo clone` 子命令。 用仓库名称替换 `repository` 参数。 例如， `octo-org/octo-repo`、`monalisa/octo-repo` 或 `octo-repo`。 如果省略了 `OWNER/REPO` 仓库参数的 `OWNER/` 部分，将默认使用认证用户的名称。

```shell
gh repo clone <em>repository</em>
```

您也可以使用 GitHub URL来克隆仓库。

```shell
gh repo clone <em>https://github.com/cli/cli</em>
```

{% endcli %}

{% desktop %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.open-with-github-desktop %}
4. 按照 {% data variables.product.prodname_desktop %} 中的提示完成克隆。

更多信息请参阅“[将仓库从 {% data variables.product.prodname_dotcom %} 克隆到 {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)”。

{% enddesktop %}

## 克隆空仓库

空仓库不含任何文件。 如果创建仓库时不使用 README 初始化仓库，通常会出现空仓库。

{% data reusables.repositories.navigate-to-repo %}
2. 要使用 HTTPS 以命令行克隆仓库，请在“Quick setup（快速设置）”下单击 {% octicon "clippy" aria-label="The clipboard icon" %}。 要使用 SSH 密钥克隆仓库，包括组织的 SSH 认证中心颁发的证书，单击 **SSH**，然后单击 {% octicon "clippy" aria-label="The clipboard icon" %}。 ![空仓库克隆 URL 按钮](/assets/images/help/repository/empty-https-url-clone-button.png)

   或者，要在 Desktop 中克隆仓库，请单击 {% octicon "desktop-download" aria-label="The desktop download button" %} **Set up in Desktop（在 Desktop 中设置）**并按照提示完成克隆。 ![空仓库克隆桌面按钮](/assets/images/help/repository/empty-desktop-clone-button.png)

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
{% data reusables.command_line.git-clone-url %}
{% data reusables.command_line.local-clone-created %}

## 排查克隆错误

在克隆仓库时，可能会遇到一些错误。

如果无法克隆仓库，请检查：

- 您可以使用 HTTPS 连接。 更多信息请参阅“[HTTPS 克隆错误](/github/creating-cloning-and-archiving-repositories/https-cloning-errors)”。
- 您有权访问要克隆的仓库。 更多信息请参阅“[错误：找不到仓库](/github/creating-cloning-and-archiving-repositories/error-repository-not-found)”。
- 要克隆的默认分支仍然存在。 更多信息请参阅“[错误：远程 HEAD 引用不存在的 ref，无法检出](/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors#error-remote-head-refers-to-nonexistent-ref-unable-to-checkout)”。

{% ifversion fpt or ghec %}

## 延伸阅读

- "[连接问题故障排除](/articles/troubleshooting-connectivity-problems)"
{% endif %}
