---
title: Utilidades de la ea de comandos
intro: '{% data variables.product.prodname_ghe_server %} incluye una gama de utilidades para ayudar a resolver problemas particulares o realizar tareas específicas.'
redirect_from:
  - /enterprise/admin/articles/viewing-all-services
  - /enterprise/admin/articles/command-line-utilities
  - /enterprise/admin/installation/command-line-utilities
  - /enterprise/admin/configuration/command-line-utilities
  - /admin/configuration/command-line-utilities
miniTocMaxHeadingLevel: 3
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - SSH
ms.openlocfilehash: 290a7eab73e10a88bae1e056e3f5b43d92274f8f
ms.sourcegitcommit: 5b16250eaa0806bf9497756cb27c54a80f688eec
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172809'
---
Puedes ejecutar estos comandos desde cualquier lugar en la VM después de iniciar sesión como usuario administrador de SSH. Para obtener más información, consulte"[Acceso al shell administrativo (SSH)](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)".

## General

### ghe-announce

Esta utilidad establece un mensaje emergente en la parte superior de cada página {% data variables.product.prodname_enterprise %}. Puedes usarlo para difundir un mensaje entre tus usuarios.

```shell
# Sets a message that's visible to everyone
$ ghe-announce -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message
```

{% ifversion ghe-announce-dismiss %} Para permitir que cada usuario descarte el anuncio por sí mismo, usa la marca `-d`.
```shell
# Sets a user-dismissible message that's visible to everyone
$ ghe-announce -d -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message, which was user dismissible: MESSAGE
```
{% endif %}

{% ifversion ghes %} También puede configurar un banner de anuncios utilizando la configuración de Enterprise en {% data variables.product.product_name %}. Para obtener más información, consulte "[Personalización de mensajes de usuario en su instancia](/enterprise/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)".
{% endif %}

{% ifversion ghes %}
<!--For earlier releases of GHES, see the previous service `ghe-resque-info`-->

### ghe-aqueduct

Esta utilidad muestra información sobre los trabajos en segundo plano, tanto activos como en cola. Proporciona las mismas cantidades de recuento de trabajos que la barra de estado del administrador que aparece en la parte superior de cada página.

Esta utilidad puede ayudarte a identificar si el servidor de Aqueduct está teniendo problemas para procesar jobs en segundo plano. Cualquiera de los siguientes casos puede indicar un problema con Aqueduct:

* Aumenta la cantidad de trabajos de segundo plano, pero los trabajos activos siguen siendo los mismos.
* Las fuentes de eventos no se actualizan.
* Los webhooks no se están activando.
* La interfaz web no se actualiza después de una subida de Git.

Si sospechas que Aqueduct está fallando, contacta a {% data variables.contact.contact_ent_support %} para obtener ayuda.

Con este comando, también puedes detener o reanudar los trabajos en cola.

```shell
$ ghe-aqueduct status
# lists queues and the number of currently queued jobs for all queues
$ ghe-aqueduct queue_depth --queue QUEUE
# lists the number of currently queued jobs for the specified queue
$ ghe-aqueduct pause --queue QUEUE
# pauses the specified queue
$ ghe-aqueduct resume --queue QUEUE
# resumes the specified queue
```
{% endif %}

### ghe-check-disk-usage

Esta utilidad busca en el disco los archivos grandes o los archivos que se han eliminado, pero siguen teniendo identificadores de archivo abiertos. Esto se debería ejecutar cuando intentes liberar espacio en la partición raíz.

```shell
ghe-check-disk-usage
```

### ghe-cleanup-caches

Esta utilidad borra una variedad de cachés que podrían ocupar espacio extra del disco en el volumen raíz. Si notas que el uso del espacio de disco del volumen raíz aumenta de manera considerable, sería buena idea ejecutar esta utilidad para ver si ayuda a reducir el uso general.

```shell
ghe-cleanup-caches
```
### ghe-cleanup-settings

Esta utilidad borra todas las configuraciones {% data variables.enterprise.management_console %} existentes.

{% tip %}

