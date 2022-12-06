---
title: 'Fase 2: Prepararse para la habilitación a escala'
intro: 'En esta fase, prepararás a los desarrolladores y recopilarás datos sobre los repositorios para asegurarte de que los equipos están listos y tienes todo lo que necesitas para los programas piloto y el lanzamiento de {% data variables.product.prodname_code_scanning %} y {% data variables.product.prodname_secret_scanning %}.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 2. Preparation
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 79368897c125ff23541520a253a34a2aae8c7c27
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110092'
---
{% note %}

Este artículo forma parte de una serie sobre la adopción de {% data variables.product.prodname_GH_advanced_security %} a escala. Para ver el artículo anterior de esta serie, consulta "[Fase 1: Alineación con la estrategia y los objetivos de lanzamiento](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals)".

{% endnote %}

## Preparación para la habilitación de {% data variables.product.prodname_code_scanning %}
 
{% data reusables.code-scanning.about-code-scanning %} Para obtener más información, consulta "[Acerca del análisis de código](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)".

El lanzamiento de {% data variables.product.prodname_code_scanning %} en cientos de repositorios puede resultar difícil, sobre todo si no se hace de una forma eficaz. Si sigues estos pasos, te asegurarás de que el lanzamiento sea eficaz y correcto. Como parte de la preparación, trabajarás con los equipos, usarás la automatización para recopilar datos sobre los repositorios y habilitarás {% data variables.product.prodname_code_scanning %}. 

### Preparación de los equipos para {% data variables.product.prodname_code_scanning %}

En primer lugar, prepara a tus equipos para que usen {% data variables.product.prodname_code_scanning %}. Cuantos más equipos usen {% data variables.product.prodname_code_scanning %}, más datos tendrás plara generar planes de corrección y supervisar el progreso del lanzamiento. Durante esta fase, céntrate en aprovechar las API y ejecutar eventos de habilitación internos.

El enfoque principal debe ser preparar tantos equipos como sea posible para que usen {% data variables.product.prodname_code_scanning %}. También puedes animar a los equipos a corregir correctamente, pero se recomienda priorizar la habilitación y el uso de {% data variables.product.prodname_code_scanning %} por encima de la corrección de incidencias durante esta fase.
  
### Recopilación de información sobre los repositorios

Puedes recopilar información mediante programación sobre los distintos lenguajes de programación que se usan en los repositorios y usar esos datos para habilitar {% data variables.product.prodname_code_scanning %} en todos los repositorios que usan el mismo lenguaje, mediante la GraphQL API de {% data variables.product.product_name %}.

{% note %}

**Nota:** Para recopilar estos datos sin ejecutar manualmente las consultas de GraphQL descritas en este artículo, puedes usar nuestra herramienta disponible públicamente. Para obtener más información, consulta el repositorio "[herramienta de habilitación de GHAS](https://github.com/NickLiffen/ghas-enablement)".

{% endnote %}

Si quieres recopilar información de repositorios que pertenecen a varias organizaciones de la empresa, puedes usar la consulta siguiente para obtener los nombres de las organizaciones y, a continuación, introducirlos en la consulta del repositorio. Reemplaza OCTO-ENTERPRISE por el nombre de tu empresa.

