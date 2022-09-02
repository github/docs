If you have an **HTTP Proxy Server** configured on {% data variables.product.product_location %}:
  - You must add `localhost` and `127.0.0.1` to the **HTTP Proxy Exclusion** list.
  - If the BYOS bucket is not routable, then you must also add the bucket's URL to the exclusion list.

  For more information on changing your proxy settings, see "[Configuring an outbound web proxy server](/admin/configuration/configuring-an-outbound-web-proxy-server)."