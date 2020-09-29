---
title: GitHub Insights y la protección de datos para tu organización
intro: '{% data variables.product.prodname_insights %} analiza tus datos de {% data variables.product.prodname_ghe_server %}. Estos datos podrían incluir datos personales de individuos en tu organización quienes podrían tener derecho a entender cómo se utilizan éstos.'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/github-insights-and-data-protection-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Para obtener más información acerca de las condiciones normativas de {% data variables.product.prodname_insights %}, consulta tu contrato de suscripción de {% data variables.product.prodname_ghe_one %}.

Para evitar las dudas, ninguna información anterior deberá considerarse como asesoría legal proporcionada por {% data variables.product.prodname_dotcom %}. Eres responsable de asegurar tu propio análisis legal de la información aquí proporcionada y de dar cumplimiento a las leyes de protección de privacidad y datos. Dependerá de ti si quieres utilizar {% data variables.product.prodname_insights %} para procesar los datos de tus usuarios y empleados, y si lo haces, serás el único responsable para ejecutar dicho procesamiento en cumplimiento con las leyes aplicables.

### Los roles y responsabilidades de la organización

Cuando utilizas {% data variables.product.prodname_insights %}, tu organización es el controlador de los datos, porque ésta determina cómo, cuándo y si {% data variables.product.prodname_insights %} procesará cualquier tipo de datos personales de los individuos. Tu organización es la única responsable para garantizar que cumples con todas las leyes aplicables sobre el procesamiento de datos con {% data variables.product.prodname_insights %}.

### Recomendaciones de privacidad de datos

Tienes todo el control sobre las métricas, reportes, repositorios y colaboradores a incluir antes de comenzar a utilizar {% data variables.product.prodname_insights %}. Los datos que proceses con {% data variables.product.prodname_insights %} podrán descargarse únicamente de tu instalación de {% data variables.product.prodname_ghe_server %}. Considera equilibrar los riesgos con los beneficios de analizar datos personales.

- **Desarrolla un plan claro de análisis de datos**: Debes entender claramente lo que quieres analizar, y por qué, y después considerar como puede ayudarte {% data variables.product.prodname_insights %} a encontrar estas respuestas.

- **Considera una valoración de impacto en la protección de datos**: Si el uso de {% data variables.product.prodname_insights %} que propones involucra el procesamiento de datos personales, considera completar una valoración de impacto en la protección de datos o completar de otra forma un análisis legal del uso que pretendes tener.

### Decidir qué datos utilizar

- **Decide qué repositorios incluir**: Antes de comenzar un análisis en {% data variables.product.prodname_insights %}, considera qué repositorios incluirás. Los administradores pueden incluir repositorios cuando agregan organizaciones y pueden habilitar o inhabilitar los repositorios en cualquier momento. Para obtener más información sobre agregar organizaciones a {% data variables.product.prodname_insights %}, consulta la sección "[Administrar organizaciones](/insights/installing-and-configuring-github-insights/managing-organizations)". Para obtener más información sobre habilitar e inhabilitar repositorios, consulta la sección "[Administrar repositorios](/insights/installing-and-configuring-github-insights/managing-repositories)".

- **Decide las métricas y reportes a incluir**: Los administradores pueden habilitar e inhabilitar las métricas y reportes disponibles para todos los usuarios en cualquier momento. Los administradores controlan los datos de {% data variables.product.prodname_insights %} a los cuales tienen acceso los usuarios en tu instalación de {% data variables.product.prodname_ghe_server %}. Para obtener más información, consulta "[Administrar métricas e informes disponibles](/insights/installing-and-configuring-github-insights/managing-available-metrics-and-reports)".

- **Decide qué colaboradores incluir**: Los administradores pueden inhabilitar los datos de un colaborador específico para que no se procesen en las métricas y reportes. Para obtener más información acerca de administrar los datos de un colaborador, consulta la sección "[Administrar colaboradores y equipos](/insights/installing-and-configuring-github-insights/managing-contributors-and-teams)".

### Derechos del usuario

De acuerdo con diversas regulaciones de protección de datos, tales como la Regulación General para la Protección de Datos (GDPR, por sus siglas en inglés), los usuarios podrían tener derecho a solicitar que se les excluya del procesamiento, acceso y corrección, o de solicitar que se borre sus datos personales. Como el controlador de los datos, tu organización deberá evaluar si la solicitud de un usuario en particular es válida, y de ser adecuado, tomar las acciones para completar la solicitud.

- **Exclusión del procesamiento**: Los usuarios tendrán el derecho de que se excluya su información personal del procesamiento. Los administradores tienen la capacidad de eliminar los datos de los contribuyentes del procesamiento en {% data variables.product.prodname_insights %}, y los reportes y métricas resultantes excluirán los datos del colaborador como consecuencia. Para obtener más información, consulta "[Administrar colaboradores y equipos](/insights/installing-and-configuring-github-insights/managing-contributors-and-teams)".

- **Acceso**: Los usuarios podrían tener el derecho de solicitar ver qué datos personales se están procesando. Cada métrica y reporte cuenta con una descripción detallada de qué datos personales se están procesando. Para obtener más información, consulta la sección "[Métricas disponibles con {% data variables.product.prodname_insights %}](/insights/exploring-your-usage-of-github-enterprise/metrics-available-with-github-insights)". Los datos sin procesar están disponibles a través de la API de {% data variables.product.prodname_enterprise %}. Tu organización es responsable por cualquier decisión para procesar datos personales y por llevar a cabo dichas solicitudes.

- **Corrección y borrado**: Los usuarios podrían tener el derecho de rectificar o eliminar sus datos personales. Los datos utilizados en {% data variables.product.prodname_insights %} se derivan de los datos existentes que agregas o generas desde tu instalación de {% data variables.product.prodname_ghe_server %}. La corrección y borrado deberán seguir los procesos existentes de tu organización para corregir y eliminar los datos de {% data variables.product.prodname_ghe_server %}.

- **Transparencia con respecto al procesamiento**: Cada métrica y reporte tiene una descripción detallada de los datos personales que se están procesando. Para obtener más información, consulta la sección "[Métricas disponibles con {% data variables.product.prodname_insights %}](/insights/exploring-your-usage-of-github-enterprise/metrics-available-with-github-insights)".
