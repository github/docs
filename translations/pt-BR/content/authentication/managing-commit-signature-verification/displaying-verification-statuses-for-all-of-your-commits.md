---
title: Exibindo status de verificação para todos os seus commits
shortTitle: Displaying verification for all commits
intro: Você pode habilitar o modo vigilante para verificação de assinatura de commit para marcar todos os seus commits e tags com um status de verificação de assinatura.
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
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: '145083598'
---
{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

## <a name="about-vigilant-mode"></a>Sobre modo vigilante

Ao trabalhar localmente no seu computador, o Git permite que você defina o autor das suas alterações e a identidade do autor do autor do autor do committer. Isso torna potencialmente difícil para outras pessoas estarem confiantes de que os commits e tags que você cria foram realmente criados por você. Para ajudar a resolver esse problema, você pode assinar seus commits e tags. Para obter mais informações, confira "[Como assinar commits](/github/authenticating-to-github/signing-commits)" e "[Como assinar tags](/github/authenticating-to-github/signing-tags)". {% data variables.product.prodname_dotcom %} marca commits e tags assinadas com um status de verificação. 

Por padrão, os commits e tags são marcados como "Verificados" se forem assinadas com uma chave GPG ou S/MIME que foi verificada com sucesso. Se um commit ou tag tiver uma assinatura que não pode ser verificada por {% data variables.product.prodname_dotcom %}, nós marcaremos o commit ou a tag como "não verificado". Em todos os outros casos, não se exibe nenhum status de verificação.

No entanto, você pode dar a outros usuários maior confiança na identidade atribuída aos seus commits e tags, habilitando o modo vigilante nas configurações do seu {% data variables.product.prodname_dotcom %} Com o modo vigilante habilitado, todos os seus commits e tags são marcados com um de três status de verificação.

![Status de verificação de assinatura](/assets/images/help/commits/signature-verification-statuses.png)

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

Você só deve habilitar o modo vigilante se assinar todos os seus commits e tags e usar um endereço de e-mail que seja verificado para a sua conta no {% data variables.product.product_name %} como o seu endereço de e-mail do committer. Depois de habilitar este modo, todos commits ou tags não assinados que você gerar localmente e fizer push em {% data variables.product.prodname_dotcom %} serão marcados como "não verificados".

{% data reusables.identity-and-permissions.verification-status-check %}

## <a name="enabling-vigilant-mode"></a>Habilitando o modo vigilante

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Na página Configurações do SSH, em "Modo vigilante", selecione **Sinalizar commits não assinados como não verificados**.

   ![Sinalizar commits não assinados como caixa de seleção não verificada](/assets/images/help/commits/vigilant-mode-checkbox.png)
