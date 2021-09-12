---
title: Migrar desde GitHub Enterprise 11.10.x a 2.1.23
redirect_from:
  - /enterprise/admin/installation/migrating-from-github-enterprise-1110x-to-2123
  - /enterprise/admin-guide/migrating/
  - /enterprise/admin/articles/migrating-github-enterprise/
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-v11-10-34x/
  - /enterprise/admin/articles/upgrading-to-a-newer-release/
  - /enterprise/admin/guides/installation/migrating-to-a-different-platform-or-from-github-enterprise-11-10-34x/
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-11-10-x-to-2-1-23
  - /enterprise/admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
  - /admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
intro: 'Para migrar desde {% data variables.product.prodname_enterprise %} 11.10.x a 2.1.23, deberás configurar una nueva instancia de aparato y migrar los datos de la instancia anterior.'
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Migration
  - Upgrades
---

Se admiten migraciones desde {% data variables.product.prodname_enterprise %} 11.10.348 y superior. No se admiten migraciones desde {% data variables.product.prodname_enterprise %} 11.10.348 o inferior. Primero debes actualizar a 11.10.348 en varias actualizaciones. Para obtener más información, consulta el procedimiento de actualización 11.10.348, "[Actualizar al lanzamiento más reciente](/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release/)."

Para actualizar a la versión más reciente {% data variables.product.prodname_enterprise %}, primero debes migrar a {% data variables.product.prodname_ghe_server %} 2.1, entonces puedes aplicar el proceso normal de actualización. Para obtener más información, consulta "[Actualizar {% data variables.product.prodname_enterprise %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)".

### Prepárate para la migración

1. Revisa la guía de Abastecimiento e instalación y controla que se cumplan todos los requisitos previos necesarios para abastecer y configurar {% data variables.product.prodname_enterprise %} 2.1.23 en tu entorno. Para obtener más información, consulta "[Abastecimiento e instalación](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)."
2. Verifica que la instancia actual esté ejecutando una versión actualizada compatible.
3. Configura la versión más reciente de {% data variables.product.prodname_enterprise_backup_utilities %}. Para obtener más información, consulta [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils).
    - Si ya has configurado copias de seguridad programadas utilizando {% data variables.product.prodname_enterprise_backup_utilities %}, asegúrate de que hayas actualizado a la versión más reciente.
    - Si no estás ejecutando actualmente copias de seguridad programadas, configura {% data variables.product.prodname_enterprise_backup_utilities %}.
4. Toma una instantánea de copia de respaldo completa inicial de la instancia actual utilizando el comando `ghe-backup`. Si ya configuraste copias de seguridad programadas para tu instancia actual, no debes tomar una instantánea de tu instancia.

   {% tip %}

   **Sugerencia:** puedes dejar la instancia en línea y en uso activo durante la instantánea. Tomarás otras instantánea durante la parte de mantenimiento de la migración. Ya que las copias de seguridad son incrementales, esta instantánea inicial reduce la cantidad de datos transferidos en la instantánea final, que pueden acortar la ventana de mantenimiento.

   {% endtip %}

5. Determina el método para cambiar el tráfico de red de usuario a la nueva instancia. Después de la migración, todo el tráfico de red de HTTP y Git se dirige a la nueva instancia.
    - **DNS** - Recomendamos este método para todos los entornos, ya que es simple y funciona bien incluso cuando se migra desde una base de datos a otra. Antes de comenzar la migración, reduce los TTL de los registros DNS existentes a cinco minutos o menos y permite el cambio a propagar. Una vez que la migración se completa, actualiza los registros DNS para que apunten a la dirección IP de la nueva instancia.
    - **Asignación de dirección IP** - Este método está únicamente disponible en VMware para la migración VMware y no se recomienda excepto que el método DNS no esté disponible. Antes de comenzar la migración, deberás cerrar la instancia anterior y asignar tu dirección IP a la nueva instancia.
