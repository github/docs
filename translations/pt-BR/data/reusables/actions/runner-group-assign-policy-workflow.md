{%- ifversion restrict-groups-to-workflows %}
1. Atribuir uma política para acesso ao fluxo de trabalho.

   Você pode configurar um grupo de executores para que possa ser acessado por uma lista específica de fluxos de trabalho ou por todos os fluxos de trabalho. Esta configuração não pode ser substituída se você configurar o grupo de executores da organização que foi compartilhado por uma empresa. Se você especificar qual fluxo de trabalho pode acessar o grupo de executores, você deverá usar o caminho completo para o fluxo de trabalho, incluindo o nome e o proprietário do repositório, e você deve fixar o fluxo de trabalho a um branch, tag ou SHA completo. Por exemplo: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`.

   Somente trabalhos definidos diretamente nos fluxos de trabalho selecionados terão acesso ao grupo de executores.{%- endif %}
