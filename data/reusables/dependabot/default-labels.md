By default, {% data variables.product.prodname_dependabot %} raises all pull requests with the `dependencies` label.

If more than one package manager is defined, {% data variables.product.prodname_dependabot %} includes an additional label on each pull request, which indicates which language or ecosystem the pull request updates. For example, adding `java` for Gradle updates, or `submodules` for git submodule updates.

{% data variables.product.prodname_dependabot %} creates the default labels it applies to pull requests if they do not already exist in the repository. If you want to use custom labels, you need to create these yourself. For more information, see: [AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels).
