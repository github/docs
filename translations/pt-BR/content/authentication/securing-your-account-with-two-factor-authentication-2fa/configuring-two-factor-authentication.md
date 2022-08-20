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
shortTitle: Configurar 2FA
---

Você pode configurar a autenticação de dois fatores usando um app móvel{% ifversion fpt or ghec %} ou por mensagem de texto{% endif %}. Também é possível adicionar uma chave de segurança.

É enfaticamente recomendável usar um aplicativo de senhas avulsas por tempo limitado (TOTP, Time-based One-Time Password) para configurar a 2FA.{% ifversion fpt or ghec %} Os aplicativos TOTP são mais confiáveis que o SMS, especialmente para locais fora dos Estados Unidos.{% endif %} Os apps TOTP aceitam o backup seguro dos seus códigos de autenticação na nuvem e podem ser restaurados caso você perca o acesso ao seu dispositivo.

{% warning %}

**Aviso:**
- Se você for um integrante{% ifversion fpt or ghec %}, gerente de cobrança{% endif %} ou colaborador externo de um repositório privado em uma organização que exige a autenticação de dois fatores, será preciso deixar a organização para que seja possível desabilitar a 2FA no {% data variables.product.product_location %}.
- Ao desabilitar a 2FA, você perderá acesso automaticamente à organização e a qualquer bifurcação privada que tenha dos repositórios privados da organização. Para recuperar o acesso à organização e às bifurcações, reabilite a autenticação de dois fatores e entre em contato com um proprietário da organização.

{% endwarning %}

{% ifversion fpt or ghec %}

Se você for um integrante de um {% data variables.product.prodname_emu_enterprise %}, você não poderá configurar a 2FA para sua conta de {% data variables.product.prodname_managed_user %}, a menos que você esteja conectado como usuário configurado. Para usuários diferentes do usuário configurado, um administrador deve configurar a 2FA no provedor de identidade (IdP).

{% endif %}

## Configurar a autenticação de dois fatores usando um app móvel TOTP

