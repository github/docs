---
title: Visão geral da implantação de Segurança Avançada do GitHub
intro: Ajude sua empresa a se preparar para adotar {% data variables.product.prodname_GH_advanced_security %} (GHAS) de forma bem-sucedida revisando e entendendo as práticas recomendadas, exemplos de implementação e a nossa abordagem em fases testada pela empresa.
product: '{% data variables.product.prodname_GH_advanced_security %} is a set of security features designed to make enterprise code more secure. It is available for {% data variables.product.prodname_ghe_server %} 3.0 or higher, {% data variables.product.prodname_ghe_cloud %}, and open source repositories. To learn more about the features, included in {% data variables.product.prodname_GH_advanced_security %}, see "[About GitHub Advanced Security](/get-started/learning-about-github/about-github-advanced-security)."'
redirect_from:
- /admin/advanced-security/overview-of-github-advanced-security-deployment
miniTocMaxHeadingLevel: 3
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
- Advanced Security
- Code scanning
- Enterprise
- Security
ms.openlocfilehash: 9c58cc8cca76a19ccc1aa36770e4cafcf4c9fcc7
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145096012"
---
{% data variables.product.prodname_GH_advanced_security %} (GHAS) ajuda equipes a criar mais rapidamente um código mais seguro, usando ferramentas integradas, como CodeQL, o mecanismo de análise de código semântico mais avançado do mundo. O GHAS é um conjunto de ferramentas que requer a participação ativa de desenvolvedores na sua empresa. Para obter o melhor retorno do seu investimento, você deverá aprender a usar, aplicar e manter o GHAS para proteger realmente seu código.

Um dos maiores desafios em lidar com novos softwares para uma empresa pode ser o processo de implementação, bem como promover a mudança cultural para impulsionar a aquisição organizacional necessária para que a implementação seja bem sucedida.

Para ajudar sua empresa a entender melhor e preparar-se para esse processo com o GHAS, essa visão geral destina-se a:
  - Dar a você uma visão geral da aparência da distribuição do GHAS para sua empresa.
  - Ajudando você a preparar sua empresa para uma implementação.
  - Compartilhar as melhores práticas fundamentais para ajudar a aumentar o sucesso da distribuição da sua empresa.

Para entender os recursos de segurança disponíveis por meio do {% data variables.product.prodname_GH_advanced_security %}, confira "[Recursos de segurança do {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

## <a name="recommended-phased-approach-for-ghas-rollouts"></a>Abordagem faseada recomendada para implementações do GHAS

Criamos uma abordagem faseada para implementações do GHAS desenvolvidas com base nas práticas recomendadas do setor e do GitHub. Você pode utilizar essa abordagem para a sua implementação, em parceria com {% data variables.product.prodname_professional_services %} ou de forma independente.

Embora a abordagem faseada seja recomendada, os ajustes podem ser feitos com base nas necessidades da sua empresa. Sugerimos também a criação e o cumprimento de um calendário para a sua implementação. À medida que você começa o seu planejamento, podemos trabalhar juntos para identificar a abordagem ideal e a linha do tempo que funciona melhor para sua empresa.

![Diagrama que mostra as três fases da implantação e distribuição do GitHub Advanced Security, incluindo a Fase 0: Planejamento e Início, Fase 1: Projetos piloto, Fase 2: Adesão da organização e distribuição para usuários pioneiros e Fase 3: Distribuição completa na organização e gerenciamento de alterações](/assets/images/enterprise/security/advanced-security-phased-approach-diagram.png)


Com base na nossa experiência ajudando clientes com uma implantação bem-sucedida de {% data variables.product.prodname_GH_advanced_security %}, esperamos que a maioria dos clientes queira seguir essas fases. Dependendo das necessidades da sua empresa, talvez seja necessário modificar esta abordagem e alterar ou remover algumas fases ou etapas.

