---
title: Asegurar tu cadena de suministro de extremo a extremo
shortTitle: Resumen
allowTitleToDifferFromFilename: true
intro: 'Presentamos las guías de las mejores prácticas en la seguridad de la cadena de suministro de extremo a extremo, incluyendo las de las cuentas personales, código y procesos de compilación.'
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
---

## ¿Qué es la cadena de suministro de extremo a extremo?

Principalmente, la cadena de suministro de software de extremo a extremo se trata de asegurarse de que no se haya alterado el código que distribuyes. Previamente, los ataques se enfocaban en apuntar a las dependencias que utilizas, como las librerías y los marcos de trabajo. Los atacantes ahora expandieron su enfoque para incluir el apuntar a cuentas de usuario y procesos de compilación y, por lo tanto, estos sistemas también se deben defender.

Para obtener más información sobre las caracerísticas de {% data variables.product.prodname_dotcom %} que pueden ayudarte a asegurar dependencias, consulta la sección "[Acerca de la seguridad de la cadena de suministro](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)".

## Acerca de estas guías

Esta serie de guías te explican cómo pensar sobre la forma en la que aseguras tu cadena de suministro de extremo a extremo: cuenta personal, código y procesos de compilación. Cada guía explica el riesgo a esa área e introduce las características de {% data variables.product.product_name %} que pueden ayudarte a abordar ese riesgo.

Las necesidades de cada quién son diferentes, así que cada guía comienza con el cambio de mayor impacto y continúa desde ahí con mejoras adicionales que deberías considerar. Debes sentirte libre de enfocarte en las mejoras que pienses tendrán el mayor beneficio. La meta no es hacer todo al mismo tiempo, sino mejorar la seguridad de tus sistemas continuamente con el tiempo.

- "[Mejores prácticas para asegurar cuentas](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)"

- "[Mejores prácticas para asegurar el código en tu cadena de suministros](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)"

- "[Mejores prácticas para asegurar tu sistema de compilación](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)"

## Leer más

- [Salvaguardar la integridad de los artefactos a lo largo de cualquier cadena de suministro](https://slsa.dev/)
- [Modelo de Integridad de la Cadena de Suministro de Microsoft](https://github.com/microsoft/scim)
- [Guía de Seguridad para la Cadena de Suministro del Software - Grupo de Asesoría Técnica en Seguridad CNCF](https://github.com/cncf/tag-security/blob/main/supply-chain-security/supply-chain-security-paper/CNCF_SSCP_v1.pdf)
