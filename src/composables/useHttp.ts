import { ref } from "vue";

function useHttp<T>() {
    const data = ref<T | null>(null)
    const status = ref<number | null>(null)
    const isError = ref<boolean>(false)
    const isLoading = ref<boolean>(false)
    const isSuccess = ref<boolean>(false)
    const error = ref<any | null>(null)

    const execuite = async (url: string, options?: RequestInit) => {
    
    return {
        data,
        status,
        isLoading,
        isSuccess,
        error
    }
}