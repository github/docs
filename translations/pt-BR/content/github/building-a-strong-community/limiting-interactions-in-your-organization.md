---
title: Restringir interações na organização
intro: 'Os proprietários de organizações podem restringir temporariamente determinados usuários de comentar, abrir problemas ou criar pull requests nos repositórios públicos da organização para impor um período de atividade limitada.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
versions:
  free-pro-team: '*'
---

Depois de 24 horas, os usuários podem retomar à atividade normal nos repositórios públicos de sua organização. Quando você habilita restrições de atividades para toda a organização, você não pode habilitar ou desabilitar restrições de interação em repositórios individuais. Para obter mais informações sobre restrições de atividades por repositórios, consulte "[Restringir interações no repositório](/articles/limiting-interactions-in-your-repository)".

{% tip %}

**Dica:** proprietários de organizações também podem bloquear usuários por um período específico. Após o término do bloqueio, o usuário é automaticamente desbloqueado. Para obter mais informações, consulte "[Bloquear um usuário em sua organização](/articles/blocking-a-user-from-your-organization)".

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. Na barra lateral da organização, em Settings (Configurações), clique em **Interaction limits** (Restrições de interação). ![Interaction limits (Restrições de interação) em Settings (Configurações) da organização ](/assets/images/help/organizations/org-settings-interaction-limits.png)
5. Em "Temporary interaction limits" (Restrições de interação temporárias), clique em uma ou mais opções.![Opções Temporary interaction limit (Restrições de interação temporárias)](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)
   - **Limit to existing users** (Restringir a usuários existentes): restringe a atividade para usuários da organização com contas que tenham sido criadas há menos de 24 horas, que não tenham contribuições prévias e que não sejam colaboradores.
   - **Limit to prior contributors** (Restringir a usuários prévios): restringe a atividade para usuários da organização que não tenham contribuído anteriormente e que não sejam colaboradores.
   - "[Níveis de permissão do repositório de conta de usuário](/articles/permission-levels-for-a-user-account-repository)"

### Leia mais
- "[Denunciar abuso ou spam](/articles/reporting-abuse-or-spam)"
- "[Gerenciar o acesso de um indivíduo a um repositório da organização](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Níveis de permissão do repositório de conta de usuário](/articles/permission-levels-for-a-user-account-repository)"
- "[Níveis de permissão do repositório para uma organização](/articles/repository-permission-levels-for-an-organization)"
