---
title: Visualizar pacotes
intro: É possível ver informações sobre pacotes publicados em um repositório e limitar os resultados por organização ou usuário.
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/publishing-and-managing-packages/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/viewing-packages
  - /packages/publishing-and-managing-packages/viewing-packages
  - /packages/manage-packages/viewing-packages
permissions: You must have at least read permissions to view a package.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4fe01f80ec64f8029b1b2bce1d776da4eddfbd75
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192838'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## Sobre a visualização de pacotes

A sua capacidade de visualizar um pacote depende de vários fatores. Por padrão, você pode visualizar todos os pacotes que você publicou.

{% ifversion packages-registries-v2 %} Pacotes com escopo para repositórios herdam suas permissões e visibilidade do repositório que possui o pacote. Alguns registros **só** dão suporte a pacotes com escopo de repositório. Para obter uma lista desses registros, confira "[Sobre permissões para {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)".

Outros registros oferecem a opção de permissões granulares e configurações de visibilidade que podem ser personalizadas para cada pacote pertencente a uma conta de usuário pessoal ou de organização. Você pode optar por usar permissões granulares ou conectar o pacote a um repositório e herdar as permissões do repositório. Para obter mais informações, confira "[Como conectar um repositório a um pacote](/packages/learn-github-packages/connecting-a-repository-to-a-package)" e "[Como configurar o controle de acesso e a visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".

{% else %}

Os pacotes herdam suas permissões e visibilidade do repositório no qual estão hospedados. Para obter mais informações, confira "[Sobre as permissões para o {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages)".

{% endif %}

{% data reusables.package_registry.package-page-info %}

## Visualizar pacotes de um repositório

Você pode encontrar e visualizar um pacote localizado em um repositório específico.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.navigate-to-packages %}

## Visualizar pacotes de uma organização

Você pode encontrar e visualizar um pacote localizado nos repositórios de uma organização a que pertence.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. Abaixo do nome da sua organização, clique em {% octicon "package" aria-label="The package icon" %} **Pacotes**.
{% data reusables.package_registry.navigate-to-packages %}

## Visualizar seus pacotes

Você pode encontrar e visualizar qualquer pacote que você publicou em todas as organizações e repositórios. 

{% data reusables.profile.access_profile %}
2. Na parte superior da página de perfil, no menu de navegação principal, clique em **Pacotes**.
  ![Guia Projeto](/assets/images/help/package-registry/user-packages-tab.png) {% data reusables.package_registry.navigate-to-packages %}

## Leitura adicional

- "[Pesquisa de pacotes](/search-github/searching-on-github/searching-for-packages)"
