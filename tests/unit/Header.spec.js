import { shallowMount } from "@vue/test-utils";
import Header from "@/Header.vue";

describe("Header.vue", () => {
    it("is a Vue instance", () => {
        const wrapper = shallowMount(Header);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});