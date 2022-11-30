---
title: Atualizar credenciais de acesso do GitHub
intro: 'As credenciais de {% data variables.product.product_name %} incluem{% if currentVersion != "github-ae@latest" %} não apenas sua senha, mas também{% endif %} os tokens de acesso, Chaves SSH e tokens do aplicativo da API que você usa para se comunicar com {% data variables.product.product_name %}. Se houver necessidade, você mesmo pode redefinir todas essas credenciais de acesso.'
redirect_from:
  - /articles/rolling-your-credentials/
  - /articles/how-can-i-reset-my-password/
  - /articles/updating-your-github-access-credentials
  - /github/authenticating-to-github/updating-your-github-access-credentials
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---
{% if currentVersion != "github-ae@latest" %}
### Solicitar uma nova senha

1. Para solicitar uma nova senha, acesse {% if currentVersion == "free-pro-team@latest" %}https://{% data variables.product.product_url %}/password_reset{% else %}`https://{% data variables.product.product_url %}/password_reset`{% endif %}.
2. Digite o endereço de e-mail associado à sua conta pessoal do {% data variables.product.product_name %} e clique em **Send password reset email** (Enviar e-mail de redefinição de senha). O e-mail será enviado para o endereço de e-mail de backup, se você tiver um configurado. ![Caixa de diálogo para solicitar e-mail de redefinição de senha](/assets/images/help/settings/password-recovery-email-request.png)
3. Nós enviaremos por e-mail um link para você redefinir sua senha. Clique nele em até 3 horas após o recebimento do e-mail. Se você não receber o e-mail com o link, verifique sua pasta de spam.
4. Depois de clicar no link contido no e-mail, você precisará digitar uma nova senha.![Caixa para recuperar senha](/assets/images/help/settings/password_recovery_page.png)

{% tip %}

Para evitar que você perca a senha, sugerimos que você use um gerenciador de senhas seguras, como [LastPass](https://lastpass.com/), [1Password](https://1password.com/), ou [Keeper](https://keepersecurity.com/).

{% endtip %}

### Alterar uma senha existente

{% data reusables.repositories.blocked-passwords %}

1. {% data variables.product.signin_link %} para o {% data variables.product.product_name %}.
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
4. Em "Change password" (Alterar senha), insira a senha antiga, digite uma nova senha forte e confirme a nova senha. Consulte "[Criar uma senha forte](/articles/creating-a-strong-password)" para obter ajuda sobre esse assunto.
5. Clique em **Update password** (Atualizar senha).

{% tip %}

Para maior segurança, além de alterar a senha, habilite também a autenticação de dois fatores. Consulte [Sobre a autenticação de dois fatores](/articles/about-two-factor-authentication) para ver mais detalhes.

{% endtip %}
{% endif %}
### Atualizar tokens de acesso

Consulte "[Revisar integrações autorizadas](/articles/reviewing-your-authorized-integrations)" para ver instruções sobre como revisar e excluir tokens de acesso. Para gerar novos tokens de acesso, consulte "[Criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)."

### Atualizar chaves SSH

Consulte "[Revisar as chaves SSH](/articles/reviewing-your-ssh-keys)" para ver instruções sobre como revisar e excluir chaves SSH. Para gerar e adicionar novas chaves SSH, consulte "[Gerar uma chave SSH](/articles/generating-an-ssh-key)".

### Redefinir tokens da API

Se você tiver algum aplicativo registrado no {% data variables.product.product_name %}, talvez precise redefinir os tokens OAuth dele. Para obter mais informações, consulte o ponto de extremidade "[Redefinir uma autorização](/rest/reference/apps#reset-an-authorization)".

{% if currentVersion != "github-ae@latest" %}
### Impedir acesso não autorizado

Consulte "[Impedir acesso não autorizado](/articles/preventing-unauthorized-access)" para obter mais dicas sobre como proteger a conta e impedir acesso não autorizado.
{% endif %}
