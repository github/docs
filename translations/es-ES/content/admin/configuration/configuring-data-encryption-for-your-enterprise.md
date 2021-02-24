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

Para configurar tu llave de cifrado, utiliza la API de REST. There are a number of API endpoints, for example to check the status of encryption, update your encryption key, and disable your encryption key. Note that disabling your key will freeze your enterprise. Para obtener más información acerca de las terminales de la API, consulta la sección "[Cifrado estático](/rest/reference/enterprise-admin#encryption-at-rest)" en la documentación de la API de REST.

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

### Disabling your encryption key

To freeze your enterprise, for example in the case of a breach, you can disable encryption at rest by marking your encryption key as disabled.

1. To disable your key and encryption at rest, use the `DELETE /enterprise/encryption` endpoint. This operation does not delete the key permanently.

   ```shell
   curl -X DELETE http(s)://<em>hostname</em>/api/v3/enterprise/encryption
   ```

2. Opcionalmente, verifica el estado de la operación de borrado. It takes approximately ten minutes to disable encryption at rest.

   ```shell
   curl -X GET http(s)://<em>hostname</em>/api/v3/enterprise/encryption/status/<em>request_id</em>
   ```

To unfreeze your enterprise after you've disabled your encryption key, contact support. Para obtener más información, consulta la sección "[Acerca de {% data variables.contact.enterprise_support %}](/admin/enterprise-support/about-github-enterprise-support)".

### Leer más

- "[Cifrado estático](/rest/reference/enterprise-admin#encryption-at-rest)" en la documentación de la API de REST 
