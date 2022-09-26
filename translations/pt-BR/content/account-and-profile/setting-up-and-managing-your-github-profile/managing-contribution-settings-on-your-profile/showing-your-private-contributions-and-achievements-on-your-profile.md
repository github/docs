---
title: Como mostrar as contribuições e conquistas privadas em seu perfil
intro: 'Seu perfil do {% data variables.product.product_name %} mostra um gráfico de contribuições no seu repositório no último ano. Você pode mostrar uma atividade anonimizada de {% ifversion fpt or ghes or ghec %}repositórios privados e internos{% else %}privados{% endif %}{% ifversion fpt or ghes or ghec %} além da atividade de repositórios públicos{% endif %}.'
redirect_from:
  - /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Private contributions and achievements
ms.openlocfilehash: b40e3835bf1548ff4ced75d1207de9a5b493dc90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079408'
---
Se você mostrar suas contribuições privadas, pessoas sem acesso aos repositórios nos quais você trabalha não poderão ver os detalhes de suas contribuições privadas. Em vez disso, elas verão o número de contribuições privadas que você fez em determinado dia. Suas contribuições públicas incluirão informações detalhadas. Para obter mais informações, confira "[Como ver as contribuições na página do seu perfil](/articles/viewing-contributions-on-your-profile-page)".

{% note %}

**Observação:** {% ifversion fpt or ghes or ghec %}No {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, as contribuições públicas no seu perfil são visíveis {% ifversion fpt or ghec %}para qualquer pessoa no mundo que possa acessar o {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}apenas para outros usuários do {% data variables.product.product_location%}{% endif %}.{% elsif ghae %}No {% data variables.product.prodname_ghe_managed %}, somente outros membros da sua empresa podem ver as contribuições no seu perfil.{% endif %}

{% endnote %}

## Alterar a visibilidade de suas contribuições privadas

{% data reusables.profile.access_profile %}
1. Mostre ou oculte contribuições privadas no perfil:
    - Para divulgar suas contribuições privadas, acima do grafo de contribuições, use o menu suspenso **Configurações de contribuição** e selecione **Contribuições privadas**. Os visitantes verão sua contagem de contribuições privadas sem informações adicionais.
  ![Permitir que os visitantes vejam as contribuições privadas no menu suspenso Configurações de contribuição](/assets/images/help/profile/private-contributions-on.png)
    - Para ocultar suas contribuições privadas, acima do grafo de contribuições, use o menu suspenso **Configurações de contribuição** e desmarque **Contribuições privadas.** Os visitantes só verão suas contribuições públicas.
   ![Permitir que os visitantes vejam as contribuições privadas no menu suspenso Configurações de contribuição](/assets/images/help/profile/private-contributions-off.png)

## Como alterar a visibilidade das Conquistas

{% data reusables.user-settings.access_settings %}
1. Mostrar ou ocultar as Conquistas em seu perfil:
    - Para mostrar as Conquistas em seu perfil, acesse **Configurações de perfil** e marque a caixa de seleção ao lado de **Mostrar Conquistas no meu perfil.** 
  ![Permitir que os visitantes vejam as Conquistas nas configurações de perfil](/assets/images/achievements-profile-settings-off.png)
    - Para ocultar as Conquistas do seu perfil, acesse **Configurações de perfil** e desmarque a caixa de seleção ao lado de **Mostrar Conquistas no meu perfil.** 
  ![Ocultar as Conquistas dos visitantes nas configurações de perfil](/assets/images/achievements-profile-settings-on.png)

## Leitura adicional

- "[Como ver as contribuições na página do seu perfil](/articles/viewing-contributions-on-your-profile-page)"
- "[Por que minhas contribuições não aparecem no meu perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
