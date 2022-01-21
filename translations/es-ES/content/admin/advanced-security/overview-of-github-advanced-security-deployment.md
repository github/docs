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

La Fase 2 es una recapitulación de las fases previas y una preparación para una implementación mayor a lo largo del resto de la compañía. En esta fase, la participación organizacional puede referirse a la decisión de tu compañía para avanzar después del (los) proyecto(s) piloto o del uso y adopción de la GHAS en la compañía con el tiempo (esto es lo más común). Si tu compañía decide adoptar la GHAS con el tiempo, entonces la fase 2 puede seguir con la fase 3 y posterior.

### {% octicon "milestone" aria-label="The milestone icon" %}  Fase 3: Implementación organizacional integral & administración de cambios

Una vez que tu compañía se alinee, puedes comenzar a implementar la GHAS en el resto de ella con base en tu plan de implementación. Durante esta fase, es crucial asegurarse de que se haya hecho un plan para abordar cualquier cambio organizacional que necesite hacerse durante tu implementación de GHAS y garantizar que los equipos entiendan la necesidad, valor e impacto de dicho cambio en los flujos de trabajo actuales.

## Mejores prácticas para una implementación exitosa de la GHAS

Hemos visto que las compañías que completan implementaciones exitosas de la GHAS tienen varias características similares que les permiten impulsar su éxito. Para ayudar a tu compañía a incrementar el éxito de la implementación de la GHAS, revisa estas mejores prácticas.

### {% octicon "checklist" aria-label="The checklist icon" %} Establece metas claras para la implementación en tu compañía

El establecer metas podría verse como algo obvio, pero hemos visto que algunas compañías que comienzan su implementación de la GHAS no las tienen en mente. Es más difícil que estas compañías obtengan una verdadera participación organizacional, la cual se requiere para completar el proceso de implementación y comprender el valor de la GHAS en ellas.

Conforme comienzas a planear tu implementación y despliegue, comienza a definir las metas para la GHAS dentro de tu compañía y asegúrate de que estas se le comuniquen a tu equipo. Tus metas pueden tener mucho detalle o ser simples, en tanto exista un punto inicial y un alineamiento. Esto ayudará a crear bases para la dirección de la implementación de tu compañía y para crear un plan para conseguirlo. Si necesitas ayuda para establecer tus metas, {% data variables.product.prodname_professional_services %} puede ayudarte dándote recomendaciones con base en nuestra experiencia con tu compañía y con las interacciones que hemos tenido con otros clientes.

Aquí tienes algunos ejemplos de alto nivel de cómo podrían verse tus metas para implementar la GHAS:
  - **Reducir la cantidad de vulnerabilidades:** Esto puede ser en general o porque tu compañía se vio recientemente impactada por alguna vulnerabilidad significativa, la cual piensas que pudo haberse prevenido con una herramienta tal como la GHAS.
  - **Identificar repositorios de riesgo algo:** Algunas compañías simplemente querrán dirigirse a repositorios que contengan el mayor riesgo, listas para comenzar a remediar las vulnerabilidades y reducir los riesgos.
  -  **Incrementar las tasas de remediación:** Esto puede lograrse impulsando a los desarrolladores a que adopten los hallazgos y garantizando que estas vulnerabilidades se remedien de forma oportuna, previniendo la acumulación de la deuda de seguridad.
  - **Lograr los requisitos de cumplimiento:** Esto puede ser tan simple como crear requisitos de cumplimiento nuevos o algo más específico. Hemos visto que muchas compañías del sector salud utilizan la GHAS para prevenir la divulgación de la PHI (Información Personal sobre la Salud, por sus siglas en inglés).
  - **Prevenir la fuga de secretos:** Esta es, a menudo, la meta de las compañías que han tenido (o quieren prevenir) la fuga de información tal como las claves de software, datos financieros o de cliente, etc.
  - **Administración de dependencias:** Esta es, a menudo, la meta para las compañías que han sido víctimas de hackeos a partir de dependencias no parchadas o de aquellas que quieren prevenir este tipo de ataques mediante la actualización de sus dependencias vulnerables.

### {% octicon "checklist" aria-label="The checklist icon" %} Establecer un alineamiento y comunicación clara entre tus equipos

La comunicación clara y el alineamiento son críticos para el éxito de cualquier proyecto y la implementación de la GHAS no es la exepción. Hemos visto que las compañías que tienen comunicaciones claras y que se alinean entre sus grupos de desarrollo y seguridad, así como con su patrocinador ejecutivo (ya sea el CISO o VP) desde la compra de GHAS hasta su implementación suelen tener más éxito en dichas implementaciones.

