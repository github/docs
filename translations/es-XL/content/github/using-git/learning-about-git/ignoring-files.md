---
title: Ignorar archivos
redirect_from:
  - /git-ignore/
  - /ignore-files/
  - /articles/ignoring-files
  - /github/using-git/ignoring-files
intro: 'Puedes configurar Git para que ignore archivos que no quieres ingresar en {% data variables.product.product_name %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
### Configurar archivos ignorados para solo un repositorio

Puedes crear un archivo de tipo *.gitignore* en el directorio raíz de tu repositorio para indicarle a Git qué archivos y directorios ignorar cuando haces una confirmación. Para compartir las reglas para ignorar con otros usuarios que clonan el repositorio, confirma el archivo de tipo *.gitignore* en tu repositorio.

GitHub mantiene una lista oficial de archivos recomendados de tipo *.gitignore* para varios sistemas operativos, ambientes y lenguajes de programación populares en el repositorio público `github/gitignore`. También puedes usar gitignore.io para crear un archivo *.gitignore* para tu sistema operativo, lenguaje de programación o IDE. Para obtener más información, consulta la sección "[github/gitignore](https://github.com/github/gitignore)" y el sitio "[gitignore.io](https://www.gitignore.io/)".

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navega a la ubicación de tu repositorio de Git.
3. Crea un archivo de tipo *.gitignore* para tu repositorio.
   ```shell
   $ touch .gitignore
  ```

Para ver un archivo de tipo *.gitignore* de ejemplo, consulta la sección "[Algunas configuraciones comunes de .gitignore](https://gist.github.com/octocat/9257657)" en el repositorio de Octocat.

Si quieres ignorar un archivo que ya se haya ingresado, deberás dejar de rastrearlo antes de que agregues una regla para ignorarlo. Desde tu terminal, deja de rastrear el archivo.

```shell
$ git rm --cached <em>FILENAME</em>
```

### Configurar archivos ignorados para todos los repositorios en tu computador

También puedes crear un archivo global de tipo *.gitignore* para definir una lista de reglas para ignorar archivos en cada repositorio de Git en tu computador. Por ejemplo, puedes crear el archivo en *~/.gitignore_global* y agregarle algunas normas.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Configura Git para que utilice el archivo de exclusión *~/.gitignore_global* en todos los repositorios de Git.
  ```shell
  $ git config --global core.excludesfile ~/.gitignore_global
  ```

### Excluir archivos locales sin crear un archivo de tipo *.gitignore*

Si no quieres crear un archivo *.gitignore* para compartir con otros, puedes crear normas que no estén confirmadas con el repositorio. Puedes utilizar esta técnica para los archivos generados de forma local que no esperas que otros usuarios generen, tales como los archivos creados por tu editor.

Utiliza tu editor de texto favorito para abrir el archivo llamado *.git/info/exclude* dentro de la raíz de tu repositorio de Git. Cualquier norma que agregues aquí no se registrará y solo ignorará archivos de tu repositorio local.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navega a la ubicación de tu repositorio de Git.
3. Utilizando tu editor de texto favorito, abre el archivo *.git/info/exclude*.

### Leer más

* [Ignorar archivos](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring) en el libro de Pro Git
* [.gitignore](https://git-scm.com/docs/gitignore) en las páginas de man de Git
* [Una colección de plantillas útiles de *.gitignore* ](https://github.com/github/gitignore) en el repositorio github/gitignore
* Sitio de [gitignore.io](https://www.gitignore.io/)
