---
title: Visão geral da implantação de Segurança Avançada do GitHub
intro: 'Ajude sua empresa a se preparar para adotar {% data variables.product.prodname_GH_advanced_security %} (GHAS) de forma bem-sucedida revisando e entendendo as práticas recomendadas, exemplos de implementação e a nossa abordagem em fases testada pela empresa.'
product: '{% data variables.product.prodname_GH_advanced_security %} é um conjunto de funcionalidades de segurança projetado para tornar o código corporativo mais seguro. Está disponível para {% data variables.product.prodname_ghe_server %} 3.0 ou superior, {% data variables.product.prodname_ghe_cloud %} e para repositórios de código aberto. Para saber mais sobre as funcionalidades, incluído em {% data variables.product.prodname_GH_advanced_security %}, consulte "[Sobre o GitHub Advanced Security](/get-started/learning-about-github/about-github-advanced-security)."'
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
---

{% data variables.product.prodname_GH_advanced_security %} (GHAS) ajuda equipes a criar mais rapidamente um código mais seguro, usando ferramentas integradas, como CodeQL, o mecanismo de análise de código semântico mais avançado do mundo. O GHAS é um conjunto de ferramentas que requer a participação ativa de desenvolvedores na sua empresa. Para obter o melhor retorno do seu investimento, você deverá aprender a usar, aplicar e manter o GHAS para proteger realmente seu código.

Um dos maiores desafios em lidar com novos softwares para uma empresa pode ser o processo de implementação, bem como promover a mudança cultural para impulsionar a aquisição organizacional necessária para que a implementação seja bem sucedida.

Para ajudar sua empresa a entender melhor e preparar-se para esse processo com o GHAS, essa visão geral destina-se a:
  - Dar a você uma visão geral da aparência da implantação do GHAS para sua empresa.
  - Ajudando você a preparar sua empresa para uma implementação.
  - Compartilhe as práticas recomendadas fundamentais para ajudar a aumentar o sucesso da implementação da sua empresa.

Para entender as funcionalidades de segurança disponíveis por meio de {% data variables.product.prodname_GH_advanced_security %}, consulte "[funcionalidades de segurança de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

## Abordagem faseada recomendada para implementações do GHAS

Criamos uma abordagem faseada para implementações do GHAS desenvolvidas com base nas práticas recomendadas do setor e do GitHub. Você pode utilizar essa abordagem para a sua implementação, em parceria com {% data variables.product.prodname_professional_services %} ou de forma independente.

Embora a abordagem faseada seja recomendada, os ajustes podem ser feitos com base nas necessidades da sua empresa. Sugerimos também a criação e o cumprimento de um calendário para a sua implementação. À medida que você começa o seu planejamento, podemos trabalhar juntos para identificar a abordagem ideal e a linha do tempo que funciona melhor para sua empresa.

![Diagrama que mostra as três fases da implementação do GitHub Advanced Security, incluindo a Fase 0: Planejamento & introdução, Fase 1: Projetos piloto, Fase 2: Adesão e implementação corporativas para os primeiros a aderirem e Fase 3: Implementação completa & Gestão de mudanças](/assets/images/enterprise/security/advanced-security-phased-approach-diagram.png)


Com base na nossa experiência ajudando clientes com uma implantação bem-sucedida de {% data variables.product.prodname_GH_advanced_security %}, esperamos que a maioria dos clientes queira seguir essas fases. Dependendo das necessidades da sua empresa, talvez seja necessário modificar esta abordagem e alterar ou remover algumas fases ou etapas.

Para um guia detalhado sobre a implementação de cada uma dessas etapas, consulte "[Implantando {% data variables.product.prodname_GH_advanced_security %} na sua empresa](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise)". A próxima seção fornece um resumo de alto nível de cada uma destas fases.

### {% octicon "milestone" aria-label="The milestone icon" %} Fase 0: Planejamento & início

Durante essa fase, o objetivo geral é planejar e preparar-se para a sua implantação, garantindo que você tenha seu pessoal, processos e tecnologias prontos para sua implementação. Você também deve considerar quais critérios de sucesso serão usados para medir a adoção e o uso do GHAS nas suas equipes.

