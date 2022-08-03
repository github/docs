---
title: 'Fase 1: Alinhe sua estratégia e objetivos'
intro: 'Antes de habilitar {% data variables.product.prodname_code_scanning %} e {% data variables.product.prodname_secret_scanning %}, planeje como o GHAS deve ser implantado em toda a sua empresa.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 1. Alinhar a estratégia
miniTocMaxHeadingLevel: 3
---

{% note %}

Este artigo faz parte de uma série sobre adoção de {% data variables.product.prodname_GH_advanced_security %} em escala. Para introdução a essa série, consulte "[Introdução à adoção de {% data variables.product.prodname_GH_advanced_security %} em escala](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)".

{% endnote %}

### Defina metas claras para a implantação da sua empresa

Para criar uma base para a direção da implantação de sua empresa, descreva as metas para o GHAS na sua empresa e comunique essas metas à sua equipe. Seus objetivos podem ser simples ou complexos, contanto que sua equipe esteja alinhada. Se você precisar de ajuda com as suas metas, {% data variables.product.prodname_professional_services %} pode fornecer recomendações com base na nossa experiência com sua empresa ou com outros clientes.

Aqui estão alguns exemplos de alto nível de como seus objetivos para implementar GHAS podem parecer:

  - **Reduzindo o número de vulnerabilidades:** Isso pode ser geral ou porque sua empresa foi recentemente afetada por uma vulnerabilidade significativa que você acredita que poderia ter sido prevenida por uma ferramenta como o GHAS.
  - **Identificando repositórios de alto risco**: Algumas empresas simplesmente querem localizar repositórios que contêm o maior risco, permitir que reduzam os riscos, remediando vulnerabilidades.
  -  **Aumentando as taxas de remediação**: Para evitar a acumulação de dívida de segurança, você pode desejar levar o desenvolvedor à adoção de conclusões e garantir que essas vulnerabilidades sejam corrigidas em tempo oportuno.
  - **Atendendo aos requisitos de conformidade**: Por exemplo, muitas empresas de saúde usam GHAS para prevenir a exposição do PHI (Informações de Saúde Pessoal).
  - **Prevenir o vazamento de segredos**: Muitas empresas querem evitar o vazamento de informações confidenciais, como chaves de software ou dados financeiros.

### Conduza a sua implementação com os seus grupos de segurança e desenvolvimento

As empresas que envolvem as suas equipas de segurança e desenvolvimento nas suas implementações do GHAS tendem a ser mais bem sucedidas do que as empresas que envolvem apenas o seu grupo de segurança e que esperam incluir as equipes de desenvolvimento assim que o piloto tiver terminado.

O GHAS adota uma abordagem centrada no desenvolvedor para a segurança do software, integrando-se perfeitamente ao fluxo de trabalho do desenvolvedor. Ter a representação chave do seu grupo de desenvolvimento no início do processo diminui o risco da sua implantação e incentiva a adesão da organização.

O envolvimento dos grupos de desenvolvimento de modo mais antecipado, preferivelmente no momento da compra, ajuda as empresas a utilizar o GHAS para resolver as questões de segurança mais cedo no processo de desenvolvimento. Quando ambos os grupos trabalham em conjunto, eles fazem o alinhamento antecipadamente no processo, removem silos, criam e reforçam as suas relações de trabalho e assumem mais responsabilidade pela implantação.


### Conheça o GHAS

Para estabelecer expectativas realistas para a divulgação, certifique-se de que todas as partes interessadas compreendam os seguintes fatos fundamentais sobre como funciona o GHAS.

#### 1. O GHAS é um conjunto de ferramentas de segurança que requerem ação para proteger seu código

O GHAS é um conjunto de ferramentas que aumentam com valor quando configurados, mantidos, usados em fluxos de trabalho diários e em combinação com outras ferramentas.

#### 2. O GHAS exigirá um ajuste inovador

Depois que o GHAS estiver configurado nos seus repositórios, você deverá configurar o GHAS para atender às necessidades da sua empresa. A verificação de código, em particular, exige uma personalização adicional, como a avaliação dos resultados iniciais e a realização de ajustes para futuras digitalizações. Muitos clientes descobrem que as digitalizações iniciais retornam resultados limitados ou irrelevantes até que a verificação de código seja ajustada com base no modelo de ameaças ddo aplicativo.

#### 3. As ferramentas de GHAS são mais eficazes quando usadas em conjunto e integradas ao seu programa de segurança do aplicativo

O GHAS é mais eficaz quando todas as ferramentas são utilizadas em conjunto. A eficácia do seu programa de segurança de aplicativos é melhorada pela integração do GHAS a outras ferramentas e atividades, como testes de penetração e digitalizações dinâmicas. Recomendamos sempre a utilização de múltiplas camadas de proteção.

#### 4. As consultas personalizadas de {% data variables.product.prodname_codeql %} são usadas por algumas empresas para personalizar e apontar para resultados de digitalização

A digitalização de código é fornecida por {% data variables.product.prodname_codeql %}, o mecanismo de análise de código mais poderoso do mundo. Para muitos de nossos clientes, as consultas básicas e as consultas adicionais disponíveis na comunidade são mais do que suficientes. No entanto, outras empresas podem exigir consultas personalizadas {% data variables.product.prodname_codeql %} para direcionar resultados diferentes ou reduzir falsos positivos.

Se sua empresa estiver interessada em consultas personalizadas de {% data variables.product.prodname_codeql %}, recomendamos que você conclua sua implementação do GHAS primeiro. Em seguida, quando a sua empresa estiver pronta, {% data variables.product.prodname_professional_services %} poderá ajudar você a navegar pelas exigências e garantir que a sua empresa precisa de consultas personalizadas.

#### 5. {% data variables.product.prodname_codeql %} digitaliza toda a base de código, não apenas as alterações feitas em um pull request

Quando a verificação de código é executada a partir de um pull request, a digitalização incluirá a base de código completa e não apenas as alterações feitas no pull request. A digitalização de toda a base de código é um passo importante para garantir que a alteração tenha sido revisada todas para todas as interações na base de código.

{% note %}

Para o próximo artigo dessa série, consulte "[Fase 2: Preparando para habilitar em escala](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)".

{% endnote %}
