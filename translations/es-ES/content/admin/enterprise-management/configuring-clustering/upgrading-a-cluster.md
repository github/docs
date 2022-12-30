---
title: Actualizar una agrupación
intro: 'Usa el shell administrativo (SSH) para actualizar una agrupación de {% data variables.product.prodname_ghe_server %} a la última versión.'
redirect_from:
  - /enterprise/admin/clustering/upgrading-a-cluster
  - /enterprise/admin/enterprise-management/upgrading-a-cluster
  - /admin/enterprise-management/upgrading-a-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Upgrades
ms.openlocfilehash: 040fe0d315f440c8d5489b04f808dbe1f6c67972
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145120594'
---
## Actualizar con un hotpatch
{% data reusables.enterprise_installation.hotpatching-explanation %}El script de instalación de hotpatch instala el hotpatch en cada nodo de la agrupación y reinicia los servicios en su secuencia adecuada para evitar el tiempo de inactividad.

1. Copia de seguridad de los datos con [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).
2. Desde el shell administrativo de cualquier nodo, use el comando `ghe-cluster-hotpatch` para instalar la última revisión en caliente. Puedes proporcionar una URL para un hotpatch, o descargar manualmente el hotpatch y especificar un nombre de archivo local.
  ```shell
  $ ghe-cluster-hotpatch https://<em>HOTPATCH-URL/FILENAME</em>.hpkg
  ```

## Actualizar con un paquete de actualización
Usa un paquete de actualización para actualizar una agrupación de {% data variables.product.prodname_ghe_server %} a la última característica de lanzamiento. Por ejemplo, puede actualizar de `2.11` a `2.13`.

### Preparar para una actualización

1. Revise [Configuración de red de clúster](/enterprise/admin/guides/clustering/cluster-network-configuration) para la versión a la que vaya a actualizar y actualice la configuración según sea necesario.
2. Copia de seguridad de los datos con [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).
3. Planifica una ventana de mantenimiento para los usuarios finales de tu agrupación de {% data variables.product.prodname_ghe_server %}, dado que no estará disponible para usar normalmente durante la actualización. El modo de mantenimiento bloquea el acceso de los usuarios e impide que se realicen cambios en los datos mientras la actualización de la agrupación está en curso.
4. En la [página de descargas de {% data variables.product.prodname_ghe_server %}](https://enterprise.github.com/download), copie la dirección URL del archivo *.pkg* de actualización en el Portapapeles.
5. Desde el shell administrativo de cualquier nodo, use el comando `ghe-cluster-each` combinado con `curl` a fin de descargar el paquete de versión para cada nodo en un solo paso. Usa la URL que copiaste en el paso anterior como argumento.
  ```shell
  $ ghe-cluster-each -- "cd /home/admin && curl -L -O  https://<em>PACKAGE-URL</em>.pkg"
  > ghe-app-node-1:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-app-node-1:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  24.2M      0  0:00:20  0:00:20 --:--:-- 27.4M
  > ghe-data-node-2:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-2:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  21.3M      0  0:00:23  0:00:23 --:--:-- 25.8M
  > ghe-data-node-1:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-1:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.7M      0  0:00:25  0:00:25 --:--:-- 25.6M
  > ghe-app-node-2:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-app-node-2:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.8M      0  0:00:25  0:00:25 --:--:-- 17.6M
  > ghe-data-node-3:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-3:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.7M      0  0:00:25  0:00:25 --:--:-- 25.5M
  ```
6. Identifique el nodo MySQL principal, que se define como `mysql-master = <hostname>` en `cluster.conf`. Este será el último nodo que se actualizará.

### Actualizar los nodos de la agrupación

1. Para habilitar el modo de mantenimiento en función de la ventana de programación, conéctese al shell administrativo de cualquier nodo de clúster y ejecute `ghe-cluster-maintenance -s`.
2. **Con la excepción del nodo MySQL primario**, conéctese al shell administrativo de cada uno de los nodos de {% data variables.product.prodname_ghe_server %}.
Ejecute el comando `ghe-upgrade` y proporcione el nombre del archivo de paquete que ha descargado en el paso 4 de [Preparación para la actualización](#preparing-to-upgrade):
  ```shell
  $ ghe-upgrade <em>PACKAGE-FILENAME</em>.pkg
  > *** verifying upgrade package signature...
  >  497MB 0:00:04 [ 117MB/s] [==========================================>] 100%            
  > gpg: Signature made Fri 19 Feb 2016 02:33:50 PM UTC using RSA key ID 0D65D57A
  > gpg: checking the trustdb
  > gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
  > gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
  > gpg: Good signature from "GitHub Enterprise (Upgrade Package Key) > <enterprise@github.com>"
  ```
3. El proceso de actualización reiniciará el nodo MySQL principal una vez que esté completo. Compruebe que puede usar `ping` en cada nodo después de reiniciarlo.
4. Conecta con el shell administrativo del nodo MySQL principal. Ejecute el comando `ghe-upgrade` y proporcione el nombre del archivo de paquete que ha descargado en el paso 4 de [Preparación para la actualización](#preparing-to-upgrade):
  ```shell
  $ ghe-upgrade <em>PACKAGE-FILENAME</em>.pkg
  > *** verifying upgrade package signature...
  >  497MB 0:00:04 [ 117MB/s] [==========================================>] 100%            
  > gpg: Signature made Fri 19 Feb 2016 02:33:50 PM UTC using RSA key ID 0D65D57A
  > gpg: checking the trustdb
  > gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
  > gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
  > gpg: Good signature from "GitHub Enterprise (Upgrade Package Key) > <enterprise@github.com>"
  ```
5. El proceso de actualización reiniciará el nodo MySQL principal una vez que esté completo. Compruebe que puede ejecutar `ping` en cada nodo después de reiniciarlo.{% ifversion ghes %}
6. Conéctese al shell administrativo del nodo MySQL principal y ejecute el comando `ghe-cluster-config-apply`.
7. Cuando termine `ghe-cluster-config-apply`, ejecute `ghe-cluster-status` para comprobar que los servicios están en un estado correcto.{% endif %}
8. Ejecute `ghe-cluster-maintenance -u` para salir del modo de mantenimiento del shell administrativo de cualquier nodo.
