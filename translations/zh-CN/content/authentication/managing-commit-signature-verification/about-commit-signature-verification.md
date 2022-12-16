---
title: 关于提交签名验证
intro: '使用 GPG 或 S/MIME，你可以在本地对标记和提交进行签名。 这些标记或提交在 {% data variables.product.product_name %} 上标示为已验证，便于其他人信任更改来自可信的来源。'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures
  - /articles/about-gpg
  - /articles/about-commit-signature-verification
  - /github/authenticating-to-github/about-commit-signature-verification
  - /github/authenticating-to-github/managing-commit-signature-verification/about-commit-signature-verification
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Commit signature verification
ms.openlocfilehash: 73f4c4ea28db9c0e9f012a2a9e9aa061d655e093
ms.sourcegitcommit: 6a266bff4d8c9ee928560c3af45eddd7fb4f3a0c
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/26/2022
ms.locfileid: '147409553'
---
## <a name="about-commit-signature-verification"></a>关于提交签名验证

您可以在本地签署提交和标签，让其他人对您所做更改的源充满信心。 如果提交或标记具有可加密验证的 GPG 或 S/MIME 签名，GitHub 会将提交或标记标示为{% ifversion fpt or ghec %}“已验证”或“部分验证”{% else %}“已验证”。{% endif %}

![验证的提交](/assets/images/help/commits/verified-commit.png)

{% ifversion fpt or ghec %} 提交和标记具有以下验证状态，具体取决于你是否启用了警戒模式。 默认情况下未启用警戒模式。 有关如何启用警戒模式的信息，请参阅“[显示所有提交的验证状态](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits)”。

{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

对提交签名不同于提交签核。 有关提交签核的详细信息，请参阅“[管理存储库的提交签核策略](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)”。

### <a name="default-statuses"></a>默认状态

| 状态         | 说明 |
| -------------- | ----------- |
| **已验证**   | 提交已签名且签名已成功验证。
| 未验证 | 提交已签名，但签名无法验证。
| 无验证状态 | 提交未签名。

### <a name="signature-verification-for-rebase-and-merge"></a>变基和合并的签名验证
{% data reusables.pull_requests.rebase_and_merge_verification %}

有关详细信息，请参阅“[变基和合并提交](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github#rebasing-and-merging-your-commits)”。

### <a name="statuses-with-vigilant-mode-enabled"></a>启用了警戒模式的状态

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

{% else %} 如果提交或标记具有无法验证的签名，则 {% data variables.product.product_name %} 会将提交或标记标示为“未验证”。
{% endif %}

仓库管理员可对分析实施必要的提交签名，以阻止未签名和验证的所有提交。 有关详细信息，请参阅“[关于受保护的分支](/github/administering-a-repository/about-protected-branches#require-signed-commits)”。

{% data reusables.identity-and-permissions.verification-status-check %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% ifversion ghes %}如果站点管理员已启用 Web 提交签名，{% data variables.product.product_name %} 将自动使用 GPG 对使用 Web 界面所做的提交进行签名。 由 {% data variables.product.product_name %} 签名的提交将具有已验证状态。 可以使用 `https://HOSTNAME/web-flow.gpg` 提供的公钥在本地验证签名。 有关详细信息，请参阅“[配置 Web 提交签名](/admin/configuration/configuring-your-enterprise/configuring-web-commit-signing)”。
{% else %}{% data variables.product.prodname_dotcom %} 将自动使用 GPG 对使用 Web 界面所做的提交进行签名。 由 {% data variables.product.prodname_dotcom %} 签名的提交将具有已验证状态。 可以使用 https://github.com/web-flow.gpg 提供的公钥在本地验证签名。 密钥的完整指纹是 `5DE3 E050 9C47 EA3C F04A 42D3 4AEE 18F8 3AFD EB23`。

可以选择在 {% data variables.product.prodname_github_codespaces %} 中使用 {% data variables.product.prodname_dotcom %} 对你的提交进行签名。 有关为 codespace 启用 GPG 验证的详细信息，请参阅“[管理 {% data variables.product.prodname_github_codespaces %} 的 GPG 验证](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)”。{% endif %} {% endif %}

## <a name="gpg-commit-signature-verification"></a>GPG 提交签名验证

您可以使用 GPG 通过自己生成的 GPG 密钥对验证签名。

{% data variables.product.product_name %} 使用 OpenPGP 库来确认本地签名的提交和标记，是否根据您在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}上添加到帐户的公钥进行加密验证。

要使用 GPG 对提交签名并在 {% data variables.product.product_name %} 上验证这些提交，请执行以下步骤：

1. [检查现有 GPG 密钥](/articles/checking-for-existing-gpg-keys)
2. [生成新 GPG 密钥](/articles/generating-a-new-gpg-key)
3. [将 GPG 密钥添加到 GitHub 帐户](/articles/adding-a-gpg-key-to-your-github-account)
4. [将你的签名密钥告诉 Git](/articles/telling-git-about-your-signing-key)
5. [对提交签名](/articles/signing-commits)
6. [对标记签名](/articles/signing-tags)

## <a name="smime-commit-signature-verification"></a>S/MIME 提交签名验证

您可以使用 S/MIME 通过组织颁发的 X.509 密钥对提交签名。

{% data variables.product.product_name %} 使用 [Debian ca 证书包](https://packages.debian.org/bullseye/ca-certificates)（Mozilla 浏览器使用的相同信任存储）确认你本地签名的提交和标记可根据受信任的根证书中的公钥加密验证。

{% data reusables.gpg.smime-git-version %}

要使用 S/MIME 对提交签名并在 {% data variables.product.product_name %} 上验证这些提交，请执行以下步骤：

1. [将你的签名密钥告诉 Git](/articles/telling-git-about-your-signing-key)
2. [对提交签名](/articles/signing-commits)
3. [对标记签名](/articles/signing-tags)

无需将公钥上传到 {% data variables.product.product_name %}。

{% ifversion fpt or ghec %}
## <a name="signature-verification-for-bots"></a>自动程序的签名验证

需要提交签名的组织和 {% data variables.product.prodname_github_apps %} 可使用自动程序对提交签名。 如果提交或标记具有密码可验证的自动程序签名，则 {% data variables.product.product_name %} 会将提交或标记标示为已验证。

自动程序的签名验证仅在请求被验证为 {% data variables.product.prodname_github_app %} 或自动程序并且不含自定义作者信息、自定义提交者信息、自定义签名信息（如提交 API）时才有效。
{% endif %}

## <a name="further-reading"></a>延伸阅读

- [对提交签名](/articles/signing-commits)
- [对标记签名](/articles/signing-tags)
- “[对提交签名验证进行故障排除](/articles/troubleshooting-commit-signature-verification)”
