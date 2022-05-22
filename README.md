# Fastify_server
[![Jekyll site CI](https://github.com/Masrik-Dahir/Fastify_server/actions/workflows/jekyll.yml/badge.svg)](https://github.com/Masrik-Dahir/Fastify_server/actions/workflows/jekyll.yml)
[![CodeQL](https://github.com/Masrik-Dahir/Fastify_server/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/Masrik-Dahir/Fastify_server/actions/workflows/codeql-analysis.yml)
[![Node.js CI](https://github.com/Masrik-Dahir/Fastify_server/actions/workflows/node.js.yml/badge.svg)](https://github.com/Masrik-Dahir/Fastify_server/actions/workflows/node.js.yml)

## Configure ##

### Clone Repository: ###
```
git clone https://github.com/Masrik-Dahir/Fastify_server.git; 
cd Fastify_server;
```

### Configure Database (using dynamoDB): ###
```
msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi;
aws configure # <AWS Access Key ID, AWS Secret Access Key, Default region name, Default output format>
```

### Configure and Start Server: ###
> current direcotry: ~/Fastify_server
```
cd Server; 
./requirements.sh;
```

Items  | Links
  ------------- | -------------
  API Documentation  | http://127.0.0.1:5000/docs/static/index.html#/
  Test API  | [test.http](https://github.com/Masrik-Dahir/Fastify_server/blob/master/Server/test.http)


### Configure and Start Client: ###
> current direcotry: ~/Fastify_server
```
cd Client; 
./requirements.sh;
```


## Example (Ubuntu, Windows) ##
```
git clone https://github.com/Masrik-Dahir/Fastify_server.git; 
cd Fastify_server;
msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi;
aws configure;
cd Server; 
./requirements.sh;
cd ..;
cd Client; 
./requirements.sh;
```
