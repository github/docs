---
title: Explorar las dependencias de un repositorio
intro: 'Puedes usar el gráfico de dependencias para ver los paquetes de los que depende tu proyecto{% ifversion fpt or ghec %} y los repositorios que dependen de él{% endif %}. Adicionalmente, puedes ver cualquier vulnerabilidad que se detecte en sus dependencias.'
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
  - /github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on
  - /articles/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository
  - /code-security/supply-chain-security/exploring-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Explore dependencies
ms.openlocfilehash: f3735844ad8bcb8fba799723f30a3d55e41ec158
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882735'
---
<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->

## Visualizar la gráfica de dependencias

El gráfico de dependencias muestra las dependencias{% ifversion fpt or ghec %} y los dependientes{% endif %} del repositorio. Para obtener información sobre la detección de dependencias y los ecosistemas compatibles, consulte "[Acerca del gráfico de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %}{% ifversion fpt or ghec %}
4. También puede hacer clic en **Dependents** en "Dependency graph".
![Pestaña Dependents de la página del gráfico de dependencias](/assets/images/help/graphs/dependency-graph-dependents-tab.png){% endif %}

{% ifversion ghes %} Los propietarios de las empresas pueden configurar el gráfico de dependencias a nivel empresarial. Para obtener más información, consulte "[Habilitación del gráfico de dependencias para la empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)".
{% endif %}

### Vista de dependencias

{% ifversion fpt or ghec %} Las dependencias se agrupan por ecosistema. Puedes expandir una dependencia para ver a su vez sus dependencias.  Las dependencias en los repositorios privados, paquetes privados, o archivos no reconocidos se muestran en texto simple. Si el administrador de paquetes de la dependencia se encuentra en un repositorio público, {% data variables.product.product_name %} mostrará un enlace a este.

{% ifversion dependency-submission-api %} Las dependencias enviadas a un proyecto mediante la API de envío de dependencias (beta), aunque también se agrupan por ecosistema, se muestran por separado de las dependencias identificadas mediante archivos de manifiesto o de bloqueo en el repositorio. Estas dependencias enviadas aparecen en el gráfico de dependencias como "Dependencias de instantáneas" porque se envían como una instantánea (o conjunto) de dependencias. Para obtener más información sobre el uso de la API de envío de dependencias, consulta "[Uso de la API de envío de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)".
{% endif %}

Si se han detectado vulnerabilidades en el repositorio, estas se muestran en la parte superior de la vista para los usuarios con acceso a {% data variables.product.prodname_dependabot_alerts %}.

![Gráfico de dependencias](/assets/images/help/graphs/dependencies_graph.png)

{% endif %}

{% ifversion ghes or ghae %} Aparecerá cualquier dependencia directa e indirecta que se especifique en los archivos de bloqueo o manifiesto del repositorio, agrupadas por ecosistema. Si se han detectado vulnerabilidades en el repositorio, estas se muestran en la parte superior de la vista para los usuarios con acceso a {% data variables.product.prodname_dependabot_alerts %}.

![Gráfico de dependencias](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Nota:** {% data variables.product.product_name %} no rellena la vista **Dependents**.

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}
### Vista de dependientes

Para los repositorios públicos, la vista de dependientes muestra cómo otros repositorios utilizan este repositorio. Para mostrar únicamente los repositorios que contienen una biblioteca en un administrador de paquetes, haga clic en la opción **NUMBER Packages** que aparece justo encima de la lista de repositorios dependientes. La cantidad de dependientes es aproximada y podría no siempre empatar con los dependientes listados.

![Gráfica de dependientes](/assets/images/help/graphs/dependents_graph.png)

## Habilitar e inhabilitar la gráfica de dependencias para un repositorio privado

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}

## Cambiar el paquete "Utilizado por"

Es posible que observe que algunos repositorios tienen una sección "Used by" en la barra lateral de la pestaña **Code**. El repositorio tendrá una sección "Used by" si:
  * La gráfica de dependencias está habilitada para el repositorio (consulta la sección anterior para obtener más detalles).
  * El repositorio contiene un paquete que se publica en un [ecosistema de paquetes compatible](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems).
  * Dentro del ecosistema, su paquete tiene un vínculo a un repositorio _público_ donde se almacena el origen.

La sección de "Utilizado por" muestra la cantidad de referencias públicas al paquete que se encontró, y muestra los avatares de algunos de los propietarios de los proyectos dependientes.

![Sección "Used by" de la barra lateral](/assets/images/help/repository/used-by-section.png)

Al hacer clic en cualquier elemento de esta sección, se le redirige a la pestaña **Dependents** del gráfico de dependencias.

La sección de "Utilizado por" representa un solo paquete del repositorio. Si tienes permisos de administrador en un repositorio que contenga paquetes múltiples, puedes elegir qué paquete reporesenta la sección de "Utilizado por".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Debajo de "Análisis y seguridad del código", haz clic en el menú desplegable de la sección "Contador de usado por" y elige un paquete.
  ![Elegir un paquete de "Used by"](/assets/images/help/repository/choose-used-by-package.png)

{% endif %}

## Solución de problemas del gráfico de dependencias

Si tu gráfica de dependencias está vacía, puede que haya un problema con el archivo que contiene tus dependencias. Revisa el archivo para asegurarte de que tiene el formato correcto para el tipo de archivo.

{% ifversion fpt or ghec %} Si el archivo tiene el formato correcto, compruebe su tamaño. El gráfico de dependencias ignora los archivos individuales de manifiesto y de bloqueo que pesen más de 1.5 Mb, a menos que sea usuario de {% data variables.product.prodname_enterprise %}. Este procesa hasta 20 archivos de manifiesto o de bloqueo por repositorio predeterminadamente, así que puedes dividir las dependencias en archivos más pequeños en los subdirectorios del repositorio.{% endif %}

Si un archivo de manifiesto o de bloqueo no se procesa, sus dependencias se omiten en el gráfico de dependencias y no podrán verificarse en busca de dependencias no seguras.

## Información adicional

- "[Acerca del gráfico de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Visualización y actualización de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"{% ifversion ghec %}
- "[Ver información de su organización](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"{% endif %}{% ifversion fpt or ghec %}
- "[Comprender cómo {% data variables.product.prodname_dotcom %} usa y protege los datos](/get-started/privacy-on-github)" {% endif %}
