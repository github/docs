---
title: Configurar a autenticação de dois fatores
intro: Você pode escolher entre várias opções de adicionar uma segunda fonte de autenticação à sua conta.
redirect_from:
  - /articles/configuring-two-factor-authentication-via-a-totp-mobile-app
  - /articles/configuring-two-factor-authentication-via-text-message
  - /articles/configuring-two-factor-authentication-via-fido-u2f
  - /articles/configuring-two-factor-authentication
  - /github/authenticating-to-github/configuring-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Configure 2FA
ms.openlocfilehash: 2a038134260ba9a6a7a0307bc3261157968ec1ea
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148179954'
---
Você pode configurar a autenticação de dois fatores usando um aplicativo móvel{% ifversion fpt or ghec %} ou por mensagem de texto{% endif %}. Também é possível adicionar uma chave de segurança.

Recomendamos expressamente usar um aplicativo TOTP (Senhas Avulsas por Tempo Limitado) para configurar a 2FA.{% ifversion fpt or ghec %} Os aplicativos TOTP são mais confiáveis do que o SMS, especialmente para locais fora dos Estados Unidos.{% endif %} Os aplicativos TOTP são suporte ao backup seguro dos seus códigos de autenticação na nuvem e podem ser restaurados caso você perca o acesso ao seu dispositivo.

{% warning %}

**Aviso:**
- Se você for membro{% ifversion fpt or ghec %}, gerente de cobrança,{% endif %} ou colaborador externo de um repositório privado de uma organização que exige a autenticação de dois fatores, precisará deixar a organização para desabilitar a 2FA no {% data variables.location.product_location %}.
- Ao desabilitar a 2FA, você perderá acesso automaticamente à organização e a qualquer bifurcação privada que tenha dos repositórios privados da organização. Para recuperar o acesso à organização e às bifurcações, reabilite a autenticação de dois fatores e entre em contato com um proprietário da organização.

{% endwarning %}

{% ifversion fpt or ghec %}

Um membro de uma {% data variables.enterprise.prodname_emu_enterprise %} não pode configurar a 2FA para a conta do {% data variables.enterprise.prodname_managed_user %}, a menos que esteja conectado como o usuário de configuração. Para usuários que não sejam o usuário de configuração, um administrador precisa configurar a 2FA no IdP (provedor de identidade).

{% endif %}

## Configurar a autenticação de dois fatores usando um app móvel TOTP

