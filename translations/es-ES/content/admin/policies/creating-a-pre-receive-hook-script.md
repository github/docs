---
title: Crear un script de ganchos de pre-recepción
intro: Usa los scripts de los ganchos de pre-recepción para crear requisitos para aceptar o rechazar una subida en función de los contenidos.
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-script
  - /enterprise/admin/policies/creating-a-pre-receive-hook-script
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

Puedes ver los ejemplos de los ganchos de pre-recepción para {% data variables.product.prodname_ghe_server %} en el repositorio [`github/platform-samples`](https://github.com/github/platform-samples/tree/master/pre-receive-hooks).

### Escribir un script de ganchos de pre-recepción
Un script de gancho de pre-recepción se ejecuta en un ambiente de gancho de pre-recepción en {% data variables.product.product_location %}. Cuando creas un script de gancho de pre-recepción, considera las entradas, resultados, estado de salida y variables de ambiente.

#### Input (`stdin`)
Después de que ocurre una subida y antes de que se actualice cualquier referencia para el repositorio remoto, el proceso de `git-receive-pack` en {% data variables.product.product_location %} invoca el script de gancho de pre-recepción. La entrada estándar para el script, `stdin`, es una secuencia que contiene una línea que cada referencia actualizará. Cada línea contiene el nombre anterior del objeto para la referencia, el nombre nuevo del objeto para la referencia, y el nombre completo de la referencia.

```
<old-value> SP <new-value> SP <ref-name> LF
```

Esta secuencia representa los siguientes argumentos.

| Argumento           | Descripción                                                                                                                       |
|:------------------- |:--------------------------------------------------------------------------------------------------------------------------------- |
| `<old-value>` | El nombre anterior del objeto se almacena en la referencia.<br> Cuando creas una referencia nueva, el valor es de 40 ceros. |
| `<new-value>` | Nombre del objeto nuevo que se almacenará en la referencia.<br> Cuando borras una referencia, el valor es de 40 ceros.      |
| `<ref-name>`  | El nombre completo de la referencia.                                                                                              |

Para obtener más información sobre `git-receive-pack`, consulta "[git-receive-pack](https://git-scm.com/docs/git-receive-pack)" en la documentación de Git. Para obtener más información sobre las referencias, consulta la sección "[Referencias de Git](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" en *Pro Git*.

#### Output (`stdout`)

La salida estándar para el script, `stdout`, se pasa de vuelta al cliente. El usuario en la línea de comando o en la interface de usuario podrá ver cualquier declaración de tipo `echo`.

#### Estado de salida

El estado de salida de un script de pre-recepción determina si la subida se aceptará.

| Valor del estado de salida | Acción                    |
|:-------------------------- |:------------------------- |
| 0                          | La subida será aceptada.  |
| no cero                    | La subida será rechazada. |

#### Variables del entorno

Adicionalmente a la entrada estándar de tu script de gancho de pre-recepción, `stdin`, {% data variables.product.prodname_ghe_server %} pone a disposición las siguientes variables en el ambiente Bash para la ejecución de tu script. Para obtener más información sobre `stdin` para tu script de gancho de pre-recepción, consulta la sección "[Input(`stdin`)](#input-stdin)".

Hay diversas variables de ambiente disponibles para tu script de gancho de pre-recepción dependiendo de lo que active a dicho script para su ejecución.

- [Siempre disponible](#always-available)
- [Disponible para subidas desde la interface web o API](#available-for-pushes-from-the-web-interface-or-api)
- [Disponible para las fusiones de solicitudes de cambio](#available-for-pull-request-merges)
- [Disponible para las subidas utilizando autenticación por SSH](#available-for-pushes-using-ssh-authentication)

##### Siempre disponible

Las siguientes variables siempre están disponibles en el ambiente de gancho de pre-recepción.

| Variable                  | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Valor de ejemplo                                                   |
|:------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:------------------------------------------------------------------ |
| <pre>$GIT_DIR</pre> | Ruta al repositorio remoto en la instancia                                                                                                                                                                                                                                                                                                                                                                                                                               | /data/user/repositories/a/ab/<br>a1/b2/34/100001234/1234.git |
| <pre>$GIT_PUSH_OPTION_COUNT</pre> | La cantidad de opciones de subida que envió el cliente con `--push-option`. Para obtener más información, consulta la sección "[git-push](https://git-scm.com/docs/git-push#Documentation/git-push.txt---push-optionltoptiongt)" en la documentación de Git.                                                                                                                                                                                                             | 1                                                                  |
| <pre>$GIT\_PUSH\_OPTION\_<em>N</em></pre> | Donde _N_ es un número entero que comienza con 0, esta variable contiene la cadena de opción de subida que envió el cliente. La primera opción que se envió se almacena en `GIT_PUSH_OPTION_0`, la segunda opción que se envió se almacena en `GIT_PUSH_OPTION_1`, y así sucesivamente. Para obtener más información sobre las opciones de subida, consulta "[git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt)" en la documentación de Git. | abcd |{% if currentVersion ver_gt "enterprise-server@2.21" %}
| <pre>$GIT_USER_AGENT</pre> | El cliente de Git que subió los cambios envía la secuencia de usuario-agente                                                                                                                                                                                                                                                                                                                                                                                             | git/2.0.0{% endif %}
| <pre>$GITHUB_REPO_NAME</pre> | Nombre del repositorio que se está actualizando en formato _NAME_/_OWNER_                                                                                                                                                                                                                                                                                                                                                                                                | octo-org/hello-enterprise                                          |
| <pre>$GITHUB_REPO_PUBLIC</pre> | Valor booleano que representa si el repositorio que se está actualizando es público                                                                                                                                                                                                                                                                                                                                                                                      | <ul><li>true: La visibilidad del repositorio es pública</li><li>false: La visibilidad del repositorio es privada o interna</li></ul>                                          |
| <pre>$GITHUB_USER_IP</pre> | La dirección IP del cliente que inició la subida                                                                                                                                                                                                                                                                                                                                                                                                                         | 192.0.2.1                                                          |
| <pre>$GITHUB_USER_LOGIN</pre> | El nombre de usuario de la cuenta que inició la subida                                                                                                                                                                                                                                                                                                                                                                                                                   | octocat                                                            |

##### Disponible para subidas desde la interface web o API

La variable `$GITHUB_VIA` se encuentra disponible en el ambiente de gancho de pre-recepción cuando la actualización de la referencia que activa el gancho ocurre a través ya sea de la interface web o de la API para {% data variables.product.prodname_ghe_server %}. El valor describe la acción que actualizó la referencia.

| Valor                      | Acción                                                                                                                                                                                     | Más información                                                                                                                                                                             |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <pre>auto-merge deployment api</pre>  | Fusión automática de la rama base a través del despliegue que se creó con la API                                                                                                           | "[Repositorios](/rest/reference/repos#create-a-deployment)" en la documentación de la API de REST                                                                                           |
| <pre>blob edit</pre> | Cambio al contenido de un archivo en la interface web                                                                                                                                      | "[Editar archivos en tu repositorio](/github/managing-files-in-a-repository/editing-files-in-your-repository)"                                                                              |
| <pre>branch merge api</pre> | Fusión de una rama a través de la API                                                                                                                                                      | "[Repositorios](/rest/reference/repos#merge-a-branch)" en la documentación de la API de REST                                                                                                |
| <pre>branches page delete button</pre> | Borrado de una rama en la interface web                                                                                                                                                    | "[Crear y borrar ramas dentro de tu repositorio](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)"              |
| <pre>git refs create api</pre> | Creación de una referencia a través de la API                                                                                                                                              | "[Base de datos de Git](/rest/reference/git#create-a-reference)" en la documentación de la API de REST                                                                                      |
| <pre>git refs delete api</pre> | Borrado de una referencia a través de la API                                                                                                                                               | "[Bases de datos de Git](/rest/reference/git#delete-a-reference)" En la documentación de la API de REST                                                                                     |
| <pre>git refs update api</pre> | Actualización de una referencia a tracvés de la API                                                                                                                                        | "[Base de datos de Git](/rest/reference/git#update-a-reference)" en la documentación de la API de REST                                                                                      |
| <pre>git repo contents api</pre> | Cambio al contenido de un archivo a través de la API                                                                                                                                       | "[Repositorios](/rest/reference/repos#create-or-update-file-contents)" en la documentación de la API de REST                                                                                |
| <pre>merge base into head</pre> | Actualiza la rama de tema de la rama base cuando la rama base requiere verificaciones de estado estrictas (a través de **Actualización de rama** en una solicitud de cambios, por ejemplo) | "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)"                                                        |
| <pre>pull request branch delete button</pre> | Borrado de una rama de tema desde una solicitud de cambios en la interface web                                                                                                             | "[Borrar y restaurar ramas en una solicitud de extracción](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request#deleting-a-branch-used-for-a-pull-request)" |
| <pre>pull request branch undo button</pre> | Restablecimiento de una rama de tema desde una solicitud de cambios en la interface web                                                                                                    | "[Borrar y restaurar ramas en una solicitud de extracción](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request#restoring-a-deleted-branch)"                |
| <pre>pull request merge api</pre> | Fusión de una solicitud de cambios a través de la API                                                                                                                                      | "[Cambios](/rest/reference/pulls#merge-a-pull-request)" en la documentación de la API de REST                                                                                               |
| <pre>pull request merge button</pre> | Fusión de una solicitud de cambios en la interface web                                                                                                                                     | "[Fusionar una solicitud de extracción](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request#merging-a-pull-request-on-github)"                                       |
| <pre>pull request revert button</pre> | Revertir una solicitud de cambios                                                                                                                                                          | "[Revertir una solicitud de extracción](/github/collaborating-with-issues-and-pull-requests/reverting-a-pull-request)"                                                                      |
| <pre>releases delete button</pre> | Borrado de una solicitud                                                                                                                                                                   | "[Administrar los lanzamientos en un repositorio](/github/administering-a-repository/managing-releases-in-a-repository#deleting-a-release)"                                                 |
| <pre>stafftools branch restore</pre> | Restablecimiento de una rama desde el panel de administrador del sitio                                                                                                                     | "[Panel de administrador del sitio](/admin/configuration/site-admin-dashboard#repositories)"                                                                                                |
| <pre>tag create api</pre> | Creación de una etiqueta a través de la API                                                                                                                                                | "[Base de datos de Git](/rest/reference/git#create-a-tag-object)" en la documentación de la API de REST                                                                                     |
| <pre>slumlord (#<em>SHA</em>)</pre> | Confirmar a través de Subversion                                                                                                                                                           | "[Compatibilidad para los clientes de Subversion](/github/importing-your-projects-to-github/support-for-subversion-clients#making-commits-to-subversion)"                                   |
| <pre>web branch create</pre> | Creación de una rama a través de la interface web                                                                                                                                          | "[Crear y borrar ramas dentro de tu repositorio](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch)"              |

##### Disponible para las fusiones de solicitudes de cambio

Las siguientes variables se encuentran disponibles en el ambiente de gancho de pre-recepción cuando la subida que activa el gancho se debe a la fusión de una solicitud de cambios.

| Variable                   | Descripción                                                                             | Valor de ejemplo             |
|:-------------------------- |:--------------------------------------------------------------------------------------- |:---------------------------- |
| <pre>$GITHUB_PULL_REQUEST_AUTHOR_LOGIN</pre> | Nombre de usuario de la cuenta que creó la solicitud de cambios                         | octocat                      |
| <pre>$GITHUB_PULL_REQUEST_HEAD</pre> | El nombre de la rama de tema de la solicitud de cambios en el formato `USERNAME:BRANCH` | <nobr>octocat:fix-bug</nobr> |
| <pre>$GITHUB_PULL_REQUEST_BASE</pre> | El nombre de la rama base de la solicitud de cambios en el formato `USERNAME:BRANCH`    | octocat:main                 |

##### Disponible para las subidas utilizando autenticación por SSH

| Variable                   | Descripción                                                                  | Valor de ejemplo                                |
|:-------------------------- |:---------------------------------------------------------------------------- |:----------------------------------------------- |
| <pre>$GITHUB_PUBLIC_KEY_FINGERPRINT</pre> | La huella dactilar de la llave pública para el usuario que subió los cambios | a1:b2:c3:d4:e5:f6:g7:h8:i9:j0:k1:l2:m3:n4:o5:p6 |

### Establecer permisos y subidas a un ganchos de pre-recepción para {% data variables.product.prodname_ghe_server %}

Un script de gancho de pre-recepción se contiene en un repositorio de {% data variables.product.product_location %}. Un administrador del sitio debe tener en cuenta los permisos del repositorio y garantizar que solo los usuarios correspondientes tengan acceso.

Recomendamos los ganchos de consolidación a un solo repositorio. Si el repositorio de gancho consolidado es público, `README.md` puede usarse para explicar los cumplimientos de la política. Además, las contribuciones pueden aceptarse mediante solicitudes de extracción. Sin embargo, los ganchos de pre-recepción solo pueden agregarse desde la rama por defecto. Para un flujo de trabajo de prueba, se deben usar las bifurcaciones del repositorio con la configuración.

1. Para usuarios de Mac, asegúrate de que los scripts tengan permisos de ejecución:

   ```shell
   $ sudo chmod +x <em>SCRIPT_FILE.sh</em>
   ```
   Para usuarios de Windows, asegúrate de que los scripts tengan permisos de ejecución:

   ```shell
   git update-index --chmod=+x <em>SCRIPT_FILE.sh</em>
   ```

2. Confirma y sube al repositorio designado para los ganchos de pre-recepción en {% data variables.product.product_location %}.

   ```shell
   $ git commit -m "<em>YOUR COMMIT MESSAGE</em>"
   $ git push
   ```

3. [Crear la instancia de ganchos de pre-recepción](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance/#creating-pre-receive-hooks) on the {% data variables.product.prodname_ghe_server %}.

### Probar scripts de pre-recepción localmente
Puedes probar un script de gancho de pre-recepción localmente antes de que lo crees o actualices en {% data variables.product.product_location %}. Un método es crear un entorno de Docker local para que actúe como un repositorio remoto que pueda ejecutar el gancho de pre-recepción.

{% data reusables.linux.ensure-docker %}

2. Crear un archivo denominado `Dockerfile.dev` que contenga:

   ```dockerfile
   FROM gliderlabs/alpine:3.3
   RUN \
     apk add --no-cache git openssh bash && \
     ssh-keygen -A && \
     sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g" /etc/ssh/sshd_config && \
     adduser git -D -G root -h /home/git -s /bin/bash && \
     passwd -d git && \
     su git -c "mkdir /home/git/.ssh && \
     ssh-keygen -t ed25519 -f /home/git/.ssh/id_ed25519 -P '' && \
     mv /home/git/.ssh/id_ed25519.pub /home/git/.ssh/authorized_keys && \
     mkdir /home/git/test.git && \
     git --bare init /home/git/test.git"

   VOLUME ["/home/git/.ssh", "/home/git/test.git/hooks"]
   WORKDIR /home/git

   CMD ["/usr/sbin/sshd", "-D"]
   ```

3. Crear un script de pre-recepción de prueba denominado `always_reject.sh`. Este script del ejemplo rechazará todas las subidas, lo cual es útil para bloquear un repositorio:

   ```
   #!/usr/bin/env bash

   echo "error: rejecting all pushes"
   exit 1
   ```

4. Asegúrate de que los scripts `always_reject.sh` tengan permisos de ejecución:

   ```shell
   $ chmod +x always_reject.sh
   ```

5. Desde el directorio que contiene `Dockerfile.dev`, crea una imagen:

   ```shell
   $ docker build -f Dockerfile.dev -t pre-receive.dev .
   > Sending build context to Docker daemon 3.584 kB
   > Step 1 : FROM gliderlabs/alpine:3.3
   >  ---> 8944964f99f4
   > Step 2 : RUN apk add --no-cache git openssh bash && ssh-keygen -A && sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g"  /etc/ssh/sshd_config && adduser git -D -G root -h /home/git -s /bin/bash && passwd -d git && su git -c "mkdir /home/git/.ssh && ssh-keygen -t ed25519 -f /home/git/.ssh/id_ed25519 -P ' && mv /home/git/.ssh/id_ed25519.pub /home/git/.ssh/authorized_keys && mkdir /home/git/test.git && git --bare init /home/git/test.git"
   >  ---> Running in e9d79ab3b92c
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/main/x86_64/APKINDEX.tar.gz
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/community/x86_64/APKINDEX.tar.gz
   ....truncated output....
   > OK: 34 MiB in 26 packages
   > ssh-keygen: generating new host keys: RSA DSA ECDSA ED25519
   > Password for git changed by root
   > Generating public/private ed25519 key pair.
   > Your identification has been saved in /home/git/.ssh/id_ed25519.
   > Your public key has been saved in /home/git/.ssh/id_ed25519.pub.
   ....truncated output....
   > Initialized empty Git repository in /home/git/test.git/
   > Successfully built dd8610c24f82
   ```

6. Ejecutar un contenedor de datos que contiene una clave SSH generada:

   ```shell
   $ docker run --name data pre-receive.dev /bin/true
   ```

7. Copiar el ganchos de pre-recepción de prueba `always_reject.sh` en el contenedor de datos:

   ```shell
   $ docker cp always_reject.sh data:/home/git/test.git/hooks/pre-receive
   ```

8. Poner en marcha un contenedor de la aplicación que corre `sshd` y ejecuta el gancho. Toma nota del id del contenedor que se devolvió:

   ```shell
   $ docker run -d -p 52311:22 --volumes-from data pre-receive.dev
   > 7f888bc700b8d23405dbcaf039e6c71d486793cad7d8ae4dd184f4a47000bc58
   ```

9. Copilar la clave SSH generada desde el contenedor de datos hasta la máquina local:

   ```shell
   $ docker cp data:/home/git/.ssh/id_ed25519 .
   ```

10. Modificar el remoto de un repositorio de prueba y subirlo al repositorio `test.git` dentro del contenedor Docker. Este ejemplo utiliza `git@github.com:octocat/Hello-World.git`, pero puedes utilizar cualquier repositorio que quieras. Este ejemplo asume que tu máquina local (127.0.01) es el puerto vinculante 52311, pero puedes usar una dirección IP diferente si el docker está ejecutándose en una máquina remota.

   ```shell
   $ git clone git@github.com:octocat/Hello-World.git
   $ cd Hello-World
   $ git remote add test git@127.0.0.1:test.git
   $ GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -p 52311 -i ../id_ed25519" git push -u test main
   > Warning: Permanently added '[192.168.99.100]:52311' (ECDSA) to the list of known hosts.
   > Counting objects: 7, done.
   > Delta compression using up to 4 threads.
   > Compressing objects: 100% (3/3), done.
   > Writing objects: 100% (7/7), 700 bytes | 0 bytes/s, done.
   > Total 7 (delta 0), reused 7 (delta 0)
   > remote: error: rejecting all pushes
   > To git@192.168.99.100:test.git
   >  ! [remote rejected] main -> main (pre-receive hook declined)
   > error: failed to push some refs to 'git@192.168.99.100:test.git'
   ```

   Observa que la subida fue rechazada después de ejecutar el ganchos de pre-recepción y de hace eco la salida del script.

### Leer más
 - "[Personalizar Git - Un ejemplo de la política activa de Git](https://git-scm.com/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy)" desde el *sitio web de Pro Git*
