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

### Verificando com {% data variables.product.prodname_mobile %}

Se você tiver instalado e conectado a {% data variables.product.prodname_mobile %}, você poderá optar por efetuar a autenticação com {% data variables.product.prodname_mobile %} para autenticação de dois fatores.

1. Efetue o login em {% data variables.product.product_name %} com seu navegador, usando seu nome de usuário e senha.
2. Se você adicionou uma chave de segurança à sua conta, primeiro será solicitado que você insira e use uma chave de segurança. Para pular usando uma chave de segurança, clique em **Efetuar a autenticação com {% data variables.product.prodname_mobile %}**. ![Desafio de autenticação de dois fatores em {% data variables.product.product_name %} com "Autenticar com {% data variables.product.prodname_mobile %}" destacado](/assets/images/help/2fa/2fa-select-mobile.png)
3. {% data variables.product.product_name %} irá enviar uma notificação por push para verificar a sua tentativa de login. Abrir a notificação push ou abrir o aplicativo de {% data variables.product.prodname_mobile %} irá exibir um aviso que pedirá que você aprove ou rejeite esta tentativa de login.
  {% note %}

  **Observação**: Essa instrução pode exigir que você digite um número de dois dígitos exibido no navegador ao qual você está conectado.

  {% endnote %}

  ![{% data variables.product.prodname_mobile %} exige uma entrada de dois dígitos em duas etapas](/assets/images/help/2fa/2fa-mobile-number-challenge.png)

    - Ao aprovar a tentativa de login usando {% data variables.product.prodname_mobile %}, seu navegador concluirá a tentativa de login automaticamente.
    - Rejeitar a tentativa de login na tentativa impedirá que a autenticação seja concluída. Para obter mais informações, consulte "[Mantendo sua conta e dados seguros](/authentication/keeping-your-account-and-data-secure)".

{% endif %}

## Usar a autenticação de dois fatores com a linha de comando

Depois ativada a 2FA, você não usará mais a sua senha para acessar {% data variables.product.product_name %} na linha de comando. Em vez disso, use o Gestor de Credenciais do Git, um token de acesso pessoal ou uma chave SSH.

### Efetuando a autenticação na linha de comando usando o Gestor de Credenciais do Git

[Gerenciador de Credenciais Git](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) é um auxiliar de credenciais do Git seguro que é executado no Windows, macOS e Linux. Para obter mais informações sobre auxiliares de credenciais do Git, consulte [Evitar a repetição](https://git-scm.com/docs/gitcredentials#_avoiding_repetition) no livro Pro Git.

As instruções de instalação variam de acordo no sistema operacional do seu computador. Para obter mais informações, consulte [Download e instalação](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md#download-and-install) no repositório do GitCredentialManager/git-credential-manager.

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
