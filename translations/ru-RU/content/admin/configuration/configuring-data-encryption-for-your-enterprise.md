---
title: Configuring data encryption for your enterprise
shortTitle: Configuring data encryption
intro: 'For encryption at rest, you can provide your own encryption key to encrypt your data under your encryption policies.'
versions:
  github-ae: '*'
---

{% note %}

**Note:** Configuring encryption at rest with a customer-managed key is currently in beta and subject to change.

{% endnote %}

### About data encryption

To provide a high level of security, {% data variables.product.product_name %} encrypts your data while at rest in the data centers and while your data is in transit between users' machines and the data centers.

For encryption in transit, {% data variables.product.product_name %} uses Transport Layer Security (TLS). For encryption at rest, {% data variables.product.product_name %} provides a default RSA key. After you've initialized your enterprise, you can choose to provide your own key instead. Your key should be a 2048 bit RSA private key in PEM format.

The key that you provide is stored in a FIPS 140-2 compliant hardware security module (HSM) in a key vault that {% data variables.product.company_short %} manages.

To configure your encryption key, use the REST API. There are a number of API endpoints, for example to check the status of encryption, update your encryption key, and disable your encryption key. Note that disabling your key will freeze your enterprise. For more information about the API endpoints, see "[Encryption at rest](/rest/reference/enterprise-admin#encryption-at-rest)" in the REST API documentation.

### Adding or updating an encryption key

You can add a new encryption key as often as you need. When you add a new key, the old key is discarded. Your enterprise won't experience downtime when you update the key.

Your 2048 bit RSA private key should be in PEM format, for example in a file called _private-key.pem_.

   ```
   -----BEGIN RSA PRIVATE KEY-----
   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   -----END RSA PRIVATE KEY-----
   ```

1. To add your key, use the `PATCH /enterprise/encryption` endpoint, replacing *~/private-key.pem* with the path to your private key.

   ```shell
   curl -X PATCH http(s)://<em>hostname</em>/api/v3/enterprise/encryption \
     -d "{ \"key\": \"$(awk '{printf "%s\\n", $0}' ~/private-key.pem)\" }"
   ```

2. Optionally, check the status of the update operation.

   ```shell
   curl -X GET http(s)://<em>hostname</em>/api/v3/enterprise/encryption/status/<em>request_id</em>
   ```

### Disabling your encryption key

To freeze your enterprise, for example in the case of a breach, you can disable encryption at rest by marking your encryption key as disabled.

1. To disable your key and encryption at rest, use the `DELETE /enterprise/encryption` endpoint. This operation does not delete the key permanently.

   ```shell
   curl -X DELETE http(s)://<em>hostname</em>/api/v3/enterprise/encryption
   ```

2. Optionally, check the status of the delete operation. It takes approximately ten minutes to disable encryption at rest.

   ```shell
   curl -X GET http(s)://<em>hostname</em>/api/v3/enterprise/encryption/status/<em>request_id</em>
   ```

To unfreeze your enterprise after you've disabled your encryption key, contact support. For more information, see "[About {% data variables.contact.enterprise_support %}](/admin/enterprise-support/about-github-enterprise-support)."

### Дополнительная литература

- "[Encryption at rest](/rest/reference/enterprise-admin#encryption-at-rest)" in the REST API documentation 
