---
title: Solução de problemas de detecção de dependências vulneráveis
intro: 'Se as informações sobre dependências relatadas por {% data variables.product.product_name %} não são o que você esperava, há uma série de pontos a considerar, e várias coisas que você pode verificar.'
shortTitle: Solução de problemas de vulnerabilidade
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies
  - /code-security/supply-chain-security/troubleshooting-the-detection-of-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-the-detection-of-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Troubleshooting
  - Errors
  - Security updates
  - Dependencies
  - Vulnerabilities
  - CVEs
  - Repositories
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.result-discrepancy %}

## Por que algumas dependências parecem estar faltando?

O {% data variables.product.prodname_dotcom %} gera e exibe dados de dependência de maneira diferente de outras ferramentas. Consequentemente, se você usou outra ferramenta para identificar dependências, quase certamente verá resultados diferentes. Considere o seguinte:

*   {% data variables.product.prodname_advisory_database %} is one of the data sources that {% data variables.product.prodname_dotcom %} uses to identify vulnerable dependencies{% ifversion GH-advisory-db-supports-malware %} and malware{% endif %}. It's a free, curated database of security advisories for common package ecosystems on {% data variables.product.prodname_dotcom %}. Inclui tanto dados relatados diretamente para {% data variables.product.prodname_dotcom %} de {% data variables.product.prodname_security_advisories %} quanto os feeds oficiais e as fontes comunitárias. Estes dados são revisados e curados por {% data variables.product.prodname_dotcom %} para garantir que informações falsas ou não acionáveis não sejam compartilhadas com a comunidade de desenvolvimento. {% data reusables.security-advisory.link-browsing-advisory-db %}
*   O gráfico de dependências analisa todos os arquivos conhecidos de manifesto de pacote no repositório de um usuário. Por exemplo, para o npm, ele irá analisar o arquivo _package-lock.json_. Ele constrói um gráfico de todas as dependências do repositório e dependências públicas. Isso acontece quando você habilita o gráfico de dependências e quando alguém faz push para o branch-padrão, e inclui commits que fazem alterações em um formato de manifesto compatível. Para obter mais informações, consulte "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)" e "[Solucionando problemas no gráfico de dependências](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)".
*   {% data variables.product.prodname_dependabot %} verifica qualquer push, para o branch-padrão, que contém um arquivo de manifesto. When a new advisory is added, it scans all existing repositories and generates an alert for each repository that is affected. {% data variables.product.prodname_dependabot_alerts %} are aggregated at the repository level, rather than creating one alert per advisory. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".
*   {% ifversion fpt or ghec or ghes > 3.2 %}{% data variables.product.prodname_dependabot_security_updates %} são acionados quando você recebe um alerta sobre uma dependência vulnerável no repositório. Sempre que possível, {% data variables.product.prodname_dependabot %} cria um pull request no repositório para atualizar a dependência vulnerável à versão mínima segura necessária para evitar a vulnerabilidade. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)" e "[Solução de problemas de {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)".

    {% endif %}{% data variables.product.prodname_dependabot %} doesn't scan repositories on a schedule, but rather when something changes. For example, a scan is triggered when a new dependency is added ({% data variables.product.prodname_dotcom %} checks for this on every push), or when a new advisory is added to the database{% ifversion ghes or ghae %} and synchronized to {% data variables.product.product_location %}{% endif %}. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#detection-of-insecure-dependencies)."

## Do {% data variables.product.prodname_dependabot_alerts %} only relate to insecure dependencies in manifests and lockfiles?

Os {% data variables.product.prodname_dependabot_alerts %} aconselham você com relação a dependências que você deve atualizar, incluindo dependências transitivas, em que a versão pode ser determinada a partir de um manifesto ou de um arquivo de bloqueio. {% ifversion fpt or ghec or ghes > 3.2 %}{% data variables.product.prodname_dependabot_security_updates %} sugere apenas uma mudança em que {% data variables.product.prodname_dependabot %} pode "corrigir" diretamente a dependência, ou seja, quando são:
* Dependências diretas, que são definidas explicitamente em um manifesto ou arquivo de bloqueio
* Dependências transitórias declaradas em um arquivo de bloqueio{% endif %}

**Verifique**: A vulnerabilidade não detectada para um componente não especificado no manifesto ou no arquivo de bloqueio do repositório?

## Why don't I get {% data variables.product.prodname_dependabot_alerts %} for some ecosystems?

{% data variables.product.prodname_dependabot_alerts %} are supported for a set of ecosystems where we can provide high-quality, actionable data. Curated advisories in the {% data variables.product.prodname_advisory_database %}, the dependency graph, {% ifversion fpt or ghec %}{% data variables.product.prodname_dependabot %} security updates, {% endif %}and  {% data variables.product.prodname_dependabot_alerts %} are provided for several ecosystems, including Java’s Maven, JavaScript’s npm and Yarn, .NET’s NuGet, Python’s pip, Ruby's RubyGems, and PHP’s Composer. Nós continuaremos a adicionar suporte para mais ecossistemas ao longo do tempo. Para uma visão geral dos ecossistemas de pacotes suportados por nós, consulte "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

It's worth noting that security advisories may exist for other ecosystems. The information in an unreviewed security advisory is provided by the maintainers of a particular repository. This data is not curated by {% data variables.product.prodname_dotcom %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

**Verificar**: A vulnerabilidade não capturada se aplica a um ecossistema não suportado?

## O {% data variables.product.prodname_dependabot %} gera alertas de vulnerabilidades que são conhecidas há muitos anos?

The {% data variables.product.prodname_advisory_database %} was launched in November 2019, and initially back-filled to include advisories for security risks in the supported ecosystems, starting from 2017. Ao adicionar CVEs ao banco de dados, priorizamos a curadoria de CVEs mais recentes e CVEs que afetam versões mais recentes do software.

Algumas informações sobre vulnerabilidades mais antigas estão disponíveis, especialmente quando estes CVEs estão particularmente disseminados. No entanto algumas vulnerabilidades antigas não estão incluídas no {% data variables.product.prodname_advisory_database %}. Se houver uma vulnerabilidade antiga específica que você precisar incluir no banco de dados, entre em contato com {% data variables.contact.contact_support %}.

**Verifique**: A vulnerabilidade não detectada tem uma data de publicação anterior a 2017 no Banco de Dados Nacional de Vulnerabilidade?

## Por que o {% data variables.product.prodname_advisory_database %} usa um subconjunto de dados de vulnerabilidade publicada?

Algumas ferramentas de terceiros usam dados de CVE não descurados que não são verificados ou filtrados por um ser humano. Isto significa que os CVEs com erros de etiqueta ou de gravidade, ou outros problemas de qualidade, gerarão alertas mais frequentes, mais ruidosos e menos úteis.

Uma vez que {% data variables.product.prodname_dependabot %} usa dados curados em {% data variables.product.prodname_advisory_database %}, o volume de alertas pode ser menor, mas os alertas que você recebe serão precisos e relevantes.

{% ifversion fpt or ghec %}
## Does each insecure dependency generate a separate alert?

Quando uma dependência tem várias vulnerabilidades, gera-se um alerta para cada vulnerabilidade no nível da consultoria mais manifesto.

![Captura de tela da aba de {% data variables.product.prodname_dependabot_alerts %} que mostra dois alertas do mesmo pacote com manifestos diferentes.](/assets/images/help/repository/dependabot-alerts-view.png)

O legado de {% data variables.product.prodname_dependabot_alerts %} foi agrupado em um único alerta agregado com todas as vulnerabilidades para a mesma dependência. Se você acessar um link para um alerta de legadode {% data variables.product.prodname_dependabot %}, você será redirecionado para a aba de {% data variables.product.prodname_dependabot_alerts %} filtrada para exibir vulnerabilidades para esse pacote e manifesto dependente.

![Captura de tela da aba {% data variables.product.prodname_dependabot_alerts %} que mostra os alertas filtrados da navegação até um alerta de legado de {% data variables.product.prodname_dependabot %}.](/assets/images/help/repository/legacy-dependabot-alerts-view.png)

A contagem de {% data variables.product.prodname_dependabot_alerts %} em {% data variables.product.prodname_dotcom %} mostra um total para o número de alertas, que é o número de vulnerabilidades, não o número de dependências.

**Verifique**: Se houver discrepância no total que você está vendo, verifique se você não está comparando números de alerta com números de dependência. Também verifique se você está visualizando todos os alertas e não um subconjunto de alertas filtrados.
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## Depende pode ignorar dependências específicas?

Você pode configurar {% data variables.product.prodname_dependabot %} para ignorar dependências específicas no arquivo de configuração, o que irá impedir a segurança e atualizações de versão para essas dependências. Se você deseja usar apenas atualizações de segurança, você deverá substituir o comportamento padrão por um arquivo de configuração. Para obter mais informações, consulte "[Substituindo o comportamento padrão com um arquivo de configuração](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates#overriding-the-default-behavior-with-a-configuration-file)" para evitar que as atualizações da versão sejam ativadas. Para obter informações sobre como ignorar as dependências, consulte "[`ignorar`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore)"
{% endif %}

## Leia mais

- "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"
- "[Viewing and updatng {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
- "[Gerenciar as configurações de segurança e análise para o seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Solucionando problemas do gráfico de dependências](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)"{% ifversion fpt or ghec or ghes > 3.2 %}
- "[Solucionar problemas de {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"{% endif %}
