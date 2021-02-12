---
title: OpenAPI description
intro: The {% data variables.product.product_name %} REST API is fully described in an OpenAPI 3.0 compliant document.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### About OpenAPI descriptions

[OpenAPI](https://swagger.io/docs/specification/about/) is a standard specification for describing REST APIs. OpenAPI descriptions allow both humans and machines to discover the capabilities of an API without needing to first read documentation or understand the implementation. {% data variables.product.company_short %} has made its REST API publicly available as an OpenAPI 3.0 compliant document.

### Getting the {% data variables.product.company_short %} OpenAPI description

You can find the description in the open source [REST API OpenAPI Description](https://github.com/github/rest-api-description) repository.

We provide the description in two formats. The bundled version works for most cases, as it includes OpenAPI components for reuse and readability. If your tooling does not support inline references to components, we also provide a fully dereferenced version.

### Using the {% data variables.product.company_short %} OpenAPI description

There are many uses for an OpenAPI description. Por exemplo, você pode:

* Generate your own API client.
* Validate and test a {% data variables.product.company_short %} REST API integration.
* Explore and interact with the {% data variables.product.product_name %} REST API using third-party tools, such as Insomnia or Postman.

For example, {% data variables.product.company_short %} uses the REST OpenAPI description to generate the {% data variables.product.product_name %} [REST API reference documentation](/rest/reference).
