import { NetworkContext } from "contexts/networkContext";
import { UserContext } from "contexts/userContext";
import { BigNumber } from "ethers";
import { useContext } from "react";
import { TransactorInstance } from "./Transactor";

const MaxUint256: BigNumber = /*#__PURE__*/ BigNumber.from(
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
);

export function useApproveCallback(spender: string): TransactorInstance<{}> {
  const { transactor, contracts } = useContext(UserContext);
  const { userAddress } = useContext(NetworkContext);

  return ({}, txOpts) => {
    if (!transactor || !userAddress || !contracts?.USDC) {
      txOpts?.onDone?.();
      return Promise.resolve(false);
    }

    const args = [spender, MaxUint256];

    return transactor(contracts?.USDC, "approve", args, txOpts);
  };
}
