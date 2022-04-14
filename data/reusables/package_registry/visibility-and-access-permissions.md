{% ifversion fpt or ghec %}
If you have admin permissions to a container image, you can set the access permissions for the container image to private or public. Public images allow anonymous access and can be pulled without authentication or signing in via the CLI.

As an admin, you can also grant access permissions for a container image that are separate from the permissions you've set at the organization and repository levels.

For container images published and owned by a personal account, you can give any person an access role. For container images published and owned by an organization, you can give any person or team in the organization an access role.

| Permission | Access description |
|------------|--------------------|
| read       | Can download package. <br> Can read package metadata. |
| write      | Can upload and download this package. <br> Can read and write package metadata. |
| admin      | Can upload, download, delete, and manage this package. <br> Can read and write package metadata. <br> Can grant package permissions.
{% endif %}
