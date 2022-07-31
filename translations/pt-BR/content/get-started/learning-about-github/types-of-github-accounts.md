---
title: Tipos de contas do GitHub
intro: 'As contas em {% data variables.product.product_name %} permitem que você organize e controle o acesso ao código.'
redirect_from:
  - /manage-multiple-clients
  - /managing-clients
  - /articles/what-s-the-difference-between-user-and-organization-accounts
  - /articles/differences-between-user-and-organization-accounts
  - /articles/types-of-github-accounts
  - /github/getting-started-with-github/types-of-github-accounts
  - /github/getting-started-with-github/learning-about-github/types-of-github-accounts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
---

## Sobre as contas em {% data variables.product.product_name %}

Com {% data variables.product.product_name %}, você pode armazenar e colaborar no código. As contas permitem que você organize e controle o acesso a esse código. Existem três tipos de contas em {% data variables.product.product_name %}.
- Contas pessoais
- Contas da organização
- Contas corporativas

Todas as pessoas que usam {% data variables.product.product_name %} efetuam o login em uma conta pessoal. A conta de uma organização melhora a colaboração entre várias contas pessoais, e {% ifversion fpt or ghec %}uma conta corporativa{% else %}a conta corporativa do {% data variables.product.product_location %}{% endif %} permite o gerenciamento central de múltiplas organizações.

## Contas pessoais

