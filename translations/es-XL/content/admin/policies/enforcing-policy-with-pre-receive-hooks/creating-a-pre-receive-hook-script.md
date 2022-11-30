---
title: Crear un script de ganchos de pre-recepción
intro: Usa los scripts de los ganchos de pre-recepción para crear requisitos para aceptar o rechazar una subida en función de los contenidos.
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-script
  - /enterprise/admin/policies/creating-a-pre-receive-hook-script
  - /admin/policies/creating-a-pre-receive-hook-script
versions:
  enterprise-server: '*'
miniTocMaxHeadingLevel: 4
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
---
Puedes ver los ejemplos de los ganchos de pre-recepción para {% data variables.product.prodname_ghe_server %} en el repositorio [`github/platform-samples`](https://github.com/github/platform-samples/tree/master/pre-receive-hooks).

### Escribir un script de ganchos de pre-recepción
Un script de gancho de pre-recepción se ejecuta en un entorno de gancho de pre-recepcion en el aparato {% data variables.product.prodname_ghe_server %}. Cuando crees un script de gancho de pre-recepción, considera la entrada, salida, el estado de salida y las variables de entorno.

#### Entrada (stdin)
Después de que se produce la subida y antes de que las ref se actualicen en el repositorio remoto, el proceso `git-receive-pack` invoca el script del gancho de pre-recepción con la entrada estándar de una línea por ref que se actualizará:

`<old-value> SP <new-value> SP <ref-name> LF`

Esta cadena representa estos argumentos:

| Argumento           | Descripción                                                                                                          |
|:------------------- |:-------------------------------------------------------------------------------------------------------------------- |
| `<old-value>` | Nombre del objeto antiguo almacenado en la `ref`.<br> Cuando *creas* una nueva`ref`, esto equivale a 40 ceros. |
| `<new-value>` | El nombre del objeto nuevo se almacenará en la `ref`.<br> Cuando *eliminas* una `ref`, equivale a 40 ceros.    |
| `<ref-name>`  | El nombre completo de la `ref`.                                                                                      |

Para obtener más información sobre `git-receive-pack`, consulta "[git-receive-pack](https://git-scm.com/docs/git-receive-pack)" en la documentación de Git. Para obtener más información sobre `refs`, consulta "[Referencias de Git](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" en *Pro Git*.

#### Salida (stdout)

La salida del script (`stdout`) se vuelve a pasar al cliente, de manera que los enunciados `eco` estén visibles para el usuario en la línea de comando o en la interfaz del usuario.

#### Estado de salida

El `estado de salida` de un script de pre-recepción determina si la subida se aceptará.

| Valor del estado de salida |          Acción           |
|:--------------------------:|:-------------------------:|
|             0              | La subida será aceptada.  |
|          no cero           | La subida será rechazada. |

#### Variables del entorno
Fuera de los valores que se brindan a `stdin`, existen variables adicionales que están disponibles para un script de gancho de pre-recepción en {% data variables.product.prodname_ghe_server %}.

| Variable                              | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|:------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $GITHUB_USER_LOGIN                  | El id de usuario que creó el `ref`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| $GIT_DIR                              | La ruta del repositorio remoto en el aparato.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| $GITHUB_USER_IP                     | La dirección IP del usuario que realiza la subida.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| $GITHUB_REPO_NAME                   | El nombre en el formato `owner`/`repo` del repositorio que se actualiza.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| $GITHUB_PULL_REQUEST_AUTHOR_LOGIN | El ID de usuario para el autor de una solicitud de extracción en tu instancia.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| $GITHUB_REPO_PUBLIC                 | Un valor booleano que cuando `true` representa un repositorio público, y cuando `false` representa un repositorio privado.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| $GITHUB_PUBLIC_KEY_FINGERPRINT      | La huella digital de clave pública del usuario.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| $GITHUB_PULL_REQUEST_HEAD           | Una cadena en el formato: `user:branch` para el HEAD del PR.<br> Ejemplo: `octocat:fix-bug`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| $GITHUB_PULL_REQUEST_BASE           | Una secuencia en el formato: `user:branch` para la BASE de la Solicitud de Extracción.<br> Ejemplo: `octocat:main`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| $GITHUB_VIA                           | Método usado para crear la ref.<br> **Valores posibles:**<br> - `auto-merge deployment api` <br> - `blob edit` <br> - `branch merge api` <br> - `branches page delete button` <br> - `git refs create api` <br> - `git refs delete api` <br> - `git refs update api` <br> - `merge api` <br> - `pull request branch delete button` <br> - `pull request branch undo button` <br> - `pull request merge api` <br> - `pull request merge button` <br> - `pull request revert button` <br> - `releases delete button` <br> - `stafftools branch restore` <br> - `slumlord (#{sha})` |
| $GIT_PUSH_OPTION_COUNT              | El número de opciones de extracción que envió el cliente. Para obtener más información sobre las opciones de subida, consulta "[git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt)" en la documentación de Git.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| $GIT_PUSH_OPTION_N                  | Donde <em>N</em> es un número entero que comienza con 0, esta variable contiene la cadena de opción de subida que envió el cliente. La primera opción que se envió se almacenó en GIT_PUSH_OPTION_0, la segunda opción que se envió se almacenó en GIT_PUSH_OPTION_1, y así sucesivamente. Para obtener más información sobre las opciones de subida, consulta "[git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt)" en la documentación de Git. |{% if currentVersion ver_gt "enterprise-server@2.21" %}
| $GIT_USER_AGENT                     | The user-agent string sent by the client that pushed the changes. |{% endif %}

### Establecer permisos y subidas a un ganchos de pre-recepción para {% data variables.product.prodname_ghe_server %}

Un script de gancho de pre-recepción se encuentra en un repositorio en el aparato {% data variables.product.prodname_ghe_server %}. Un administrador del sitio debe tener en cuenta los permisos del repositorio y garantizar que solo los usuarios correspondientes tengan acceso.

Recomendamos los ganchos de consolidación a un solo repositorio. Si el repositorio de gancho consolidado es público, `README.md` puede usarse para explicar los cumplimientos de la política. Además, las contribuciones pueden aceptarse mediante solicitudes de extracción. Sin embargo, los ganchos de pre-recepción solo pueden agregarse desde la rama por defecto. Para un flujo de trabajo de prueba, se deben usar las bifurcaciones del repositorio con la configuración.

1. Para usuarios de Mac, asegúrate de que los scripts tengan permisos de ejecución:

   ```shell
   $ sudo chmod +x <em>SCRIPT_FILE.sh</em>
  ```
  Para usuarios de Windows, asegúrate de que los scripts tengan permisos de ejecución:

  ```shell
  git update-index --chmod=+x <em>SCRIPT_FILE.sh</em>
  ```

2. Confirmar y subir a tus repositorio de ganchos pre-recibidos en la instancia {% data variables.product.prodname_ghe_server %}.

   ```shell
   $ git commit -m "<em>YOUR COMMIT MESSAGE</em>"
   $ git push
  ```

3. [Crear la instancia de ganchos de pre-recepción](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance/#creating-pre-receive-hooks) on the {% data variables.product.prodname_ghe_server %}.

### Probar scripts de pre-recepción localmente
Puedes probar un script de gancho de pre-recepción localmente antes de crear o actualizar en tu aparato {% data variables.product.prodname_ghe_server %}. Un método es crear un entorno de Docker local para que actúe como un repositorio remoto que pueda ejecutar el gancho de pre-recepción.

{% data reusables.linux.ensure-docker %}

2. Crear un archivo denominado `Dockerfile.dev` que contenga:

    ```
    FROM gliderlabs/alpine:3.3
    RUN \
      apk add --no-cache git openssh bash && \
      ssh-keygen -A && \
      sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g" /etc/ssh/sshd_config && \
      adduser git -D -G root -h /home/git -s /bin/bash && \
      passwd -d git && \
      su git -c "mkdir /home/git/.ssh && \
      ssh-keygen -t rsa -b 4096 -f /home/git/.ssh/id_rsa -P '' && \
      mv /home/git/.ssh/id_rsa.pub /home/git/.ssh/authorized_keys && \
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
   > Step 2 : RUN apk add --no-cache git openssh bash && ssh-keygen -A && sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g"  /etc/ssh/sshd_config && adduser git -D -G root -h /home/git -s /bin/bash && passwd -d git && su git -c "mkdir /home/git/.ssh && ssh-keygen -t rsa -b 4096 -f /home/git/.ssh/id_rsa -P ' && mv /home/git/.ssh/id_rsa.pub /home/git/.ssh/authorized_keys && mkdir /home/git/test.git && git --bare init /home/git/test.git"
   >  ---> Running in e9d79ab3b92c
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/main/x86_64/APKINDEX.tar.gz
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/community/x86_64/APKINDEX.tar.gz
   ....truncated output....
   > OK: 34 MiB in 26 packages
   > ssh-keygen: generating new host keys: RSA DSA ECDSA ED25519
   > Password for git changed by root
   > Generating public/private rsa key pair.
   > Your identification has been saved in /home/git/.ssh/id_rsa.
   > Your public key has been saved in /home/git/.ssh/id_rsa.pub.
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
   $ docker cp data:/home/git/.ssh/id_rsa .
  ```

10. Modificar el remoto de un repositorio de prueba y subirlo al repositorio `test.git` dentro del contenedor Docker. Este ejemplo usa `git@github.com:octocat/Hello-World.git` pero puedes usar cualquier repositorio que desees. Este ejemplo asume que tu máquina local (127.0.01) es el puerto vinculante 52311, pero puedes usar una dirección IP diferente si el docker está ejecutándose en una máquina remota.

   ```shell
   $ git clone git@github.com:octocat/Hello-World.git
   $ cd Hello-World
   $ git remote add test git@127.0.0.1:test.git
   $ GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -p 52311 -i ../id_rsa" git push -u test master
   > Warning: Permanently added '[192.168.99.100]:52311' (ECDSA) to the list of known hosts.
   > Counting objects: 7, done.
   > Delta compression using up to 4 threads.
   > Compressing objects: 100% (3/3), done.
   > Writing objects: 100% (7/7), 700 bytes | 0 bytes/s, done.
   > Total 7 (delta 0), reused 7 (delta 0)
   > remote: error: rejecting all pushes
   > To git@192.168.99.100:test.git
   >  ! [remote rejected] master -> master (pre-receive hook declined)
   > error: failed to push some refs to 'git@192.168.99.100:test.git'
  ```

  Observa que la subida fue rechazada después de ejecutar el ganchos de pre-recepción y de hace eco la salida del script.

### Leer más
 - "[Personalizar Git - Un ejemplo de la política activa de Git](https://git-scm.com/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy)" desde el *sitio web de Pro Git*
