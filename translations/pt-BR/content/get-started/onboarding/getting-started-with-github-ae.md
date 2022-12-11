---
title: Introdução ao GitHub AE
intro: 'Comece a configurar o {% data variables.product.product_name %} para {% data variables.location.product_location %}.'
versions:
  ghae: '*'
ms.openlocfilehash: 957a922a2493abd8f625cdb9e9d6650283820222
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180058'
---
Este guia ajuda você a configurar e gerenciar as definições para {% data variables.location.product_location %} no {% data variables.product.product_name %} como proprietário corporativo. Para saber mais sobre o {% data variables.product.product_name %}, confira "[Sobre o {% data variables.product.prodname_ghe_managed %}](/admin/overview/about-github-ae)".

## Parte 1: Configurando {% data variables.product.product_name %}
Para dar os primeiros passos com o {% data variables.product.product_name %}, você pode criar uma conta corporativa, inicializar o {% data variables.product.product_name %}, configurar uma lista de permissões de IP, definir a autenticação e o provisionamento de usuários e gerenciar a cobrança para {% data variables.location.product_location %}.

### 1. Como criar sua conta corporativa do {% data variables.product.product_name %}
Primeiro você precisará comprar {% data variables.product.product_name %}. Para obter mais informações, entre em contato com a [equipe de Vendas do {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

{% data reusables.github-ae.initialize-enterprise %}

### 2. Como inicializar o {% data variables.product.product_name %}
Depois que o {% data variables.product.company_short %} cria a conta de proprietário para {% data variables.location.product_location %} no {% data variables.product.product_name %}, você recebe um email para entrar e concluir a inicialização. Durante a inicialização, você, como o proprietário da empresa, deverá nomear {% data variables.location.product_location %}, configurar o SSO no SAML, criar políticas para todas as organizações em {% data variables.location.product_location %} e configurar um contato de suporte para os integrantes da empresa. Para obter mais informações, confira "[Como inicializar o {% data variables.product.prodname_ghe_managed %}](/admin/configuration/configuring-your-enterprise/initializing-github-ae)".

### 3. Como restringir o tráfego de rede
É possível configurar uma lista de permissões para endereços IP específicos para restringir o acesso a ativos pertencentes a organizações na sua conta corporativa. Para obter mais informações, confira "[Como restringir o tráfego de rede da sua empresa com uma lista de permissões de IP](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)".

### 4. Como gerenciar a identidade e o acesso para {% data variables.location.product_location %}
Você pode gerenciar centralmente o acesso a {% data variables.location.product_location %} no {% data variables.product.product_name %} de um IdP (provedor de identidade) usando o SSO (logon único) do SAML para autenticação de usuários e o SCIM (Sistema de Gerenciamento de Usuários entre Domínios) para provisionamento de usuários. Depois de configurar o provisionamento, você poderá atribuir ou remover usuários para o aplicativo a partir do IdP, criando ou desabilitando as contas de usuários na empresa. Para obter mais informações, confira "[Sobre o gerenciamento de identidades e acesso da sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)".

### 5. Como gerenciar a cobrança para {% data variables.location.product_location %}
Os proprietários da assinatura de {% data variables.location.product_location %} no {% data variables.product.product_name %} podem ver as informações de cobrança do {% data variables.product.product_name %} no portal do Azure. Para obter mais informações, confira "[Como gerenciar a cobrança para sua empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".

## Parte 2: Organização e gestão dos integrantes da empresa
Como proprietário corporativo de {% data variables.product.product_name %}, você pode gerenciar as configurações nos níveis do usuário, repositório, equipe e organização. Você pode gerenciar os integrantes de {% data variables.location.product_location %}, criar e gerenciar organizações, definir políticas para o gerenciamento do repositório e criar e gerenciar equipes.

### 1. Gerenciar os membros do {% data variables.location.product_location %}
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
Para aumentar a segurança de {% data variables.location.product_location %}, você pode monitorar a {% data variables.location.product_location %} e configurar os recursos de segurança e análise das suas organizações.

### 1. Monitoring {% data variables.location.product_location %}
Você pode monitorar a {% data variables.location.product_location %} com o seu painel de atividades e o log de auditoria. Para obter mais informações, confira "[Como monitorar a atividade na sua empresa](/admin/monitoring-activity-in-your-enterprise)".

### 2. Como configurar os recursos de segurança para suas organizações
{% data reusables.getting-started.configuring-security-features %}

## Parte 4: como personalizar e automatizar o trabalho em {% data variables.location.product_location %}
Você pode personalizar e automatizar o trabalho nas organizações em {% data variables.location.product_location %} com a API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, {% data variables.product.prodname_actions %} e {% data variables.product.prodname_pages %}.

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
