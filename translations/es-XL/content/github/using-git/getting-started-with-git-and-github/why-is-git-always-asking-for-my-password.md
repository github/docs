---
title: ¿Por qué Git me pregunta siempre mi contraseña?
intro: 'Si Git te solicita el nombre de usuario y la contraseña cada vez que tratas de interactuar con GitHub, probablemente estás usando la URL del clon HTTPS para tu repositorio.'
redirect_from:
  - /articles/why-is-git-always-asking-for-my-password
  - /github/using-git/why-is-git-always-asking-for-my-password
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
Utilizar una URL remota de tipo HTTPS tiene algunas ventajas comparadas con el uso de SSH. Es más fácil de configurar que SSH, y habitualmente trabaja mediante cortafuectos y proxies estrictos. Sin embargo, también te solicita que ingreses tus credenciales de GitHub cada vez que extraes o subes un repositorio.

Puedes evitar que se te solicite tu contraseña si configuras Git para que [almacene tus credenciales en el caché](/github/using-git/caching-your-github-credentials-in-git). {% data reusables.user_settings.password-authentication-deprecation %}

Ya que hayas configurado el almacenamiento de credenciales en caché, Git utilizará to token de acceso personal almacenado en caché automáticamente en vez de utilizar una contraseña cada que extraigas o cargues información a un repositorio utilizando HTTPS.


### Leer más

* "[¿Qué URL remota debería utilizar?](/articles/which-remote-url-should-i-use/#cloning-with-https-urls)"
* "[Acerca de la autenticación en {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)"
* "[Agregar tu llave SSH al ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)"
