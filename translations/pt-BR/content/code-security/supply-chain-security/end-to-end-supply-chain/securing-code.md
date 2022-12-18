---
title: Práticas recomendadas para proteger o código na sua cadeia de suprimentos
shortTitle: Securing code
allowTitleToDifferFromFilename: true
intro: Orientação sobre como proteger o centro de sua cadeia de suprimentos — o código que você escreve e o código de que você depende.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Dependabot
  - Security updates
  - Vulnerabilities
  - Advanced Security
  - Secret scanning
ms.openlocfilehash: 9fa10b05cfeadb4e2cde37829e703fc527571c67
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184001'
---
## Sobre este guia

Este guia descreve mudanças de maior impacto que você pode fazer para melhorar a segurança do seu código. Cada seção descreve uma alteração que você pode fazer em seus processos para melhorar a segurança. As mudanças de maior impacto estão listadas primeiro.

## Qual o risco?

Os principais riscos no processo de desenvolvimento incluem:

- Usar dependências com vulnerabilidades de segurança que um invasor pode explorar.
- Vazar as credenciais de autenticação ou um token que um invsor poderia usar para acessar seus recursos.
- Introduzir uma vulnerabilidade ao seu próprio código que um invasor poderia explorar.

Esses riscos abrem seus recursos e projetos para serem atacados, aléme de serem enviados diretamente para qualquer um que utilize um pacote que você criar. As seções a seguir explicam como você pode proteger você mesmo e seus usuários desses riscos.

## Crie um programa de gerenciamento de vulnerabilidades para dependências

Você pode proteger o código do qual você depende criando um programa de gerenciamento de vulnerabilidades para dependências. Em alto nível, isto deve incluir processos para garantir que você:

1. Crie um inventário de suas dependências.

