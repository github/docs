---
title: Visualizar pessoas na sua empresa
intro: 'Para auditar o acesso à utilização de licença de usuário ou de recursos pertencentes à empresa, os proprietários corporativos podem exibir todos os administradores e integrantes da empresa.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-people-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: Visualizar as pessoas na sua empresa
---

## About the list of people in your enterprise

To audit access to your enterprise's resources and manage license usage, you can see a list of all the people who have access to your enterprise.

You can see all current enterprise members and enterprise administrators{% ifversion ghec %}, as well as pending invitations to become members and administrators{% endif %}. To make it easier to consume this information, you can search and filter the lists.

## Viewing enterprise administrators

You can view all the current enterprise owners{% ifversion ghec %} and billing managers{% endif %} for your enterprise.{% if enterprise-membership-view-improvements %} You can see useful information about each administrator{% ifversion ghec %} and filter the list by role{% endif %}.{% endif %} You can find a specific person by searching for their username or display name.

{% ifversion not ghae %}
You can also remove an administrator. For more information. see "[Inviting people to manage your enterprise](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#removing-an-enterprise-administrator-from-your-enterprise-account)."
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}

## Viewing members {% if enterprise-membership-view-improvements %}{% else %}and outside collaborators{% endif %}

You can see all the current members {% if enterprise-membership-view-improvements %}{% else %}or outside collaborators{% endif %} for your enterprise. You can see useful information about each account and filter the list in useful ways, such as by role. Ou localizar uma determinada pessoa procurando pelo nome de usuário ou o nome de exibição dela.

You can view more information about the person's access to your enterprise, such as the organizations the person belongs to, by clicking on the person's name.

{% if remove-enterprise-members %}
You can also remove any enterprise member from all organizations owned by the enterprise. For more information, see "[Removing a member from your enterprise](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise)."
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}{% if enterprise-membership-view-improvements %}{% else %}
1. Como alternativa, clique em **Outside collaborators** (Colaboradores externos) para exibir uma lista deles em vez de uma lista de integrantes.

   ![Outside collaborators tab on the enterprise members page](/assets/images/help/business-accounts/outside-collaborators-tab.png){% endif %}

{% if enterprise-membership-view-improvements %}
## Viewing outside collaborators

You can see all the current outside collaborators for your enterprise. You can see useful information about each collaborator and filter the list in useful ways, such as by organization. You can find a specific collaborator by searching for their username or display name.

You can view more information about the person's access to your enterprise, such as a list of all the repositories the collaborator has access to, by clicking on the person's name.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Under "People", click **Outside collaborators**.

  ![Outside collaborators tab in the enterprise settings sidebar]{% ifversion ghec%}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% else %}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% endif %}

{% endif %}


{% ifversion ghec %}
## Viewing pending invitations

You can see all the pending invitations to become administrators, members, or outside collaborators in your enterprise. You can filter the list in useful ways, such as by organization. Ou localizar uma determinada pessoa procurando pelo nome de usuário ou o nome de exibição dela.

If you use {% data variables.product.prodname_vss_ghe %}, the list of pending invitations includes all {% data variables.product.prodname_vs %} subscribers that haven't joined any of your organizations on {% data variables.product.prodname_dotcom %}, even if the subscriber does not have a pending invitation to join an organization. For more information about how to get {% data variables.product.prodname_vs %} subscribers access to {% data variables.product.prodname_enterprise %}, see "[Setting up {% data variables.product.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Under "People", click **Pending invitations**.

   ![Screenshot of the "Pending invitations" tab in the sidebar](/assets/images/help/enterprises/pending-invitations-tab.png)

1. Optionally, to view pending invitations for enterprise administrators or outside collaborators, under "Pending members", click **Administrators** or **Outside collaborators**.

   ![Screenshot of the "Members", "Administrators", and "Outside collaborators" tabs](/assets/images/help/enterprises/pending-invitations-type-tabs.png)


## Visualizando integrantes suspensos em um {% data variables.product.prodname_emu_enterprise %}

Se sua empresa usa {% data variables.product.prodname_emus %}, você também pode visualizar usuários suspensos. Os usuários suspensos são integrantes que foram desprovisionados depois que o aplicativo de {% data variables.product.prodname_emu_idp_application %} cancelou ou excluiu sua atribuição do provedor de identidade. Para obter mais informações, consulte[Sobre usuários gerenciados pela empresa](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Para ver uma lista de integrantes suspensos, acima da lista de integrantes ativos, clique em **Suspensos**. ![Captura de tela que mostra a opção "Suspenso"](/assets/images/help/enterprises/view-suspended-members.png)

{% endif %}

## Exibir usuários inativos

Você pode ver uma lista de todos os usuários desativados {% ifversion ghes or ghae %} que não foram suspensos e {% endif %}que não são administradores do site. {% data reusables.enterprise-accounts.dormant-user-activity-threshold %} Para obter mais informações, consulte "[Gerenciar usuários inativos](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)".

## Leia mais

- "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)"
