---
title: Restringir interações no repositório
intro: 'Pessoas com acesso de proprietário ou administradors podem restringir temporariamente determinados usuários de comentar, abrir problemas ou criar pull requests em seu repositório público para impor um período de atividade limitada.'
redirect_from:
  - /articles/limiting-interactions-with-your-repository/
  - /articles/limiting-interactions-in-your-repository
versions:
  free-pro-team: '*'
---

Depois de 24 horas, os usuários podem retomar à atividade normal no repositórios.

{% tip %}

**Dica:** proprietários da organização podem habilitar restrições de atividades em toda a organização. Se restrições de atividades são habilitadas em toda a organização, você não pode restringir atividades em repositórios individuais. Para obter mais informações, consulte "[Restringir interações na organização](/articles/limiting-interactions-in-your-organization)".

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Na barra lateral do repositório, em Settings (Configurações), clique em **Interaction limits** (Restrições de interação). ![Interaction limits (Restrições de interação) em Settings (Configurações) do repositório ](/assets/images/help/repository/repo-settings-interaction-limits.png)
4. Em "Temporary interaction limits" (Restrições de interação temporárias), clique em uma ou mais opções.![Opções Temporary interaction limit (Restrições de interação temporárias)](/assets/images/help/repository/temporary-interaction-limits-options.png)
    - **Limit to existing users** (Restringir a usuários existentes): restringe a atividade para usuários com contas que tenham sido criadas há menos de 24 horas, que não tenham contribuições prévias e que não sejam colaboradores.
    - **Limit to prior contributors** (Restringir a usuários prévios): restringe a atividade para usuários que não tenham contribuído anteriormente e que não sejam colaboradores.
    - "[Níveis de permissão do repositório de conta de usuário](/articles/permission-levels-for-a-user-account-repository)"

### Leia mais
- "[Denunciar abuso ou spam](/articles/reporting-abuse-or-spam)"
- "[Gerenciar o acesso de um indivíduo a um repositório da organização](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Níveis de permissão do repositório de conta de usuário](/articles/permission-levels-for-a-user-account-repository)"
- "[Níveis de permissão do repositório para uma organização](/articles/repository-permission-levels-for-an-organization)"
