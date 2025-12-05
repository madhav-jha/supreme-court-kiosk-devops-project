variable "region" {
  type    = string
  default = "ap-south-1"
}

variable "ami_id" {
  type    = string
  default = "ami-087d1c9a513324697"
}

variable "key_name" {
  type    = string
  default = "devops-key"
}

variable "instance_type_jenkins_master" {
  type    = string
  default = "t3.small"
}

variable "instance_type_jenkins_node" {
  type    = string
  default = "t3.small"
}

variable "instance_type_app_docker" {
  type    = string
  default = "t3.small"
}

variable "instance_type_k8s" {
  type    = string
  default = "t3.medium"
}

variable "instance_type_monitoring" {
  type    = string
  default = "t3.small"
}
