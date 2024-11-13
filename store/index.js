
export const state = () => {
  return {
    mainPageLoader: true,
  }
}
export const mutations = {
    SetmainPageLoader (state, payload){
      state.mainPageLoader = payload
    }
}
