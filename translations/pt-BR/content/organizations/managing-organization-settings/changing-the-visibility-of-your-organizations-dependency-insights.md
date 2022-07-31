---
title: Alterar a visibilidade de informações de dependência da organização
intro: Você pode permitir que todos os integrantes da organização exibam informações de dependência da sua organização ou limitar a exibição aos proprietários da organização.
redirect_from:
  - /articles/changing-the-visibility-of-your-organizations-dependency-insights
  - /github/setting-up-and-managing-organizations-and-teams/changing-the-visibility-of-your-organizations-dependency-insights
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Mude a visibilidade da ideia
---

Os proprietários da organização podem definir limitações para exibir informações de dependência da organização. Todos os integrantes de uma organização podem exibir informações de dependência da organização por padrão.

{% ifversion ghec %}
Os proprietários corporativos podem definir limitações para exibir informações de dependência da organização em todas as organizações da sua conta corporativa. Para obter mais informações, consulte[Políticas de Insights de dependência na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)".
{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Em "Member organization permissions" (Permissões da organização do integrante), marque ou desmarque **Allow members to view dependency insights** (Permitir que integrantes exibam informações de dependência). ![Caixa de seleção para permitir que integrantes exibam informações](/assets/images/help/organizations/allow-members-to-view-insights.png)
6. Clique em **Salvar**.
