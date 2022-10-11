---
title: Code scanning
redirect_from:
  - /v3/code-scanning
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '>=2.22'
  ghae: '*'
type: reference
topics:
  - API
  - Code scanning
  - REST
miniTocMaxHeadingLevel: 3
---

{% data reusables.code-scanning.beta %}

The {% data variables.product.prodname_code_scanning %} API lets you retrieve and update {% data variables.product.prodname_code_scanning %} alerts from a repository. You can use the endpoints to create automated reports for the {% data variables.product.prodname_code_scanning %} alerts in an organization or upload analysis results generated using offline {% data variables.product.prodname_code_scanning %} tools. For more information, see "[Finding security vulnerabilities and errors in your code](/github/finding-security-vulnerabilities-and-errors-in-your-code)."

{% ifversion fpt or ghes > 3.0 or ghae %}
### Custom media type for {% data variables.product.prodname_code_scanning %}

There is one supported custom media type for the {% data variables.product.prodname_code_scanning %} REST API. 

    application/sarif+json

You can use this with `GET` requests sent to the `/analyses/{analysis_id}` endpoint. For more information about this operation, see "[Get a {% data variables.product.prodname_code_scanning %} analysis for a repository](#get-a-code-scanning-analysis-for-a-repository)." When you use this media type with this operation, the response includes a subset of the actual data that was uploaded for the specified analysis, rather than the summary of the analysis that's returned when you use the default media type. The response also includes additional data such as the `github/alertNumber` and `github/alertUrl` properties. The data is formatted as [SARIF version 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html).

For more information, see "[Media types](/rest/overview/media-types)."
{% endif %}

{% include rest_operations_at_current_path %}
