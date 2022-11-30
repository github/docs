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
shortTitle: Run runner app on startup
ms.openlocfilehash: d9f89bafe27314d321a30e2ce6c4eb8c98ec7dbb
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147705200'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% capture service_first_step %}1. Detenga la aplicación del ejecutor autohospedado si está actualmente en ejecución.{% endcapture %} {% capture service_non_windows_intro_shell %}En la máquina del ejecutor, abra un shell en el directorio donde ha instalado la aplicación de ejecutor autohospedado. Usa los comandos que se indican a continuación para instalar y administrar el servicio de ejecutor autoalojado.{% endcapture %}

{% capture service_nonwindows_intro %}

{% note %}

**Nota:** Debes agregar un ejecutor a {% data variables.product.product_name %} antes de que puedas configurar la aplicación del ejecutor auto-hospedado como servicio. Para más información, vea "[Adición de ejecutores autohospedados](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)".

{% endnote %} {% endcapture %}

{% capture service_win_name %}actions.runner.*{% endcapture %}

{% linux %}

{{ service_nonwindows_intro }}

En los sistemas Linux que usan `systemd`, puedes usar el script `svc.sh` que se crea después de agregar el ejecutor para realizar la instalación y la administración mediante la aplicación como servicio.

{{ service_non_windows_intro_shell }}

{% endlinux %}

{% windows %}

{% note %}

**Nota:** La configuración de la aplicación de ejecutor autohospedado como un servicio en Windows forma parte del proceso de configuración de la aplicación. Si ya configuraste la aplicación del ejecutor auto-hospedado pero no elegiste configurarla como servicio, debes eliminar el ejecutor de {% data variables.product.prodname_dotcom %} y volver a configurar la aplicación. Cuando vuelvas a configurar la aplicación, elige la opción para configurar la aplicación como un servicio.

Para más información, vea "[Eliminación de ejecutores autohospedados](/actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners)" y "[Adición de ejecutores autohospedados](/actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners)".

{% endnote %}

Puede administrar el servicio de ejecutor en la aplicación Windows **Services**, o bien puede usar PowerShell para ejecutar los comandos siguientes.

{% endwindows %}

{% mac %}

{{ service_nonwindows_intro }}

{{ service_non_windows_intro_shell }}

{% endmac %}

{% linux %}

## Instalar el servicio

{{ service_first_step }}
1. Instalar el servicio con el siguiente comando:

   ```shell
   sudo ./svc.sh install
   ```

1. De forma alternativa, el comando toma un argumento opcional `user` para instalar el servicio como un usuario diferente.

  ```shell
  ./svc.sh install <em>USERNAME</em>
  ```

{% endlinux %}

{% mac %}

## Instalar el servicio

{{ service_first_step }}
1. Instalar el servicio con el siguiente comando:

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
{% endlinux %} {% windows %}
```shell
Start-Service "{{ service_win_name }}"
```
{% endwindows %} {% mac %}
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
{% endlinux %} {% windows %}
```shell
Get-Service "{{ service_win_name }}"
```
{% endwindows %} {% mac %}
```shell
./svc.sh status
```
{% endmac %}

 Para más información sobre cómo ver el estado del ejecutor autohospedado, vea "[Supervisión y solución de problemas de ejecutores autohospedados](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)".

## Detener el servicio

Detiene el servicio con el siguiente comando:

{% linux %}
```shell
sudo ./svc.sh stop
```
{% endlinux %} {% windows %}
```shell
Stop-Service "{{ service_win_name }}"
```
{% endwindows %} {% mac %}
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
    {% endlinux %}  {% windows %}
    ```shell
    Remove-Service "{{ service_win_name }}"
    ```
    {% endwindows %}  {% mac %}
    ```shell
    ./svc.sh uninstall
    ```
    {% endmac %}


{% linux %}

## Personalizar el servicio del ejecutor auto-hospedado

Si no quiere usar la configuración predeterminada del servicio `systemd` anterior, puede crear un servicio personalizado o utilizar el mecanismo de servicio que prefiera. Considere la posibilidad de usar la plantilla `serviced` en `actions-runner/bin/actions.runner.service.template` como referencia. Si usa un servicio personalizado, el servicio del ejecutor autohospedado siempre se debe invocar mediante el punto de entrada `runsvc.sh`.

{% endlinux %}

{% mac %}

## Personalizar el servicio del ejecutor auto-hospedado

Si no quieres utilizar la configuración predeterminada del servicio launchd antes mencionada, puedes crear un servicio personalizado o cualquier mecanismo de servicio que prefieras. Considere la posibilidad de usar la plantilla `plist` en `actions-runner/bin/actions.runner.plist.template` como referencia. Si usa un servicio personalizado, el servicio del ejecutor autohospedado siempre se debe invocar mediante el punto de entrada `runsvc.sh`.

{% endmac %}