Para ver um guia detalhado sobre como implantar cada uma dessas fases, confira "[Como implantar o {% data variables.product.prodname_GH_advanced_security %} na sua empresa](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise)". A próxima seção fornece um resumo de alto nível de cada uma destas fases.

###  <a name="-octicon-milestone-aria-labelthe-milestone-icon--phase-0-planning--kickoff"></a>{% octicon "milestone" aria-label="The milestone icon" %} Fase 0: Planejamento e início

Durante essa fase, o objetivo geral é planejar e preparar-se para a sua implantação, garantindo que você tenha seu pessoal, processos e tecnologias prontos para sua implementação. Você também deve considerar quais critérios de sucesso serão usados para medir a adoção e o uso do GHAS nas suas equipes.

### <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-1-pilot-projects"></a>{% octicon "milestone" aria-label="The milestone icon" %}  Fase 1: Projeto(s) piloto

Para começar a implementar o GHAS, recomendamos começar com alguns projetos/equipes de alto impacto com que pilotar uma primeira implantação. Isto permitirá que um grupo inicial da sua empresa se familiarize com o GHAS, aprenda a habilitar e configurar o GHAS e construa uma base sólida no GHAS antes de fazer a implementação no restante da sua empresa.

### <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-2-organizational-buy-in--rollout-preparation"></a>{% octicon "milestone" aria-label="The milestone icon" %} Fase 2: Adesão organizacional e preparação para distribuição

A fase 2 é um resumo das fases anteriores e a preparação para uma implantação maior do restante da empresa. Nesta fase, a adesão organizacional pode referir-se à decisão da sua empresa de avançar depois do(s) projeto(s) piloto ou o uso e adoção da empresa GHAS ao longo do tempo (isto é mais comum). Se sua empresa decidir adotar o GHAS ao longo do tempo, a fase 2 poderá continuar na fase 3 e assim por diante.

### <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-3-full-organizational-rollout--change-management"></a>{% octicon "milestone" aria-label="The milestone icon" %} Fase 3: Distribuição organizacional completa e gerenciamento de alterações

Uma vez que sua empresa está alinhada, você pode começar a implementar o GHAS para o restante da empresa com base no seu plano de implementação. Durante esta fase, é fundamental garantir que um plano foi feito para quaisquer mudanças organizacionais que possam ser feitas durante sua implementação do GHAS e garantir que as equipes entendam a necessidade, valor e impacto da mudança nos fluxos de trabalho atuais.

## <a name="best-practices-for-a-successful-ghas-rollout"></a>Práticas recomendadas para uma implantação bem-sucedida do GHAS

Descobrimos que as empresas que concluíram com sucesso as implementações do GHAS têm várias características semelhantes que ajudam a impulsionar seu sucesso. Para ajudar sua empresa a promover o sucesso da implementação do seu GHAS, revise essas práticas recomendadas.

### <a name="-octicon-checklist-aria-labelthe-checklist-icon--set-clear-goals-for-your-companys-rollout"></a>{% octicon "checklist" aria-label="The checklist icon" %} Estabeleça objetivos claros para a implantação da sua empresa

O estabelecimento de objetivos pode parecer óbvio, mas vemos que algumas empresas que iniciam o GHAS não têm em mente objetivos claros. É mais difícil para essas empresas obter a adesão organizacional verdadeira necessária para concluir o processo de implantação e perceber o valor da GHAS dentro da sua empresa.

À medida que você começa a planejar para sua implementação, comece a definir os objetivos para o GHAS dentro da sua empresa e certifique-se de que sejam comunicados à sua equipe. Os seus objetivos podem ser altamente detalhados ou simples, desde que haja um ponto de partida e um alinhamento. Isso ajudará a construir uma base para a direção da implantação da sua empresa e poderá ajudar você a construir um plano para chegar lá. Se precisar de ajuda com as suas metas, {% data variables.product.prodname_professional_services %} pode ajudar com as recomendações baseadas na nossa experiência com a sua empresa e compromissos anteriores com outros clientes.

