You can push local commits to the branch if the commits are signed and verified.

{% ifversion fpt or ghec %}

You can also merge signed and verified commits into the branch using a pull request. When {% data variables.product.github %} evaluates whether a pull request can be merged, it creates a test merge commit whose parents are the latest commit on the base branch and the pull request's head commit. {% data variables.product.github %} checks the commits introduced by this test merge, including commits from the head branch. As a result, unsigned commits on the head branch can block a squash merge, even though {% data variables.product.github %} would sign the final squash commit. This restriction can also apply to the author of the pull request.

To merge a blocked pull request, rewrite and sign the unsigned commits on the head branch, or ask someone with permission to bypass the applicable protections to merge the pull request.

{% else %}

However, you cannot merge pull requests into the branch on {% data variables.product.github %}.

{% endif %}

You can {% ifversion fpt or ghec %}squash and {% endif %}merge pull requests locally, but you must sign the resulting commit before pushing it to the branch. If another protection requires changes to be made through a pull request, you may also need bypass permissions to push the locally merged commit. See [AUTOTITLE](/pull-requests/how-tos/review-pull-requests/checking-out-pull-requests-locally) and [AUTOTITLE](/authentication/managing-commit-signature-verification/signing-commits).

{% ifversion fpt or ghec %} For more information about merge methods, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github).{% endif %}
