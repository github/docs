---
title: Configurar o aplicativo do executor auto-hospedado como um serviço
intro: Você pode configurar o aplicativo do executor auto-hospedado como um serviço para que inicie o aplicativo do executor automaticamente quando a máquina for iniciada.
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
ms.openlocfilehash: de50bfe5caa8072bf5262c65a4fa471bff3c2106
ms.sourcegitcommit: 399f27841ff88f14a3880d351c282db85182ac25
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: '147092923'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% capture service_first_step %}1. Interrompa o aplicativo do executor auto-hospedado se ele estiver em execução no momento.{% endcapture %} {% capture service_non_windows_intro_shell %}No computador do executor, abra um shell no diretório em que você instalou o aplicativo do executor auto-hospedado. Use os comandos abaixo para instalar e gerenciar o serviço de executor auto-hospedado.{% endcapture %} {% capture service_nonwindows_intro %}Você precisa adicionar um executor ao {% data variables.product.product_name %} antes de configurar o aplicativo do executor auto-hospedado como um serviço. Para obter mais informações, confira "[Como adicionar executores auto-hospedados](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)".{% endcapture %} {% capture service_win_name %}actions.runner.*{% endcapture %}


{% linux %}

{{ service_nonwindows_intro }}

Para os sistemas Linux que usam `systemd`, use o script `svc.sh` distribuído com o aplicativo do executor auto-hospedado para instalá-lo e gerenciá-lo usando o aplicativo como um serviço.

{{ service_non_windows_intro_shell }}

{% endlinux %}

{% windows %}

{% note %}

**Observação:** a configuração do executor auto-hospedado como um serviço no Windows faz parte do processo de configuração do aplicativo. Se você já configurou o aplicativo de executor auto-hospedado, mas não escolheu configurá-lo como um serviço, você deve remover o executor do {% data variables.product.prodname_dotcom %} e reconfigurar o aplicativo. Ao reconfigurar o aplicativo, selecione a opção para configurar o aplicativo como um serviço.

Para obter mais informações, confira "[Como remover executores auto-hospedados](/actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners)" e "[Como adicionar executores auto-hospedados](/actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners)".

{% endnote %}

Você pode gerenciar o serviço de executor no aplicativo **Serviços** Windows ou usar o PowerShell para executar os comandos abaixo.

{% endwindows %}

{% mac %}

{{ service_nonwindows_intro }}

{{ service_non_windows_intro_shell }}

{% endmac %}

{% linux %}

## <a name="installing-the-service"></a>Instalar o serviço

{{ service_first_step }}
1. Instale o serviço com o comando a seguir:

   ```shell
   sudo ./svc.sh install
   ```

1. Como alternativa, o comando usa um argumento `user` opcional para instalar o serviço como outro usuário.

  ```shell
  ./svc.sh install <em>USERNAME</em>
  ```

{% endlinux %}

{% mac %}

## <a name="installing-the-service"></a>Instalar o serviço

{{ service_first_step }}
1. Instale o serviço com o comando a seguir:

   ```shell
   ./svc.sh install
   ```
{% endmac %}

## <a name="starting-the-service"></a>Iniciar o serviço

Inicie o serviço com o seguinte comando:

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

## <a name="checking-the-status-of-the-service"></a>Verificando o status do serviço

Verifique o status do serviço com o comando a seguir:

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

 Para obter mais informações sobre como ver o status do executor auto-hospedado, confira "[Monitoramento e solução de problemas de executores auto-hospedados](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)".

## <a name="stopping-the-service"></a>Interromper o serviço

Interrompa o serviço com o comando a seguir:

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

## <a name="uninstalling-the-service"></a>Desinstalando o serviço

1. Interrompa o serviço se estiver em execução.
1. Desinstale o serviço com o comando a seguir:

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

## <a name="customizing-the-self-hosted-runner-service"></a>Personalizar o serviço do executor auto-hospedado

Caso não deseje usar a configuração padrão do serviço `systemd` acima, crie um serviço personalizado ou use o mecanismo de serviço que preferir. Considere o uso do modelo `serviced` localizado em `actions-runner/bin/actions.runner.service.template` como uma referência. Se você usa um serviço personalizado, o serviço do executor auto-hospedado precisa sempre ser acessado por meio do ponto de entrada `runsvc.sh`.

{% endlinux %}

{% mac %}

## <a name="customizing-the-self-hosted-runner-service"></a>Personalizar o serviço do executor auto-hospedado

Se você não desejar usar a configuração-padrão do serviço do launchd acima, você poderá criar um serviço personalizado ou usar o mecanismo de serviço que preferir. Considere o uso do modelo `plist` localizado em `actions-runner/bin/actions.runner.plist.template` como uma referência. Se você usa um serviço personalizado, o serviço do executor auto-hospedado precisa sempre ser acessado por meio do ponto de entrada `runsvc.sh`.

{% endmac %}
