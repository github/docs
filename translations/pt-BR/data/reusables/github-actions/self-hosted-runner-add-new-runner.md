1. Em "Self-hosted runners" (Executores auto-hospedados), clique em **Add runner** (Adicionar executor).

1. Selecione o sistema operacional e a arquitetura da sua máquina de executor auto-hospedada. ![Selecionar sistema operacional de executor auto-hospedado](/assets/images/help/settings/actions-runner-architecture-os.png)


1. Você verá instruções mostrando como baixar o executor e instalá-lo em sua máquina de executor auto-hospedada.

   Abra um shell em sua máquina de executor auto-hospedado e execute cada comando shell na ordem mostrada.

   {% note %}

   **Nota:** No Windows, se você quiser instalar a aplicação de executor auto-hospedada como um serviço, você deve abrir um shell com privilégios de administrador. Também recomendamos que você use `C:\actions-runner` como diretório para o aplicativo runner auto-hospedado para que as contas de sistema Windows possam acessar o diretório do executor.

   {% endnote %}

   As instruções te ajudam a completar estas tarefas:
   - Transferindo e extraindo o aplicativo do executor auto-hospedado.
   - Executando o script `config` para configurar a aplicação de executor auto-hospedada e registrá-lo no {% data variables.product.prodname_actions %}. O script `config` requer a URL de destino e um token de tempo limitado gerado automaticamente para autenticar a solicitação.
     - No Windows, o script `config` também pergunta se você gostaria de instalar o aplicativo de execução auto-hospedado como um serviço. Para Linux e macOS, você pode instalar um serviço depois de terminar de adicionar o executor. Para obter mais informações, consulte "[Configuring the self-hosted runner application as a service](/actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service)."
   - Executando o aplicativo do executor auto-hospedado para conectar a máquina ao {% data variables.product.prodname_actions %}.
