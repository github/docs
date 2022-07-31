1. Under "Runners", locate the runner in the list. Se o seu runner estiver em um grupo, clique em {% octicon "chevron-down" aria-label="The downwards chevron" %} para expandir a lista.
1. Clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} ao lado do runner que deseja remover, depois clique em **Remover**.

    ![Removendo uma configuração do executor auto-hospedado](/assets/images/help/settings/actions-runner-remove.png)
1. Você verá instruções para remover o executor auto-hospedado. Complete qualquer um dos seguintes passos para remover o executor, dependendo se ele ainda está acessível:

    * **If you have access to the runner machine:** (Se você tiver acesso à máquina do executor:) Siga as instruções na tela para que o sistema operacional da sua máquina execute o comando de remoção. As instruções incluem a URL necessária e um token gerado automaticamente, limitado por tempo.

        O comando de remoção executa as seguintes tarefas:

        * Remove o executor de {% data variables.product.product_name %}.
        * Remove todos os arquivos de configuração do aplicativo de executor auto-hospedado na máquina.
        * Remove todos os serviços configurados se não estiver em execução no modo interativo.

    * **Se você não tem acesso à máquina:** Clique em **Sim, forçar a remoção deste runner** para forçar {% data variables.product.product_name %} para remover o runner.
