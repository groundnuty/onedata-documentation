
<a name="ceph"></a>
### Ceph
The Ceph storage configuration.

*Polymorphism* : Inheritance  
*Discriminator* : type


|Name|Description|Schema|
|---|---|---|
|**clusterName**  <br>*required*|The Ceph cluster name.|string|
|**key**  <br>*required*|The key to access the Ceph cluster.|string|
|**monitorHostname**  <br>*required*|The monitor host name.|string|
|**poolName**  <br>*required*|The Ceph pool name.|string|
|**type**  <br>*required*|The type of storage.|enum (POSIX, S3, Ceph, Swift)|
|**username**  <br>*required*|The username for authentication to Ceph cluster.|string|



