---
title: Actualizar credenciales desde la Keychain OSX
intro: 'Necesitarás actualizar tus credenciales guardadas en el ayudante `git-credential-osxkeychain` si cambias tu{% if currentVersion != "github-ae@latest" %} nombre de usuario, contraseña, o{% endif %} token de acceso personal en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - Entrada de contraseña de GitHub en Keychain
  - /github/using-git/updating-credentials-from-the-macos-keychain
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.user_settings.password-authentication-deprecation %}

### Actualizar tus credenciales a través de Keychain Access (Acceso keychain)

1. Da clic en el icono de Spotlight (lupa) en el costado derecho de la barra de menú. Teclea `Keychain access` y luego presiona la tecla Enter para lanzar la app. ![Barra Spotlight Search (Búsqueda de Spotlight)](/assets/images/help/setup/keychain-access.png)
2. En Keychain Access (Acceso keychain), busca **{% data variables.command_line.backticks %}**.
3. Encuentra la entrada "internet password" (contraseña de internet) para `{% data variables.command_line.backticks %}`.
4. Edita o borra la entrada según corresponda.

### Eliminar tus credenciales a través de la línea de comando

A través de la línea de comandos, puedes utilizar el ayudante de credenciales directamente para borrar la entrada de keychain.

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Press Return]</em>
```

Si resulta exitoso, no se imprimirá nada. Para probar que esto funciona, intenta clonar un repositorio privado de {% data variables.product.product_location %}. Si se te pide una contraseña, la entrada de keychain se borró.

### Leer más

- [Almacenar tus credenciales de {% data variables.product.prodname_dotcom %} en el caché dentro de Git](/github/getting-started-with-github/caching-your-github-credentials-in-git/)"
