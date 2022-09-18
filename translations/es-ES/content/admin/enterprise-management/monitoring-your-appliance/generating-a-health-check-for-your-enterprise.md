---
title: Generar una comprobación de estado para su empresa
intro: 'Puedes obtener información sobre el estado general y las solicitudes de GIT y API de {% data variables.product.product_location %} mediante la generación de una comprobación de estado.'
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
ms.openlocfilehash: f02fc61f050fc01a69f9fafe2dcdc95d91322dfa
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '146460020'
---
{% note %}

**Nota**: La generación de una comprobación de estado está actualmente en versión beta para {% data variables.product.prodname_ghe_server %} y está sujeta a cambios.

{% endnote %}

## Acerca de las comprobaciones de estado generadas

Puede crear un conjunto de soporte técnico para {% data variables.product.product_location %} que contenga una gran cantidad de datos, como los archivos de registro y diagnóstico. Para ayudar a analizar e interpretar estos datos, puede generar una comprobación de estado. Para obtener más información sobre los conjuntos de soporte técnico, vea "[Proporcionar datos a {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles)".

Una comprobación de estado proporciona la siguiente información sobre {% data variables.product.product_location %}.
- Información sobre el estado general de {% data variables.product.product_location %}, como el estado de la actualización, el almacenamiento y el consumo de puestos de licencia.
- Una sección de seguridad, que se centra en el aislamiento de subdominio y la autenticación de usuario.
- Análisis de solicitudes de Git, con detalles sobre los repositorios más ocupados y los usuarios de Git 
- Análisis de solicitudes de API, incluidos los momentos de mayor actividad, los puntos de conexión solicitados con más frecuencia y los autores de llamadas más activos

Si deseas generar una comprobación de estado de {% data variables.product.prodname_ghe_cloud %}, ponte en contacto con {% data variables.contact.github_support %}. Para obtener más información, consulta "[Creación de una incidencia de soporte técnico](/support/contacting-github-support/creating-a-support-ticket)".

## Generar una comprobación de estado

Para poder generar una comprobación de estado debe crear un conjunto de soporte técnico. Para obtener más información, vea "[Proporcionar datos a {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles)".

1. Vaya a [{% data variables.contact.support_portal %}](https://support.github.com/).
2. En la esquina superior derecha de la página, haga clic en **Premium**.

   ![Captura de pantalla del vínculo "Premium" en el encabezado del Portal de soporte técnico de GitHub.](/assets/images/enterprise/support/support-portal-header-premium.png)
   
3. A la derecha de **Health Checks** (Comprobaciones de estado), haga clic en **Request Health Check** (Solicitar comprobación de estado).

   ![Captura de pantalla del botón "Request Health Check" (Solicitar comprobación de estado).](/assets/images/enterprise/support/support-portal-request-health-check.png)
   
4. En "Select an enterprise account" (Seleccionar una cuenta de empresa), seleccione el menú desplegable y haga clic en una cuenta de empresa.

   ![Captura de pantalla del menú desplegable "Enterprise account" (Cuenta de empresa).](/assets/images/enterprise/support/health-check-dialog-ea.png)
   
5. En "Upload a support bundle" (Cargar un conjunto de soporte técnico), haga clic en **Choose file** (Elegir archivo) y elija un archivo para cargarlo. Después, haga clic en **Request Health Check** (Solicitar comprobación de estado).

   ![Captura de pantalla de los botones "Choose file" (Elegir archivo) y "Request Health Check" (Solicitar comprobación de estado).](/assets/images/enterprise/support/health-check-dialog-choose-file.png)
   

Después de solicitar una comprobación de estado, se programa un trabajo para generar la comprobación de estado. En un plazo que varía entre varias horas y un día, la comprobación de estado generada aparecerá en la sección "Health Checks" (Comprobaciones de estado) de {% data variables.contact.support_portal %}.

![Captura de pantalla de la sección Health Checks (Comprobaciones de estado) de {% data variables.contact.support_portal %}.](/assets/images/enterprise/support/support-portal-health-checks-section.png)