**Sugerencia**: {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

{% endtip %}

```shell
ghe-cleanup-settings
```

### ghe-config

Con esta utilidad, puedes recuperar y modificar los valores de configuración de {% data variables.location.product_location %}.

```shell
$ ghe-config core.github-hostname
# Gets the configuration value of `core.github-hostname`
$ ghe-config core.github-hostname URL
# Sets the configuration value of `core.github-hostname` to the specified URL
$ ghe-config -l
# Lists all the configuration values
```
Permite encontrar el identificador único universal (UUID) del nodo en `cluster.conf`.

```shell
  $ ghe-config HOSTNAME.uuid
```

{% ifversion ghes %} Permite excluir una lista de usuarios de los límites de frecuencia de la API de REST. Aún se aplicará un límite físico de 120,000 solicitudes a estos usuarios. Para obtener más información, consulte "[Recursos en la API de REST](/rest/overview/resources-in-the-rest-api#rate-limiting)".

``` shell
$ ghe-config app.github.rate-limiting-exempt-users "HUBOT GITHUB-ACTIONS"
# Exempts the users hubot and github-actions from rate limits
```
{% endif %}

### ghe-config-apply

Esta utilidad aplica configuraciones {% data variables.enterprise.management_console %}, vuelve a cargar servicios del sistema, prepara un dispositivo de almacenamiento y ejecuta cualquier migración de base de datos pendiente. Equivale a hacer clic en **Save settings** en la interfaz de usuario web de la {% data variables.enterprise.management_console %} o enviar una solicitud POST [al `/setup/api/configure` punto de conexión](/enterprise/user/rest/reference/enterprise-admin#management-console).

Probablemente, nunca la debas ejecutar en forma manual, pero está disponible si quieres automatizar el proceso de guardar tus configuraciones a través de SSH.

```shell
ghe-config-apply
```

### ghe-console

Esta utilidad abre la consola GitHub Rails en tu aparato {% data variables.product.prodname_enterprise %}. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-console
```

### ghe-dbconsole

Esta utilidad abre una sesión de base de datos de MySQL en tu aparato {% data variables.product.prodname_enterprise %}. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-dbconsole
```

### ghe-es-index-status
Esta utilidad genera un resumen de los índices de Elasticsearch en formato CSV.

Imprima un resumen de índice con una fila de encabezado en `STDOUT`:
```shell
$ ghe-es-index-status -do
> warning: parser/current is loading parser/ruby23, which recognizes
> warning: 2.3.3-compliant syntax, but you are running 2.3.4.
> warning: please see https://github.com/whitequark/parser#compatibility-with-ruby-mri.
> Name,Primary,Searchable,Writable,UpToDate,RepairProgress,Version
> code-search-1,true,true,true,true,100.0,72e27df7c631b45e026b42bfef059328fa040e17
> commits-5,true,true,true,true,100.0,7ed28813100c47813ef654c0ee2bb9abf21ab744
> gists-4,true,true,true,true,100.0,cf8e7d04fcf2564c902e2873c424a279cc41079d
> issues-4,false,false,false,true,100.0,d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> issues-5,true,true,true,true,100.0,d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> projects-2,true,true,true,true,100.0,c5cac1c4b3c66d42e609d088d174dbc3dd44469a
> pull-requests-6,true,true,true,true,100.0,6a466ad6b896a3499509990979bf9a18d7d41de3
> repos-6,true,true,true,true,100.0,6c8b5fbba0fc1e409558db411d05e092c1387082
> users-5,true,true,true,true,100.0,38984875552bb826c9ec42999f409cb2e95556eb
> wikis-4,true,true,true,true,100.0,2613dec44bd14e14577803ac1f9e4b7e07a7c234
```

Imprima un resumen de índice y canalice los resultados hacia `column` para mejorar la legibilidad:

```shell
$ ghe-es-index-status -do | column -ts,
> warning: parser/current is loading parser/ruby23, which recognizes
> warning: 2.3.3-compliant syntax, but you are running 2.3.4.
> warning: please see https://github.com/whitequark/parser#compatibility-with-ruby-mri.
> Name             Primary  Searchable  Writable  UpToDate  RepairProgress  Version
> code-search-1    true     true        true      true      100.0           72e27df7c631b45e026b42bfef059328fa040e17
> commits-5        true     true        true      true      100.0           7ed28813100c47813ef654c0ee2bb9abf21ab744
> gists-4          true     true        true      true      100.0           cf8e7d04fcf2564c902e2873c424a279cc41079d
> issues-4         false    false       false     true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> issues-5         true     true        true      true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> projects-2       true     true        true      true      100.0           c5cac1c4b3c66d42e609d088d174dbc3dd44469a
> pull-requests-6  true     true        true      true      100.0           6a466ad6b896a3499509990979bf9a18d7d41de3
> repos-6          true     true        true      true      100.0           6c8b5fbba0fc1e409558db411d05e092c1387082
> users-5          true     true        true      true      100.0           38984875552bb826c9ec42999f409cb2e95556eb
> wikis-4          true     true        true      true      100.0           2613dec44bd14e14577803ac1f9e4b7e07a7c234
```

### ghe-legacy-github-services-report

Esta utilidad enumera los repositorios de tu aparato que usan Servicios {% data variables.product.prodname_dotcom %}, un método de integración que se interrumpirá el 1 de octubre de 2018. Los usuarios de tu aparato pueden tener configurados servicios {% data variables.product.prodname_dotcom %} para crear notificaciones de subidas a determinados repositorios. Para obtener más información, consulte "[Anuncio del desuso de {% data variables.product.prodname_dotcom %} Services](https://developer.github.com/changes/2018-04-25-github-services-deprecation/)" en {% data variables.product.prodname_blog %} o "[Reemplazar {% data variables.product.prodname_dotcom %} Services](/developers/overview/replacing-github-services)". Para obtener más información acerca de este comando o para conocer otras opciones, use la marca `-h`.

```shell
ghe-legacy-github-services-report

```

### ghe-logs-tail

Esta utilidad te permite hacer un registro final de todos los archivos de registro relevantes desde tu instalación. Puedes aprobar opciones para limitar los registros a conjuntos específicos. Utiliza la marca -h para más opciones.

```shell
ghe-logs-tail
```

### ghe-maintenance

Esta utilidad te permite controlar el estado del modo de mantenimiento de la instalación. Está diseñada para que la use principalmente la {% data variables.enterprise.management_console %} en segundo plano, pero también se puede usar directamente. Para más información, vea "[Habilitación y programación del modo de mantenimiento](/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

```shell
ghe-maintenance -h
```

### ghe-motd

Esta utilidad vuelve a mostrar el mensaje del día (MOTD) en el que los administradores ven cuando se accede a la isntancia a través del shell administrativo. El resultado contiene un resumen del estado de la instancia.

```shell
ghe-motd
```

### ghe-nwo

Esta utilidad genera un nombre y propietario de repositorio en función del Id. del repositorio.  

```shell
ghe-nwo REPOSITORY_ID
```

### ghe-org-admin-promote

Usa este comando para otorgarles privilegios de propietario de la organización a los usuarios con privilegios de administrador del sitio sobre el aparato o para otorgarle privilegios de propietario de la organización a cualquier usuario único de una organización única. Debes especificar un usuario o una organización. El comando `ghe-org-admin-promote` siempre solicita confirmación antes de ejecutarse a menos que use la marca `-y` para omitir la confirmación.

Puedes usar las siguientes opciones con la utilidad:

- La marca `-u` especifica un nombre de usuario. Usa esta marca para otorgarle privilegios de propietario de la organización a un usuario específico. Omita la marca `-u` para promover todos los administradores del sitio a la organización especificada.
- La marca `-o` especifica una organización. Usa esta marca para otorgar privilegios de propietario en una organización específica. Omita la marca `-o` para otorgarle permisos de propietario en todas las organizaciones al administrador del sitio especificado.
- La marca `-a` otorga privilegios de propietario en todas las organizaciones a todos los administradores del sitio.
- La marca `-y` omite la confirmación manual.

Esta utilidad no puede promover una cuenta de usuario que no sea administrador del sitio a propietario de todas las organizaciones. Puede promover una cuenta de usuario normal a administrador del sitio con [ghe-user-promote](#ghe-user-promote).

Otorga privilegios de propietario de organización a un administrador de sitio específico en una organización específica

```shell
ghe-org-admin-promote -u USERNAME -o ORGANIZATION
```

Otorga privilegios de propietario de la organización en todas las organizaciones a un administrador del sitio específico

```shell
ghe-org-admin-promote -u USERNAME
```

Otorga privilegios de propietario de la organización en una organización específica a todos los administradores del sitio

```shell
ghe-org-admin-promote -o ORGANIZATION
```

Otorga privilegios de propietario de la organización en todas las organizaciones a todos los administradores del sitio

```shell
ghe-org-admin-promote -a
```

### ghe-reactivate-admin-login

Usa este comando para desbloquear inmediatamente la {% data variables.enterprise.management_console %} después de {% ifversion enterprise-authentication-rate-limits %}un bloqueo de la cuenta. A fin de configurar directivas de autenticación para {% data variables.location.product_location %}, consulta "[Configuración de límites de frecuencia de directivas de autenticación](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-authentication-policy-rate-limits)".{% else %}10 intentos de inicio de sesión erróneos en un intervalo de 10 minutos.{% endif %}

```shell
$ ghe-reactivate-admin-login
```


### ghe-saml-mapping-csv

Esta utilidad puede ayudar a mapear los registros de SAML.

Para crear un archivo CSV que contenga todo el mapeo de SAML para tus usuarios de {% data variables.product.product_name %}:
```shell
$ ghe-saml-mapping-csv -d
```

Para realizar una simulación de actualización de mapeo de SAML con nuevos valores:
```shell
$ ghe-saml-mapping-csv -u -n -f /path/to/file
```

Para actualizar el mapeo de SAML con nuevos valores:
```shell
$ ghe-saml-mapping-csv -u -f /path/to/file
```

### ghe-service-list

Esta utilidad enumera todos los servicios que se han iniciado o detenido (en ejecución o en espera) en tu aparato.

```shell
$ ghe-service-list
{% ifversion viewscreen-and-notebooks %}
active
  - alambic
  - alive
  - aqueduct-lite
  - authzd
  - babeld
  - codeload
  - consul, process 17114
  - consul-template, process 19493
  - driftwood
  - elasticsearch
  - enterprise-manage-unicorn, process 9359
  - ghe-user-disk, process 2545
  - git-daemon
  - github-env
  - github-gitauth
  - github-resqued
  - github-stream-processors
  - github-timerd
  - github-unicorn
  - gitrpcd
  - governor
  - gpgverify
  - grafana-server, process 19314
  - graphite-web, process 20189
  - hookshot-go
  - kafka-lite
  - kredz
  - lfs-server
  - mail-replies
  - memcached
  - minio
  - mysql
  - nginx
  - nomad, process 19562
  - pages
  - postfix
  - redis
  - spokesd
  - spokes-sweeper
  - svnbridge
  - token-scanning-api
  - token-scanning-backfill-worker
  - token-scanning-hydro-consumer
  - token-scanning-incremental-worker
  - token-scanning-udp-backfill-worker
  - treelights
  - turboscan
  - viewscreen

inactive
  - wireguard
{% else %}
start/running
  - github-resqued, process 12711
  - github-unicorn, process 12726
  - github-gitauth, process 12743
  - git-daemon, process 12755
  - babeld, process 12771
  - github-svn-proxy, process 12802
  - gist-unicorn, process 12832
  - gist-resqued, process 12881
  - render-unicorn, process 12939
  - hookshot-unicorn, process 13076
  - nodeload2, process 13192
  - slumlord-unicorn, process 13304
  - ghe-storage, process 2012
  - enterprise-manage-unicorn, process 2024
  - enterprise-manage-resque, process 2053
stop/waiting
  - ghe-replica-mode
  {% endif %}
```

### ghe-set-password

Con `ghe-set-password`, puede establecer una nueva contraseña para autenticarse en la [{% data variables.enterprise.management_console %}](/enterprise/admin/guides/installation/accessing-the-management-console).

```shell
ghe-set-password <new_password>
```

### ghe-setup-network

Esta utilidad permite configurar la interfaz de red principal.

Para entrar en el modo visual, que te guiará a través de la configuración de la red:

```shell
$ ghe-setup-network -v
```

Utiliza la marca -h para más opciones.

### ghe-ssh-check-host-keys

Esta utilidad compara las claves del host de SSH existentes con la lista de claves del host de SHH filtradas conocidas.

```shell
$ ghe-ssh-check-host-keys
```

Si se encuentra una clave de host filtrada, se cierra la utilidad con el estado `1` y un mensaje:
```shell
> One or more of your SSH host keys were found in the blacklist.
> Please reset your host keys using ghe-ssh-roll-host-keys.
```

Si no se encuentra ninguna clave de host filtrada, se cierra la utilidad con el estado `0` y un mensaje:
```shell
> The SSH host keys were not found in the SSH host key blacklist.
> No additional steps are needed/recommended at this time.
```

### ghe-ssh-roll-host-keys

Esta utilidad rota las claves del host de SSH y las reemplaza con claves que se generan nuevas.

```shell
$ sudo ghe-ssh-roll-host-keys
Proceed with rolling SSH host keys? This will delete the
existing keys in /etc/ssh/ssh_host_* and generate new ones. [y/N]

# Press 'Y' to confirm deleting, or use the -y switch to bypass this prompt

> SSH host keys have successfully been rolled.
```

### ghe-ssh-weak-fingerprints

Esta utilidad genera un informe de claves de SSH débiles conocidas que están almacenadas en el aparato {% data variables.product.prodname_enterprise %}. Opcionalmente, puedes revocar las claves de usuario como acción masiva. La utilidad le informará de las claves débiles del sistema, que deberá revocar manualmente en la [{% data variables.enterprise.management_console %}](/enterprise/admin/guides/installation/accessing-the-management-console).

```shell
# Print a report of weak user and system SSH keys
$ ghe-ssh-weak-fingerprints

# Revoke all weak user keys
$ ghe-ssh-weak-fingerprints --revoke
```

### ghe-ssl-acme

Esta utilidad te permite instalar un certificado de Let's Encrypt en tu aparato {% data variables.product.prodname_enterprise %}. Para obtener más información, consulte "[Configuración de TLS](/enterprise/admin/guides/installation/configuring-tls)".

Puede usar la marca `-x` para quitar la configuración de ACME.

```shell
ghe-ssl-acme -e
```

### ghe-ssl-ca-certificate-install

Esta utilidad te termine instalar un certificado CA de raíz personalizado en tu servidor {% data variables.product.prodname_enterprise %}. El certificado debe tener un formato PEM. Además, si el proveedor de certificados incluye varios certificados de CA en un solo archivo, debe separarlos en archivos individuales que, a continuación, debe trasladar a `ghe-ssl-ca-certificate-install` de uno en uno.

Ejecuta esta utilidad para agregar una cadena de certificación para la verificación de firma de confirmación S/MIME. Para obtener más información, consulte "[Acerca de la comprobación de firmas de confirmación](/enterprise/user/articles/about-commit-signature-verification/)".

Ejecuta esta utilidad cuando {% data variables.location.product_location %} no pueda conectarse con otro servidor porque el segundo está usando un certificado SSL autofirmado o un certificado SSL para el cual no proporciona el conjunto de CA necesario. Una manera de confirmarlo es ejecutar `openssl s_client -connect host:port -verify 0 -CApath /etc/ssl/certs` desde {% data variables.location.product_location %}. Si se puede comprobar el certificado SSL del servidor remoto, `SSL-Session` debe tener un código de retorno de 0, como se muestra a continuación.

```
SSL-Session:
    Protocol  : TLSv1
    Cipher    : AES128-SHA
    Session-ID: C794EBCC3CBC10F747C9AFC029C03C1048FC99CFC34D13D7444E0F267C58DF4C
    Session-ID-ctx:
    Master-Key: 02A7C47CFD6EEC87D3C710E9DD87390E04EF82DDD7514AE03127D5DC1945FC0CAEFB5395791AEA598667EFA61B9EA8C5
    Key-Arg   : None
    Start Time: 1394581597
    Timeout   : 300 (sec)
    Verify return code: 0 (ok)
```

Si, por otro lado, *no* se puede comprobar el certificado SSL del servidor remoto, `SSL-Session` debe tener un código de retorno distinto de cero:

```
SSL-Session:
    Protocol  : TLSv1
    Cipher    : AES128-SHA
    Session-ID: 82CB288051A6DB66094C50A69CF1292AEE7E54C6B01B659B98AB336F8C33863E
    Session-ID-ctx:
    Master-Key: 01B025B2F764043A27919A8D1355AAECD8844FF0831B1D664042334790574A6F4025BAB085D4ED71D71AAB3091B849E5
    Key-Arg   : None
    Start Time: 1394581782
    Timeout   : 300 (sec)
    Verify return code: 27 (certificate not trusted)
```

Puedes usar estas opciones adicionales con la utilidad:
- La marca `-r` le permite desinstalar un certificado de CA.
- La marca `-h` muestra más información de uso.

```shell
ghe-ssl-ca-certificate-install -c CERTIFICATE_PATH
```

### ghe-ssl-certificate-setup

Esta utilidad te permite actualizar un certificado SSL para {% data variables.location.product_location %}. 

Para obtener más información acerca de este comando o para conocer otras opciones, use la marca `-h`.

```shell
ghe-ssl-certificate-setup
```

### ghe-ssl-generate-csr

Esta utilidad te permite generar una clave privada y una solicitud de firma de certificado (CSR), que puedes compartir con una autoridad de certificación comercial o privada para obtener un certificado válido para utilizar con tu instancia. Para obtener más información, consulte "[Configuración de TLS](/enterprise/admin/guides/installation/configuring-tls)".

Para obtener más información acerca de este comando o para conocer otras opciones, use la marca `-h`.

```shell
ghe-ssl-generate-csr
```

### ghe-storage-extend

Algunas plataformas exigen este script para ampliar el volumen de usuarios. Para obtener más información, consulte "[Aumento de la capacidad de almacenamiento](/enterprise/admin/guides/installation/increasing-storage-capacity/)".

```shell
$ ghe-storage-extend
```

### ghe-version

Esta utilidad imprime la versión, la plataforma y la compilación de {% data variables.location.product_location %}.

```shell
$ ghe-version
```

### ghe-webhook-logs

Esta utilidad genera registros de entregas de webhooks para que los administradores los revisen e identifiquen cualquier problema.

```shell
ghe-webhook-logs
```

Para mostrar todas las entregas de enlaces con errores del último día: {% ifversion ghes %}
```shell
ghe-webhook-logs -f -a YYYY-MM-DD
```

El formato de fecha debe ser `YYYY-MM-DD`, `YYYY-MM-DD HH:MM:SS` o `YYYY-MM-DD HH:MM:SS (+/-) HH:M`.
{% else %}
```shell
ghe-webhook-logs -f -a YYYYMMDD
```
{% endif %}

Para mostrar todos los resultados, carga útil y excepciones del enlace para la entrega: {% ifversion ghes %}
```shell
ghe-webhook-logs -g DELIVERY_GUID
```
{% else %}
```shell
ghe-webhook-logs -g DELIVERY_GUID -v
```
{% endif %}

## Agrupación en clústeres

### estado ghe-dpages

Verifica la salud de tus nodos y servicios en un despliegue de clúster de {% data variables.product.prodname_ghe_server %}.

```shell
$ ghe-cluster-status
```

### ghe-cluster-support-bundle

Esta utilidad crea un tarball de paquetes de soporte que contiene registros importantes de cada nodo, tanto en la configuración de Replicación geográfica como de Agrupación.

De manera predeterminada, el comando crea el tarball en */tmp*, pero también puede `cat` el tarball en `STDOUT` para facilitar la transmisión mediante SSH. Esto es útil en caso de que la interfaz de usuario web no responda o no funcione la descarga de un paquete de soporte desde *setup/support*. Debe usar este comando para generar un paquete de tipo *extended* que contenga registros antiguos. También puedes usar este comando para cargar el paquete de soporte de agrupación directamente para {% data variables.product.prodname_enterprise %} recibir asistencia.

Para crear un paquete estándar:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -o' > cluster-support-bundle.tgz
```

Para crear un paquete extendido:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -x -o' > cluster-support-bundle.tgz
```

Para enviar un paquete a {% data variables.contact.github_support %}:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -u'
```

Para mandar un paquete a {% data variables.contact.github_support %} y asociarlo con un ticket:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -t TICKET_ID'
```

{% ifversion ghes %}
### ghe-cluster-failover

Recuperación de fallos de los nodos de clúster activos a los pasivos. Para obtener más información, consulte "[Iniciar una conmutación por error en el clúster de réplica](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)".

```shell
ghe-cluster-failover
```
{% endif %}

### ghe-dpages

Esta utilidad le permite gestionar el servidor {% data variables.product.prodname_pages %} distribuido.

```shell
ghe-dpages
```

Para mostrar un resumen de la ubicación y salud del repositorio:
```shell
ghe-dpages status
```

Para evacuar un servicio de almacenamiento {% data variables.product.prodname_pages %} antes de evacuar un nodo de agrupación:
```shell
ghe-dpages evacuate pages-server-UUID
```

### ghe-spokes

Esta utilidad te permite administrar las tres copias de cada repositorio en los servidores de git distribuidos.

```shell
ghe-spokes
```

Para mostrar un resumen de la ubicación y salud del repositorio:

```shell
ghe-spokes status
```

Para mostrar los servidores en donde el repositorio se encuentra almacenado:

```shell
ghe-spokes route
```

Para evacuar los servicios de almacenamiento en un nodo de la agrupación:

```shell
ghe-spokes server evacuate git-server-UUID
```

### ghe-storage

Esta utilidad te permite evacuar todos los servicios de almacenamiento antes de evacuar un nodo de agrupación.

```shell
ghe-storage evacuate storage-server-UUID
```

## Git

### ghe-btop

Interfaz similar a `top` para las operaciones actuales de Git.

```shell
ghe-btop [ <port number> | --help | --usage ]
```

#### ghe-governor

Esta utilidad te ayuda a analizar el tráfico de Git. Consulte los archivos de datos de _Governor_ ubicados en `/data/user/gitmon`. {% data variables.product.company_short %} retiene una hora de datos por archivo que se retiene durante dos semanas. Para obtener más información, consulta [Análisis del tráfico de Git mediante Governor](https://github.community/t/analyzing-git-traffic-using-governor/13516) en {% data variables.product.prodname_github_community %}.

```bash
ghe-governor <subcommand> <column> [options]
```

```
ghe-governor -h
Usage: ghe-governor [-h] <subcommand> args

OPTIONS:
  -h | --help        Show this message.

Valid subcommands are:
  aggregate              Find the top (n) groups of queries for a grouping function and metric
  health                 Summarize all recent activity on one or more servers
  top                    Find the top (n) queries for a given metric
  dump                   Dump individual operations
  test-quotas            Check quota information

Try ghe-governor <subcommand> --help for more information on the arguments each subcommand takes.
```

### ghe-repo

Esta utilidad le permite cambiar a un directorio del repositorio y abrir un shell interactivo como usuario de `git`. Puede realizar la inspección o el mantenimiento manuales de un repositorio con comandos como `git-*` o `git-nw-*`.

```shell
ghe-repo USERNAME/REPONAME
```

### ghe-repo-gc

Esta utilidad reempaqueta de forma manual una red de repositorios para optimizar el almacenamiento de paquetes. Si tienes un repositorio grande, ejecutar este comando puede ayudar a reducir su tamaño general. {% data variables.product.prodname_enterprise %} ejecuta en forma automática este comando durante toda tu interacción con una red de repositorios.

Puede agregar el argumento opcional `--prune` para quitar objetos inaccesibles de Git a los que no se hace referencia desde ninguna rama, etiqueta o cualquier otra referencia. Esto es especialmente útil para eliminar al instante [información confidencial borrada previamente](/enterprise/user/articles/remove-sensitive-data/).

{% warning %}

**Advertencia**: Antes de usar el argumento `--prune` para quitar objetos Git inalcanzables, coloca {% data variables.location.product_location %} en modo de mantenimiento o asegúrate de que todos los repositorios de la misma red de repositorios están bloqueados. Para más información, vea "[Habilitación y programación del modo de mantenimiento](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)".

{% endwarning %}

```shell
ghe-repo-gc USERNAME/REPONAME
```

## {% data variables.product.prodname_actions %}

### ghe-actions-check

Esta utilidad verifica que todos los servicios para {% data variables.product.prodname_actions %} estén saludables. Para obtener más información, consulte "[Introducción a {% data variables.product.prodname_actions %} para {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)" y "[Solución de problemas de {% data variables.product.prodname_actions %} para su empresa](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise)".

```shell
ghe-actions-check
```

### ghe-actions-precheck

Esta utilidad prueba la configuración de almacenamiento de blobs para las {% data variables.product.prodname_actions %} en {% data variables.location.product_location %}. Puedes utilizar la utilidad para verificar tu configuración de almacenamiento antes de habilitar las {% data variables.product.prodname_actions %} para tu instancia.

Para obtener más información sobre la configuración de {% data variables.product.prodname_actions %}, consulte "[Introducción a {% data variables.product.prodname_actions %} para {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)".

```shell
ghe-actions-precheck -p [PROVIDER] -cs ["CONNECTION-STRING"]
```

Si tu sistema de almacenamiento se configuró correctamente, verás la siguiente salida.

```
All Storage tests passed
```

## Importación y exportación

### ghe-migrator

`ghe-migrator` es una herramienta de alta fidelidad que le permite migrar de una instancia de GitHub a otra. Puedes consolidar tus instancias o mover tu organización, usuarios, equipos y repositorios desde GitHub.com a {% data variables.product.prodname_enterprise %}.

Para obtener más información, consulte nuestras guías sobre [la migración de datos en su empresa y desde su empresa](/enterprise/admin/user-management/migrating-data-to-and-from-your-enterprise/).

### git-import-detect

Con una URL, detecta qué tipo de sistema de administración de control de fuente hay en el otro extremo. Durante una importación manual, probablemente ya lo sepas, pero puede ser muy útil en scripts automáticos.
```shell
git-import-detect
```

### git-import-hg-raw

Esta utilidad importa un repositorio de Mercurial a este repositorio de Git. Para obtener más información, consulte "[Importación de datos de sistemas de control de versiones de terceros](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)".
```shell
git-import-hg-raw
```

### git-import-svn-raw

Esta utilidad importa los datos del archivo y el historial de Subversion en una rama de Git. Es una copia exacta del árbol, que ignora cualquier distinción de tronco o rama. Para obtener más información, consulte "[Importación de datos de sistemas de control de versiones de terceros](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)".
```shell
git-import-svn-raw
```

### git-import-tfs-raw

Esta utilidad importa desde el Control de Versiones de Team Foundation (TFVC). Para obtener más información, consulte "[Importación de datos de sistemas de control de versiones de terceros](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)".
```shell
git-import-tfs-raw
```

### git-import-rewrite

Esta utilidad reescribe el repositorio importado. Esto te proporciona una oportunidad para renombrar a los autores y, para Subversion y TFVC, produce ramas de Git que se basan en carpetas. Para obtener más información, consulte "[Importación de datos de sistemas de control de versiones de terceros](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)".
```shell
git-import-rewrite
```

{% ifversion ghes > 3.3 %}

## Seguridad

### ghe-find-insecure-git-operations

Esta utilidad busca los registros de la instancia e identifica las operaciones de Git a través de SSH que usan algoritmos no seguros o funciones hash, como los cifrados DSA, RSA-SHA-1, HMAC-SHA-1 y CBC. Puedes usar la salida para admitir la transición de cada cliente a una conexión SSH más segura. Para obtener más información, consulta [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server){% ifversion ghes < 3.6 %}. {% elsif ghes > 3.5 %} y "[Configuración de conexiones SSH a la instancia](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance)".{% endif %}

```shell
ghe-find-insecure-git-operations
```

{% endif %}

## Soporte técnico

### ghe-diagnostics

Esta utilidad realiza múltiples verificaciones y reúne información acerca de tu instalación que puedes enviar para recibir asistencia para diagnosticar los problemas que tienes.

Actualmente, el resultado de esta utilidad es similar a descargar la información de diagnóstico en la {% data variables.enterprise.management_console %}, pero con el tiempo se pueden agregar otras mejoras que no están disponibles en la UI web. Para obtener más información, consulte "[Creación y uso compartido de archivos de diagnóstico](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-diagnostic-files)".

```shell
ghe-diagnostics
```

### ghe-support-bundle

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %} Esta utilidad crea un tarball de paquete compatible que contiene registros importantes para la instancia.

De manera predeterminada, el comando crea el tarball en */tmp*, pero también puede `cat` el tarball en `STDOUT` para facilitar la transmisión mediante SSH. Esto es útil en caso de que la interfaz de usuario web no responda o no funcione la descarga de un paquete de soporte desde *setup/support*. Debe usar este comando para generar un paquete de tipo *extended* que contenga registros antiguos. También puedes usar este comando para cargar el paquete de soporte directamente para recibir asistencia {% data variables.product.prodname_enterprise %}.

Para crear un paquete estándar:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o' > support-bundle.tgz
```

Para crear un paquete extendido:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -x -o' > support-bundle.tgz
```

Para enviar un paquete a {% data variables.contact.github_support %}:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -u'
```

Para mandar un paquete a {% data variables.contact.github_support %} y asociarlo con un ticket:

```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -t TICKET_ID'
```

### ghe-support-upload

Esta utilidad envía información desde tu aparato para recibir asistencia {% data variables.product.prodname_enterprise %}. Puede especificar un archivo local o proporcionar un flujo de datos de hasta 100 MB desde `STDIN`. Opcionalmente, los datos cargados se pueden asociar con un ticket de asistencia.

Para enviar un archivo a {% data variables.contact.github_support %} y asociarlo con un ticket:
```shell
ghe-support-upload -f FILE_PATH -t TICKET_ID
```

Para cargar datos desde `STDIN` y asociar los datos con un vale:
```shell
ghe-repl-status -vv | ghe-support-upload -t TICKET_ID -d "Verbose Replication Status"
```

En este ejemplo, `ghe-repl-status -vv` envía información de estado detallada desde un dispositivo de réplica. Debe reemplazar `ghe-repl-status -vv` por los datos específicos que desea transmitir a `STDIN` y `Verbose Replication Status` con una breve descripción de los datos. {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

## Actualizar {% data variables.product.prodname_ghe_server %}

### ghe-upgrade

Esta utilidad instala o verifica un paquete actualizado. También puedes usar esta utilidad para revertir un lanzamiento de patch si falla o se interrumpe una actualización. Para obtener más información, consulte "[Actualización de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)".

Para verificar un paquete de mejora:
```shell
ghe-upgrade --verify UPGRADE-PACKAGE-FILENAME
```

Para instalar un paquete de mejora:
```shell
ghe-upgrade UPGRADE-PACKAGE-FILENAME
```

{% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

### ghe-upgrade-scheduler

Esta utilidad administra la instalación programada de paquetes de actualización. Puedes mostrar, crear nuevas o eliminar las actualizaciones programadas. Debes crear cronogramas usando expresiones cron. Para obtener más información, consulte "[Entrada de Wikipedia con Cron](https://en.wikipedia.org/wiki/Cron#Overview)".

La utilidad `ghe-upgrade-scheduler` es más adecuada para programar actualizaciones de revisión en caliente, que no requieren el modo de mantenimiento ni un reinicio en la mayoría de los casos. Esta utilidad no es práctica para las actualizaciones de paquetes enteros, que requieren que un administrador establezca manualmente el modo de mantenimiento, reinicie la instancia y anule el modo de mantenimiento. Para obtener más información sobre los diferentes tipos de actualizaciones, consulta "[Actualización de {% data variables.product.product_name %}](/admin/enterprise-management/upgrading-github-enterprise-server#upgrading-with-an-upgrade-package)".

Para programar una nueva instalación para un paquete:
```shell
$ ghe-upgrade-scheduler -c "0 2 15 12 *" UPGRADE-PACKAGE-FILENAME
```

Para mostrar las instalaciones programadas para un paquete:
```shell
$ ghe-upgrade-scheduler -s UPGRADE PACKAGE FILENAME
> 0 2 15 12 * /usr/local/bin/ghe-upgrade -y -s UPGRADE-PACKAGE-FILENAME > /data/user/common/UPGRADE-PACKAGE-FILENAME.log 2>&1
```

Para eliminar las instalaciones programadas para un paquete:
```shell
$ ghe-upgrade-scheduler -r UPGRADE PACKAGE FILENAME
```

### ghe-update-check

Esta utilidad buscará si hay disponible un nuevo lanzamiento de patch de {% data variables.product.prodname_enterprise %}. Si lo hay, y si hay espacio disponible en tu instancia, descargará el paquete. De manera predeterminada, se guarda en */var/lib/ghe-updates*. A continuación, un administrador puede [realizar la actualización](/enterprise/admin/guides/installation/updating-the-virtual-machine-and-physical-resources/).

En */var/lib/ghe-updates/ghe-update-check.status* puede acceder a un archivo que contiene el estado de la descarga.

Para buscar la última versión de {% data variables.product.prodname_enterprise %}, use el modificador `-i`.

```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-update-check'
```

## Administración de usuarios

### ghe-license-usage

Esta utilidad exporta una lista de los usuarios de la instalación en formato JSON. Si tu instancia se conecta a {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_ghe_server %} utiliza esta información para reportar la información de licencia a {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, consulte "[Conexión de la cuenta empresarial con {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)".

Predeterminadamente, la lista de usuarios en el JSON resultante se encuentra cifrada. Use la marca `-h` para ver más opciones.

```shell
ghe-license-usage
```

### ghe-org-membership-update

Esta utilidad aplicará la visibilidad de membresía de la organización predeterminada mostrando todos los miembros de tu instancia. Para obtener más información, consulte "[Configuración de la visibilidad de pertenencias a organizaciones](/enterprise/admin/guides/user-management/configuring-visibility-for-organization-membership)". Las opciones de configuración son `public` o `private`.

```shell
ghe-org-membership-update --visibility=SETTING
```

### `ghe-user-csv`

Esta utilidad exporta una lista de todos los usuarios en la instalación a un formato CSV. El archivo CSV incluye las direcciones de correo electrónico, el tipo de usuario que son (p. ej., administrador, usuario), cuántos repositorios tienen, cuántas claves SSH tienen, la cantidad de pertenencias a organizaciones, la última dirección IP que inició sesión, etc. Use la marca `-h` para ver más opciones.

```shell
ghe-user-csv -o > users.csv
```

### ghe-user-demote

Esta utilidad degrada el usuario especificado desde el estado de administrador al de usuario normal. Recomendamos usar la interfaz de usuario web para realizar esta acción, pero también facilitamos esta utilidad en caso de que la utilidad `ghe-user-promote` se ejecute con errores y deba volver a disminuir de categoría a un usuario desde la CLI.

```shell
ghe-user-demote USERNAME
```

### ghe-user-promote

Esta utilidad promueve la cuenta de usuario especificada a administrador del sitio.

```shell
ghe-user-promote USERNAME
```

### ghe-user-suspend

Esta utilidad suspende el usuario especificado, evitando que inicie sesión, suba o extraiga datos de tu repositorio.

```shell
ghe-user-suspend USERNAME
```

### ghe-user-unsuspend

Esta utilidad anula la suspensión del usuario especificado, otorgándole acceso para iniciar sesión, subir o extraer datos de tu repositorio.

```shell
ghe-user-unsuspend USERNAME
```
