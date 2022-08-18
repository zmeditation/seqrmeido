import { Contract } from "@ethersproject/contracts";

export enum ContractName {
  USDC = "USDC",
  BZetta = "BZetta",
  DZetta = "DZetta",
  LDZetta = "LDZetta",
}

export type Contracts = Record<ContractName, Contract>;
