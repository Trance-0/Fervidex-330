# Introduction to Containers Week 2

## Container Orchestration

Container orchestration is a process that automates the container lifecycle of containerized applications.

### Container Lifecycle:

* Deployment
* Management
* Scaling
* Networking
* Availability

#### Benefits:

* Streamlines complexity
* Enables hand-off deployment and scaling
* Increases speed, agility, and efficiency
* Allows development teams to use resources more efficiently

### Container orchestration features

* Defines container images and registry
* Improves provisioning and deployment
* Secures network connectivity
* Ensures availability and performance
* Manages scalability and load balancing
* Resource allocation and scheduling
* Rolling updates and roll backs
* Health checks and automated error handling

### How does Container orchestration work

Configuration files

* YAML or JSON files configure containers to 
  * Find resources
  * Establish a network
  * Store logs

Deployment scheduling

* Automatically schedules new container deployment
* Finds the right host based on predefined settings or restrictions

Manages container lifecycle

* Configuration files specs inform container decisions
  * System parameters
  * File parameters

Scaling and productivity

* Automation is used to :
  * Maintain productivity
  * Support scaling

### Container orchestration tools

Marathon

* Opensource cluster manager.
* Scales container infrastructure by automating management and task monitoring.

Nomad

* Free, open-source cluster management and scheduling tool.
* Supports various app types on all major operating systems.

Docker Swarm

* Open-source container orchestration platform.
* Automates deployment of containerized apps.

Kubernets

* Standard for open-source container orchestration platforms.
* Robust feature set, broadly supported.

#### Container orchestration benefits

Container orchestration helps to meet business goals and increase profitability by using automation

* Increased Production
* Faster Deployment
* Reduced Cost
* Stronger Security
* Easier Scaling
* Faster Recovery

## Introduction to Kubernetes

What is Kubernetes

* An open source containerization orchestration platform
* Easily portable across clouds and on-premises
* Includes a growing ecosystem of projects, products and partners
* Facilitates declarative management

What is not Kubernetes

* Is not a traditional, **all inclusive platform as a service** (Paas).
* Is not rigid or opinionated but a flexible model that supports a diverse variety of workloads and containerized applications.
* Does not provide integration/ continuous delivery (CI/CD) pipelines to deploy source code or build applications
* Does not prescribe logging, monitoring, or alerting solutions.
* Does not provide built-in middleware, databases, or other sevices.

### Kubernetes concepts

| Object/concept     | What you need to know                                        |
| ------------------ | ------------------------------------------------------------ |
| Pods and Workloads | Pods are the smallest deployable compute object in Kubernetes and the higher-level abstractions to run workloads |
| Services           | A service exposes application running on a set of Pods       |
| Storage            | Kubernetes supports both persistent and temporary storage for Pods |
| Configuration      | Resources that Kubernetes provides for configuring Pods      |
| Security           | Security for cloud-native workloads enforces security for Pod and API access |
| Policies           | Create polices for groups of resources helps ensure that Pods match to the Nodes so that the kubelet can find then and run the Pod |
| Schedule, Eviction | Runs and proactively terminates one or more Pods on resource-starved Nodes |
| Preemption         | Terminates lower priority Pods so that higher priority Pods can run on Nodes |
| Administration     | Management details necessary to administer a Kubernetes cluster |

### Kubernetes capabilities

Automated bin backing

* Increases resource utilization and cost saving using a mix of critical and best-effort workloads
* Performs container auto-placement based on resource requirements and conditions without sacrificing high availability (HA)

Secret and configuration management

* Stores and manages sensitive information (credentials, keys or tokens) securely
* Deploys and updates secrets and configuration without rebuilding images

IPv4/IPv6 dual-stack

* Assigns both IPv4 and IPv6 addresses to Pods and Services

Batch execution

* Manages batch and continuous integration workloads, and replaces failed containers, if configures

Self-healing

* Restarts, replaces, reschedules, and kills failing or unresponsible containers
* Exposes containers to clients only if healthy and running

Service discovery and load balancing

* Discovers Pods using their own IP addresses or a single DNS name
* Load-balances traffic across Pods for better performance and high avaliability

Designed for extensibility

* Easily extensible by adding or providing additional features to your Kubernetes cluster without any source code modifications

### Kubernetes ecosystem

* Contains services, support and tools that are widely available
* Provides additional Kubernetes services
  * Building container images
  * Storing images in a container registry
  * Application logging and monitoring
  * Continuous improvements and continuous delivery CI/CD

## Kubernetes Architecture

