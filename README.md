# HDML-Schemas

This repository contains **FlatBuffers** schema definitions for describing and transferring **HDML (Hyperdata Markup Language)** document structures over the network. These schemas facilitate efficient, compact, and cross-platform serialization of HDML documents for use in various web-based and distributed systems.

## Table of Contents
- [Introduction](#introduction)
- [What is HDML?](#what-is-hdml)
- [What is FlatBuffers?](#what-is-flatbuffers)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

HDML is a specialized markup language designed for modeling and organizing complex data relationships in a web-based environment. It uses a hierarchical structure to represent data in an interactive, structured format.

To enable efficient transmission of HDML documents over the network, this repository uses **FlatBuffers** schemas, which allow for fast and memory-efficient serialization and deserialization of hierarchical data.

## What is HDML?

HDML (Hyperdata Markup Language) provides a custom HTML component structure that allows for the modeling of complex data relationships. HDML supports features such as distributed documents, external document inclusion, and interaction with server-side processing.

## What is FlatBuffers?

[FlatBuffers](https://google.github.io/flatbuffers/) is an open-source serialization library developed by Google. It is designed for high-performance, cross-platform serialization, allowing for efficient memory use and fast data access. With FlatBuffers, you can store and access serialized data without unpacking or copying the data, making it ideal for network-based applications that need to transfer large amounts of hierarchical data like HDML documents.

## Repository Structure

```
├── .devcontainer
│ ├── devcontainer.json # VSCode dev container configuration
│ └── Dockerfile # Dev container docker file
│
├── src/ 
│ └── *.fbs # Schema files
│
├── lib/
│ ├── go/ # Generated Goalng library
│ └── ts/ # Generated Typescript library
│
└── README.md # Project documentation
```

## Getting Started

### Prerequisites

1. Install [Docker](https://www.docker.com/get-started) to use the **devcontainer** feature.
   
2. Clone this repository:

```bash
git clone git@github.com:HDML-Foundation/HDML-Schemas.git
cd HDML-Schemas
```

3. Install pre-commit hook:

```bash
cp ./scripts/pre-commit ./.git/hooks
chmod +x .git/hooks/pre-commit
```

4. Open the repository in a development environment that supports devcontainers (e.g., Visual Studio Code with the Dev Containers extension). The devcontainer will automatically set up everything you need, including the FlatBuffers compiler.

5. The FlatBuffers compilation is handled automatically by a pre-commit hook, so you don’t need to run `flatc` manually. Every time you commit changes, the schemas will be compiled as needed.

## Contributing

Contributions to this project are welcome! To contribute:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Commit your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Create a new Pull Request.
- Please ensure your code adheres to the project's coding standards.

## License

This project is licensed under the Apache License Version 2.0. See the [LICENSE](https://github.com/HDML-Foundation/HDML-Schemas/blob/main/LICENSE) file for details.