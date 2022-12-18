---
title: Acerca de la facturación de GitHub Codespaces
shortTitle: About billing
intro: 'Obtén información sobre los costos de uso de {% data variables.product.prodname_github_codespaces %}, así como las cuotas de uso mensuales que se incluyen con las cuentas personales de {% data variables.product.prodname_dotcom %}.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/about-billing-for-codespaces
  - /github/developing-online-with-codespaces/about-billing-for-codespaces
  - /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
  - /codespaces/codespaces-reference/about-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-github-codespaces.md
ms.openlocfilehash: 24410721878cd77d2528a4d9e8c91633725ce661
ms.sourcegitcommit: 99eb4456062aea31ca381977396417cf92e5798d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179552'
---
## Precios de {% data variables.product.prodname_github_codespaces %}

{% data reusables.codespaces.codespaces-free-for-personal-intro %}

Los cargos se facturan a una organización o empresa cuando se cumplen todas las siguientes condiciones:

- El repositorio desde el que se inicia un codespace (o el repositorio primario, en el caso de un repositorio bifurcado) es propiedad de una organización.
- La organización está configurada para que se le facturen los codespaces creados desde el repositorio o bifurcaciones del repositorio.
- El usuario que crea el codespace pertenece a la organización o es un colaborador externo asociado a la organización, y la organización ha decidido pagar por el uso que este usuario hace de los codespaces que son propiedad de la organización.

De lo contrario, el uso de {% data variables.product.prodname_github_codespaces %} se aplica a la cuenta personal de la persona que creó el codespace y consume parte del uso mensual incluido para su cuenta personal o su cuenta se factura según su uso en exceso de sus cuotas incluidas. 

