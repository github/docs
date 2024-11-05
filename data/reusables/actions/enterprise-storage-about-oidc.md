There are two options for configuring {% data variables.product.prodname_ghe_server %} to connect to your external storage provider:

* OpenID Connect (OIDC)
* Traditional credentials-based authentication using secrets

We recommend using OIDC where possible, as you won't need create or manage sensitive and long-lived credential secrets for your storage provider, and risk them being exposed. After defining a trust with OIDC, your cloud storage provider automatically issues short-lived access tokens to {% data variables.location.product_location_enterprise %}, which automatically expire.
