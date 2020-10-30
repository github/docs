---
title: Configurar a autenticação de dois fatores
intro: Você pode escolher entre várias opções de adicionar uma segunda fonte de autenticação à sua conta.
redirect_from:
  - /articles/configuring-two-factor-authentication-via-a-totp-mobile-app/
  - /articles/configuring-two-factor-authentication-via-text-message/
  - /articles/configuring-two-factor-authentication-via-fido-u2f/
  - /articles/configuring-two-factor-authentication
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Você pode configurar a autenticação de dois fatores usando um app móvel{% if currentVersion == "free-pro-team@latest" %} ou por mensagem de texto{% endif %}. Também é possível adicionar uma chave de segurança.

É enfaticamente recomendável usar um aplicativo de senhas avulsas por tempo limitado (TOTP, Time-based One-Time Password) para configurar a 2FA.{% if currentVersion == "free-pro-team@latest" %} Os aplicativos TOTP são mais confiáveis que o SMS, especialmente para locais fora dos Estados Unidos.{% endif %} Os apps TOTP aceitam o backup seguro dos seus códigos de autenticação na nuvem e podem ser restaurados caso você perca o acesso ao seu dispositivo.

{% warning %}

**Aviso:**
- Se você for um integrante{% if currentVersion == "free-pro-team@latest" %}, gerente de cobrança{% endif %} ou colaborador externo de um repositório privado em uma organização que exige a autenticação de dois fatores, será preciso deixar a organização para que seja possível desabilitar a 2FA no {% data variables.product.product_location %}.
- Ao desabilitar a 2FA, você perderá acesso automaticamente à organização e a qualquer bifurcação privada que tenha dos repositórios privados da organização. Para recuperar o acesso à organização e às bifurcações, reabilite a autenticação de dois fatores e entre em contato com um proprietário da organização.

{% endwarning %}

### Configurar a autenticação de dois fatores usando um app móvel TOTP

