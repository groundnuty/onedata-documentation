
<a name="delete_user_space"></a>
#### Leave space
```
DELETE /user/spaces/{sid}
```


##### Description
Removes the users ownership or membership in a specific space.

This operation can be invoked on behalf of current user only.

***Example cURL requests***

**Delete user space**
```bash
curl -k -u username:password -X DELETE \
https://$HOST:8443/api/v3/onezone/user/spaces/PMPs42mROSS7Rg7z7BwU9JYpSof4SvIW5v14uQY8X08
```


##### Parameters

|Type|Name|Description|Schema|Default|
|---|---|---|---|---|
|**Path**|**sid**  <br>*required*|Space Id.|string|--|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|The space was deleted successfuly.|No Content|
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
"/user/spaces/string"
```


##### Example HTTP response

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