```graphql
query {
  enterprise(slug: "OCTO-ENTERPRISE") {
    organizations(first: 100) {
      totalCount
      nodes {
        name
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

Puedes identificar qué repositorios usan los lenguajes mediante la intercalación de repositorios por lenguaje en el nivel de organización. Puedes modificar la consulta de GraphQL de ejemplo siguiente, reemplazando OCTO-ORG por el nombre de la organización.

```graphql
query {
  organization(login: "OCTO-ORG") { 
    repositories(first: 100) {
      totalCount
      nodes {
        nameWithOwner
        languages(first: 100) {
          totalCount
          nodes {
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

Para obtener más información sobre la ejecución de consultas de GraphQL, consulta "[Creación de llamadas con GraphQL](/graphql/guides/forming-calls-with-graphql)".

A continuación, convierte los datos de la consulta de GraphQL en un formato legible, como una tabla.

| Idioma                | Número de repositorios | Nombre de los repositorios                           |
|-------------------------|-----------------|-----------------------------------------|
| JavaScript (TypeScript) | 4212            | org/repo<br /> org/repo |
| Python                  | 2012            | org/repo<br /> org/repo |
| Go                      | 983             | org/repo<br /> org/repo |
| Java                    | 412             | org/repo<br /> org/repo |
| Swift                   | 111             | org/repo<br /> org/repo |
| Kotlin                  | 82              | org/repo<br /> org/repo |
| C                       | 12              | org/repo<br /> org/repo |

Puedes filtrar los lenguajes que actualmente no son compatibles con {% data variables.product.prodname_GH_advanced_security %} de esta tabla.

Si tienes repositorios con varios lenguajes, puedes dar formato a los resultados de GraphQL como se muestra en la tabla siguiente. Filtra los lenguajes que no se admiten, pero conserva todos los repositorios con al menos un lenguaje admitido. Puedes habilitar {% data variables.product.prodname_code_scanning %} en estos repositorios y se analizarán todos los lenguajes admitidos.

| Idiomas            | Número de repositorios | Nombre de los repositorios                            |
|------------------------|-----------------|------------------------------------------|
| JavaScript/Python/Go   | 16              | org/repo <br /> org/repo |
| Rust/TypeScript/Python | 12              | org/repo <br /> org/repo |

Comprender qué repositorios usan qué lenguajes te ayudará a identificar los repositorios candidatos para programas piloto en la fase 3 y te preparará para habilitar {% data variables.product.prodname_code_scanning %} en todos los repositorios lenguaje por lenguaje en la fase 5.

{% ifversion ghes %}

### Habilitación de {% data variables.product.prodname_code_scanning %} para el dispositivo

Para poder continuar con los programas piloto y el lanzamiento de {% data variables.product.prodname_code_scanning %} en la empresa, primero debes habilitar {% data variables.product.prodname_code_scanning %} para el dispositivo. Para obtener más información, consulta "[Configuración del análisis de código para el dispositivo](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance)".

{% endif %}

## Preparación para la habilitación de {% data variables.product.prodname_secret_scanning %}

Si tu proyecto se comunica con un servicio externo, puede que use un token o una clave privada para la autenticación. Si registras un secreto en un repositorio, cualquiera que tenga acceso de lectura al mismo puede utilizarlo para acceder al servicio externo con tus privilegios. {% data variables.product.prodname_secret_scanning_caps %} analizará todo el historial de Git en todas las ramas presentes en los repositorios de {% data variables.product.prodname_dotcom %} en busca de secretos y te alertará{% ifversion secret-scanning-push-protection %} o bloqueará la inserción que contiene el secreto{% endif %}. Para más información, vea "[Acerca del examen de secretos](/code-security/secret-scanning/about-secret-scanning)".

### Consideraciones al habilitar {% data variables.product.prodname_secret_scanning %}

La funcionalidad {% data variables.product.prodname_secret_scanning %} de {% data variables.product.product_name %} es un poco diferente de {% data variables.product.prodname_code_scanning %}, ya que no requiere ninguna configuración específica por lenguaje de programación o por repositorio y requiere menos configuración en general para empezar. Esto significa que habilitar {% data variables.product.prodname_secret_scanning %} en el nivel de organización puede ser fácil, pero hacer clic en **Habilitar todo** en el nivel de organización y marcar la opción **Habilitar {% data variables.product.prodname_secret_scanning %} automáticamente para cada repositorio nuevo** tiene algunos efectos descendentes que debes tener en cuenta:

- **Consumo de licencias**  
  La habilitación de {% data variables.product.prodname_secret_scanning %} para todos los repositorios consumirá todas tus licencias, incluso si nadie usa el análisis de código. No es ningún problema a menos que planees aumentar el número de desarrolladores activos en la organización. Si es probable que el número de desarrolladores activos aumente en los próximos meses, puede que superes el límite de licencias y que no puedas usar {% data variables.product.prodname_GH_advanced_security %} en los repositorios recién creados.
- **Volumen inicial de secretos detectados alto**  
  Si habilitas {% data variables.product.prodname_secret_scanning %} en una organización grande, prepárate para ver un número elevado de secretos detectados. A veces esto choca a las organizaciones y saltan todas las alarmas. Si quieres activar {% data variables.product.prodname_secret_scanning %} en todos los repositorios a la vez, planea cómo responderás a varias alertas en toda la organización.

{% data variables.product.prodname_secret_scanning_caps %} se puede habilitar para repositorios individuales. Para más información, vea "[Configuración de {% data variables.product.prodname_secret_scanning %} para los repositorios](/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories)". {% data variables.product.prodname_secret_scanning_caps %} también se puede habilitar para todos los repositorios de la organización, como se ha descrito anteriormente. Para obtener más información sobre la habilitación para todos los repositorios, consulta "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)".

### Patrones personalizados para {% data variables.product.prodname_secret_scanning %}

{% ifversion ghae %} {% note %}

**Nota:** Los patrones personalizados de {% data variables.product.prodname_secret_scanning %} se encuentran actualmente en versión beta y están sujetos a cambios.

{% endnote %} {% endif %}

{% data variables.product.prodname_secret_scanning_caps %} detecta un gran número de patrones predeterminados, pero también se puede configurar para que detecte patrones personalizados, como formatos de secreto exclusivos de tu infraestructura o usados por integradores que {% data variables.product.prodname_secret_scanning %} de {% data variables.product.product_name %} actualmente no detecta. Para obtener más información sobre los secretos admitidos para los patrones de asociados, consulta "[Patrones de análisis de secretos](/code-security/secret-scanning/secret-scanning-patterns)". 

A medida que auditas los repositorios y hablas con los equipos de seguridad y desarrolladores, crea una lista de los tipos de secretos que usarás más adelante para configurar patrones personalizados para {% data variables.product.prodname_secret_scanning %}. Para más información, vea "[Definición de patrones personalizados para el análisis de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)".


{% note %}

Para ver el artículo siguiente de esta serie, consulta "[Fase 3: Programas piloto](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs)".

{% endnote %}
