---
title: Recuperar sua conta ao perder as credenciais 2FA
intro: 'Se você perder acesso às suas credenciais de autenticação de dois fatores, você poderá usar seus códigos de recuperação ou outra opção de recuperação, para recuperar o acesso à sua conta.'
redirect_from:
  - /articles/recovering-your-account-if-you-lost-your-2fa-credentials
  - /articles/authenticating-with-an-account-recovery-token
  - /articles/recovering-your-account-if-you-lose-your-2fa-credentials
  - /github/authenticating-to-github/recovering-your-account-if-you-lose-your-2fa-credentials
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Recuperar uma conta com 2FA
---

{% ifversion fpt or ghec %}

{% warning %}

**Avisos**:

- {% data reusables.two_fa.support-may-not-help %}

{% endwarning %}

{% endif %}

## Usar um código de recuperação da autenticação de dois fatores

Use um dos códigos de recuperação para obter acesso automaticamente à sua conta. Seus códigos de recuperação podem estar salvos em um gerenciador de senhas ou na pasta de downloads do seu computador. O nome padrão do arquivo de códigos de recuperação é `github-recovery-codes.txt`. Para obter mais informações sobre códigos de recuperação, consulte "[Configurar métodos de recuperação da autenticação de dois fatores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)".

1. Digite seu nome de usuário e senha para solicitar autenticação.

    {% warning %}

    **Aviso**: {% data reusables.accounts.you-must-know-your-password %}

    {% endwarning %}

{% ifversion fpt or ghec %}
1. Em "Encontrou algum problema?", clique em **Use um código de recuperação ou solicite a redefinição**.

   ![Captura de tela do link para usar um código de recuperação](/assets/images/help/2fa/2fa-recovery-code-link.png)
{%- else %}
1. Na página da 2FA, em "Don't have your phone?" (Não está com seu telefone?), clique em **Enter a two-factor recovery code** (Digite um código de recuperação de dois fatores).

   ![Captura de tela do link para usar um código de recuperação](/assets/images/help/2fa/2fa_recovery_dialog_box.png){% endif %}
1. Digite um dos seus códigos de recuperação e clique em **Verify** (Verificar).

   ![Campo para digitar um código de recuperação e botão Verify (Verificar)](/assets/images/help/2fa/2fa-type-verify-recovery-code.png)

{% ifversion fpt or ghec %}
## Autenticar com um número de telefone alternativo

Se você perder o acesso ao seu aplicativo TOTP principal ou número de telefone, é possível fornecer um código de autenticação de dois fatores enviado para seu número de telefone alternativo e conseguir acessar automaticamente sua conta.
{% endif %}

## Autenticar com uma chave de segurança

Se você configurou a autenticação de dois fatores com uma chave de segurança, você pode usar a chave de segurança como método de autenticação secundário para reaver automaticamente o acesso à sua conta. Para obter mais informações, consulte "[Configurar autenticação de dois fatores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)".

{% ifversion fpt or ghec %}
## Efetuar a autenticação com um dispositivo verificado, token SSH ou token de acesso pessoal

Se você souber a sua senha para {% data variables.product.product_location %}, mas não tiver credenciais de autenticação de dois fatores ou seus códigos de recuperação de autenticação em de dois fatores, você poderá receber por e-mail uma senha única para começar o processo de verificação e recuperar o acesso à sua conta.

{% note %}

**Observação**: Por razões de segurança, a recuperação do acesso à sua conta efetuando a autenticação com uma senha única pode levar até três dias úteis. {% data variables.product.company_short %} não analisará solicitações adicionais enviadas nesse tempo.

{% endnote %}

Você pode usar as suas credenciais de autenticação de dois fatores ou os códigos de recuperação de dois fatores para recuperar o acesso à sua conta a qualquer momento no período de espera de 3 a 5 dias.

1. Digite seu nome de usuário e senha para solicitar autenticação.

    {% warning %}

    **Aviso**: {% data reusables.accounts.you-must-know-your-password %}

    {% endwarning %}
1. Em "Encontrou algum problema?", clique em **Use um código de recuperação ou solicite a redefinição**.

   ![Captura de tela do link se você não tiver seu dispositivo 2FA ou códigos de recuperação](/assets/images/help/2fa/no-access-link.png)
1. À direita de "Bloqueado?", clique em **Tente recuperar sua conta**.

   ![Captura de tela do link para tentar recuperar sua conta](/assets/images/help/2fa/try-recovering-your-account-link.png)
1. Clique em **Eu entendo, começar** para solicitar uma redefinição das suas configurações de autenticação.

    ![Captura de tela do botão para iniciar a redefinição das configurações de autenticação](/assets/images/help/2fa/reset-auth-settings.png)
1. Clique em **Enviar senha de uso único** para enviar uma senha de uso único para todos os endereços de e-mail elegível associados à sua conta. Apenas e-mails verificados são elegíveis para a recuperação de conta. Se você restringiu as redefinições de senha para seus endereços primários e/ou de backup, esses endereços são os únicos elegíveis para a recuperação de conta.

   ![Captura de tela do botão para enviar uma senha única](/assets/images/help/2fa/send-one-time-password.png)
1. Em "Única senha", digite a senha temporária do endereço e-mail de recuperação {% data variables.product.prodname_dotcom %} enviada.

   ![Captura de tela do campo para digitar senha única](/assets/images/help/2fa/one-time-password-field.png)
1. Clique **Verificar endereço de e-mail**.

   ![Captura de tela do botão para verificar o endereço de e-mail](/assets/images/help/2fa/verify-email-address.png)
1. Escolha um fator de verificação alternativo.
    - Se você usou seu dispositivo atual para acessar essa conta antes e gostaria de usar o dispositivo para verificação, clique em **Verificar com este dispositivo**.
    - Se você já configurou uma chave SSH nesta conta e gostaria de usar a chave SSH para verificação, clique na **chave SSH**.
    - Se você já configurou um token de acesso pessoal anteriormente e gostaria de usar o token de acesso pessoal para verificação, clique em **Token de acesso pessoal**.

   ![Captura de tela de botões para verificação alternativa](/assets/images/help/2fa/alt-verifications.png)
1. Um integrante de {% data variables.contact.github_support %} irá revisar a sua solicitação e enviar um e-mail para você em três dias úteis. Se a sua solicitação for aprovada, você receberá um link para concluir o processo de recuperação de conta. Se sua solicitação for negada, o e-mail incluirá uma forma de entrar em contato com o suporte para esclarecer outras dúvidas.

{% endif %}
