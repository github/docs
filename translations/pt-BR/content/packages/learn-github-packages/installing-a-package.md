---
title: Instalando um pacote
intro: 'Você pode instalar um pacote do {% data variables.product.prodname_registry %} e usá-lo como uma dependência no seu próprio projeto.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/installing-a-package
  - /packages/publishing-and-managing-packages/installing-a-package
  - /packages/manage-packages/installing-a-package
permissions: You can install any package that you have permission to view.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 86c095ab1eddc969e4e04f3305059678ffcb9c20
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145128274'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## Sobre a instalação do pacote

Você pode pesquisar em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} para encontrar pacotes em {% data variables.product.prodname_registry %} que você pode instalar no seu próprio projeto. Para obter mais informações, confira "[Pesquisar pacotes no {% data variables.product.prodname_registry %}](/search-github/searching-on-github/searching-for-packages)".

Depois de encontrar um pacote, você pode ler a descrição e as instruções de instalação e utilização na página de pacotes.

## Instalando um pacote

Você pode instalar um pacote do {% data variables.product.prodname_registry %} usando qualquer {% ifversion fpt or ghae or ghec %}cliente do pacote compatível{% else %}tipo de pacote habilitado para sua instância{% endif %}, seguindo as mesmas diretrizes gerais.

1. Efetue a autenticação com {% data variables.product.prodname_registry %} usando as instruções para seu cliente de pacote. Para obter mais informações, confira "[Autenticação no GitHub Packages](/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages)".
2. Instale o pacote usando as instruções para seu cliente de pacote.

Para obter instruções específicas do seu cliente de pacotes, confira "[Trabalhando com um registro do {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry)".
