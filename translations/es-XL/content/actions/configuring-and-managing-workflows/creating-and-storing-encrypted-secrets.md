---
title: Crear y almacenar secretos cifrados
intro: Los secretos cifrados te permiten almacenar información sensible en tu repositorio u organización.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de los secretos cifrados

Los secretos son variables de ambiente cifradas que creas en un repositorio u organización. Los secretos que crees se encuentran disponibles para su uso en los flujos de trabajo de {% data variables.product.prodname_actions %}. {% data variables.product.prodname_dotcom %} utiliza una [caja sellada de libsodium](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) para ayudar a garantizar que los secretos se cifren antes de que lleguen a {% data variables.product.prodname_dotcom %} y que permanezcan cifrados hasta que los uses en un flujo de trabajo.

{% data reusables.github-actions.secrets-org-level-overview %}

#### Nombrar tus secretos

Las siguientes reglas aplican a los nombres secretos:

* Los nombres secretos solo contienen caracteres alfanuméricos (`[a-z]`, `[A-Z]`, `[0-9]`) o guiones bajos (`_`). No se permiten espacios.
* Los nombres secretos no deben comenzar con el prefijo `GITHUB_`.
* Los nombres secretos no deben comenzar con un número.
* Los nombres secretos deben ser únicos en el nivel en el que se hayan creado. Por ejemplo, un secreto que se crea a nivel de la organización debe tener un nombre único en ese nivel, y un secreto que se crea a nivel de un repositorio debe tener un nombre único en ese repositorio. Si un secreto a nivel de organización tiene el mismo nombre que uno a nivel de repositorio, entonces el que está a nivel del repositorio tomará precedencia.

Para ayudarte a garantizar que {% data variables.product.prodname_dotcom %} redacta tus secretos en bitácoras, evita utilizar datos estructurados como los valores de los secretos. Por ejemplo, evita crear secretos que contengan JSON o blobs de Git codificados.

#### Acceder a tus secretos

Para hacer que un secreto esté disponible para una acción, debes configurar el secreto como una variable de entrada o de entorno en tu archivo de flujo de trabajo. Revisa el archivo README de la acción para saber qué variables de entrada y de entorno espera la acción. Para obtener más información, consulta "[Sintaxis del flujo de trabajo para{% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)".

Puedes usar y leer secretos cifrados en un archivo de flujo de trabajo si tienes acceso para editar el archivo. Para obtener más información, consulta "[Permisos de acceso en {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/access-permissions-on-github)."

{% warning %}

**Advertencia:** {% data variables.product.prodname_dotcom %} redacta automáticamente secretos impresos en el registro, pero debes evitar imprimir secretos en el registro intencionalmente.

{% endwarning %}

También puedes administrar secretos utilizando la API de REST. Para obtener más información, consulta la sección "[Secretos](/v3/actions/secrets/)".

#### Limitar permisos de credenciales

