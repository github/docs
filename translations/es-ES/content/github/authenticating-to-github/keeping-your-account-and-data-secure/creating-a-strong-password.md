---
title: Crear una contraseña segura
intro: 'Protege tu cuenta de {% data variables.product.product_name %} con una contraseña segura y única usando un administrador de contraseñas.'
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

Debes elegir o generar una contraseña para tu cuenta de {% data variables.product.product_name %} que por lo menos cumpla con:
- Una longitud de {% if enterpriseServerVersions contains currentVersion %}siete{% else %}ocho{% endif %}caracteres, si incluye un número y una letra minúscula, o
- 15 caracteres de largo con cualquier combinación de caracteres

Para preservar la seguridad de tu cuenta, te recomendamos que sigas estas buenas prácticas:
- Use a password manager, such as [LastPass](https://lastpass.com/), [1Password](https://1password.com/), or [Keeper](https://keepersecurity.com/), to generate a password of at least 15 characters.
- Genera una contraseña que sea única para {% data variables.product.product_name %}. Si usas tu contraseña de {% data variables.product.product_name %} en algún otro lugar y ese servicio se ve comprometido, los atacantes u otros actores maliciosos pueden usar esa información para acceder a tu cuenta de {% data variables.product.product_name %}.
- Configura la autenticación de dos factores para tu cuenta personal. Para obtener más información, consulta "[Acerca de la autenticación de dos factores](/articles/about-two-factor-authentication)".
- Nunca compartas tu contraseña con nadie, aunque se trate de un potencial colaborador. Cada persona debe usar su propia cuenta personal en {% data variables.product.product_name %}. Para obtener más información acerca de cómo colaborar, consulta: "[Invitar colaboradores a un repositorio personal](/articles/inviting-collaborators-to-a-personal-repository)," "[Acerca de los modelos de desarrollo colaborativos](/articles/about-collaborative-development-models/)," o "[Colaborar con los grupos en las organizaciones](/organizations/collaborating-with-groups-in-organizations/)".

{% data reusables.repositories.blocked-passwords %}

Solo puedes utilizar tu contraseña para ingresar en {% data variables.product.product_name %} a través de tu buscador. Cuadno te atutenticas en {% data variables.product.product_name %} con otros medios, tales como la línea de comandos o la API, debes utilizar otras credenciales. Para obtener más información, consulta la sección "[Acerca de la autenticación en {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)".

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.user_settings.password-authentication-deprecation %}{% endif %}

### Leer más

- [Almacenar tus credenciales de {% data variables.product.product_name %} en la caché en Git](/github/getting-started-with-github/caching-your-github-credentials-in-git/)"
- "[Preservar la seguridad de tu cuenta y tus datos](/articles/keeping-your-account-and-data-secure/)"
