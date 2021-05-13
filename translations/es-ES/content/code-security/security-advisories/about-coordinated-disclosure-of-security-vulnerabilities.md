---
title: Acerca de la divulgación coordinada de las vulnerabilidades de seguridad
intro: La divulgación de vulnerabilidaes es un esfuerzo coordinado entre los reporteros de seguridad y los mantenedores de los repositorios.
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
---

### Acerca de divulgar las vulnerabilidades en la industria

{% data reusables.security-advisory.disclosing-vulnerabilities %}

El reporte inicial de una vulnerabilidad se hace en privado y los detalles completos solo se publican una vez que el mantenedor reconoce el problema e idealmente generó remediaciones o un parche disponible, algunas veces con un retraso para dar más tiempo para que se instalen los parches. Para obtener más información, consulta la "[Serie de Páginas de Referencia de OWASP sobre la divulgación de vulnerabilidades](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html#commercial-and-open-source-software)" en el sitio web de la Serie de Páginas de Referencia de OWASP.

#### Mejores prácticas para los reporteros de vulnerabilidades

Es una buena práctica reportar las vulnerabilidades a los mantenedores en privado. Cuando sea posible, como reportero de vulnerabilidades, te recomendamos evitar:
- Divulgar la vulnerabilidad públicamente sin dar oportunidad a los mantenedores para remediarla.
- Saltarse a los mantenedores.
- Divulgar la vulnerabilidad antes de que se encuentre disponible una versión corregida del código.
- Esperar que se te recompense por reportar un problema cuando no existe un programa público de recompensas.

Es aceptable que los reporteroes de vulnerabilidades divulguen una vulnerabilidad públicamente después de cierto tiempo, si han tratado de contactar a los mantenedores y no han recibido respuesta o si los contactaron y se les pidió esperar demasiado para divulgarla.

Recomendamos a los reporteros de vulnerabilidades que declaren claramente las condiciones de su política de divulgación como parte de su proceso de reporte. Aún si la vulnerabilidad no se apega a una política estricta, es una buena idea establecer expectativas claras para los mantenedores con respecto a los periodos de tiempo para cuando se pretende divulgar una vulnerabilidad. Para encontrar un ejemplo de política de divulgación, consulta la sección "[Política de divulgación del Security Lab](https://securitylab.github.com/advisories#policy)" en el sitio web de GitHub Security Lab.

#### Mejores prácticas para los mantenedores

Como mantenedor, es una buena práctica indicar claramente cómo y dónde quieres recibir los reportes de las vulnerabilidades. Si esta información no está disponible claramente, los reporteros de las vulnerabilidades no sabrán cómo contactarte y podrían recurrir a extrar las direcciónes de correo electrónico de los desarrolladores desde los historiales de confirmación de git para intentar encontrar un contacto de seguridad adecuado. Esto puede causar fricciones, reportes perdidos, o que se publiquen reportes sin resolución.

Los mantenedores deben divulgar las vulnerabilidades oportunamente. Si hay una vulnerabilidad de seguridad en tu repositorio, te recomendamos que:
- Trates a la vulnerabilidad como un problema de seguridad en vez de como un error simple, tanto en tu respuesta como en tu divulgación de esta. Por ejemplo, necesitarás mencionar explícitamente que el problema es una vulnerabilidad de seguridad en las notas de lanzamiento.
- Reconoce la recepción del reporte de vulnerabilidad tan pronto como sea posible, incluso si no hay recursos inmediatos disponibles para su investigación. Esto deja ver que eres rápido para responder y actuar, e instaura un tono positivo para el resto de la interacción entre quien reporta la vulnerabilidad y tú.
- Involucra a quien reporta la vulnerabilidad cuando verifiques el impacto y la veracidad del reporte. Es probable que quien reporta la vulnerabilidad ya haya pasado tiempo considerándola en diversos escenarios, algunos de los cuales podrías aún no haber considerado.
- Remedia el problema conforme lo consideres necesario, tomando en consideración cualquier preocupación o consejo que te proporcione quien reporta la vulnerabilidad. A menudo, quien reporta la vulnerabilidad tendrá conocimiento de ciertos casos límite y atajos de remediación que pueden omitirse fácilmente sin tener un antecedente de investigación de seguridad.
- Reconoce siempre a quien reporta la vulnerabilidad cuando des crédito por el descubrimiento.
- Busca publicar una solución tan pronto como puedas.
- Asegúrate de que pones al tanto a todo el ecosistema sobre el problema y su remediación cuando divulgues la vulnerabilidad. No es raro encontrarse con casos en donde un problema de seguridad reconocido se fija en la rama de desarrollo actual de un proyecto, pero la confirmación de un lanzamiento subsecuente no se marca explícitamente como una corrección o lanzamiento de seguridad. Esto puede causar problemas con los consumidores en niveles inferiores.

