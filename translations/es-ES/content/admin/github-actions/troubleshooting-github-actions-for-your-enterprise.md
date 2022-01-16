---
title: Solucionar problemas en las GitHub Actions de tu empresa
intro: 'Solucionar problemas comunes que ocurren cuando se utilizan {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %}.'
permissions: 'Site administrators can troubleshoot {% data variables.product.prodname_actions %} issues and modify {% data variables.product.prodname_ghe_server %} configurations.'
versions:
  enterprise-server: '>=3.0'
topics:
  - Enterprise
---

### Configurar los ejecutores auto-hospedados cuando utilizas un certificado auto-firmado para {% data variables.product.prodname_ghe_server %}

{% data reusables.actions.enterprise-self-signed-cert %} Para obtener más información, consulta la sección "[Configurar TLS](/admin/configuration/configuring-tls)".

#### Instalar el certificado en la máquina ejecutora

Para que un ejecutor auto-hospedado se conecte a {% data variables.product.prodname_ghe_server %} utilizando un certificado auto-firmado, debes instalarlo en la máquina ejecutora para que la seguridad de la conexión se fortalezca.

Para encontrar los pasos necesarios para instalar un certificado, refiérete a la documentación del sistema operativo de tu ejecutor.

#### Configurar Node.JS para utilizar el certificado

La mayoría de las acciones se escriben en JavaScript y se ejecutan utilizando Node.js, lo cual no utiliza el almacenamiento del certificado del sistema operativo. Para que la aplicación ejecutora auto-hospedada utilice el certificado, debes configurar la variable de ambiente `NODE_EXTRA_CA_CERTS` en la máquina ejecutora.

Puedes configurar la variable de ambiente como una variable de ambiente de sistema, o declararla en un archivo que se llame _.env_ en el directorio de aplicaciones del ejecutor auto-hospedado.

Por ejemplo:

```shell
NODE_EXTRA_CA_CERTS=/usr/share/ca-certificates/extra/mycertfile.crt
```

Las variables de ambiente se leen cuando la aplicación ejecutora auto-hospedada inicia, así que debes configurar la variable de ambiente antes de configurar o iniciar la aplicación ejecutora auto-hospedada. Si cambia la configuración de tu certificado, debes reiniciar la aplicación ejecutora auto-hospedada.

#### Configurar los contenedores de Docker para que utilicen el certificado

Si utilizas las acciones de contenedor de Docker o los contenedores de servicio en tus flujos de trabajo, puede que también necesites instalar el certificado en tu imagen de Docker adicionalmente a configurar la variable de ambiente anterior.

### Configurar los ajustes de proxy HTTP para {% data variables.product.prodname_actions %}

{% data reusables.actions.enterprise-http-proxy %}

Si estos ajustes no se configuran adecuadamente, podrías recibir errores tales como `Resource unexpectedly moved to https://<IP_ADDRESS>` cuando ajustes o cambies tu configuración de {% data variables.product.prodname_actions %}.

### Los ejecutores no se conectan a {% data variables.product.prodname_ghe_server %} después de cambiar el nombre de host

Si cambias el nombre de host de {% data variables.product.product_location %}, los ejecutores auto-hospedados no podrán conectarse al nombre de host antiguo y no podrán ejecutar ningún job.

Necesitarás actualizar la configuración de tus ejecutores auto-hospedados para utilizar el nuevo nombre de host para {% data variables.product.product_location %}. Cada ejecutor auto-hospedado necesitará alguno de los siguientes procedimientos:

* En el directorio de la aplicación ejecutora auto-hospedada, edita los archivos `.runner` y `.credentials` para reemplazar todas las menciones del nombre de host antiguo con el nuevo, posteriormente, reinicia la aplicación ejecutora auto-hospedada.
* Elimina al ejecutor de {% data variables.product.prodname_ghe_server %} utilizando la IU, y vuelve a agregarlo. Para obtener más información, consulta "[Eliminar ejecutores autoalojados](/actions/hosting-your-own-runners/removing-self-hosted-runners) y [Agregar ejecutores autoalojados](/actions/hosting-your-own-runners/adding-self-hosted-runners)."

### Jobs atorados y límites de CPU y de memoria de las {% data variables.product.prodname_actions %}

{% data variables.product.prodname_actions %} se compone de varios servicios que se ejecutan en {% data variables.product.product_location %}. Predeterminadamente, estos servicios se configuran con límites predeterminados de CPU y de memoria que deberían funcionar con la mayoría de las instancias. Sin embargo, los usuarios asiduos de {% data variables.product.prodname_actions %} podrían encesitar ajustar esta configuración.

