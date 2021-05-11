---
title: Configurar collectd
intro: '{% data variables.product.prodname_enterprise %} puede reunir datos con `collectd` y enviarlos a un servidor `collectd` externo. Entre otras métricas, reunimos un conjunto estándar de datos, como la utilización de la CPU, el consumo de memoria y de disco, el tráfico y los errores de la interfaz de red y la carga general de la VM.'
redirect_from:
  - /enterprise/admin/installation/configuring-collectd
  - /enterprise/admin/articles/configuring-collectd/
  - /enterprise/admin/enterprise-management/configuring-collectd
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Configura un servidor `collectd` externo

Si aún no has configurado un servidor `collectd` externo, tendrás que hacerlo antes de habilitar el redireccionamiento `collectd` en {% data variables.product.product_location_enterprise %}. Tu servidor `collectd` se debe ejecutar con una versión 5.x o posterior de `collectd`.

1. Inicia sesión en tu servidor `collectd`.
2. Crea o edita el archivo de configuración `collectd` para cargar el plugin de red y completar las directivas del servidor y del puerto con los valores adecuados. En la mayoría de las distribuciones, este se ubica en `/etc/collectd/collectd.conf`

Un ejemplo *collectd.conf* para ejecutar un servidor `collectd`:

    Red LoadPlugin
    ...
    ...
    <Red de plugin>
        Escucha "0.0.0.0" "25826"
    </Plugin>

### Habilita el redireccionamiento collectd en {% data variables.product.prodname_enterprise %}

Por defecto, el redireccionamiento `collectd` está inhabilitado en {% data variables.product.prodname_enterprise %}. Sigue los pasos que aparecen a continuación para habilitar y configurar el redireccionamiento `collectd`:

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. A continuación aparecen los ajustes de redireccionamiento, selecciona **Enable collectd forwarding** (Habilitar el redireccionamiento collectd).
1. En el campo **Server addres** (Dirección del servidor), escribe la dirección del servidor `collectd` al cual quisieras redirreccionar las estadísticas del aparato {% data variables.product.prodname_enterprise %}.
1. En el campo **Port** (Puerto), escribe el puerto utilizado para canectarse al servidor `collectd`. (Predeterminados en 25826)
1. En el menú desplegable **Cryptographic setup** (Configuración criptográfica), selecciona el nivel de seguridad de las comunicaciones con el servidor `collectd`. (Ninguno, paquetes firmados o paquetes encriptados).
{% data reusables.enterprise_management_console.save-settings %}

### Exportar los datos collectd con `ghe-export-graphs`

La herramienta de la línea de comando `ghe-export-graphs` exportará los datos que `collectd` almacene en las bases de datos RRD. Este comando convierte los datos a XML y los exporta a un tarball único (.tgz).

Su uso principal es proporcionarle al equipo de {% data variables.contact.contact_ent_support %} los datos sobre el desempeño de una VM, sin la necesidad de descargar un paquete de soporte completo. No se debe incluir en tus exportaciones de copias de seguridad regulares y no existe una contraparte de importación. Si te contactas con {% data variables.contact.contact_ent_support %}, puede que te solicitemos estos datos para ayudarte a solucionar los problemas.

#### Uso

```shell
ssh -p 122 admin@[hostname] -- 'ghe-export-graphs' && scp -P 122 admin@[hostname]:~/graphs.tar.gz .
```

### Solución de problemas

#### El servidor collectd central no recibe datos

{% data variables.product.prodname_enterprise %} viene con la versión 5.x de `collectd`. `collectd` 5.x no es retrocompatible con la serie de lanzamientos 4.x. Tu servidor `collectd` central debe tener al menos la versión 5.x para aceptar los datos que se envían desde {% data variables.product.product_location_enterprise %}.

Para obtener ayuda con más preguntas o problemas, contacta a {% data variables.contact.contact_ent_support %}.
