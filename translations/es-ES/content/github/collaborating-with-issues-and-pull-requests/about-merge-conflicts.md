---
title: Acerca de los conflictos de fusión
intro: 'Los conflictos de fusión suceden cuando fusionas ramas que tienen confirmaciones de cambios contrapuestas, y Git necesita tu ayuda para decidir qué cambios incorporar en la fusión final.'
redirect_from:
  - /articles/about-merge-conflicts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Por lo general, Git puede resolver las diferencias entre las ramas y fusionarlas automáticamente. Generalmente, los cambios están en diferentes líneas o incluso en diferentes archivos, lo que hace que sea simple para los equipos comprender la fusión. Sin embargo, a veces hay cambios contrapuestos que Git no puede resolver sin tu ayuda. Por lo general, los conflictos de fusión suceden cuando las personas realizan diferentes cambios en la misma línea en el mismo archivo o cuando una persona edita un archivo y otra persona elimina el mismo archivo.

Debes resolver todos los conflictos de fusión antes de poder fusionar un solicitud de extracción en {% data variables.product.product_name %}. Si tienes un conflicto de fusión entre la rama de comparación y la rama base en tu solicitud de extracción, puedes ver una lista de archivos con cambios conflictivos arriba del botón **Fusionar solicitud de extracción**. El botón **Fusionar solicitud de extracción** se desactiva hasta que hayas resuelto todos los conflictos entre la rama de comparación y la rama base.

![mensaje de error de conflicto de fusión](/assets/images/help/pull_requests/merge_conflict_error_on_github.png)

### Resolver conflictos de fusión

Para resolver un conflicto de fusión, debes editar de forma manual el archivo conflictivo para seleccionar los cambios que quieres mantener en la fusión final. Hay un par de maneras diferentes de resolver un conflicto de fusión:

- Si tu conflicto de fusión es ocasionado por cambios de líneas contrapuestos, como cuando las personas realizan diferentes cambios en la misma línea del mismo archivo en diferentes ramas en tu repositorio de Git, lo puedes resolver en {% data variables.product.product_name %} usando el editor de conflictos. Para obtener más información, consulta "[Resolver un conflicto de fusión en {% data variables.product.prodname_dotcom %}](/articles/resolving-a-merge-conflict-on-github)".
- Para todos los otros tipos de conflictos de fusión, debes resolver el conflicto de fusión en un clon local del repositorio y subir el cambio a tu rama en {% data variables.product.product_name %}. Puedes usar la línea de comandos o una herramienta como [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) para subir el cambio. Para obtener más información, consulta  "[Resolver un conflicto de fusión en la línea de comandos](/articles/resolving-a-merge-conflict-using-the-command-line)".

Si tienes un conflicto de fusión en la línea de comandos, no puedes subir tus cambios locales a {% data variables.product.product_name %} hasta que resuelvas el conflicto de fusión localmente en tu equipo. Si intentas fusionar ramas en la línea de comandos que tiene un conflicto de fusión, recibirás un mensaje de errror. Para obtener más información, consulta "[Resolver un conflicto de fusión en la línea de comandos](/articles/resolving-a-merge-conflict-using-the-command-line/)".
```shell
$ git merge <em>BRANCH-NAME</em>
> Auto-merging styleguide.md
> CONFLICT (content): Merge conflict in styleguide.md
> Automatic merge failed; fix conflicts and then commit the result
```

### Leer más

- "[Acerca de las fusiones de solicitudes de extracción](/articles/about-pull-request-merges/)"
- "[Acerca de las solicitudes de extracción](/articles/about-pull-requests/)"
- "[Resolver un conflicto de fusión en la línea de comandos](/articles/resolving-a-merge-conflict-using-the-command-line)"
- "[Resolver un conflicto de fusión en GitHub](/articles/resolving-a-merge-conflict-on-github)"
