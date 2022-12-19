---
title: 'Fase 5: Lanzamiento y escalado del análisis de código'
intro: 'Puedes aprovechar las API disponibles para lanzar {% data variables.product.prodname_code_scanning %} mediante programación por equipo y lenguaje en toda la empresa mediante los datos del repositorio que recopilaste anteriormente.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 5. Rollout code scanning
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: abbcdf4c1e4a231a568e8d8cd488877ebdf2fd9f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109915'
---
{% note %}

Este artículo forma parte de una serie sobre la adopción de {% data variables.product.prodname_GH_advanced_security %} a escala. Para ver el artículo anterior de esta serie, consulta "[Fase 4: Creación de documentación interna](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)".

{% endnote %}

### Habilitación del análisis de código

Con los datos que intercalaste en la [fase 2](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale), puedes empezar a habilitar la GHAS y, a continuación, {% data variables.product.prodname_code_scanning %} en los repositorios, lenguaje por lenguaje. El proceso paso a paso para habilitar la GHAS debe tener este aspecto:

1. Habilita la GHAS en el repositorio. Para más información, vea "[Administración de la configuración de seguridad y análisis para el repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)".
1. Crea una solicitud de incorporación de cambios en la rama predeterminada del repositorio con un archivo `codeql-analysis.yml` que contenga un ejemplo de cómo ejecutar CodeQL para ese lenguaje. Para más información, vea "[Creación de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)".
1. Crea una incidencia en el repositorio para explicar por qué se ha generado una solicitud de incorporación de cambios. La incidencia que crees puede contener un vínculo a la comunicación anterior enviada a todos los usuarios, pero también puede explicar los cambios que introduce la solicitud de incorporación de cambios, qué pasos siguientes debe realizar el equipo, cuáles son las responsabilidades del equipo y cómo el equipo debe usar {% data variables.product.prodname_code_scanning %}. Para más información, vea "[Creación de una incidencia](/issues/tracking-your-work-with-issues/creating-an-issue)".

Hay una herramienta disponible públicamente que completa los dos primeros pasos denominada [herramienta de habilitación de la GHAS](https://github.com/NickLiffen/ghas-enablement). Puedes volver a ejecutar la herramienta de habilitación de la GHAS en lotes de lenguajes donde tenga sentido. Por ejemplo, es probable que JavaScript, TypeScript, Python y Go tengan un proceso de compilación similar y, por tanto, podrían usar un archivo de análisis de CodeQL parecido. La herramienta de habilitación de la GHAS también se puede usar para lenguajes como Java, C y C++, pero, debido a la naturaleza variada de la forma en que estos lenguajes se generan y compilan, es posible que tengas que crear archivos de análisis de CodeQL más dirigidos.

{% note %}

**Nota:** Si vas a usar {% data variables.product.prodname_actions %} para controlar {% data variables.product.prodname_code_scanning %} y no usas la [herramienta de habilitación de la GHAS](https://github.com/NickLiffen/ghas-enablement), ten en cuenta que no hay acceso de API al directorio `.github/workflow`. Esto significa que no puedes crear un script sin un cliente de Git subyacente a la automatización. La solución consiste en aprovechar el scripting de Bash en un equipo o contenedor que tenga un cliente de Git. El cliente de Git puede insertar y extraer archivos en el directorio `.github/workflows` donde se encuentra el archivo `codeql-analysis.yml`.

{% endnote %}

Es importante no solo insertar el archivo `codeql-analysis.yml` en la rama predeterminada del repositorio. El uso de una solicitud de incorporación de cambios coloca la propiedad en el equipo de desarrollo para revisar y combinar, lo que permite al equipo de desarrollo obtener información sobre {% data variables.product.prodname_code_scanning %} e involucrarse en el proceso. 

Debes capturar las direcciones URL de solicitud de incorporación de cambios creadas por la automatización y comprobar cada semana si hay alguna actividad y ver cuáles están cerradas. Al cabo de unas semanas, puede que valga la pena crear otra incidencia o enviar correos electrónicos internos si la solicitud de incorporación de cambios sigue sin combinarse.

### Creación de expertos en la materia

Después, puedes continuar con la siguiente fase de la habilitación, que consiste en crear expertos internos en la materia (o SME) y organizar reuniones empresariales. La apertura de solicitudes de incorporación de cambios e incidencias en los repositorios probablemente abordará un gran porcentaje de la adopción, pero no aborda los casos de uso únicos en los que un proceso de compilación, un marco o una biblioteca específicos necesitan la habilitación de marcas de características concretas. Se requiere un enfoque más personalizado y práctico para insertar una adopción alta, especialmente para Java, C y C++.

Es una buena idea celebrar reuniones periódicas en la empresa sobre temas específicos para formar y comentar el lanzamiento con un grupo más grande. Esto es mucho más eficaz para una empresa con miles de repositorios en comparación con trabajar equipo por equipo. Los equipos pueden venir a las sesiones que consideren relevantes para ellos. Algunas sesiones de ejemplo que se han llevado a cabo antes incluyen las siguientes:

- {% data variables.product.prodname_code_scanning_capc %} en un contenedor
- {% data variables.product.prodname_code_scanning_capc %} y Java Struts
- {% data variables.product.prodname_code_scanning_capc %} y JSP

Puedes usar los datos recopilados sobre la distribución de distintos lenguajes entre repositorios para crear reuniones dirigidas.

{% note %}

Para ver el siguiente artículo de esta serie, consulta "[Fase 6: Lanzamiento y escalado del análisis de secretos](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning)".

{% endnote %}
