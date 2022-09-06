---
title: Getting started with GitHub Codespaces for machine learning
shortTitle: Machine learning
intro: 'Learn about working on machine learning projects with {% data variables.product.prodname_github_codespaces %} and its out-of-the-box tools.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Codespaces
  - Developer
---

## 简介

This guide introduces you to machine learning with {% data variables.product.prodname_github_codespaces %}. You’ll build a simple image classifier, learn about some of the tools that come preinstalled in {% data variables.product.prodname_github_codespaces %}, configure your development environment for NVIDIA CUDA, and use {% data variables.product.prodname_cli %} to open your codespace in JupyterLab.

## Prerequisite

You have access to {% data variables.product.prodname_github_codespaces %}. 更多信息请参阅“[创建代码空间](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-github-codespaces)”。

## Build a simple image classifier

We'll use a Jupyter notebook to build a simple image classifier.

Jupyter notebooks are sets of cells that you can execute one after another. The notebook we'll use includes a number of cells that build an image classifier using [PyTorch](https://pytorch.org/). Each cell is a different phase of that process: download a dataset, set up a neural network, train a model, and then test that model.

We'll run all of the cells, in sequence, to perform all phases of building the image classifier. When we do this Jupyter saves the output back into the notebook so that you can examine the results.

### Creating a repository and a codespace

1. Go to the [github/codespaces-getting-started-ml](https://github.com/github/codespaces-getting-started-ml) template repository and click **Use this template**.
{% data reusables.codespaces.open-codespace-from-template-repo %}

   By default, a codespace for this repository opens in a web-based version of {% data variables.product.prodname_vscode %}.

### Open the image classifier notebook

The default container image that's used by {% data variables.product.prodname_github_codespaces %} includes a set of machine learning libraries that are preinstalled in your codespace. For example, Numpy, pandas, SciPy, Matplotlib, seaborn, scikit-learn, TensorFlow, Keras, PyTorch, Requests, and Plotly. For more information about the default image, see "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)" and [the `devcontainers/images` repository](https://github.com/devcontainers/images/tree/main/src/codespaces#github-codespaces-default-linux-universal).

1. In the {% data variables.product.prodname_vscode_shortname %} editor, close any "Get Started" tabs that are displayed.
1. Open the `image-classifier.ipynb` notebook file.
1. Click the Python kernel link at the top right of the editor.

   ![Screenshot of the Python kernal link](/assets/images/help/codespaces/jupyter-python-kernel-link.png)

1. In the drop-down menu, choose the kernel in the directory `/opt/python/latest/bin/python`.

   ![Screenshot of the Python kernal drop-down menu](/assets/images/help/codespaces/jupyter-python-kernel-dropdown.png)

### Build the image classifier

The image classifier notebook contains all the code you need to download a dataset, train a neural network, and evaluate its performance.

1. Click **Run All** to execute all of the notebook’s cells.

   ![Screenshot of the Run All button](/assets/images/help/codespaces/jupyter-run-all.png)

1. Scroll down to view the output of each cell.

   ![Screenshot of Step 3 in the editor](/assets/images/help/codespaces/jupyter-notebook-step3.png)

## Configure NVIDIA CUDA for your codespace

Some software, such as TensorFlow, requires you to install NVIDIA CUDA to use your codespace’s GPU. Where this is the case, you can create your own custom configuration, by using a `devcontainer.json` file, and specify that CUDA should be installed. For more information on creating a custom configuration, see "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)."

{% note %}

**Note**: For full details of the script that's run when you add the `nvidia-cuda` feature, see [the devcontainers/features repository](https://github.com/devcontainers/features/tree/main/src/nvidia-cuda).

{% endnote %}

1. Within a codespace, open the `.devcontainer/devcontainer.json` file in the editor.
1. Add a top-level `features` object with the following contents:

   ```json{:copy}
     “features”: {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   ```

   For more information about the `features` object, see the [development containers specification](https://containers.dev/implementors/features/#devcontainer-json-properties).

   If you are using the `devcontainer.json` file from the image classifier repository you created for this tutorial, your `devcontainer.json` file will now look like this:

   ```
   {
     "customizations": {
       "vscode": {
         "extensions": [
           "ms-python.python",
           "ms-toolsai.jupyter"
         ]
       }
     },
     “features”: {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   }
   ```

1. Save the change.
{% data reusables.codespaces.rebuild-command %}
   The codespace container will be rebuilt. This will take several minutes. When the rebuild is complete the codespace is automatically reopened.
1. Commit the change to the repository so that CUDA will be installed in any new codespaces you create from this repository in future.

## Open your codespace in JupyterLab

The default container image that's used by {% data variables.product.prodname_github_codespaces %} includes JupyterLab, the web-based Jupyter IDE. You can use {% data variables.product.prodname_cli %} to open your codespace in JupyterLab without having to install anything else on your codespace.

1. In the terminal, enter the {% data variables.product.prodname_cli %} command `gh cs jupyter`.
1. Choose the codespace you want to open.

   ![Screenshot of opening a codespace from the terminal](/assets/images/help/codespaces/open-codespace-in-jupyter.png)

