You can create an IP allow list by adding entries that each contain an IP address or address range. After you finish adding entries, you can check whether a particular IP address would be allowed by any of the enabled entries in your list.

You cannot add a range that covers the entire address space, such as `0.0.0.0/0` or `::/0`, because it would allow access from any IP address. To allow access from anywhere, disable the IP allow list instead.

Before the list restricts access to private assets owned by organizations in your enterprise, you must also enable allowed IP addresses.
