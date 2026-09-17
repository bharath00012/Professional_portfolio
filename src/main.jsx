import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Boxes,
  Braces,
  CheckCircle2,
  Cloud,
  Container,
  Cpu,
  FileCode2,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
  Wrench
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    status: "Completed",
    icon: FileCode2,
    title: "AWS Infrastructure Provisioning with Terraform",
    summary:
      "Provisioned AWS infrastructure using Terraform and practiced the full init, plan, apply and destroy workflow.",
    impact: [
      "Created EC2 infrastructure from Terraform code.",
      "Troubleshot AMI, region and instance compatibility issues.",
      "Used cleanup workflow to control AWS learning-project cost."
    ],
    stack: ["Terraform", "AWS EC2", "IAM", "Linux"]
  },
  {
    status: "Completed",
    icon: ShieldCheck,
    title: "Terraform Remote State with S3",
    summary:
      "Migrated Terraform state from local storage to an S3 backend and documented how teams share infrastructure state safely.",
    impact: [
      "Configured S3 backend concepts for shared state.",
      "Learned versioning, encryption and locking responsibilities.",
      "Separated GitHub Terraform code from S3 Terraform state."
    ],
    stack: ["S3", "DynamoDB", "Remote State", "IaC"]
  },
  {
    status: "Completed",
    icon: Workflow,
    title: "Multi-Stage Jenkins Pipeline on AWS EC2",
    summary:
      "Built a Jenkins learning project on Ubuntu EC2 with GitHub integration and Docker-based stage execution.",
    impact: [
      "Hosted Jenkins on EC2 and handled access troubleshooting.",
      "Created Jenkinsfile stages for Back-end and Front-end jobs.",
      "Ran Maven and Node.js tasks through Docker agents."
    ],
    stack: ["Jenkins", "Docker", "GitHub", "AWS EC2"],
    featured: true
  },
  {
    status: "In Progress",
    icon: GitBranch,
    title: "GitHub Actions Portfolio Deployment",
    summary:
      "Planned a CI/CD workflow to validate this portfolio and deploy it to AWS S3 with CloudFront.",
    impact: [
      "Validate HTML, CSS and JavaScript on each push.",
      "Deploy static assets to S3 through automation.",
      "Use CloudFront as the public delivery layer."
    ],
    stack: ["GitHub Actions", "S3", "CloudFront", "CI/CD"]
  },
  {
    status: "Learning",
    icon: Boxes,
    title: "Argo CD and GitOps Delivery",
    summary:
      "Studied how Argo CD syncs Kubernetes cluster state from Git and detects drift between desired and live resources.",
    impact: [
      "Mapped Jenkins CI to Argo CD continuous delivery.",
      "Learned sync, drift detection and rollback concepts.",
      "Next step is a small Kubernetes deployment demo."
    ],
    stack: ["Argo CD", "GitOps", "Kubernetes", "EKS"]
  },
  {
    status: "Practical",
    icon: Wrench,
    title: "EC2, SSH and Jenkins Access Troubleshooting",
    summary:
      "Practiced cloud operations troubleshooting around public IPs, security groups, SSH access and Jenkins port 8080.",
    impact: [
      "Checked SSH service state and port 22 listener status.",
      "Validated Jenkins service health and local port response.",
      "Learned when Elastic IPs stabilize recurring access issues."
    ],
    stack: ["EC2", "SSH", "Security Groups", "Jenkins"]
  }
];

const services = [
  {
    title: "Static Website Cloud Hosting",
    text: "Deploy portfolio, small business or landing websites using GitHub, AWS S3 and CloudFront.",
    icon: Cloud
  },
  {
    title: "CI/CD Starter Pipelines",
    text: "Set up simple Jenkins or GitHub Actions workflows for validation, builds and deployments.",
    icon: Workflow
  },
  {
    title: "Terraform Project Setup",
    text: "Create clean Terraform structure, backend notes, README documentation and safe cleanup steps.",
    icon: Braces
  },
  {
    title: "Linux and AWS Troubleshooting",
    text: "Debug SSH, ports, security groups, Jenkins access and basic service health issues.",
    icon: Terminal
  }
];

