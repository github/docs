---
title: Configurar atualizações de segurança do Dependabot do GitHub
intro: 'Você pode usar {% data variables.product.prodname_dependabot_security_updates %} ou pull requests manuais para atualizar facilmente dependências vulneráveis.'
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
versions:
  free-pro-team: '*'
---

### Sobre o {% data variables.product.prodname_dependabot_security_updates %}

O {% data variables.product.prodname_dependabot_short %} monitora as consultorias de segurança, como o {% data variables.product.prodname_advisory_database %} e o [WhiteSource](https://www.whitesourcesoftware.com/vulnerability-database) e aciona automaticamente um pull request quando detecta uma nova dependência vulnerável no gráfico de dependências dos repositórios. Para obter mais informações sobre o {% data variables.product.prodname_advisory_database %}, consulte "[Sobre o {% data variables.product.prodname_advisory_database %}](/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database#about-the-github-advisory-database)".

{% data reusables.dependabot.upgrade-dependency-to-minimum-secure-version %}

{% data variables.product.prodname_dependabot_short %} inclui um link para um pull request no alerta para a dependência vulnerável. Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" e "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".

Cada atualização de segurança contém tudo o que você precisa para revisar e mesclar, de forma rápida e segura, uma correção proposta no seu projeto. Isto inclui informações sobre a vulnerabilidade como, por exemplo, notas de lançamento, entradas de registros de mudanças e detalhes do commit. Detalhes de quais vulnerabilidades são resolvidas por um pull request de qualquer pessoa que não tem acesso aos alertas do {% data variables.product.prodname_dependabot_short %} para o repositório.

Ao mesclar um pull request que contém uma atualização de segurança, o alerta correspondente será marcado como resolvido no seu repositório.

{% note %}

**Observação**
{% data variables.product.prodname_dependabot_security_updates %} resolve apenas vulnerabilidades de segurança nas dependências rastreadas pelo seu gráfico de dependências. As atualizações de segurança não são criadas para resolver vulnerabilidades em registros privados ou pacotes hospedados em repositórios privados. No entanto, as dependências indiretas ou transitórias são incluídas se forem definidas explicitamente em um arquivo bloqueado ou similar. Para obter mais informações, consulte "[Sobre o gráfico de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)". Além disso, é importante destacar que o {% data variables.product.prodname_dependabot_security_updates %} cria automaticamente pull requests com correções propostas para os arquivos bloqueados, para as dependências identificadas como vulneráveis.

{% endnote %}

É possível habilitar o {% data variables.product.prodname_dependabot_security_updates %} para qualquer repositório que use alertas de {% data variables.product.prodname_dependabot_short %} e o gráfico de dependências. Você pode desativar as {% data variables.product.prodname_dependabot_security_updates %} em um repositório individual ou para todos os repositórios que pertencem à sua conta de usuário ou organização. Para obter mais informações, consulte "[Gerenciar o {% data variables.product.prodname_dependabot_security_updates %} para seus repositórios](#managing-github-dependabot-security-updates-for-your-repositories) abaixo".

{% data reusables.dependabot.dependabot-tos %}

### Repositórios compatíveis

O {% data variables.product.prodname_dotcom %} habilita automaticamente o {% data variables.product.prodname_dependabot_security_updates %} para cada repositório que atende a estes pré-requisitos.

{% note %}

**Observação**: Você pode habilitar manualmente {% data variables.product.prodname_dependabot_security_updates %}, mesmo que o repositório não atenda a alguns dos pré-requisitos abaixo. Por exemplo, você pode habilitar {% data variables.product.prodname_dependabot_security_updates %} em uma bifurcação, ou para um gerenciador de pacotes que não é suportado diretamente seguindo as instruções em "[Gerenciar {% data variables.product.prodname_dependabot_security_updates %} para seus repositórios](#managing-github-dependabot-security-updates-for-your-repositories). "

{% endnote %}

| Pré-requisito de habilitação automática                                                                                                                                                                                        | Mais informações                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| O repositório não é uma bifurcação                                                                                                                                                                                             | "[Sobre bifurcações](/github/collaborating-with-issues-and-pull-requests/about-forks)"                                                                                                         |
| Repositório não está arquivado                                                                                                                                                                                                 | "[Arquivar repositórios](/github/creating-cloning-and-archiving-repositories/archiving-repositories)"                                                                                          |
| O repositório é público ou o repositório é privado e você ativou a análise somente leitura por {% data variables.product.prodname_dotcom %}, dependência gráfico e alertas de vulnerabilidade nas configurações do repositório | "[Gerenciar configurações de uso de dados para seu repositório privado](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)". |
| O repositório contém o arquivo de manifesto de dependência de um ecossistema de pacote compatível com o {% data variables.product.prodname_dotcom %}                                                                           | "[Ecossistemas de pacotes compatíveis](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"                                               |
| {% data variables.product.prodname_dependabot_security_updates %} não estão desativadas para o repositório                                                                                                                   | "[Gerenciar {% data variables.product.prodname_dependabot_security_updates %} para o seu repositório](#managing-github-dependabot-security-updates-for-your-repositories)"                   |
| O repositório já não está utilizando uma integração para o gerenciamento de dependências                                                                                                                                       | "[Sobre integrações](/github/customizing-your-github-workflow/about-integrations)"                                                                                                             |

Se as atualizações de segurança não estiverem habilitadas para o seu repositório e você não souber o motivo, primeiro tente habilitá-las utilizando as instruções fornecidas nas seções de procedimento abaixo. Se, ainda assim, as atualizações de segurança não funcionarem, você poderá [entrar em contato com o suporte](https://support.github.com/contact).

### Sobre pontuações de compatibilidade

O {% data variables.product.prodname_dependabot_security_updates %} também inclui uma pontuação de compatibilidade para que você saiba se atualizar uma vulnerabilidade pode causar alterações significativas no seu projeto. Analisamos os testes de CI de execução anteriores a partir de repositórios públicos onde geramos uma determinada atualização de segurança para saber se a atualização faz com que ocorra uma falha nos testes. Uma pontuação de compatibilidade da atualização é a porcentagem de execuções de CI que foram aprovadas durante a atualização entre versões relevantes da dependência.

### Gerenciar {% data variables.product.prodname_dependabot_security_updates %} para seus repositórios

Você pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_security_updates %} em um repositório individual.

Você também pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_security_updates %} para todos os repositórios pertencentes à sua conta de usuário ou organização. Para mais informações consulte "[Gerenciar as configurações de segurança e análise da sua conta de usuário](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)" ou "[Gerenciar as configurações de segurança e análise da sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)".

O {% data variables.product.prodname_dependabot_security_updates %} exige configurações específicas do repositório. Para obter mais informações, consulte "[Repositórios compatíveis](#supported-repositories)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Acima da lista de alertas, use o menu suspenso e selecione ou desmarque as atualizações de segurança do **{% data variables.product.prodname_dependabot_short %}**. ![Menu suspenso com a opção de ativar {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/enable-dependabot-security-updates-drop-down.png)

### Leia mais

- "[Sobre alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"
- "[Gerenciar configurações de uso de dados para o seu repositório privado](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)"
- "[Ecossistemas de pacotes compatíveis](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"
