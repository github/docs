---
title: Introdução ao GitHub Enterprise Server
intro: 'Comece a configurar e gerenciar {% data variables.product.product_location %}.'
versions:
  ghes: '*'
---

Este guia irá ajudar você a configurar e gerenciar {% data variables.product.product_location %} como administrador da empresa.

{% data variables.product.company_short %} oferece duas maneiras de implantar {% data variables.product.prodname_enterprise %}.

- **{% data variables.product.prodname_ghe_cloud %}**
- **{% data variables.product.prodname_ghe_server %}**

{% data variables.product.company_short %} hospeda {% data variables.product.prodname_ghe_cloud %}. Você pode implantar e hospedar {% data variables.product.prodname_ghe_server %} no seu próprio centro de dados ou em um provedor da nuvem compatível.

Para obter uma visão geral de como {% data variables.product.product_name %} funciona, consulte "[Visão geral do sistema](/admin/overview/system-overview)".

## Parte 1: Instalar {% data variables.product.product_name %}
Para começar com {% data variables.product.product_name %}, você deverá criar a conta corporativa, instalar a instância, usar o Console de Gerenciamento para configuração inicial, configurar a sua instância e gerenciar a cobrança.
### 1. Criando a sua conta corporativa
Antes de instalar {% data variables.product.product_name %}, você pode criar uma conta corporativa em {% data variables.product.prodname_dotcom_the_website %} entrando em contato com a [](https://enterprise.github.com/contact) equipe de vendas de {% data variables.product.prodname_dotcom %}. Uma conta corporativa em {% data variables.product.prodname_dotcom_the_website %} é útil para a cobrança e para recursos compartilhados com o {% data variables.product.prodname_dotcom_the_website %} via {% data variables.product.prodname_github_connect %}.  Para obter mais informações, consulte "[Sobre contas corporativas](/admin/overview/about-enterprise-accounts)".
### 2. Instalar o {% data variables.product.product_name %}
Para começar com {% data variables.product.product_name %}, você deverá instalar o dispositivo em uma plataforma de virtualização de sua escolha. Para obter mais informações, consulte "[Configurar instância do {% data variables.product.prodname_ghe_server %}](/admin/installation/setting-up-a-github-enterprise-server-instance)".

### 3. Usando o Console de Gerenciamento
Você usará o Console de Gerenciamento para apresentar o processo de configuração inicial ao iniciar {% data variables.product.product_location %}. Você também pode usar o Console de Gerenciamento para gerenciar configurações de instância, como licença, domínio, autenticação e TLS. Para obter mais informações, consulte "[Acessando o console de gerenciamento](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".

### 4. Configurar o {% data variables.product.product_location %};
Além do console de gerenciamento, você pode usar o painel de administração do site e o shell administrativo (SSH) para gerenciar {% data variables.product.product_location %}. Por exemplo, você pode configurar aplicativos e limites de taxa, ver relatórios, usar utilitários de linha de comando. Para obter mais informações, consulte "[Configurando sua empresa](/admin/configuration/configuring-your-enterprise)".

Você pode usar as configurações de rede padrão usadas por {% data variables.product.product_name %} por meio do protocolo de configuração do host dinâmico (DHCP) ou você também pode definir as configurações de rede usando o console de máquina virtual. Você também pode configurar um servidor proxy ou regras de firewall. Para obter mais informações, consulte "[Definindo as configurações de rede](/admin/configuration/configuring-network-settings)".

### 5. Configurar alta disponibilidade
Você pode configurar {% data variables.product.product_location %} para alta disponibilidade a fim de minimizar o impacto de falhas de hardware e falhas de rede. Para obter mais informações, consulte "[Configurando alta disponibilidade](/admin/enterprise-management/configuring-high-availability)".

### 6. Configurar uma instância de preparo
Você pode configurar uma instância de preparo para testar modificações, planejar a recuperação de desastres e testar atualizações antes de aplicá-las a {% data variables.product.product_location %}.  Para obter mais informações, consulte "[Configurar instância de preparo](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)".

### 7. Designando backups e recuperação de desastres
Para proteger seus dados de produção, você pode configurar backups automatizados de {% data variables.product.product_location %} com {% data variables.product.prodname_enterprise_backup_utilities %}. Para obter mais informações, consulte "[Configurar backups no appliance](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)".

### 8. Gerenciar a cobrança para a sua empresa
A cobrança para todas as organizações e instâncias de {% data variables.product.product_name %} conectadas à sua conta corporativa é agregada em uma única taxa de cobrança para todos os seus serviços pagos de {% data variables.product.prodname_dotcom %}.com. Proprietários corporativos e gerentes de cobrança podem acessar e gerenciar as configurações de cobrança relativas a contas corporativas. Para obter mais informações, consulte "[Gerenciando a cobrança da sua empresa](/admin/overview/managing-billing-for-your-enterprise)".

## Parte 2: Organização e gerenciamento da sua equipe
Como proprietário corporativo ou administrador, você pode gerenciar configurações em níveis de usuário, repositório, equipe e organização. É possível gerenciar os integrantes da sua empresa, criar e gerenciar organizações, definir políticas para a gestão do repositório e criar e gerenciar as equipes.

### 1. Gerenciando integrantes de {% data variables.product.product_location %}
{% data reusables.getting-started.managing-enterprise-members %}

### 2. Criar organizações
{% data reusables.getting-started.creating-organizations %}

### 3. Adicionando integrantes a organizações
{% data reusables.getting-started.adding-members-to-organizations %}

### 4. Criar equipes
{% data reusables.getting-started.creating-teams %}

### 5. Definindo níveis de permissões para a organização e para o repositório
{% data reusables.getting-started.setting-org-and-repo-permissions %}

### 6. Aplicando políticas de gerenciamento do repositório
{% data reusables.getting-started.enforcing-repo-management-policies %}

## Parte 3: Criando com segurança
Para aumentar a segurança de {% data variables.product.product_location %}, você pode configurar a autenticação para integrantes da empresa, usar ferramentas e registro de auditoria para manter a conformidade, configurar recursos de segurança e análise para as suas organizações e, opcionalmente, habilitar {% data variables.product.prodname_GH_advanced_security %}.
### 1. Efetuando a autenticação dos integrantes da empresa
Você pode usar o método de autenticação interno do {% data variables.product.product_name %} ou você pode escolher entre um provedor de autenticação externo como o CAS, LDAP ou SAML, para integrar suas contas existentes e gerenciar centralmente o acesso do usuário a {% data variables.product.product_location %}. Para obter mais informações, consulte "[Sobre a autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".

Você também pode exigir autenticação de dois fatores para cada uma de suas organizações. Para obter mais informações, consulte "[Exigindo a autenticação de dois fatores para uma organização](/admin/user-management/managing-organizations-in-your-enterprise/requiring-two-factor-authentication-for-an-organization)".

### 2. Manter a conformidade
Você pode implementar verificações de status necessárias e realizar verificações de commit para fazer cumprir os padrões de conformidade da sua organização e automatizar os fluxos de trabalho de conformidade. Você também pode usar o log de auditoria para sua organização revisar as ações executadas pela sua equipe. Para obter mais informações, consulte "[Aplicando a política de hooks pre-receive](/admin/policies/enforcing-policy-with-pre-receive-hooks)" e "[Sobre o log de auditoria da sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)".

{% ifversion ghes %}
### 3. Configurar as funcionalidades de segurança para as suas organizações
{% data reusables.getting-started.configuring-security-features %}
{% endif %}

{% ifversion ghes %}
### 4. Habilitando funcionalidades de {% data variables.product.prodname_GH_advanced_security %}
Você pode atualizar sua licença do {% data variables.product.product_name %} para incluir {% data variables.product.prodname_GH_advanced_security %}. Isso fornece funcionalidades extras que ajudam os usuários a encontrar e corrigir problemas de segurança no seu código como, por exemplo, digitalização de código e segredo. Para obter mais informações, consulte "[{% data variables.product.prodname_GH_advanced_security %} para a sua empresa "](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)".
{% endif %}

