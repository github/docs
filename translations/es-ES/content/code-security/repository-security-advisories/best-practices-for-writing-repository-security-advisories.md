---
title: Procedimientos recomendados para escribir asesorías de seguridad del repositorio
intro: Cuando creas o editas asesorías de seguridad, la información que proporcionas es más fácil de entender para otros usuarios cuando especificas el ecosistema, el nombre del paquete y las versiones afectadas mediante los formatos estándar.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
- Security advisories
- Vulnerabilities
shortTitle: Best practices
ms.openlocfilehash: d5b3e7ebecabd22b0c992432789d9581dda4e16e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148106401"
---
Cualquier usuario con permisos de administrador puede crear y editar una asesoría de seguridad.

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## Acerca de las asesorías de seguridad para repositorios

{% data reusables.security-advisory.security-advisory-overview %} Para obtener más información, consulta "[Acerca de las asesorías de GitHub Security para repositorios](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories)".

## Procedimientos recomendados

Se recomienda usar la sintaxis usada en {% data variables.product.prodname_advisory_database %} (especialmente el formato de versión) al escribir una asesoría de seguridad del repositorio o realizar una contribución de la comunidad a una asesoría de seguridad global.

Si sigues la sintaxis de {% data variables.product.prodname_advisory_database %}, especialmente al definir versiones afectadas:
- Al publicar la asesoría del repositorio, podemos agregar dicha asesoría a {% data variables.product.prodname_advisory_database %} como una asesoría "revisada por {% data variables.product.company_short %}", sin necesidad de solicitar más información.
- {% data variables.product.prodname_dependabot %} tendrá la información para identificar con precisión los repositorios afectados y enviarles alertas de {% data variables.product.prodname_dependabot_alerts %} para notificarles.
- Es menos probable que los miembros de la comunidad sugieran ediciones a tu asesoría para corregir la información incorrecta o la falta de esta.

Puedes agregar o editar una asesoría de repositorio mediante el formulario _Borrador de asesoría de seguridad_. Para más información, vea "[Creación de un aviso de seguridad de repositorio](/code-security/repository-security-advisories/creating-a-repository-security-advisory)". 

Puedes sugerir una mejora en una asesoría global existente mediante el formulario _Mejorar la asesoría de seguridad_. Para más información, vea "[Edición de avisos de seguridad en {% data variables.product.prodname_advisory_database %}](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database)".

### Ecosistema

Debes asignar la asesorías a uno de nuestros ecosistemas admitidos mediante el campo **Ecosistema**. Para obtener más información sobre los ecosistemas que admitimos, consulta "[Exploración de asesorías de seguridad en {% data variables.product.prodname_advisory_database %}](/code-security/dependabot/dependabot-alerts/browsing-security-advisories-in-the-github-advisory-database#github-reviewed-advisories)".

![Captura de pantalla con el campo Ecosistema resaltado en el formulario](/assets/images/help/security/security-advisory-ecosystem.png)

### Nombre del paquete

Se recomienda usar el campo **Nombre del paquete** para especificar qué paquetes se ven afectados porque se requiere información de paquete para las asesorías "revisados por {% data variables.product.company_short %}" en {% data variables.product.prodname_advisory_database %}. La información del paquete es opcional para las asesorías de seguridad de nivel de repositorio, pero la inclusión temprana de esta información simplifica el proceso de revisión cuando publicas la asesoría de seguridad.

![Captura de pantalla con el nombre del paquete resaltado en el formulario](/assets/images/help/security/security-advisory-package-name.png)

### Versiones afectadas

Se recomienda usar el campo **Versiones afectadas** para especificar qué versiones se ven afectadas porque se requiere esta información para las asesorías "revisadas por {% data variables.product.company_short %}" en {% data variables.product.prodname_advisory_database %}. La información de la versión es opcional para las asesorías de seguridad de nivel de repositorio, pero la inclusión temprana de esta información simplifica el proceso de revisión cuando publicas la asesoría de seguridad.

![Captura de pantalla con el campo Versiones afectadas resaltado](/assets/images/help/security/security-advisory-affected-versions.png)

- Una cadena de versión afectada válida consta de uno de los siguientes elementos:
   - Una secuencia de operador de límite inferior.
   - Una secuencia de operador de límite superior.
   - Una secuencia de operadores de límite superior e inferior.
   - Una secuencia de versión específica mediante el operador de igualdad (`=`).
- Cada secuencia de operador debe especificarse como operador, un único espacio y, a continuación, la versión.
   - Los operadores válidos son `=`, `<`, `<=`, `>` o `>=`.
   - La versión debe comenzar por un número, seguido de cualquier número de números, letras, puntos, guiones o caracteres de subrayado (cualquiera que no sea un espacio o coma).
   - Al especificar una secuencia de límite superior e inferior, el límite inferior debe aparecer primero, seguido de una coma y un único espacio y, a continuación, el límite superior.
   {% note %}

   **Nota:** Las cadenas de versión afectadas no pueden contener espacios iniciales o finales.

   {% endnote %}

- Los operadores de límite superior pueden ser inclusivos o exclusivos, es decir `<=` o `<`, respectivamente.
- Los operadores de límite inferior pueden ser inclusivos o exclusivos, es decir `>=` o `>`, respectivamente. Sin embargo, si publicas la asesoría del repositorio y la graduamos en una asesoría global, se aplica una regla diferente: las cadenas de límite inferior solo pueden ser inclusivas, es decir `>=`. El operador de límite inferior exclusivo (`>`) solo se permite cuando la versión es `0`, por ejemplo `> 0`.

  {% note %}

  **Notas:** La limitación de límite inferior:
   - se debe a incompatibilidades con el esquema de vulnerabilidad de código abierto (OSV).
   - solo se aplica cuando se realiza una sugerencia sobre una asesoría existente en {% data variables.product.prodname_advisory_database %}.

  {% endnote %}

- No se pueden especificar varios intervalos de versiones afectados en el mismo campo, como `> 2.0, < 2.3, > 3.0, < 3.2`. Para especificar más de un intervalo, crea una nueva sección **Productos afectados** para cada intervalo haciendo clic en el botón **+ Agregar otro producto afectado**.

  ![Captura de pantalla con el botón resaltado que se va a usar para agregar varios intervalos de versiones afectados](/assets/images/help/security/security-advisory-add-another-affected-product.png)
 - Si el intervalo de versiones afectado incluye solo un límite superior o inferior:
   - El valor implícito siempre es `> 0` si el límite inferior no se especifica explícitamente.
   - El valor implícito siempre es infinito si el límite superior no se especifica explícitamente.

Para obtener más información sobre {% data variables.product.prodname_advisory_database %}, consulta [https://github.com/github/advisory-database](https://github.com/github/advisory-database).
