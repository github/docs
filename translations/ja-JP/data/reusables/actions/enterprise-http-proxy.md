{% data variables.product.product_location %}上で**HTTP Proxy Server**が設定されている場合:
  - `localhost`と`127.0.0.1`を**HTTP Proxy Exclusion**リストに追加しなければなりません。
  - BYOSバケットがルーティングできない場合、このバケットのURLも除外リストに追加しなければなりません。

  プロキシの設定変更に関する詳しい情報については「[アウトバウンドのWebプロキシサーバーの設定](/admin/configuration/configuring-an-outbound-web-proxy-server)」を参照してください。