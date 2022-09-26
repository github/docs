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
shortTitle: Add organizations
permissions: Enterprise owners can add organizations to an enterprise.
ms.openlocfilehash: 09e4fa9c1b33f50e35f6088eb671b90df4a5eda3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573350'
---
## Sobre a adição de organizações à sua conta corporativa

Sua conta corporativa pode ser proprietária de organizações. Os integrantes da sua empresa podem colaborar em projetos relacionados dentro de uma organização. Para obter mais informações, confira "[Sobre as organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

Você pode adicionar organizações à sua conta corporativa. Se você não usar {% data variables.product.prodname_emus %}, poderá adicionar organizações existentes em {% data variables.product.product_location %} à sua empresa. Você não pode adicionar uma organização existente de um {% data variables.product.prodname_emu_enterprise %} a uma empresa diferente.

{% data reusables.enterprise.create-an-enterprise-account %} Para obter mais informações, confira "[Como criar uma conta corporativa](/admin/overview/creating-an-enterprise-account)".

Depois de adicionar uma organização existente à sua empresa, os recursos da organização permanecerão acessíveis aos membros nas mesmas URLs e as alterações a seguir serão aplicadas.

- Os membros da organização se tornarão membros da empresa, e {% data variables.product.company_short %} cobrará a conta corporativa pelo uso da organização. Você precisa garantir que a conta corporativa tenha licenças suficientes para acomodar eventuais novos membros. Para obter mais informações, confira "[Sobre a cobrança para a empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".
- Os proprietários empresariais podem gerenciar a própria função dentro da organização. Para obter mais informações, confira "[Como gerenciar sua função em uma organização pertencente à sua empresa](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)".
- Todas as políticas aplicadas à empresa serão aplicadas à organização. Para obter mais informações, confira "[Sobre as políticas empresariais](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)."
- Se o SSO do SAML estiver configurado para a conta corporativa, a configuração SAML da empresa se aplicará à organização. Se a organização tiver usado o SSO do SAML, a configuração da conta corporativa substituirá a configuração da organização. O SCIM não está disponível para contas corporativas, portanto, o SCIM será desabilitado para a organização. Para obter mais informações, confira "[Configurar o logon único do SAML para sua empresa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)" e "[Alternar sua configuração do SAML de uma organização para uma conta corporativa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".
- Se o SSO do SAML foi configurado para a organização, os PATs (tokens de acesso pessoal) existentes dos membros ou chaves SSH que foram autorizados a acessar os recursos da organização serão autorizados a acessar os mesmos recursos. Para acessar organizações adicionais pertencentes à empresa, os membros precisam autorizar o PAT ou a chave. Para obter mais informações, confira "[Como autorizar um token de acesso pessoal para uso com o logon único do SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" e "[Como autorizar uma chave SSH para uso com o logon único do SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)".
- Se a organização estava conectada a {% data variables.product.prodname_ghe_server %} ou {% data variables.product.prodname_ghe_managed %} usando {% data variables.product.prodname_github_connect %}, a adição da organização a uma empresa não atualiza a conexão. Os recursos de {% data variables.product.prodname_github_connect %} não funcionarão mais para a organização. Para continuar usando o {% data variables.product.prodname_github_connect %}, você precisa desabilitar e habilitar novamente o recurso. Para obter mais informações, consulte os seguintes artigos.

  - "[Gerenciando {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/managing-github-connect)" na documentação {% data variables.product.prodname_ghe_server %}
  - "[Gerenciando {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/managing-github-connect)" na documentação {% data variables.product.prodname_ghe_managed %}
- Se a organização usou dados de aplicativos do {% data variables.product.prodname_marketplace %}, a organização pode continuar a usar os aplicativos, mas precisa pagar o fornecedor diretamente. Para obter mais informações, contate o fornecedor do aplicativo.

## Criar uma organização em sua conta corporativa

Novas organizações que você cria nas configurações de sua conta corporativa são incluídas na assinatura da conta corporativa do {% data variables.product.prodname_ghe_cloud %}.

Os proprietários da empresa que criam uma organização pertencente à conta corporativa automaticamente se tornam proprietários da organização. Para obter mais informações sobre os proprietários da organização, confira "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

{% data reusables.enterprise-accounts.access-enterprise %}
2. Na guia **Organizações**, acima da lista de organizações, clique em **Nova organização**.
  ![Botão Nova organização](/assets/images/help/business-accounts/enterprise-account-add-org.png)
3. Em "Organization name" (Nome da organização), digite um nome para sua organização.
  ![Campo usado para digitar o nome de uma nova organização](/assets/images/help/business-accounts/new-organization-name-field.png)
4. Clique em **Criar organização**.
5. Em "Convidar proprietários", digite o nome de usuário de uma pessoa que deseja convidar para se tornar um proprietário da organização e clique em **Convidar**.
  ![Campo de pesquisa do proprietário da organização e botão Convidar](/assets/images/help/business-accounts/invite-org-owner.png)
6. Clique em **Concluir**.

## Convidar uma organização para se juntar-se à sua conta corporativa

Os proprietários corporativos podem convidar organizações existentes para juntar-se à sua conta corporativa. Se a organização que deseja convidar já pertence a outra empresa, você não poderá enviar um convite até que a empresa anterior desista da propriedade da organização. Para obter mais informações, confira "[Como remover uma organização da sua empresa](/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise)".

{% data reusables.enterprise-accounts.access-enterprise %}
2. Na guia **Organizações**, acima da lista de organizações, clique **em Convidar organização**.
![Convidar organização](/assets/images/help/business-accounts/enterprise-account-invite-organization.png)
3. Em "Organização", comece a digitar o nome da organização que deseja convidar e selecione-a quando aparecer na lista suspensa.
![Pesquisa de organização](/assets/images/help/business-accounts/enterprise-account-search-for-organization.png)
4. Clique em **Convidar organização**.
5. Os proprietários da organização receberão um e-mail convidando-os para participar da empresa. Pelo menos um proprietário deverá aceitar o convite antes que o processo possa continuar. Você pode cancelar ou reenviar o convite a qualquer momento antes que um proprietário o aprove.
![Cancelar ou reenviar](/assets/images/help/business-accounts/enterprise-account-invitation-sent.png)
6. Uma vez que o proprietário da organização tenha aprovado o convite, você poderá ver o seu estado na lista de convites pendentes.
![Convite pendente](/assets/images/help/business-accounts/enterprise-account-pending.png)
7. Clique em **Aprovar** para concluir a transferência ou em **Cancelar** para cancelá-la.
![Aprovar convite](/assets/images/help/business-accounts/enterprise-account-transfer-approve.png)