Aqui estão alguns exemplos de alto nível de como seus objetivos para implementar GHAS podem parecer:
  - **Redução do número de vulnerabilidades:** isso pode ser geral ou porque sua empresa foi recentemente afetada por uma vulnerabilidade significativa que você acredita que poderia ter sido impedida por uma ferramenta como o GHAS.
  - **Identificação dos repositórios de alto risco:** algumas empresas podem simplesmente querer ter como alvo os repositórios que contêm maior risco, se preparar para começar a corrigir vulnerabilidades e reduzir o risco.
  -  **Aumento das taxas de correção:** isso pode ser feito pela adoção das descobertas do desenvolvedor e por garantir que essas vulnerabilidades sejam corrigidas em tempo hábil, impedindo o acúmulo da dívida de segurança.  
  - **Cumprimento dos requisitos de conformidade:** isso pode ser tão simples quanto criar requisitos de conformidade ou algo mais específico. Encontramos muitas empresas de saúde que utilizam o GHAS para prevenir a exposição do PHI (Informações sobre saúde pessoal).
  - **Prevenção contra o vazamento de segredos:** de modo geral, essa é uma meta das empresas que tiveram (ou querem evitar) vazamento de informações confidenciais como chaves de software, dados financeiros ou do cliente etc.
  - **Gerenciamento de dependências:** de modo geral, essa é uma meta das empresas que podem ter sido vítimas de golpes de dependências não corrigidas ou daqueles que procuram prevenir esses tipos de ataques atualizando as dependências vulneráveis.  

### <a name="-octicon-checklist-aria-labelthe-checklist-icon--establish-clear-communication-and-alignment-between-your-teams"></a>{% octicon "checklist" aria-label="The checklist icon" %} Estabeleça uma comunicação e alinhamento claros entre suas equipes

Uma comunicação e um alinhamento claros são essenciais para o sucesso de qualquer projeto, e a implantação do GHAS não é diferente. Descobrimos que as empresas que têm uma comunicação e alinhamento claros entre seus grupos de segurança e desenvolvimento, além do seu patrocinador executivo (CISO ou VP) da compra do GHAS por meio da implantação, muitas vezes têm mais sucesso com a sua implantação.

Além de garantir que estes grupos estejam alinhados ao longo de toda a implementação do GHAS, recomendamos que nos concentremos em algumas áreas específicas.

#### <a name="rollout-planning"></a>Planejamento da implementação

Como você implementará o GHAS na sua empresa? Provavelmente, haverá muitas ideias e opiniões. Aqui estão algumas perguntas que você deve considerar responder e alinhar antes de avançar:
  - Quais equipes serão incluídas no piloto?
  - Quais projetos estão focados no piloto?
  - Como os projetos devem ser priorizados na execução?
  - Como você planeja medir o sucesso no piloto e para além dele?
  - Qual é o nível de mudança diária que suas equipes irão enfrentar? Como isso será comunicado?
  - Como seus planos de implementação serão comunicados em toda a empresa?
  - Como você planeja treinar suas equipes?
  - Como você planeja gerenciar os resultados de digitalização inicialmente? (Para obter mais informações, consulte a próxima seção sobre "Processando resultados")

#### <a name="processing-results"></a>Processando os resultados

Antes de o GHAS ser implementado nas suas equipes, deve haver um claro alinhamento sobre como os resultados devem ser gerenciados ao longo do tempo. Recomendamos que se encarem os resultados como mais informativo e não como bloqueio. É provável que a sua empresa tenha um pipeline de CI/CD completo. Portanto, recomendamos esta abordagem para evitar bloquear o processo da sua empresa. À medida que você se acostuma com o processamento desses resultados, você poderá aumentar gradualmente o nível de restrição para um ponto que você considera mais preciso para sua empresa.

