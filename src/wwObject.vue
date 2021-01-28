<template>
    <div class="ww-form-checkbox">
        <input
            :id="content.globalSettings.name"
            v-if="content.globalSettings"
            class="ww-form-checkbox__elem"
            :class="{ editing: isEditing }"
            type="checkbox"
            :name="content.globalSettings.name"
            :required="content.globalSettings.required"
        />
        <component :is="isEditing ? 'div' : 'label'" :for="this.content.globalSettings.name">
            <wwObject v-bind="content.wwObject"></wwObject>
        </component>
    </div>
</template>

<script>
export default {
    props: {
        content: Object,
        /* wwEditor:start */
        wwEditorState: Object,
        /* wwEditor:end */
    },
    wwDefaultContent: {
        globalSettings: {
            name: '',
            required: false,
        },
        wwObject: { isWwObject: true, type: 'ww-text' },
    },
    computed: {
        isEditing() {
            /* wwEditor:start */
            return this.wwEditorState.editMode === wwLib.wwSectionHelper.EDIT_MODES.CONTENT;
            /* wwEditor:end */
            // eslint-disable-next-line no-unreachable
            return false;
        },
    },
};
</script>

<style lang="scss" scoped>
.ww-form-checkbox {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    padding: var(--ww-spacing-01) 0;
    &__elem {
        outline: none;
        margin-right: var(--ww-spacing-02);
        /* wwEditor:start */
        &.editing {
            pointer-events: none;
        }
        /* wwEditor:end */
    }
}
</style>
