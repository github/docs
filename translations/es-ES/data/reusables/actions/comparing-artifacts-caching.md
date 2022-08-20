## Comparar artefactos y caché de dependencias

Los artefactos y el almacenamiento en caché son similares porque brindan la posibilidad de almacenar archivos en {% data variables.product.prodname_dotcom %}, pero cada característica ofrece diferentes casos de uso y no se puede usar indistintamente.

- Use caching when you want to reuse files that don't change often between jobs or workflow runs, such as build dependencies from a package management system.
- Use artifacts when you want to save files produced by a job to view after a workflow run has ended, such as built binaries or build logs. 
