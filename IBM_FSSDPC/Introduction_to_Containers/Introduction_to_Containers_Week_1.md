# Introduction to Containers Week 1

A container is a standard unit of software that encapsulates everything that programmers need to build, ship, and run applications.

## Why use containers?

* Isolation and allocation: No way to define resource boundaries for apps in a physical server.

* Server Utilization: Not optimal because servers tend to be either over-utilized or under-utilized.
* Provisioning and Costs: Requires long periods for provisioning resources and expensive maintenance costs.
* Performance: Constrained during peak workloads
* Portability: Applications are not portable across multiple environments and operating systems.
* Resiliency: Complex, time-consuming and expensive
* Scalability: Limited scalability and resiliency
* Automation: Difficult to implement for multiple platforms

### Container characteristics

* The container engine virtualizes the operating system
* A container is light-weight, fast, isolated, portable and secure
* Require less memory space
* Binaries, libraries within container enable apps to run
* One machine can host multiple containers

### Container benefits

Containers enable organizations to: 

* Quickly create applications using automation
* Lower deployment time and costs
* Improve recourse utilization
* Port across different environments
* Support next-gen applications (microservices)

### Container challenges

* Security impacted if operating system affected
* Difficult to manage thousands of containers
* Complex to migrate legacy projects to container technology
* Difficult to right-size containers for specific scenarios

### Container vendors

* Docker: Robust and most popular container platform today
* Podman: Daemon-less architecture providing more security than Docker containers
* LXC: Preferred for data-intensive apps and ops
* Vagrant: Offers highest level of isolation on the running physical machine

## Introduction to Docker

### Docker defined

Available since 2013, Docker is an open platform, or engine, where programmers can:

* Develop
* Ship 
* Run
* Containers

### Docker's underlying technology

* Written in Go programming language
* Uses Linux kernel's features to deliver functionality
* Uses the namespaces technology to provide an isolated workspace called "container"
* Creates a set of namespaces for every container and each aspect runs in a separate namespace with access limited to that namespace

### Docker benefits

* Consistent and isolated environments
* Fast deployment
* Repeatability and automation
* Supports Agile and CI/CD DevOps practices
* Versioning for easy testing, rollbacks, and redeployments
* Collaboration, modularity, and scaling
* Easy portability and flexibility

### Challenging use cases

* Requiring high performance or security
* Based on Monolith architecture
* Using rich GUI features
* Performing standard desktop or limited functions

## Building and Running Container Images

### Docker container creation process

Steps to create and run containers:

* Create a Dockerfile
* Use the Docker file to create a container image
* Use the container image to create a running container

#### Dockerfile example

Use a Dockerfile to create a running container: This sample Dockerfile has the commands FROM and CMD

* FROM: Defines the base image
* CMD: Prints the words "Hello World!" on the terminal

```dockerfile
FROM alpine
CMD ["echo","Hello World!"]
```

### Docker build command

Create a container image using the build command:

```shell
docker [commmand] [tag] [repository]:[version] [current_directory]
```

```shell
docker build -t my-app:v1 .
```

### Docker image verification

To verify the creation of the image, run the docker images command:

```shell
docker images
```

### Docker run command

Create the container using the run command:

```shell
docker run [apptag]
# example:
docker run -p 8080:80 nginx
```

To verify the details of the container created, run the docker ps -a command:

``` shell
docker ps -a
```

Stores images in a configured registry

```shell
docker push my-app:v1
```

Retrieves images from a configured registry	

```shell
docker pull nginx
```

## Docker Objects

### Dockerfile

* A Dockerfile is a text file that contains instructions needed to create an image

* The Dockerfile is created using any editor from the console or terminal

* Few instructions that Docker provides:

  * From

    Defines base image

  * Run

    Executes arbitrary commands

  * CMD

    Defines default command for container execution

### Docker image

* Read-only template with instructions for creating Docker container
* Built using instruction in a Dockerfile; a new read-only image layer is created for each instruction
* A writable layer is added when an image is run as a container
* Layer can be shared between images, which saves disk space and network bandwidth

### Container image naming

hostname/repository:tag

### Docker containers

A docker container

