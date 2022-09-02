---
title: Modo sudo
intro: 'Para confirmar o acesso à sua conta antes de executar uma ação potencialmente confidencial, {% data variables.product.product_location %} solicita autenticação.'
redirect_from:
  - /articles/sudo-mode
  - /github/authenticating-to-github/sudo-mode
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/sudo-mode
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Identity
  - Access management
---

## Sobre o modo sudo

Para manter a segurança da sua conta ao executar uma ação potencialmente sensível em {% data variables.product.product_location %}, você deve efetuar a autenticação mesmo estando já conectado. Por exemplo, {% data variables.product.company_short %} considera as seguintes ações sensíveis porque cada ação poderia permitir que uma nova pessoa ou sistema acessar sua conta.

- Modificação de um endereço de e-mail associado
- Autorização de um aplicativo de terceiros
- Adição de uma nova chave SSH

Após efetuar a autenticação para executar uma ação confidencial, sua sessão estará temporariamente no "modo sudo". No modo sudo, você pode executar ações confidenciais sem autenticação. {% data variables.product.product_name %} aguardará algumas horas antes de solicitar a autenticação novamente. Durante este tempo, qualquer ação sensível que você executar irá redefinir o temporizador.

{% ifversion ghes %}

{% note %}

**Observação**: Se {% data variables.product.product_location %} usar um método de autenticação externo como CAS ou SSO SAML, você não receberá instruções para entrar no modo sudo. Para mais informações, entre em contato com o administrador do site.

{% endnote %}

{% endif %}

"sudo" é uma referência a um programa em sistemas Unix, em que o nome é abreviado para "**su**por usuário **do**". Para obter mais informações, consulte [sudo-](https://wikipedia.org/wiki/Sudo) na Wikipédia.

## Confirmando o acesso ao modo sudo

Para confirmar o acesso ao modo sudo, você {% ifversion totp-and-mobile-sudo-challenge %}pode{% else %}deve{% endif %} efetuar a autenticação com a sua senha.{% ifversion totp-and-mobile-sudo-challenge %} Opcionalmente, você pode usar um método de autenticação diferente, como {% ifversion fpt or ghec %}uma chave de segurança, {% data variables.product.prodname_mobile %}ou um código 2FA{% elsif ghes %}uma chave de segurança ou um código 2FA{% endif %}.{% endif %}

{%- ifversion totp-and-mobile-sudo-challenge %}
- [Confirmando o acesso usando uma chave de segurança](#confirming-access-using-a-security-key)
{%- ifversion fpt or ghec %}
- [Confirmando o acesso usando o GitHub Mobile](#confirming-access-using-github-mobile)
{%- endif %}
- [Confirmando o acesso usando um código 2FA](#confirming-access-using-a-2fa-code)
- [Confirmando acesso usando sua senha](#confirming-access-using-your-password)
{%- endif %}

{% ifversion totp-and-mobile-sudo-challenge %}

### Confirmando o acesso usando uma chave de segurança

Você deve configurar a autenticação de dois fatores (2FA) para sua conta usando uma chave de segurança para confirmar o acesso a sua conta para o modo sudo usando a chave de segurança. Para obter mais informações, consulte "[Configurar autenticação de dois fatores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)".

Quando solicitado para efetuar a autenticação para o modo sudo, clique em **Usar a chave de segurança** e, em seguida, siga as instruções.

![Captura de tela da opção da chave de segurança para o modo sudo](/assets/images/help/settings/sudo_mode_prompt_security_key.png)

{% ifversion fpt or ghec %}

### Confirmando acesso usando {% data variables.product.prodname_mobile %}

Você deve instalar e entrar em {% data variables.product.prodname_mobile %} para confirmar o acesso à sua conta para o modo sudo usando o aplicativo. Para obter mais informações, consulte "[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)".

1. Quando solicitado para efetuar a autenticação no modo sudo, clique em **Usar o GitHub Mobile**.

   ![Captura de tela da opção {% data variables.product.prodname_mobile %} para o modo sudo](/assets/images/help/settings/sudo_mode_prompt_github_mobile_prompt.png)
1. Abra {% data variables.product.prodname_mobile %}. {% data variables.product.prodname_mobile %} mostrará os números que você precisa inserir em {% data variables.product.product_location %} para aprovar a solicitação.

   ![Captura de tela dos números de {% data variables.product.prodname_mobile %} para entrar em {% data variables.product.product_name %} para aprovar o acesso ao modo sudo](/assets/images/help/settings/sudo_mode_prompt_github_mobile.png)
1. Em {% data variables.product.product_name %}, digite os números exibidos em {% data variables.product.prodname_mobile %}.

{% endif %}

### Confirmando o acesso usando um código 2FA

Você deve configurar a 2FA usando um aplicativo móvel TOTP{% ifversion fpt or ghec %} ou mensagens de texto{% endif %} para confirmar o acesso à sua conta para o modo sudo usando um código 2FA. Para obter mais informações, consulte "[Configurar autenticação de dois fatores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)".

Quando solicitado para efetuar a autenticação para o modo sudo, digite o código de autenticação de seu aplicativo móvel TOTP{% ifversion fpt or ghec %} ou a mensagem de texto{% endif %} e, em seguida, clique em **Verificar**.

![Captura de tela do prompt de código 2FA para o modo sudo](/assets/images/help/settings/sudo_mode_prompt_2fa_code.png)

### Confirmando acesso usando sua senha

{% endif %}

Quando solicitado para efetuar a autenticação no modo sudo, digite sua senha e clique em **Confirmar**.

![Captura de tela da solicitação de senha para o modo sudo](/assets/images/help/settings/sudo_mode_prompt_password.png)
