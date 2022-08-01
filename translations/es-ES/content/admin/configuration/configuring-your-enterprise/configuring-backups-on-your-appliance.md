---
title: Configurar copias de seguridad en tu aparato
shortTitle: Configurar respaldos
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
---

## Acerca de {% data variables.product.prodname_enterprise_backup_utilities %}

{% data variables.product.prodname_enterprise_backup_utilities %} es un sistema de copias de seguridad que instalas en un host separado, el cual realiza instantáneas de copias de seguridad de {% data variables.product.product_location %} en intervalos regulares a través de una conexión de red SSH segura. Puedes utilizar una instantánea para restablecer una instancia existente del {% data variables.product.prodname_ghe_server %} a su estado previo desde el host de copias de seguridad.

Solo se transferirán por la red y ocuparán espacio de almacenamiento físico adicional los datos que se hayan agregado después de esa última instantánea. Para minimizar el impacto en el rendimiento, las copias de seguridad se realizan en línea con la prioridad CPU/IO más baja. No necesitas programar una ventana de mantenimiento para realizar una copia de seguridad.

Para obtener información más detallada sobre las funciones, los requisitos y el uso avanzado, consulta [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#readme).

## Prerrequisitos

Para utilizar {% data variables.product.prodname_enterprise_backup_utilities %}, debes tener un sistema de host Linux o Unix separado de {% data variables.product.product_location %}.

También puedes incorporar {% data variables.product.prodname_enterprise_backup_utilities %} en un entorno existente para almacenar los datos críticos de manera permanente y a largo plazo.

Recomendamos que exista una distancia geográfica entre el host de copias de seguridad y {% data variables.product.product_location %}. Esto asegura que las copias de seguridad estén disponibles para su recuperación en el caso de que ocurra un desastre significativo o una interrupción de red en el sitio principal.

Los requisitos de almacenamiento físico variarán en función del uso del disco del repositorio de Git y de los patrones de crecimiento esperados:

| Hardware           | Recomendación                                                    |
| ------------------ | ---------------------------------------------------------------- |
| **vCPU**           | 2                                                                |
| **Memoria**        | 2 GB                                                             |
| **Almacenamiento** | Cinco veces el almacenamiento asignado de la instancia principal |

Es posible que se requieran más recursos según su uso, como la actividad del usuario y las integraciones seleccionadas.

## Instalar {% data variables.product.prodname_enterprise_backup_utilities %}

{% note %}

**Nota:** Para asegurar que un aparato recuperado esté disponible de inmediato, realiza copias de seguridad apuntando a la instancia principal, incluso en una configuración de replicación geográfica.

{% endnote %}

1. Desgarga el último lanzamiento de [{% data variables.product.prodname_enterprise_backup_utilities %} ](https://github.com/github/backup-utils/releases) y extrae el archivo con el comando `tar`.
  ```shell
  $ tar -xzvf /path/to/github-backup-utils-v<em>MAJOR.MINOR.PATCH</em>.tar.gz     
  ```
2. Copia el archivo incluido `backup.config-example` en `backup.config` y ábrelo en un editor.
3. Configura el valor `GHE_HOSTNAME` al {% data variables.product.prodname_ghe_server %} primario del nombre del host de tu instancia o dirección IP.

  {% note %}

  **Nota:** Si tu {% data variables.product.product_location %} se despliega como un clúster o en una configuración de disponibilidad alta utilizando un balanceador de carga, el `GHE_HOSTNAME` puede ser el nombre de host del balanceador de carga siempre y cuando permita acceso por SSH a {% data variables.product.product_location %} (por el puerto 122).

  {% endnote %}

4. Configura el valor `GHE_DATA_DIR` en la ubicación del sistema de archivos donde deseas almacenar las instantáneas de copia de seguridad.
5. Abre la página de configuración de tu instancia primaria en `https://HOSTNAME/setup/settings` y agrega la clave SSH del host de copia de seguridad a la lista de claves SSH autorizadas. Para obtener más información, consulta [Acceder al shell administrativo (SSH)](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/).
6. Verifica la conectividad SSH con {% data variables.product.product_location %} con el comando `ghe-host-check`.
  ```shell
  $ bin/ghe-host-check        
  ```
  7. Para crear una copia de respaldo completa inicial, ejecuta el comando `ghe-backup`.
  ```shell
  $ bin/ghe-backup        
  ```

Para obtener más información sobre uso avanzado, consulta el archivo README en [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).

## Programar una copia de seguridad

Puedes programar copias de seguridad regulares en el host de copia de seguridad utilizando el comando `cron(8)` o un servicio de programación de comando similar. La frecuencia de copias de seguridad configurada dictará el peor caso de Punto Objetivo de Recuperación (RPO) de tu plan de recuperación. Por ejemplo, si has programado que la copia de seguridad se ejecute todos los días a la medianoche, podrías perder hasta 24 horas de datos en un escenario de desastre. Recomendamos comenzar con un cronograma de copias de seguridad por hora, que garantice un peor caso máximo de una hora de pérdida de datos, si los datos del sitio principal se destruyen.

Si los intentos de copias de seguridad se superponen, el comando `ghe-backup` se detendrá con un mensaje de error que indicará la existencia de una copia de seguridad simultánea. Si esto ocurre, recomendamos que disminuyas la frecuencia de tus copias de seguridad programadas. Para obtener más información, consulta la sección "Programar copias de seguridad" del archivo README en [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#scheduling-backups).

## Recuperar una copia de seguridad

En el caso de una interrupción de red prolongada o de un evento catastrófico en el sitio principal, puedes restablecer {% data variables.product.product_location %} proporcionando otro aparato para {% data variables.product.prodname_enterprise %} y haciendo un restablecimiento desde el host de copias de seguridad. Debes agregar la clave SSH del host de copias de seguridad en el aparato objetivo {% data variables.product.prodname_enterprise %} como una clave SSH autorizada antes de restablecer un aparato.

{% ifversion ghes %}
{% note %}

**Nota:** Si {% data variables.product.product_location %} tiene habilitadas las {% data variables.product.prodname_actions %}, primero deberás configurar el proveedor de almacenamiento externo de {% data variables.product.prodname_actions %} en el aplicativo de repuesto antes de ejecutar el comando `ghe-restore`. Para obtener más información, consulta la sección "[Respaldar y restablecer a {% data variables.product.prodname_ghe_server %} con las {% data variables.product.prodname_actions %} habilitadas](/admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled)".

{% endnote %}
{% endif %}

{% note %}

**Nota:** Cuando realizas restauraciones de respaldo hacia {% data variables.product.product_location %} aplicarán las mismas reglas de compatibilidad de versión. Solo puedes restablecer datos de por lo mucho dos lanzamientos de características anteriores.

Por ejemplo, si tomas un respaldo de GHES 3.0.x, puedes restablecerlo a la instancia GHES 3.2.x. Pero no puedes restablecer datos desde un respaldo de GHES 2.22.x hacia 3.2.x, ya que esto sería tres saltos entre versiones (2.22 > 3.0 > 3.1 > 3.2). Primero necesitarías restablecer a una instancia 3.1.x y luego mejorar a una 3.2.x.

{% endnote %}

Para restablecer {% data variables.product.product_location %} desde la última instantánea exitosa, usa el comando `ghe-restore`. Debes ver un resultado similar a este:

```shell
$ ghe-restore -c 169.154.1.1
> Comprobando claves filtradas en la instantánea de respaldo que se está restableciendo ...
> * No se encontraron claves filtradas
> Conectarse a 169.154.1.1:122 OK (v2.9.0)

> ADVERTENCIA: Todos los datos del aparato GitHub Enterprise 169.154.1.1 (v2.9.0)
>          se sobrescribirán con los datos de la instantánea 20170329T150710.
> Antes de continuar, verifica que sea el host de restauración correcto.
> Escribe 'yes' (sí) para continuar: <em>yes</em>

> Comenzando la restauración de 169.154.1.1:122 desde la instantánea 20170329T150710
# ...resultado truncado
> Restauración completa de 169.154.1.1:122 desde la instantánea 20170329T150710
> Visita https://169.154.1.1/setup/settings para revisar la configuración del aparato.
```

{% ifversion ip-exception-list %}
Opcionalmente, para validar la restauración, configura una lista de excepción de IP para permitir el acceso una lista de direcciones IP específicas. Para obtener más información, consulta la sección "[Validar los cambios en modo de mantenimiento utilizando la lista de excepción de IP](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list)".
{% endif %}

{% note %}

**Nota:** Los ajustes de red están excluidos de la instantánea de copias de seguridad. Debes configurar manualmente la red en el aparato objetivo para el {% data variables.product.prodname_ghe_server %} como obligatoria para tu entorno.

{% endnote %}

Puedes utilizar estas otras opciones con el comando `ghe-restore`:
- La marca `-c` sobrescribe los ajustes, el certificado y los datos de licencia en el host objetivo, incluso si ya está configurado. Omite esta marca si estás configurando una instancia de preparación con fines de prueba y si quieres conservar la configuración existente en el objetivo. Para obtener más información, consulta la sección "Utilizar los comandos de restablecimiento y respaldo" del [README de {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#using-the-backup-and-restore-commands).
- La marca `-s` te permite seleccionar otra instantánea de copias de seguridad.
