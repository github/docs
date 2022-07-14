---
title: Generar una verificación de salud para tu empresa
intro: 'Puedes obtener perspectivas sobre la salud general y las solicitudes de {% data variables.product.product_location %} a la API y de Git si generas una verificación de salud.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
product: '{% data reusables.gated-features.generated-health-checks %}'
---

{% note %}

** Nota:** El generar una verificación de salud se encuentra actualmente en beta para {% data variables.product.prodname_ghe_server %} y está sujeto a cambios.

{% endnote %}

## Acerca de las verificaciones de salud generadas

Puedes crear un paquete de compatibilidad para {% data variables.product.product_location %} que contenga muchos datos, tales como los archivos de bitácora y de diagnóstico. Para ayudarte a analizar e interpretar estos datos, puedes generar una verificación de salud. Para obtener más información sobre los paquetes de compatibilidad, consulta la sección "[Proporcionar datos a {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles)".

Una verificación de salud proporciona la siguiente información sobre {% data variables.product.product_location %}.
- La información de la salud general de {% data variables.product.product_location %}, tal como el estado de mejora, almacenamiento y consumo de plazas con licencia
- Una sección de seguridad, la cual se enfoca en el aislamiento de subdominios y autenticación de usuarios
- El análisis de la solicitud de Git, con los detalles sobre los usuarios de Git y repositorios más ocupados
- El análisis de las solicitudes a la API, incluyendo los tiempos más ocupados, las terminales que se solicitan con más frecuencia y los llamadores más activos

Si quieres generar una verificación de salud para {% data variables.product.prodname_ghe_cloud %}, contacta al {% data variables.contact.github_support %}. Para obtener más información, consulta la sección "[Crear un ticket de soporte](/support/contacting-github-support/creating-a-support-ticket)".

## Generar una verificación de salud

Antes de que puedas generar una verificación de salud, debes crear un paquete de compatibilidad. Para obtener más información, consulta "[Proporcionar datos a {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles)".

1. Navega al [{% data variables.contact.support_portal %}](https://support.github.com/).
2. En la esquina superior derecha de la página, haz clic en **Premium**.

   ![Captura de pantalla del enlace "Premium" en el encabezado del portal de Soporte de GitHub.](/assets/images/enterprise/support/support-portal-header-premium.png)

3. A la derecha de **Verificaciones de salud**, haz clic en **Solicitar una verificación de salud**.

   ![Captura de pantalla del botón "Solicitar verificación de salud".](/assets/images/enterprise/support/support-portal-request-health-check.png)

4. Debajo de "Seleccionar una cuenta empresarial", selecciona el menú desplegable y haz clic en una cuenta empresarial.

   ![Captura de pantalla del menú desplegable "cuenta empresarial".](/assets/images/enterprise/support/health-check-dialog-ea.png)

5. Debajo de "Cargar un paquete de compatibilidad", haz clic en **Elegir archivo** y elige un archivo para cargar. Luego, haz clic en **Solicitar verificación de salud**.

   ![Captura de pantalla de los botones "Elegir archivo" y "Solicitar verificación de salud".](/assets/images/enterprise/support/health-check-dialog-choose-file.png)


Después de que solicites una verificación de salud, se programará un job para quenerarla. Después de varias horas o hasta un día, la verificación de salud generada aparecerá en la sección de "Verificaciones de salud" del {% data variables.contact.support_portal %}.

![Captura de pantalla de la sección de verificaciones de salud del {% data variables.contact.support_portal %}.](/assets/images/enterprise/support/support-portal-health-checks-section.png)