### {% octicon "milestone" aria-label="The milestone icon" %}  Fase 1: Projeto(s) piloto

Para começar a implementar o GHAS, recomendamos começar com alguns projetos/equipes de alto impacto com que pilotar uma primeira implantação. Isto permitirá que um grupo inicial da sua empresa se familiarize com o GHAS, aprenda a habilitar e configurar o GHAS e construa uma base sólida no GHAS antes de fazer a implementação no restante da sua empresa.

### {% octicon "milestone" aria-label="The milestone icon" %}  Fase 2: Adesão organizacional & preparação para implementação

A fase 2 é um resumo das fases anteriores e a preparação para uma implantação maior do restante da empresa. Nesta fase, a adesão organizacional pode referir-se à decisão da sua empresa de avançar depois do(s) projeto(s) piloto ou o uso e adoção da empresa GHAS ao longo do tempo (isto é mais comum). Se sua empresa decidir adotar o GHAS ao longo do tempo, a fase 2 poderá continuar na fase 3 e assim por diante.

### {% octicon "milestone" aria-label="The milestone icon" %}  Fase 3: Execução completa da organização & gestão de mudanças

Uma vez que sua empresa está alinhada, você pode começar a implementar o GHAS para o restante da empresa com base no seu plano de implementação. Durante esta fase, é fundamental garantir que um plano foi feito para quaisquer mudanças organizacionais que possam ser feitas durante sua implementação do GHAS e garantir que as equipes entendam a necessidade, valor e impacto da mudança nos fluxos de trabalho atuais.

## Práticas recomendadas para uma implantação bem-sucedida do GHAS

Descobrimos que as empresas que concluíram com sucesso as implementações do GHAS têm várias características semelhantes que ajudam a impulsionar seu sucesso. Para ajudar sua empresa a promover o sucesso da implementação do seu GHAS, revise essas práticas recomendadas.

### {% octicon "checklist" aria-label="The checklist icon" %} Estabeleça objetivos claros para a implantação da sua empresa

O estabelecimento de objetivos pode parecer óbvio, mas vemos que algumas empresas que iniciam o GHAS não têm em mente objetivos claros. É mais difícil para essas empresas obter a adesão organizacional verdadeira necessária para concluir o processo de implantação e perceber o valor da GHAS dentro da sua empresa.

À medida que você começa a planejar para sua implementação, comece a definir os objetivos para o GHAS dentro da sua empresa e certifique-se de que sejam comunicados à sua equipe. Os seus objetivos podem ser altamente detalhados ou simples, desde que haja um ponto de partida e um alinhamento. Isso ajudará a construir uma base para a direção da implantação da sua empresa e poderá ajudar você a construir um plano para chegar lá. Se precisar de ajuda com as suas metas, {% data variables.product.prodname_professional_services %} pode ajudar com as recomendações baseadas na nossa experiência com a sua empresa e compromissos anteriores com outros clientes.

Aqui estão alguns exemplos de alto nível de como seus objetivos para implementar GHAS podem parecer:
  - **Reduzindo o número de vulnerabilidades:** Isso pode ser geral ou porque sua empresa foi recentemente afetada por uma vulnerabilidade significativa que você acredita que poderia ter sido prevenida por uma ferramenta como o GHAS.
  - **Identificando repositórios de alto risco:** Algumas empresas podem simplesmente querer direcionar repositórios que contenham maior risco, pronto para começar a corrigir vulnerabilidades e reduzir o risco.
  -  **Aumentando as taxas de remediação:** Isso pode ser feito pela adoção de conclusões do desenvolvedor e por garantir que essas vulnerabilidades sejam corrigidas em tempo hábil. prevenindo a acumulação de dívida de segurança.
  - **Requisitos de conformidade da reunião:** Isto pode ser tão simples quanto criar novos requisitos de conformidade ou algo mais específico. Encontramos muitas empresas de saúde que utilizam o GHAS para prevenir a exposição do PHI (Informações sobre saúde pessoal).
  - **Evitar a fuga de segredos:** De modo geral, isso é um objetivo das empresas que tiveram (ou querem evitar) vazamento de informações confidenciais como, por exemplo, chaves de software, dados financeiros, dados do cliente, etc.
  - **Gerenciamento de dependência:** Este é frequentemente um objetivo para empresas que podem ter sido vítimas devido a hackers de dependências não corrigidas, ou aqueles que procuram prevenir esses tipos de ataques atualizando dependências vulneráveis.

