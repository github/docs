---
title: Restabelecer ex-integrantes da organização
intro: 'Os proprietários da organização podem {% if currentVersion == "free-pro-team@latest" %}convidar os antigos integrantes da organização para juntar-se novamente a{% else %}adicionar ex-integrantes à{% endif%} sua organização e escolher se desejam restaurar as funções anteriores da pessoa, acessar as permissões, bifurcações e configurações.'
redirect_from:
  - /articles/reinstating-a-former-member-of-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
permissions: 'Organization owners can reinstate a former member of an organization.'
---

### About member reinstatement

If you [remove a user from your organization](/articles/removing-a-member-from-your-organization){% if currentVersion == "github-ae@latest" %} or{% else %},{% endif %} [convert an organization member to an outside collaborator](/articles/converting-an-organization-member-to-an-outside-collaborator){% if currentVersion != "github-ae@latest" %}, or a user is removed from your organization because you've [required members and outside collaborators to enable two-factor authentication (2FA)](/articles/requiring-two-factor-authentication-in-your-organization){% endif %}, the user's access privileges and settings are saved for three months. Você pode restaurar os privilégios do usuário se você {% if currentVersion =="free-pro-team@latest" %}convidá-los{% else %}adicioná-los{% endif %} à organização nesse período de tempo.

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

Ao restabelecer um ex-integrante da organização, você pode restaurar:
 - A função do usuário na organização
 - As bifurcações privadas de repositórios de propriedade da organização
 - A associação nas equipes da organização
 - Os acessos e permissões anteriores nos repositórios da organização
 - As estrelas dos repositórios da organização
 - As atribuições de problemas na organização
 - As assinaturas do repositório (configurações de notificação para inspecionar, não inspecionar ou ignorar as atividades de um repositório)

{% if enterpriseServerVersions contains currentVersion %}
Se um integrante foi removido da organização por não usar a autenticação de dois fatores e a organização ainda exigir essa autenticação, o ex-integrante precisará habilitar a autenticação de dois fatores antes de você restabelecer a associação.
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
Se a sua organização tem uma assinatura paga por usuário, uma licença não utilizada deve estar disponível antes de você poder restabelecer um antigo integrante da organização. Para obter mais informações, consulte "[Sobre preços por usuário](/articles/about-per-user-pricing)". {% data reusables.organizations.org-invite-expiration %}
{% endif %}

### Restabelecer ex-integrantes da organização

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.reinstate-user-type-username %}
{% if currentVersion == "free-pro-team@latest" %}
6. Escolha se deseja restaurar os privilégios anteriores da pessoa na organização ou apagar os privilégios anteriores e definir novas permissões de acesso, depois clique em **Invite and reinstate** (Convidar e restabelecer) ou em **Invite and start fresh** (Convidar e começar do zero). ![Escolher restaurar as informações ou não](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png)
{% else %}
6. Escolha se deseja restaurar os privilégios anteriores da pessoa na organização ou apagar os privilégios anteriores e definir novas permissões de acesso, depois clique em **Add and reinstate** (Adicionar e restabelecer) ou em **Add and start fresh** (Adicionar e começar do zero). ![Escolher se deseja restaurar os privilégios](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
7. Se você apagou os privilégios anteriores de um ex-integrante da organização, escolha uma função para o usuário e adicione-o em algumas equipes (opcional), depois clique em **Send invitation** (Enviar convite). ![Opções Role and team (Função e equipe) e botão send invitation (enviar convite)](/assets/images/help/organizations/add-role-send-invitation.png)
{% else %}
7. Se você apagou os privilégios anteriores de um ex-integrante da organização, escolha uma função para o usuário e adicione-o em algumas equipes (opcional), depois clique em **Add member** (Adicionar integrante). ![Opções Role and team (Função e equipe) e botão add member (adicionar integrante)](/assets/images/help/organizations/add-role-add-member.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}

### Leia mais

- "[Converter um integrante da organização em colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator)"
