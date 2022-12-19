---
title: Configurar copias de seguridad en tu aparato
shortTitle: Configuring backups
redirect_from:
  - /enterprise/admin/categories/backups-and-restores
  - /enterprise/admin/articles/backup-and-recovery
  - /enterprise/admin/articles/backing-up-github-enterprise
  - /enterprise/admin/articles/restoring-github-enterprise
  - /enterprise/admin/articles/backing-up-repository-data
  - /enterprise/admin/articles/restoring-enterprise-data
  - /enterprise/admin/articles/restoring-repository-data
  - /enterprise/admin/articles/backing-up-enterprise-data
  - /enterprise/admin/guides/installation/backups-and-disaster-recovery
  - /enterprise/admin/installation/configuring-backups-on-your-appliance
  - /enterprise/admin/configuration/configuring-backups-on-your-appliance
  - /admin/configuration/configuring-backups-on-your-appliance
intro: 'Como parte de un plan de recuperación ante desastres, puedes proteger los datos de producción en {% data variables.product.product_location %} configurando copias de seguridad automáticas.'
versions:
  ghes: '*'
type: how_to
topics:
  - Backups
  - Enterprise
  - Fundamentals
  - Infrastructure
ms.openlocfilehash: 4403ec24aa3da63f6700ae4bfcd2392ec0cfd194
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147861656'
---
## Acerca de {% data variables.product.prodname_enterprise_backup_utilities %}

{% data variables.product.prodname_enterprise_backup_utilities %} es un sistema de copias de seguridad que se instala en un host independiente, el cual realiza instantáneas de copias de seguridad de {% data variables.product.product_location %} en intervalos regulares a través de una conexión de red SSH segura. Puedes utilizar una instantánea para restablecer una instancia existente del {% data variables.product.prodname_ghe_server %} a su estado previo desde el host de copias de seguridad.

Solo se transferirán por la red y ocuparán espacio de almacenamiento físico adicional los datos que se hayan agregado después de esa última instantánea. Para minimizar el impacto en el rendimiento, las copias de seguridad se realizan en línea con la prioridad CPU/IO más baja. No necesitas programar una ventana de mantenimiento para realizar una copia de seguridad.

Las versiones principales y los números de versión de {% data variables.product.prodname_enterprise_backup_utilities %} se alinean con las versiones de actualización de características de {% data variables.product.product_name %}. Se admiten las cuatro versiones más recientes de ambos productos. Para obtener más información, consulta "[Versiones de {% data variables.product.product_name %}](/admin/all-releases)".

