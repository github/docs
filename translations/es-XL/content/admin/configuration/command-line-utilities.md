---
title: Utilidades de la línea de comando
intro: '{% data variables.product.prodname_ghe_server %} incluye una gama de utilidades para ayudar a resolver problemas particulares o realizar tareas específicas.'
redirect_from:
  - /enterprise/admin/articles/viewing-all-services/
  - /enterprise/admin/articles/command-line-utilities/
  - /enterprise/admin/installation/command-line-utilities
  - /enterprise/admin/configuration/command-line-utilities
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '*'
---

Puedes ejecutar estos comandos desde cualquier lugar en la VM después de iniciar sesión como usuario administrador de SSH. Para obtener más información, consulta "[Acceder al shell administrativo (SSH)](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)."

### General

#### ghe-announce

Esta utilidad establece un mensaje emergente en la parte superior de cada página {% data variables.product.prodname_enterprise %}. Puedes usarlo para difundir un mensaje entre tus usuarios.

{% if currentVersion ver_gt "enterprise-server@2.21" %}
You can also set an announcement banner using the enterprise settings on {% data variables.product.product_name %}. Para obtener más información, consulta "[Personalizar mensajes de usuario en tu instancia](/enterprise/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)."
{% endif %}

```shell
# Establece un mensaje que es visible para todos
$ ghe-announce -s MESSAGE
> Mensaje de anuncio establecido.
# Elimina un mensaje establecido previamente
$ ghe-announce -u
> Eliminó el mensaje de anuncio
```

#### ghe-check-disk-usage

Esta utilidad busca en el disco los archivos grandes o los archivos que se han eliminado, pero siguen teniendo identificadores de archivo abiertos. Esto se debería ejecutar cuando intentes liberar espacio en la partición raíz.

```shell
ghe-check-disk-usage
```

#### ghe-cleanup-caches

Esta utilidad borra una variedad de cachés que podrían ocupar espacio extra del disco en el volumen raíz. Si notas que el uso del espacio de disco del volumen raíz aumenta de manera considerable, sería buena idea ejecutar esta utilidad para ver si ayuda a reducir el uso general.

```shell
ghe-cleanup-caches
```
#### ghe-cleanup-settings

Esta utilidad borra todas las configuraciones {% data variables.enterprise.management_console %} existentes.

{% tip %}

