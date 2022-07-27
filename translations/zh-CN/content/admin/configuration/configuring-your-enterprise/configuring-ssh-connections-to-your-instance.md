---
title: Configuring SSH connections to your instance
shortTitle: Configure SSH connections
intro: 'You can increase the security of {% data variables.product.product_location %} by configuring the SSH algorithms that clients can use to establish a connection.'
permissions: 'Site administrators can configure SSH connections to a {% data variables.product.product_name %} instance.'
versions:
  ghes: '>= 3.6'
type: how_to
topics:
  - Authentication
  - Enterprise
  - Infrastructure
  - Networking
  - Security
  - SSH
---

## About SSH connections to your instance

{% data reusables.enterprise.about-ssh-ports %}

To accommodate the SSH clients in your environment, you can configure the types of connections that {% data variables.product.product_location %} will accept.

## Configuring SSH connections with RSA keys

When users perform Git operations on {% data variables.product.product_location %} via SSH over port 22, the client can authenticate with an RSA key. The client may sign the attempt using the SHA-1 hash function. In this context, the SHA-1 hash function is no longer secure. For more information, see [SHA-1](https://en.wikipedia.org/wiki/SHA-1) on Wikipedia.

By default{% ifversion ghes < 3.7 %} on {% data variables.product.product_name %} 3.6 and later{% endif %}, SSH connections that satisfy **both** of the following conditions will fail.

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

You can adjust the cutoff date. If the user uploaded the RSA key before the cutoff date, the client can continue to connect successfuly using SHA-1 as long as the key remains valid. Alternatively, you can reject all SSH connections authenticated with an RSA key if the client signs the connection using the SHA-1 hash function.

Regardless of the setting you choose for your instance, clients can continue to connect using any RSA key signed with a SHA-2 hash function.

If you use an SSH certificate authority, connections will fail if the certificate's `valid_after` date is after the cutoff date. 更多信息请参阅“[关于 SSH 认证机构](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)”。

更多信息请参阅 [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server)。

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Audit your instance's logs for connections that use unsecure algorithms or hash functions using the `ghe-find-insecure-git-operations` utility. 更多信息请参阅“[命令行实用程序](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-find-insecure-git-operations)”。
1. To configure a cutoff date after which {% data variables.product.product_location %} will deny connections from clients that use an RSA key uploaded after the date if the connection is signed by the SHA-1 hash function, enter the following command. Replace _**RFC-3399-UTC-TIMESTAMP**_ with a valid RFC 3399 UTC timestamp. For example, the default value, August 1, 2022, would be represented as `2022-08-01T00:00:00Z`. For more information, see [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) on the IETF website.

   <pre>
   $ ghe-config app.gitauth.rsa-sha1 <em>RFC-3339-UTC-TIMESTAMP</em>
   </pre>

1. Alternatively, to completely disable SSH connections using RSA keys that are signed with the SHA-1 hash function, enter the following command.

   ```shell
   ghe-config app.gitauth.rsa-sha1 false
   ```
{% data reusables.enterprise.apply-configuration %}
