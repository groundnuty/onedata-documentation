
<a name="get_nested_group_token"></a>
#### Create subgroup invitation token
```
GET /groups/{id}/nested/token
```


##### Description
Creates a token that can be used to add a group as subgroup of group with {id}.

This operation requires `group_invite_group` privilege.

***Example cURL requests***

**Create invitation token for subgroup**
```bash
curl -k -u username:password -X GET \
https://$HOST:8443/api/v3/onezone/groups/HwUpk8jrwxKOe45uzLFX2GVC8lKEasj4q253sptVq

{"token":"MDAxNmxvY2F00aW9uIHJlZ2lzdHJ5CjAwM2JpZGVudGlmaWVyIDdrenY00SXM5dEFGYVRNQXFlMUlPSXVGMFBoSkFKWHFieWRUc2l5TUUxX2sKMDAyZGNpZCB00b2tlblR5cGUgPSBncm91cF9pbnZpdGVfZ3JvdXBfdG9rZW4KMDAyZnNpZ25hdHVyZSCJAtwScxZNktP9EIS00vlM5ZB7QsXhjtRtjKWZfwEfs6wo"}
```


##### Parameters

|Type|Name|Description|Schema|Default|
|---|---|---|---|---|
|**Path**|**id**  <br>*required*|Group ID.|string|--|


##### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|The token for joining a specific group.|[GroupInviteToken](../definitions/GroupInviteToken.md#groupinvitetoken)|
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
"/groups/string/nested/token"
```


##### Example HTTP response

###### Response 200
```
json :
{
  "token" : "JKAxNWxvY2F0aW9uIG9uZXpvbmUKMDAzYmlkZW50aWZpZXIgOEhmSEFSSGdrbHFCa1pWSTRsNk1CVHZTU3Z0OThwcHA2OTQ4czhRN1NPawowMDFhY2lkIHRpbWUgPCAxNDk2MTQwMTQ0CjAwMmZzaWduYXR1cmUg88OIBmav38YI0Z2-dw-fvrZ3XP-J0HjCN0taT3_WungK"
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



