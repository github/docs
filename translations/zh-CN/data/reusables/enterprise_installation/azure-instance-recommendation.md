{% data variables.product.prodname_ghe_server %} 设备需要高级存储数据磁盘，可以在支持高级存储的任何 Azure VM 上使用。 带有 `` 后缀的 Azure VM 类型支持高级存储。 更多信息请参阅 Azure 文档中的“[Azure 中有哪些磁盘类型？](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-types#premium-ssd)”和“[Azure 高级存储：高性能设计](https://docs.microsoft.com/en-us/azure/virtual-machines/premium-storage-performance)”。

{% data variables.product.company_short %} 建议对 {% data variables.product.prodname_ghe_server %} 使用内存优化的虚拟机。 更多信息请参阅 Azure 文档中的“[内存优化的虚拟机大小](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-memory)”。

{% data variables.product.prodname_ghe_server %} 可以在支持您的 VM 类型的任何地区使用。 有关各个 VM 的支持地区的更多信息，请参阅 Azure 的“[可用产品（按地区）](https://azure.microsoft.com/regions/services/)”。