---
title: Introdução à sua conta do GitHub
intro: 'Com uma conta pessoal no {% data variables.product.prodname_dotcom %}, você pode importar ou criar repositórios, colaborar com outras pessoas e se conectar com a comunidade do {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 38d23c1a1b5021a681aedff8813daad751905d8a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147408913'
---
Este guia descreverá a configuração da sua conta do {% data variables.product.company_short %} e uma introdução aos recursos de colaboração e comunidade do {% data variables.product.product_name %}.

## Parte 1: Configurando sua conta de {% data variables.product.prodname_dotcom %}

{% ifversion fpt or ghec %} As primeiras etapas para começar a usar o {% data variables.product.product_name %} são criar uma conta, escolher um produto que se adapte melhor às suas necessidades, confirmar seu email, configurar a autenticação de dois fatores e ver seu perfil.
{% elsif ghes %} As primeiras etapas para começar a usar o {% data variables.product.product_name %} são acessar sua conta, configurar a autenticação de dois fatores e ver seu perfil.
{% elsif ghae %} As primeiras etapas para começar a usar o {% data variables.product.product_name %} são acessar sua conta e ver seu perfil.
{% endif %}

{% ifversion fpt or ghec %}Há vários tipos de contas no {% data variables.product.prodname_dotcom %}. {% endif %} Toda pessoa que usar {% data variables.product.product_name %} terá sua conta pessoal e poderá fazer parte de várias organizações e equipes. A sua conta pessoal é sua identidade em {% data variables.product.product_location %} e representa você como indivíduo.

{% ifversion fpt or ghec %}
### 1. Como criar uma conta
Para se inscrever em uma conta na {% data variables.product.product_location %}, acesse https://github.com/ e siga os prompts.

Para manter a sua conta de {% data variables.product.prodname_dotcom %} segura, você deverá usar uma senha forte e exclusiva. Para obter mais informações, confira "[Como criar uma senha forte](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password)".

### 2. Como escolher seu produto do {% data variables.product.prodname_dotcom %}
Você pode escolher {% data variables.product.prodname_free_user %} ou {% data variables.product.prodname_pro %} para obter acesso a diferentes recursos da sua conta pessoal. Você pode fazer a atualização a qualquer momento se não tiver certeza qual o produto você deseja.

Para obter mais informações sobre todos os planos do {% data variables.product.prodname_dotcom %}, confira "[Produtos do {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/githubs-products)".

### 3. Como confirmar seu endereço de email
Para garantir que você possa utilizar todos os recursos do seu plano de {% data variables.product.product_name %}, verifique o seu endereço de e-mail após inscrever-se em uma nova conta. Para obter mais informações, confira "[Como confirmar seu endereço de email](/github/getting-started-with-github/signing-up-for-github/verifying-your-email-address)".
{% endif %}

{% ifversion ghes %}
### 1. Como acessar sua conta
O administrador da sua instância de {% data variables.product.product_name %} irá notificar você sobre como efetuar a autenticação e acessar a sua conta. O processo varia dependendo do modo de autenticação que eles configuraram para a instância.
{% endif %}

{% ifversion ghae %}
### 1. Como acessar sua conta
Você receberá uma notificação por e-mail assim que o proprietário corporativo de {% data variables.product.product_name %} tiver configurado a sua conta permitindo que você efetue a autenticação com o logon único SAML (SSO) e acesse sua conta.
{% endif %}

{% ifversion fpt or ghes or ghec %}
### {% ifversion fpt or ghec %}4.{% else %}2.{% endif %} Como configurar a autenticação de dois fatores
A autenticação de dois fatores, ou 2FA, é uma camada extra de segurança usada no logon em sites ou apps. É altamente recomendável que você configure a 2FA para a segurança da sua conta. Para obter mais informações, confira "[Sobre a autenticação de dois fatores](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)".
{% endif %}
### {% ifversion fpt or ghec %}5.{% elsif ghes %}3.{% else %}2.{% endif %} Como ver seu perfil e seu grafo de contribuição do {% data variables.product.prodname_dotcom %}
Seu perfil do {% data variables.product.prodname_dotcom %} conta às pessoas a história do seu trabalho por meio dos repositórios e dos gists que você fixou, as associações à organização que você optou por divulgar, as contribuições que você fez e os projetos que você criou. Para obter mais informações, confira "[Sobre seu perfil](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile)" e "[Como ver as contribuições no seu perfil](/github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile)".

