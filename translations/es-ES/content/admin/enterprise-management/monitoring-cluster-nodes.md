---
title: Supervisar los nodos de agrupación
intro: 'Una agrupación de {% data variables.product.prodname_ghe_server %} está compuesta por servicios redundantes que se distribuyen entre dos o más nodos. Si un servicio individual o un nodo completo falla, los usuarios de la agrupación no deberían percibirlo inmediatamente. Sin embargo, si el rendimiento y la redundancia se ven afectados, es importante supervisar el estado de una agrupación de {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/clustering/monitoring-cluster-nodes
  - /enterprise/admin/enterprise-management/monitoring-cluster-nodes
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Comprobación manual del estado de la agrupación

{% data variables.product.prodname_ghe_server %} tiene una utilidad de línea de comando incorporada para supervisar el estado de la agrupación. Desde el shell administrativo, la puesta en funcionamiento de un comando `ghe-cluster-status` ejecuta una serie de revisiones de estado en cada nodo, incluida la verificación de la conectividad y el estado del servicio. La salida muestra todos los resultados de la prueba incluido el texto `ok` o `error`. Por ejemplo, para mostrar solamente las pruebas fallidas, ejecuta:

```shell
admin@ghe-data-node-0:~$ <em>ghe-cluster-status | grep error</em>
> mysql-replication ghe-data-node-0: error Stopped
> mysql cluster: error
```
{% note %}

**Nota:** Si no hay pruebas fallidas, este comando no produce salidas. Esto indica que la agrupación está en buen estado.

{% endnote %}

### Supervisar el estado de la agrupación con Natgios

Puedes configurar [Nagios](https://www.nagios.org/) para supervisar {% data variables.product.prodname_ghe_server %}. Además de supervisar la conectividad básica para cada uno de los nodos de la agrupación, puedes comprobar el estado de la agrupación al configurar Nagios para que use el comando `ghe-cluster-status -n`. Esto devuelve salidas en un formato que Nagios comprende.

#### Prerrequisitos
* Host Linux que ejecuta Nagios.
* Acceso de red para la agrupación {% data variables.product.prodname_ghe_server %}.

#### Configurar el host de Nagios
1. Genera una clave SSH con una contraseña en blanco. Nagios usa esto para autenticar la agrupación de {% data variables.product.prodname_ghe_server %}.
  ```shell
  nagiosuser@nagios:~$ <em>ssh-keygen -t ed25519</em>
  > Generating public/private ed25519 key pair.
  > Enter file in which to save the key (/home/nagiosuser/.ssh/id_ed25519):
  > Enter passphrase (empty for no passphrase): <em>leave blank by pressing enter</em>
  > Enter same passphrase again: <em>press enter again</em>
  > Your identification has been saved in /home/nagiosuser/.ssh/id_ed25519.
  > Your public key has been saved in /home/nagiosuser/.ssh/id_ed25519.pub.
  ```
  {% danger %}

  **Advertencia de seguridad** Una clave SSH sin una contraseña puede plantear un riesgo de seguridad en caso de que un host tenga autorización de acceso completo. Limita la autorización de esa clave a un comando único de solo lectura.

  {% enddanger %}
  {% note %}

  **Nota:** Si estás utilizando una distribución de Linux que no sea compatible con el algoritmo Ed25519, utiliza el comando:
  ```shell
  nagiosuser@nagios:~$ ssh-keygen -t rsa -b 4096
  ```

  {% endnote %}
2. Copia la llave privada (`id_ed25519`) a la carpeta principal `nagios` y configura la propiedad adecuada.
  ```shell
  nagiosuser@nagios:~$ <em>sudo cp .ssh/id_ed25519 /var/lib/nagios/.ssh/</em>
  nagiosuser@nagios:~$ <em>sudo chown nagios:nagios /var/lib/nagios/.ssh/id_ed25519</em>
  ```

3. Para autorizar una clave pública a fin de que ejecute el comando *only* the `ghe-cluster-status -n`, usa un prefijo `command=` en el archivo `/data/user/common/authorized_keys`. Desde el shell administrativo en cualquier nodo, modifica este archivo para agregar la clave pública generada en el paso 1. Por ejemplo: `command="/usr/local/bin/ghe-cluster-status -n" ssh-ed25519 AAAA....`

4. Valida y copia la configuración e cualquier nodo en la agrupación al ejecutar `ghe-cluster-config-apply` en el nodo donde modificase el archivo `/data/user/common/authorized_keys`.

  ```shell
  admin@ghe-data-node-0:~$ <em>ghe-cluster-config-apply</em>
  > Validating configuration
  > ...
  > Configuración de agrupación finalizada
  ```

5. Para probar que el plugin de Nagios puede ejecutar el comando exitosamente, ejecútalo interactivamente desde el host de Nagios.
  ```shell
  nagiosuser@nagios:~$ /usr/lib/nagios/plugins/check_by_ssh -l admin -p 122 -H <em>hostname</em> -C "ghe-cluster-status -n" -t 30
  > OK - No errors detected
  ```

6. Crea una definición de comando en tu configuración Nagios.

  ###### Definición de ejemplo

  ```
  definir comando {
        command_name    check_ssh_ghe_cluster
        command_line    $USER1$/check_by_ssh -H $HOSTADDRESS$ -C "ghe-cluster-status -n" -l admin -p 122 -t 30
  }
  ```
7. Agrega este comando a una definición de servicio para un nodo en la agrupación de {% data variables.product.prodname_ghe_server %}.


  ###### Definición de ejemplo

  ```
  define host{
        use                     generic-host
        host_name               ghe-data-node-0
        alias                   ghe-data-node-0
        address                 10.11.17.180
        }

  define service{
          use                             generic-service
          host_name                       ghe-data-node-0
          service_description             GitHub Cluster Status
          check_command                   check_ssh_ghe_cluster
          }
  ```

En cuanto agregues la definición a Nagios, se ejecutará la comprobación del servicio de acuerdo con tu configuración. Deberías poder ver el servicio configurado recientemente en la interfaz web de Nagios.

![Ejemplo de Nagios](/assets/images/enterprise/cluster/nagios-example.png)
