---
title: Connecting to a private network
intro: 'You can connect {% data variables.product.prodname_github_codespaces %} to resources on a private network, including package registries, license servers, and on-premises databases.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

## About codespace networking

By default, your codespaces have access to all resources on the public internet, including package managers, license servers, databases, and cloud platform APIs, but they have no access to resources on private networks.

## Connecting to resources on a private network

The currently supported method of accessing resources on a private network is to use a VPN. It is currently not recommended to allowlist codespaces IPs as this would allow all codespaces (both yours and those of other customers) access to the network protected resources.

### Using a VPN to access resources behind a private network

The easiest way to access resources behind a private network is to VPN into that network from within your codespace.

We recommend VPN tools like [OpenVPN](https://openvpn.net/) to access resources on a private network. For more information, see "[Using the OpenVPN client from GitHub Codespaces](https://github.com/codespaces-contrib/codespaces-openvpn)."

There are also a number of third party solutions that, while not explicitly endorsed by {% data variables.product.prodname_dotcom %}, have provided examples of how to integrate with {% data variables.product.prodname_codespaces %}.

These third party solutions include:

- [Tailscale](https://tailscale.com/kb/1160/github-codespaces/)

### Allowlisting private resources for codespaces

While {% data variables.product.prodname_dotcom %} publishes IP ranges for several products on its Meta API, codespaces IPs are dynamically assigned, meaning your codespace is not guaranteed to have the same IP address day to day. We highly discourage users from allowlisting an entire IP range, as this would give overly broad access to all codespaces (including users not affiliated with your codespaces).

For more information about the Meta API, see "[Meta](/rest/reference/meta)."

## Restricting access to the public internet

At present, there is no way to restrict codespaces from accessing the public internet, or to restrict appropriately authenticated users from accessing a forwarded port.

For more information on how to secure your codespaces, see "[Security in {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces)."
