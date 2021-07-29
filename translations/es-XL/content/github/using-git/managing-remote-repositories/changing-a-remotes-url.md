---
title: Cambiar la URL de un remoto
redirect_from:
  - /articles/changing-a-remote-s-url
  - /articles/changing-a-remotes-url
  - /github/using-git/changing-a-remotes-url
intro: El comando `git remote set-url` cambia una URL del repositorio remoto existente.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
{% tip %}

**Sugerencia:** Para obtener información sobre la diferencia entre las URL HTTPS y SSH consulta "[¿Qué URL remota debería usar?](/articles/which-remote-url-should-i-use)"

{% endtip %}

El comando `git remote set-url` toma dos argumentos:

* Un nombre de remoto existente. Por ejemplo, `origin` o `upstream` son dos de las opciones comunes.
* Una nueva URL para el remoto. Por ejemplo:
  * Si estás actualizando para usar HTTPS, tu URL puede verse como:
```shell
https://{% data variables.command_line.backticks %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
```
  * Si estás actualizando para usar SSH, tu URL puede verse como:
```shell
git@{% data variables.command_line.codeblock %}:<em>USERNAME</em>/<em>REPOSITORY</em>.git
```

### Cambiar direcciones URL remotas de SSH a HTTPS

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cambiar el directorio de trabajo actual en tu proyecto local.
3. Enumerar tus remotos existentes a fin de obtener el nombre de los remotos que deseas cambiar.
  ```shell
  $ git remote -v
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (push)
  ```
4. Cambiar tu URL remota de SSH a HTTPS con el comando `git remote set-url`.
  ```shell
  $ git remote set-url origin https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
  ```
5. Verificar que la URL remota ha cambiado.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (push)
  ```

La próxima vez que ejecutes `git`, `git pull` o `git push` en el repositorio remoto, se te pedirá el nombre de usuario y la contraseña de GitHub.

- Si tienes habilitada la [autenticación de dos factores](/articles/securing-your-account-with-two-factor-authentication-2fa), debes [crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token) para usar en lugar de tu contraseña de GitHub.
- Puedes [utilizar un ayudante de credenciales](/github/using-git/caching-your-github-credentials-in-git) para que Git recuerde tu nombre de usuario y contraseña cada vez que se comunique con GitHub.

### Switching remote URLs from HTTPS to SSH

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cambiar el directorio de trabajo actual en tu proyecto local.
3. Enumerar tus remotos existentes a fin de obtener el nombre de los remotos que deseas cambiar.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (push)
  ```
4. Cambiar tu URL remota de HTTPS a SSH con el comando `git remote set-url`.
  ```shell
  $ git remote set-url origin git@{% data variables.command_line.codeblock %}:<em>USERNAME</em>/<em>REPOSITORY</em>.git
  ```
5. Verificar que la URL remota ha cambiado.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (push)
  ```

### Solución de problemas

Puedes encontrar estos errores cuando intentes cambiar un remoto.

#### No existe tal remoto '[name]'

Este error significa que el remoto que trataste de cambiar no existe:

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

Comprueba que escribiste correctamente el nombre del remoto.

### Leer más

- ["Working with Remotes" (Trabajar con remotos) desde el libro _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
