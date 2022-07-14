import SupportService from "@/services/support.service"

const actions = {
    getSupportsWithLessonId ({commit}, lessonId) {
        return SupportService.getSupportsByLesson(lessonId)
                                .then(supports => commit('SET_SUPPORTS', supports))
    },

    createSupport ({commit}, params) {
        return SupportService.storeSupport(params)
                                .then(support => commit('ADD_NEW_SUPPORT', support))
    }
}
export default actions