### {% octicon "checklist" aria-label="The checklist icon" %} Estabeleça uma comunicação e alinhamento claros entre suas equipes

Uma comunicação e um alinhamento claros são essenciais para o sucesso de qualquer projeto, e a implantação do GHAS não é diferente. Descobrimos que as empresas que têm uma comunicação e alinhamento claros entre seus grupos de segurança e desenvolvimento, além do seu patrocinador executivo (CISO ou VP) da compra do GHAS por meio da implantação, muitas vezes têm mais sucesso com a sua implantação.

Além de garantir que estes grupos estejam alinhados ao longo de toda a implementação do GHAS, recomendamos que nos concentremos em algumas áreas específicas.

#### Planejamento da implementação

Como você implementará o GHAS na sua empresa? Provavelmente, haverá muitas ideias e opiniões. Aqui estão algumas perguntas que você deve considerar responder e alinhar antes de avançar:
  - Quais equipes serão incluídas no piloto?
  - Quais projetos estão focados no piloto?
  - Como os projetos devem ser priorizados na execução?
  - Como você planeja medir o sucesso no piloto e para além dele?
  - Qual é o nível de mudança diária que suas equipes irão enfrentar? Como isso será comunicado?
  - Como seus planos de implementação serão comunicados em toda a empresa?
  - Como você planeja treinar suas equipes?
  - Como você planeja gerenciar os resultados de digitalização inicialmente? (Para obter mais informações, consulte a próxima seção sobre "Processando resultados")

#### Processando resultados

Antes de o GHAS ser implementado nas suas equipes, deve haver um claro alinhamento sobre como os resultados devem ser gerenciados ao longo do tempo. We recommend initially looking at results as more informative  and non-blocking. É provável que a sua empresa tenha um pipeline de CI/CD completo. Portanto, recomendamos esta abordagem para evitar bloquear o processo da sua empresa. À medida que você se acostuma com o processamento desses resultados, você poderá aumentar gradualmente o nível de restrição para um ponto que você considera mais preciso para sua empresa.

### {% octicon "checklist" aria-label="The checklist icon" %}  lidere a sua implementação com seus grupos de segurança e desenvolvimento

Muitas empresas lideram seus esforços do GHAS com seu grupo de segurança. Muitas vezes, as equipes de desenvolvimento não são incluídas no processo de implementação até que o piloto seja concluído. No entanto, descobrimos que as empresas que lideram as implementações tanto com as equipes de segurança quanto de desenvolvimento tendem a ter mais sucesso com a implementação do GHAS.

Por que? O GHAS adota uma abordagem centrada no desenvolvedor para a segurança do software, integrando-se perfeitamente ao fluxo de trabalho do desenvolvedor. Não ter uma representação chave do seu grupo de desenvolvimento no início do processo aumenta o risco de sua implantação e cria um caminho rápido para adesões organizacionais.

Quando os grupos de desenvolvimento são envolvidos mais cedo (idealmente a partir da compra), os grupos de segurança e desenvolvimento podem alcançar um alinhamento precoce no processo. Isso ajuda a remover silos entre os dois grupos, a construir e a reforçar as suas relações de trabalho, e ajuda a afastar os grupos de uma mentalidade comum de “arremessar as coisas pelo muro”. Todas estas coisas ajudam você a apoiar o objetivo geral de ajudar as empresas a se deslocarem e começarem a utilizar o GHAS para abordar as questões de segurança mais cedo no processo de desenvolvimento.

#### {% octicon "people" aria-label="The people icon" %} Funções-chave recomendadas para sua equipe de implementação

Recomendamos algumas funções essenciais para a sua equipe a fim de garantir que os seus grupos estejam bem representados durante todo o planejamento e execução da sua implementação.

É altamente recomendável que a sua equipe de implementação inclua estas funções:
- **Patrocinador Executivo:** De modo geral, é CISO, CIO, VP de Segurança ou VP de Engenharia.
- **Líder de Segurança Técnica:** A liderança de segurança técnica fornece suporte técnico em nome da equipe de segurança durante todo o processo de implementação.
- **Líder de Desenvolvimento Técnico:** A liderança de desenvolvimento técnico fornece suporte técnico e provavelmente liderará o esforço de implementação com a equipe de desenvolvimento.

