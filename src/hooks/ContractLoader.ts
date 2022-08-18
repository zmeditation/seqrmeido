import { Contract } from "@ethersproject/contracts";
import { JsonRpcProvider, JsonRpcSigner } from "@ethersproject/providers";

import { NetworkContext } from "contexts/networkContext";
import { Contracts, ContractName } from "models/contracts";
import { useContext, useEffect, useState } from "react";

import { readProvider } from "constants/readProvider";

export function useContractLoader() {
  const [contracts, setContracts] = useState<Contracts>();

  const { signingProvider } = useContext(NetworkContext);

  useEffect(() => {
    async function loadContracts() {
      try {
        // Contracts can be used read-only without a signer, but require a signer to create transactions.
        const signerOrProvider = signingProvider?.getSigner() ?? readProvider;

        const newContracts = Object.values(ContractName).reduce(
          (accumulator, ContractName) => ({
            ...accumulator,
            [ContractName]: loadContract(ContractName, signerOrProvider),
          }),
          {} as Contracts
        );
        setContracts(newContracts);
      } catch (e) {
        console.log("CONTRACT LOADER ERROR:", e);
      }
    }

    loadContracts();
  }, [signingProvider, setContracts]);

  return contracts;
}

const loadContract = (
  contractName: keyof typeof ContractName,
  signerOrProvider: JsonRpcSigner | JsonRpcProvider
): Contract => {
  let contract = require(`config/abi/${contractName}.json`);
  return new Contract(contract.address, contract.abi, signerOrProvider);
};
