---
title: Gerenciar tags
intro: 'Você pode usar {% data variables.product.prodname_desktop %} para criar, fazer push e visualizar tags.'
redirect_from:
  - /desktop/contributing-to-projects/managing-tags
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-tags
versions:
  fpt: '*'
ms.openlocfilehash: 980e47f6e3300995f6312499b23768d6f0401f36
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145084067'
---
## Sobre tags no {% data variables.product.prodname_desktop %}

O {% data variables.product.prodname_desktop %} permite que você crie tags anotadas. As tags são associadas a commits. Portanto, você pode usar uma tag para marcar um ponto individual no histórico do seu repositório, incluindo um número de versão para uma versão. Para obter mais informações sobre as tags de versão, confira "[Sobre as versões](/github/administering-a-repository/about-releases)".

{% data reusables.desktop.tags-push-with-commits %}

## Criar uma tag

{% data reusables.desktop.history-tab %} {% data reusables.desktop.create-tag %} {% data reusables.desktop.name-tag %} {% data reusables.desktop.confirm-tag %}

## Visualizar tags

{% data reusables.desktop.history-tab %}
2. Clique em commit.
  {% note %}

  **Observação**: o {% data variables.product.prodname_desktop %} exibe uma seta {% octicon "arrow-up" aria-label="The up arrow icon" %} se a tag não tiver sido enviada por push para o repositório remoto.

  {% endnote %}

  ![Visualizar uma tag no histórico](/assets/images/help/desktop/viewing-tags-in-history.png)

3. Todas as tags associadas ao commit são visíveis nos metadados desse commit.
![Como ver uma tag no commit](/assets/images/help/desktop/viewing-tags-in-commit.png)

## Excluir tags

{% note %}

**Observação**: só é possível excluir as tags associadas aos commits que ainda não foram enviados por push.

{% endnote %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.delete-tag %}

## Leitura adicional

- "[Noções básicas sobre o Git – Marcação](https://git-scm.com/book/en/v2/Git-Basics-Tagging)" na documentação do Git