const stack = [
  ["Cloud", "AWS EC2, S3, IAM, security groups, public IPs, CloudFront basics", Cloud],
  ["Infrastructure", "Terraform, remote state, S3 backend, DynamoDB locking concepts", FileCode2],
  ["CI/CD", "Jenkins, Jenkinsfile, GitHub Actions, runners, stages and agents", Workflow],
  ["Containers", "Docker, containerized build environments, Maven and Node.js agents", Container],
  ["Operations", "Linux, SSH, services, logs, ports, networking and access troubleshooting", Server],
  ["Next Focus", "Kubernetes, Argo CD, GitOps, monitoring and production-style documentation", Cpu]
];

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Cloud DevOps Portfolio home">
          <span className="brand-mark">BK</span>
          <span>
            <strong>Bharath Kumar</strong>
            <small>Cloud DevOps Practitioner</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Cloud Infrastructure &amp; CI/CD Portfolio</p>
            <h1>Cloud infrastructure, automation, and delivery systems built for real-world use.</h1>
            <p className="hero-text">
              I am Bharath Kumar, a Cloud &amp; DevOps practitioner focused on building secure,
              scalable, and reliable solutions across AWS, Terraform, Jenkins, Docker,
              GitHub Actions, and Linux operations. My work emphasizes practical implementation,
              clear documentation, and streamlined deployment workflows.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects <ArrowUpRight size={18} />
              </a>
              <a className="button secondary" href="#contact">
                Start a Project
              </a>
            </div>
          </div>

          <div className="ops-panel" aria-label="Cloud DevOps project dashboard">
            <div className="ops-panel-header">
              <span className="pulse"></span>
              <span>portfolio-pipeline</span>
              <strong>healthy</strong>
            </div>

            <div className="deploy-flow">
              <FlowNode icon={Github} label="GitHub" value="source" />
              <span className="flow-line"></span>
              <FlowNode icon={Workflow} label="CI/CD" value="validate" />
              <span className="flow-line"></span>
              <FlowNode icon={Cloud} label="AWS" value="deploy" />
            </div>

            <div className="terminal-card">
              <p>$ terraform plan</p>
              <span>No drift detected</span>
              <p>$ jenkins build first-pipeline</p>
              <span>Back-end Maven agent: SUCCESS</span>
              <span>Front-end Node agent: SUCCESS</span>
              <p>$ aws s3 sync ./dist s3://portfolio</p>
              <span>Upload complete</span>
            </div>
          </div>
        </section>

        <section className="metrics" aria-label="Portfolio highlights">
          <Metric value="5+" label="Cloud topics practiced" />
          <Metric value="AWS" label="EC2, S3, IAM, networking" />
          <Metric value="IaC" label="Terraform and remote state" />
          <Metric value="CI/CD" label="Jenkins and GitHub Actions" />
        </section>

        <SectionHeader
          id="projects"
          eyebrow="Proof of work"
          title="Recent Cloud Projects"
          text="These are based on your recent hands-on work. Completed items are shown separately from active learning so the portfolio stays honest and professional."
        />

        <section className="project-grid" aria-label="Recent projects">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </section>

        <section id="services" className="split-section">
          <div className="section-copy">
            <p className="eyebrow">Freelance focus</p>
            <h2>Cloud Work I Can Help With</h2>
            <p>
              The strongest first freelance offer is small, useful cloud work:
              deployment, automation, documentation and troubleshooting.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <service.icon size={22} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section">
          <div className="section-copy centered">
            <p className="eyebrow">Working approach</p>
            <h2>Every Project Becomes Proof</h2>
          </div>
          <div className="process-grid">
            {["Build", "Troubleshoot", "Document", "Clean Up"].map((step, index) => (
              <article key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
                <p>
                  {
                    [
                      "Create the cloud resource, pipeline or automation in a hands-on lab.",
                      "Record errors, commands, fixes and the reason behind each decision.",
                      "Save code, screenshots, architecture notes and README files in GitHub.",
                      "Destroy temporary cloud resources and keep reusable code as proof."
                    ][index]
                  }
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="stack-section">
          <div className="section-copy">
            <p className="eyebrow">Technical stack</p>
            <h2>Tools and Skills</h2>
          </div>
          <div className="stack-grid">
            {stack.map(([title, text, Icon]) => (
              <article key={title}>
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div>
            <p className="eyebrow">Open to cloud and DevOps opportunities</p>
            <h2>Let’s build reliable cloud solutions.</h2>
            <p>
              Open to infrastructure setup, automation workflows, deployment support,
              and troubleshooting work for cloud-focused projects.
            </p>
          </div>
          <div className="contact-panel">
            <a href="mailto:bharthsuv123@gmail.com">
              <Mail size={18} /> bharthsuv123@gmail.com
            </a>
            <a href="tel:+919043388034">
              <Mail size={18} /> 9043388034
            </a>
            <a href="https://github.com/bharath00012" target="_blank" rel="noreferrer">
              <Github size={18} /> github.com/bharath00012
            </a>
            <a href="https://www.linkedin.com/in/bharath-kumar-7b0932257/" target="_blank" rel="noreferrer">
              <Linkedin size={18} /> linkedin.com/in/bharath-kumar-7b0932257
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Cloud DevOps Portfolio</p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}

function FlowNode({ icon: Icon, label, value }) {
  return (
    <div className="flow-node">
      <Icon size={20} />
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <article>
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}

function SectionHeader({ id, eyebrow, title, text }) {
  return (
    <section id={id} className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
}

function ProjectCard({ project }) {
  const Icon = project.icon;
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <div className="card-topline">
        <span className={project.status === "Completed" ? "status complete" : "status progress"}>
          {project.status}
        </span>
        <Icon size={24} />
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <ul>
        {project.impact.map((item) => (
          <li key={item}>
            <CheckCircle2 size={16} /> {item}
          </li>
        ))}
      </ul>
      <div className="tags">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}

createRoot(document.getElementById("root")).render(<App />);
