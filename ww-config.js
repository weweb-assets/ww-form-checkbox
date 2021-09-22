export default {
    editor: {
        label: { fr: 'Case à choser de formulaire', en: 'Form checkbox' },
    },
    properties: {
        name: {
            label: { en: 'Name', fr: 'fr' },
            type: 'Text',
            section: 'settings',
            options: { placeholder: 'Name' },
            defaultValue: '',
        },
        required: {
            label: { en: 'Required', fr: 'Requis' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: false,
        },
        wwObject: {
            hidden: true,
            defaultValue: { isWwObject: true, type: 'ww-text' },
        },
    },
};
