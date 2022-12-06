---
title: Adicionando organizações à sua empresa
intro: 'Você pode adicionar organizações a serem gerenciadas na empresa criando uma organização, convidando uma organização existente ou transferindo uma organização de uma conta corporativa diferente.'
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
ms.openlocfilehash: 7b5627eb89e7e5356716a9cd2a9dfe03fd455270
ms.sourcegitcommit: e98b752895109965b32cb277610985da5799f8a1
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/01/2022
ms.locfileid: '148127616'
---
## Sobre a adição de organizações à sua conta corporativa

Sua conta corporativa pode ser proprietária de organizações. Os integrantes da sua empresa podem colaborar em projetos relacionados dentro de uma organização. Para obter mais informações, confira "[Sobre as organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

Você pode adicionar organizações à sua conta corporativa. Se você não usa {% data variables.product.prodname_emus %}, adicione as organizações existentes no {% data variables.location.product_location %} à empresa. Você não pode adicionar uma organização existente de um {% data variables.enterprise.prodname_emu_enterprise %} a uma empresa diferente.

{% data reusables.enterprise.create-an-enterprise-account %} Para obter mais informações, confira "[Como criar uma conta corporativa](/admin/overview/creating-an-enterprise-account)".

Depois de adicionar uma organização existente à sua empresa, os recursos da organização permanecerão acessíveis aos membros nas mesmas URLs e as alterações a seguir serão aplicadas.

- Os membros da organização se tornarão membros da empresa, e {% data variables.product.company_short %} cobrará a conta corporativa pelo uso da organização. Você precisa garantir que a conta corporativa tenha licenças suficientes para acomodar eventuais novos membros. Para obter mais informações, confira "[Sobre a cobrança para a empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".
- Os proprietários empresariais podem gerenciar a própria função dentro da organização. Para obter mais informações, confira "[Como gerenciar sua função em uma organização pertencente à sua empresa](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)".
- Todas as políticas aplicadas à empresa serão aplicadas à organização. Para obter mais informações, confira "[Sobre as políticas empresariais](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)."
- Se o SSO do SAML estiver configurado para a conta corporativa, a configuração SAML da empresa se aplicará à organização. Se a organização tiver usado o SSO do SAML, a configuração da conta corporativa substituirá a configuração da organização. O SCIM não está disponível para contas corporativas, portanto, o SCIM será desabilitado para a organização. Para obter mais informações, confira "[Configurar o logon único do SAML para sua empresa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)" e "[Alternar sua configuração do SAML de uma organização para uma conta corporativa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".
- Se o SSO de SAML foi configurado para a organização, os {% data variables.product.pat_generic %} ou as chaves SSH existentes dos membros que foram autorizados a acessar os recursos da organização serão autorizados a acessar os mesmos recursos. Para acessar organizações adicionais pertencentes à empresa, os membros precisam autorizar o {% data variables.product.pat_generic %} ou a chave. Para obter mais informações, confira "[Como autorizar um {% data variables.product.pat_generic %} para uso com o logon único de SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" e "[Como autorizar uma chave SSH para uso com o logon único de SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)".
- Se a organização estava conectada a {% data variables.product.prodname_ghe_server %} ou {% data variables.product.prodname_ghe_managed %} usando {% data variables.product.prodname_github_connect %}, a adição da organização a uma empresa não atualiza a conexão. Os recursos de {% data variables.product.prodname_github_connect %} não funcionarão mais para a organização. Para continuar usando o {% data variables.product.prodname_github_connect %}, você precisa desabilitar e habilitar novamente o recurso. Para obter mais informações, consulte os seguintes artigos.

  - "[Gerenciando {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/managing-github-connect)" na documentação {% data variables.product.prodname_ghe_server %}
  - "[Gerenciando {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/managing-github-connect)" na documentação {% data variables.product.prodname_ghe_managed %}
- Se a organização usou dados de aplicativos do {% data variables.product.prodname_marketplace %}, a organização pode continuar a usar os aplicativos, mas precisa pagar o fornecedor diretamente. Para obter mais informações, contate o fornecedor do aplicativo.
- Todos os cupons serão removidos da organização. Para reaplicar o cupom, [entre em contato com a equipe de vendas](https://github.com/enterprise/contact).

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

Os proprietários corporativos podem convidar organizações existentes para juntar-se à sua conta corporativa. Se a organização que você deseja convidar já pertence a outra conta corporativa, você precisa ser proprietário das duas contas corporativas ou a empresa anterior precisa deixar de ser proprietária da organização primeiro. Para obter mais informações, confira "[Como remover uma organização da sua empresa](/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise)". 

{% data reusables.enterprise-accounts.access-enterprise %}
1. Na guia **Organizações**, acima da lista de organizações, clique **em Convidar organização**.
![Convidar organização](/assets/images/help/business-accounts/enterprise-account-invite-organization.png)
3. Em "Nome da organização", comece a digitar o nome da organização que deseja convidar e selecione-a quando ela aparecer na lista suspensa.
![Pesquisa de organização](/assets/images/help/business-accounts/enterprise-account-search-for-organization.png)
4. Clique em **Convidar organização**.
5. Os proprietários da organização receberão um e-mail convidando-os para participar da empresa. Pelo menos um proprietário deverá aceitar o convite antes que o processo possa continuar. Você pode cancelar ou reenviar o convite a qualquer momento antes que um proprietário o aprove.
![Cancelar ou reenviar](/assets/images/help/business-accounts/enterprise-account-invitation-sent.png)
6. Uma vez que o proprietário da organização tenha aprovado o convite, você poderá ver o seu estado na lista de convites pendentes.
![Convite pendente](/assets/images/help/business-accounts/enterprise-account-pending.png)
7. Para concluir a transferência, clique em **Aprovar**.
![Aprovar convite](/assets/images/help/business-accounts/enterprise-account-transfer-approve.png)

## Como transferir uma organização entre contas corporativas

Os proprietários corporativos podem transferir organizações existentes entre contas corporativas. Você precisa ser proprietário corporativo das duas empresas. 

{% note %}

**Observação:** você não pode transferir uma organização existente para/de um {% data variables.enterprise.prodname_emu_enterprise %}.  

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. Ao lado da organização que você deseja transferir, selecione a lista suspensa {% octicon "gear" width="16" aria-label="Gear" %} e clique em **Transferir organização**. 
![Captura de tela do botão de transferência](/assets/images/help/business-accounts/org-transfer-button.png)
1. Clique no menu suspenso **Selecionar empresa**, comece a digitar o nome da empresa de destino e selecione-a quando ela aparecer na lista suspensa.
![Captura de tela da lista suspensa de empresa](/assets/images/help/business-accounts/org-transfer-select-enterprise.png)
2. Clique em **Examinar a transferência**.
3. Para confirmar a transferência, clique em **Transferir organização**.
![Captura de tela do botão Transferir organização](/assets/images/help/business-accounts/org-transfer-confirm-button.png)
