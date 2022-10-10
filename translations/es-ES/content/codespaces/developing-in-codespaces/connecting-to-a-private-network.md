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

There are currently two methods of accessing resources on a private network within {% data variables.product.prodname_github_codespaces %}.
- Using a {% data variables.product.prodname_cli %} extension to configure your local machine as a gateway to remote resources.
- Using a VPN. 

### Using the GitHub CLI extension to access remote resources

{% note %}

**Note**: The {% data variables.product.prodname_cli %} extension is currently in beta and subject to change. 

{% endnote %}

The {% data variables.product.prodname_cli %} extension allows you to create a bridge between a codespace and your local machine, so that the codespace can access any remote resource that is accessible from your machine. The codespace uses your local machine as a network gateway to reach those resources. For more information, see "[Using {% data variables.product.prodname_cli %} to access remote resources](https://github.com/github/gh-net#codespaces-network-bridge)."

   
   

### Using a VPN to access resources behind a private network

As an alternative to the {% data variables.product.prodname_cli %} extension, you can use a VPN to access resources behind a private network from within your codespace.

We recommend VPN tools like [OpenVPN](https://openvpn.net/) to access resources on a private network. For more information, see "[Using the OpenVPN client from GitHub Codespaces](https://github.com/codespaces-contrib/codespaces-openvpn)."

There are also a number of third party solutions that, while not explicitly endorsed by {% data variables.product.prodname_dotcom %}, have provided examples of how to integrate with {% data variables.product.prodname_github_codespaces %}.

These third party solutions include:

- [Tailscale](https://tailscale.com/kb/1160/github-codespaces/)

### Allowlisting private resources for codespaces

While {% data variables.product.prodname_dotcom %} publishes IP ranges for several products on its Meta API, codespaces IPs are dynamically assigned, meaning your codespace is not guaranteed to have the same IP address day to day. We highly discourage users from allowlisting an entire IP range, as this would give overly broad access to all codespaces (including users not affiliated with your codespaces).

For more information about the Meta API, see "[Meta](/rest/reference/meta)."

## Restricting access to the public internet

At present, there is no way to restrict codespaces from accessing the public internet, or to restrict appropriately authenticated users from accessing a forwarded port.

For more information on how to secure your codespaces, see "[Security in {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces)."
