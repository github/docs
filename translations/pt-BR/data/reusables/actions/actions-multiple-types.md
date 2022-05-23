Se você especificar tipos de atividade ou filtros para um evento e seu fluxo de trabalho for acionado em vários eventos, você deverá configurar cada evento separadamente. Você deve anexar dois pontos (`:`) a todos os eventos, incluindo eventos sem configuração.

Por exemplo, um fluxo de trabalho com o seguinte valor `em` será executado quando:

- Uma etiqueta foi criada
- Um push é feito noo branch `principal` do repositório
- Um push é feito para um branch habilitado para {% data variables.product.prodname_pages %}

```yaml
on:
  label:
    types:
      - created
  push:
    branches:
      - main
  page_build:
```
