Ao habilitar uma ou mais funcionalidades de segurança e análise para repositórios existentes, você verá todos os resultados exibidos em {% data variables.product.prodname_dotcom %} dentro de minutos:

- Todos os repositórios existentes terão a configuração selecionada.
- Os novos repositórios seguirão a configuração selecionada se você tiver habilitado a caixa de seleção para novos repositórios.{% ifversion fpt %}
- Usamos as permissões para digitalizar arquivos de manifesto para aplicar os serviços relevantes.
- If enabled, you'll see dependency information in the dependency graph.
- If enabled, {% data variables.product.prodname_dotcom %} will generate {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies.
- If enabled, {% data variables.product.prodname_dependabot %} Security Updates will create pull requests to upgrade those dependencies.{% endif %}
