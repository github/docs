---
title: 对提交签名
intro: '您可以使用 GPG{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.14" %} 或 S/MIME{% endif %} 在本地为提交签名。'
redirect_from:
  - /articles/signing-commits-and-tags-using-gpg/
  - /articles/signing-commits-using-gpg/
  - /articles/signing-commits
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.gpg.desktop-support-for-commit-signing %}

{% tip %}

**提示：**

要将您的 Git 客户端配置为默认对本地仓库的提交签名，请在 Git 版本 2.0.0 及更高版本中，运行 `git config commit.gpgsign true`。 要在计算机上的任何本地仓库中默认对所有提交签名，请运行 `git config --global commit.gpgsign true`。

要存储 GPG 密钥密码，以便无需在每次对提交签名时输入该密码，我们建议使用以下工具：
  - 对于 Mac 用户，[GPG Suite](https://gpgtools.org/) 允许您在 Mac OS 密钥链中存储 GPG 密钥密码。
  - 对于 Windows 用户，[Gpg4win](https://www.gpg4win.org/) 将与其他 Windows 工具集成。

您也可以手动配置 [gpg-agent](http://linux.die.net/man/1/gpg-agent) 以保存 GPG 密钥密码，但这不会与 Mac OS 密钥链（如 ssh 代理）集成，并且需要更多设置。

{% endtip %}

如果您有多个密钥或尝试使用与您的提交者身份不匹配的密钥对提交或标记签名，应[将您的签名密钥告诉 Git](/articles/telling-git-about-your-signing-key)。

1. 当本地分支中的提交更改时，请将 S 标志添加到 git commit 命令：
  ```shell
  $ git commit -S -m <em>your commit message</em>
  # Creates a signed commit
  ```
2. 如果您使用 GPG，则创建提交后，提供您[生成 GPG 密钥](/articles/generating-a-new-gpg-key)时设置的密码。
3. 在本地完成创建提交后，将其推送到 {% data variables.product.product_name %} 上的远程仓库：
  ```shell
  $ git push
  # Pushes your local commits to the remote repository
  ```
4. 在 {% data variables.product.product_name %} 上，导航到您的拉取请求。
{% data reusables.repositories.review-pr-commits %}
5. 要查看关于已验证签名的更多详细信息，请单击 Verified（已验证）。 ![已签名提交](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)

### 延伸阅读

* "[检查现有 GPG 密钥](/articles/checking-for-existing-gpg-keys)"
* "[生成新 GPG 密钥](/articles/generating-a-new-gpg-key)"
* "[添加新 GPG 密钥到 GitHub 帐户](/articles/adding-a-new-gpg-key-to-your-github-account)"
* "[向 Git 告知您的签名密钥](/articles/telling-git-about-your-signing-key)"
* "[将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)"
* "[对标记签名](/articles/signing-tags)"
