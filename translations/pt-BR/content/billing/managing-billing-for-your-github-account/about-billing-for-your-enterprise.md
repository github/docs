---
title: About billing for your enterprise
intro: Você pode visualizar as informações de cobrança para a sua empresa.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /admin/overview/managing-billing-for-your-enterprise
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: Billing for your enterprise
---

## About billing for your enterprise

{% ifversion ghae %}

{% data reusables.github-ae.about-billing %} Uma vez por dia, {% data variables.product.prodname_dotcom %} contará o número de usuários com uma licença para sua empresa. {% data variables.product.company_short %} efetua a cobrança para cada usuário licenciado independentemente de o usuário estar conectado a {% data variables.product.prodname_ghe_managed %} nesse dia.

Para regiões comerciais, o preço por usuário por dia é de $ 1,2580645161. Por meses de 31 dias, o custo mensal para cada usuário é de $ 39. Nos meses com menos dias, o custo mensal é menor. Cada mês de cobrança começa em um horário fixo no primeiro dia do mês do calendário.

Se você adicionar um usuário licenciado no meio do mês, esse usuário será incluído apenas na contagem dos dias em que tem uma licença. Ao remover um usuário licenciado, esse usuário permanecerá na contagem até o final desse mês. Portanto, se você adicionar um usuário durante o mês ou depois remover o usuário no mesmo mês, o usuário será incluído na contagem a partir do dia em que o usuário foi adicionado até o final do mês. Não há custos adicionais se você adicionar novamente um usuário no mesmo mês em que o usuário foi removido.

Por exemplo, aqui estão os custos para os usuários com licenças em datas diferentes.

| Usuário   | Datas de licença                                                   | Dias contados | Custo   |
| --------- | ------------------------------------------------------------------ | ------------- | ------- |
| @octocat  | 1 de Janeiro - 31 de Janeiro                                       | 31            | $ 39    |
| @robocat  | 1 de fevereiro - 28 de fevereiro                                   | 28            | $ 35,23 |
| @devtocat | 15 de Janeiro - 31 de Janeiro                                      | 17            | $ 21,39 |
| @doctocat | 1 de Janeiro - 15 de Janeiro                                       | 31            | $ 39    |
| @prodocat | 7 de Janeiro - 15 de Janeiro                                       | 25            | $ 31,45 |
| @monalisa | 1 de janeiro - 7 de janeiro<br>15 de janeiro - 31 de janeiro | 31            | $ 39    |

{% data variables.product.prodname_ghe_managed %} tem uma instância mínima de 500 usuários. {% data variables.product.company_short %} cobra de você um mínimo de 500 usuários por instância, mesmo que haja menos de 500 usuários com uma licença nesse dia.

Você pode ver seu uso atual no seu [Portal da conta do Azure](https://portal.azure.com).

{% elsif fpt or ghes %}

{% ifversion fpt %}

{% data variables.product.company_short %} bills monthly for the total number of members in your enterprise account, as well as any additional services you use with {% data variables.product.prodname_ghe_cloud %}.

{% elsif ghes %}

Each user on {% data variables.product.product_location %} consumes a seat on your license. {% data variables.product.company_short %} bills monthly for the total number of seats consumed on your license.

{% endif %}

{% data reusables.billing.about-invoices-for-enterprises %} For more information about usage and invoices, see "[Viewing the subscription and usage for your enterprise account](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" and {% ifversion ghes %}"<a href="/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise" class="dotcom-only">Managing invoices for your enterprise</a>" in the {% data variables.product.prodname_dotcom_the_website %} documentation.{% elsif fpt %}"[Managing invoices for your enterprise](/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise)."{% endif %}

Administrators for your enterprise account on {% data variables.product.prodname_dotcom_the_website %} can access and manage billing for the enterprise.

{% ifversion fpt %}

Each member of your enterprise account with a unique email address consumes a license. Billing managers do not consume a license. Each outside collaborator on a private repository that an organization in your enterprise owns consumes a license, unless the private repository is a fork. Each invitee to your enterprise account, including owners, members of organizations, and outside collaborators, consume a license. For more information about roles in an enterprise account, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)" and "[Inviting people to manage your enterprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)."

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} For more information, see "[Connecting an Azure subscription to your enterprise](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)."

{% endif %}

{% ifversion ghes %}

{% data reusables.billing.ghes-with-no-enterprise-account %}

{% endif %}

## About synchronization of license usage

{% data reusables.enterprise.about-deployment-methods %}

{% data reusables.enterprise-licensing.about-license-sync %} For more information, see {% ifversion fpt %}"[Syncing license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)" in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}"[Syncing license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."{% endif %}

{% endif %}

## Leia mais

- "[About enterprise accounts]({% ifversion fpt or ghes %}/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/about-enterprise-accounts#about-enterprise-accounts-on-githubcom{% elsif ghae %}/admin/overview/about-enterprise-accounts{% endif %})"{% ifversion fpt or ghes %} <!-- When you're viewing the fpt version of this article, this link's anchor won't resolve, but that's okay -->
- "[About licenses for GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)"{% endif %}
