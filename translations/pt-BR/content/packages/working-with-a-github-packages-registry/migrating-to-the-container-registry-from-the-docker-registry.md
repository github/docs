---
title: Fazendo a migração para o Registro do Contêiner a partir do Registro Docker
intro: '{% ifversion docker-ghcr-enterprise-migration %}O proprietário de uma empresa pode{% else %}{% data variables.product.company_short %} irá{% endif %} migrar imagens do Docker previamente armazenadas no registro do Docker em {% data variables.product.product_location %} para o {% data variables.product.prodname_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/container-guides-for-github-packages/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/migrating-to-github-container-registry-for-docker-images
versions:
  fpt: '*'
  ghec: '*'
  feature: docker-ghcr-enterprise-migration
shortTitle: Migração para o registro do contêiner
topics:
  - Containers
  - Docker
  - Migration
---

{% data reusables.package_registry.container-registry-ghes-beta %}

## Sobre o {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %} Para obter mais informações, consulte "[Trabalhando com o {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)".

## Sobre a migração do registro do Docker

{% data reusables.package_registry.container-registry-replaces-docker-registry %} Se você armazenou imagens do Docker no registro do Docker, {% ifversion docker-ghcr-enterprise-migration %} o proprietário de uma empresa{% else %}{% data variables.product.company_short %}{% endif %} irá transferir gradualmente as imagens para o {% data variables.product.prodname_container_registry %}. Nenhuma ação é necessária de sua parte.

{% ifversion docker-ghcr-enterprise-migration %}

{% note %}

**Observação**: {% data reusables.package_registry.container-registry-ghes-migration-availability %} Para mais informações sobre como encontrar a versão de {% data variables.product.product_name %} que você usa, consulte "[Sobre as versões de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)".

{% endnote %}

{% endif %}

Depois que a imagem de um Docker foi transferida para {% data variables.product.prodname_container_registry %}, você verá as seguintes alterações nos detalhes do pacote.

- O ícone será o logotipo de {% data variables.product.prodname_container_registry %} ao invés do logo do Docker.
- O domínio na URL do pull será {% data variables.product.prodname_container_registry_namespace %} em vez de {% data variables.product.prodname_docker_registry_namespace %}.

{% ifversion fpt or ghec %}

![Captura de tela de uma imagem do Docker transferida para {% data variables.product.prodname_container_registry %}](/assets/images/help/package-registry/container-registry-details-page.png)

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %}

{% ifversion fpt or ghec %}

Após a migração, você não poderá mais usar o API do GraphQL para consultar pacotes com um `tipo de pacote` do "DOCKER". Em vez disso, você pode usar a API REST para consultar pacotes com um `package_type` de "contêiner". Para obter mais informações, consulte "[Pacotes](/rest/reference/packages)" na documentação da API REST.

## Sobre a cobrança do {% data variables.product.prodname_container_registry %}

Para obter mais informações sobre a cobrança para o {% data variables.product.prodname_container_registry %}, consulte "[Sobre a cobrança para {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages).

{% endif %}

{% ifversion docker-ghcr-enterprise-migration %}

## Leia mais

- "[Fazendo a migração da sua empresa para {% data variables.product.prodname_container_registry %} do registro Docker](/admin/packages/migrating-your-enterprise-to-the-container-registry-from-the-docker-registry)"

{% endif %}