Cuando generes credenciales, te recomendamos que otorgues los mínimos permisos posibles. Por ejemplo, en lugar de usar credenciales personales, usa [implementar claves](/v3/guides/managing-deploy-keys/#deploy-keys) o una cuenta de servicio. Considera otorgar permisos de solo lectura si eso es todo lo que se necesita, y limita el acceso lo máximo posible. Cuando generes un token de acceso personal (PAT), selecciona el menor número de ámbitos necesarios.

### Crear secretos cifrados para un repositorio

{% data reusables.github-actions.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Haz clic en **Agregar secreto nuevo**.
1. Teclea un nombre para tu secreto en el cuadro de entrada **Name**.
1. Ingresa el valor de tu secreto.
1. Haz clic en **Agregar secreto** (Agregar secreto).

Si tu repositorio puede acceder a secretos de la organización padre, entonces estos también se listarán en esta página.

### Crear secretos cifrados para una organización

Cuando creas un secreto en una organización, puedes utilizar una política para limitar el acceso de los repositorios a este. Por ejemplo, puedes otorgar acceso a todos los repositorios, o limitarlo a solo los repositorios privados o a una lista específica de estos.

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Da clic en **Secreto nuevo**.
1. Teclea un nombre para tu secreto en el cuadro de entrada **Name**.
1. Ingresa el **Valor** para tu secreto.
1. Desde la lista desplegable **Acceso de los repositorios**, elige una política de acceso.
1. Haz clic en **Agregar secreto** (Agregar secreto).

### Revisar el acceso a los secretos de nivel organizacional

Puedes revisar qué políticas de acceso se están aplicando a un secreto en tu organización.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. La lista de secretos incluye cualquier política y permiso configurado. Por ejemplo: ![Lista de secretos](/assets/images/help/settings/actions-org-secrets-list.png)
1. Para encontrar más detalles sobre los permisos configurados para cada secreto, da clic en **Actualizar**.

### Usar secretos cifrados en un flujo de trabajo

Con la excepción de `GITHUB_TOKEN`, los secretos no se pasan al ejecutador cuando un flujo de trabajo se dispara desde un repositorio bifurcado.

Para proporcionar una acción con un secreto como variable de entrada o de entorno, puedes usar el contexto de `secrets` para acceder a los secretos que has creado en tu repositorio. Para obtener más información, consulta "[Sintaxis de contexto y de expresiones para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions) y [Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)".

{% raw %}
```yaml
steps:
  - name: Hello world action
    with: # Set the secret as an input
      super_secret: ${{ secrets.SuperSecret }}
    env: # Or as an environment variable
      super_secret: ${{ secrets.SuperSecret }}
```
{% endraw %}

Evita pasar secretos entre procesos desde la línea de comando, siempre que sea posible. Los procesos de la línea de comando pueden ser visibles para otros usuarios (utilizando el comando `ps`) o ser capturados por [eventos de auditoría de seguridad](https://docs.microsoft.com/en-us/windows-server/identity/ad-ds/manage/component-updates/command-line-process-auditing). Para ayudar a proteger los secretos, considera usar variables de entorno, `STDIN` u otros mecanismos admitidos por el proceso de destino.

Si debes pasar secretos dentro de una línea de comando, enciérralos usando las normas de uso de comillas adecuadas. Los secretos suelen contener caracteres especiales que pueden afectar involuntariamente a tu shell. Para evitar estos caracteres especiales, usa comillas en tus variables de entorno. Por ejemplo:

#### Ejemplo usando Bash

{% raw %}
```yaml
steps:
  - shell: bash
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$SUPER_SECRET"
```
{% endraw %}

#### Ejemplo usando PowerShell

{% raw %}
```yaml
steps:
  - shell: pwsh
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$env:SUPER_SECRET"
```
{% endraw %}

#### Ejemplo usando Cmd.exe

{% raw %}
```yaml
steps:
  - shell: cmd
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "%SUPER_SECRET%"
```
{% endraw %}

### Límites para los secretos

Tu flujo de trabajo puede tener hasta 100 secretos. Los nombres de las variables de entorno secretas deben ser únicos en un repositorio.

Los secretos tienen un tamaño máximo de 64 KB. Para usar secretos de un tamaño mayor a 64 KB, puedes almacenar los secretos cifrados en tu repositorio y guardar la contraseña de descifrado como un secreto en {% data variables.product.prodname_dotcom %}. Por ejemplo, puedes usar `gpg` para cifrar tus credenciales de manera local antes de verificar el archivo en tu repositorio en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la página del manual "[gpg](https://www.gnupg.org/gph/de/manual/r1023.html)".

{% warning %}

**Advertencia**: Evita que tus secretos se impriman cuando se ejecute tu acción. Cuando usas esta solución, {% data variables.product.prodname_dotcom %} no redacta los secretos que están impresos en los registros.

{% endwarning %}

1. Ejecuta el siguiente comando en tu terminal para cifrar el archivo `my_secret.json` usando `gpg` y el algoritmo de cifras AES256.

 ``` shell
 $ gpg --symmetric --cipher-algo AES256 my_secret.json
 ```

1. Se te pedirá que ingreses una contraseña. Recuerda la contraseña, porque deberás crear un nuevo secreto en {% data variables.product.prodname_dotcom %} que use esa contraseña como valor.

1. Crear un nuevo secreto que contiene la frase de acceso. Por ejemplo, crea un nuevo secreto con el nombre `LARGE_SECRET_PASSPHRASE` y establece el valor del secreto para la contraseña que seleccionaste en el paso anterior.

1. Copia tu archivo cifrado en tu repositorio y confírmalo. En este ejemplo, el archivo cifrado es `my_secret.json.gpg`.

1. Crea un script shell para descifrar la contraseña. Guarda este archivo como `decrypt_secret.sh`.

  ``` shell
  #!/bin/sh

  # Decrypt the file
  mkdir $HOME/secrets
  # --batch to prevent interactive command
  # --yes to assume "yes" for questions
  gpg --quiet --batch --yes --decrypt --passphrase="$LARGE_SECRET_PASSPHRASE" \
  --output $HOME/secrets/my_secret.json my_secret.json.gpg
  ```

1. Asegúrate de que tu shell script sea ejecutable antes de verificarlo en tu repositorio.

  ``` shell
  $ chmod +x decrypt_secret.sh
  $ git add decrypt_secret.sh
  $ git commit -m "Add new decryption script"
  $ git push
  ```

1. En tu flujo de trabajo, usa un `step` para llamar al shell script y descifrar el secreto. Para tener una copia de tu repositorio en el entorno en el que se ejecuta tu flujo de trabajo, deberás usar la acción [`code>actions/checkout`](https://github.com/actions/checkout). Haz referencia a tu shell script usando el comando `run` relacionado con la raíz de tu repositorio.

{% raw %}
  ```yaml
  name: Workflows with large secrets

  on: push

  jobs:
    my-job:
      name: My Job
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v2
        - name: Decrypt large secret
          run: ./.github/scripts/decrypt_secret.sh
          env:
            LARGE_SECRET_PASSPHRASE: ${{ secrets.LARGE_SECRET_PASSPHRASE }}
        # Este comando es solo un ejemplo para mostrar cómo se imprime tu secreto.
        # Asegúrate de eliminar las declaraciones impresas de tus secretos. GitHub 
        # no oculta los secretos que usan esta solución.
        - name: Test printing your secret (Elimina este paso en la producción)
          run: cat $HOME/secrets/my_secret.json
  ```
{% endraw %}
