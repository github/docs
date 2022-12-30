---
title: Establecer tu perfil en privado
intro: Un perfil privado muestra solo información limitada y oculta parte de la actividad.
versions:
  fpt: '*'
topics:
  - Profiles
shortTitle: Set profile to private
ms.openlocfilehash: c00718c84d99de95a9ca1352f32954279906451d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148009678'
---
## Acerca de los perfiles privados

Para ocultar partes de la página de perfil, puedes hacer que tu perfil sea privado. Esto también oculta la actividad en varias características sociales en {% data variables.product.prodname_dotcom_the_website %}. Un perfil privado oculta la información a todos los usuarios; actualmente no hay ninguna opción para permitir que usuarios específicos vean tu actividad.

Después de hacer que tu perfil sea privado, todavía puedes ver toda la información cuando visites tu propio perfil.

Los perfiles privados no pueden recibir patrocinios con [{% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors). Para poder optar a {% data variables.product.prodname_sponsors %}, el perfil no puede ser privado.

## Diferencias entre perfiles privados y públicos

Cuando el perfil es privado, se oculta el siguiente contenido de la página del perfil:

- Logros y aspectos destacados.
- Información general de la actividad y fuente de actividades.
- Gráfico de contribución.
- Recuento de seguidores y de perfiles que sigues.
- Botones Seguir y Patrocinar.
- Pertenencias a organizaciones.
- Estrellas, proyectos, paquetes y pestañas de patrocinador.

{% note %}

**Nota**: cuando el perfil es privado, algunos campos opcionales siguen siendo visibles públicamente, como el LÉAME, la biografía y la foto de perfil.

{% endnote %}

## Cambios en la generación de informes sobre sus actividades

Al hacer que tu perfil sea privado, no eliminarás u ocultarás la actividad pasada; esta opción solo se aplica a la actividad mientras la configuración privada está habilitada.

Cuando el perfil es privado, la actividad {% data variables.product.prodname_dotcom_the_website %} no aparecerá en las siguientes ubicaciones:

- Fuentes de actividades para otros usuarios.
- Tablas de clasificación de discusiones.
- Página [Tendencias](https://github.com/trending).

{% note %}

**Nota**: la actividad en repositorios públicos seguirá siendo visible públicamente para cualquier persona que vea esos repositorios, y es posible que algunos datos de actividad sigan estando disponibles a través de la API {% data variables.product.prodname_dotcom %}.

{% endnote %}

## Cambio de la configuración de privacidad del perfil

{% data reusables.user-settings.access_settings %}
1. En «Contribuciones y actividad», activa la casilla situada junto a **Hacer que el perfil sea privado y ocultar actividad**.
{% data reusables.user-settings.update-preferences %}
