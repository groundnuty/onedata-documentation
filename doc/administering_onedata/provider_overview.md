# Oneprovider Overview

Oneprovider exposes storage resources to Onedata ecosystem. It is typically deployed in a data or computing center, on the nodes equipped with high speed connections to storage resources.

Oneprovider is a cluster solution composed of 3 types of services:
* Cluster Manager - an administrative service that monitors the health of the cluster, performs load balancing and manages other cluster nodes
* Worker - a service for data management
* Database - a service providing persistent storage for metadata and tranfer control

Each service can be deployed multiple times depending on the performance and reliability requirements. The cluster can be administered from any node, thanks to *onepanel* web application that runs on every node.

<p align="center">
<img src="../img/admin/oneprovider_slide.png">
</p>

Oneprovider implements drivers for storages such as NFS, Lustre, Ceph (Onedata v3.0) or S3 (Onedata v3.0).

In order to function properly, Oneprovider needs to communicate with [onedata.org](www.onedata.org) that requires a public IP address and specific ports opened to the world.

There are two types of data transfer that Oneprovider can engage in:
* metadata transfer - originating from clients (ex. FUSE client)
* remote data transfer - when transferring data to second provider or to a remote client.

While accessing data, depending on the client location data transfer can be either:
* direct transfer - when client is located in the same computing center and has direct access to storage resources, the client exchanges only metadata with Oneprovider and accesses storage directly bypassing Oneprovider for actual data transfer,
* remote transfer - client is unable to access storage locally and data needs to be transferred via Oneprovider nodes from other storage provider.

Oneprovider is responsible for providing access to data for CDMI, S3 and POSIX VFS protocols.
