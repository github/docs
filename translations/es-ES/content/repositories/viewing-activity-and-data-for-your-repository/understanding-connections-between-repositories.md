---
title: Entender las conexiones entre repositorios
intro: Usa el gráfico de red y la lista de bifurcaciones para comprender las redes de bifurcación.
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-repository-s-network
  - /articles/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/viewing-a-repositorys-network
  - /articles/understanding-connections-between-repositories
  - /articles/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/viewing-the-dependencies-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Connections between repositories
ms.openlocfilehash: 46cc440093c3ca8dc0952933847a6f04b0446661
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191367'
---
## Ver la red de un repositorio

El gráfico de red muestra el historial de ramas de toda la red del repositorio, incluidas las bifurcaciones de rama. Este gráfico es una escala de tiempo de las confirmaciones más recientes y muestra hasta 100 de las ramas insertadas más recientemente. La primera fila hace referencia a la fecha y la primera columna hace referencia al propietario de la rama. Usa teclas de dirección u otros métodos abreviados de teclado para navegar más fácilmente por el gráfico. Se proporcionan en la ventana emergente "Métodos abreviados de teclado disponibles" del gráfico.


![Gráfico de red del repositorio](/assets/images/help/graphs/repo_network_graph.png)

{% tip %}

**Sugerencia:** para ver ramas antiguas, haga clic y arrastre dentro del gráfico.

{% endtip %}

## Acceder al gráfico de la red

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. En la barra lateral de la izquierda, haga clic en **Red**.
![Pestaña Red](/assets/images/help/graphs/network_tab.png)

## Detallar las bifurcaciones de un repositorio

El Gráfico de miembros muestra todas las bifurcaciones de un repositorio.

Las bifurcaciones se detallan alfabéticamente por la organización o el nombre de usuario de la persona que bifurcó el repositorio. Puedes hacer clic en la organización o el nombre de usuario para que se te redirija a la página de perfil del usuario {% data variables.product.product_name %} o hacer clic en el nombre de la bifurcación para que se te redirija a la bifurcación específica del repositorio.

{% ifversion fpt or ghec %}

![Gráfico de miembros del repositorio](/assets/images/help/graphs/repo_forks_graph_dotcom.png)

{% else %}

![Gráfico de miembros del repositorio](/assets/images/help/graphs/repo_members_graph.png)

{% endif %}

### Acceder al Gráfico de miembros

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. En la barra lateral de la izquierda, haga clic en **Bifurcaciones**.
![Pestaña Bifurcaciones](/assets/images/help/graphs/graphs-sidebar-forks-tab.png)

## Visualizar las dependencias de un repositorio

Puedes utilizar la gráfica de dependencias para explorar el código del cual depende tu repositorio.

Casi todo el software depende de el código que otros desarrolladores mantienen y desarrollan, a menudo conocido como una cadena de suministro. Por ejemplo, las utilidades, bibliotecas y marcos de trabajo. Estas dependencias son una parte integral de tu código y cualquier error o vulnerabilidad en ellos podría afectar tu código. Es importante revisar y mantener estas dependencias.

La gráfica de dependencias proporciona una forma genial de visualizar y explorar las depdendencias para un repositorio. Para más información, vea "[Acerca del gráfico de dependencias](/code-security/supply-chain-security/about-the-dependency-graph)" y "[Exploración de las dependencias de un repositorio](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository)".

También puedes configurar tu repositorio para que {% data variables.product.company_short %} te alerte automáticamente en cualquier momento en el que se encuentre una vulnerabilidad de seguridad en alguna de tus dependencias. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
