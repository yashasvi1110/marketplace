/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface ConverterInterface extends utils.Interface {
  functions: {
    "calcNeededTokensForEther(address,uint256)": FunctionFragment;
    "getTrader()": FunctionFragment;
    "swapEtherToToken(address)": FunctionFragment;
    "swapTokenToEther(address,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "calcNeededTokensForEther"
      | "getTrader"
      | "swapEtherToToken"
      | "swapTokenToEther"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "calcNeededTokensForEther",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "getTrader", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "swapEtherToToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokenToEther",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "calcNeededTokensForEther",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTrader", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapEtherToToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokenToEther",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Converter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConverterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    calcNeededTokensForEther(
      _dstToken: PromiseOrValue<string>,
      _etherAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTrader(overrides?: CallOverrides): Promise<[string]>;

    swapEtherToToken(
      _dstToken: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapTokenToEther(
      _srcToken: PromiseOrValue<string>,
      _srcAmount: PromiseOrValue<BigNumberish>,
      _maxDstAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  calcNeededTokensForEther(
    _dstToken: PromiseOrValue<string>,
    _etherAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTrader(overrides?: CallOverrides): Promise<string>;

  swapEtherToToken(
    _dstToken: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapTokenToEther(
    _srcToken: PromiseOrValue<string>,
    _srcAmount: PromiseOrValue<BigNumberish>,
    _maxDstAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    calcNeededTokensForEther(
      _dstToken: PromiseOrValue<string>,
      _etherAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTrader(overrides?: CallOverrides): Promise<string>;

    swapEtherToToken(
      _dstToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapTokenToEther(
      _srcToken: PromiseOrValue<string>,
      _srcAmount: PromiseOrValue<BigNumberish>,
      _maxDstAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { dstAmount: BigNumber; srcRemainder: BigNumber }
    >;
  };

  filters: {};

  estimateGas: {
    calcNeededTokensForEther(
      _dstToken: PromiseOrValue<string>,
      _etherAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTrader(overrides?: CallOverrides): Promise<BigNumber>;

    swapEtherToToken(
      _dstToken: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapTokenToEther(
      _srcToken: PromiseOrValue<string>,
      _srcAmount: PromiseOrValue<BigNumberish>,
      _maxDstAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calcNeededTokensForEther(
      _dstToken: PromiseOrValue<string>,
      _etherAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTrader(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swapEtherToToken(
      _dstToken: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapTokenToEther(
      _srcToken: PromiseOrValue<string>,
      _srcAmount: PromiseOrValue<BigNumberish>,
      _maxDstAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}