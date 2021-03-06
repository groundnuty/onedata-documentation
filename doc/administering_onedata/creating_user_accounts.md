# Managing User Accounts

While for most cases, user should create their Onedata accounts using OpenID Connect services using their social or institute logins, it is also possible to create user accounts allowing them to login using HTTP basic authentication, i.e. `username` and `password`.

This functionality can be achieved by creating manually user accounts using Onepanel service [REST interface](../advanced/rest/onepanel/overview.md).

## Managing manual user accounts

Onepanel provides a simple REST API for management of user accounts in the Onezone service.

### Authentication
Onepanel service supports basic authentication using usernames and passwords. After the installation of Onepanel service, the first user can be creating without providing authentication credentials and this user will be the admin. All consecutive account creation requests will create new users with either `regular` or `admin` role depending on the parameters specified in the body of request.

### Creating new users
The user can be added by invoking a `POST` request to the Onepanel `/user` REST endpoint and providing user credentials, which include:
* _username_ - the user login name
* _password_ - user password
* _userRole_ - currently only 2 roles are supported: **admin** and **regular**

```bash
curl -X POST -u $ADMIN_USERNAME:$ADMIN_PASSWORD -H "Content-Type: application/json" \
-d '{"username": "$USERNAME", "password": "$PASSWORD", "userRole": "regular"}' \
https://$(ONEPANEL_HOST):8443/api/v3/onepanel/user
```

In order to modify the user details (currently only password can be changed) the same operation should be invoked with `PUT` HTTP method.

```bash
curl -X PUT -u $ADMIN_USERNAME:$ADMIN_PASSWORD -H "Content-Type: application/json" \
-d '{"password": "$PASSWORD"}' \
https://$(ONEPANEL_HOST):8443/api/v3/onepanel/user
```

In order for these users to login to Onezone, basic authentication module has to be enabled in the Onezone config as described [here](./openid_configuration.md).

### Removing users
In order to remove an existing user account, simply execute `DELETE` method on the user path and provide user name, i.e.:

```bash
curl -X DELETE -u $ADMIN_USERNAME:$ADMIN_PASSWORD \
https://$ONEPANEL_HOST:8443/api/v3/onepanel/user/$USERNAME
```

It is also possible to remove the current user account by invoking:
```bash
curl -X DELETE -u $USERNAME:$PASSWORD \
https://$ONEPANEL_HOST:8443/api/v3/onepanel/user
```

without specifying the username in the path.
