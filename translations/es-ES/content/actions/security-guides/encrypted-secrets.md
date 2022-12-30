---
title: Secretos cifrados
intro: 'Los secretos cifrados te permiten almacenar información sensible en tu organización{% ifversion fpt or ghes or ghec %}, repositorio o ambientes de repositorio{% else %} o repositorio{% endif %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets
  - /actions/configuring-and-managing-workflows/using-variables-and-secrets-in-a-workflow
  - /actions/reference/encrypted-secrets
  - /actions/managing-workflows/storing-secrets
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4f45a2e0a3ac0c93215f7e4a095c2b8033450808
ms.sourcegitcommit: aa488e9e641139f9056885b1479c8801e9906131
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162803'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de los secretos cifrados

Los secretos son variables de ambiente cifradas que creas en una organización, repositorio o ambiente de repositorio. Los secretos que creas están disponibles para utilizarse en los flujos de trabajo de {% data variables.product.prodname_actions %}. {% data variables.product.prodname_dotcom %} usa una [sealed box de libsodium](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) para garantizar que los secretos se cifren antes de llegar a {% data variables.product.prodname_dotcom %} y permanezcan cifrados hasta que los use en un flujo de trabajo.

{% data reusables.actions.secrets-org-level-overview %}

Para que los secretos se almacenen a nivel de ambiente, puedes habilitar los revisores requeridos para controlar el acceso a los secretos. Un job de flujo de trabajo no puede acceder a los secretos del ambiente hasta que los revisores requeridos le otorguen aprobación.

{% ifversion fpt or ghec or ghes > 3.4 %}

{% note %}

**Nota**: {% data reusables.actions.about-oidc-short-overview %}

{% endnote %}

{% endif %}

### Nombrar tus secretos

{% data reusables.codespaces.secrets-naming %}

  Por ejemplo, un secreto que se creó a nivel de ambiente debe tener un nombre único en éste, un secreto que se creó a nivel de repositorio debe tener un nombre único en éste, y un secreto que se creó a nivel de organización debe tener un nombre único en este nivel.

  {% data reusables.codespaces.secret-precedence %} De forma similar, si una organización, repositorio y ambiente tienen u secreto con el mismo nombre, el que esté a nivel de ambiente tomará precedencia.

Para ayudarte a garantizar que {% data variables.product.prodname_dotcom %} redacta tus secretos en bitácoras, evita utilizar datos estructurados como los valores de los secretos. Por ejemplo, evita crear secretos que contengan JSON o blobs de Git codificados.

### Acceder a tus secretos

Para hacer que un secreto esté disponible para una acción, debes configurar el secreto como variable de entrada o de entorno en tu archivo de flujo de trabajo. Revisa el archivo README de la acción para saber qué variables de entrada y de entorno espera la acción. Para obtener más información, consulte "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)".

Puedes usar y leer secretos cifrados en un archivo de flujo de trabajo si tienes acceso para editar el archivo. Para más información, vea "[Permisos de acceso en {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/access-permissions-on-github)".

{% data reusables.actions.secrets-redaction-warning %}

Los secretos de organización y de repositorio se leen cuando una ejecución de flujo de trabajo está en cola y los secretos de ambiente se leen cuando un job que referencia el ambiente comienza.