* Is a runnable instance of an image
* Can be created, stopped, started or deleted using the Docker API or CLI
* Can connect to multiple networks, attach storage, or create a new image based on its current state
* Is well isolated from other containers and its host machine

### Docker networks, storage & plugins

Networks

* Networks are used for the isolated container communication

Storage 

* Docker uses volumes and bind mounts to persist data even after a container stops

Plugins

* Storage plugins provide the ability to connect to external storage platforms

## Docker Architecture

* Based on client-server architecture
* Provides a complete application environment
* Includes the client, the host, and the registry components

### Docker process overview

1. Using either the Docker command line interface (CLI) or REST APIs, the Docker client sends instructions or commands to the Docker host server
2. The Docker host server, referred to as the host. includes the Docker daemon know as dockerd
3. The daemon listens for Docker API requests or commands such as "docker run" and process those commands
4. The daemon builds, runs, and distributes containers to the registry
5. The registry stores the images

### Docker host

The Docker host also includes and manages:

* Images
* Containers
* Namespaces
* Networks
* Storage
* Plugins and add-ons

### Docker communications

* The Docker client can communicate with both local and remote hosts
* The Docker client and the host daemon can run
  * On the same system
  * On different systems
* Docker daemons can also communicate with other daemons to manage Docker services

### Registry

* Stores and distributes images
* Access is public or private
  * Public such as Docker Hub - Everyone can access
  * Private - Implemented for security

* Registry locations are either hosted or self-hosted

#### Registry access

Docker stores the images in a registry

* Developers build and push images using automation or a build pipeline
* Local machines, cloud systems, or on-premises systems pull the images

**Cheat Sheet: Docker CLI**

| Command                         | Description                                                  |
| ------------------------------- | ------------------------------------------------------------ |
| **curl localhost**              | Pings the application.                                       |
| **docker build**                | Builds an image from a Dockerfile.                           |
| **docker build . -t**           | Builds the image and tags the image id.                      |
| **docker CLI**                  | Start the Docker command line interface.                     |
| **docker container rm**         | Removes a container.                                         |
| **docker images**               | Lists the images.                                            |
| **docker ps**                   | Lists the containers.                                        |
| **docker ps -a**                | Lists the containers that ran and exited successfully.       |
| **docker pull**                 | Pulls the latest image or repository from a registry.        |
| **docker push**                 | Pushes an image or a repository to a registry.               |
| **docker run**                  | Runs a command in a new container.                           |
| **docker run -p**               | Runs the container by publishing the ports.                  |
| **docker stop**                 | Stops one or more running containers.                        |
| **docker stop $(docker ps -q)** | Stops all running containers.                                |
| **docker tag**                  | Creates a tag for a target image that refers to a source image. |
| **docker –version**             | Displays the version of the Docker CLI.                      |
| **exit**                        | Closes the terminal session.                                 |
| **export MY_NAMESPACE**         | Exports a namespace as an environment variable.              |
| **git clone**                   | Clones the git repository that contains the artifacts needed. |
| **ibmcloud cr images**          | Lists images in the IBM Cloud Container Registry.            |
| **ibmcloud cr login**           | Logs your local Docker daemon into IBM Cloud Container Registry. |
| **ibmcloud cr namespaces**      | Views the namespaces you have access to.                     |
| **ibmcloud cr region-set**      | Ensures that you are targeting the region appropriate to your cloud account. |
| **ibmcloud target**             | Provides information about the account you’re targeting.     |
| **ibmcloud version**            | Displays the version of the IBM Cloud CLI.                   |
| **ls**                          | Lists the contents of this directory to see the artifacts.   |

**Glossary: Container Basics**

