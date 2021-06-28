---
title: Acerca de los repositorios remotos
redirect_from:
  - /articles/working-when-github-goes-down/
  - /articles/sharing-repositories-without-github/
  - /articles/about-remote-repositories
  - /github/using-git/about-remote-repositories
intro: 'El enfoque colaborador de GitHub para el desarrollo depende en publicar confirmaciones de cambios desde tu repositorio local para que otras personas lo vean, lo extraigan y lo actualicen.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
Una URL remota es la manera de Git de decir "el lugar donde se almacena tu código". Esa URL podría ser tu repositorio en GitHub o la bifurcación de otro usuario o incluso en un servidor completamente diferente.

Solo puedes subir a dos tipos de direcciones URL:

* Una URL HTTPS como `https://{% data variables.command_line.backticks %}/user/repo.git`
* Una URL SSH como `git@{% data variables.command_line.backticks %}:user/repo.git`

Git asocia una URL remota con un nombre y tu remoto predeterminado generalmente se llama `origen`.

Para obtener información sobre las diferencias entre estas URL, consulta "[¿Qué URL remota debo usar?](/articles/which-remote-url-should-i-use)"

### Crear remotos

Puedes usar el comando `git remote add` para hacer coincidir una URL remota con un nombre. Por ejemplo, escribirás lo siguiente en la línea de comandos:

```shell
git remote add origin <em> &lt;REMOTE_URL> </em>
```

Esto asocia el nombre `origin` con `REMOTE_URL`.

Puedes usar el comando `git remote set-url` para [cambiar la URL de un remoto](/articles/changing-a-remote-s-url).