### Kubernetes API server

* Exposes the Kubernetes API
* Front-end for the Kubernetes control plane
* All communication in the cluster utilizes this API
* Designed to scale horizontally and balance traffic between them

### etcd

* Highly available, distributed key-value store that contains all cluster data
* Stores deployment configuration data, the desired state, and meta data in a way that can be accessed in a common location

### kube-scheduler

* Assigns newly created Pods to nodes 
* Selects optimal node according to Kubernetes scheduling principles, configuration options, and available resources

### kube-controller manager

* Runs controller processes that monitor cluster state
* Runs controller processes that ensure the actual state matches the desired state

### cloud-controller manager

* Runs controllers that interact with underlying cloud providers
* Links cluster into a cloud provider's API

### Nodes

* Are the worker machines in Kubernetes
* May be a virtual or physical machine
* Managed by the control plane
* Contain the services necessary to run applications
* Nodes include pods which are the smallest deployment entity in Kubernetes

### Kubelet

* Communicates with the API server
* Ensure that Pods and their associated containers are running
* Reports to the control plane on the pods' health and status

### Container runtime

* Downloads images and runs contianers
* Kubernetes implements an interface so that this component is pluggable
* Docker is a well-known runtime

### Kubernetes proxy

* Network proxy
* Maintains network rules that allow communication to Pods

## Kubernetes Objects

Key terms review

What is an object

* Object: a bundle of software data that has an identity, a state, and a behavior
  * variables, data structures, and specific functions
* Entity: a person, place, or thing with an identity and associated data
* Persistent: that which lasts, despite sever failures / network attacks

What are Kubernetes objects?

* Kubernetes objects are persistent entities
  * Pods
  * Namespaces
  * ReplicaSets
  * Deployments
* Kubernetes objects consist of two main fields
  * Object spec
    * Provided by user
    * Defined desired state
  * Status
    * Provided by Kubernetes
    * Defines current state

### Label and selectors

Labels are key/value pairs attached to objects

* Intended for identification of objects
* Not unique
* Help organize and group objects

Label selectors are the core grouping method in Kubernetes

* Identify and group a set of objects

### Namespaces and names

Namespaces provide a mechanism for isolating groups of resources with in a single cluster.

* Segregate cluster by team, project, etc.
* Necessary with larger number of users.

Namespaces provide a scope for object names

* Each object has a name
* Names are unique for a recourse type within a namespace

### Pods

* Simplest unit in Kubernetes
* Represents process running in your cluster
* Encapsulates one or more containers
* Replicating a Pod serves to scale applications horizontally

eg

```yaml
apiVersion: v1
kind: Pod
metadata:
	name: nginx
spec:
	containers: 
	- name: nginx
	  image: nginx:1.7.9
	  ports:
	  - containerPort: 80
```

### ReplicaSet

A ReplicaSet is a set of horizontally scaled running Pods.

* A ReplicaSet configuration file defines:
  * Number of replicas
  * Pod template
  * Selector to identify which Pods it can acquire
* Generally encapsulated by a Development

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
	name: nginx-replicaset
	labels:
	  apps: nginx
spec:
	replicas: 3
	selector:
	  machineLabels:
	    app: nginx
	template:
	  metadata:
	  	labels:
	  	  app: nginx
	spec: 
		containers: 
		- name: nginx
	  	  image: nginx:1.7.9
	  	  ports:
	      - containerPort: 80
```

### Deployment

A Deployment is a higher-level object that provides updates for Pods and ReplicaSets

Deployments

* Run multiple replicas of an application
* Suitable for stateless applications
* Update triggers a rollout

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
	name: nginx-deployment
	labels:
	  apps: nginx
spec:
	replicas: 3
	selector:
	  machineLabels:
	    app: nginx
	template:
	  metadata:
	  	labels:
	  	  app: nginx
	spec: 
		containers: 
		- name: nginx
	  	  image: nginx:1.7.9
	  	  ports:
	      - containerPort: 80
```

### Service

* Is a REST object, like Pods
* Is a logical abstraction for a set of Pods in a cluster
* Provides policies for accessing the Pods and cluster
* Acts as a load balancer across the Pods
* Is assigned a unique IP address for accessing applications deployed on Pods
* Eliminates the need for a separate Service discovery process

#### Service properties

* Supports multiple protocols such as TCP (default), UDP, and others
* Supports multiple port definitions
  * The port number with the same name can vary in each backend Pod
* Can have an optional selector
* Optionally maps incoming ports to a targetPort

