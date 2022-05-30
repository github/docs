---
title: Connecting to a private network
intro: 'You can connect {% data variables.product.prodname_dotcom %}-hosted runners to resources on a private network, including package registries, secret managers, and other on-premises services.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Developer
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About {% data variables.product.prodname_dotcom %}-hosted runners networking

By default, {% data variables.product.prodname_dotcom %}-hosted runners have access to the public internet. However, you may also want these runners to access resources on your private network, such as a package registry, a secret manager, or other on-premise services.

{% data variables.product.prodname_dotcom %}-hosted runners are shared across all {% data variables.product.prodname_dotcom %} customers, so you will need a way of connecting your private network to just your runners while they are running your workflows. There are a few different approaches you could take to configure this access, each with different advantages and disadvantages.

{% ifversion fpt or ghec or ghes > 3.4 %}
### Using an API Gateway with OIDC

With {% data variables.product.prodname_actions %}, you can use OpenID Connect (OIDC) tokens to authenticate your workflow outside of {% data variables.product.prodname_actions %}. For example, you could run an API Gateway on the edge of your private network that authenticates incoming requests with the OIDC token and then makes API requests on behalf of your workflow in your private network.

The following diagram gives an overview of this solution's architecture:

![Diagram of an OIDC gateway](/assets/images/help/images/actions-oidc-gateway.png)

It's important that you authenticate not just that the OIDC token came from {% data variables.product.prodname_actions %}, but that it came specifically from your expected workflows, so that other {% data variables.product.prodname_actions %} users aren't able to access services in your private network. You can use OIDC claims to create these conditions. For more information, see "[Defining trust conditions on cloud roles using OIDC claims](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#defining-trust-conditions-on-cloud-roles-using-oidc-claims)."

The main disadvantage of this approach is you have to implement the API gateway to make requests on your behalf, as well as run it on the edge of your network.

But there are various advantages too:
- You don't need to configure any firewalls, or modify the routing of your private network.
- The API gateway is stateless, and so it scales horizontally to handle high availability and high throughput.

For more information, see [a reference implementation of an API Gateway](https://github.com/github/actions-oidc-gateway-example) (note that this requires customization for your use case and is not ready-to-run as-is), and "[About security hardening with OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)".
{% endif %}

### Using WireGuard to create a network overlay

If you don't want to maintain separate infrastructure for an API Gateway, you can create an overlay network between your runner and a service in your private network, by running WireGuard in both places.

There are various disadvantages to this approach:

- To reach WireGuard running on your private service, you will need a well-known IP address and port that your workflow can reference: this can either be a public IP address and port, a port mapping on a network gateway, or a service that dynamically updates DNS.
- WireGuard doesn't handle NAT traversal out of the box, so you'll need to identify a way to provide this service.
- This connection is one-to-one, so if you need high availability or high throughput you'll need to build that on top of WireGuard.
- You'll need to generate and securely store keys for both the runner and your private service. WireGuard uses UDP, so your network must support UDP traffic.

There are some advantages too, as you can run WireGuard on an existing server so you don't have to maintain separate infrastructure, and it's well supported on {% data variables.product.prodname_dotcom %}-hosted runners.

### Example: Configuring WireGuard

This example workflow configures WireGuard to connect to a private service.

For this example, the WireGuard instance running in the private network has this configuration:
- Overlay network IP address of `192.168.1.1`
- Public IP address and port of `1.2.3.4:56789`
- Public key `examplepubkey1234...`

The WireGuard instance in the {% data variables.product.prodname_actions %} runner has this configuration:
- Overlay network IP address of `192.168.1.2`
- Private key stores as an {% data variables.product.prodname_actions %} secret under `WIREGUARD_PRIVATE_KEY`

```yaml
name: WireGuard example

on:
  workflow_dispatch:

jobs:
  wireguard_example:
    runs-on: ubuntu-latest
    steps:
      - run: sudo apt install wireguard

      - run: echo "${{ secrets.WIREGUARD_PRIVATE_KEY }}" > privatekey

      - run: sudo ip link add dev wg0 type wireguard

      - run: sudo ip address add dev wg0 192.168.1.2 peer 192.168.1.1

      - run: sudo wg set wg0 listen-port 48123 private-key privatekey peer examplepubkey1234... allowed-ips 0.0.0.0/0 endpoint 1.2.3.4:56789

      - run: sudo ip link set up dev wg0

      - run: curl -vvv http://192.168.1.1
```

For more information, see [WireGuard's Quick Start](https://www.wireguard.com/quickstart/), as well as "[Encrypted Secrets](/actions/security-guides/encrypted-secrets)" for how to securely store keys.

### Using Tailscale to create a network overlay

Tailscale is a commercial product built on top of WireGuard. This option is very similar to WireGuard, except Tailscale is more of a complete product experience instead of an open source component.

It's disadvantages are similar to WireGuard: The connection is one-to-one, so you might need to do additional work for high availability or high throughput. You still need to generate and securely store keys. The protocol is still UDP, so your network must support UDP traffic.

However, there are some advantages over WireGuard: NAT traversal is built-in, so you don't need to expose a port to the public internet. It is by far the quickest of these options to get up and running, since Tailscale provides an {% data variables.product.prodname_actions %} workflow with a single step to connect to the overlay network.

For more information, see the [Tailscale GitHub Action](https://github.com/tailscale/github-action), as well as "[Encrypted Secrets](/actions/security-guides/encrypted-secrets)" for how to securely store keys.
