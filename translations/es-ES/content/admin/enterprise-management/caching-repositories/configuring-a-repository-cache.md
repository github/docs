---
title: Configurar el caché de un repositorio
intro: 'Puedes configurar la caché de un repositorio para {% data variables.product.product_name %} creando una instancia nueva, conectando la caché del repositorio a tu instancia primaria y configurando la replicación de redes del repositorio a la caché del repositorio.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
ms.openlocfilehash: 682e169c55ef7ded453934720bf47f8843bc4acc
ms.sourcegitcommit: 1d757a4f3e1947fdd3868208b63041de30c9f60c
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/03/2022
ms.locfileid: '148132383'
---
{% data reusables.enterprise.repository-caching-release-phase %}

## Acerca de la configuración para el almacenamiento en caché de repositorio

{% data reusables.enterprise.repository-caching-config-summary %} Entonces, puedes configurar las políticas de ubicación de datos que rijan qué redes de repositorio se replican en el caché del mismo.

El caché de repositorio no es compatible con el clústering.

## DNS para cachés de repositorio

La instancia principal y el caché de repositorio deben tener nombres de DNS diferentes. Por ejemplo, si la instancia principal está en `github.example.com`, puedes decidir llamar `europe-ci.github.example.com` o `github.asia.example.com` a una memoria caché.

Para que las máquinas de CI realicen capturas desde la memoria caché del repositorio en lugar de la instancia principal, puedes usar la opción de configuración `url.<base>.insteadOf` de Git. Para más información, vea [`git-config`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-urlltbasegtinsteadOf) en la documentación de Git. 

Por ejemplo, el `.gitconfig` global para la máquina de CI incluiría estas líneas.

```
[url "https://europe-ci.github.example.com/"]
    insteadOf = https://github.example.com/
```

Después, cuando se le solicite que capture `https://github.example.com/myorg/myrepo`, Git capturará desde `https://europe-ci.github.example.com/myorg/myrepo`.

## Configurar el caché de un repositorio

{% ifversion ghes = 3.3 %} {% data reusables.enterprise_installation.ssh-into-instance %}
1. Para habilitar el almacenamiento en caché del repositorio, ejecuta el siguiente comando.
   
   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %}
1. Configura una instancia de {% data variables.product.prodname_ghe_server %} nueva en la plataforma que desees. Esta instancia será tu caché de repositorio. Para más información, vea "[Configuración de una instancia de {% data variables.product.prodname_ghe_server %}](/admin/guides/installation/setting-up-a-github-enterprise-server-instance)".
{% data reusables.enterprise_installation.replica-steps %}
1. Conéctate a la dirección IP del caché de tu repositorio utilizando SSH.

   ```shell
   $ ssh -p 122 admin@REPLICA-IP
   ```
{%- ifversion ghes = 3.3 %}
1. En la réplica de caché, habilita la marca de característica para el almacenamiento en caché del repositorio.
   
   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %} {% data reusables.enterprise_installation.generate-replication-key-pair %} {% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. Para comprobar la conexión con el modo principal y habilitar el modo de réplica para la memoria caché del repositorio, vuelve a ejecutar `ghe-repl-setup`.

   ```shell
   $ ghe-repl-setup PRIMARY-IP
   ```

{% ifversion ghes < 3.6 %}
1. Establece `cache-location` para la caché del repositorio, reemplazando *CACHE-LOCATION* por un identificador alfanumérico, como la región donde se implementa la memoria caché. Establece también un nombre de centro de datos para esta memoria caché. Las cachés nuevas intentarán inicializarse desde otra caché del mismo centro de datos.

   ```shell
   $ ghe-repl-node --cache CACHE-LOCATION --datacenter REPLICA-DC-NAME
   ```
{% else %}
1. Para configurar la caché del repositorio, usa el comando `ghe-repl-node` e incluye los parámetros necesarios.
    - Establece `cache-location` para la caché del repositorio, reemplazando *CACHE-LOCATION* por un identificador alfanumérico, como la región donde se implementa la memoria caché.  El valor *CACHE-LOCATION* no debe ser ninguno de los subdominios reservados para su uso con aislamiento de subdominio, como `assets` o `media`.  Para obtener una lista de nombres reservados, consulta "[Habilitación del aislamiento de subdominios](/enterprise/admin/guides/installation/enabling-subdomain-isolation#about-subdomain-isolation)".
    - Establece un `cache-domain` para la memoria caché del repositorio, reemplazando *EXTERNAL-CACHE-DOMAIN* por el nombre de host que los clientes de Git usarán para acceder a la caché del repositorio. Si no especificas un valor `cache-domain`, {% data variables.product.product_name %} anteponerá el valor *CACHE-LOCATION* como subdominio al nombre de host configurado para la instancia. Para más información, vea "[Configuración de un nombre de host](/admin/configuration/configuring-network-settings/configuring-a-hostname)".
    - Las cachés nuevas intentarán inicializarse desde otra caché del mismo centro de datos. Establece un valor `datacenter` para la memoria caché del repositorio, reemplazando *REPLICA-DC-NAME* por el nombre del centro de datos donde vas a implementar el nodo.

    ```shell
    $ ghe-repl-node --cache CACHE-LOCATION --cache-domain EXTERNAL-CACHE-DOMAIN --datacenter REPLICA-DC-NAME
    ```
{% endif %}

{% data reusables.enterprise_installation.replication-command %} {% data reusables.enterprise_installation.verify-replication-channel %}
1. Para habilitar la replicación de las redes de repositorio en el caché del mismo, configura una política de ubicación de datos. Para obtener más información, consulta «[Directivas de ubicación de datos](#data-location-policies)».

## Políticas de ubicación de datos

Puedes controlar la ubicación de los datos mediante la configuración de directivas de ubicación de datos para los repositorios con el comando `spokesctl cache-policy`. Las políticas de ubicación de datos determinan qué redes de repositorios se replican en qué cachés de repositorio. Predeterminadamente, ninguna red de repositorio se replicará en ninguno de los cachés de repositorio sino hasta que se configuren las políticas de ubicación.

Las directivas de ubicación de datos solo afectan al contenido de Git. El contenido de la base de datos, como comentarios sobre problemas y solicitudes de incorporación de cambios, se replicará en todos los nodos independientemente de la directiva.

{% note %}

**Nota:** las directivas de ubicación de datos no son lo mismo que el control de acceso. Debes usar roles de repositorio para controlar qué usuarios pueden acceder a un repositorio. Para obtener más información sobre el acceso al repositorio, consulta «[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)».

{% endnote %} 

Puedes configurar una directiva para replicar todas las redes con la marca `--default`. Por ejemplo, este comando creará una directiva para replicar una sola copia de cada red de repositorio en el conjunto de cachés de repositorio cuyo `cache_location` es «kansas».

 ```
 $ ghe-spokesctl cache-policy set --default 1 kansas
 ```

Para configurar la replicación para una red de repositorio, especifica aquél que sea la raíz de la red. Una red de repositorio incluye un repositorio y todas las bifurcaciones de este. No puedes replicar parte de una red sin replicarla integralmente.

```
$ ghe-spokesctl cache-policy set <owner/repository> 1 kansas
```

Puedes anular una política que replica todas las redes y excluye redes específicas si especificas un conteo de réplica de cero para la red. Por ejemplo, este comando especifica que cualquier caché de repositorio en la ubicación "kansas" no puede contener copias de esa red.

```
$ ghe-spokesctl cache-policy set <owner/repository> 0 kansas
```

Los recuentos de réplica mayores a uno un alguna ubicación de caché no son compatibles.
