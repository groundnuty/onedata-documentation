
<a name="get_provider"></a>
#### Get provider details
```
GET /provider
```


##### Description
Returns information about the Oneprovider that performed the request 
(based on provided Peer Certificate authentication).

This operation requires peer certificate authentication.

***Example cURL requests***

**Get information about provider**
```bash
curl -k --cert ./etc/op_worker/certs/grpcert.pem \
https://$HOST:8443/api/v3/onezone/provider

{
  "clientName": "example",
  "providerId": "H8ez0CwDZ7JMYRWn1ipmBpgJHPXzIXj0__-upGkf9tk",
  "urls": ["195.216.97.151"],
  "redirectionPoint": "https://195.216.97.151",
  "latitude": 50.068968,
  "longitude": 19.909444
}
```


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|Returns the information about Oneprovider.|[ProviderDetails](../definitions/ProviderDetails.md#providerdetails)|
|**400**|Invalid request.|[Error](../definitions/Error.md#error)|
|**401**|Authentication error.|[Error](../definitions/Error.md#error)|
|**403**|Authorization error.|[Error](../definitions/Error.md#error)|
|**404**|Resource not found.|[Error](../definitions/Error.md#error)|
|**500**|Internal server Error.|[Error](../definitions/Error.md#error)|


##### Produces

* `application/json`


##### Example HTTP request

###### Request path
```
json :
"/provider"
```


##### Example HTTP response

###### Response 200
```
json :
{
  "providerId" : "LASDASJDBH89869ASD79869asd",
  "urls" : [ "http://beta.onedata.org/provider1", "http://beta.onedata.org/provider2" ],
  "redirectionPoint" : "http://beta.onedata.org/provider2",
  "latitude" : 50.0647,
  "longitude" : 19.945
}
```


###### Response 400
```
json :
{
  "error" : "invalid_token",
  "error_description" : "Provided token could not be validated."
}
```


###### Response 401
```
json :
{
  "error" : "invalid_token",
  "error_description" : "Provided token could not be validated."
}
```


###### Response 403
```
json :
{
  "error" : "invalid_token",
  "error_description" : "Provided token could not be validated."
}
```


###### Response 404
```
json :
{
  "error" : "invalid_token",
  "error_description" : "Provided token could not be validated."
}
```


###### Response 500
```
json :
{
  "error" : "invalid_token",
  "error_description" : "Provided token could not be validated."
}
```



