provider "aws" {
  region = var.region
}

# -------------------
# VPC
# -------------------
resource "aws_vpc" "kiosk_vpc" {
  cidr_block = var.vpc_cidr
  tags = {
    Name = "kiosk-vpc"
  }
}

# -------------------
# Subnet
# -------------------
resource "aws_subnet" "public_subnet" {
  vpc_id                  = aws_vpc.kiosk_vpc.id
  cidr_block              = var.subnet_cidr
  availability_zone       = var.availability_zone
  map_public_ip_on_launch = true

  tags = {
    Name = "kiosk-public-subnet"
  }
}

# -------------------
# Internet Gateway
# -------------------
resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.kiosk_vpc.id
}

# -------------------
# Route Table
# -------------------
resource "aws_route_table" "public_rt" {
  vpc_id = aws_vpc.kiosk_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }
}

resource "aws_route_table_association" "rt_assoc" {
  subnet_id      = aws_subnet.public_subnet.id
  route_table_id = aws_route_table.public_rt.id
}

# -------------------
# Security Group
# -------------------
resource "aws_security_group" "kiosk_sg" {
  name   = "kiosk-sg"
  vpc_id = aws_vpc.kiosk_vpc.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 0
    to_port     = 65535
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

# -------------------
# IAM Role for EC2
# -------------------
resource "aws_iam_role" "ec2_role" {
  name = "kiosk-ec2-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = { Service = "ec2.amazonaws.com" }
      Action = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_instance_profile" "ec2_profile" {
  name = "kiosk-ec2-profile"
  role = aws_iam_role.ec2_role.name
}

resource "aws_iam_role_policy_attachment" "ecr_policy" {
  role       = aws_iam_role.ec2_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryFullAccess"
}

# -------------------
# EC2 Instances
# -------------------
resource "aws_instance" "jenkins_master" {
  ami                    = var.ami_id
  instance_type          = var.instance_type_small
  subnet_id              = aws_subnet.public_subnet.id
  vpc_security_group_ids = [aws_security_group.kiosk_sg.id]
  key_name               = var.key_name
  iam_instance_profile   = aws_iam_instance_profile.ec2_profile.name

  tags = { Name = "jenkins-master" }
}

resource "aws_instance" "jenkins_node" {
  ami                    = var.ami_id
  instance_type          = var.instance_type_small
  subnet_id              = aws_subnet.public_subnet.id
  vpc_security_group_ids = [aws_security_group.kiosk_sg.id]
  key_name               = var.key_name
  iam_instance_profile   = aws_iam_instance_profile.ec2_profile.name

  tags = { Name = "jenkins-node" }
}

resource "aws_instance" "k8s_master" {
  ami                    = var.ami_id
  instance_type          = var.instance_type_medium
  subnet_id              = aws_subnet.public_subnet.id
  vpc_security_group_ids = [aws_security_group.kiosk_sg.id]
  key_name               = var.key_name
  iam_instance_profile   = aws_iam_instance_profile.ec2_profile.name

  tags = { Name = "k8s-master" }
}

resource "aws_instance" "k8s_worker" {
  ami                    = var.ami_id
  instance_type          = var.instance_type_medium
  subnet_id              = aws_subnet.public_subnet.id
  vpc_security_group_ids = [aws_security_group.kiosk_sg.id]
  key_name               = var.key_name
  iam_instance_profile   = aws_iam_instance_profile.ec2_profile.name

  tags = { Name = "k8s-worker" }
}

resource "aws_instance" "monitoring" {
  ami                    = var.ami_id
  instance_type          = var.instance_type_small
  subnet_id              = aws_subnet.public_subnet.id
  vpc_security_group_ids = [aws_security_group.kiosk_sg.id]
  key_name               = var.key_name
  iam_instance_profile   = aws_iam_instance_profile.ec2_profile.name

  tags = { Name = "monitoring" }
}

# -------------------
# Elastic IPs
# -------------------
resource "aws_eip" "jenkins_master_eip" {
  instance = aws_instance.jenkins_master.id
}

resource "aws_eip" "jenkins_node_eip" {
  instance = aws_instance.jenkins_node.id
}

resource "aws_eip" "k8s_master_eip" {
  instance = aws_instance.k8s_master.id
}

resource "aws_eip" "k8s_worker_eip" {
  instance = aws_instance.k8s_worker.id
}

resource "aws_eip" "monitoring_eip" {
  instance = aws_instance.monitoring.id
}