## Parte 4: Personalizando e automatizando o trabalho da sua empresa em {% data variables.product.prodname_dotcom %}
Você pode personalizar e automatizar o trabalho em organizações na sua empresa com a API de {% data variables.product.prodname_dotcom %} e {% data variables.product.prodname_oauth_apps %}, {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API, {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %} e {% data variables.product.prodname_pages %}.

### 1. Criando {% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_apps %}
Você pode criar integrações com a API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} como, por exemplo, {% data variables.product.prodname_github_apps %} ou {% data variables.product.prodname_oauth_apps %}, para uso em organizações da empresa para complementar e ampliar seus fluxos de trabalho. Para obter mais informações, consulte "[Sobre os aplicativos](/developers/apps/getting-started-with-apps/about-apps)".
### 2. Usando a API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}

{% ifversion ghes %}
### 3. Criando {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

Para obter mais informações sobre como ativar e configurar {% data variables.product.prodname_actions %} em {% data variables.product.product_name %}, consulte "[Primeiros passos com {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".

### 4. Publicando e gerenciando {% data variables.product.prodname_registry %}
{% data reusables.getting-started.packages %}

Para obter mais informações sobre como habilitar e configurar {% data variables.product.prodname_registry %} para {% data variables.product.product_location %}, consulte "[Primeiros passos com {% data variables.product.prodname_registry %} para a sua empresa](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".
{% endif %}

### 5. Usar {% data variables.product.prodname_pages %}
{% data reusables.getting-started.github-pages-enterprise %}

## Parte 5: Conectando com outros recursos de {% data variables.product.prodname_dotcom %}
Você pode usar {% data variables.product.prodname_github_connect %} para compartilhar recursos.

Se você for o proprietário de uma instância de {% data variables.product.product_name %} e uma organização ou conta corporativa de {% data variables.product.prodname_ghe_cloud %}, você poderá habilitar {% data variables.product.prodname_github_connect %}. {% data variables.product.prodname_github_connect %} permite que você compartilhe fluxos de trabalho específicos e recursos entre {% data variables.product.product_location %} e {% data variables.product.prodname_ghe_cloud %}, como pesquisa unificada e contribuições. Para obter mais informações, consulte "[Conectar o {% data variables.product.prodname_ghe_server %} ao {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud)".

## Parte 6: Usando o aprendizado de {% data variables.product.prodname_dotcom %} e o suporte recursos
Os membros da sua empresa podem aprender mais sobre o Git e {% data variables.product.prodname_dotcom %} com os nossos recursos de aprendizagem. e você pode obter o suporte de que precisa ao configurar e gerenciar {% data variables.product.product_location %} com o suporte do enterprise de {% data variables.product.prodname_dotcom %}.

### 1. Lendo sobre {% data variables.product.product_name %} em {% data variables.product.prodname_docs %}

Você pode ler a documentação que reflete as funcionalidades disponíveis com {% data variables.product.prodname_ghe_server %}. Para obter mais informações, consulte "[Sobre as versões do {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)."

### 2. Aprendendo com {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning-lab-enterprise %}

### 3. Trabalhando com o Suporte do Enterprise de {% data variables.product.prodname_dotcom %}
{% data reusables.getting-started.contact-support-enterprise %}
