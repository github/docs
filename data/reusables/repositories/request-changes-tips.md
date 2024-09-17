{% tip %}

**Tips**:
* If a collaborator with `admin`, `owner`, or `write` access to the repository submits a review requesting changes, the pull request cannot be merged until the same collaborator submits another review approving the changes in the pull request.
* Repository owners and administrators can merge a pull request even if it hasn't received an approving review, or if a reviewer who requested changes has left the organization or is unavailable.
* If both required reviews and stale review dismissal are enabled and a code-modifying commit is pushed to the branch of an approved pull request, the approval is dismissed. The pull request must be reviewed and approved again before it can be merged.
* When several open pull requests each have a head branch pointing to the same commit, you won’t be able to merge them if one or both have a pending or rejected review.
* If your repository requires approving reviews from people with write or admin permissions, then any approvals from people with these permissions are denoted with a green check mark, and approvals from people without these permissions have a gray check mark. Approvals with a gray check mark do not affect whether the pull request can be merged.
* Pull request authors cannot approve their own pull requests.

{% endtip %}
