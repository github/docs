{%- ifversion restrict-groups-to-workflows %}
1. 为工作流程访问分配策略。

   您可以将运行器组配置为可供特定工作流程列表或所有工作流程访问。 如果配置企业共享的组织的运行组，则不能覆盖此设置。 如果指定哪些工作流程可以访问运行程序组，则必须使用工作流程的完整路径（包括存储库名称和所有者），并且必须将工作流程固定到分支、标记或完整 SHA。 例如：`octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`。

   只有直接在所选工作流程中定义的作业才能访问运行器组。{%- endif %}
