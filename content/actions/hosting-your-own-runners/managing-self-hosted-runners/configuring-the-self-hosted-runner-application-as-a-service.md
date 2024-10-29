---
title: Configuring the self-hosted runner application as a service
shortTitle: Run the runner app as a service
intro: You can configure the self-hosted runner application as a service to automatically start the runner application when the machine starts.
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service
  - /actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
defaultPlatform: linux
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

{% capture service_first_step %}1. Stop the self-hosted runner application if it is currently running.{% endcapture %}
{% capture service_non_windows_intro_shell %}On the runner machine, open a shell in the directory where you installed the self-hosted runner application. Use the commands below to install and manage the self-hosted runner service.{% endcapture %}

{% capture service_nonwindows_intro %}

{% note %}

**Note:** You must add a runner to {% data variables.product.product_name %} before you can configure the self-hosted runner application as a service.
For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners)."

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

**Note:** Configuring the self-hosted runner application as a service on Windows is part of the application configuration process. If you have already configured the self-hosted runner application but did not choose to configure it as a service, you must remove the runner from {% data variables.product.prodname_dotcom %} and re-configure the application. When you re-configure the application, choose the option to configure the application as a service.

For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/removing-self-hosted-runners)" and "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners)."

{% endnote %}

You can manage the runner service in the Windows **Services** application, or you can use PowerShell to run the commands below.

{% endwindows %}

{% mac %}

{{ service_nonwindows_intro }}

{{ service_non_windows_intro_shell }}

{% endmac %}

{% linux %}

## Installing the service

{{ service_first_step }}
1. Install the service with the following command:

   ```shell
   sudo ./svc.sh install
   ```

1. Alternatively, the command takes an optional `user` argument to install the service as a different user.

   ```shell
   ./svc.sh install USERNAME
   ```

{% endlinux %}

{% mac %}

## Installing the service

{{ service_first_step }}
1. Install the service with the following command:

   ```shell
   ./svc.sh install
   ```

{% endmac %}

## Starting the service

Start the service with the following command:

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

## Checking the status of the service

Check the status of the service with the following command:

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

 For more information on viewing the status of your self-hosted runner, see  "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners)."

## Stopping the service

Stop the service with the following command:

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

## Uninstalling the service

1. Stop the service if it is currently running.
1. Uninstall the service with the following command:

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

## Customizing the self-hosted runner service

If you don't want to use the above default `systemd` service configuration, you can create a customized service or use whichever service mechanism you prefer. Consider using the `serviced` template at `actions-runner/bin/actions.runner.service.template` as a reference. If you use a customized service, the self-hosted runner service must always be invoked using the `runsvc.sh` entry point.

{% endlinux %}

{% mac %}

## Customizing the self-hosted runner service

If you don't want to use the above default launchd service configuration, you can create a customized service or use whichever service mechanism you prefer. Consider using the `plist` template at `actions-runner/bin/actions.runner.plist.template` as a reference. If you use a customized service, the self-hosted runner service must always be invoked using the `runsvc.sh` entry point.

{% endmac %}
