{% note %}

**Notes**:

* If your Git configuration supports pushes to multiple branches, and not only to the current branch, your push may be blocked due to additional and unintended refs being pushed. For more information, see the [`push.default` options](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault) in the Git documentation.
* If {% data variables.product.prodname_secret_scanning %} upon a push times out, {% data variables.product.prodname_dotcom %} will still scan your commits for secrets after the push.

{% endnote %}
