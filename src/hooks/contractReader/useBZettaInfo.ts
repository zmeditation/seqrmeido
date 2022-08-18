import useContractReader from "./ContractReader";
import { BigNumber } from "@ethersproject/bignumber";
import { useContext } from "react";
import { UserContext } from "contexts/userContext";
import { NetworkContext } from "contexts/networkContext";
import { useFastFresh, useSlowFresh } from "hooks/useRefresh";

export const useBZettaUSDCRate = () => {
  const { contracts } = useContext(UserContext);
  const slowRefresh = useSlowFresh();

  return useContractReader({
    contract: contracts?.BZetta,
    functionName: "rate",
    args: [],
    updateOn: [
      {
        contract: contracts?.BZetta,
        eventName: "SetRate",
      },
    ],
    periodUpdate: slowRefresh,
  }) as BigNumber;
};

export function useBZettaBTCReward() {
  const { userAddress } = useContext(NetworkContext);
  const { contracts } = useContext(UserContext);
  const slowRefresh = useSlowFresh();

  return useContractReader({
    contract: contracts?.BZetta,
    functionName: "currentRewards",
    args: [userAddress],
    updateOn: [
      {
        contract: contracts?.BZetta,
        eventName: "DistributeRewards",
        topics: [],
      },
      {
        contract: contracts?.BZetta,
        eventName: "SetRewardPerZetta",
        topics: [],
      },
    ],
    periodUpdate: slowRefresh,
  }) as BigNumber;
}

export function useBZettaBalance() {
  const { userAddress } = useContext(NetworkContext);
  const { contracts } = useContext(UserContext);
  const slowRefresh = useSlowFresh();

  return useContractReader({
    contract: contracts?.BZetta,
    functionName: "balanceOfAddress",
    args: [userAddress],
    updateOn: [
      {
        contract: contracts?.BZetta,
        eventName: "DistributeRewards",
        topics: [],
      },
      {
        contract: contracts?.BZetta,
        eventName: "TransferSingle",
        topics: undefined,
      },
    ],
    periodUpdate: slowRefresh,
  }) as BigNumber;
}

export function useRewardPerZetta() {
  const { contracts } = useContext(UserContext);
  const slowRefresh = useSlowFresh();

  return useContractReader({
    contract: contracts?.BZetta,
    functionName: "rewardPerZetta",
    args: [],
    periodUpdate: slowRefresh,
  }) as BigNumber;
}

export function useTotalBTCRewards() {
  const { userAddress } = useContext(NetworkContext);
  const { contracts } = useContext(UserContext);
  const slowRefresh = useSlowFresh();

  return useContractReader({
    contract: contracts?.BZetta,
    functionName: "rewards",
    args: [userAddress],
    updateOn: [
      {
        contract: contracts?.BZetta,
        eventName: "DistributeRewards",
        topics: [],
      },
    ],
    periodUpdate: slowRefresh,
  }) as BigNumber;
}
