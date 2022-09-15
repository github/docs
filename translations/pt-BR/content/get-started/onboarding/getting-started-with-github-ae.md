---
title: Introdução ao GitHub AE
intro: 'Comece a configurar {% data variables.product.product_name %} para {% data variables.product.product_location %}.'
versions:
  ghae: '*'
ms.openlocfilehash: e83b868b6cd204b7a96f40b7287c017eec90096f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147389968'
---
Este guia irá ajudar você a configurar e gerenciar as configurações para {% data variables.product.product_location %} em {% data variables.product.product_name %} como proprietário corporativo. Para saber mais sobre o {% data variables.product.product_name %}, confira "[Sobre o {% data variables.product.prodname_ghe_managed %}](/admin/overview/about-github-ae)".

## Parte 1: Configurando {% data variables.product.product_name %}
Para dar os primeiros passos com {% data variables.product.product_name %}, você pode criar a conta corporativa, inicializar {% data variables.product.product_name %}, configurar uma lista de permissões de IP, configurar a autenticação e provisionamento de usuário e gerenciar a cobrança para {% data variables.product.product_location %}.

### 1. Como criar sua conta corporativa do {% data variables.product.product_name %}
Primeiro você precisará comprar {% data variables.product.product_name %}. Para obter mais informações, entre em contato com a [equipe de Vendas do {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

{% data reusables.github-ae.initialize-enterprise %}

### 2. Como inicializar o {% data variables.product.product_name %}
Depois de {% data variables.product.company_short %} criar a conta do proprietário para {% data variables.product.product_location %} em {% data variables.product.product_name %}, você receberá um e-mail para efetuar o login e e concluir a inicialização. Durante a inicialização, você, como o proprietário da empresa, irá nomear {% data variables.product.product_location %}, configurar o SAML SSO, criar políticas para todas as organizações em {% data variables.product.product_location %} e configurar um contato de suporte para os integrantes da empresa. Para obter mais informações, confira "[Como inicializar o {% data variables.product.prodname_ghe_managed %}](/admin/configuration/configuring-your-enterprise/initializing-github-ae)".

### 3. Como restringir o tráfego de rede
É possível configurar uma lista de permissões para endereços IP específicos para restringir o acesso a ativos pertencentes a organizações na sua conta corporativa. Para obter mais informações, confira "[Como restringir o tráfego de rede para sua empresa](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise)".

### 4. Como gerenciar a identidade e o acesso do {% data variables.product.product_location %}
Você pode gerenciar centralmente o acesso a {% data variables.product.product_location %} em {% data variables.product.product_name %} a partir de um provedor de identidade (IdP) usando o logon único SAML (SSO) para autenticação de usuário e o sistema para gerenciamento de identidade de domínio cruzado (SCIM) para provisionamento de usuários. Depois de configurar o provisionamento, você poderá atribuir ou remover usuários para o aplicativo a partir do IdP, criando ou desabilitando as contas de usuários na empresa. Para obter mais informações, confira "[Sobre o gerenciamento de identidades e acesso da sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)".

### 5. Como gerenciar a cobrança do {% data variables.product.product_location %}
Os proprietários da assinatura de {% data variables.product.product_location %} em {% data variables.product.product_name %} podem ver informações de cobrança para {% data variables.product.product_name %} no portal do Azure. Para obter mais informações, confira "[Como gerenciar a cobrança para sua empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".

## Parte 2: Organização e gestão dos integrantes da empresa
Como proprietário corporativo de {% data variables.product.product_name %}, você pode gerenciar as configurações nos níveis do usuário, repositório, equipe e organização. Você pode gerenciar os integrantes de {% data variables.product.product_location %}, criar e gerenciar organizações, definir políticas para o gerenciamento do repositório e criar e gerenciar equipes.

### 1. Como gerenciar membros do {% data variables.product.product_location %}
{% data reusables.getting-started.managing-enterprise-members %}

### 2. Como criar organizações
{% data reusables.getting-started.creating-organizations %}

### 3. Como adicionar membros a organizações
{% data reusables.getting-started.adding-members-to-organizations %}

### 4. Como criar equipes
{% data reusables.getting-started.creating-teams %}

### 5. Como definir níveis de permissões para a organização e para o repositório
{% data reusables.getting-started.setting-org-and-repo-permissions %}

### 6. Como impor políticas de gerenciamento do repositório
{% data reusables.getting-started.enforcing-repo-management-policies %}

## Parte 3: Criando com segurança
Para aumentar a segurança de {% data variables.product.product_location %}, você pode monitorar {% data variables.product.product_location %} e configurar as funcionalidades de segurança e análise das suas organizações.

### 1. Como monitorar o {% data variables.product.product_location %}
Você pode monitorar {% data variables.product.product_location %} com o seu painel de atividade e log de auditoria. Para obter mais informações, confira "[Como monitorar a atividade na sua empresa](/admin/monitoring-activity-in-your-enterprise)".

### 2. Como configurar os recursos de segurança para suas organizações
{% data reusables.getting-started.configuring-security-features %}

## Parte 4: Personalizando e automatizando o trabalho em {% data variables.product.product_location %}
Você pode personalizar e automatizar o trabalho em organizações em {% data variables.product.product_location %} com a API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, {% data variables.product.prodname_actions %} e {% data variables.product.prodname_pages %}.

### 1. Como usar a API do {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}

### 2. Como criar {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

Para obter mais informações sobre como habilitar e configurar o {% data variables.product.prodname_actions %} para o {% data variables.product.product_name %}, confira "[Introdução ao {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)".

### 3. Como usar o {% data variables.product.prodname_pages %}
{% data reusables.getting-started.github-pages-enterprise %}
## Parte 5: Usando o aprendizado de {% data variables.product.prodname_dotcom %} e os recursos de suporte
Os integrantes da sua empresa podem aprender mais sobre Git e {% data variables.product.prodname_dotcom %} com nossos recursos de aprendizado. e você pode obter o suporte de que precisa com o Suporte do Enterprise de {% data variables.product.prodname_dotcom %}.

### 1. Leitura sobre o {% data variables.product.product_name %} no {% data variables.product.prodname_docs %}
Você pode ler a documentação que reflete as funcionalidades disponíveis com {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, confira "[Sobre as versões do {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)".

### 2. Aprendizagem com o {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning-enterprise %}

### 3. Como trabalhar com o Suporte Enterprise do {% data variables.product.prodname_dotcom %}
{% data reusables.getting-started.contact-support-enterprise %}
