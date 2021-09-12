---
title: Criar uma senha forte
intro: 'Proteja sua conta do {% data variables.product.product_name %} com uma senha forte e exclusiva usando um gerenciador de senhas.'
redirect_from:
  - /articles/what-is-a-strong-password/
  - /articles/creating-a-strong-password
  - /github/authenticating-to-github/creating-a-strong-password
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Identity
  - Access management
---

Você deve escolher ou gerar uma senha para sua conta de {% data variables.product.product_name %} pelo menos:
- {% if enterpriseServerVersions contains currentVersion %}Sete{% else %}Oito{% endif %} caracteres, se incluir um número e uma letra minúscula, ou
- 15 caracteres com qualquer combinação de caracteres

Para manter sua conta protegida, é recomendável seguir estas práticas recomendadas:
- Use a password manager, such as [LastPass](https://lastpass.com/), [1Password](https://1password.com/), or [Keeper](https://keepersecurity.com/), to generate a password of at least 15 characters.
- Gere uma senha exclusiva para o {% data variables.product.product_name %}. Se você usar sua senha do {% data variables.product.product_name %} em outro lugar e esse serviço estiver comprometido, os invasores ou outros atores mal-intencionados podem usar essa informação para acessar sua conta do {% data variables.product.product_name %}.
- Configure a autenticação de dois fatores para sua conta pessoal. Para obter mais informações, consulte "[Sobre a autenticação de dois fatores](/articles/about-two-factor-authentication)".
- Nunca compartilhe sua senha, mesmo com um possível colaborador. Cada pessoa deve usar a própria conta pessoal no {% data variables.product.product_name %}. Para obter mais informações sobre maneiras de colaborar, consulte: "[Convidar colaboradores para um repositório pessoal](/articles/inviting-collaborators-to-a-personal-repository)", "[Sobre modelos de desenvolvimento colaborativo](/articles/about-collaborative-development-models/)" ou "[Colaborar com grupos em organizações](/organizations/collaborating-with-groups-in-organizations/)".

{% data reusables.repositories.blocked-passwords %}

Você só pode usar sua senha para entrar no {% data variables.product.product_name %} usando seu navegador. Ao efetuar a autenticação no {% data variables.product.product_name %} de outra forma, como, por exemplo, linha de comando ou API, você deve usar outras credenciais. Para obter mais informações, consulte "[Sobre a autenticação do {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)".

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.user_settings.password-authentication-deprecation %}{% endif %}

### Leia mais

- "[Armazenar suas credenciais de {% data variables.product.product_name %} no Git](/github/getting-started-with-github/caching-your-github-credentials-in-git/)"
- "[Manter a conta e os dados seguros](/articles/keeping-your-account-and-data-secure/)"
