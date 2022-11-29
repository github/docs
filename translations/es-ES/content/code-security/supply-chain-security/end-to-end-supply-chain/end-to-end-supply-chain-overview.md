---
title: Protección de la cadena de suministro de un extremo a otro
shortTitle: Overview
allowTitleToDifferFromFilename: true
intro: 'Introducción a las guías de procedimientos recomendados sobre la seguridad completa de la cadena de suministro de un extremo a otro, incluidas las cuentas personales, el código y los procesos de compilación.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Organizations
  - Teams
  - Dependencies
  - Advanced Security
ms.openlocfilehash: 44eb2f8fa24d172cc1ad5f988bbbda3a192797a3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060686'
---
## ¿Qué es la cadena de suministro de un extremo a otro?

Básicamente, la seguridad de la cadena de suministro de software de un extremo a otro consiste en asegurarte de que el código que distribuyes no se ha alterado. Anteriormente, los atacantes se centraban en atacar las dependencias que usas, como, por ejemplo, las bibliotecas y los marcos. Los atacantes han ampliado su enfoque para incluir como destino cuentas de usuario y procesos de compilación, por lo que esos sistemas también deben defenderse.

Para obtener información sobre las características de {% data variables.product.prodname_dotcom %} que pueden ayudarte a proteger las dependencias, consulta "[Acerca de la seguridad de la cadena de suministro](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)".

## Acerca de estas guías

En esta serie de guías se explica cómo pensar en la protección de la cadena de suministro de un extremo a otro: cuentas personales, código y procesos de compilación. En cada guía se explica el riesgo de esa área y se presentan las características de {% data variables.product.product_name %} que pueden ayudarte a abordar ese riesgo. 

Las necesidades de cada usuario son diferentes, por lo que cada guía comienza con el cambio de mayor impacto y continúa desde allí con mejoras adicionales que debes tener en cuenta. No dudes en dar un vistazo y centrarte en las mejoras que crees que te van a beneficiar más. El objetivo no es hacer todo a la vez, sino mejorar continuamente la seguridad en los sistemas a lo largo del tiempo.

- "[Procedimientos recomendados para proteger las cuentas](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)"

- "[Procedimientos recomendados para proteger el código en la cadena de suministro](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)"

- "[Procedimientos recomendados para proteger el sistema de compilación](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)"

## Información adicional

- [Proteger la integridad de los artefactos en cualquier cadena de suministro de software](https://slsa.dev/)
- [Modelo de integridad de la cadena de suministro de Microsoft](https://github.com/microsoft/scim)
- [Papel de seguridad de la cadena de suministro de software - Grupo de asesoramiento técnico de seguridad de CNCF](https://github.com/cncf/tag-security/blob/main/supply-chain-security/supply-chain-security-paper/CNCF_SSCP_v1.pdf)
