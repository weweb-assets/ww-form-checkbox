<template>
    <div class="elem-checkbox">
        <div class="checkbox">
            <input type="checkbox" :name="wwObject.content.data.config.name" :required="wwObject.content.data.config.required" />
        </div>
        <div class="checkbox-text">
            <wwObject :ww-object="wwObject.content.data.wwObject"></wwObject>
        </div>
    </div>
</template>

<script>
/* wwManager:start */
import wwCheckboxPopupConfig from './popup/wwCheckboxPopupConfig.vue'

wwLib.wwPopups.addPopup('wwCheckboxPopupConfig', wwCheckboxPopupConfig)

wwLib.wwPopups.addStory('WWFORM_CHECKBOX_CONFIG', {
    title: {
        en: 'Checkbox Configuration',
        fr: 'Configuration de la case à cochée'
    },
    type: 'wwCheckboxPopupConfig',
    buttons: {
        OK: {
            text: {
                en: 'Ok',
                fr: 'Valider'
            },
            next: false
        }
    }
})

wwLib.wwPopups.addStory('WWFORM_CHECKBOX_OPTIONS', {
    title: {
        en: 'Edit Checkbox',
        fr: 'Editer la case à cochée'
    },
    type: 'wwPopupEditWwObject',
    buttons: null,
    storyData: {
        list: {
            CHECKBOX_CONFIG: {
                separator: {
                    en: 'Configuration',
                    fr: 'Configuration'
                },
                title: {
                    en: 'Change Checkbox configuration',
                    fr: 'Changer la configuration de la case à cochée'
                },
                desc: {
                    en: '',
                    fr: ''
                },
                icon: 'wwi wwi-config',
                shortcut: 'c',
                next: 'WWFORM_CHECKBOX_CONFIG'
            }
        }
    }
})
/* wwManager:end */

export default {
    name: "ww-form-checkbox",
    props: {
        wwObjectCtrl: Object,
    },
    data() {
        return {
            wwLang: wwLib.wwLang
        }
    },
    computed: {
        wwObject() {
            return this.wwObjectCtrl.get();
        }
    },
    methods: {
        /* wwManager:start */
        async options() {
            let copyObj = JSON.parse(JSON.stringify(this.wwObject)) // to clean
            copyObj.uniqueId += 1
            let options = {
                firstPage: 'WWFORM_CHECKBOX_OPTIONS',
                data: {
                    wwObject: copyObj,
                }
            }
            try {
                const result = await wwLib.wwPopups.open(options);
                wwLib.wwObjectHover.setLock(this);
                /*=============================================m_ÔÔ_m=============================================\
                  CHECKBOX CONFIG
                \================================================================================================*/
                this.wwObject.content.data.config = this.wwObject.content.data.config || {};
                if (typeof (result.checkboxConfig) != 'undefined') {
                    if (typeof (result.checkboxConfig.required) != 'undefined') {
                        this.wwObject.content.data.config.required = result.checkboxConfig.required;
                    }
                    if (typeof (result.checkboxConfig.name) != 'undefined') {
                        this.wwObject.content.data.config.name = result.checkboxConfig.name;
                    }
                    this.wwObjectCtrl.update(this.wwObject)
                }
                this.wwObjectCtrl.globalEdit(result);
            } catch (err) {
                wwLib.wwLog.error('ERROR', err)
            }
            wwLib.wwObjectHover.removeLock();
        }
        /* wwManager:end */
    },
    mounted() {
        this.wwObject.content.data = this.wwObject.content.data || {}
        this.wwObject.content.data.config = this.wwObject.content.data.config || {}
        this.wwObject.content.data.wwObject = this.wwObject.content.data.wwObject || wwLib.wwObject.getDefault({ type: 'ww-text' })

        this.wwObjectCtrl.update(this.wwObject)
        this.$emit('ww-loaded', this);
    }
};
</script>

<style lang="scss" scoped>
.elem-checkbox {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    padding: 5px 0;
    .checkbox {
        outline: none;
        margin-right: 10px;
    }
    .checkbox-text {
        width: 100%;
    }
}
</style>