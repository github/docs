---
title: Gerenciar a política de bifurcação da sua organização
intro: 'Você pode permitir ou impedir a bifurcação de qualquer repositório privado{% ifversion ghes or ghae or ghec %} e interno{% endif %} pertencente à sua organização.'
redirect_from:
  - /articles/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization
permissions: Organization owners can manage the forking policy for an organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Gerenciar política de bifurcação
---

Por padrão, as novas organizações estão configuradas para não permitir a bifurcação de repositórios privados{% ifversion ghes or ghec or ghae %} e internos{% endif %}.

Se você permitir a bifurcação de repositórios privados{% ifversion ghes or ghec or ghae %} e internos{% endif %} no nível da organização você também poderá configurar a capacidade de bifurcar um repositório privado{% ifversion ghes or ghec or ghae %} ou interno{% endif %}. Para obter mais informações, consulte "[Gerenciar a política de bifurcação do seu repositório](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)".

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.profile.org_member_privileges %}
1. Em "Bifurcação de repositório", selecione **Permitir bifurcação de repositórios {% ifversion ghec or ghes or ghae %}privados e {% endif %}internos**.

   {%- ifversion fpt %}
   ![Caixa de seleção para permitir ou proibir a bifurcação na organização](/assets/images/help/repository/allow-disable-forking-fpt.png)
   {%- elsif ghes or ghec or ghae %}
   ![Caixa de seleção para permitir ou proibir a bifurcação na organização](/assets/images/help/repository/allow-disable-forking-organization.png)
   {%- endif %}
6. Clique em **Salvar**.

## Leia mais

- "[Sobre bifurcações](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[Funções do repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