1. Saiba quando há uma vulnerabilidade de segurança em uma dependência.
{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
1. Impor revisões de dependência em suas solicitações de pull. {% endif %}

1. Avalie o impacto dessa vulnerabilidade no seu código e decida qual ação tomar.

### Geração de inventário automática

Como primeiro passo, você deverá fazer um inventário completo das suas dependências. O gráfico de dependências para um repositório mostra dependências para ecossistemas compatíveis. Se você verificar suas dependências, ou usar outros ecossistemas, você deverá completar isto com dados de ferramentas de terceiros ou listando dependências manualmente. Para obter mais informações, confira "[Sobre o grafo de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)".

### Detecção automática de vulnerabilidades em dependências

{% data variables.product.prodname_dependabot %} pode ajudar você a monitorar as suas dependências e notificar você quando contiverem uma vulnerabilidade conhecida. {% ifversion fpt or ghec or ghes %}Você pode até habilitar o {% data variables.product.prodname_dependabot %} para gerar automaticamente solicitações de pull que atualizam a dependência para uma versão segura.{% endif %} Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)"{% ifversion fpt or ghec or ghes %} e "[Sobre as atualizações de segurança do Dependabot](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)"{% endif %}.
{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
### Detecção automática de vulnerabilidades em solicitações de pull

O {% data variables.product.prodname_dependency_review_action %} aplica uma revisão de dependência em suas solicitações de pull, facilitando que você veja se uma solicitação de pull introduzirá uma versão vulnerável de uma dependência a seu repositório. Quando uma vulnerabilidade é detectada, o {% data variables.product.prodname_dependency_review_action %} pode bloquear a mesclagem da solicitação de pull. Para obter mais informações, confira "[Sobre a imposição da revisão de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#dependency-review-enforcement)".{% endif %} 
    

### Avaliação da exposição ao risco de uma dependência vulnerável

Ao descobrir que você está usando uma dependência vulnerável, por exemplo, uma biblioteca ou uma estrutura, você deve avaliar o nível de exposição do seu projeto e determinar que ação deve tomar. Normalmente, as vulnerabilidades são relatadas com uma pontuação de gravidade para mostrar a gravidade do seu impacto. A pontuação de gravidade é um guia útil, mas não pode dizer o impacto total da vulnerabilidade no seu código.

Para avaliar o impacto de uma vulnerabilidade no seu código, você também precisa considerar como usar a biblioteca e determinar o nível de risco que isso realmente representa para o seu sistema. Talvez a vulnerabilidade seja parte de um recurso que você não usa, e você pode atualizar a biblioteca afetada e continuar com o seu ciclo normal da versão. Ou talvez seu código esteja mal exposto a riscos e você precisa atualizar a biblioteca afetada e enviar uma construção atualizada imediatamente. Essa decisão depende de como você está usando a biblioteca em seu sistema, e é uma decisão que só você tem o conhecimento para tomar.

## Proteja seus tokens de comunicação

O código geralmente precisa se comunicar com outros sistemas por meio de uma rede e exige segredos (como uma senha, ou uma chave de API) para efetuar a autenticação. Seu sistema precisa de acesso a esses segredos para ser executado, mas a prática recomendada é não incluí-los no seu código-fonte. Isso é especialmente importante para repositórios aos quais muitas pessoas podem ter acesso{% ifversion not ghae %} e crítico para repositórios públicos{% endif %}.

### Detecção automática de segredos confirmados em um repositório

{% note %}

**Observação:** {% data reusables.gated-features.secret-scanning-partner %}

{% endnote %}

{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %} {% data variables.product.prodname_dotcom %} parceiros com muitos provedores para detectar automaticamente quando os segredos são confirmados ou armazenados em seus repositórios públicos e notificarão o provedor para que eles possam tomar as medidas apropriadas para garantir que sua conta permaneça segura. Para obter mais informações, confira "[Sobre a {% data variables.product.prodname_secret_scanning %} para padrões de parceiros](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns)".
{% endif %}

{% ifversion fpt %} {% data reusables.secret-scanning.fpt-GHAS-scans %} {% elsif ghec %} Se a sua organização usar {% data variables.product.prodname_GH_advanced_security %}, você poderá habilitar {% data variables.product.prodname_secret_scanning_GHAS %} em qualquer repositório pertencente à organização. Você também pode definir padrões personalizados para detectar segredos adicionais no repositório, organização ou empresa. Para obter mais informações, confira "[Sobre a {% data variables.product.prodname_secret_scanning_GHAS %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advacned-security)".
{% else %}Você pode configurar {% data variables.product.prodname_secret_scanning %} para verificar se há segredos emitidos por muitos provedores de serviço e para notificar você quando algum for detectado. Você também pode definir padrões personalizados para detectar segredos adicionais no repositório, organização ou empresa. Para obter mais informações, confira "[Sobre digitalização de segredos](/code-security/secret-scanning/about-secret-scanning)" e "[Padrões de digitalização de segredos](/code-security/secret-scanning/secret-scanning-patterns)".
{% endif %}

### Armazenamento seguro de segredos que você usa em {% data variables.product.product_name %}

{% ifversion fpt or ghec %} Além do código, você provavelmente precisa usar segredos em outros locais. Por exemplo, para permitir que os fluxos de trabalho do {% data variables.product.prodname_actions %}, o {% data variables.product.prodname_dependabot %} ou o ambiente de desenvolvimento dos {% data variables.product.prodname_github_codespaces %} se comunique com outros sistemas. Para obter mais informações sobre como armazenar e usar segredos com segurança, confira "[Segredos criptografados em ações](/actions/security-guides/encrypted-secrets)", "[Gerenciar segredos criptografados para Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)" e "[Gerenciar segredos criptografados para seus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)".
{% endif %}

{% ifversion ghes or ghae %} Além de usar segredos no código, provavelmente você também precisa usá-los em outros lugares. Por exemplo, para permitir que os fluxos de trabalhos{% ifversion ghes %} do {% data variables.product.prodname_actions %} ou o {% data variables.product.prodname_dependabot %}{% endif %} se comuniquem com outros sistemas. Para obter mais informações sobre como armazenar e usar segredos com segurança, confira "[Segredos criptografados no Actions](/actions/security-guides/encrypted-secrets){% ifversion ghes %}" e "[Como gerenciar segredos criptografados do Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)".{% else %}".{% endif %} {% endif %}

## Mantenha padrões de codificação vulneráveis fora do seu repositório

{% note %}

**Observação:** {% data reusables.gated-features.code-scanning %}

{% endnote %}

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Criar um processo de revisão de pull request

Você pode melhorar a qualidade e a segurança do seu código garantindo que todos os pull requests sejam revisados e testados antes do merge. {% data variables.product.prodname_dotcom %} tem muitas funcionalidades que você pode usar para controlar a revisão e o processo de merge. Para começar, confira "[Sobre branches protegidos](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)".

### Digitalize o seu código para padrões vulneráveis

Os padrões de código inseguro são muitas vezes difíceis para os revisores identificarem sem ajuda. Além de digitalizar seu código para encontrar segredos, você pode verificar se há padrões associados a vulnerabilidades de segurança. Por exemplo, uma função que não é segura na memória, ou falhar ao escapar de entrada do usuário que poderia levar a uma vulnerabilidade de injeção. {% data variables.product.prodname_dotcom %} oferece várias maneiras diferentes de abordar como e quando você digitaliza o seu código. Para começar, confira "[Sobre a varredura de código](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)".

## Próximas etapas

- "[Como proteger sua cadeia de fornecedores de ponta a ponta](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)"

- "[Melhores práticas para proteger contas](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)"

- "[Melhores práticas para proteger seu sistema de build](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)"
