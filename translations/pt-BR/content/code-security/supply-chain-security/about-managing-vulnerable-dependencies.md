---
title: Sobre a gestão de dependências vulneráveis
intro: '{% data variables.product.prodname_dotcom %} ajuda você a evitar o uso de software de terceiros que contém vulnerabilidades conhecidas.'
redirect_from:
  - /github/managing-security-vulnerabilities/about-managing-vulnerable-dependencies
versions:
  free-pro-team: '*'
topics:
  - segurança
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Managing vulnerabilities in your project’s dependencies ".-->

{% data variables.product.prodname_dotcom %} fornece as ferramentas a seguir para remover e evitar dependências vulneráveis.

#### Gráfico de dependências
O gráfico de dependências é um resumo do manifesto e bloqueia arquivos armazenados em um repositório. Ele mostra os ecossistemas e pacotes dos quais a sua base de código depende (suas dependências) e os repositórios e pacotes que dependem do seu projeto (suas dependências). As informações no gráfico de dependências são usadas pela revisão das dependências e {% data variables.product.prodname_dependabot %}. Para obter mais informações, consulte "[Sobre o gráfico de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".

#### Revisão de dependência
Ao verificar as revisões de dependências nos pull requests, você pode evitar a introdução de vulnerabilidades de dependências na sua base de código. Se os pull requests adicionarem uma dependência vulnerável, ou alterarem a dependência a uma versão vulnerável, isso será destacado na revisão de dependências. Você pode alterar a dependência para uma versão alterada antes de realizar o merge do pull request. For more information, see "[About dependency review](/code-security/supply-chain-security/about-dependency-review)."

#### {% data variables.product.prodname_dependabot_alerts %}
{% data variables.product.prodname_dotcom %} pode criar {% data variables.product.prodname_dependabot_alerts %} quando detectar dependências vulneráveis no seu repositório. O alerta é exibido na aba Segurança do repositório. O alerta inclui um link para o arquivo afetado no projeto, e informações sobre uma versão corrigida. {% data variables.product.prodname_dotcom %} também notifica os mantenedores do repositório, de acordo com as suas preferências de notificação. Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"

#### {% data variables.product.prodname_dependabot_security_updates %}
Quando {% data variables.product.prodname_dotcom %} gera um alerta de {% data variables.product.prodname_dependabot %} para uma dependência vulnerável no seu repositório, {% data variables.product.prodname_dependabot %} pode tentar corrigir automaticamente para você. {% data variables.product.prodname_dependabot_security_updates %} são pull requests gerados automaticamente que atualizam uma dependência vulnerável para uma versão fixa. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."


#### {% data variables.product.prodname_dependabot_version_updates %}
Habilitar {% data variables.product.prodname_dependabot_version_updates %} remove o esforço de manter suas dependências. Com {% data variables.product.prodname_dependabot_version_updates %}, sempre que {% data variables.product.prodname_dotcom  %} identifica uma dependência desatualizada, ele cria um pull request para atualizar o manifesto para a última versão da dependência. Em contrapartida, {% data variables.product.prodname_dependabot_security_updates %} apenas cria pull requests para corrigir dependências vulneráveis. Para obter mais informações, consulte "[Sobre atualizações da versão do Dependabot](/github/administering-a-repository/about-dependabot-version-updates)".