Um aplicativo de senhas avulsas por tempo limitado (TOTP, Time-based One-Time Password) gera automaticamente um código de autenticação que é alterado após um determinado período. É recomendável usar apps TOTP baseados na nuvem, como:
- [1Password](https://support.1password.com/one-time-passwords/)
- [Authy](https://authy.com/guides/github/)
- [LastPass Authenticator](https://lastpass.com/auth/)

{% tip %}

**Dica**: para configurar a autenticação via TOTP em vários dispositivos, durante a configuração, faça a leitura do código QR usando todos os dispositivos ao mesmo tempo. Se a 2FA já estiver habilitada e você desejar adicionar outro dispositivo, será necessário reconfigurar a 2FA nas configurações de segurança.

{% endtip %}

1. Baixe um app TOTP.
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
5. Na página de autenticação de dois fatores, clique em **Set up using an app** (Configurar usando um app).
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
8. Na página de autenticação de dois fatores, siga um destes procedimentos:
    - Faça a leitura do código QR com o app do dispositivo móvel. Após a leitura, o app exibirá um código de seis dígitos que pode ser inserido no {% data variables.product.product_name %}.
    - Se não for possível ler o código QR, clique em **enter this text code** (digite este código de texto) para ver um código que pode ser copiado e inserido manualmente no {% data variables.product.product_name %}. ![Clique para inserir este código](/assets/images/help/2fa/totp-click-enter-code.png)
9. O aplicativo móvel TOTP salva sua conta do {% data variables.product.product_name %} e gera um código de autenticação a cada segundo. Na página de 2FA do {% data variables.product.product_name %}, digite o código e clique em **Enable** (Habilitar). ![Campo para habilitar TOTP](/assets/images/help/2fa/totp-enter-code.png)
{% data reusables.two_fa.test_2fa_immediately %}

{% if currentVersion == "free-pro-team@latest" %}

### Configurar a autenticação de dois fatores usando mensagens de texto

Se não for possível autenticar usando um app móvel TOTP, você pode autenticar usando mensagens SMS. Também é possível fornecer um segundo número para um dispositivo de fallback. Se você perder acesso ao dispositivo principal e aos códigos de recuperação, um número de SMS de backup pode ajudar a acessar a sua conta.

Antes de usar esse método, certifique-se de que é possível receber mensagens de texto. Pode ser que as operadores apliquem taxas.

{% warning %}

**Aviso:** é **enfaticamente recomendável** usar um aplicativo TOTP para a autenticação de dois fatores no lugar de SMS. O {% data variables.product.product_name %} não permite enviar mensagens SMS a telefones de todos os países. Antes de configurar a autenticação por mensagem de texto, veja a lista de países onde o {% data variables.product.product_name %} aceita a autenticação por SMS. Para obter mais informações, consulte "[Países onde a autenticação por SMS é aceita](/articles/countries-where-sms-authentication-is-supported)".

{% endwarning %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
4. Na página de autenticação de dois fatores, clique em **Set up using SMS** (Configurar usando SMS).
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
7. Selecione o código do seu país e digite o número do celular, incluindo o código de área. Confirme se as informações estão corretas e clique em **Send authentication code** (Enviar código de autenticação). ![Tela de SMS da 2FA](/assets/images/help/2fa/2fa_sms_photo.png)
8. Você receberá uma mensagem de texto com um código de segurança. Digite o código na página de autenticação de dois fatores e clique em **Enable** (Habilitar). ![Campo para continuação de SMS por 2FA](/assets/images/help/2fa/2fa-sms-code-enable.png)
{% data reusables.two_fa.test_2fa_immediately %}

{% endif %}

### Configurar a autenticação de dois fatores usando uma chave de segurança

{% data reusables.two_fa.after-2fa-add-security-key %}

Na maioria dos dispositivos e navegadores, você pode usar uma chave de segurança física por USB ou NFC. Alguns navegadores podem usar um leitor de impressões digitais, reconhecimento facial ou senha/PIN no seu dispositivo como chave de segurança.

A autenticação com uma chave de segurança é *uma alternativa* à autenticação com um aplicativo TOTP{% if currentVersion == "free-pro-team@latest" %} ou uma mensagem de texto{% endif %}. Se você perder sua chave de segurança, você poderá usar o código do seu telefone para entrar.

1. Você já deve ter configurado a 2FA usando um app móvel TOTP{% if currentVersion == "free-pro-team@latest" %} ou por SMS{% endif %}.
2. Certifique-se de que você tenha uma
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}chave de segurança compatível com WebAuthn{% else %}FIDO U2F{% endif %} inserida no computador.
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
5. Ao lado de "Security keys" (Chaves de segurança), clique em **Add** (Adicionar). ![Opção para adicionar chaves de segurança](/assets/images/help/2fa/add-security-keys-option.png)
6. Em "Security keys" (Chaves de segurança), clique em **Register new security key** (Registrar nova chave de segurança).
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
  ![Registrar uma nova chave de segurança](/assets/images/help/2fa/security-key-register.png)
  {% else %}
  ![Registrar um novo dispositivo FIDO U2F](/assets/images/help/2fa/register_new_fido_u2f_device.png)
  {% endif %}
7. Digite um apelido para a chave de segurança e clique em **Add** (Adicionar).
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
  ![Fornecer um apelido para uma chave de segurança](/assets/images/help/2fa/security-key-nickname.png)
  {% else %}
  ![Fornecer um apelido para um dispositivo FIDO U2F](/assets/images/help/2fa/fido_u2f_nickname.png)
  {% endif %}
8. Ative a chave de segurança seguindo as orientações na documentação da sua chave de segurança.
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
  ![Solicitação de chave de segurança](/assets/images/help/2fa/security-key-prompt.png)
  {% else %}
  ![Solicitação para um dispositivo FIDO U2F](/assets/images/help/2fa/fido_u2f_prompt_key.png)
  {% endif %}
9.  Verifique se você baixou e pode acessar os códigos de recuperação. Se ainda não os baixou ou se deseja gerar outro conjunto de códigos, baixe seus códigos e salve-os em um local seguro. Caso perca o acesso à sua conta, é possível usar os códigos de recuperação para voltar a ela. Para obter mais informações, consulte "[Recuperar sua conta se você perder as credenciais da 2FA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)". ![Botão para download de códigos de recuperação](/assets/images/help/2fa/2fa-recover-during-setup.png)
{% data reusables.two_fa.test_2fa_immediately %}

### Leia mais

- [Sobre a autenticação de dois fatores](/articles/about-two-factor-authentication)"
- "[Configurar métodos de recuperação de autenticação de dois fatores](/articles/configuring-two-factor-authentication-recovery-methods)"
- "[Acessar o {% data variables.product.prodname_dotcom %} usando a autenticação de dois fatores](/articles/accessing-github-using-two-factor-authentication)"
- "[Recuperar sua conta se você perder as credenciais da 2FA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
- "[Criando um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)"
