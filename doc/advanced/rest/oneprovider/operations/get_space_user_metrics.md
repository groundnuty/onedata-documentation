
<a name="get_space_user_metrics"></a>
#### Get space user metrics
```
GET /metrics/space/{sid}/user/{uid}
```


##### Description
Returns space related metrics of specified type for specific user.

***Example cURL requests***

**Get user storage block access metrics with 1 hour resolution**
```bash
curl --tlsv1.2 -X GET -H "X-Auth-Token: $TOKEN" \
"https://$HOST:8443/api/v3/oneprovider/metrics/space/fe14b4cc-bce0-4220-8394-a911d11a0a53/user/8fd85f71-3290-411d-ae3e-a65d48b5229c?metric=block_access&step=1h"

{
  "providerId": "4efc4a0c-0a61-4766-8fe9-c3d7fb414da8",
  "rrd": {
      "about": "RRDtool graph JSON output",
      "data": [[ 5.6435528434 ], [ 2.6435528434 ], [ 4.6435528434 ] ],
      "meta": {
          "start": 1465466700,
          "end": 1465553100,
          "legend": ["space fe14b4cc-bce0-4220-8394-a911d11a0a53; metric storage_used; oneprovider ID 4efc4a0c-0a61-4766-8fe9-c3d7fb414da8; storage_used[bytes]"],
          "step": 3600
      }
    }
}
```


##### Parameters

|Type|Name|Description|Schema|Default|
|---|---|---|---|---|
|**Path**|**sid**  <br>*required*|ID of a specific space for which the monitoring metrics should be retrieved.|string|--|
|**Path**|**uid**  <br>*required*|ID of a specific user within a space for which the monitoring metrics should be limited to.|string|--|
|**Query**|**metric**  <br>*required*|The type of metrics to retrieve.|enum (storage_used, data_access, block_access)|--|
|**Query**|**step**  <br>*optional*|The resolution of the monitoring data to return - default is 5m [5 minutes].|enum (5m, 1h, 1d, 1m)|--|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|The monitoring data retrieved in the form of RRD record exported to JSON or XML.|< [Metrics](../definitions/Metrics.md#metrics) > array|
|**400**|Invalid request.|[Error](../definitions/Error.md#error)|
|**403**|Forbidden request.|[Error](../definitions/Error.md#error)|
|**404**|Oneprovider REST API not available.|[Error](../definitions/Error.md#error)|
|**500**|Internal server error.|[Error](../definitions/Error.md#error)|


##### Produces

* `application/json`
* `application/xml`


##### Example HTTP request

###### Request path
```
json :
"/metrics/space/string/user/string"
```


###### Request query
```
json :
{
  "metric" : "string",
  "step" : "string"
}
```


##### Example HTTP response

###### Response 200
```
json :
"array"
```


###### Response 400
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



