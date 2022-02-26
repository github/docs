---
title: 管理代码空间的 GPG 验证
intro: '您可以允许 {% data variables.product.company_short %} 自动使用 GPG 对在代码空间中所做的提交进行签名，以便其他人可以确信更改来自受信任的源。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
redirect_from:
  - /github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces
  - /codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces
shortTitle: GPG 验证
---

 

启用 GPG 验证后，{% data variables.product.company_short %} 将自动对您在 {% data variables.product.prodname_codespaces %} 中所做的提交进行签名，并且该提交在 {% data variables.product.product_name %} 上具有已验证状态。 默认情况下，GPG 验证对您创建的代码空间禁用。 您可以选择对所有仓库或特定仓库允许 GPG 验证。 仅对您信任的仓库启用 GPG 验证。 有关 {% data variables.product.product_name %} 签名提交的更多信息，请参阅“[关于提交签名验证](/github/authenticating-to-github/about-commit-signature-verification)”。

启用 GPG 验证后，它将立即对所有代码空间生效。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. 在“GPG verification（GPG 验证）”下，选择您想要的 GPG 验证设置。 ![管理 GPG 验证的单选按钮](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png)
1. 如果您选择了“Selected repositories（所选仓库）”，请选择下拉菜单，然后单击想要启用 GPG 验证的仓库。 对您要启用 GPG 验证的所有仓库重复此操作。 !["所选仓库" 下拉菜单](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png)


{% note %}

**注：** 一旦为 {% data variables.product.prodname_codespaces %} 启用了 GPG 验证，您还必须在每个提交中附加 `-S` 才能签署。 要在 {% data variables.product.prodname_vscode %} 中这样做，请确保在 Settings（设置）中启用“Git: Enable Commit Signing（Git：启用提交签名）”选项。

{% endnote %}
