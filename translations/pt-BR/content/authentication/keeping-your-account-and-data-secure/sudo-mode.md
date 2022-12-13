---
title: Modo sudo
intro: 'Para confirmar o acesso à sua conta antes de executar uma ação potencialmente confidencial, {% data variables.product.product_location %} solicita a autenticação.'
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
ms.openlocfilehash: 909552ff2252e14430050541da5f6bae582f66b3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147540823'
---
## Sobre o modo sudo

Para manter a segurança de sua conta ao executar uma ação potencialmente confidencial em {% data variables.product.product_location %}, você precisa autenticar mesmo que já esteja conectado. Por exemplo, {% data variables.product.company_short %} considera as ações a seguir confidenciais porque cada ação pode permitir que uma nova pessoa ou sistema acesse sua conta.

- Modificação de um endereço de email associado
- Autorização de um aplicativo de terceiros
- Adição de uma nova chave SSH

Depois de se autenticar para executar uma ação confidencial, sua sessão estará temporariamente no "modo sudo". No modo sudo, você pode executar ações confidenciais sem autenticação. {% data variables.product.product_name %} aguardará algumas horas antes de solicitar a autenticação novamente. Durante esse tempo, qualquer ação confidencial que você executar redefinirá o temporizador.

{% ifversion ghes %}

{% note %}

**Observação**: se {% data variables.product.product_location %} usar um método de autenticação externa como CAS ou SSO de SAML, você não receberá prompts para entrar no modo sudo. Para mais informações, entre em contato com o administrador do site.

{% endnote %}

{% endif %}

"sudo" é uma referência a um programa em sistemas Unix, em que o nome é uma abreviação de "**su** peruser **do**" (superusuário executa). Para obter mais informações, confira [sudo](https://wikipedia.org/wiki/Sudo) na Wikipédia.

## Como confirmar o acesso para o modo sudo

Para confirmar o acesso ao modo sudo, você {% ifversion totp-and-mobile-sudo-challenge %}pode{% else %}precisa{% endif %} se autenticar com a sua senha.{% ifversion totp-and-mobile-sudo-challenge %} Opcionalmente, você pode usar um método de autenticação diferente, como {% ifversion fpt or ghec %}uma chave de segurança, {% data variables.product.prodname_mobile %}ou um código 2FA{% elsif ghes %}uma chave de segurança ou um código 2FA{% endif %}.{% endif %}

{%- ifversion totp-and-mobile-sudo-challenge %}
- [Como confirmar o acesso usando uma chave de segurança](#confirming-access-using-a-security-key) {%- ifversion fpt or ghec %}
- [Como confirmar o acesso usando o GitHub Mobile](#confirming-access-using-github-mobile) {%- endif %}
- [Como confirmar o acesso usando um código 2FA](#confirming-access-using-a-2fa-code)
- [Como confirmar o acesso usando sua senha](#confirming-access-using-your-password) {%- endif %}

{% ifversion totp-and-mobile-sudo-challenge %}

### Como confirmar o acesso usando uma chave de segurança

Você precisa configurar a 2FA (autenticação de dois fatores) para sua conta usando uma chave de segurança para confirmar o acesso à sua conta para o modo sudo usando a chave de segurança. Para obter mais informações, confira "[Como configurar a autenticação de dois fatores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)".

Quando solicitado a autenticar para o modo sudo, clique em **Usar chave de segurança** e siga os prompts.

![Captura de tela da opção Chave de segurança para o modo sudo](/assets/images/help/settings/sudo_mode_prompt_security_key.png)

{% ifversion fpt or ghec %}

### Como confirmar o acesso usando {% data variables.product.prodname_mobile %}

Você precisa instalar e entrar em {% data variables.product.prodname_mobile %} para confirmar o acesso à sua conta para o modo sudo usando o aplicativo. Para obter mais informações, confira "[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)".

1. Quando solicitado a autenticar para o modo sudo, clique em **Usar o GitHub Mobile**.

   ![Captura de tela da opção {% data variables.product.prodname_mobile %} do modo sudo](/assets/images/help/settings/sudo_mode_prompt_github_mobile_prompt.png)
1. Abra {% data variables.product.prodname_mobile %}. {% data variables.product.prodname_mobile %} exibirá números que você precisa inserir em {% data variables.product.product_location %} para aprovar a solicitação.

   ![Captura de tela dos números de {% data variables.product.prodname_mobile %} a serem inseridos em {% data variables.product.product_name %} para aprovar o acesso ao modo sudo](/assets/images/help/settings/sudo_mode_prompt_github_mobile.png)
1. Em {% data variables.product.product_name %}, digite os números exibidos em {% data variables.product.prodname_mobile %}.

{% endif %}

### Como confirmar o acesso usando um código 2FA

Você precisa configurar a 2FA usando um aplicativo móvel TOTP{% ifversion fpt or ghec %} ou mensagens de texto{% endif %} para confirmar o acesso à sua conta para o modo sudo usando um código 2FA. Para obter mais informações, confira "[Como configurar a autenticação de dois fatores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)".

Quando solicitado a autenticar para o modo sudo, digite o código de autenticação do aplicativo móvel TOTP%{% ifversion fpt or ghec %} ou da mensagem SMS,{% endif %} e clique em **Verificar**.

![Captura de tela do prompt de código 2FA para o modo sudo](/assets/images/help/settings/sudo_mode_prompt_2fa_code.png)

### Como confirmar o acesso usando sua senha

{% endif %}

Quando solicitado a autenticar para o modo sudo, digite sua senha e clique em **Confirmar**.

![Captura de tela do prompt de senha para o modo sudo](/assets/images/help/settings/sudo_mode_prompt_password.png)
