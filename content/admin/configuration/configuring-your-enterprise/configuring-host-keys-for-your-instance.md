---
title: Configuring host keys for your instance
shortTitle: Configure host keys
intro: 'You can increase the security of {% data variables.location.product_location %} by configuring the algorithms that your instance uses to generate and advertise host keys for incoming SSH connections.'
permissions: 'Site administrators can configure the host keys for a {% data variables.product.product_name %} instance.'
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

## About host keys for your instance

Servers that accept SSH connections advertise one or more cryptographic host keys to securely identify the server to SSH clients. To confirm the server's identity during the initialization of a connection, clients store and verify the host key. For more information, see [SSH Host Key - What, Why, How](https://ssh.com/academy/ssh/host-key) on the SSH Academy website.

{% data reusables.enterprise.about-ssh-ports %}

By default, {% data variables.location.product_location %} generates and advertises host keys with OpenSSH-style host key rotation. To increase the security of SSH in your environment, you can enable additional algorithms for the generation of host keys.

{% note %}

**Note**: If you enable additional host key algorithms, clients that do not use OpenSSH for SSH connections may experience warnings during connection, or fail to connect entirely. Some SSH implementations can ignore unsupported algorithms and fall back to a different algorithm. If the client does not support fallback, the connection will fail. For example, the SSH library for Go does not support fallback to a different algorithm.

{% endnote %}

## Managing an Ed25519 host key

To improve security for clients that connect to {% data variables.location.product_location %}, you can enable the generation and advertisement of an Ed25519 host key. Ed25519 is immune to some attacks that target older signature algorithms, without sacrificing speed. Older SSH clients may not support Ed25519. By default, {% data variables.product.product_name %} instances do not generate or advertise an Ed25519 host key. For more information, see [the Ed25519 website](https://ed25519.cr.yp.to).

{% data reusables.enterprise_installation.ssh-into-instance %}
1. To enable generation and advertisement of the Ed25519 host key, enter the following command.

   ```shell
   ghe-config app.babeld.host-key-ed25519 true
   ```
1. Optionally, enter the following command to disable generation and advertisement of the Ed25519 host key.

   ```shell
   ghe-config app.babeld.host-key-ed25519 false
   ```
{% data reusables.enterprise.apply-configuration %}
