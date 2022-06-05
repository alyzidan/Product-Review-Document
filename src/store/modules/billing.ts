import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";
import BillingData from "@/models/component-models/forms/BillingData";
import httpClient from "@/config/HttpClient";
import store from "@/store";

export interface BillingState {
  fetchingData: boolean;
  BillingData: Readonly<BillingData>;
}

@Module({
  namespaced: true,
  dynamic: true,
  name: "Billing",
  store,
})
class BillingStoreModule extends VuexModule implements BillingState {
  BillingData: Readonly<BillingData> = new BillingData({});
  fetchingData = false;

  @Mutation
  setCurrentUser(payload: Readonly<BillingData>): void {
    this.BillingData = payload;
  }

  @Mutation
  setFetching(fetching: boolean) {
    this.fetchingData = fetching;
  }

  @Action
  async initBilling(payload: BillingData) {
    try {
      this.context.commit("setFetching", true);
      const res = await httpClient.post("/order", { ...payload });
      console.log(res);
      this.context.commit("setFetching", false);
    } catch (e) {
      console.log(e);
      this.context.commit("setFetching", false);
    }
  }
}

export default getModule(BillingStoreModule);