### <a name="-octicon-checklist-aria-labelthe-checklist-icon---lead-your-rollout-with-both-your-security-and-development-groups"></a>{% octicon "checklist" aria-label="The checklist icon" %}  lidere a sua implementação com seus grupos de segurança e desenvolvimento

Muitas empresas lideram seus esforços do GHAS com seu grupo de segurança. Muitas vezes, as equipes de desenvolvimento não são incluídas no processo de implementação até que o piloto seja concluído. No entanto, descobrimos que as empresas que lideram as implementações tanto com as equipes de segurança quanto de desenvolvimento tendem a ter mais sucesso com a implementação do GHAS.

Por quê? O GHAS adota uma abordagem centrada no desenvolvedor para a segurança do software, integrando-se perfeitamente ao fluxo de trabalho do desenvolvedor. Não ter uma representação chave do seu grupo de desenvolvimento no início do processo aumenta o risco de sua implantação e cria um caminho rápido para adesões organizacionais.

Quando os grupos de desenvolvimento são envolvidos mais cedo (idealmente a partir da compra), os grupos de segurança e desenvolvimento podem alcançar um alinhamento precoce no processo. Isso ajuda a remover silos entre os dois grupos, a construir e a reforçar as suas relações de trabalho, e ajuda a afastar os grupos de uma mentalidade comum de “arremessar as coisas pelo muro”. Todas estas coisas ajudam você a apoiar o objetivo geral de ajudar as empresas a se deslocarem e começarem a utilizar o GHAS para abordar as questões de segurança mais cedo no processo de desenvolvimento.

#### <a name="-octicon-people-aria-labelthe-people-icon--recommended-key-roles-for-your-rollout-team"></a>{% octicon "people" aria-label="The people icon" %} Funções-chave recomendadas para sua equipe de implementação

Recomendamos algumas funções essenciais para a sua equipe a fim de garantir que os seus grupos estejam bem representados durante todo o planejamento e execução da sua implementação.

É altamente recomendável que a sua equipe de implementação inclua estas funções:
- **Patrocinador executivo:** em geral, o CISO, o CIO, o VP de Segurança ou o VP de Engenharia.
- **Líder de segurança técnica:** a liderança de segurança técnica fornece suporte técnico em nome da equipe de segurança durante todo o processo de implementação.
- **Líder de desenvolvimento técnico:** a liderança de desenvolvimento técnico fornece suporte técnico e, provavelmente, vai liderar o esforço de implementação com a equipe de desenvolvimento.  

Também recomendamos que a sua equipe de implementação inclua estas funções:
- **Gerente de projetos:** descobrimos que quanto mais cedo um gerente de projetos pode ser introduzido no processo de distribuição, maior é a probabilidade de sucesso.  
- **Engenheiro de garantia de qualidade:** a inclusão de um membro da equipe de garantia de qualidade da sua empresa ajuda a garantir que as alterações no processo sejam levadas em conta para a equipe de QA.

### <a name="-octicon-checklist-aria-labelthe-checklist-icon--understand-key-ghas-facts-to-prevent-common-misconceptions"></a>{% octicon "checklist" aria-label="The checklist icon" %} Entenda os principais fatos do GHAS para evitar equívocos comuns

Realizar uma implementação do GHAS. É importante entender alguns fatos básicos sobre o que o GHAS é e pode fazer, para evitar que muitas concepções incorretas comuns acessem as suas implementações do GHAS.

{% note %}

**Observação:** se você tem interesse em promover sua formação no GHAS, o {% data variables.product.prodname_professional_services %} oferece uma série de opções para formação e treinamento adicionais, incluindo tópicos para os quais a sua empresa precisa se preparar para o GHAS. Estas ofertas podem assumir a forma de oficinas, demonstrações e bootcamps. Os tópicos podem variar desde a implementação do GHAS e do uso básico do GHAS a tópicos mais avançados para continuar desenvolvendo as habilidades da sua equipe. Para obter mais informações sobre como trabalhar com a equipe do {% data variables.product.prodname_professional_services_team %}, confira "[{% data variables.product.prodname_professional_services %}](#github-professional-services)".

