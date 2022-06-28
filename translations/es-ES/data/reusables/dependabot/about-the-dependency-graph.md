The dependency graph is a summary of the manifest and lock files stored in a repository{% ifversion dependency-submission-api %} and any dependencies that are submitted for the repository using the Dependency submission API (beta){% endif %}. Para cada repositorio, muestra{% ifversion fpt or ghec %}:

- Las dependencias, ecosistemas y paquetes de los cuales depende
- Los dependientes, repositorios y paquetes que dependen de ella{% else %} dependencias, es decir, los ecosistemas y los paquetes de los cuales depende. {% data variables.product.product_name %} no calcula información alguna sobre los dependientes, repositorios y paquetes que dependen de un repositorio.{% endif %}
