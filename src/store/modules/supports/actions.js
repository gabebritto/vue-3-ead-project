import SupportService from "@/services/support.service"

const actions = {
    getSupportsWithLessonId ({commit}, lessonId) {
        return SupportService.getSupportsByLesson(lessonId)
                                .then(supports => commit('SET_SUPPORTS', supports))
    }
}
export default actions