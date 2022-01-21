---
title: Resumen del despliegue de la Seguridad Avanzada de GitHub
intro: 'Ayuda a tu compañía para que se prepare con éxito para adoptar la {% data variables.product.prodname_GH_advanced_security %} (GHAS) revisando y entendiendo estas mejores prácticas, ejemplos de implementación y nuestro acercamiento gradual probado en empresas.'
product: '{% data variables.product.prodname_GH_advanced_security %} es un conjunto de características diseñado para hacer el código empresarial más seguro. Está disponible para {% data variables.product.prodname_ghe_server %} 3.0 o superior, {% data variables.product.prodname_ghe_cloud %} y para los repositorios de código abierto. Para aprender más sobre estas características que se incluyen en {% data variables.product.prodname_GH_advanced_security %}, consulta la sección "[Acerca de la Seguridad Avanzada de GitHub](/get-started/learning-about-github/about-github-advanced-security)".'
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

La {% data variables.product.prodname_GH_advanced_security %} (GHAS) ayuda a los equipos a crear código más seguro de forma más rápida utilizando las herramientas integradas, tales como CodeQL, el motor de análisis de código semántico más avanzado del mundo. La GHAS es una suite de herramientas que requiere una participación activa de los desarrolladores en toda tu empresa. Para realizar el mejor retorno de inversión para tu empresa, debes aprender cómo utilizar, aplicar y mantener la GHAS para proteger tu código verdaderamente.

Uno de los retos más grandes en abordar el software nuevo para una compañía puede ser el proceso de implementación y despliegue, así como traer el cambio cultural para impulsar la participación organizacional necesaria para que dicha implementación tenga éxito.

Para ayudar a que tu compañía entienda y se prepare mejor para este proceso con la GHAS, este resumen se enfoca en:
  - Darte un resumen de cómo podría verse una implementación de GHAS en tu compañía.
  - Ayudarte a preparar tu compañía para esta implementación.
  - Compartir las mejores prácticas para ayudarte a incrementar el éxito en la implementación de tu compañía.

Para entender las características de seguridad que están disponibles con la {% data variables.product.prodname_GH_advanced_security %}, consulta la sección "[Características de seguridad de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

## Método gradual recomendado para las implementaciones de la GHAS

Creamos un enfoque gradual para las implementaciones de la GHAS que se desarrolla con las mejores prácticas de la industria y de GitHub. Puedes utilizar este enfoque para tu implementación, ya sea en asociación con {% data variables.product.prodname_professional_services %} o independientemente.

Si bien se recomienda el enfoque gradual, los ajustes pueden realizarse con base en las necesidades de tu compañía. También te sugerimos crear y apegarte a una línea de tiempo para tu implementación y despliegue. Conforme comienzas tu planeación, podemos trabajar en conjunto para identificar el enfoque y línea de tiempo ideales que funcionen mejor para tu compañía.

![Diagrama que muestra las tres fases de implementación y despliegue de la Seguridad Avanzada de GitHub, incluyendo la Fase 0: Planeación & Inicio, Fase 1: Proyectos piloto, Fase 2: Participación organizacional e implementación para los primeros participantes y Fase 3: Implementación organizacional completa & administración de cambios](/assets/images/enterprise/security/advanced-security-phased-approach-diagram.png)


Con base en nuestra experiencia ayudando a los clientes a tener un despliegue exitoso de la {% data variables.product.prodname_GH_advanced_security %}, esperamos que la mayoría de ellos estén dispuestos a seguir estas fases. Dependiendo de las necesidades de tu compañía, podrías necesitar modificar este enfoque y modificar o eliminar algunas fases o pasos.

Para encontrar una guía detallada de cómo implementar cada una de estas fases, consulta la secicón "[Desplegar la {% data variables.product.prodname_GH_advanced_security %} en tu empresa](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise)". La siguiente sección te proporciona un resumen de alto nivel de cada una de estas fases.

### {% octicon "milestone" aria-label="The milestone icon" %} Fase 0: Planeación & inicio

