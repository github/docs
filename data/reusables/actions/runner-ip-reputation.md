{% data variables.product.github %}-hosted runners use dynamically assigned IP addresses from shared infrastructure. These IP addresses are published via the Meta API (for example, the `actions` and `actions_macos` keys). For more information, see [AUTOTITLE](/rest/meta/meta#get-github-meta-information).

Third-party threat intelligence services, IP reputation scanners, or firewall vendors may flag these IP addresses as "malicious" or "suspicious." Because the underlying infrastructure is shared, activity from other users of the same infrastructure can influence the reputation scores assigned to these addresses.

{% data variables.product.github %} does not control third-party IP reputation lists and cannot comment on their accuracy or update frequency. To verify whether an IP address belongs to {% data variables.product.github %}-hosted runners, check the IP ranges returned by the Meta API.

If you have a security concern about a Microsoft-owned IP address, report it to the [Microsoft Security Response Center (MSRC)](https://msrc.microsoft.com/report/).
