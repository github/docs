---
title: Actualizar credenciales desde la Keychain OSX
intro: 'Necesitarás actualizar tus credenciales guardadas en el asistente `git-credential-osxkeychain` si cambias tu nombre de usuario, contraseña o token de acceso personal en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - Entrada de contraseña de GitHub en Keychain
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.user_settings.password-authentication-deprecation %}

### Actualizar tus credenciales a través de Keychain Access (Acceso keychain)

1. Click on the Spotlight icon (magnifying glass) on the right side of the menu bar. Type `Keychain access` then press the Enter key to launch the app. ![Barra Spotlight Search (Búsqueda de Spotlight)](/assets/images/help/setup/keychain-access.png)
2. En Keychain Access (Acceso keychain), busca **{% data variables.command_line.backticks %}**.
3. Encuentra la entrada "internet password" (contraseña de internet) para `{% data variables.command_line.backticks %}`. ![Entrada de contraseña de GitHub en Keychain](/assets/images/help/setup/keychain-entry.png)
4. Edita o borra la entrada según corresponda.

### Eliminar tus credenciales a través de la línea de comando

A través de la línea de comando, puedes utilizar el ayudante de credenciales directamente para borrar la entrada keychain.

Para hacerlo, escribe el siguiente comando:

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Press Return]</em>
```

Si resulta exitoso, no se imprimirá nada. Para ver si funciona, prueba y clona un repositorio desde {% data variables.product.product_location %}. Si te solicita una contraseña, la entrada keychain se eliminó.

### Leer más

- [Almacenar tus credenciales de {% data variables.product.prodname_dotcom %} en el caché dentro de Git](/github/using-git/caching-your-github-credentials-in-git/)"
