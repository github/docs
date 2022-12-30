---
title: Solução de problemas de detecção de dependências vulneráveis
intro: 'Se as informações sobre dependências relatadas por {% data variables.product.product_name %} não são o que você esperava, há uma série de pontos a considerar, e várias coisas que você pode verificar.'
shortTitle: Troubleshoot vulnerability detection
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
ms.openlocfilehash: 78ab86bf3314717a1f79b858496c4eb9fa323819
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106530'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.result-discrepancy %}

## Por que algumas dependências parecem estar faltando?

O {% data variables.product.prodname_dotcom %} gera e exibe dados de dependência de maneira diferente de outras ferramentas. Consequentemente, se você usou outra ferramenta para identificar dependências, quase certamente verá resultados diferentes. Considere o seguinte:

*   O {% data variables.product.prodname_advisory_database %} é uma das fontes de dados que o {% data variables.product.prodname_dotcom %} usa para identificar dependências vulneráveis {% ifversion GH-advisory-db-supports-malware %} e malware{% endif %}. Ele é um banco de dados coletado gratuito, que contém de avisos de segurança de ecossistemas de pacotes comuns no {% data variables.product.prodname_dotcom %}. Inclui tanto dados relatados diretamente para {% data variables.product.prodname_dotcom %} de {% data variables.product.prodname_security_advisories %} quanto os feeds oficiais e as fontes comunitárias. Estes dados são revisados e curados por {% data variables.product.prodname_dotcom %} para garantir que informações falsas ou não acionáveis não sejam compartilhadas com a comunidade de desenvolvimento. {% data reusables.security-advisory.link-browsing-advisory-db %}
*   O gráfico de dependências analisa todos os arquivos conhecidos de manifesto de pacote no repositório de um usuário. Por exemplo, para o npm, ele analisará o arquivo _package-lock.json_. Ele constrói um gráfico de todas as dependências do repositório e dependências públicas. Isso acontece quando você habilita o gráfico de dependências e quando alguém faz push para o branch-padrão, e inclui commits que fazem alterações em um formato de manifesto compatível. Para obter mais informações, confira "[Sobre o grafo de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)" e "[Solução de problemas do grafo de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)".
*   O {% data variables.product.prodname_dependabot %} examina qualquer push, para o branch padrão, que contém um arquivo de manifesto. Quando um novo aviso é adicionado, ele verifica todos os repositórios existentes e gera um alerta para cada repositório afetado. Os {% data variables.product.prodname_dependabot_alerts %} são agregados no nível do repositório, não é criado um alerta para cada aviso. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".
*   {% ifversion fpt or ghec or ghes %}As {% data variables.product.prodname_dependabot_security_updates %} são disparadas quando você recebe um alerta sobre uma dependência vulnerável no repositório. Sempre que possível, {% data variables.product.prodname_dependabot %} cria um pull request no repositório para atualizar a dependência vulnerável à versão mínima segura necessária para evitar a vulnerabilidade. Para obter mais informações, confira "[Sobre as {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)" e "[Solução de problemas de erros do {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)".
  
    {% endif %}O {% data variables.product.prodname_dependabot %} não verifica os repositórios com agendamento, mas somente quando algo muda. Por exemplo, uma verificação é disparada quando uma nova dependência é adicionada (o {% data variables.product.prodname_dotcom %} verifica isso em cada push) ou quando um novo aviso é adicionado ao banco de dados{% ifversion ghes or ghae %} e sincronizado com {% data variables.location.product_location %}{% endif %}. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#detection-of-insecure-dependencies)".

## Os {% data variables.product.prodname_dependabot_alerts %} só estão relacionados a dependências não seguras nos manifestos e arquivos de bloqueio?

Os {% data variables.product.prodname_dependabot_alerts %} aconselham você com relação a dependências que você deve atualizar, incluindo dependências transitivas, em que a versão pode ser determinada a partir de um manifesto ou de um arquivo de bloqueio. {% ifversion fpt or ghec or ghes %}As {% data variables.product.prodname_dependabot_security_updates %} sugerem apenas uma alteração em que o {% data variables.product.prodname_dependabot %} pode "corrigir" diretamente a dependência, em casos de:
* Dependências diretas, que são definidas explicitamente em um manifesto ou arquivo de bloqueio
* Dependências transitórias declaradas em um arquivo de bloqueio{% endif %}

**Verificação**: a vulnerabilidade não capturada é de um componente que não está especificado no manifesto ou no arquivo de bloqueio do repositório?

## Por que não recebo {% data variables.product.prodname_dependabot_alerts %} de alguns ecossistemas?

