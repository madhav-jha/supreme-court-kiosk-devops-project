terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.region

}

resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = {
    Name = "kiosk-vpc"
  }
}

resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "kiosk-igw"
  }
}

resource "aws_subnet" "public" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = false
  availability_zone       = "${var.region}a"

  tags = {
    Name = "kiosk-public-subnet"
  }
}

resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gw.id
  }

  tags = {
    Name = "kiosk-public-rt"
  }
}

resource "aws_route_table_association" "public" {
  subnet_id      = aws_subnet.public.id
  route_table_id = aws_route_table.public.id
}

resource "aws_security_group" "main" {
  name   = "kiosk-sg"
  vpc_id = aws_vpc.main.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 9090
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "kiosk-sg"
  }
}

# Jenkins Master
resource "aws_instance" "jenkins_master" {
  ami                         = var.ami_id
  instance_type               = var.instance_type_jenkins_master
  subnet_id                   = aws_subnet.public.id
  vpc_security_group_ids      = [aws_security_group.main.id]
  key_name                    = var.key_name
  associate_public_ip_address = false

  tags = {
    Name = "kiosk-jenkins-master"
    Role = "jenkins-master"
  }
}

# Jenkins Node (agent)
resource "aws_instance" "jenkins_node" {
  ami                         = var.ami_id
  instance_type               = var.instance_type_jenkins_node
  subnet_id                   = aws_subnet.public.id
  vpc_security_group_ids      = [aws_security_group.main.id]
  key_name                    = var.key_name
  associate_public_ip_address = false

  tags = {
    Name = "kiosk-jenkins-node"
    Role = "jenkins-node"
  }
}

# App node (Docker / Docker Compose)
resource "aws_instance" "app_docker" {
  ami                         = var.ami_id
  instance_type               = var.instance_type_app_docker
  subnet_id                   = aws_subnet.public.id
  vpc_security_group_ids      = [aws_security_group.main.id]
  key_name                    = var.key_name
  associate_public_ip_address = false

  tags = {
    Name = "kiosk-app-docker"
    Role = "app-docker"
  }
}

# Kubernetes node (single-node cluster)
resource "aws_instance" "k8s_node" {
  ami                         = var.ami_id
  instance_type               = var.instance_type_k8s
  subnet_id                   = aws_subnet.public.id
  vpc_security_group_ids      = [aws_security_group.main.id]
  key_name                    = var.key_name
  associate_public_ip_address = false

  tags = {
    Name = "kiosk-k8s-node"
    Role = "kubernetes"
  }
}

# Monitoring node (Prometheus + Grafana)
resource "aws_instance" "monitoring" {
  ami                         = var.ami_id
  instance_type               = var.instance_type_monitoring
  subnet_id                   = aws_subnet.public.id
  vpc_security_group_ids      = [aws_security_group.main.id]
  key_name                    = var.key_name
  associate_public_ip_address = false

  tags = {
    Name = "kiosk-monitoring"
    Role = "monitoring"
  }
}

resource "aws_eip" "jenkins_master" {
  domain   = "vpc"
  instance = aws_instance.jenkins_master.id
}

resource "aws_eip" "jenkins_node" {
  domain   = "vpc"
  instance = aws_instance.jenkins_node.id
}

resource "aws_eip" "app_docker" {
  domain   = "vpc"
  instance = aws_instance.app_docker.id
}

resource "aws_eip" "k8s_node" {
  domain   = "vpc"
  instance = aws_instance.k8s_node.id
}

resource "aws_eip" "monitoring" {
  domain   = "vpc"
  instance = aws_instance.monitoring.id
}
