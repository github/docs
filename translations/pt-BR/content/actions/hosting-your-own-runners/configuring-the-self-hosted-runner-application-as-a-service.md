---
title: Configurar o aplicativo do executor auto-hospedado como um serviço
intro: Você pode configurar o aplicativo do executor auto-hospedado como um serviço para que inicie o aplicativo do executor automaticamente quando a máquina for iniciada.
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% capture service_first_step %}1. Pare o aplicativo do executor auto-hospedado se estiver em execução no momento.{% endcapture %}
{% capture service_non_windows_intro_shell %}Na máquina, abra um shell no diretório onde você instalou o aplicativo do executor auto-hospedado. Use os comandos abaixo para instalar e gerenciar o serviço do executor auto-hospedado.{% endcapture %}
{% capture service_nonwindows_intro %}Você deve adicionar um executor a {% data variables.product.product_name %} antes de poder configurar o aplicativo do executor auto-hospedado um serviço. Para obter mais informações, consulte "[Adicionando executores auto-hospedados](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)".{% endcapture %}
{% capture service_win_name %}actions.runner.*{% endcapture %}


{% linux %}

{{ service_nonwindows_intro }}

Para os sistemas Linux que usam o `systemd`, você pode usar o script `svc. h` distribuído com o aplicativo do executor auto-hospedado para instalação e gerenciamento usando o aplicativo como um serviço.

{{ service_non_windows_intro_shell }}

{% endlinux %}

{% windows %}

{% note %}

**Observação:** A configuração do executor auto-hospedado como um serviço no Windows faz parte do processo de configuração do aplicativo. Se você já configurou o aplicativo de executor auto-hospedado, mas não escolheu configurá-lo como um serviço, você deve remover o executor do {% data variables.product.prodname_dotcom %} e reconfigurar o aplicativo. Ao reconfigurar o aplicativo, selecione a opção para configurar o aplicativo como um serviço.

Para obter mais informações, consulte "[Removendo os executores auto-hospedados](/actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners)" e "[Adicionando executores auto-hospedados](/actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners)".

{% endnote %}

Você pode gerenciar o serviço do executor no aplicativo **Serviços** do Windows, ou você pode usar o PowerShell para executar os comandos abaixo.

{% endwindows %}

{% mac %}

{{ service_nonwindows_intro }}

{{ service_non_windows_intro_shell }}

{% endmac %}

{% linux %}

### Instalando o serviço

{{ service_first_step }}
1. Instale o serviço com o comando a seguir:

   ```shell
   sudo ./svc.sh install
   ```

{% endlinux %}
{% mac %}

### Instalando o serviço

{{ service_first_step }}
1. Instale o serviço com o comando a seguir:

   ```shell
   ./svc.sh install
   ```
{% endmac %}

### Iniciar o serviço

Inicie o serviço com o seguinte comando:

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

### Verificando o status do serviço

Verifique o status do serviço com o comando a seguir:

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

 Para obter mais informações sobre a visualização do status de seu executor auto-hospedado, consulte "[Monitoramento e resolução de problemas dos executores auto-hospedados](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)".

### Interromper o serviço

Interrompa o serviço com o comando a seguir:

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

### Desinstalando o serviço

1. Interrompa o serviço se estiver em execução.
1. Desinstale o serviço com o comando a seguir:

    {% linux %}
    ```shell
    sudo ./svc.sh uninstall
    ```
    {% endlinux %}
    {% windows %}
    ```shell
    Stop-Service "{{ service_win_name }}"
    ```
    {% endwindows %}
    {% mac %}
    ```shell
    ./svc.sh uninstall
    ```
    {% endmac %}


{% linux %}

### Personalizar o serviço do executor auto-hospedado

Se você não desejar usar a configuração-padrão doserviço do `systemd` acima, você poderá criar um serviço personalizado ou usar o mecanismo de serviço que preferir. Considere usar o template `serviced` em `actions-runner/bin/actions.runner.service.template` como referência. Se você usa um serviço personalizado, o serviço do executor auto-hospedado deve sempre ser acessado usando o ponto de entrada `runsvc.sh`.

{% endlinux %}

{% mac %}

### Personalizar o serviço do executor auto-hospedado

Se você não desejar usar a configuração-padrão do serviço do launchd acima, você poderá criar um serviço personalizado ou usar o mecanismo de serviço que preferir. Considere usar o modelo `plist` em `actions-runner/bin/actions.runner.plist.template` como referência. Se você usa um serviço personalizado, o serviço do executor auto-hospedado deve sempre ser acessado usando o ponto de entrada `runsvc.sh`.

{% endmac %}
