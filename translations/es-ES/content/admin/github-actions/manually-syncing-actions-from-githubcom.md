---
title: Sincronizar manualmente las acciones de GitHub.com
intro: 'Para los usuarios que necesiten acceso a las acciones de {% data variables.product.prodname_dotcom_the_website %}, puedes sincronizar las acciones específicas a tu instancia de {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/github-actions/manually-syncing-actions-from-githubcom
versions:
  enterprise-server: '>=2.22'
topics:
  - empresa
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.actions.enterprise-no-internet-actions %}

El acercamiento recomendado para habilitar el acceso a las acciones de {% data variables.product.prodname_dotcom_the_website %} es habilitar el acceso automático para todas las acciones. Puedes hacerlo utilizando {% data variables.product.prodname_github_connect %} para integrar a {% data variables.product.prodname_ghe_server %} con {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, consulta la sección "[Habilitar el acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %} utilizando {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

Sin embargo, si quieres tener un control más estricto sobre qué acciones se permiten en tu empresa, puedes seguir esta guía para utilizar la herramienta de código abierto [`actions-sync`](https://github.com/actions/actions-sync) de {% data variables.product.company_short %} para sincronizar los repositorios de acción individual desde {% data variables.product.prodname_dotcom_the_website %} hacia tu instancia empresarial.

### Acerca de la herramienta `actions-sync`

La herramienta `actions-sync` debe ejecutarse en una máquina que pueda acceder a la API de {% data variables.product.prodname_dotcom_the_website %} y a la API de tu instancia de {% data variables.product.prodname_ghe_server %}. La máquina no necesita estar conectada a ambas al mismo tiempo.

Si tu máquina tiene acceso a ambos sistemas al mismo tiempo, puedes hacer la sincronización con un simple comando de `actions-sync sync`. Si sólo puedes acceder a un sistema a la vez, puedes utilizar los comandos `actions-sync pull` y `push`.

La herramienta `actions-sync` solo puede descargar acciones de {% data variables.product.prodname_dotcom_the_website %} que estén almacenadas en repositorios públicos.

### Prerrequisitos

* Antes de utilizar la herramienta `actions-sync`, debes asegurarte de que todas las organizaciones de destino ya existan en tu instancia empresarial. El siguiente ejemplo demuestra cómo sincronizar acciones a una organización que se llama `synced-actions` en una instancia empresarial. Para obtener más información, consulta la sección "[Crear una organización nueva desde cero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".
* Debes crear un token de acceso personal (PAT) en tu instancia empresarial que pueda crear y escribir en los repositorios de las organizaciones destino. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".
* If you want to sync the bundled actions in the `actions` organization on {% data variables.product.product_location %}, you must be an owner of the `actions` organization.

  {% note %}

  **Note:** By default, even site administrators are not owners of the bundled `actions` organization.

  {% endnote %}

  Site administrators can use the `ghe-org-admin-promote` command in the administrative shell to promote a user to be an owner of the bundled `actions` organization. For more information, see "[Accessing the administrative shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)" and "[`ghe-org-admin-promote`](/admin/configuration/command-line-utilities#ghe-org-admin-promote)."

  ```shell
  ghe-org-admin-promote -u <em>USERNAME</em> -o actions
  ```

### Ejemplo: Utilizar la herramienta `actions-sync`

Este ejemplo demuestra el uso de la herramienta `actions-sync` para sincronizar una acción individual de {% data variables.product.prodname_dotcom_the_website %} con una instancia empresarial.

{% note %}

**Nota:** Este ejemplo utiliza el comando `actions-sync sync`, el cual requiere tener acceso concurrente tanto a la API de {% data variables.product.prodname_dotcom_the_website %} como a la API de tu instancia de {% data variables.product.prodname_ghe_server %} desde tu máquina. Si sólo puedes acceder a un sistema a la vez, puedes utilizar los comandos `actions-sync pull` y `push`. Para obtener más información, consulta el [README de `actions-sync`](https://github.com/actions/actions-sync#not-connected-instances).

{% endnote %}

1. Descarga y extrae el [lanzamiento más reciente de `actions-sync`](https://github.com/actions/actions-sync/releases) para el sistema operativo de tu máquina.
1. Crea un directorio para almacenar los archivos de caché para la herramienta.
1. Ejecuta el comando `actions-sync sync`:

   ```shell
   ./actions-sync sync \
     --cache-dir "cache" \
     --destination-token "aabbccddeeffgg" \
     --destination-url "https://my-ghes-instance" \
     --repo-name "docker/build-push-action:synced-actions/docker-build-push-action"
   ```

   El comando anterior utiliza los siguientes argumentos:

   * `--cache-dir`: El directorio del caché en la máquina que ejecuta el comando.
   * `--destination-token`: Un token de acceso personal para la instancia empresarial de destino.
   * `--destination-url`: La URL de la instancia empresarial de destino.
   * `--repo-name`: El repositorio de acción a sincronizar. Esto adopta el formato de `owner/repository:destination_owner/destination_repository`.

     * El ejemplo anterior sincroniza el repositorio [`docker/build-push-action`](https://github.com/docker/build-push-action) con el repositorio `synced-actions/docker-build-push-action` en la instancia de {% data variables.product.prodname_ghe_server %} de destino. Debes crear la organización llamada `synced-actions` en tu instancia empresarial antes de ejecutar el comando anterior.
     * Si omites el `:destination_owner/destination_repository`, la herramienta utilizará el nombre de propietario y de repositorio originales para tu instancia empresarial. Antes de ejecutar el comando, debes crear una organización nueva en tu instancia, la cual empate con el nombre de propietario de la acción. Considera utilizar una organización central para almacenar las acciones sincronizadas en tu instancia, ya que esto significa que no necesitarás crear varias organizaciones nuevas si sincronizas las acciones de propietarios diferentes.
     * Puedes sincronizar varias acciones si reemplazas el parámetro `--repo-name` con `--repo-name-list` o con `--repo-name-list-file`. Para obtener más información, consulta el [README de `actions-sync`](https://github.com/actions/actions-sync#actions-sync).
1. Después de que se haya creado el repositorio de acción en tu instancia empresarial, las personas en tu empresa pueden utilizar el repositorio de destino para referenciar la acción en sus flujos de trabajo. Para la acción de ejemplo que se muestra a continuación:

   ```yaml
   uses: synced-actions/docker-build-push-action@v1
   ```

   Para obtener más información, consultala sección "[Sintaxis de flujo de trabajo para GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsuses)".
