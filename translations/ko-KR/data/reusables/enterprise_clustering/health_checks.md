Configure the load balancer to check one of these URLs:
 - `https://HOSTNAME/status` if HTTPS is enabled (default)
 - `http://HOSTNAME/status` if HTTPS is disabled

The check will return status code `200` (OK) if the node is healthy and available to service end-user requests.
