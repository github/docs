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

O gráfico de dependência {% ifversion dependency-submission-api %}{% endif %} automaticamente inclui informações sobre dependências que são explicitamente declaradas em seu ambiente. Ou seja, dependências que são especificadas em um manifesto ou um arquivo de bloqueio. O gráfico de dependências, geralmente, também inclui dependências transitivas, mesmo quando não são especificadas em um arquivo de travamento analisando as dependências das dependências em um arquivo de manifesto.

O gráfico de dependência não {% ifversion dependency-submission-api %}{% endif %} inclui dependências "soltas" automaticamente. Dependências "soltas" são arquivos individuais copiados de outra fonte e verificados no repositório diretamente ou dentro de um arquivo (como um arquivo ZIP ou JAR), em vez de ser referenciadas pelo manifesto ou arquivo de bloqueio do gerenciador de pacotes.

{% ifversion dependency-submission-api %}No entanto, você pode usar a API (beta) de envio de dependência para adicionar dependências ao gráfico de dependência de um projeto, mesmo que as dependências não sejam declaradas em um arquivo manifesto ou de bloqueio, como dependências resolvidas quando um projeto é construído. O gráfico de dependência exibirá as dependências submetidas agrupadas pelo ecossistema, mas separadamente das dependências analisadas dos arquivos manifestos ou de bloqueio. Para obter mais informações sobre a API de envio de dependência, consulte "[Usando a API de envio de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)"{% endif %}

**Verificação**: A dependência ausente para um componente que não está especificado no manifesto ou arquivo de bloqueio do repositório?

## O gráfico de dependências detecta dependências especificadas usando variáveis?

O gráfico de dependências analisa como são carregados para {% data variables.product.prodname_dotcom %}. O gráfico de dependência não tem acesso ao ambiente de construção do projeto. Portanto, ele não pode resolver variáveis usadas dentro dos manifestos. Se você usar variáveis dentro de um manifesto para especificar o nome, ou mais comumente a versão de uma dependência, essa dependência não {% ifversion dependency-submission-api %}{% endif %} serrá incluída automaticamente no gráfico de dependência.

{% ifversion dependency-submission-api %}No entanto, você pode usar a API (beta) de envio de dependência para adicionar dependências ao gráfico de dependência de um projeto, mesmo que as dependências só sejam resolvidas quando um projeto é construído. Para obter mais informações sobre a API de envio de dependência, consulte "[Usando a API de envio de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)"{% endif %}

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
