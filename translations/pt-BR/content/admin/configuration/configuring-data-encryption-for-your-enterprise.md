---
title: Configurar criptografia de dados para a sua empresa
shortTitle: Configurar criptografia de dados
intro: 'Para criptografia estática, você pode fornecer sua própria chave de criptografia para criptografar seus dados conforme as suas políticas de criptografia.'
versions:
  github-ae: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Security
---

{% note %}

**Observação:** A configuração de criptografia estática com uma chave gerenciada pelo cliente está atualmente na versão beta e sujeita a alterações.

{% endnote %}

### Sobre a criptografia de dados

Proporcionar um alto nível de segurança {% data variables.product.product_name %} criptografa seus dados em modo estático nos centros de dados e enquanto seus dados estão em trânsito entre as máquinas dos usuários e os centros de dados.

Para criptografia em trânsito, {% data variables.product.product_name %} usa o Transport Layer Security (TLS). Para criptografia em modo estático, {% data variables.product.product_name %} fornece uma chave RSA padrão. 
