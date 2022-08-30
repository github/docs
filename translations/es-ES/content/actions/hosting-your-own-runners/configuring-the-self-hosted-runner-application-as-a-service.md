---
title: Configurar la aplicación del ejecutor autoalojado como un servicio
intro: Puedes configurar la aplicación del ejecutor autoalojado como un servicio para iniciar automáticamente la aplicación del ejecutor cuando se inicia la máquina.
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
defaultPlatform: linux
shortTitle: Ejecutar la app del ejecutor al inicio
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% capture service_first_step %}1. Detén la aplicación del ejecutor autoalojado si se está ejecutando actualmente.{% endcapture %}
{% capture service_non_windows_intro_shell %}En la máquina del ejecutor, abre un shell en el directorio en el que instalaste la aplicación del ejecutor autoalojado. Usa los comandos que se indican a continuación para instalar y administrar el servicio de ejecutor autoalojado.{% endcapture %}

{% capture service_nonwindows_intro %}

{% note %}

**Note:** You must add a runner to {% data variables.product.product_name %} before you can configure the self-hosted runner application as a service. Para obtener más información, consulta "[Agregar ejecutores autoalojados](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)".

{% endnote %}
{% endcapture %}

{% capture service_win_name %}actions.runner.*{% endcapture %}

{% linux %}

{{ service_nonwindows_intro }}

For Linux systems that use `systemd`, you can use the `svc.sh` script that is created after successfully adding the runner to install and manage using the application as a service.

{{ service_non_windows_intro_shell }}

{% endlinux %}

{% windows %}

{% note %}

**Nota:** Configurar la aplicación del ejecutor autoalojado como un servicio en Windows es parte del proceso de configuración de la aplicación. Si ya configuraste la aplicación del ejecutor auto-hospedado pero no elegiste configurarla como servicio, debes eliminar el ejecutor de {% data variables.product.prodname_dotcom %} y volver a configurar la aplicación. Cuando vuelvas a configurar la aplicación, elige la opción para configurar la aplicación como un servicio.

Para obtener más información, consulta "[Eliminar ejecutores autoalojados](/actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners) y [Agregar ejecutores autoalojados](/actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners)."

{% endnote %}

Puedes administrar el servicio de ejecutor en la aplicación de **Servicios** de Windows, o puedes usar PowerShell para ejecutar los comandos que se indican a continuación.

{% endwindows %}

{% mac %}

{{ service_nonwindows_intro }}

{{ service_non_windows_intro_shell }}

{% endmac %}

{% linux %}

## Instalar el servicio

{{ service_first_step }}
1. Instala el servicio con el siguiente comando:

   ```shell
   sudo ./svc.sh install
   ```

1. Como alternativa, el comando toma un argumento opcional de `user` para instalar el servicio como un usuario diferente.

  ```shell
  ./svc.sh install <em>USERNAME</em>
  ```

{% endlinux %}

{% mac %}

## Instalar el servicio

{{ service_first_step }}
1. Instala el servicio con el siguiente comando:

   ```shell
   ./svc.sh install
   ```
{% endmac %}

## Iniciar el servicio

Inicia el servicio con el siguiente comando:

{% linux %}
```shell
sudo ./svc.sh start
```
{% endlinux %}
{% windows %}
```shell
Start-Service "{{ service_win_name }}"
```
{% endwindows %}
{% mac %}
```shell
./svc.sh start
```
{% endmac %}

## Comprobar el estado del servicio

Verifica el estado del servicio con el siguiente comando:

{% linux %}
```shell
sudo ./svc.sh status
```
{% endlinux %}
{% windows %}
```shell
Get-Service "{{ service_win_name }}"
```
{% endwindows %}
{% mac %}
```shell
./svc.sh status
```
{% endmac %}

 Para obtener más información sobre la visualización del estado de tu ejecutor auto-hospedado, consulta la sección "[Monitoreo y solución de problemas para ejecutores auto-hospedados](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)".

## Detener el servicio

Detiene el servicio con el siguiente comando:

{% linux %}
```shell
sudo ./svc.sh stop
```
{% endlinux %}
{% windows %}
```shell
Stop-Service "{{ service_win_name }}"
```
{% endwindows %}
{% mac %}
```shell
./svc.sh stop
```
{% endmac %}

## Desinstalar el servicio

1. Detiene el servicio si se está ejecutando actualmente.
1. Desinstala el servicio con el siguiente comando:

    {% linux %}
    ```shell
    sudo ./svc.sh uninstall
    ```
    {% endlinux %}
    {% windows %}
    ```shell
    Remove-Service "{{ service_win_name }}"
    ```
    {% endwindows %}
    {% mac %}
    ```shell
    ./svc.sh uninstall
    ```
    {% endmac %}


{% linux %}

## Personalizar el servicio del ejecutor auto-hospedado

Si no quieres utilizar la configuración de servicio predeterminada para `systemd` antes mencionada, puedes crear un servicio personalizado o utilizar cualquier mecanismo de servicio que prefieras. Considera utilizar la plantilla de `serviced` en `actions-runner/bin/actions.runner.service.template` como referencia. Si utilizas un servicio personalizado, el servicio del ejecutor auto-hospedado siempre debe invocarse utilizando el punto de entrada `runsvc.sh`.

{% endlinux %}

{% mac %}

## Personalizar el servicio del ejecutor auto-hospedado

Si no quieres utilizar la configuración predeterminada del servicio launchd antes mencionada, puedes crear un servicio personalizado o cualquier mecanismo de servicio que prefieras. Considera utilizar la plantilla de `plist` en `actions-runner/bin/actions.runner.plist.template` como referencia. Si utilizas un servicio personalizado, el servicio del ejecutor auto-hospedado siempre debe invocarse utilizando el punto de entrada `runsvc.sh`.

{% endmac %}