Durante esta fase, la meta general es planear y prepararte para la implementación, garantizando que tienes lista a la gente, procesos y tecnologías y que estás listo para llevarla a cabo. También debes considerar qué criterios de éxito se utilizarán para medir la adopción de la GHAS y su uso por parte de todos tus equipos.

### {% octicon "milestone" aria-label="The milestone icon" %}  Fase1: Proyecto(s) piloto

Para comenzar a implementar la GHAS, te recomendamos comenzar con unos cuantos equipos/proyectos de alto impacto con los cuales puedas hacer un piloto de la implementación inicial. Esto permitirá que un grupo inicial dentro de tu compañía se familiarice con la GHAS, aprenda cómo habilitarla y configurarla y cree bases sólidas en ella antes de implementarla con el resto de tu compañía.

### {% octicon "milestone" aria-label="The milestone icon" %} Fase 2: Participación organizacional & preparación para la implementación

Phase 2 is a recap of previous phases and preparing for a larger rollout across the remainder of the company. In this phase, organizational buy-in can refer to your company’s decision to move forward after the pilot project(s) or the company’s use and adoption of GHAS over time (this is most common). If your company decides to adopt GHAS over time, then phase 2 can continue into phase 3 and beyond.

### {% octicon "milestone" aria-label="The milestone icon" %}  Fase 3: Implementación organizacional integral & administración de cambios

Once your company is in alignment, you can begin rolling GHAS out to the remainder of the company based on your rollout plan. Durante esta fase, es crucial asegurarse de que se haya hecho un plan para abordar cualquier cambio organizacional que necesite hacerse durante tu implementación de GHAS y garantizar que los equipos entiendan la necesidad, valor e impacto de dicho cambio en los flujos de trabajo actuales.

## Best practices for a successful GHAS rollout

We’ve found that companies that have completed successful GHAS rollouts have several similar characteristics that help drive their success. To help your company increase the success of your GHAS rollout, review these best practices.

### {% octicon "checklist" aria-label="The checklist icon" %} Set clear goals for your company’s rollout

Setting goals may seem obvious, but we do see some companies that begin GHAS rollouts with no clear goals in mind. It’s more difficult for these companies to gain the true organizational buy-in that’s needed to complete the rollout process and realize the value of GHAS within their company.

As you begin planning for your rollout and implementation, begin outlining goals for GHAS within your company and ensure these are communicated to your team. Your goals can be highly detailed or something simple, as long as there is a starting point and alignment. This will help build a foundation for the direction of your company’s rollout and can help you build a plan to get there. If you need assistance with your goals, {% data variables.product.prodname_professional_services %} can help with recommendations based on our experience with your company and prior engagements with other customers.

Here are some high-level examples of what your goals for rolling out GHAS might look like:
  - **Reducing the number of vulnerabilities:** This may be in general, or because your  company was recently impacted by a significant vulnerability that you believe could  have been prevented by a tool like GHAS.
  - **Identifying high-risk repositories:** Some companies may simply want to target repositories that contain the most risk, ready to begin remediating vulnerabilities and reducing risk.
  -  **Increasing remediation rates:** This can be accomplished by driving developer adoption of findings and ensuring these vulnerabilities are remediated in a timely manner, preventing  the accumulation of security debt.
  - **Meeting compliance requirements:** This can be as simple as creating new compliance  requirements or something more specific. We find many healthcare companies use GHAS to prevent the exposure of PHI (Personal Health Information).
  - **Preventing secrets leakage:** This is often a goal of companies that have had (or want to  prevent) critical information leaked such as software keys, customer or financial data, etc.
  - **Dependency management:** This is often a goal for companies that may have fallen  victim due to hacks from unpatched dependencies, or those seeking to prevent these  types of attacks by updating vulnerable dependencies.

### {% octicon "checklist" aria-label="The checklist icon" %} Establish clear communication and alignment between your teams

Clear communication and alignment are critical to the success of any project, and the rollout of GHAS is no different. Hemos visto que las compañías que tienen comunicaciones claras y que se alinean entre sus grupos de desarrollo y seguridad, así como con su patrocinador ejecutivo (ya sea el CISO o VP) desde la compra de GHAS hasta su implementación suelen tener más éxito en dichas implementaciones.

