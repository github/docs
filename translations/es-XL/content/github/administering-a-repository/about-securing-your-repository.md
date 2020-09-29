---
title: Acerca de asegurar tu repositorio
intro: '{% data variables.product.product_name %} proporciona varias formas para que puedas mantener tu repositorio seguro.'
versions:
  free-pro-team: '*'
---

### Configurar tu repositorio de forma segura

El primer paso para asegurar un repositorio es configurar quién puede ver y modificar tu código. Para obtener más información, consulta la sección "[Administrar la configuración de los repositorios](/github/administering-a-repository/managing-repository-settings)".

### Asegurar tu repositorio

{% data variables.product.prodname_dotcom %} cuenta con un conjunto de características cada vez mayor que te ayuda a mantener tu código seguro. Puedes encontrarlas en la pestaña de **Seguridad** de tu repositorio.

- **Política de seguridad**

  Facilítale a las personas el poder reportar de forma confidencial las vulnerabilidades de seguridad que hayan encontrado en tu repositorio. Para obtener más información, consulta "[Aumentar la seguridad para tu repositorio](/github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository)".

- **Asesorías de seguridad**

  Debate en privado y arregla las vulnerabilidades de seguridad en el código de tu repositorio. Puedes entonces publicar la asesoría de seguridad para alertar a tu comunidad sobre la vulnerabilidad en cuestión y alentarlos a mejorar la versión que tienen actualmente. Para obtener más información, consulta la sección "[Acerca de{% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".

- **Alertas del {% data variables.product.prodname_dependabot_short %}**

  Ver alertas acerca de las dependencias de las cuales se sabe contienen vulnerabilidades de seguridad y elige si se generarán automáticamente las solicitudes de extracción para actualizar dichas dependencias. Para obtener más información, consulta las secciones "[Visualizar y actualizar las dependencias vulnerables en tu repositorio](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)" y "[Configurar las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates)".

- **Alertas de {% data variables.product.prodname_code_scanning_capc %}**

  Detecta automáticamente las vulnerabilidades de seguridad y los errores de código en el código nuevo o modificado. Se resaltan los problemas potenciales, con información detallada, lo cual te permite arreglar el código antes de que se fusione en tu rama predeterminada. Para obtener más información, consulta la sección "[Acerca del escaneo de código"](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning).

- **Secretos detectados**

  Ver cualquier secreto que {% data variables.product.prodname_dotcom %} haya encontrado en tu código. Deberías tratar a los tokens o las credenciales que se hayan registrado en tu repositorio como puestos en riesgo. Para obtener más información, consulta la sección "[Acerca del escaneo de secretos"](/github/administering-a-repository/about-secret-scanning).

### Explorar las dependencias
La gráfica de dependencias de {% data variables.product.prodname_dotcom %} te permite explorar:

* Ecosistemas y paquetes de los cuales depende tu repositorio
* Repositorios y paquetes que dependen de tu repositorio

Debes habilitar la gráfica de dependencias antes de que {% data variables.product.prodname_dotcom %} pueda generar alertas del {% data variables.product.prodname_dependabot_short %} con vulnerabilidades de seguridad.

Puedes encontrar la gráfica de dependencias en lapestaña de **Perspectivas** para tu repositorio. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
