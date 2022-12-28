---
title: Introdução ao GitHub Enterprise Cloud
intro: 'Comece a criar e gerenciar sua organização ou conta corporativa de {% data variables.product.prodname_ghe_cloud %}.'
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: 6af835175eb5412ca9fbf0e925175450f2a2a254
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163797'
---
Este guia irá ajudar você a configurar e gerenciar sua conta de {% data variables.product.prodname_ghe_cloud %} como uma organização ou proprietário da empresa.

{% data reusables.enterprise.ghec-cta-button %}

## Parte 1: Escolhendo o seu tipo de conta

{% data variables.product.prodname_dotcom %} fornece dois tipos de produtos corporativos:

- **{% data variables.product.prodname_ghe_cloud %}**
- **{% data variables.product.prodname_ghe_server %}**

A principal diferença entre os produtos é que {% data variables.product.prodname_ghe_cloud %} é hospedado por {% data variables.product.prodname_dotcom %}, enquanto {% data variables.product.prodname_ghe_server %} é auto-hospedado.

{% data reusables.enterprise.about-github-for-enterprises %}

Com {% data variables.product.prodname_ghe_cloud %}, você tem a opção de usar {% data variables.product.prodname_emus %}. {% data reusables.enterprise-accounts.emu-short-summary %}

Você optar por deixar seus integrantes criarem e gerenciarem suas próprias contas pessoais, há dois tipos de contas que você pode usar com {% data variables.product.prodname_ghe_cloud %}:

- Uma conta de organização única
- Uma conta corporativa que contém várias organizações

### 1. Compreensão das diferenças entre uma conta de organização e uma conta corporativa

As contas da organização e da empresa estão disponíveis com {% data variables.product.prodname_ghe_cloud %}. Uma organização é uma conta compartilhada em que grupos de pessoas podem colaborar em vários projetos de uma só vez, e os proprietários e administradores podem gerenciar o acesso a dados e projetos. Uma conta corporativa permite a colaboração entre várias organizações e permite que os proprietários gerenciem centralmente a política, cobrança e segurança dessas organizações. Para obter mais informações sobre as diferenças, confira "[Organizações e contas corporativas](/organizations/collaborating-with-groups-in-organizations/about-organizations#organizations-and-enterprise-accounts)".

Se você escolher uma conta corporativa, tenha em mente que algumas políticas só podem ser definidas no nível organizacional, enquanto outras podem ser aplicadas a todas as organizações de uma empresa.

Depois de escolher o tipo de conta que você desejar, você poderá continuar a criar a sua conta. Em cada uma das seções deste guia, acesse a seção de organização única ou conta corporativa com base no seu tipo de conta.

## Parte 2: Configurando a sua conta
Para começar com {% data variables.product.prodname_ghe_cloud %}, você deverá criar sua conta organizativa ou corporativa e configurar e ver as configurações de cobrança, assinaturas e uso.
### Como criar uma conta de organização única com {% data variables.product.prodname_ghe_cloud %}

#### 1. Sobre as organizações
As organizações são contas compartilhadas, onde grupos de pessoas podem colaborar em vários projetos de uma vez. Com o {% data variables.product.prodname_ghe_cloud %}, os proprietários e administradores podem gerenciar sua organização com autenticação e gestão de usuário sofisticada, bem como com opções de segurança e suporte escaladas. Para obter mais informações, confira "[Sobre as organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)".
#### 2. Como criar ou atualizar a conta de uma organização

Para usar a conta de uma organização com {% data variables.product.prodname_ghe_cloud %}, primeiro você precisará criar uma organização. Quando solicitado para escolher um plano, selecione "Enterprise". Para obter mais informações, confira "[Como criar uma organização do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

Como alternativa, se você tiver uma conta de organização existente que deseja atualizar, siga as etapas descritas em "[Como atualizar sua assinatura do {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#upgrading-your-organizations-subscription)".
#### 3. Configuração e gerenciamento de cobrança

Ao optar por usar uma conta de organização com o {% data variables.product.prodname_ghe_cloud %}, primeiro, você terá acesso a uma [avaliação de 30 dias](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud). Se você não comprar {% data variables.product.prodname_enterprise %} ou {% data variables.product.prodname_team %} antes do seu período de teste terminar, a sua organização será rebaixada para {% data variables.product.prodname_free_user %} e você perderá acesso a quaisquer ferramentas avançadas e recursos que sejam incluídos apenas com produtos pagos. Para obter mais informações, confira "[Término da avaliação](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud#finishing-your-trial)".

