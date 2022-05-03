Recomendamos que você use apenas executores auto-hospedados com repositórios privados. Isso acontece porque as bifurcações do seu repositório podem potencialmente executar código perigoso na sua máquina de executor auto-hospedada criando um pull request que executa o código em um fluxo de trabalho.

{%- ifversion fpt or ghec  %}
To help mitigate this risk for public repositories, you can require approvals for workflow runs from first-time contributors. Para obter mais informações, consulte "[Aprovar fluxos de trabalho executados a partir de bifurcações públicas](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)".
{%- endif %}