variable "aws_access_key" {
  description = "AWS access key."
  type = "string"
}

variable "aws_secret_key" {
  description = "AWS secret key."
  type = "string"
}

variable "ec2_public_key" {
  description = "SSH public key for web server."
  type = "string"
}


provider "aws" {
	region = "us-east-1"
	access_key = "${var.aws_access_key}"
	secret_key = "${var.aws_secret_key}"
}

resource "aws_codedeploy_app" "eagerewok" {
  name = "eagerewok"
}

resource "aws_codedeploy_deployment_config" "eagerewok" {
  deployment_config_name = "staging"

  minimum_healthy_hosts {
    type  = "HOST_COUNT"
    value = 1
  }
}

resource "aws_s3_bucket" "eagerewok" {
  bucket = "dds-eagerewok"
  acl = "private"

  tags {
    Name = "dds-eagerewok"
    # Environment = "Dev"
  }
}


resource "aws_iam_role" "eagerewok" {
  name = "eagerewok"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Principal": {
        "Service": "codedeploy.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "eagerewok" {
  name = "eagerewok"
  role = "${aws_iam_role.eagerewok.id}"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "autoscaling:CompleteLifecycleAction",
        "autoscaling:DeleteLifecycleHook",
        "autoscaling:DescribeAutoScalingGroups",
        "autoscaling:DescribeLifecycleHooks",
        "autoscaling:PutLifecycleHook",
        "autoscaling:RecordLifecycleActionHeartbeat",
        "codedeploy:*",
        "ec2:DescribeInstances",
        "ec2:DescribeInstanceStatus",
        "tag:GetTags",
        "tag:GetResources",
        "sns:Publish"
      ],
      "Resource": "*"
    }
  ]
}
EOF
}

resource "aws_codedeploy_deployment_group" "eagerewok" {
  app_name               = "${aws_codedeploy_app.eagerewok.name}"
  deployment_group_name  = "eagerewok"
  service_role_arn       = "${aws_iam_role.eagerewok.arn}"
  deployment_config_name = "${aws_codedeploy_deployment_config.eagerewok.id}"

  ec2_tag_filter {
    key   = "Name"
    type  = "KEY_AND_VALUE"
    value = "eagerewok"
  }

  # trigger_configuration {
  #   trigger_events     = ["DeploymentFailure"]
  #   trigger_name       = "foo-trigger"
  #   trigger_target_arn = "foo-topic-arn"
  # }

  auto_rollback_configuration {
    enabled = true
    events  = ["DEPLOYMENT_FAILURE"]
  }

  # alarm_configuration {
  #   alarms  = ["my-alarm-name"]
  #   enabled = true
  # }
}


resource "aws_instance" "eagerewok" {
	count = 1
	ami = "ami-7ad76705"
	instance_type = "t2.small"
	vpc_security_group_ids = ["${aws_security_group.eagerewok.id}"]
	subnet_id = "${aws_subnet.eagerewok.id}"
	key_name = "${aws_key_pair.eagerewok.id}"

	tags {
		Name = "eagerewok_staging"
	}

}

resource "aws_vpc" "eagerewok" {
	cidr_block       = "10.0.0.0/24"
	instance_tenancy = "default"

	tags {
		Name = "eagerewok_vpc"
	}
}

resource "aws_key_pair" "eagerewok" {
	key_name   = "eagerewok_key"
	public_key = "${file("${var.ec2_public_key}")}"
}

# https://www.terraform.io/docs/providers/aws/r/internet_gateway.html
resource "aws_internet_gateway" "eagerewok" {
	vpc_id = "${aws_vpc.eagerewok.id}"
}

resource "aws_security_group" "eagerewok" {
	name = "eagerewok_kali"
	vpc_id = "${aws_vpc.eagerewok.id}"

	ingress {
		from_port = 22
		to_port = 22
		protocol = "tcp"
		cidr_blocks = ["0.0.0.0/0"]
	}

	ingress {
		from_port = 80
		to_port = 80
		protocol = "tcp"
		cidr_blocks = ["0.0.0.0/0"]
	}	

	ingress {
		from_port = 443
		to_port = 443
		protocol = "tcp"
		cidr_blocks = ["0.0.0.0/0"]
	}	

	egress {
		from_port = 0
		to_port = 0
		protocol = -1
		cidr_blocks = ["0.0.0.0/0"]
	}
}

# https://www.terraform.io/docs/providers/aws/d/subnet.html
resource "aws_subnet" "eagerewok" {
	vpc_id = "${aws_vpc.eagerewok.id}"
	cidr_block = "10.0.0.0/24"
	map_public_ip_on_launch = true
}

resource "aws_route" "internet_access" {
	route_table_id         = "${aws_vpc.eagerewok.main_route_table_id}"
	gateway_id             = "${aws_internet_gateway.eagerewok.id}"
	destination_cidr_block = "0.0.0.0/0"
}
