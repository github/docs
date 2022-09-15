---
title: Fazendo a migração para o Registro do Contêiner a partir do Registro Docker
intro: '{% ifversion docker-ghcr-enterprise-migration %}Um proprietário de empresa pode{% else %}{% data variables.product.company_short %} will{% endif %} migrar imagens do Docker armazenadas anteriormente no Registro do Docker em {% data variables.product.product_location %} para {% data variables.product.prodname_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/container-guides-for-github-packages/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/migrating-to-github-container-registry-for-docker-images
versions:
  fpt: '*'
  ghec: '*'
  feature: docker-ghcr-enterprise-migration
shortTitle: Migration to Container registry
topics:
  - Containers
  - Docker
  - Migration
ms.openlocfilehash: eb940881f59c9c935695c6fd7e3a62c9c3f387c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409488'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## Sobre o {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %} Para obter mais informações, confira "[Como trabalhar com {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)."

## Sobre a migração do Registro do Docker

{% data reusables.package_registry.container-registry-replaces-docker-registry %} Se você armazenou imagens do Docker no Registro do Docker, {% ifversion docker-ghcr-enterprise-migration %}um proprietário de empresa{% else %}{% data variables.product.company_short %}{% endif %} migrará gradualmente as imagens para o {% data variables.product.prodname_container_registry %}. Nenhuma ação sua é necessária.

{% ifversion docker-ghcr-enterprise-migration %}

{% note %}

**Observação**: {% data reusables.package_registry.container-registry-ghes-migration-availability %} Para obter mais informações sobre como encontrar a versão de {% data variables.product.product_name %} usada, confira "[Sobre versões de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)."

{% endnote %}

{% endif %}

Depois que uma imagem do Docker tiver sido migrada para {% data variables.product.prodname_container_registry %}, você verá as seguintes alterações nos detalhes do pacote.

- O ícone será o logotipo {% data variables.product.prodname_container_registry %} em vez do logotipo do Docker.
- O domínio na URL de pull será {% data variables.product.prodname_container_registry_namespace %} em vez de dados {% data variables.product.prodname_docker_registry_namespace %}.

{% ifversion fpt or ghec %}

![Captura de tela de uma imagem do Docker migrada para {% data variables.product.prodname_container_registry %}](/assets/images/help/package-registry/container-registry-details-page.png)

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %}

{% ifversion fpt or ghec %}

Após a migração, você não poderá mais usar a API do GraphQL para consultar pacotes com um `PackageType` de "DOCKER". Em vez disso, use a API REST para consultar pacotes com um `package_type` de "container". Para obter mais informações, confira "[Pacotes](/rest/reference/packages)" na documentação da API REST.

## Sobre a cobrança do {% data variables.product.prodname_container_registry %}

Para obter mais informações sobre a cobrança do {% data variables.product.prodname_container_registry %}, confira "[Sobre a cobrança do {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".

{% endif %}

{% ifversion docker-ghcr-enterprise-migration %}

## Leitura adicional

- "[Como migrar sua empresa para {% data variables.product.prodname_container_registry %} do Registro do Docker](/admin/packages/migrating-your-enterprise-to-the-container-registry-from-the-docker-registry)"

{% endif %}