Um aplicativo de senhas avulsas por tempo limitado (TOTP, Time-based One-Time Password) gera automaticamente um código de autenticação que é alterado após um determinado período. É recomendável usar apps TOTP baseados na nuvem, como:
- [1Password](https://support.1password.com/one-time-passwords/)
- [Authy](https://authy.com/guides/github/)
- [LastPass Authenticator](https://lastpass.com/auth/)
- [Microsoft Authenticator](https://www.microsoft.com/en-us/account/authenticator/)

{% tip %}

**Dica:** para configurar a autenticação via TOTP em vários dispositivos, durante a configuração, digitalize o código QR usando todos os dispositivos ao mesmo tempo. Se a 2FA já estiver habilitada e você desejar adicionar outro dispositivo, será necessário reconfigurar a 2FA nas configurações de segurança.

{% endtip %}

1. Baixe um app TOTP.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.enable-two-factor-authentication %} {%- ifversion fpt or ghec or ghes > 3.7 %}
5. Em "Configurar aplicativo autenticador", execute um dos seguintes procedimentos:
    - Faça a leitura do código QR com o app do dispositivo móvel. Após a leitura, o app exibirá um código de seis dígitos que pode ser inserido no {% data variables.product.product_name %}.
    - Se você não puder digitalizar o código QR, clique em **Insira este código de texto** para ver um código que pode ser inserido manualmente no aplicativo TOTP.
    ![Clique em Insira este código](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
6. O aplicativo móvel TOTP salva a sua conta em {% data variables.location.product_location %} e gera um novo código de autenticação a cada poucos segundos. Em {% data variables.product.product_name %}, digite o código no campo em "Insira o código de seis dígitos no aplicativo". 
![TOTP inserir o campo do código](/assets/images/help/2fa/2fa_wizard_app_enter_code.png) {%- else %}
5. Em "Autenticação de dois fatores", selecione **Configurar usando um aplicativo** e clique em **Continuar**.
6. Em "Verificação de autenticação", siga um dos passos abaixo:
    - Faça a leitura do código QR com o app do dispositivo móvel. Após a leitura, o app exibirá um código de seis dígitos que pode ser inserido no {% data variables.product.product_name %}.
    - Se você não puder digitalizar o código QR, clique em **Insira este código de texto** para ver um código que pode ser inserido manualmente no aplicativo TOTP.
    ![Clique em Insira este código](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
7. O aplicativo móvel TOTP salva a sua conta em {% data variables.location.product_location %} e gera um novo código de autenticação a cada poucos segundos. Em {% data variables.product.product_name %}, digite o código no campo em "Insira o código de seis dígitos no aplicativo".
![TOTP inserir o campo do código](/assets/images/help/2fa/2fa_wizard_app_enter_code.png) de código {%- endif %} {% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %} {% data reusables.two_fa.backup_options_during_2fa_enrollment %} {% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}

## Configurar a autenticação de dois fatores usando mensagens de texto

Se não for possível autenticar usando um app móvel TOTP, você pode autenticar usando mensagens SMS. Também é possível fornecer um segundo número para um dispositivo de fallback. Se você perder acesso ao dispositivo principal e aos códigos de recuperação, um número de SMS de backup pode ajudar a acessar a sua conta.

Antes de usar esse método, certifique-se de que é possível receber mensagens de texto. Pode ser que as operadores apliquem taxas.

{% warning %}

**Aviso:** **recomendamos expressamente** usar um aplicativo TOTP para a autenticação de dois fatores em vez de SMS. O {% data variables.product.product_name %} não permite enviar mensagens SMS a telefones de todos os países. Antes de configurar a autenticação por mensagem de texto, veja a lista de países onde o {% data variables.product.product_name %} aceita a autenticação por SMS. Para obter mais informações, confira "[Países em que há suporte para a autenticação por SMS](/articles/countries-where-sms-authentication-is-supported)".

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.enable-two-factor-authentication %}
4. Abaixo de "Configurar aplicativo autenticador", selecione **Autenticação por SMS**

  ![Opção alternativa de SMS de 2FA](/assets/images/help/2fa/2fa_sms_alt_option.png)

5. Em "Configurar autenticação por SMS", selecione o código do seu país e digite seu número de telefone celular, incluindo o código de área. Quando as informações estiverem corretas, clique em **Enviar código de autenticação**.

  ![Tela de SMS da 2FA](/assets/images/help/2fa/2fa_wizard_sms_send.png)

6. Você receberá uma mensagem de texto com um código de segurança. No {% data variables.product.product_name %}, insira o código no campo em "Insira o código de seis dígitos enviado para o seu telefone" e clique em **Continuar**.

  ![Campo de continuação do SMS de 2FA](/assets/images/help/2fa/2fa_wizard_sms_enter_code.png) {% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %} {% data reusables.two_fa.backup_options_during_2fa_enrollment %} {% data reusables.two_fa.test_2fa_immediately %}

{% endif %}

## Configurar a autenticação de dois fatores usando uma chave de segurança

{% data reusables.two_fa.after-2fa-add-security-key %}

Na maioria dos dispositivos e navegadores, você pode usar uma chave de segurança física por USB ou NFC. Alguns navegadores podem usar um leitor de impressões digitais, reconhecimento facial ou senha/PIN no seu dispositivo como chave de segurança.

A autenticação com uma chave de segurança é *secundária* à autenticação com um aplicativo TOTP{% ifversion fpt or ghec %} ou uma mensagem de texto{% endif %}. Se você perder sua chave de segurança, você poderá usar o código do seu telefone para entrar.

1. Você já precisa ter configurado a 2FA usando um aplicativo móvel TOTP{% ifversion fpt or ghec %} ou por SMS{% endif %}.
2. Certifique-se de que você tem uma chave de segurança compatível com o WebAuthn inserido em seu computador.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
5. Ao lado de "Chaves de segurança", clique em **Adicionar**.
  ![Opção Adicionar chaves de segurança](/assets/images/help/2fa/add-security-keys-option.png)
6. Em "Chaves de segurança", clique em **Registrar nova chave de segurança**.
  ![Como registrar uma nova chave de segurança](/assets/images/help/2fa/security-key-register.png)
7. Digite um apelido para a chave de segurança e clique em **Adicionar**.
  ![Como fornecer um apelido para uma chave de segurança](/assets/images/help/2fa/security-key-nickname.png)
8. Ative a chave de segurança seguindo as orientações na documentação da sua chave de segurança.
  ![Solicitação de chave de segurança](/assets/images/help/2fa/security-key-prompt.png)
9.  Verifique se você baixou e pode acessar os códigos de recuperação. Se ainda não os baixou ou se deseja gerar outro conjunto de códigos, baixe seus códigos e salve-os em um local seguro. Para obter mais informações, confira "[Como baixar seus códigos de recuperação da 2FA](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)".
{% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}
## Configurando a autenticação de dois fatores usando {% data variables.product.prodname_mobile %}

Você pode usar {% data variables.product.prodname_mobile %} para 2FA ao efetuar o login na sua conta {% data variables.product.prodname_dotcom %} em um navegador web. A 2FA com o {% data variables.product.prodname_mobile %} não depende do TOTP e usa criptografia de chave pública para proteger sua conta.

Depois que você tiver configurado um aplicativo TOTP ou SMS, você também poderá usar {% data variables.product.prodname_mobile %} para efetuar a autenticação. Se, posteriormente, você não tiver mais acesso a {% data variables.product.prodname_mobile %}, você ainda poderá usar as chaves de segurança ou aplicativos TOTP para efetuar o login.

1. Você deve ter configurado a 2FA por meio de um aplicativo móvel TOTP ou via SMS.
2. Instale o [{% data variables.product.prodname_mobile %}](https://github.com/mobile).
3. Efetue o login na sua conta de {% data variables.product.product_name %} em {% data variables.product.prodname_mobile %}.

Após o login, você poderá usar o seu dispositivo para 2FA.
{% endif %}

## Leitura adicional

- "[Sobre a autenticação de dois fatores](/articles/about-two-factor-authentication)"
- "[Como configurar métodos de recuperação da autenticação de dois fatores](/articles/configuring-two-factor-authentication-recovery-methods)"
- "[Como acessar o {% data variables.product.prodname_dotcom %} usando a autenticação de dois fatores](/articles/accessing-github-using-two-factor-authentication)"
- "[Como recuperar sua conta se você perder suas credenciais de 2FA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
- "[Como criar um {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)"
