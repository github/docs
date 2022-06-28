---
title: Management Console
intro: 'The Management Console API helps you manage your {% data variables.product.product_name %} installation.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% tip %}

You must explicitly set the port number when making API calls to the Management Console. If TLS is enabled on your enterprise, the port number is `8443`; otherwise, the port number is `8080`.

If you don't want to provide a port number, you'll need to configure your tool to automatically follow redirects.

You may also need to add the [`-k` flag](http://curl.haxx.se/docs/manpage.html#-k) when using `curl`, since {% data variables.product.product_name %} uses a self-signed certificate before you [add your own TLS certificate](/enterprise/admin/guides/installation/configuring-tls/).

{% endtip %}

### Authentication

You need to pass your [Management Console password](/enterprise/admin/articles/accessing-the-management-console/) as an authentication token to every Management Console API endpoint except [`/setup/api/start`](#create-a-github-enterprise-server-license).

Use the `api_key` parameter to send this token with each request. For example:

```shell
$ curl -L 'https://<em>hostname</em>:<em>admin_port</em>/setup/api?api_key=<em>your-amazing-password</em>'
```

You can also use standard HTTP authentication to send this token. For example:

```shell
$ curl -L -u "api_key:<em>your-amazing-password</em>" 'https://<em>hostname</em>:<em>admin_port</em>/setup/api'
```