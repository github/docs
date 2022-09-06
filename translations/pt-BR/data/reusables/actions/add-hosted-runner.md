1. Clique **Novo executor**, em seguida, clique **{% octicon "mark-github" aria-label="New hosted runner" %} novo corredor hospedado no Github**.
1. Complete os detalhes necessários para configurar seu novo executor:

    - **Nome**: Insira um nome para o seu novo executor. Para facilitar a identificação, isto deve indicar seu hardware e configuração operacional, como `ubuntu-20.04-16core`.
    - **Imagem do executor**: Escolha um sistema operacional entre as opções disponíveis. Uma vez selecionado um sistema operacional, você poderá escolher uma versão específica.
    - **Tamanho do executor**: Escolha uma configuração de hardware na lista suspensa com as opções disponíveis.
    - **Dimensionamento automático**: Escolha o número máximo de executores que podem estar ativos a qualquer momento.
    - **Grupo de executores**: Escolha o grupo do qual seu executor será integrante. Este grupo irá hospedar várias instâncias do seu executor, uma vez que aumentam ou diminuem para atender à demanda.
    - **Rede**: Apenas para {% data variables.product.prodname_ghe_cloud %}: Escolha se um intervalo de endereço IP estático será atribuído às instâncias do {% data variables.actions.hosted_runner %}. Você pode usar até 10 endereços de IP estáticos no total.

1. Clique em **Criar executor**.