Também recomendamos que a sua equipe de implementação inclua estas funções:
- **Gerente de Projeto:** Descobrimos que quanto mais cedo um gerente de projeto pode ser introduzido no processo de execução, maior é a probabilidade de sucesso.
- **Engenheiro de Garantia de Qualidade:** Incluir um integrante da equipe de Garantia de Qualidade da sua empresa ajuda a garantir que as alterações no processo sejam levadas em conta para a equipe de controle de qualidade.

### {% octicon "checklist" aria-label="The checklist icon" %} Entenda os principais fatos do GHAS para evitar equívocos comuns

Going into a GHAS implementation, it’s important to understand some key basic facts about what GHAS is and can do, to prevent many common misconceptions companies have going into their GHAS rollouts.

{% note %}

**Observação:** Se estiver interessado em promover a sua formação no GHAS, {% data variables.product.prodname_professional_services %} oferece uma série de opções para formação e treinamento adicionais, incluindo tópicos para os quais a sua empresa precisa se preparar para o GHAS. Estas ofertas podem assumir a forma de oficinas, demonstrações e bootcamps. Os tópicos podem variar desde a implementação do GHAS e do uso básico do GHAS a tópicos mais avançados para continuar desenvolvendo as habilidades da sua equipe. Para obter mais informações sobre como trabalhar com a equipe de {% data variables.product.prodname_professional_services_team %}, consulte "[{% data variables.product.prodname_professional_services %}](#github-professional-services)".

{% endnote %}


#### Fato 1: O GHAS é um conjunto de ferramentas de segurança que requerem ação para proteger seu código.

Não é um software de segurança instalado e esquecido — ter apenas um GHAS não protege seu código. O GHAS é um conjunto de ferramentas que aumentam com valor quando configurados, mantidos, usados em fluxos de trabalho diários e em combinação com outras ferramentas.

#### Fato 2: O GHAS exigirá um ajuste inovador.

Uma vez que o GHAS é definido nos repositórios, há outras etapas que precisam ser realizadas para garantir o funcionamento das necessidades da empresa. A digitalização de código em particular exige uma configuração adicional para ajustar seus resultado como, por exemplo, a personalização do que é sinalizado pelas verificações para ajustar o que é detectado em futuras digitalizações. Muitos clientes descobrem que as digitalizações iniciais ou não obtêm resultados ou obtêm resultados que não são relevantes com base no modelo de ameaça da aplicação e precisam ser ajustados de acordo com as necessidades da empresa.

#### Facto 3: As ferramentas do GHAS são mais efetivas quando usadas em conjunto, mas os programas mais eficientes do AppSec envolvem o uso de ferramentas/atividades adicionais.

O GHAS é mais eficaz quando todas as ferramentas são utilizadas em conjunto. Quando as empresas integram o GHAS a outras ferramentas e atividades como, por exemplo, testes de penetração e scanners dinâmicos, ele melhora ainda a eficácia do programa AppSec. Recomendamos sempre a utilização de múltiplas camadas de proteção.

#### Fato 4: Nem todas as empresas irão usar/precisar de consultas personalizadas de {% data variables.product.prodname_codeql %}, mas elas podem ajudar você a personalizar/apontar para resultados de verificação.

A digitalização de código é fornecida por {% data variables.product.prodname_codeql %} — o mecanismo de análise de código mais poderoso do mundo. Embora muitas empresas estejam entusiasmadas com a perspectiva de serem capazes de escrever consultas personalizadas, para uma grande parte dos nossos clientes, o conjunto base de consultas e consultas adicionais disponíveis na comunidade é, de modo geral, mais do que suficiente. However, many companies may find the need  for custom {% data variables.product.prodname_codeql %} queries to help reduce false positives rates in results or crafting new  queries to target results your company may need.

However, if your company is interested in writing custom {% data variables.product.prodname_codeql %} queries, we recommend  you complete your rollout and implementation of GHAS before exploring custom queries.

{% note %}

