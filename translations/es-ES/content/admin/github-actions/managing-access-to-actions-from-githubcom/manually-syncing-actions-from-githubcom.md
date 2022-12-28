---
title: Sincronización manual de acciones desde GitHub.com
intro: 'Para los usuarios que necesiten acceso a las acciones de {% data variables.product.prodname_dotcom_the_website %}, puedes sincronizar las acciones específicas a tu empresa.'
redirect_from:
  - /enterprise/admin/github-actions/manually-syncing-actions-from-githubcom
  - /admin/github-actions/manually-syncing-actions-from-githubcom
versions:
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Actions
  - Enterprise
shortTitle: Manually sync actions
ms.openlocfilehash: f4fe3aaecfa805b2a5966c0b2c41399529c2040e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107273'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.actions.enterprise-no-internet-actions %}

{% ifversion ghes or ghae %}

El acercamiento recomendado para habilitar el acceso a las acciones de {% data variables.product.prodname_dotcom_the_website %} es habilitar el acceso automático para todas las acciones. Puede hacer esto si usa {% data variables.product.prodname_github_connect %} para integrar {% data variables.product.product_name %} con {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, vea "[Habilitar el acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %} mediante {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

Pero si quiere tener un control más estricto sobre qué acciones se permiten en su empresa, {% else %}puede{% endif %} seguir esta guía para utilizar la herramienta [`actions-sync`](https://github.com/actions/actions-sync) de código abierto de {% data variables.product.company_short %} para sincronizar los repositorios de acciones individuales de {% data variables.product.prodname_dotcom_the_website %} a su empresa.

## Acerca de la herramienta `actions-sync`

La herramienta `actions-sync` debe ejecutarse en una máquina que pueda acceder a la API de {% data variables.product.prodname_dotcom_the_website %} y a la API de su instancia de {% data variables.product.product_name %}. La máquina no necesita estar conectada a ambas al mismo tiempo.

Si la máquina tiene acceso a ambos sistemas al mismo tiempo, puede realizar la sincronización con un único comando `actions-sync sync`. Si solo puede acceder a un sistema a la vez, puede usar los comandos `actions-sync pull` y `push`.

La herramienta `actions-sync` solo puede descargar acciones de {% data variables.product.prodname_dotcom_the_website %} que estén almacenadas en repositorios públicos.

{% note %}

**Nota:** La herramienta `actions-sync` está pensada para su uso en sistemas en los que {% data variables.product.prodname_github_connect %} no está habilitado. Si ejecuta la herramienta en un sistema con {% data variables.product.prodname_github_connect %} habilitado, es posible que vea el error `The repository <repo_name> has been retired and cannot be reused`. Esto indica que un flujo de trabajo utilizó esa acción directamente en {% data variables.product.prodname_dotcom_the_website %} y que su espacio de nombres se retiró en {% data variables.location.product_location %}. Para más información, vea "[Retiro automático de espacios de nombres para las acciones a las que se accede en {% data variables.product.prodname_dotcom_the_website%}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)". 

{% endnote %}

## Requisitos previos

* Antes de utilizar la herramienta `actions-sync`, debe asegurarse de que todas las organizaciones de destino ya existen en su empresa. En el siguiente ejemplo se demuestra cómo sincronizar acciones en una organización denominada `synced-actions`. Para más información, vea "[Creación de una organización desde cero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".
* Debes crear un {% data variables.product.pat_generic %} en tu empresa que pueda crear y escribir en los repositorios de las organizaciones de destino. Para obtener más información, consulta "[Creación de un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".{% ifversion ghes %}
* Si quieres sincronizar las acciones incluidas en la organización `actions` en {% data variables.location.product_location %}, debes ser un propietario de la organización `actions`.

  {% note %}
  
  **Nota**: De manera predeterminada, los administradores del sitio no son los propietarios de la organización agrupada `actions`.
  
  {% endnote %}

  Los administradores del sitio pueden usar el comando `ghe-org-admin-promote` en el shell administrativo para promover a un usuario como propietario de la organización agrupada `actions`. Para obtener más información, vea "[Acceder al shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)" y "[`ghe-org-admin-promote`](/admin/configuration/command-line-utilities#ghe-org-admin-promote)".

  ```shell
  ghe-org-admin-promote -u USERNAME -o actions
  ```{% endif %}

## Example: Using the `actions-sync` tool

This example demonstrates using the `actions-sync` tool to sync an individual action from {% data variables.product.prodname_dotcom_the_website %} to an enterprise instance.

{% note %}

**Note:** This example uses the `actions-sync sync` command, which requires concurrent access to both the {% data variables.product.prodname_dotcom_the_website %} API and your enterprise instance's API from your machine. If you can only access one system at a time, you can use the `actions-sync pull` and `push` commands. For more information, see the [`actions-sync` README](https://github.com/actions/actions-sync#not-connected-instances).

{% endnote %}

1. Download and extract the latest [`actions-sync` release](https://github.com/actions/actions-sync/releases) for your machine's operating system.
1. Create a directory to store cache files for the tool.
1. Run the `actions-sync sync` command:

   ```shell
   ./actions-sync sync \
     --cache-dir "cache" \
     --destination-token "aabbccddeeffgg" \
     --destination-url "https://my-ghes-instance" \
     --repo-name "actions/stale:synced-actions/actions-stale"
   ```

   El comando anterior utiliza los siguientes argumentos:

   * `--cache-dir`: el directorio de la caché en la máquina que ejecuta el comando.
   * `--destination-token`: un {% data variables.product.pat_generic %} para la instancia empresarial de destino.
   * `--destination-url`: la dirección URL de la instancia de empresa de destino.
   * `--repo-name`: el repositorio de acciones que se va a sincronizar. Este toma el formato `owner/repository:destination_owner/destination_repository`.
     
     * En el ejemplo anterior se sincroniza el repositorio [`actions/stale`](https://github.com/actions/stale) con el `synced-actions/actions-stale` en la instancia de empresa de destino. Debe crear la organización denominada `synced-actions` en su empresa antes de ejecutar el comando anterior.
     * Si omite `:destination_owner/destination_repository`, la herramienta usa el nombre original del propietario y del repositorio para la empresa. Antes de ejecutar el comando, debes crear una organización nueva en tu empresa, la cual empate con el nombre de propietario de la acción. Considera utilizar una organización central para almacenar las acciones sincronizadas en tu empresa, ya que esto significa que no necesitarás crear varias organizaciones nuevas si sincronizas las acciones de propietarios diferentes.
     * Puede sincronizar varias acciones reemplazando el parámetro `--repo-name` por `--repo-name-list` o `--repo-name-list-file`. Para obtener más información, vea el [archivo LÉAME de `actions-sync`](https://github.com/actions/actions-sync#actions-sync).
1. Después de que se haya creado el repositorio de acción en tu empresa, las personas en tu empresa pueden utilizar el repositorio de destino para referenciar la acción en sus flujos de trabajo. Para la acción de ejemplo que se muestra a continuación:
   
   ```yaml
   uses: synced-actions/actions-stale@v1
   ```

   Para obtener más información, vea "[Sintaxis de flujo de trabajo para Acciones de GitHub](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsuses)".
