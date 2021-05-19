---
title: Configurar atualizações de segurança do Dependabot
intro: 'Você pode usar {% data variables.product.prodname_dependabot_security_updates %} ou pull requests manuais para atualizar facilmente dependências vulneráveis.'
shortTitle: Configurar atualizações de segurança do Dependabot
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
  - /github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/configuring-dependabot-security-updates
versions:
  free-pro-team: '*'
topics:
  - Security
---

<!--Marketing-LINK: From home page "Learn more about Dependabot".-->

### Sobre a configuração de {% data variables.product.prodname_dependabot_security_updates %}

É possível habilitar o {% data variables.product.prodname_dependabot_security_updates %} para qualquer repositório que use {% data variables.product.prodname_dependabot_alerts %} e o gráfico de dependências. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."

Você pode desativar as {% data variables.product.prodname_dependabot_security_updates %} em um repositório individual ou para todos os repositórios que pertencem à sua conta de usuário ou organização. Para obter mais informações, consulte "[Gerenciar o {% data variables.product.prodname_dependabot_security_updates %} para seus repositórios](#managing-dependabot-security-updates-for-your-repositories) abaixo".

{% data reusables.dependabot.dependabot-tos %}

### Repositórios compatíveis

O {% data variables.product.prodname_dotcom %} habilita automaticamente o {% data variables.product.prodname_dependabot_security_updates %} para cada repositório que atende a estes pré-requisitos.

{% note %}

**Observação**: Você pode habilitar manualmente {% data variables.product.prodname_dependabot_security_updates %}, mesmo que o repositório não atenda a alguns dos pré-requisitos abaixo. Por exemplo, você pode habilitar {% data variables.product.prodname_dependabot_security_updates %} em uma bifurcação, ou para um gerenciador de pacotes que não é suportado diretamente seguindo as instruções em "[Gerenciar {% data variables.product.prodname_dependabot_security_updates %} para seus repositórios](#managing-dependabot-security-updates-for-your-repositories). "

{% endnote %}

| Pré-requisito de habilitação automática                                                                                                                                                                                        | Mais informações                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| O repositório não é uma bifurcação                                                                                                                                                                                             | "[Sobre bifurcações](/github/collaborating-with-issues-and-pull-requests/about-forks)"                                                                                                         |
| Repositório não está arquivado                                                                                                                                                                                                 | "[Arquivar repositórios](/github/creating-cloning-and-archiving-repositories/archiving-repositories)"                                                                                          |
| O repositório é público ou o repositório é privado e você ativou a análise somente leitura por {% data variables.product.prodname_dotcom %}, dependência gráfico e alertas de vulnerabilidade nas configurações do repositório | "[Gerenciar configurações de uso de dados para seu repositório privado](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)". |
| O repositório contém o arquivo de manifesto de dependência de um ecossistema de pacote compatível com o {% data variables.product.prodname_dotcom %}                                                                           | "[Ecossistemas de pacotes compatíveis](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"                                               |
| {% data variables.product.prodname_dependabot_security_updates %} não estão desativadas para o repositório                                                                                                                   | "[Gerenciar {% data variables.product.prodname_dependabot_security_updates %} para o seu repositório](#managing-dependabot-security-updates-for-your-repositories)"                          |
| O repositório já não está utilizando uma integração para o gerenciamento de dependências                                                                                                                                       | "[Sobre integrações](/github/customizing-your-github-workflow/about-integrations)"                                                                                                             |

Se as atualizações de segurança não estiverem habilitadas para o seu repositório e você não souber o motivo, primeiro tente habilitá-las utilizando as instruções fornecidas nas seções de procedimento abaixo. Se, ainda assim, as atualizações de segurança não funcionarem, você poderá [entrar em contato com o suporte](https://support.github.com/contact).

### Gerenciar {% data variables.product.prodname_dependabot_security_updates %} para seus repositórios

Você pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_security_updates %} para um repositório individual (veja abaixo).

Você também pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_security_updates %} para todos os repositórios pertencentes à sua conta de usuário ou organização. Para mais informações consulte "[Gerenciar as configurações de segurança e análise da sua conta de usuário](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)" ou "[Gerenciar as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

O {% data variables.product.prodname_dependabot_security_updates %} exige configurações específicas do repositório. Para obter mais informações, consulte "[Repositórios compatíveis](#supported-repositories)".

#### Habilitar ou desabilitar {% data variables.product.prodname_dependabot_security_updates %} para um repositório individual

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
1. Em "Configurar recursos de segurança e análise" à direita de "atualizações de segurança de {% data variables.product.prodname_dependabot %}", clique em **Habilitar** ou **Desabilitar**. ![Seção "Configurar recursos de segurança e análise" com botão para habilitar {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/enable-dependabot-security-updates-button.png)

### Leia mais

- "[Sobre alertas para dependências vulneráveis](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"
- "[Gerenciar configurações de uso de dados para o seu repositório privado](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)"
- "[Ecossistemas de pacotes compatíveis](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"
