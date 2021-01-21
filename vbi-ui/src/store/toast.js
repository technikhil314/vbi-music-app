import create from 'zustand'
const toastStore = create(set => ({
    showToast: false,
    component: null,
    variant: null,
    toggleToast: ({ toggleState, component, variant }) => set(state => {

        if (toggleState === true) {
            return {
                component: component,
                showToast: true,
                variant: variant
            }
        } else {
            return {
                component: null,
                showToast: false,
                variant: null
            }
        }
    }),
}))

export default toastStore;