**Note:** It’s crucial for your company to have a solid foundation on GHAS before diving deeper into deeper security  practices.

{% endnote %}

When your company is ready, our Customer Success team can help you navigate the requirements that need to be met and can help ensure your company has good use  cases for custom queries.

#### Fact 5: {% data variables.product.prodname_codeql %} scans the whole code base, not just the changes made in a pull request.

When code scanning is run from a pull request, the scan will include the full codebase and not just the changes made in the pull request. While this may seem unnecessary at times, this is an important step to ensure the change has been reviewed all against all interactions in the codebase.

## Examples of successful {% data variables.product.prodname_GH_advanced_security %} rollouts

Now that you have a better understanding of some of the keys to a successful GHAS rollout  and implementation, here are some examples of how our customers made their rollouts successful. Even if your company is in a different place, {% data variables.product.prodname_dotcom %} can help you with building a customized path that suits the needs of your rollout.

### Example rollout for a mid-sized healthcare technology company

A mid-sized healthcare technology company based out of San Francisco completed a successful GHAS rollout process. While they may not have  had a large number of repositories that needed to be enabled, this company’s keys to success included having a well-organized and aligned team for the rollout, with a clearly established key contact to work with {% data variables.product.prodname_dotcom %} to troubleshoot any issues during the process. This allowed them to complete their rollout within two months.

In addition, having an engaged development team allowed the company to have teams using code scanning at the pull request level following the completion of their rollout.

### Example rollout for a mid-sized data platform company

A global data platform company has had great success with GHAS to  date. They’ve completed their initial implementation and are currently progressing through the rollout process. This company is mature in their security posture and tooling, and are well-aligned as an company. This allows them to operate very self-sufficiently and has enabled them to move quickly and smoothly through their rollout.

This company's strong alignment, efficient operations, and security tooling maturity allowed them to implement GHAS quickly and build a good foundation for {% data variables.product.prodname_codeql %}. Since their implementation, they can now automatically enable {% data variables.product.prodname_codeql %} across different repositories.

In addition to their security and technical maturity, another critical key to this company’s success is having a project owner and single point of contact from their team to drive the project forward. Not only is having this key contact crucial, but they are incredibly resourceful and skilled, and directly contribute to the success of the rollout.

## Prerequisites for your company before rolling out GHAS

{% data variables.product.prodname_professional_services %} can help to provide additional support to help your company break down and understand these prerequisites and help you get prepared for the GHAS implementation process.

 ### CI/CD systems and process

If your company has not yet invested in or implemented continuous integration or continuous delivery (CI/CD) systems and processes, we recommend taking this step in conjunction with moving forward with GHAS. This may be a significant shift for your company—we can work with you to provide recommendations and guidance for implementing a CI/CD system, as well as supporting any training that might be needed.

### Requirements to install {% data variables.product.prodname_GH_advanced_security %}

There are a few different paths that can be taken for your GHAS installation based on what combinations of technologies your company uses. This section outlines a quick breakdown of the different paths your company may need to take.

{% ifversion ghes %}

#### {% data variables.product.prodname_ghe_server %}

It’s important that you’re utilizing a version of {% data variables.product.prodname_ghe_server %} (GHES) that will support your company’s needs.

If you’re using an earlier version of GHES (prior to 3.0) and would like to upgrade, there are some requirements that you’ll need to meet before moving forward with the upgrade. Para obter mais informações, consulte:
  - "[Upgrading {% data variables.product.prodname_ghe_server %}](/enterprise-server@2.22/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)"
  - "[Upgrade requirements](/enterprise-server@2.20/admin/enterprise-management/upgrade-requirements)"

If you’re using a third-party CI/CD system and want to use {% data variables.product.prodname_code_scanning %}, make sure you have downloaded the {% data variables.product.prodname_codeql_cli %}. Para obter mais informações, consulte "[Sobre a verificação de código CodeQL no seu sistema de CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)."

If you're working with {% data variables.product.prodname_professional_services %} for your GHAS rollout, please be prepared to discuss these items at length in your kickoff meeting.

{% endif %}

{% ifversion ghec %}

#### {% data variables.product.prodname_ghe_cloud %}

If you’re a {% data variables.product.prodname_ghe_cloud %} (GHEC) customer there are prerequisites that you’ll need to meet depending on what CI/CD you plan to utilize.