Há suporte para {% data variables.product.prodname_dependabot_alerts %} em um conjunto de ecossistemas em que podemos fornecer dados acionáveis e de alta qualidade. Os avisos coletados no {% data variables.product.prodname_advisory_database %}, o grafo de dependência, {% ifversion fpt or ghec %}{% data variables.product.prodname_dependabot %} as atualizações de segurança, {% endif %}e os {% data variables.product.prodname_dependabot_alerts %} são fornecidos para vários ecossistemas, incluindo o Maven do Java, o npm do JavaScript e o YARN, NuGet do .NET, o pip do Python, RubyGems do Ruby e o Composer do PHP. Nós continuaremos a adicionar suporte para mais ecossistemas ao longo do tempo. Para ter uma visão geral dos ecossistemas de pacote aos quais damos suporte, confira "[Sobre o grafo de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

Vale a pena observar que podem existir avisos de segurança para outros ecossistemas. As informações em um aviso de segurança não examinado são fornecidas pelos mantenedores de um determinado repositório. Esses dados não são coletados pelo {% data variables.product.prodname_dotcom %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

**Verificação**: a vulnerabilidade não capturada se aplica a um ecossistema sem suporte?

## Há quantos anos o {% data variables.product.prodname_dependabot %} gera alertas para vulnerabilidades conhecidas?

O {% data variables.product.prodname_advisory_database %} foi lançado em novembro de 2019 e preenchido inicialmente com avisos de riscos de segurança nos ecossistemas com suporte encontrados a partir de 2017. Ao adicionar CVEs ao banco de dados, priorizamos a curadoria de CVEs mais recentes e CVEs que afetam versões mais recentes do software.

Algumas informações sobre vulnerabilidades mais antigas estão disponíveis, especialmente quando estes CVEs estão particularmente disseminados. No entanto algumas vulnerabilidades antigas não estão incluídas no {% data variables.product.prodname_advisory_database %}. Se houver uma vulnerabilidade antiga específica que você precisar incluir no banco de dados, entre em contato com {% data variables.contact.contact_support %}. 

**Verificação**: a vulnerabilidade não capturada tem uma data de publicação anterior a 2017 no National Vulnerability Database?

## Por que o {% data variables.product.prodname_advisory_database %} usa um subconjunto de dados de vulnerabilidade publicada?

Algumas ferramentas de terceiros usam dados de CVE não descurados que não são verificados ou filtrados por um ser humano. Isto significa que os CVEs com erros de etiqueta ou de gravidade, ou outros problemas de qualidade, gerarão alertas mais frequentes, mais ruidosos e menos úteis.

Como o {% data variables.product.prodname_dependabot %} usa os dados coletados no {% data variables.product.prodname_advisory_database %}, o volume de alertas pode ser menor, mas os alertas recebidos serão precisos e relevantes.

{% ifversion fpt or ghec %}
## Cada dependência não segura gera um alerta separado?

Quando uma dependência tem várias vulnerabilidades, gera-se um alerta para cada vulnerabilidade no nível da consultoria mais manifesto.

![Captura de tela da aba de {% data variables.product.prodname_dependabot_alerts %} que mostra dois alertas do mesmo pacote com manifestos diferentes.](/assets/images/help/repository/dependabot-alerts-view.png)

O legado de {% data variables.product.prodname_dependabot_alerts %} foi agrupado em um único alerta agregado com todas as vulnerabilidades para a mesma dependência. Se você acessar um link para um alerta de legadode {% data variables.product.prodname_dependabot %}, você será redirecionado para a aba de {% data variables.product.prodname_dependabot_alerts %} filtrada para exibir vulnerabilidades para esse pacote e manifesto dependente.

![Captura de tela da aba {% data variables.product.prodname_dependabot_alerts %} que mostra os alertas filtrados da navegação até um alerta de legado de {% data variables.product.prodname_dependabot %}.](/assets/images/help/repository/legacy-dependabot-alerts-view.png)

A contagem de {% data variables.product.prodname_dependabot_alerts %} em {% data variables.product.prodname_dotcom %} mostra um total para o número de alertas, que é o número de vulnerabilidades, não o número de dependências.

**Verificação**: se houver uma discrepância nos totais que você está vendo, verifique se não está comparando números de alertas com números de dependências. Também verifique se você está visualizando todos os alertas e não um subconjunto de alertas filtrados.
{% endif %}

{% ifversion fpt or ghec or ghes %}
## O Dependabot pode ignorar dependências específicas?

Você pode configurar o {% data variables.product.prodname_dependabot %} para ignorar dependências específicas no arquivo de configuração, o que impedirá atualizações de segurança e de versão para essas dependências. Se você quiser usar apenas atualizações de segurança, substitua o comportamento padrão usando um arquivo de configuração. Para obter mais informações, confira "[Como substituir o comportamento padrão com um arquivo de configuração](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates#overriding-the-default-behavior-with-a-configuration-file)" para impedir que as atualizações de versão sejam ativadas. Para obter informações de como ignorar dependências, confira "[`ignore`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore)". {% endif %}

## Leitura adicional

- "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"
- "[Como ver e atualizar {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
- "[Como gerenciar as configurações de segurança e de análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Solução de problemas do grafo de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)"{% ifversion fpt or ghec or ghes %}
- "[Solução de problemas de erros do {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"{% endif %}
