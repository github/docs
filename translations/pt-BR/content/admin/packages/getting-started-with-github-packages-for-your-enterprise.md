---
title: Primeiros passos com o GitHub Packages para a sua empresa
intro: 'Você pode começar a usar {% data variables.product.prodname_registry %} em {% data variables.product.product_location %} habilitando o recurso, configurando armazenamento de terceiros, configurando os ecossistemas que você deseja que sejam compatíveis e atualizando seu certificado TLS.'
redirect_from:
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
  - /admin/packages/enabling-github-packages-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
topics:
  - Enterprise
---

{% if currentVersion == "enterprise-server@2.22" %}

{% data reusables.package_registry.packages-ghes-release-stage %}

{% note %}

**Observação:** Depois de ser convidado a participar da versão beta, siga as instruções do representante de sua conta para habilitar {% data variables.product.prodname_registry %} para {% data variables.product.product_location %}.

{% endnote %}

{% endif %}

{% data reusables.package_registry.packages-cluster-support %}

### Etapa 1: Habilite {% data variables.product.prodname_registry %} e configure o armazenamento externo

{% data variables.product.prodname_registry %} em {% data variables.product.prodname_ghe_server %} usa armazenamento externo de blob para armazenar seus pacotes.

Depois de habilitar {% data variables.product.prodname_registry %} para {% data variables.product.product_location %}, você deverá preparar seu bucket de armazenamento de terceiros. A quantidade de armazenamento necessária depende do seu uso de {% data variables.product.prodname_registry %}, e as diretrizes de configuração podem variar de acordo com o provedor de armazenamento.

Provedores de armazenamento externos compatíveis
- Amazon Web Services (AWS) S3 {% if currentVersion ver_gt "enterprise-server@2.22" %}
- Azure Blob Storage {% endif %}
- MinIO

Para habilitar {% data variables.product.prodname_registry %} e configurar o armazenamento de terceiros, consulte:
  - "[Habilitar o GitHub Packages com AWS](/admin/packages/enabling-github-packages-with-aws)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
  - "[Habilitar o GitHub Packages com o Azure Blob Storage](/admin/packages/enabling-github-packages-with-azure-blob-storage)"{% endif %}
  - "[Habilitar o GitHub Packages com o MinIO](/admin/packages/enabling-github-packages-with-minio)"

### Etapa 2: Especifique os ecossistemas de pacote que serão compatíveis com a sua instância

Escolha quais ecossistemas de pacote você gostaria de habilitar, desabilitar ou definir como somente leitura no seu {% data variables.product.product_location %}. As opções disponíveis são Docker, RubyGems, npm, Apache Maven, Gradle ou NuGet.  Para obter mais informações, consulte "[Configurar a compatibilidade com o ecossistema de pacote para a sua empresa](/enterprise/admin/packages/configuring-package-ecosystem-support-for-your-enterprise)".

### Etapa 3: Certifique-se de ter um certificado TLS para a URL do seu pacote de hospedagem, se necessário

Se o isolamento do subdomínio for habilitado para {% data variables.product.product_location %}{% if currentVersion == "enterprise-server@2.22" %}, que é necessário para usar {% data variables.product.prodname_registry %} com o Docker{% endif %}, você precisará criar e fazer o upload de um certificado TLS que permite a URL de host do pacote para cada ecossistema que você deseja usar como, por exemplo, `npm.HOSTNAME`. Certifique-se de que o host de cada pacote contém `https://`.

  Você pode criar o certificado manualmente ou pode usar _Let's Encrypt_. Se você já usa _Let's Encrypt_, você deverá solicitar um novo certificado TLS depois de habilitar {% data variables.product.prodname_registry %}. Para obter mais informações sobre as URLs de host do pacote, consulte "[Habilitar o isolamento de subdomínio](/enterprise/admin/configuration/enabling-subdomain-isolation)". Para obter mais informações sobre o upload de certificados TLS para {% data variables.product.product_name %}, consulte "[Configurar TLS](/enterprise/admin/configuration/configuring-tls)".
