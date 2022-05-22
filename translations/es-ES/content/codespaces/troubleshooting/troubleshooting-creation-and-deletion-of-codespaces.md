---
title: Solucionar problemas de creación y borrado de Codespaces
intro: 'Este artículo te muestra los pasos para la solución de problemas comunes que podrías experimentar al crear o borrar un codespace, incluyendo los de almacenamiento y configuración.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Creación y borrado
---

## Crear codespaces

### Sin acceso para crear un codespace
Los {% data variables.product.prodname_codespaces %} no están disponibles para todos los repositorios. Si no se muestra el botón de "Abrir con Codespaces", {% data variables.product.prodname_codespaces %} podría no estar disponible para dicho repositorio. Para obtener más información, consulta la sección "[Crear un codespace](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces)".

Si crees que tu organización sí [habilitó los {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization#about-enabling-codespaces-for-your-organization), asegúrate de que un propietario de la organización o gerente de facturación haya configurado el límite de gastos para los {% data variables.product.prodname_codespaces %}. Para obtener más información, consulta la sección "[Administrar tu límite de gastos para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".

### El Codespace no abre cuando se crea

Si creas un codespace y este no abre:

1. Intenta volver a cargar la página en caso de que hubiera un error de caché o problema reportado.
2. Dirígete a tu página de {% data variables.product.prodname_codespaces %}: https://github.com/codespaces y verifica si el codespace nuevo se listó ahí. El proceso podría haber creado el codespace con éxito pero falló en reportarlo de vuelta a tu buscador. Si el codespace nuevo se ve listado, puedes abrirlo directamente desde esta página.
3. Reintenta crear el codespace para que el repositorio descarte un fallo de comunicación transitorio.

Si aún no puedes crear un codespace para un repositorio en donde esté disponible {% data variables.product.prodname_codespaces %}, contacta a {% data reusables.codespaces.contact-support %}.

## Borrar codespaces

El propietario de un codespace tiene control total sobre este y solo él podrá borrarlo. No puedes borrar un codespace que otro usuario haya creado.

Puedes borrar tus codespaces en el buscador, en {% data variables.product.prodname_vscode %} o utilizando el {% data variables.product.prodname_cli %}. El {% data variables.product.prodname_cli %} también te permite borrar codespaces por lotes. Para obtener más información, consulta la sección "[Borrar un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)."

## Almacenamiento de contenedores

Cuando creas un codespace, este tiene una cantidad de almacenamiento finita y, con el tiempo, podría que necesites liberar espacio. Intenta ejecutar cualquiera de los comandos siguientes en la terminal de {% data variables.product.prodname_codespaces %} para liberar espacio de almacenamiento.

- Elimina los paquetes que ya no se utilicen usando `sudo apt autoremove`.
- Limpia el caché de apt utilizando `sudo apt clean`.
- Consulta los 10 archivos más grandes en el codespace con `sudo find / -printf '%s %p\n'| sort -nr | head -10`.
- Borra los archivos innecesarios, tales como los artefactos y bitácoras de compilación.

Algunas opciones más destructivas:

- Elimina las imágenes de Docker, redes y contenedores sin utilizar con `docker system prune` (adjunta una `-a` si quieres eliminar todas las imágenes, y `--volumes` si quieres eliminar todos los volúmenes).
- Elimina los archivos no rastreados del árbol de trabajo: `git clean -i`.

## Configuration

{% data reusables.codespaces.recovery-mode %}

```
Este codespace se ejecuta acutalmente en modo de recuperación debido a un error del contenedor.
```

Revisa las bitácoras de creación, actualiza la configuración del contenedor dev conforme lo necesites y ejecuta **Codespaces: Rebuild Container** en la {% data variables.product.prodname_vscode_command_palette %} para reintentarlo. Para obtener más información, consulta las secciones "[Bitácoras de codespaces](/codespaces/troubleshooting/codespaces-logs)" y "[Configurar {% data variables.product.prodname_codespaces %} en tu proyecto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)".
