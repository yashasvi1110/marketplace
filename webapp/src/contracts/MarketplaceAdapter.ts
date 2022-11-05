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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface MarketplaceAdapterInterface extends utils.Interface {
  functions: {
    "ADAPTER_FEE_MAX()": FunctionFragment;
    "ADAPTER_FEE_PRECISION()": FunctionFragment;
    "adapterFeesCollector()": FunctionFragment;
    "adapterTransactionFee()": FunctionFragment;
    "buy(address,uint256,address,bytes,uint256,uint8,address)": FunctionFragment;
    "buy(address,uint256,address,bytes,uint256,address,uint256,uint8,address)": FunctionFragment;
    "buy(address,bytes,uint256,address,uint256)": FunctionFragment;
    "buy(address,bytes,uint256)": FunctionFragment;
    "converterAddress()": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "onERC721Received(address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setAdapterFee(uint256)": FunctionFragment;
    "setConverter(address)": FunctionFragment;
    "setFeesCollector(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ADAPTER_FEE_MAX"
      | "ADAPTER_FEE_PRECISION"
      | "adapterFeesCollector"
      | "adapterTransactionFee"
      | "buy(address,uint256,address,bytes,uint256,uint8,address)"
      | "buy(address,uint256,address,bytes,uint256,address,uint256,uint8,address)"
      | "buy(address,bytes,uint256,address,uint256)"
      | "buy(address,bytes,uint256)"
      | "converterAddress"
      | "onERC721Received(address,address,uint256,bytes)"
      | "onERC721Received(address,uint256,bytes)"
      | "owner"
      | "renounceOwnership"
      | "setAdapterFee"
      | "setConverter"
      | "setFeesCollector"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ADAPTER_FEE_MAX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ADAPTER_FEE_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "adapterFeesCollector",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "adapterTransactionFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buy(address,uint256,address,bytes,uint256,uint8,address)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "buy(address,uint256,address,bytes,uint256,address,uint256,uint8,address)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "buy(address,bytes,uint256,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "buy(address,bytes,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "converterAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received(address,address,uint256,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received(address,uint256,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAdapterFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setConverter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeesCollector",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "ADAPTER_FEE_MAX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ADAPTER_FEE_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adapterFeesCollector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adapterTransactionFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buy(address,uint256,address,bytes,uint256,uint8,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buy(address,uint256,address,bytes,uint256,address,uint256,uint8,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buy(address,bytes,uint256,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buy(address,bytes,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "converterAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received(address,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received(address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAdapterFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setConverter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeesCollector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AdapterFeeChange(uint256,uint256)": EventFragment;
    "ExecutedOrder(address,uint256,address,uint256,uint256)": EventFragment;
    "ExecutedOrder(address,uint256,uint256,bytes)": EventFragment;
    "FeesCollectorChange(address)": EventFragment;
    "MarketplaceAllowance(address,bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SetConverter(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdapterFeeChange"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ExecutedOrder(address,uint256,address,uint256,uint256)"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ExecutedOrder(address,uint256,uint256,bytes)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeesCollectorChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketplaceAllowance"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetConverter"): EventFragment;
}

export interface AdapterFeeChangeEventObject {
  previousFee: BigNumber;
  newFee: BigNumber;
}
export type AdapterFeeChangeEvent = TypedEvent<
  [BigNumber, BigNumber],
  AdapterFeeChangeEventObject
>;

export type AdapterFeeChangeEventFilter =
  TypedEventFilter<AdapterFeeChangeEvent>;

export interface ExecutedOrder_address_uint256_address_uint256_uint256_EventObject {
  registry: string;
  tokenId: BigNumber;
  marketplace: string;
  orderValue: BigNumber;
  orderFees: BigNumber;
}
export type ExecutedOrder_address_uint256_address_uint256_uint256_Event =
  TypedEvent<
    [string, BigNumber, string, BigNumber, BigNumber],
    ExecutedOrder_address_uint256_address_uint256_uint256_EventObject
  >;

export type ExecutedOrder_address_uint256_address_uint256_uint256_EventFilter =
  TypedEventFilter<ExecutedOrder_address_uint256_address_uint256_uint256_Event>;

export interface ExecutedOrder_address_uint256_uint256_bytes_EventObject {
  marketplace: string;
  orderValue: BigNumber;
  orderFees: BigNumber;
  marketplaceData: string;
}
export type ExecutedOrder_address_uint256_uint256_bytes_Event = TypedEvent<
  [string, BigNumber, BigNumber, string],
  ExecutedOrder_address_uint256_uint256_bytes_EventObject
>;

export type ExecutedOrder_address_uint256_uint256_bytes_EventFilter =
  TypedEventFilter<ExecutedOrder_address_uint256_uint256_bytes_Event>;

export interface FeesCollectorChangeEventObject {
  collector: string;
}
export type FeesCollectorChangeEvent = TypedEvent<
  [string],
  FeesCollectorChangeEventObject
>;

export type FeesCollectorChangeEventFilter =
  TypedEventFilter<FeesCollectorChangeEvent>;

export interface MarketplaceAllowanceEventObject {
  marketplace: string;
  value: boolean;
}
export type MarketplaceAllowanceEvent = TypedEvent<
  [string, boolean],
  MarketplaceAllowanceEventObject
>;

export type MarketplaceAllowanceEventFilter =
  TypedEventFilter<MarketplaceAllowanceEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SetConverterEventObject {
  converter: string;
}
export type SetConverterEvent = TypedEvent<[string], SetConverterEventObject>;

export type SetConverterEventFilter = TypedEventFilter<SetConverterEvent>;

export interface MarketplaceAdapter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketplaceAdapterInterface;

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
    ADAPTER_FEE_MAX(overrides?: CallOverrides): Promise<[BigNumber]>;

    ADAPTER_FEE_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    adapterFeesCollector(overrides?: CallOverrides): Promise<[string]>;

    adapterTransactionFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    "buy(address,uint256,address,bytes,uint256,uint8,address)"(
      _registry: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _marketplace: PromiseOrValue<string>,
      _encodedCallData: PromiseOrValue<BytesLike>,
      _orderAmount: PromiseOrValue<BigNumberish>,
      _transferType: PromiseOrValue<BigNumberish>,
      _beneficiary: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "buy(address,uint256,address,bytes,uint256,address,uint256,uint8,address)"(
      _registry: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _marketplace: PromiseOrValue<string>,
      _encodedCallData: PromiseOrValue<BytesLike>,
      _orderAmount: PromiseOrValue<BigNumberish>,
      _paymentToken: PromiseOrValue<string>,
      _maxPaymentTokenAmount: PromiseOrValue<BigNumberish>,
      _transferType: PromiseOrValue<BigNumberish>,
      _beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "buy(address,bytes,uint256,address,uint256)"(
      _marketplace: PromiseOrValue<string>,
      _encodedCallData: PromiseOrValue<BytesLike>,
      _orderAmount: PromiseOrValue<BigNumberish>,
      _paymentToken: PromiseOrValue<string>,
      _maxPaymentTokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "buy(address,bytes,uint256)"(
      _marketplace: PromiseOrValue<string>,
      _encodedCallData: PromiseOrValue<BytesLike>,
      _orderAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    converterAddress(overrides?: CallOverrides): Promise<[string]>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "onERC721Received(address,uint256,bytes)"(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAdapterFee(
      _transactionFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setConverter(
      _converter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFeesCollector(
      _collector: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  ADAPTER_FEE_MAX(overrides?: CallOverrides): Promise<BigNumber>;

  ADAPTER_FEE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  adapterFeesCollector(overrides?: CallOverrides): Promise<string>;

  adapterTransactionFee(overrides?: CallOverrides): Promise<BigNumber>;

  "buy(address,uint256,address,bytes,uint256,uint8,address)"(
    _registry: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _marketplace: PromiseOrValue<string>,
    _encodedCallData: PromiseOrValue<BytesLike>,
    _orderAmount: PromiseOrValue<BigNumberish>,
    _transferType: PromiseOrValue<BigNumberish>,
    _beneficiary: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "buy(address,uint256,address,bytes,uint256,address,uint256,uint8,address)"(
    _registry: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _marketplace: PromiseOrValue<string>,
    _encodedCallData: PromiseOrValue<BytesLike>,
    _orderAmount: PromiseOrValue<BigNumberish>,
    _paymentToken: PromiseOrValue<string>,
    _maxPaymentTokenAmount: PromiseOrValue<BigNumberish>,
    _transferType: PromiseOrValue<BigNumberish>,
    _beneficiary: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "buy(address,bytes,uint256,address,uint256)"(
    _marketplace: PromiseOrValue<string>,
    _encodedCallData: PromiseOrValue<BytesLike>,
    _orderAmount: PromiseOrValue<BigNumberish>,
    _paymentToken: PromiseOrValue<string>,
    _maxPaymentTokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "buy(address,bytes,uint256)"(
    _marketplace: PromiseOrValue<string>,
    _encodedCallData: PromiseOrValue<BytesLike>,
    _orderAmount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  converterAddress(overrides?: CallOverrides): Promise<string>;

  "onERC721Received(address,address,uint256,bytes)"(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "onERC721Received(address,uint256,bytes)"(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAdapterFee(
    _transactionFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setConverter(
    _converter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFeesCollector(
    _collector: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ADAPTER_FEE_MAX(overrides?: CallOverrides): Promise<BigNumber>;

    ADAPTER_FEE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    adapterFeesCollector(overrides?: CallOverrides): Promise<string>;

    adapterTransactionFee(overrides?: CallOverrides): Promise<BigNumber>;

    "buy(address,uint256,address,bytes,uint256,uint8,address)"(
      _registry: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _marketplace: PromiseOrValue<string>,
      _encodedCallData: PromiseOrValue<BytesLike>,
      _orderAmount: PromiseOrValue<BigNumberish>,
      _transferType: PromiseOrValue<BigNumberish>,
      _beneficiary: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "buy(address,uint256,address,bytes,uint256,address,uint256,uint8,address)"(
      _registry: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _marketplace: PromiseOrValue<string>,
      _encodedCallData: PromiseOrValue<BytesLike>,
      _orderAmount: PromiseOrValue<BigNumberish>,
      _paymentToken: PromiseOrValue<string>,
      _maxPaymentTokenAmount: PromiseOrValue<BigNumberish>,
      _transferType: PromiseOrValue<BigNumberish>,
      _beneficiary: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "buy(address,bytes,uint256,address,uint256)"(
      _marketplace: PromiseOrValue<string>,
      _encodedCallData: PromiseOrValue<BytesLike>,
      _orderAmount: PromiseOrValue<BigNumberish>,
      _paymentToken: PromiseOrValue<string>,
      _maxPaymentTokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "buy(address,bytes,uint256)"(
      _marketplace: PromiseOrValue<string>,
      _encodedCallData: PromiseOrValue<BytesLike>,
      _orderAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    converterAddress(overrides?: CallOverrides): Promise<string>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC721Received(address,uint256,bytes)"(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setAdapterFee(
      _transactionFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setConverter(
      _converter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeesCollector(
      _collector: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdapterFeeChange(uint256,uint256)"(
      previousFee?: null,
      newFee?: null
    ): AdapterFeeChangeEventFilter;
    AdapterFeeChange(
      previousFee?: null,
      newFee?: null
    ): AdapterFeeChangeEventFilter;

    "ExecutedOrder(address,uint256,address,uint256,uint256)"(
      registry?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      marketplace?: PromiseOrValue<string> | null,
      orderValue?: null,
      orderFees?: null
    ): ExecutedOrder_address_uint256_address_uint256_uint256_EventFilter;
    "ExecutedOrder(address,uint256,uint256,bytes)"(
      marketplace?: PromiseOrValue<string> | null,
      orderValue?: null,
      orderFees?: null,
      marketplaceData?: null
    ): ExecutedOrder_address_uint256_uint256_bytes_EventFilter;

    "FeesCollectorChange(address)"(
      collector?: PromiseOrValue<string> | null
    ): FeesCollectorChangeEventFilter;
    FeesCollectorChange(
      collector?: PromiseOrValue<string> | null
    ): FeesCollectorChangeEventFilter;

    "MarketplaceAllowance(address,bool)"(
      marketplace?: PromiseOrValue<string> | null,
      value?: null
    ): MarketplaceAllowanceEventFilter;
    MarketplaceAllowance(
      marketplace?: PromiseOrValue<string> | null,
      value?: null
    ): MarketplaceAllowanceEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "SetConverter(address)"(
      converter?: PromiseOrValue<string> | null
    ): SetConverterEventFilter;
    SetConverter(
      converter?: PromiseOrValue<string> | null
    ): SetConverterEventFilter;
  };

  estimateGas: {
    ADAPTER_FEE_MAX(overrides?: CallOverrides): Promise<BigNumber>;

    ADAPTER_FEE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    adapterFeesCollector(overrides?: CallOverrides): Promise<BigNumber>;

    adapterTransactionFee(overrides?: CallOverrides): Promise<BigNumber>;

    "buy(address,uint256,address,bytes,uint256,uint8,address)"(
      _registry: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _marketplace: PromiseOrValue<string>,
      _encodedCallData: PromiseOrValue<BytesLike>,
      _orderAmount: PromiseOrValue<BigNumberish>,
      _transferType: PromiseOrValue<BigNumberish>,
      _beneficiary: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "buy(address,uint256,address,bytes,uint256,address,uint256,uint8,address)"(
      _registry: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _marketplace: PromiseOrValue<string>,
      _encodedCallData: PromiseOrValue<BytesLike>,
      _orderAmount: PromiseOrValue<BigNumberish>,
      _paymentToken: PromiseOrValue<string>,
      _maxPaymentTokenAmount: PromiseOrValue<BigNumberish>,
      _transferType: PromiseOrValue<BigNumberish>,
      _beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "buy(address,bytes,uint256,address,uint256)"(
      _marketplace: PromiseOrValue<string>,
      _encodedCallData: PromiseOrValue<BytesLike>,
      _orderAmount: PromiseOrValue<BigNumberish>,
      _paymentToken: PromiseOrValue<string>,
      _maxPaymentTokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "buy(address,bytes,uint256)"(
      _marketplace: PromiseOrValue<string>,
      _encodedCallData: PromiseOrValue<BytesLike>,
      _orderAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    converterAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "onERC721Received(address,uint256,bytes)"(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAdapterFee(
      _transactionFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setConverter(
      _converter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFeesCollector(
      _collector: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADAPTER_FEE_MAX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ADAPTER_FEE_PRECISION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    adapterFeesCollector(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    adapterTransactionFee(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "buy(address,uint256,address,bytes,uint256,uint8,address)"(
      _registry: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _marketplace: PromiseOrValue<string>,
      _encodedCallData: PromiseOrValue<BytesLike>,
      _orderAmount: PromiseOrValue<BigNumberish>,
      _transferType: PromiseOrValue<BigNumberish>,
      _beneficiary: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "buy(address,uint256,address,bytes,uint256,address,uint256,uint8,address)"(
      _registry: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _marketplace: PromiseOrValue<string>,
      _encodedCallData: PromiseOrValue<BytesLike>,
      _orderAmount: PromiseOrValue<BigNumberish>,
      _paymentToken: PromiseOrValue<string>,
      _maxPaymentTokenAmount: PromiseOrValue<BigNumberish>,
      _transferType: PromiseOrValue<BigNumberish>,
      _beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "buy(address,bytes,uint256,address,uint256)"(
      _marketplace: PromiseOrValue<string>,
      _encodedCallData: PromiseOrValue<BytesLike>,
      _orderAmount: PromiseOrValue<BigNumberish>,
      _paymentToken: PromiseOrValue<string>,
      _maxPaymentTokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "buy(address,bytes,uint256)"(
      _marketplace: PromiseOrValue<string>,
      _encodedCallData: PromiseOrValue<BytesLike>,
      _orderAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    converterAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "onERC721Received(address,uint256,bytes)"(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAdapterFee(
      _transactionFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setConverter(
      _converter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFeesCollector(
      _collector: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