{% endnote %}


#### <a name="fact-1-ghas-is-a-suite-of-security-tools-that-require-action-to-protect-your-code"></a>Fato 1: O GHAS é um conjunto de ferramentas de segurança que requerem ação para proteger seu código.

Não é um software de segurança instalado e esquecido — ter apenas um GHAS não protege seu código. O GHAS é um conjunto de ferramentas que aumentam com valor quando configurados, mantidos, usados em fluxos de trabalho diários e em combinação com outras ferramentas.

#### <a name="fact-2-ghas-will-require-adjustment-out-of-the-box"></a>Fato 2: O GHAS exigirá um ajuste inovador.

Uma vez que o GHAS é definido nos repositórios, há outras etapas que precisam ser realizadas para garantir o funcionamento das necessidades da empresa. A digitalização de código em particular exige uma configuração adicional para ajustar seus resultado como, por exemplo, a personalização do que é sinalizado pelas verificações para ajustar o que é detectado em futuras digitalizações. Muitos clientes descobrem que as digitalizações iniciais ou não obtêm resultados ou obtêm resultados que não são relevantes com base no modelo de ameaça da aplicação e precisam ser ajustados de acordo com as necessidades da empresa.

#### <a name="fact-3-ghas-tools-are-most-effective-when-used-together-but-the-most-effective-appsec-programs-involve-the-use-of-additional-toolsactivities"></a>Facto 3: As ferramentas do GHAS são mais efetivas quando usadas em conjunto, mas os programas mais eficientes do AppSec envolvem o uso de ferramentas/atividades adicionais.

O GHAS é mais eficaz quando todas as ferramentas são utilizadas em conjunto. Quando as empresas integram o GHAS a outras ferramentas e atividades como, por exemplo, testes de penetração e scanners dinâmicos, ele melhora ainda a eficácia do programa AppSec. Recomendamos sempre a utilização de múltiplas camadas de proteção.

#### <a name="fact-4-not-all-companies-will-useneed-custom--data-variablesproductprodname_codeql--queries-but-they-can--help-you-customizetarget-scan-results"></a>Fato 4: Nem todas as empresas irão usar/precisar de consultas personalizadas de {% data variables.product.prodname_codeql %}, mas elas podem ajudar você a personalizar/apontar para resultados de verificação.

A digitalização de código é fornecida por {% data variables.product.prodname_codeql %} — o mecanismo de análise de código mais poderoso do mundo. Embora muitas empresas estejam entusiasmadas com a perspectiva de serem capazes de escrever consultas personalizadas, para uma grande parte dos nossos clientes, o conjunto base de consultas e consultas adicionais disponíveis na comunidade é, de modo geral, mais do que suficiente. No entanto muitas empresas podem ter a necessidade de consultas personalizadas de {% data variables.product.prodname_codeql %} para ajudar a reduzir taxas falso-positivas nos resultados ou criar novas consultas para resultados dos quais a sua empresa pode precisar.

No entanto, se a sua empresa estiver interessada em escrever consultas personalizadas de {% data variables.product.prodname_codeql %}, recomendamos que você implemente o GHAS antes de explorar as consultas personalizadas.

{% note %}

**Observação:** é essencial que a sua empresa tenha uma base sólida no GHAS antes de se aprofundar em práticas de segurança mais detalhadas.

{% endnote %}

Quando sua empresa estiver pronta, a nossa equipe de sucesso do cliente pode ajudar você a cumprir os requisitos que precisam ser cumpridos e pode ajudar a garantir que a sua empresa tenha bons casos de uso para consultas personalizadas.  

