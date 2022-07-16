---
title: Restabelecer o acesso de um ex-colaborador externo à organização
intro: 'É possível restabelecer as permissões de acesso de um ex-colaborador externo para repositórios, forks e configurações da organização.'
redirect_from:
  - /articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization
  - /articles/reinstating-a-former-outside-collaborators-access-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-outside-collaborators-access-to-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Restabelecer colaborador
---

Quando o acesso de um colaborador externo aos repositórios privados da sua organização é removido, os privilégios e configurações de acesso do usuário são salvos por três meses. Você poderá restaurar os privilégios do usuário se {% ifversion fpt or ghec %}convidá-lo{% else %}adicioná-lo{% endif %} novamente na organização durante esse período.

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

 - Apenas proprietários da organização podem reinserir o acesso dos colaboradores externos à organização.{% ifversion prevent-org-admin-add-outside-collaborator %} Os proprietários de empresas podem restringir ainda mais a capacidade de restabelecer o acesso dos colaboradores externos apenas a proprietários das empresas.{% endif %} Para obter mais informações, consulte "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".
 - O fluxo de restabelecimento de um integrante no {% data variables.product.product_location %} pode usar o termo "integrante" para descrever o restabelecimento de um colaborador externo, mas se você restabelecer o usuário e mantiver os privilégios anteriores, ele terá apenas as [permissões anteriores de colaborador externo](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators).{% ifversion fpt or ghec %}
 - Se a organização tiver uma assinatura paga por usuário, ela deverá ter uma licença não utilizada disponível para você poder convidar um integrante para participar da organização ou restabelecer um ex-integrante da organização. Para obter mais informações, consulte "[Sobre preços por usuário](/articles/about-per-user-pricing)."{% endif %}

{% endtip %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.reinstate-user-type-username %}
{% ifversion fpt or ghec %}
1. Escolha restaurar os privilégios anteriores do colaborador externo na organização clicando em **Invite and reinstate** (Convidar e restabelecer) ou escolha apagar os privilégios anteriores e definir novas permissões de acesso clicando em **Invite and start fresh** (Convidar e começar do zero).

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
{% ifversion fpt or ghec %}
7. Se você apagou os privilégios anteriores de um ex-colaborador externo, escolha uma função para o usuário e adicione-o em algumas equipes (opcional), depois clique em **Send invitation** (Enviar convite). ![Opções Role and team (Função e equipe) e botão send invitation (enviar convite)](/assets/images/help/organizations/add-role-send-invitation.png)
{% else %}
7. Se você apagou os privilégios anteriores de um ex-colaborador externo, escolha uma função para o usuário e adicione-o em algumas equipes (opcional), depois clique em **Add member** (Adicionar integrante). ![Opções Role and team (Função e equipe) e botão add member (adicionar integrante)](/assets/images/help/organizations/add-role-add-member.png)
{% endif %}
{% ifversion fpt or ghec %}
8. A pessoa convidada receberá um e-mail com um convite para participar da organização. Ela precisará aceitar o convite antes de se tornar um colaborador externo na organização. {% data reusables.organizations.cancel_org_invite %}
{% endif %}

## Leia mais

- "[Funções do repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
