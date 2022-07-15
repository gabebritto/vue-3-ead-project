import CourseService from "@/services/course.service"

const actions = {
    getCourses ({commit}) {
        return CourseService.getCourses().then(response => commit('ADD_MY_COURSES', response.data))
    },

    markLessonViewed ({commit, state}) {
        return CourseService.markLessonViewed(state.lessonPlayer.id)
                            .then(response => commit('ADD_NEW_VIEW_TO_LESSON', response.data))
    }
}
export default actions