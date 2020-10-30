---
title: Incluir o excluir el uso de datos para tu repositorio privado
intro: 'Para ayudar a {% data variables.product.product_name %} a conectarse a tus herramientas, personas, proyectos e información relevantes, puedes incluir el uso de datos para tu repositorio privado. Si no has incluido el uso de datos para tu repositorio privado y ya no deseas que {% data variables.product.product_name %} use tus datos, puedes excluirlo.'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
versions:
  free-pro-team: '*'
---

### Acerca del uso de datos para tu repositorio privado

Cuando incluyes el uso de datos para tu repositorio privado, podrás acceder al gráfico de dependencia, donde puedes rastrear las dependencias de tu repositorio y recibir alertas de seguridad cuando {% data variables.product.product_name %} detecta dependencias vulnerables. Para obtener más información, consulta "[Acerca de las alertas de seguridad para las dependencias vulnerables](/articles/about-security-alerts-for-vulnerable-dependencies)".

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

### Incluir el uso de datos para tu repositorio privado

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Dentro de "Data services" (Servicios de datos), seleccione **Allow {% data variables.product.prodname_dotcom %} to perform read-only analysis of this repository (Permitir que {% data variables.product.prodname_dotcom %} realice un análisis de solo lectura de este repositorio)**. ![Casilla de verificación para permitir que {% data variables.product.prodname_dotcom %} realice un análisis de solo lectura de este repositorio](/assets/images/help/repository/private-repo-data-use-opt-in.png)
4. De manera opcional, selecciona la casilla de verificación al lado de cualquier servicio adicional que deseas habilitar para el uso de datos. ![Lista de servicios adicionales con sus propias casillas de verificación](/assets/images/help/repository/private-repo-data-use-additional-services.png)

### Excluir el uso de datos para tu repositorio privado

{% tip %}

**Sugerencia:** para excluir el uso de datos para servicios específicos, quita la selección en la casilla de verificación al lado del servicio.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Dentro de "Data services" (Servicios de datos), quita la selección en **Allow {% data variables.product.prodname_dotcom %} to perform read-only analysis of this repository (Permitir que {% data variables.product.prodname_dotcom %} realice un análisis de solo lectura de este repositorio)**. ![Casilla de verificación para deshabilitar que {% data variables.product.prodname_dotcom %} realice un análisis de solo lectura de este repositorio](/assets/images/help/repository/private-repo-data-use-opt-out.png)

### Leer más

- "[Acerca del uso de tus datos de {% data variables.product.prodname_dotcom %}](/articles/about-github-s-use-of-your-data)"
- "[Ver y actualizar las dependencias vulnerables en tu repositorio](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)
- "[Administrar alertas para dependencias vulnerables en los repositorios de tu organización](/articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories)"
