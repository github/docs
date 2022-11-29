---
title: Migrar desde GitHub Enterprise 11.10.x a 2.1.23
redirect_from:
  - /enterprise/admin/installation/migrating-from-github-enterprise-1110x-to-2123
  - /enterprise/admin-guide/migrating
  - /enterprise/admin/articles/migrating-github-enterprise
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-v11-10-34x
  - /enterprise/admin/articles/upgrading-to-a-newer-release
  - /enterprise/admin/guides/installation/migrating-to-a-different-platform-or-from-github-enterprise-11-10-34x
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-11-10-x-to-2-1-23
  - /enterprise/admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
  - /admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
intro: 'Para migrar desde {% data variables.product.prodname_enterprise %} 11.10.x a 2.1.23, deberás configurar una nueva instancia de aparato y migrar los datos de la instancia anterior.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
  - Upgrades
shortTitle: Migrate from 11.10.x to 2.1.23
ms.openlocfilehash: 4dcd93b41d8edc75388d34785c4c149d6627cc5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332604'
---
Se admiten migraciones desde {% data variables.product.prodname_enterprise %} 11.10.348 y superior. No se admiten migraciones desde {% data variables.product.prodname_enterprise %} 11.10.348 o inferior. Primero debes actualizar a 11.10.348 en varias actualizaciones. Para más información, vea el procedimiento de actualización a 11.10.348, "[Actualización a la versión más reciente](/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release/)".

Para actualizar a la versión más reciente {% data variables.product.prodname_enterprise %}, primero debes migrar a {% data variables.product.prodname_ghe_server %} 2.1, entonces puedes aplicar el proceso normal de actualización. Para más información, vea "[Actualización de {% data variables.product.prodname_enterprise %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)".

## Preparación para la migración

1. Revisa la guía de Abastecimiento e instalación y controla que se cumplan todos los requisitos previos necesarios para abastecer y configurar {% data variables.product.prodname_enterprise %} 2.1.23 en tu entorno. Para más información, vea "[Aprovisionamiento e instalación](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)".
2. Verifica que la instancia actual esté ejecutando una versión actualizada compatible.
3. Configura la versión más reciente de {% data variables.product.prodname_enterprise_backup_utilities %}. Para más información, vea [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils).
    - Si ya has configurado copias de seguridad programadas utilizando {% data variables.product.prodname_enterprise_backup_utilities %}, asegúrate de que hayas actualizado a la versión más reciente.
    - Si no estás ejecutando actualmente copias de seguridad programadas, configura {% data variables.product.prodname_enterprise_backup_utilities %}.
4. Realice una instantánea de copia de seguridad completa inicial de la instancia actual mediante el comando `ghe-backup`. Si ya configuraste copias de seguridad programadas para tu instancia actual, no debes tomar una instantánea de tu instancia.

   {% tip %}

   **Sugerencia:** Durante la instantánea puede dejar la instancia en línea y en uso activo. Tomarás otras instantánea durante la parte de mantenimiento de la migración. Ya que las copias de seguridad son incrementales, esta instantánea inicial reduce la cantidad de datos transferidos en la instantánea final, que pueden acortar la ventana de mantenimiento.

   {% endtip %}

5. Determina el método para cambiar el tráfico de red de usuario a la nueva instancia. Después de la migración, todo el tráfico de red de HTTP y Git se dirige a la nueva instancia.
    - **DNS**: se recomienda este método para todos los entornos, ya que es simple y funciona bien incluso cuando se realiza la migración desde un centro de datos a otro. Antes de comenzar la migración, reduce los TTL de los registros DNS existentes a cinco minutos o menos y permite el cambio a propagar. Una vez que la migración se completa, actualiza los registros DNS para que apunten a la dirección IP de la nueva instancia.
    - **Asignación de dirección IP**: este método solo está disponible en la migración de VMware a VMware y no se recomienda, a menos que el método DNS no esté disponible. Antes de comenzar la migración, deberás cerrar la instancia anterior y asignar tu dirección IP a la nueva instancia.
