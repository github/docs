---
title: Restabelecer o acesso de um ex-colaborador externo à organização
intro: É possível restabelecer as permissões de acesso de um ex-colaborador externo para repositórios, forks e configurações da organização.
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
shortTitle: Reinstate collaborator
ms.openlocfilehash: 88d986f922f1a66d652dba55f10142f7e493ffa2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146178900"
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

 - Somente os proprietários da organização podem restabelecer o acesso de colaboradores externos a uma organização.{% ifversion prevent-org-admin-add-outside-collaborator %} Os proprietários empresariais podem restringir ainda mais a capacidade de restabelecer o acesso de colaboradores externos somente aos proprietários empresariais.{% endif %} Para obter mais informações, confira "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".
 - O restabelecimento de um fluxo de membro no {% data variables.product.product_location %} pode usar o termo "membro" para descrever o restabelecimento de um colaborador externo, mas se você restabelecer essa pessoa e manter os privilégios anteriores dela, ela terá apenas as [permissões anteriores de colaborador externo](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators).{% ifversion fpt or ghec %}
 - Se a organização tiver uma assinatura paga por usuário, ela deverá ter uma licença não utilizada disponível para você poder convidar um integrante para participar da organização ou restabelecer um ex-integrante da organização. Para obter mais informações, confira "[Sobre os preços por usuário](/articles/about-per-user-pricing)".{% endif %}

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.reinstate-user-type-username %} {% ifversion fpt or ghec %}
1. Opte por restaurar os privilégios anteriores do colaborador externo na organização clicando em **Convidar e restabelecer** ou por limpar os privilégios anteriores e definir novas permissões de acesso clicando em **Convidar e começar do zero**.

  {% warning %}

  **Aviso:** caso deseje fazer upgrade do colaborador externo para um membro da sua organização, escolha **Convidar e começar de novo** e selecione uma nova função para essa pessoa. Mas se você optar por começar do zero, as bifurcações privadas de repositórios da organização desse usuário serão perdidas. Para tornar o antigo colaborador externo um membro da sua organização *e* manter os forks dele privados, escolha **Convidar e restabelecer**. Depois que essa pessoa aceitar o convite, você poderá convertê-lo em um membro da organização [convidando-o a ingressar na organização como membro](/articles/converting-an-outside-collaborator-to-an-organization-member).

  {% endwarning %}

  ![Escolha se deseja restaurar as configurações](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png) {% else %}
6. Opte por restaurar os privilégios anteriores do colaborador externo na organização clicando em **Adicionar e restabelecer** ou por limpar os privilégios anteriores e definir novas permissões de acesso clicando em **Adicionar e começar do zero**.

  {% warning %}

  **Aviso:** caso deseje fazer upgrade do colaborador externo para um membro da sua organização, escolha **Adicionar e começar de novo** e selecione uma nova função para essa pessoa. Mas se você optar por começar do zero, as bifurcações privadas de repositórios da organização desse usuário serão perdidas. Para tornar o antigo colaborador externo um membro da sua organização *e* manter os forks dele privados, escolha **Adicionar e restabelecer**. Em seguida, você poderá convertê-lo em um membro da organização [adicionando-o à organização como membro](/articles/converting-an-outside-collaborator-to-an-organization-member).

  {% endwarning %}

  ![Escolha se deseja restaurar as configurações](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png) {% endif %} {% ifversion fpt or ghec %}
7. Se você limpou os privilégios anteriores de um antigo colaborador externo, escolha uma função para o usuário e, opcionalmente, adicione-o a algumas equipes e clique em **Enviar convite**.
  ![Opções Função e Equipe e botão Enviar convite](/assets/images/help/organizations/add-role-send-invitation.png) {% else %}
7. Se você limpou os privilégios anteriores de um antigo colaborador externo, escolha uma função para o usuário e, opcionalmente, adicione-o a algumas equipes e clique em **Adicionar membro**.
  ![Opções de função e equipe e botão Adicionar membro](/assets/images/help/organizations/add-role-add-member.png) {% endif %} {% ifversion fpt or ghec %}
8. A pessoa convidada receberá um e-mail com um convite para participar da organização. Ela precisará aceitar o convite antes de se tornar um colaborador externo na organização. {% data reusables.organizations.cancel_org_invite %} {% endif %}

## Leitura Adicional

- "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