#### <a name="fact-5--data-variablesproductprodname_codeql--scans-the-whole-code-base-not-just-the-changes-made-in-a-pull-request"></a>Fato 5: {% data variables.product.prodname_codeql %} digitaliza toda a base de código, não apenas as alterações feitas em um pull request.

Quando a verificação de código é executada a partir de um pull request, a digitalização incluirá a base de código completa e não apenas as alterações feitas no pull request. Embora isso possa parecer por vezes desnecessário, este é uma etapa importante para garantir que a mudança tenha sido revisada com base em todas as interacções na base de código.

## <a name="examples-of-successful--data-variablesproductprodname_gh_advanced_security--rollouts"></a>Exemplos de implementações de {% data variables.product.prodname_GH_advanced_security %} bem-sucedidas

Agora que você compreende melhor alguns dos pontos principais para uma implementação bem-sucedidas do GHAS, aqui estão alguns exemplos de como os nossos clientes fizeram as suas implementações bem-sucedidas. Mesmo que sua empresa esteja em um lugar diferente, {% data variables.product.prodname_dotcom %} pode ajudar você a construir um caminho personalizado que atenda às necessidades da sua implantação.

### <a name="example-rollout-for-a-mid-sized-healthcare-technology-company"></a>Exemplo de implantação para uma empresa de tecnologia de saúde de médio porte.  

Uma empresa de tecnologia de saúde de médio porte, baseada em São Francisco, concluiu um processo bem-sucedido de implantação do GHAS. Embora eles possam não ter um grande número de repositórios que precisavam ser habilitados, a chave dosucesso dessa empresa incluiu a uma equipe bem organizada e alinhada para a implementação, com um contato-chave claramente definido para trabalhar com {% data variables.product.prodname_dotcom %} para solucionar quaisquer problemas durante o processo. Isso lhes permitiu concluir a sua implementação em de dois meses.

Além disso a existência de uma equipe de desenvolvimento engajada permitiu que a empresa tivesse equipes que utilizassem a verificação de código no nível de pull request após a conclusão da sua implementação.

### <a name="example-rollout-for-a-mid-sized-data-platform-company"></a>Exemplo de implantação para uma empresa de plataforma de dados de média dimensão

Uma empresa global de plataformas de dados teve grande sucesso com o GHAS até o momento. Eles concluíram a sua implementação inicial e estão atualmente progredindo por meio do processo de implementação. Esta empresa tem maturidade em suas posições e ferramentas de segurança e está bem alinhada como uma empresa. Isso permite que ela opere de forma muito própria, bem como avançar de forma rápida e tranquila ao longo da sua implementação.

O forte alinhamento, operações eficientes e a maturidade das ferramentas de segurança desta empresa possibilitou a implementação rápida do GHAS, bem como criar uma boa base para {% data variables.product.prodname_codeql %}. Desde sua implementação, agora eles podem automaticamente habilitar {% data variables.product.prodname_codeql %} em diferentes repositórios.

Além de sua segurança e maturidade técnica, outra chave crucial para o sucesso desta empresa é ter o proprietário de um projeto e um único ponto de contato na sua equipe para impulsionar o projeto. Este contato fundamental não só é crucial, como também é incrivelmente rico e qualificado e contribui diretamente para o sucesso da sua implementação.

## <a name="prerequisites-for-your-company-before-rolling-out-ghas"></a>Pré-requisitos para a sua empresa antes de implementar o GHAS

{% data variables.product.prodname_professional_services %} pode ajudar a fornecer suporte adicional para ajudar a sua empresa a detalhar e entender estes pré-requisitos e ajudar você a preparar-se para o processo de implementação do GHAS.

 ### <a name="cicd-systems-and-process"></a>Sistemas e processos de CI/CD

Se a sua empresa ainda não investiu em sistemas e processos de integração contínua ou de entrega contínua (CI/CD), recomendamos que isso seja feito em conjunto com o GHAS. Isto pode ser uma mudança significativa para sua empresa — podemos trabalhar com você para fornecer recomendações e orientações para a implementação de um sistema CI/CD, além de apoiar qualquer formação que possa ser necessária.

