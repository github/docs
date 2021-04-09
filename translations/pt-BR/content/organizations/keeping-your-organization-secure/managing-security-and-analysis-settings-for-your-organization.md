---
title: Gerenciar as configurações de segurança e análise para a sua organização
intro: 'Você pode controlar recursos que protegem e analisam o código nos projetos da sua organização no {% data variables.product.prodname_dotcom %}.'
permissions: Os proprietários da organização podem gerenciar as configurações de segurança e análise de repositórios na organização.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - organizations
  - teams
---

### Sobre a gestão de configurações de segurança e análise

O {% data variables.product.prodname_dotcom %} pode ajudar a proteger os repositórios na sua organização. É possível gerenciar os recursos de segurança e análise para todos os repositórios existentes ou novos que os integrantes criarem na sua organização. {% if currentVersion == "free-pro-team@latest" %}Se você tiver uma licença para {% data variables.product.prodname_GH_advanced_security %}, você também poderá gerenciar o acesso a essas funcionalidades. {% data reusables.advanced-security.more-info-ghas %}{% endif %}

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}
{% data reusables.security.security-and-analysis-features-enable-read-only %}

### Exibir as configurações de segurança e análise

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}

A página exibida permite que você habilite ou desabilite todas as funcionalidades de segurança e análise dos repositórios na sua organização.

{% if currentVersion == "free-pro-team@latest" %}Se a sua organização pertence a uma empresa com uma licença para {% data variables.product.prodname_GH_advanced_security %}, a página também conterá opções para habilitar e desabilitar funcionalidades de {% data variables.product.prodname_advanced_security %}. Todos os repositórios que usam {% data variables.product.prodname_GH_advanced_security %} estão listados na parte inferior da página.{% endif %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}Se você tiver uma licença para {% data variables.product.prodname_GH_advanced_security %}, a página também conterá opções para habilitar e desabilitar funcionalidades de {% data variables.product.prodname_advanced_security %}. Todos os repositórios que usam {% data variables.product.prodname_GH_advanced_security %} estão listados na parte inferior da página.{% endif %}

{% if currentVersion == "github-ae@latest" %}A página também conterá opções para habilitar e desabilitar funcionalidades de {% data variables.product.prodname_advanced_security %}.{% endif %}

### Habilitar ou desabilitar um recurso para todos os repositórios existentes

Você pode habilitar ou desabilitar funcionalidades para todos os repositórios. {% if currentVersion == "free-pro-team@latest" %}O impacto de suas alterações nos repositórios da organização é determinado pela visibilidade:

