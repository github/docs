---
title: Adicionando organizações à sua empresa
intro: É possível criar novas organizações ou convidar organizações existentes para gerenciar dentro da sua empresa.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /articles/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account
versions:
  ghec: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Adicionar organizações
---

## Sobre organizações

Sua conta corporativa pode ser proprietária de organizações. Os integrantes da sua empresa podem colaborar em projetos relacionados dentro de uma organização. Para obter mais informações, consulte "[Sobre organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

Os proprietários corporativos podem criar novas organizações dentro das configurações de uma conta corporativa ou convidar organizações existentes para participar de uma empresa. Para adicionar uma organização à sua empresa, você deve criar a organização dentro das configurações de conta corporativa.

Você só pode adicionar organizações dessa forma a uma conta corporativa existente. {% data reusables.enterprise.create-an-enterprise-account %} Para obter mais informações, consulte "[Criando uma conta corporativa](/admin/overview/creating-an-enterprise-account)".

## Criar uma organização em sua conta corporativa

Novas organizações que você cria nas configurações de sua conta corporativa são incluídas na assinatura da conta corporativa do {% data variables.product.prodname_ghe_cloud %}.

Os proprietários da empresa que criam uma organização pertencente à conta corporativa automaticamente se tornam proprietários da organização. Para obter mais informações sobre os proprietários da organização, consulte "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

{% data reusables.enterprise-accounts.access-enterprise %}
2. Na guia **Organizations** (Organizações), acima da lista de organizações, clique em **New organization** (Nova organização). ![Botão New organization (Nova organização)](/assets/images/help/business-accounts/enterprise-account-add-org.png)
3. Em "Organization name" (Nome da organização), digite um nome para sua organização. ![Campo para digitar o nome da nova organização](/assets/images/help/business-accounts/new-organization-name-field.png)
4. Clique em **Create organization** (Criar organização).
5. Em "Invite owners" (Convidar proprietários), digite o nome de usuário de uma pessoa que deseja convidar para se tornar um proprietário da organização e clique em **Invite** (Convidar). ![Campo de pesquisa do proprietário da organização e botão Invite (Convidar)](/assets/images/help/business-accounts/invite-org-owner.png)
6. Clique em **Finalizar**.

## Convidar uma organização para se juntar-se à sua conta corporativa

Os proprietários corporativos podem convidar organizações existentes para juntar-se à sua conta corporativa. Se a organização que deseja convidar já pertence a outra empresa, você não poderá enviar um convite até que a empresa anterior desista da propriedade da organização. Para obter mais informações, consulte "[Removendo uma organização da sua empresa](/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise)."

{% data reusables.enterprise-accounts.access-enterprise %}
2. Na aba **Organizações**, acima da lista de organizações, clique em **Convidar organização**. ![Convidar organização](/assets/images/help/business-accounts/enterprise-account-invite-organization.png)
3. Em "Organização", comece a digitar o nome da organização que deseja convidar e selecione-a quando aparecer na lista suspensa. ![Pesquisar organização](/assets/images/help/business-accounts/enterprise-account-search-for-organization.png)
4. Clique em **Convidar organização**.
5. Os proprietários da organização receberão um e-mail convidando-os para participar da organização. Pelo menos um proprietário deverá aceitar o convite antes que o processo possa continuar. Você pode cancelar ou reenviar o convite a qualquer momento antes que um proprietário o aprove. ![Cancelar ou reenviar](/assets/images/help/business-accounts/enterprise-account-invitation-sent.png)
6. Uma vez que o proprietário da organização tenha aprovado o convite, você poderá ver o seu estado na lista de convites pendentes. ![Convite pendente](/assets/images/help/business-accounts/enterprise-account-pending.png)
7. Clique em **Aprovar** para concluir a transferência ou **Cancelar** para cancelá-la. ![Aprovar convite](/assets/images/help/business-accounts/enterprise-account-transfer-approve.png)
