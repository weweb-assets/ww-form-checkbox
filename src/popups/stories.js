import wwCheckboxPopupConfig from './wwCheckboxPopupConfig.vue';

wwLib.wwPopups.addPopup('wwCheckboxPopupConfig', wwCheckboxPopupConfig);

wwLib.wwPopups.addStory('WWFORM_CHECKBOX_CONFIG', {
    title: {
        en: 'Checkbox Configuration',
        fr: 'Configuration de la case à cochée',
    },
    type: 'wwCheckboxPopupConfig',
    buttons: {
        OK: {
            text: {
                en: 'Ok',
                fr: 'Valider',
            },
            next: false,
        },
    },
});
