## Users

The User Administration API allows you to suspend{% ifversion ghes %}, unsuspend, promote, and demote{% endif %}{% ifversion ghae %} and unsuspend{% endif %} users on your enterprise. *It is only available to [authenticated](/rest/overview/resources-in-the-rest-api#authentication) site administrators.* Normal users will receive a `403` response if they try to access it.