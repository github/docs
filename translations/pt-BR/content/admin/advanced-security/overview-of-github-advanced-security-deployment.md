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

![Diagram showing the three phases of GitHub Advanced Security rollout and deployment, including Phase 0: Planning & Kickoff, Phase 1: Pilot projects, Phase 2: Org Buy-in and Rollout for early adopters, and Phase 3: Full org rollout & change management](/assets/images/enterprise/security/advanced-security-phased-approach-diagram.png)


Com base na nossa experiência ajudando clientes com uma implantação bem-sucedida de {% data variables.product.prodname_GH_advanced_security %}, esperamos que a maioria dos clientes queira seguir essas fases. Dependendo das necessidades da sua empresa, talvez seja necessário modificar esta abordagem e alterar ou remover algumas fases ou etapas.

Para um guia detalhado sobre a implementação de cada uma dessas etapas, consulte "[Implantando {% data variables.product.prodname_GH_advanced_security %} na sua empresa](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise)". A próxima seção fornece um resumo de alto nível de cada uma destas fases.

### {% octicon "milestone" aria-label="The milestone icon" %} Fase 0: Planejamento & início

Durante essa fase, o objetivo geral é planejar e preparar-se para a sua implantação, garantindo que você tenha seu pessoal, processos e tecnologias prontos para sua implementação. Você também deve considerar quais critérios de sucesso serão usados para medir a adoção e o uso do GHAS nas suas equipes.

### {% octicon "milestone" aria-label="The milestone icon" %}  Fase 1: Projeto(s) piloto

Para começar a implementar o GHAS, recomendamos começar com alguns projetos/equipes de alto impacto com que pilotar uma primeira implantação. Isto permitirá que um grupo inicial da sua empresa se familiarize com o GHAS, aprenda a habilitar e configurar o GHAS e construa uma base sólida no GHAS antes de fazer a implementação no restante da sua empresa.

### {% octicon "milestone" aria-label="The milestone icon" %}  Phase 2: Organizational buy-in & rollout preparation

A fase 2 é um resumo das fases anteriores e a preparação para uma implantação maior do restante da empresa. Nesta fase, a adesão organizacional pode referir-se à decisão da sua empresa de avançar depois do(s) projeto(s) piloto ou o uso e adoção da empresa GHAS ao longo do tempo (isto é mais comum). Se sua empresa decidir adotar o GHAS ao longo do tempo, a fase 2 poderá continuar na fase 3 e assim por diante.

### {% octicon "milestone" aria-label="The milestone icon" %}  Phase 3: Full organizational rollout & change management

Uma vez que sua empresa está alinhada, você pode começar a implementar o GHAS para o restante da empresa com base no seu plano de implementação. Durante esta fase, é fundamental garantir que um plano foi feito para quaisquer mudanças organizacionais que possam ser feitas durante sua implementação do GHAS e garantir que as equipes entendam a necessidade, valor e impacto da mudança nos fluxos de trabalho atuais.

## Práticas recomendadas para uma implantação bem-sucedida do GHAS

Descobrimos que as empresas que concluíram com sucesso as implementações do GHAS têm várias características semelhantes que ajudam a impulsionar seu sucesso. Para ajudar sua empresa a promover o sucesso da implementação do seu GHAS, revise essas práticas recomendadas.

### {% octicon "checklist" aria-label="The checklist icon" %} Estabeleça objetivos claros para a implantação da sua empresa

O estabelecimento de objetivos pode parecer óbvio, mas vemos que algumas empresas que iniciam o GHAS não têm em mente objetivos claros. É mais difícil para essas empresas obter a adesão organizacional verdadeira necessária para concluir o processo de implantação e perceber o valor da GHAS dentro da sua empresa.

À medida que você começa a planejar para sua implementação, comece a definir os objetivos para o GHAS dentro da sua empresa e certifique-se de que sejam comunicados à sua equipe. Os seus objetivos podem ser altamente detalhados ou simples, desde que haja um ponto de partida e um alinhamento. Isso ajudará a construir uma base para a direção da implantação da sua empresa e poderá ajudar você a construir um plano para chegar lá. If you need assistance with your goals, {% data variables.product.prodname_professional_services %} can help with recommendations based on our experience with your company and prior engagements with other customers.

Here are some high-level examples of what your goals for rolling out GHAS might look like:
  - **Reducing the number of vulnerabilities:** This may be in general, or because your  company was recently impacted by a significant vulnerability that you believe could  have been prevented by a tool like GHAS.
  - **Identifying high-risk repositories:** Some companies may simply want to target repositories that contain the most risk, ready to begin remediating vulnerabilities and reducing risk.
  -  **Increasing remediation rates:** This can be accomplished by driving developer adoption of findings and ensuring these vulnerabilities are remediated in a timely manner, preventing  the accumulation of security debt.
  - **Meeting compliance requirements:** This can be as simple as creating new compliance  requirements or something more specific. We find many healthcare companies use GHAS to prevent the exposure of PHI (Personal Health Information).
  - **Preventing secrets leakage:** This is often a goal of companies that have had (or want to  prevent) critical information leaked such as software keys, customer or financial data, etc.
  - **Dependency management:** This is often a goal for companies that may have fallen  victim due to hacks from unpatched dependencies, or those seeking to prevent these  types of attacks by updating vulnerable dependencies.

### {% octicon "checklist" aria-label="The checklist icon" %} Establish clear communication and alignment between your teams

Clear communication and alignment are critical to the success of any project, and the rollout of GHAS is no different. We’ve found that companies that have clear communication and alignment between their security and development groups, as well as their executive sponsor (either CISO or VP) from the purchase of GHAS through rollout, often have more success with their rollouts.

