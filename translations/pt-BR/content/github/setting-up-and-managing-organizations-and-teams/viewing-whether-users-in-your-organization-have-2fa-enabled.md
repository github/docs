---
title: Ver se os usuários da organização habilitaram a 2FA
intro: 'Você pode ver quais proprietários da organização, integrantes e colaboradores externos habilitaram a autenticação de dois fatores.'
redirect_from:
  - /articles/viewing-whether-users-in-your-organization-have-2fa-enabled
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% note %}

**Observação:** você pode exigir que todos os integrantes{% if currentVersion == "free-pro-team@latest" %}, inclusive proprietários, gerentes de cobrança e{% else %} e{% endif %} colaboradores externos na sua organização tenham a autenticação de dois fatores habilitada. Para obter mais informações, consulte "[Exigir autenticação de dois fatores em sua organização](/articles/requiring-two-factor-authentication-in-your-organization)".

{% endnote %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Para exibir os integrantes da organização, inclusive proprietários da organização, que habilitaram ou desabilitaram a autenticação de dois fatores, clique em **2FA** à direita e selecione **Enabled** (Habilitado) ou **Disabled** (Desabilitado). ![filter-org-members-by-2fa](/assets/images/help/2fa/filter-org-members-by-2fa.png)
5. Clique em **Outside collaborators** (Colaboradores externos), na guia "People" (Pessoas), para exibir aqueles que pertencem à sua organização. ![select-outside-collaborators](/assets/images/help/organizations/select-outside-collaborators.png)
6. Para exibir quais colaboradores externos habilitaram ou desabilitaram a autenticação de dois fatores, clique em **2FA** à direita e selecione **Enabled** (Habilitado) ou **Disabled** (Desabilitado). ![filter-outside-collaborators-by-2fa](/assets/images/help/2fa/filter-outside-collaborators-by-2fa.png)

### Leia mais

- "[Exibir as funções das pessoas em uma organização](/articles/viewing-people-s-roles-in-an-organization)"
