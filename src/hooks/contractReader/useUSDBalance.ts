import useContractReader from "./ContractReader";
import { BigNumber } from "@ethersproject/bignumber";
import { useContext } from "react";
import { UserContext } from "contexts/userContext";
import { NetworkContext } from "contexts/networkContext";
import { useFastFresh, useSlowFresh } from "hooks/useRefresh";

export function useUSDBalance() {
  const { userAddress } = useContext(NetworkContext);
  const { contracts } = useContext(UserContext);
  const slowRefresh = useSlowFresh();

  return useContractReader({
    contract: contracts?.USDC,
    functionName: "balanceOf",
    args: [userAddress],
    periodUpdate: slowRefresh,
  }) as BigNumber;
}
