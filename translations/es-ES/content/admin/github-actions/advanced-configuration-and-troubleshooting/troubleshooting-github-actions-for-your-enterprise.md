---
title: Solucionar problemas en las GitHub Actions de tu empresa
intro: 'Solucionar problemas comunes que ocurren cuando se utilizan {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %}.'
permissions: 'Site administrators can troubleshoot {% data variables.product.prodname_actions %} issues and modify {% data variables.product.prodname_ghe_server %} configurations.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Troubleshooting
redirect_from:
  - /admin/github-actions/troubleshooting-github-actions-for-your-enterprise
shortTitle: Troubleshoot GitHub Actions
ms.openlocfilehash: a0965405e8e37bd75a245738d8d20c91f11ce254
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107305'
---
## Verificar la salud de las {% data variables.product.prodname_actions %}

Puedes comprobar el estado de {% data variables.product.prodname_actions %} en {% data variables.location.product_location %} con la utilidad de la línea de comandos `ghe-actions-check`. Para obtener más información, consulte "[Utilidades de la línea de comandos](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-actions-check)" y "[Acceso al shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".

## Configurar los ejecutores auto-hospedados cuando utilizas un certificado auto-firmado para {% data variables.product.prodname_ghe_server %}

{% data reusables.actions.enterprise-self-signed-cert %} Para obtener más información, consulte "[Configuración de TLS](/admin/configuration/configuring-tls)".

### Instalar el certificado en la máquina ejecutora

Para que un ejecutor auto-hospedado se conecte a {% data variables.product.prodname_ghe_server %} utilizando un certificado auto-firmado, debes instalarlo en la máquina ejecutora para que la seguridad de la conexión se fortalezca.

Para encontrar los pasos necesarios para instalar un certificado, refiérete a la documentación del sistema operativo de tu ejecutor.

### Configurar Node.JS para utilizar el certificado

La mayoría de las acciones se escriben en JavaScript y se ejecutan utilizando Node.js, lo cual no utiliza el almacenamiento del certificado del sistema operativo. Para que la aplicación del ejecutor autohospedado use el certificado, debe establecer la variable de entorno `NODE_EXTRA_CA_CERTS` en el equipo del ejecutor.

Puede configurar la variable de entorno como una variable de entorno del sistema o declararla en un archivo que se llame _.env_ en el directorio de aplicaciones del ejecutor autohospedado.

Por ejemplo:

```shell
NODE_EXTRA_CA_CERTS=/usr/share/ca-certificates/extra/mycertfile.crt
```

Las variables de ambiente se leen cuando la aplicación ejecutora auto-hospedada inicia, así que debes configurar la variable de ambiente antes de configurar o iniciar la aplicación ejecutora auto-hospedada. Si cambia la configuración de tu certificado, debes reiniciar la aplicación ejecutora auto-hospedada.

### Configurar los contenedores de Docker para que utilicen el certificado

Si utilizas las acciones de contenedor de Docker o los contenedores de servicio en tus flujos de trabajo, puede que también necesites instalar el certificado en tu imagen de Docker adicionalmente a configurar la variable de ambiente anterior.

## Configurar los ajustes de proxy HTTP para {% data variables.product.prodname_actions %}

{% data reusables.actions.enterprise-http-proxy %}

Si estas opciones no están configuradas correctamente, es posible que reciba errores como `Resource unexpectedly moved to https://<IP_ADDRESS>` al establecer o cambiar la configuración de {% data variables.product.prodname_actions %}.

## Los ejecutores no se conectan a {% data variables.product.prodname_ghe_server %} con un nombre de host nuevo

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

Si despliegas a {% data variables.product.prodname_ghe_server %} en tu ambiente con un nombre de host nuevo y el nombre de host anterior ya no resuelve hacia tu instancia, los ejecutores auto-hospedados no podrán conectarse al nombre de host anterior y no se ejecutará ningún job.

Necesitarás actualizar la configuración de tus ejecutores auto-hospedados para utilizar el nuevo nombre de host para {% data variables.location.product_location %}. Cada ejecutor auto-hospedado necesitará alguno de los siguientes procedimientos:

* En el directorio de aplicaciones del ejecutor autohospedado, edite los archivos `.runner` y `.credentials` para reemplazar todas las menciones del nombre de host antiguo por el nuevo nombre de host y, a continuación, reinicie la aplicación del ejecutor autohospedado.
* Elimina al ejecutor de {% data variables.product.prodname_ghe_server %} utilizando la IU, y vuelve a agregarlo. Para obtener más información, consulte "[Eliminación de ejecutores autohospedados](/actions/hosting-your-own-runners/removing-self-hosted-runners)" y "[Agregar ejecutores autohospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

## Jobs atorados y límites de CPU y de memoria de las {% data variables.product.prodname_actions %}

