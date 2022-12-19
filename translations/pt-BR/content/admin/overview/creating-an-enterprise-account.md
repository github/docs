---
title: Criando uma conta corporativa
intro: 'Se você estiver usando {% data variables.product.prodname_ghe_cloud %} atualmente com uma única organização, você poderá criar uma conta corporativa para gerenciar de forma centralizada várias organizações.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Fundamentals
permissions: Organization owners can create an enterprise account.
shortTitle: Create enterprise account
ms.openlocfilehash: a264a5a1ca3e7461c8e05fc02e93064737d79940
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573398'
---
## Sobre a criação da conta corporativa

{% data variables.product.prodname_ghe_cloud %} inclui a opção de criar uma conta corporativa, que permite a colaboração entre várias organizações e fornece aos administradores um único ponto de visibilidade e gestão. Para obter mais informações, confira "[Sobre as contas corporativas](/admin/overview/about-enterprise-accounts)".

{% data reusables.enterprise.create-an-enterprise-account %} Se você pagar por fatura, você poderá criar uma conta corporativa em {% data variables.product.prodname_dotcom %}. Caso contrário, entre [em contato com a equipe de vendas](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards) para criar uma conta empresarial.

Uma conta corporativa com está incluída com o {% data variables.product.prodname_ghe_cloud %}. A criação de uma conta corporativa não resulta em encargos adicionais em sua fatura.

Quando você cria uma conta corporativa proprietária da sua organização existente no {% data variables.product.product_name %}, os recursos da organização permanecem acessíveis aos membros nas mesmas URLs. Depois de adicionar sua organização à conta corporativa, as alterações a seguir serão aplicadas à organização.

- A organização existente será automaticamente propriedade da conta corporativa.
- {% data variables.product.company_short %} cobra da conta corporativa o uso em todas as organizações pertencentes à empresa. Os detalhes de cobrança atuais da organização, incluindo o endereço de email de cobrança da organização, se tornarão os detalhes de cobrança da nova conta corporativa. Para obter mais informações, confira "[Sobre a cobrança para a empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".
- Todos os atuais proprietários de sua organização se tornarão proprietários da conta corporativa, e todos os gerentes de cobrança atuais da organização se tornarão gerentes de cobrança da nova conta corporativa. Para obter mais informações, confira "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".

Para obter mais informações sobre as alterações que se aplicam a uma organização depois de adicionar a organização a uma empresa, confira "[Adicionando organizações à sua empresa](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#about-addition-of-organizations-to-your-enterprise-account)".

## Criando uma conta corporativa em {% data variables.product.prodname_dotcom %}

Para criar uma conta empresarial, a organização precisa estar usando o {% data variables.product.prodname_ghe_cloud %}.

Se você paga por fatura, crie uma conta empresarial diretamente com o {% data variables.product.prodname_dotcom %}. Se, no momento, você não paga por fatura, entre [em contato com a equipe de vendas](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards) para criar uma conta empresarial.


{% data reusables.organizations.billing-settings %}
1. Clique em **Fazer upgrade para a conta corporativa**.

   ![Captura de tela do botão "Fazer upgrade para uma conta corporativa"](/assets/images/help/business-accounts/upgrade-to-enterprise-account.png)
1. Em "Nome da empresa", digite um nome para a sua conta corporativa.

   ![Captura de tela do campo "Nome da empresa"](/assets/images/help/business-accounts/enterprise-name-field.png)
1. Em "Slug da URL da empresa", digite um slug para a conta da sua empresa. Esse slug será usado na URL da sua empresa. Por exemplo, se você escolher `octo-enterprise`, a URL da sua empresa será `https://github.com/enterprises/octo-enterprise`.

   ![Captura de tela do campo "Slug da URL da empresa"](/assets/images/help/business-accounts/enterprise-slug-field.png)
1. Clique em **Confirmar e fazer upgrade**.

   ![Captura de tela do botão "Confirmar e fazer upgrade"](/assets/images/help/business-accounts/confirm-and-upgrade-button.png)
1. Leia os avisos e clique em **Criar conta corporativa**.

   ![Captura de tela do botão "Criar conta corporativa"](/assets/images/help/business-accounts/create-enterprise-account-button.png)

## Próximas etapas

Depois que a conta corporativa for criada, recomendamos aprender mais sobre como as contas corporativas funcionam e definir as configurações e políticas. Para obter mais informações, siga o roteiro de aprendizagem "[Introdução à sua conta corporativa](/admin/guides#get-started-with-your-enterprise-account)".
