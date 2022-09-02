Si tienes configurado un **HTTP Proxy Server** en {% data variables.product.product_location %}:
  - Debes agregar `localhost` y `127.0.0.1` a la lista **HTTP Proxy Exclusion**.
  - Si el bucket de BYOS no es enrutable, entonces también debes agregar la URL del bucket a la lista de exclusión.

  Para obtener más información sobre cómo cambiar tu configuración de proxy, consulta la sección "[Configurar un servidor de proxy web saliente](/admin/configuration/configuring-an-outbound-web-proxy-server)".