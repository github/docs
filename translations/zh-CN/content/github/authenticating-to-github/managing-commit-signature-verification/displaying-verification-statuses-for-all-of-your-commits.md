---
title: 显示所有提交的验证状态
shortTitle: 显示所有提交的验证
intro: 您可以启用警戒模式进行提交签名验证，以使用签名验证状态标记所有提交和标记。
versions:
  free-pro-team: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits
---

{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

### 关于警戒模式

当您在计算机上本地工作时，Git 允许您设置更改的作者和提交者的身份。 这可能会使其他人难以确信您创建的提交和标记实际上是由您创建的。 为了帮助解决这个问题，您可以签署您的提交和标签。 更多信息请参阅“[签名提交](/github/authenticating-to-github/signing-commits)”和“[签名标记](/github/authenticating-to-github/signing-tags)”。 {% data variables.product.prodname_dotcom %} 使用验证状态标记已签名的提交和标记。

默认情况下，如果提交和标记使用已成功验证的 GPG 或 S/MIME 密钥签名，则标记为“已验证”。 如果提交或标记具有无法验证的签名，则 {% data variables.product.prodname_dotcom %} 会将提交或标记标示为“未验证”。 在所有其他情况下，都不会显示验证状态。

但是，您可以通过在 {% data variables.product.prodname_dotcom %} 设置中启用警戒模式，让其他用户对您的提交和标签所赋予的身份更加有信心。 启用警戒模式后，您的所有提交和标记都将被标记为三个验证状态之一。

![签名验证状态](/assets/images/help/commits/signature-verification-statuses.png)

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

只有对所有提交和标记进行签名时，才应启用警戒模式。 启用此模式后，您本地生成并推送到 {% data variables.product.prodname_dotcom %} 的任何未签名的提交或标记将被标记为“未验证”。

{% data reusables.identity-and-permissions.verification-status-check %}

### 启用警戒模式

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. 在 SSH 设置页面的“Vigilant mode（警戒模式）”下，选择 **Flag unsigned commits as unverified（将未签名的提交标记为未验证）**。

   ![将未签名的提交标记为未验证的复选框](/assets/images/help/commits/vigilant-mode-checkbox.png)
