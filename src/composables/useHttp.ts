import { ref } from "vue";

function useHttp<T>() {
    const data = ref<T | null>(null)
    const status = ref<number | null>(null)
    const isError = ref<boolean>(false)
    const isLoading = ref<boolean>(false)
    const isSuccess = ref<boolean>(false)
    const error = ref<any | null>(null)

    const execute = async (url: string, options?: RequestInit) => {
        isLoading.value = true
        isError.value = false
        isSuccess.value = false
        error.value = null
        data.value = null

        try {
            const response = await fetch(url, options)
            status.value = response.status

            if (!response.ok) {
                isError.value = true
                error.value = {
                    message: `HTTP error! status: ${response.status}`,
                    status: response.status
                }
                return
            }
            data.value = await response.json()
            isSuccess.value = true
        } catch (err) {
            isError.value = true
            error.value = err
        } finally {
            isLoading.value = false
        }
    }
    
    return {
        data,
        status,
        isLoading,
        isSuccess,
        error,
        execute
    }
}