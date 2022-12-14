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
ms.openlocfilehash: 49771647b9c176d50dffeab150f4597598cb6109
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: '145128271'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## <a name="about-package-views"></a>Sobre a visualização de pacotes

A sua capacidade de visualizar um pacote depende de vários fatores. Por padrão, você pode visualizar todos os pacotes que você publicou. 

Pacotes com escopo de repositórios herdam suas permissões e visibilidade do repositório que possui o pacote. Os registros abaixo usam esse tipo de permissões:{% ifversion not fpt or ghec %}
- Registro do Docker (`docker.pkg.github.com`){% endif %}
- Registro de npm
- Registro do Rubygems
- Registro do Apache Maven
- Registro do NuGet

{% ifversion fpt or ghec %} O Registro de Contêiner oferece a opção de permissões granulares e configurações de visibilidade que podem ser personalizadas para cada pacote pertencente a uma conta pessoal de usuário ou de organização. Você pode optar por usar permissões granulares ou conectar o pacote a um repositório e herdar suas permissões. Para obter mais informações, confira "[Como conectar um repositório a um pacote](/packages/learn-github-packages/connecting-a-repository-to-a-package)".
{% endif %}

Para obter mais informações, confira "[Sobre as permissões para pacotes do GitHub](/packages/learn-github-packages/about-permissions-for-github-packages){% ifversion fpt or ghec %}" e "[Como configurar o controle de acesso e visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility){% endif %}".

{% data reusables.package_registry.package-page-info %}

## <a name="viewing-a-repositorys-packages"></a>Visualizar pacotes de um repositório

Você pode encontrar e visualizar um pacote localizado em um repositório específico.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.navigate-to-packages %}

## <a name="viewing-an-organizations-packages"></a>Visualizar pacotes de uma organização

Você pode encontrar e visualizar um pacote localizado nos repositórios de uma organização a que pertence.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. Abaixo do nome da sua organização, clique em {% octicon "package" aria-label="The package icon" %} **Pacotes**.
{% data reusables.package_registry.navigate-to-packages %}

## <a name="viewing-your-packages"></a>Visualizar seus pacotes

Você pode encontrar e visualizar qualquer pacote que você publicou em todas as organizações e repositórios. 

{% data reusables.profile.access_profile %}
2. Na parte superior da página de perfil, no menu de navegação principal, clique em **Pacotes**.
  ![Guia Projeto](/assets/images/help/package-registry/user-packages-tab.png) {% data reusables.package_registry.navigate-to-packages %}

## <a name="further-reading"></a>Leitura adicional

- "[Pesquisa de pacotes](/search-github/searching-on-github/searching-for-packages)"
