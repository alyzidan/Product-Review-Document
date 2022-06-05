<template>
    <b-col>
        <label :for="name" class="form-label">{{name}}</label>
            <div class="input-group has-validation">
            <input
                :type="type"
                class="form-control"
                :id="name"
                :class="inputClasses"
                :name="name"
                :min="min"
                @input="handleInput"
            >
            <div class="invalid-tooltip mt-2">
                {{validationMessage}}
            </div>
<!--            <div class="valid-tooltip mt-2">-->
<!--                {{validationMessage}}-->
<!--            </div>-->
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
    export default class FormField extends Vue {
        @Prop({ type: [String] })
        private readonly value!: string

        @Prop({
            type: [Number, String],
            required: false,
            default:
                'form-control'
        })
        private readonly inputClasses!: string

        @Prop({ type: [String] })
        private readonly name!: string

        @Prop({ type: [String] })
        private readonly min!: string

        @Prop({ type: [String] })
        private readonly validationMessage!: string

        @Prop({ type: [String], default: 'text' })
        private readonly type!: string

        @Prop({ type: [String], required: true })
        private readonly label!: string

        @Prop({ type: [String] })
        private readonly autocomplete!: string

        private handleInput({ target }: InputEvent): void {
            this.$emit('input', (target as HTMLInputElement).value)
        }
    }
</script>
