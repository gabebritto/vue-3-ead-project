import CourseService from "@/services/course.service"

const actions = {
    getCourses ({commit}) {
        return CourseService.getCourses().then(response => commit('ADD_MY_COURSES', response.data))
    }
}
export default actions