A página de configurações de cobrança da sua organização permite que você gerencie configurações como seu método de pagamento e ciclo de cobrança, exiba informações sobre sua assinatura e faça a atualização do seu armazenamento e minutos de {% data variables.product.prodname_actions %}. Para obter mais informações sobre como gerenciar as configurações de cobrança, confira "[Como gerenciar as configurações de cobrança do {% data variables.product.prodname_dotcom %}](/billing/managing-your-github-billing-settings)".

Apenas os membros da organização com a função *proprietário* ou *gerente de cobrança* podem acessar ou alterar as configurações de cobrança da sua organização. Um gerente de cobrança é um usuário que gerencia as configurações de cobrança para sua organização e não usa uma licença paga na assinatura da sua organização. Para obter mais informações sobre como adicionar um gerente de cobrança à sua organização, confira "[Como adicionar um gerente de cobrança à sua organização](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)".

### Configurando uma conta corporativa com {% data variables.product.prodname_ghe_cloud %}

#### 1. Sobre as contas corporativas

Uma conta corporativa permite que você gerencie centralmente as políticas e configurações para várias organizações {% data variables.product.prodname_dotcom %}, incluindo acesso de integrantes, cobrança e uso e segurança. Para obter mais informações, confira "[Sobre as contas corporativas](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)".

