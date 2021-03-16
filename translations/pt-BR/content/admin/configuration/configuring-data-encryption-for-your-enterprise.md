---
title: Configurar criptografia de dados para a sua empresa
shortTitle: Configurar criptografia de dados
intro: 'Para criptografia estática, você pode fornecer sua própria chave de criptografia para criptografar seus dados conforme as suas políticas de criptografia.'
versions:
  github-ae: '*'
---

{% note %}

**Observação:** A configuração de criptografia estática com uma chave gerenciada pelo cliente está atualmente na versão beta e sujeita a alterações.

{% endnote %}

### Sobre a criptografia de dados

Proporcionar um alto nível de segurança {% data variables.product.product_name %} criptografa seus dados em modo estático nos centros de dados e enquanto seus dados estão em trânsito entre as máquinas dos usuários e os centros de dados.

Para criptografia em trânsito, {% data variables.product.product_name %} usa o Transport Layer Security (TLS). Para criptografia em modo estático, {% data variables.product.product_name %} fornece uma chave RSA padrão. Depois de ter inicializado a sua empresa, você pode escolher fornecer a sua própria chave. A sua chave deve ser uma chave RSA privada de 2048 bits no formato PEM.

A chave que você fornecer é armazenada em um módulo de segurança de hardware (HSM) em um cofre chave que {% data variables.product.company_short %} gerencia.

Para configurar sua chave de criptografia, use a API REST. Existem vários pontos de extremidade da API, por exemplo, para verificar o status da criptografia, atualizar sua chave de criptografia e desabilitar sua chave de criptografia. Observe que que desabilitar a sua chave irá congelar a sua empresa. Para obter mais informações sobre os pontos de extremidade da API, consulte "[Criptografia estática](/rest/reference/enterprise-admin#encryption-at-rest)" na documentação da API REST.

### Adicionar ou atualizar uma chave de criptografia

Você pode adicionar uma nova chave de criptografia sempre que precisar. Ao adicionar uma chave nova, a chave antiga é descartada. A sua empresa não vai ter inatividade quando você atualizar a chave.

Sua chave privada RSA de 2048 bits deve estar no formato PEM como, por exemplo, em um arquivo denominado _private-key.pem_.

   ```
   -----BEGIN RSA PRIVATE KEY-----
   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   -----END RSA PRIVATE KEY-----
   ```

1. Para adicionar a sua chave, use o ponto de extremidade `PATCH /enterprise/encryption`, substituindo *~/private-key.pem* pelo caminho para sua chave privada.

   ```shell
   curl -X PATCH http(s)://<em>hostname</em>/api/v3/enterprise/encryption \
     -d "{ \"key\": \"$(awk '{printf "%s\\n", $0}' ~/private-key.pem)\" }"
   ```

2. Opcionalmente, verifique o status da operação de atualização.

   ```shell
   curl -X GET http(s)://<em>hostname</em>/api/v3/enterprise/encryption/status/<em>request_id</em>
   ```

### Desabilitar a sua chave de criptografia

Para congelar a sua empresa, por exemplo, no caso de uma violação, você pode desabilitar a criptografia, marcando a sua chave de criptografia como desabilitada.

1. Para desabilitar a sua chave e a criptografia estática, use o ponto de extremidade `DELETE /enterprise/encryption`. Esta operação não exclui a chave permanentemente.

   ```shell
   curl -X DELETE http(s)://<em>hostname</em>/api/v3/enterprise/encryption
   ```

2. Opcionalmente, verifique o status da operação de exclusão. Demora aproximadamente dez minutos para desabilitar a criptografia em repouso.

   ```shell
   curl -X GET http(s)://<em>hostname</em>/api/v3/enterprise/encryption/status/<em>request_id</em>
   ```

Para descongelar a sua empresa depois de ter desabilitado a sua chave de criptografia, entre em contato com o suporte. Para obter mais informações, consulte "[Sobre o {% data variables.contact.enterprise_support %}](/admin/enterprise-support/about-github-enterprise-support)".

### Leia mais

- "[Criptografia estática](/rest/reference/enterprise-admin#encryption-at-rest)" na documentação da API REST 