## Parte 2: Usando ferramentas e processos de {% data variables.product.product_name %}
Para usar {% data variables.product.product_name %} da melhor forma, você deverá configurar o Git. O Git é responsável por tudo relacionado ao {% data variables.product.prodname_dotcom %} que acontece localmente no computador. Para colaborar de forma efetiva em {% data variables.product.product_name %}, você escreverá em problemas e pull requests usando o Markdown enriquecido de {% data variables.product.prodname_dotcom %}.

### 1. Como aprender a usar o Git
A abordagem colaborativa do {% data variables.product.prodname_dotcom %} para o desenvolvimento depende da publicação dos commits do repositório local para {% data variables.product.product_name %} para que outras pessoas vejam, busquem e atualizem outras pessoas que usam o Git. Para obter mais informações sobre o Git, confira o guia "[Manual do Git](https://guides.github.com/introduction/git-handbook/)". Para obter mais informações sobre como o Git é usado no {% data variables.product.product_name %}, confira "[Fluxo do {% data variables.product.prodname_dotcom %}](/get-started/quickstart/github-flow)".
### 2. Como configurar o Git
Se você planeja usar o Git localmente no seu computador, por meio da linha de comando, editor de IDE ou texto, você deverá instalar e configurar o Git. Para obter mais informações, confira "[Configurar o Git](/get-started/quickstart/set-up-git)".

Se você preferir usar uma interface visual, você poderá fazer o download e usar {% data variables.product.prodname_desktop %}. {% data variables.product.prodname_desktop %} vem empacotado com o Git. Portanto não há a necessidade de instalar o Git separadamente. Para obter mais informações, confira "[Introdução ao {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop)".

Depois de instalar o Git, você poderá conectar-se aos repositórios de {% data variables.product.product_name %} a partir do seu computador local, independentemente de ser o seu próprio repositório ou a bifurcação de outro usuário. Ao conectar-se a a um repositório no {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} do Git, você deveá efetuar a autenticação com {% data variables.product.product_name %} usando HTTPS ou SSH. Para obter mais informações, confira "[Sobre os repositórios remotos](/get-started/getting-started-with-git/about-remote-repositories)".

### 3. Como escolher como interagir com o {% data variables.product.product_name %}
Todos têm seu próprio fluxo de trabalho único para interagir com {% data variables.product.prodname_dotcom %}; as interfaces e métodos que você usa dependem da sua preferência e do que funciona melhor para as suas necessidades.

Para obter mais informações sobre como se autenticar no {% data variables.product.product_name %} com cada um desses métodos, confira "[Sobre a autenticação no {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/about-authentication-to-github)".

