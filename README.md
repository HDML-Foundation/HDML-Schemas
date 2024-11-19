# HDML-Schemas

This repository contains **FlatBuffers** schema definitions for describing and transferring **HDML (Hyperdata Markup Language)** document structures over the network. These schemas facilitate efficient, compact, and cross-platform serialization of HDML documents for use in various web-based and distributed systems.

## Introduction

HDML is a specialized markup language designed for modeling and organizing complex data relationships in a web-based environment. It uses a hierarchical structure to represent data in an interactive, structured format.

To enable efficient transmission of HDML documents over the network, this repository uses **FlatBuffers** schemas, which allow for fast and memory-efficient serialization and deserialization of hierarchical data.

## What is HDML?

HDML (Hyperdata Markup Language) provides a custom HTML component structure that allows for the modeling of complex data relationships. HDML supports features such as distributed documents, external document inclusion, and interaction with server-side processing.

## What is FlatBuffers?

[FlatBuffers](https://google.github.io/flatbuffers/) is an open-source serialization library developed by Google. It is designed for high-performance, cross-platform serialization, allowing for efficient memory use and fast data access. With FlatBuffers, you can store and access serialized data without unpacking or copying the data, making it ideal for network-based applications that need to transfer large amounts of hierarchical data like HDML documents.

## Contributing

Contributions to this project are welcome! To contribute:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Commit your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Create a new Pull Request.
- Please ensure your code adheres to the project's coding standards.

## License

This project is licensed under the Apache License Version 2.0.