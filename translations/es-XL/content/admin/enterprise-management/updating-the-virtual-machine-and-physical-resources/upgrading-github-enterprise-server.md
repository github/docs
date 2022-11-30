---
title: Actualizar el servidor de GitHub Enterprise
intro: 'Actualizar el {% data variables.product.prodname_ghe_server %} para obtener las funciones y las actualizaciones de seguridad más recientes.'
redirect_from:
  - /enterprise/admin/installation/upgrading-github-enterprise-server
  - /enterprise/admin/articles/upgrading-to-the-latest-release/
  - /enterprise/admin/articles/migrations-and-upgrades/
  - /enterprise/admin/guides/installation/upgrading-the-github-enterprise-virtual-machine/
  - /enterprise/admin/guides/installation/upgrade-packages-for-older-releases/
  - /enterprise/admin/articles/upgrading-older-installations/
  - /enterprise/admin/hidden/upgrading-older-installations/
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch-early-access-program/
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch/
  - /enterprise/admin/guides/installation/upgrading-github-enterprise/
  - /enterprise/admin/enterprise-management/upgrading-github-enterprise-server
  - /admin/enterprise-management/upgrading-github-enterprise-server
versions:
  enterprise-server: '*'
topics:
  - Enterprise
  - Upgrades
---
### Preparar para una actualización

1. Determina una estrategia de actualización y elige una versión a la que actualizar. Para obtener más información, consulta "[Requisitos de actualización](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/)."
3. Crea una copia de seguridad nueva de tu instancia principal con las {% data variables.product.prodname_enterprise_backup_utilities %}. Para obtener más información, consulta el archivo README.md en [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).
4. Si estás actualizando con un paquete de actualización, programa una ventana de mantenimiento para los usuarios finales del {% data variables.product.prodname_ghe_server %}. Si estás usando un hotpatch, no se necesita el modo mantenimiento.

  {% note %}

  **Nota:** la ventana de mantenimiento depende del tipo de actualización que realices. Las actualizaciones que utilizan un hotpatch por lo general no necesitan una ventana de mantenimiento. A veces se necesita reiniciar; puedes hacerlo más tarde. Siguiendo el esquema de control de versiones de MAJOR.FEATURE.PATCH, los lanzamientos de patch que utilizan un paquete de actualización normalmente necesitan menos de cinco minutos de tiempo de inactividad. Los lanzamientos de funciones que incluyen migraciones de datos toman más tiempo dependiendo del desempeño del almacenamiento y de la cantidad de datos que se migran. Para obtener más información, consulta "[Habilitar y programar el modo mantenimiento](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)."

  {% endnote %}

### Tomar una instantánea

Una instantánea es un punto de verificación de una máquina virtual (VM) en un momento en el tiempo. Recomendamos firmemente tomar una instantánea antes de actualizar tu máquina virtual para que si falla una actualización, puedas revertir tu VM nuevamente a la instantánea. Si no estás actualizando a un nuevo lanzamiento de característica, debes tomar una instantánea de VM. Si estás actualizando a un nuevo lanzamiento de patch, puedes adjuntar el disco de datos existente.

Hay dos tipos de instantáneas:

- **Las instantáneas de VM** guardan el estado completo de tu VM, incluidos los datos del usuario y los datos de configuración. Este método de instantáneas requiere una gran cantidad de espacio de disco e insume mucho tiempo.
- **Las instantáneas de disco de datos** únicamente guardan tus datos de usuario.

  {% note %}

  **Notas:**
  - Algunas plataformas no permiten que tomes una instantánea solo de tu disco de datos. Para estas plataformas, necesitarás tomar una instantánea de tu VM completa.
  - Si tu hipervisor no admite instantáneas de VM completas, debes tomar una instantánea de tu disco raíz y de tu disco de datos en rápida sucesión.

  {% endnote %}

