<template>
    <div class="ww-popup-config">
        <div class="content">
            <div class="elem">
                <wwManagerInput class="input" color="orange" v-model="result.config.name" label="Name"></wwManagerInput>
            </div>
            <div class="elem">
                <div class="title">Required</div>
                <wwManagerRadio class="radio" v-model="result.config.required"></wwManagerRadio>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'wwCheckboxPopupConfig',
    props: {
        options: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    data() {
        return {
            wwLang: wwLib.wwLang,
            content: this.options.data,
            result: {
                config: {
                    name: 'Name',
                    required: false,
                },
            },
        };
    },
    methods: {
        init() {
            this.result.config.required = this.content.config.required || false;
            this.result.config.name = this.content.config.name;
            this.options.result = this.result;
        },
    },
    created() {
        this.init();
    },
};
</script>

<style scoped lang="scss">
.ww-popup-config {
    .content {
        display: flex;
        padding: 20px;
        flex-wrap: wrap;
        overflow: auto;
        width: 100%;
        justify-content: center;
        font-family: 'Monserrat', sans-serif;
        .elem {
            margin: 10px 33%;
            width: 33%;
            .input {
                width: 100%;
            }
            .select {
                width: 33%;
            }
        }
        .title {
            color: #e02a4d;
            font-family: 'Monserrat', sans-serif;
            font-size: 1.2rem;
            text-transform: uppercase;
            font-weight: bold;
            margin-bottom: 10px;
        }
    }
}
</style>
