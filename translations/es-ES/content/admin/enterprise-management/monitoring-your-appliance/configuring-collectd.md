---
title: Configurar collectd
intro: '{% data variables.product.prodname_enterprise %} puede reunir datos con `collectd` y enviarlos a un servidor `collectd` externo. Entre otras métricas, reunimos un conjunto estándar de datos, como la utilización de la CPU, el consumo de memoria y de disco, el tráfico y los errores de la interfaz de red y la carga general de la VM.'
redirect_from:
  - /enterprise/admin/installation/configuring-collectd
  - /enterprise/admin/articles/configuring-collectd
  - /enterprise/admin/enterprise-management/configuring-collectd
  - /admin/enterprise-management/configuring-collectd
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
ms.openlocfilehash: f63eb940681be3131a470a7786e134550fdba152
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145120521'
---
## Configuración de un servidor externo de `collectd`

Si todavía no ha configurado un servidor externo de `collectd`, tendrá que hacerlo antes de habilitar el reenvío de `collectd` en {% data variables.product.product_location %}. El servidor `collectd` debe ejecutar la versión 5.x o posterior de `collectd`.

1. Inicie sesión en el servidor `collectd`.
2. Cree o edite el archivo de configuración `collectd` para cargar el complemento de red y complete las directivas del servidor y del puerto con los valores adecuados. En la mayoría de las distribuciones, se encuentra en `/etc/collectd/collectd.conf`

Un ejemplo de *collectd.conf* para ejecutar un servidor `collectd`:

    LoadPlugin network
    ...
    ...
    <Plugin network>
        Listen "0.0.0.0" "25826"
    </Plugin>

## Habilita el redireccionamiento collectd en {% data variables.product.prodname_enterprise %}

De manera predeterminada, el reenvío de `collectd` está deshabilitado en {% data variables.product.prodname_enterprise %}. Siga los pasos que se indican a continuación para habilitar y configurar el reenvío de `collectd`:

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
1. Debajo de la configuración de reenvío de registros, seleccione **Habilitar reenvío recopilado**.
1. En el campo **Dirección del servidor**, escriba la dirección del servidor `collectd` al que quiera reenviar estadísticas del dispositivo de {% data variables.product.prodname_enterprise %}.
1. En el campo **Puerto**, escriba el puerto que se usa para conectarse al servidor `collectd`. (Predeterminados en 25826)
1. En el menú desplegable **Configuración criptográfica**, seleccione el nivel de seguridad de las comunicaciones con el servidor `collectd`. (Ninguno, Paquetes firmados o Paquetes encriptados). {% data reusables.enterprise_management_console.save-settings %}

## Exportación de datos recopilados con `ghe-export-graphs`

La herramienta de línea de comandos `ghe-export-graphs` exportará los datos que `collectd` almacena en las bases de datos de RRD. Este comando convierte los datos en XML y los exporta a un único archivo tarball (`.tgz`).

Su uso principal es proporcionarle al equipo de {% data variables.contact.contact_ent_support %} los datos sobre el desempeño de una VM, sin la necesidad de descargar un paquete de soporte completo. No se debe incluir en tus exportaciones de copias de seguridad regulares y no existe una contraparte de importación. Si te contactas con {% data variables.contact.contact_ent_support %}, puede que te solicitemos estos datos para ayudarte a solucionar los problemas.

### Uso

```shell
ssh -p 122 admin@[hostname] -- 'ghe-export-graphs' && scp -P 122 admin@[hostname]:~/graphs.tar.gz .
```

## Solución de problemas

### El servidor collectd central no recibe datos

{% data variables.product.prodname_enterprise %} se incluye con la versión 5.x de `collectd`. `collectd` 5.x no es compatible con versiones anteriores de la serie de versiones 4.x. El servidor `collectd` central debe ser al menos la versión 5.x para aceptar los datos enviados desde {% data variables.product.product_location %}.

Para obtener ayuda con más preguntas o problemas, contacta a {% data variables.contact.contact_ent_support %}.
