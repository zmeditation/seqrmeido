import useContractReader from "./ContractReader";
import { BigNumber } from "@ethersproject/bignumber";
import { useContext } from "react";
import { UserContext } from "contexts/userContext";
import { NetworkContext } from "contexts/networkContext";
import { useFastFresh, useSlowFresh } from "hooks/useRefresh";

export function useLDZettaBalance() {
  const { userAddress } = useContext(NetworkContext);
  const { contracts } = useContext(UserContext);
  const slowRefresh = useSlowFresh();

  return useContractReader({
    contract: contracts?.LDZetta,
    functionName: "balanceOfAddress",
    args: [userAddress],
    updateOn: [
      {
        contract: contracts?.LDZetta,
        eventName: "DistributeRewards",
        topics: [],
      },
      {
        contract: contracts?.LDZetta,
        eventName: "TransferSingle",
        topics: [userAddress ?? "", ""],
      },
    ],
    periodUpdate: slowRefresh,
  }) as BigNumber;
}

export const useLDZettaUSDCRate = () => {
  const { contracts } = useContext(UserContext);
  const slowRefresh = useSlowFresh();

  return useContractReader({
    contract: contracts?.LDZetta,
    functionName: "rate",
    args: [],
    updateOn: [
      {
        contract: contracts?.LDZetta,
        eventName: "SetRate",
      },
    ],
    periodUpdate: slowRefresh,
  }) as BigNumber;
};

export const useLDZettaLTCReward = () => {
  const { userAddress } = useContext(NetworkContext);
  const { contracts } = useContext(UserContext);
  const slowRefresh = useSlowFresh();

  return useContractReader({
    contract: contracts?.LDZetta,
    functionName: "currentLTCRewards",
    args: [userAddress],
    updateOn: [
      {
        contract: contracts?.LDZetta,
        eventName: "DistributeRewards",
        topics: [],
      },
      {
        contract: contracts?.LDZetta,
        eventName: "SetLTCRewardPerZetta",
        topics: [],
      },
    ],
    periodUpdate: slowRefresh,
  }) as BigNumber;
};

export const useLDZettaDOGEReward = () => {
  const { userAddress } = useContext(NetworkContext);
  const { contracts } = useContext(UserContext);
  const slowRefresh = useSlowFresh();

  return useContractReader({
    contract: contracts?.LDZetta,
    functionName: "currentDOGERewards",
    args: [userAddress],
    updateOn: [
      {
        contract: contracts?.LDZetta,
        eventName: "DistributeRewards",
        topics: [],
      },
      {
        contract: contracts?.LDZetta,
        eventName: "setRewardPerZetta",
        topics: [],
      },
    ],
    periodUpdate: slowRefresh,
  }) as BigNumber;
};

export function useTotalLTCRewards() {
  const { userAddress } = useContext(NetworkContext);
  const { contracts } = useContext(UserContext);
  const slowRefresh = useSlowFresh();

  return useContractReader({
    contract: contracts?.LDZetta,
    functionName: "ltcRewards",
    args: [userAddress],
    updateOn: [
      {
        contract: contracts?.LDZetta,
        eventName: "DistributeRewards",
        topics: [],
      },
    ],
    periodUpdate: slowRefresh,
  }) as BigNumber;
}

export function useTotalDOGERewards() {
  const { userAddress } = useContext(NetworkContext);
  const { contracts } = useContext(UserContext);
  const slowRefresh = useSlowFresh();

  return useContractReader({
    contract: contracts?.LDZetta,
    functionName: "dogeRewards",
    args: [userAddress],
    updateOn: [
      {
        contract: contracts?.LDZetta,
        eventName: "DistributeRewards",
        topics: [],
      },
    ],
    periodUpdate: slowRefresh,
  }) as BigNumber;
}

export function useLTCRewardPerZetta() {
  const { contracts } = useContext(UserContext);
  const slowRefresh = useSlowFresh();

  return useContractReader({
    contract: contracts?.LDZetta,
    functionName: "ltcPerZetta",
    args: [],
    periodUpdate: slowRefresh,
  }) as BigNumber;
}

export function useDOGERewardPerZetta() {
  const { contracts } = useContext(UserContext);
  const slowRefresh = useSlowFresh();

  return useContractReader({
    contract: contracts?.LDZetta,
    functionName: "dogePerZetta",
    args: [],
    periodUpdate: slowRefresh,
  }) as BigNumber;
}
