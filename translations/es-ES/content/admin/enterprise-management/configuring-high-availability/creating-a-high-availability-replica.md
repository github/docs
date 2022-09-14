---
title: Crear una réplica de alta disponibilidad
intro: 'En una configuración activa/pasiva, el aparato réplica es una copia redundante del aparato principal. Si el aparato principal falla, el modo de alta disponibilidad permite que la réplica actúe como aparato principal, lo que posibilita que la interrupción del servicio sea mínima.'
redirect_from:
  - /enterprise/admin/installation/creating-a-high-availability-replica
  - /enterprise/admin/enterprise-management/creating-a-high-availability-replica
  - /admin/enterprise-management/creating-a-high-availability-replica
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Create HA replica
ms.openlocfilehash: 0b838049fe0d520be8cb88382314b25c5bba2b28
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: '146332764'
---
{% data reusables.enterprise_installation.replica-limit %}

## <a name="creating-a-high-availability-replica"></a>Crear una réplica de alta disponibilidad

1. Configurar un aparato {% data variables.product.prodname_ghe_server %} nuevo en la plataforma que desees. El aparato réplica debe espejar la CPU, la RAM y los ajustes de almacenamiento del aparato principal. Recomendamos que instales el aparato réplica en un entorno separado. El hardward subyacente, el software y los componentes de red deben estar aislados de los del aparato principal. Si estás usando un proveedor de nube, utiliza una región o zona separada. Para más información, vea "[Configuración de una instancia de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance)".
1. Asegúrate de que tanto el aplicativo primario como el de la réplica nueva puedan comunicarse el uno con el otro a través de los puertos 122/TCP y 1194/UDP. Para más información, vea "[Puertos de red](/admin/configuration/configuring-network-settings/network-ports#administrative-ports)".
1. Desde un navegador, dirígete a la nueva dirección IP del aparato réplica y carga tu licencia {% data variables.product.prodname_enterprise %}.
{% data reusables.enterprise_installation.replica-steps %}
1. Conectarse a la dirección IP del aparato réplica usando SSH.
  ```shell
  $ ssh -p 122 admin@<em>REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.generate-replication-key-pair %} {% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. Para comprobar la conexión al dispositivo principal y habilitar el modo de réplica para la réplica nueva, vuelva a ejecutar `ghe-repl-setup`.
  ```shell
  $ ghe-repl-setup <em>PRIMARY IP</em>
  ```
{% data reusables.enterprise_installation.replication-command %} {% data reusables.enterprise_installation.verify-replication-channel %}

## <a name="creating-geo-replication-replicas"></a>Crear réplicas de replicación geográfica

Esta configuración de ejemplo utiliza una réplica primaria y dos réplicas, que se encuentran en tres regiones geográficas diferentes. Aunque los tres nodos pueden estar en redes diferentes, se necesitan todos los nodos para que sean accesibles desde todos los demás nodos. Como mínimo, los puertos administrativos requeridos deben estar abiertos para todos los demás nodos. Para más información sobre los requisitos de puerto, vea "[Puertos de red](/enterprise/admin/guides/installation/network-ports/#administrative-ports)".

1. Crea la primera réplica de la misma manera que una configuración de dos nodos estándar, mediante la ejecución de `ghe-repl-setup` en la primera réplica.
  ```shell
  (replica1)$ ghe-repl-setup <em>PRIMARY IP</em>
  (replica1)$ ghe-repl-start
  ```
2. Cree una segunda réplica y use el comando `ghe-repl-setup --add`. La marca `--add` evita que sobrescriba la configuración de replicación existente y agrega la nueva réplica a la configuración.
  ```shell
  (replica2)$ ghe-repl-setup --add <em>PRIMARY IP</em>
  (replica2)$ ghe-repl-start
  ```
3. Predeterminadamente, las replicas se configuran en el mismo centro de datos, y ahora intentarán poblar los datos desde un nodo existente en el mismo centro de datos. Configura las réplicas para diferentes centros de datos estableciendo un valor diferente para la opción de centro de datos. Los valores específicos pueden ser los que tú quieras, siempre que sean diferentes entre sí. Ejecute el comando `ghe-repl-node` en cada nodo y especifique el centro de datos.

  En la primaria:
  ```shell
  (primary)$ ghe-repl-node --datacenter <em>[PRIMARY DC NAME]</em>
  ```
  En la primera réplica:
  ```shell
  (replica1)$ ghe-repl-node --datacenter <em>[FIRST REPLICA DC NAME]</em>
  ```
  En la segunda réplica:
  ```shell
  (replica2)$ ghe-repl-node --datacenter <em>[SECOND REPLICA DC NAME]</em>
  ```
  {% tip %}

  **Sugerencia:** Puede establecer las opciones `--datacenter` y `--active` al mismo tiempo.

  {% endtip %}
4. Un nodo de réplica activo almacenará copias de los datos del aparato y responderá las solicitudes de usuario final. Un nodo inactivo almacenará copias de los datos del aparato, pero no podrá atender las solicitudes de usuario final. Habilite el modo activo mediante la marca `--active`, o bien el modo inactivo con la marca `--inactive`.

  En la primera réplica:
  ```shell
  (replica1)$ ghe-repl-node --active
  ```
  En la segunda réplica:
  ```shell
  (replica2)$ ghe-repl-node --active
  ```
5. Para aplicar la configuración, use el comando `ghe-config-apply` en la réplica principal.
  ```shell
  (primary)$ ghe-config-apply
  ```

## <a name="configuring-dns-for-geo-replication"></a>Configurar el DNS para replicación geográfica

Configurar Geo DNS usando las direcciones IP de los nodos primarios y réplica. También puede crear un CNAME DNS para el nodo principal (por ejemplo, `primary.github.example.com`) para acceder al nodo principal mediante SSH o para realizar una copia de seguridad con `backup-utils`.

Para las pruebas, puede agregar entradas al archivo `hosts` de la estación de trabajo local (por ejemplo, `/etc/hosts`). Estas entradas de ejemplo resolverán las solicitudes de `HOSTNAME` en `replica2`. Puedes apuntar a hosts específicos comentando en diferentes líneas.

```
# <primary IP>     <em>HOSTNAME</em>
# <replica1 IP>    <em>HOSTNAME</em>
<replica2 IP>    <em>HOSTNAME</em>
```

## <a name="further-reading"></a>Información adicional

- "[Acerca de la configuración de alta disponibilidad](/enterprise/admin/guides/installation/about-high-availability-configuration)"
- "[Utilidades para la administración de la replicación](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)"
- "[Acerca de la replicación geográfica](/enterprise/admin/guides/installation/about-geo-replication/)"