**Consejo**: {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

{% endtip %}

```shell
ghe-cleanup-settings
```

#### ghe-config

Con esta utilidad, puedes recuperar y modificar los ajustes de configuración de {% data variables.product.product_location_enterprise %}.

```shell
$ ghe-config <em>core.github-hostname</em>
# Obtiene el valor de configuración de `core.github-hostname`
$ ghe-config <em>core.github-hostname</em> <em>'example.com'</em>
# Establece el valor de configuración de `core.github-hostname` en `example.com`
$ ghe-config -l
# Detalla todos los valores de configuración
```
Te permite encontrar el uuid de tu nodo en `cluster.conf`.

``` shell
  $ ghe-config _hostname_.uuid
```

{% if currentVersion ver_gt "enterprise-server@2.21" %}
Allows you to exempt a list of users from API rate limits. Para obtener más información, consulta la sección "[Limites de tasa](/enterprise/{{ currentVersion }}/v3/#rate-limiting)."

``` shell
$ ghe-config app.github.rate_limiting_exempt_users "<em>hubot</em> <em>github-actions</em>"
# Exempts the users hubot and github-actions from rate limits
```
{% endif %}

#### ghe-config-apply

Esta utilidad aplica configuraciones {% data variables.enterprise.management_console %}, vuelve a cargar servicios del sistema, prepara un dispositivo de almacenamiento y ejecuta cualquier migración de base de datos pendiente. Es equivalente a dar clic en **Guardar configuración** en la IU web de {% data variables.enterprise.management_console %} o a enviar una solicitud de POST a [la terminal `/setup/api/configure`](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#management-console).

Probablemente, nunca la debas ejecutar en forma manual, pero está disponible si quieres automatizar el proceso de guardar tus configuraciones a través de SSH.

```shell
ghe-config-apply
```

#### ghe-console

Esta utilidad abre la consola GitHub Rails en tu aparato {% data variables.product.prodname_enterprise %}. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-console
```

#### ghe-dbconsole

Esta utilidad abre una sesión de base de datos de MySQL en tu aparato {% data variables.product.prodname_enterprise %}. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-dbconsole
```

#### ghe-es-index-status
Esta utilidad genera un resumen de los índices de Elasticsearch en formato CSV.

Imprime un resumen de los índices con un encabezado para `STDOUT`:
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

Imprime un resumen de los índices y canaliza los resultados en `columnas` para mejor legibilidad:

```shell
$ ghe-es-index-status -do | column -ts,
> warning: parser/current is loading parser/ruby23, which recognizes
> warning: 2.3.3-compliant syntax, but you are running 2.3.4.
> warning: please see https://github.com/whitequark/parser#compatibility-with-ruby-mri.
> Nombre           Principal  Se puede buscar     Editable      Actualizado  Avance reparación  Versión
> code-search-1    true     true        true      true      100.0           72e27df7c631b45e026b42bfef059328fa040e17
> commits-5        true     true        true      true      100.0           7ed28813100c47813ef654c0ee2bb9abf21ab744
> gists-4          true     true        true      true      100.0           cf8e7d04fcf2564c902e2873c424a279cc41079d
> issues-4         falso         falso            falso          true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> issues-5         true     true        true      true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> projects-2       true     true        true      true      100.0           c5cac1c4b3c66d42e609d088d174dbc3dd44469a
> pull-requests-6  true     true        true      true      100.0           6a466ad6b896a3499509990979bf9a18d7d41de3
> repos-6          true     true        true      true      100.0           6c8b5fbba0fc1e409558db411d05e092c1387082
> users-5          true     true        true      true      100.0           38984875552bb826c9ec42999f409cb2e95556eb
> wikis-4          true     true        true      true      100.0           2613dec44bd14e14577803ac1f9e4b7e07a7c234
```

#### ghe-legacy-github-services-report

Esta utilidad enumera los repositorios de tu aparato que usan Servicios {% data variables.product.prodname_dotcom %}, un método de integración que se interrumpirá el 1 de octubre de 2018. Los usuarios de tu aparato pueden tener configurados servicios {% data variables.product.prodname_dotcom %} para crear notificaciones de subidas a determinados repositorios. Para obtener más información, consulta la sección "[Anunciar la obsoletización de servicios de {% data variables.product.prodname_dotcom %} ](https://developer.github.com/changes/2018-04-25-github-services-deprecation/)" en {% data variables.product.prodname_blog %} o la sección "[Reemplazar servicios de {% data variables.product.prodname_dotcom %}](/v3/guides/replacing-github-services/)". Para obtener más información acerca de este comando o para conocer otras opciones, utiliza la marca `-h`.

```shell
ghe-legacy-github-services-report

```

#### ghe-logs-tail

Esta utilidad te permite hacer un registro final de todos los archivos de registro relevantes desde tu instalación. Puedes aprobar opciones para limitar los registros a conjuntos específicos. Utiliza la marca -h para más opciones.

```shell
ghe-logs-tail
```

#### ghe-maintenance

Esta utilidad te permite controlar el estado del modo de mantenimiento de la instalación. Está diseñada para que la use principalmente la {% data variables.enterprise.management_console %} en segundo plano, pero también se puede usar directamente.

```shell
ghe-maintenance -h
```

{% if currentVersion ver_gt "enterprise-server@2.17" %}
#### ghe-motd

Esta utilidad vuelve a mostrar el mensaje del día (MOTD) en el que los administradores ven cuando se accede a la isntancia a través del shell administrativo. El resultado contiene un resumen del estado de la instancia.

```shell
ghe-motd
```
{% endif %}

#### ghe-nwo

Esta utilidad genera un nombre y propietario de repositorio en función del Id. del repositorio.

```shell
ghe-nwo <em>REPOSITORY_ID</em>
```

#### ghe-org-admin-promote

Usa este comando para otorgarles privilegios de propietario de la organización a los usuarios con privilegios de administrador del sitio sobre el aparato o para otorgarle privilegios de propietario de la organización a cualquier usuario único de una organización única. Debes especificar un usuario o una organización. El comando `ghe-org-admin-promote` siempre pedirá confirmación antes de ejecutarse, a menos que uses la marca `-y` para omitir la confirmación.

Puedes usar las siguientes opciones con la utilidad:

- La marca `-u` especifica un nombre de usuario. Usa esta marca para otorgarle privilegios de propietario de la organización a un usuario específico. Omite la marca `-u` para promover todos los administradores del sitio a la organización específica.
- La marca `-o` especifica una organización. Usa esta marca para otorgar privilegios de propietario en una organización específica. Omite la marca `-o` para otorgarle permisos de propietario en todas las organizaciones al administrador del sitio especificado.
- La marca `-a` otorga privilegios de propietario en todas las organizaciones a todos los administradores del sitio.
- La marca `-y` omite la confirmación manual.

Esta utilidad no puede promover una cuenta de usuario que no sea administrador del sitio a propietario de todas las organizaciones. Puedes promover una cuenta de usuario común a administrador del sitio con [ghe-user-promote](#ghe-user-promote).

Otorga privilegios de propietario de la organización en una organización específica a un usuario único

```shell
ghe-org-admin-promote -u <em>USERNAME</em> -o <em>ORGANIZATION</em>
```

Otorga privilegios de propietario de la organización en todas las organizaciones a un administrador del sitio específico

```shell
ghe-org-admin-promote -u <em>USERNAME</em>
```

Otorga privilegios de propietario de la organización en una organización específica a todos los administradores del sitio

```shell
ghe-org-admin-promote -o <em>ORGANIZATION</em>
```

Otorga privilegios de propietario de la organización en todas las organizaciones a todos los administradores del sitio

```shell
ghe-org-admin-promote -a
```

#### ghe-reactivate-admin-login

Usa este comando para desbloquear de inmediato la {% data variables.enterprise.management_console %} después de 10 intentos fallidos de inicio de sesión en el transcurso de 10 minutos.

```shell
$ ghe-reactivate-admin-login
```

#### ghe-resque-info

Esta utilidad muestra información sobre los trabajos en segundo plano, tanto activos como en cola. Proporciona las mismas cantidades de recuento de trabajos que la barra de estado del administrador que aparece en la parte superior de cada página.

Esta utilidad puede ayudar a identificar si el servidor Resque está teniendo problemas para procesar los trabajos de segundo plano. Cualquiera de los siguientes escenarios puede ser indicativo de un problema con Reque:

* Aumenta la cantidad de trabajos de segundo plano, pero los trabajos activos siguen siendo los mismos.
* Las fuentes de eventos no se actualizan.
* Los webhooks no se están activando.
* La interfaz web no se actualiza después de una subida de Git.

Si sospechas que Resque está fallando, contáctate con {% data variables.contact.contact_ent_support %} para obtener ayuda.

Con este comando, también puedes detener o reanudar los trabajos en cola.

```shell
$ ghe-resque-info
# detalla las colas y la cantidad de trabajos actualmente en cola
$ ghe-resque-info -p <em>QUEUE</em>
# detiene la cola especificada
$ ghe-resque-info -r <em>QUEUE</em>
# reanuda la cola especificada
```

#### ghe-saml-mapping-csv

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

#### ghe-service-list

Esta utilidad enumera todos los servicios que se han iniciado o detenido (en ejecución o en espera) en tu aparato.

```shell
$ ghe-service-list
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
```

{% tip %}

Los nombres de servicio que se generen con este comando se pueden utilizar con comandos [`systemctl`](https://www.freedesktop.org/software/systemd/man/systemctl.html) para detener, iniciar o restablecer estos servicios manualmente si así se requiere. Por ejemplo:

```shell
$ sudo systemctl restart github-resqued
```

Detener los servicios generará un tiempo de inactividad en tu instalación, así que recomendamos que te contactes con {% data variables.contact.contact_ent_support %} antes de detener o reiniciar cualquier servicio.

{% endtip %}

#### ghe-set-password

Con `ghe-set-password`, puedes establecer una contraseña nueva para autenticarla en la [{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console).

```shell
ghe-set-password <new_password>
```

#### ghe-ssh-check-host-keys

Esta utilidad compara las claves del host de SSH existentes con la lista de claves del host de SHH filtradas conocidas.

```shell
$ ghe-ssh-check-host-keys
```

Si se encuentra una clave del host filtrada, se cierra la utilidad en un estado `1` y con un mensaje:
```shell
> Una o más de tus claves del host de SHH aparecen en la lista negra.
> Restablece tus claves del host usando ghe-ssh-roll-host-keys.
```

Si no se encontró una clave del host filtrada, se cierra la utilidad en un estado `0` y con un mensaje:
```shell
> Las claves del host de SSH no se encontraron en la lista negra de claves del host de SSH.
> No se requieren/recomiendan más pasos en este momento.
```

#### ghe-ssh-roll-host-keys

Esta utilidad rota las claves del host de SSH y las reemplaza con claves que se generan nuevas.

```shell
$ sudo ghe-ssh-roll-host-keys
¿Quieres proceder con la rotación de claves del host de SSH? Esto eliminará las
las claves existentes en /etc/ssh/ssh_host_* y generará nuevas. [y/N]

# Presiona 'Y' para confirmar la eliminación o utiliza el modificador -y para omitir esta pregunta

> Las claves del host de SSH se han rotado con éxito.
```

#### ghe-ssh-weak-fingerprints

Esta utilidad genera un informe de claves de SSH débiles conocidas que están almacenadas en el aparato {% data variables.product.prodname_enterprise %}. Opcionalmente, puedes revocar las claves de usuario como acción masiva. La utilidad informará las claves de sistema débiles que puedes revocar en forma manual en la [{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console).

```shell
# Imprime un informe de usuario y claves SSH del sistema débiles
$ ghe-ssh-weak-fingerprints

# Revoca todas las claves de usuario débiles
$ ghe-ssh-weak-fingerprints --revoke
```

#### ghe-ssl-acme

Esta utilidad te permite instalar un certificado de Let's Encrypt en tu aparato {% data variables.product.prodname_enterprise %}. Para obtener más información, consulta "[Configurar TLS](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-tls)."

Puede utilizar la etiqueta `-x` para eliminar la configuración ACME.

```shell
ghe-ssl-acme -e
```

#### ghe-ssl-ca-certificate-install

Esta utilidad te termine instalar un certificado CA de raíz personalizado en tu servidor {% data variables.product.prodname_enterprise %}. El certificado debe tener un formato PEM. Además, si tu proveedor de certificación incluye varios certificados CA en un único archivo, debes separarlos en archivos individuales que luego pasarás a `ghe-ssl-ca-certificate-install` de a uno por vez.

Ejecuta esta utilidad para agregar una cadena de certificación para la verificación de firma de confirmación S/MIME. Para obtener más información, consulta "[Acerca de la verificación de firma de confirmación](/enterprise/{{ currentVersion }}/user/articles/about-commit-signature-verification/)".

Ejecuta esta utilidad cuando {% data variables.product.product_location_enterprise %} no pueda conectarse con otro servidor porque el segundo está usando un certificado SSL autofirmado o un certificado SSL para el cual no proporciona el paquete de soporte CA necesario. Una manera de confirmar esto es ejecutar `openssl s_client -connect host:port -verify 0 -CApath /etc/ssl/certs` desde {% data variables.product.product_location_enterprise %}. Si el certificado SSL del servidor remoto se puede verificar, tu `SSL-Session` debe tener un código de retorno de 0, como se muestra a continuación.

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

Si, de lo contrario, el certificado SSL del servidor remoto *no* se puede verificar, tu `SSL-Session` debería tener un código de retorno distinto de cero:

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
- La marca `-r` te permite desinstalar un certificado CA.
- La marca `-h` muestra más información de uso.

```shell
ghe-ssl-ca-certificate-install -c <em>/path/to/certificate</em>
```

#### ghe-ssl-generate-csr

Esta utilidad te permite generar una clave privada y una solicitud de firma de certificado (CSR), que puedes compartir con una autoridad de certificación comercial o privada para obtener un certificado válido para utilizar con tu instancia. Para obtener más información, consulta "[Configurar TLS](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-tls)."

Para obtener más información acerca de este comando o para conocer otras opciones, utiliza la marca `-h`.

```shell
ghe-ssl-generate-csr
```

#### ghe-storage-extend

Algunas plataformas exigen este script para ampliar el volumen de usuarios. Para obtener más información, consulta "[Aumentar la capacidad de almacenamiento](/enterprise/admin/guides/installation/increasing-storage-capacity/)".

```shell
$ ghe-storage-extend
```

#### ghe-version

Esta utilidad imprime la versión, la plataforma y la compilación de {% data variables.product.product_location_enterprise %}.

```shell
$ ghe-version
```

#### ghe-webhook-logs

Esta utilidad genera registros de entregas de webhooks para que los administradores los revisen e identifiquen cualquier problema.

```shell
ghe-webhook-logs
```

Para mostrar todas las entregas fallidas del gancho en el día anterior:
```shell
ghe-webhook-logs -f -a <em>YYYYMMDD</em>
```

Para mostrar todos los resultados, carga útil y excepciones del gancho para la entrega:
```shell
ghe-webhook-logs -g <em>delivery-guid</em> -v
```

Para mostrar las entregas globales de webhook:
```shell
ghe-webhook-logs --global
```

### Agrupación

#### estado ghe-dpages

Esta utilidad le permite gestionar el servidor {% data variables.product.prodname_pages %} distribuido.

```shell
$ ghe-cluster-status
```

#### ghe-cluster-support-bundle

Esta utilidad crea un tarball de paquetes de soporte que contiene registros importantes de cada nodo, tanto en la configuración de Replicación geográfica como de Agrupación.

Por defecto, el comando crea el tarball en */tmp*, pero también puedes tener `cat` el tarball en `STDOUT` para una fácil transmisión por SSH. Esto es útil en caso de que la UI web no responda o que no funcione descargar un paquete de soporte desde */setup/support*. Debes usar este comando si quieres generar un paquete *ampliado* que contenga registros antiguos. También puedes usar este comando para cargar el paquete de soporte de agrupación directamente para {% data variables.product.prodname_enterprise %} recibir asistencia.

Para crear un paquete estándar:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -o' > cluster-support-bundle.tgz
```

Para crear un paquete extendido:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -x -o' > cluster-support-bundle.tgz
```

Para enviar un paquete a {% data variables.contact.github_support %}:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -u'
```

Para mandar un paquete a {% data variables.contact.github_support %} y asociarlo con un ticket:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -t <em>ticket-id</em>'
```

{% if currentVersion ver_gt "enterprise-server@2.21" %}
#### ghe-cluster-failover

Fail over from active cluster nodes to passive cluster nodes. For more information, see "[Initiating a failover to your replica cluster](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)."

```shell
ghe-cluster-failover
```
{% endif %}

#### ghe-dpages

Esta utilidad le permite gestionar el servidor {% data variables.product.prodname_pages %} distribuido.

```shell
ghe-dpages
```

Para mostrar un resumen de la ubicación y salud del repositorio:
```shell
estado ghe-dpages
```

Para evacuar un servicio de almacenamiento {% data variables.product.prodname_pages %} antes de evacuar un nodo de agrupación:
``` shell
ghe-dpages evacuate pages-server-<uuid>
```

#### ghe-spokes

Esta utilidad te permite administrar las tres copias de cada repositorio en los servidores de git distribuidos.

```shell
ghe-spokes
```

Para mostrar un resumen de la ubicación y salud del repositorio:

```shell
estado ghe-spokes
```

Para mostrar los servidores en donde el repositorio se encuentra almacenado:

```shell
ruta ghe-spokes
```

Para evacuar los servicios de almacenamiento en un nodo de la agrupación:

``` shell
ghe-spokes server evacuate git-server-<uuid>
```

#### ghe-storage

Esta utilidad te permite evacuar todos los servicios de almacenamiento antes de evacuar un nodo de agrupación.

``` shell
ghe-storage evacuate storage-server-<uuid>
```

### Git

#### ghe-btop

Una interfaz del tipo `top` para las operaciones actuales de Git.

```shell
ghe-btop [ <port number> | --help | --usage ]
```

#### ghe-repo

Esta utilidad te permite cambiar a un directorio del repositorio y abrir un shell interactivo como el de usuario de `git`. Puedes realizar inspecciones o mantenimientos manuales de un repositorio a través de comandos como `git-*` o `git-nw-*`.

```shell
ghe-repo <em>username</em>/<em>reponame</em>
```

#### ghe-repo-gc

Esta utilidad reempaqueta en forma manual una red de repositorios para optimizar el almacenamiento de paquetes. Si tienes un repositorio grande, ejecutar este comando puede ayudar a reducir su tamaño general. {% data variables.product.prodname_enterprise %} ejecuta en forma automática este comando durante toda tu interacción con una red de repositorios.

Puedes agregar el argumento opcional `--prune` para eliminar los objetos de Git inaccesibles que no están referenciados desde una rama, una etiqueta o cualquier otra referencia. Esto es útil, en especial, para eliminar de inmediato [información sensible previamente suprimida](/enterprise/user/articles/remove-sensitive-data/).

```shell
ghe-repo-gc <em>username</em>/<em>reponame</em>
```

### Importar y exportar

#### ghe-migrator

`ghe-migrator` es una herramienta de alta fidelidad que te ayuda a realizar migraciones desde una instancia de GitHub a otra. Puedes consolidar tus instancias o mover tu organización, usuarios, equipos y repositorios desde GitHub.com a {% data variables.product.prodname_enterprise %}.

Para obtener más información, consulta nuestra guía en [migrar datos de usuarios, organizaciones y repositorios](/enterprise/admin/guides/migrations/).

#### git-import-detect

Con una URL, detecta qué tipo de sistema de administración de control de fuente hay en el otro extremo. Durante una importación manual, probablemente ya lo sepas, pero puede ser muy útil en scripts automáticos.
```shell
git-import-detect
```

#### git-import-hg-raw

Esta utilidad importa un repositorio de Mercurial a este repositorio de Git. Para obtener más información, consulta "[importar datos de sistemas de control de versiones de terceros](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)."
```shell
git-import-hg-raw
```

#### git-import-svn-raw

Esta utilidad importa los datos del archivo y el historial de Subversion en una rama de Git. Es una copia exacta del árbol, que ignora cualquier distinción de tronco o rama. Para obtener más información, consulta "[importar datos de sistemas de control de versiones de terceros](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)."
```shell
git-import-svn-raw
```

#### git-import-tfs-raw

Esta utilidad importa desde el Control de Versiones de Team Foundation. Para obtener más información, consulta "[importar datos de sistemas de control de versiones de terceros](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)."
```shell
git-import-tfs-raw
```

#### git-import-rewrite

Esta utilidad reescribe el repositorio importado. Esto te permite renombrar a los autores y, en el caso de TFS y Subversion, produce ramas de Git basadas en carpetas. Para obtener más información, consulta "[importar datos de sistemas de control de versiones de terceros](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)."
```shell
git-import-rewrite
```

### Asistencia

#### ghe-diagnostics

Esta utilidad realiza varias comprobaciones y reúne información acerca de tu instalación que puedes enviar a la asistencia para que te ayude a diagnosticar los problemas que tienes.

Actualmente, el resultado de esta utilidad es similar a descargar la información de diagnóstico en la {% data variables.enterprise.management_console %}, pero con el tiempo se pueden agregar otras mejoras que no están disponibles en la UI web. Para obtener más información, consulta "[Crear y compartir archivos de diagnóstico](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-diagnostic-files)."

```shell
ghe-diagnostics
```

#### ghe-support-bundle

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %}
Esta utilidad crea un tarball de paquetes de soporte que contiene registros importantes de tu instancia.

Por defecto, el comando crea el tarball en */tmp*, pero también puedes tener `cat` el tarball en `STDOUT` para una fácil transmisión por SSH. Esto es útil en caso de que la UI web no responda o que no funcione descargar un paquete de soporte desde */setup/support*. Debes usar este comando si quieres generar un paquete *ampliado* que contenga registros antiguos. También puedes usar este comando para cargar el paquete de soporte directamente en la asistencia de {% data variables.product.prodname_enterprise %}.

Para crear un paquete estándar:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o' > support-bundle.tgz
```

Para crear un paquete extendido:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -x -o' > support-bundle.tgz
```

Para enviar un paquete a {% data variables.contact.github_support %}:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -u'
```

Para mandar un paquete a {% data variables.contact.github_support %} y asociarlo con un ticket:

```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -t <em>ticket-id</em>'
```

#### ghe-support-upload

Esta utilidad envía información desde tu aparato a la asistencia de {% data variables.product.prodname_enterprise %}. Puedes especificar un archivo local u ofrecer una transmisión de hasta 100MB de datos a través de `STDIN`. Opcionalmente, los datos cargados se pueden asociar a un ticket de asistencia.

Para enviar un archivo a {% data variables.contact.github_support %} y asociarlo con un ticket:
```shell
ghe-support-upload -f <em>path/to/your/file</em> -t <em>ticket-id</em>
```

Para subir datos a través de `STDIN` y asociarlos con un ticket:
```shell
<em>ghe-repl-status -vv</em> | ghe-support-upload -t <em>ticket-id</em> -d "<em>Verbose Replication Status</em>"
```

En este ejemplo, `ghe-repl-status -vv` envía información de estado detallada desde un aparato réplica. Debes reemplazar `ghe-repl-status -vv` con los datos específicos que quieras transmitir a `STDIN` y `Verbose Replication Status` (Estado de replicación detallado) con una breve descripción de los datos. {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

### Actualizar {% data variables.product.prodname_ghe_server %}

#### ghe-upgrade

Esta utilidad instala o verifica un paquete actualizado. También puedes usar esta utilidad para revertir un lanzamiento de patch si falla o se interrumpe una actualización. Para obtener más información, consulta "[Actualizar {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server/)".

Para verificar un paquete de mejora:
```shell
ghe-upgrade --verify <em>UPGRADE-PACKAGE-FILENAME</em>
```

Para instalar un paquete de mejora:
```shell
ghe-upgrade <em>UPGRADE-PACKAGE-FILENAME</em>
```

{% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

#### ghe-upgrade-scheduler

Esta utilidad administra la instalación programada de paquetes de actualización. Puedes mostrar, crear nuevas o eliminar las actualizaciones programadas. Debes crear cronogramas usando expresiones cron. Para obtener más información, consulta [Entrada de Cron en Wikipedia](https://en.wikipedia.org/wiki/Cron#Overview).

Para programar una nueva instalación para un paquete:
```shell
$ ghe-upgrade-scheduler -c "0 2 15 12 *" <em>UPGRADE-PACKAGE-FILENAME</em>
```

Para mostrar las instalaciones programadas para un paquete:
```shell
$ ghe-upgrade-scheduler -s <em>UPGRADE PACKAGE FILENAME</em>
> 0 2 15 12 * /usr/local/bin/ghe-upgrade -y -s <em>UPGRADE-PACKAGE-FILENAME</em> > /data/user/common/<em>UPGRADE-PACKAGE-FILENAME</em>.log 2>&1
```

Para eliminar las instalaciones programadas para un paquete:
```shell
$ ghe-upgrade-scheduler -r <em>UPGRADE PACKAGE FILENAME</em>
```

#### ghe-update-check

Esta utilidad buscará si hay disponible un nuevo lanzamiento de patch de {% data variables.product.prodname_enterprise %}. Si lo hay, y si hay espacio disponible en tu instancia, descargará el paquete. Por defecto, se guarda en */var/lib/ghe-updates*. Luego, un administrador puede [realizar la actualización](/enterprise/admin/guides/installation/updating-the-virtual-machine-and-physical-resources/).

En */var/lib/ghe-updates/ghe-update-check.status* puedes acceder a un archivo que contiene el estado de la descarga.

Para buscar el último lanzamiento de {% data variables.product.prodname_enterprise %}, usa el modificador `-i`.

```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-update-check'
```

### Gestión de usuarios

#### ghe-license-usage

Esta utilidad exporta una lista de los usuarios de la instalación en formato JSON. Si tu instancia se conecta a {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_ghe_server %} utiliza esta información para reportar la información de licencia a {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, consulta la sección "[Conectar {% data variables.product.prodname_ghe_server %} a{% data variables.product.prodname_ghe_cloud %}](/enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)".

Predeterminadamente, la lista de usuarios en el JSON resultante se encuentra cifrada. Usa la marca `-h` para obtener más opciones.

```shell
ghe-license-usage
```

#### ghe-org-membership-update

Esta utilidad aplicará la visibilidad de la membresía a la organización predeterminada mostrando todos los miembros de tu instancia. Para obtener más información, consulta la sección "[Configurar la visibilidad para la membrecía de la organización](/enterprise/{{ currentVersion }}/admin/guides/user-management/configuring-visibility-for-organization-membership)". Las opciones de configuración son `public` o `private`.

```shell
ghe-org-membership-update --visibility=<em>SETTING</em>
```

#### ghe-user-csv

Esta utilidad exporta una lista de todos los usuarios en la instalación a un formato CSV. El archivo CSV incluye las direcciones de correo electrónico, el tipo de usuario que son (p. ej., administrador, usuario), cuántos repositorios tienen, cuántas claves SSH tienen, la cantidad de membresías a la organización, la última dirección IP que inició sesión, etc. Usa la marca `-h` para obtener más opciones.

```shell
ghe-user-csv -o > users.csv
```

#### ghe-user-demote

Esta utilidad baja de categoría al usuario especificado del estado de administrador al de usuario normal. Recomendamos usar la UI web para realizar esta acción, pero proporcionamos esta utilidad en caso de que la utilidad `ghe-user-promote` se ejecute con error, y debas volver a bajar de categoría a un usuario desde la CLI (interfaz de línea de comandos).

```shell
ghe-user-demote <em>some-user-name</em>
```

#### ghe-user-promote

Esta utilidad promueve la cuenta de usuario especificada a administrador del sitio.

```shell
ghe-user-promote <em>some-user-name</em>
```

#### ghe-user-suspend

Esta utilidad suspende el usuario especificado, evitando que inicie sesión, suba o extraiga datos de tu repositorio.

```shell
ghe-user-suspend <em>some-user-name</em>
```

#### ghe-user-unsuspend

Esta utilidad anula la suspensión del usuario especificado, otorgándole acceso para iniciar sesión, subir o extraer datos de tu repositorio.

```shell
ghe-user-unsuspend <em>some-user-name</em>
```
