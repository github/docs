---
title: Habilitar o GitHub Actions e configurar armazenamento
intro: 'O armazenamento externo deve ser configurado como parte da habilitação do {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %}.'
permissions: 'Os administradores de site podem ativar o {% data variables.product.prodname_actions %} e definir as configurações empresariais.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage
versions:
  enterprise-server: '>=2.22'
---

{% if currentVersion == "enterprise-server@2.22" %}
{% note %}

**Observação:** O suporte de {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %} 2.22 é beta pública limitada. Revise os requisitos de armazenamento externo abaixo e [inescreva-se para a versão beta](https://resources.github.com/beta-signup/).

{% endnote %}
{% endif %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre os requisitos de armazenamento externo

Para habilitar o {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %}, você deve ter acesso ao armazenamento externo do blob.

O {% data variables.product.prodname_actions %} usa armazenamento do blob para armazenar artefatos gerados pelas execuções do fluxo de trabalho, como registros de fluxo de trabalho e artefatos de criação enviados pelo usuário. A quantidade de armazenamento necessária depende do seu uso de {% data variables.product.prodname_actions %}.

{% data variables.product.prodname_actions %} é compatível com estes provedores de armazenamento:

* Amazon S3
* Armazenamento do Azure Blob
* MinIO Gateway compatível com S3 para NAS

#### Permissões do Amazon S3

Se você usar o Amazon S3, {% data variables.product.prodname_actions %} exigirá as seguintes permissões para o seu segredo e ID da chave de acesso ao AWS:

* `s3:PutObject`
* `s3:GetObject`
* `s3:ListBucketMultipartUploads`
* `s3:ListMultipartUploadParts`
* `s3:AbortMultipartUpload`
* `s3:DeleteObject`

### Habilitar {% data variables.product.prodname_actions %}

{% if currentVersion == "enterprise-server@2.22" %}
O suporte de {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %} 2.22 é beta pública limitada. [Inscreva-se para a versão beta](https://resources.github.com/beta-signup/).
{% endif %}

### Leia mais

- "Considerações de hardware" para sua plataforma em "[Configurando uma instância do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)"
