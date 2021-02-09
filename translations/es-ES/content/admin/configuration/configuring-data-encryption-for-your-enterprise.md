---
title: Configurar el cifrado de datos para tu empresa
shortTitle: Configurar el cifrado de datos
intro: 'Para el cifrado estático, puedes proporcionar tu propia llave de cifrado para cifrar tus datos bajo tus políticas de cifrado.'
versions:
  github-ae: '*'
---

{% note %}

**Nota:** La configuración de cifrado estático con una llave que administre el usuario se encuentra actualmente en beta y está sujeto a cambios.

{% endnote %}

### Acerca del cifrado de datos

Para proporcionar un nivel alto de seguridad, {% data variables.product.product_name %} cifra tus datos mientras están estáticos en los centros de datos y mientras tus datos se encuentran en tránsito entre las máquinas de los usuarios y los centros de datos.

Para el cifrado en tránsito, {% data variables.product.product_name %} utiliza la Seguridad de Capas de Transporte (TLS). Para el cifrado estático, {% data variables.product.product_name %} proporciona una llave RSA predeterminada. Después de que hayas inicializado tu empresa, puedes elegir mejor proporcionar tu propia llave. Tu llave debe ser una llave privada de RSA de 2048 bits en formato PEM.

La llave que proporciones se almacena en un módulo de seguridad de hardware (HSM) en una bóveda de llaves que administra {% data variables.product.company_short %}.

Para configurar tu llave de cifrado, utiliza la API de REST. Existen varias terminales de la API, por ejemplo, para verificar el estado de cifrado, actualiza tu llave de cifrado y bórrala. Nota que el borrar tu llave hará que tu empresa se congele. Para obtener más información acerca de las terminales de la API, consulta la sección "[Cifrado estático](/rest/reference/enterprise-admin#encryption-at-rest)" en la documentación de la API de REST.

### Agregar o actualizar una llave de cifrado

Puedes agregar una llave de cifrado nueva tan frecuentemente como lo necesites. Cuando agregas una llave nueva, la llave anterior se descarta. Tu empresa no tendrá ningún tiempo de inactividad cuando actualices la llave.

Tu llave privada de RSA de 2048 bits deberá estar en formato PEM, por ejemplo, en un archivo que se llama _private-key.pem_.

   ```
   -----BEGIN RSA PRIVATE KEY-----
   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   -----END RSA PRIVATE KEY-----
   ```

1. Para agregar tu llave, utiliza la terminal `PATCH /enterprise/encryption`, reemplazando *~/private-key.pem* con la ruta a tu llave privada.

   ```shell
   curl -X PATCH http(s)://<em>hostname</em>/api/v3/enterprise/encryption \
     -d "{ \"key\": \"$(awk '{printf "%s\\n", $0}' ~/private-key.pem)\" }"
   ```

2. Opcionalmente, verifica el estado de la operación de actualización.

   ```shell
   curl -X GET http(s)://<em>hostname</em>/api/v3/enterprise/encryption/status/<em>request_id</em>
   ```

### Borrar tu llave de cifrado

Para congelar tu empresa, por ejemplo, en caso de alguna irrupción, puedes inhabilitar el cifrado estático si borras tu llave de cifrado.

Para descongelar tu empresa después de que hayas borrado tu llave de cifrado, contacta a soporte. Para obtener más información, consulta la sección "[Acerca de {% data variables.contact.enterprise_support %}](/admin/enterprise-support/about-github-enterprise-support)".

1. Para borrar tu llave e inhabilitar el cifrado estático, utiliza la terminal `DELETE /enterprise/encryption`.

   ```shell
   curl -X DELETE http(s)://<em>hostname</em>/api/v3/enterprise/encryption
   ```

2. Opcionalmente, verifica el estado de la operación de borrado.

   ```shell
   curl -X GET http(s)://<em>hostname</em>/api/v3/enterprise/encryption/status/<em>request_id</em>
   ```

### Leer más

- "[Cifrado estático](/rest/reference/enterprise-admin#encryption-at-rest)" en la documentación de la API de REST 
