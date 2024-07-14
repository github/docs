The `HAProxy` version has been updated in this release. You may encounter elevated error rates when HAProxy
is upgraded as part of a hotpatch upgrade to a {% data variables.product.prodname_ghe_server %} instance.
These elevated error rates should resolve within 5 minutes of the hotpatch being applied.

Please note, when performing a hotpatch upgrade to
{% ifversion ghes = 3.10 %} {% data variables.product.prodname_ghe_server %} version 3.10.4 or higher
{% elsif ghes = 3.11 %} {% data variables.product.prodname_ghe_server %} version 3.11.1 or higher
{% endif %} you will encounter this known issue only if you are hotpatching from
{% ifversion ghes = 3.10 %} {% data variables.product.prodname_ghe_server %} version 3.10.3 or lower
{% elsif ghes = 3.11 %} {% data variables.product.prodname_ghe_server %} version 3.11.0{% endif %}.
