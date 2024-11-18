When you work in a codespace created from a template, your work is saved on a virtual machine in the cloud, but it is not stored in a repository on {% data variables.product.prodname_dotcom %}.

You can save your files, close and stop your codespace, and come back to your work later. Typically, Git will come preinstalled, and the working directory will be automatically initialized as a Git repository unless you started from {% data variables.product.company_short %}'s blank template. This means you can immediately use Git for local source control, such as adding and committing files.

However, if you delete an unpublished codespace, or if it's automatically deleted by being left unused for the duration of the retention period, then your work will be deleted too. To persist your work, and to allow others to work on your project, you will need to publish your codespace to a repository on {% data variables.product.prodname_dotcom %}.

{% note %}

**Note:** If an unpublished codespace is currently billed to an organization, publishing the codespace transfers ownership and billing of the codespace to your personal account. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#how-billing-is-handled-for-github-codespaces-templates)."

{% endnote %}