6. Programa una ventana de mantenimiento. La ventana de mantenimiento debe incluir tiempo suficiente para transferir datos desde el servidor de seguridad a la nueva instancia y variará en base al tamaño de la instantánea de respaldo y el ancho de banda de la red disponible. Durante este tiempo tu instancia actual no estará disponible y estará en modo mantenimiento mientras migras a la nueva instancia.

## Realización de la migración

1. Aprovisiona una nueva instancia {% data variables.product.prodname_enterprise %} 2.1. Para más información, vea la guía "[Aprovisionamiento e instalación](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)" de la plataforma de destino.
2. Desde un navegador, dirígete a la nueva dirección IP del aparato réplica y carga tu licencia {% data variables.product.prodname_enterprise %}.
3. Configura una contraseña de administrador.
5. Haga clic en **Migrar**.
![Elección del tipo de instalación](/assets/images/enterprise/migration/migration-choose-install-type.png)
6. Pega tu clave SSH de acceso al servidor de respaldo en "Add new SSH key (Agregar nueva clave SSH)".
![Autorización de la copia de seguridad](/assets/images/enterprise/migration/migration-authorize-backup-host.png)
7. Haga clic en **Agregar clave**  y después **Continuar**.
8. Copie el comando `ghe-restore` que ejecutará en el host de copia de seguridad para migrar datos a la nueva instancia.
![Inicio de una migración](/assets/images/enterprise/migration/migration-restore-start.png)
9. Habilita el modo mantenimiento en la instancia anterior y espera a que se completen todos los procesos activos. Para más información, vea "[Habilitación y programación del modo de mantenimiento](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

  {% note %}

  **Nota:** A partir de este momento la instancia no estará disponible para su uso normal.

  {% endnote %}

10. En el host de copia de seguridad, ejecute el comando `ghe-backup` para realizar una instantánea de copia de seguridad final. Esto asegura que se capturen todos los datos de la instancia anterior.
11. En el host de copia de seguridad, ejecute el comando `ghe-restore` que ha copiado en la pantalla de estado de restauración de la nueva instancia para restaurar la instantánea más reciente.
  ```shell
  $ ghe-restore 169.254.1.1
  The authenticity of host '169.254.1.1:122' can't be established.
  RSA key fingerprint is fe:96:9e:ac:d0:22:7c:cf:22:68:f2:c3:c9:81:53:d1.
  Are you sure you want to continue connecting (yes/no)? yes
  Connect 169.254.1.1:122 OK (v2.0.0)
  Starting restore of 169.254.1.1:122 from snapshot 20141014T141425
  Restoring Git repositories ...
  Restoring GitHub Pages ...
  Restoring asset attachments ...
  Restoring hook deliveries ...
  Restoring MySQL database ...
  Restoring Redis database ...
  Restoring SSH authorized keys ...
  Restoring Elasticsearch indices ...
  Restoring SSH host keys ...
  Completed restore of 169.254.1.1:122 from snapshot 20141014T141425
  Visit https://169.254.1.1/setup/settings to review appliance configuration.
  ```

12. Regresa a la pantalla de estado de restauración de la nueva instancia para ver que la restauración está completa.
![Pantalla de restauración completa](/assets/images/enterprise/migration/migration-status-complete.png)
13. Haga clic en **Continuar a configuraciones** para revisar y ajustar la información de configuración y los valores que se han importado de la instancia anterior.
![Revisión de los valores importados](/assets/images/enterprise/migration/migration-status-complete.png)
14. Haga clic en **Save settings** (Guardar configuración).

  {% note %}

  **Nota:** Puede usar la nueva instancia después de haber aplicado los valores de configuración y reiniciado el servidor.

  {% endnote %}

15. Cambia el tráfico de red de usuario desde la instancia anterior a la nueva instancia utilizando la asignación de DNS o la dirección IP.
16. Actualiza a la versión de revisión más reciente de {% data variables.product.prodname_ghe_server %}. Para más información, vea "[Actualización de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)".
