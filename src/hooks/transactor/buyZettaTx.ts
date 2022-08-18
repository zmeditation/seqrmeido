import { BZettaAddress, LDZettaAddress } from "config";
import { UserContext } from "contexts/userContext";
import { BigNumber } from "ethers";
import { TransactorInstance } from "hooks/Transactor";
import { useContext } from "react";

export function useBuyZettaTx(
  contractAddress: string
): TransactorInstance<{ value: BigNumber }> {
  const { transactor, contracts } = useContext(UserContext);

  return ({ value }, txOpts) => {
    const contract =
      contractAddress == BZettaAddress
        ? contracts?.BZetta
        : contractAddress == LDZettaAddress
        ? contracts?.LDZetta
        : contracts?.DZetta;

    if (!transactor || !contract) {
      txOpts?.onDone?.();
      return Promise.resolve(false);
    }
    return transactor(contract, "mint", [value], txOpts);
  };
}
