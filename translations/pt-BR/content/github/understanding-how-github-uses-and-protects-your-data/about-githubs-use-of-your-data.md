---
title: Sobre o uso dos seus dados pelo GitHub
redirect_from:
  - /articles/about-github-s-use-of-your-data
  - /articles/about-githubs-use-of-your-data
intro: 'O {% data variables.product.product_name %} usa os dados do seu repositório para conectar você a ferramentas, pessoas, projetos e informações relevantes.'
versions:
  free-pro-team: '*'
topics:
  - Policy
  - Legal
---
 
### Sobre o uso de seus dados pelo {% data variables.product.product_name %}

O {% data variables.product.product_name %} agrega metadados e analisa padrões de conteúdo com a finalidade de fornecer insights genéricos sobre o produto. Ele usa dados de repositórios públicos, além de usar metadados e agregar dados de repositórios privados quando o proprietário de um repositório opta por compartilhar os dados com o {% data variables.product.product_name %} por meio de aceitação. Se você optar por um repositório privado no uso de dados, será feita uma análise somente leitura desse repositório privado específico.

{% data reusables.repositories.about-github-archive-program %} Para mais informações, consulte "[Sobre arquivar conteúdo e dados no {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)."

{% data reusables.user_settings.export-data %} Para obter mais informações, consulte "[Solicitar um arquivamento dos dados da sua conta pessoal](/articles/requesting-an-archive-of-your-personal-account-s-data)".

Se você aceitar o uso de dados para um repositório privado, continuaremos tratando seus dados privados, código-fonte ou segredos comerciais como confidenciais e privados em conformidade com nossos [Termos de Serviço](/articles/github-terms-of-service/). As informações apreendidas são provenientes apenas de dados agregados. Para obter mais informações, consulte "[Gerenciando configurações do uso de dados de seu repositório privado](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)".

Anunciaremos novos recursos importantes que usam metadados ou dados agregados no [blog do {% data variables.product.prodname_dotcom %}](https://github.com/blog).

### Como os dados melhoram as recomendações de segurança

Para dar um exemplo de como os dados podem ser usados, podemos detectar e alertar você para uma vulnerabilidade de segurança nas dependências do seu repositório público. Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"

Para detectar possíveis vulnerabilidades de segurança, o {% data variables.product.product_name %} verifica o conteúdo do arquivo de manifesto de dependência para extrair uma lista de dependências do seu projeto.

O {% data variables.product.product_name %} também aprende com as alterações que você faz no manifesto de dependência. Por exemplo, se você atualizar uma dependência vulnerável para uma versão segura após receber um alerta de segurança e outras pessoas fizerem o mesmo, o {% data variables.product.product_name %} aprenderá como corrigir a vulnerabilidade e poderá recomendar um patch semelhante aos repositórios afetados.

### Compartilhamento de dados e privacidade

Os dados do repositório privada são verificados por máquina e nunca lidos pela equipe do {% data variables.product.product_name %}. Os olhos humanos nunca verão o conteúdo dos repositórios privados, exceto conforme descrito em nossos [Termos de serviço](/articles/github-terms-of-service/#3-access).

Os dados pessoais e individuais ou do seu repositório não serão compartilhados com terceiros. Podemos compartilhar dados agregados apreendidos por nossa análise com nossos parceiros.
