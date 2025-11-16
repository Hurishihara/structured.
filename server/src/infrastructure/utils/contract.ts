import type { InferContractRouterInputs, InferContractRouterOutputs } from "@orpc/contract";
import { contract } from "../api/main.contract";

export type Inputs = InferContractRouterInputs<typeof contract>;
export type Outputs = InferContractRouterOutputs<typeof contract>;

type LoginInput = Inputs['auth']['login'];
type LoginOutput = Outputs['auth']['login'];