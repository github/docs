---
title: Primeiros passos com o GitHub Packages para a sua empresa
shortTitle: Primeiros passos com o GitHub Packages
intro: 'Você pode começar a usar {% data variables.product.prodname_registry %} em {% data variables.product.product_location %} habilitando o recurso, configurando armazenamento de terceiros, configurando os ecossistemas que você deseja que sejam compatíveis e atualizando seu certificado TLS.'
redirect_from:
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
  - /admin/packages/enabling-github-packages-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
---


{% data reusables.package_registry.packages-cluster-support %}

## Passo 1: Verifique se {% data variables.product.prodname_registry %} está disponível para a sua empresa

{% data variables.product.prodname_registry %} está disponível em {% data variables.product.prodname_ghe_server %} 3.0 ou superior. Se você estiver usando uma versão anterior do {% data variables.product.prodname_ghe_server %}, você deverá fazer a atualização para usar {% data variables.product.prodname_registry %}. Para obter mais informações sobre a atualização da instância de {% data variables.product.prodname_ghe_server %}, consulte "[Sobre as atualizações para novas versões de](/admin/overview/about-upgrades-to-new-releases)."
## Etapa 2: Habilite {% data variables.product.prodname_registry %} e configure o armazenamento externo

{% data variables.product.prodname_registry %} em {% data variables.product.prodname_ghe_server %} usa armazenamento externo de blob para armazenar seus pacotes.

Depois de habilitar {% data variables.product.prodname_registry %} para {% data variables.product.product_location %}, você deverá preparar seu bucket de armazenamento de terceiros. A quantidade de armazenamento necessária depende do seu uso de {% data variables.product.prodname_registry %}, e as diretrizes de configuração podem variar de acordo com o provedor de armazenamento.

Provedores de armazenamento externos compatíveis
- Amazon Web Services (AWS) S3 {% ifversion ghes %}
- Azure Blob Storage {% endif %}
- MinIO

Para habilitar {% data variables.product.prodname_registry %} e configurar o armazenamento de terceiros, consulte:
  - "[Habilitar o GitHub Packages com AWS](/admin/packages/enabling-github-packages-with-aws)"{% ifversion ghes %}
  - "[Habilitar o GitHub Packages com o Azure Blob Storage](/admin/packages/enabling-github-packages-with-azure-blob-storage)"{% endif %}
  - "[Habilitar o GitHub Packages com o MinIO](/admin/packages/enabling-github-packages-with-minio)"

## Etapa 3: Especifique os ecossistemas de pacote que serão compatíveis com a sua instância

Escolha quais ecossistemas de pacote você gostaria de habilitar, desabilitar ou definir como somente leitura no seu {% data variables.product.product_location %}. As opções disponíveis são {% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}, {% endif %}Docker, RubyGems, npm, Apache Maven, Gradle ou NuGet.  Para obter mais informações, consulte "[Configurar a compatibilidade com o ecossistema de pacote para a sua empresa](/enterprise/admin/packages/configuring-package-ecosystem-support-for-your-enterprise)".

## Etapa 4: Certifique-se de ter um certificado TLS para a URL do seu pacote de hospedagem, se necessário

Se o isolamento de subdomínio estiver habilitado para {% data variables.product.product_location %}, você deverá criar e fazer o upload de um certificado TLS que permite o URL de host do pacote para cada ecossistema que você deseja usar, como `{% data reusables.package_registry.container-registry-hostname %}`. Certifique-se de que o host de cada pacote contém `https://`.

  Você pode criar o certificado manualmente ou pode usar _Let's Encrypt_. Se você já usa _Let's Encrypt_, você deverá solicitar um novo certificado TLS depois de habilitar {% data variables.product.prodname_registry %}. Para obter mais informações sobre as URLs de host do pacote, consulte "[Habilitar o isolamento de subdomínio](/enterprise/admin/configuration/enabling-subdomain-isolation)". Para obter mais informações sobre o upload de certificados TLS para {% data variables.product.product_name %}, consulte "[Configurar TLS](/enterprise/admin/configuration/configuring-tls)".

## Etapa5: Verifique e renomeie nomes reservados

Se você quiser usar o ecossistema Docker com o isolamento de subdomínio desabilitado, você **deve** primeiro renomear qualquer usuário ou organização denominada `v2` em {% data variables.product.product_location %}, antes de habilitar o suporte ao ecossistema Docker no {% data variables.enterprise.management_console %}. O Docker usa um nome de conta `v2` para gerenciar conflitos de caminho com a API do Docker, e assim que o suporte ao registro Docker estiver habilitado, você não poderá mais usar esse nome.

Você pode visualizar uma lista completa de logins reservados para uso interno, acessando a página "Logins reservados" no painel de administração do site. Para obter mais informações, consulte "[logins reservados](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#reserved-logins). "