#### Why is a Service needed?

* Pods in a cluster are volatile
* This volatility lead to discoverability issues because of changing IP addresses
* A Service keeps track of the changes and exposes a single IP address or a DNS name
* A Service utilizes selectors to target a set of Pods

Native Kubernetes applications

* Update API endpoint when there are changes in the Pods of a Service

Non-native Kubernetes applications

* Use a virtual-IP-based bridge or load balancer between the applications and the backed Pods

### Service types

There are four types of Services

#### ClusterIP

* Is the default and most common Service type
* Is assigned a cluster-internal IP address to the ClusterIP Service that makes the Service only reachable within the cluster
* Cannot make requests to Service (Pods) from outside the cluster
* You set the ClusterIP address in the Service definition file
* Provides interservice communication within the cluster

#### NodePort

* Is an extension of ClusterIP Service
* Creates and routes the incoming requests automatically to the ClusterIP Service
* Exposes the Service on each Node's IP address at a static port
* Exposes a single Service, with no load-balancing requirements for multiple services

#### LoadBalancer

* An extension of the NodePort Service, an External Load Balancer, or ELB, creates Node port and ClusterIP Services automatically
* Integrates and automatically directs traffic to the NodePort Service with a cloud provider's ELB
* To expose a Service to the Internet, you need a new ELB with an IP address
* Use a cloud provider's ELB to hose your cluster

#### External Name

* Maps to a DNS name and not to any selector
* Requires a 'spec.externalName' parameter
* Maps the Service to contents of the externalName field that returns a CNAME record and its value
* Used to create a Service that represents an external storage and enable Pods from different namespaces to talk to each other

### Ingress

* Is an API object (combines with a controller) that provides routing rules to manage external users' access to multiple Services in a Kubernetes cluster
* In production, Ingress exposes applications to the Internet via port 80 (HTTP) or port 443 (HTTPS) 
* An ELB is expensive and is managed outside the cluster while the cluster monitors Ingress

### DaemonSet

* Is an object that makes sure that Nodes run a copy of a Pod
* As Nodes are added to a cluster, Pods are added to the Nodes
* Pods are garbage collected when removed form a cluster
* If you delete a DaemonSet, all Pods are removed
* Ideally used for storage, logs, and monitoring Nodes

### StatefulSet

* Is an object that manages stateful applications
* Manages deployment and scaling of Pods
* Provides guarantees about the ordering and uniqueness of Pods
* Maintains a stricky identity for each of your Pods
* Provides persistent storage volumes for your workloads

### Job

* Is an object that creates Pods and tracks its completion process
* Jobs are retried until completed
* Deleting a Job will remove the created Pods
* Suspending a Job will delete its active Pods until the Job resumes 
* A Job can run serveral Pods in parallel
* A CronJob is regularly used to create Jobs on an iterative schedule

## Kubectl

Kubectl is the Kubernetes command line interface

* Kubectl: Kube Command Tool Line
* Helps user deploy applications, inspect and manage cluster resources, view logs, and more
* Provides many features for users who work with clusters and manage running cluster workloads
* Key command types:
  * Imperative commands
  * Imperative object configuration
  * Declarative object configuration

### Kubectl command structure

Kubectl commands use the following structure:

```
kubectl [command] [type] [name] [flags]
```

[command] = any operation to be performed (create, get, apply, delete)

[type] = resource type (pod, deployment, replicaset)

[name] = resource name (if applicable)

[flags] = special options or modifiers that override default values

### Imperative commands

Imperative commands create, update, and delete live objects directly:

* Operations specified as arguments or flags

* Easiest to learn

  ```shell
  kuberctl run nginx --image nginx
  ```

* No audit trail

* Not very flexible (no template, no integration)

* Useful for development and test environments

### Imperative object configuration

The kubectl command specified required operations, optional flags, and at least one file name:

* The configuration file specified must contain a full definition of the objects in YAML or JSON format

  ```shell
  kubectl create -f nginx.yaml
  ```

* Configuration templates help replicate identical results

* Advantages:

  * May be stored in a source control system like Git
  * Can integrate with change processes
  * Provides audit trails and templates for creating new objects

* Disadvantages:

  * Requires basic understanding of the object schema
  * Required writing a YAML/JSON file

Kubectl will mange most of the case of conflicts automatically

