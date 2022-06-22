---
title: Introdução ao GitHub Team
intro: 'Com grupos de {% data variables.product.prodname_team %}, as pessoas podem colaborar em vários projetos ao mesmo tempo na conta de uma organização.'
versions:
  fpt: '*'
---

Este guia irá ajudar você a configurar e gerenciar sua conta {% data variables.product.prodname_team %} como proprietário da organização.

## Parte 1: Configurar sua conta em {% data variables.product.product_location %}
Como os primeiros passos para começar com {% data variables.product.prodname_team %}, você deverá criar uma conta pessoal ou entrar na sua conta existente em {% data variables.product.prodname_dotcom %}, criar uma organização e configurar a cobrança.

### 1. Sobre organizações
As organizações são contas compartilhadas onde empresas e projetos de código aberto podem colaborar em muitos projetos de uma vez. Os proprietários e administradores podem gerenciar o acesso de integrantes aos dados e projetos da organização com recursos avançados administrativos e de segurança. Para obter mais informações sobre os recursos das organizações, consulte "[Sobre as organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations#terms-of-service-and-data-protection-for-organizations)".

### 2. Criando uma organização e inscrevendo-se em {% data variables.product.prodname_team %}
Antes de criar uma organização, você deverá criar uma conta pessoal ou efetuar o login na sua conta existente em {% data variables.product.product_location %}. Para obter mais informações, consulte "[Inscrever-se em uma nova conta do {% data variables.product.prodname_dotcom %}](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)".

Uma vez que a sua conta pessoal está configurada, você derá criar uma organização e escolher um plano. Aqui é onde você pode escolher uma assinatura de {% data variables.product.prodname_team %} para a sua organização. Para obter mais informações, consulte "[Criar uma nova organização do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

### 3. Gerenciando a cobrança para uma organização
Você deve gerenciar as configurações de cobrança, método de pagamento e produtos pagos para cada uma das suas contas pessoais e organizações separadamente. Você pode alternar entre as configurações para a suas diferentes contas usando o alternador de contexto nas suas configurações. Para obter mais informações, consulte "[Alternando entre as configurações para as suas diferentes contas](/billing/managing-your-github-billing-settings/about-billing-on-github#switching-between-settings-for-your-different-accounts)".

A página de configurações de cobrança da sua organização permite que você gerencie configurações como seu método de pagamento, ciclo de cobrança e e-mail de cobrança, ou visualize informações como a sua assinatura, data de faturamento e histórico de pagamento. Você também pode ver e fazer a atualização do seu armazenamento e dos minutos do GitHub Action. Para obter mais informações sobre como gerenciar suas configurações de cobrança, consulte "[Gerenciando suas configurações de cobrança de {% data variables.product.prodname_dotcom %}](/billing/managing-your-github-billing-settings)".

Apenas os integrantes da organização com a função de *proprietário* ou *gerente de cobrança* podem acessar ou alterar as configurações de cobrança da sua organização. Um gerente de cobrança é um usuário que gerencia as configurações de cobrança para sua organização e não usa uma licença paga na assinatura da sua organização. Para obter mais informações sobre como adicionar um gerente de cobrança à sua organização, consulte "[Adicionando um gerente de cobrança à sua organização](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)".


## Parte 2: Adicionar integrantes e criar equipes
Depois de criar a sua organização, você poderá convidar integrantes e definir permissões e funções. Você também pode criar diferentes níveis de equipes e definir níveis personalizados de permissões para repositórios da sua organização, quadros de projetos e aplicativos.

### 1. Gerenciando integrantes da sua organização
{% data reusables.getting-started.managing-org-members %}

### 2. Permissões e funções da organização
{% data reusables.getting-started.org-permissions-and-roles %}

### 3. Sobre e criar equipes
{% data reusables.getting-started.about-and-creating-teams %}
### 4. Gerenciando as configurações de equipe
{% data reusables.getting-started.managing-team-settings %}

### 5. Dar às pessoas e equipes acesso a repositórios, seções de projetos e aplicativos
{% data reusables.getting-started.giving-access-to-repositories-projects-apps %}
## Parte 3: Gerenciando a segurança da sua organização
Você pode ajudar a tornar sua organização mais segura ao recomendar ou exigir a autenticação de dois fatores para os integrantes da sua organização, configurando as funcionalidades de segurança e revisando o log de auditoria e integrações da sua organização.

### 1. Exigindo a autenticação de dois fatores
{% data reusables.getting-started.requiring-2fa %}

### 2. Configurando recursos de segurança para a sua organização
{% data reusables.getting-started.configuring-security-features %}

### 3. Revisando o log de auditoria e as integrações da sua organização
{% data reusables.getting-started.reviewing-org-audit-log-and-integrations %}

## Parte 4: Definindo as políticas no nível da organização
### 1. Gerenciando as políticas da organização
{% data reusables.getting-started.managing-org-policies %}
### 2. Gerenciando alterações de repositório
{% data reusables.getting-started.managing-repo-changes %}
### 3. Usando arquivos de saúde da comunidade no nível da organização e as ferramentas de moderação
{% data reusables.getting-started.using-org-community-files-and-moderation-tools %}
## Parte 5: Personalizando e automatizando seu trabalho em {% data variables.product.product_name %}

{% data reusables.getting-started.customizing-and-automating %}
### 1. Usar {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %}
### 2. Usando a API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}

### 3. Criando {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

### 4. Publicando e gerenciando {% data variables.product.prodname_registry %}
{% data reusables.getting-started.packages %}

## Parte 6: Participando da comunidade de {% data variables.product.prodname_dotcom %}
{% data reusables.getting-started.participating-in-community %}
### 1. Contribuindo para projetos de código aberto
{% data reusables.getting-started.open-source-projects %}

### 2. Interagindo com o {% data variables.product.prodname_gcf %}
{% data reusables.support.ask-and-answer-forum %}

### 3. Lendo sobre {% data variables.product.prodname_team %} em {% data variables.product.prodname_docs %}
Você pode ler a documentação que reflete as funcionalidades disponíveis com {% data variables.product.prodname_team %}. Para obter mais informações, consulte "[Sobre as versões do {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)."

### 4. Aprendendo com {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning %}

### 5. Apoiar a comunidade de código aberto
{% data reusables.getting-started.sponsors %}

### 6. Entrar em contato com o {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}
## Leia mais

- "[Introdução à sua conta do GitHub](/get-started/onboarding/getting-started-with-your-github-account)"
