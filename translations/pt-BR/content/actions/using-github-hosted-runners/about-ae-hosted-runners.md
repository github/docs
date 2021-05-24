---
title: Sobre os executores hospedados de AE
intro: '{% data variables.product.prodname_ghe_managed %} oferece máquinas virtuais hospedadas de forma personalizável para executar fluxos de trabalho de {% data variables.product.prodname_actions %}. Você pode selecionar o hardware, trazer sua própria imagem de máquina e habilitar um endereço de IP para a rede com o seu {% data variables.actions.hosted_runner %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  github-ae: '*'
---




{% data reusables.actions.ae-beta %}

### Sobre {% data variables.actions.hosted_runner %}s

Um {% data variables.actions.hosted_runner %} é uma máquina virtual hospedada por {% data variables.product.prodname_dotcom %} com o serviço do executor de {% data variables.product.prodname_actions %} instalado.

{% data variables.product.prodname_ghe_managed %} permite criar e personalizar {% data variables.actions.hosted_runner %}s usando imagens do Ubuntu ou Windows. Você pode selecionar o tamanho da máquina que deseja e configurar redes enrijecidas de segurança para elas. {% data variables.actions.hosted_runner %}s são totalmente gerenciados e dimensionados automaticamente por {% data variables.product.prodname_dotcom %}.

Cada trabalho do fluxo de trabalho é executado em uma nova instância do {% data variables.actions.hosted_runner %} e você poderá executar fluxos de trabalho diretamente na máquina virtual ou em um contêiner do Docker. Todas as etapas da tarefa executada na mesma instância, permitindo que as ações desse trabalho compartilhem informações que usam o sistema de arquivos de {% data variables.actions.hosted_runner %}.

{% note %}
{% data variables.actions.hosted_runner %}s são os únicos executores disponíveis para {% data variables.product.prodname_ghe_managed %} e os executores auto-hospedados não estão disponíveis.
{% endnote %}

