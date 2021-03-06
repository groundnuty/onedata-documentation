
# Single Node Installation of Onedata Provider on Google Compute Engine


In this screencast you will learn how to install Onedata Provider on Centos 7 using Google Compute Engine.

{% youtube caption="Single Node Installation of Onedata Provider  "%}https://youtu.be/zFd9gsVIdf0{% endyoutube %}

## Prerequisites
- active project on Google Cloud Compute Engine

## You will need the

### Onedata Provider Installation Instructions for Centos 7
~~~
wget http://toolkit.globus.org/ftppub/gt6/installers/repo/globus-toolkit-repo-latest.noarch.rpm
sudo yum -y install globus-toolkit-repo-latest.noarch.rpm epel-release
sudo wget -O /etc/yum.repos.d/onedata.repo http://packages.onedata.org/yum/centos/7x/onedata.repo 
sudo yum -y --enablerepo=onedata install oneprovider
~~~

### Default Oneprovider Web Interface Credentials
~~~
user: admin
password: password
~~~
### List of All Open Ports Required by Onedata Provider
~~~
tcp: 80
tcp: 53
tcp: 443
tcp: 5555
tcp: 8443
tcp: 9443
~~~
