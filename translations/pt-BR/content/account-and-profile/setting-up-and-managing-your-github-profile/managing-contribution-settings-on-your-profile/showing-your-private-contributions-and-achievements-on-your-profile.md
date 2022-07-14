---
title: Exibindo suas contribuições privadas e conquistas no seu perfil
intro: 'Seu perfil do {% data variables.product.product_name %} mostra um gráfico de contribuições no seu repositório no último ano. Você pode optar por mostrar atividade anonimizada de {% ifversion fpt or ghes or ghec %}repositórios privados e internos{% else %}privados{% endif %}{% ifversion fpt or ghes or ghec %} além da atividade de repositórios públicos{% endif %}.'
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
shortTitle: Contribuições e conquistas privadas
---

Se você mostrar suas contribuições privadas, pessoas sem acesso aos repositórios nos quais você trabalha não poderão ver os detalhes de suas contribuições privadas. Em vez disso, elas verão o número de contribuições privadas que você fez em determinado dia. Suas contribuições públicas incluirão informações detalhadas. Para obter mais informações, consulte "[Visualizar contribuições na página de perfil](/articles/viewing-contributions-on-your-profile-page)."

{% note %}

**Observação:** {% ifversion fpt or ghes or ghec %}Em {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, as contribuições públicas no seu perfil são visíveis {% ifversion fpt or ghec %}para qualquer pessoa no mundo que pode acessar {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}apenas para outros usuários de {% data variables.product.product_location%}{% endif %}.{% elsif ghae %}Em {% data variables.product.prodname_ghe_managed %}, apenas outros integrantes da empresa podem ver as contribuições no seu perfil.{% endif %}

{% endnote %}

## Alterar a visibilidade de suas contribuições privadas

{% data reusables.profile.access_profile %}
1. Mostre ou oculte contribuições privadas no perfil:
    - Para mostrar suas contribuições privadas, use o menu suspenso **Contribution settings** (Configurações de contribuição) localizado acima do gráfico de contribuições e marque **Private contributions** (Contribuições privadas). Os visitantes verão sua contagem de contribuições privadas sem informações adicionais. ![Habilitar visitantes para ver contribuições privadas a partir do menu suspenso contribution settings (configurações de contribuição)](/assets/images/help/profile/private-contributions-on.png)
    - Para ocultar suas contribuições privadas, use o menu suspenso **Contribution settings** (Configurações de contribuição) localizado acima do gráfico de contribuições e desmarque **Private contributions** (Contribuições privadas). Os visitantes verão apenas suas contribuições públicas. ![Habilitar visitantes para ver contribuições privadas a partir do menu suspenso contribution settings (configurações de contribuição)](/assets/images/help/profile/private-contributions-off.png)

## Mudando a visibilidade das Conquistas

{% data reusables.user-settings.access_settings %}
1. Exibir ou ocultar as Conquistas no seu perfil:
    - Para mostrar conquistas no seu perfil, acesse **configurações de perfil**e marque a caixa de seleção ao lado **Mostrar conquistas no meu perfil.** ![Permitir que os visitantes vejam as conquistas a partir das configurações de perfil](/assets/images/achievements-profile-settings-off.png)
    - Para ocultar conquistas do seu perfil, acesse **configurações de perfil** e desmarque a caixa de seleção ao lado de **Mostrar conquistas no meu perfil.** ![Ocultar conquistas de visitantes nas configurações de perfil](/assets/images/achievements-profile-settings-on.png)

## Leia mais

- "[Visualizar contribuições na página de perfil](/articles/viewing-contributions-on-your-profile-page)"
- "[Por que minhas contribuições não aparecem no meu perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
