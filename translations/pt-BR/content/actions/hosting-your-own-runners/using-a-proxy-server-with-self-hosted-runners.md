---
title: Usar um servidor proxy com executores auto-hospedados
intro: 'Você pode configurar executores auto-hospedados para usar um servidor proxy para comunicar-se com {% data variables.product.product_name %}.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Servidores proxy
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Configurar um servidor proxy usando variáveis de ambiente

If you need a self-hosted runner to communicate via a proxy server, the self-hosted runner application uses proxy configurations set in the following environment variables:

* `https_proxy`: URL Proxy para tráfego HTTPS. Se necessário, você também poderá incluir credenciais de autenticação básica. Por exemplo:
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `http_proxy`: URL proxy para tráfego HTTP. Se necessário, você também poderá incluir credenciais de autenticação básica. Por exemplo:
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `no_proxy`: Listas de hosts separados vírgula que não devem usar um proxy. São permitidos apenas nomes de host em `no_proxy`. Você não pode usar endereços IP. Por exemplo:
  * `example.com`
  * `example.com,myserver.local:443,example.org`

The proxy environment variables are read when the self-hosted runner application starts, so you must set the environment variables before configuring or starting the self-hosted runner application. If your proxy configuration changes, you must restart the self-hosted runner application.

On Windows machines, the proxy environment variable names are not case-sensitive. On Linux and macOS machines, we recommend that you use all lowercase environment variables. If you have an environment variable in both lowercase and uppercase on Linux or macOS, for example `https_proxy` and `HTTPS_PROXY`, the self-hosted runner application uses the lowercase environment variable.

{% data reusables.actions.self-hosted-runner-ports-protocols %}

## Usar um arquivo .env para definir a configuração de proxy

If setting environment variables is not practical, you can set the proxy configuration variables in a file named _.env_ in the self-hosted runner application directory. For example, this might be necessary if you want to configure the runner application as a service under a system account. When the runner application starts, it reads the variables set in _.env_ for the proxy configuration.

An example _.env_ proxy configuration is shown below:

```ini
https_proxy=http://proxy.local:8080
no_proxy=example.com,myserver.local:443
```

## Definir configuração de proxy para contêineres Docker

If you use Docker container actions or service containers in your workflows, you might also need to configure Docker to use your proxy server in addition to setting the above environment variables.

For information on the required Docker configuration, see "[Configure Docker to use a proxy server](https://docs.docker.com/network/proxy/)" in the Docker documentation.
