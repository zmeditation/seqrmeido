import { BigNumber } from "ethers";
import useContractReader from "./contractReader/ContractReader";
import { NetworkContext } from "contexts/networkContext";
import { useContext } from "react";
import { UserContext } from "contexts/userContext";

/** Returns total supply of tokens for project with `projectId`. */
export function useAllowance(spender: string) {
  const { userAddress } = useContext(NetworkContext);
  const { contracts } = useContext(UserContext);
  return useContractReader<BigNumber>({
    contract: contracts?.USDC,
    functionName: "allowance",
    args: [userAddress, spender],
    updateOn: [
      {
        contract: contracts?.USDC,
        eventName: "Approval",
        topics: [userAddress ?? "", spender],
      },
    ],
  });
}