| Plataforma            | Método de instantánea | URL de documentación de instantánea                                                                                                                                                                    |
| --------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Amazon AWS            | Disco                 | <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html>                                                                                                                       |
| Azure                 | VM                    | <https://azure.microsoft.com/en-us/documentation/articles/backup-azure-vms/>                                                                                                                           |
| Hyper-V               | VM                    | <https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/enable-or-disable-checkpoints-in-hyper-v>                                                                                     |
| Google Compute Engine | Disco                 | <https://cloud.google.com/compute/docs/disks/create-snapshots>                                                                                                                                         |
| VMware                | VM                    | [https://pubs.vmware.com/vsphere-50/topic/com.vmware.wssdk.pg.doc_50/PG_Ch11_VM_Manage.13.3.html](https://pubs.vmware.com/vsphere-50/topic/com.vmware.wssdk.pg.doc_50/PG_Ch11_VM_Manage.13.3.html) |
| XenServer             | VM                    | <https://support.citrix.com/article/CTX122978>                                                                                                                                                         |

### Actualizar con un hotpatch

{% data reusables.enterprise_installation.hotpatching-explanation %} Utilizando la {% data variables.enterprise.management_console %}, puedes instalar un hotpatch de forma inmediata o programar la instalación para más tarde. Puedes utilizar el shell administrativo para instalar un hotpatch con la herramienta `ghe-upgrade`. Para obtener más información, consulta "[Requisitos de actualización](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/)."

{% note %}

**Note**: instalar un hotpatch utilizando la {% data variables.enterprise.management_console %} no está disponible en los entornos de agrupación. Para instalar un parche en un entorno de agrupación, consulta "[Actualizar una agrupación](/enterprise/{{ currentVersion }}/admin/clustering/upgrading-a-cluster#upgrading-with-a-hotpatch)."

{% endnote %}

#### Actualizar un aparato único con un hotpatch

##### Instalar un hotpatch utilizando la {% data variables.enterprise.management_console %}

1. Habilitar actualizaciones automáticas. Para obtener más información, consulta "[Habilitar actualizaciones automáticas](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-subdomain-isolation/)."
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.updates-tab %}
4. Cuando se ha descargado un nuevo hotpatch, utiliza el menú desplegable del paquete de instalación:
    - Para instalar de forma inmediata, selecciona **Now (Ahora)**:
    - Para instalarlo más tarde, selecciona una fecha posterior. ![Menú desplegable de fecha de instalación de hotpatch](/assets/images/enterprise/management-console/hotpatch-installation-date-dropdown.png)
5. Da clic en **Instalar**. ![Botón de instalación de hotpatch](/assets/images/enterprise/management-console/hotpatch-installation-install-button.png)

##### Instalar un hotpatch utilizando un shell administrativo

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Copia el URL para obtener el paquete de actualización (*.hpkg* file).
{% data reusables.enterprise_installation.download-package %}
4. Ejecuta el comando `ghe-upgrade` utilizando el nombre del archivo del paquete:
  ```shell
  admin@<em>HOSTNAME</em>:~$ ghe-upgrade <em>GITHUB-UPGRADE.hpkg</em>
  *** verifying upgrade package signature...
  ```
5. Si se requiere un reinicio para las actualizaciones de kernel, MySQL, Elasticsearch u otros programas, el script de actualización de hotpatch te avisa.

#### Actualizar un aparato que tiene instancias de réplica utilizando un hotpatch

{% note %}

**Nota**: si estás instalando un hotpatch, no necesitas entrar en modo de mantenimiento o detener la replicación.

{% endnote %}

Los aparatos configurados para alta disponibilidad y de replicación geográfica utilizan instancias de réplica además de las instancias principales. Para actualizar estos aparatos, necesitarás actualizar tanto la instancia principal y todas las instancias de réplica, una a la vez.

##### Actualizar la instancia principal

1. Actualiza la instancia principal siguiendo las instrucciones en "[Instalar un hotpatch utilizando el shell administrativo](#installing-a-hotpatch-using-the-administrative-shell)."

##### Actualizar una instancia de réplica

{% note %}

**Nota:** si estás ejecutando múltiples instancias de réplica como parte de la replicación geográfica, repite este procedimiento para cada instancia de réplica, una a la vez.

{% endnote %}

1. Mejora la instancia de répica siguiendo las instrucciones en "[Instalar un hotpatch utilizando el shell administrativo](#installing-a-hotpatch-using-the-administrative-shell)". Si estás utilizando varias replicas para la replicación geográfica, deberás repetir este procedimiento para actualizar cada réplica una a la vez.
{% data reusables.enterprise_installation.replica-ssh %}
{% data reusables.enterprise_installation.replica-verify %}

### Actualizar con un paquete de actualización

Al mismo tiempo que puedes utilizar un hotpatch para actualizar al lanzamiento de patch más reciente dentro de una serie de características, debes utilizar un paquete de actualización para actualizar a un lanzamiento de característica más nuevo. Por ejemplo para actualizar de `2.11.10` a `2.12.4` debes utilizar un paquete de actualización ya que están en series de características diferentes. Para obtener más información, consulta "[Requisitos de actualización](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/)."

#### Actualizar un aparato único con un paquete de actualización

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Selecciona la plataforma adecuada y copia el URL para obtener el paquete de actualización (*.pkg* file).
{% data reusables.enterprise_installation.download-package %}
4. Habilita el modo mantenimiento y espera que se completen todos los procesos activos en la instancia del {% data variables.product.prodname_ghe_server %}. Para obtener más información, consulta "[Habilitar y programar el modo mantenimiento](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)."

  {% note %}

  **Nota**: cuando se actualiza el aparato primario en una configuración de alta disponibilidad, el aparato debería estar ya en modo mantenimiento si estás siguiendo las instrucciones en "[Actualizar la instancia primaria](#upgrading-the-primary-instance)."

  {% endnote %}

5. Ejecuta el comando `ghe-upgrade` utilizando el nombre del archivo del paquete:
  ```shell
  admin@<em>HOSTNAME</em>:~$ ghe-upgrade <em>GITHUB-UPGRADE.pkg</em>
  *** verifying upgrade package signature...
  ```
