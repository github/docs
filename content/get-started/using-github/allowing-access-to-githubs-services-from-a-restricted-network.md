---
title: Allowing access to GitHub's services from a restricted network
intro: "If your network restricts access to specific domains, a network administrator may be able to grant access to {% data variables.product.company_short %}'s services by creating exceptions for {% data variables.product.company_short %}'s domain names."
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Allow network access
---

## About access to {% data variables.product.product_name %} from a restricted network

In rare cases, an institution's network access policy may restrict access to specific domain names for end users. For example, the policy may use DNS filtering to deny access to sites like {% data variables.product.prodname_dotcom %}. If your institution requires this level of control, but you still want to permit access to services on {% data variables.product.prodname_dotcom %}, you can create exceptions in your policy to allow access to the necessary domains.

## Retrieving {% data variables.product.company_short %}'s domain names using the REST API

You can use the REST API to retrieve a list of {% data variables.product.company_short %}'s domain names.

{% warning %}

**Warning**: The list of domains from the REST API is not intended to be comprehensive. If you block access to services using DNS, but selectively allow access to {% data variables.product.company_short %}'s domain names, any or all of {% data variables.product.prodname_dotcom %} and related services may not function properly or at all for your end users.

{% endwarning %}

For more information, see "[AUTOTITLE](/rest/meta)."
