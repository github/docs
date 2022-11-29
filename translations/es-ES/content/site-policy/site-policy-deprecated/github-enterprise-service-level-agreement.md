---
title: Acuerdo de Nivel de Servicio de GitHub Enterprise
hidden: true
redirect_from:
  - /github-enterprise-cloud-addendum
  - /github-business-cloud-addendum
  - /articles/github-enterprise-cloud-addendum
  - /github/site-policy/github-enterprise-service-level-agreement
  - /github/site-policy-deprecated/github-enterprise-cloud-addendum
versions:
  fpt: '*'
ms.openlocfilehash: e21816ada1c6b6d3062cecb5d4f0144702ea0f8e
ms.sourcegitcommit: 93b306112b5cd5ce482d468a25c9961ad02f87ac
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 08/29/2022
ms.locfileid: '147099306'
---
_Estos términos se aplican a los Clientes que han concedido licencias de Productos antes del 4 de enero de 2021. Los Clientes que compren Productos de GitHub después de esa fecha se dirigirán a https://www.github.com/enterprise-legal para los términos actuales._

**Versión breve:** GitHub garantiza un compromiso del 99,9 % de tiempo de actividad trimestral del servicio de GitHub aplicable (el "**Nivel de Servicio**" o "**SLA**"). Si GitHub no cumple con el SLA, el Cliente tendrá derecho a recibir un crédito de servicio en la cuenta del Cliente ("**Créditos de servicio**").

Para las definiciones de cada característica de Servicio ("**Característica de servicio**") y para revisar las actualizaciones históricas y actual, visite la [página de estado de GitHub](https://www.githubstatus.com/). Los términos en mayúscula que se utilizan, pero no se definen en este SLA, tienen el significado que se les asigna en el acuerdo del cliente aplicable.

## Garantía de tiempo de actividad

"**Tiempo de actividad**" es el porcentaje total de minutos posibles en los que estuvo disponible el servicio aplicable de GitHub en un determinado trimestre natural. GitHub se compromete a mantener un tiempo de actividad de por lo menos 99,9 % para el servicio aplicable de GitHub. El cálculo del Tiempo de actividad para cada Característica de servicio que pueda incluirse en el servicio aplicable de GitHub se describe a continuación ("**Cálculo de tiempo de actividad**"). Si GitHub no cumple con el SLA, el Cliente tendrá derecho a Créditos de servicio basados en los cálculos siguientes ("**Cálculos de créditos de servicio**"). Nota, el tiempo de inactividad no afecta a todos los clientes de la misma forma ni al mismo tiempo.

| **Característica del servicio** | **Cálculo del tiempo de actividad** | **Definiciones** | **Cálculo de créditos de servicio** |
|---|---|---|---|
| **Incidencias**,<br>**Solicitudes de&nbsp;incorporación de cambios (pull)** ,<br>**Operaciones&nbsp;Git**,<br>**Solicitudes de&nbsp;API (solo para características de servicio)** ,<br>**Webhooks**,<br>**Páginas** | (minutos totales en un trimestre natural - tiempo de inactividad)/minutos totales en un trimestre natural | "**Tiempo de inactividad**" se refiere a un periodo de tiempo en donde (a) la tasa de errores excedió el cinco por ciento (5 %) en un minuto dado para cualquier Característica de servicio o (b) el Servicio no estuvo disponible de acuerdo a lo determinado por una combinación de sistemas de supervisión internos y externos de GitHub. | La reclamación de Créditos de servicio podría estar basada en alguno (no ambos) de los siguientes cálculos: <ul><li>10 % de la cantidad que el Cliente pagó por una Característica de servicio en un trimestre natural en donde el Tiempo de actividad para dicha Característica de servicio fue menor que o igual al 99,9 %, pero mayor que el 99,0 %. <BR><BR>O BIEN <BR><BR></li><li>25 % de la cantidad que el Cliente pagó por una Característica de servicio en un trimestre natural en donde el Tiempo de actividad de dicha característica fue menor al 99,0 %.</li></ul> | |
| **Acciones** | (Total de ejecuciones activadas – Ejecuciones no disponibles) / (Total de ejecuciones activadas) x 100 | "**Total de ejecuciones activadas**" es el número total de todas las ejecuciones de acciones que un cliente activa en un trimestre natural. <br><br> "**Ejecuciones no disponibles**" es el número total de ejecuciones dentro del Total de ejecuciones activadas que no lograron ejecutarse en un trimestre natural.  Se produce un error en la ejecución cuando el registro del historial de acciones no captura ninguna salida cinco (5) minutos después de que la activación se realice con éxito. | Lo mismo que antes. |
| **Paquetes** | Tiempo de actividad de transferencias = igual que Acciones <br> <br> Tiempo de actividad de almacenamiento = 100 % - Tasa media de errores* <br> <br> \* El cálculo de tiempo de actividad excluye las transacciones de almacenamiento y uso público que no cuentan para el Total de transacciones de almacenamiento o el Total de transacciones con error (incluyendo los errores de pre-autenticación; errores de autenticación; intentos de transacción para cuentas de almacenamiento sobre sus cuotas prescritas). | "**Tasa de error**" es el número total de Transacciones de almacenamiento con error dividido entre el Total de transacciones de almacenamiento durante un intervalo de tiempo establecido (actualmente, una hora). Si el Total de transacciones de almacenamiento durante un determinado intervalo de una hora es cero, la Tasa de error de ese intervalo es 0 %. <br><br> "**Tasa media de errores**" es la suma de las Tasas de error para cada hora en un trimestre natural dividida entre el número total de horas en un trimestre natural. | Lo mismo que antes. |

## Exclusiones
Se excluyen del Cálculo de tiempo de actividad los errores en la Característica de servicio que resulten de (i) las acciones, omisiones o mal uso del servicio de GitHub aplicable por parte del Cliente, incluyendo las infracciones del Acuerdo; (ii) los errores en la conectividad de Internet del Cliente; (iii) los factores externos al control razonable de GitHub, incluyendo eventos de fuerza mayor; o (iv) el equipo, servicios u otra tecnología del Cliente.

## Canje de créditos de servicio
Si GitHub no cumple con este SLA, el Cliente puede canjear los Créditos de servicio únicamente bajo solicitud a GitHub dentro de treinta (30) días del final del trimestre natural. Las solicitudes por escrito para canjear Créditos de servicio y los informes personalizados mensuales o trimestrales de GitHub Enterprise Cloud deben enviarse a [Soporte de GitHub](https://support.github.com/contact?tags=docs-policy).

Los Créditos de servicio pueden materializarse en forma de reembolso o crédito en la cuenta del Cliente, no pueden intercambiarse por una cantidad en efectivo, se limitan a un máximo de noventa (90) días de servicios pagados por trimestre natural, requieren que el Cliente haya pagado las facturas pendientes, y vencen cuando termina el acuerdo del cliente con GitHub. Los Créditos de servicio son el único recurso y exclusivo para que GitHub cumpla cualquiera de las obligaciones descritas en este SLA en caso de incumplimiento.