El publicar los detalles de una vulnerabilidad de seguridad no da una mala imagen a los mantenedores. Las vulnerabilidades de seguridad están presentes en todas partes dentro del software, y los usuarios confiarán en los mantenedores que tengan un proceso claro y establecido para divulgar vulnerabilidades de seguridad en su código.

### Acerca de reportar y divulgar las vulnerabilidaes en los proyectos de {% data variables.product.prodname_dotcom %}

El proceso para reportar y divulgar vulnerabilidades para los proyectos en {% data variables.product.prodname_dotcom_the_website %} es el siguiente:

 Si reportas una vulnerabilidad (por ejemplo, si eres un investigador de seguridad) y te gustaría proceder, revisa primero si existe una política de seguridad para el repositorio en cuestión. Para encontrar más información, consulta la sección "[Acerca de las políticas de seguridad](/github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository#about-security-policies)". Si esta existe, síguela para entender el proceso antes de contactar al equipo de seguridad de este repositorio.

 Si no existe una política de seguridad en vigor, la forma más eficiente de establecer un medio de comunicación privado con los mantenedores es crear una propuesta que solicite un conteacto preferente para asuntos de seguridad. No sirve de nada que la propuesta sea visible al público inmediatamente, así que no debería incluir ningún tipo de información sobre el error. Una vez que se haya establecido la comunicación, puedes sugerir a los mantenedores que definan una política de seguridad para su uso futuro.

{% note %}

**Nota**: _Solo para npm_ - Si recibimos un reporte de malware en un paquete de npm, intentaremos contactarte en privado. Si no tratas la propuesta de forma oportuna, la divulgaremos. Para obtener más información, consulta la sección "[Reportar malware en un paquete de npm](https://docs.npmjs.com/reporting-malware-in-an-npm-package)" en el sitio web de los documentos de npm.

{% endnote %}

 Si encontraste una vulnerabilidad de seguridad en {% data variables.product.prodname_dotcom_the_website %}, por favor, repórtala a través de nuestro proceso de divulgación coordinada. Para obtener más información, consulta el sitio web de [Recompensa por Errores de Seguridad de {% data variables.product.prodname_dotcom %}](https://bounty.github.com/).

 Si eres un mantenedor, puedes tomar la responsabilidad del proceso desde el inicio de la red de comunicación si configuras una política de seguridad para tu repositorio o, de otra forma, poner las instrucciones de reporte de seguridad claramente disponibles, por ejemplo, en el archivo README de tu proyecto. Para obtener más información sobre cómo agregar una política de seguridad, consulta la sección "[Acerca de las políticas de seguridad](/github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository#about-security-policies)". Si no hay políticas de seguridad, es probable que alguien que reporta una vulnerabilidad intente enviarte un correo electrónico o contactarte en privado de alguna otra forma. Como alternativa, alguien podría abrir una propuesta (pública) con detalles de un problema de seguridad.

 Como mantenedor, para divulgar una vulnerabilidad en tu código, primero debes creer un borrador de asesoría de seguridad en el repositorio del paquete en {% data variables.product.prodname_dotcom %}. {% data reusables.security-advisory.security-advisory-overview %} Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".


 Para empezar, ve "[Creando un aviso de seguridad](/github/managing-security-vulnerabilities/creating-a-security-advisory)."


