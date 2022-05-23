O gráfico de dependências é um resumo do manifesto e bloqueia arquivos armazenados em um repositório. Para cada repositório, ele mostra{% ifversion fpt or ghec %}:

- As dependências, os ecossistemas e os pacotes do qual depende
- Dependentes, os repositórios e pacotes que dependem dele{% else %} dependências, isto é, os ecossistemas e pacotes de que ele depende. O {% data variables.product.product_name %} não calcula informações sobre dependentes, repositórios e pacotes que dependem de um repositório.{% endif %}
