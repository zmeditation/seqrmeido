import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { truncateAddress } from "../utils";
import { NetworkContext } from "contexts/networkContext";

interface ConnectWalletButtonProps {}

export const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = (
  props: ConnectWalletButtonProps
) => {
  const { t } = useTranslation();

  const { onSelectWallet, userAddress, onLogOut } = useContext(NetworkContext);

  const connect = async () => {
    if (onSelectWallet) await onSelectWallet();
  };

  function disconnect() {
    if (onLogOut) onLogOut();
  }

  return (
    <>
      <button
        data-toggle="modal"
        data-target="#login-popup"
        className="btn btn-rg btn-auto btn-outline btn-grad on-bg-theme btn-round"
        onClick={userAddress ? disconnect : connect}
      >
        <span>
          {userAddress ? truncateAddress(userAddress) : t("CONNECT WALLET")}
        </span>
      </button>
    </>
  );
};

export default ConnectWalletButton;
