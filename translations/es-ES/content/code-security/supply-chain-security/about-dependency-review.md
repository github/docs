---
title: Acerca de la revisión de dependencias
intro: 'La revisión de dependencias te permite detectar las dependencias vulnerables antes de que las introduzcas a tu ambiente y te proporciona información sobre la licencia, dependientes y edad de las dependencias.'
versions:
  free-pro-team: '*'
topics:
  - solicitudes de extracción
---

{% note %}

**Nota:** Las revisiones de dependencias se encuentran actualmente en beta y están sujetas a cambios.

{% endnote %}

### Acerca de la revisión de dependencias

{% data reusables.dependency-review.feature-overview %}

Si una solicitud de cambios apunta a la rama predeterminada de tu repositorio y contiene cambios a los archivos de bloqueo o de manifiesto empaquetados, puedes mostrar una revisión de dependencias para ver qué ha cambiado. La revisión de dependencias incluye detalles de los cambios a las dependencias indirectas en los archivos de bloqueo, y te dice si cualquiera de las dependencias que se agregaron o actualizaron contienen vulnerabilidades conocidas.

La revisión de dependencias se encuentra disponible en:

* Todos los repositorios públicos.
* Los repositorios privados que pertenecen a las organizaciones con una licencia de {% data variables.product.prodname_advanced_security %} que tengan la gráfica dependencias habilitada. Para obtener más información, consulta la sección "[Explorar las dependencias de un repositorio](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".

Algunas veces puede que solo quieras actualizar la versión de una dependencia en un manifiesto y generar una solicitud de cambios. Sin embargo, si la versión actualizada de esta dependencia directa también tiene dependencias actualizadas, tu solicitud de cambios podría tener más cambios de lo que esperas. La revisión de dependencias para cada archivo de bloqueo y de manifiesto proporciona un aforma sencilla para ver lo que ha cambiado y te deja saber si cualquiera de las versiones nuevas de las dependencias contienen vulnerabilidades conocidas.

Cuando verificas las revisiones de dependencias en una solicitud de cambios y cambias cualquier dependencia que se marque como vulnerable, puedes evitar que las vulnerabilidades se agreguen a tu proyecto. Para obtener más información acerca de cómo funciona la revisión de dependencias, consulta la sección "[Revisar los cambios a las dependencias en las solicitudes de cambios](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)".

Las {% data variables.product.prodname_dependabot_alerts %} encontrarán vulnerabilidades que ya se encuentran en tus dependencias, pero es mucho mejor evitar introducir problemas potenciales que arreglarlos posteriormente. Para obtener más informació acera de las {% data variables.product.prodname_dependabot_alerts %}, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)".

La revisión de dependencias es compatible con los mismos lenguajes de programación y ecosistemas de administración de paquetes que la gráfica de dependencias. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".
