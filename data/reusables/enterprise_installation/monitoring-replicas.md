You can monitor the availability of {% data variables.product.prodname_ghe_server %} by checking the status code that is returned for the `https://HOSTNAME/status` URL. An appliance that can service user traffic will return status code `200` (OK). An appliance may return a `503` (Service Unavailable) for a few reasons:
 - The appliance is a passive replica, such as the replica in a two-node high availability configuration.
 - The appliance is in maintenance mode.
 - The appliance is part of a geo-replication configuration, but is an inactive replica.

You can also use the Replication overview dashboard available at:

`https://HOSTNAME/setup/replication`