| **Método**  | **Descrição** | **Casos de uso** |
| ------------- | ------------- | ------------- |
| Acesse {% data variables.product.prodname_dotcom_the_website %} | Se você não precisar trabalhar com arquivos localmente, {% data variables.product.product_name %} permite que você realize a maioria das ações relacionadas ao Gits diretamente no navegador, da criação e bifurcação de repositórios até a edição de arquivos e abertura de pull requests.| Esse método é útil se você quiser uma interface visual e precisar fazer mudanças rápidas e simples que não requerem trabalho local. |
| {% data variables.product.prodname_desktop %} | O {% data variables.product.prodname_desktop %} amplia e simplifica o fluxo de trabalho no {% data variables.product.prodname_dotcom_the_website %} com uma interface visual, em vez de comandos de texto na linha de comando. Para obter mais informações sobre como começar a usar o {% data variables.product.prodname_desktop %}, confira "[Introdução ao {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop)". | Este método é melhor se você precisa ou deseja trabalhar com arquivos localmente, mas preferir usar uma interface visual para usar o Git e interagir com {% data variables.product.product_name %}. |
| Editor de IDE ou de texto  | Você pode definir um editor de texto padrão, como o [Atom](https://atom.io/) ou o [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/), para abrir e editar seus arquivos com o Git, usar extensões e ver a estrutura do projeto. Para obter mais informações, confira "[Como associar editores de texto ao Git](/github/using-git/associating-text-editors-with-git)". | Isto é conveniente se você estiver trabalhando com arquivos e projetos mais complexos e quiser ter tudo em um só lugar, uma vez que os editores de texto ou IDEs muitas vezes permitem que você acesse diretamente a linha de comando no editor. |
| Linha de comando, com ou sem {% data variables.product.prodname_cli %} | Para o controle e personalização mais granulares de como você usa o Git e interage com {% data variables.product.product_name %}, você pode usar a linha de comando. Para obter mais informações sobre como usar comandos do Git, confira "[Folha de referências do Git](/github/getting-started-with-github/quickstart/git-cheatsheet)".<br/><br/> A {% data variables.product.prodname_cli %} é uma ferramenta de linha de comando separada que pode ser instalada para exibir solicitações de pull, problemas, {% data variables.product.prodname_actions %} e outros recursos do {% data variables.product.prodname_dotcom %} no terminal, para que você possa fazer todo o seu trabalho em um só lugar. Para obter mais informações, confira "[{% data variables.product.prodname_cli %}](/github/getting-started-with-github/using-github/github-cli)". | Isto é muito conveniente se você já estiver trabalhando na linha de comando, o que permite que você evite mudar o contexto, ou se você estiver mais confortável usando a linha de comando. |
| {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API | {% data variables.product.prodname_dotcom %} tem uma API REST e uma API do GraphQL que você pode usar para interagir com {% data variables.product.product_name %}. Para obter mais informações, confira "[Introdução à API](/github/extending-github/getting-started-with-the-api)". | A API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} seria muito útil se você quisesse automatizar tarefas comuns, fazer backup dos seus dados ou criar integrações que estendem {% data variables.product.prodname_dotcom %}. |
### 4. Gravação no {% data variables.product.product_name %}
Para deixar sua comunicação clara e organizada nos problemas e pull requests, você pode usar o Markdown enriquecido {% data variables.product.prodname_dotcom %} para formatação, que combina uma sintaxe fácil de ler e fácil de escrever com algumas funcionalidades personalizadas. Para obter mais informações, confira "[Sobre a gravação e a formatação no {% data variables.product.prodname_dotcom %}](/github/writing-on-github/about-writing-and-formatting-on-github)".

Aprenda a usar o {% data variables.product.prodname_dotcom %} Flavored Markdown no curso "[Comunicação usando Markdown](https://github.com/skills/communicate-using-markdown)" no {% data variables.product.prodname_learning %}.

### 5. Pesquisa no {% data variables.product.product_name %}
Nossa pesquisa integrada permite que você encontre o que você está procurando entre os muitos repositórios, usuários e linhas de código em {% data variables.product.product_name %}. Você pode pesquisar globalmente em todos os {% data variables.product.product_name %} ou limitar sua pesquisa a um repositório ou organização em particular. Para obter mais informações sobre os tipos de pesquisas que você pode fazer no {% data variables.product.product_name %}, confira "[Sobre a pesquisa no {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github)".

Nossa sintaxe de pesquisa permite que você construa consultas usando qualificadores para especificar o que você deseja pesquisar. Para obter mais informações sobre a sintaxe de pesquisa a ser usada na pesquisa, confira "[Pesquisa no {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/searching-on-github)".

### 6. Como gerenciar arquivos no {% data variables.product.product_name %}
Com {% data variables.product.product_name %}, você pode criar, editar, mover e excluir arquivos no seu repositório ou em qualquer repositório ao qual você tenha acesso de gravação. Você também pode acompanhar o histórico de alterações de um arquvo linha por linha. Para obter mais informações, confira "[Como gerenciar arquivos no {% data variables.product.prodname_dotcom %}](/github/managing-files-in-a-repository/managing-files-on-github)".

## Parte 3: Colaborando em {% data variables.product.product_name %}
Qualquer quantidade de pessoas pode trabalhar juntas nos repositórios de {% data variables.product.product_name %}. É possível configurar configurações, criar quadros de projetos e gerenciar suas notificações para incentivar uma colaboração eficaz.

### 1. Como trabalhar com repositórios

#### Criar um repositório
Um repositório é como uma pasta para seu projeto. Você pode ter qualquer número de repositórios públicos e privados na sua conta pessoal. Os repositórios podem conter pastas e arquivos, imagens, vídeos, planilhas e conjuntos de dados, bem como o histórico de revisão para todos os arquivos no repositório. Para obter mais informações, confira "[Sobre os repositórios](/github/creating-cloning-and-archiving-repositories/about-repositories)".

Ao criar um novo repositório, você deverá inicializar o repositório com um arquivo README para que as pessoas conheçam o seu projeto. Para obter mais informações, confira "[Como criar um repositório](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository)".

#### Clonar um repositório
Você pode clonar um repositório existente a partir de {% data variables.product.product_name %} para o seu computador local, facilitando a adição ou remoção dos arquivos, correção de conflitos de merge ou realização de commits complexos. A clonagem de um repositório extrai uma cópia completa de todos os dados do repositório que o {% data variables.product.prodname_dotcom %} tem nesse momento, incluindo todas as versões de cada arquivo e pasta do projeto. Para obter mais informações, confira "[Como clonar um repositório](/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)".

#### Bifurcar um repositório
Uma bifurcação é uma cópia de um repositório que você gerencia, em que todas as alterações que você fizer não afetarão o repositório original a menos que você envie um pull request para o proprietário do projeto. O uso mais comum das bifurcações são propostas de mudanças no projeto de alguma outra pessoa ou o uso do projeto de outra pessoa como ponto de partida para sua própria ideia. Para obter mais informações, confira "[Como trabalhar com forks](/github/collaborating-with-pull-requests/working-with-forks)".
### 2. Como importar seus projetos
Se você tiver projetos existentes que deseja mover para {% data variables.product.product_name %}, você poderá importar projetos usando o Importador de {% data variables.product.prodname_dotcom %}, a linha de comando ou as ferramentas externas de migração. Para obter mais informações, confira "[Como importar o código-fonte para o {% data variables.product.prodname_dotcom %}](/github/importing-your-projects-to-github/importing-source-code-to-github)".

### 3. Como gerenciar colaboradores e permissões
Você pode colaborar em seu projeto com outras pessoas usando os problemas, as pull requests e os quadros de projeto do repositório. Você pode convidar outras pessoas para seu repositório como colaboradores na guia **Colaboradores** nas configurações do repositório. Para obter mais informações, confira "[Como convidar colaboradores para um repositório pessoal](/github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)".

Você é o proprietário de qualquer repositório que você cria na sua conta pessoal e você tem controle total sobre repositório. Os colaboradores têm acesso de gravação ao seu repositório, limitando o que eles têm permissão para fazer. Para obter mais informações, confira "[Níveis de permissão para um repositório da conta pessoal](/github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository)".

### 4. Como gerenciar as configurações do repositório
Como proprietário de um repositório, você pode configurar diversas configurações, incluindo a visibilidade do repositório, tópicos e a pré-visualização das mídias sociais. Para obter mais informações, confira "[Como gerenciar as configurações do repositório](/github/administering-a-repository/managing-repository-settings)".

### 5. Como configurar seu projeto para contribuições úteis
{% ifversion fpt or ghec %} Para incentivar os colaboradores do seu repositório, você precisa ter uma comunidade que incentive as pessoas a usar, contribuir e divulgar seu projeto. Para obter mais informações, confira "[Como criar comunidades receptivas](https://opensource.guide/building-community/)" nos Guias de Código Aberto.

Ao adicionar arquivos como diretrizes de contribuição, um código de conduta e uma licença para o repositório é possível criar um ambiente em que seja mais fácil para os colaboradores fazerem contribuições úteis e significativas. Para obter mais informações, confira "[Como configurar seu projeto para contribuições úteis](/communities/setting-up-your-project-for-healthy-contributions)".
{% endif %} {% ifversion ghes or ghae %} Adicionando arquivos como diretrizes de contribuição, um código de conduta e recursos de suporte ao seu repositório, você pode criar um ambiente em que seja mais fácil para os colaboradores fazerem contribuições significativas e úteis. Para obter mais informações, confira "[Como configurar seu projeto para contribuições úteis](/communities/setting-up-your-project-for-healthy-contributions)".
{% endif %}

### 6. Como usar os quadros de projetos e os Problemas do GitHub
Você pode usar os problemas do GitHub para organizar seu trabalho com problemas e pull requests, bem como gerenciar seu fluxo de trabalho com quadros de projetos. Para obter mais informações, confira "[Sobre os problemas](/issues/tracking-your-work-with-issues/about-issues)" e "[Sobre os quadros de projetos](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)".

### 7. Como gerenciar notificações
As notificações fornecem atualizações sobre as atividades do {% data variables.product.prodname_dotcom %} nas quais você se inscreveu ou participou. Se não estiver mais interessado em uma conversa, cancele a assinatura dela, deixe de acompanhar ou personalize os tipos de notificações que você receberá no futuro. Para obter mais informações, confira "[Sobre as notificações](/github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)".

### 8. Como trabalhar com o {% data variables.product.prodname_pages %}
Você pode usar {% data variables.product.prodname_pages %} para criar e hospedar um site diretamente a partir de um repositório em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Para obter mais informações, confira "[Sobre o {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)".

{% ifversion discussions %}
### 9. Como usar as {% data variables.product.prodname_discussions %}
Você pode habilitar {% data variables.product.prodname_discussions %} para o repositório ajudar a criar uma comunidade em torno do seu projeto. Mantenedores, colaboradores e visitantes podem usar discussões para compartilhar anúncios, fazer e responder a perguntas e participar de conversas sobre objetivos. Para obter mais informações, confira "[Sobre as discussões](/discussions/collaborating-with-your-community-using-discussions/about-discussions)".
{% endif %}
## Parte 4: Personalizando e automatizando seu trabalho em {% data variables.product.product_name %}

{% data reusables.getting-started.customizing-and-automating %}

{% ifversion fpt or ghec %}
### 1. Como usar o {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %} {% endif %}
### {% ifversion fpt or ghec %}2.{% else %}1.{% endif %} Usando o {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}API{% endif %}
{% data reusables.getting-started.api %}

### {% ifversion fpt or ghec %}3.{% else %}2.{% endif %} Como criar {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

### {% ifversion fpt or ghec %}4.{% else %}3.{% endif %} Como publicar e gerenciar o {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}

## Parte 5: Criando com segurança em {% data variables.product.product_name %}
{% data variables.product.product_name %} tem uma variedade de recursos de segurança que ajudam a manter códigos e segredos seguros nos repositórios. Algumas funcionalidades estão disponíveis para todos os repositórios, enquanto outras estão disponíveis apenas para repositórios públicos e repositórios com uma licença de {% data variables.product.prodname_GH_advanced_security %}. Para ter uma visão geral dos recursos de segurança do {% data variables.product.product_name %}, confira "[Recursos de segurança do {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

### 1. Como proteger seu repositório
Como administrador do repositório, você pode proteger os seus repositórios definindo as configurações de segurança do repositório. Elas incluem o gerenciamento de acesso ao seu repositório, a definição de uma política de segurança e o gerenciamento de dependências. Para repositórios públicos e para repositórios privados pertencentes a organizações em que o {% data variables.product.prodname_GH_advanced_security %} está habilitado, você também pode configurar o código e a digitalização de segredos para identificar automaticamente vulnerabilidades e garantir que os tokens e chaves não sejam expostos. 

Para obter mais informações sobre as etapas que você pode executar para proteger seus repositórios, confira "[Como proteger seu repositório](/code-security/getting-started/securing-your-repository)".

{% ifversion fpt or ghec %}
### 2. Como gerenciar suas dependências
Uma grande parte da criação é manter as dependências do seu projeto para garantir que todos os pacotes e aplicativos dos quais você depende estejam atualizados e seguros. Você pode gerenciar as dependências do seu repositório em {% data variables.product.product_name %}, explorando o gráfico de dependências para o seu repositório, usando o Dependabot para aumentar automaticamente os pull requests para manter as suas dependências atualizadas e receber alertas de dependência e atualizações de segurança para dependências vulneráveis. 

Para obter mais informações, confira "[Como proteger sua cadeia de fornecedores de software](/code-security/supply-chain-security)".
{% endif %}

## Parte 6: Participando da comunidade de {% data variables.product.prodname_dotcom %}

{% data reusables.getting-started.participating-in-community %}

### 1. Como contribuir para projetos de código aberto
{% data reusables.getting-started.open-source-projects %}

### 2. Como interagir com o {% data variables.product.prodname_gcf %}
{% data reusables.support.ask-and-answer-forum %}

### 3. Leitura sobre o {% data variables.product.product_name %} no {% data variables.product.prodname_docs %}

{% data reusables.docs.you-can-read-docs-for-your-product %}

### 4. Aprendizagem com o {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning %}

{% ifversion fpt or ghec %}
### 5. Como apoiar a comunidade de código aberto
{% data reusables.getting-started.sponsors %}

### 6. Como entrar em contato com o {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}

{% ifversion fpt %}
## Leitura adicional
- "[Introdução à {% data variables.product.prodname_team %}](/get-started/onboarding/getting-started-with-github-team)" {% endif %} {% endif %}
