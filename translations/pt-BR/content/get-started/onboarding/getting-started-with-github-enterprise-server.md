---
title: Introdução ao GitHub Enterprise Server
intro: 'Comece a configurar e gerenciar o {% data variables.location.product_location %}.'
versions:
  ghes: '*'
ms.openlocfilehash: 68cd462c42ef63863750d9edc5e122dc3c325115
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163413'
---
Este guia abordará a instalação, a configuração e o gerenciamento do {% data variables.location.product_location %} como um administrador de empresa.

{% data variables.product.company_short %} oferece duas maneiras de implantar {% data variables.product.prodname_enterprise %}.

- **{% data variables.product.prodname_ghe_cloud %}**
- **{% data variables.product.prodname_ghe_server %}**

{% data variables.product.company_short %} hospeda {% data variables.product.prodname_ghe_cloud %}. Você pode implantar e hospedar {% data variables.product.prodname_ghe_server %} no seu próprio centro de dados ou em um provedor da nuvem compatível.

Para obter mais informações sobre o {% data variables.product.product_name %}, confira "[Sobre o {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server)".

## Parte 1: Como instalar o {% data variables.product.product_name %}
Para começar com {% data variables.product.product_name %}, você deverá criar a conta corporativa, instalar a instância, usar o Console de Gerenciamento para configuração inicial, configurar a sua instância e gerenciar a cobrança. 
### 1. Como criar sua conta corporativa
Antes de instalar o {% data variables.product.product_name %}, você pode criar uma conta corporativa no {% data variables.product.prodname_dotcom_the_website %} entrando em contato com a [equipe de vendas do {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact). Uma conta corporativa em {% data variables.product.prodname_dotcom_the_website %} é útil para a cobrança e para recursos compartilhados com o {% data variables.product.prodname_dotcom_the_website %} via {% data variables.product.prodname_github_connect %}.  Para obter mais informações, confira "[Sobre as contas corporativas](/admin/overview/about-enterprise-accounts)".
### 2. Como instalar o {% data variables.product.product_name %}
Para começar com {% data variables.product.product_name %}, você deverá instalar o dispositivo em uma plataforma de virtualização de sua escolha. Para obter mais informações, confira "[Como configurar uma instância do {% data variables.product.prodname_ghe_server %}](/admin/installation/setting-up-a-github-enterprise-server-instance)".

### 3. Como usar o Console de Gerenciamento
Ao iniciar o {% data variables.location.product_location %} pela primeira vez, você usará o console de gerenciamento para percorrer o processo de configuração inicial. Você também pode usar o Console de Gerenciamento para gerenciar configurações de instância, como licença, domínio, autenticação e TLS. Para obter mais informações, confira "[Como acessar o console de gerenciamento](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".

### 4. Configurar o {% data variables.location.product_location %}
Além do console de gerenciamento, é possível usar o painel de administração de site e o SSH (shell administrativo) para gerenciar o {% data variables.location.product_location %}. Por exemplo, você pode configurar aplicativos e limites de taxa, ver relatórios, usar utilitários de linha de comando. Para obter mais informações, confira "[Como configurar sua empresa](/admin/configuration/configuring-your-enterprise)".

Você pode usar as configurações de rede padrão usadas por {% data variables.product.product_name %} por meio do protocolo de configuração do host dinâmico (DHCP) ou você também pode definir as configurações de rede usando o console de máquina virtual. Você também pode configurar um servidor proxy ou regras de firewall. Para obter mais informações, confira "[Como definir as configurações de rede](/admin/configuration/configuring-network-settings)".

### 5. Como configurar a alta disponibilidade
É possível configurar o {% data variables.location.product_location %} para alta disponibilidade a fim de minimizar o impacto de falhas de hardware e interrupções de rede. Para obter mais informações, confira "[Como configurar a alta disponibilidade](/admin/enterprise-management/configuring-high-availability)".

### 6. Como configurar uma instância de preparo
É possível configurar uma instância de preparo para testar modificações, planejar a recuperação de desastre e testar atualizações antes de aplicá-las ao {% data variables.location.product_location %}.  Para obter mais informações, confira "[Como configurar uma instância de preparo](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)".

### 7. Como designar backups e recuperação de desastre
Para proteger seus dados de produção, configure backups automatizados do {% data variables.location.product_location %} com o {% data variables.product.prodname_enterprise_backup_utilities %}. Para obter mais informações, confira "[Como configurar backups no seu dispositivo](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)".

### 8. Como gerenciar a cobrança para sua empresa
A cobrança para todas as organizações e instâncias de {% data variables.product.product_name %} conectadas à sua conta corporativa é agregada em uma única taxa de cobrança para todos os seus serviços pagos de {% data variables.product.prodname_dotcom %}.com. Proprietários corporativos e gerentes de cobrança podem acessar e gerenciar as configurações de cobrança relativas a contas corporativas. Para obter mais informações, confira "[Como gerenciar a cobrança para sua empresa](/admin/overview/managing-billing-for-your-enterprise)".

## Parte 2: Organização e gerenciamento da sua equipe
Como proprietário corporativo ou administrador, você pode gerenciar configurações em níveis de usuário, repositório, equipe e organização. É possível gerenciar os integrantes da sua empresa, criar e gerenciar organizações, definir políticas para a gestão do repositório e criar e gerenciar as equipes.

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
Para aumentar a segurança do {% data variables.location.product_location %}, configure a autenticação de membros corporativos, use ferramentas e o registro em log de auditoria para manter a conformidade, defina recursos de segurança e análise para suas organizações e, opcionalmente, habilite o {% data variables.product.prodname_GH_advanced_security %}.
### 1. Como autenticar os membros da empresa
É possível usar o método de autenticação interno do {% data variables.product.product_name %} ou escolher entre um provedor de autenticação externo, como CAS, LDAP ou SAML, para integrar as contas existentes e gerenciar centralmente o acesso dos usuários ao {% data variables.location.product_location %}. Para obter mais informações, confira "[Sobre a autenticação em sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".

Você também pode exigir autenticação de dois fatores para cada uma de suas organizações. Para obter mais informações, confira "[Como exigir a autenticação de dois fatores para uma organização](/admin/user-management/managing-organizations-in-your-enterprise/requiring-two-factor-authentication-for-an-organization)".

### 2. Como manter a conformidade
Você pode implementar verificações de status necessárias e realizar verificações de commit para fazer cumprir os padrões de conformidade da sua organização e automatizar os fluxos de trabalho de conformidade. Você também pode usar o log de auditoria para sua organização revisar as ações executadas pela sua equipe. Para obter mais informações, confira "[Impor uma política com ganchos de pré-recebimento](/admin/policies/enforcing-policy-with-pre-receive-hooks)" e "[Sobre o log de auditoria da sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)".

{% ifversion ghes %}
### 3. Como configurar os recursos de segurança para suas organizações
{% data reusables.getting-started.configuring-security-features %} {% endif %}

{% ifversion ghes %}
### 4. Como habilitar recursos do {% data variables.product.prodname_GH_advanced_security %}
Você pode atualizar sua licença do {% data variables.product.product_name %} para incluir {% data variables.product.prodname_GH_advanced_security %}. Isso fornece funcionalidades extras que ajudam os usuários a encontrar e corrigir problemas de segurança no seu código como, por exemplo, digitalização de código e segredo. Para obter mais informações, confira "[{% data variables.product.prodname_GH_advanced_security %} para sua empresa](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)".
{% endif %}

## Parte 4: Personalizando e automatizando o trabalho da sua empresa em {% data variables.product.prodname_dotcom %}
Você pode personalizar e automatizar o trabalho em organizações na sua empresa com a API de {% data variables.product.prodname_dotcom %} e {% data variables.product.prodname_oauth_apps %}, {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API, {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %} e {% data variables.product.prodname_pages %}.

### 1. Como criar {% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_apps %}
Você pode criar integrações com a API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} como, por exemplo, {% data variables.product.prodname_github_apps %} ou {% data variables.product.prodname_oauth_apps %}, para uso em organizações da empresa para complementar e ampliar seus fluxos de trabalho. Para obter mais informações, confira "[Sobre os aplicativos](/developers/apps/getting-started-with-apps/about-apps)".
### 2. Como usar a API do {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}

{% ifversion ghes %}
### 3. Como criar {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

Para obter mais informações sobre como habilitar e configurar o {% data variables.product.prodname_actions %} no {% data variables.product.product_name %}, confira "[Introdução ao {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".

### 4. Como publicar e gerenciar o {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}

Para saber mais sobre a habilitação e configuração do {% data variables.product.prodname_registry %} para o {% data variables.location.product_location %}, confira "[Introdução ao {% data variables.product.prodname_registry %} para sua empresa](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".
{% endif %}

### 5. Como usar o {% data variables.product.prodname_pages %}
{% data reusables.getting-started.github-pages-enterprise %}

## Parte 5: Conectando com outros recursos de {% data variables.product.prodname_dotcom %}
Você pode usar {% data variables.product.prodname_github_connect %} para compartilhar recursos.

Se você for o proprietário de uma instância de {% data variables.product.product_name %} e uma organização ou conta corporativa de {% data variables.product.prodname_ghe_cloud %}, você poderá habilitar {% data variables.product.prodname_github_connect %}. O {% data variables.product.prodname_github_connect %} permite compartilhar fluxos de trabalho e recursos específicos entre o {% data variables.location.product_location %} e o {% data variables.product.prodname_ghe_cloud %}, como contribuições e pesquisas unificadas. Para obter mais informações, confira "[Como conectar o {% data variables.product.prodname_ghe_server %} ao {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud)".

## Parte 6: Usando o aprendizado de {% data variables.product.prodname_dotcom %} e o suporte recursos
Seus membros corporativos podem aprender mais sobre o Git e o {% data variables.product.prodname_dotcom %} com nossos recursos de aprendizado e é possível obter o suporte necessário ao configurar e gerenciar o {% data variables.location.product_location %} com o Suporte Corporativo do {% data variables.product.prodname_dotcom %}.

### 1. Leitura sobre o {% data variables.product.product_name %} no {% data variables.product.prodname_docs %}

Você pode ler a documentação que reflete as funcionalidades disponíveis com {% data variables.product.prodname_ghe_server %}. Para obter mais informações, confira "[Sobre as versões do {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)".

{% data reusables.enterprise.best-practices %}

### 2. Aprendizagem com o {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning-enterprise %}

### 3. Como trabalhar com o Suporte Enterprise do {% data variables.product.prodname_dotcom %}
{% data reusables.getting-started.contact-support-enterprise %}