In addition to ensuring these groups are aligned throughout your GHAS rollout, there are a few specific areas we recommend focusing on.

#### Rollout planning

Como você implementará o GHAS na sua empresa? Provavelmente, haverá muitas ideias e opiniões. Aqui estão algumas perguntas que você deve considerar responder e alinhar antes de avançar:
  - Quais equipes serão incluídas no piloto?
  - Quais projetos estão focados no piloto?
  - Como os projetos devem ser priorizados na execução?
  - Como você planeja medir o sucesso no piloto e para além dele?
  - Qual é o nível de mudança diária que suas equipes irão enfrentar? Como isso será comunicado?
  - Como seus planos de implementação serão comunicados em toda a empresa?
  - Como você planeja treinar suas equipes?
  - How do you plan to manage scan results initially? (Para obter mais informações, consulte a próxima seção sobre "Processando resultados")

#### Processando resultados

Antes de o GHAS ser implementado nas suas equipes, deve haver um claro alinhamento sobre como os resultados devem ser gerenciados ao longo do tempo. We recommend initially looking at results as more informative  and non-blocking. É provável que a sua empresa tenha um pipeline de CI/CD completo. Portanto, recomendamos esta abordagem para evitar bloquear o processo da sua empresa. À medida que você se acostuma com o processamento desses resultados, você poderá aumentar gradualmente o nível de restrição para um ponto que você considera mais preciso para sua empresa.

### {% octicon "checklist" aria-label="The checklist icon" %}  lidere a sua implementação com seus grupos de segurança e desenvolvimento

Muitas empresas lideram seus esforços do GHAS com seu grupo de segurança. Muitas vezes, as equipes de desenvolvimento não são incluídas no processo de implementação até que o piloto seja concluído. No entanto, descobrimos que as empresas que lideram as implementações tanto com as equipes de segurança quanto de desenvolvimento tendem a ter mais sucesso com a implementação do GHAS.

Por que? GHAS takes a developer-centered approach to software security by integrating seamlessly into the developer workflow. Not having key representation from your development group early in the process increases the risk of your rollout and creates an uphill path towards organizational buy-in.

When development groups are involved earlier (ideally from purchase), security and development groups can achieve alignment early in the process. This helps to remove silos  between the two groups, builds and strengthens their working relationships, and helps shift the  groups away from a common mentality of “throwing things over the wall.” All of these things help support the overall goal to help companies shift and begin  utilizing GHAS to address security concerns earlier in the development process.

#### {% octicon "people" aria-label="The people icon" %} Recommended key roles for your rollout team

We recommend a few key roles to have on your team to ensure that your groups are well represented throughout the planning and execution of your rollout and implementation.

We highly recommend your rollout team include these roles:
- **Executive Sponsor:** This is often the CISO, CIO, VP of Security, or VP of Engineering.
- **Technical Security Lead:** The technical security lead provides technical support on behalf of the security team throughout the implementation process.
- **Technical Development Lead:** The technical development lead provides technical support and will likely lead the implementation effort with the development team.

We also recommend your rollout team include these roles:
- **Project Manager:** We’ve found that the earlier a project manager can be introduced into the rollout process the higher the likelihood of success.
- **Quality Assurance Engineer:** Including a member of your company’s Quality Assurance team helps ensure process changes are taken into account for the QA team.

### {% octicon "checklist" aria-label="The checklist icon" %} Understand key GHAS facts to prevent common misconceptions

Going into a GHAS implementation, it’s important to understand some key basic facts about what GHAS is and can do, to prevent many common misconceptions companies have going into their GHAS rollouts.

{% note %}

**Note:** If you’re interested in furthering your GHAS education, {% data variables.product.prodname_professional_services %} provides a variety of options for additional education and training, including topics that your company needs to prepare for GHAS. These offerings may take the form of workshops, demonstrations, and bootcamps. Topics can range from deploying GHAS and basic usage of GHAS to more advanced topics to continue to build your team’s skills. For more information on working with the {% data variables.product.prodname_professional_services_team %} team, see "[{% data variables.product.prodname_professional_services %}](#github-professional-services)."

{% endnote %}


#### Fact 1: GHAS is a suite of security tools that require action to protect your code.

It’s not security software that is installed and forgotten—just having GHAS on its own does not protect your code. GHAS is a suite of tools that increases with value when configured, maintained, used in daily  workflows, and in combination with other tools.

#### Fact 2: GHAS will require adjustment out of the box.

Once GHAS is set up on your repositories, there are additional steps that need to be taken to ensure it works for your company’s needs. Code scanning in particular requires further configuration to fine-tune your results, for example, customizing what is flagged by the scans to adjust what is picked up in future scans. Many customers find that initial scans either pick up no results or results that are not relevant based on the application's threat model and need to be adjusted to their company’s needs.

#### Fact 3: GHAS tools are most effective when used together, but the most effective AppSec programs involve the use of additional tools/activities.

GHAS is most effective when all of the tools are used together. When companies integrate GHAS with other tools and activities, such as penetration testing and dynamic scans, it further improves the effectiveness of the AppSec program. We recommend always utilizing multiple layers of protection.

#### Fact 4: Not all companies will use/need custom {% data variables.product.prodname_codeql %} queries, but they can  help you customize/target scan results.

Code scanning is powered by {% data variables.product.prodname_codeql %}—the world’s most powerful code analysis engine. While  many companies are excited at the prospect of being able to write custom queries, for a  large portion of our customers the base query set and additional queries available in the  community are typically more than sufficient. However, many companies may find the need  for custom {% data variables.product.prodname_codeql %} queries to help reduce false positives rates in results or crafting new  queries to target results your company may need.

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
