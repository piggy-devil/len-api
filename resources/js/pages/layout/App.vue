<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
export default {
    setup() {
        const defaultLayout = ref("default");
        const { currentRoute } = useRouter();
        const layout = computed(
            () => `${currentRoute.value.meta.layout || defaultLayout.value}-layout`
        );

        return {
            defaultLayout,
            currentRoute,
            layout,
        };
    },
};
</script>
