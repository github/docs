---
title: Por que o Git sempre solicita a minha senha?
intro: 'Se o Git solicita um nome de usuário e uma senha toda vez que você tenta interagir com o GitHub, provavelmente isso quer dizer que você está usando a URL de clone de HTTPS do seu repositório.'
redirect_from:
  - /articles/why-is-git-always-asking-for-my-password
  - /github/using-git/why-is-git-always-asking-for-my-password
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
Usar uma URL remota do tipo HTTPS tem algumas vantagens em comparação com o uso de SSH. É mais fácil configurar do que SSH e geralmente funciona por meio de firewalls e proxies rigorosos. No entanto, ele também pede que você insira suas credenciais de {% data variables.product.product_name %} sempre que você fizer pull ou push de um repositório.

{% data reusables.user_settings.password-authentication-deprecation %}

Você pode evitar que seja solicitada a sua senha ao configurar o Git para [armazenar suas credenciais](/github/using-git/caching-your-github-credentials-in-git) para você. Uma vez que você configurado o armazenamento de credenciais, o Git usa automaticamente seu token de acesso pessoal armazenado quando você extrai ou faz push de um repositório usando HTTPS.

### Leia mais

* "[Qual URL remota devo usar](/articles/which-remote-url-should-i-use/#cloning-with-https-urls)"
* "[Sobre a autenticação em {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)"
* "[Adicionar a sua chave SSH ao ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)"
