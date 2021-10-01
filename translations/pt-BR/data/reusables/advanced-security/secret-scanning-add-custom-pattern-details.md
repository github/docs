1. Insira as informações para o seu novo padrão personalizado:
   1. Você deve fornecer, pelo menos, o nome para o seu padrão e uma expressão regular para o formato do seu padrão de segredo.
   1. Você pode clicar em **Mais opções {% octicon "chevron-down" aria-label="down" %}** para fornecer outros conteúdos adjacentes ou requisitos adicionais de correspondência para o formato do segredo.
   1. Provide a sample test string to make sure your configuration is matching the patterns you expect.

   ![Crie um formulário de padrão personalizado de {% data variables.product.prodname_secret_scanning %}](/assets/images/help/repository/secret-scanning-create-custom-pattern.png)
1. When you are satisfied with your new custom pattern, click {% ifversion fpt or ghes > 3.2 or ghae-next %}**Create pattern**{% elsif ghes = 3.2 %}**Create custom pattern**{% endif %}.
