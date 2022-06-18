---
title: Solução de problemas para o gráfico de dependências
intro: 'Se as informações de dependências relatadas pelo gráfico de dependências não é o que você esperava, há uma série de pontos a considerar e várias coisas que você pode verificar.'
shortTitle: Solucionar problemas do gráfico de dependências
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Troubleshooting
  - Errors
  - Dependencies
  - Vulnerabilities
  - Dependency graph
  - CVEs
  - Repositories
---

{% data reusables.dependabot.result-discrepancy %}

## O gráfico de dependências só encontra dependências nos manifestos e nos arquivos de bloquei?

The dependency graph {% ifversion dependency-submission-api %}automatically{% endif %} includes information on dependencies that are explicitly declared in your environment. Ou seja, dependências que são especificadas em um manifesto ou um arquivo de bloqueio. O gráfico de dependências, geralmente, também inclui dependências transitivas, mesmo quando não são especificadas em um arquivo de travamento analisando as dependências das dependências em um arquivo de manifesto.

The dependency graph doesn't {% ifversion dependency-submission-api %}automatically{% endif %} include "loose" dependencies. Dependências "soltas" são arquivos individuais copiados de outra fonte e verificados no repositório diretamente ou dentro de um arquivo (como um arquivo ZIP ou JAR), em vez de ser referenciadas pelo manifesto ou arquivo de bloqueio do gerenciador de pacotes.

{% ifversion dependency-submission-api %}However, you can use the Dependency submission API (beta) to add dependencies to a project's dependency graph, even if the dependencies are not declared in a manifest or lock file, such as dependencies resolved when a project is built. The dependency graph will display the submitted dependencies grouped by ecosystem, but separately from the dependencies parsed from manifest or lock files. For more information on the Dependency submission API, see "[Using the Dependency submission API](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)."{% endif %}

**Verificação**: A dependência ausente para um componente que não está especificado no manifesto ou arquivo de bloqueio do repositório?

## O gráfico de dependências detecta dependências especificadas usando variáveis?

O gráfico de dependências analisa como são carregados para {% data variables.product.prodname_dotcom %}. O gráfico de dependência não tem acesso ao ambiente de construção do projeto. Portanto, ele não pode resolver variáveis usadas dentro dos manifestos. If you use variables within a manifest to specify the name, or more commonly the version of a dependency, then that dependency will not {% ifversion dependency-submission-api %}automatically{% endif %} be included in the dependency graph.

{% ifversion dependency-submission-api %}However, you can use the Dependency submission API (beta) to add dependencies to a project's dependency graph, even if the dependencies are only resolved when a project is built. For more information on the Dependency submission API, see "[Using the Dependency submission API](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)."{% endif %}

**Verifique**: A dependência ausente é declarada no manifesto usando uma variável para seu nome ou versão?

## Existem limites que afetam os dados do gráfico de dependências?

Sim, o gráfico de dependências tem duas categorias de limites:

1. **Limites de processamento**

    Eles afetam o gráfico de dependências exibido dentro de {% data variables.product.prodname_dotcom %} e também impedem que sejam criados {% data variables.product.prodname_dependabot_alerts %}.

    Manifestos com tamanho superior a 0.5 MB são processados apenas para contas corporativas. Para outras contas, manifestos acima de 0,5 MB são ignorados e não criarão {% data variables.product.prodname_dependabot_alerts %}.

    Por padrão, o {% data variables.product.prodname_dotcom %} não processará mais de 20 manifestos por repositório. {% data variables.product.prodname_dependabot_alerts %} não foi criado para manifestos acima deste limite. Se você precisar aumentar o limite, entre em contato com {% data variables.contact.contact_support %}.

2. **Limites de visualização**

    Eles afetam o que é exibido no gráfico de dependências dentro de {% data variables.product.prodname_dotcom %}. No entanto, eles não afetam {% data variables.product.prodname_dependabot_alerts %} que foram criados.

    A exibição de dependências do gráfico de dependências em um repositório só exibe 100 manifestos. De modo geral, isso é adequado, já que é significativamente maior do que o limite de processamento descrito acima. Em situações em que o limite de processamento é superior a 100, os {% data variables.product.prodname_dependabot_alerts %} são criados para quaisquer manifestos que não são mostrados dentro de {% data variables.product.prodname_dotcom %}.

**Verifique**: A dependência que falta está em um arquivo de manifesto superior a 0,5 MB ou em um repositório com um grande número de manifestos?

## Leia mais

- "[Sobre o gráfico de dependências](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)"
- "[Gerenciar as configurações de segurança e análise para o seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Solução de problemas na detecção de dependências vulneráveis](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)"{% ifversion fpt or ghec or ghes > 3.2 %}
- "[Solucionar problemas de {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"{% endif %}
