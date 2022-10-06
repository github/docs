---
title: Configurar las reglas de firewall incorporado
intro: 'Puedes ver las reglas de firewall predeterminadas y personalizar reglas para {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-firewall-settings
  - /enterprise/admin/installation/configuring-built-in-firewall-rules
  - /enterprise/admin/configuration/configuring-built-in-firewall-rules
  - /admin/configuration/configuring-built-in-firewall-rules
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure firewall rules
ms.openlocfilehash: 7492f69c6b334847229c76f7462beaabbc4154a2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145120793'
---
## Acerca del firewall de {% data variables.product.product_location %}

{% data variables.product.prodname_ghe_server %} utiliza Ubuntu's Uncomplicated Firewall (UFW) en el aparato virtual. Para más información, vea "[UFW](https://help.ubuntu.com/community/UFW)" en la documentación de Ubuntu. Con cada lanzamiento, {% data variables.product.prodname_ghe_server %} actualiza automáticamente la lista blanca de los servicios permitidos del firewell.

Después de que instales {% data variables.product.prodname_ghe_server %}, se abren automáticamente todos los puertos de red obligatorios para aceptar las conexiones. Cada puerto no obligatorio se configura automáticamente como `deny` y la directiva predeterminada resultante se configura como `allow`. Se habilita el seguimiento con estado para todas las conexiones nuevas, que suelen ser paquetes de red con el bit `SYN` establecido. Para más información, vea "[Puertos de red](/enterprise/admin/guides/installation/network-ports)".

El firewall de UFW también abre varios puertos más que son obligatorios para que {% data variables.product.prodname_ghe_server %} funcione correctamente. Para más información sobre el conjunto de reglas de UFW, vea [el archivo Léame de UFW](https://bazaar.launchpad.net/~jdstrand/ufw/0.30-oneiric/view/head:/README#L213).

## Ver las reglas de firewell predeterminadas

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Para ver las reglas de firewall predeterminadas, use el comando `sudo ufw status`. Debería mostrarse una salida similar a esta:
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```

## Agregar reglas de firewell personalizadas

{% warning %}

**Advertencia:** Antes de agregar reglas de firewall personalizadas, haga una copia de seguridad de las reglas actuales en caso de que tenga que restablecer a un estado de funcionamiento conocido. Si estás bloqueado de tu servidor, comunícate con {% data variables.contact.contact_ent_support %} para reconfigurar las reglas originales del firewall. Restaurar las reglas originales del firewall implica tiempo de inactividad para tu servidor.

{% endwarning %}

1. Configura una regla de firewall personalizada.
2. Compruebe el estado de cada nueva regla con el comando `status numbered`.
  ```shell
  $ sudo ufw status numbered
  ```
3. Para hacer una copia de seguridad de las reglas de firewall personalizadas, use el comando `cp` para mover las reglas a un archivo nuevo.
  ```shell
  $ sudo cp -r /etc/ufw ~/ufw.backup
  ```

Después de actualizar {% data variables.product.product_location %}, debe volver a aplicar las reglas de firewall personalizadas. Recomendamos que crees un script para volver a aplicar las reglas de firewall personalizadas.

## Restaurar las reglas de firewell predeterminadas

Si algo sale mal después de que cambies las reglas de firewell, puedes restablecer las reglas desde la copia de seguridad original.

{% warning %}

**Advertencia:** Si no ha realizado una copia de seguridad de las reglas originales antes de efectuar cambios en el firewall, póngase en contacto con {% data variables.contact.contact_ent_support %} para obtener más asistencia.

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Para restablecer las reglas de la copia de seguridad anterior, vuélvalas a copiar en el firewell con el comando `cp`.
  ```shell
  $ sudo cp -f ~/ufw.backup/*rules /etc/ufw
  ```
3. Reinicie el firewall con el comando `systemctl`.
  ```shell
  $ sudo systemctl restart ufw
  ```
4. Confirme que las reglas han recuperado sus valores predeterminados con el comando `ufw status`.
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```