También puedes administrar secretos utilizando la API de REST. Para obtener más información, consulte [Secretos](/rest/reference/actions#secrets).

### Limitar permisos de credenciales

Cuando generes credenciales, te recomendamos que otorgues los mínimos permisos posibles. Por ejemplo, en lugar de usar credenciales personales, use [claves de implementación](/developers/overview/managing-deploy-keys#deploy-keys) o una cuenta de servicio. Considera otorgar permisos de solo lectura si eso es todo lo que se necesita, y limita el acceso lo máximo posible. Al generar un {% data variables.product.pat_v1 %}, selecciona el menor número de ámbitos necesarios.{% ifversion pat-v2 %} Al generar un {% data variables.product.pat_v2 %}, selecciona el acceso mínimo al repositorio necesario. {% endif %}

{% note %}

**Nota:** Puede usar la API de REST para administrar secretos. Para más información, vea "[API de secretos de {% data variables.product.prodname_actions %}](/rest/reference/actions#secrets)".

{% endnote %}

## Crear secretos cifrados para un repositorio

{% data reusables.actions.permissions-statement-secrets-repository %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-secret %}
1. Haga clic en **New repository secret**.
1. Escriba un nombre para su secreto en el cuadro de entrada **Name**.
1. Ingresa el valor de tu secreto.
1. Haga clic en **Add Secret**.

So tu repositorio tiene secretos de ambiente o puede acceder a los secretos de la organización padre, entonces estos también se listarán en esta página.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para agregar un secreto del repositorio, use el subcomando `gh secret set`. Reemplace `secret-name` por el nombre del secreto.

```shell
gh secret set SECRET_NAME
```

El CLI te pedirá ingresar un valor secreto. Como alternativa, puedes leer el valor del secreto desde un archivo.

```shell
gh secret set SECRET_NAME < secret.txt
```

Para mostrar todos los secretos del repositorio, use el subcomando `gh secret list`.

{% endcli %}

## Crear secretos cifrados para un ambiente

{% data reusables.actions.permissions-statement-secrets-environment %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %}
1. Da clic en el ambiente al cual quieras agregar un secreto.
2. En **Environment secrets**, haga clic en **Add secret**.
3. Escriba un nombre para su secreto en el cuadro de entrada **Name**.
4. Ingresa el valor de tu secreto.
5. Haga clic en **Add Secret**.

{% endwebui %}

{% cli %}

Para agregar un secreto de un entorno, use el subcomando `gh secret set` con la `--env` marca o `-e` seguida del nombre del entorno.

```shell
gh secret set --env ENV_NAME SECRET_NAME
```

Para mostrar todos los secretos de un entorno, use el subcomando `gh secret list` con la `--env` marca o `-e` seguida del nombre del entorno.

```shell
gh secret list --env ENV_NAME
```

{% endcli %}

## Crear secretos cifrados para una organización

Cuando creas un secreto en una organización, puedes utilizar una política para limitar el acceso de los repositorios a este. Por ejemplo, puedes otorgar acceso a todos los repositorios, o limitarlo a solo los repositorios privados o a una lista específica de estos.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% webui %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. Haga clic en **New organization secret**.
1. Escriba un nombre para su secreto en el cuadro de entrada **Name**.
1. Introduzca el valor del secreto en **Value**.
1. En la lista desplegable **Repository access** (Acceso al repositorio), elija una directiva de acceso.
1. Haga clic en **Add Secret**.

{% endwebui %}

{% cli %}

{% note %}

**Nota:** De manera predeterminada, {% data variables.product.prodname_cli %} se autentica con los alcances `repo` y `read:org`. Para administrar secretos de la organización, debe autorizar además el alcance `admin:org`.

```
gh auth login --scopes "admin:org"
```

{% endnote %}

Para agregar un secreto de una organización, use el subcomando `gh secret set` con la marca `--org` o `-o` seguida del nombre de la organización.

```shell
gh secret set --org ORG_NAME SECRET_NAME
```

Predeterminadamente, el secreto solo se encuentra disponible para los repositorios privados. Para especificar que el secreto debe estar disponible para todos los repositorios de la organización, use la marca `--visibility` o `-v`.

```shell
gh secret set --org ORG_NAME SECRET_NAME --visibility all
```

Para especificar que el secreto debe estar disponible para los repositorios seleccionados de la organización, use la marca `--repos` o `-r`.

```shell
gh secret set --org ORG_NAME SECRET_NAME --repos REPO-NAME-1, REPO-NAME-2"
```

Para mostrar todos los secretos de una organización, use el subcomando `gh secret list` con la marca `--org` o `-o` seguida del nombre de la organización.

```shell
gh secret list --org ORG_NAME
```

{% endcli %}

## Revisar el acceso a los secretos de nivel organizacional

Puedes revisar qué políticas de acceso se están aplicando a un secreto en tu organización.

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. La lista de secretos incluye cualquier política y permiso configurado. Por ejemplo: ![Lista de secretos](/assets/images/help/settings/actions-org-secrets-list.png)
1. Para obtener más información sobre los permisos configurados para cada secreto, haga clic en **Update**.

## Uso de secretos cifrados en un flujo de trabajo

{% note %}

**Notas:**

* {% data reusables.actions.forked-secrets %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

* Los secretos no se pasan automáticamente a flujos de trabajo reutilizables. Para obtener más información, consulte "[Reutilización de flujos de trabajo](/actions/using-workflows/reusing-workflows#passing-inputs-and-secrets-to-a-reusable-workflow)".

{% endif %}

{% endnote %}

Para proporcionar una acción con un secreto como variable de entrada o de entorno, puede usar el contexto `secrets` para acceder a los secretos que haya creado en el repositorio. Para obtener más información, consulte "[Contextos](/actions/learn-github-actions/contexts)" y "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)".

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

No se puede hacer referencia a los secretos directamente en las condicionales `if:`. En vez de esto, considera configurar secretos como variables de ambiente a nivel de jobs y luego referencia dichas variables para ejecutar pasos de forma condicional en el job. Para obtener más información, consulte "[Disponibilidad de contextos](/actions/learn-github-actions/contexts#context-availability) y [`jobs.<job_id>.steps[*].if`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsif).

Si no se ha establecido ningún secreto, el valor devuelto de una expresión que hace referencia al secreto (como {% raw %}`${{ secrets.SuperSecret }}`{% endraw %} en el ejemplo) será una cadena vacía.

Evita pasar secretos entre procesos desde la línea de comando, siempre que sea posible. Los procesos de la línea de comandos pueden ser visibles para otros usuarios (mediante el comando `ps`) o capturados mediante [eventos de auditoría de seguridad](https://docs.microsoft.com/windows-server/identity/ad-ds/manage/component-updates/command-line-process-auditing). Para proteger los secretos, considere la opción de usar variables de entorno, `STDIN` u otros mecanismos admitidos por el proceso de destino.

Si debes pasar secretos dentro de una línea de comando, enciérralos usando las normas de uso de comillas adecuadas. Los secretos suelen contener caracteres especiales que pueden afectar involuntariamente a tu shell. Para evitar estos caracteres especiales, usa comillas en tus variables de entorno. Por ejemplo:

### Ejemplo usando Bash

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

### Ejemplo usando PowerShell

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

### Ejemplo usando Cmd.exe

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

## Límites para los secretos

Puedes almacenar hasta 1,000 secretos de organización, 100 secretos de repositorio y 100 secretos de ambiente.

Un flujo de trabajo que se haya creado en un repositorio puede acceder a la siguiente cantidad de secretos:

* Todos los 100 secretos de repositorio.
* Si se asigna acceso a más de 100 secretos de la organización para este repositorio, el flujo de trabajo solo puede utilizar los primeros 100 secretos de organización (que se almacenan por orden alfabético por nombre de secreto).
* Todos los 100 secretos de ambiente.

Los secretos tienen un tamaño máximo de 64 KB. Para almacenar secretos más grandes, consulta la solución alternativa "[Almacenamiento de secretos grandes](#storing-large-secrets)" que se muestra a continuación.

### Almacenamiento de secretos grandes

Para usar secretos de un tamaño superior a 64 KB, puedes usar una solución alternativa consistente en almacenar los secretos cifrados en tu repositorio y guardar la frase de contraseña de descifrado como un secreto en {% data variables.product.prodname_dotcom %}. Por ejemplo, puedes usar `gpg` para cifrar un archivo que contiene el secreto de manera local antes de comprobar el archivo cifrado en el repositorio en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulte la "[página man de gpg](https://www.gnupg.org/gph/de/manual/r1023.html)".

{% warning %}

**Advertencia**: Intenta evitar que los secretos se impriman cuando se ejecute el flujo de trabajo. Cuando usas esta solución, {% data variables.product.prodname_dotcom %} no redacta los secretos que están impresos en los registros.

{% endwarning %}

1. Ejecuta el comando siguiente desde el terminal para cifrar el archivo que contiene el secreto mediante `gpg` y el algoritmo de cifrado AES256. En este ejemplo, `my_secret.json` es el archivo que contiene el secreto.

   ```bash
   gpg --symmetric --cipher-algo AES256 my_secret.json
   ```

1. Se te pedirá que ingreses una contraseña. Recuerda la contraseña, porque deberás crear un nuevo secreto en {% data variables.product.prodname_dotcom %} que use esa contraseña como valor.

1. Crear un nuevo secreto que contiene la frase de acceso. Por ejemplo, crea un secreto con el nombre `LARGE_SECRET_PASSPHRASE` y establece el valor del secreto en la frase de contraseña que usaste en el paso anterior.

1. Copia el archivo cifrado en una ruta de acceso de tu repositorio y confírmalo. En este ejemplo, el archivo cifrado es `my_secret.json.gpg`.

   {% warning %}

   **Advertencia**: Asegúrate de copiar el archivo cifrado `my_secret.json.gpg` que termina con la extensión de archivo `.gpg` y **no** el archivo sin cifrar `my_secret.json`.

   {% endwarning %}

   ```bash
   git add my_secret.json.gpg
   git commit -m "Add new encrypted secret JSON file"
   ```

1. Crea un script de shell en el repositorio para descifrar el archivo secreto. En este ejemplo, el script se denomina `decrypt_secret.sh`.

   ```bash
   #!/bin/sh

   # Decrypt the file
   mkdir $HOME/secrets
   # --batch to prevent interactive command
   # --yes to assume "yes" for questions
   gpg --quiet --batch --yes --decrypt --passphrase="$LARGE_SECRET_PASSPHRASE" \
   --output $HOME/secrets/my_secret.json my_secret.json.gpg
   ```

1. Asegúrate de que tu script de shell sea ejecutable antes de verificarlo en tu repositorio.

   ```bash
   chmod +x decrypt_secret.sh
   git add decrypt_secret.sh
   git commit -m "Add new decryption script"
   git push
   ```

1. En el flujo de trabajo de {% data variables.product.prodname_actions %}, usa `step` para llamar al script de shell y descifrar el secreto. Para tener una copia del repositorio en el entorno en el que se ejecuta el flujo de trabajo, deberá usar la acción [`actions/checkout`](https://github.com/actions/checkout). Haga referencia a su script de shell mediante el comando `run` que corresponde con la raíz de su repositorio.

   ```yaml
   name: Workflows with large secrets
 
   on: push
 
   jobs:
     my-job:
       name: My Job
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - name: Decrypt large secret
           run: ./decrypt_secret.sh
           env:
             LARGE_SECRET_PASSPHRASE: {% raw %}${{ secrets.LARGE_SECRET_PASSPHRASE }}{% endraw %}
         # This command is just an example to show your secret being printed
         # Ensure you remove any print statements of your secrets. GitHub does
         # not hide secrets that use this workaround.
         - name: Test printing your secret (Remove this step in production)
           run: cat $HOME/secrets/my_secret.json
   ```

## Almacenar blobs binarios en Base64 como secretos

Puedes utilizar el cifrado en Base64 para almacenar blobs binarios pequeños como secretos. Puedes referenciar el secreto en tu flujo de trabajo y decodificarlo para utilizarlo en el ejecutor. Para conocer los límites de tamaño, consulte ["Límites para los secretos"](/actions/security-guides/encrypted-secrets#limits-for-secrets).

{% note %}

**Nota**: Tenga en cuenta que Base64 solo convierte elementos binarios en texto y no es un sustituto del cifrado real.

{% endnote %}

1. Use `base64` para codificar el archivo en una cadena Base64. Por ejemplo:

   ```
   $ base64 -i cert.der -o cert.base64
   ```

1. Crea un secreto que contenga la secuencia de Base64. Por ejemplo:

   ```
   $ gh secret set CERTIFICATE_BASE64 < cert.base64
   ✓ Set secret CERTIFICATE_BASE64 for octocat/octorepo
   ```

1. Para acceder a la cadena Base64 desde el ejecutor, canalice el secreto a `base64 --decode`.  Por ejemplo: 

   ```yaml
   name: Retrieve Base64 secret
   on:
     push:
       branches: [ octo-branch ]
   jobs:
     decode-secret:
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - name: Retrieve the secret and decode it to a file
           env:
             {% raw %}CERTIFICATE_BASE64: ${{ secrets.CERTIFICATE_BASE64 }}{% endraw %}
           run: |
             echo $CERTIFICATE_BASE64 | base64 --decode > cert.der
         - name: Show certificate information
           run: |
             openssl x509 -in cert.der -inform DER -text -noout
   ```