Para adicionar {% data variables.actions.hosted_runner %}s à sua organização ou empresa, consulte ["Adicionar {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/adding-ae-hosted-runners)".

### Recomendações de grupo para {% data variables.actions.hosted_runner %}s

Os seus {% data variables.actions.hosted_runner %}s estão alocados no mesmo grupo que a sua instância de {% data variables.product.prodname_ghe_managed %}. Nenhum outro cliente tem acesso a este grupo e, como resultado, {% data variables.actions.hosted_runner %}s não são compartilhados com nenhum outro cliente.

### Gerenciar seus {% data variables.actions.hosted_runner %}s

Durante o beta de {% data variables.actions.hosted_runner %}, você pode gerenciar seus {% data variables.actions.hosted_runner %}s entrando em contato com o suporte de {% data variables.product.prodname_dotcom %}. Por exemplo, o suporte de {% data variables.product.prodname_dotcom %} pode ajudá-lo a adicionar um novo {% data variables.actions.hosted_runner %}, atribuir etiquetas ou transferir um {% data variables.actions.hosted_runner %} para um grupo diferente.

### Cobrança

{% data variables.product.prodname_actions %} está atualmente em beta para {% data variables.product.prodname_ghe_managed %}. Durante este período beta, {% data variables.actions.hosted_runner %}s não são faturados e podem ser usados grátis.

Assim que a versão beta terminar, o uso faturado incluirá a atividade completa de instâncias ativas em seus conjuntos de executores hospedados de AE. Isto inclui:
- Tempo de trabalho - minutos gastos executando o trabalho de ações.
- Gerenciamento - minutos gastos criando novas imagens de máquinas e tempo ocioso criado como resultado do comportamento da escala automática desejada.

A precificação será escalada linearmente com núcleos. Por exemplo, 4 núcleos serão o dobro do preço de 2 núcleos. Os VMs do Windows terão um preço superior aos VMs do Linux.

### Especificações de hardware

{% data variables.actions.hosted_runner %}s estão disponíveis em uma série de máquinas virtuais hospedadas no Microsoft Azure. Dependendo da disponibilidade regional, você pode escolher entre `Standard_Das_v4`, `Standard_DS_v2`, `Standard_Fs_v2 series`. Algumas regiões também incluem executores de GPU com base no `Standard_NCs_v3`.

Para obter mais informações sobre os recursos da máquina do Azure, consulte "[Tamanhos para máquinas virtuais no Azure](https://docs.microsoft.com/en-gb/azure/virtual-machines/sizes)" na documentação do Microsoft Azure.

Para determinar qual executor realizou um trabalho, você pode rever os logs do fluxo de trabalho. Para obter mais informações, consulte "[Visualizar histórico de execução de fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".

### Especificações do software

Você pode usar {% data variables.actions.hosted_runner %}s com imagens padrão do sistema operacional ou pode adicionar imagens que você criou.

#### Imagens padrão do sistema operacional

Estas imagens incluem apenas as ferramentas padrão do sistema operacional:

- Ubuntu 18.04 LTS (Canonical)
- Ubuntu 16.04 LTS (Canonical)
- Windows Server 2019 (Microsoft)
- Windows Server 2016 (Microsoft)

#### Imagens personalizadas do sistema operacional

Você pode criar suas próprias imagens de OS no Azure e adicioná-las a {% data variables.product.prodname_ghe_managed %} como {% data variables.actions.hosted_runner %}s. Para obter mais informações, consulte "[Adicionar um {% data variables.actions.hosted_runner %} com uma imagem personalizada"](/actions/using-github-hosted-runners/adding-ae-hosted-runners#adding-an-ae-hosted-runner-with-a-custom-image).

### Especificações de rede

Opcionalmente, você pode habilitar um endereço de IP público estático e fixo para seus {% data variables.actions.hosted_runner %}s. Se habilitados, todos os {% data variables.actions.hosted_runner %}s na sua instância compartilharão uma faixa de 2 a 4 endereços IP, e irão comunicar-se usando as portas nesses endereços.

Se você não habilitar endereços IP públicos estáticos, os {% data variables.actions.hosted_runner %}s terão, subsequentemente, as mesmas faixas de endereços IP que os centros de dados do Azure. Os pacotes ICMP de entrada estão bloqueados. Portanto, não se espera que os comandos `ping` ou `traceroute` funcionem.

Para obter uma lista de intervalos de endereços IP que {% data variables.product.prodname_actions %} usa para {% data variables.actions.hosted_runner %}, você pode usar a API REST de {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte a chave de `ações` na resposta do ponto de extremidade "[Obtenha as metainformações do GitHub](/rest/reference/meta#get-github-meta-information)". Você pode usar essa lista de endereços IP se precisar de uma lista de permissão para evitar acesso não autorizado para os seus recursos internos.

A lista de endereços IP de {% data variables.product.prodname_actions %} retornados pela API é atualizada uma vez por semana.

### Privilégios administrativos para {% data variables.actions.hosted_runner %}s

As máquinas virtuais do Linux são executadas, usando `sudo` sem senha. Quando precisar executar comandos ou instalar ferramentas que exigem mais permissões que o usuário atual possui, você pode usar `sudo` sem a necessidade de fornecer uma senha. Para obter mais informações, consulte o "[Manual do Sudo](https://www.sudo.ws/man/1.8.27/sudo.man.html)".

As máquinas virtuais do Windows estão configuradas para ser executadas como administradores com Controle de Conta de Usuário (UAC) desativado. Para obter mais informações, consulte "[Como funciona o Controle de Conta de Usuário](https://docs.microsoft.com/windows/security/identity-protection/user-account-control/how-user-account-control-works)" na documentação do Windows.

### Sistemas de arquivos

O {% data variables.product.prodname_dotcom %} executa ações e comandos de shell em diretórios específicos na máquina virtual. Os caminhos dos arquivos nas máquinas virtuais não são estáticos. Use as variáveis de ambiente que {% data variables.product.prodname_dotcom %} fornece para construir caminhos de arquivos para os diretórios `home`, `workspace` e `workflow`.

| Diretório             | Variável de ambiente | Descrição                                                                                                                                                                                                     |
| --------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `casa`                | `HOME`               | Contém dados relacionados ao usuário. Por exemplo, esse diretório pode conter credenciais de uma tentativa de login.                                                                                          |
| `área de trabalho`    | `GITHUB_WORKSPACE`   | As ações e comandos do shell executados neste diretório. Uma ação pode modificar o conteúdo desse diretório, que fica acessível nas ações subsequentes.                                                       |
| `workflow/event.json` | `GITHUB_EVENT_PATH`  | A carga `POST` do evento webhook que acionou o fluxo de trabalho. O {% data variables.product.prodname_dotcom %} o rescreve sempre que uma ação é executada para isolar o conteúdo do arquivo entre as ações. |

Para obter uma lista das variáveis de ambiente que {% data variables.product.prodname_dotcom %} cria para cada fluxo de trabalho, consulte "[Usar variáveis de ambiente](/github/automating-your-workflow-with-github-actions/using-environment-variables)".

#### Sistema de arquivos do contêiner Docker

Ações executadas em contêineres Docker têm diretórios estáticos no caminho `/github`. No entanto, é altamente recomendável usar as variáveis de ambiente padrão para elaborar caminhos de arquivos em contêineres do Docker.

O {% data variables.product.prodname_dotcom %} reserva o prefixo de caminho `/github` e cria três diretórios para ações.

- `/github/home`
- `/github/workspace` - {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`
