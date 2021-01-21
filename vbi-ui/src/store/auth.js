import create from 'zustand'
const authStore = create(set => ({
    token: false,
    setToken: (newToken) => set(() => ({
        token: newToken
    })),
}))

export default authStore;