Using {% data variables.product.prodname_actions %} for your CI/CD:
- To ensure {% data variables.product.prodname_code_scanning %} can be integrated and utilized properly, you should have a basic understanding of {% data variables.product.prodname_actions %} before proceeding with your installation.

Using a third-party tool for CI/CD:
- To integrate the {% data variables.product.prodname_codeql_cli %}, you should have a basic understanding of the CI/CD system, as well as *nix and Windows—in particular how commands are executed and how success/failure is signaled. For more information about how to integrate a third-party tool, see "[Using CodeQL code scanning with your existing CI system ](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system)."

{% endif %}

## Partnering with GitHub for your rollout

As you prepare for your GHAS implementation, it’s important to  consider what will be required from your company to make this  project successful. Our most successful implementations of GHAS  rely on shared responsibilities between both GitHub and our customers throughout the process with a clearly identified stakeholder from the customer owning the project.

#### Success model for customer and GitHub responsibilities

**Customer responsibilities**
- Completing infrastructure and process prerequisites
- Managing rollout and implementation, including planning and execution
- Internal training
- (Optional) Contributing {% data variables.product.prodname_codeql %} queries to the GitHub Community

**GitHub responsibilities**

- Maintenance and enhancements for features, such as {% ifversion ghes %}{% data variables.product.prodname_ghe_server %}{% endif %}, {% data variables.product.prodname_actions %}, {% data variables.product.prodname_GH_advanced_security %}
- Providing, maintaining, and delivering the following services: {% data variables.product.prodname_dotcom %} Docs, {% data variables.product.prodname_dotcom %} Community, {% data variables.product.prodname_dotcom %} Support

{% note %}

**Note:**  {% data variables.product.prodname_professional_services %} can help support many of the customer responsibilities. To learn more, see "[GitHub services and support](#github-services-and-support)."

{% endnote %}

## {% data variables.product.prodname_dotcom %} services and support

### {% data variables.product.prodname_dotcom %} Support

If you run into any issues during your implementation, you can search our deep documentation for solutions or engage with {% data variables.product.prodname_dotcom %} Support, a team of highly technical engineers that can support you as issues arise. For more information, see "[GitHub Enterprise Support](https://enterprise.github.com/support).

In addition, you can also try our [ {% data variables.product.prodname_gcf %}](https://github.community/).

If you purchased a Premium Support plan, you can submit your ticket in the [Premium Support Portal](https://enterprise.github.com/support). If you’re unsure of which Support plan you purchased, you can reach out to your sales representative or review the plan options.

For more information the Premium support plan options, see:
  - "[Premium Support](https://github.com/premium-support)" {% ifversion ghec %}
  - "[About GitHub Premium Support for {% data variables.product.prodname_ghe_cloud %}](/github/working-with-github-support/about-github-premium-support-for-github-enterprise-cloud)"{% endif %}{% ifversion ghes %}
  - "[About GitHub Premium Support for {% data variables.product.prodname_ghe_server %}](/admin/enterprise-support/overview/about-github-premium-support-for-github-enterprise-server)"{% endif %}

### {% data variables.product.prodname_professional_services %}

Our {% data variables.product.prodname_professional_services_team %} team can partner with you for a successful rollout and implementation of {% data variables.product.prodname_GH_advanced_security %}. We offer a variety of options for the type of guidance and support you expect to need for your implementation. We also have training and bootcamps available to help your company to optimize the value of GHAS.

If you’d like to work with our {% data variables.product.prodname_professional_services_team %} team for your implementation, we recommend you begin thinking about your system design and infrastructure, as well as the number of repositories that you want to set up with GHAS, to begin these conversations. In addition, begin thinking about goals for what you would like to achieve with this rollout.

Implementation is just one step in a successful security-driven journey where you’ll learn how to use GHAS. Once you’ve completed your implementation, there will be more to learn with the rollout throughout your infrastructure and codebases. Speak with your sales representative for more information about all the {% data variables.product.prodname_professional_services_team %} options available.

If you initially opted out of additional services, but find that additional support is  needed as you begin your implementation, please reach out to your sales representative to discuss what services options may be needed to support your implementation.
