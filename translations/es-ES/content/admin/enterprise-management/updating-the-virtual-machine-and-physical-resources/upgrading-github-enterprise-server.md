---
title: Actualizar el servidor de GitHub Enterprise
intro: 'Actualizar el {% data variables.product.prodname_ghe_server %} para obtener las funciones y las actualizaciones de seguridad más recientes.'
redirect_from:
  - /enterprise/admin/installation/upgrading-github-enterprise-server
  - /enterprise/admin/articles/upgrading-to-the-latest-release
  - /enterprise/admin/articles/migrations-and-upgrades
  - /enterprise/admin/guides/installation/upgrading-the-github-enterprise-virtual-machine
  - /enterprise/admin/guides/installation/upgrade-packages-for-older-releases
  - /enterprise/admin/articles/upgrading-older-installations
  - /enterprise/admin/hidden/upgrading-older-installations
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch-early-access-program
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch
  - /enterprise/admin/guides/installation/upgrading-github-enterprise
  - /enterprise/admin/enterprise-management/upgrading-github-enterprise-server
  - /admin/enterprise-management/upgrading-github-enterprise-server
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
shortTitle: Upgrading GHES
ms.openlocfilehash: cbbeff601bfbbdf828ed4c5fc019c5e3bf849614
ms.sourcegitcommit: 30b0931723b704e219c736e0de7afe0fa799da29
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186431'
---
## Preparar para una actualización

