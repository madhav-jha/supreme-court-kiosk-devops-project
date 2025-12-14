variable "region" {
  default = "ap-south-1"
}

variable "vpc_cidr" {
  default = "10.0.0.0/16"
}

variable "subnet_cidr" {
  default = "10.0.1.0/24"
}

variable "availability_zone" {
  default = "ap-south-1a"
}

variable "key_name" {
  default = "kiosk-key"
}

variable "instance_type_small" {
  default = "t2.small"
}

variable "instance_type_medium" {
  default = "t2.medium"
}

variable "ami_id" {
  default = "ami-0f5ee92e2d63afc18"
}
