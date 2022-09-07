---
title: Envío de dependencias
intro: 'Dependency submission API permite enviar dependencias para proyectos, como las dependencias resueltas cuando se crea o compila un proyecto.'
versions:
  feature: dependency-submission-api
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 72ffb8376c33972ab02c0a5fb48504b92fef3cec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080739'
---
## Acerca de Dependency submission API

{% data reusables.dependency-submission.dependency-submission-api-beta %}

{% data reusables.dependency-submission.about-dependency-submission %}

Las dependencias se envían a Dependency submission API en forma de instantánea. Una instantánea es un conjunto de dependencias asociadas a un SHA de confirmación y otros metadatos, que refleja el estado actual del repositorio para una confirmación.  Puedes optar por usar acciones realizadas previamente o crear tus propias acciones para enviar las dependencias a Dependency submission API en el formato necesario cada vez que se compila el proyecto. Para obtener más información sobre el uso de Dependency submission API, consulta "[Uso de Dependency submission API](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)".

Puedes enviar varios conjuntos de dependencias a Dependency submission API para su inclusión en el gráfico de dependencias. La API usa la propiedad `job.correlator` y la categoría `detector.name` de la instantánea para garantizar que se muestren los envíos más recientes para cada flujo de trabajo. La propiedad `correlator` en sí es el campo principal que se usará para mantener la distinción de los envíos independientes. Una propiedad `correlator` de ejemplo podría ser una simple combinación de dos variables disponibles en las ejecuciones de acciones: `<GITHUB_WORKFLOW> <GITHUB_JOB>`.
