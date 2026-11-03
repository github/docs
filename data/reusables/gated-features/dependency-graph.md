
{% ifversion fpt or ghec %}

Not enabled by default. The dependency graph is available for the following repository types:

* Public repositories
* Private repositories
* Forks

{% elsif ghes %}

The dependency graph is available for all repositories.

{% endif %}
