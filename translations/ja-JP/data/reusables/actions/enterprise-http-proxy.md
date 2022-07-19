If you have an **HTTP Proxy Server** configured on {% data variables.product.product_location %}:
  - You must add `localhost` and `127.0.0.1` to the **HTTP Proxy Exclusion** list.
  - If the BYOS bucket is not routable, then you must also add the bucket's URL to the exclusion list.

  プロキシの設定変更に関する詳しい情報については「[アウトバウンドのWebプロキシサーバーの設定](/admin/configuration/configuring-an-outbound-web-proxy-server)」を参照してください。