1. Determina una estrategia de actualización y elige una versión a la que actualizar. Para más información, vea "[Requisitos de actualización](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/)" y consulte [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) para encontrar la ruta de actualización de la versión actual.
1. Crea una copia de seguridad nueva de tu instancia principal con las {% data variables.product.prodname_enterprise_backup_utilities %}. Para más información, consulta el [archivo README.md](https://github.com/github/backup-utils#readme) de la documentación del proyecto de {% data variables.product.prodname_enterprise_backup_utilities %}.

  {% note %}

  **Nota**: La versión de {% data variables.product.prodname_enterprise_backup_utilities %} debe ser la misma que la de{% data variables.location.product_location %} o, como máximo, dos versiones posteriores. Para obtener más información, consulta "[Actualizar GitHub Enterprise Server Backup Utilities](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance#upgrading-github-enterprise-server-backup-utilities)".

  {% endnote %}

1. Si {% data variables.location.product_location %} usa ejecutores autohospedados efímeros para {% data variables.product.prodname_actions %} y has deshabilitado las actualizaciones automáticas, actualiza los ejecutores a la versión de la aplicación de ejecutor que la instancia actualizada ejecutará.
1. Si estás actualizando con un paquete de actualización, programa una ventana de mantenimiento para los usuarios finales del {% data variables.product.prodname_ghe_server %}. Si estás usando un hotpatch, no se necesita el modo mantenimiento.

  {% note %}

  **Nota:** La ventana de mantenimiento depende del tipo de actualización que realice. Las actualizaciones que utilizan un hotpatch por lo general no necesitan una ventana de mantenimiento. A veces se necesita reiniciar; puedes hacerlo más tarde. Siguiendo el esquema de control de versiones de MAJOR.FEATURE.PATCH, los lanzamientos de patch que utilizan un paquete de actualización normalmente necesitan menos de cinco minutos de tiempo de inactividad. Los lanzamientos de funciones que incluyen migraciones de datos toman más tiempo dependiendo del desempeño del almacenamiento y de la cantidad de datos que se migran. Para más información, vea "[Habilitación y programación del modo de mantenimiento](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

  {% endnote %}

## Tomar una instantánea

Una instantánea es un punto de verificación de una máquina virtual (VM) en un momento en el tiempo. Recomendamos firmemente tomar una instantánea antes de actualizar tu máquina virtual para que si falla una actualización, puedas revertir tu VM nuevamente a la instantánea. Solo recomendamos tomar una captura de pantalla de la MV cuando el aplicativo esté apagado o en modo de mantenimiento y todos los jobs en segundo plano hayan terminado.

Si no estás actualizando a un nuevo lanzamiento de característica, debes tomar una instantánea de VM. Si estás actualizando a un nuevo lanzamiento de patch, puedes adjuntar el disco de datos existente. 

Hay dos tipos de instantáneas:

- Las **instantáneas de VM** guardan el estado completo de la VM, incluidos los datos del usuario y de configuración. Este método de instantáneas requiere una gran cantidad de espacio de disco e insume mucho tiempo.
- Las **instantáneas de disco de datos** solo guardan los datos de usuario.

  {% note %}

  **Notas:**
  - Algunas plataformas no permiten que tomes una instantánea solo de tu disco de datos. Para estas plataformas, necesitarás tomar una instantánea de tu VM completa.
  - Si tu hipervisor no admite instantáneas de VM completas, debes tomar una instantánea de tu disco raíz y de tu disco de datos en rápida sucesión.

  {% endnote %}

| Plataforma | Snapshot (método) | URL de documentación de instantánea |
|---|---|---|
| Amazon AWS | Disco | <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html>
| Azure | máquina virtual | <https://docs.microsoft.com/azure/backup/backup-azure-vms-first-look-arm>
| Hyper-V | máquina virtual | <https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/enable-or-disable-checkpoints-in-hyper-v>
| Google Compute Engine | Disco | <https://cloud.google.com/compute/docs/disks/create-snapshots>
| VMware | máquina virtual | <https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.hostclient.doc/GUID-64B866EF-7636-401C-A8FF-2B4584D9CA72.html>

## Actualizar con un hotpatch

{% data reusables.enterprise_installation.hotpatching-explanation %} 

Si utilizas la {% data variables.enterprise.management_console %}, puedes instalar un hotpatch de inmediato o programarlo para que se instale posteriormente. Puede usar el shell administrativo para instalar una revisión en caliente con la utilidad `ghe-upgrade`. Para más información, vea "[Requisitos de actualización](/enterprise/admin/guides/installation/upgrade-requirements/)".

{% note %}

**{% ifversion ghes %}Notas{% else %}Nota{% endif %}** :

{% ifversion ghes %}
- Si {% data variables.location.product_location %} ejecuta una compilación de versión candidata para lanzamiento, no la puedes actualizar con una revisión en caliente.

- {% endif %}No hay disponibilidad para instalar un parche utilizando la {% data variables.enterprise.management_console %} en los ambientes de clúster. Para instalar una revisión en caliente en un entorno en clúster, vea "[Actualización de un clúster](/enterprise/admin/clustering/upgrading-a-cluster#upgrading-with-a-hotpatch)".

{% endnote %}

### Actualizar un aparato único con un hotpatch

#### Instalar un hotpatch utilizando la {% data variables.enterprise.management_console %}

Puedes utilziar la {% data variables.enterprise.management_console %} para hacer una mejora con un hotpatch si habilitas las actualizaciones automáticas. Entonces se te presentará la última versión disponible de {% data variables.product.prodname_ghe_server %} a la cual puedes mejorar.

Si el objetivo de actualización que se te presentó es un lanzamiento de una característica en vez de un lanzamiento de parche, no podrás utilizar la {% data variables.enterprise.management_console %} para instalar un hotpatch. En vez de eso, deberás instalar el hotpatch utilizando el shell administrativo. Para más información, vea "[Instalación de una revisión en caliente mediante el shell administrativo](#installing-a-hotpatch-using-the-administrative-shell)".

1. Habilitar las actualizaciones automáticas. Para más información, vea "[Habilitación de actualizaciones automáticas](/enterprise/admin/guides/installation/enabling-automatic-update-checks/)".
{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.updates-tab %}
4. Cuando se ha descargado un nuevo hotpatch, utiliza el menú desplegable del paquete de instalación:
    - Para realizar la instalación inmediatamente, seleccione **Ahora**:
    - Para instalarlo más tarde, selecciona una fecha posterior.
  ![Menú desplegable de fecha de instalación de la revisión en caliente](/assets/images/enterprise/management-console/hotpatch-installation-date-dropdown.png)
5. Haga clic en **Instalar**.
  ![Botón de instalación de la revisión en caliente](/assets/images/enterprise/management-console/hotpatch-installation-install-button.png)

#### Instalar un hotpatch utilizando un shell administrativo

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Copie la URL para obtener el paquete de actualización (archivo *.hpkg*).
{% data reusables.enterprise_installation.download-package %}
4. Ejecute el comando `ghe-upgrade` con el nombre del archivo de paquete:
  ```shell
  admin@HOSTNAME:~$ ghe-upgrade GITHUB-UPGRADE.hpkg
  *** verifying upgrade package signature...
  ```
5. Si se requiere un reinicio para las actualizaciones de kernel, MySQL, Elasticsearch u otros programas, el script de actualización de hotpatch te avisa.

### Actualizar un aparato que tiene instancias de réplica utilizando un hotpatch

{% note %}

**Nota**: Si va a instalar una revisión en caliente, no es necesario entrar en modo de mantenimiento ni detener la replicación.

{% endnote %}

Los aparatos configurados para alta disponibilidad y de replicación geográfica utilizan instancias de réplica además de las instancias principales. Para actualizar estos aparatos, necesitarás actualizar tanto la instancia principal y todas las instancias de réplica, una a la vez.

#### Actualizar la instancia principal

1. Actualice la instancia principal con las instrucciones de "[Instalación de una revisión en caliente mediante el shell administrativo](#installing-a-hotpatch-using-the-administrative-shell)".

#### Actualizar una instancia de réplica

{% note %}

**Nota:** Si va a ejecutar varias instancias de réplica como parte de la replicación geográfica, repita este procedimiento para cada instancia de réplica, de forma individual.

{% endnote %}

1. Actualice la instancia de réplica con las instrucciones de "[Instalación de una revisión en caliente mediante el shell administrativo](#installing-a-hotpatch-using-the-administrative-shell)". Si estás utilizando varias replicas para la replicación geográfica, deberás repetir este procedimiento para actualizar cada réplica una a la vez.
{% data reusables.enterprise_installation.replica-ssh %} {% data reusables.enterprise_installation.replica-verify %}

## Actualizar con un paquete de actualización

Al mismo tiempo que puedes utilizar un hotpatch para actualizar al lanzamiento de patch más reciente dentro de una serie de características, debes utilizar un paquete de actualización para actualizar a un lanzamiento de característica más nuevo. Por ejemplo, para actualizar de `2.11.10` a `2.12.4` debe usar un paquete de actualización, ya que se encuentran en diferentes series de características. Para más información, vea "[Requisitos de actualización](/enterprise/admin/guides/installation/upgrade-requirements/)".

### Actualizar un aparato único con un paquete de actualización

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Seleccione la plataforma adecuada y copia la URL para obtener el paquete de actualización (archivo *.pkg*).
{% data reusables.enterprise_installation.download-package %}
4. Habilita el modo mantenimiento y espera que se completen todos los procesos activos en la instancia del {% data variables.product.prodname_ghe_server %}. Para más información, vea "[Habilitación y programación del modo de mantenimiento](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

  {% note %}

  **Nota**: Al actualizar el dispositivo principal en una configuración de alta disponibilidad, el dispositivo ya debería estar en modo de mantenimiento si sigue las instrucciones de "[Actualización de la instancia principal](#upgrading-the-primary-instance)".

  {% endnote %}

5. Ejecute el comando `ghe-upgrade` con el nombre del archivo de paquete:
  ```shell
  admin@HOSTNAME:~$ ghe-upgrade GITHUB-UPGRADE.pkg
  *** verifying upgrade package signature...
  ```
6. Confirma que te gustaría continuar con la actualización y reinicia después de que se verifique la firma del paquete. El nuevo sistema de archivos raíz escribe en la segunda partición y la instancia de forma automática se reinicia en modo mantenimiento:
  ```shell
  *** applying update...
  This package will upgrade your installation to version VERSION-NUMBER
  Current root partition: /dev/xvda1 [VERSION-NUMBER]
  Target root partition:  /dev/xvda2
  Proceed with installation? [y/N]
  ```
{% ifversion ip-exception-list %}
1. Opcionalmente, para validar la actualización, configura una lista de excepciones IP para permitir el acceso a una lista especificada de direcciones IP. Para obtener más información, consulta «[Validación de cambios en el modo de mantenimiento mediante la lista de excepciones de IP](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list)».
{% endif %}
7. Para las actualizaciones de un solo dispositivo, deshabilita el modo mantenimiento para que los usuarios puedan usar {% data variables.location.product_location %}.

  {% note %}

  **Nota**: Cuando se actualizan dispositivos en una configuración de alta disponibilidad, debe mantenerse en modo de mantenimiento hasta que haya actualizado todas las réplicas y la replicación sea actual. Para más información, vea "[Actualización de una instancia de réplica](#upgrading-a-replica-instance)".

  {% endnote %}

### Actualizar un aparato que tiene instancias de réplica utilizando un paquete de actualización

Los aparatos configurados para alta disponibilidad y de replicación geográfica utilizan instancias de réplica además de las instancias principales. Para actualizar estos aparatos, necesitarás actualizar tanto la instancia principal y todas las instancias de réplica, una a la vez.

#### Actualizar la instancia principal

{% warning %}

**Advertencia:** Cuando se detiene la replicación, si se produce un error en la instancia primaria, se perderá cualquier trabajo que se realice antes de que la réplica esté actualizada y vuelva a comenzar la replicación.

{% endwarning %}

1. En la instancia primaria, habilita el modo mantenimiento y espera a que se completen todos los procesos activos. Para más información, vea "[Habilitación del modo de mantenimiento](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)".
{% data reusables.enterprise_installation.replica-ssh %}
3. En la instancia de réplica, o en todas las instancias de réplica si ejecuta varias como parte de una replicación geográfica, ejecute `ghe-repl-stop` para detener la replicación.
4. Actualice la instancia principal mediante las instrucciones de "[Actualización de un único dispositivo con un paquete de actualización](#upgrading-a-single-appliance-with-an-upgrade-package)".

#### Actualizar una instancia de réplica

{% note %}

**Nota:** Si va a ejecutar varias instancias de réplica como parte de la replicación geográfica, repita este procedimiento para cada instancia de réplica, de forma individual.

{% endnote %}

1. Actualice la instancia de réplica mediante las instrucciones de "[Actualización de un único dispositivo con un paquete de actualización](#upgrading-a-single-appliance-with-an-upgrade-package)". Si estás utilizando varias replicas para la replicación geográfica, deberás repetir este procedimiento para actualizar cada réplica una a la vez.
{% data reusables.enterprise_installation.replica-ssh %} {% data reusables.enterprise_installation.replica-verify %}

{% data reusables.enterprise_installation.start-replication %}

{% data reusables.enterprise_installation.replication-status %} Si el comando devuelve `Replication is not running`, es posible que la replicación todavía se esté iniciando. Espere aproximadamente un minuto antes de volver a ejecutar `ghe-repl-status`.

   {% note %}

   **Nota**: Aunque la resincronización esté en curso, `ghe-repl-status` podría indicar que la replicación va por detrás. Por ejemplo, podría aparecer el siguiente mensaje de error.
   
   ```
   CRITICAL: git replication is behind the primary by more than 1007 repositories and/or gists
   ```
   {% endnote %}

   {%- ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 %}

   - Si has actualizado cada nodo a {% data variables.product.product_name %} 3.6.0 o una versión posterior y has iniciado la replicación, pero sigue apareciendo `git replication is behind the primary` al cabo de 45 minutos, ponte en contacto con {% data variables.contact.enterprise_support %}. Para más información, vea "[Recepción de ayuda de {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)".
   {%- endif %}

   - {% ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 %}En caso contrario, si{% else %}Si{% endif %} `ghe-repl-status` no devolvió `OK`, ponte en contacto con {% data variables.contact.enterprise_support %}. Para más información, vea "[Recepción de ayuda de {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)".
6. Cuando hayas finalizado la actualización de la última réplica y se haya completado la resincronización, deshabilita el modo mantenimiento para que los usuarios puedan usar {% data variables.location.product_location %}.

## Restaurar desde una actualización fallida

Si una actualización falla o se interrumpe, deberías revertir tu instancia a su estado anterior. El proceso para completar esto depende del tipo de actualización.

### Revertir un lanzamiento de patch

Para revertir una versión de revisión, use el comando `ghe-upgrade` con el modificador `--allow-patch-rollback`. Antes de la reversión, la replicación se debe detener temporalmente mediante la ejecución de `ghe-repl-stop` en todas las instancias de réplica. {% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

Una vez que se complete la reversión, reinicie la replicación mediante la ejecución de `ghe-repl-start` en todas las réplicas. 

Para más información, vea "[Utilidades de línea de comandos](/enterprise/admin/guides/installation/command-line-utilities/#ghe-upgrade)".

### Revertir un lanzamiento de característica

Para revertir un lanzamiento de característica, restaura desde una instantánea de VM para garantizar que las particiones raíz y de datos estén en un estado consistente. Para más información, vea "[Realización de una instantánea](#taking-a-snapshot)".

{% ifversion ghes %}
## Información adicional

- "[Acerca de las actualizaciones a nuevas versiones](/admin/overview/about-upgrades-to-new-releases)" {% endif %}
