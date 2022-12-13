---
title: Mostrar ou ocultar contribuições privadas no perfil
intro: Your {% data variables.product.product_name %} profile shows a graph of your repository contributions over the past year. You can choose to show anonymized activity from {% ifversion fpt or ghes or ghec %}private and internal{% else %}private{% endif %} repositories{% ifversion fpt or ghes or ghec %} in addition to the activity from public repositories{% endif %}.
redirect_from:
- /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Profiles
shortTitle: Private contributions
ms.openlocfilehash: d3ca9c3bef9324baa73b96eb6dc26bdd75960b37
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145066048"
---
Se você mostrar suas contribuições privadas, pessoas sem acesso aos repositórios nos quais você trabalha não poderão ver os detalhes de suas contribuições privadas. Em vez disso, elas verão o número de contribuições privadas que você fez em determinado dia. Suas contribuições públicas incluirão informações detalhadas. Para obter mais informações, confira "[Como ver as contribuições na página do seu perfil](/articles/viewing-contributions-on-your-profile-page)".

{% note %}

**Observação:** {% ifversion fpt or ghes or ghec %}No {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, as contribuições públicas no seu perfil são visíveis {% ifversion fpt or ghec %}para qualquer pessoa no mundo que possa acessar o {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}apenas para outros usuários do {% data variables.product.product_location%}{% endif %}.{% elsif ghae %}No {% data variables.product.prodname_ghe_managed %}, somente outros membros da sua empresa podem ver as contribuições no seu perfil.{% endif %}

{% endnote %}

## <a name="changing-the-visibility-of-your-private-contributions"></a>Alterar a visibilidade de suas contribuições privadas

{% data reusables.profile.access_profile %}
1. Mostre ou oculte contribuições privadas no perfil:
    - Para divulgar suas contribuições privadas, acima do grafo de contribuições, use o menu suspenso **Configurações de contribuição** e selecione **Contribuições privadas**. Os visitantes verão sua contagem de contribuições privadas sem informações adicionais.
  ![Permitir que os visitantes vejam as contribuições privadas no menu suspenso Configurações de contribuição](/assets/images/help/profile/private-contributions-on.png)
    - Para ocultar suas contribuições privadas, acima do grafo de contribuições, use o menu suspenso **Configurações de contribuição** e desmarque **Contribuições privadas.** Os visitantes só verão suas contribuições públicas.
   ![Permitir que os visitantes vejam as contribuições privadas no menu suspenso Configurações de contribuição](/assets/images/help/profile/private-contributions-off.png)

## <a name="further-reading"></a>Leitura adicional

- "[Como ver as contribuições na página do seu perfil](/articles/viewing-contributions-on-your-profile-page)"
- "[Por que minhas contribuições não aparecem no meu perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