In addition to ensuring these groups are aligned throughout your GHAS rollout, there are a few specific areas we recommend focusing on.

#### Rollout planning

How will you roll out GHAS to your company? There will likely be many ideas and opinions. Here are some questions you should consider answering and aligning on before moving  forward:
  - What teams will be included in the pilot?
  - What projects are focused on in the pilot?
  - How should projects be prioritized for rollout?
  - How do you plan to measure success in the pilot and beyond?
  - What is the level of daily change your teams will be taking on? How will that be  communicated?
  - How will your rollout plans be communicated across the company?
  - How do you plan to train your teams?
  - How do you plan to manage scan results initially? (For more information, see the next section on "Processing results")

#### Procesar los resultados

Antes de implementar la GHAS en tus equipos, debería de haber un alineamiento claro en cómo se deben administrar los resultados con el paso del tiempo. Te recomendamos ver los resultados inicialmente, conforme sean más informativos, y sin bloquear. Es probable que tu compañía tenga un mapa completo de IC/DC, así que recomendamos este enfoque para evitar bloquear sus procesos. Conforme te acostumbres a procesar estos resultados, podrás incrementar gradualmente el nivel de restricción hasta un punto en el que se sienta más adecuado para tu compañía.

### {% octicon "checklist" aria-label="The checklist icon" %}  Dirigir tu implementación tanto con tu equipo de seguridad como con los grupos de desarrllo

Muchas compañías dirigen su implementación de la GHAS con su grupo de seguridad. A menudo, no se incluye a los equipos de desarrollo en el proceso de implementación sino hasta que concluye el piloto. Sin embargo, nos hemos dado cuenta de que las compañías que dirigen sus implementaciones tanto con su equipo de seguridad como con el de desarrollo suelen tener más éxito con la implementación de su GHAS.

¿Por què? La GHAS lleva un enfoque centrado en los desarrolladores para abordar la seguridad del software, integrándose fácilmente en el flujo de trabajo de estos. El no tener una representación clave de tu grupo de desarrollo en las fases tempranas del proceso incrementará el riesgo de la implementación y creará una pendiente para la participación organizacional.

Cuando se involucra tempranamente a los grupos de desarrollo (idealmente, desde la compra), tanto estos como los de seguridad pueden lograr un alineamiento temprano en el proceso. Esto ayuda a eliminar brechas entre ambos grupos, crea fortaleza en sus relaciones laborales y ayuda a evitar la mentalidad común de "aventar las cosas a la pared". Todo esto ayuda a apoyar la meta general de ayudar a las compañías a cambiar y comenzar a utilizar la GHAS para abordar las preocupaciones de seguridad de forma más temprana en el proceso de desarrollo.

#### {% octicon "people" aria-label="The people icon" %} Roles clave recomendados para tu equipo de desarrollo

Te recomendamos algunos roles clave para que los tengas en tu equipo y así te asegures de que tus grupos están bien representados a lo largo de la planeación y ejecución de tu implementación y despliegue.

Te recomendamos ampliamente que tu equipo de implementación incluya estos roles:
- **Patrocinador ejecutivo:** A menudo es el CISO, CIO, VP de Seguridad o VP de Ingeniería.
- **Líder de Seguridad Técnica:** El líder de seguridad técnica proporciona soporte técnico en nombre del equipo de seguridad durante todo el proceso de implementación.
- **Technical Development Lead:** The technical development lead provides technical support and will likely lead the implementation effort with the development team.

We also recommend your rollout team include these roles:
- **Project Manager:** We’ve found that the earlier a project manager can be introduced into the rollout process the higher the likelihood of success.
- **Quality Assurance Engineer:** Including a member of your company’s Quality Assurance team helps ensure process changes are taken into account for the QA team.

### {% octicon "checklist" aria-label="The checklist icon" %} Understand key GHAS facts to prevent common misconceptions

Going into a GHAS implementation, it’s important to understand some key basic facts about what GHAS is and can do, to prevent many common misconceptions companies have going into their GHAS rollouts.

{% note %}