Um aplicativo de senhas avulsas por tempo limitado (TOTP, Time-based One-Time Password) gera automaticamente um código de autenticação que é alterado após um determinado período. É recomendável usar apps TOTP baseados na nuvem, como:
- [1Password](https://support.1password.com/one-time-passwords/)
- [Authy](https://authy.com/guides/github/)
- [LastPass Authenticator](https://lastpass.com/auth/)
- [Autenticador da Microsoft](https://www.microsoft.com/en-us/account/authenticator/)

{% tip %}

**Dica**: para configurar a autenticação via TOTP em vários dispositivos, durante a configuração, faça a leitura do código QR usando todos os dispositivos ao mesmo tempo. Se a 2FA já estiver habilitada e você desejar adicionar outro dispositivo, será necessário reconfigurar a 2FA nas configurações de segurança.

{% endtip %}

1. Baixe um app TOTP.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
{%- ifversion fpt or ghec or ghes %}
5. Em "Autenticação de dois fatores", selecione **Configurar usando um aplicativo** e clique em **Continuar**.
6. Em "Verificação de autenticação", siga um dos passos abaixo:
    - Faça a leitura do código QR com o app do dispositivo móvel. Após a leitura, o app exibirá um código de seis dígitos que pode ser inserido no {% data variables.product.product_name %}.
    - Se você não puder ler o código QR, clique em **Insira este código de texto** para ver um código que você pode inserir manualmente no seu aplicativo TOTP. ![Clique para inserir este código](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
7. O aplicativo móvel TOTP salva a sua conta em {% data variables.product.product_location %} e gera um novo código de autenticação a cada poucos segundos. Em {% data variables.product.product_name %}, digite o código no campo em "Insira o código de seis dígitos no aplicativo". Se seus códigos de recuperação não forem exibidos automaticamente, clique em **Continuar**. ![TOTP inserir o campo do código](/assets/images/help/2fa/2fa_wizard_app_enter_code.png)
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
{%- else %}
5. Na página de autenticação de dois fatores, clique em **Set up using an app** (Configurar usando um app).
6. Salve os códigos de recuperação em um local seguro. Seus códigos de recuperação podem ajudar você a ter acesso novamente à sua conta no caso de perda do acesso.
    - Para salvar os códigos de recuperação no dispositivo, clique em **Download** (Baixar).
    - Para salvar uma cópia impressa dos códigos de recuperação, clique em **Print** (Imprimir).
    - Para copiar os códigos de recuperação para armazenamento em um gerenciador de senhas, clique em **Copy** (Copiar). ![Lista de códigos de recuperação com opção para baixar, imprimir ou copiar os códigos](/assets/images/help/2fa/download-print-or-copy-recovery-codes-before-continuing.png)
7. Depois de salvar os seus códigos de recuperação de dois fatores, clique em **Próximo**.
8. Na página de autenticação de dois fatores, siga um destes procedimentos:
    - Faça a leitura do código QR com o app do dispositivo móvel. Após a leitura, o app exibirá um código de seis dígitos que pode ser inserido no {% data variables.product.product_name %}.
    - Se não for possível ler o código QR, clique em **enter this text code** (digite este código de texto) para ver um código que pode ser copiado e inserido manualmente no {% data variables.product.product_name %}. ![Clique para inserir este código](/assets/images/help/2fa/totp-click-enter-code.png)
9. O aplicativo móvel TOTP salva a sua conta em {% data variables.product.product_location %} e gera um novo código de autenticação a cada poucos segundos. Na página de 2FA do {% data variables.product.product_name %}, digite o código e clique em **Enable** (Habilitar). ![Campo para habilitar TOTP](/assets/images/help/2fa/totp-enter-code.png)
{%- endif %}
{% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}

## Configurar a autenticação de dois fatores usando mensagens de texto

Se não for possível autenticar usando um app móvel TOTP, você pode autenticar usando mensagens SMS. Também é possível fornecer um segundo número para um dispositivo de fallback. Se você perder acesso ao dispositivo principal e aos códigos de recuperação, um número de SMS de backup pode ajudar a acessar a sua conta.

Antes de usar esse método, certifique-se de que é possível receber mensagens de texto. Pode ser que as operadores apliquem taxas.

{% warning %}

**Aviso:** é **enfaticamente recomendável** usar um aplicativo TOTP para a autenticação de dois fatores no lugar de SMS. O {% data variables.product.product_name %} não permite enviar mensagens SMS a telefones de todos os países. Antes de configurar a autenticação por mensagem de texto, veja a lista de países onde o {% data variables.product.product_name %} aceita a autenticação por SMS. Para obter mais informações, consulte "[Países onde a autenticação por SMS é aceita](/articles/countries-where-sms-authentication-is-supported)".

{% endwarning %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
4. Em "Autenticação de dois fatores", selecione **Configurar usando SMS** e clique em **Continuar**.
5. Em "Verificação de autenticação", selecione o código do seu país e digite seu número de telefone celular, incluindo o código de área. Confirme se as informações estão corretas e clique em **Send authentication code** (Enviar código de autenticação).

  ![Tela de SMS da 2FA](/assets/images/help/2fa/2fa_wizard_sms_send.png)

6. Você receberá uma mensagem de texto com um código de segurança. Em {% data variables.product.product_name %}, digite o código no campo em "Insira o código de seis dígitos enviado para o seu telefone" e clique em **Continuar**.

  ![Campo para continuação de SMS por 2FA](/assets/images/help/2fa/2fa_wizard_sms_enter_code.png)
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
{% data reusables.two_fa.test_2fa_immediately %}

{% endif %}

## Configurar a autenticação de dois fatores usando uma chave de segurança

{% data reusables.two_fa.after-2fa-add-security-key %}

Na maioria dos dispositivos e navegadores, você pode usar uma chave de segurança física por USB ou NFC. Alguns navegadores podem usar um leitor de impressões digitais, reconhecimento facial ou senha/PIN no seu dispositivo como chave de segurança.

A autenticação com uma chave de segurança é *uma alternativa* à autenticação com um aplicativo TOTP{% ifversion fpt or ghec %} ou uma mensagem de texto{% endif %}. Se você perder sua chave de segurança, você poderá usar o código do seu telefone para entrar.

1. Você já deve ter configurado a 2FA usando um app móvel TOTP{% ifversion fpt or ghec %} ou por SMS{% endif %}.
2. Certifique-se de que você tem uma chave de segurança compatível com o WebAuthn inserido em seu computador.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
5. Ao lado de "Security keys" (Chaves de segurança), clique em **Add** (Adicionar). ![Opção para adicionar chaves de segurança](/assets/images/help/2fa/add-security-keys-option.png)
6. Em "Security keys" (Chaves de segurança), clique em **Register new security key** (Registrar nova chave de segurança). ![Registrar uma nova chave de segurança](/assets/images/help/2fa/security-key-register.png)
7. Digite um apelido para a chave de segurança e clique em **Add** (Adicionar). ![Fornecer um apelido para uma chave de segurança](/assets/images/help/2fa/security-key-nickname.png)
8. Ative a chave de segurança seguindo as orientações na documentação da sua chave de segurança. ![Solicitação de chave de segurança](/assets/images/help/2fa/security-key-prompt.png)
9.  Verifique se você baixou e pode acessar os códigos de recuperação. Se ainda não os baixou ou se deseja gerar outro conjunto de códigos, baixe seus códigos e salve-os em um local seguro. Caso perca o acesso à sua conta, é possível usar os códigos de recuperação para voltar a ela. Para obter mais informações, consulte "[Recuperar sua conta se você perder as credenciais da 2FA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)". ![Botão para download de códigos de recuperação](/assets/images/help/2fa/2fa-recover-during-setup.png)
{% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}
## Configurando a autenticação de dois fatores usando {% data variables.product.prodname_mobile %}

Você pode usar {% data variables.product.prodname_mobile %} para 2FA ao efetuar o login na sua conta {% data variables.product.prodname_dotcom %} em um navegador web. A 2FA com o {% data variables.product.prodname_mobile %} não depende do TOTP e usa criptografia de chave pública para proteger sua conta.

Depois que você tiver configurado um aplicativo TOTP ou SMS, você também poderá usar {% data variables.product.prodname_mobile %} para efetuar a autenticação. Se, posteriormente, você não tiver mais acesso a {% data variables.product.prodname_mobile %}, você ainda poderá usar as chaves de segurança ou aplicativos TOTP para efetuar o login.

1. Você deve ter configurado a 2FA por meio de um aplicativo móvel TOTP ou via SMS.
2. Instale [{% data variables.product.prodname_mobile %}](https://github.com/mobile).
3. Efetue o login na sua conta de {% data variables.product.product_name %} em {% data variables.product.prodname_mobile %}.

Após o login, você poderá usar o seu dispositivo para 2FA.
{% endif %}

## Leia mais

- [Sobre a autenticação de dois fatores](/articles/about-two-factor-authentication)"
- "[Configurar métodos de recuperação de autenticação de dois fatores](/articles/configuring-two-factor-authentication-recovery-methods)"
- "[Acessar o {% data variables.product.prodname_dotcom %} usando a autenticação de dois fatores](/articles/accessing-github-using-two-factor-authentication)"
- "[Recuperar sua conta se você perder as credenciais da 2FA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
- "[Criando um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)"