#### 2. Como criar uma conta empresarial

 Os clientes do {% data variables.product.prodname_ghe_cloud %} que pagam por fatura podem criar uma conta empresarial diretamente com o {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Com criar uma conta empresarial](/enterprise-cloud@latest/admin/overview/creating-an-enterprise-account)". 
 
 Os clientes do {% data variables.product.prodname_ghe_cloud %} que não pagam por fatura podem entrar em contato com a [equipe de vendas do {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact) para criar uma conta empresarial para você.

#### 3. Como adicionar organizações à conta empresarial

É possível criar novas organizações para serem gerenciadas em sua conta corporativa. Para obter mais informações, confira "[Como adicionar organizações à sua empresa](/enterprise-cloud@latest/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)".

Entre em contato com o seu representante da conta de vendas de {% data variables.product.prodname_dotcom %} se você quiser transferir uma organização existente para a sua conta corporativa.
#### 4. Como ver a assinatura e o uso da conta empresarial
Você pode visualizar a sua assinatura atual, uso da licença, faturas, histórico de pagamentos e outras informações de cobrança para sua conta corporativa a qualquer momento. Os proprietários da empresa e os gerentes de cobrança podem acessar e gerenciar as configurações de cobrança para contas corporativas. Para obter mais informações, confira "[Como ver a assinatura e o uso da sua conta corporativa](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)".

## Parte 3: Gerenciando seus integrantes e equipes da empresa com {% data variables.product.prodname_ghe_cloud %}

### Gerenciando integrantes e equipes na sua organização
Você pode definir permissões e funções dos integrantes, criar e gerenciar equipes e conceder acesso a repositórios na sua organização. 
#### 1. Como gerenciar os membros da sua organização
{% data reusables.getting-started.managing-org-members %}
#### 2. Permissões e funções da organização
{% data reusables.getting-started.org-permissions-and-roles %}
#### 3. Sobre as equipes e como criá-las
{% data reusables.getting-started.about-and-creating-teams %}
#### 4. Como gerenciar as configurações da equipe
{% data reusables.getting-started.managing-team-settings %}
#### 5. Como fornecer às pessoas e às equipes acesso a repositórios, quadros de projetos e aplicativos
{% data reusables.getting-started.giving-access-to-repositories-projects-apps %}

### Gerenciando integrantes de uma conta corporativa
O gerenciamento dos integrantes de uma empresa é separado da gestão dos integrantes ou equipes em uma organização. É importante notar que os proprietários ou administradores da empresa não podem acessar as configurações a nível da organização ou gerenciar integrantes de organizações na sua empresa, a não ser que sejam proprietários de uma organização. Para obter mais informações, confira a seção acima: "[Como gerenciar membros e equipes na sua organização](#managing-members-and-teams-in-your-organization)".

Se sua empresa usar {% data variables.product.prodname_emus %}, seus integrantes serão totalmente gerenciados por meio de seu provedor de identidade. As funções de adicionar integrantes, fazer alterações na sua associação e atribuir cargos são geranciadas usando seu IdP. Para obter mais informações, confira "[Sobre as {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".

Se a sua empresa não usar {% data variables.product.prodname_emus %}, siga as etapas abaixo.

#### 1. Como atribuir funções em uma empresa
Por padrão, todas as pessoas em uma empresa são integrantes da empresa. Além disso, há funções administrativas, que incluem o proprietário da empresa e o gerente de cobrança, que têm diferentes níveis de acesso às configurações e dados da empresa. Para obter mais informações, confira "[Funções em uma empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".
#### 2. Como convidar pessoas para gerenciar sua empresa
Você pode convidar pessoas para gerenciar a sua empresa como, por exemplo, proprietários corporativos ou gerentes de cobrança, bem como remover aqueles que não precisam mais de acesso. Para obter mais informações, confira "[Como convidar pessoas para gerenciar sua empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)".

Você também pode conceder aos integrandes da empresa a capacidade de gerenciar tíquetes de suporte no portal de suporte. Para obter mais informações, confira "[Como gerenciar os direitos de suporte para sua empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)".
#### 3. Como ver os funcionários da sua empresa
Para auditoria ao acesso a recursos pertencentes à empresa ou ao uso da licença de usuário, você pode ver todos os administradores corporativos, integrantes da empresa e colaboradores externos da sua empresa. Você pode ver as organizações às quais um integrante pertence e os repositórios específicos aos quais um colaborador externo tem acesso. Para obter mais informações, confira "[Como ver os funcionários da sua empresa](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)".

## Parte 4: Gerenciando a segurança com {% data variables.product.prodname_ghe_cloud %}

* [Como gerenciar a segurança de uma organização individual](#managing-security-for-a-single-organization)
* [Gerenciar a segurança de um {% data variables.enterprise.prodname_emu_enterprise %}](#managing-security-for-an-enterprise-with-managed-users)
* [Gerenciar a segurança de uma conta corporativa sem {% data variables.enterprise.prodname_managed_users %}](#managing-security-for-an-enterprise-account-without-managed-users)

### Gerenciando a segurança de uma única organização
Você pode ajudar a manter sua organização segura exigindo autenticação de dois fatores, configurando recursos de segurança, revisando o log de auditoria e as integrações da sua organização e habilitando a sincronização de equipe e logon único SAML.
#### 1. Como exigir a autenticação de dois fatores
{% data reusables.getting-started.requiring-2fa %}
#### 2. Como configurar recursos de segurança para sua organização
{% data reusables.getting-started.configuring-security-features %}

#### 3. Como revisar o log de auditoria e as integrações da sua organização
{% data reusables.getting-started.reviewing-org-audit-log-and-integrations %}

#### 4. Como habilitar e impor o logon único do SAML para sua organização
Se você gerenciar seus aplicativos e as identidades dos integrantes da sua organização com um provedor de identidade (IdP), você poderá configurar logon único SAML (SSO) para controlar e proteger o acesso aos recursos da organização, como repositórios, problemas e pull requests. Quando os integrantes da sua organização acessam os recursos da organização que usam o SAML SSO, {% data variables.product.prodname_dotcom %} irá redirecioná-los para o seu dispositivo para autenticação. Para obter mais informações, confira "[Sobre o gerenciamento de identidades e acesso com o logon único do SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)".

Os proprietários da organização podem optar por habilitar e desabilitar, mas não implementar, habilitar e aplicar o SAML SSO. Para obter mais informações, confira "[Como habilitar e testar o logon único do SAML para sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)" e "[Como impor o logon único do SAML para sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)".
#### 5. Como gerenciar a sincronização da equipe para sua organização
Os proprietários da organização podem habilitar a sincronização de equipes entre o seu provedor de identidade (IdP) e {% data variables.product.prodname_dotcom %} para permitir que os proprietários da organização e mantenedores de equipes conectem equipes na sua organização aos grupos do IdP. Para obter mais informações, confira "[Como gerenciar a sincronização da equipe para sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)".

### Gerenciar a segurança de um {% data variables.enterprise.prodname_emu_enterprise %}

Com {% data variables.product.prodname_emus %}, o acesso e a identidade são gerenciados centralmente por meio do seu provedor de identidade. A autenticação de dois fatores e outros requisitos de login devem ser habilitados e aplicados no seu IdP. 

#### 1. Habilitação e logon único SAML e provisionamento no {% data variables.enterprise.prodname_emu_enterprise %}

Em um {% data variables.enterprise.prodname_emu_enterprise %}, todos os membros são provisionados e gerenciados pelo seu provedor de identidade. Você deve habilitar o provisionamento SAML SSO e SCIM antes de começar a usar a sua empresa. Para saber como configurar o SSO SAML e realizar o provisionamento de um {% data variables.enterprise.prodname_emu_enterprise %}, confira "[Configurar o logon único SAML para usuários gerenciados pela empresa](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)".

#### 2. Gerenciar equipes no {% data variables.enterprise.prodname_emu_enterprise %} com seu provedor de identidade

Você pode conectar as equipes das suas organizações a grupos de segurança do seu provedor de identidade, gerenciar integrantes das suas equipes e acesso aos repositórios por meio do seu IdP. Para obter mais informações, confira "[Como gerenciar associações à equipe com grupos de provedores de identidade](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)".

#### 3. Gerenciar os endereços IP permitidos para as organizações no {% data variables.enterprise.prodname_emu_enterprise %}

É possível configurar uma lista de permissões de endereços IP específicos para restringir o acesso a ativos pertencentes a organizações no {% data variables.enterprise.prodname_emu_enterprise %}. Para obter mais informações, confira "[Como impor políticas para configurações de segurança na sua empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)".

#### 4. Aplicação de políticas para recursos de segurança avançada no {% data variables.enterprise.prodname_emu_enterprise %}
{% data reusables.getting-started.enterprise-advanced-security %}

### Gerenciar a segurança de uma conta corporativa sem {% data variables.enterprise.prodname_managed_users %}
Para gerenciar a segurança da sua empresa, você pode exigir autenticação de dois fatores, gerenciar endereços IP permitidos, habilitar o logon único SAML e a sincronização de equipes no nível corporativo e inscrever-se aplicar as funcionalidades do GitHub Advanced Security. 

#### 1. Como exigir a autenticação de dois fatores e gerenciar os endereços IP permitidos para organizações na sua conta corporativa
Os proprietários corporativos podem exigir que integrantes da organização, gerentes de cobrança e colaboradores externos em todas as organizações pertencentes a uma conta corporativa usem autenticação de dois fatores para proteger suas contas pessoais. Antes de fazer isso, recomendamos que você notifique todas as pessoas que têm acesso a organizações da sua empresa. Você também pode configurar uma lista de permissões para endereços IP específicos para restringir o acesso a ativos pertencentes a organizações na sua conta corporativa. 

Para obter mais informações sobre como impor a autenticação de dois fatores e as listas de endereços IP permitidos, confira "[Como impor políticas para configurações de segurança na sua empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise)".
#### 2. Como habilitar e impor o logon único do SAML para organizações na sua conta corporativa
Você pode gerenciar centralmente o acesso aos recursos da sua empresa, a associação à organização e a associação à equipe usando seu IdP e o logon único SAML (SSO). Os proprietários corporativos podem habilitar o SAML SSO em todas as organizações pertencentes a uma conta corporativa. Para obter mais informações, confira "[Sobre o gerenciamento de identidades e acesso da sua empresa](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)".

#### 3. Como gerenciar a sincronização da equipe
Você pode habilitar e gerenciar a simulação de equipes entre um provedor de identidade (IdP) e {% data variables.product.prodname_dotcom %} para permitir que as organizações pertencentes à sua conta corporativa gerenciem a associação de equipes com grupos IdP. Para obter mais informações, confira "[Como gerenciar a sincronização da equipe para organizações na sua conta corporativa](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)".

#### 4. Como impor políticas para recursos do Advanced Security na sua conta corporativa
{% data reusables.getting-started.enterprise-advanced-security %}

## Parte 5: Gerenciar políticas e configurações da organização e do nível empresarial

### Gerenciando configurações para uma única organização
Para gerenciar e moderar sua organização, você pode definir políticas da organização, gerenciar permissões para alterações de repositórios e usar arquivos de saúde da comunidade no nível da organização.
#### 1. Como gerenciar as políticas da organização
{% data reusables.getting-started.managing-org-policies %}
#### 2. Como gerenciar as alterações do repositório
{% data reusables.getting-started.managing-repo-changes %}
#### 3. Como usar os arquivos de integridade da comunidade na organização e as ferramentas de moderação
{% data reusables.getting-started.using-org-community-files-and-moderation-tools %}

### Gerenciando as configurações para uma conta corporativa
Para gerenciar e moderar sua empresa, você pode definir políticas para organizações dentro da empresa, visualizar logs de auditoria, configurar webhooks e restringir notificações de e-mail.
#### 1. Como gerenciar políticas para organizações na sua conta corporativa

Você pode optar por aplicar várias políticas para todas as organizações pertencentes à sua empresa, ou escolher permitir que essas políticas sejam definidas em cada organização. Os tipos de políticas que você pode aplicar incluem gerenciamento de repositórios, quadro de projetos e políticas de equipe. Para obter mais informações, confira "[Como definir políticas para sua empresa](/enterprise-cloud@latest/admin/policies)".
#### 2. Como exibir logs de auditoria, configurar webhooks e restringir notificações por email para sua empresa
Você pode visualizar as ações de todas as organizações pertencentes à sua conta corporativa no log de auditoria da empresa. Você também pode configurar webhooks para receber eventos de organizações pertencentes à sua conta corporativa. Para obter mais informações, confira "[Como revisar os logs de auditoria da sua empresa](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise)" e "[Como monitorar sua empresa](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise)".

Você também pode restringir as notificações de e-mail da conta corporativa para que os integrantes da empresa só possam usar um endereço de e-mail em um domínio verificado ou aprovado para receber notificações. Para obter mais informações, confira "[Como restringir notificações por email para sua empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)".

## Parte 6: Personalizar e automatizar o trabalho da sua organização ou empresa em {% data variables.product.prodname_dotcom %}
Os integrantes da sua organização ou empresa podem usar ferramentas a partir da API de {% data variables.product.prodname_marketplace %}, a {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} e das funcionalidades de {% data variables.product.product_name %} existentes para personalizar e automatizar seu trabalho.

### 1. Como usar o {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %}
### 2. Como usar a API do {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}
### 3. Como criar {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}
### 4. Como publicar e gerenciar o {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}
### 5. Como usar o {% data variables.product.prodname_pages %}
O {% data variables.product.prodname_pages %} é um serviço de hospedagem de site estático que usa arquivos HTML, CSS e JavaScript diretamente de um repositório e publica um site. Você pode gerenciar a publicação de sites de {% data variables.product.prodname_pages %} no nível da organização. Para obter mais informações, confira "[Como gerenciar a publicação de sites do {% data variables.product.prodname_pages %} para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)" e "[Sobre o {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)".
## Parte 7: Participando da comunidade de {% data variables.product.prodname_dotcom %}

Os integrantes da sua organização ou empresa podem usar os recursos de aprendizado e suporte do GitHub para obter a ajuda de que precisam. Você também pode apoiar a comunidade de código aberto. 

### 1. Leitura sobre o {% data variables.product.prodname_ghe_cloud %} no {% data variables.product.prodname_docs %}
Você pode ler a documentação que reflete as funcionalidades disponíveis com {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, confira "[Sobre as versões do {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)".

{% data reusables.enterprise.best-practices %}

### 2. Aprendizagem com o {% data variables.product.prodname_learning %}
Os membros da sua organização ou da sua empresa podem aprender novas habilidades realizando projetos divertidos e realistas no seu repositório do GitHub com o [{% data variables.product.prodname_learning %}](https://skills.github.com/). Cada curso é uma lição prática criada pela comunidade do GitHub e ensinada por um bot amigável.

Para obter mais informações, confira "[Git e recursos de aprendizagem do {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/quickstart/git-and-github-learning-resources)".
### 3. Como apoiar a comunidade de código aberto
{% data reusables.getting-started.sponsors %}

### 4. Como entrar em contato com o {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}

{% data variables.product.prodname_ghe_cloud %} permite que você envie solicitações de suporte prioritárias com um tempo de resposta de oito horas. Para obter mais informações, confira "[Suporte do {% data variables.product.prodname_ghe_cloud %}](/github/working-with-github-support/github-enterprise-cloud-support)".
