import { shallowMount } from "@vue/test-utils";
import Navigation from "@/components/Navigation.vue";

describe("Navigation.vue", () => {
    it("is a Vue instance", () => {
        const wrapper = shallowMount(Navigation);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});