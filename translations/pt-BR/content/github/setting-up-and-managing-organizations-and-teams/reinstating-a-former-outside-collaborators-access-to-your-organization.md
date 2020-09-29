---
title: Restabelecer o acesso de um ex-colaborador externo à organização
intro: 'Se você exigiu a autenticação de dois fatores na organização e um colaborador externo foi removido da organização por não ter a 2FA habilitada, poderá restabelecer as permissões de acesso do ex-colaborador externo nas configurações, nas bifurcações e nos repositórios da organização.'
redirect_from:
  - /articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization
  - /articles/reinstating-a-former-outside-collaborators-access-to-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Se o acesso de um colaborador externo aos repositórios privados da organização foi removido porque você passou a [exigir a autenticação de dois fatores para integrantes e colaboradores externos](/articles/requiring-two-factor-authentication-in-your-organization), as configurações e os privilégios de acesso do usuário serão mantidos por três meses. Você poderá restaurar os privilégios do usuário se {% if currentVersion == "free-pro-team@latest" %}convidá-lo{% else %}adicioná-lo{% endif %} novamente na organização durante esse período.

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

Ao restabelecer um ex-colaborador externo, você pode restaurar:
 - O acesso anterior do usuário aos repositórios da organização
 - As bifurcações privadas de repositórios de propriedade da organização
 - A associação nas equipes da organização
 - Os acessos e permissões anteriores nos repositórios da organização
 - As estrelas dos repositórios da organização
 - As atribuições de problemas na organização
 - As assinaturas do repositório (configurações de notificação para inspecionar, não inspecionar ou ignorar as atividades de um repositório)

{% tip %}

**Dicas**:
 - Somente proprietários da organização podem restabelecer o acesso de um colaborador externo à organização. Para obter mais informações, consulte "[Níveis de permissão para uma organização](/articles/permission-levels-for-an-organization)".
 - O fluxo de restabelecimento de um integrante no {% data variables.product.product_location %} pode usar o termo "integrante" para descrever o restabelecimento de um colaborador externo, mas se você restabelecer o usuário e mantiver os privilégios anteriores, ele terá apenas as [permissões anteriores de colaborador externo](/articles/permission-levels-for-an-organization/#outside-collaborators).{% if currentVersion == "free-pro-team@latest" %}
 - Se a organização tiver uma assinatura paga por usuário, ela deverá ter uma licença não utilizada disponível para você poder convidar um integrante para participar da organização ou restabelecer um ex-integrante da organização. Para obter mais informações, consulte "[Sobre preços por usuário](/articles/about-per-user-pricing)."{% endif %}

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.reinstate-user-type-username %}
{% if currentVersion == "free-pro-team@latest" %}
6. Escolha restaurar os privilégios anteriores do colaborador externo na organização clicando em **Invite and reinstate** (Convidar e restabelecer) ou escolha apagar os privilégios anteriores e definir novas permissões de acesso clicando em **Invite and start fresh** (Convidar e começar do zero).

  {% warning %}

  **Aviso:** se quiser converter um colaborador externo em um integrante da organização, selecione **Invite and start fresh** (Convidar e começar do zero) e escolha uma nova função para a pessoa. Mas se você optar por começar do zero, as bifurcações privadas de repositórios da organização desse usuário serão perdidas. Para converter o ex-colaborador externo em um integrante da organização *e* manter as bifurcações privadas dele, selecione **Invite and reinstate** (Convidar e restabelecer). Quando a pessoa aceitar o convite, você poderá fazer a conversão [convidando a pessoa para participar da organização como um integrante](/articles/converting-an-outside-collaborator-to-an-organization-member).

  {% endwarning %}

  ![Escolher se deseja restaurar as configurações](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png)
{% else %}
6. Escolha restaurar os privilégios anteriores do colaborador externo na organização clicando em **Add and reinstate** (Adicionar e restabelecer) ou escolha apagar os privilégios anteriores e definir novas permissões de acesso clicando em **Add and start fresh** (Adicionar e começar do zero).

  {% warning %}

  **Aviso:** se quiser converter um colaborador externo em um integrante da organização, selecione **Add and start fresh** (Adicionar e começar do zero) e escolha uma nova função para a pessoa. Mas se você optar por começar do zero, as bifurcações privadas de repositórios da organização desse usuário serão perdidas. Para converter o ex-colaborador externo em um integrante da organização *e* manter as bifurcações privadas dele, selecione **Add and reinstate** (Adicionar e restabelecer). Em seguida, converta-o em integrante da organização [adicionando ele à organização como um integrante](/articles/converting-an-outside-collaborator-to-an-organization-member).

  {% endwarning %}

  ![Escolher se deseja restaurar as configurações](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
7. Se você apagou os privilégios anteriores de um ex-colaborador externo, escolha uma função para o usuário e adicione-o em algumas equipes (opcional), depois clique em **Send invitation** (Enviar convite). ![Opções Role and team (Função e equipe) e botão send invitation (enviar convite)](/assets/images/help/organizations/add-role-send-invitation.png)
{% else %}
7. Se você apagou os privilégios anteriores de um ex-colaborador externo, escolha uma função para o usuário e adicione-o em algumas equipes (opcional), depois clique em **Add member** (Adicionar integrante). ![Opções Role and team (Função e equipe) e botão add member (adicionar integrante)](/assets/images/help/organizations/add-role-add-member.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
8. A pessoa convidada receberá um e-mail com um convite para participar da organização. Ela precisará aceitar o convite antes de se tornar um colaborador externo na organização. {% data reusables.organizations.cancel_org_invite %}
{% endif %}

### Leia mais

- "[Níveis de permissão do repositório para uma organização](/articles/repository-permission-levels-for-an-organization)"