### <a name="requirements-to-install--data-variablesproductprodname_gh_advanced_security-"></a>Requisitos para instalar {% data variables.product.prodname_GH_advanced_security %}

Existem alguns caminhos diferentes que podem ser percorridos pela sua instalação do GHAS, com base em quais combinações de tecnologias que sua empresa usa. Essa seção descreve um rápido detalhamento dos diferentes caminhos que a sua empresa pode precisar seguir.

{% ifversion ghes %}

#### <a name="-data-variablesproductprodname_ghe_server-"></a>{% data variables.product.prodname_ghe_server %}

É importante que você esteja utilizando uma versão de {% data variables.product.prodname_ghe_server %} (GHES) que atenda às necessidades da sua empresa.

Caso você esteja usando uma versão anterior do GHES (anterior à vesão 3.0) e gostaria de fazer a atualização, há algumas exigências que você precisa cumprir antes de avançar. Para obter mais informações, consulte:
  - "[Atualização do {% data variables.product.prodname_ghe_server %}](/enterprise-server@2.22/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)"'
  - "[Requisitos de atualização](/enterprise-server@2.20/admin/enterprise-management/upgrade-requirements)"

Se você estiver usando um sistema de CI/CD de terceiros e quiser usar {% data variables.product.prodname_code_scanning %}, certifique-se de ter feito o download do {% data variables.product.prodname_codeql_cli %}. Para obter mais informações, confira "[Sobre a verificação de código do CodeQL no seu sistema de CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)".

Se você estiver trabalhando com {% data variables.product.prodname_professional_services %} para sua implantação GHAS, esteja preparado para discutir esses itens a tempo na sua reunião inicial.

{% endif %}

{% ifversion ghec %}

#### <a name="-data-variablesproductprodname_ghe_cloud-"></a>{% data variables.product.prodname_ghe_cloud %}

Se você é um cliente de {% data variables.product.prodname_ghe_cloud %} (GHEC), há pré-requisitos que você precisará conhecer dependendo de que CI/CD você planeja utilizar.

Usando {% data variables.product.prodname_actions %} para a sua CI/CD:
- Para garantir que {% data variables.product.prodname_code_scanning %} possa ser integrado e usadocorretamente, você deve entender os princípios básicos de {% data variables.product.prodname_actions %} antes de prosseguir com a sua instalação.

Usando uma ferramenta de terceiros para CI/CD:
- Para integrar a {% data variables.product.prodname_codeql_cli %}, você deve entender os princípios básicos do sistema CI/CD, bem como *nix e Windows — em particular, como os comandos são executados e como o sucesso e a falha são sinalizados. Para obter mais informações sobre como integrar uma ferramenta de terceiros, confira "[Como usar a verificação de código do CodeQL com seu sistema de CI existente ](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system)".

{% endif %}

## <a name="partnering-with-github-for-your-rollout"></a>Parceria com GitHub para a sua implementação

À medida que você se prepara para sua implementação do GHAS, é importante considerar o que será necessário para sua empresa para fazer este projeto ser bem sucedido. As nossas implementações mais bem-sucedidas do GHAS dependem de responsabilidades compartilhadas entre o GitHub e nossos clientes em todo o processo com uma partes interessadas claramente identificada pelo cliente ao qual pertence o projeto.

#### <a name="success-model-for-customer-and-github-responsibilities"></a>Modelo de sucesso para responsabilidades de cliente e do GitHub

**Responsabilidades do cliente**
- Completar infraestrutura e pré-requisitos do processo
- Gerenciando a implementação, incluindo planejamento e execução
- Treinamento interno
- (Opcional) Contribuindo com consultas de {% data variables.product.prodname_codeql %} para a comunidade do GitHub

**Responsabilidades do GitHub**

