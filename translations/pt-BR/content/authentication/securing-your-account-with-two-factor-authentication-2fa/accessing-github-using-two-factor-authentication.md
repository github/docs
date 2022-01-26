---
title: Acessar o GitHub usando a autenticação de dois fatores
intro: 'Com a 2FA habilitada, será solicitado que você forneça seu código de autenticação de 2FA, bem como sua senha, ao iniciar a sessão no {% data variables.product.product_name %}.'
redirect_from:
  - /articles/providing-your-2fa-security-code
  - /articles/providing-your-2fa-authentication-code
  - /articles/authenticating-to-github-using-fido-u2f-via-nfc
  - /articles/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Acesse o GitHub com 2FA
---

Com a autenticação de dois fatores habilitada, você deverá fornecer um código de autenticação ao acessar {% data variables.product.product_name %} por meio do seu navegador. Se você acessar {% data variables.product.product_name %} usando outros métodos, como, por exemplo, a API ou a linha de comando, você deverá usar uma forma alternativa de autenticação. Para obter mais informações, consulte "[Sobre a autenticação do {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)".

## Fornecer um código 2FA ao entrar no site

Depois de entrar no {% data variables.product.product_name %} usando sua senha, será solicitado que você forneça um código de autenticação de {% ifversion fpt or ghec %}uma mensagem de texto ou{% endif %} do seu app TOTP.

O {% data variables.product.product_name %} solicitará seu código de autenticação 2FA novamente apenas se você se desconectar, for usar um novo dispositivo ou a sessão expirar.

### Gerar um código por meio de um aplicativo TOTP

Se você optar por configurar a autenticação de dois fatores usando um aplicativo TOTP no smartphone, será possível gerar um código de autenticação para o {% data variables.product.product_name %} a qualquer momento. Na maioria das vezes, apenas iniciar o aplicativo gera um novo código. Você deve consultar a documentação do seu aplicativo para obter instruções específicas.

Em caso de exclusão do aplicativo móvel após configuração da autenticação de dois fatores, será preciso fornecer seu código de recuperação para obter acesso à sua conta. Para obter mais informações, consulte "[Recuperar sua conta se você perder as credenciais da autenticação de dois fatores](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"

{% ifversion fpt or ghec %}

### Receber uma mensagem de texto

Se você configurar a autenticação de dois fatores por meio de mensagens de texto, o {% data variables.product.product_name %} enviará uma mensagem de texto com seu código de autenticação.

### Verifying with {% data variables.product.prodname_mobile %}

If you have installed and signed in to {% data variables.product.prodname_mobile %}, you may choose to authenticate with {% data variables.product.prodname_mobile %} for two-factor authentication.

1. Sign in to {% data variables.product.product_name %} with your browser, using your username and password.
2. If you have added a security key to your account, you'll first be prompted to insert and use a security key. To skip using a security key, click **Authenticate with {% data variables.product.prodname_mobile %}**. ![Two-factor authentication challenge on {% data variables.product.product_name %} with "Authenticate with {% data variables.product.prodname_mobile %}" highlighted](/assets/images/help/2fa/2fa-select-mobile.png)
3. {% data variables.product.product_name %} will send you a push notification to verify your sign in attempt. Opening the push notification or opening the {% data variables.product.prodname_mobile %} app will display a prompt, asking you to approve or reject this sign in attempt.
  {% note %}

  **Note**: This prompt may require you to enter a two-digit number displayed within the browser you are signing in to.

  {% endnote %}

  ![Two-factor authentication challenge with {% data variables.product.prodname_mobile %} requiring a two-digit input](/assets/images/help/2fa/2fa-mobile-number-challenge.png)

    - Upon approving the login attempt using {% data variables.product.prodname_mobile %}, your browser will complete the sign in attempt automatically.
    - Rejecting the sign in attempt will prevent the authentication from finishing. For more information, see "[Keeping your account and data secure](/authentication/keeping-your-account-and-data-secure)."

{% endif %}

## Usar a autenticação de dois fatores com a linha de comando

Após habilitação da 2FA, você deverá usar um token de acesso pessoal ou uma chave SSH em vez da senha ao acessar o {% data variables.product.product_name %} na linha de comando.

### Autenticar na linha de comando usando HTTPS

Após habilitação da 2FA, você deverá criar um token de acesso pessoal a ser usado como uma senha ao autenticar no {% data variables.product.product_name %} na linha de comando usando URLs HTTPS.

Ao ser solicitado a fornecer um nome de usuário e uma senha na linha de comando, use seu nome de usuário no {% data variables.product.product_name %} e o token de acesso pessoal. O prompt da linha de comando não especificará que você deve inserir seu token de acesso pessoal quando solicitar sua senha.

Para mais informação, consulte "[Criando um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)."

### Autenticar na linha de comando usando SSH

Habilitar a 2FA não altera como você faz a autenticação no {% data variables.product.product_name %} na linha de comando usando URLs SSH. Para obter mais informações sobre como configurar e usar uma chave SSH, consulte "[Conectar-se ao {% data variables.product.prodname_dotcom %} com SSH](/articles/connecting-to-github-with-ssh/)".

## Usar a autenticação de dois fatores para acessar um repositório usando o Subversion

Quando você acessa um repositório via Subversion, é preciso fornecer um token de acesso pessoal no lugar de digitar sua senha. Para mais informação, consulte "[Criando um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)."

## Solução de Problemas

Em caso de perda de acesso às suas credenciais de autenticação de dois fatores, você poderá usar seus códigos de recuperação ou outro método de recuperação (se houver um configurado) para obter acesso novamente à sua conta. Para obter mais informações, consulte "[Recuperar sua conta se você perder as credenciais da 2FA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)".

Se a autenticação falhar várias vezes, talvez seja conveniente sincronizar o relógio do seu telefone com o provedor móvel. Muitas vezes, isso envolve verificar a opção "Set automatically" (Definir automaticamente) no relógio do seu telefone, em vez de fornecer seu próprio fuso horário.

## Leia mais

- [Sobre a autenticação de dois fatores](/articles/about-two-factor-authentication)"
- "[Configurar a autenticação de dois fatores](/articles/configuring-two-factor-authentication)"
- "[Configurar métodos de recuperação de autenticação de dois fatores](/articles/configuring-two-factor-authentication-recovery-methods)"
- "[Recuperar sua conta se você perder as credenciais da autenticação de dois fatores](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