Puede que estés llegando a los límites de CPU o de memoria si notas que los jobs no están iniciando (aún si hay ejecutores inactivos), o si el progreso del job no se actualiza o cambia en la IU.

#### 1. Verifica el uso total de memoria y CPU en la consola de administración

Accede a la consola de administración y utiliza el tablero de monitoreo para inspeccionar las gráficas del total de memoria y de CPU debajo de "Salud del Sistema". Para obtener más información, consulta la sección "[Acceder al tablero de monitoreo](/admin/enterprise-management/accessing-the-monitor-dashboard)".

Si la "Salud del sistema" para el uso total de CPU es cercano a 100%, o si ya no hay memoria disponible restante, entonces {% data variables.product.product_location %} se está ejecutando al total de su capacidad y necesita escalarse. Para obtener más información, consulta "[Aumentar los recursos de memoria o la CPU](/admin/enterprise-management/increasing-cpu-or-memory-resources)."

#### 2. Verifica el uso de CPU y memoria de los jobs nómadas en la consola de administración

Si la "Salud del sistema" para el uso total de CPU y memoria están bien, desplázate a la parte inferior de la página, hacia la sección de "Jobs nómadas", y revisa las g´raficas de "Valor porcentual de CPU" y de "Uso de memoria".

Cada sección en estas gráficas corresponde a un servicio. Para los servicios de {% data variables.product.prodname_actions %}, busca:

* `mps_frontend`
* `mps_backend`
* `token_frontend`
* `token_backend`
* `actions_frontend`
* `actions_backend`

Si cualquiera de estos servicios estan cerca de o en 100% de uso de CPU, o si la memoria está cerca de su límite (2 GB, predeterminadamente), entonces el recurso de asignación para estos servicios podría necesitar un aumento. Toma nota de cuáles de los servicios antes descritos están cerca de o en su límite.

#### 3. Incrementa la asignación de recursos para los servicios en su límite

1. Ingresa en el shell administrativo utilizando SSH. Para obtener más información, consulta "[Acceder al shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)."
1. Ejecuta el siguiente comando para ver qué recursos se encuentran disponibles para su asignación:

   ```shell
   nomad node status -self
   ```

   En la salida, encuentra la sección de "Recursos asignados". Se debe ver similar al siguiente ejemplo:

   ```
   Allocated Resources
   CPU              Memory          Disk
   7740/49600 MHZ   23 GiB/32 GiB   4.4 GiB/7.9 GiB
   ```

   Para la memoria y el CPU, esta muestra cuánto se asigna al **total** de **todos** los servicios (el valor de la izquierda) y cuánto queda disponible (el valor de la derecha). En el ejemplo anterior, hay 23 GiB de memoria asignada de los 32 GiB totales. Esto significa que hay 9 GiB de memoria disponibles para asignar.

   {% warning %}

   **Advertencia:** Ten cuidado de no asignar más del total de los recursos disponibles o los servicios no podrán iniciar.

   {% endwarning %}
1. Cambia el directorio a `/etc/consul-templates/etc/nomad-jobs/actions`:

   ```shell
   cd /etc/consul-templates/etc/nomad-jobs/actions
   ```

   En este directorio hay tres archivos que corresponden a los servicios de {% data variables.product.prodname_actions %} descritos anteriormente:

   * `mps.hcl.ctmpl`
   * `token.hcl.ctmpl`
   * `actions.hcl.ctmpl`
1. Para los servicios en los que identificaste una necesidad de ajuste, abre el archivo correspondiente y ubica el grupo `resources` que se ve como el siguiente ejemplo:

   ```
   resources {
     cpu = 512
     memory = 2048
     network {
       port "http" { }
     }
   }
   ```

   Los valores están en MHz para los recursos de CPU y en MB para los recursos de memoria.

   Por ejemplo, para incrementar los límites de recursos en el ejemplo anterior a 1 GHz para el CPU y 4 GB de memoria, cámbialos a:

   ```
   resources {
     cpu = 1024
     memory = 4096
     network {
       port "http" { }
     }
   }
   ```
1. Guarda el cambio y sal del archivo.
1. Ejecuta `ghe-config-apply` para aplicar los cambios.

    Cuando ejecutes `ghe-config-apply`, si ves una salida como `Failed to run nomad job '/etc/nomad-jobs/<name>.hcl'`, entonces el cambio seguramente sobreasignó recursos de CPU o de memoria. Si esto sucede, edita los archivos de configuración nuevamente y baja los recursos de CPU o de memoria y luego vuelve a ejecutar `ghe-config-apply`.
1. Después de aplicar la configuración, ejecuta `ghe-actions-check` para verificar que los servicios de {% data variables.product.prodname_actions %} estén operando.
