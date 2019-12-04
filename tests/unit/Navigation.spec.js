import { shallowMount } from "@vue/test-utils";
import Navigation from "@/components/Navigation.vue";

describe("Navigation.vue", () => {

    it("is a Vue instance", () => {
        let wrapper = shallowMount(Navigation);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it("Contains Title,Logo,and liks", () => {
        let wrapper = shallowMount(Navigation);

        expect(
            wrapper.findAll('.logo').exists() &&
            wrapper.findAll('.title').exists() &&
            wrapper.findAll('.links-container').exists()
        ).toBeTruthy();

    });
});