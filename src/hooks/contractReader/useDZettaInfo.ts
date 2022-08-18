import useContractReader from "./ContractReader";
import { BigNumber } from "@ethersproject/bignumber";
import { useContext } from "react";
import { UserContext } from "contexts/userContext";
import { NetworkContext } from "contexts/networkContext";
import { useFastFresh, useSlowFresh } from "hooks/useRefresh";

export function useDZettaBalance() {
  const { userAddress } = useContext(NetworkContext);
  const { contracts } = useContext(UserContext);
  const slowRefresh = useSlowFresh();

  return useContractReader({
    contract: contracts?.DZetta,
    functionName: "balanceOfAddress",
    args: [userAddress],
    updateOn: [
      {
        contract: contracts?.DZetta,
        eventName: "DistributeRewards",
        topics: [],
      },
      {
        contract: contracts?.DZetta,
        eventName: "TransferSingle",
        topics: [userAddress ?? "", ""],
      },
    ],
    periodUpdate: slowRefresh,
  }) as BigNumber;
}

export const useDZettaUSDCRate = () => {
  const { contracts } = useContext(UserContext);
  const slowRefresh = useSlowFresh();

  return useContractReader({
    contract: contracts?.DZetta,
    functionName: "rate",
    args: [],
    updateOn: [
      {
        contract: contracts?.DZetta,
        eventName: "SetRate",
      },
    ],
    periodUpdate: slowRefresh,
  }) as BigNumber;
};

export const useDZettaDOGEReward = () => {
  const { userAddress } = useContext(NetworkContext);
  const { contracts } = useContext(UserContext);
  const slowRefresh = useSlowFresh();

  return useContractReader({
    contract: contracts?.DZetta,
    functionName: "currentDOGERewards",
    args: [userAddress],
    updateOn: [
      {
        contract: contracts?.DZetta,
        eventName: "DistributeRewards",
        topics: [],
      },
      {
        contract: contracts?.DZetta,
        eventName: "setRewardPerZetta",
        topics: [],
      },
    ],
    periodUpdate: slowRefresh,
  }) as BigNumber;
};

export function useDZettaTotalDOGERewards() {
  const { userAddress } = useContext(NetworkContext);
  const { contracts } = useContext(UserContext);
  const slowRefresh = useSlowFresh();

  return useContractReader({
    contract: contracts?.DZetta,
    functionName: "dogeRewards",
    args: [userAddress],
    updateOn: [
      {
        contract: contracts?.DZetta,
        eventName: "DistributeRewards",
        topics: [],
      },
    ],
    periodUpdate: slowRefresh,
  }) as BigNumber;
}

export function useDZettaDOGERewardPerZetta() {
  const { contracts } = useContext(UserContext);
  const slowRefresh = useSlowFresh();

  return useContractReader({
    contract: contracts?.DZetta,
    functionName: "dogePerZetta",
    args: [],
    periodUpdate: slowRefresh,
  }) as BigNumber;
}
