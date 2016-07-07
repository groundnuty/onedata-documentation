# Command line REST examples
Command line examples are based on the [cURL](https://curl.haxx.se/) command line HTTP client. 

## Onezone

### Authentication
Onezone supports both API KEY authentication based on a Macaroon generated by Onezone service, or using standard HTTP Basic Auth.

#### 

#### Generate new authentication token
```bash
curl -k https://beta.onedata.org:8443/api/v3/onezone/user/client_token --user bkryza:PaSSwoRd

{"token":"MDAxNWxvY2F0aW9uIG9uZXpvbmUKMDAzYmlkZW50aWZpZXIgdmRiRDE1UjMxRW9BcnFIaFd1bmRmd2tBZGxxbkpSU1ZhYzNCaERwdzY4dwowMDFhY2lkIHRpbWUgPCAxNDk3MDIyNjQ1CjAwMmZzaWduYXR1cmUgyOf2OOM4LZaW3WrHdDj1jRzHCBgMMc3ma8kI7T6yWWMK"}
```

#### Get and modify user details
```bash
curl -k https://beta.onedata.org:8443/api/v3/onezone/user -H 'macaroon:MDAxNWxvY2F0aW9uIG9uZXpvbmUKMDAzYmlkZW50aWZpZXIgdmRiRDE1UjMxRW9BcnFIaFd1bmRmd2tBZGxxbkpSU1ZhYzNCaERwdzY4dwowMDFhY2lkIHRpbWUgPCAxNDk3MDIyNjQ1CjAwMmZzaWduYXR1cmUgyOf2OOM4LZaW3WrHdDj1jRzHCBgMMc3ma8kI7T6yWWMK'

{"userId":"l0c3iC7aC9xyg9rZPeZKNiRNU_XRkRYTqCvS7IFp7aQ","login":"","name":"Bartosz Kryza","connectedAccounts":[{"provider_id":"plgrid","user_id":"plgkryza","login":"plgkryza","name":"Bartosz Kryza","email_list":["bkryza@example.com"]}],"alias":"","emailList":["bkryza@example.com"]}
```