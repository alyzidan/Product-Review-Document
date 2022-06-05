<template>
  <page-layout>
    <b-col class="m-auto border px-lg-4 px-xs-2 py-3" id="form-container">
      <b-form class="w-100" @submit.prevent="handleSubmit">
        <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="2">
          <b-col class="my-5 px-4">
            <FormField
              name="Card Holder Name"
              type="text"
              label="Name"
              :validationMessage="cardNameValidationsMessages"
              :inputClasses="cardNameValidations"
              v-model="name"
              required
            >
            </FormField>
          </b-col>
          <b-col class="my-5 px-4">
            <FormField
              name="Expiry Date"
              type="date"
              label="Expiry Date"
              :min="getTommrow"
              :validationMessage="cardExpiryValidationsMessages"
              :inputClasses="cardExpirydateClasses"
              v-model="date"
              required
            >
            </FormField>
          </b-col>
        </b-row>
        <b-row cols="1">
          <b-col class="my-5 px-4">
            <CreditCard
              v-model="creditcard"
              name="Card number"
              type="text"
              :inputClasses="CreditCardClasses"
              :card-type="textCreditCard"
              label="Name"
            >
            </CreditCard>
          </b-col>
        </b-row>
        <b-row class="mt-4 px-3" cols="1" cols-sm="1" cols-md="1" cols-lg="1">
          <b-button :disabled="!validForm" type="submit" variant="success">
            Submit
            <b-spinner v-if="loading" small label="Small Spinner"></b-spinner>
          </b-button>
        </b-row>
      </b-form>
    </b-col>
  </page-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageLayout from "@/views/layouts/PageLayout.vue";
import FormField from "@/components/forms/FormField.vue";
import CreditCard from "@/components/forms/CreditCard.vue";
import BillingData from "@/models/component-models/forms/BillingData";
import moment from "moment";
import BillingStoreModule from "@/store/modules/billing";

@Component({
  components: {
    PageLayout,
    FormField,
    CreditCard,
  },
})
export default class Billing extends Vue {
  private readonly name = "";
  private readonly date = "";
  private readonly creditcard = "";
  private loading = false;

  get textCreditCard(): string {
    const VisaRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const MastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    if (VisaRegex.test(this.creditcard)) {
      return "Visa";
    } else if (MastercardRegEx.test(this.creditcard)) {
      return "Master";
    } else {
      return "";
    }
  }

  get CreditCardClasses(): string {
    return this.textCreditCard === ""
      ? "form-control is-invalid"
      : "form-control is-valid";
  }

  get cardExpirydateClasses(): string {
    return this.cardExpirydateValidations
      ? "form-control is-valid"
      : "form-control is-invalid";
  }

  get nameState(): boolean {
    const cardName = /^(?!.{30,})([a-zA-Z]+\s+[a-zA-Z]+ ?)$/;
    return cardName.test(this.name) ? true : false;
  }

  get cardNameValidations(): string {
    return this.nameState ? "form-control is-valid" : "form-control is-invalid";
  }

  get cardNameValidationsMessages(): string {
    return this.nameState ? "Success" : "Please provide valid card anme";
  }

  get cardExpirydateValidations(): boolean {
    const maxDate = moment().add(7, "years");
    const selectedDate = moment(this.date);
    return selectedDate < maxDate && selectedDate > moment() ? true : false;
  }

  get cardExpiryValidationsMessages(): string {
    return this.cardExpirydateValidations
      ? "Success"
      : "Please provide valid card expiry Date";
  }

  get getTommrow(): string {
    const tomorrow = moment().add(1, "days");
    return tomorrow.format("YYYY-MM-DD");
  }

  get validForm(): boolean {
    return this.cardExpirydateValidations &&
      this.nameState &&
      this.textCreditCard
      ? true
      : false;
  }

  private async handleSubmit(evt: Event): Promise<void> {
    this.loading = true;
    if (!this.validForm) {
      this.loading = false;
      return;
    }
    try {
      evt.preventDefault();
      const credentials = new BillingData({
        name: this.name,
        date: this.date,
        creditcard: this.creditcard,
      });
      BillingStoreModule.initBilling(credentials).catch((error) =>
        console.log("ERRRRR", error)
      );
    } catch (err) {
      debugger;
      console.log("ERRRR", err);
    }
    this.loading = false;
  }
}
</script>
<style lang="scss">
#form-container {
  width: 60%;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
}
</style>
