---
title: Introdução ao GitHub Team
intro: 'Com grupos de {% data variables.product.prodname_team %}, as pessoas podem colaborar em vários projetos ao mesmo tempo na conta de uma organização.'
versions:
  fpt: '*'
ms.openlocfilehash: 46b5376b72ce30f7c526f693f2adb9253853cf1d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146139157'
---
Este guia irá ajudar você a configurar e gerenciar sua conta {% data variables.product.prodname_team %} como proprietário da organização.

## Parte 1: Configurar sua conta em {% data variables.product.product_location %}
Como primeiros passos para começar com {% data variables.product.prodname_team %}, você deverá criar uma conta pessoal ou entrar na sua conta existente no {% data variables.product.prodname_dotcom %}, criar uma organização e configurar a cobrança.

### 1. Sobre as organizações
As organizações são contas compartilhadas nas quais as empresas e os projetos de software livre podem colaborar com vários projetos ao mesmo tempo. Os proprietários e os administradores podem gerenciar o acesso de membros aos dados e projetos da organização com recursos administrativos e de segurança sofisticados. Para obter mais informações sobre os recursos das organizações, confira "[Sobre as organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations#terms-of-service-and-data-protection-for-organizations)".

### 2. Como criar uma organização e se inscrever no {% data variables.product.prodname_team %}
Para criar uma organização, você deverá criar uma conta pessoal ou efetuar o logon na sua conta existente no {% data variables.product.product_location %}. Para obter mais informações, confira "[Como se inscrever em uma nova conta do {% data variables.product.prodname_dotcom %}](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)".

Uma vez que a sua conta pessoal estiver configurada, você poderá criar uma organização e escolher um plano. Aqui é onde você pode escolher uma assinatura de {% data variables.product.prodname_team %} para a sua organização. Para obter mais informações, confira "[Como criar uma organização do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

### 3. Como gerenciar a cobrança para uma organização
Você deve gerenciar as configurações de cobrança, método de pagamento e produtos pagos para cada uma das suas contas pessoais e organizações separadamente. Você pode alternar entre as configurações para a suas diferentes contas usando o alternador de contexto nas suas configurações. Para obter mais informações, confira "[Como alternar entre as configurações de suas diferentes contas](/billing/managing-your-github-billing-settings/about-billing-on-github#switching-between-settings-for-your-different-accounts)".

A página de configurações de cobrança da sua organização permite que você gerencie configurações como seu método de pagamento, ciclo de cobrança e e-mail de cobrança, ou visualize informações como a sua assinatura, data de faturamento e histórico de pagamento. Você também pode ver e fazer a atualização do seu armazenamento e dos minutos do GitHub Action. Para obter mais informações sobre como gerenciar as configurações de cobrança, confira "[Como gerenciar as configurações de cobrança do {% data variables.product.prodname_dotcom %}](/billing/managing-your-github-billing-settings)".

Apenas os membros da organização com a função *proprietário* ou *gerente de cobrança* podem acessar ou alterar as configurações de cobrança da sua organização. Um gerente de cobrança é um usuário que gerencia as configurações de cobrança para sua organização e não usa uma licença paga na assinatura da sua organização. Para obter mais informações sobre como adicionar um gerente de cobrança à sua organização, confira "[Como adicionar um gerente de cobrança à sua organização](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)".


## Parte 2: Adicionar integrantes e criar equipes
Depois de criar a sua organização, você poderá convidar integrantes e definir permissões e funções. Você também pode criar diferentes níveis de equipes e definir níveis personalizados de permissões para repositórios da sua organização, quadros de projetos e aplicativos.

### 1. Como gerenciar os membros da sua organização
{% data reusables.getting-started.managing-org-members %}

### 2. Permissões e funções da organização
{% data reusables.getting-started.org-permissions-and-roles %}

### 3. Sobre as equipes e como criá-las
{% data reusables.getting-started.about-and-creating-teams %}
### 4. Como gerenciar as configurações da equipe
{% data reusables.getting-started.managing-team-settings %}

### 5. Como fornecer às pessoas e às equipes acesso a repositórios, quadros de projetos e aplicativos
{% data reusables.getting-started.giving-access-to-repositories-projects-apps %}
## Parte 3: Gerenciando a segurança da sua organização
Você pode ajudar a tornar sua organização mais segura ao recomendar ou exigir a autenticação de dois fatores para os integrantes da sua organização, configurando as funcionalidades de segurança e revisando o log de auditoria e integrações da sua organização.

### 1. Como exigir a autenticação de dois fatores
{% data reusables.getting-started.requiring-2fa %}

### 2. Como configurar recursos de segurança para sua organização
{% data reusables.getting-started.configuring-security-features %}

### 3. Como revisar o log de auditoria e as integrações da sua organização
{% data reusables.getting-started.reviewing-org-audit-log-and-integrations %}

## Parte 4: Definindo as políticas no nível da organização
### 1. Como gerenciar as políticas da organização
{% data reusables.getting-started.managing-org-policies %}
### 2. Como gerenciar as alterações do repositório
{% data reusables.getting-started.managing-repo-changes %}
### 3. Como usar os arquivos de integridade da comunidade na organização e as ferramentas de moderação
{% data reusables.getting-started.using-org-community-files-and-moderation-tools %}
## Parte 5: Personalizando e automatizando seu trabalho em {% data variables.product.product_name %}

{% data reusables.getting-started.customizing-and-automating %}
### 1. Como usar o {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %}
### 2. Como usar a API do {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}

### 3. Como criar {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

### 4. Como publicar e gerenciar o {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}

## Parte 6: Participando da comunidade de {% data variables.product.prodname_dotcom %}
{% data reusables.getting-started.participating-in-community %}
### 1. Como contribuir para projetos de código aberto
{% data reusables.getting-started.open-source-projects %}

### 2. Como interagir com o {% data variables.product.prodname_gcf %}
{% data reusables.support.ask-and-answer-forum %}

### 3. Leitura sobre o {% data variables.product.prodname_team %} no {% data variables.product.prodname_docs %}
Você pode ler a documentação que reflete as funcionalidades disponíveis com {% data variables.product.prodname_team %}. Para obter mais informações, confira "[Sobre as versões do {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)".

### 4. Aprendizagem com o {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning %}

### 5. Como apoiar a comunidade de código aberto
{% data reusables.getting-started.sponsors %}

### 6. Como entrar em contato com o {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}
## Leitura adicional

- "[Introdução à sua conta do GitHub](/get-started/onboarding/getting-started-with-your-github-account)"
