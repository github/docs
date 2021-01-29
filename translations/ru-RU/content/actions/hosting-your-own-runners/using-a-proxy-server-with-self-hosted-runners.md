---
title: Using a proxy server with self-hosted runners
intro: 'You can configure self-hosted runners to use a proxy server to communicate with {% data variables.product.product_name %}.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'руководство'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Configuring a proxy server using environment variables

If you need a self-hosted runner to communicate via a proxy server, the self-hosted runner application uses proxy configurations set in the following environment variables:

* `https_proxy`: Proxy URL for HTTPS traffic. You can also include basic authentication credentials, if required. Например:
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `http_proxy`: Proxy URL for HTTP traffic. You can also include basic authentication credentials, if required. Например:
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `no_proxy`: Comma separated list of hosts that should not use a proxy. Only hostnames are allowed in `no_proxy`, you cannot use IP addresses. Например:
  * `example.com`
  * `example.com,myserver.local:443,example.org`

The proxy environment variables are read when the self-hosted runner application starts, so you must set the environment variables before configuring or starting the self-hosted runner application. If your proxy configuration changes, you must restart the self-hosted runner application.

On Windows machines, the proxy environment variable names are not case-sensitive. On Linux and macOS machines, we recommend that you use all lowercase environment variables. If you have an environment variable in both lowercase and uppercase on Linux or macOS, for example `https_proxy` and `HTTPS_PROXY`, the self-hosted runner application uses the lowercase environment variable.

### Using a .env file to set the proxy configuration

If setting environment variables is not practical, you can set the proxy configuration variables in a file named _.env_ in the self-hosted runner application directory. For example, this might be necessary if you want to configure the runner application as a service under a system account. When the runner application starts, it reads the variables set in _.env_ for the proxy configuration.

An example _.env_ proxy configuration is shown below:

```
https_proxy=http://proxy.local:8080
no_proxy=example.com,myserver.local:443
```

### Setting proxy configuration for Docker containers

If you use Docker container actions or service containers in your workflows, you might also need to configure Docker to use your proxy server in addition to setting the above environment variables.

For information on the required Docker configuration, see "[Configure Docker to use a proxy server](https://docs.docker.com/network/proxy/)" in the Docker documentation.
