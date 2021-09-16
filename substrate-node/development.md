# Tfchain Substrate Node Development

## Run

Use Rust's native `cargo` command to build

```sh
cargo run --release -- --dev --tmp
```

## Release Build

The `cargo run` command will perform an initial build. Use the following command to build the node
without launching it:

```sh
cargo build --release
```

## Embedded Docs

Once the project has been built, the following command can be used to explore all parameters and
subcommands:

```sh
./target/release/tfchain -h
```

## Update the chain spec

When the [tfchain_pallets](https://github.com/threefoldtech/tfchain_pallets) have been updated, the chainspec needs to be updated if you want to start a new chain.

## Single-Node Development Chain

The provided `cargo run` command will launch a temporary node and its state will be discarded after
you terminate the process. After the project has been built, there are other ways to launch the
node.

This command will start the single-node development chain with persistent state:

```bash
./target/release/tfchain --dev
```

Purge the development chain's state:

```bash
./target/release/tfchain purge-chain --dev
```

Start the development chain with detailed logging:

```bash
RUST_LOG=debug RUST_BACKTRACE=1 ./target/release/tfchain -lruntime=debug --dev
```
