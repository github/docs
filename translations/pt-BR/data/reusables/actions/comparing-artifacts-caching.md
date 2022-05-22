## Comparando artefatos e memorização de dependência

Os artefatos são similares, pois fornecem a habilidade de armazenar arquivos em {% data variables.product.prodname_dotcom %}, mas cada recurso oferece usos diferentes e não podem ser usados de forma intercambiável.

- Use caching when you want to reuse files that don't change often between jobs or workflow runs, such as build dependencies from a package management system.
- Use artifacts when you want to save files produced by a job to view after a workflow run has ended, such as built binaries or build logs. 
