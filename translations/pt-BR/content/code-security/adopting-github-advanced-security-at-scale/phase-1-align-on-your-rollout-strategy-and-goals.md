---
title: 'Fase 1: Alinhar a estratégia de distribuição e as metas'
intro: 'Antes de habilitar o {% data variables.product.prodname_code_scanning %} e o {% data variables.product.prodname_secret_scanning %}, planeje a distribuição do GHAS em toda a empresa.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 1. Align on strategy
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b2677cf11c300ad657f9bd6b8862fb1f292c2fb7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108239'
---
{% note %}

Este artigo faz parte de uma série sobre a adoção do {% data variables.product.prodname_GH_advanced_security %} em escala. Para ver a introdução desta série, confira "[Introdução à adoção do {% data variables.product.prodname_GH_advanced_security %} em escala](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)".

{% endnote %}

### Definir metas claras para a distribuição na empresa

Crie uma base que guie a distribuição elaborando metas para o GHAS em sua empresa e comunique essas metas à equipe. Seus objetivos podem ser simples ou complexos, desde que sua equipe esteja alinhada. Se você precisar de ajuda com suas metas, o {% data variables.product.prodname_professional_services %} pode fornecer recomendações com base em nossa experiência com sua empresa e outros clientes.

Aqui estão alguns exemplos de alto nível de como seus objetivos para implementar GHAS podem parecer:

  - **Redução do número de vulnerabilidades**: isso pode ser em geral ou porque sua empresa foi impactada recentemente por uma vulnerabilidade significativa que você acredita que poderia ter sido evitada por uma ferramenta como o GHAS.
  - **Identificação dos repositórios de alto risco**: algumas empresas desejam ter apenas os repositórios de maior risco como foco, a fim de reduzir o risco por meio da correção de vulnerabilidades.
  -  **Aumento das taxas de correção:** isso pode ser feito incentivando a adoção das descobertas pelos desenvolvedores e garantindo que essas vulnerabilidades sejam corrigidas em tempo hábil, o que impede o acúmulo da dívida de segurança.  
  - **Atendimento dos requisitos de conformidade**: por exemplo, muitas empresas de saúde usam o GHAS para evitar a exposição de PHI (Informações de Saúde Pessoais).
  - **Prevenção do vazamento de segredos**: muitas empresas desejam evitar o vazamento de informações críticas, como chaves de software ou dados financeiros.

### Incluir os grupos de segurança e desenvolvimento na liderança da distribuição

As empresas que envolvem suas equipes de segurança e de desenvolvimento nas distribuições do GHAS normalmente têm mais sucesso do que aquelas que envolvem apenas o grupo de segurança, e que esperam para incluir as equipes de desenvolvimento após a conclusão do piloto. 

O GHAS adota uma abordagem centrada no desenvolvedor para a segurança do software, integrando-se perfeitamente ao fluxo de trabalho do desenvolvedor. É importante ter uma representação central do grupo de desenvolvimento no início do processo para diminuir o risco da distribuição e encorajar a adesão da empresa.

Envolver os grupos de desenvolvimento mais cedo, de preferência desde o momento da compra, ajuda as empresas a utilizar o GHAS para abordar questões de segurança no início do processo de desenvolvimento. Quando os dois grupos trabalham juntos, eles alcançam o alinhamento no início do processo, resolvem os silos, criam e fortalecem suas relações de trabalho e assumem mais responsabilidade pela distribuição. 


### Saiba mais sobre o GHAS

Certifique-se de que todos os stakeholders entendam os principais fatos a seguir sobre o funcionamento do GHAS a fim de definir expectativas realistas para a distribuição.

#### 1. O GHAS é um conjunto de ferramentas de segurança que exigem ação para a proteção do código

O GHAS é um conjunto de ferramentas que agrega valor quando configurado, mantido e usado em fluxos de trabalho diários em combinação com outras ferramentas. 

#### 2. O GHAS exigirá ajustes imediatos

Depois que o GHAS for configurado nos repositórios, será preciso configurá-lo para atender às necessidades de sua empresa. O exame de códigos, em particular, requer uma personalização adicional, como avaliação dos resultados iniciais e ajustes para exames futuros. Muitos clientes acham que os exames iniciais retornam resultados limitados ou irrelevantes até que o exame de códigos seja ajustado com base no modelo de ameaça do aplicativo.

#### 3. As ferramentas do GHAS são mais eficazes quando usadas em conjunto e integradas ao programa de segurança de aplicativos

O GHAS é mais eficaz quando todas as ferramentas são utilizadas em conjunto. A eficácia do programa de segurança de aplicativos é aprimorada integrando o GHAS a outras ferramentas e atividades, como testes de penetração e exames dinâmicos. Recomendamos sempre a utilização de múltiplas camadas de proteção.

#### 4. Consultas personalizadas do {% data variables.product.prodname_codeql %} são usadas por algumas empresas para personalizar e direcionar os resultados do exame 

O exame de códigos é fornecido pelo {% data variables.product.prodname_codeql %}, o mecanismo de análise de código mais poderoso do mundo. Para muitos de nossos clientes, o conjunto de consultas básico e as consultas adicionais disponíveis na comunidade são mais do que suficientes. No entanto, outras empresas podem precisar de consultas personalizadas do {% data variables.product.prodname_codeql %} para focar em diferentes resultados ou reduzir falsos positivos.

Se a sua empresa estiver interessada nas consultas personalizadas do {% data variables.product.prodname_codeql %}, primeiro conclua a implementação e a distribuição do GHAS. Assim, quando sua empresa estiver pronta, o {% data variables.product.prodname_professional_services %} poderá ajudar com seus requisitos e garantir que haja real necessidade de consultas personalizadas.  

#### 5. O {% data variables.product.prodname_codeql %} examina toda a base de código, não apenas as alterações feitas em uma solicitação de pull

Quando a verificação de código é executada a partir de um pull request, a digitalização incluirá a base de código completa e não apenas as alterações feitas no pull request. O exame de toda a base de código é uma etapa importante para garantir que a alteração tenha sido revisada em relação a todas as interações na base de código.

{% note %}

Para ver o próximo artigo desta série, confira "[Fase 2: Preparo para a habilitação em escala](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)".

{% endnote %}
