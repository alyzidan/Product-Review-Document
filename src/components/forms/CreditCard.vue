<template>
    <b-col>
        <label :for="name" class="form-label">{{name}}</label>
        <div class="input-group has-validation">
            <span class="input-group-text">
                <span v-if="cardType === 'Visa'">
                    <i class="fa fa-cc-visa"></i>
                </span>
                <span v-if="cardType === 'Master'">
                    <i class="fa fa-cc-mastercard"></i>
                </span>
                <span v-if="cardType === ''">
                    <i class="fa fa-credit-card"></i>
                </span>
            </span>
            <input
                    :type="type"
                    class="form-control"
                    :id="name"
                    @input="handleInput"
                    :name="name"
                    :class="inputClasses"
                    :placeholder="name">
            <div class="invalid-tooltip mt-2">
                Please insert valid Credit card Numbers
            </div>
            <div class="valid-tooltip mt-2">
                {{cardType === 'Visa' ? 'Visa':"Master"}}
            </div>
        </div>
    </b-col>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    @Component({
        model: {
            prop: 'value',
            event: 'input'
        }
    })
    export default class CreditCard extends Vue {
        @Prop({ type: [String] })
        private readonly value!: string

        @Prop({
            type: [Number, String],
            required: false,
            default:
                'form-controle'
        })

        private readonly inputClasses!: string
        @Prop({ type: [String] })
        private readonly name!: string

        @Prop({ type: [String], default: 'text' })
        private readonly type!: string

        @Prop({ type: [String], required: true })
        private readonly label!: string

        @Prop({ type: [Boolean], default: false })
        private readonly required!: boolean

        @Prop({ type: [String], default: '' })
        private readonly cardType!: string

        @Prop({ type: [String] })
        private readonly autocomplete!: string

        private handleInput({ target }: InputEvent): void {
            this.$emit('input', (target as HTMLInputElement).value)
        }
    }
</script>