Para obtener información más detallada sobre las características, los requisitos y el uso avanzado, consulta el archivo [README de {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme) en la documentación del proyecto de {% data variables.product.prodname_enterprise_backup_utilities %}.

## Prerrequisitos

Para utilizar {% data variables.product.prodname_enterprise_backup_utilities %}, debe tener un sistema de host Linux o Unix independiente de {% data variables.product.product_location %}.

También puedes incorporar {% data variables.product.prodname_enterprise_backup_utilities %} en un entorno existente para almacenar los datos críticos de manera permanente y a largo plazo.

Recomendamos que exista una distancia geográfica entre el host de copias de seguridad y {% data variables.product.product_location %}. Esto asegura que las copias de seguridad estén disponibles para su recuperación en el caso de que ocurra un desastre significativo o una interrupción de red en el sitio principal.

Los requisitos de almacenamiento físico variarán en función del uso del disco del repositorio de Git y de los patrones de crecimiento esperados:

| Hardware | Recomendación |
| -------- | --------- |
| **vCPU**  | 2 |
| **Memoria** | 2 GB |
| **Storage** | Cinco veces el almacenamiento asignado de la instancia principal |

Es posible que se requieran más recursos según su uso, como la actividad del usuario y las integraciones seleccionadas.

Para obtener más información, consulta [los requisitos de {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils/blob/master/docs/requirements.md) en la documentación del proyecto de {% data variables.product.prodname_enterprise_backup_utilities %}.

## Instalar {% data variables.product.prodname_enterprise_backup_utilities %}

Para instalar {% data variables.product.prodname_enterprise_backup_utilities %} en el host de copia de seguridad, se recomienda clonar el repositorio Git del proyecto. Este enfoque permite capturar nuevas versiones directamente mediante Git y el archivo de configuración de copia de seguridad existente, `backup.config`, se conservará al instalar una nueva versión.

Como alternativa, si el equipo host no puede acceder a Internet, puedes descargar cada versión de {% data variables.product.prodname_enterprise_backup_utilities %} como archivo comprimido y, después, extraer e instalar el contenido. Para obtener más información, consulta [Introducción](https://github.com/github/backup-utils/blob/master/docs/getting-started.md) de la documentación del proyecto de {% data variables.product.prodname_enterprise_backup_utilities %}.

Las instantáneas de copia de seguridad se escriben en la ruta de acceso del disco establecida por la variable de directorio de datos `GHE_DATA_DIR` del archivo `backup.config`. Las instantáneas deben almacenarse en un sistema de archivos que admita vínculos simbólicos y físicos.

{% note %}

**Nota:** Se recomienda asegurarse de que las instantáneas no se mantienen en un subdirectorio del directorio de instalación de {% data variables.product.prodname_enterprise_backup_utilities %} para evitar sobrescribir accidentalmente el directorio de datos al actualizar las versiones de {% data variables.product.prodname_enterprise_backup_utilities %}.

{% endnote %}

1. Ejecuta el siguiente comando para clonar el [repositorio del proyecto de {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils/) en un directorio local del host de copia de seguridad.

  ```
  $ git clone https://github.com/github/backup-utils.git /path/to/target/directory/backup-utils
  ```
1. Ejecuta el siguiente comando para cambiar al directorio del repositorio local.

  ```
  cd backup-utils
  ```
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %}
1. Ejecuta el siguiente comando para copiar el archivo `backup.config-example` incluido en `backup.config`.

   ```shell
   cp backup.config-example backup.config
   ```
1. Para personalizar la configuración, edita `backup.config` en un editor de texto.
   1. Establezca el valor `GHE_HOSTNAME` en la dirección IP o el nombre del host de su instancia principal de {% data variables.product.prodname_ghe_server %}.

     {% note %}

     **Nota:** Si {% data variables.product.product_location %} se implementa como un clúster o en una configuración de alta disponibilidad utilizando un equilibrador de carga, el `GHE_HOSTNAME` puede ser el nombre de host del equilibrador de carga siempre y cuando permita acceso por SSH a {% data variables.product.product_location %} (por el puerto 122).

     Para garantizar que un dispositivo recuperado esté disponible de inmediato, realiza copias de seguridad centradas en la instancia principal, incluso en una configuración de replicación geográfica.

     {% endnote %}
   1. Establezca el valor `GHE_DATA_DIR` para la ubicación del sistema de archivos en la que quiera almacenar las instantáneas de copias de seguridad. Se recomienda elegir una ubicación en el mismo sistema de archivos que el host de copia de seguridad, pero fuera de donde se clonó el repositorio Git en el paso 1.
1. Para conceder acceso al host de copia de seguridad a la instancia, abre la página de configuración de la instancia principal en `http(s)://HOSTNAME/setup/settings` y agrega la clave SSH del host de copia de seguridad a la lista de claves SSH autorizadas. Para obtener más información, consulte"[Acceso al shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh)".
1. En el host de copia de seguridad, comprueba la conectividad SSH con {% data variables.product.product_location %} con el comando `ghe-host-check`.

  ```shell
  ./bin/ghe-host-check
  ```         
1. Ejecuta el siguiente comando para crear una copia de seguridad completa inicial.

  ```shell
  ./bin/ghe-backup
  ```

Para obtener más información sobre el uso avanzado, consulta el archivo [README de {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme) en la documentación del proyecto de {% data variables.product.prodname_enterprise_backup_utilities %}.

## Actualizar {% data variables.product.prodname_enterprise_backup_utilities %}

Al actualizar {% data variables.product.prodname_enterprise_backup_utilities %}, debes elegir una versión que funcione con la versión actual de {% data variables.product.product_name %}. La versión instalada de {% data variables.product.prodname_enterprise_backup_utilities %} debe ser, al menos, la misma que la de {% data variables.product.product_location %} y no puede ser más de dos versiones posteriores. Para obtener más información, consulta [los requisitos de la versión de {% data variables.product.prodname_ghe_server %}](https://github.com/github/backup-utils/blob/master/docs/requirements.md#github-enterprise-server-version-requirements) en la documentación del proyecto de {% data variables.product.prodname_enterprise_backup_utilities %}.
Puedes actualizar {% data variables.product.prodname_enterprise_backup_utilities %} en un repositorio Git mediante la captura y extracción del repositorio de los cambios más recientes.

Como alternativa, si no usas un repositorio Git para la instalación, puedes extraer un nuevo archivo o cambiar el enfoque para usar un repositorio Git en su lugar.

### Comprobación del tipo de instalación

Puedes comprobar el método de instalación de {% data variables.product.prodname_enterprise_backup_utilities %} y determinar la mejor manera de actualizar la versión instalada.

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %}
1. Ejecuta el siguiente comando para comprobar si existe un directorio de trabajo válido dentro de un repositorio Git.

   ```
   git rev-parse --is-inside-work-tree
   ```

   Si la salida es `true`, {% data variables.product.prodname_enterprise_backup_utilities %} se instaló mediante la clonación del repositorio Git del proyecto. Si la salida incluye `fatal: not a git repository (or any of the parent directories)`, es probable que {% data variables.product.prodname_enterprise_backup_utilities %} se instalase extrayendo un archivo de archivo comprimido.
Si la instalación está en un repositorio Git, puedes instalar la versión más reciente mediante Git. Si la instalación procede de un archivo comprimido, puedes descargar y extraer la versión más reciente, o bien puedes volver a instalar {% data variables.product.prodname_enterprise_backup_utilities %} mediante Git para simplificar las actualizaciones futuras.

- [Actualización de una instalación en un repositorio Git](#upgrading-an-installation-in-a-git-repository)
- [Uso de Git en lugar de archivos comprimidos para actualizaciones](#using-git-instead-of-compressed-archives-for-upgrades)

### Actualización de una instalación en un repositorio Git

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %} {% note %}

  **Nota:** Se recomienda crear una copia del archivo `backup.config` existente en una ubicación temporal, como `$HOME/backup.config`, antes de actualizar {% data variables.product.prodname_enterprise_backup_utilities %}.

  {% endnote %}

1. Descarga las actualizaciones más recientes del proyecto mediante la ejecución del comando `git fetch`.

  ```shell
  git fetch
  ```

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %} {% data reusables.enterprise_backup_utilities.enterprise-backup-utils-verify-upgrade %}

### Uso de Git en lugar de archivos comprimidos para actualizaciones

Si el host de copia de seguridad tiene conectividad a Internet y se usó previamente un archivo comprimido (`.tar.gz`) para instalar o actualizar {% data variables.product.prodname_enterprise_backup_utilities %}, se recomienda usar un repositorio Git para la instalación en su lugar. La actualización mediante Git requiere menos trabajo y conserva la configuración de copia de seguridad.

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %}
1. Para realizar una copia de seguridad de la configuración de {% data variables.product.prodname_enterprise_backup_utilities %} existente, copia el archivo `backup.config` actual en una ubicación segura, como el directorio principal.

  ```
  $ cp backup.config $HOME/backup.config.saved-$(date +%Y%m%d-%H%M%S)
  ```

1. Cambia al directorio local del host de copia de seguridad donde deseas instalar el repositorio Git {% data variables.product.prodname_enterprise_backup_utilities %}.
1. Ejecuta el siguiente comando para clonar el [repositorio del proyecto](https://github.com/github/backup-utils/) en el directorio del host de copia de seguridad.

  ```
  git clone https://github.com/github/backup-utils.git
  ```
1. Ejecuta el siguiente comando para cambiar al repositorio clonado.

  ```
  cd backup-utils
  ```
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %}
1. Para restaurar la configuración de copia de seguridad anterior, copia el archivo de configuración de copia de seguridad existente en el directorio del repositorio local. Reemplaza la ruta de acceso del comando por la ubicación del archivo guardado en el paso 2.

  ```
  $ cp PATH/TO/BACKUP/FROM/STEP/2 backup.config
  ```
  
  {% note %}

  **Nota:** Puedes elegir dónde restaurar el archivo de configuración de copia de seguridad después de la clonación. Para obtener más información sobre dónde se pueden encontrar los archivos de configuración, consulta [Introducción](https://github.com/github/backup-utils/blob/master/docs/getting-started.md) en la documentación del proyecto de {% data variables.product.prodname_enterprise_backup_utilities %}.

  {% endnote %}

1. Revisa el archivo en un editor de texto para confirmar que las rutas de acceso a directorios o scripts del archivo de configuración de copia de seguridad son correctas.
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-verify-upgrade %}
1. Elimina el antiguo directorio de GitHub Enterprise Server Backup Utilities del paso 1 (donde se encuentra la instalación del archivo comprimido).

## Programar una copia de seguridad

Puede programar copias de seguridad con una determinada frecuencia en el host de copia de seguridad utilizando el comando `cron(8)` o un servicio de programación mediante comando similar. La frecuencia de copias de seguridad configurada dictará el peor caso de Punto Objetivo de Recuperación (RPO) de tu plan de recuperación. Por ejemplo, si has programado que la copia de seguridad se ejecute todos los días a la medianoche, podrías perder hasta 24 horas de datos en un escenario de desastre. Recomendamos comenzar con un cronograma de copias de seguridad por hora, que garantice un peor caso máximo de una hora de pérdida de datos, si los datos del sitio principal se destruyen.

Si los intentos de copias de seguridad se superponen, el comando `ghe-backup` se detendrá con un mensaje de error que indicará la existencia de una copia de seguridad simultánea. Si esto ocurre, recomendamos que disminuyas la frecuencia de tus copias de seguridad programadas. Para obtener más información, consulta la sección sobre programar copias de seguridad del archivo [README de {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#scheduling-backups) en la documentación del proyecto de {% data variables.product.prodname_enterprise_backup_utilities %}.

## Restauración de una copia de seguridad

En el caso de una interrupción de red prolongada o de un evento catastrófico en el sitio principal, puede restablecer {% data variables.product.product_location %} proporcionando otro dispositivo para {% data variables.product.prodname_enterprise %} y realizando un restablecimiento desde el host de copias de seguridad. Debes agregar la clave SSH del host de copias de seguridad en el aparato objetivo {% data variables.product.prodname_enterprise %} como una clave SSH autorizada antes de restablecer un aparato.

{% note %}

**Nota:** Cuando realice restauraciones de copias de seguridad en {% data variables.product.product_location %}, se aplicarán las mismas reglas de compatibilidad de versión. Solo puedes restablecer datos de por lo mucho dos lanzamientos de características anteriores.

Por ejemplo, si haces una copia de seguridad de {% data variables.product.product_name %} 3.0.x, puedes restaurar la copia de seguridad en una instancia de {% data variables.product.product_name %} 3.2.x. No se pueden restaurar datos desde una copia de seguridad de {% data variables.product.product_name %} 2.22.x a una instancia que ejecute 3.2.x, ya que serían tres saltos entre versiones (de 2.22 a 3.0, a 3.1 y finalmente a 3.2). Primero necesitarías restablecer a una instancia que ejecute 3.1.x y luego actualizar a 3.2.x.

{% endnote %}

Para restaurar {% data variables.product.product_location %} desde la última instantánea correcta, use el comando `ghe-restore`.

{% note %}

**Nota:** Antes de restaurar una copia de seguridad, asegúrate de que:
- El modo de mantenimiento está habilitado en la instancia principal y se han completado todos los procesos activos. Para más información, vea "[Habilitación del modo de mantenimiento](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)".
- La replicación se ha detenido en todas las réplicas en configuraciones de alta disponibilidad. Para obtener más información, consulta el comando `ghe-repl-stop` en "[Acerca de la configuración de alta disponibilidad](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration#ghe-repl-stop)".
- Si {% data variables.product.product_location %} tiene habilitadas las {% data variables.product.prodname_actions %}, primero deberás configurar el proveedor de almacenamiento externo de {% data variables.product.prodname_actions %} en el dispositivo de repuesto. Para obtener más información, consulte "[Copia de seguridad y restauración de {% data variables.product.prodname_ghe_server %} con {% data variables.product.prodname_actions %} habilitado](/admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled)".

{% endnote %}

Al ejecutar el comando `ghe-restore`, deberías ver un resultado similar al siguiente:

```shell
$ ghe-restore -c 169.154.1.1
> Checking for leaked keys in the backup snapshot that is being restored ...
> * No leaked keys found
> Connect 169.154.1.1:122 OK (v2.9.0)

> WARNING: All data on GitHub Enterprise appliance 169.154.1.1 (v2.9.0)
>          will be overwritten with data from snapshot 20170329T150710.
> Please verify that this is the correct restore host before continuing.
> Type 'yes' to continue: <em>yes</em>

> Starting restore of 169.154.1.1:122 from snapshot 20170329T150710
# ...output truncated
> Completed restore of 169.154.1.1:122 from snapshot 20170329T150710
> Visit https://169.154.1.1/setup/settings to review appliance configuration.
```

{% ifversion ip-exception-list %} Opcionalmente, para validar la restauración, configura una lista de excepciones IP para permitir el acceso a una lista específica de direcciones IP. Para obtener más información, consulta "[Validación de cambios en el modo de mantenimiento mediante la lista de excepciones de IP](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list)".
{% endif %}

{% note %}

**Nota:** La configuración de red se excluye de la instantánea de copia de seguridad. Debes configurar manualmente la red en el aparato objetivo para el {% data variables.product.prodname_ghe_server %} como obligatoria para tu entorno.

{% endnote %}

Puede usar estas opciones adicionales con el comando `ghe-restore`:
- La marca `-c` sobrescribe los ajustes, el certificado y los datos de licencia en el host objetivo, incluso si este ya está configurado. Omite esta marca si estás configurando una instancia de preparación con fines de prueba y si quieres conservar la configuración existente en el objetivo. Para obtener más información, consulta la sección sobre el uso de comandos de copia de seguridad y restauración del archivo [README de {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#using-the-backup-and-restore-commands) en la documentación del proyecto de {% data variables.product.prodname_enterprise_backup_utilities %}.
- La marca `-s` le permite seleccionar una instantánea de copia de seguridad diferente.