Adicionalmente a garantizar que estos grupos se encuentran alineados a lo largo de tu implementación de la GHAS, hay algunas áreas específicas en las que recomendamos te enfoques.

#### Planeación de la implementación

¿Cómo implementarás la GHAS en tu compañía? Lo más seguro es que se presenten muchas ideas y opiniones. Aquí tienes algunas preguntas que deberías considerar responder y con las cuales deberías alinearte antes de seguir:
  - ¿Qué equipos se incluirán en el piloto?
  - ¿Qué proyectos están enfocados en el piloto?
  - ¿Cómo deberían priorizarse los proyectos para la implementación?
  - ¿Cómo planeas medir el éxito del piloto y después de este?
  - ¿Cuál es el nivel de cambio diario que experimentarán tus equipos? ¿Cómo se comunicará esto?
  - ¿Cómo se comunicarán tus planes de implementación en toda la compañía?
  - ¿Cómo planeas capacitar a tus equipos?
  - ¿Cómo planeas administrar los resultados de escaneo inicialmente? (Para obtener más información, consulta la siguiente sección enfocada en el "Procesamiento de resultados")

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
- **Directores de desdarrollo técnico:** Los directores de desarrollo técnico proporcionan soporte técnico y probablemente liderarán los esfuerzos de implementación con el equipo de desarrollo.

También te recomendamos que tu equipo de implementación incluya estos roles:
- **Administrador de proyecto:** Hemos notado que entre más rápido se incluya a un administrador de proyecto en el proceso de implementación, mayor es la probabilidad del éxito.
- **Ingeniero de control de calidad:** El incluir a un miembro del equipo de control de calidad de tu compañía ayuda a garantizar que el equipo de QA tome en cuenta los cambios de proceso.

### {% octicon "checklist" aria-label="The checklist icon" %} Entender hechos clave de la GHAS para prevenir malentendidos comunes

Cuando se inicia una implementación de la GHAS, es importante entender algunos hechos clave básicos sobre qué es la GHAS y qué puede hacer y así prevenir muchos malentendidos comunes que tienen las compañías al iniciar sus implementaciones de la GHAS.

{% note %}

**Nota:** Si te interesa recibir lecciones subsecuentes sobre tu GHAS, {% data variables.product.prodname_professional_services %} cuenta con diversas opciones de educación y capacitación adicional, incluyendo los temas que tu compañía necesite preparar para GHAS. Estas ofertas podrían mostrarse como talleres, demostraciones y capacitaciones intensivas. Los temas pueden ir desde desplegar la GHAS y mostrar su uso básico hasta algunos más avanzados para seguir desarrollando las habilidades de tu equipo. For more information on working with the {% data variables.product.prodname_professional_services_team %} team, see "[{% data variables.product.prodname_professional_services %}](#github-professional-services)."

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

Cuando tu compañía esté lista, nuestro equipo de Éxito del Cliente te ayudará a navegar a través de los requisitos que necesitan cumplirse y que pueden ayudarte a garantizar que tu compañía tenga un buen uso de casos para las consultas personalizadas.

#### Hecho 5: El {% data variables.product.prodname_codeql %} escaneo toda la base de código, no únicamente los cambios que se hacen en una solicitud de cambios.

Cuando el escaneo de código se ejecuta desde una solicitud de cambios, este incluirá a toda la base de código y no solo a los cambios que se realizan en la solicitud de cambios. Si bien esto podría verse como innecesario en algunas ocasiones, es un paso importante para garantizar que los cambios se revisaron contra todas las interacciones en la base de código.

## Ejemplos de implementaciones exitosas de la {% data variables.product.prodname_GH_advanced_security %}

Ahora que tienes un mejor entendimiento de cuáles son algunas de las claves para tener una implementación y despliegue exitosas de la GHAS, aquí tienes algunos ejemplos de cómo nuestros clientes realizaron su implementación exitosamente. Incluso si tu compañía se encuentra en un lugar diferente, {% data variables.product.prodname_dotcom %} puede ayudarte a crear una ruta personalizada que satisfaga las necesidades de tu implementación.

### Implementación de ejemplo para una compañía de tecnología en el sector salud de tamaño medio

