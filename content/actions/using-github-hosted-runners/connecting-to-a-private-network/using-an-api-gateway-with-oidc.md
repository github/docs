---
title: Using an API gateway with OIDC
shortTitle: Using OIDC
intro: 'You can use OpenID Connect (OIDC) tokens to authenticate your workflow.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Developer
---

## Using an API gateway with OIDC

{% data reusables.actions.private-networking-oidc-intro %}For example, you could run an API gateway on the edge of your private network that authenticates incoming requests with the OIDC token and then makes API requests on behalf of your workflow in your private network.

The following diagram gives an overview of this solution's architecture:

![Diagram of an OIDC gateway architecture, starting with a {% data variables.product.prodname_actions %} runner and ending with a private network's private service.](/assets/images/help/actions/actions-oidc-gateway.png)

It's important that you verify not just that the OIDC token came from {% data variables.product.prodname_actions %}, but that it came specifically from your expected workflows, so that other {% data variables.product.prodname_actions %} users aren't able to access services in your private network. You can use OIDC claims to create these conditions. For more information, see "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#defining-trust-conditions-on-cloud-roles-using-oidc-claims)."

The main disadvantages of this approach are that you must implement the API gateway to make requests on your behalf, and you must run the gateway on the edge of your network.

The following advantages apply.

* You don't need to configure any firewalls, or modify the routing of your private network.
* The API gateway is stateless and scales horizontally to handle high availability and high throughput.

For more information, see [a reference implementation of an API Gateway](https://github.com/github/actions-oidc-gateway-example) in the github/actions-oidc-gateway repository. This implementation requires customization for your use case and is not ready-to-run as-is). For more information, see "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)."
