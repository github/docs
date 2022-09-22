---
title: Atualizar credenciais de acesso do GitHub
intro: 'As credenciais do {% data variables.product.product_name %} incluem{% ifversion not ghae %} não só sua senha, mas também{% endif %} os tokens de acesso, chaves SSH e tokens de API do aplicativo que você usa para se comunicar com {% data variables.product.product_name %}. Se houver necessidade, você mesmo pode redefinir todas essas credenciais de acesso.'
redirect_from:
  - /articles/rolling-your-credentials
  - /articles/how-can-i-reset-my-password
  - /articles/updating-your-github-access-credentials
  - /github/authenticating-to-github/updating-your-github-access-credentials
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/updating-your-github-access-credentials
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Update access credentials
ms.openlocfilehash: 650c0027b679690def6d1c77d727a87b8688b889
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147508413'
---
{% ifversion not ghae %}
## Solicitar uma nova senha

1. Para solicitar uma nova senha, acesse {% ifversion fpt or ghec %} https://{% data variables.product.product_url %}/password_reset{% else %}`https://{% data variables.product.product_url %}/password_reset`{% endif %}.
2. Insira o endereço de email associado à sua conta do {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} e clique em **Enviar email de redefinição de senha.** O email será enviado para o endereço de email de backup se você tiver um configurado.
  ![Caixa de diálogo usada para solicitar o email de redefinição de senha](/assets/images/help/settings/password-recovery-email-request.png)
3. Nós enviaremos por e-mail um link para você redefinir sua senha. Clique nele em até 3 horas após o recebimento do e-mail. Se você não receber o e-mail com o link, verifique sua pasta de spam.
4. Se você tiver habilitado a autenticação de dois fatores, será solicitado que você crie suas credenciais de 2FA: {% ifversion fpt or ghec %}
   * Se você tiver {% data variables.product.prodname_mobile %}, receberá uma notificação por push para verificar sua identidade. Abra a notificação por push ou o aplicativo {% data variables.product.prodname_mobile %} e digite o código de dois dígitos mostrado na página de redefinição de senha em seu navegador.
   ![Prompt de autenticação {% data variables.product.prodname_mobile %} de dois fatores](/assets/images/help/2fa/2fa-mobile-challenge-password-reset.png)
      * Para pular o uso da verificação do GitHub Mobile, clique em **Inserir autenticação de dois fatores ou código de recuperação**.
      ![Prompt de autenticação de dois fatores do GitHub Mobile em {% data variables.product.product_name %} com "Inserir autenticação de dois fatores ou código de recuperação" realçado](/assets/images/help/2fa/2fa-github-mobile-password-reset.png) {% endif %}
   * Digite o código de autenticação ou um dos códigos de recuperação e clique em **Verificar**.
      ![Prompt da autenticação de dois fatores](/assets/images/help/2fa/2fa-password-reset.png)
     * Se você adicionou uma chave de segurança à sua conta, clique em **Usar chave de segurança** em vez de digitar um código de autenticação.
     {% ifversion fpt or ghec %}
     * Se você tiver configurado [dados {% data variables.product.prodname_mobile %}](https://github.com/mobile), clique em **Autenticar com o GitHub Mobile** .
     {% endif %}
5. Digite uma nova senha, confirme a nova senha e clique em **Alterar senha**. Para obter ajuda para criar uma senha forte, confira "[Como criar uma senha forte](/articles/creating-a-strong-password)".
  {% ifversion fpt or ghec %}![Caixa de Recuperação de senha](/assets/images/help/settings/password-recovery-page.png){% else %} ![Caixa de Recuperação de senha](/assets/images/enterprise/settings/password-recovery-page.png){% endif %}

{% tip %}

Para evitar perder sua senha no futuro, sugerimos usar um gerenciador de senhas seguro, como o [LastPass](https://lastpass.com/) ou o [1Password](https://1password.com/).

{% endtip %}

## Alterar uma senha existente

{% data reusables.repositories.blocked-passwords %}

1. {% data variables.product.signin_link %} para o {% data variables.product.product_name %}.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
4. Em "Change password" (Alterar senha), insira a senha antiga, digite uma nova senha forte e confirme a nova senha. Para obter ajuda para criar uma senha forte, confira "[Como criar uma senha forte](/articles/creating-a-strong-password)"
5. Clique em **Atualizar senha**.

{% tip %}

Para maior segurança, além de alterar a senha, habilite também a autenticação de dois fatores. Confira [Sobre a autenticação de dois fatores](/articles/about-two-factor-authentication) para obter mais detalhes.

{% endtip %} {% endif %}
## Atualizar tokens de acesso

Confira "[Como revisar suas integrações autorizadas](/articles/reviewing-your-authorized-integrations)" para obter instruções sobre como revisar e excluir tokens de acesso. Para gerar novos tokens de acesso, confira "[Como criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)".

{% ifversion not ghae %}

Se você redefiniu sua senha da conta e também gostaria de disparar um logout do aplicativo {% data variables.product.prodname_mobile %}, revogue a sua autorização do aplicativo OAuth do "GitHub iOS" ou "GitHub Android". Isso removerá todas as instâncias do aplicativo {% data variables.product.prodname_mobile %} associado à sua conta. Para obter mais informações, confira "[Como revisar suas integrações autorizadas](/authentication/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations)".

{% endif %}

## Atualizar chaves SSH

Confira "[Como revisar suas chaves SSH](/articles/reviewing-your-ssh-keys)" para obter instruções sobre como revisar e excluir chaves SSH. Para gerar e adicionar novas chaves SSH, confira "[Como gerar uma chave SSH](/articles/generating-an-ssh-key)".

## Redefinir tokens da API

Se você tiver algum aplicativo registrado no {% data variables.product.product_name %}, talvez precise redefinir os tokens OAuth dele. Para obter mais informações, confira o ponto de extremidade "[Redefinir uma autorização](/rest/reference/apps#reset-an-authorization)".

{% ifversion not ghae %}
## Impedir acesso não autorizado

Para obter mais dicas sobre como proteger sua conta e impedir o acesso não autorizado, confira "[Como impedir o acesso não autorizado](/articles/preventing-unauthorized-access)".
{% endif %}
