var config = {
  core_asset: "CORE",
  address_prefix: "GPH",
  expire_in_secs: 15,
  expire_in_secs_proposal: 24 * 60 * 60,
  review_in_secs_committee: 24 * 60 * 60,
  networks: {
    Onest: {
      core_asset: "ONS",
      address_prefix: "ONS",
      chain_id:
        "63ebe72f626d7fc4d66e734b14ddfbe2955317279c008817a38d069e73131feb"
    },
    Muse: {
      core_asset: "MUSE",
      address_prefix: "MUSE",
      chain_id:
        "45ad2d3f9ef92a49b55c2227eb06123f613bb35dd08bd876f2aea21925a67a67"
    },
    Test: {
      core_asset: "TEST",
      address_prefix: "TEST",
      chain_id:
        "39f5e2ede1f8bc1a3a54a7914414e3779e33193f1f5693510e73cb7a87617447"
    },
    Obelisk: {
      core_asset: "GOV",
      address_prefix: "FEW",
      chain_id:
        "1cfde7c388b9e8ac06462d68aadbd966b58f88797637d9af805b4560b0e9661e"
    }
  },

  /** Set a few properties for known chain IDs. */
  setChainId: chain_id => {
    let result = Object.entries(config.networks).find(
      ([network_name, network]) => {
        if (network.chain_id === chain_id) {
          config.network_name = network_name;

          if (network.address_prefix) {
            config.address_prefix = network.address_prefix;
          }
          return true;
        }
      }
    );

    if (result) return { network_name: result[0], network: result[1] };
    else console.log("Unknown chain id (this may be a testnet)", chain_id);
  },

  reset: () => {
    config.core_asset = "CORE";
    config.address_prefix = "GPH";
    config.expire_in_secs = 15;
    config.expire_in_secs_proposal = 24 * 60 * 60;

    console.log("Chain config reset");
  },

  setPrefix: (prefix = "GPH") => (config.address_prefix = prefix)
};

export default config;
