Se você tem um **Servidor Proxy HTTP** configurado em {% data variables.product.product_location %}:
  - Você deve adicionar `localhost` e `127.0.0.1` à lista **Exclusão do Proxy HTTP**.
  - Se o bucket BYOS não for roteável, você também deverá adicionar a URL do bucket à lista de exclusão.

  Para obter mais informações sobre como alterar as configurações de proxy, consulte "[Configurar um servidor de proxy web de saída](/admin/configuration/configuring-an-outbound-web-proxy-server)".