- Manutenção e aprimoramento para funcionalidades, como {% ifversion ghes %}{% data variables.product.prodname_ghe_server %}{% endif %}, {% data variables.product.prodname_actions %}, {% data variables.product.prodname_GH_advanced_security %}
- Fornecer, manter e prestar os serviços a seguir: Documentação de {% data variables.product.prodname_dotcom %}, comunidade de {% data variables.product.prodname_dotcom %}, suporte de {% data variables.product.prodname_dotcom %}

{% note %}

**Observação:** o {% data variables.product.prodname_professional_services %} pode ajudar a dar suporte a muitas das responsabilidades do cliente. Para saber mais, confira "[Serviços e suporte do GitHub](#github-services-and-support)".

{% endnote %}

## <a name="-data-variablesproductprodname_dotcom--services-and-support"></a>Serviços e suporte do {% data variables.product.prodname_dotcom %}

### <a name="-data-variablesproductprodname_dotcom--support"></a>Suporte de {% data variables.product.prodname_dotcom %}

Se você tiver algum problema durante a sua implementação, você poderá pesquisar as soluções na nossa documentação detalhada ou interagir com o suporte de {% data variables.product.prodname_dotcom %}, uma equipe de engenheiros altamente técnicos que podem ajudar vocês à medida que surgem problemas. Para obter mais informações, confira "[Suporte do GitHub Enterprise](https://enterprise.github.com/support).

Experimente também o [ {% data variables.product.prodname_gcf %}](https://github.community/).

Se você comprou um plano de Suporte Premium, envie seu tíquete no [Portal do Suporte Premium](https://enterprise.github.com/support). Se você não tem certeza de qual plano de suporte comprou, você poderá entrar em contato com seu representante de vendas ou revisar as opções do plano.

Para obter mais informações as opções do plano de suporte Premium, consulte:
  - "[Suporte Premium](https://github.com/premium-support)" {% ifversion ghec %}
  - "[Sobre o Suporte Premium do GitHub para o {% data variables.product.prodname_ghe_cloud %}](/github/working-with-github-support/about-github-premium-support-for-github-enterprise-cloud)"{% endif %}{% ifversion ghes %}
  - "[Sobre o Suporte Premium do GitHub para o {% data variables.product.prodname_ghe_server %}](/admin/enterprise-support/overview/about-github-premium-support-for-github-enterprise-server)"{% endif %}

### <a name="-data-variablesproductprodname_professional_services-"></a>{% data variables.product.prodname_professional_services %}

Nossa equipe de {% data variables.product.prodname_professional_services_team %} pode fazer parcerias com você para uma implementação bem-sucedida de {% data variables.product.prodname_GH_advanced_security %}. Oferecemos uma série de opções para o tipo de orientação e apoio que você espera precisar para a sua implementação. Também temos treinamento e bootcamps disponíveis para ajudar a sua empresa a otimizar o valor do GHAS.

Se você quiser trabalhar com nossa equipe de {% data variables.product.prodname_professional_services_team %} para a sua implementação, recomendamos que você comece a pensar no design do seu sistema e na infraestrutura, bem como no número de repositórios que você deseja configurar com o GHAS, para iniciar essas conversas. Além disso, comece a pensar em objetivos para o que você gostaria de alcançar com esta implementação.

A implementação é apenas um passo em uma jornada bem sucedida orientada à segurança, em que você aprenderá a usar o GHAS. Depois de concluir a implementação, haverá mais para aprender com a implantação em toda a sua infraestrutura e codebases. Fale com o seu representante de vendas para obter mais informações sobre todas as opções de {% data variables.product.prodname_professional_services_team %} disponíveis.

Se você inicialmente optou por não receber serviços adicionais, mas descobrir que o suporte adicional é necessário quando você inicia a sua implementação, entre em contato com o seu representante de vendas para discutir quais opções de serviços podem ser necessárias para apoiar a sua implementação.
