---
title: Gerenciar as configurações de segurança e análise para a sua organização
intro: 'Você pode controlar recursos que protegem e analisam o código nos projetos da sua organização no {% data variables.product.prodname_dotcom %}.'
permissions: Organization owners can manage security and analysis settings for repositories in the organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Gerenciar segurança & análise
---

## Sobre a gestão de configurações de segurança e análise

O {% data variables.product.prodname_dotcom %} pode ajudar a proteger os repositórios na sua organização. É possível gerenciar os recursos de segurança e análise para todos os repositórios existentes ou novos que os integrantes criarem na sua organização. {% ifversion ghec %}Se você tiver uma licença para {% data variables.product.prodname_GH_advanced_security %}, você também poderá gerenciar o acesso a essas funcionalidades. {% data reusables.advanced-security.more-info-ghas %}{% endif %}{% ifversion fpt %}Organizações que usam {% data variables.product.prodname_ghe_cloud %} com uma licença para {% data variables.product.prodname_GH_advanced_security %} também podem gerenciar o acesso a essas funcionalidades. Para obter mais informações, consulte [a documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).{% endif %}

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}
{% data reusables.security.security-and-analysis-features-enable-read-only %}

## Exibir as configurações de segurança e análise

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}

A página exibida permite que você habilite ou desabilite todas as funcionalidades de segurança e análise dos repositórios na sua organização.

{% ifversion ghec %}Se a sua organização pertence a uma empresa com uma licença para {% data variables.product.prodname_GH_advanced_security %}, a página também conterá opções para habilitar e desabilitar funcionalidades de {% data variables.product.prodname_advanced_security %}. Todos os repositórios que usam {% data variables.product.prodname_GH_advanced_security %} estão listados na parte inferior da página.{% endif %}

{% ifversion ghes %}Se você tiver uma licença para {% data variables.product.prodname_GH_advanced_security %}, a página também conterá opções para habilitar e desabilitar funcionalidades de {% data variables.product.prodname_advanced_security %}. Todos os repositórios que usam {% data variables.product.prodname_GH_advanced_security %} estão listados na parte inferior da página.{% endif %}

{% ifversion ghae %}A página também conterá opções para habilitar e desabilitar funcionalidades de {% data variables.product.prodname_advanced_security %}. Todos os repositórios que usam {% data variables.product.prodname_GH_advanced_security %} estão listados na parte inferior da página.{% endif %}

## Habilitar ou desabilitar um recurso para todos os repositórios existentes

Você pode habilitar ou desabilitar funcionalidades para todos os repositórios.
{% ifversion fpt or ghec %}O impacto de suas alterações nos repositórios da organização é determinado pela visibilidade:

- **Gráfico de dependências** - Suas alterações afetam apenas repositórios privados porque a funcionalidade está sempre habilitada para repositórios públicos.
- **{% data variables.product.prodname_dependabot_alerts %}** - As suas alterações afetam todos os repositórios.
- **{% data variables.product.prodname_dependabot_security_updates %}** - As suas alterações afetam todos os repositórios.
{%- ifversion ghec %}
- **{% data variables.product.prodname_GH_advanced_security %}** - As suas alterações afetam apenas repositórios privados, porque {% data variables.product.prodname_GH_advanced_security %} e os as funcionalidades relacionadas estão sempre habilitadas para repositórios públicos.
- **{% data variables.product.prodname_secret_scanning_caps %}** - As suas alterações afetam repositórios em que {% data variables.product.prodname_GH_advanced_security %} também está habilitado. Esta opção controla se {% data variables.product.prodname_secret_scanning_GHAS %} está habilitado ou não. {% data variables.product.prodname_secret_scanning_partner_caps %} sempre é executado em todos os repositórios públicos.
{% endif %}

