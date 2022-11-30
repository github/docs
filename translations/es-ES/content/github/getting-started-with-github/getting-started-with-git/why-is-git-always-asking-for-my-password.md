---
title: ¿Por qué Git me pregunta siempre mi contraseña?
intro: 'Si Git te solicita el nombre de usuario y la contraseña cada vez que tratas de interactuar con GitHub, probablemente estás usando la URL del clon HTTPS para tu repositorio.'
redirect_from:
  - /articles/why-is-git-always-asking-for-my-password
  - /github/using-git/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/why-is-git-always-asking-for-my-password
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Utilizar una URL remota de tipo HTTPS tiene algunas ventajas comparadas con el uso de SSH. Es más fácil de configurar que SSH, y habitualmente trabaja mediante cortafuectos y proxies estrictos. Sin embargo, también te solicita que ingreses tus credenciales de {% data variables.product.product_name %} cada vez que extraes o subes un repositorio.

{% data reusables.user_settings.password-authentication-deprecation %}

Puedes evitar que se te solicite tu contraseña si configuras Git para que [almacene tus credenciales en el caché](/github/getting-started-with-github/caching-your-github-credentials-in-git). Ya que hayas configurado el almacenamiento de credenciales en caché, Git utilizará to token de acceso personal almacenado en caché automáticamente cada que extraigas o subas información a un repositorio utilizando HTTPS.

### Leer más

- "[Acerca de los repositorios remotos](/github/getting-started-with-github/about-remote-repositories)."
- "[Acerca de la autenticación en {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)"
- "[Agregar tu llave SSH al ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)"
