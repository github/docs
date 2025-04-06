---
title: About the OpenAPI description for the REST API
shortTitle: OpenAPI description
intro: 'The {% data variables.product.product_name %} REST API is fully described in an OpenAPI compliant document.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
redirect_from:
  - /rest/overview/openapi-description
  - /rest/overview/about-the-openapi-description-for-the-rest-api
---

## About OpenAPI

OpenAPI is a specification for describing REST API interfaces. It describes the API without requiring access to the source code or additional documentation. The specification is both human and machine readable. For more information, see [the OpenAPI specification documentation](https://spec.openapis.org/oas/v3.1.0).

## About {% data variables.product.company_short %}'s OpenAPI description

{% data variables.product.company_short %}'s OpenAPI description of the REST API is publicly available. You can find the description in the open source [github/rest-api-description](https://github.com/github/rest-api-description) repository.

{% data variables.product.company_short %} provides both 3.0 and 3.1 OpenAPI descriptions.

For each description, there is a version for each product: {% data variables.product.prodname_free_user %}/{% data variables.product.prodname_pro %}/{% data variables.product.prodname_team %} (`api.github.com`), {% data variables.product.prodname_ghe_cloud %} (`ghec`), and each version of {% data variables.product.prodname_ghe_server %} (`ghes-X.X`).

For each product, if date-based versioning is supported, there is also a description for each date-based version. For more information, see "[AUTOTITLE](/rest/overview/api-versions)."

Each description is available in a bundled or in a dereferenced format. The bundled format uses `$ref` to refer to OpenAPI components that are shared between endpoints. The dereferenced format includes the fully expanded description.

## Using the {% data variables.product.company_short %} OpenAPI description

Because the OpenAPI description is machine readable, you can use it to do things like:

* Generate libraries to facilitate using the REST API
* Validate and test an integration that uses the REST API
* Explore and interact with the REST API using third-party tools, such as Insomnia or Postman

For example, {% data variables.product.company_short %} uses the OpenAPI description to generate the Octokit SDKs. {% data variables.product.company_short %} also uses the OpenAPI description to generate the REST API reference documentation for each endpoint.
