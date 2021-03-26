---
title: Uso de SSH a través del puerto HTTPS
intro: 'Algunas veces, los firewalls se niegan a permitir conexiones SSH por completo.  If using [HTTPS cloning with credential caching](/github/getting-started-with-github/caching-your-github-credentials-in-git) is not an option, you can attempt to clone using an SSH connection made over the HTTPS port.  La mayoría de las reglas del firewall deberían permitir esto, pero los servidores proxy pueden interferir.'
redirect_from:
  - /articles/using-ssh-over-the-https-port
versions:
  free-pro-team: '*'
topics:
  - ssh
---

{% tip %}

**Usuarios de GitHub Enterprise**: Actualmente, no se puede acceder a GitHub Enterprise por SSH a través del puerto HTTPS.

{% endtip %}

Para probar si es posible el SSH a través del puerto HTTPS, ejecuta este comando SSH:

```shell
$ ssh -T -p 443 git@ssh.github.com
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

Si eso funcionó, ¡fantástico! De lo contrario, puede que debas [seguir nuestra guía de solución de problemas](/articles/error-permission-denied-publickey).

### Habilitar conexiones SSH a través de HTTPS

Si es posible el SSH en `git@ssh.{% data variables.command_line.backticks %}` a través del puerto 443, puedes reemplazar los parámetros SSH para forzar que cualquier conexión a {% data variables.product.product_location %} se ejecute a través de ese servidor y puerto.

Para establecer esto en tus parámetros ssh, edita el archivo en `~/.ssh/config` y agrega esta sección:

```
Host {% data variables.command_line.codeblock %}
  Hostname ssh.{% data variables.command_line.codeblock %}
  Port 443
  User git
```

Puedes probar que esto funcione volviéndote a conectar a {% data variables.product.product_location %}:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```