Una compañía de tecnología en el sector salud de tamaño medio basada en San Francisco completó su proceso de implementación de la GHAS exitosamente. Si bien podrían no haber tenido una cantidad grande de repositorios que necesitan habilitarse, estas claves del éxito de la compañía incluyen tener un equipo alineado y bien organizado para la implementación, con un contacto clave bien establecido para trabajar con {% data variables.product.prodname_dotcom %} y para solucionar cualquier problema durante el proceso. Esto le permitió completar su implementación en dos meses.

Adicionalmente, el haber incluido a su equipo de desarrollo le permitió tener equipos que utilizaron el escaneo de código a nivel de las solicitudes de cambio después de haber completado su implementación.

### Implementación de ejemplo para una compañía mediana de plataforma de datos

Una compañía global de plataforma de datos tuvo un gran éxito con la GHAS hasta el momento. Completaron su implementación inicial y actualmente están progresando a través del resto de este proceso. Esta compañía tiene una buena madurez en su postura y herramientas de seguridad y está bien alineada como compañía. Esto les permite operar de forma muy autosuficiente y les permitió moverse rápida y eficazmente a lo largo de la implementación.

El alineamiento fuerte, operaciones eficientes y madurez de las herramientas de seguridad de esta compañía les permitió implementar la GHAS rápidamente y construir bases fuertes para el {% data variables.product.prodname_codeql %}. Desde su implementación, ahora pueden habilitar el {% data variables.product.prodname_codeql %} automáticamente a lo largo de los diversos repositorios.

Adicionalmente a su madurez técnica y de seguridad, otra clave crítica en el éxito de esta compañía es tener un propietario del proyecto y un punto de contacto único en su equipo para impulsarlo. No solo fue crucial contar con este contacto clave, sino que presentaron habilidades e ingenio increíbles que contribuyeron directamente con el éxito de la implementación.

## Prerrequisitos para tu compañía antes de implementar la GHAS

Los {% data variables.product.prodname_professional_services %} pueden ayudarte a proporcionar apoyo adicional para ayudar a que tu compañía sintetice y entienda estos prerrequisitos y te ayudará a prepararte para el proceso de implementación de la GHAS.

 ### CI/CD systems and process

Si tu compañía aún no ha invertido o implementado en sistemas y procesos de integración y despliegue contínuos (IC/DC), te recomendamos tomar este paso en conjunto con la implementación de la GHAS. Esto podría representar un cambio importante para tu compañía: podemos trabajar contigo para proporcionar recomendaciones y orientación para implementar un sistema de IC/DC, así como proporcionar apoyo con cualquier capacitación que pudiera necesitarse.

### Requisitos para instalar la {% data variables.product.prodname_GH_advanced_security %}

Hay algunas rutas diferentes que pueden tomarse para tu instalación de la GHAS con base en las combinaciones de tecnologías que utilice tu compañía. Esta sección describe un desglose rápido de las diversas rutas que tu compañía podría necesitar tomar.

{% ifversion ghes %}

#### {% data variables.product.prodname_ghe_server %}

Es importante que estés utilizando una versión de {% data variables.product.prodname_ghe_server %} (GHES) que sea compatible con las necesidades de tu compañía.

Si estás utilizando una versión anterior de GHES (anterior a la 3.0) y te gustaría mejorarla, hay algunos requisitos que tendrás que cumplir antes de seguir con esta mejora. Para obtener más información, consulta:
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

Our {% data variables.product.prodname_professional_services_team %} team can partner with you for a successful rollout and implementation of {% data variables.product.prodname_GH_advanced_security %}. Ofrecemos varias opciones para el tipo de orientación y apoyo que esperas necesitar para tu implementación. También tenemos capacitación habitual e intensiva disponible para ayudar a que tu compañía optimice el valor de la GHAS.

Si te gustaría trabajar con nuestro equipo de {% data variables.product.prodname_professional_services_team %} para tu implementación, te recomendamos que comiences a pensar en tu diseño e infraestructura de sistema, así como en la cantidad de repositorios que quieres configurar con GHAS, para comenzar con estas conversiones. Adicionalmente, comienza a pensar en las metas que te gustaría lograr con esta implementación.

Implementation is just one step in a successful security-driven journey where you’ll learn how to use GHAS. Once you’ve completed your implementation, there will be more to learn with the rollout throughout your infrastructure and codebases. Speak with your sales representative for more information about all the {% data variables.product.prodname_professional_services_team %} options available.

If you initially opted out of additional services, but find that additional support is  needed as you begin your implementation, please reach out to your sales representative to discuss what services options may be needed to support your implementation.
