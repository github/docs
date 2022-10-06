---
title: Configurar el caché de un repositorio
intro: 'Puedes configurar el caché de un repositorio si creas un aplicativo nuevo, conectando el caché del repositorio a tu aplicativo primario y configurando la replicación de redes de repositorio al caché del repositorio.'
versions:
  ghes: '>=3.3'
type: how_to
topics:
  - Enterprise
ms.openlocfilehash: dced49e1e6795407e2e41f12275a310c3a98aaf1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '146332024'
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

{% ifversion ghes = 3.3 %}
1. En el dispositivo principal {% data variables.product.prodname_ghe_server %}, habilita la marca de característica para el almacenamiento en caché del repositorio.
   
   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %}
1. Configurar un aparato {% data variables.product.prodname_ghe_server %} nuevo en la plataforma que desees. Este aplicativo será tu caché de repositorio. Para más información, vea "[Configuración de una instancia de {% data variables.product.prodname_ghe_server %}](/admin/guides/installation/setting-up-a-github-enterprise-server-instance)".
{% data reusables.enterprise_installation.replica-steps %}
1. Conéctate a la dirección IP del caché de tu repositorio utilizando SSH.

   ```shell
   $ ssh -p 122 admin@<em>REPLICA IP</em>
   ```
{%- ifversion ghes = 3.3 %}
1. En la réplica de caché, habilita la marca de característica para el almacenamiento en caché del repositorio.
   
   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %} {% data reusables.enterprise_installation.generate-replication-key-pair %} {% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. Para comprobar la conexión con el modo principal y habilitar el modo de réplica para la memoria caché del repositorio, vuelve a ejecutar `ghe-repl-setup`.

   ```shell
   $ ghe-repl-setup <em>PRIMARY IP</em>
   ```

1. Establece `cache_location` para la caché del repositorio, reemplazando *CACHE-LOCATION* por un identificador alfanumérico, como la región donde se implementa la memoria caché. Establece también un nombre de centro de datos para esta memoria caché. Las cachés nuevas intentarán inicializarse desde otra caché del mismo centro de datos.

   ```shell
   $ ghe-repl-node --cache <em>CACHE-LOCATION</em> --datacenter <em>REPLICA-DC-NAME</em>
   ```

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
