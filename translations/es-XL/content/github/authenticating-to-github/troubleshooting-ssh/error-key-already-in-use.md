---
title: 'Error: La clave ya está en uso'
intro: 'Este error se produce cuando intentas [agregar una clave](/articles/adding-a-new-ssh-key-to-your-github-account) que ya ha sido agregada a otra cuenta o repositorio.'
redirect_from:
  - /articles/error-key-already-in-use
  - /github/authenticating-to-github/error-key-already-in-use
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---
### Determinar dónde se ha usado la clave

Para determinar dónde se ha usado la clave, abre una terminal y escribe el comando `ssh`. Usa la marca `-i` para obtener la ruta a la clave que deseas verificar:

```shell
$ ssh -T -ai <em>~/.ssh/id_rsa</em> git@{% data variables.command_line.codeblock %}
# Connect to {% data variables.product.product_location %} using a specific ssh key
> Hi <em>username</em>! Has autenticado con éxito, pero GitHub no
> proporciona acceso al shell.
```

El *nombre de usuario* que aparece en la respuesta es la cuenta de {% data variables.product.product_name %} a la que la clave se encuentra actualmente vinculada. Si la respuesta se parece a "username/repo", la llave se ha vinculado a un repositorio como [*llave de implementación*](/guides/managing-deploy-keys#deploy-keys).

### Resolver el problema

Para resolver el problema, primero elimina la clave de la otra cuenta o repositorio y luego [agrégala a tu cuenta](/articles/adding-a-new-ssh-key-to-your-github-account).

Si no tienes permisos para transferir la clave y no puedes comunicarte con un usuario que los tenga, elimina el par de claves y [genera uno nuevo](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

### Llaves de implementación

Una vez que una clave se ha vinculado a un repositorio como llave de implementación, no se la puede usar en otro repositorio.  Si se te muestra este error mientras configuras las llaves de despliegue, consulta la sección "[Administrar las llaves de despliegue](/guides/managing-deploy-keys)".