**Nota:** Si te interesa recibir lecciones subsecuentes sobre tu GHAS, {% data variables.product.prodname_professional_services %} cuenta con diversas opciones de educación y capacitación adicional, incluyendo los temas que tu compañía necesite preparar para GHAS. These offerings may take the form of workshops, demonstrations, and bootcamps. Topics can range from deploying GHAS and basic usage of GHAS to more advanced topics to continue to build your team’s skills. For more information on working with the {% data variables.product.prodname_professional_services_team %} team, see "[{% data variables.product.prodname_professional_services %}](#github-professional-services)."

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

A mid-sized healthcare technology company based out of San Francisco completed a successful GHAS rollout process. Si bien podrían no haber tenido una cantidad grande de repositorios que necesitan habilitarse, estas claves del éxito de la compañía incluyen tener un equipo alineado y bien organizado para la implementación, con un contacto clave bien establecido para trabajar con {% data variables.product.prodname_dotcom %} y para solucionar cualquier problema durante el proceso. This allowed them to complete their rollout within two months.

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

If you’re using an earlier version of GHES (prior to 3.0) and would like to upgrade, there are some requirements that you’ll need to meet before moving forward with the upgrade. Para obtener más información, consulta:
  - "[Mejorar el {% data variables.product.prodname_ghe_server %}](/enterprise-server@2.22/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)"
  - "[Requisitos de mejora](/enterprise-server@2.20/admin/enterprise-management/upgrade-requirements)"

If you’re using a third-party CI/CD system and want to use {% data variables.product.prodname_code_scanning %}, make sure you have downloaded the {% data variables.product.prodname_codeql_cli %}. Para obtener más información, consulta la sección "[Acerca del escaneo de código de CodeQL en tu sistema de IC](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)."

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

Si se te presenta algún problema durante tu implementación, puedes buscar las soluciones en nuestra documentación más específica o contactar al Soporte de {% data variables.product.prodname_dotcom %}, el cual es un equipo de ingenieros técnicos especializados que pueden apoyarte cuando tengas problemas. For more information, see "[GitHub Enterprise Support](https://enterprise.github.com/support).

In addition, you can also try our [ {% data variables.product.prodname_gcf %}](https://github.community/).

If you purchased a Premium Support plan, you can submit your ticket in the [Premium Support Portal](https://enterprise.github.com/support). If you’re unsure of which Support plan you purchased, you can reach out to your sales representative or review the plan options.

For more information the Premium support plan options, see:
  - "[Premium Support](https://github.com/premium-support)" {% ifversion ghec %}
  - "[About GitHub Premium Support for {% data variables.product.prodname_ghe_cloud %}](/github/working-with-github-support/about-github-premium-support-for-github-enterprise-cloud)"{% endif %}{% ifversion ghes %}
  - "[Acerca del Soporte Premium de GitHub para {% data variables.product.prodname_ghe_server %}](/admin/enterprise-support/overview/about-github-premium-support-for-github-enterprise-server)"{% endif %}

### {% data variables.product.prodname_professional_services %}

Our {% data variables.product.prodname_professional_services_team %} team can partner with you for a successful rollout and implementation of {% data variables.product.prodname_GH_advanced_security %}. We offer a variety of options for the type of guidance and support you expect to need for your implementation. We also have training and bootcamps available to help your company to optimize the value of GHAS.

Si te gustaría trabajar con nuestro equipo de {% data variables.product.prodname_professional_services_team %} para tu implementación, te recomendamos que comiences a pensar en tu diseño e infraestructura de sistema, así como en la cantidad de repositorios que quieres configurar con GHAS, para comenzar con estas conversiones. In addition, begin thinking about goals for what you would like to achieve with this rollout.

Implementation is just one step in a successful security-driven journey where you’ll learn how to use GHAS. Once you’ve completed your implementation, there will be more to learn with the rollout throughout your infrastructure and codebases. Speak with your sales representative for more information about all the {% data variables.product.prodname_professional_services_team %} options available.

If you initially opted out of additional services, but find that additional support is  needed as you begin your implementation, please reach out to your sales representative to discuss what services options may be needed to support your implementation.
