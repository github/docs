---
title: Personalizar a visualização de mídia social do seu repositório
intro: Você pode personalizar a imagem exibida nas plataformas de mídia social quando alguém vincula-se ao seu repositório.
redirect_from:
  - /articles/customizing-your-repositorys-social-media-preview
  - /github/administering-a-repository/customizing-your-repositorys-social-media-preview
  - /github/administering-a-repository/managing-repository-settings/customizing-your-repositorys-social-media-preview
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Social media preview
ms.openlocfilehash: a778b0fd95533a15806cc0034769fbf0feb3b217
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145127060'
---
Até você adicionar uma imagem, os links de repositório se expandem para mostrar informações básicas sobre o repositório e o avatar do proprietário. Adicionar uma imagem ao repositório ajuda a identificar seu projeto em várias plataformas sociais.

## Como adicionar uma imagem para personalizar a visualização de mídia social do seu repositório

{% ifversion not ghae %}Você pode carregar uma imagem em um repositório privado, mas sua imagem só pode ser compartilhada de um repositório público.{% endif %}

{% tip %}

**Dica:** a imagem deve ser um arquivo PNG, JPG ou GIF com menos de 1 MB. Para renderização de melhor qualidade, é recomendável manter a imagem em 640 x 320 pixels.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Em "Visualização social", clique em **Editar**
    - Para adicionar uma nova imagem, clique em **Carregar uma imagem…** .
    - Para remover uma imagem, clique em **Remover imagem**

    ![Menu suspenso Social preview (Visualização social)](/assets/images/help/repository/social-preview.png)

## Sobre a transparência

Damos suporte a imagens PNG com transparência. Muitas plataformas de comunicação dão suporte a um modo escuro, ou seja, usar uma visualização social transparente pode ser benéfico. A imagem transparente abaixo é aceitável em uma tela de fundo escura. No entanto, nem sempre esse pode ser o caso. 

Ao usar uma imagem com transparência, tenha em mente como ela pode ficar em diferentes telas de fundo coloridas ou plataformas que não dão suporte à transparência.

{% tip %}

**Dica:** caso você não tenha certeza, recomendamos usar uma imagem com uma tela de fundo sólida.
{% endtip %}

![Transparência de visualização social](/assets/images/help/repository/social-preview-transparency.png)
