---
title: Desarrollar en un codespace
intro: 'Puedes abrir un codespace en {% data variables.product.product_name %} y después desarrollar utilizando las características de {% data variables.product.prodname_vscode %}.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'You can develop in codespaces you''ve created for repositories owned by organizations using {% data variables.product.prodname_team %} and {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

 

## Acerca del desarrollo con {% data variables.product.prodname_codespaces %}

{% data variables.product.prodname_codespaces %} te proporciona la experiencia completa de desarrollo de {% data variables.product.prodname_vscode %}. {% data reusables.codespaces.use-visual-studio-features %}

![Resumen de codespace con anotaciones](/assets/images/help/codespaces/codespace-overview-annotated.png)

1. Barra lateral - Predeterminadamente, esta área te muestra los archivos de tu proyexcto en el explorador.
2. Barra de actividad - Esto muestra las vistas y te proporciona una forma de cambiar entre ellas. Puedes volver a ordenar las vistas si las arrastras y las sueltas.
3. Editor - Aquí es donde editas tus archivos. Puedes utilzar la pestaña para que cada editor la posicione exactamente donde la necesitas.
4. Paneles - Aquí es donde puedes ver la información de salida y depuración, así como el lugar predeterminado para la Terminal integrada.
5. Barra de estado - Esta área te proporciona información útil sobre tu codespace y proyecto. Por ejemplo, el nombre de rama, los puertos configurados y más.

Para obtener más información sobre cómo utilizar {% data variables.product.prodname_vscode %}, consulta la [Guía de interface de usuario](https://code.visualstudio.com/docs/getstarted/userinterface) en la documentación de {% data variables.product.prodname_vscode %}.

{% data reusables.codespaces.connect-to-codespace-from-vscode %}

{% data reusables.codespaces.use-chrome %} Para obtener más información, consulta la sección "[Solucionar problemas de los clientes de los Codespaces](/codespaces/troubleshooting/troubleshooting-codespaces-clients)".

### Personalizar tu codespace

{% data reusables.codespaces.about-personalization %} Para obtener más información, consulta la sección "[Personalizar {% data variables.product.prodname_codespaces %} para tu cuenta](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)".

{% data reusables.codespaces.apply-devcontainer-changes %} Para obtener más información, consulta la sección "[Configurar {% data variables.product.prodname_codespaces %} para tu proyecto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)".

### Ejecutar tu app desde un codespace
{% data reusables.codespaces.about-port-forwarding %} Para obtener más información, consulta la sección "[Abrir puertos en tu codespace](/github/developing-online-with-codespaces/forwarding-ports-in-your-codespace)".

### Configramr tus cambios

{% data reusables.codespaces.committing-link-to-procedure %}

### Using the {% data variables.product.prodname_vscode_command_palette %}

The {% data variables.product.prodname_vscode_command_palette %} allows you to access and manage many features for {% data variables.product.prodname_codespaces %} and {% data variables.product.prodname_vscode %}. For more information, see "[Using the {% data variables.product.prodname_vscode_command_palette %} in {% data variables.product.prodname_codespaces %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces)."

## Navegar a un codespace existente

1. {% data reusables.codespaces.you-can-see-all-your-codespaces %}
2. Da clic en el nombre del codespace en el cual quieras desarrollar. ![Nombre del codespace](/assets/images/help/codespaces/click-name-codespace.png)

Como alternativa, puedes ver cualquier codespace activo en un repositorio si navegas a dicho repositorio y seleccionnas **{% octicon "code" aria-label="The code icon" %} Código**. El menú desplegable mostrará todos los codespaces activos en un repositorio.