6. Programa una ventana de mantenimiento. La ventana de mantenimiento debe incluir tiempo suficiente para transferir datos desde el servidor de seguridad a la nueva instancia y variará en base al tamaño de la instantánea de respaldo y el ancho de banda de la red disponible. Durante este tiempo tu instancia actual no estará disponible y estará en modo mantenimiento mientras migras a la nueva instancia.

### Realiza la migración

1. Aprovisiona una nueva instancia {% data variables.product.prodname_enterprise %} 2.1. Para obtener más información, consulta la "[Guía de aprovisionamiento e instalación](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)" para tu plataforma destino.
2. Desde un navegador, dirígete a la nueva dirección IP del aparato réplica y carga tu licencia de {% data variables.product.prodname_enterprise %}.
3. Configura una contraseña de administrador.
5. Haz clic en **Migrate (Migrar)**. ![Elegir el tipo de instalación](/assets/images/enterprise/migration/migration-choose-install-type.png)
6. Pega tu clave SSH de acceso al servidor de respaldo en "Add new SSH key (Agregar nueva clave SSH)". ![Autorizar la copia de seguridad](/assets/images/enterprise/migration/migration-authorize-backup-host.png)
7. Da clic en **Agregar llave** y luego en **Continuar**.
8. Copia el comando `ghe-restore` que ejecutarás en el servidor de respaldo para migrar datos a la nueva instancia. ![Iniciar la migración](/assets/images/enterprise/migration/migration-restore-start.png)
9. Habilita el modo mantenimiento en la instancia anterior y espera a que se completen todos los procesos activos. Para obtener más información, consulta "[Habilitar y programar el modo mantenimiento](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)."

  {% note %}

  **Nota:** la instancia no estará disponible para el uso normal desde este punto en adelante.

  {% endnote %}

10. En el servidor de respaldo, ejecuta el comando `ghe-backup` para tomar una instantánea de respaldo final. Esto asegura que se capturen todos los datos de la instancia anterior.
11. En el servidor de respaldo, ejecuta el comando `ghe-restore` que copiaste en la pantalla de estado de restauración de la nueva instancia para restaurar la instantánea más reciente.
  ```shell
  $ ghe-restore 169.254.1.1
  The authenticity of host '169.254.1.1:122' can't be established.
  La clave de huella digital RSA es fe:96:9e:ac:d0:22:7c:cf:22:68:f2:c3:c9:81:53:d1.
  ¿Estás seguro que deseas continuar conectado (sí/no)? yes
  Connect 169.254.1.1:122 OK (v2.0.0)
  Starting restore of 169.254.1.1:122 from snapshot 20141014T141425
  Restoring Git repositories ...
  Restaurando las páginas GitHub ...
  Restaurando los adjuntos de activo ...
  Restaurando las entregas de enlace ...
  Restaurando la base de datos MySQL ...
  Restaurando la base de datos Redis ...
  Restaurando las claves autorizadas de SSH ...
  Restaurando los índice de ElasticSearch...
  Restaurando las claves del servidor SSH ...
  Completed restore of 169.254.1.1:122 from snapshot 20141014T141425
  Visit https://169.254.1.1/setup/settings to review appliance configuration.
  ```

12. Regresa a la pantalla de estado de restauración de la nueva instancia para ver que la restauración está completa. ![Restaurar la pantalla completa](/assets/images/enterprise/migration/migration-status-complete.png)
13. Haz clic en **Continue to settings (Continuar a configuraciones)** para revisar y ajustar la información de configuración y los parámetros que se importaron de la instancia anterior. ![Revisar los parámetros importados](/assets/images/enterprise/migration/migration-status-complete.png)
14. Haz clic en **Guardar parámetros**.

  {% note %}

  **Nota:** puedes usar la nueva instancia después de haber aplicado los parámetros de configuración y restaurar el servidor.

  {% endnote %}

15. Cambia el tráfico de red de usuario desde la instancia anterior a la nueva instancia utilizando la asignación de DNS o la dirección IP.
16. Actualiza a la versión más reciente del lanzamiento del patch de {{ currentVersion }}. Para obtener más información, consulta "[Actualizar {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)."
