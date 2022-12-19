{% warning %}

**Warning:** When you upload an image or video to a pull request or issue comment, or upload a file to a ticket in the {% data variables.contact.support_portal %}, anyone can view the anonymized URL without authentication, even if the pull request or issue is in a private repository{% ifversion ghes %}, or if private mode is enabled{% endif %}. To keep sensitive media files private, serve them from a private network or server that requires authentication. {% ifversion fpt or ghec %}For more information on anonymized URLs see "[About anonymized URLs](/github/authenticating-to-github/about-anonymized-urls)".{% endif %}

{% endwarning %}
