---
title: About hardware requirements to run CodeQL 
shortTitle: CodeQL hardware requirements
intro: You can choose the best suitable CPU and RAM size for the virtual machine to analyze your code with  {% data variables.product.prodname_codeql %} in the most efficient way based on your codebase size.
product: '{% data variables.product.prodname_codeql %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Integration
  - CI

---
{% data variables.product.prodname_codeql %} can be set up by using GitHub Actions or external CI systems. 
You can choose the different machine sizes to run {% data variables.product.prodname_codeql %} analysis based on your codebase size to achieve the optimal performance result.
If the machine size is small for the codebase size you want to analyze the analysis may take longer. If the machine size is bigger for the codebase size you want to analyze it may get expensive. 

Suggested machine sizes are recommended for use with {% data variables.product.prodname_codeql %} analysis. In some cases, the requirements may vary based on the complexity of your codebase and workflow setup.
{% data variables.product.prodname_codeql %} is fully compatible with a virtual machine hosted by GitHub with the GitHub Actions runner.

Optimal hardware specification for virtual machines to analyze your code with  {% data variables.product.prodname_codeql %} based on your codebase size.

| Codebase size | RAM | CPU |
|--------|--------|--------|
| Small (<100KLOC) | 8GB or higher | 2 cores |
| Medium (<1MLOC) | 16GB or higher | 4 or 8 cores |
| Large (>=1MLOC) | 64GB or higher | 8 cores |
