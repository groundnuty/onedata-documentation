## Outline
> Numbered points guide the video part of the screencast.  
> The code blocks provide a script for every step.

```
sample <b>sample</b> sample sample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> sample
```

| Tables        |      Are      |  Cool |
|:--------------|:-------------:|------:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |


<table>
<tboody>
<tr><td>aa</td></tr>
<tr>ss</tr>
<tr>ss</tr>
</tboody>
</table>

~~~
sample <b>sample</b> sample sample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> sample
~~~


<pre>
sample <b>sample</b> sample sample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> samplesample <b>sample</b> sample
</pre>


1. Welcome screen
    1. Title slide
    ```
    The content of the slide:
      Title: Onedata
      Subtitle: INSTALLATION AND USE OF ONEDATA CLIENT WITH DIRECT I/O

    Hello everyone, this is Michal from Onedata team.
    Today I will show you how to use the direct IO feature of Onedata Client, in order to take advantage of greater transfer rates for accessing you data.
    ```
    2. Navigate to next slide: Screecast outline overview
    ```
    The content of the slide:
      1. Why direct I/0?
      2. Using oneclient with direct I/0 support.
      3. Benchmarking direct I/0.

    During this short video, we will :
    - explain why we want to use direct I/0 driver to to assess data
    - how to enable direct I/0 for one client
    - and finally we will perform a simple data transfer benchmark on a space folder

    In order to follow this screencast one needs to:
    - have a Onedata account with at least one space supported by at least one provider.
    - oneclient software installed on a virtual machine, which has a direct access to storage resource of the provider


    So why we want to use direct IO?  
    We can use Onedata without it however in that all the data transfer will go through oneprovider. Which - depending on the performance of machines it is running on - might hinder the transfer rates. When using direct I/O, Oneclient only gets metadata from the provider and all the actual data is accessed directly from storage. Onedata offers many ways to access your data but direct I/0 is by far the most effective method.
    Lets try to configure such a setup.
    ```
1. Navigate to terminal

    ```
    I have already created a virtual machine and installed on it oneprovider and oneclient. The operating system is CentOS. Lets verify that oneprovider is running:
    ```
    1. Run command  "sudo service oneprovider status"
    ```
    Now lets check if oneclient is installed.
    ```
    2. Run command  "oneclient --help"
    ```
    All seems to be in order. Now we can try to mount our spaces.
    In order to do that we need an authorization token.
    Lets head to onedata.org
    ```
2. Navigate to onedata.org and login with user Sara
    ```
    I've created a test user called "Sara"
    I will login into onedata as Sara to get the token.

    We go to choese Tokens, click "get authorization token", lets copy it
    and go back to the terminal.    
    ```
3. Navigate to terminal
   ```
   We need to create a directory where your spaces will be mounted, lets call it 'myspaces'. Now we need to check what options we need to use with oneclient to mount the spaces.

   oneclient --help

   We see that the correct invocation for this purpose is:

   oneclient   --authentication token  --no-check-certificate myspaces

   However we want to use a particular provider installed on this particular machine. We can tell oneclinet to which oneprovider it should connect by using environmental variable PROVIDER_HOSTNAME.
   So the full command will be:
   PROVIDER_HOSTNAME=127.0.0.1 oneclient   --authentication token  --no-check-certificate myspaces

   WARNING: For optimal performance, add user `sara` to following system groups and remount the filesystem:
   	GID: 1035920, space: `Sara's space`
   oneclient has been successfully mounted in /home/sara/myspaces


   We got a WARNING telling us that we don't have sufficient permissions. Meaning we cant user direct I/O yet.
   In order to fix that we need to add Sara user to a system group designated with number 1035920.

   For a second lets take a step back and discuss 2 deployment scenarios for onedata.

   1. In a simple case similar to this, where there is no central management of users and oneprovider runs with root priviledges. When your space gets supported by a provider, a dedicated folder is created for you on the storage device configured during oneprovider installation. This folder permissions are set to user root and are given by onedata a group identification number. When you use oneclient remotely - without direct I/O, there is no problem, because you communicate with oneprovider and oneprovider - which is running with root priveladges - writes your data in that folder on your behalf.
   However if you want to use oneclient with direct I/O - transfer your data directly to the storage without using oneprovider as a proxy - you need to have permissions to wirte in your space folder located in provider storage directory.
   In such case, we need to manually create a group with Group identification number listed in the warning, and add user 'sara' to that group so that the user will have sufficient permissions to use direct I/O

   2. However in real world Onedata is deployed in computing centers where there already is a central system for managing users for example LDAP or others. In that case an external system is responsible for group management and is integrated with onedata. It's even more important when oneprovider is installed on infrastructure that only shares a storage mount point with a machine that users operate on - what again is typical in computing centers.

   Going back to the terminal, as we discussed, to get rid of this warning we need to create a group with particualr group identification number.
   sudo groupadd -g 1035920 saraspace

   lets call it saraspace.

   Now we need to add user sara to that group:
   sudo useradd -g saraspace  sara

   Morover if you would like to setup such testing environment yourself, the 'storage path' that you entered while configuring oneprovider has to be present in mounts/
   (invoke moutn commant show /storage3)
   It you would like to use a the same machine for oneprovider and oneclient then you will have to use:
   mount -bind /storage3 /onedatastorage in order to put /storage3 in the output of the mount command.

   Now lets unmount the myspace folder and mount it again.
   fusermount -u myspace
   ROVIDER_HOSTNAME=127.0.0.1 oneclient   --authentication token  --no-check-certificate myspaces

   This time we got no warning, which means that we can use direct I/O.

   For the last part lets do a simple test with dd command.
   cd myspace/Sara' Space/
   we will try to write 10GB of data to a storage on this vm.
   dd if=/dev/zero of=tempfile bs=1M count=10240 conv=fdatasync status=progress

   We wait for dd to finish...
   With direct I/0 with achived 500MB/s transfer.

   It's impotant to remember that direct I/O imposes almost no overhead on the transfer speed making is almost as efficient as using storage directly.

   ```
4. Go back to the screen with screencast outline and read/sumerise it.
   ~~~
   Ok. So thank you for watching. In this short video we have seen:
   - why we want to use direct I/0 to mount spaces
   - how to mount spaces with direct I/0

   Try it for yourselves and contact our support in case of any problems.
   ~~~
