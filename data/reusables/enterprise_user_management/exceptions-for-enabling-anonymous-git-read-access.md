{% note %}

**Notes:**
* You cannot change the Git read access settings for forked repositories since they inherit their access settings from the root repository by default.
* If a public repository becomes private, then anonymous Git read access will automatically be disabled for that repository and it forks.
* If a repository with anonymous authentication contains {% data variables.large_files.product_name_short %} assets, it will fail to download the {% data variables.large_files.product_name_short %} assets since they still require authentication. We strongly recommend not enabling anonymous Git read access for a repository with {% data variables.large_files.product_name_short %} assets.

{% endnote %}
