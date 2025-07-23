Customers on {% data variables.product.prodname_team %} and {% data variables.product.prodname_ghe_cloud %} plans can choose from a range of managed virtual machines that have more resources than the [standard {% data variables.product.prodname_dotcom %}-hosted runners](/actions/how-tos/using-github-hosted-runners/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources). These machines are referred to as "{% data variables.actions.hosted_runners %}." They offer the following advanced features:

* More RAM, CPU, and disk space
* Static IP addresses
{%- ifversion actions-private-networking-azure-vnet %}
* Azure private networking
{%- endif %}
* The ability to group runners
* Autoscaling to support concurrent workflows
* GPU-powered runners

These {% data variables.actions.hosted_runners %} are hosted by {% data variables.product.prodname_dotcom %} and have the runner application and other tools preinstalled.
