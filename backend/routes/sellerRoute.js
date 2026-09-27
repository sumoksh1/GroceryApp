import express from "express";
import { sellerLogin, isSellerAuth, sellerLogout } from "../controllers/sellerController.js";
import authSeller from "../middlewares/authSeller.js";

const sellerRouter = express.Router();

sellerRouter.post("/login", sellerLogin);
sellerRouter.get("/is-auth", isSellerAuth);
sellerRouter.get("/logout", sellerLogin);


export default sellerRouter;
