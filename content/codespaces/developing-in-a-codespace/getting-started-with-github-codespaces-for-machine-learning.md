---
title: Getting started with GitHub Codespaces for machine learning
shortTitle: Machine learning
intro: 'Learn about working on machine learning projects with {% data variables.product.prodname_github_codespaces %} and its out-of-the-box tools.'
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Codespaces
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/getting-started-with-github-codespaces-for-machine-learning
---

## Introduction

This guide introduces you to machine learning with {% data variables.product.prodname_github_codespaces %}. You’ll build a simple image classifier, learn about some of the tools that come preinstalled in {% data variables.product.prodname_github_codespaces %}, and find out how to open your codespace in JupyterLab.

## Building a simple image classifier

We'll use a Jupyter notebook to build a simple image classifier.

Jupyter notebooks are sets of cells that you can execute one after another. The notebook we'll use includes a number of cells that build an image classifier using [PyTorch](https://pytorch.org/). Each cell is a different phase of that process: download a dataset, set up a neural network, train a model, and then test that model.

We'll run all of the cells, in sequence, to perform all phases of building the image classifier. When we do this Jupyter saves the output back into the notebook so that you can examine the results.

### Creating a codespace

1. Go to the [github/codespaces-jupyter](https://github.com/github/codespaces-jupyter) template repository.
{% data reusables.codespaces.use-this-template %}

A codespace for this template will open in a web-based version of {% data variables.product.prodname_vscode %}.

### Opening the image classifier notebook

The default container image that's used by {% data variables.product.prodname_github_codespaces %} includes a set of machine learning libraries that are preinstalled in your codespace. For example, Numpy, pandas, SciPy, Matplotlib, seaborn, scikit-learn, Keras, PyTorch, Requests, and Plotly. For more information about the default image, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#using-the-default-dev-container-configuration)" and the [devcontainers/images](https://github.com/devcontainers/images/tree/main/src/universal) repository].

1. In the {% data variables.product.prodname_vscode_shortname %} editor, close any "Get Started" tabs that are displayed.
1. Open the `notebooks/image-classifier.ipynb` notebook file.

### Building the image classifier

The image classifier notebook contains all the code you need to download a dataset, train a neural network, and evaluate its performance.

1. Click **Run All** to execute all of the notebook’s cells.

   ![Screenshot of the top of the editor tab for the "image-classifier.ipynb" file. A cursor hovers over a button labeled "Run All."](/assets/images/help/codespaces/jupyter-run-all.png)

1. If you are prompted to choose a kernel source, select **Python Environments**, then select the version of Python at the recommended location.

   ![Screenshot of the "Select a Python Environment" dropdown. The first option in the list of Python versions is labeled "Recommended."](/assets/images/help/codespaces/jupyter-choose-python.png)

1. Scroll down to view the output of each cell.

   ![Screenshot of the cell in the editor, with the header "Step 3: Train the network and save model."](/assets/images/help/codespaces/jupyter-notebook-step3.png)

## Opening your codespace in JupyterLab

You can open your codespace in JupyterLab from the "Your codespaces" page at [github.com/codespaces](https://github.com/codespaces), or by using {% data variables.product.prodname_cli %}. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/opening-an-existing-codespace)."

{% data reusables.codespaces.jupyterlab-installed-in-codespace %}

## Configuring NVIDIA CUDA for your codespace

{% note %}

**Note**: This section only applies to customers who can create codespaces on machines that use a GPU. The ability to choose a machine type that uses a GPU was offered to selected customers during a trial period. This option is not generally available.

{% endnote %}

Some software requires you to install NVIDIA CUDA to use your codespace’s GPU. Where this is the case, you can create your own custom configuration, by using a `devcontainer.json` file, and specify that CUDA should be installed. For more information on creating a custom configuration, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)."

For full details of the script that's run when you add the `nvidia-cuda` feature, see the [devcontainers/features](https://github.com/devcontainers/features/tree/main/src/nvidia-cuda) repository.

1. Within the codespace, open the `.devcontainer/devcontainer.json` file in the editor.
1. Add a top-level `features` object with the following contents:

   ```json copy
     "features": {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": {
         "installCudnn": true
       }
     }
   ```

   For more information about the `features` object, see the [development containers specification](https://containers.dev/implementors/features/#devcontainer-json-properties).

   If you are using the `devcontainer.json` file from the image classifier repository you created for this tutorial, your `devcontainer.json` file will now look like this:

   ```json
   {
     "customizations": {
       "vscode": {
         "extensions": [
           "ms-python.python",
           "ms-toolsai.jupyter"
         ]
       }
     },
     "features": {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": {
         "installCudnn": true
       }
     }
   }
   ```

1. Save the change.
{% data reusables.codespaces.rebuild-command %}
   The codespace container will be rebuilt. This will take several minutes. When the rebuild is complete the codespace is automatically reopened.
1. Publish your change to a repository so that CUDA will be installed in any new codespaces you create from this repository in future. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-from-a-template#publishing-from-vs-code)."
