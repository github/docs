---
title: Connecting to a private network
intro: You can connect Codespaces to resources.
product: '{% data reusables.gated-features.codespaces %}'
permissions: '{% data reusables.codespaces.availability %}'
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

By default, your codespaces have access to all resources on the public internet, including: package managers, license servers, databases, and cloud platform APIs; and no access to resources on private networks.

### Connecting to network-private resources

There are several ways to access resources on a private network, including IP allowlisting and VPNs.

#### Allowlisting private resources for codespaces

While GitHub publishes IP ranges for several products on its Meta API, codespaces IPs are dynamically assigned, meaning your codespace is not guaranteed to have the same IP address day to day. We highly discourage users from allowlisting an entire IP range, as this would give overly broad access to all codespaces (including users not affiliated with your codespaces).

For more information about the Meta API, see ["Meta"](/rest/reference/meta).

#### Using a VPN to access resources behind a private network

The easiest way to access resources behind a private network is to VPN into that network from within your codespace.

We recommend VPN tools like [OpenVPN](https://openvpn.net/) to access resources on a private network. For more information, see ["Using the OpenVPN client from GitHub Codespaces"](https://github.com/codespaces-contrib/codespaces-openvpn).

There are also a number of third party solutions that, while not explicitly endorsed by GitHub, have provided examples of how to integrate with {% data variables.product.prodname_codespaces %}.

A list of these is provided below:

- [Tailscale](https://tailscale.com/kb/1160/github-codespaces/)

### Restricting access to the public internet

At present, there is no way to restrict codespaces from accessing the public internet, or for appropriately authenticated users from accessing a forwarded port.

For more information on how to secure your codespaces, see ["Security in Codespaces"](/codespaces/codespaces-reference/security-in-codespaces).
