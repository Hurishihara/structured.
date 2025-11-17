import { implement } from "@orpc/server";
import { contract } from "../../infrastructure/api/main.contract";
import { authRouter } from "./auth.router";

const os = implement(contract);

export const router = os.router({
    auth: authRouter
})