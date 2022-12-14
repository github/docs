---
title: 显示所有提交的验证状态
shortTitle: Displaying verification for all commits
intro: 您可以启用警戒模式进行提交签名验证，以使用签名验证状态标记所有提交和标记。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits
  - /github/authenticating-to-github/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits
ms.openlocfilehash: 13e88fd3e6daf3ab185c3a90b69f3fc33a8bb0f1
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: '145084620'
---
{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

## <a name="about-vigilant-mode"></a>关于警戒模式

当您在计算机上本地工作时，Git 允许您设置更改的作者和提交者的身份。 这可能会使其他人难以确信您创建的提交和标记实际上是由您创建的。 为了帮助解决这个问题，您可以签署您的提交和标签。 有关详细信息，请参阅“[对提交签名](/github/authenticating-to-github/signing-commits)”和“[对标记签名](/github/authenticating-to-github/signing-tags)”。 {% data variables.product.prodname_dotcom %} 使用验证状态标记已签名的提交和标记。 

默认情况下，如果提交和标记使用已成功验证的 GPG 或 S/MIME 密钥签名，则标记为“已验证”。 如果提交或标记具有 {% data variables.product.prodname_dotcom %} 无法验证的签名，则我们会将提交或标记标示为“未验证”。 在所有其他情况下，都不会显示验证状态。

但是，您可以通过在 {% data variables.product.prodname_dotcom %} 设置中启用警戒模式，让其他用户对您的提交和标签所赋予的身份更加有信心。 启用警戒模式后，您的所有提交和标记都将被标记为三个验证状态之一。

![签名验证状态](/assets/images/help/commits/signature-verification-statuses.png)

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

只有在签署所有提交和标记并在 {% data variables.product.product_name %} 上为您的帐户验证的电子邮件地址用作提交人电子邮件地址时，您才应启用警惕模式。 启用此模式后，您本地生成并推送到 {% data variables.product.prodname_dotcom %} 的任何未签名的提交或标记将被标记为“未验证”。

{% data reusables.identity-and-permissions.verification-status-check %}

## <a name="enabling-vigilant-mode"></a>启用警戒模式

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. 在 SSH 设置页面的“警戒模式”下，选择“将未签名的提交标记为未验证”。

   ![将未签名的提交标记为未验证的复选框](/assets/images/help/commits/vigilant-mode-checkbox.png)