{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

1. Acesse as configurações de segurança e análise da sua organização. Para obter mais informações, consulte "[Exibir as configurações de segurança e análise](#displaying-the-security-and-analysis-settings)".
2. Em "Código de segurança e análise" à direita do recurso, clique em **Desabilitar tudo** ou **Habilitar tudo**. {% ifversion ghes > 3.0 or ghec %}O controle para "{% data variables.product.prodname_GH_advanced_security %}" fica desabilitado se você não tiver estações disponíveis na sua licença de {% data variables.product.prodname_GH_advanced_security %}.{% endif %}
   {% ifversion fpt %}
   ![Botão "Habilitar tudo" ou "Desabilitar tudo" para os recursos de "Configurar segurança e análise"](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-fpt.png)
   {% endif %}
   {% ifversion ghec %}
   ![Botão "Habilitar tudo" ou "Desabilitar tudo" para os recursos de "Configurar segurança e análise"](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghas-ghec.png)
   {% endif %}
   {% ifversion ghes > 3.2 %}
   ![Botão "Habilitar tudo" ou "Desabilitar tudo" para os recursos de "Configurar segurança e análise"](/assets/images/enterprise/3.3/organizations/security-and-analysis-disable-or-enable-all-ghas.png)
   {% endif %}
   {% ifversion ghes = 3.1 or ghes = 3.2 %}
   ![Botão "Habilitar tudo" ou "Desabilitar tudo" para os recursos de "Configurar segurança e análise"](/assets/images/enterprise/3.1/help/organizations/security-and-analysis-disable-or-enable-all-ghas.png)
   {% endif %}

   {% ifversion ghae %}
   ![Botão "Habilitar tudo" ou "Desabilitar tudo" para os recursos de "Configurar segurança e análise"](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png)
   {% endif %}
   {% ifversion fpt or ghec %}
3. Opcionalmente, habilite o recurso para novos repositórios na organização por padrão.
   {% ifversion fpt or ghec %}
   ![Opção de "Habilitar por padrão" para novos repositórios](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
   {% endif %}

   {% endif %}
   {% ifversion fpt or ghec %}
4. Clique em **Desabilitar RECURSO** ou **Habilitar RECURSO** para desabilitar ou habilitar o recurso para todos os repositórios da sua organização.
   {% ifversion fpt or ghec %}
   ![Botão para desabilitar ou habilitar recurso](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)
   {% endif %}

   {% endif %}
   {% ifversion ghae or ghes %}
3. Clique em **Habilitar/Desabilitar todos** ou **Habilitar/Desabilitar para repositórios elegíveis** para confirmar a alteração. ![Botão para habilitar o recurso para todos os repositórios elegíveis na organização](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-secret-scanning-existing-repos-ghae.png)
   {% endif %}

   {% data reusables.security.displayed-information %}

## Habilitar ou desabilitar uma funcionalidade automaticamente quando novos repositórios forem adicionados

1. Acesse as configurações de segurança e análise da sua organização. Para obter mais informações, consulte "[Exibir as configurações de segurança e análise](#displaying-the-security-and-analysis-settings)".
2. Em "Segurança e análise de código", à direita do revurso, habilite ou desabilite o recurso por padrão para novos repositórios{% ifversion fpt or ghec %}, ou todos os novos repositórios privados,{% endif %} na sua organização.
   {% ifversion fpt or ghec %}
   ![Captura de tela de uma caixa de seleção para habilitar um revurso para novos repositórios](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png)
   {% endif %}
  {% ifversion ghes > 3.2 %}
   ![Captura de tela de uma caixa de seleção para habilitar um revurso para novos repositórios](/assets/images/enterprise/3.3/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png)
   {% endif %}
   {% ifversion ghes = 3.1 or ghes = 3.2 %}
   ![Captura de tela de uma caixa de seleção para habilitar um revurso para novos repositórios](/assets/images/enterprise/3.1/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png)
   {% endif %}
   {% ifversion ghes = 3.0 %}
   ![Captura de tela de uma caixa de seleção para habilitar um revurso para novos repositórios](/assets/images/enterprise/3.0/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox.png)
   {% endif %}
   {% ifversion ghae %}
   ![Captura de tela de uma caixa de seleção para habilitar um revurso para novos repositórios](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox-ghae.png)
   {% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}

## Permitir que {% data variables.product.prodname_dependabot %} acesse dependências privadas

{% data variables.product.prodname_dependabot %} pode verificar referências de dependências desatualizadas em um projeto e gerar automaticamente um pull request para atualizá-las. Para fazer isso, {% data variables.product.prodname_dependabot %} deve ter acesso a todos os arquivos de dependência de destino. Normalmente, atualizações da versão irão falhar se uma ou mais dependências forem inacessíveis. Para obter mais informações, consulte "[Sobre atualizações da versão de {% data variables.product.prodname_dependabot %}](/github/administering-a-repository/about-dependabot-version-updates)".

Por padrão, {% data variables.product.prodname_dependabot %} não pode atualizar as dependências que estão localizadas em repositórios privados ou registros de pacotes privados. Entretanto, se uma dependência estiver em um repositório privado de {% data variables.product.prodname_dotcom %} dentro da mesma organização que o projeto que usa essa dependência, você pode permitir que {% data variables.product.prodname_dependabot %} atualize a versão com sucesso, dando-lhe acesso à hospedagem do repositório.

Se seu código depende de pacotes em um registro privado, você pode permitir que {% data variables.product.prodname_dependabot %} atualize as versões dessas dependências configurando isso no nível do repositório. Você faz isso adicionando detalhes de autenticação ao arquivo _dependabot.yml_ do repositório. Para obter mais informações, consulte "[Opções de configuração para o arquivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)".

Para permitir que {% data variables.product.prodname_dependabot %} acesse um repositório privado de {% data variables.product.prodname_dotcom %}:

1. Acesse as configurações de segurança e análise da sua organização. Para obter mais informações, consulte "[Exibir as configurações de segurança e análise](#displaying-the-security-and-analysis-settings)".
1. Em "Acesso ao repositório privado de {% data variables.product.prodname_dependabot %}", clique em **Adicionar repositórios privados** ou **Adicionar repositórios internos e privados**. ![Botão para adicionar repositórios](/assets/images/help/organizations/dependabot-private-repository-access.png)
1. Comece a digitar o nome do repositório que você deseja permitir. ![Campo de pesquisa do repositório com menu suspenso filtrado](/assets/images/help/organizations/dependabot-private-repo-choose.png)
1. Clique no repositório que você deseja permitir.

1. Opcionalmente, para remover um repositório da lista, à direita do repositório, clique em {% octicon "x" aria-label="The X icon" %}. ![Botão "X" para remover um repositório](/assets/images/help/organizations/dependabot-private-repository-list.png)
{% endif %}

{% ifversion ghes or ghec %}

## Remover acesso a {% data variables.product.prodname_GH_advanced_security %} de repositórios individuais em uma organização

Você pode gerenciar o acesso a funcionalidades de {% data variables.product.prodname_GH_advanced_security %} para um repositório na aba "Configurações". Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)". No entanto, você também pode desabilitar funcionalidades de {% data variables.product.prodname_GH_advanced_security %} para um repositório na aba "Configurações" da organização.

1. Acesse as configurações de segurança e análise da sua organização. Para obter mais informações, consulte "[Exibir as configurações de segurança e análise](#displaying-the-security-and-analysis-settings)".
1. Para ver uma lista de todos os repositórios na sua organização com {% data variables.product.prodname_GH_advanced_security %} habilitados, desça até a seção "repositórios de {% data variables.product.prodname_GH_advanced_security %}". ![{% data variables.product.prodname_GH_advanced_security %} repositories section](/assets/images/help/organizations/settings-security-analysis-ghas-repos-list.png) A tabela lista o número de committers únicos para cada repositório. Este é o número de estações que você poderia liberar em sua licença, removendo acesso a {% data variables.product.prodname_GH_advanced_security %}. Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)".
1. Para remover acesso ao {% data variables.product.prodname_GH_advanced_security %} de um repositório e liberar estações usadas por todos os committers que são exclusivos do repositório, clique no {% octicon "x" aria-label="X symbol" %} adjacente.
1. Na caixa de diálogo de confirmação, clique em **Remover repositório** para remover acesso às funcionalidades de {% data variables.product.prodname_GH_advanced_security %}.

{% note %}

**Observação:** Se você remover o acesso a {% data variables.product.prodname_GH_advanced_security %} para um repositório, você deverá comunicar-se com a equipe de desenvolvimento afetada para que saibam que a alteração foi planejada. Isso garante que eles não perderão tempo corrigindo execuções falhas de varredura de código.

{% endnote %}

{% endif %}

## Leia mais

- "[Protegendo o seu repositório](/code-security/getting-started/securing-your-repository)"{% ifversion not fpt %}
- "[Sobre a verificação de segredo](/github/administering-a-repository/about-secret-scanning)"{% endif %}{% ifversion not ghae %}
- "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"{% endif %}{% ifversion fpt or ghec or ghes or ghae-issue-4864 %}
- "[Sobre a segurança da cadeia de suprimentos](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)"{% endif %}