| Command   | Description                                                  |
| --------- | ------------------------------------------------------------ |
| apply     | Apply/change a configuration of a resource using a file or stdin |
| create    | Create one or more resources using a file or stdin           |
| describe  | Describe or detail a file/container                          |
| get       | Access a file/container or other resource                    |
| delete    | Delete a file/container                                      |
| autoscale | Apply autoscaling to the selected file/container             |
| edit      | Make changes to a file/container                             |
| exec      | Execute a command on a container in a specific pod           |
| expose    | Make a running file/container available                      |
| label     | Apply a label to a file/container                            |

#### Kubectl 'get' command examples

Kubectl 'get' commands deal with listing different objects or resources.

```shell
kubectl get services

kubectl get pods -all-namespaces

kubectl get deployment my-dep

kubectl get pods
```

#### Kubectl 'apply' command examples

Kubectl 'apply' commands create resources using YAML or JSON files.

```shell
kubectl apply -f ./my1.yaml -f ./my2.yaml

kubectl apply -f https://git.io/vPieo
```

#### Kubectl 'scale' command examples

Kubectl 'scale' commands scale (increase/decrease) the number of replicas.

```shell
kubectl scale --replicas=3 rs/foo

kubectl scale --replicas=3 -f foo.yaml
```

#### Create a resource (cmd + output)

Let's create a development with 3 replicas of the nginx image:

```shell
kubectl apply -f nginx.yaml

kubectl get deployment my-dep
```

## Review

Congratulations! You have completed this module. At this point, you know: 

- Container orchestration automates the container lifecycle resulting in faster deployments, reduced errors, higher availability, and more robust security. 
- Kubernetes Is a highly portable, horizontally scalable, open-source container orchestration system with automated deployment and simplified management capabilities. 
- Kubernetes architecture consists of a control plane and one or more worker planes. 
- A control plane includes controllers, an API server, a scheduler, and an etcd. 
- A worker plane includes nodes, a kubelet, container runtime, and kube-proxy. 
- Kubernetes objects include Namespaces, Pods, ReplicaSets, Deployments, and Services. 
- Namespaces help in isolating groups of resources within a single cluster. 
- Pods represent a process or an instance of an app running in the cluster. 
- ReplicaSets create and manage horizontally scaled running Pods. 
- Deployments provide updates for Pods and ReplicaSets. 
- A service in Kubernetes is a REST object that provides policies for accessing the pods and cluster. 
- Kubernetes capabilities include automated rollouts and rollbacks, storage orchestration, horizontal scaling, automated bin packing, secret and configuration management, Ipv4/Ipv6 dual-stack support, batch execution, self-healing, service discovery, load balancing, and extensible design. 
- Services in Kubernetes are REST objects that provide policies for accessing the pods and cluster. ClusterIP provides Inter-service communication within the cluster; a NodePort Service creates and routes the incoming requests automatically to the ClusterIP Service; the External Load Balancer, or ELB, creates NodePort and ClusterIP Services automatically and External Name service represents external storage as well as enables Pods from different namespaces to talk to each other.
- Ingress is an API object that provides routing rules to manage external users' access to multiple services in a Kubernetes cluster; whereas using a DaemonSet ensures that there is at least one copy of the pod on all nodes; a StatefulSet manages stateful applications, manages Pod deployment and scaling, maintains a sticky identity for each Pod request and provides persistent storage volumes for your workloads and lastly a Job creates pods and tracks the Pod completion process; Jobs are retried until completed.  

**Cheat Sheet: Understanding Kubernetes Architecture**

| Command                         | Description                                                  |
| ------------------------------- | ------------------------------------------------------------ |
| **for …do**                     | Runs a for command multiple times as specified.              |
| **kubectl apply**               | Applies a configuration to a resource.                       |
| **kubectl config get-clusters** | Displays clusters defined in the kubeconfig.                 |
| **kubectl config get-contexts** | Displays the current context.                                |
| **kubectl create**              | Creates a resource.                                          |
| **kubectl delete**              | Deletes resources.                                           |
| **kubectl describe**            | Shows details of a resource or group of resources.           |
| **kubectl expose**              | Exposes a resource to the internet as a Kubernetes service.  |
| **kubectl get**                 | Displays resources.                                          |
| **kubectl get pods**            | Lists all the Pods.                                          |
| **kubectl get pods -o wide**    | Lists all the Pods with details.                             |
| **kubectl get deployments**     | Lists the deployments created.                               |
| **kubectl get services**        | Lists the services created.                                  |
| **kubectl proxy**               | Creates a proxy server between a localhost and the Kubernetes API server. |
| **kubectl run**                 | Creates and runs a particular image in a pod.                |
| **kubectl version**             | Prints the client and server version information.            |