6. Confirma que te gustaría continuar con la actualización y reinicia después de que se verifique la firma del paquete. El nuevo sistema de archivos raíz escribe en la segunda partición y la instancia de forma automática se reinicia en modo mantenimiento:
  ```shell
  *** aplicando actualización...
  This package will upgrade your installation to version <em>version-number</em>
  Current root partition: /dev/xvda1 [<em>version-number</em>]
  Target root partition:  /dev/xvda2
  Proceed with installation? [s/N]
  ```
7. Para las actualizaciones de aparato único, deshabilita el modo mantenimiento para que los usuarios puedan utilizar {% data variables.product.product_location_enterprise %}.

  {% note %}

  **Nota**: cuando se actualizan aparatos en configuración de alta disponibilidad, deberías mantener el modo mantenimiento hasta que hayas actualizado todas las réplicas y la replicación esté en curso. Para obtener más información, consulta "[Actualizar una instancia de réplica](#upgrading-a-replica-instance)."

  {% endnote %}

#### Actualizar un aparato que tiene instancias de réplica utilizando un paquete de actualización

Los aparatos configurados para alta disponibilidad y de replicación geográfica utilizan instancias de réplica además de las instancias principales. Para actualizar estos aparatos, necesitarás actualizar tanto la instancia principal y todas las instancias de réplica, una a la vez.

##### Actualizar la instancia principal

{% warning %}

**Advertencia:** Cuando se detiene una replicación, si falla la primaria, se perderá cualquier trabajo que se realice antes de que la réplica esté actualizada y comience nuevamente la replicación.

{% endwarning %}

1. En la instancia primaria, habilita el modo mantenimiento y espera a que se completen todos los procesos activos. Para obtener más información, consulta "[Habilitar el modo mantenimiento](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)."
{% data reusables.enterprise_installation.replica-ssh %}
3. En la instancia de réplica, o en todas las instancias de réplica si estás ejecutando múltiples instancias de réplica como parte de una replicación geográfica, ejecuta `ghe-repl-stop` para detener la replicación.
4. Actualiza la instancia primaria siguiendo las instrucciones en "[Actualizar un aparato único con un paquete de actualización](#upgrading-a-single-appliance-with-an-upgrade-package)."

##### Actualizar una instancia de réplica

{% note %}

**Nota:** si estás ejecutando múltiples instancias de réplica como parte de la replicación geográfica, repite este procedimiento para cada instancia de réplica, una a la vez.

{% endnote %}

1. Actualiza la instancia de la réplica siguiendo las instrucciones en la sección "[Mejorar un solo aplicativo con un paquete de mejora](#upgrading-a-single-appliance-with-an-upgrade-package)". Si estás utilizando varias replicas para la replicación geográfica, deberás repetir este procedimiento para actualizar cada réplica una a la vez.
{% data reusables.enterprise_installation.replica-ssh %}
{% data reusables.enterprise_installation.replica-verify %}

{% data reusables.enterprise_installation.start-replication %}

{% data reusables.enterprise_installation.replication-status %} Si el comando devuelve `La replicación no se está ejecutando`, la replicación puede estar comenzando. Espera alrededor de un minuto antes de volver a ejecutar `ghe-repl-status`.

   {% note %}

    **Nota:** mientras la resincronización está en progreso, `ghe-repl-status` puede devolver mensajes esperados que indiquen que la replicación está de forma subyacente.
    Por ejemplo: `CRITICO: la replicación de git está de forma subyacente de la primaria por más de 1007 repositorios o gists`

   {% endnote %}

   Si `ghe-repl-status` no devuelve `OK`, sigue los pasos de abajo para iniciar la replicación de forma manual.

   1. En la instancia de réplica, ejecuta nuevamente `ghe-repl-setup <primary-instance-ip>`.
   {% data reusables.enterprise_installation.start-replication %}
   {% data reusables.enterprise_installation.replication-status %}
6. Cuando hayas completado la actualización de la última réplica, y se haya completado la resincronización, deshabilita el modo mantenimiento para que los usuarios puedan utilizar {% data variables.product.product_location_enterprise %}.

### Restaurar desde una actualización fallida

Si una actualización falla o se interrumpe, deberías revertir tu instancia a su estado anterior. El proceso para completar esto depende del tipo de actualización.

#### Revertir un lanzamiento de patch

Para volver a lanzar una versión de parche, usa el comando `ghe-upgrade` con el comando `--allow-patch-rollback` switch. {% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

Para obtener más información, consulta "[Herramientas de línea de comando](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities/#ghe-upgrade)."

#### Revertir un lanzamiento de característica

Para revertir un lanzamiento de característica, restaura desde una instantánea de VM para garantizar que las particiones raíz y de datos estén en un estado consistente. Para obtener más información, consulta "[Tomar una instantánea](#taking-a-snapshot)."
