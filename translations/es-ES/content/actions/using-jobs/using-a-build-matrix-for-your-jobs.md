---
title: Utilizar una matriz de compilación para tus jobs
shortTitle: Using a build matrix for your jobs
intro: Create a build matrix and define variations for each job.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: 4a49eb53dcb3ea04642dfc76ef2b0a5d411589b9
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 04/07/2022
ms.locfileid: "141528208"
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## <a name="overview"></a>Información general

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-strategy %}

## <a name="creating-a-matrix-of-different-job-configurations"></a>Crear una matriz de varias configuraciones de job diferentes

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-matrix %}

## <a name="canceling-remaining-jobs-if-a-matrix-job-fails"></a>Cancelación de trabajos restantes si se produce un error en un trabajo `matrix`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

## <a name="defining-the-maximum-number-of-concurrent-jobs-in-a-matrix"></a>Definición del número máximo de trabajos simultáneos en un elemento `matrix`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}
