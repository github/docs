---
title: Exibindo status de verificação para todos os seus commits
shortTitle: Exibindo verificação para todos os commits
intro: Você pode habilitar o modo vigilante para verificação de assinatura de commit para marcar todos os seus commits e tags com um status de verificação de assinatura.
versions:
  free-pro-team: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits
---

{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

### Sobre modo vigilante

Ao trabalhar localmente no seu computador, o Git permite que você defina o autor das suas alterações e a identidade do autor do autor do autor do committer. Isso torna potencialmente difícil para outras pessoas estarem confiantes de que os commits e tags que você cria foram realmente criados por você. Para ajudar a resolver esse problema, você pode assinar seus commits e tags. Para obter mais informações, consulte "[Assinar commits](/github/authenticating-to-github/signing-commits)" e "[Assinar tags](/github/authenticating-to-github/signing-tags)". {% data variables.product.prodname_dotcom %} marca commits e tags assinadas com um status de verificação.

Por padrão, os commits e tags são marcados como "Verificados" se forem assinadas com uma chave GPG ou S/MIME que foi verificada com sucesso. Se um commit ou tag tiver uma assinatura que não pode ser verificada, {% data variables.product.prodname_dotcom %} marca o commit ou a tag "não verificada". Em todos os outros casos, não se exibe nenhum status de verificação.

No entanto, você pode dar a outros usuários maior confiança na identidade atribuída aos seus commits e tags, habilitando o modo vigilante nas configurações do seu {% data variables.product.prodname_dotcom %} Com o modo vigilante habilitado, todos os seus commits e tags são marcados com um de três status de verificação.

![Status de verificação de assinatura](/assets/images/help/commits/signature-verification-statuses.png)

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

Você só deve habilitar o modo vigilante se assinar todos os seus commits e tags. Depois de habilitar este modo, todos commits ou tags não assinados que você gerar localmente e fizer push em {% data variables.product.prodname_dotcom %} serão marcados como "não verificados".

{% data reusables.identity-and-permissions.verification-status-check %}

### Habilitando o modo vigilante

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. Na página de configurações de SSH, em "Modo Vigilante", selecione **Sinalizar commits não assinados como não verificados**.

   ![Sinalizar commits não assinados como caixa de seleção não verificada](/assets/images/help/commits/vigilant-mode-checkbox.png)
