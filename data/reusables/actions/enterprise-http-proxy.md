If you have an **HTTP Proxy Server** configured on {% data variables.location.product_location %}:

* You must add `.localhost`, `127.0.0.1`, and `::1` to the **HTTP Proxy Exclusion** list (in this order).
* If your external storage location is not routable, then you must also add your external storage URL to the exclusion list.

For more information on changing your proxy settings, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/configuring-an-outbound-web-proxy-server)."
