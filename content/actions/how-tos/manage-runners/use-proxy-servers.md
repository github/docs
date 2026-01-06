---
title: Using proxy servers with a runner
shortTitle: Use proxy servers
intro: You can configure runners in isolated environments to use a proxy server for secure communication with {% data variables.product.github %}.
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners
  - /actions/hosting-your-own-runners/using-a-proxy-server-with-self-hosted-runners
  - /actions/hosting-your-own-runners/managing-self-hosted-runners/using-a-proxy-server-with-self-hosted-runners
  - /actions/how-tos/hosting-your-own-runners/managing-self-hosted-runners/using-a-proxy-server-with-self-hosted-runners
  - /actions/how-tos/managing-self-hosted-runners/using-a-proxy-server-with-self-hosted-runners
  - /actions/how-tos/manage-runners/self-hosted-runners/use-proxy-servers
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Configuring a proxy for Linux and Windows runners

If your runner needs to communicate via a proxy server, you can configure proxy settings using environment variables or system-level configurations.

{% data reusables.actions.actions-proxy-environment-variables-table %}

The proxy environment variables are read when the runner application starts, so you must set the environment variables before configuring or starting the runner application. If your proxy configuration changes, you must restart the runner application.

On Windows machines, the proxy environment variable names are case-insensitive. On Linux and macOS machines, we recommend that you use all lowercase environment variables. If you have an environment variable in both lowercase and uppercase on Linux or macOS, for example `https_proxy` and `HTTPS_PROXY`, the self-hosted runner application uses the lowercase environment variable.

{% data reusables.actions.self-hosted-runner-ports-protocols %}

### Example configurations

{% data reusables.actions.environment-variables-as-case-sensitive %}

#### Linux and macOS

Set proxy environment variables for your runner.

```shell copy
export https_proxy=http://proxy.local:8080
export http_proxy=http://proxy.local:8080
export no_proxy=example.com,localhost,127.0.0.1
```

#### Windows

On Windows, you can configure proxy settings either by setting environment variables or by using the [netsh command](https://learn.microsoft.com/en-us/windows/win32/winhttp/netsh-exe-commands#set-advproxy).
The netsh approach applies to applications and services that rely on the WinHTTP API.

Setting environment variables is still required for runners that use private networking. Whether you also need to configure netsh depends on the applications used in your workflows.

```shell copy
netsh winhttp set advproxy setting-scope=machine settings={\"Proxy\":\"proxy.local:8080\",\"ProxyBypass\":\"168.63.129.16;169.254.169.254\",\"AutoconfigUrl\":\"\",\"AutoDetect\":false} 
```

When configuring this during custom image generation, use `setting-scope=machine` to ensure the proxy settings persist after reboots and during VM imaging.

### Making proxy settings persistent

When setting these environment variables during custom image generation, ensure the configuration persists across reboots or image rebuilds.

#### Linux and macOS

Write the variables to `/etc/environment`.

```shell
 echo 'http_proxy=http://proxy.local' >> /etc/environment
```

#### Windows

Set the system-wide environment variables.

```shell copy
[Environment]::SetEnvironmentVariable("http_proxy", "http://proxy.local", "Machine")
```

## Configuring a proxy for Azure runners

If your runner is hosted in Azure, either as a self-hosted runner or a GitHub-hosted larger runner deployed with private networking, you may need to configure a proxy to allow outbound connectivity to GitHub services while maintaining network isolation.

You should add Azure metadata and management IPs to your `no_proxy` list to ensure the runner can access required Azure services. These endpoints allow Azure VMs to retrieve configuration and identity information needed for proper operation.

The two Azure IPs are:
* 168.63.129.16 (see [Azure IP address 168.63.129.16 overview](https://learn.microsoft.com/en-us/azure/virtual-network/what-is-ip-address-168-63-129-16?tabs=linux))
* 169.254.169.254 (see [Azure Instance Metadata Service](https://learn.microsoft.com/en-us/azure/virtual-machines/instance-metadata-service?tabs=linux))

## Using a .env file to set the proxy configuration

> [!NOTE]
> Using a `.env` file to set the proxy configuration cannot be done on a GitHub-hosted runner.

On self-hosted runners, you can configure proxy settings by adding the variables to a `.env` file in the self-hosted runner application directory (the directory where you downloaded and unpacked the runner software). This approach is useful when the runner is configured to run as a service under a system account. When the runner starts, it reads the variables set in `.env` for the proxy configuration.

### Example `.env` proxy configuration

```shell copy
https_proxy=http://proxy.local:8080
no_proxy=example.com,myserver.local:443
```

## Setting proxy configuration for Docker containers

If you use Docker container actions or service containers in your workflows, you might also need to configure Docker to use your proxy server in addition to setting the above environment variables.

For information on the required Docker configuration, see [Configure Docker to use a proxy server](https://docs.docker.com/network/proxy/) in the Docker documentation.