Para obtener información sobre cómo configurar una organización para que se le facture el uso de un codespace, consulta ["Habilitación de {% data variables.product.prodname_github_codespaces %} para tu organización](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)". Los planes Free, Team y Enterprise para cuentas de organización y empresa no incluyen ningún uso gratuito de {% data variables.product.prodname_github_codespaces %}. 

### Almacenamiento mensual incluido y horas de núcleo para cuentas personales

El siguiente almacenamiento y horas de núcleo de uso están incluidos, sin cargo, para cuentas personales:

| Plan de cuenta | Almacenamiento al mes | Horas de núcleo al mes |
| ------------ | ----------------- | -------------------- |
| {% data variables.product.prodname_dotcom %} Free para cuentas personales | 15 GB al mes | 120 |
| {% data variables.product.prodname_dotcom %} Pro                        | 20 GB al mes | 180 |

{% note %}

**Notas**:
- La unidad de almacenamiento GB al mes es una medida basada en el tiempo, 1 GB al mes es 1 GB de uso de almacenamiento durante un mes entero. El espacio en disco usado por todos los codespaces y las precompilaciones se evalúa una vez cada hora y se vuelve a calcular el uso actual de GB al mes. Por tanto, mientras tengas codespaces y precompilaciones, el uso de GB al mes aumentará a lo largo del mes. Por ejemplo, si el almacenamiento tiene un total de 15 GB y permanece sin cambios durante el ciclo de facturación mensual, habrá usado 7,5 GB a mitad de mes y 15 GB a final de mes. Para obtener más información, consulta "[Facturación del uso de almacenamiento](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-storage-usage)" a continuación.
- Una "hora de núcleo" es una medida que se usa para hacer referencia al uso de proceso incluido. Para calcular las horas principales, multiplica el número de horas durante las cuales un codespace ha estado activo por el multiplicador de la tabla de precios siguiente. Para los tipos de máquina básicos, el multiplicador es el número de núcleos de procesador de la máquina que hospeda el codespace. Por ejemplo, si usas una máquina de dos núcleos para el codespace y está activa durante una hora, habrás usado dos horas de núcleo. Si usas una máquina de ocho núcleos durante una hora, habrás usado ocho horas de núcleo. Si usas una máquina de ocho núcleos durante dos horas, habrás usado 16 horas de núcleo.

{% endnote %}

Recibirás una notificación por correo electrónico cuando hayas usado el 75 %, el 90 % y el 100 % de las cuotas incluidas. Las notificaciones también se mostrarán en un mensaje en {% data variables.product.prodname_vscode_shortname %} y en el cliente web de {% data variables.product.prodname_vscode_shortname %}. Si lo necesitas, puedes desactivar las notificaciones por correo electrónico. Para obtener más información, consulta "[Administración del límite de gasto para GitHub Codespaces](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-usage-and-spending-limit-email-notifications)".

Cuando en una cuenta personal se haya usado todo el almacenamiento o el uso de procesos que esta incluya (lo que se alcance primero) y no se tenga ningún límite de gasto configurado, se bloqueará el uso de {% data variables.product.prodname_github_codespaces %}. Debes configurar un método de pago y un límite de gasto para poder seguir usando {% data variables.product.prodname_github_codespaces %} durante el mes de facturación actual. Al principio del siguiente ciclo de facturación mensual, se restablecerá el uso incluido. No se facturará el almacenamiento mientras el uso de {% data variables.product.prodname_github_codespaces %} esté bloqueado. 

Puedes ver los detalles del uso del mes actual en cualquier momento. Para más información, consulta "[Visualización del uso de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)".

Si la reanudación de tu codespace está bloqueada y quieres seguir trabajando en los cambios realizados en este, puedes llevar a cabo cualquiera de las siguientes acciones:

- Agrega un método de pago y un límite de gasto superior a 0 USD.
- Exporta los cambios del codespace a una rama. Para obtener más información, consulte "[Exportación de cambios a una rama](/codespaces/troubleshooting/exporting-changes-to-a-branch)".
- Espera a que el uso mensual incluido se restablezca al inicio del siguiente ciclo de facturación mensual. 

Si has agotado todo el uso de almacenamiento o el uso de procesos incluidos, y has configurado un método de pago y un límite de gasto, cualquier uso adicional de los codespaces propiedad de tu cuenta personal incurrirá en cargos por cualquier tipo de uso que no tenga ninguna cuota incluida restante. No se te cobrará por el otro tipo de uso hasta que no hayas usado también toda tu cuota incluida.

### Precios por el uso de pago

Una instancia de {% data variables.product.prodname_github_codespaces %} (es decir, un "codespace") incurrirá en cargos por el tiempo de proceso, mientras esté activa, y por la cantidad de espacio en disco que ocupe el codespace, mientras exista. El costo de proceso será proporcional al número de núcleos de procesador que tenga el tipo de máquina que elijas para el codespace, tal y como se muestra en la tabla siguiente. Por ejemplo, el coste del proceso de usar un codespace durante una hora en una máquina de 16 núcleos es ocho veces mayor que en una máquina de dos núcleos.

| Componente           | Tipo de máquina | Unidad de medida | Multiplicador de uso incluido | Price |
| ------------------- | ------------ | --------------- | ------------------------- | ----- |
| Procesos de codespaces  |  2 núcleos      | 1 hora          | 2                         | $0.18 |
|                     |  4 núcleos      | 1 hora          | 4                         | $0.36 |
|                     |  8 núcleos      | 1 hora          | 8                         | $0.72 |
|                     |  16 núcleos     | 1 hora          | 16                        | $1.44 |
|                     |  32 núcleos     | 1 hora          | 32                        | $2.88 |
| Almacenamiento de codespaces  |  Storage     | 1 GB al mes<sup>*</sup> | N/D                | 0,07 USD |

<sup>*</sup> Consulta "[Facturación por el uso de almacenamiento](#billing-for-storage-usage)" a continuación para conocer los detalles sobre la unidad de medida de GB al mes.

Si habilitas la precompilación de los codespaces, esto ameritará cargos adicionales. Para obtener más información, consulta "[Facturación de las precompilaciones de {% data variables.product.prodname_codespaces %} prebuilds](#billing-for-codespaces-prebuilds)".

## Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} se factura en dólares estadounidenses (USD) según la cantidad de tiempo de proceso y el espacio de almacenamiento que usen los codespaces. {% data reusables.codespaces.codespaces-monthly-billing %}

El uso de {% data variables.product.prodname_github_codespaces %} comparte el método de pago y el recibo existentes de la cuenta. Para obtener más información, consulta "[Visualización de tus suscripciones y fecha de facturación](/articles/viewing-your-subscriptions-and-billing-date)".

{% ifversion ghec %} Si has comprado {% data variables.product.prodname_enterprise %} mediante un contrato Enterprise de Microsoft, puedes conectar tu id. de suscripción de Azure a tu cuenta empresarial para habilitar y pagar el uso de {% data variables.product.prodname_github_codespaces %}. Para más información, vea "[Conexión de una suscripción de Azure a la empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

### Facturación del uso de proceso
El uso de proceso de un codespace es el período de tiempo durante el que ese codespace está activo multiplicado por el multiplicador de la tabla de precios correspondiente al tipo de máquina del codespace. El uso total de proceso se calcula sumando el tiempo utilizado por todos los codespaces facturables a una cuenta determinada. Estos totales se comunican al servicio de facturación diariamente y se cobran mensualmente.

Por ejemplo, si un codespace está activo durante 1 hora y 15 minutos, el costo de proceso será el costo por hora del codespace determinado por su tipo de máquina y multiplicado por 1,25.

Puedes controlar el uso de proceso deteniendo los codespaces. Para obtener más información, consulta "[Detención e inicio de un codespace](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)". Los codespaces se detienen automáticamente después de un período configurable de inactividad. El usuario puede configurar el período de tiempo de espera, que también se puede configurar a nivel de organización. Para obtener más información, consulta "[Configuración del período de tiempo de espera para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)" y "[Restricción del período de tiempo de espera de inactividad](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)".

### Facturación del uso de almacenamiento
Con fines de facturación de {% data variables.product.prodname_github_codespaces %}, el almacenamiento comprende el espacio en disco que hayan utilizado todos los codespaces y precompilaciones de la cuenta. Esto incluye todos los archivos que se usan en un codespace, como los repositorios clonados, los archivos de configuración, los datos cargados en el codespace (por ejemplo, la entrada o salida del software que se ejecuta en el repositorio) y las extensiones, entre otros. El almacenamiento se factura por todos los codespaces existentes, independientemente de si están activos o inactivos, con la excepción del uso bloqueado debido a que se ha agotado la cuota de uso incluida o a que se ha alcanzado el límite de gasto. La facturación del almacenamiento de un codespace finaliza cuando este se elimina.

{% note %}

**Notas**: 

- Cuando se usa la configuración predeterminada del contenedor de desarrollo (consulta "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)"), no se cuenta el contenedor predeterminado como almacenamiento usado. Cuando se crea un contenedor personalizado mediante una configuración de contenedor de desarrollo con una imagen base diferente, se cuenta el contenedor como almacenamiento usado.
- Al recompilar el contenedor a partir de la imagen predeterminada, no se cuenta el contenedor base como almacenamiento usado. Para otras imágenes base, todo el almacenamiento consumido por el codespace, incluido el contenedor base, se cuenta como almacenamiento usado.

{% endnote %}

El almacenamiento del codespace se notifica en GB por mes. El mes de facturación se inicia un día fijo de un mes y finaliza el mismo día del mes siguiente. En la mayoría de los casos, el día del mes viene determinado por el día en que se inició el plan de {% data variables.product.prodname_dotcom %}. El almacenamiento de GB al mes se calcula de la siguiente manera. Una vez cada hora, se evalúa el almacenamiento usado por todos los codespaces activos y detenidos actualmente. A continuación, esta cifra se divide por el número de horas del mes de facturación actual: `total storage size / hours this month`. El resultado se suma al total en ejecución del almacenamiento del codespace durante el mes.

Por ejemplo, si tienes un codespace que usa 100 GB de almacenamiento y ha existido durante una hora, habrás usado `100 / (24 * 30) = 0.1388` GB al mese de almacenamiento en un mes de 30 días. Si el uso de {% data variables.product.prodname_github_codespaces %} durante un mes de 30 días consta de dos codespaces de 100 GB que existieron durante tres días completos, habrá `24 * 3` informes por hora para el almacenamiento de estos codespaces, lo que dará como resultado un total de `(24 * 3) * 200 / (24 * 30) = 20` GB al mes.

Para cada informe por hora, el uso de almacenamiento de la hora anterior se calcula en segundos. Como resultado, no se te cobrará por una hora completa de almacenamiento si no existe un codespace durante 60 minutos completos. Al final del mes, {% data variables.product.prodname_dotcom %} redondea tu almacenamiento al número de MB más cercano.

Los propietarios de la organización pueden hacer lo siguiente:
- Enumerar todos los codespaces activos o detenidos actualmente de la organización. Para obtener más información, consulta "[Enumeración de los codespaces de la organización](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)". Además del costo de estos codespaces, los costos de {% data variables.product.prodname_github_codespaces %} del mes actual pueden incluir los costos de los codespaces que existían anteriormente en el mes actual, pero que se han eliminado. 
- Consulta el uso de almacenamiento y proceso total de {% data variables.product.prodname_github_codespaces %} de tu organización para el mes actual hasta la fecha. Para más información, consulta "[Visualización del uso de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)".
- Configura las opciones de la organización para administrar el costo de {% data variables.product.prodname_github_codespaces %}. Para obtener más información, consulta "[Administración del costo de {% data variables.product.prodname_github_codespaces %} en tu organización](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)".

Para estimar los costos por servicios de consumo, puedes usar la [calculadora de precios](https://github.com/pricing/calculator?feature=codespaces) de {% data variables.product.prodname_dotcom %}.

### Facturación para las precompilaciones de los {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.prebuilds-definition %} Para obtener más información, consulta "[Acerca de las precompilaciones de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)".

#### Costos de {% data variables.product.prodname_actions %} para las precompilaciones

Las precompilaciones se crean y actualizan mediante la ejecución de un flujo de trabajo de {% data variables.product.prodname_actions %} en un ejecutor hospedado de {% data variables.product.prodname_dotcom %}. Puedes configurar la forma en la que quieras que se desencadenen automáticamente las actualizaciones de precompilación. Para más información, consulta "[Configuración de precompilaciones](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)".

Al igual que con otros flujos de trabajo, mientras se ejecutan los flujos de trabajo de las precompilaciones, estos consumen los minutos de {% data variables.product.prodname_actions %} incluidos con tu cuenta, si tienes alguna, o bien incurren en cargos como minutos de {% data variables.product.prodname_actions %}. Para obtener más información sobre los precios de los minutos de {% data variables.product.prodname_actions %}, consulta "[Acerca de la facturación de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)". No hay ningún costo de proceso asociado a {% data variables.product.prodname_codespaces %} por la creación o actualización de precompilaciones.

Puedes realizar un seguimiento del uso de los flujos de trabajo y el almacenamiento de las precompilaciones descargando un informe de uso de tu cuenta. Para más información, consulta "[Visualización del uso de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)".

#### Costos de almacenamiento para las precompilaciones

Además de los minutos de {% data variables.product.prodname_actions %}, también se te facturará por el almacenamiento de las precompilaciones asociado a la configuración de cada una de ellas para un repositorio y una región determinados. El almacenamiento de precompilaciones se factura a la misma velocidad que el almacenamiento de los codespaces.

El costo de almacenamiento de una precompilación en una sola región será similar al costo de almacenamiento que se incurrirá por almacenar un único codespace creado a partir de esa precompilación. El costo de almacenamiento del codespace generado puede ser mayor que el costo de la precompilación si, por ejemplo, los comandos `updateContentCommand`y `postCreateCommand` se usan durante la creación del codespace para descargar más archivos en el contenedor de desarrollo.

Los costos de almacenamiento totales asociados a una configuración de precompilación dependerán de los siguientes factores.

- El precio del almacenamiento por GB. Consulta la tabla anterior.
- Tamaño de la precompilación generada en GB.
- Número de regiones en las que está disponible la precompilación (porque se almacena una copia de la precompilación en cada región).
- Número de versiones anteriores de la precompilación que se conservan.

Por lo tanto, el costo de almacenamiento de las precompilaciones generadas por una configuración de precompilación se calcula como `price per GB * size (GB) * regions * versions`.

#### Control del costo de las precompilaciones

Para reducir el consumo de minutos de Acciones, puede establecer una precompilación que se actualice sólo cuando realice un cambio en los archivos de configuración del contenedor de desarrollo o cuando haya una programación personalizada. También puedes administrar el uso del almacenamiento ajustando el número de versiones anteriores que se conservará de cada precompilación. Para obtener más información, consulta "[Configuración de precompilaciones](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)".

Para limitar los costos de almacenamiento asociados a las precompilaciones, puedes optar por crear precompilaciones solo en determinadas regiones y puedes especificar el número de versiones anteriores que se conservará de las precompilaciones. Para obtener más información, consulta "[Configuración de precompilaciones](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)".

{% note %}

**Nota**: Las precompilaciones se pueden actualizar varias veces durante un mes de facturación. Las versiones más recientes de una precompilación pueden ser de mayor o menor tamaño que las versiones anteriores. Esto afectará a los cargos de almacenamiento. Para más información sobre cómo se calcula el almacenamiento durante un mes de facturación, consulta la sección anterior "[Facturación del uso de almacenamiento](#billing-for-storage-usage)".

{% endnote %}

#### Costo de los codespaces creados a partir de precompilaciones

El uso de codespaces creados con precompilaciones se cobra a la misma frecuencia que los codespaces normales.

## Configurar un límite de gastos

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Para obtener información sobre cómo administrar y cambiar el límite de gasto de la cuenta, consulta "[Administración del límite de gasto para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)".

{% data reusables.codespaces.exporting-changes %}

## Limitación de los tipos de máquina para los codespaces propiedad de la organización

De forma predeterminada, se usa el tipo de máquina con menos recursos válidos cuando se crea un codespace. Sin embargo, es posible que los usuarios puedan elegir un tipo de máquina con más recursos. Pueden hacerlo al crear un codespace o pueden cambiar el tipo de máquina de un codespace existente. Para obtener más información, consulta "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)" y "[Cambio del tipo de máquina de tu codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)".

Elegir un tipo de máquina que tenga más recursos afectará al cargo por hora de ese codespace, tal y como se muestra anteriormente. 

Los propietarios de la organización pueden crear una directiva para limitar la elección de tipos de máquina disponibles a los usuarios para los codespaces que se facturan a una organización o cuenta empresarial. Para más información, vea "[Restricción del acceso a tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

## Cómo se maneja la facturación para los repositorios bifurcados

El uso de codespaces creados a partir de un repositorio bifurcado se facturará a tu cuenta personal, a no ser que el repositorio ascendente (o primario) esté en una organización que te haya permitido (como miembro o colaborador externo) usar codespaces en el gasto de la organización.

Por ejemplo, imagina que una organización ha permitido la facturación de codespaces para un miembro o colaborador externo. Si el usuario tiene permiso para bifurcar un repositorio privado propiedad de la organización, posteriormente podrá crear y usar un codespace para el nuevo repositorio en el gasto de la organización. Esto se debe a que la organización es la propietaria del repositorio primario. Ten en cuenta que el propietario de la organización puede quitar el acceso del usuario al repositorio privado, el repositorio bifurcado y, por lo tanto, también al codespace. El propietario de la organización también puede eliminar el repositorio primario, lo que también eliminaría el repositorio bifurcado. Para obtener más información, consulte "[Administración de la directiva de bifurcación para el repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)".

{% data reusables.codespaces.codespaces-disabling-org-billing %}

## Cómo se gestiona la facturación cuando se transfiere un repositorio a otra organización

El uso se calcula cada hora. Una organización paga por el uso de los codespaces creados a partir de cualquier repositorio propiedad de la organización, si la configuración de la organización permite facturar a la organización. Para más información, consulta ["Habilitación de {% data variables.product.prodname_github_codespaces %} para la organización](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#choose-who-can-create-codespaces-that-are-billed-to-your-organization)". Cuando se transfiera un repositorio fuera de la organización, la propiedad y la responsabilidad de facturación de los codespaces asociados a ese repositorio cambiarán en consecuencia.

## Lo que sucede cuando se eliminan usuarios

Si un usuario se elimina de una organización o repositorio, su codespace se borra automáticamente. 
