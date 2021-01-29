---
title: 关于提交签名验证
intro: '使用 GPG 或 S/MIME，您可以在本地对标记和提交进行签名。 这些标记或提交在 {% data variables.product.product_name %} 上标示为已验证，便于其他人信任更改来自可信的来源。'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures/
  - /articles/about-gpg/
  - /articles/about-commit-signature-verification
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 关于提交签名验证

您可以本地签名提交和标记，以便其他人确认您的工作来自可信的来源。 如果提交或标记具有密码可验证的 GPG 或 S/MIME 签名，则 {% data variables.product.product_name %} 会将提交或标记标示为已验证。

![验证的提交](/assets/images/help/commits/verified-commit.png)

如果提交或标记具有无法验证的签名，则 {% data variables.product.product_name %} 会将提交或标记标示为未验证。

仓库管理员可对分析实施必要的提交签名，以阻止未签名和验证的所有提交。 更多信息请参阅“[关于受保护分支](/github/administering-a-repository/about-protected-branches#require-signed-commits)”。

您可以在 {% data variables.product.product_name %} 上检查已签名提交或标记的验证状态，并查看提交签名未验证的原因。 更多信息请参阅“[检查提交和标记签名验证状态](/articles/checking-your-commit-and-tag-signature-verification-status)”。

{% if currentVersion == "free-pro-team@latest" %}
{% data variables.product.product_name %} 将自动使用 GPG 通过 {% data variables.product.product_name %} web 界面对您创建的提交进行签名，当您压缩且合并您不是其作者的拉取请求时除外。 您可以选择在 {% data variables.product.prodname_codespaces %} 中使用 {% data variables.product.product_name %} 对您的提交进行签名。 由 {% data variables.product.product_name %} 签名的提交在 {% data variables.product.product_name %} 上将具有已验证的状态。 您可以使用 https://github.com/web-flow.gpg 上的公钥本地验证签名。 有关对您的代码空间启用 GPG 验证的更多信息，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的 GPG 验证](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)”。
{% endif %}

### GPG 提交签名验证

您可以使用 GPG 通过自己生成的 GPG 密钥对验证签名。

{% data variables.product.product_name %} 使用 OpenPGP 库确认您本地签名的提交和标记，是否根据您添加到 {% data variables.product.product_name %} 帐户的公钥进行加密验证。

要使用 GPG 对提交签名并在 {% data variables.product.product_name %} 上验证这些提交，请执行以下步骤：

1. [检查现有 GPG 密钥](/articles/checking-for-existing-gpg-keys)
2. [生成新 GPG 密钥](/articles/generating-a-new-gpg-key)
3. [新增 GPG 密钥到 GitHub 帐户](/articles/adding-a-new-gpg-key-to-your-github-account)
4. [将您的签名密钥告诉 Git](/articles/telling-git-about-your-signing-key)
5. [对提交签名](/articles/signing-commits)
6. [对标记签名](/articles/signing-tags)

### S/MIME 提交签名验证

您可以使用 S/MIME 通过组织颁发的 X.509 密钥对提交签名。

{% data variables.product.product_name %} 使用 [Debian ca 证书包](https://packages.debian.org/hu/jessie/ca-certificates)（Mozilla 浏览器使用的相同信任库）确认您本地签名的提交和标记可根据可信根证书中的公钥加密验证。

{% data reusables.gpg.smime-git-version %}

要使用 S/MIME 对提交签名并在 {% data variables.product.product_name %} 上验证这些提交，请执行以下步骤：

1. [将您的签名密钥告诉 Git](/articles/telling-git-about-your-signing-key)
2. [对提交签名](/articles/signing-commits)
3. [对标记签名](/articles/signing-tags)

无需将公钥上传到 {% data variables.product.product_name %}。

{% if currentVersion == "free-pro-team@latest" %}
### 自动程序的签名验证

需要提交签名的组织和 {% data variables.product.prodname_github_app %} 可使用自动程序对提交签名。 如果提交或标记具有密码可验证的自动程序签名，则 {% data variables.product.product_name %} 会将提交或标记标示为已验证。
自动程序签名验证仅在以下情况下才工作：请求被验证为

{% data variables.product.prodname_github_app %} 或自动程序，并且不含自定义作者信息、自定义提交者信息以及自定义签名信息（如提交 API）。
{% endif %}

### 延伸阅读

- "[对提交签名](/articles/signing-commits)"
- "[对标记签名](/articles/signing-tags)"
- "[提交签名验证故障排除](/articles/troubleshooting-commit-signature-verification)"
