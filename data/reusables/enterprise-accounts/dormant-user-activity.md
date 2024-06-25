A user is considered active if the user has performed any of the following activities on {% ifversion fpt or ghes %}{% data variables.location.product_location %}{% elsif ghec %}your enterprise{% endif %}.

* {% ifversion ghec%}Authenticating to access your enterprise's resources via SAML SSO{% else %}Signing into {% data variables.location.product_location %} {% endif %}
* Creating a repository
* Pushing to a repository via HTTPS{% ifversion ghes %}
* Pushing to a repository via SSH{% endif %}
* Being added to a repository
* Changing the visibility of a repository
* Creating an issue or pull request
* Commenting on an issue or pull request
* Closing or reopening an issue or pull request
* Applying a label to an issue or pull request, or removing a label
* Assigning or unassigning an issue or pull request
* Requesting a review of a pull request, or removing a review request
* Creating or editing a comment in a pull request review
* Dismissing a comment in a pull request
* Synchronizing a pull request
* Commenting on a commit
* Publishing a release
* Pushing to a wiki{% ifversion not ghec %}
* Watching a repository{% endif %}
* Starring a repository
* Deleting a repository
* Joining an organization

{% ifversion ghes %}
A user will also be considered active if their account has been updated by LDAP.
{% endif %}