{% data variables.product.prodname_actions %} se compone de varios servicios que se ejecutan en {% data variables.location.product_location %}. Predeterminadamente, estos servicios se configuran con límites predeterminados de CPU y de memoria que deberían funcionar con la mayoría de las instancias. Sin embargo, los usuarios asiduos de {% data variables.product.prodname_actions %} podrían encesitar ajustar esta configuración.

Puede que estés llegando a los límites de CPU o de memoria si notas que los jobs no están iniciando (aún si hay ejecutores inactivos), o si el progreso del job no se actualiza o cambia en la IU.

### 1. Verifique el uso total de la memoria y la CPU en la consola de administración

Accede a la consola de administración y utiliza el tablero de monitoreo para inspeccionar las gráficas del total de memoria y de CPU debajo de "Salud del Sistema". Para obtener más información, consulte "[Acceso al panel de supervisión](/admin/enterprise-management/accessing-the-monitor-dashboard)".

Si la "Salud del sistema" para el uso total de CPU está cerca del 100 % o si ya no queda memoria libre, {% data variables.location.product_location %} se está ejecutando al total de su capacidad y necesita escalarse. Para obtener más información, consulte "[Aumento de los recursos de CPU o memoria](/admin/enterprise-management/increasing-cpu-or-memory-resources)".

### 2. Verifique el uso de CPU y memoria de los trabajos nómadas en la consola de administración

Si la "Salud del sistema" para el uso total de CPU y memoria están bien, desplázate a la parte inferior de la página, hacia la sección de "Jobs nómadas", y revisa las g´raficas de "Valor porcentual de CPU" y de "Uso de memoria".

Cada sección en estas gráficas corresponde a un servicio. Para los servicios de {% data variables.product.prodname_actions %}, busca:

* `mps_frontend`
* `mps_backend`
* `token_frontend`
* `token_backend`
* `actions_frontend`
* `actions_backend`

Si cualquiera de estos servicios estan cerca de o en 100% de uso de CPU, o si la memoria está cerca de su límite (2 GB, predeterminadamente), entonces el recurso de asignación para estos servicios podría necesitar un aumento. Toma nota de cuáles de los servicios antes descritos están cerca de o en su límite.

### 3. Incremente la asignación de recursos para los servicios que están en su límite

1. Ingresa en el shell administrativo utilizando SSH. Para obtener más información, consulte "[Acceso al shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)".
1. Ejecuta el siguiente comando para ver qué recursos se encuentran disponibles para su asignación:

   ```shell
   nomad node status -self
   ```

   En la salida, encuentra la sección de "Recursos asignados". Es similar al ejemplo siguiente:

   ```
   Allocated Resources
   CPU              Memory          Disk
   7740/49600 MHZ   23 GiB/32 GiB   4.4 GiB/7.9 GiB
   ```

   En el caso de la CPU y la memoria, se muestra cuánto se asigna al **total** de **todos los** servicios (el valor izquierdo) y cuánto está disponible (el valor derecho). En el ejemplo anterior, hay 23 GiB de memoria asignada de los 32 GiB totales. Esto significa que hay 9 GiB de memoria disponibles para asignar.

   {% warning %}

   **Advertencia:** Tenga cuidado de no asignar más del total de los recursos disponibles o los servicios no podrán iniciarse.

   {% endwarning %}
1. Cambie el directorio a `/etc/consul-templates/etc/nomad-jobs/actions`:

   ```shell
   cd /etc/consul-templates/etc/nomad-jobs/actions
   ```

   En este directorio hay tres archivos que corresponden a los servicios de {% data variables.product.prodname_actions %} descritos anteriormente:

   * `mps.hcl.ctmpl`
   * `token.hcl.ctmpl`
   * `actions.hcl.ctmpl`
1. Para los servicios en los que identificó una necesidad de ajuste, abra el archivo correspondiente y ubique el grupo `resources`, que tiene el siguiente aspecto:

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
1. Guarde y cierre el archivo.
1. Ejecute `ghe-config-apply` para aplicar los cambios.

    Al ejecutar `ghe-config-apply`, si ve una salida como `Failed to run nomad job '/etc/nomad-jobs/<name>.hcl'`, es probable que el cambio haya asignado más recursos de CPU o memoria de la cuenta. Si esto sucede, vuelva a editar los archivos de configuración y reduzca la CPU o memoria asignadas y vuelva a ejecutar `ghe-config-apply`.
1. Una vez aplicada la configuración, ejecute `ghe-actions-check` para comprobar que los servicios de {% data variables.product.prodname_actions %} estén operativos.

{% ifversion fpt or ghec or ghes %}
## Solucionar los fallos cuando el {% data variables.product.prodname_dependabot %} active los flujos de trabajo existentes

{% data reusables.dependabot.beta-security-and-version-updates %}