Todas as pessoas que usam {% data variables.product.product_location %} efetuam o login em uma conta pessoal. A sua conta pessoal é sua identidade em {% data variables.product.product_location %} e tem um nome de usuário e perfil. Por exemplo, consulte o [perfil do @octocat](https://github.com/octocat).

A sua conta pessoal pode ter recursos próprios, como repositórios, pacotes e projetos. Sempre que você tomar qualquer ação em {% data variables.product.product_location %}, como criar um problema ou revisar um pull request, a ação é atribuída à sua conta pessoal.

{% ifversion fpt or ghec %}Cada conta pessoal usa {% data variables.product.prodname_free_user %} ou {% data variables.product.prodname_pro %}. Todas as contas pessoais podem ter um número ilimitado de repositórios públicos e privados, com um número ilimitado de colaboradores nesses repositórios. Se você usar {% data variables.product.prodname_free_user %}, os repositórios privados pertencentes à sua conta pessoal terão um conjunto de recursos limitado. Você pode fazer a atualização para {% data variables.product.prodname_pro %} para obter um conjunto completo de recursos para repositórios privados. Para obter mais informações, consulte os "[Produtos da {% data variables.product.prodname_dotcom %}](/articles/githubs-products)". {% else %}Você pode criar um número ilimitado de repositórios pertencentes à sua conta pessoal, com um número ilimitado de colaboradores nesses repositórios.{% endif %}

{% tip %}

**Dica**: As contas pessoais são destinadas a seres humanos, mas você pode criar contas para automatizar a atividade em {% data variables.product.product_name %}. Este tipo de conta é denominado usuário de máquina. Por exemplo, você pode criar uma conta de usuário de máquina para automatizar os fluxos de trabalho da integração contínua (CI).

{% endtip %}

{% ifversion fpt or ghec %}
A maioria das pessoas usará uma conta pessoal para todo seu trabalho em {% data variables.product.prodname_dotcom_the_website %}, incluindo projetos de código aberto e trabalho remunerado. Se você está usando atualmente mais de uma conta pessoal criada por você, sugerimos que você combine as contas. Para obter mais informações, consulte "[Fazer merge de várias contas pessoais](/articles/merging-multiple-user-accounts)".
{% endif %}

## Contas da organização

As organizações são contas partilhadas, onde um número ilimitado de pessoas pode colaborar em muitos projetos de uma só vez.

Como as contas pessoais, as organizações podem ter recursos próprios, como repositórios, pacotes e projetos. No entanto, você não pode iniciar sessão em uma organização. Em vez disso, cada pessoa assina sua própria conta pessoal e todas as ações que a pessoa toma sobre os recursos da organização são atribuídas à sua conta pessoal. Cada conta pessoal pode ser um integrante de múltiplas organizações.

As contas pessoais dentro de uma organização podem receber diferentes funções na organização, que concedem diferentes níveis de acesso à organização e aos seus dados. Todos os integrantes podem colaborar entre si em repositórios e projetos, mas apenas os proprietários da organização e os gerentes de segurança podem gerenciar as configurações da organização e controlar o acesso aos dados da organização, com funcionalidades administrativas e de segurança sofisticadas. Para obter mais informações, consulte "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)" e "[Mantendo a sua organização segura](/organizations/keeping-your-organization-secure)".

![Diagrama que mostra que os usuários devem efetuar o login na sua conta pessoal para acessar os recursos de uma organização](/assets/images/help/overview/sign-in-pattern.png)

{% ifversion fpt or ghec %}
Mesmo que você seja um integrante de uma organização que usa o logon único SAML, você ainda vai efetuar o login na sua própria conta pessoal em {% data variables.product.prodname_dotcom_the_website %}, e essa conta pessoal será vinculada à sua identidade no provedor de identidade da sua organização (IdP). Para obter mais informações, consulte "[Sobre a autenticação com o logon único SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on){% ifversion fpt %}" na documentação de {% data variables.product.prodname_ghe_cloud %}{% else %}"{% endif %}

No entanto, se você for integrante de uma empresa que usa {% data variables.product.prodname_emus %}, em vez de usar uma conta pessoal que você criou, uma nova conta será provisionada para você pelo IdP da empresa. Para acessar qualquer organização pertencente a essa empresa, você deverá efetuar a autenticação usando o IdP ao invés de um nome de usuário e senha de {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %}" na documentação de {% data variables.product.prodname_ghe_cloud %}.{% else %}{% endif %}
{% endif %}

Você também pode criar subgrupos aninhados de integrantes da organização denominados equipes para refletir a estrutura do seu grupo e simplificar o gerenciamento de acesso. Para obter mais informações, consulte "[Sobre equipes](/organizations/organizing-members-into-teams/about-teams)".

{% data reusables.organizations.organization-plans %}

Para obter mais informações sobre todas as funcionalidades das organizações, consulte "[Sobre as organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

## Contas corporativas

{% ifversion fpt %}
{% data variables.product.prodname_ghe_cloud %} e {% data variables.product.prodname_ghe_server %} incluem contas corporativas, que permitem aos administradores gerenciar centralmente a política e a cobrança para várias organizações e habilitar a fonte interna entre as organizações. Para obter mais informações, consulte "[Sobre contas corporativas](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)" na documentação de {% data variables.product.prodname_ghe_cloud %}.
{% elsif ghec %}
As contas corporativas permitem gestão centralizada de políticas e cobrança para várias organizações. Você pode usar a conta corporativa para gerenciar centralmente a política e a cobrança. Ao contrário das organizações, as contas corporativas não podem ter recursos próprios, como repositórios, pacotes ou projetos. Esses recursos são propriedade de organizações dentro da conta corporativa. Para obter mais informações, consulte "[Sobre contas corporativas](/admin/overview/about-enterprise-accounts)".
{% elsif ghes or ghae %}
A sua conta corporativa é uma coleção de todas as organizações {% ifversion ghae %}pertencentes a{% elsif ghes %}em{% endif %} {% data variables.product.product_location %}. Você pode usar a conta corporativa para gerenciar centralmente a política e a cobrança. Ao contrário das organizações, as contas corporativas não podem ter recursos próprios, como repositórios, pacotes ou projetos. Esses recursos são propriedade de organizações dentro da conta corporativa. Para obter mais informações, consulte "[Sobre contas corporativas](/admin/overview/about-enterprise-accounts)".
{% endif %}

## Leia mais

{% ifversion fpt or ghec %}
- "[inscrevendo-se para uma nova conta {% data variables.product.prodname_dotcom %}](/articles/signing-up-for-a-new-github-account)"{% endif %}
- "[Criar uma conta de organização](/articles/creating-a-new-organization-account)"
- [Organizando as pessoas para um vídeo de](https://vimeo.com/333786093) de colaboração bem-sucedida nos recursos de {% data variables.product.company_short %}
