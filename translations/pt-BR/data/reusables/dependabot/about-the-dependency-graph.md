The dependency graph is a summary of the manifest and lock files stored in a repository{% ifversion dependency-submission-api %} and any dependencies that are submitted for the repository using the Dependency submission API (beta){% endif %}. Para cada repositório, ele mostra{% ifversion fpt or ghec %}:

- As dependências, os ecossistemas e os pacotes do qual depende
- Dependentes, os repositórios e pacotes que dependem dele{% else %} dependências, isto é, os ecossistemas e pacotes de que ele depende. O {% data variables.product.product_name %} não calcula informações sobre dependentes, repositórios e pacotes que dependem de um repositório.{% endif %}