- **Gráfico de dependências** - Suas alterações afetam apenas repositórios privados porque a funcionalidade está sempre habilitada para repositórios públicos.
- **{% data variables.product.prodname_dependabot_alerts %}** - As suas alterações afetam todos os repositórios.
- **{% data variables.product.prodname_dependabot_security_updates %}** - As suas alterações afetam todos os repositórios.
- **{% data variables.product.prodname_GH_advanced_security %}** - As suas alterações afetam apenas repositórios privados, porque {% data variables.product.prodname_GH_advanced_security %} e os as funcionalidades relacionadas estão sempre habilitadas para repositórios públicos.
- **{% data variables.product.prodname_secret_scanning_caps %}** - As suas alterações afetam apenas repositórios privados em que {% data variables.product.prodname_GH_advanced_security %} também está habilitado. {% data variables.product.prodname_secret_scanning_caps %} está sempre habilitado para repositórios públicos.{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

1. Acesse as configurações de segurança e análise da sua organização. Para obter mais informações, consulte "[Exibir as configurações de segurança e análise](#displaying-the-security-and-analysis-settings)".
2. Em "Configurar recursos de segurança e análise" à direita do recurso, clique em **Desabilitar tudo** ou **Habilitar tudo**. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3. " %}O controle para "{% data variables.product.prodname_GH_advanced_security %}" fica desabilitado se você não tiver estações disponíveis na sua licença de {% data variables.product.prodname_GH_advanced_security %}{% endif %}.
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   ![Botão "Habilitar tudo" ou "Desabilitar tudo" para os recursos de "Configurar segurança e análise"](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghas-dotcom.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Botão "Habilitar tudo" ou "Desabilitar tudo" para os recursos de "Configurar segurança e análise"](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghe.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   ![Botão "Habilitar tudo" ou "Desabilitar tudo" para os recursos de "Configurar segurança e análise"](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png)
   {% endif %}
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
3. Opcionalmente, habilite o recurso para novos repositórios na organização por padrão.
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   ![Opção de "Habilitar por padrão" para novos repositórios](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Opção de "Habilitar por padrão" para novos repositórios](/assets/images/help/organizations/security-and-analysis-secret-scanning-enable-by-default-ghe.png)
   {% endif %}
4. Clique em **Desabilitar RECURSO** ou **Habilitar RECURSO** para desabilitar ou habilitar o recurso para todos os repositórios da sua organização.
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   ![Botão para desabilitar ou habilitar recurso](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)
    {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Botão para desabilitar ou habilitar recurso](/assets/images/help/organizations/security-and-analysis-enable-secret-scanning-ghe.png)
   {% endif %}
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
3. Click **Enable for all eligible repositories** to enable the feature for all the new repositories in your organization that will have {% data variables.product.prodname_advanced_security %} enabled. ![Botão para habilitar o recurso para todos os repositórios elegíveis na organização](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-secret-scanning-existing-repos-ghae.png)
   {% endif %}

   {% data reusables.security.displayed-information %}

### Habilitar ou desabilitar uma funcionalidade automaticamente quando novos repositórios forem adicionados

1. Acesse as configurações de segurança e análise da sua organização. Para obter mais informações, consulte "[Exibir as configurações de segurança e análise](#displaying-the-security-and-analysis-settings)".
2. Under "Configure security and analysis features", to the right of the feature, enable or disable the feature by default for new repositories{% if currentVersion == "free-pro-team@latest" %}, or all new private repositories,{% endif %} in your organization.
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   ![Caixa de seleção para habilitar ou desabilitar um recurso para novos repositórios](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox-dotcom.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Caixa de seleção para habilitar ou desabilitar um recurso para novos repositórios](/assets/images/help/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox-ghe.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   ![Caixa de seleção para habilitar ou desabilitar um recurso para novos repositórios](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox-ghae.png)
   {% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### Permitir que {% data variables.product.prodname_dependabot %} acesse dependências privadas

{% data variables.product.prodname_dependabot %} pode verificar referências de dependências desatualizadas em um projeto e gerar automaticamente um pull request para atualizá-las. Para fazer isso, {% data variables.product.prodname_dependabot %} deve ter acesso a todos os arquivos de dependência de destino. Normalmente, atualizações da versão irão falhar se uma ou mais dependências forem inacessíveis. Para obter mais informações, consulte "[Sobre atualizações da versão de {% data variables.product.prodname_dependabot %}](/github/administering-a-repository/about-dependabot-version-updates)".

Por padrão, {% data variables.product.prodname_dependabot %} não pode atualizar as dependências que estão localizadas em repositórios privados ou registros de pacotes privados. Entretanto, se uma dependência estiver em um repositório privado de {% data variables.product.prodname_dotcom %} dentro da mesma organização que o projeto que usa essa dependência, você pode permitir que {% data variables.product.prodname_dependabot %} atualize a versão com sucesso, dando-lhe acesso à hospedagem do repositório.

Se seu código depende de pacotes em um registro privado, você pode permitir que {% data variables.product.prodname_dependabot %} atualize as versões dessas dependências configurando isso no nível do repositório. Você faz isso adicionando detalhes de autenticação ao arquivo _dependabot.yml_ do repositório. Para obter mais informações, consulte "[Opções de configuração para atualizações de dependências](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)".

Para permitir que {% data variables.product.prodname_dependabot %} acesse um repositório privado de {% data variables.product.prodname_dotcom %}:

1. Acesse as configurações de segurança e análise da sua organização. Para obter mais informações, consulte "[Exibir as configurações de segurança e análise](#displaying-the-security-and-analysis-settings)".
1. Em "Acesso ao repositório privado de {% data variables.product.prodname_dependabot %}", clique em **Adicionar repositórios privados** ou **Adicionar repositórios internos e privados**. ![Botão para adicionar repositórios](/assets/images/help/organizations/dependabot-private-repository-access.png)
1. Comece a digitar o nome do repositório que você deseja permitir. ![Botão para adicionar repositórios](/assets/images/help/organizations/dependabot-private-repo-choose.png)
1. Clique no repositório que você deseja permitir.

1. Optionally, to remove a repository from the list, to the right of the repository, click {% octicon "x" aria-label="The X icon" %}. ![Botão "X" para remover um repositório](/assets/images/help/organizations/dependabot-private-repository-list.png)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}

### Remover acesso a {% data variables.product.prodname_GH_advanced_security %} de repositórios individuais em uma organização

Você pode gerenciar o acesso a funcionalidades de {% data variables.product.prodname_GH_advanced_security %} para um repositório na aba "Configurações". Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)". No entanto, você também pode desabilitar funcionalidades de {% data variables.product.prodname_GH_advanced_security %} para um repositório na aba "Configurações" da organização.

1. Acesse as configurações de segurança e análise da sua organização. Para obter mais informações, consulte "[Exibir as configurações de segurança e análise](#displaying-the-security-and-analysis-settings)".
1. Para ver uma lista de todos os repositórios na sua organização com {% data variables.product.prodname_GH_advanced_security %} habilitados, desça até a seção "repositórios de {% data variables.product.prodname_GH_advanced_security %}". ![{% data variables.product.prodname_GH_advanced_security %} repositories section](/assets/images/help/organizations/settings-security-analysis-ghas-repos-list.png) A tabela lista o número de committers únicos para cada repositório. Este é o número de estações que você poderia liberar em sua licença, removendo acesso a {% data variables.product.prodname_GH_advanced_security %}. O tamanho da sua licença é mostrado para licenças no nível da organização. Para obter mais informações, consulte "[Sobre licenciamento para {% data variables.product.prodname_GH_advanced_security %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security)".
1. Para remover acesso ao {% data variables.product.prodname_GH_advanced_security %} de um repositório e liberar estações usadas por todos os committers que são exclusivos do repositório, clique no {% octicon "x" aria-label="X symbol" %} adjacente.
1. Na caixa de diálogo de confirmação, clique em **Remover repositório** para remover acesso às funcionalidades de {% data variables.product.prodname_GH_advanced_security %}.

{% note %}

**Observação:** Se você remover o acesso a {% data variables.product.prodname_GH_advanced_security %} para um repositório, você deverá comunicar-se com a equipe de desenvolvimento afetada para que saibam que a alteração foi planejada. Isso garante que eles não perderão tempo corrigindo execuções falhas de varredura de código.

{% endnote %}

{% endif %}

### Leia mais

- "[Sobre proteger seu repositório](/github/administering-a-repository/about-securing-your-repository)"
- "[Sobre a varredura de segredo](/github/administering-a-repository/about-secret-scanning)"{% if currentVersion == "free-pro-team@latest" %}
- "[Manter as suas dependências atualizadas automaticamente](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"{% endif %}{% if currentVersion != "github-ae@latest" %}
- "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Gerenciar vulnerabilidades nas dependências do seu projeto](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)"{% endif %}
