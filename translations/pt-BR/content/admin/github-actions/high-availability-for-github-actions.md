---
title: Alta disponibilidade para o GitHub Actions
intro: 'Há algumas considerações especiais para administrar {% data variables.product.prodname_actions %} em uma configuração de alta disponibilidade.'
versions:
  enterprise-server: '>=3.0'
topics:
  - enterprise
---

### Replicação ou redundância dos seus dados de {% data variables.product.prodname_actions %}

{% data reusables.actions.enterprise-storage-ha-backups %}

Recomendamos que você configure o seu {% data variables.product.prodname_actions %} armazenamento externo para usar redundância de dados ou replicação. Para obter mais informações, consulte a documentação do seu provedor de armazenamento:

* [Documentação de redundância de armazenamento do Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy)
* [Documentação de replicação do Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html)

### Réplicas de alta disponibilidade

#### Promover uma réplica

Ao habilitar uma configuração de alta disponibilidade, todas as réplicas são configuradas automaticamente para usar a configuração de armazenamento externo de {% data variables.product.prodname_actions %}. Se você precisa iniciar uma falha para promover uma réplica, nenhuma alteração de configuração adicional será necessária para {% data variables.product.prodname_actions %}.

Para obter mais informações, consulte "[Iniciar uma falha na réplica do seu dispositivo](/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance)".

#### Remover réplica de alta disponibilidade

Evitar deixar várias instâncias para serem gravadas no mesmo armazenamento externo de {% data variables.product.prodname_actions %}. Isso pode ocorrer ao usar o comando `ghe-repl-teardown` para parar e remover permanentemente uma réplica de habilitada por {% data variables.product.prodname_actions %}. Isto porque a réplica será convertida em uma versão autônoma de {% data variables.product.prodname_ghe_server %} e, após a sua desmontagem, continuará usando a mesma configuração de armazenamento externo.

Para evitar esse problema, recomendamos desativar o servidor de réplica ou atualizar a sua configuração de {% data variables.product.prodname_actions %} com um armazenamento externo diferente.
