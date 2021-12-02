---
title: Acerca del escaneo de código con CodeQL
shortTitle: Escaneo de código con CodeQL
intro: 'Puedes utilizar {% data variables.product.prodname_codeql %} para identificar las vulnerabilidades y errores en tu código. Los resultados se muestran como alertas del {% data variables.product.prodname_code_scanning %} en {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Acerca de {% data variables.product.prodname_code_scanning %} con {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.about-codeql-analysis %}

Hay dos formas principales para utilizar el análisis de {% data variables.product.prodname_codeql %} para el {% data variables.product.prodname_code_scanning %}:

- Agregar el flujo de trabajo de {% data variables.product.prodname_codeql %} a tu repositorio. Esto utiliza la [github/codeql-action](https://github.com/github/codeql-action/) para ejecutar el {% data variables.product.prodname_codeql_cli %}. Para obtener más información, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %} en un repositorio](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)".
- Ejecuta el {% data variables.product.prodname_codeql %} {% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}CLI directamente {% elsif ghes = 3.0 %}CLI o el ejecutor {% else %}ejecutor{% endif %} en un sistema de IC externo y carga los resultados en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Acerca del escaneo de código de {% data variables.product.prodname_codeql %} en tu sistema de IC](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)".

## Acerca de {% data variables.product.prodname_codeql %}

El {% data variables.product.prodname_codeql %} trata el código como datos, permitiéndote encontrar vulnerabilidades potenciales en tu código con mayor confianza que los analizadores estáticos tradicionales.

1. Generas una base de datos de {% data variables.product.prodname_codeql %} para representar tu base de código.
2. Entonces, ejecutarás consultas de {% data variables.product.prodname_codeql %} en esa base de datos para identificar problemas en la base de código.
3. Estos resultados de consulta se muestran como alertas del {% data variables.product.prodname_code_scanning %} en {% data variables.product.product_name %} cuando utilizas al {% data variables.product.prodname_codeql %} con el {% data variables.product.prodname_code_scanning %}.

{% data variables.product.prodname_codeql %} es compatible tanto con los lenguajes compilados como con lso interpretados, y puede encontrar vulnerabilidades y errores en el código que se escriba en los lenguajes compatibles.

{% data reusables.code-scanning.codeql-languages-bullets %}

## Acerca de las consultas de {% data variables.product.prodname_codeql %}

Los expertos de {% data variables.product.company_short %}, investigadores de seguridad y contribuyentes comunitarios escriben y mantienen las consultas predeterminadas de {% data variables.product.prodname_codeql %} que se utilizan para el {% data variables.product.prodname_code_scanning %}. Las consultas se actualizan frecuentemente para mejorar el análisis y reducir cualquier resultado falso positivo. Las consultas son de código abierto, así que puedes ver y contribuir con ellas en el repositorio de [`github/codeql`](https://github.com/github/codeql). Para obtener más información, consulta la sección [{% data variables.product.prodname_codeql %}](https://securitylab.github.com/tools/codeql) en el sitio web de GitHub Security Lab. También puedes escribir tus propias consultas. Para obtener más información, consulta la sección "[Acerca de las consultas de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/)" en la documentación de {% data variables.product.prodname_codeql %}.

Puedes ejecutar consultas adicionales como parte de tu análisis de escaneo de código.

{%- if codeql-packs %}
Estas consultas deben pertenecer a un paquete de consultas (beta) de {% data variables.product.prodname_codeql %} publicado o a un paquete de QL en un repositorio. Los paquetes de {% data variables.product.prodname_codeql %} (beta) proporcionan los siguientes beneficios sobre los paquetes tradicionales de QL:

- Cuando un paquete de consultas de {% data variables.product.prodname_codeql %} (beta) se publica en el {% data variables.product.prodname_container_registry %} de {% data variables.product.company_short %}, todas las dependencias transitivas que requieren las consultas y un caché de compilación se incluyen en el paquete. Esto mejora el rendimiento y garantiza que el ejecutar las consultas del paquete proporciona resultados idénticos cada vez que actualizas a una versión nueva del paquete o de CLI.
- Los paquetes de QL no incluyen las dependencias transitivas, así que las consultas en el paquete puede depender únicamente de las librerías estándar (esto es, si las librerías se referencian mediante un argumento `import LANGUAGE` en tu consulta) o en las librerías del mismo paquete de QL que la consulta.

Para obtener más información, consulta las secciones "[Acerca de los paquetes de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/about-codeql-packs/)" y "[Acerca de los paquetes de {% data variables.product.prodname_ql %}](https://codeql.github.com/docs/codeql-cli/about-ql-packs/)" en la documentación de {% data variables.product.prodname_codeql %}.

{% data reusables.code-scanning.beta-codeql-packs-cli %}

{%- else %}
Estas consultas que quieres ejecutar deben pertenecer al paquete de QL de un repositorio. Las consultas solo deberán depender de las librerías estándar (es decir, aquellas referenciadas por una declaración `import LANGUAGE` en tu consulta), o de aquellas en el mismo paquete de QL que la consulta. Para obtener más información, consulta la sección "[Acerca de los paquetes de {% data variables.product.prodname_ql %}](https://codeql.github.com/docs/codeql-cli/about-ql-packs/)".
{% endif %}