Después de configurar las actualizaciones del {% data variables.product.prodname_dependabot %} para {% data variables.location.product_location %}, puedes ver errores cuando los flujos de trabajo existentes los desencadenan los eventos del {% data variables.product.prodname_dependabot %}.

De manera predeterminada, las ejecuciones de flujo de trabajo de {% data variables.product.prodname_actions %} que se activan desde {% data variables.product.prodname_dependabot %} a partir de los eventos `push`, `pull_request`, `pull_request_review` o `pull_request_review_comment` se tratan como si se abrieran desde una bifurcación de repositorio. A diferencia de los flujos de trabajo que activan otros actores, esto significa que recibieron un `GITHUB_TOKEN` de solo lectura y no tienen acceso a ninguno de los secretos que normalmente se encuentran disponibles. Esto ocasionará que cualquier flujo de trabajo que intente escribir en el repositorio falle cuando los activa el {% data variables.product.prodname_dependabot %}.

Hay tres formas de resolver este problema:

1. Puede actualizar los flujos de trabajo para que ya nos los active {% data variables.product.prodname_dependabot %} mediante una expresión como: `if: github.actor != 'dependabot[bot]'`. Para obtener más información, consulte "[Expresiones](/actions/learn-github-actions/expressions)".
2. Puede modificar los flujos de trabajo para usar un proceso en dos pasos que incluya `pull_request_target`, que no tiene estas limitaciones. Para obtener más información, consulte "[Automatización de {% data variables.product.prodname_dependabot %} con {% data variables.product.prodname_actions %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions#responding-to-events)".
3. Puede proporcionar acceso a los flujos de trabajo que activa {% data variables.product.prodname_dependabot %} a secretos y permitir que el término `permissions` aumente el alcance predeterminado de `GITHUB_TOKEN`. Para obtener más información, consulte ["Proporcionar acceso a los flujos de trabajo que activa el {% data variables.product.prodname_dependabot %} para los secretos y permisos incrementados](#providing-workflows-triggered-by-dependabot-access-to-secrets-and-increased-permissions)" a continuación.

### Proporcionar acceso a los flujos de trabajo que activa el {% data variables.product.prodname_dependabot %} para los secretos y permisos incrementados

1. Ingresa en el shell administrativo utilizando SSH. Para obtener más información, consulte "[Acceso al shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)".
1. Para eliminar estas limitaciones sobre los flujos de trabajo que desencadena el {% data variables.product.prodname_dependabot %} en {% data variables.location.product_location %}, utiliza el siguiente comando.
    ``` shell
    $ ghe-config app.actions.disable-dependabot-enforcement true
    ```
1. Aplique la configuración.
    ```shell
    $ ghe-config-apply
    ```
1. Regresar a {% data variables.product.prodname_ghe_server %}.

{% endif %}

{% ifversion ghes > 3.3 %}

<a name="bundled-actions"></a>

## Solución de problemas en las acciones empaquetadas en {% data variables.product.prodname_actions %}

Si recibes el siguiente error al instalar {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %}, puedes resolverlo instalando las acciones empaquetadas oficiales y los flujos de trabajo iniciales.

```shell
A part of the Actions setup had problems and needs an administrator to resolve.
```

Para instalar las acciones empaquetadas oficiales y flujos de trabajo iniciales dentro de una organización designada en {% data variables.product.prodname_ghe_server %}, realiza el siguiente procedimiento.

1. Identifica una organización que almacenará las acciones empaquetadas oficiales y flujos de trabajo iniciales. Puedes crear una organización nueva o reutilizar una existente. 
    - Para crear una organización nueva, consulte "[Crear una organización desde cero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)". 
    - Para obtener ayuda a la hora de elegir un nombre para esta organización, consulte "[Nombres reservados](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#reserved-names)". 

1. Ingresa en el shell administrativo utilizando SSH. Para obtener más información, consulte "[Acceso al shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)".
1. Para designar la organización como la ubicación donde almacenar las acciones agrupadas, use el comando `ghe-config` y reemplace `ORGANIZATION` por el nombre de la organización.
    ```shell
    $ ghe-config app.actions.actions-org ORGANIZATION
    ```
    y:
    ```shell
    $ ghe-config app.actions.github-org ORGANIZATION
    ```
1.  Para agregar las acciones empaquetadas a tu organización, desactiva el SHA.
    ```shell
    $ ghe-config --unset 'app.actions.actions-repos-sha1sum'
    ```
1. Aplique la configuración.
    ```shell
    $ ghe-config-apply
    ```

Una vez completados estos pasos, puede reanudar la configuración de {% data variables.product.prodname_actions %} en "[Administración de permisos de acceso para Acciones de GitHub en la empresa](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#managing-access-permissions-for-github-actions-in-your-enterprise)".

{% endif %}
