---
title: Introducción para adoptar la GitHub Advanced Security a escala
intro: 'Puedes adoptar la {% data variables.product.prodname_GH_advanced_security %} a escala en tu empresa siguiendo las mejores prácticas de la industria y de GitHub.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: Introducción
redirect_from:
  - /admin/advanced-security/overview-of-github-advanced-security-deployment
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/overview-of-github-advanced-security-deployment
  - /admin/advanced-security/deploying-github-advanced-security-in-your-enterprise
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/deploying-github-advanced-security-in-your-enterprise
miniTocMaxHeadingLevel: 2
---

## Acerca de estos artículos

La {% data variables.product.prodname_GH_advanced_security %} (GHAS) ayuda a los equipos a crear código más seguro de forma más rápida utilizando herramientas integradas tales como el escaneo de secretos y el escaneo de código utilizando CodeQL. Para entender las características de seguridad disponibles a través de la {% data variables.product.prodname_GH_advanced_security %}, consulta la sección "[Acerca de la GitHub Advanced Security](/get-started/learning-about-github/about-github-advanced-security)".

La GHAS es una suite de herramientas que requiere una participación activa de los desarrolladores en toda tu empresa. Para ver el mejor retorno de tu inversión, debes aprender cómo utilizar, aplicar y mantener la GHAS.


Creamos un enfoque gradual para las implementaciones de la GHAS que se desarrolla con las mejores prácticas de la industria y de GitHub. Esperamos que la mayoría de los clientes quieran seguir estas fases con base en nuestra experiencia de ayudar a los clientes con un despliegue exitoso de la {% data variables.product.prodname_GH_advanced_security %}, pero podrías necesitar modificar este acercamiento para satisfacer las necesidades de tu empresa.

El habilitar la GHAS a lo largo de una organización grande puede desglosarse en seis fases principales.

1. [**Alinearse a tu estrategia y metas de implementación**](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals): Piensa en cómo se verá el éxito y alinéate en cómo se implementará la GHAS en tu empresa. Esta fase podría tomar solo unos cuantos días o una semana, pero también es una base sólida para el resto de la implementación.

2. [**Prepararse para habilitar a escala**](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale): Prepara a los desarrolladores, recopila datos sobre tus repositorios y garantiza que estás listo para la siguiente fase.

3. [**Programas piloto**](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs): Opcionalmente, haz un piloto de implementación inicial para algunos proyectos y equipos de alto impacto. Esto permitirá que un grupo inicial dentro de tu empresa se familiarice con la GHAS antes de que la implementes en el resto de ella.

4. [**Crear documentación interna**](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation): Crea y comunica la documentación interna para los clientes de la GHAS. Si no proporcionas la documentación adecuada a los desarrolladores, ingenieros de seguridad y al resto del personal que utilizará la GHAS, el valor se perderá en la implementación.

5. [Implementar y escalar el **{% data variables.product.prodname_code_scanning %}**](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning): Aprovechar las API disponibles, implementar automáticamente el {% data variables.product.prodname_code_scanning %} por equipo y por idioma a lo largo de tu empresa, utilizar los datos de repositorio que recopilaste antes.

6. [**Implementar y escalar el {% data variables.product.prodname_secret_scanning %}**](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning): Implementar el {% data variables.product.prodname_secret_scanning %}, lo cual implica menos configuración y, por lo tanto, es más simple de adoptar que el {% data variables.product.prodname_code_scanning %}. Aún así, es crítico que tengas una estrategia para manejar resultados nuevos y viejos.

## {% data variables.contact.github_support %} y {% data variables.product.prodname_professional_services_team %}

Si tienes cualquier problema o preguntas durante tu implementación, puedes buscar en nuestra documentación para encontrar soluciones o contactar al {% data variables.contact.github_support %}. Para obtener más informaciónm, consulta la sección "[Acerca de GitHub Support](/support/learning-about-github-support/about-github-support)".

Si prefieres que se te oriente durante todo el proceso de implementación, {% data variables.product.prodname_professional_services %} puede asociarse contigo para tener un desplilegue e implementación exitosa de la {% data variables.product.prodname_GH_advanced_security %}. Ofrecemos varias opciones de orientación y apoyo. También tenemos disponibles seminarios intensivos y capacitación para ayudar a que tu empresa optimice el valor de la {% data variables.product.prodname_GH_advanced_security %}.

Habla con tu representante de ventas para obtener más información sobre todas las opciones de servicios profesionales disponibles. Para obtener más información, contacta a {% data variables.contact.contact_enterprise_sales %}.

{% note %}

Para ver el primer artículo de esta serie, consulta la sección "[Fase 1: Alinearse a tu estrategia y metas de implementación](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals)".

{% endnote %}
