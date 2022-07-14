---
title: Disaster recovery for GitHub Codespaces
intro: 'Este artigo descreve a orientação para um cenário de recuperação de desastre, quando uma região inteira sofre uma interrupção devido a um desastre natural de grandes proporções ou interrupção de serviço generalizada.'
versions:
  fpt: '*'
  ghec: '*'
product: '{% data reusables.gated-features.codespaces %}'
topics:
  - Codespaces
shortTitle: Recuperação de desastre
redirect_from:
  - /codespaces/codespaces-reference/disaster-recovery-for-codespaces
---

Trabalhamos muito para ter a certeza de que {% data variables.product.prodname_github_codespaces %} esteja sempre disponível para você. No entanto, forças além do nosso controle às vezes impactam o serviço de formas que podem causar interrupções de serviços não planejadas.

Embora os cenários de recuperação de desastres sejam raros, recomendamos que vocês se preparem para a possibilidade de haver uma interrupção de toda uma região. Se uma região inteira tiver uma interrupção do serviço, as cópias redundantes dos seus dados ficarão temporariamente indisponíveis.

A orientação a seguir fornece opções sobre como lidar com interrupções de serviço para toda a região onde seu codespace estiver implantado.

{% note %}

**Observação:** Você pode reduzir o potencial impacto das interrupções por todo serviço fazendo push para repositórios remotos com frequência.

{% endnote %}

## Opção 1: Crie um novo ritmo de código em outra região

No caso de uma interrupção regional, sugerimos que recrie o seu codespace em uma região não afetada para continuar trabalhando. Este novo código terá todas as alterações a partir do seu último push para {% data variables.product.prodname_dotcom %}. For information on manually setting another region, see "[Setting your default region for {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)."

Você pode otimizar o tempo de recuperação configurando um `devcontainer.json` no repositório do projeto, que permite que você defina as ferramentas, tempo de execução, estruturas, configurações do editor, extensões e outras configurações necessárias para restaurar o ambiente de desenvolvimento automaticamente. Para obter mais informações, consulte "[Introdução a contêineres de desenvolvimento](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".

## Opção 2: Aguardar a recuperação

Neste caso, não é necessária nenhuma ação da sua parte. Saiba que estamos trabalhando diligentemente para restaurar a disponibilidade do serviço.

Você pode verificar o status do serviço atual no [Painel de Status](https://www.githubstatus.com/).

## Opção 3: Clonar o repositório localmente ou editá-lo no navegador

Embora o {% data variables.product.prodname_codespaces %} forneça o benefício de um ambiente de desenvolvedor pré-configurado, o seu código-fonte deve sempre poder ser acessado por meio do repositório hospedado em {% data variables.product.prodname_dotcom_the_website %}. Na hipótese de uma interrupção de {% data variables.product.prodname_codespaces %}, você ainda pode clonar o repositório localmente ou editar arquivos no editor do navegador de {% data variables.product.company_short %}. Para obter mais informações, consulte "[Editando arquivos](/repositories/working-with-files/managing-files/editing-files)".

Embora esta opção não configure um ambiente de desenvolvimento para você, ela permitirá que você faça alterações no seu código-fonte, conforme necessário, enquanto você aguarda que a interrupção do serviço seja resolvida.

## Opção 4: Usar contêineres remotos e o Docker para um ambiente contêinerizado local

Se o seu repositório tiver um `devcontainer.json`, considere o uso da [extensão Remote-Containers](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume) em {% data variables.product.prodname_vscode %} para construir e anexar a um contêiner de desenvolvimento local para o seu repositório. O tempo de configuração desta opção irá variar dependendo das suas especificações locais e da complexidade da configuração do seu contêiner de desenvolvimento.

{% note %}

**Observação:** Certifique-se de que sua configuração local atende aos [requisitos mínimos](https://code.visualstudio.com/docs/remote/containers#_system-requirements) antes de tentar essa opção.

{% endnote %}
