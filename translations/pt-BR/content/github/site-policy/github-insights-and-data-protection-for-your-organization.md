---
title: O GitHub Insights e a proteção de dados para sua organização
intro: '{% data variables.product.prodname_insights %} analisa seus dados {% data variables.product.prodname_ghe_server %}. Esses dados podem incluir dados pessoais de indivíduos em sua organização que podem ter o direito de entender como esses dados pessoais estão sendo usados.'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/github-insights-and-data-protection-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Para obter mais informações sobre os termos que regem {% data variables.product.prodname_insights %}, consulte o seu contrato de assinatura do {% data variables.product.prodname_ghe_one %}.

Para evitar dúvidas, nenhuma das informações acima devem ser consideradas aconselhamento legal fornecido por {% data variables.product.prodname_dotcom %}. Você é responsável por proteger sua própria análise legal das informações fornecidas neste documento e pelo seu cumprimento das leis de privacidade e proteção de dados. Fica a seu critério exclusivo usar {% data variables.product.prodname_insights %} para processar os dados dos seus funcionários e usuários e, se você fizer isso, você é o único responsável por realizar esse processamento em conformidade com a lei aplicável.

### Funções e responsabilidades da organização

Ao usar o {% data variables.product.prodname_insights %}, sua organização é o controlador de dados porque sua organização determina se, como e por que {% data variables.product.prodname_insights %} processará os dados pessoais de qualquer indivíduo. Sua organização é a única responsável por garantir que você esteja cumprindo com todas as leis aplicáveis no processamento de dados com {% data variables.product.prodname_insights %}.

### Recomendação de privacidade de dados

Você tem total controle sobre quais métricas, relatórios, repositórios e contribuidores incluir antes de iniciar o uso do {% data variables.product.prodname_insights %}. Os dados que você processa com {% data variables.product.prodname_insights %} só podem ser retirados da sua instalação do {% data variables.product.prodname_ghe_server %}. Considere equilibrar os riscos versus os benefícios da análise de dados pessoais.

- **Desenvolva um plano de análise claro**: você deve entender claramente o que você quer analisar e por quê, e, em seguida, considere como {% data variables.product.prodname_insights %} pode ajudá-lo a encontrar essas respostas.

- **Considere uma avaliação de impacto de proteção de dados**: Se seu uso proposto de {% data variables.product.prodname_insights %} envolver processamento de dados pessoais, considere a conclusão de uma avaliação de impacto de proteção de dados ou a conclusão de uma análise jurídica formal do seu uso planejado.

### Decida quais dados usar

- **Decida quais repositórios incluir**: Antes de iniciar uma análise em {% data variables.product.prodname_insights %}, considere quais repositórios incluir. Os administradores podem incluir repositórios quando estiverem adicionando organizações e podem habilitar e desabilitar repositórios a qualquer momento. Para obter mais informações sobre como adicionar organizações ao {% data variables.product.prodname_insights %}, consulte "[Gerenciar organizações](/insights/installing-and-configuring-github-insights/managing-organizations). Para obter mais informações sobre como ativar e desativar repositórios, consulte "[Gerenciar repositórios](/insights/installing-and-configuring-github-insights/managing-repositories)".

- **Decida quais métricas e relatórios incluir**: Os administradores podem ativar e desativar as métricas e relatórios disponíveis para todos os usuários a qualquer momento. Os administradores controlam os dados do {% data variables.product.prodname_insights %} aos quais os usuários têm acesso na sua instalação do {% data variables.product.prodname_ghe_server %}. Para obter mais informações, consulte "[Gerenciar métricas e relatórios disponíveis](/insights/installing-and-configuring-github-insights/managing-available-metrics-and-reports)"

- **Decida quais contribuidores incluir**: Os administradores podem desativar os dados de um colaborador específico de serem processados nas métricas e relatórios. Para obter mais informações sobre o gerenciamento de dados do contribuidor, consulte "[Gerenciar contribuidores e equipes](/insights/installing-and-configuring-github-insights/managing-contributors-and-teams)".

### Direitos do usuário

Sob vários regulamentos de proteção de dados, como o Regulamento Geral de Proteção de Dados (RGPD), usuários podem ter o direito de solicitar a exclusão de processamento, acesso e correção ou solicitar a exclusão de seus dados pessoais. Como controlador de dados, sua organização deve avaliar se uma solicitação específica do usuário é válida e, se for o caso, tomar medidas para atender à solicitação.

- **Exclusão de processamento**: Os usuários podem ter o direito de ter seus dados pessoais excluídos do processamento. Os administradores têm a capacidade de remover do processamento os dados de um contribuinte em {% data variables.product.prodname_insights %} e os relatórios e métricas resultantes excluirão os dados do contribuidor apropriadamente. Para obter mais informações, consulte "[Gerenciar contribuidores e equipes](/insights/installing-and-configuring-github-insights/managing-contributors-and-teams)."

- **Acesso**: Os usuários podem ter o direito de exigir quais dados pessoais estão sendo processados. Cada métrica e cada relatório tem uma descrição detalhada dos dados pessoais que estão sendo processados. Para obter mais informações, consulte "[Mérticas disponíveis com o {% data variables.product.prodname_insights %}](/insights/exploring-your-usage-of-github-enterprise/metrics-available-with-github-insights)". Os dados brutos estão disponíveis através da API do {% data variables.product.prodname_enterprise %}. Sua organização é responsável por quaisquer decisões de processamento de dados pessoais e pelo cumprimento de tais solicitações.

- **Correção e exclusão**: Os usuários podem ter o direito de corrigir ou excluir seus dados pessoais. Os dados usados em {% data variables.product.prodname_insights %} são derivados de  dados existentes que você adiciona ou gera a partir da instalação do seu {% data variables.product.prodname_ghe_server %}. A correção e a exclusão devem seguir o processo existente da sua organização para corrigir e excluir dados de {% data variables.product.prodname_ghe_server %}.

- **Transparência em relação ao processamento**: Cada métrica e relatório tem uma descrição detalhada de quais dados pessoais estão sendo processados. Para obter mais informações, consulte "[Mérticas disponíveis com o {% data variables.product.prodname_insights %}](/insights/exploring-your-usage-of-github-enterprise/metrics-available-with-github-insights)".
