---
title: Actualizar una agrupación
intro: 'Usa el shell administrativo (SSH) para actualizar una agrupación de {% data variables.product.prodname_ghe_server %} a la última versión.'
redirect_from:
  - /enterprise/admin/clustering/upgrading-a-cluster
  - /enterprise/admin/enterprise-management/upgrading-a-cluster
  - /admin/enterprise-management/upgrading-a-cluster
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Upgrades
---

### Actualizar con un hotpatch
{% data reusables.enterprise_installation.hotpatching-explanation %}El script de instalación de hotpatch instala el hotpatch en cada nodo de la agrupación y reinicia los servicios en su secuencia adecuada para evitar el tiempo de inactividad.

1. Realiza una copia de seguridad de tus datos con [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).
2. Desde el shell administrativo de cualquier nodo, usa el comando ` ghe-cluster-hotpatch` para instalar el último hotpatch. Puedes proporcionar una URL para un hotpatch, o descargar manualmente el hotpatch y especificar un nombre de archivo local.
  ```shell
  $ ghe-cluster-hotpatch https://<em>HOTPATCH-URL/FILENAME</em>.hpkg
  ```

### Actualizar con un paquete de actualización
Usa un paquete de actualización para actualizar una agrupación de {% data variables.product.prodname_ghe_server %} a la última característica de lanzamiento. Por ejemplo, puedes actualizar desde `2.11` hasta `2.13`.

#### Preparar para una actualización

1. Revisa la [Configuración de red de la agrupación](/enterprise/admin/guides/clustering/cluster-network-configuration) para la versión a la que deseas avanzar y realiza las actualizaciones conforme sea necesario.
2. Realiza una copia de seguridad de tus datos con [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).
3. Planifica una ventana de mantenimiento para los usuarios finales de tu agrupación de {% data variables.product.prodname_ghe_server %}, dado que no estará disponible para usar normalmente durante la actualización. El modo de mantenimiento bloquea el acceso de los usuarios e impide que se realicen cambios en los datos mientras la actualización de la agrupación está en curso.
4. En [{% data variables.product.prodname_ghe_server %} Descargar página](https://enterprise.github.com/download), copia la URL para el archivo de actualización *.pkg* en el portapapeles.
5. Desde el shell administrativo de cualquier nodo, usa el comando `ghe-cluster-each` combinado con `curl` para descargar el paquete de lanzamiento para cada nodo en un solo paso. Usa la URL que copiaste en el paso anterior como argumento.
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
6. Identifica el nodo MySQL principal, que se definió como `mysql-master = <hostname>` en `cluster.conf`. Este será el último nodo que se actualizará.

#### Actualizar los nodos de la agrupación

1. Habilita el modo de mantenimiento de acuerdo con tu ventana planificada conectando el shell administrativo de cualquier nodo de agrupación y ejecutando `ghe-cluster-maintenance -s`.
2. **Con la excepción del nodo primario de MySQL**, conéctate al shell administrativo de cada uno de los nodos de {% data variables.product.prodname_ghe_server %}. Ejecuta el comando `ghe-upgrade`, suministrando el nombre del archivo del paquete que descargaste en el Paso 4 de [Preparar una actualización](#preparing-to-upgrade):
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
3. El proceso de actualización reiniciará el nodo MySQL principal una vez que esté completo. Verifica que puedes `hacer ping` en cada nodo luego del reinicio.
4. Conecta con el shell administrativo del nodo MySQL principal. Ejecuta el comando `ghe-upgrade`, suministrando el nombre del archivo del paquete que descargaste en el Paso 4 de [Preparar una actualización](#preparing-to-upgrade):
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
5. El proceso de actualización reiniciará el nodo MySQL principal una vez que esté completo. Verifica que puedes `hacer ping` en cada nodo luego del reinicio.
6. Cierra el modo de mantenimiento desde el shell administativo de cualquier nodo al ejecutar `ghe-cluster-maintenance -u`.
