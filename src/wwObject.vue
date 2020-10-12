<template>
    <div class="ww-form-checkbox">
        <input
            class="checkbox"
            :class="{ 'ww-editing': isEditing }"
            type="checkbox"
            :name="content.config.name"
            :required="content.config.required"
        />
        <wwObject class="checkbox-text" v-bind="content.wwObject"></wwObject>
    </div>
</template>

<script>
/* wwEditor:start */
import openPopup from './popups';
/* wwEditor:end */

export default {
    name: '__COMPONENT_NAME__',
    props: {
        content: Object,
        /* wwEditor:start */
        wwEditorState: Object,
        /* wwEditor:end */
    },
    wwDefaultContent: {
        config: {
            name: 'name',
            required: false,
        },
        wwObject: { isWwObject: true, type: 'ww-text' },
    },
    computed: {
        isEditing() {
            return this.wwEditorState.editMode === wwLib.wwSectionHelper.EDIT_MODES.CONTENT;
        },
    },
    /* wwEditor:start */
    methods: {
        async setOptions() {
            const result = await openPopup(this.content);
            if (result) this.$emit('update', result);
        },
    },
    /* wwEditor:end */
};
</script>

<style lang="scss" scoped>
.ww-form-checkbox {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    padding: 5px 0;
    .checkbox {
        outline: none;
        margin-right: 10px;
        /* wwEditor:start */
        &.ww-editing {
            pointer-events: none;
        }
        /* wwEditor:end */
    }
    .checkbox-text {
        width: 100%;
    }
}
</style>