| Term                                    | Definition                                                   |
| --------------------------------------- | ------------------------------------------------------------ |
| **Agile**                               | is an iterative approach to project management and software development that helps teams deliver value to their customers faster and with fewer issues. |
| **Client-server architecture**          | is a distributed application structure that partitions tasks or workloads between the providers of a resource or service, called servers, and service requesters, called clients. |
| **A container**                         | powered by the containerization engine, is a standard unit of software that encapsulates the application code, runtime, system tools, system libraries, and settings necessary for programmers to efficiently build, ship and run applications. |
| **Container Registry**                  | Used for the storage and distribution of named container images. While many features can be built on top of a registry, its most basic functions are to store images and retrieve them. |
| **CI/CD pipelines**                     | A continuous integration and continuous deployment (CI/CD) pipeline is a series of steps that must be performed in order to deliver a new version of software. CI/CD pipelines are a practice focused on improving software delivery throughout the software development life cycle via automation. |
| **Cloud native**                        | A cloud-native application is a program that is designed for a cloud computing architecture. These applications are run and hosted in the cloud and are designed to capitalize on the inherent characteristics of a cloud computing software delivery model. |
| **Daemon-less**                         | A container runtime that does not run any specific program (daemon) to create objects, such as images, containers, networks, and volumes. |
| **DevOps**                              | is a set of practices, tools, and a cultural philosophy that automate and integrate the processes between software development and IT teams. |
| **Docker**                              | An open container platform for developing, shipping and running applications in containers. |
| **A Dockerfile**                        | is a text document that contains all the commands you would normally execute manually in order to build a Docker image. Docker can build images automatically by reading the instructions from a Dockerfile. |
| **Docker client**                       | is the primary way that many Docker users interact with Docker. When you use commands such as docker run, the client sends these commands to dockerd, which carries them out. The docker command uses the Docker API. The Docker client can communicate with more than one daemon. |
| **Docker Command Line Interface (CLI)** | The Docker client provides a command line interface (CLI) that allows you to issue build, run, and stop application commands to a Docker daemon. |
| **Docker daemon (dockerd)**             | creates and manages Docker objects, such as images, containers, networks, and volumes. |
| **Docker Hub**                          | is the world's easiest way to create, manage, and deliver your team's container applications. |
| **Docker localhost**                    | Docker provides a host network which lets containers share your host’s networking stack. This approach means that a localhost in a container resolves to the physical host, instead of the container itself. |
| **Docker remote host**                  | A remote Docker host is a machine, inside or outside our local network which is running a Docker Engine and has ports exposed for querying the Engine API. |
| **Docker networks**                     | help isolate container communications.                       |
| **Docker plugins**                      | such as a storage plugin, provides the ability to connect external storage platforms. |
| **Docker storage**                      | uses volumes and bind mounts to persist data even after a running container is stopped. |
| **LXC**                                 | LinuX Containers is a OS-level virtualization technology that allows creation and running of multiple isolated Linux virtual environments (VE) on a single control host. |
| **IBM Cloud Container Registry**        | stores and distributes container images in a fully managed private registry. |
| **Image**                               | An immutable file that contains the source code, libraries, and dependencies that are necessary for an application to run. Images are templates or blueprints for a container. |
| **Immutability**                        | Images are read-only; if you change an image, you create a new image. |
| **Microservices**                       | are a cloud-native architectural approach in which a single application contains many loosely coupled and independently deployable smaller components or services. |
| **Namespace**                           | A Linux namespace is a Linux kernel feature that isolates and virtualizes system resources. Processes which are restricted to a namespace can only interact with resources or processes that are part of the same namespace. Namespaces are an important part of Docker’s isolation model. Namespaces exist for each type of resource, including networking, storage, processes, hostname control and others. |
| **Operating System Virtualization**     | OS-level virtualization is an operating system paradigm in which the kernel allows the existence of multiple isolated user space instances, called containers, zones, virtual private servers, partitions, virtual environments, virtual kernels, or jails. |
| **Private Registry**                    | Restricts access to images so that only authorized users can view and use them. |
| **REST API**                            | A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services. |
| **Registry**                            | is a hosted service containing repositories of images which responds to the Registry API. |
| **Repository**                          | is a set of Docker images. A repository can be shared by pushing it to a registry server. The different images in the repository can be labelled using tags. |
| **Server Virtualization**               | Server virtualization is the process of dividing a physical server into multiple unique and isolated virtual servers by means of a software application. Each virtual server can run its own operating systems independently. |
| **Serverless**                          | is a cloud-native development model that allows developers to build and run applications without having to manage servers. |
| **Tag**                                 | A tag is a label applied to a Docker image in a repository. Tags are how various images in a repository are distinguished from each other. |
