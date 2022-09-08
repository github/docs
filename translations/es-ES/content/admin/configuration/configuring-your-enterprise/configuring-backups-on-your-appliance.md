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
ms.openlocfilehash: 6a992c2861ce2c0de3b6d8672bf42f8818cda85a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332636'
---
## Acerca de {% data variables.product.prodname_enterprise_backup_utilities %}

{% data variables.product.prodname_enterprise_backup_utilities %} es un sistema de copias de seguridad que se instala en un host independiente, el cual realiza instantáneas de copias de seguridad de {% data variables.product.product_location %} en intervalos regulares a través de una conexión de red SSH segura. Puedes utilizar una instantánea para restablecer una instancia existente del {% data variables.product.prodname_ghe_server %} a su estado previo desde el host de copias de seguridad.

Solo se transferirán por la red y ocuparán espacio de almacenamiento físico adicional los datos que se hayan agregado después de esa última instantánea. Para minimizar el impacto en el rendimiento, las copias de seguridad se realizan en línea con la prioridad CPU/IO más baja. No necesitas programar una ventana de mantenimiento para realizar una copia de seguridad.

Para obtener información más detallada sobre las características, los requisitos y el uso avanzado, consulte el [archivo README de {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).

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

## Instalar {% data variables.product.prodname_enterprise_backup_utilities %}

{% note %}

**Nota:** Para garantizar que un dispositivo recuperado esté disponible de inmediato, realice copias de seguridad centradas en la instancia principal, incluso en una configuración de replicación geográfica.

{% endnote %}

1. Descargue la versión más reciente de [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils/releases) y extraiga el archivo con el comando `tar`.
  ```shell
  $ tar -xzvf /path/to/github-backup-utils-v<em>MAJOR.MINOR.PATCH</em>.tar.gz     
  ```
2. Copie el archivo `backup.config-example` incluido en `backup.config` y ábralo en un editor.
3. Establezca el valor `GHE_HOSTNAME` en la dirección IP o el nombre del host de su instancia principal de {% data variables.product.prodname_ghe_server %}.

  {% note %}

  **Nota:** Si su {% data variables.product.product_location %} se implementa como un clúster o en una configuración de alta disponibilidad utilizando un equilibrador de carga, el `GHE_HOSTNAME` puede ser el nombre de host del equilibrador de carga siempre y cuando permita acceso por SSH a {% data variables.product.product_location %} (por el puerto 122).

  {% endnote %}

4. Establezca el valor `GHE_DATA_DIR` para la ubicación del sistema de archivos en la que quiera almacenar las instantáneas de copias de seguridad.
5. Abra la página de configuración de la instancia principal en `https://HOSTNAME/setup/settings` y agregue la clave SSH del host de copia de seguridad a la lista de claves SSH autorizadas. Para obtener más información, consulte "[Acceso al shell administrativo (SSH)](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)".
6. Compruebe la conectividad SSH con {% data variables.product.product_location %} con el comando `ghe-host-check`.
  ```shell
  $ bin/ghe-host-check        
  ```         
  7. Para crear una copia de seguridad completa inicial, ejecute el comando `ghe-backup`.
  ```shell
  $ bin/ghe-backup        
  ```

Para obtener más información, consulte el [archivo README de {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).

## Programar una copia de seguridad

Puede programar copias de seguridad con una determinada frecuencia en el host de copia de seguridad utilizando el comando `cron(8)` o un servicio de programación mediante comando similar. La frecuencia de copias de seguridad configurada dictará el peor caso de Punto Objetivo de Recuperación (RPO) de tu plan de recuperación. Por ejemplo, si has programado que la copia de seguridad se ejecute todos los días a la medianoche, podrías perder hasta 24 horas de datos en un escenario de desastre. Recomendamos comenzar con un cronograma de copias de seguridad por hora, que garantice un peor caso máximo de una hora de pérdida de datos, si los datos del sitio principal se destruyen.

Si los intentos de copias de seguridad se superponen, el comando `ghe-backup` se detendrá con un mensaje de error que indicará la existencia de una copia de seguridad simultánea. Si esto ocurre, recomendamos que disminuyas la frecuencia de tus copias de seguridad programadas. Para obtener más información, consulte el [archivo README de {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#scheduling-backups).

## Restauración de una copia de seguridad

En el caso de una interrupción de red prolongada o de un evento catastrófico en el sitio principal, puede restablecer {% data variables.product.product_location %} proporcionando otro dispositivo para {% data variables.product.prodname_enterprise %} y realizando un restablecimiento desde el host de copias de seguridad. Debes agregar la clave SSH del host de copias de seguridad en el aparato objetivo {% data variables.product.prodname_enterprise %} como una clave SSH autorizada antes de restablecer un aparato.

{% ifversion ghes %} {% note %}

**Nota:** Si {% data variables.product.product_location %} tiene habilitadas las {% data variables.product.prodname_actions %}, primero deberá configurar el proveedor de almacenamiento externo de {% data variables.product.prodname_actions %} en el dispositivo de repuesto antes de ejecutar el comando `ghe-restore`. Para obtener más información, consulte "[Copia de seguridad y restauración de {% data variables.product.prodname_ghe_server %} con {% data variables.product.prodname_actions %} habilitado](/admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled)".

{% endnote %} {% endif %}

{% note %}

**Nota:** Cuando realice restauraciones de copias de seguridad en {% data variables.product.product_location %}, se aplicarán las mismas reglas de compatibilidad de versión. Solo puedes restablecer datos de por lo mucho dos lanzamientos de características anteriores.

Por ejemplo, si tomas un respaldo de GHES 3.0.x, puedes restablecerlo a la instancia GHES 3.2.x. Pero no puede restablecer datos desde una copia de seguridad de GHES 2.22.x en 3.2.x, ya que esto representaría tres saltos entre versiones (2.22 > 3.0 > 3.1 > 3.2). Primero necesitarías restablecer a una instancia 3.1.x y luego mejorar a una 3.2.x.

{% endnote %}

Para restaurar {% data variables.product.product_location %} desde la última instantánea correcta, use el comando `ghe-restore`. Debería mostrarse una salida similar a esta:

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
- La marca `-c` sobrescribe los ajustes, el certificado y los datos de licencia en el host objetivo, incluso si este ya está configurado. Omite esta marca si estás configurando una instancia de preparación con fines de prueba y si quieres conservar la configuración existente en el objetivo. Para obtener más información, consulte la sección "Uso de comandos de copia de seguridad y restauración" del [archivo README de {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#using-the-backup-and-restore-commands).
- La marca `-s` le permite seleccionar una instantánea de copia de seguridad diferente.
